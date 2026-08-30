---
layout: post
title: "How We Audited Our Own Site for E-E-A-T Issues"
description: "We ran a source-level SEO codebase audit across our own site and fixed schema fabrications, broken identifiers, and weak author signals. See the process."
image: "https://f9xr.github.io/articles/assets/post-images/seo-codebase-e-e-a-t-audit-case-study.webp"
image_width: 1200
image_height: 630
date: 2026-08-22
dateModified: 2026-08-22
author: "F9XR Editorial Team"
tags: [Website Audits, E-E-A-T, Technical SEO, Schema Markup, Content Marketing, F9XR]
keywords: "seo codebase audit, e-e-a-t audit, technical seo audit case study, structured data errors, jekyll seo fixes, schema markup validation, content provenance, author credentials schema"
faq:
  - q: "What is an SEO codebase audit?"
    a: "An SEO codebase audit reads your actual source files, templates, and configuration instead of crawling rendered pages. It catches issues invisible to crawlers: fabricated schema values, wrong entity references, broken template logic, and metadata bugs baked into layout code."
  - q: "How is a codebase audit different from a crawler audit?"
    a: "A crawler sees what a browser sees on live URLs. A codebase audit reads what generates those pages, so it finds problems at the source: a Liquid filter printing wrong values, front matter carrying malformed IDs, or data files missing fields your schema depends on."
  - q: "What E-E-A-T problems can hide in source code?"
    a: "Common ones include hidden AI-generation instructions left in page comments, structured data that claims things the content never says, publisher logos pointing to URLs that do not exist, and author profiles with no verifiable credentials attached."
  - q: "What did F9XR's own audit find?"
    a: "Across 34 posts and all site templates, the audit surfaced critical issues like a fabricated video duration fallback baked into the schema template and malformed YouTube embed IDs, plus high-severity items such as nine logo URLs pointing off the repository and author data files too thin to feed Person schema."
  - q: "How long does a codebase-level SEO audit take?"
    a: "A focused single-site pass took us one working session: scanning, classifying each finding by severity, fixing critical and high items, then verifying every fix with targeted searches until each problem pattern returned zero matches."
---

Our crawl reports looked clean. Sitemaps resolved, pages returned 200s, titles were unique, images had dimensions. Then we audited the actual source code behind this site and found problems no crawler would ever flag: schema values that were quietly false, identifiers that were structurally broken, and identity data that was too thin to mean anything.

That gap is the whole point of this article. A crawler evaluates what your site renders. It never sees the template logic, front matter fields, and data files that decide what gets rendered. And some of the most damaging trust issues you can ship live exactly there, in code that looks fine from the outside.

So we turned our own audit process loose on ourselves. This is the full case study: what we scanned, every significant finding, the exact fixes, and how we verified them. If you publish anything on the web, check every pattern below against your own stack.

---

## Why We Audited Our Own Codebase

Earlier this year we documented our [SEO CodeBase Auditor approach](https://f9xr.github.io/articles/2026/07/31/f9xr-seo-codebase-auditor-skill-guide.html), which reads source files directly instead of crawling deployed URLs. Writing about a method is easy. Applying it to your own production site, where you have to act on whatever turns up, is the honest test.

There was also a practical reason. Google's guidance on [creating helpful, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content){:target="_blank" rel="noopener noreferrer"} leans heavily on experience, expertise, authoritativeness, and trust. Most teams treat E-E-A-T as a content-writing concern. But several of its strongest signals are code artifacts: schema markup accuracy, author identity data, publisher consistency. Those live in templates and config files, and they rot silently.

We publish two to four posts a month through automated pipelines. Every automation drifts eventually. An audit was overdue.

## The Method: Source Over Crawl

### What we scanned

The audit covered every file that shapes what search engines see:

- All **34 posts** in `_posts/`, front matter and body
- Four layout templates, including the post template that generates BlogPosting, BreadcrumbList, FAQPage, and VideoObject JSON-LD
- The **author registry** (`_data/authors.yml`) feeding author pages and Person schema
- Homepage, archive page, and the five trust pages under `/press/`

### The severity scale

Every finding got classified before any fixing started, because severity decides order of operations:

| Severity | Definition | Example |
|---|---|---|
| Critical | Actively misleads users or search engines, or breaks something visible | Fabricated schema value |
| High | Weakens trust signals materially but nothing renders broken | Missing author credentials |
| Medium | Real issue, limited blast radius | Duplicate schema across templates |
| Low | Cosmetic or editorial polish | Inconsistent label wording |

### The evidence rule

One rule kept the process honest: no finding without a file, a line number, and a copied snippet. Vague findings produce vague fixes. Forcing evidence also exposed one false positive later, which mattered.

With the method set, here is what turned up.

## Finding 1: A Fabricated Video Duration in Schema

This one is subtle and instructive. Our post template emits VideoObject structured data, and the duration field contained this:

```liquid
{% raw %}"duration": "{{ page.video_duration | default: 'PT10M0S' }}",{% endraw %}
```

The intent was harmless-looking: fall back to ten minutes when a post does not specify duration. The effect was systematic fabrication. Every video post without an explicit duration declared a false runtime to search engines, in machine-readable format, on every page load.

Structured data carries an accuracy obligation. [Schema.org's VideoObject](https://schema.org/VideoObject){:target="_blank" rel="noopener noreferrer"} properties describe the actual asset, not a placeholder guess. Systematically wrong values are exactly the pattern that erodes rich-result eligibility over time.

**The fix:** emit the property only when real data exists:

```liquid
{% raw %}{% if page.video_duration %}"duration": "{{ page.video_duration }}",{% endif %}{% endraw %}
```

Missing data is honest. Invented data is a liability. If your templates contain any `default:` fallbacks feeding structured data, go check them now.

## Finding 2: Malformed YouTube IDs Breaking Embeds and Schema

YouTube video IDs are eleven characters. Two of our posts carried IDs of nine and ten characters respectively (`05cr4W9uyA` and `05cr4W9uyAA`, both typos of the same intended ID). One lived in front matter feeding VideoObject URLs; the other also rendered as a visible iframe that simply would not play.

**Impact:** invalid `embedUrl` and `contentUrl` values in schema, plus a dead embed for any reader who scrolled to it. Nobody had noticed because the posts still ranked and the broken iframe sat far down the page.

**The fix:** removed the malformed fields and the broken iframe entirely. Where valid hand-placed embeds existed alongside the bad data, those stayed. Deleting wrong data beats guessing at corrections; a half-right ID is worse than none.

## Finding 3: Nine Logo URLs Pointing Off the Repository

Our publisher logo appeared in Organization and BlogPosting JSON-LD, homepage mastheads, and avatar defaults across five files. All nine occurrences hardcoded one URL: `https://f9xr.github.io/logo.webp`. The repository actually serves the asset at `/articles/logo.webp`.

Hardcoded domains feel safe until infrastructure changes. Project sites on [GitHub Pages](https://docs.github.com/pages/getting-started-with-github-pages/what-is-github-pages){:target="_blank" rel="noopener noreferrer"} live under a repository path segment, which makes hand-typed root-relative URLs a recurring trap.

**The fix:** replaced every occurrence with generated paths:

```liquid
{% raw %}{{ '/logo.webp' | absolute_url }}
{{ '/logo.webp' | absolute_url | jsonify }}  {# inside JSON-LD #}{% endraw %}
```

One wrinkle: Liquid filters do not run inside `_data` YAML files, so the data-file reference needed the literal correct URL instead. Template-level abstraction has limits; knowing where they are is part of the job.

## Finding 4: Author Credentials Too Thin to Feed Schema

Our author profile template renders education history, work experience, and topic expertise into both visible page sections and Person structured data. The data file powering it held names, roles, and social links. No education, no experience entries, no expertise lists. Every credential-driven E-E-A-T signal the template supported rendered as blank.

**The fix:** enriched the registry with structured `education`, `experience`, and `knowsAbout` entries for both authors, sourced strictly from claims already published in existing bios. Degrees named, institutions named, highlights tied to real project counts. Nothing invented to pad the schema, because fabricated credentials are just Finding 1 wearing a different hat.

## The Smaller Stuff That Still Mattered

Beyond those four findings, the pass caught a cluster of medium and low findings:

- **Low-authority outbound links:** four links pointed at thin domains, including one backing a statistic. We unlinked portfolio mentions (kept as plain text, the claim stands without passing equity) and removed the weak citation while keeping attribution in prose.
- **Stray question marks on declarative headings:** five headings like "How to run a consistency audit in five steps?" ended in question marks despite being statements. Small thing. Grammar errors compound into perceived carelessness.
- **A working-tree surprise:** someone's local edit had appended question marks to three headings on our About page. Unrelated to the audit, reverted before commit. Audits catch more than SEO problems when you look at diffs closely.
- **Encoding hygiene:** scripted edits introduced UTF-8 BOM bytes into three files. Detected via a byte-level check, stripped immediately. Front-matter parsers should not have to guess.

And one false positive that validated the evidence rule: suspected placeholder links to `yoursite.com` turned out to live inside fenced code blocks, rendering as literal text rather than anchors. Without the copy-the-snippet requirement, we might have "fixed" text that was never broken.

## Verification: Trust Nothing Until You Re-Check It

Fixes mean nothing without verification, so each category got a closing query run against the full codebase:

| Check | Expected | Result |
|---|---|---|
| Hardcoded off-repo logo URLs | 0 matches | 0 matches |
| Malformed YouTube IDs | 0 matches | 0 matches |
| Fabricated duration fallback | 0 matches | 0 matches |
| BOM bytes in posts | 0 files | 0 files |

The final diff touched **38 files**, adding 96 lines and removing 263. The negative net total is what a cleanup should look like. Grading ourselves against the same rubric we apply to client work, the site moved from a C− to a B+, with the remaining gaps requiring business decisions rather than code changes: real address and phone data, named authors on older collective-bylined posts, and sourcing for statistics that predate this process.

## What This Means for Your Site

If you take one idea from this case study, make it this: your worst SEO issues may be structurally invisible to the tools you rely on. Crawlers answer "what does this page say?" Code audits answer "what does my system actually generate, and is it true?"

A workable DIY sequence:

1. Inventory every template that outputs structured data and audit each `default:` fallback feeding it
2. Run your key pages through Google's Rich Results Test and resolve every error it reports
3. Validate every external identifier your front matter stores (video IDs, image URLs) for format correctness
4. Diff your schema's entity references (logos, publisher URLs) against where files actually live
5. Check whether your author data files contain everything your author schema could render
6. Verify every fix with a targeted search expecting zero results

For the deeper methodology, including the 24-pillar structure and report format, our [codebase auditor guide](https://f9xr.github.io/articles/2026/07/31/f9xr-seo-codebase-auditor-skill-guide.html) walks through running the same process on any stack. Pair it with our [E-E-A-T checklist](https://f9xr.github.io/articles/2026/08/04/google-e-e-a-t-checklist-every-seo-should-bookmark.html) for the content-side signals, and our [consistency audit framework](https://f9xr.github.io/articles/2026/08/13/consistency-audits-seo-aeo-geo.html) if local visibility is part of your scope. Image-heavy sites should add the [image SEO audit guide](https://f9xr.github.io/articles/2026/08/14/image-seo-audit-complete-guide.html), since media metadata hides similar surprises.

## Key Takeaways

- Crawler audits evaluate rendered output; codebase audits evaluate the generator. You need both, and the second one finds what the first cannot
- Never let template fallbacks invent structured data values. Absent properties are safe; false properties are not
- Validate stored identifiers by format. A ten-character YouTube ID fails everywhere, forever, until someone checks
- Author and publisher schema can only be as strong as the data files feeding them. Empty credential fields render as empty trust signals
- Fix nothing you cannot verify. Every repair should end with a query that returns zero matches

## Conclusion

This audit started as an internal exercise and became a better piece of proof than anything we could have written about ourselves: here is what we found in our own house, here is exactly how we fixed it, and here is the diff. That standard, show the receipts, applies whether you run a two-person blog or a forty-property network. When you need help implementing this, teams like F9XR specialize in website development, redesigns, local SEO, and building the kind of technically clean foundation that lets content quality actually register with search engines.

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.github.io/articles/press/editorial-policy.html) for how we create and verify content.*
