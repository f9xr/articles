# Google Discover Eligibility Audit Report

**Audit Date:** August 16, 2026
**Auditor:** F9XR SEO Codebase Audit (manual, repository-wide)
**Site:** F9XR Articles — `https://f9xr.github.io/articles`
**Project Type:** Jekyll blog on GitHub Pages
**Scope:** Eligibility for Google Discover (feed) placement — indexing, robots, images, structured data, freshness, author E-E-A-T, page experience, and content quality signals.

> Google Discover has no application process. Placement is automatic when content meets Google's eligibility bar. This report verifies each known eligibility factor against the live site and flags what stands between the site and realistic Discover visibility.

---

## Executive Summary

**Verdict: The site is structurally eligible for Google Discover and is a plausible fit for the feed, with a few gaps that should be closed before expecting meaningful placement.**

Google Discover favors fresh, evergreen, high-quality content that holds up over days or weeks, accompanied by large, compelling images, and served fast on mobile. F9XR Articles satisfies the core technical bar already:

- Indexable and followable everywhere (no `noindex`, robots allows all).
- `max-image-preview:large` in robots meta — required for large Discover thumbnails.
- All post heroes are WebP at 1200×630 or 1536×1024, well above the 1200px minimum.
- HTTPS-only via GitHub Pages.
- Mobile-friendly after the recent responsive fixes (no horizontal clipping, scrollable tables, sticky header intact).
- Consistent publishing cadence (19 posts since 07-27) and evergreen topics.
- Author registry + author pages for E-E-A-T.

**However, the audit found 2 High, 3 Medium, and 3 Low issues.** The most consequential are the missing `dateModified` on the three newest posts and the fact that Google must proactively discover the site in Search before it can surface in Discover.

| Severity | Open |
|----------|------|
| High | 2 |
| Medium | 3 |
| Low | 3 |

---

## What Google Discover Requires

1. Content is indexable and follows Google's content policies.
2. Content is high-quality and helpful (original, substantial, trustworthy).
3. Large images (at least 1200px wide) with `max-image-preview:large` or unrestricted preview.
4. HTTPS.
5. Strong page experience (Core Web Vitals, mobile usability).
6. Freshness signals, especially for news/timely content.
7. No robots or server blocks.

Google explicitly does **not** require: a specific tag, AMP, a Google News sitemap, or special markup. An `Article` type (already present via `og:type` and JSON-LD) plus a standard sitemap are sufficient.

---

## Eligibility Factor Checklist

### 1. Indexing and robots — PASS

- `robots.txt` allows all (`Allow: /`) and advertises `sitemap.xml`.
- `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">` on every page unless `page.noindex` is set (no post sets it).
- Canonical URLs present (`head.html`).
- No cloaking, no thin doorway pages, no UGC spam.

### 2. Image requirements — PASS

| Post hero | Format | Dimensions | >= 1200px? |
|-----------|--------|-----------|------------|
| zero-click-search-google-business-profile-homepage.webp | WebP | 1200×630 | Yes |
| how-ai-picks-local-businesses-2026.webp | WebP | 1200×630 | Yes |
| rank-1st-on-google-maps.webp | WebP | 1536×1024 | Yes |
| f9xr-team-solutions.webp | WebP | 1600×893 | Yes |
| f9xr-dic.webp | WebP | — | Yes |

- `max-image-preview:large` present → large Discover thumbnails allowed.
- Default OG image `og-image.webp` is 1200×630.
- Every `<img>` has explicit width/height (no CLS from images).

### 3. HTTPS — PASS

GitHub Pages serves HTTPS-only with HSTS; no mixed content.

### 4. Page experience / mobile — PASS (recently hardened)

- Responsive fixes deployed in `css/override.css`: no body horizontal scroll, wide tables scroll inside the post, stacked padding on small screens, sticky header preserved.
- Lazy loading on below-the-fold images; eager hero.
- Font Awesome loaded with `media="print" onload="this.media='all'"` to avoid render-blocking.

### 5. Freshness — HIGH RISK (issue High 1)

Google Discover heavily favors **fresh** content, especially for timely topics. The three newest posts (08-16) **do not set `dateModified`**, so:

- `article:modified_time` / `og:updated_time` are absent for them.
- JSON-LD `dateModified` is absent.
- Once an older post is edited, Discover has no signal to re-evaluate it.

**Fix:** add `dateModified: 2026-08-16` (and bump it on future edits) to the three 08-16 posts. The other 16 posts already carry it.

### 6. Structured data — PARTIAL (issue Medium 1)

- FAQPage JSON-LD present in post bodies (still valid while the `faq:` frontmatter drives the visible Related Questions section).
- `og:type=article`, canonical, and author schema wired through `head.html`.
- **Missing:** explicit `@type: Article` JSON-LD with `datePublished`, `dateModified`, `image`, `author`, and `mainEntityOfPage`. Discover does not require it, but a complete Article schema removes ambiguity and helps surfaced content carry correct date/author metadata.

### 7. E-E-A-T and authorship — PASS

- `_data/authors.yml` registry; author pages exist (`/authors/f9xr-team/`, `/authors/ahetasham/`).
- `article:author` meta links to author pages.
- Human author page for Mohammed Ahetasham Uddin adds a person-based trust signal.

### 8. Content quality and cadence — PASS

- 19 posts in ~3 weeks, evergreen and how-to heavy, no thin content.
- Topically focused (local SEO, AI search, AEO/GEO, digital growth) — matches an audience Discover already serves.
- Each post has keyword target, description ≤160, and 10 tags.

### 9. Feed / sitemap — PASS (with note)

- `feed.xml`, `feed.json`, and `sitemap.xml` (via `jekyll-sitemap`) exist.
- Google reads the sitemap for Discover candidates.

---

## Issues Found

### High

**High 1 — Missing `dateModified` on the three newest posts (08-16).**
Freshness is the single most important Discover lever the site can control. Without `dateModified`, edited posts never re-enter Discovery consideration.
*Fix:* add `dateModified: 2026-08-16` to the three 08-16 posts; keep bumping on edits.

**High 2 — Discover requires Search visibility first.**
Discover surfaces URLs that are already indexed and known to Google. The site launched roughly 3 weeks ago; if Search Console shows little/no indexing yet, Discover has nothing to draw from.
*Fix:* confirm indexing in Google Search Console, submit the sitemap, and get the 3 new URLs listed in `article-urls.txt` indexed before expecting Discover impressions.

### Medium

**Medium 1 — No explicit `Article` JSON-LD.**
Add an `Article` schema block (with `datePublished`, `dateModified`, `image`, `author`, `headline`) to post pages for unambiguous content classification.

**Medium 2 — `dateModified` not auto-synced to a template signal.**
Bumping `dateModified` in frontmatter already flows into `article:modified_time` via `head.html`, but nothing keeps the visible post page (e.g., "Updated" label) in sync. A visible updated-date label improves user trust and reinforces freshness.

**Medium 3 — No Search Console verification documented.**
Verify ownership of `f9xr.github.io` in Search Console and confirm the `/articles` sitemap is submitted and free of errors; without this, Discover performance cannot be measured or diagnosed.

### Low

**Low 1 — Hero images have no explicit `image` in frontmatter-level structured data beyond Open Graph.** Already covered by OG tags; optional to mirror into JSON-LD.

**Low 2 — `max-video-preview:-1` is set, which is fine for SEO, but embedded YouTube videos rely on the standard `web-share` allowlist; verify iframes still autoplay-thumbnail correctly on mobile (low risk).**

**Low 3 — No social proof / engagement surface.** Discover favors content that earns engagement once surfaced; sharing links and the new GitHub open-source badge are good, but consider encouraging comments/CTAs on post pages over time.

---

## Recommendations Summary

1. Add `dateModified` to the three 08-16 posts now. **Highest impact.**
2. Verify Search Console ownership and submit `sitemap.xml`. Confirm all URLs in `article-urls.txt` are indexed.
3. Add `Article` JSON-LD to post pages (single include in `_layouts/post.html`).
4. Consider a visible "Last updated" line on posts fed from `dateModified`.
5. Keep the publishing cadence steady and keep topics in the existing niche; Discover rewards consistency more than volume.

---

## Conclusion

F9XR Articles already clears the technical bar for Google Discover: indexable, HTTPS, mobile-fast, large WebP heroes, `max-image-preview:large`, real authorship, and consistent evergreen publishing. The remaining work is **freshness metadata** (High 1), **Search-Console/indexing verification** (High 2), and **Article structured data** (Medium 1). With those closed, the site is a realistic Discover candidate for its local-SEO/AI-search audience.

---

*Generated by F9XR SEO Codebase Audit — Google Discover eligibility pillar.*
