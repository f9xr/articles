---
layout: post
title: "Monthly Website Audit: 15 Checks, Real Findings"
description: "What a real monthly website audit found on a 75 page site: 15 checks, 3 fixed defects, 3 false alarms, and the growth gap that mattered most."
image: "https://f9xr.org/articles/assets/post-images/monthly-website-audit-real-findings.webp"
image_width: 1200
image_height: 630
date: 2026-10-01
dateModified: 2026-10-01
author: "F9XR Editorial Team"
tags: [Monthly Website Audit, Technical SEO, SEO Audit, Website Maintenance, Meta Descriptions, Schema Markup, Web Security, AEO, Internal Linking, Core Web Vitals]
keywords: "monthly website audit, seo audit findings, technical seo audit, meta description length, noindex pages, schema markup audit, internal linking audit, website maintenance checklist, github actions permissions, aeo audit"
faq:
  - q: "How often should you run a website audit?"
    a: "Once a month for most sites, and any time you ship a template change, migrate a host, or publish a batch of new pages. Monthly catches drift in metadata, headings, links, and image weight. Structural changes (new theme, new section, domain move) need a full audit on day one, because those break things in ways drift does not."
  - q: "What is the most common defect a monthly audit finds?"
    a: "Metadata length drift. In the audit described here, 11 pages had meta descriptions outside the 70 to 160 character window, and 8 of them were too short. It is boring, it is invisible on the page, and it is the cheapest thing on the list to fix."
  - q: "Do noindex pages hurt my SEO?"
    a: "No. A page marked noindex, follow is deliberately kept out of the search index while still passing link equity to the pages it links to. They only become a problem when a page you wanted indexed carries noindex by accident, or when your sitemap lists URLs that the noindex tag contradicts."
  - q: "What can a website audit not tell you?"
    a: "Your backlink profile. Referring domains, anchor text distribution, and domain authority live in Google Search Console or a third-party index, never in your repository. An audit can confirm that no outbound link is marked nofollow and that every external link carries rel noopener, but the actual link graph has to come from a data source you do not own."
  - q: "How long does a full 15 check website audit take?"
    a: "Roughly two to four hours on a site of 50 to 100 pages, once the crawl script exists. Most of that time goes to judgment calls rather than scanning: deciding whether an empty alt value is correct, whether a duplicate title is a real conflict, and whether a passing check is actually a problem in disguise."
---

Most website audits produce a 40 page report nobody reads. The one behind this post produced three fixes, three false alarms worth understanding, and one growth problem hiding in plain sight.

A monthly website audit is a fixed list of checks you run against your own site every 30 days, aimed at the built output rather than the source files. Fifteen checks is enough to catch nearly everything that quietly degrades a site over time: truncated metadata, a page with no top level heading, a deployment workflow that lost its permissions, or thirty one posts shipping the same social card.

Here is what one of those passes actually found on a 75 page publication we maintain. Three audits failed and got fixed. Eight passed clean. One passed with a gap that costs more traffic than any of the fixes. One does not apply. One cannot be measured from the repo at all.

If you want the checklist itself, we published it separately in our [monthly website audit checklist](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html){:target="_blank" rel="noopener noreferrer"}. This post is what came back when it was run against a live site.

---

## Why Audit the Built Site, Not the Source

The single most useful habit in this whole process is auditing the output of the build instead of reading the markdown and templates.

Three of the four problems from this pass were invisible in source review. One metadata field was correct in the file and broken in the rendered page, because the template truncated it mid sentence and emitted a literal ellipsis into the meta tag. One page had no heading because a layout branch skipped the intro block. One deployment workflow was missing a settings block that no template touches at all.

A source audit catches what you wrote. A built audit catches what your reader receives. Google reads the second one, and so does every AI answer engine that quotes you.

## What the 15 Checks Cover

| # | Check | Result this pass | What it protects |
|---|---|---|---|
| 1 | Image SEO | Pass with a gap | Search visibility and page weight |
| 2 | Broken links and images | Fixed | Crawl budget and user trust |
| 3 | Speed and Core Web Vitals | Pass | Rankings and conversion rate |
| 4 | Mobile usability | Pass | The majority of your traffic |
| 5 | On page SEO | Fixed | How pages render in results |
| 6 | Content freshness | Pass, monitor | Index recency signals |
| 7 | Backlink profile | Not measurable locally | Authority |
| 8 | Security | Fixed | The whole asset |
| 9 | Indexing signals | Pass | What gets crawled and stored |
| 10 | Local SEO | Not applicable | Only for physical businesses |
| 11 | Schema markup | Pass | Rich results and AI answers |
| 12 | Analytics | Pass | Measurement accuracy |
| 13 | Duplicate content | Pass | Ranking clarity |
| 14 | Internal linking | Pass | Page distribution and topical structure |
| 15 | AEO and AI search | Pass | How AI tools cite you |

Eight clean passes out of fifteen is the healthy state. A first audit on an older site often lands closer to four, and that is fine. The value is in the trend line, not the single month.

## The Three Audits That Failed

### 1. Eleven meta descriptions outside the safe window

Eight descriptions were too short, three were too long. The worst was a 200 character description on a landing page that the build system was cutting off mid sentence, which meant Google was reading a fragment that ended in an ellipsis.

The same page had a second problem worth naming. Its SEO title was still hardcoded to last month's month name while the page was serving this month's content. Both fields are now evergreen, so the page will not go stale again next cycle.

Why this drifts so reliably: descriptions get written once and never revisited, while the page underneath them keeps changing. A monthly character count is the cheapest monitoring you will ever set up. Google renders somewhere between 155 and 160 characters on a typical desktop result, and mobile truncates earlier still, so the window that works everywhere is roughly 70 to 160.

### 2. One page with no H1 at all

The archive page opened straight onto month headings. There was no H1 anywhere in the file, and therefore no H1 in the rendered page.

Google does not penalize this. What it costs you is the page's own subject line. A screen reader user gets no top level label for the page, and a topic model extracting structure has to infer the page's name from the URL.

The usual cause is a template branch that was never tested. Fixing it took one intro block, and the verification is a count: every page on the site now returns exactly one H1. That check belongs in your monthly run because the next template change can reintroduce it.

### 3. A deployment workflow with no permissions block

One GitHub Actions workflow had no permissions declaration, so it silently inherited whatever the repository default was. It now sets read only access to repository contents, which is the minimum it needs to publish.

This is the fix that matters most and takes ten minutes. The default for workflow permissions has tightened over time, but a workflow with no explicit block is one repository settings change away from having write access to everything. GitHub's own [guide to automatic token authentication](https://docs.github.com/en/actions/security-guides/automatic-token-authentication){:target="_blank" rel="noopener noreferrer"} explains the model, and the rule is simple: declare the least privilege you need on every workflow, even the ones that only read.

The same pass confirmed zero hardcoded secrets in the repository, no private keys, and a security contact file present at both the root and the well known path.

## The Gap That Outranked All Three Failures

Image SEO passed. Every one of the 516 image tags on the site had an alt attribute, and all 19 asset files had descriptive names. Total asset weight was 935 KB.

The gap was social card variety. Thirty one of thirty five posts shared one hero image as their Open Graph card, and three more posts had no hero at all, so they fell back to a single default image.

Google Discover weights visual variety heavily when it decides what to show. A month of feed posts with an identical thumbnail reads as duplicate content to the feed, and it flattens click through rate at exactly the moment you are trying to win a new reader. The same repetition shows up in your Telegram channel, where the visual monotony costs you more than the ranking loss does.

The fix is unglamorous. Give every post its own card, and rotate the shared card on a schedule instead of letting it run for a month. Our [complete image SEO guide](https://f9xr.org/articles/2026/08/14/image-seo-audit-complete-guide.html){:target="_blank" rel="noopener noreferrer"} covers the alt text and format side of the same audit.

## Three Things That Looked Broken and Were Not

This is the part of a real audit report that almost never gets published, and it is the part that saves you from breaking a working site.

**The font stylesheet appears twice in every page.** On a first pass this reads as a duplicate request and a wasted connection. It is the standard async load pattern: a stylesheet loaded with media set to print, swapped to all on load, plus a noscript fallback for users with JavaScript disabled. Deleting either copy breaks someone. Leave it.

**Category pages return HTTP 200 while carrying noindex.** Fifteen pages on this site do exactly that, and it looks like a soft error in any crawler report. They are deliberate utility pages, such as empty listing pages and the search page, kept out of the index on purpose. A 200 response paired with a noindex tag is the correct combination, and reading the tag takes one second. Read it before you go change the status code.

**One hundred and fifty images have an empty alt attribute.** Empty alt is the correct markup for decorative images, and on this site every one of them is either the analytics pixel or the footer logo. An audit that flags all empty alt values as missing will generate 150 false positives and teach you to ignore the tool. Our [image SEO audit walkthrough](https://f9xr.org/articles/2026/08/14/image-seo-audit-complete-guide.html){:target="_blank" rel="noopener noreferrer"} covers when empty alt is right.

## The One Check You Cannot Run From Your Own Repo

Backlinks are not in your repository. Referring domains, anchor text distribution, and authority scores live in Google Search Console, Bing Webmaster Tools, or a paid index. No amount of crawling will produce them.

What the repo can tell you is worth checking anyway. On this site, zero outbound links were marked nofollow, which is expected because no paid placements exist, and all 452 external links carried rel noopener and noreferrer, which is correct for any link that opens in a new tab.

So the monthly run records a baseline, and the real backlink review happens once a quarter in Search Console, compared against the previous baseline. The full backlink picture is covered in our [link building and digital PR framework](https://f9xr.org/articles/2026/08/26/link-building-digital-pr-strategy-2026.html){:target="_blank" rel="noopener noreferrer"}.

## How to Run This Audit on Your Own Site

The order matters more than the tool choice.

1. **Build the site first.** Every finding below is measured against the built tree, not your source files.
2. **Crawl every page** and extract titles, descriptions, headings, images, links, canonical tags, robots tags, and JSON LD into one table.
3. **Count, do not eyeball.** Zero missing alt attributes, zero broken internal links, one H1 per page, 60 indexable URLs matching 60 sitemap entries. Numbers survive; impressions do not.
4. **Compare against last month.** New failures are the priority. A defect that has been there for four months is still a defect, but it is not news.
5. **Check what changed in the build.** Template edits, new sections, and new pages are where defects are born.
6. **Write the judgment calls down.** Every false alarm you investigated becomes a check you do not waste time on next month.
7. **Log the baseline.** Numbers next month are only meaningful against numbers this month.

The build verification matters as much as the crawl. In this pass the build completed in just over two seconds, the output validator passed, and the re-verification after fixes showed zero titles over 60 characters, zero descriptions outside the window, and zero pages without exactly one H1.

## How to Tell a Defect From a Decision

The hardest part of auditing is deciding whether a finding is a bug.

An empty alt value on a tracking pixel is a decision. A missing permissions block on a publish workflow is a defect. A noindex tag on a category page is a decision until you notice that category has real post volume behind it, at which point it is a missed opportunity. The same noindex tag, a year later, on a category with forty posts, is the most expensive thing on the list.

A useful test: if changing it would improve something measurable, it is a fix. If changing it would only make the report look cleaner, it is a note. Write notes in a separate section so the fix list stays short enough that somebody actually works through it.

The AI visibility check passed here with room to spare. All 37 news posts carried speakable schema, 31 carried FAQ page schema with 93 question and answer pairs, and 36 of 37 opened with a direct answer rather than a lede. The machine readable text files were regenerated on the same day, at 3.7 KB and 15.2 KB. We covered that layer in our [guide to essential txt files for SEO, AEO, and GEO](https://f9xr.org/articles/2026/08/08/essential-txt-files-seo-aeo-geo-2026.html){:target="_blank" rel="noopener noreferrer"}, and teams building it out from scratch usually start with our [AI visibility optimization service](https://f9xr.org/services/ai-visibility-optimization.html){:target="_blank" rel="noopener noreferrer"}.

## Key Takeaways

- Audit the built output. Three of the four problems this pass found were invisible in the source files.
- Metadata length drifts more than anything else. Eleven pages were out of the 70 to 160 character window, and the fix takes minutes.
- A workflow with no permissions block is a real security finding, not a style preference.
- Repetition is expensive. Thirty one posts sharing one social card flattens click through on the surfaces where discovery actually happens.
- Investigate before you fix. A duplicated font stylesheet and a noindex page returning 200 are both correct as they stand.
- Record a baseline you can compare against, because a single month of numbers tells you almost nothing.

## Conclusion

A monthly website audit earns its keep through the boring checks that nobody asks about. Eleven descriptions, one missing heading, one permissions block. Each one takes minutes to fix and would otherwise have sat there for months, quietly costing you impressions, security margin, or click through rate.

The most useful output of the pass was the list of things that looked broken and turned out to be correct. That list is what stops a future audit from breaking a working site. If you want the same thing run against your own property, teams like F9XR handle this as part of ongoing [website development and redesign](https://f9xr.org/pages/services.html){:target="_blank" rel="noopener noreferrer"} and technical SEO maintenance, and the F9XR [SEO CodeBase Auditor skill](https://f9xr.org/articles/2026/07/31/f9xr-seo-codebase-auditor-skill-guide.html){:target="_blank" rel="noopener noreferrer"} reads your codebase and writes the same report automatically.

---

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
