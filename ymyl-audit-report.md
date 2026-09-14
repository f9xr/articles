# YMYL & E-E-A-T Audit Report — F9XR Articles

**Audit date:** 2026-09-14
**Site audited:** https://f9xr.github.io/articles/ (Jekyll static site, GitHub Pages)
**Audit scope:** YMYL classification, E-E-A-T signals, trust & transparency infrastructure, and monetization practices, evaluated against Google's Search Quality Rater Guidelines (YMYL + E-E-A-T sections, July 2022 update and later refinements).

---

## 1. Site Context (grounding)

- **Project type:** Static blog / publisher via Jekyll on GitHub Pages, run by F9XR Team, a digital architecture agency.
- **Primary topics:** SEO, AI search (AEO/GEO), local business growth, web performance, digital marketing, tool reviews.
- **YMYL exposure:** **Moderate.** The publishing focus is informational/educational marketing content. It is not a medical, tax, or legal advice publisher. However, a meaningful share of posts give **commercial and financial-adjacent advice** (tool recommendations, backlink methods, paid indexing services, domain purchases, ad spends, local SEO investments). Under the Search Quality Rater Guidelines, "advice that could affect a reader's money or business decisions" edges these pages into the **lower half** of YMYL scrutiny, where strong E-E-A-T signals are expected but the bar is not the medical tier.

---

## 2. Findings

### Finding 1 — Generic team byline on most high-intent posts (HIGH severity)

**Evidence:** `grep "author:" _posts/*.md` shows 71 matches; the majority are `author: "F9XR Editorial Team"`. A smaller set uses named authors (Ahetasham Uddin, Ankush Santra, Masna Sudhir).

**Why it matters:** The quality rater guidelines explicitly reward attributable expertise. For content that advises a reader on spending money or choosing a vendor, a named human whose credentials are verifiable outperforms a team byline. Raters are trained to look for "who wrote this and why should I trust them."

**Context that partially offsets this:** Author profiles exist for every byline, the post layout renders an author box, and the editorial policy documents a human review pipeline. The offset is strong this is not a bare "anonymous blog."

**Fix (prioritized):**
- For posts that recommend spending money or choosing tools/vendors, attribute to a **named author** whose profile shows relevant credentials. `_data/authors.yml` already has 4 named profiles with education/experience blocks (e.g., Mohammed Ahetasham Uddin lists a B.Com and ACCA candidacy, which maps to finance-adjacent tables).
- Add an optional `reviewed_by:` front-matter field and render "Reviewed by [Name]" in the author box. Roll this out for the highest-traffic money-adjacent posts first (tools, directories, paid-indexing, domain purchase).

### Finding 2 — No per-post "reviewed / last-reviewed" signal (MEDIUM severity)

**Evidence:** Most posts carry `dateModified` (56 of ~71), but posts published in September 2026 (e.g., 2026-09-11, 09-09, 09-04, 09-03) mostly omit it. No post exposes a visible "Reviewed by" or "Last reviewed" stamp.

**Why it matters:** YMYL guidance is time-sensitive. Readers deciding whether advice is current look for recency signals. The site has a strong editorial policy that promises quarterly/annual review, but the *facing* signals are inconsistent.

**Fix:**
- Add `dateModified` to every post (default it in the layout to `page.date` when absent — already done, but set the field explicitly on money-adjacent posts when refreshed).
- Render a small "Updated {date}" chip already supported in `_layouts/post.html` (the `post-updated-chip`) — ensure it shows via `dateModified` on all posts.

### Finding 3 — No physical address / verifiable legal entity detail on the articles press pages (MEDIUM severity)

**Evidence:** `press/transparency.md` lists "Legal entity: F9XR Team / Location: India" with an email and GitHub, but no registered address or company registration identifier. `press/contact.md` offers email + social channels only.

**Why it matters:** Trustworthiness, one of the four E-E-A-T pillars, is significantly strengthened by a verifiable, consistent physical presence (matches the NAP-consistency guidance in the audit criteria). The rater guidelines treat "who's behind this" as a core question for any site giving business/advice content.

**Fix:**
- Add the registered business address (and registration number where applicable) to the transparency page and contact page.
- Ensure the address matches F9XR's other properties (f9xr.github.io), since cross-property NAP consistency is itself a trust signal.

### Finding 4 — Monetization: good structural intent, must stay labeled and non-intrusive (LOW-MEDIUM severity)

**Evidence:** Eonads placements were added on 2026-09-14 across the layouts (`_layouts/default.html`, `_layouts/post.html`, `_layouts/page.html`) via responsive `_includes/eonads*.html` snippets. Each slot renders an "Advertisement" label, and `press/transparency.md` already states advertising is clearly separated and cannot influence editorial content.

**Why it matters:** Google's raters specifically penalize YMYL pages with excessive, misleading, or intrusive ads. The current design is aligned (labels, containment, no interstitials), which is the correct posture for a site moving onto an ad network before AdSense approval.

**Fix (guard-rails, not remediation):**
- Keep ad density at one slot per scroll-length section; never place an ad above the fold on mobile before the first paragraph.
- Do not place ads inside FAQ or Key Takeaway blocks (these are high-value YMYL trust sections).
- When AdSense is approved, migrate the loader to AdSense slots using the same labeled, non-intrusive pattern and update `press/transparency.md` to name the network (Eonads → Google AdSense).

### Finding 5 — Author schema is single-Person; no Organization authorship depth (LOW severity)

**Evidence:** The BlogPosting JSON-LD (`_layouts/post.html`) emits `author` as a `Person` and a publisher `Organization`, with `sameAs` for both. Good baseline.

**Why it matters:** For YMYL-adjacent commercial advice, connecting the person author to the publishing organization and its editorial policies in structured data strengthens entity resolution.

**Fix (optional, low effort):**
- Add a `"mainEntityOfPage"` already present. Optionally add `Organization` properties like `foundingLocation` and a `SameAs` to the legal/entity profile once Finding 3's address data exists.
- Add `isAccessibleForFree` / `hasPart` markup if paid content ever appears (currently not applicable).

### Finding 6 — Strong trust infrastructure that should be promoted more visibly (strengthening, not a defect)

**Evidence:** `/press/` contains About, Contact, Editorial Policy, Correction Policy, Ethics & Fact-Checking, Transparency, Terms, Privacy. The post layout renders a Disclaimer block above the fold bottom with "not professional legal, financial, or medical advice," and links the AI-assisted disclosure line to the Editorial Policy.

**Why it matters:** This is exactly the transparency stack Google's raters look for on YMYL-adjacent sites. It is currently a strength that is somewhat buried in the footer.

**Fix (leverage):**
- Surface the Editorial Policy + Transparency links more prominently, e.g., in the post footer/disclaimer block or a persistent "Trust & Policy" link row under the author box.
- For the handful of posts that discuss money decisions, link "How we verify advice" to the ethics/fact-checking policy inline, once per post.

---

## 3. Priority Fix Matrix

| # | Finding | Severity | Effort | Action |
|---|---|---|---|---|
| 1 | Named human bylines + optional "Reviewed by" on money-adjacent posts | HIGH | Medium | Add `reviewed_by:` field + render; reassign top commercial posts to named authors |
| 2 | Complete `dateModified` coverage + visible "Updated" chip | MEDIUM | Low | Add field to remaining posts (Sept 2026 list); chip already supported |
| 3 | Physical address / legal entity on press pages | MEDIUM | Low | Add to `press/transparency.md` + `press/contact.md`; align NAP with f9xr.github.io |
| 4 | Ad guard-rails (labels, density, no above-fold mobile) | LOW-MEDIUM | Low | Keep current labeled pattern; enforce density rules; update transparency.md with network name |
| 5 | Author/Publishing schema depth | LOW | Low | Follow-up item once address data lands |
| 6 | Promote trust & policy links under content | LOW | Low | Add "Trust & Policy" row under author box |

---

## 4. YMYL Readiness Summary

The site is **well positioned** for its YMYL exposure level. The publishing trust stack (policies + disclaimers + named authors + sourced content) is far above a typical business blog. The three gaps that will matter most as the site grows are (1) named human expertise on commercial-advice posts, (2) consistent recency signals, and (3) keeping the new ad inventory clearly labeled and non-intrusive. Closing those brings the site to the standard Google expects for content that quietly shapes business decisions.

---

*Report produced via evidence review of the repository: `_posts/`, `_layouts/`, `_includes/`, `_data/authors.yml`, `press/`, `authors/`. Verify live rendering and crawl behavior in Google Search Console before and after deploying the Eonads loader.*