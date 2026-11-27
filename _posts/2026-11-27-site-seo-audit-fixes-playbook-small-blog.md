---
layout: post
title: "How We Ran a Site SEO Audit and Fixed What Broke"
description: "A practical walkthrough of a real site SEO audit: what we checked, what we fixed, and how you can run the same playbook on your own blog."
image: "https://f9xr.org/articles/assets/post-images/site-seo-audit-fixes-playbook-small-blog.webp"
image_width: 1200
image_height: 630
image_caption: "A site SEO audit is most useful when it ends with fixes, not just a report."
image_alt: "Laptop and checklist representing a site SEO audit and fix workflow"
date: 2026-11-27
author: "F9XR Editorial Team"
category: "Technical SEO, Site Audits, Small Business SEO"
permalink: /2026/11/27/site-seo-audit-fixes-playbook-small-blog.html
tags: [Site SEO Audit, Technical SEO, SEO Checklist, Jekyll SEO, Structured Data, Sitemap, JSON Feed, Small Business SEO, Website Maintenance, Content Quality]
keywords: "site seo audit, seo audit checklist for blogs, technical seo audit, fix seo issues, jekyll seo audit, website audit playbook, sitemap feed schema audit, blog seo maintenance"
faq:
  - q: "What should a small blog check first in an SEO audit?"
    a: "Start with crawl and discovery basics: robots.txt, sitemap, RSS or JSON feeds, canonical URLs, and whether important pages return HTTP 200. Then check metadata, structured data, image alt text, internal links, and page experience. Fix issues that block crawling or break trust before chasing new content."
  - q: "Can a small YAML or template error break a whole site?"
    a: "Yes. On static sites, a front matter or template error can stop the build, which means new posts and fixes may never go live. Always test the build locally or in CI before and after publishing."
  - q: "Should you put audit reports in your public website build?"
    a: "Usually not. Internal audit notes can be useful in a repository, but they should be excluded from the public site build if they are not meant for readers or if they contain raw notes that could cause rendering issues."
  - q: "How do you know if an SEO fix actually worked?"
    a: "Verify the live URL, not just the source file. Check the HTTP status, view the rendered HTML, validate structured data, confirm the sitemap/feed includes the page, and monitor Search Console after deployment."
  - q: "Does fixing technical SEO guarantee higher rankings?"
    a: "No. Technical fixes remove barriers and improve clarity for search engines and users. Rankings also depend on content quality, relevance, competition, links, and time."
---

We recently ran a full site SEO audit on our own publication. Not a quick checklist, and not a tool screenshot pasted into a document. We checked live endpoints, templates, content metadata, images, feeds, and deployment behavior. Then we fixed what we found.

This article is the practical version of that work. I am keeping it useful for readers, so I am not sharing private internal details. The goal is simple: show the audit flow, the kinds of issues we found, and how you can run the same playbook on your own blog.

## Why Run a Site SEO Audit on Your Own Blog?

Most blogs publish new posts and assume the old ones are fine. Then a feed breaks, a page template outputs bad schema, or a build error quietly stops fresh content from going live. The site looks normal to the team because the source files look normal.

A site SEO audit catches those gaps. It answers three questions:

- Can search engines and readers reach your important pages?
- Does each page clearly explain what it is about?
- Is anything in your templates, feeds, or metadata sending confusing signals?

If you want a broader routine, our [monthly website audit checklist](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html) is a good companion. This post focuses on the audit we ran and the fixes that came out of it.

## The Audit Playbook We Used

We kept the process simple. You can copy it as is.

| Step | What We Checked | What We Looked For |
| --- | --- | --- |
| 1. Live endpoints | robots.txt, sitemap, RSS, JSON Feed, key URLs | HTTP 200, valid format, fresh content |
| 2. Templates and schema | Head tags, JSON-LD, canonicals, author data | Invalid markup, missing fields, wrong fallbacks |
| 3. Content pages | Titles, descriptions, headings, section order | Duplicate intent, confusing structure, missing context |
| 4. Images | Hero images, alt text, file size, variants | Broken paths, missing alt, hotlinked or oversized files |
| 5. Build and deploy | Local build, deployment logs, live verification | Errors that block publishing or create stale pages |
| 6. Post-fix verification | Live URLs, sitemap/feed, IndexNow | Proof that fixes actually shipped |

The key rule: never stop at "fixed in code." A fix only counts when the live page works.

## Issue 1: A Feed Endpoint Looked Fine in Source, but Not Live

One of the first things we checked was our JSON Feed. The source file existed. The link tag existed. But when we fetched the live feed URL, it returned raw template code instead of valid JSON.

That is a nasty kind of problem because it can sit there unnoticed. Your site pages may load fine while a feed consumer gets garbage.

### What we did

- Fetched the live feed URL and inspected the raw response.
- Confirmed the file was not being processed as intended.
- Fixed the source issue and rebuilt.
- Verified the live response returned HTTP 200 and valid JSON Feed content.

### How you can copy this

Do not assume your feeds are fine because they exist in the repo. Open them in a browser, fetch them with curl, and run them through a validator or JSON parser. Check both RSS and JSON Feed if you offer them.

```text
Quick feed check
1. Open /feed.xml and /feed.json in a browser.
2. Confirm HTTP 200.
3. Confirm the content is rendered, not template code.
4. Validate the format.
5. Check that recent posts appear.
```

## Issue 2: A Small YAML Error Broke the Build

This was the biggest lesson. A single front matter formatting issue in a post description caused the site build to fail. The content file looked harmless, but the build system could not parse it.

When a static site build fails, the damage is bigger than one post. New posts may not go live. Old fixes may not deploy. Your sitemap and feeds can go stale.

### What we did

- Checked the build error and traced it to a front matter value.
- Fixed the YAML formatting.
- Rebuilt locally until the build passed.
- Pushed the fix and verified the affected pages went live.

### How you can copy this

Treat front matter like code. Quote values that contain colons, special characters, or long punctuation. Run a local build before pushing. If your publishing workflow allows it, add a CI build check so broken front matter never reaches main.

If you work with WordPress or another CMS, the equivalent is validating blocks, custom fields, and plugin output before publishing. The platform changes, but the rule stays the same: test before deploy.

## Issue 3: Audit Notes Were Inside the Build

We keep audit notes in the repository because they help us track work. That is useful. The problem is that not every repo file should become a public website page.

During the audit, we found that some internal report files could be processed by the site build. One of them caused a Liquid parsing issue in the GitHub Pages environment.

### What we did

- Identified non-content report files that should not be part of the public build.
- Added them to the Jekyll exclude list.
- Rebuilt and confirmed the build passed.

### How you can copy this

Separate "working files" from "published files." Audit reports, scratch notes, scripts, and raw exports should usually be excluded from the public site build. If a file is meant for readers, give it proper front matter and place it intentionally. If it is not, exclude it.

## Issue 4: Template Gaps in Schema and Image Alt

We also reviewed templates, not just posts. That matters because a template bug repeats across every page that uses it.

Two issues stood out. First, we checked structured data output and made sure the Organization/website entities were valid and consistent. Second, we improved hero image alt handling so layouts could fall back to a useful alt value when a post did not provide a custom one.

These are not flashy fixes. They are the kind of fixes that make a site cleaner for search engines, screen readers, and future maintenance.

### How you can copy this

Audit templates as hard as you audit posts. Check:

- JSON-LD validity on a homepage, article, and listing page.
- Canonical tags and meta robots.
- Open Graph and Twitter image tags.
- Image alt fallbacks.
- Author and date markup.

Our [schema markup guide](https://f9xr.org/articles/2026/09/26/schema-markup-generator-guide-why-it-matters.html) can help if you want a starting point for structured data.

## Issue 5: A Hotlinked Hero Image

One older post used an external hero image URL. It worked, but it depended on another site staying available and behaving the same way. It also bypassed our normal image variant workflow.

We downloaded the image, created local WebP versions, updated the post to use the self-hosted image, and kept the attribution.

### How you can copy this

If an image matters to your article, host it yourself when possible. Keep a sensible size, generate responsive variants if your theme uses them, and write alt text that describes the image. External hotlinks are convenient until they are not.

## Issue 6: Content Order Can Hurt Readers

Not every SEO issue is a technical error. During the content review, we found an article where a how-to section appeared after the conclusion. The information was there, but the order made it harder to use.

We moved the step-by-step section before the closing sections so readers could follow the guide in the right sequence.

### How you can copy this

Read your own article like a first-time visitor. Ask: does the page answer the main question early? Do the steps come before the wrap-up? Are key takeaways after the main content, not in the middle of it? Good structure helps readers, and it also makes your content easier for search systems to extract.

For a broader quality pass, see [how to fact check and audit your website](https://f9xr.org/articles/2026/10/04/how-to-fact-check-audit-your-website.html).

## The Verification Checklist

After fixes, we verified everything live. This is the part many teams skip. Do not skip it.

| Check | Pass Condition |
| --- | --- |
| Page status | Important URLs return HTTP 200 |
| Feed validity | RSS/JSON Feed parse correctly |
| Sitemap | New or fixed URLs appear |
| Structured data | Rich result/schema validators show no critical errors |
| Images | Hero and social images load, alt text present |
| Content | Headings, links, and section order look right on the live page |
| Discovery | Submit new URLs through IndexNow where supported |

We also use [IndexNow](https://f9xr.org/articles/2026/10/09/indexnow-api-2026-does-it-still-work.html) for participating search engines. It is not a replacement for good crawling and internal linking, but it is a useful nudge after publishing.

## What You Should Not Do

- **Do not audit only with one tool.** Use tools, but also open the live page.
- **Do not fix only the symptom.** If one post has a bad image path, check the template and other posts.
- **Do not publish without a build check.** One broken front matter value can block deployment.
- **Do not treat audit docs as public content.** Exclude internal files from the site build.
- **Do not claim rankings will jump.** Technical cleanup removes friction; it does not guarantee position one.

## Key Takeaways

- A site SEO audit should check live endpoints, templates, content, images, and deployment, not just keywords.
- Feeds and sitemaps can look fine in source but fail in production. Always verify the live response.
- A small YAML or template error can break a static site build and delay publishing.
- Internal audit/report files should usually be excluded from the public site build.
- Template fixes, like schema validity and image alt fallbacks, scale across every page.
- Content ordering matters. Put how-to steps before conclusions and takeaways.
- A fix is only done when the live URL, feed, sitemap, and rendered page all check out.

## Conclusion

The best SEO audit is boring in the right way. It finds the small failures that quietly hurt trust: a broken feed, a bad build, a missing alt fallback, a confusing section order. None of these fixes are glamorous, but together they make a site easier to crawl, easier to read, and easier to maintain.

If you run a blog or small business site, copy this playbook. Start with live endpoints, check your templates, fix what breaks, and verify the live result. That habit will save you more trouble than chasing every new SEO trick.

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
