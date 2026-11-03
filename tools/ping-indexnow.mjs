#!/usr/bin/env node
// tools/ping-indexnow.mjs
//
// Notifies IndexNow supporting search engines (Bing, Yandex, Naver, Seznam,
// Yep) that one or more f9xr.org URLs are live. Google does not participate
// in IndexNow, so this is an extra discovery signal, not a ranking guarantee.
//
// The public key file lives at the repo root and is also served from:
//   https://f9xr.org/<key>.txt
//
// Usage:
//   node tools/ping-indexnow.mjs https://f9xr.org/articles/YYYY/MM/DD/slug.html
//   node tools/ping-indexnow.mjs --dry-run https://f9xr.org/articles/...
//
// Exit code 0 means IndexNow accepted the submission (HTTP 200 or 202).

import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HOST = 'f9xr.org';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const help = args.includes('--help') || args.includes('-h');
const urls = [...new Set(args.filter((arg) => !arg.startsWith('-')))].filter((arg) => {
  try {
    return new URL(arg).protocol === 'https:';
  } catch {
    return false;
  }
});

if (help) {
  console.log('Usage: node tools/ping-indexnow.mjs [--dry-run] <https URL> [https URL...]');
  process.exit(0);
}

if (urls.length === 0) {
  console.error('Usage: node tools/ping-indexnow.mjs [--dry-run] <https URL> [https URL...]');
  process.exit(1);
}

const invalidHost = urls.find((url) => new URL(url).hostname !== HOST);
if (invalidHost) {
  console.error(`Refusing to submit a URL outside ${HOST}: ${invalidHost}`);
  process.exit(1);
}

const keyFiles = readdirSync(ROOT).filter((name) => /^[a-f0-9]{8,128}\.txt$/i.test(name));
if (keyFiles.length !== 1) {
  console.error(`Expected exactly one IndexNow key file at the repo root, found ${keyFiles.length}.`);
  process.exit(1);
}

const key = readFileSync(join(ROOT, keyFiles[0]), 'utf8').trim();
if (!/^[a-f0-9]{8,128}$/i.test(key)) {
  console.error(`Invalid IndexNow key in ${keyFiles[0]}.`);
  process.exit(1);
}

const payload = {
  host: HOST,
  key,
  keyLocation: `https://${HOST}/${key}.txt`,
  urlList: urls,
};

if (dryRun) {
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

const request = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    signal: AbortSignal.timeout(30000),
  });
  return response;
};

try {
  const keyResponse = await request(payload.keyLocation);
  const liveKey = (await keyResponse.text()).trim();
  if (!keyResponse.ok || liveKey !== key) {
    console.error(`Key check failed at ${payload.keyLocation}: HTTP ${keyResponse.status}`);
    process.exit(1);
  }

  const response = await request(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  const body = (await response.text()).trim();

  console.log(`IndexNow HTTP ${response.status} ${response.statusText}`);
  console.log(`Submitted ${urls.length} URL${urls.length === 1 ? '' : 's'} for ${HOST}`);
  if (body) console.log(body);
  if (response.status === 429 && response.headers.get('retry-after')) {
    console.log(`Retry after: ${response.headers.get('retry-after')}`);
  }
  if (!response.ok && response.status !== 202) process.exitCode = 1;
} catch (error) {
  console.error(`IndexNow request failed: ${error.message}`);
  process.exitCode = 1;
}
