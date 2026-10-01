#!/usr/bin/env node
/**
 * Regenerates css/override.min.css from css/override.css.
 *
 * Only override.min.css is served (override.css is listed in _config.yml's
 * `exclude`), so the minified file must always be rebuilt after editing the
 * source. Run `npm run css` in this directory after any change to override.css.
 *
 * Usage:
 *   node build-css.mjs          # write css/override.min.css
 *   node build-css.mjs --check  # exit 1 if the minified file is out of date
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import CleanCSS from 'clean-css';

const here = dirname(fileURLToPath(import.meta.url));
const repo = join(here, '..');
const SRC = join(repo, 'css', 'override.css');
const OUT = join(repo, 'css', 'override.min.css');
const BANNER = '/* F9XR Articles: dark theme. Generated from css/override.css by tools/build-css.mjs. Do not edit by hand. */\n';

const check = process.argv.includes('--check');

const source = await readFile(SRC, 'utf8');
const result = new CleanCSS({ level: 2, returnPromise: false }).minify(source);

if (result.errors.length) {
  console.error('Minification failed:');
  for (const e of result.errors) console.error('  ' + e);
  process.exit(1);
}
for (const w of result.warnings) console.warn('warning: ' + w);

const output = BANNER + result.styles.trim() + '\n';

if (check) {
  let current = '';
  try {
    current = await readFile(OUT, 'utf8');
  } catch {
    current = '';
  }
  if (current !== output) {
    console.error('css/override.min.css is out of date. Run: npm run css');
    process.exit(1);
  }
  console.log('css/override.min.css is up to date.');
} else {
  await writeFile(OUT, output, 'utf8');
  const pct = ((1 - output.length / source.length) * 100).toFixed(1);
  console.log(
    `css/override.min.css written: ${(source.length / 1024).toFixed(1)}kB -> ${(output.length / 1024).toFixed(1)}kB (${pct}% smaller)`
  );
}
