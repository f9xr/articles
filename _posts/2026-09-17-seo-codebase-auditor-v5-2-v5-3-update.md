---
layout: post
title: "SEO Codebase Auditor v5.2 & v5.3: What Changed"
description: "The free SEO Codebase Auditor skill adds YMYL audits, Google spam policy checks, AI crawler governance, and sharper local, international, and shopping checks."
image: "https://f9xr.org/articles/assets/post-images/seo-codebase-auditor-v5-2-v5-3-update.webp"
image_width: 1200
image_height: 630
date: 2026-09-17
dateModified: 2026-09-17
author: "F9XR Editorial Team"
tags: [SEO Codebase Auditor, Technical SEO, YMYL, E-E-A-T, AI Crawlers, Google Spam Policy, Local SEO, International SEO, Merchant Center, F9XR]
keywords: "SEO Codebase Auditor, YMYL audit, E-E-A-T, Google spam policy, AI crawler governance, robots.txt, hreflang, Merchant Center feed, local SEO, international SEO"
faq:
  - q: "What's new in the SEO Codebase Auditor v5.2 update?"
    a: "v5.2 adds a complete YMYL (Your Money or Your Life) audit process inside Pillar 16. It includes a 7-class YMYL classification matrix, per-class hardening standards, site reputation assessment, website owner transparency checks, and harm-tier calibration. A YMYL readiness prompt template was added too."
  - q: "What changed in the v5.3 update?"
    a: "v5.3 is a gap-filling pass. It corrects rich results guidance (FAQ deprecated August 2023, How-To deprecated September 2023, first-party Review rules), adds Google spam policy compliance checks, people-first content and Google Discover checks, AI crawler governance for robots.txt, international hreflang and local Map Pack audits, and Merchant Center feed readiness. Prompt templates grew from 23 to 26."
  - q: "What is a YMYL audit and why does it matter?"
    a: "YMYL stands for Your Money or Your Life. Google holds pages that can affect health, finances, safety, or life decisions to its highest quality standards. A YMYL audit classifies each page into one of seven YMYL classes, checks the class-specific hardening requirements like credentials and sources, and flags gaps before they hurt rankings."
  - q: "How do I run the new AI crawler governance audit?"
    a: "Run the prompt '@SKILL.md run a Google spam policies & AI crawler governance audit'. It activates Pillars 02, 09, and 07, and checks robots.txt directives for GPTBot, Google-Extended, anthropic-ai, PerplexityBot, CCBot, and more, with a ready-to-use directive block you can paste in."
  - q: "Does v5.3 mean I should remove FAQ schema?"
    a: "No. Google stopped showing FAQ rich results for most sites in August 2023, so FAQ markup is no longer a rich result play for most businesses. But clean FAQPage schema is still useful for AI and voice extraction, and the layout on this site still renders it from front-matter. Keeping it is fine; counting on the snippet is not."
---

SEO guidance rots. What reads as a solid practice today gets corrected or retired a year later, and the tools that don't stay current quietly start handing out wrong advice. That's why the F9XR SEO Codebase Auditor ships regular version bumps. The two latest, v5.2 and v5.3, landed in one working session, and together they add a proper YMYL audit process, bring the rich results guidance in line with Google's 2023 changes, and close a batch of gaps across the 24 pillars.

If you haven't seen the [SEO CodeBase Auditor](https://f9xr.org/seo-audit-report-skill/) before, it's a free SKILL.md file that turns any AI coding assistant into a structured SEO auditor. The [original guide](https://f9xr.org/articles/2026/07/31/f9xr-seo-codebase-auditor-skill-guide.html) walks through the 24-pillar model, and the [v5.1 update](https://f9xr.org/articles/2026/08/26/seo-codebase-auditor-v5-1-update.html) covered the accuracy pass that fixed outdated pagination, Core Web Vitals, and meta description guidance. This article covers everything v5.2 and v5.3 added and why each piece matters for your site.

## What the two updates add, at a glance

| Version | Focus | What changed |
|---|---|---|
| v5.2 | YMYL audit process | New block inside Pillar 16 (E-E-A-T) with a 7-class YMYL classification matrix, per-class hardening standards, site reputation assessment, owner transparency checks, and harm-tier calibration |
| v5.3 | Gap-filling pass | Rich results corrections in Pillar 17, Google spam policy compliance in Pillar 2, people-first content and Google Discover checks in Pillar 7, AI crawler governance in Pillar 9, international and local SEO deep checks in Pillar 10, and Merchant Center feed readiness in Pillar 13 |

The pillar count stays at 24. All the new checks were folded into the existing pillars instead of bolted on as new numbers, so the [audit pillars index](https://f9xr.org/seo-audit-report-skill/docs/audit-pillars.html) stays accurate.

## v5.2: A real YMYL audit process

YMYL stands for "Your Money or Your Life." Google applies its most demanding quality standards to pages whose wrong information could hurt someone's wallet, health, safety, or major life decisions. Think medical advice, tax guidance, legal takes, or big purchase decisions.

The skill always checked generic E-E-A-T signals. What it never had was a structured way to decide whether a page even counts as YMYL. v5.2 fixes that. Inside Pillar 16 it now runs a full YMYL audit process, and it starts with classification.

### The YMYL classification matrix

| Class | Detection signals | Example topics |
|---|---|---|
| Health & Medical | Disease, treatment, medication, supplement claims | Symptom checkers, dosage advice, diagnosis content |
| Financial | Investing, taxes, loans, insurance, retirement | Trading tips, tax filings, pension planning |
| Legal | Rights, contracts, lawsuits, compliance | Wills, employment law, regulatory obligations |
| News & Current Events | Time-sensitive reporting on people, companies, events | Crime, politics, elections, breaking news |
| Shopping & E-Commerce | Products, prices, reviews, purchasing decisions | Buying guides, store reviews, deal roundups |
| Education & Career | Degrees, credentials, job decisions, admissions | College selection, certification paths, careers |
| Civic, Government & Safety | Public services, disaster info, voting, utilities | Emergency guidelines, voter registration, benefit claims |

Two rules sit under the matrix. First, the classification rule: any page whose wrong content could affect health, financial stability, safety, or life choices counts as YMYL, regardless of the intent behind it. Second, a page inventory requirement: the audit produces a list of every YMYL page on the site, so you know exactly what is held to the higher bar instead of guessing.

Our [guide to YMYL for business owners](https://f9xr.org/articles/2026/09/14/what-is-ymyl-in-seo.html) explains the concept in plain language. The skill now instructs every audit report to cite that guide in its Resources section whenever the site contains YMYL content, and it pairs well with our [E-E-A-T checklist](https://f9xr.org/articles/2026/08/04/google-e-e-a-t-checklist-every-seo-should-bookmark.html) for the broader trust picture.

### Hardening standards, one per class

Each YMYL class gets its own minimum bar. The skill is no longer generic about "improve your trust signals." It names the specific signals per vertical:

- **Health & Medical.** Credentials and NPI numbers for medical authors, a named medical review board, citations to sources like PubMed, CDC, and WHO, a clear disclaimer, and 12-month content freshness.
- **Financial.** CFP, CPA, or CFA credentials where relevant, citations to IRS, SEC, and FINRA material, explicit fee and risk disclosure, and no "guaranteed returns" language.
- **Legal.** A named attorney with jurisdiction, citations to specific statutes and case law, and a not-legal-advice disclaimer.
- **News & Current Events.** A named author, primary-source citations, a corrections policy, and clear separation between reporting and opinion.
- **Shopping & E-Commerce.** Disclosed review methodology, verified Review schema, real moderation on user reviews, and no manipulated pricing.
- **Education & Career.** Accreditation and expertise signals, data from sources like BLS and IPEDS, and transparent affiliate disclosure.
- **Civic, Government & Safety.** Citations to official sources, heightened recency requirements, and a process for correcting outdated information.

### Site reputation, transparency, and harm tiers

Three more pieces round out the v5.2 block.

Site reputation is now judged at the website level, not just the author level. That mirrors Google's August 2022 "unverified claims" update, which pushed the quality bar up for entire domains. A page can be competently written and still fail if the domain carries no reputation behind it.

Website owner transparency is now a checklist item. Named owner or operator, editorial responsibility, funding and ad disclosure, update cadence. Google's quality guidelines want to know who stands behind the content.

And harm-tier calibration sorts YMYL pages into three tiers:

| Tier | Examples | Bar |
|---|---|---|
| Directly harmful | Medical dosing, investing, legal obligations | Highest. Credentialed authors, primary sources, strict freshness |
| Casually harmful | Purchase decisions, general career advice | Qualified expertise, clear sourcing |
| Informational | Charity, support, non-critical how-tos | Basic expertise and accuracy |

The audit scales its sourcing and expertise requirements to the tier. That produces a more honest report than a flat "this page is YMYL, be careful" warning.

## v5.3: Closing the gaps the 24 pillars left open

v5.2 focused on one deep block. v5.3 spreads across the board. Most of it corrects guidance that had gone stale or adds checks that simply weren't there before.

### Rich results guidance brought up to date

Pillar 17 is where the skill checks eligibility for rich snippets, and it's where outdated advice hurts the most. v5.3 corrects three things:

- **FAQ rich results.** Google stopped showing FAQ rich results for most sites in [August 2023](https://developers.google.com/search/blog/2023/08/howto-faq-changes){:target="_blank" rel="noopener noreferrer"}, restricting them to highly authoritative government and health sites. The skill no longer counts FAQ markup as a general rich result opportunity. It still validates the FAQPage schema, because clean FAQ markup remains useful for AI and voice extraction, but it no longer oversells the snippet.
- **How-To rich results.** Removed from desktop in September 2023, leaving only mobile video how-tos as real plays. The skill no longer treats HowTo schema as a standalone rich result opportunity.
- **Review snippets.** Google's May 2023 change means only first-party reviews qualify, where the product is sold on the site or the business runs its own review process. The skill now flags Review schema that can't meet that first-party bar as wasted markup, which matches the eligibility rules in [Google's review snippet documentation](https://developers.google.com/search/docs/appearance/structured-data/review-snippet){:target="_blank" rel="noopener noreferrer"}.

If you've been holding onto FAQ schema expecting it to one day pay off in the SERP, the honest answer is that it won't for most sites. Keeping it is fine. Counting on it isn't.

### Google spam policy compliance in Pillar 2

The technical pillar now includes a March 2024 spam policy check. This matters because much of what Google targets isn't obviously malicious. It's subtle and structural. The skill flags four patterns:

| Pattern | What it is | Severity |
|---|---|---|
| Site reputation abuse | Parasite SEO, sponsored content sections, embedded third-party widgets riding your domain's authority | High |
| Scaled content abuse | Mass-generated template pages with near-zero information gain | High |
| Expired domain abuse | Fresh owners claiming old editorial history, purchase-driven repurposing | High |
| Cloaking and sneaky redirects | Serving different content to users and crawlers, often by user agent or device | Critical |

The last one is the only Critical tier in the category. [Google's spam policies](https://developers.google.com/search/docs/essentials/spam-policies){:target="_blank" rel="noopener noreferrer"} lay out the framework the check mirrors. Running this audit on a site with sponsored sections or aggressive affiliate content is the fastest way to find a parasite-SEO problem before Google does.

### People-first content and Google Discover

Pillar 7 gains a people-first content self-assessment that mirrors Google's framework. Four questions in essence: is this content made to help people, does it demonstrate first-hand expertise, is it useful to your audience, and would visitors be satisfied if your site didn't rank? The skill flags any page that fails the test.

It also adds Google Discover eligibility checks. Discover rewards titles that are click-worthy without being clickbait, high-res 16:9 images at 1200px or wider, fresh people-first content, and a steady publishing cadence. The audience here is a browser, not a searcher, and the skill now evaluates pages against that specific bar.

### AI crawler governance in Pillar 9

Robots.txt gets a full governance checklist in the sitemap pillar. The skill covers GPTBot, OAI-SearchBot, ChatGPT-User, Google-Extended (which is independent of indexing), anthropic-ai and ClaudeBot, PerplexityBot, perplexity-user, CCBot, and meta-externalagent. It ships a decision framework plus a ready-to-use robots.txt directive block you can paste straight into your file.

This pairs with two explainers we published on the same subject: [how to block AI crawlers on your site](https://f9xr.org/articles/2026/09/04/block-ai-crawlers-on-your-site.html) and [whether llms.txt and AI.txt actually work](https://f9xr.org/articles/2026/09/08/llms-txt-ai-txt-do-they-work-2026.html). Between the skill's directive block and those guides, you get a complete answer on who's reading your content and who you can keep out. Pillar 9 also gains a news sitemap check covering the News Sitemap extension and its 1000 URL limit.

### International and local SEO deep checks in Pillar 10

Two sub-audits land here.

The international SEO block is a full hreflang correctness matrix. Self-referencing hreflang tags required, reciprocal pairs on both sides, an x-default entry, ISO 639-1 and ISO 3166-1 format, tags placed in the head only, no canonical conflicts, sitemap alternates that match the page tags, and a defined structure choice. Most international sites get one or two of these right. The matrix catches the rest.

The local SEO block audits the Google Map Pack angle. Place or LocalBusiness schema with geo, NAP consistency across every surface, local landing page quality with doorway pages flagged as Critical, Google Business Profile completeness, first-party review signals under the May 2023 policy, and embedded Google Maps embeds checked for CLS safety.

### Merchant Center feed readiness in Pillar 13

For stores, Pillar 13 now checks whether you could actually pass a Google Shopping feed review. Product identifiers like gtin, mpn, and brand, feed attribute completeness, price and availability freshness across schema, feed, and live page, free listings and Surfaces across Google, schema-feed alignment so you keep a single source of truth, and a disapproval risk review covering shipping, images, and prohibited claims.

An e-commerce site can nail Product schema and still get disapproved at the Merchant Center because the feed and the product page disagree on price. The new check reconciles all three sources.

## Three new audit prompts

The skill ships 26 prompt templates now, up from 23, and the three new ones match the biggest additions:

> `@SKILL.md run a YMYL readiness audit`

Activates Pillar 16 and produces the classification, the per-class hardening recommendations, and the harm-tier report.

> `@SKILL.md run a Google spam policies & AI crawler governance audit`

Activates Pillars 02, 09, and 07. This is the one for parasite SEO, scaled content, and robots.txt control.

> `@SKILL.md run a Merchant Center feed readiness audit`

Activates Pillar 13, built for store owners who want the feed check without a full run.

The [prompt templates list](https://f9xr.org/seo-audit-report-skill/docs/prompt-templates.html) holds the full set, and each template names the pillars it activates.

## Why version bumps matter when the tool is free

A free tool that never changed would still be a decent bargain. But SEO doesn't stand still, and neither can the audit. These two versions matter for a few reasons:

- **YMYL is now a first-class check.** If your site touches health, finance, law, news, or any purchase path, you get a targeted audit instead of a generic trust checklist. That's the difference between a compliance review your readers and Google's quality raters would recognize and one still written for 2019.
- **The rich results advice is honest again.** No more recommending FAQ schema as a growth play. The tool tells you what the 2023 changes actually mean for your markup.
- **AI visibility is treated as an infrastructure decision.** With crawler governance inside the robots.txt pillar, you decide who may train on your content instead of leaving it to chance.
- **The gap checks surface before Google does.** Spam policy compliance, doorway page detection, feed and schema misalignment. These are the failures behind manual actions and folder-level ranking drops, and they're all catchable in code.

Teams using the skill report cutting audit time from half a day to a couple of minutes, per the [case study](https://f9xr.org/case-studies/seo-audit-report-skill.html). Two version bumps don't change the setup: one SKILL.md file, one prompt, all 24 pillars. The [monthly website audit checklist](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html) is a good place to schedule it in.

## Key Takeaways

- v5.2 adds a full YMYL audit process to Pillar 16, including a 7-class classification matrix, per-class hardening standards, site reputation assessment, owner transparency checks, and harm-tier calibration.
- v5.3 corrects rich results guidance, adds Google spam policy compliance, people-first content and Discover checks, AI crawler governance, international and local SEO deep checks, and Merchant Center feed readiness.
- The 24-pillar count is unchanged. Every new check was folded into an existing pillar.
- Prompt templates grew from 23 to 26, including dedicated YMYL, spam policy and AI crawler, and Merchant Center feed audits.
- FAQ and How-To schema still carry value for AI and voice extraction, but they are no longer rich result plays on most sites.
- AI crawler governance means you decide which AI companies may access your content, and the skill ships the robots.txt rules to make it stick.

## Conclusion

A codebase SEO audit is only as good as the rules behind it. The SEO Codebase Auditor stays useful because the rules keep moving, and v5.2 and v5.3 are the latest proof. Drop one file into your project root, run one prompt, and the audit now covers YMYL risk, Google's spam policies, AI crawler governance, plus the local and international deep checks most sites never run.

If that sounds like more than you want to run yourself, teams like F9XR specialize in this kind of technical SEO work across website development, website redesign, local SEO, and digital presence. The skill itself stays free either way.

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*