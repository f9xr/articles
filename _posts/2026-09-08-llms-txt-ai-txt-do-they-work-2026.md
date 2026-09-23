---
layout: post
title: "llms.txt and ai.txt in 2026: Do They Really Work?"
description: "llms.txt, llms-full.txt, and ai.txt explained plainly. What the 2026 data shows, what they're actually for, and whether you need them."
image: "https://f9xr.org/articles/assets/post-images/llms-txt-ai-txt-do-they-work-2026.webp"
image_width: 1200
image_height: 630
date: 2026-09-08
dateModified: 2026-09-08
author: "F9XR Editorial Team"
tags: [llms.txt, ai.txt, AEO, AI Search Optimization, Robots.txt, Technical SEO, Generative Engine Optimization, AI Crawlers, Schema Markup, Website Structure]
keywords: "llms.txt, ai.txt, llms-full.txt, AI search optimization, AI crawlers, robots.txt, generative engine optimization, technical SEO, schema markup, AI visibility"
faq:
  - q: "Does llms.txt improve my ranking in Google or AI search results?"
    a: "No. Google has publicly confirmed it does not use llms.txt as a ranking or retrieval signal, comparing it to the old keywords meta tag. Independent studies analyzing hundreds of thousands of domains have found no meaningful correlation between having an llms.txt file and how often a site gets cited in AI generated answers."
  - q: "What is the difference between llms.txt and robots.txt?"
    a: "robots.txt is an access control standard that tells crawlers which pages they are and are not allowed to visit, and it is formally recognized as RFC 9309. llms.txt is purely informational, a curated summary meant to help AI models understand a site's content, and it has no enforcement mechanism, meaning it cannot block or restrict anything."
  - q: "Is ai.txt the same thing as llms.txt?"
    a: "No. ai.txt, created by Spawning AI, is designed to let website owners declare permissions around whether their content can be used to train AI models. llms.txt, created separately as a community proposal, is meant to help AI models understand and navigate a site's content. They serve entirely different purposes."
  - q: "Should I remove llms.txt if I already have one?"
    a: "There is no need to remove it. Having an llms.txt file does not harm your SEO or site performance. The main risk is not the file itself but relying on it as a real AI visibility strategy instead of focusing on content quality, site structure, and technical fundamentals that have proven correlations with AI citations."
  - q: "Does any AI company officially support llms.txt?"
    a: "As of 2026, no major AI provider, including OpenAI, Google, Anthropic, Meta, or Perplexity, has publicly confirmed that their production systems read or rely on llms.txt when generating search results or answers. The one area with more genuine adoption is developer documentation, where some AI coding assistants do appear to reference it."
  - q: "What should I focus on instead of llms.txt for AI search visibility?"
    a: "Focus on clear, well structured content with direct answers near the top of pages, proper schema markup, genuine expertise and regular content updates, a technically sound and mobile friendly website, and consistent brand mentions across other reputable sites, since these all show measurable correlation with AI search citations."
---

If you've spent any time reading SEO newsletters or AI marketing content over the past year, you've probably been told you need an llms.txt file on your website, and maybe an ai.txt file too, or ChatGPT and Gemini simply won't understand your business. A whole small industry of generators, plugins, and "AI visibility audits" has grown up around this idea.

Here's the honest version, backed by actual data rather than vibes: as of 2026, having an llms.txt file does not meaningfully improve your visibility in AI search tools, and no major AI company has confirmed reading it as part of how they answer questions. That's not our opinion, it's what [independent traffic analysis](https://ahrefs.com/blog/llmstxt-study/) and statements directly from Google have shown.

That doesn't mean these files are pointless or that you shouldn't bother with any of it. It means the story is more nuanced than the "add this file and get cited by ChatGPT" pitch that's been circulating. This article walks through what llms.txt, llms-full.txt, and ai.txt actually do, what the current evidence says about whether they work, and where your time is better spent if you care about showing up in AI search.

---

## What Are llms.txt, llms-full.txt, and ai.txt?

These three files get lumped together constantly, but they were built for different purposes. Getting that straight is the first step to understanding whether any of them matter for your business.

| File | What It's For | Created By | Format |
|---|---|---|---|
| llms.txt | A curated summary of your site's most important pages, meant to help AI models understand your content faster | Community proposal (Jeremy Howard, Answer.AI, 2024) | Markdown file at your site's root |
| llms-full.txt | A fuller version of llms.txt with more complete page content included directly in the file | Same community proposal | Markdown file, larger and more detailed |
| ai.txt | A permissions file that tells AI companies whether they can use your content to train their models | Spawning AI | Plain text file at your site's root |
| robots.txt (for comparison) | An access control standard telling crawlers which pages they're allowed to visit | Formalized as RFC 9309, in use since 1994 | Plain text with allow and disallow rules |

The key distinction that trips most people up: robots.txt controls access, meaning it can actually block a crawler from visiting a page. llms.txt and ai.txt are both request based rather than enforcement based. They ask nicely. Neither can stop an AI crawler from reading your site, and neither one is guaranteed to be read at all.

### llms.txt: A Curated Map, Not a Rulebook

llms.txt is a Markdown file that sits at yoursite.com/llms.txt. It typically opens with an H1 title naming your business, a short blockquote summary, and then a curated list of your most important pages, each with a one sentence description. The idea, proposed in 2024, was to give language models a clean, distraction free map of your site instead of forcing them to parse navigation menus, ads, and scripts.

You can read the original proposal at [llmstxt.org](https://llmstxt.org/), which lays out the format and intended use case.

### llms-full.txt: The Same Idea, More Content

llms-full.txt is a companion file that goes further, often including large chunks of your actual page content directly inside the file rather than just links and summaries. The intent is similar, give an AI model everything it needs in one clean file, without needing to crawl your whole site.

### ai.txt: A Different Job Entirely

ai.txt is often confused with llms.txt, but it solves a completely different problem. It was created by [Spawning AI](https://site.spawning.ai/spawning-ai-txt) specifically to let website owners declare permissions around AI training, essentially saying "you may or may not use my content to train your models." It's closer in spirit to a consent form than a site map, and it's read at the point content is downloaded for training rather than during general crawling.

---

## Does llms.txt Actually Work? Here's What the Data Shows

This is the part most articles gloss over, so let's be direct about it.

Google has been unusually blunt on this topic. In mid 2025, Google's Gary Illyes confirmed on the record that [Google does not support llms.txt](https://developers.google.com/search/docs/appearance/ai-features) and has no plans to. John Mueller went further, comparing it to the old keywords meta tag, a self declared description of a page that search engines stopped trusting more than a decade ago because site owners could just write whatever they wanted.

Independent data backs this up. A widely cited [Ahrefs study](https://ahrefs.com/blog/llmstxt-study/) of over 137,000 domains found that 97 percent of llms.txt files received zero traffic from AI crawlers at all. A separate analysis covering more than 500 million bot traffic events found that requests to llms.txt made up a statistically negligible share of activity from the crawlers that actually feed AI search answers, including GPTBot, ClaudeBot, and PerplexityBot. Another large study, this one analyzing around 300,000 domains, found no meaningful correlation between having an llms.txt file and how often a site gets cited in AI generated answers. In that same study, removing llms.txt as a factor from their prediction model actually made the model more accurate, meaning the file was adding noise, not signal.

As of this writing, none of OpenAI, Google, Anthropic, Meta, or Perplexity has publicly stated that their production systems read or rely on llms.txt when generating answers.

### The One Genuine Exception: Developer Documentation

There is one corner of the internet where llms.txt appears to get real use: technical documentation sites. Platforms like Mintlify have rolled the file out by default across the developer docs they host, and AI coding assistants that specifically fetch documentation while helping a developer write code do seem to make some use of it. If your business publishes API documentation or developer facing technical guides, this is worth doing. If you run a local service business, a professional practice, or a typical company blog, this exception doesn't really apply to you.

### A Small, Interesting Wrinkle from Google

Here's where it gets slightly more complicated than a flat "Google ignores it." In May 2026, Google added an llms.txt check to Lighthouse, its site quality auditing tool, under a new category focused on agentic browsing. The tool flags your site if fetching llms.txt returns a server error, with documentation noting that without the file, AI agents may need to spend more time crawling a site to understand its structure. That's a fairly small, technical acknowledgment rather than an endorsement that llms.txt improves rankings or AI citations, and it came out around the same time Google published broader guidance reiterating that strong fundamental SEO remains the real path to AI visibility.

---

## So What's the Actual Harm in Having One?

Here's the fair, balanced answer. Having an llms.txt file on your site is low risk. It doesn't hurt your SEO, it doesn't confuse search engines, and it costs very little time to create. The real problem isn't the file itself, it's what tends to happen around it.

### The Real Risks and Downsides

* **False sense of progress.** The biggest practical risk is treating llms.txt as your AI visibility strategy instead of a minor, unproven add-on. Teams that spend a week building out a detailed llms.txt file while neglecting actual content quality, page structure, and site authority are optimizing for the wrong thing.
* **Low quality, auto-generated files.** Many llms.txt files in the wild are just a site's sitemap renamed into Markdown, with zero curation or useful description. A file like this tells a model nothing its sitemap didn't already say, and defeats the entire purpose of the format.
* **Confusing it with access control.** Some business owners mistakenly believe llms.txt can block AI crawlers from using their content. It cannot. If you want to actually restrict AI crawlers, that's a robots.txt job, using specific user agent rules for crawlers like GPTBot or Google-Extended. We covered [how to block AI crawlers on your site](https://f9xr.org/articles/2026/09/04/block-ai-crawlers-on-your-site.html) in a recent post.
* **Wasted development time on llms-full.txt.** Because llms-full.txt requires duplicating large amounts of page content into a separate file, it's more time consuming to maintain than llms.txt, and the evidence supporting its usefulness is no stronger.

### What About ai.txt Specifically?

ai.txt carries a different kind of consideration entirely, since it's about content permissions rather than AI search visibility. A handful of AI companies and researchers have said they respect ai.txt as a training data signal, and it plays a similar advisory role to robots.txt, meaning compliance depends on the AI company's willingness to honor it rather than any technical enforcement. If you're a content creator or publisher concerned specifically about your work being used to train AI models without consent, ai.txt is a reasonable, low effort step to take, understanding that adherence isn't guaranteed and it won't do anything for how you show up in AI generated answers.

---

## What Actually Helps You Show Up in AI Search Answers

If your real goal is getting your business mentioned or recommended by tools like ChatGPT, Gemini, Claude, or Perplexity, the evidence points toward the same fundamentals that have always mattered for SEO, just applied with an AI reader in mind.

### 1. Clear, Well Structured Content

AI models tend to favor content that's easy to extract a direct answer from. Clear headings, concise paragraphs, and a direct answer near the top of a page consistently correlate with higher citation rates in AI generated answers. Teams like [F9XR](https://f9xr.org/pages/services.html) build content strategies around this principle, structuring every page for extractability rather than just readability.

### 2. Genuine Expertise and Freshness

Google's own Helpful Content guidance and multiple independent studies point to the same idea: content that demonstrates real experience, gets updated regularly, and isn't just a rehash of what's already ranking tends to get cited more by AI tools, not less.

### 3. Structured Data and Schema Markup

Proper [schema markup](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html) helps both traditional search engines and AI tools understand exactly what a page is about, whether it's a service, a review, an FAQ, or a local business listing. This is one of the highest leverage technical SEO tasks you can do, and it directly affects how AI models interpret your content.

### 4. A Strong, Clean Technical Foundation

Fast loading pages, mobile friendliness, and a crawlable site structure remain foundational, both for traditional rankings and for the crawlers that feed AI search tools in the first place. [Website development](https://f9xr.org/services/index.html) built with these fundamentals from day one saves you from retrofitting later.

### 5. Brand Mentions Across the Web

AI models build a sense of a brand's reputation partly from how often and how positively that brand is mentioned elsewhere online, in press coverage, reviews, and other reputable sites, not just your own website.

> **Actionable tip:** If you're deciding where to spend an afternoon of effort, a properly structured FAQ section with schema markup on your most important pages will do more for AI visibility today than an llms.txt file.

---

## How F9XR Team Can Help

Separating genuine AI visibility strategy from trending but unproven tactics is exactly the kind of judgment call we help clients make every day.

At F9XR Team, we work with Chartered Accountants, Company Secretaries, Cost and Management Accountants, and local businesses to build a digital presence grounded in what actually moves the needle. That includes:

* Website development and redesigns built with clean, crawlable structure from the start
* Content strategy focused on the clarity, structure, and expertise signals that correlate with AI citations
* [Local SEO management](https://f9xr.org/services/google-business-optimization.html) so your business shows up in both traditional Google results and AI generated local recommendations
* Technical setup guidance, including robots.txt configuration for AI crawlers, schema markup, and yes, an llms.txt file if it fits your situation, without overselling what it can do

If you've been told you're falling behind because you don't have an llms.txt file, take a breath. You're not. There are more impactful places to focus first, and we can help you figure out exactly where those are for your specific business. [Get in touch](https://f9xr.org/pages/contact.html) to talk through what makes sense for your situation.

---

## Key Takeaways

* llms.txt is a Markdown file meant to give AI models a curated summary of your site's key pages, but Google has publicly confirmed it does not use it, and independent studies show negligible crawler traffic to it.
* llms-full.txt works on the same principle as llms.txt but includes fuller page content, and shares the same lack of confirmed adoption by major AI providers.
* ai.txt is a different tool entirely, focused on declaring AI training data permissions rather than improving AI search visibility, created by Spawning AI.
* The genuine exception where llms.txt shows real use is developer documentation sites, where AI coding assistants do appear to reference it.
* Having these files causes no harm to your SEO, but treating them as a real AI visibility strategy, instead of clear content, strong technical fundamentals, and schema markup, is a mistake.
* robots.txt remains the correct tool if you actually want to control or restrict what AI crawlers can access on your site.
* The fundamentals that reliably improve AI search visibility are the same ones that have always mattered: clear structure, genuine expertise, fresh content, and a technically sound website.

---

## Conclusion

llms.txt, llms-full.txt, and ai.txt are three different tools that got bundled together by hype, and the honest picture in 2026 is that none of them are the shortcut some corners of the internet have made them out to be. They're low risk to add, but they're not a substitute for the unglamorous work of building genuinely useful, well structured, technically sound content.

If you'd rather spend your time on what's actually proven to move the needle in both Google Search and AI powered answers, that's exactly the kind of grounded, evidence based work F9XR Team focuses on for clients, from [website development and redesigns](https://f9xr.org/services/we-do-for-you.html) to [local SEO](https://f9xr.org/services/google-business-optimization.html) and full digital presence management built around what really works, not what's trending this month.

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
