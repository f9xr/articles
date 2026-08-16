#!/usr/bin/env node
// tools/generate-featured-image.mjs
//
// Generates a featured image for an F9XR article and saves it as a self-hosted
// 1200x630 WEBP in /assets, ready for the post front-matter.
//
// Providers:
//   - template   (default, OFFLINE, no key) -> branded card (title, logo chip, map pin) -> WEBP
//   - pollinations (FREE, no key)           -> image.pollinations.ai
//   - openai     (OPENAI_API_KEY)           -> gpt-image-1
//   - gemini     (GEMINI_API_KEY)           -> gemini-3.1-flash-image (needs billing)
//
// Usage:
//   npm install                       (first time only, inside tools/)
//   node tools/generate-featured-image.mjs --prompt "Article Title" --out assets/slug.webp
//   node tools/generate-featured-image.mjs --provider pollinations --prompt "photo of..." --out assets/slug.webp
//   node tools/generate-featured-image.mjs --provider gemini --prompt "photo of..." --out assets/slug.webp
//   node tools/generate-featured-image.mjs --self-test
//
// The script prints the exact front-matter lines (image, image_width,
// image_height) for the generated asset.

import { mkdirSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const QUALITY = 85;
const GEMINI_IMAGE_MODEL = process.env.GEMINI_IMAGE_MODEL || 'gemini-3.1-flash-image';

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (!argv[i].startsWith('--')) continue;
    const key = argv[i].slice(2);
    const next = argv[i + 1];
    if (next && !next.startsWith('--')) {
      args[key] = next;
      i++;
    } else {
      args[key] = 'true';
    }
  }
  return args;
}

function fail(msg) {
  throw new Error(msg);
}

function detectProvider(preferred) {
  if (preferred && !['template', 'pollinations', 'openai', 'gemini'].includes(preferred)) {
    fail(`Unknown provider "${preferred}". Choose template, pollinations, openai, or gemini.`);
  }
  if (preferred) return preferred;
  return 'template';
}

function providerNeedsKey(provider) {
  if (provider === 'openai' && !process.env.OPENAI_API_KEY) {
    fail('OpenAI provider needs OPENAI_API_KEY, e.g.: $env:OPENAI_API_KEY="..."');
  }
  if (provider === 'gemini' && !process.env.GEMINI_API_KEY) {
    fail('Gemini provider needs GEMINI_API_KEY, e.g.: $env:GEMINI_API_KEY="..."');
  }
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wrapWords(text, maxChars) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = (cur + ' ' + w).trim();
    }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 3);
}

function generateTemplate(title) {
  const lines = wrapWords(title, 26);
  const textHeight = 72;
  const firstBaseline = 330;
  const texts = lines
    .map(
      (line, i) =>
        `<text x="70" y="${firstBaseline + i * textHeight}" font-family="Arial, Helvetica, sans-serif" font-size="60" font-weight="bold" fill="url(#titleGrad)" letter-spacing="0.5">${escapeXml(line)}</text>`
    )
    .join('\n');
  const lastBaseline = firstBaseline + (lines.length - 1) * textHeight;
  const underlineY = lastBaseline + 22;
  const svg =
    `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">` +
    `<defs>` +
    `<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="#0a0f1c"/><stop offset="0.5" stop-color="#101a30"/><stop offset="1" stop-color="#16233d"/>` +
    `</linearGradient>` +
    `<linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">` +
    `<stop offset="0" stop-color="#1d4ed8"/><stop offset="0.5" stop-color="#3b82f6"/><stop offset="1" stop-color="#7dd3fc"/>` +
    `</linearGradient>` +
    `<linearGradient id="titleGrad" x1="0" y1="0" x2="1" y2="0">` +
    `<stop offset="0" stop-color="#ffffff"/><stop offset="0.7" stop-color="#dbeafe"/><stop offset="1" stop-color="#93c5fd"/>` +
    `</linearGradient>` +
    `<linearGradient id="pinFill" x1="0" y1="0" x2="0" y2="1">` +
    `<stop offset="0" stop-color="#60a5fa"/><stop offset="1" stop-color="#1d4ed8"/>` +
    `</linearGradient>` +
    `<radialGradient id="glowA" cx="0.5" cy="0.5" r="0.5">` +
    `<stop offset="0" stop-color="#3b82f6" stop-opacity="0.35"/><stop offset="1" stop-color="#3b82f6" stop-opacity="0"/>` +
    `</radialGradient>` +
    `<radialGradient id="glowB" cx="0.5" cy="0.5" r="0.5">` +
    `<stop offset="0" stop-color="#60a5fa" stop-opacity="0.22"/><stop offset="1" stop-color="#60a5fa" stop-opacity="0"/>` +
    `</radialGradient>` +
    `<pattern id="dots" width="34" height="34" patternUnits="userSpaceOnUse">` +
    `<circle cx="2" cy="2" r="1.6" fill="#2b3a5e" opacity="0.55"/>` +
    `</pattern>` +
    `</defs>` +
    `<rect width="1200" height="630" fill="url(#bg)"/>` +
    `<rect width="1200" height="630" fill="url(#dots)"/>` +
    `<rect width="1200" height="10" fill="url(#accent)"/>` +
    `<rect y="10" width="1200" height="5" fill="#3b82f6" opacity="0.3"/>` +
    `<circle cx="1010" cy="385" r="360" fill="url(#glowA)"/>` +
    `<circle cx="110" cy="610" r="310" fill="url(#glowB)"/>` +
    `<circle cx="1090" cy="110" r="230" fill="url(#glowB)" opacity="0.7"/>` +
    `<path d="M780 630 L1200 250 L1200 630 Z" fill="#ffffff" opacity="0.045"/>` +
    `<text x="1150" y="608" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="220" font-weight="900" letter-spacing="-8" fill="#ffffff" opacity="0.045">F9XR</text>` +
    `<line x1="60" y1="150" x2="1140" y2="150" stroke="#2a3a5c" stroke-width="1.5" opacity="0.6"/>` +
    `<circle cx="985" cy="400" r="150" fill="url(#glowA)"/>` +
    `<circle cx="985" cy="400" r="94" fill="none" stroke="#3b82f6" stroke-width="1.5" opacity="0.35"/>` +
    `<circle cx="835" cy="300" r="5" fill="#7dd3fc" opacity="0.7"/>` +
    `<circle cx="1130" cy="470" r="5" fill="#7dd3fc" opacity="0.7"/>` +
    `<circle cx="1090" cy="300" r="3.5" fill="#3b82f6" opacity="0.8"/>` +
    `<path d="M985 225 c-92 0 -163 71 -163 163 c0 110 163 255 163 255 c0 0 163 -145 163 -255 c0 -92 -71 -163 -163 -163 z" fill="url(#pinFill)"/>` +
    `<ellipse cx="932" cy="292" rx="34" ry="18" fill="#ffffff" opacity="0.2" transform="rotate(-35 932 292)"/>` +
    `<circle cx="985" cy="385" r="56" fill="#0b1120"/>` +
    `<circle cx="985" cy="385" r="28" fill="url(#accent)"/>` +
    texts +
    `<rect x="74" y="${underlineY}" width="170" height="8" rx="4" fill="url(#accent)"/>` +
    `<circle cx="${74 + 170}" cy="${underlineY + 4}" r="10" fill="#60a5fa" opacity="0.5"/>` +
    `<text x="156" y="92" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="#7dd3fc" letter-spacing="6">F9XR ARTICLES</text>` +
    `<line x1="70" y1="556" x2="236" y2="556" stroke="#2a3a5c" stroke-width="1.5"/>` +
    `<text x="70" y="590" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="600" fill="#64748b" letter-spacing="3">SEO &#183; WEB DEVELOPMENT &#183; DIGITAL PRESENCE</text>` +
    `</svg>`;
  return Buffer.from(svg);
}

async function buildLogoChip() {
  const logoPath = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'logo.webp');
  try {
    statSync(logoPath);
  } catch {
    return [];
  }
  const size = 72;
  const left = 60;
  const top = 48;
  const logo = await sharp(logoPath).resize(size, size, { fit: 'cover' }).png().toBuffer();
  const maskSvg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><rect width="${size}" height="${size}" rx="18" fill="#fff"/></svg>`;
  const mask = await sharp(Buffer.from(maskSvg)).png().toBuffer();
  const rounded = await sharp(logo).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
  const borderSvg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="${size - 2}" height="${size - 2}" rx="17" fill="none" stroke="#3b82f6" stroke-width="2"/></svg>`;
  const border = await sharp(Buffer.from(borderSvg)).png().toBuffer();
  return [
    { input: rounded, left, top },
    { input: border, left, top },
  ];
}

async function generateTemplateImage(title, outPath) {
  const base = await sharp(generateTemplate(title)).resize(WIDTH, HEIGHT, { fit: 'fill' }).png().toBuffer();
  const chip = await buildLogoChip();
  const pipeline = chip.length ? sharp(base).composite(chip) : sharp(base);
  await pipeline.webp({ quality: QUALITY }).toFile(outPath);
  const meta = await sharp(outPath).metadata();
  const kb = Math.max(1, Math.round(statSync(outPath).size / 1024));
  console.log(`WROTE ${outPath} (${meta.width}x${meta.height}, ${kb} KB)`);
}

async function generatePollinations(prompt) {
  const seed = Math.floor(Math.random() * 1_000_000);
  const model = process.env.POLLINATIONS_MODEL ? `&model=${encodeURIComponent(process.env.POLLINATIONS_MODEL)}` : '';
  const url =
    `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}` +
    `?width=1536&height=1024&nologo=true&seed=${seed}${model}`;
  const res = await fetch(url, { headers: { Accept: 'image/*' } });
  if (!res.ok) fail(`Pollinations API error ${res.status}: ${(await res.text()).slice(0, 400)}`);
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.startsWith('image/')) {
    fail(`Pollinations did not return an image (content-type: ${contentType}). The free service may be busy; retry in a moment or use --provider gemini/openai.`);
  }
  return Buffer.from(await res.arrayBuffer());
}

async function generateOpenAI(prompt) {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({ model: 'gpt-image-1', prompt, n: 1, size: '1536x1024' }),
  });
  if (!res.ok) fail(`OpenAI API error ${res.status}: ${(await res.text()).slice(0, 400)}`);
  const data = await res.json();
  const item = data.data && data.data[0];
  if (!item) fail('OpenAI returned no image data.');
  if (item.b64_json) return Buffer.from(item.b64_json, 'base64');
  if (item.url) {
    const img = await fetch(item.url);
    if (!img.ok) fail(`Failed to download generated image (HTTP ${img.status}).`);
    return Buffer.from(await img.arrayBuffer());
  }
  fail('OpenAI response had neither b64_json nor url.');
}

async function generateGemini(prompt) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_IMAGE_MODEL}:generateContent`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ['IMAGE'] },
      }),
    }
  );
  if (!res.ok) {
    const errText = await res.text();
    if (res.status === 429) {
      fail(
        `Gemini image generation is not available on the free tier (HTTP 429, quota limit 0).\n` +
          `  Enable billing on the project at https://aistudio.google.com (image models are paid),\n` +
          `  or set OPENAI_API_KEY to use OpenAI gpt-image-1 instead.\n` +
          `  Detail: ${errText.slice(0, 200)}`
      );
    }
    fail(`Gemini API error ${res.status}: ${errText.slice(0, 400)}`);
  }
  const data = await res.json();
  const parts = (data.candidates && data.candidates[0] && data.candidates[0].content.parts) || [];
  const imgPart = parts.find((p) => p.inlineData && p.inlineData.data);
  if (!imgPart) fail('Gemini returned no image data (check prompt policy or model availability).');
  return Buffer.from(imgPart.inlineData.data, 'base64');
}

async function convertToWebP(buffer, outPath) {
  let pipeline = sharp(buffer).resize(WIDTH, HEIGHT, { fit: 'cover', position: 'attention' });
  try {
    await pipeline.webp({ quality: QUALITY }).toFile(outPath);
  } catch {
    await sharp(buffer)
      .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
      .webp({ quality: QUALITY })
      .toFile(outPath);
  }
  const meta = await sharp(outPath).metadata();
  const kb = Math.max(1, Math.round(statSync(outPath).size / 1024));
  console.log(`WROTE ${outPath} (${meta.width}x${meta.height}, ${kb} KB)`);
}

function printFrontMatter(outPath) {
  console.log('\nADD TO POST FRONT-MATTER:');
  console.log(`image: "https://f9xr.github.io/articles/${outPath.replace(/\\/g, '/')}"`);
  console.log(`image_width: ${WIDTH}`);
  console.log(`image_height: ${HEIGHT}`);
}

function deleteWithRetry(path, attempts = 5) {
  for (let i = 0; i < attempts; i++) {
    try {
      rmSync(path, { force: true });
      return;
    } catch {
      if (i === attempts - 1) return;
      awaitDelay(120);
    }
  }
}

function awaitDelay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function selfTest() {
  const svg = Buffer.from(
    `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">` +
      `<rect width="1200" height="630" fill="#0a0a0a"/>` +
      `<rect width="1200" height="8" y="0" fill="#3b82f6"/>` +
      `<text x="60" y="320" font-family="Arial" font-size="40" fill="#f8f9fa">F9XR image pipeline self-test</text>` +
      `</svg>`
  );
  const out = resolve(tmpdir(), 'f9xr-self-test.webp');
  await convertToWebP(svg, out);
  deleteWithRetry(out);
  console.log('SELF-TEST OK');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args['self-test']) {
    await selfTest();
    return;
  }

  const prompt = args.prompt;
  const out = args.out;
  if (!prompt) fail('Missing --prompt. Usage: node tools/generate-featured-image.mjs --prompt "..." --out assets/slug.webp');
  if (!out) fail('Missing --out. Usage: node tools/generate-featured-image.mjs --prompt "..." --out assets/slug.webp');

  const provider = detectProvider(args.provider);
  providerNeedsKey(provider);
  console.log(`[generate-featured-image] Generating "${out}" via ${provider}...`);
  mkdirSync(dirname(resolve(out)), { recursive: true });
  if (provider === 'template') {
    await generateTemplateImage(prompt, out);
    printFrontMatter(out);
    return;
  }
  const buffer =
    provider === 'pollinations' ? await generatePollinations(prompt) :
    provider === 'openai' ? await generateOpenAI(prompt) :
    await generateGemini(prompt);
  await convertToWebP(buffer, out);
  printFrontMatter(out);
}

main().catch((err) => {
  console.error(`[generate-featured-image] ${err.message}`);
  process.exitCode = 1;
});
