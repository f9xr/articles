#!/usr/bin/env node
/**
 * Image pipeline for assets/post-images:
 *
 * 1. Recompresses oversized WEBP files (quality 78) so hero images stop
 *    dominating LCP on article pages. Only touches files above the size
 *    threshold, and keeps the original when the recompress isn't smaller.
 * 2. Generates a 640px-wide "<name>-640.webp" variant for every image. The
 *    post layout references these in the hero srcset, so phones download a
 *    small file instead of the full-width one.
 *
 * Sources are read fully into memory before processing: sharp keeps file
 * handles open, and on Windows writing back to the same path while libvips
 * holds it open fails with EPERM.
 *
 * Usage (from tools/):
 *   node optimize-images.mjs            # write changes
 *   node optimize-images.mjs --dry-run  # report only
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const REPO = join(import.meta.dirname, '..');
const IMG_DIR = join(REPO, 'assets', 'post-images');
const DRY = process.argv.includes('--dry-run');
const RECOMPRESS_ABOVE = 100 * 1024; // only recompress files larger than this
const RECOMPRESS_QUALITY = 78;
const VARIANT_WIDTH = 640;
const VARIANT_QUALITY = 75;

// Originals only: skip files that are already 640px variants (from a previous
// run), otherwise a re-run after a crash would nest variants (-640-640.webp).
const isVariant = (f) => /-640\.(webp|png|jpe?g)$/i.test(f) || /-640-640/i.test(f);
const files = (await readdir(IMG_DIR)).filter((f) => /\.(webp|png|jpe?g)$/i.test(f) && !isVariant(f));

/** writeFile with retry: Defender / OneDrive occasionally hold freshly
 *  created files under Documents\ for a moment. */
async function writeFileRetry(path, data) {
  for (let attempt = 1; ; attempt++) {
    try {
      await writeFile(path, data);
      return;
    } catch (err) {
      if (attempt >= 6) throw err;
      await new Promise((r) => setTimeout(r, attempt * 400));
    }
  }
}

let recompressed = 0;
let recompressBytes = 0;
let variants = 0;
let skipped = 0;

for (const file of files) {
  const src = join(IMG_DIR, file);
  const srcBuf = await readFile(src); // full read: no lingering handle on src
  const input = sharp(srcBuf);
  const meta = await input.metadata();
  const ext = extname(file).toLowerCase();
  const stem = basename(file, ext);

  // --- 640w srcset variant (written as WEBP regardless of source format) ---
  const variantName = `${stem}-640.webp`;
  const variantBuf = await input
    .clone()
    .resize({ width: Math.min(VARIANT_WIDTH, meta.width || VARIANT_WIDTH), withoutEnlargement: true })
    .webp({ quality: VARIANT_QUALITY })
    .toBuffer();
  if (!DRY) await writeFileRetry(join(IMG_DIR, variantName), variantBuf);
  variants++;
  if (DRY) console.log(`variant     ${variantName}: ${(variantBuf.length / 1024).toFixed(0)}kB`);

  // --- recompress oversized originals (WEBP only) ---
  if (ext === '.webp' && srcBuf.length > RECOMPRESS_ABOVE) {
    const outBuf = await sharp(srcBuf).webp({ quality: RECOMPRESS_QUALITY }).toBuffer();
    if (outBuf.length < srcBuf.length * 0.9) {
      const saved = srcBuf.length - outBuf.length;
      console.log(`recompress  ${file}: ${(srcBuf.length / 1024).toFixed(0)}kB -> ${(outBuf.length / 1024).toFixed(0)}kB`);
      if (!DRY) await writeFileRetry(src, outBuf);
      recompressed++;
      recompressBytes += saved;
    } else {
      skipped++;
      console.log(`skip        ${file}: recompress not smaller, kept original`);
    }
  }
}

console.log(
  `\n${DRY ? '[dry run] ' : ''}${variants} srcset variants written, ${recompressed} files recompressed (${(recompressBytes / 1024).toFixed(0)}kB saved), ${skipped} kept as-is.`
);
