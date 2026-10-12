# YMYL & E-E-A-T Audit Report — F9XR Articles

- **Audit date:** 2026-10-12 (previous audit: 2026-09-14)
- **Site audited:** https://f9xr.org/articles/ (was https://f9xr.github.io/articles/; Jekyll static site, GitHub Pages)
- **Audit scope:** YMYL classification, E-E-A-T signals, trust & transparency infrastructure, structured data, and monetization practices, evaluated against Google's Search Quality Rater Guidelines (YMYL + E-E-A-T sections, July 2022 update and later refinements) and Google's September 2026 spam-update guidance on scaled content abuse.

---

## 1. Site Context (grounding)

- **Project type:** Static blog / publisher via Jekyll on GitHub Pages, run by F9XR Team, a digital architecture agency based in India.
- **Scale now:** **113 posts** (previous audit: 71). By month: Jul 2026 = 3, Aug 2026 = 48, Sep 2026 = 42, Oct 2026 = 20. The site has grown **~59% in the four weeks** since the last audit.
- **Primary topics:** SEO, AI search (AEO/GEO), local business growth, web performance, digital marketing, platform policy, tool reviews.
- **YMYL exposure:** **Moderate, now nudging toward the upper end of Moderate.** The publishing focus is still informational/educational marketing content. However, two developments since the last audit raise the stakes:
  1. A meaningful share of posts give **commercial and financial-adjacent advice** (hosting decisions, ad spend, hiring an SEO team, recovering traffic after a penalty, tool/affiliate recommendations).
  2. The site now publishes **regulatory/legal-policy content**, e.g. `2026-10-12-google-bans-fixed-quota-betting-ads-brazil.md`, which interprets a Provisional Measure, Google Ads certification rules, and legal developments. That is legal-adjacent YMYL and warrants a higher evidentiary bar than tooling posts.

---

## 2. Changes Since the Last Audit (2026-09-14 → 2026-10-12)

| Signal | 2026-09-14 | 2026-10-12 | Direction |
|---|---|---|---|
| Total posts | 71 | 113 | Growth |
| `dateModified` coverage | 56 / 71 (~79%) | **112 / 113 (~99%)** | **Fixed** |
| Named-author bylines | minority | 46 / 113 (~41%) | Improving |
| Team byline ("F9XR Editorial Team") | majority | 67 / 113 (~59%) | Still majority |
| `reviewed_by:` front matter | 0 | 0 | **Unchanged** |
| Visible "Reviewed by / Last reviewed" stamp | none | none | **Unchanged** |
| Physical address / registration no. | absent | absent | **Unchanged** |
| Affiliate disclosure page | none | **added 2026-10-01** | **Fixed** |
| FAQ block on posts | common | **113 / 113 (100%)** | Strong |
| Press/policy pages | 8 | 11 (+ affiliate-disclosure, refund, write-for-us) | Improving |

**Readout:** The single biggest gap from the last audit (Finding 2, `dateModified` coverage) is effectively closed, and affiliate transparency improved materially. The two structural gaps that remain untouched are **(a) named-human expertise/accountability on money-adjacent content** and **(b) verifiable legal-entity detail**.

---

## 3. Findings

### Finding 1 — Named-author share improved, but a "reviewed by" accountability layer is still missing (HIGH severity)

**Evidence:** `grep "^author:" _posts/*.md` → 67 `F9XR Editorial Team`, 34 `Mohammed Ahetasham Uddin`, 6 `Masna Sudhir`, 6 `Ankush Santra`. Named authors now carry ~41% of posts (up from a minority). All four bylines have rich `_data/authors.yml` profiles with `knowsAbout`, `education`, and `experience` blocks. However, `grep "^reviewed_by:"` returns **0** and no layout renders a "Reviewed by" line.

**Why it matters:** The rater guidelines reward attributable expertise. On posts that steer a business decision (hosting, ad spend, penalties, legal-policy interpretation), a named human **plus a named reviewer** is the strongest signal. A team byline with no review provenance is the weakest. The site's editorial policy promises human review for every article, but that promise is invisible on the page.

**Fix (prioritized):**
- Add an optional `reviewed_by:` front-matter field and render "Reviewed by [Name]" (linking to the author profile) in the author box in `_layouts/post.html`.
- Prefer a **named author** (not the team byline) for every post that recommends a purchase, a vendor, or a legal/regulatory position. The Brazil betting-ban post already uses a named author — good — but several October commercial posts do not (`how-hosting-provider-affects-website-seo`, `how-to-create-your-own-seo-team`, `recover-website-traffic-google-spam-update-2026`).
- For law/policy posts, have the review line name a reviewer and add a one-line "This is not legal advice; consult qualified counsel in your jurisdiction." (the Brazil post has a scope note; make it a standard pattern).

### Finding 2 — Recency field coverage is fixed; visible *review* provenance is not (LOW severity, was MEDIUM)

**Evidence:** `dateModified` now present on **112 of 113** posts. The only post missing it is `2026-09-29-amazon-blocks-meta-muse-ai-assistant.md`. `_layouts/post.html:93-95` renders an "Updated {date}" chip **only when** `dateModified` differs from the publish date.

**Why it matters:** The technical coverage gap is closed. The remaining gap is *semantic*: `dateModified` currently signals "the file changed," not "a human reviewed this for accuracy." A post carrying `dateModified == date` proves nothing, and the editorial policy's promised quarterly/annual review cadence is not surfaced to readers.

**Fix:**
- Add `dateModified` to `2026-09-29-amazon-blocks-meta-muse-ai-assistant.md` to reach 100%.
- Introduce a `last_reviewed:` field (distinct from `dateModified`) and render "Last reviewed {date}" so the review cadence in the editorial policy becomes verifiable.
- Link the chip to the editorial policy so the review commitment is one click away.

### Finding 3 — No physical address / verifiable legal entity on press pages (MEDIUM severity, unchanged)

**Evidence:** `press/transparency.md:16-19` lists "Legal entity: F9XR Team / Location: India" plus email and GitHub. `press/contact.md` offers email + social channels only. `press/about.md` says "based in India." `press/terms.md:51` references "the F9XR Team's registered operations in India" but no registration identifier appears anywhere. This is the **second consecutive audit** with no change.

**Why it matters:** Trustworthiness — one of the four E-E-A-T pillars — is strengthened by a verifiable, consistent physical/legal presence, especially for a site now publishing regulatory and commercial advice. "Who is legally behind this and where are they registered" is a core rater question.

**Fix:**
- Add the registered business address and any registration/tax identifier (CIN/GST/equivalent) to `press/transparency.md`, `press/contact.md`, and `press/about.md`.
- Keep the NAP (name, address, phone) identical to f9xr.org and any LinkedIn/Google Business Profile listing.

### Finding 4 — Monetization expanded and is well-labeled; needs a density cap and a named network (LOW-MEDIUM severity)

**Evidence:** Eonads runs sitewide: `_layouts/default.html:42` (page-bottom slot) plus `_layouts/post.html:67` (sidebar 300x600), mid-content (`post.html:330`), and bottom (`post.html:516`). Every slot renders an "Advertisement" label (`_includes/eonads.html`). **New and positive:** a dedicated `press/affiliate-disclosure.md` page (2026-10-01) lists every affiliate link and describes `rel="sponsored"` handling; 13 affiliate links across posts use `rel="sponsored"`.

**Why it matters:** Raters penalize YMYL-adjacent pages with excessive, misleading, or intrusive ads. The labeled, contained pattern is correct. Two residual risks: (a) a long post can now stack up to **four** ad slots (sidebar + mid + bottom + page-bottom), which approaches intrusive density; (b) `press/transparency.md:65-71` describes "third-party advertisements" but does not name Eonads.

**Fix (guard-rails):**
- Cap at **one ad per scroll-length section**; never place an ad above the fold on mobile before the first paragraph.
- Do not place ads inside FAQ or Key Takeaways blocks (high-value trust sections).
- Name the network on `transparency.md` (Eonads today; Google AdSense if that changes) and keep the affiliate disclosure page updated when links are added.

### Finding 5 — No site-level Organization/WebSite entity schema (LOW-MEDIUM severity, raised)

**Evidence:** `_includes/head.html` emits no `WebSite`/`Organization` JSON-LD. Per-post `BlogPosting` (`post.html:634-693`) emits a `publisher` `Organization` with a name, logo, and `sameAs`, but **no `address`, `founder`, `knowsAbout`, or `legalName`**. There is no `reviewedBy` property on the Person author.

**Why it matters:** Entity resolution for YMYL-adjacent content is strengthened when the publisher is a fully described Organization that the person authors link to. Adding `address` also doubles as machine-readable support for Finding 3.

**Fix:**
- Add a sitewide `Organization` (and `WebSite` with `SearchAction`) JSON-LD node in `head.html`, including `legalName`, `address` (once available), and `knowsAbout`.
- Add `reviewedBy` to the `BlogPosting` author block once Finding 1's field exists.

### Finding 6 — Rapid publish velocity vs. "scaled content abuse" scrutiny (NEW, MEDIUM severity)

**Evidence:** 42 posts published in the roughly four weeks between audis; 59% carry the team byline; the editorial policy discloses an AI-assisted drafting pipeline (`editorial-policy.md:30`). The site itself published coverage of Google's **September 2026 spam update**, whose documented focus includes **scaled content abuse** (`_posts/2026-10-03` and `2026-10-09`).

**Why it matters:** High-volume, AI-assisted, mostly team-bylined output in YMYL-adjacent niches is exactly the profile raters and automated systems inspect for scaled content abuse. Volume is not itself a violation, but the *ratio of automation and anonymous bylines to demonstrable first-hand expertise* is the risk. This is a new systemic observation since the last audit.

**Fix:**
- Raise the named-author share on every commercially or legally sensitive post (ties to Finding 1).
- Keep concrete first-hand evidence (test results, screenshots, live data) in high-volume posts so they are visibly not scaled filler.
- Maintain distinct structure per post and avoid templated near-duplicates; keep the "Produced using AI-assisted research… reviewed and edited" disclosure and link it to the editorial policy (already done).

### Finding 7 — Strong trust infrastructure, now broader (strengthening, not a defect)

**Evidence:** `/press/` now has **11 policy pages** (About, Contact, Editorial Policy, Correction Policy, Ethics & Fact-Checking, Transparency, Affiliate Disclosure, Terms, Privacy, Refund, Write for Us). Every post carries a `faq` block (113/113), a disclaimer block, a named author box, and volume-appropriate schema. 7 posts carry inline "not legal/financial advice" language; the Brazil post adds a scope note.

**Why it matters:** This is the transparency stack raters look for. It remains a genuine strength and has widened since the last audit.

**Fix (leverage):**
- Surface Editorial Policy + Transparency links more prominently (post footer/disclaimer block or a persistent "Trust & Policy" row under the author box).
- Promote the new Affiliate Disclosure page wherever affiliate links appear, once per post.

---

## 4. Priority Fix Matrix

| # | Finding | Severity | Effort | Action |
|---|---|---|---|---|
| 1 | Named authors + `reviewed_by:` layer on money/legal posts | HIGH | Medium | Add `reviewed_by:` field + render; move remaining commercial/legal posts off the team byline |
| 3 | Physical address / legal entity on press pages | MEDIUM | Low | Add address + registration no. to transparency/contact/about; align NAP with f9xr.org |
| 6 | Publish velocity vs. scaled-content-abuse scrutiny | MEDIUM | Medium | Raise named-author share; keep first-hand evidence; avoid templated duplication |
| 4 | Ad density cap + name the network | LOW-MEDIUM | Low | Max one ad per section; no ad in FAQ/takeaways; name Eonads in transparency.md |
| 5 | Site-level Organization/WebSite schema | LOW-MEDIUM | Low | Add Organization + WebSite JSON-LD in head.html; add `address`, `reviewedBy` |
| 2 | `dateModified` at 100% + visible "reviewed" stamp | LOW | Low | Add field to the 1 remaining post; add `last_reviewed:` + render |
| 7 | Promote trust & policy links under content | LOW | Low | Add "Trust & Policy" row under author box |

---

## 5. YMYL Readiness Summary

The site **improved materially in the last four weeks**: `dateModified` coverage went from ~79% to ~99%, a full affiliate-disclosure page was added, every post now has an FAQ block, and the policy library grew to 11 pages. The two gaps that remain — and that have now persisted across two audits — are (1) **named-human expertise and review accountability on money- and law-adjacent posts**, and (2) **a verifiable legal entity / physical address**. One new risk emerged from the site's own growth: at 113 posts with 59% team bylines and an AI-assisted pipeline, the site now sits in the profile that Google's September 2026 spam update scrutinizes as scaled content abuse. Closing the byline/review gap addresses both the E-E-A-T finding and the scaled-content risk at once, which makes it the highest-leverage next move.

---

*Report produced via evidence review of the repository: `_posts/` (113 posts), `_layouts/`, `_includes/`, `_data/authors.yml`, `press/` (11 pages), `_config.yml`, `authors/`. Verify live rendering, structured-data validity (Rich Results Test), and crawl behavior in Google Search Console before and after deploying changes.*
