---
layout: post
title: "SEO Codebase Auditor v5.2 & v5.3: Full Changes"
description: "v5.2 adds YMYL auditing to the SEO Codebase Auditor skill; v5.3 adds spam-policy checks, AI crawler governance, and deeper local and international audits."
image: "https://f9xr.org/articles/assets/post-images/seo-codebase-auditor-v5-2-v5-3-update-details.webp"
image_width: 1200
image_height: 630
date: 2026-10-07
dateModified: 2026-10-07
author: "F9XR Editorial Team"
tags: [SEO Codebase Auditor, v5.2, v5.3, YMYL audit, Google spam policies, AI crawler governance, international SEO, local SEO, Google Discover, merchant center]
keywords: "seo codebase auditor, seo audit skill v5.3, ymyl audit seo, google spam policy checks, ai crawler governance, international seo audit, local seo audit, merchant center feed audit, google discover eligibility, people-first content"
faq:
  - q: "What is new in SEO Codebase Auditor v5.2?"
    a: "v5.2 adds a full YMYL (Your Money or Your Life) audit process inside Pillar 16, including a YMYL classification matrix of 7 classes, per-class hardening standards for health, finance, legal, news, shopping, education, and civic content, a site reputation assessment, owner transparency checks, and harm-tier calibration. Prompt templates grew from 22 to 23 with a YMYL Readiness Audit."
  - q: "What is new in SEO Codebase Auditor v5.3?"
    a: "v5.3 is a gap-filling batch. It corrects rich results guidance (FAQ and How-To deprecations, first-party Review rules), and adds Google spam policy compliance in Pillar 2, people-first and Google Discover checks in Pillar 7, AI crawler governance in Pillar 9, international and local Map Pack audits in Pillar 10, and Merchant Center feed readiness in Pillar 13. Prompt templates grew from 23 to 26."
  - q: "Does v5.3 add more pillars to the audit?"
    a: "No. The pillar count stays at 24. New checks were folded into existing pillars, and YMYL lives as a block inside Pillar 16. The 24-pillar claim stays accurate."
  - q: "How do I run the new audits?"
    a: "Use the prompt templates that ship with the skill, for example: run a YMYL readiness audit, run a Google spam policies and AI crawler governance audit, run an international and local SEO audit, and run a Merchant Center feed readiness audit."
  - q: "Where can I get the SEO Codebase Auditor skill?"
    a: "It is open source at github.com/f9xr/seo-audit-report-skill, with a guide and case study also published on f9xr.org."
---

*Last reviewed: October 7, 2026 | Reading time: about 8 minutes*

Every so often we ship a batch of updates to our free SEO Codebase Auditor skill. The v5.2 and v5.3 releases did two things: they made the audit sharper for high-stakes sites, and they closed several gaps users kept asking about. This post walks through every change, why it exists, and how to use it.

You can find the skill itself at [github.com/f9xr/seo-audit-report-skill](https://github.com/f9xr/seo-audit-report-skill), the [SEO Codebase Auditor skill guide](https://f9xr.org/articles/2026/07/31/f9xr-seo-codebase-auditor-skill-guide.html), and the [v5.1 update notes](https://f9xr.org/articles/2026/08/26/seo-codebase-auditor-v5-1-update.html). A shorter version of these v5.2/v5.3 notes is also in our [September 17 post](https://f9xr.org/articles/2026/09/17/seo-codebase-auditor-v5-2-v5-3-update.html). This article is the fuller changelog-style reference.

---

## v5.2: YMYL Audit Process

v5.2 added a complete **YMYL Audit Process** block inside Pillar 16 (E-E-A-T Signals). Your Money or Your Life topics are the ones where wrong content can hurt someone's health, money, safety, or life choices. Google holds these pages to a higher bar, and an audit tool that ignores them misses the most important trust failures.

### What the YMYL block contains

**A YMYL classification matrix.** Seven classes, each with detection signals and example topics:

| YMYL class | Example topics |
|---|---|
| Health & Medical | Symptoms, treatments, nutrition, mental health |
| Financial | Tax, investing, loans, insurance |
| Legal | Legal advice, contracts, rights, compliance |
| News & Current Events | Breaking news, elections, public safety |
| Shopping & E-Commerce | Product reviews, pricing claims, regulated goods |
| Education & Career | Certifications, degrees, career advice |
| Civic, Government & Safety | Voting, public programs, emergency guidance |

It also sets a classification rule: if a wrong answer on the page could affect health, financial stability, safety, or life choices, the page is YMYL regardless of its intent. And it requires a YMYL page inventory, so you cannot claim "we have no YMYL pages" without checking.

For the background on what YMYL means, see our explainer [what YMYL means in SEO](https://f9xr.org/articles/2026/09/14/what-is-ymyl-in-seo.html).

### Per-class hardening standards

Each class now has its own standards bullet. A few examples:

- **Health & Medical:** named credentials, a medical review board, citations to PubMed/CDC/WHO, a disclaimer, and a 12-month freshness target.
- **Financial:** CFP/CPA/CFA credentials, IRS/SEC/FINRA sourcing, fee and risk disclosure, and no guaranteed-return claims.
- **Legal:** a qualified attorney referenced, jurisdiction noted, statute or case-law citations, and a not-legal-advice disclaimer.
- **News & Current Events:** named author, primary-source citations, a corrections policy, and a clear opinion-versus-fact split.
- **Shopping & E-Commerce:** review methodology disclosure, verified first-party Review schema, moderation, and no manipulated pricing.
- **Education & Career:** accreditation or expertise signals, BLS/IPEDS data, and affiliate disclosure.
- **Civic, Government & Safety:** official-source citations, heightened recency, and correction of outdated information.

### Site reputation and transparency

The block also assesses website-level reputation, not just the author. That follows Google's August 2022 "unverified claims" update: for YMYL queries, what the site says about itself matters. Owner and maintainer transparency is part of the check too: named owner or operator, editorial responsibility, funding and ad disclosure, and an update cadence.

### Harm-tier calibration

Finally, the audit calibrates severity by harm tier: directly harmful, casually harmful, or informational (support, charity). Each tier scales the expertise and sourcing requirements, and the severity label follows the tier. That stops a low-stakes FAQ and a medical dosing page from getting the same "High" warning.

### Prompt template: YMYL Readiness Audit

Run it with: `@SKILL.md run a YMYL readiness audit`. Template count went from 22 to 23, and there is a copy-paste usage example in the "How a User Employs This Skill File" section. It also cross-references the existing YMYL bullet in Pillar 16, and cites our [what YMYL means in SEO](https://f9xr.org/articles/2026/09/14/what-is-ymyl-in-seo.html) guide in the report's Resources & References.

---

## v5.3: The Gap-Filling Batch

v5.3 does three things: it corrects rich results guidance that had drifted, it adds the spam-policy and people-first checks we were asked for, and it deepens international, local, AI crawler, and shopping-feed coverage.

### Pillar 17 correction: 2023+ rich result deprecations

Rich results guidance in older audits often still recommends FAQ and How-To markup everywhere. That is stale.

- **FAQ Rich Results:** deprecated in August 2023. Only highly authoritative government and health sites display them now. FAQ markup still helps AI and voice extraction, but it is no longer a general rich-result opportunity.
- **How-To Rich Results:** deprecated on desktop in September 2023. They now only show on mobile long-form how-to video pages. Not a standalone play.
- **Review Snippet:** the May 2023 change means only first-party reviews (products sold on-site, local businesses) qualify. Review schema that cannot meet the first-party bar is wasted markup and gets flagged.

### Pillar 2 addition: Google Spam Policy Compliance (March 2024)

Much of what Google targets is structural, not obviously malicious. The new sub-block flags four patterns:

- **Site reputation abuse (parasite SEO):** sponsored or partner-content sections and embedded third-party widgets with little oversight. Flagged High. See our explainer on [what parasite SEO is](https://f9xr.org/articles/2026/08/17/what-is-parasite-seo-should-business-use-it.html).
- **Scaled content abuse:** mass-generated template pages with near-zero information gain.
- **Expired domain abuse:** fresh domains claiming old editorial history, or purchase-driven repurposing. Flagged High.
- **Cloaking and sneaky redirects:** UA- or device-based content swaps. Flagged Critical.

### Pillar 7 additions: people-first content and Google Discover

**People-first content self-assessment.** The skill now mirrors Google's framework with four questions plus search-first flag signals. It asks whether the content exists to help the reader or mainly to catch traffic, and whether it leaves the reader feeling they got a complete answer.

**Google Discover eligibility.** A Discover checklist: click-worthy-but-accurate titles (no clickbait), high-quality images of at least 1200px in 16:9, people-first fresh content, a publishing cadence, and content policy compliance.

### Pillar 9 additions: AI crawler governance and News sitemap

**AI crawler governance.** robots.txt checks for GPTBot, OAI-SearchBot, ChatGPT-User, Google-Extended (which is independent of indexing), anthropic-ai/ClaudeBot, PerplexityBot/perplexity-user, CCBot, and Meta's meta-externalagent. A decision framework and a ready-to-use robots.txt directive block are included, plus the caveat that blocking is a choice you should review on a schedule. Our guide on [blocking AI crawlers on your site](https://f9xr.org/articles/2026/09/04/block-ai-crawlers-on-your-site.html) and our explainer on [llms.txt and ai.txt](https://f9xr.org/articles/2026/09/08/llms-txt-ai-txt-do-they-work-2026.html) cover the same decision.

**News sitemap.** The `<news:news>` extension, with the 1000-URL limit noted.

### Pillar 10 additions: international deep checks and local Map Pack audit

**International SEO deep checks.** A full hreflang correctness matrix: self-referencing tags required, reciprocal pairs, x-default, ISO 639-1 and ISO 3166-1 formats, tags in `<head>` only, no canonical conflicts, and sitemap alternates consistency.

**Local SEO (Map Pack) audit.** Place/LocalBusiness schema with geo, NAP consistency across surfaces, local landing page quality (doorway-page flag is Critical), Google Business Profile completeness, first-party review signals per the May 2023 policy, embedded Google Maps CLS safety, and Map Pack rating triggers.

### Pillar 13 addition: Merchant Center feed readiness

An e-commerce feed check: product identifiers (gtin, mpn, brand), feed attribute completeness, price and availability freshness (schema versus feed versus live page), free listings surfaces, schema-feed alignment as a single source of truth, and disapproval risk review covering shipping, images, and prohibited claims.

### Cross-reference updates

The llms.txt guidance in Pillar 18 now cross-references the Pillar 9 AI crawler governance block, because llms.txt is opt-in while robots.txt is gating. The Pillar 16 YMYL bullet now points at the new YMYL block. The front-matter description was updated to include YMYL compliance, spam-policy checks, and AI crawler governance.

### New prompt templates

Template count went from 23 to 26, adding:

- `@SKILL.md run a Google spam policies & AI crawler governance audit` (Pillars 02, 09, 07)
- `@SKILL.md run an international & local SEO audit` (Pillar 10)
- `@SKILL.md run a Merchant Center feed readiness audit` (Pillar 13)

---

## What Did Not Change

The pillar count is still 24. New checks were folded into existing pillars rather than adding new ones, so any "24 SEO pillars" claim in the README and marketing copy stays accurate. Version History and CHANGELOG.md both carry the v5.2 and v5.3 entries, and the September 2026 spam update and Google's newer guidance shaped where the checks landed. See our [September 2026 spam update guide](https://f9xr.org/articles/2026/10/03/google-september-2026-spam-update-guide.html) and the [fact-check guidance update](https://f9xr.org/articles/2026/10/02/google-ai-content-guidance-fact-check-update.html) for the policy context.

---

## How to Use These Updates

If you already use the skill, the practical steps are:

1. Pull the latest SKILL.md from the [GitHub repo](https://github.com/f9xr/seo-audit-report-skill/commit/d288dfb6647c8e73889ebb63a65a35dede4a4260) and replace your copy.
2. Run the four new prompt templates on your site or a client site. The output plugs straight into the seo_audit_report.md format.
3. If your site publishes YMYL content, run the YMYL Readiness Audit first. Harm-tier severity affects what you fix in week one.
4. Re-run the rich results check. FAQ and How-To markup that no longer earns rich results should be re-scoped for AI extraction instead.

For the commercial context, the skill ships inside our audit work on the [SEO Codebase Auditor skill page](https://f9xr.org/seo-audit-report-skill), and it powers engagements like the [monthly website audit](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html) cadence we use with small business clients.

---

## Key Takeaways

- **v5.2 added a full YMYL audit process** inside Pillar 16: classification matrix, per-class hardening standards, site reputation, owner transparency, and harm-tier severity.
- **v5.3 corrected rich results guidance:** FAQ and How-To deprecations noted, and only first-party Review snippets qualify.
- **New spam-policy checks in Pillar 2** cover site reputation abuse, scaled content, expired domains, and cloaking.
- **Pillar 7 gained a people-first self-assessment and Google Discover eligibility checks.**
- **Pillar 9 added AI crawler governance** for robots.txt (GPTBot, ClaudeBot, PerplexityBot, CCBot, and more) plus a News sitemap note.
- **Pillar 10 added hreflang matrix checks and a local Map Pack audit.**
- **Pillar 13 added Merchant Center feed readiness.**
- **Prompt templates grew 22 to 26** across v5.2 and v5.3, with ready-to-run commands for each new audit.
- **Pillar count remains 24.** New checks were folded into existing pillars.

---

## Conclusion

The v5.2 and v5.3 updates make the SEO Codebase Auditor meaningfully stronger exactly where most audits are weakest: high-stakes YMYL content, modern spam policy enforcement, AI crawler governance, and local plus international correctness. Nothing about the entry point changed. Drop the skill into your repo, run the prompts, and read the report.

If you would rather have a human run it, F9XR Team offers technical SEO audits and ongoing website audits as part of our website development, website redesign, local SEO, and digital presence work. The [services page](https://f9xr.org/pages/services.html) lists everything, and the [contact page](https://f9xr.org/pages/contact.html) is the fastest way to reach us.

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
