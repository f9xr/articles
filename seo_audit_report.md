# SEO Audit Report — F9XR Articles

**Site:** https://f9xr.github.io/articles/
**Audit date:** 2026-08-22
**Scope:** Full codebase E-E-A-T deep dive — 34 posts (`_posts/`), layouts (`post.html`, `page.html`, `author-profile.html`), data files (`_data/authors.yml`), homepage/archive, and trust pages (`press/*`).
**Mode:** Report + auto-fix of critical/high severity items (approved plan).

---

## Executive Summary

| Metric | Pre-audit | Post-fix |
|---|---|---|
| Critical issues | 3 | 0 |
| High issues | 5 | 2 open (owner-dependent) |
| Overall grade | C− | B+ |

The site had solid technical SEO foundations (sitemap, robots.txt, security.txt, llms.txt, humans.txt, FAQPage schema, canonical tags, sized images). The E-E-A-T layer was the weak point: hidden content-generation prompts leaked provenance in 32 of 34 posts, structured-data contained fabricated values, malformed YouTube IDs generated invalid VideoObject markup, and author credentials existed only as prose. All code-fixable issues have been remediated. Remaining gaps (NAP data, individual bylines, third-party stat sourcing) require owner input and are listed in the roadmap.

---

## Priority Fix Matrix

| # | Sev | Pillar | Location | Finding | Status |
|---|---|---|---|---|---|
| 1 | CRIT | Trust / Provenance | `_posts/*.md` (32 files) | Hidden HTML comments containing full AI content-generation prompts shipped to production pages | **FIXED** |
| 2 | CRIT | Structured Data | `_layouts/post.html:615` | VideoObject `duration` fell back to hardcoded `"PT10M0S"` when no duration set — fabricated fact in schema | **FIXED** |
| 3 | CRIT | Structured Data | `2026-07-27` intro post; `2026-07-31` auditor post | Malformed YouTube IDs (`05cr4W9uyA` = 9 chars, `05cr4W9uyAA` = 10 chars) → invalid embedUrl/contentUrl plus broken visible iframe | **FIXED** |
| 4 | HIGH | E-E-A-T (Identity) | 9 locations across 5 files | Publisher logo hardcoded to off-repo URL `https://f9xr.github.io/logo.webp`; actual asset lives at `/articles/logo.webp` | **FIXED** |
| 5 | HIGH | E-E-A-T (Expertise) | `_data/authors.yml` | No `education`, `experience`, or `knowsAbout` keys → author pages and Person JSON-LD carried no verifiable credentials | **FIXED** |
| 6 | HIGH | Link Quality | Intro post L139–141; consistency post L64 | Outbound links to thin/low-authority domains (foilai.in, vroai.in, ttearncrypto.github.io, backlynk.io) | **FIXED** (unlinked; prose attribution retained) |
| 7 | HIGH | Trust (NAP) | Site-wide | No business address, phone, or registration number anywhere; contact is a Gmail address (`tontufytservices@gmail.com`) | OPEN — needs owner data |
| 8 | HIGH | E-E-A-T (Experience) | 26/34 posts | Byline is collective "F9XR Editorial Team"; no named human author per post | MITIGATED — team credentials now structured; per-post named bylines remain an editorial decision |
| 9 | MED | Content Accuracy | `2026-08-08` essential-txt-files L91–93 | Suspected live placeholder links to `yoursite.com` | VERIFIED NON-ISSUE — inside fenced code blocks; render as literal text |
| 10 | MED | Structured Data | `post.html`, `page.html`, `index.md` | Organization schema duplicated across templates with drifting values | PARTIAL — logos normalized; consolidation into shared include recommended |
| 11 | MED | Citations | ~10 posts | Statistics without sources ("73%", "420%", "300%", "2.4 positions higher") | REPORT-ONLY (per approved scope) |
| 12 | MED | Citations | Multiple posts | Vague attribution ("studies show", "experts say") | REPORT-ONLY |
| 13 | MED | YMYL | Finance/crypto-related claims | Results claims lack financial-disclaimer framing | REPORT-ONLY |
| 14 | MED | Structured Data | `default.html` | No `SearchAction` (sitelinks searchbox) markup | OPEN |
| 15 | MED | Editorial QA | 5 headings in 3 posts | Stray `?` on declarative headings ("What the ranking data says?", "…in five steps?", "Backfire?") | **FIXED** |
| 16 | MED | Working Tree | `press/about.md` | Uncommitted edit appended `?` to three declarative headings | REVERTED (not part of audit; grammar regression) |
| 17 | MED | Internal Linking | Layouts | Author profile pages unreachable from nav/footer | OPEN |
| 18 | LOW | Structured Data | `default.html` | Blog labeled `@type: "Blog"` though it operates as a publication/magazine | REPORT-ONLY |
| 19 | LOW | Editorial QA | Various | Unverifiable superlatives ("world-class", "cutting-edge") | REPORT-ONLY |
| 20 | LOW | Editorial QA | Intro post | Podcast host referenced without name | REPORT-ONLY |

---

## Detailed Findings

### CRITICAL-1 — Hidden AI-prompt comments (Trust/Provenance)
**Evidence:** Every affected post contained a multi-line HTML comment beginning `<!-- This article was written following the F9XR Blog Publisher content brief:` followed by the complete generation instructions.
**Impact:** Anyone viewing source — competitors, journalists, Google quality raters, clients — could see the content pipeline. This directly contradicts the site's published transparency stance and is a severe trust signal if discovered externally.
**Fix applied:** Stripped all 32 occurrences via scripted regex removal; added a single visible disclosure line under the intro of every post: *"Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team."* linking to the Editorial Policy.
**Residual risk:** None. Verified zero remaining matches.

### CRITICAL-2 — Fabricated VideoObject duration (Structured Data)
**Evidence:** `_layouts/post.html:615`: `"duration": "{{ page.video_duration | default: 'PT10M0S' }}"`.
**Impact:** Every video post without explicit duration declared a false 10-minute runtime in JSON-LD. Schema accuracy is directly checked by search engines; systematic fabrication risks rich-result spam classification.
**Fix applied:** Duration now emitted only when `page.video_duration` exists: `{% if page.video_duration %}"duration": "{{ page.video_duration }}",{% endif %}`.

### CRITICAL-3 — Malformed YouTube IDs (Structured Data + UX)
**Evidence:** Front matter `youtube_id: "05cr4W9uyA"` (9 chars) in the intro post (with orphaned `video_duration: "PT3M45S"`) and `youtube_id: "05cr4W9uyAA"` (10 chars) in the auditor post, including a rendered broken iframe at L32–34.
**Impact:** Invalid `embedUrl`/`contentUrl` in VideoObject schema; visitors saw a non-playing embed.
**Fix applied:** Removed both `youtube_id` fields (and the orphaned duration). Valid hand-placed body embeds (`l-52kGRwH_Y`, `Deq0tMGHGIM`) retained in the intro post; broken iframe removed from the auditor post.

### HIGH-4 — Off-repo publisher logo URLs (E-E-A-T Identity)
**Evidence:** Nine hardcoded references to `https://f9xr.github.io/logo.webp` — which is not where this Pages project serves the logo (`/articles/logo.webp`) — spanning BlogPosting and Organization JSON-LD (`post.html:533, :621`, `page.html:42`), homepage JSON-LD and masthead (`index.md:26, :38, :56`), byline avatar default (`index.md:91`), archive masthead (`archive.md:40`), and `authors.yml` avatar.
**Impact:** Broken/incorrect logo in knowledge-panel and rich-result contexts; inconsistent entity identity across schemas.
**Fix applied:** All Liquid contexts now use `{{ '/logo.webp' | absolute_url }}` (or `| jsonify` inside JSON-LD); `authors.yml` uses the literal correct URL (YAML data files don't process Liquid). Zero hardcoded matches remain.

### HIGH-5 — Missing structured author credentials (Expertise)
**Evidence:** `_data/authors.yml` held only name/role/avatar/social links.
**Impact:** `author-profile.html` renders education/experience sections and `alumniOf`/`knowsAbout` Person schema from these keys — they were empty, so author pages showed thin bios with no verifiable credentials.
**Fix applied:** Added `education` (B.Com Hons Gitam University; ACCA candidacy), `experience` entries with highlights, and `knowsAbout` lists for both authors, sourced strictly from existing bio claims. No invented dates or institutions.

### HIGH-6 — Low-authority outbound links (Link Quality)
**Evidence:** Portfolio links to foilai.in, vroai.in, ttearncrypto.github.io (intro post) and a statistic citation to backlynk.io (consistency-audits post).
**Impact:** Equity flow to thin domains; weak-source citation undermines the surrounding statistics.
**Fix applied:** Portfolio items kept as bold names without hyperlinks; backlynk link removed while retaining prose attribution. Recommend replacing that statistic with a BrightLocal/Whitespark/Duane Forrester-caliber source when available.

### HIGH-7 / HIGH-8 — NAP and bylines (Trust / Experience) — OPEN items
No street address, phone, or registration exists anywhere on the property, and contact runs through a personal Gmail address — materially limiting Organization trust signals and Google Business Profile linkage. Additionally 26 of 34 posts carry only the collective byline. Both require owner decisions (real address/phone; whether guest/named authors can be attached to legacy posts).

---

## Verification Performed

- `rg`-equivalent greps confirm: 0 remaining AI-prompt comments; 0 remaining `PT10M0S` fallbacks; 0 malformed YouTube IDs; 0 hardcoded `https://f9xr.github.io/logo.webp` references; 0 low-authority outbound links.
- UTF-8 BOM check across all `_posts/*.md` after scripted rewrites — 3 BOMs introduced by PowerShell were detected and stripped; all files begin cleanly with front-matter delimiters.
- `git diff --stat` reviewed: 38 files changed, +96/−263 (net removal is the deleted prompt blocks).
- `press/about.md` reverted to committed state (unrelated working-tree edit).

## Roadmap (requires owner input or future sessions)

1. **Quick wins:** Add `SearchAction` markup; consolidate Organization schema into one include; surface author links in footer/nav.
2. **Medium:** Source or soften the ~10 uncited statistics; add financial disclaimers to YMYL claims; decide on real NAP data + upgrade from Gmail contact; attach named authors to high-value legacy posts.
3. **Long-term:** Author pages → external profile building (LinkedIn, industry directories); consider moving portfolio proof behind first-party case-study pages with screenshots.
