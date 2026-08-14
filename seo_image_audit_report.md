# SEO Image Audit Report

**Audit Date:** August 14, 2026
**Auditor:** F9XR SEO Codebase Audit (manual, repository-wide, live-HTTP verified)
**Site:** F9XR Articles — `https://f9xr.github.io/articles`
**Project Type:** Jekyll blog on GitHub Pages
**Scope:** All images referenced or shipped by the site — `assets/`, post body `<img>` tags, hero images, author avatars, Open Graph images, favicons, feed enclosures, and structured data image fields. Every externally-hosted image URL was verified against the live site over HTTP.

> Companion report to `seo_audit_report.md` (general SEO). This report is the **image-specific** pillar audit.

---

## Executive Summary

The site has strong image hygiene fundamentals: explicit `width`/`height` on every `<img>` (no CLS), correct lazy-loading on below-the-fold images, an eager LCP hero (previous `loading="lazy"` hero issue is fixed), `max-image-preview:large` in robots meta, and a tiny 6 KB WebP logo. **However, this audit found 2 High and 5 Medium issues**, led by three posts serving a **broken image (HTTP 404)** and a **1.86 MB PNG** acting as the flagship post's LCP hero.

| Severity | Open |
|----------|------|
| High | 2 |
| Medium | 5 |
| Low | 5 |

---

## Image Asset Inventory (with live HTTP status)

### Self-hosted assets (`assets/`)

| File | Dimensions | Size | In use? | Live status |
|------|-----------|------|---------|-------------|
| `f9xr-team-solutions.png` | 1600×893 | **1,905 KB** | Hero, 07-27 post (LCP) | 200 (`image/png`) |
| `AHETASHAM.jpg` | 1580×2048 | **1,022 KB** | Avatar (rendered 64×64), byline + author page | deployed |
| `AI_Search.png` | 1379×884 | 271 KB | Inline, 5 posts | **broken on 3 posts** (see High 1) |
| `article-ranking-google.png` | 1505×870 | 222 KB | **Referenced nowhere** | **404** |
| `f9xr-dic.png` | 1339×820 | 116 KB | Hero, 07-29 post | 200 (`image/png`) |
| `ranking-on-google.PNG` | 1413×666 | 70 KB | **Referenced nowhere** | 200 (deployed but orphaned) |
| `logo.webp` / `logo.png` | — / 512×512 | 6 KB / 86 KB | Masthead, footer, schema, avatar default | 200 |

### External images (hosted on main site / Unsplash CDN)

| Image | Used by | Live status |
|-------|---------|-------------|
| `assets/og-image.webp` (default OG fallback) | `head.html`, `atom.xml`, `post.html`, blog-publisher skill | 200 (35.6 KB) |
| `assets/screenshots/F9XR_GoogleSearch.png` | 3 posts (08-04, 08-08, 08-14) | 200 (213 KB) |
| `assets/screenshots/seo-auditor-skill.webp` | 07-31 post | 200 (161 KB) |
| favicons + `site.webmanifest` | `head.html` | all 200 |
| Unsplash hero images (`photo-…`) | 10 posts | CDN (serves WebP via `auto=format`) |

---

## Priority Fix Matrix

| # | Severity | Finding | Location | Status |
|---|----------|---------|----------|--------|
| 1 | High | **Broken inline image (404):** 3 posts load `https://f9xr.github.io/assets/AI_Search.png`, which returns 404 — the file only exists at `/articles/assets/AI_Search.png` | `2026-07-31-…md:147`, `2026-08-07-…md:62`, `2026-08-14-…md:89` | ✅ **FIXED** |
| 2 | High | **1.86 MB PNG is the flagship post's LCP hero** — no WebP/AVIF, no srcset, no preload | `assets/f9xr-team-solutions.png`, `2026-07-27-…md:61` | ✅ **FIXED** (WebP 160.9 KB + 800w variant) |
| 3 | Medium | **1 MB JPEG served as a 64×64 avatar** (`AHETASHAM.jpg`) — no resize, no WebP | `_data/authors.yml:17`, `_layouts/post.html:317` | ✅ **FIXED** (WebP 5 KB) |
| 4 | Medium | **Same stock photo used as hero on 4 posts** (photo-1460925895917, 6 total usages) — Google Images dedupes; identical `og:image` on 4 posts | front matter of 07-31, 08-11, 08-13, 08-14; inline 08-07:45, 08-08:49 | Open |
| 5 | Medium | **Duplicate alt text** across repeated images (e.g., "AI search tools like ChatGPT and Perplexity…" ×5) | `_posts/*` img tags | Open |
| 6 | Medium | **No image sitemap** despite 30+ meaningful images (`sitemap.xml` has 0 `<image:image>` entries) | `sitemap.xml` (built) | Open |
| 7 | Medium | **No responsive images** — no `<picture>`/`srcset` anywhere; mobile downloads full-resolution files | `_layouts/post.html:119`, all post img tags | Partial (hero of 07-27 done) |
| 8 | Low | **Orphaned assets:** `article-ranking-google.png` (unreferenced, 404 live) and `ranking-on-google.PNG` (unreferenced, deployed) | `assets/` | Open |
| 9 | Low | **Filename SEO:** `AI_Search.png` (underscore), `AHETASHAM.jpg` (meaningless), `f9xr-dic.png` (ambiguous), `ranking-on-google.PNG` (uppercase ext) | `assets/` | Partial (new assets use descriptive names) |
| 10 | Low | **No hero preload / `fetchpriority`** — LCP image discovered late on slow networks | `_layouts/post.html:117-126` | Open |
| 11 | Low | **`og:image:type` missing for all 10 Unsplash heroes** (extension-less CDN URL); hero `og:image:alt` always falls back to title | `_includes/head.html:53-62`, `:81` | Open |
| 12 | Low | **Feed enclosures mislabeled** — `atom.xml` declares `type="image/webp"` for PNG/JPG images | `atom.xml:34` | Open |

### Fixed during this pass (August 14, 2026)

- **Finding 1 (High):** All three broken `AI_Search.png` URLs retargeted to the working path `/articles/assets/AI_Search.png` — later upgraded to the optimized WebP below.
- **Finding 2 (High):** `f9xr-team-solutions.png` (1,905 KB) → `f9xr-team-solutions.webp` (160.9 KB, q82) with an 800w responsive variant (`f9xr-team-solutions-800.webp`, 59.7 KB); front-matter hero, `og:image`, schema, and the in-content figure now reference the WebP via a `<picture>` element. **92% reduction** on the flagship LCP hero.
- **Finding 3 (Medium):** `AHETASHAM.jpg` (1,022 KB, 1580×2048) → `ahetasham-uddin.webp` (5 KB, 200×200 cover crop); `authors.yml`, byline, author page, and Person schema updated. **99.5% reduction**.
- **Bonus (Medium-perf):** `AI_Search.png` (271 KB, used 5×) → `ai-search-ai-tools.webp` (89.6 KB). All 5 posts updated. **67% reduction**.
- **Schema bug:** author-page JSON-LD emitted a doubled base path (`…/articles/articles/assets/…`) because `author-profile.html:162` chained `relative_url` + `absolute_url`. Fixed to a single `absolute_url`.
- All changes verified via clean `jekyll build`; built HTML contains no stale references to the old PNG/JPG paths.

> ⚠️ The new WebP files will resolve on the live site only after these changes are committed and pushed to GitHub Pages.

---

## Detailed Findings

### 1. Broken inline image — 3 posts serve a 404 (High)

Live HTTP check: `https://f9xr.github.io/assets/AI_Search.png` → **404**. The file exists only at `https://f9xr.github.io/articles/assets/AI_Search.png` (200). Three posts reference the dead URL:

- `2026-07-31-f9xr-seo-codebase-auditor-skill-guide.md:147`
- `2026-08-07-get-backlinks-2026-free-paid-ai-methods.md:62`
- `2026-08-14-steps-make-business-site-visible-to-ai.md:89`

Two other posts already use the correct path (`08-11:56`, `08-13:34`), proving this is a copy/paste regression.

**Fix:** change the three `src` values to the working path:
```html
<img src="https://f9xr.github.io/articles/assets/AI_Search.png" ... />
```
or better, make it build-aware: `src="{{ '/assets/AI_Search.png' | relative_url }}"`.

### 2. Flagship LCP hero is a 1.86 MB PNG (High)

`assets/f9xr-team-solutions.png` (1600×893, 1,905 KB) is the hero — and likely the LCP element — of the site's oldest, most-linked post (`2026-07-27-…md:61`). It is served at full resolution to every device with no WebP/AVIF variant, no `srcset`, and no preload. The same asset alone outweighs the entire HTML of most pages. Google's performance guidance treats oversized hero images as a direct LCP/CWV risk.

**Fix:** convert to WebP (target ≤150 KB at 1600px) and serve responsively:
```html
<picture>
  <source type="image/webp" srcset="{{ site.baseurl }}/assets/f9xr-team-solutions-1600.webp 1600w, {{ site.baseurl }}/assets/f9xr-team-solutions-800.webp 800w" sizes="(max-width: 800px) 100vw, 1600px">
  <img src="{{ site.baseurl }}/assets/f9xr-team-solutions.png" alt="…" width="1600" height="893" fetchpriority="high">
</picture>
```

### 3. 1 MB author avatar rendered at 64×64 (Medium)

`AHETASHAM.jpg` (1580×2048, 1,022 KB) is used only as a portrait — rendered at 64×64 in the post byline (`_layouts/post.html:317`) and on the author page. Serving a 1 MB image for a 64 px element wastes ~14× bandwidth per page view on every post by that author.

**Fix:** export a ~200px square WebP/AVIF (target ≤25 KB), e.g. `assets/authors/ahetasham-uddin.webp`, and update `_data/authors.yml:17`.

### 4. One stock photo is the hero of 4 posts (Medium)

`photo-1460925895917-afdab827c52f` is the identical `og:image` for **four** posts (07-31, 08-11, 08-13, 08-14) and appears inline in two more (08-07:45, 08-08:49) — **6 of 12 posts** show the same image. Google Images dedupes identical images; each post loses its own image-search identity, and the shared `og:image` weakens each post's social share distinctiveness.

**Fix:** assign each post a unique hero. At minimum, vary the Unsplash photo; ideally create one branded F9XR hero per post.

### 5. Duplicate alt text (Medium)

The same alt strings are reused verbatim across repeated images:

- "AI search tools like ChatGPT and Perplexity answering a business question" — **5×** (07-31, 08-07, 08-11, 08-13, 08-14)
- "F9XR Team appearing across Google search results" — **3×** (08-04, 08-08, 08-14)
- "Laptop showing search analytics and ranking performance graphs" — **2×** (08-07, 08-08)
- "Monitor displaying website analytics and performance dashboards" — **2×** (08-08, 08-14)

Google's image guidance calls for alt text that describes each image's content and context; repeated identical alt on the same file also dilutes image-indexing signal. Hero alt additionally defaults to `page.title` (`_layouts/post.html:119`), which describes the article, not the image.

**Fix:** rewrite each alt to be unique and context-specific. Prefer a descriptive `image_alt` in front matter; emit it in `head.html:81` (already supported) and in the hero (`_layouts/post.html:119`).

### 6. No image sitemap (Medium)

The built `sitemap.xml` contains 18 URL entries and **0 `<image:image>` elements**. The site ships 30+ meaningful images (heroes, screenshots, avatars) — well above the threshold where an image sitemap extension is recommended. This is how Google discovers image variants for Image search.

**Fix:** add `<image:image>` blocks for each post's hero. On GitHub Pages the simplest reliable route is to append an image-extension block to `sitemap.xml` after the `jekyll-sitemap` build, or maintain a small custom include in the build:
```xml
<url>
  <loc>https://f9xr.github.io/articles/2026/07/27/engineering-digital-growth-introduction-to-f9xr-team.html</loc>
  <image:image xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <image:loc>https://f9xr.github.io/articles/assets/f9xr-team-solutions.png</image:loc>
    <image:title>F9XR Team — Engineering Digital Growth solutions overview</image:title>
  </image:image>
</url>
```

### 7. No responsive images anywhere (Medium)

Every hero and inline image ships a single fixed resolution. Mobile and tablet users download the full 1600px / 1379px original even though the rendered width is ≤~900px. No `<picture>`, no `srcset`, no `sizes` exists in the codebase.

**Fix:** add `srcset` (WebP fallback via `<picture>`) to the hero in `_layouts/post.html:117-126` and to the repeated screenshots (`AI_Search.png`, `F9XR_GoogleSearch.png`). Full pattern in finding 2.

### 8. Orphaned assets (Low)

- `assets/article-ranking-google.png` (222 KB) — referenced nowhere in the repo and **404 on the live site**; dead weight in the repo.
- `assets/ranking-on-google.PNG` (70 KB) — referenced nowhere but deployed; consumes a crawl of a meaningless URL.

**Fix:** delete both, or (better) use one as the missing screenshot variant — they appear to be the actual "ranking on Google" screenshots the `F9XR_GoogleSearch.png` asset was meant to replace.

### 9. Filename SEO (Low)

Non-descriptive filenames reduce image-search relevance:
- `AI_Search.png` — underscore (use hyphens); generic; it is a branded AI-search screenshot → `ai-search-tools-chatgpt-perplexity.png`
- `AHETASHAM.jpg` — no semantic content → `ahetasham-uddin-portrait.webp`
- `f9xr-dic.png` — "dic" is ambiguous → `f9xr-free-business-directories-guide.png`
- `ranking-on-google.PNG` — uppercase extension (can confuse case-sensitive caches) → `ranking-on-google.png`

### 10. Hero not preloaded, no `fetchpriority` (Low)

The hero is eager (good — the prior `loading="lazy"` bug is gone), but there is no `<link rel="preload" as="image">` and no `fetchpriority="high"`. On slow connections the LCP image is discovered only after CSS/HTML parsing completes.

**Fix** in `_includes/head.html` (for post pages):
```html
{% if page.image %}
<link rel="preload" as="image" href="{{ page.image }}">
{% endif %}
```
and add `fetchpriority="high"` to the hero `<img>` in `_layouts/post.html:119`.

### 11. `og:image:type` missing on all Unsplash heroes (Low, carried from prior audit)

`_includes/head.html:53-62` derives `og:image:type` from the URL extension after stripping the query string. Unsplash URLs like `…photo-1460925895917-afdab827c52f?q=80&w=1200…` have no extension → no `og:image:type` is emitted for any of the 10 Unsplash heroes. Also `og:image:alt` (`head.html:81`) falls back to the page title instead of describing the image.

**Fix:** set `image_type: "image/jpeg"` (or `image_alt`) in each post's front matter and read it in `head.html`.

### 12. Feed enclosure MIME type wrong (Low, carried from prior audit)

`atom.xml:34` hardcodes `type="image/webp"` for every post's enclosure, but most images are PNG/JPG. Wrong MIME in feed enclosures can break feed readers and degrades the media signal.

**Fix:** emit the MIME from the same extension map used in `head.html`, or drop the enclosure `type`.

---

## What's Working Well (image pillar)

- **No CLS risk:** every `<img>` (hero, inline, avatar, logo, iframe posters) has explicit `width`/`height` matching the actual source dimensions.
- **Lazy-loading discipline:** below-the-fold images are `loading="lazy"`; the LCP hero is eager (the prior `loading="lazy"` hero regression is confirmed fixed in `_layouts/post.html:119`).
- **`max-image-preview:large`** emitted site-wide in the robots meta (`head.html:12`) — full-size image thumbnails in SERPs.
- **Efficient logo:** 6 KB WebP masthead/footer/avatar-default (`logo.webp`); 512×512 PNG fallback for schema.
- **CDN-optimized heroes:** 10 of 12 post heroes are served from Unsplash with `auto=format&fit=crop`, which delivers WebP/AVIF and 1200×630 crops for free.
- **Default OG image exists:** `og-image.webp` verified 200 (35.6 KB) on the live site — the fallback used by non-post pages is not broken.
- **Image credits** (`image_credit`) are consistently provided for all 10 Unsplash heroes — required by Unsplash's license and good for E-E-A-T.
- **Schema image present:** `BlogPosting` JSON-LD includes `image` on every post (`_layouts/post.html:425`).

---

## Recommended Fix Order

1. Fix the 3 broken `AI_Search.png` URLs (High — zero effort, live broken UX).
2. Compress + WebP-ify `f9xr-team-solutions.png` and `AHETASHAM.jpg` (High — biggest bandwidth/LCP win).
3. Give the 4 duplicate-hero posts unique images (Medium).
4. Add image sitemap + hero preload/fetchpriority (Medium).
5. Rewrite duplicated alt text; add `srcset`/`<picture>` to heroes and screenshots (Medium).
6. Clean up orphans, filenames, `og:image:type`, and feed MIME (Low).
