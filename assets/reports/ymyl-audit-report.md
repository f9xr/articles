# YMYL & E-E-A-T Audit Report — F9XR Articles

- **Audit date:** 2026-10-17 (previous audit: 2026-10-12)
- **Site audited:** https://f9xr.org/articles/ (GitHub Pages static Jekyll site)
- **Audit scope:** YMYL classification, E-E-A-T signals, trust & transparency infrastructure, structured data, advertising, and crawler governance. Evaluated against Google Search Quality Rater Guidelines (YMYL & E-E-A-T) and recent guidance on AI crawler governance and spam policies (March 2024).
- **Methodology:** Code review across 120 posts, _layouts/*, _includes/*, press/*, uthors/*, _data/authors.yml, robots.txt, llms.txt, i.txt, security.txt, humans.txt.

## Executive Summary

F9XR Articles is a technical publication focused on web architecture, AI integration, local SEO, web performance and digital growth. Most content is informational (how-to, explainers, guides). YMYL-adjacent topics occur (e.g., marketing/ads configuration, analytics) but no direct medical/financial advice. Trust infrastructure is solid; a few owner-dependent gaps remain.

| Metric | Status | Notes |
|---|---|---|
| Critical YMYL risks | 0 | No unqualified life/health/financial advice detected |
| High | 2 | Missing real NAP/address/phone/legal entity; ad-network disclosure accuracy (mitigated) |
| Medium | 1 | eviewed_by not yet present on all posts (scaffolding added) |
| Overall YMYL Readiness | Good | Meets people-first principles |

## YMYL Classification

| Category | Coverage | Notes |
|---|---|---|
| Health/medical | Minimal | No personal health advice |
| Financial | Minimal | No investment/trading recommendations; ads/analytics configuration context |
| Legal | Limited | Policy pages (editorial/ethics/correction/transparency) present |
| Safety | Limited | Security.txt present |
| E-commerce | Present | Commerce tooling articles (Meta Pixel, catalogs, shopping agents) |
| Other (SEO/AEO/GEO) | Primary | Informational/educational |

## E-E-A-T Signals (Experience, Expertise, Authoritativeness, Trustworthiness)

| Signal | Assessment | Action Taken/Notes |
|---|---|---|
| Identity | OK | Publisher F9XR Team; author profiles exist; avatar/logo paths normalized; Organization schema added sitewide on non-home pages |
| Expertise | OK | Named authors with structured credentials in _data/authors.yml; collective byline used for some legacy posts |
| Experience | Good | Content draws on practical implementation; first-hand usage common |
| Authoritativeness | OK | Topic coverage breadth; internal linking; author bios |
| Trustworthiness | OK | Policies present; disclosure line on posts; security.txt; agent-discovery transparency |

## Key Findings & Fixes

| # | Area | Issue | Severity | File(s) | Status |
|---|---|---|---|---|---|
| 1 | Transparency | Ad disclosure claimed GitHub Pages policies (inaccurate); ads served by Eonads | High | press/transparency.md | FIXED (clarified third-party ad network) |
| 2 | NAP/Identity | No verifiable street address, phone, legal entity; contact is hello@f9xr.org | High | press/*.md | OPEN (owner) |
| 3 | Review Process | eviewed_by not present on all posts; layout schema/rendering + default scaffold added | Medium | _layouts/post.html, _config.yml | FIXED (scaffolding) |
| 4 | AI Crawler Governance | Explicit AI crawler policy missing; added documented allow rules | Low | obots.txt | FIXED |
| 5 | Entity Graph | BlogPosting/WebPage publisher not consistently @id-linked; sitewide Organization/WebSite added | Low | _includes/head.html, _layouts/post.html, _layouts/page.html | FIXED |

## Compliance Checks

- **Editorial/ethics/correction/transparency:** Present. Disclosures accurate post-fix.
- **Affiliate disclosure:** Present (verify updated disclosure across pages if desired).
- **Security contact:** security.txt exists (mailto:hello@f9xr.org).
- **Canonicalization & indexability:** Correct.
- **AI transparency:** i.txt, llms.txt, llms-full.txt present; robots.txt documents AI crawler policy.

## Recommendations

1. **Priority (High):** Publish real NAP, legal entity details, and/or a business registration note in transparency/policy pages.
2. **Medium:** Add eviewed_by to high-value posts as process matures; keep consistency.
3. **Low:** Ensure all policy pages consistently reference advertising practices.
4. **Ongoing:** Monitor AI crawler traffic and update crawler allowlist as platforms evolve.

## Conclusion

Overall YMYL readiness is Good. No content-level violations; structural trust improved. Key remaining gap is business identity (NAP) — owner-dependent.
