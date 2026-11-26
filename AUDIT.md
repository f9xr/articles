# F9XR Articles — Full Codebase Audit

- **Repo:** `C:\Users\inanj\OneDrive\Documents\GitHub\articles` (Jekyll 4, theme `minima`, baseurl `/articles`)
- **Live:** https://f9xr.org/articles/ — audited 2026-11-22
- **Scope:** code quality, SEO/AEO & structured data, Core Web Vitals risk, accessibility, repo hygiene
- ~130 posts, 5 authors, 12 policy/press pages, podcast episodes, client-side search, 4 analytics/tracking scripts
- **Limits:** did not run a full Jekyll build, Lighthouse/axe, screen-reader testing, Search Console/CrUX, or URL-by-URL crawl. No field CWV failure is asserted; performance and accessibility issues identified from source are risks unless expressly confirmed live.

**Overall verdict:** A well-engineered site with unusually strong SEO/AEO plumbing — but two verified defects (invalid schema block; broken newest-post hero image), plus meaningful privacy/consent, performance, and accessibility risks. This is a static/live snapshot, not a build/test/CI run; where schema/legal/performance findings are source-based they are labeled as such.

---

## 1. Critical

### 1.1 Invalid Organization JSON-LD on every page except the homepage
`_includes/head.html` ~L225–228:

```json
    "priceRange": "$$",
    "hasMap": "https://f9xr.org/pages/contact.html"
},
}
</script>
```

There is a stray closing brace (`}` after the object's `},`), making the whole `<script type="application/ld+json">` block **unparseable**. Because this block is wrapped in `{%- unless page.url == '/' -%}`, the **WebSite + Organization entity graph fails to load on every post, author, press, and archive page** — and `post.html` references `https://f9xr.org#organization` as the publisher `@id`, so publisher resolution is dangling there too.

**Fix:** remove the stray `}` (keep one `}` for the object), re-render a live post page, and validate the emitted JSON with Rich Results Test / validator.schema.org.

### 1.2 Newest post points at a non-existent hero image
`_posts/2026-11-22-mobile-seo-audit-new-wordpress-site-guide.md` L5:

```
image: "https://f9xr.org/articles/assets/post-images/google-deep-review-header.webp"
```

No such file exists in `assets/post-images/` (the Deep Review post uses `what-is-google-deep-review-guide.webp`). The post's hero `<img>`, `srcset`, OG/Twitter image, and BlogPosting `image` all 404. The post is also **not yet in the live sitemap or feed** (build not deployed), and its author key `"F9XR Team"` doesn't match the registry `"F9XR Editorial Team"` (§2.2). Its body also opens with `## Conclusion` before the article content — the section order looks scrambled.

**Fix:** copy/rename a real image to `google-deep-review-header.webp` (or correct the front matter), regenerate the `-640.webp` variant, set `author: "F9XR Editorial Team"`, fix the section order, then deploy and ping IndexNow.

---

## 2. High

### 2.1 Consent / disclosure risk and duplicated analytics setup
`_config.yml` wires Google Analytics (G-RYV362KFED), Google Tag Manager (GT-WKXBQKVL), GoatCounter, and Grow.me; production includes load them without a visible consent gate (`_includes/head.html` L302–318, `_layouts/default.html` L7–9). The GA snippet appears to configure a bare `gtag` property while GTM is separately enabled, creating a risk of duplicate GA events depending on the GTM container configuration. The privacy policy describes GoatCounter and anonymized Google Analytics, but the source configuration shown does not establish consent/anonymization behavior; Grow.me disclosure should also be verified. This is a compliance/privacy risk to review with current jurisdiction-specific advice, not a legal conclusion.

**Fix:** audit actual network requests/cookies and GTM configuration; choose one GA loading path, gate non-essential tracking where required, and update the privacy notice for all deployed vendors. Consider keeping only privacy-first analytics if that meets business needs.

### 2.2 Author-key mismatch risk across posts
`site.data.authors[page.author]` (head.html L97, post.html L39) requires the front-matter `author:` string to exactly equal a `_data/authors.yml` key. Distribution in `_posts`: `F9XR Editorial Team` (96), `Mohammed Ahetasham Uddin` (44), `Masna Sudhir` (9), `Ankush Santra` (7), `Mishra Sheshamani` (2), **`F9XR Team` (1 — the Nov 22 post, no registry entry)**. Add a lint to `tools/lint_article.py` that fails when `author:` is not a registry key.

### 2.3 Responsive image variants are assumed, not guaranteed
`_layouts/post.html` L143 always appends a `-640.webp` candidate to `srcset` without checking whether that file exists. Some legacy filenames use a different naming family and some assets have no small variant. Add a build-time existence check and either omit unavailable candidates or generate the missing variants.

---

## 3. Medium

1. **Wasteful preload of og-image** — `_includes/head.html` L41 preloads `/assets/og-image.webp` (29 KB) on every page, but it is only ever an OG/social image, never rendered. Remove that preload (keep the `logo.webp` one).
2. **Search placeholder is stale** — `search.html` L11 hardcodes "Search 90+ articles" while the archive has ~130. Derive the count at build time or drop the number.
3. **Sitemap noise + freshness** — live `sitemap.xml` includes `https://f9xr.org/articles/auth` (a noindex redirect stub) and the three `.well-known/agent-skills/*/SKILL` pages, which probably shouldn't be indexed. `lastmod` equals the publish date for all posts — `jekyll-last-modified-at` (or front-matter `dateModified` surfaced to the sitemap) would make freshness signals real.
4. **Homepage lists several posts twice** — the live homepage repeats the Nov 12 core update, Nov 21 Chrome 158, Nov 7 listicle, Nov 4 AI slop entries in different category tabs; harmless UX-wise but reads as a template bug in `index.md` card generation.
5. **Google Translate attribution is hidden** — `_layouts/default.html` L120–150 actively hides the injected "Powered by Google" label of the Translate widget. Google's widget terms expect attribution; the site renders its own, but verify it satisfies the attribution requirement.
6. **`lsi: true` in `_config.yml`** — the LSI plugin was removed in Jekyll 4; the flag is dead config. Delete it.
7. **`feed.json` looks stale/undersized** — the repo's root `feed.json` (1.1 KB) is a static file while `head.html` advertises it as the JSON Feed for 130 posts; confirm it regenerates (or generate from Liquid like `atom.xml`).
8. **Monolithic `css/override.css` (170 KB source / 120 KB min)** shipped site-wide for a minima theme; it's regenerated by `tools/build-css.mjs` (mtimes in sync, good), but consider auditing unused selectors — this is the single largest render-blocking asset.
9. **Post pages carry ~700 lines of inline JS** (TTS "Listen" engine, bionic reading, tooltips, PDF print) directly in `_layouts/post.html`. No caching benefit, re-downloaded on every article view, and unminified. Extract to `assets/js/post.js` (deferred) for cacheability; keep behavior identical.
10. **`innerHTML` usage in `search.html`** (L94, 256, 303, 317) renders indexed post data and generated highlight markup into the DOM. Current index is site-authored, so practical risk is limited; preserve escaping of every content field and consider DOM construction for defense-in-depth.
11. **Stylesheet render-blocking / large CSS payload** — both `main.css` and the 120 KB `override.min.css` load as render-blocking stylesheets (`_includes/head.html` L293–294). Consider unused-selector cleanup and critical CSS only after measuring; verify any async stylesheet strategy doesn't cause flash/layout shift.
12. **Font-swap and third-party widget layout shift risks** — Inter is loaded with `display=swap`, but no metric-adjusted fallback is defined; Google Translate injects UI into an initially empty element on selected posts. These are CLS risks, not confirmed field failures. Test with a performance trace and reserve space or lazy-load the widget if shifts are observed.
13. **Accessibility contrast / focus gaps (static CSS evidence)** — audit found muted colors `#71717a` and `#52525b` used on dark backgrounds that may fail WCAG 1.4.3 for normal text (calculate per actual foreground/background pairing). `.sidebar-translate-select .goog-te-combo:focus` removes the outline without a clearly identified replacement. Restore a visible focus ring and verify contrast using rendered styles.
14. **Copy-link feedback may be silent to screen readers** — `sharelinks.html`'s “Copied!” feedback is visual, without a live status announcement. Add `role="status"` or an `aria-live="polite"` region.
15. **Audio captions** — episode audio provides a downloadable VTT and transcript, but `assets/js/audio-player.js` does not attach the VTT as a `<track>`. The transcript is a useful alternative; synchronized captions would improve access.

---

## 4. Low

- **Repo hygiene:** `tools/node_modules/` exists locally but code-audit verification found it is **not Git-tracked**; do not treat it as committed clutter. The root `package-lock.json` appears orphaned (no root `package.json`), and root `article-urls.txt` / `all-urls.txt`, duplicate agent skill copies, and `assets/reports/` should be confirmed intentional. `assets/authors/riya.jpeg` (658 KB) and `chatgpt-ads.png` appear unreferenced; confirm before removing.
- **Oversized post images** beyond the ~35 KB norm: `f9xr-team-solutions.webp` (161 KB), `rank-1st-on-google-maps.webp` (168 KB), `how-to-increase-website-trust-score.webp` (138 KB), `google-universal-cart-io2026-hero.webp` (133 KB), `google-september-2026-spam-update-complete.webp` (127 KB) — re-run `tools/optimize-images.mjs` on them.
- **Hero `alt` is always the post title** and hero uses `loading="eager" fetchpriority="high"` (good for LCP), but content images inside `_posts` markdown should be spot-checked for meaningful alt text; some tables lack `<caption>`.
- **Duplicate TOC heading** — the TOC `<details><summary>Table of Contents</summary>` plus an inner `<h2 class="sidebar-toc-title">Table of Contents</h2>` is announced twice by screen readers; make the inner one visually-hidden or drop it.
- **Sitemap includes `#website` only via head block** — once §1.1 is fixed, verify `@id` graph resolution with the Schema validator.
- `d6628032fa1e4b2ea31ba81441024687.txt` is the public IndexNow key (fine; `tools/ping-indexnow.mjs` handles it correctly, no secrets found in tools/).
- `search_index.json` includes `post.content` truncated to 1500 chars per post — full-text search depth is limited; acceptable, but document it.

---

## 5. Done well (worth keeping)

- **SEO/AEO plumbing:** canonical + robots directives + full OG/Twitter/Dublin Core/citation meta; hreflang en + x-default; BlogPosting/Person/BreadcrumbList/FAQPage/VideoObject per post; UTC-forced `dateModified`/`datePublished`; `jekyll-sitemap` + three feeds.
- **AI-facing surface:** robots.txt with explicit, commented AI-crawler governance; `llms.txt`, `llms-full.txt`, `ai.txt`, `.well-known/ai-catalog.json`, ARD manifest — genuinely ahead of most blogs.
- **EEAT:** author registry with roles/experience/sameAs, per-author pages, 12 policy pages (editorial, corrections, ethics, transparency, affiliate disclosure), AI-assistance disclosure on articles.
- **Performance foundations:** font loading is non-blocking with a `<noscript>` fallback; highlight.js is deferred; hero images have dimensions, responsive candidates, and high fetch priority; Google Translate is conditional to selected article pages. `tools/build-css.mjs --check` confirmed the minified override CSS is up to date.
- **Accessibility foundations:** skip link, `lang` on `<html>`, labeled search combobox with listbox/live status, named icon controls, aria-hidden decorative SVGs, reduced-motion and focus-visible CSS, and an episode transcript. Automated/manual WCAG conformance was not established; contrast/focus issues are noted above.
- **Build/security positives:** IndexNow script validates hosts and key format and supports dry-run; tool credentials are sourced from environment variables (no hardcoded secrets found in the scanned tools); generated Dev9b data is labeled with its regeneration source. Search has a robust keyboard/ARIA model and current site-owned content is escaped before highlighting.

---

## 6. Priority fix order

1. Fix the stray `}` in `_includes/head.html` (1-line, unblocks the whole entity graph).
2. Fix the Nov 22 post (image path, author key, section order), deploy, ping IndexNow.
3. Remove the unused og-image preload and unnecessary logo preload if measurement confirms it is not LCP; remove dead `lsi: true` config.
4. Add author-key, front-matter image existence, and responsive-variant checks to article lint/CI.
5. Audit real analytics requests and vendor disclosure/consent configuration; remove redundant GA/GTM path.
6. Check sitemap `/articles/auth` and `.well-known/agent-skills/*` entries; exclude only if noncanonical/not intended to be indexed. Validate JSON Feed and post-deploy sitemap/feed refresh.
7. Measure before performance changes: consider extracting inline post JS and reducing unused CSS, while addressing font/Translate CLS if traces confirm.
8. Verify WCAG contrast in rendered contexts and restore Translate focus indicator; announce copy feedback.
9. Repo cleanup: remove confirmed unused root scratch files/orphans; keep node_modules untracked and retain the public IndexNow key file.
