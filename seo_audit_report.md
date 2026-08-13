# SEO Codebase Audit Report

**Audit Date:** August 14, 2026
**Auditor:** F9XR SEO Codebase Audit (manual, repository-wide)
**Site:** F9XR Articles — `https://f9xr.github.io/articles`
**Project Type:** Jekyll blog / article hub on GitHub Pages for a digital architecture agency
**Scope:** All 12 posts, layouts, includes, AI-visibility files (llms.txt, ai.txt, feeds), standalone pages, config, and site assets.

> This report supersedes the July 28, 2026 audit (which reported all 18 findings resolved).
> It re-verifies every prior fix against the current codebase and adds findings for the
> content and files added since then.

---

## Executive Summary

The technical SEO foundation is strong and has improved since the July audit: structured data is comprehensive, feeds and AI-visibility files exist, E-E-A-T signals (Person authors, trust pages) are in place, and performance patterns are sound. However, this audit found **1 High** and **6 Medium** issues, including a homepage `<h1>` regression, a `dateModified` schema bug, and stale AI-visibility files on a site that explicitly targets AEO/GEO.

| Severity | Open | Closed |
|----------|------|--------|
| Critical | 0 | 4 |
| High | 1 | 5 |
| Medium | 6 | 3 |
| Low | 8 | 3 |

---

## Priority Fix Matrix

| # | Severity | Pillar | Finding | Location |
|---|----------|--------|---------|----------|
| 1 | High | On-Page | Homepage has **no `<h1>`** — `title_hidden: true` suppresses it and no manual H1 exists | `index.md`, `_layouts/page.html:5-11` |
| 2 | Medium | Blog SEO | `BlogPosting` JSON-LD uses `page.last_modified_at` (never set) instead of `page.dateModified` — freshness signal broken on all posts | `_layouts/post.html:431`, `atom.xml:23` |
| 3 | Medium | E-E-A-T / Content | **Stale AI files**: `llms.txt` lists 4 of 12 posts; `llms-full.txt` contains 1 of 12 | `llms.txt`, `llms-full.txt` |
| 4 | Medium | Technical | Two orphaned, indexable standalone pages: `bharat-by-day.html` (off-brand, no meta, noindex, duplicates `f9xr.github.io/BharatByDay/`) and `f9xr-content-plan-mindmap.html` (planning tool, no meta, `user-scalable=no`) | `bharat-by-day.html`, `f9xr-content-plan-mindmap.html` |
| 5 | Medium | E-E-A-T | Hardcoded homepage metrics (`98/100`, `12.4K/mo`, `48 indexed articles`, `8.2 min`) contradict actual scale (12 posts) and are unverifiable | `index.md:143-168` |
| 6 | Medium | Performance | Hero (LCP) image is `loading="lazy"` — delays LCP | `_layouts/post.html:125` |
| 7 | Medium | Blog SEO | `dateModified` front matter missing on 10 of 12 posts | all posts except 07-27, 07-29 |
| 8 | Low | Content | Journal boilerplate in "Copyright" / "Disclaimer" boxes ("this journal", "the editors and the reviewers") — wrong tone for a blog, weakens credibility | `_layouts/post.html:283-296` |
| 9 | Low | Content | Latent junk default in visible "Keywords" box (agricultural-academic string) if a post ever omits `keywords` | `_layouts/post.html:271` |
| 10 | Low | Technical | `noindex` pages (404, /author/ redirect) lack `sitemap: false` — they appear in sitemap.xml | `404.md`, `author.md` |
| 11 | Low | Technical | Root planning docs served raw and crawlable: `content-plan.md`, `seo_audit_report.md`, `README.md`, `DESIGN.md` | site root |
| 12 | Low | Social | `twitter:site` / `twitter:creator` not emitted (`twitter_username` commented out) | `_config.yml:5` |
| 13 | Low | Feed | Feed fragmentation: 4 feed files; `atom.xml` declares `image/webp` enclosure for JPG/PNG images; `rss.xml` uses `page.author` inside a post loop (all items get site author) | `atom.xml:34`, `rss.xml:21` |
| 14 | Low | Social | `og:image:type` not emitted for Unsplash URLs (no file extension before query string) | `_includes/head.html:53-62` |
| 15 | Low | On-Page | One title 61 chars (`08-04` post) — 1 char over 60 | `2026-08-04-google-e-e-a-t-checklist-...md` |

---

## Detailed Findings

### Verified Resolved (from July 28 audit)

1. **URL mismatch** — RESOLVED. `_config.yml:6` is `https://f9xr.github.io`; all templates use `absolute_url` / `relative_url`. No hardcoded `f9xrteam.github.io` references remain.
2. **Render-blocking highlight.js** — RESOLVED. `defer` on all scripts (`default.html:60-64`).
3. **404 page** — RESOLVED. `404.md` has search, latest articles, navigation recovery, WebPage schema, `noindex` (minor: see finding 10).
4. **SearchAction** — RESOLVED (removed, not broken). Current `WebSite` schema has no SearchAction; search exists client-side (`_includes/search.html`).
5. **Author as Person** — RESOLVED. `BlogPosting.author` and visible byline use `@type: Person` (`post.html:105`, `post.html:432-445`).
6. **Skip-to-content link** — RESOLVED. First `<body>` child, visible on focus (`default.html:8`).
7. **IndexNow key** — PARTIAL. Key file `ab1656a78dad496fbe732e012dadc212.txt` present at root; no IndexNow ping mechanism to Bing/Yandex exists yet.
8. **VideoObject schema** — RESOLVED (conditional on `youtube_id`; 3 posts use it). Video IDs are unverified against YouTube.
9. **Hero width/height** — PARTIAL. `post.html:125` hardcodes `width="1200" height="630"`, ignoring `page.image_width/height` — wrong for the intro post (1600×893 PNG).
10. **Article:tag OG** — RESOLVED (`head.html:108-110`).
11. **rel="noopener noreferrer"** — RESOLVED on all external/share links.
12. **TOC** — RESOLVED (auto-generated sidebar, `post.html:42-69`).
13. **Author bio page** — RESOLVED (`authors/f9xr-team.md` + Person JSON-LD in `author-profile.html`).
14. **Blog expansion** — RESOLVED (intro post ~2,000 words).
15. **Image sitemap** — still absent (Low, unchanged).
16. **Trust pages** — RESOLVED (footer links Terms/Privacy/Refund on main site).

### 1. Homepage missing H1 (High)

`index.md` sets `title_hidden: true`, and `_layouts/page.html:5-11` renders the `<h1>` only when `title_hidden` is absent. No manual `<h1>` exists in `index.md`; the first heading is `<h2 class="ed-hero-title">`. The masthead brand is a `<span>`, not a heading. Result: the homepage has **zero** `<h1>` — the single most important ranking signal on the site's entry page. The prior audit claimed this was fixed; it regressed or was never actually committed.

**Fix:** Add `<h1>` (e.g., set `title_hidden: false` and rename title, or add `<h1 class="sr-only">F9XR Articles</h1>`).

### 2. dateModified schema bug (Medium)

`_layouts/post.html:431`:
```
"dateModified": "{{ page.last_modified_at | default: page.date | date_to_xmlschema }}"
```
`page.last_modified_at` is only populated by the `jekyll-last-modified-at` plugin, which is **not installed**. It never falls back to `page.dateModified` (the field posts actually use). So `dateModified` is always `datePublished` in JSON-LD. Same bug in `atom.xml:23`. Meanwhile `head.html:89-91` (OG `og:updated_time`) and `feed.json:25` *do* use `page.dateModified` — inconsistent.

**Fix:** `"dateModified": "{{ page.dateModified | default: page.date | date_to_xmlschema }}"` in `post.html` and `atom.xml`.

### 3. Stale AI-visibility files (Medium, high-importance for this site)

- `llms.txt` lists only 4 of 12 posts (through Aug 3).
- `llms-full.txt` contains only the July 27 intro post.
- `ai.txt` correctly points to `llms.txt` / `llms-full.txt` / `sitemap.xml`.

For a site whose own content strategy is AEO/GEO, feeding AI crawlers a stale map undercuts the product. Regenerate both files to cover all published posts (and only published posts — the future-dated 08-15 post is correctly excluded today). Consider generating them via Jekyll (layout-less `.txt` pages) so they stay current.

### 4. Orphaned standalone HTML pages (Medium)

- **`bharat-by-day.html`** — a "BharatByDay" React component-library article (different brand/author) with **no** meta description, canonical, OG, robots, or schema; loads the **Tailwind CDN** (render-blocking, and a dead CDN dependency at runtime). Content closely parallels `https://f9xr.github.io/BharatByDay/` (in `all-urls.txt`) → duplicate-content risk if indexed. Not linked from anywhere.
- **`f9xr-content-plan-mindmap.html`** — interactive planning tool with no meta/canonical/OG; `<meta name="viewport" ... user-scalable=no>` (WCAG failure); post links use trailing-slash URLs (`/2026/08/03/why-go-mobile-first/`) that do **not** match this site's `.html` permalinks → its links 404.

**Fix:** add `noindex, nofollow` + `sitemap: false` front matter to both, or move them out of the published tree.

### 5. Hardcoded homepage metrics (Medium, E-E-A-T)

`index.md:143-168` claims PageSpeed `98/100`, CWV `0 failing`, AI crawler traffic `12.4K/mo`, `48 indexed articles`, avg read `8.2 min`. These are static numbers with no data source; `48 indexed articles` directly contradicts the 12 real posts. Unsupported quantitative claims on the homepage are the kind of detail Google's quality rater guidelines penalize (E-E-A-T "Experience" assessment). **Fix:** remove, source from real analytics, or label as illustrative.

### 6. LCP image lazy-loaded (Medium, performance)

`post.html:125` sets `loading="lazy"` on the hero image — the page's LCP element. Lazy-loading the LCP image can push LCP past the 2.5s threshold. **Fix:** remove `loading="lazy"` (hero is above the fold; this was correctly `eager` in the prior audit).

### 7. dateModified front matter coverage (Medium)

Only `07-27` and `07-29` define `dateModified`. Given the schema bug (finding 2) and the site's freshness positioning, add `dateModified` to the remaining 10 posts (equal to publish date where nothing changed).

### 8. Journal boilerplate (Low)

The Copyright/Disclaimer boxes (`post.html:283-296`) use academic-journal language ("original publication in this journal... in accordance with accepted academic practice", "the publishers, the editors and the reviewers"). On a marketing blog this reads as templated and slightly contradicts the F9XR brand voice. Replace with a simple CC BY attribution + brief disclaimer.

### 9. Keywords-box default (Low)

`post.html:271` falls back to a leftover academic keyword string ("agricultural heritage systems, hierarchical entropy weighting...") if a post omits `keywords`. All current posts define `keywords`, so it never renders today — but it will dump irrelevant junk on the next post that forgets. Change the default to site-level keywords or an empty string.

### 10–15. Minor items

- **10:** Add `sitemap: false` to `404.md` and `author.md`.
- **11:** `content-plan.md`, `seo_audit_report.md`, `README.md`, `DESIGN.md` are served raw at `/articles/*.md` and crawlable. Move to a `_notes/` dir or add `sitemap: false` + `noindex` front matter. Also `all-urls.txt`, `feed.json`/`feed.xml` are non-HTML artifacts served publicly — fine, but keep them out of human-facing navigation.
- **12:** Uncomment `twitter_username: "f9xrteam"` to emit `twitter:site`/`twitter:creator`.
- **13:** Consolidate feeds (atom.xml + jekyll-feed feed.xml + rss.xml + feed.json); fix enclosure MIME (`image/jpeg`/`image/png` per post image) and the `rss.xml` author loop bug (`post.author`, not `page.author`).
- **14:** `og:image:type` is skipped for extension-less Unsplash URLs — set `image_type` in front matter or accept omission.
- **15:** Trim the 08-04 title to ≤60 chars.

---

## What's Working Well

- **Structured data is strong and site-wide**: `BlogPosting` (Person author), `BreadcrumbList`, `FAQPage` (all 12 posts have `faq` front matter), `WebSite`, `Organization`, `CollectionPage`/`ItemList`, conditional `VideoObject`, Person JSON-LD on author pages. No invalid schema types found.
- **Meta layer is complete**: custom `head.html` emits canonical, robots (with `max-image-preview:large`), full OG set (type/title/desc/url/site_name/locale/image/alt/width/height + `article:published_time`/`article:modified_time`/`article:author`/`article:section`/`article:tag`), Twitter cards, Dublin Core, Google Scholar citation meta, hreflang, referrer policy, theme-color.
- **No heading violations**: layout renders exactly one H1 per post; the only `# ` in a post body is inside a code-fenced `llms.txt` example.
- **Internal linking is healthy**: every post links to 1–4 other articles + 2–4 service pages, all using correct `.html` permalinks (verified against all 12 files).
- **AI-readiness is genuinely good**: `ai.txt`, `llms.txt`, `llms-full.txt`, `robots.txt` (Liquid-processed absolute sitemap URL), `feed.json`, and IndexNow key — just needs freshness (finding 3).
- **Performance patterns**: deferred highlight.js, `font-display: swap`, print-friendly media load for Font Awesome, width/height attributes on hero, lazy iframes.
- **404 + search + author pages** are useful and correctly `noindex`ed where appropriate.
- **E-E-A-T**: Person authors, author bio page with schema, trust links (Terms/Privacy/Refund), copyright/CC BY statement.

---

## Recommendations (priority order)

1. **Add homepage `<h1>`** (High) — restore `title_hidden: false` or add a visible/sr-only H1 in `index.md`.
2. **Fix the `dateModified` JSON-LD bug** (Medium) — `post.html:431` + `atom.xml:23` → `page.dateModified | default: page.date`.
3. **Regenerate `llms.txt` / `llms-full.txt`** (Medium) to cover all 12 published posts; prefer Jekyll-generated `.txt`.
4. **Remove or noindex** `bharat-by-day.html` and `f9xr-content-plan-mindmap.html` (Medium).
5. **Remove or source the hardcoded homepage metrics** (Medium, E-E-A-T).
6. **Make hero `eager`** (Medium, LCP).
7. **Add `dateModified` to all posts** and **add `sitemap: false`** to 404/author redirect (Medium/Low).
8. Clean the Low items (journal boilerplate, keywords default, feed MIME/author bug, `twitter_username`, planning-doc exposure, title length).

---

## Verification Notes

- All 12 posts: valid YAML, single layout H1, descriptions ≤160 chars (134–152), titles ≤61 chars, `faq` present (5 each), `keywords` present, hero images set (Unsplash or self-hosted), 10 posts carry `image_credit`.
- Permalinks are Jekyll default (`/2026/08/13/consistency-audits-seo-aeo-geo.html`) — used consistently by posts, feeds, llms.txt, and the `BlogPosting` `mainEntityOfPage`. The `f9xr-content-plan-mindmap.html` tool is the only place using non-matching trailing-slash URLs.
- Future-dated posts (e.g., the 08-15 scheduled post) are excluded by `site.posts` — sitemap, feeds, and homepage will not leak them before their publish date.
