#!/usr/bin/env node
/**
 * Regenerates assets/icons/lucide-sprite.svg from a curated set of Lucide icons.
 *
 * The sprite is referenced by _includes/lucide.html and by the audio player.
 * Keeping the icon list explicit means the site ships only the glyphs it uses
 * instead of the full Lucide font or JavaScript bundle.
 *
 * Usage:
 *   node tools/fetch-lucide-icons.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, '..', 'assets', 'icons', 'lucide-sprite.svg');

const VERSION = '1.70.0';
const BASE = `https://cdn.jsdelivr.net/npm/lucide-static@${VERSION}/icons`;

const ICONS = [
  'archive',
  'arrow-left',
  'arrow-right',
  'ban',
  'book-open',
  'building-2',
  'calendar-check',
  'chart-line',
  'check',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'circle-help',
  'circle-play',
  'clock',
  'code',
  'compass',
  'copy',
  'download',
  'external-link',
  'file-text',
  'flag',
  'flame',
  'folder-open',
  'globe',
  'graduation-cap',
  'headphones',
  'heart-handshake',
  'house',
  'languages',
  'life-buoy',
  'lightbulb',
  'link',
  'list',
  'lock',
  'mail',
  'message-square',
  'newspaper',
  'pause',
  'play',
  'podcast',
  'rocket',
  'rotate-ccw',
  'rotate-cw',
  'scale',
  'scroll-text',
  'search',
  'share-2',
  'tags',
  'triangle-alert',
  'type',
  'user',
  'volume-1',
  'volume-2',
  'volume-x'
];

const responses = await Promise.all(
  ICONS.map(async (name) => {
    const url = `${BASE}/${name}.svg`;
    const response = await fetch(url, {
      headers: { 'user-agent': 'f9xr-articles-lucide-sync (+https://f9xr.org)' }
    });
    if (!response.ok) {
      throw new Error(`${name}: ${url} responded ${response.status}`);
    }
    const svg = await response.text();
    const match = /<svg[^>]*>([\s\S]*?)<\/svg>/.exec(svg);
    if (!match) throw new Error(`${name}: no <svg> found`);
    const inner = match[1]
      .replace(/\s*\n\s*/g, ' ')
      .replace(/>\s+</g, '><')
      .trim();
    return { name, inner };
  })
);

const symbols = responses.map(({ name, inner }) =>
  `  <symbol id="${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</symbol>`
);

const sprite = [
  `<!-- Lucide ${VERSION} | ISC | https://lucide.dev -->`,
  '<svg xmlns="http://www.w3.org/2000/svg">',
  ...symbols,
  '</svg>',
  ''
].join('\n');

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, sprite, 'utf8');
console.log(`assets/icons/lucide-sprite.svg written: ${ICONS.length} icons (Lucide ${VERSION}).`);
