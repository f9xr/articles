---
layout: post
title: "DeepSeek Opens Its Search API: What Businesses Must Know"
description: "DeepSeek opened its in-house search engine to developers and says it filters GEO manipulation. Here is what it means for your business and AI visibility."
image: "https://f9xr.org/articles/assets/post-images/deepseek-search-api-geo-manipulation.webp"
image_width: 1200
image_height: 630
image_caption: "DeepSeek's Search and Fetch APIs put its in-house search index in the hands of developers. Here is what changes for businesses."
date: 2026-10-21
dateModified: 2026-10-21
author: "F9XR Editorial Team"
tags: [DeepSeek Search API, DeepSeek, GEO Manipulation, Generative Engine Optimization, Answer Engine Optimization, AI Search Visibility, AI Search APIs, Local SEO, Search Spam Filtering, Small Business SEO]
keywords: "DeepSeek search API, DeepSeek Search and Fetch API, in-house search engine, GEO manipulation, generative engine optimization, AI search visibility, authority score, rerank score, AI-native search engine, local SEO, answer engine optimization"
faq:
  - q: "What is DeepSeek's search API?"
    a: "It is a pair of developer APIs, Search and Fetch, built on DeepSeek's in-house search engine. Search returns ranked web results with authority and relevance scores, and Fetch returns a single web page as Markdown. Both are priced at $0.75 per 1,000 successful requests."
  - q: "How much does the DeepSeek Search API cost?"
    a: "Search and Fetch each cost $0.75 per 1,000 successful requests. Failed requests, empty results, and timeouts are not billed, and asking for more results per search does not change the price."
  - q: "What does GEO manipulation mean?"
    a: "GEO manipulation generally refers to tricks used to push content into AI-generated answers, such as mass-produced pages written for citation, fake expertise, or invented statistics. DeepSeek says it filters this but has not published its own definition."
  - q: "Is DeepSeek Search safe for business data?"
    a: "DeepSeek's privacy policy says it shares search keywords with third-party APIs and processes and stores personal data in China, and its search documentation does not state query retention. Avoid sending private customer or business information in search queries."
  - q: "Does DeepSeek Search replace Google for local businesses?"
    a: "No. It is a developer API, not a consumer search engine competing directly with Google. But apps and agents built on it may surface your business in AI answers, so accurate, trustworthy web content still matters."
---

Most of the last two years of your SEO work went into one goal: showing up in ChatGPT, Gemini, Claude, and Perplexity. There is another name to add to that list now. On October 17, 2026, DeepSeek opened the search engine that powers its own web app and API to outside developers, so any developer with an API key can put the DeepSeek search API into their own apps, agents, and tools.

That alone is news. But one line in the announcement got the SEO world's attention. DeepSeek says its engine filters "SEO spam, GEO manipulation, and low-quality AIGC." A major AI search provider is now saying out loud that it watches for people trying to game AI answers.

If you run a small business, a startup, or a local shop, the practical read is mostly good news, with a few things worth checking this week.

> **Quick answer:** DeepSeek's Search and Fetch APIs give developers access to an in-house, AI-native search engine that returns ranked web results (Search) and clean page text in Markdown (Fetch). Every result carries an authority tier and a relevance score. Both APIs cost $0.75 per 1,000 successful requests. DeepSeek says the index covers hundreds of billions of pages and filters SEO spam, GEO manipulation, and low-quality AI content, but it has not explained how that filtering works.

## What Did DeepSeek Actually Announce?

DeepSeek's [change log](https://api-docs.deepseek.com/updates){:target="_blank" rel="noopener noreferrer"} describes an in-house engine that "reliably handles hundreds of millions of search requests from around the world every day." The company calls it an AI-native, general-purpose search engine that indexes hundreds of billions of web pages, supports multilingual search, and returns relevant, authoritative, and timely results in real time. It also says it filters SEO spam, GEO manipulation, and low-quality AIGC through strict detection mechanisms.

Two new endpoints make this available to developers:

- **Search API:** finds web pages for a query and returns structured results.
- **Fetch API:** retrieves one web page and returns its content as Markdown.

Both are plain JSON APIs using the same bearer-token authentication as the rest of the DeepSeek API, and neither needs a DeepSeek model request. The full [Search and Fetch guide](https://api-docs.deepseek.com/guides/search/){:target="_blank" rel="noopener noreferrer"} has the request and response schemas.

### The numbers worth knowing

| Detail | What is published |
|---|---|
| **Announced** | October 17, 2026 (per DeepSeek's change log) |
| **Search endpoint** | `POST https://api.deepseek.com/v1/tools/search` |
| **Fetch endpoint** | `POST https://api.deepseek.com/v1/tools/fetch` |
| **Price** | $0.75 per 1,000 successful requests for each API |
| **What is billed** | Only HTTP 200 responses that return a result. Empty searches, failures, and timeouts are free. |
| **Results per search** | 1 to 50. Asking for 50 costs the same as asking for 1. |
| **Rate limits** | Search 100 requests per second, Fetch 25 requests per second, per account |
| **Server-side tool calls via DeepSeek Harness, Claude Code, or Codex** | Free for now. Billing starts at 00:00 Beijing time on November 1, 2026 (16:00 UTC on October 31). |
| **Search filters** | Language, publication date, `site:` and `-site:`, exact phrases, exclusions |

One accuracy note, because the rate limit is reported two ways. [The New Stack](https://thenewstack.io/deepseek-web-search-api/){:target="_blank" rel="noopener noreferrer"} reported a cap of 5 requests per second. DeepSeek's own guide lists 100 for Search and 25 for Fetch, so we used the official figures. Check the live docs before you build anything that depends on the limit.

### The new Flash model

The search API launched alongside a model update, DeepSeek-V4.1-Flash-1017. The web app and mobile apps run on it, and developers reach it through `deepseek-flash` with the same calling method and pricing. DeepSeek reports better scores on its own benchmarks, including 44.0 on the HLE text subset and 42.3 on Terminal-Bench 4.0. Those numbers are not independently confirmed. For a business owner the takeaway is simple: faster, cheaper, shorter answers from a model that can also search the live web.

## How DeepSeek Search Scores Your Pages

This is the part business owners should care about. Every result comes back with two scores and a handful of useful fields.

### Authority tier

The `authority` field runs from 0 to 4, with -1 meaning unknown. A tier of 3 or higher is described as "highly authoritative." DeepSeek has not explained how a page or a site earns its tier.

### Rerank score

The `rerank_score` runs from 0 to 3. A score of 1.5 or above counts as high quality, and the docs say it combines relevance, authority, and freshness.

### The other fields

Each result also returns a short `snippet` of roughly 100 to 200 characters, a longer `summary` written for a model to read, a publication `date` when one is known, and the site name. Full page `content` comes back when you set `need_content`.

### What one early test found

SEO consultant Suganthan Mohanadasan ran 110 calls on launch day, about $0.08 in total, and shared the results in [Search Engine Journal](https://www.searchenginejournal.com/i-tested-deepseeks-new-search-api-heres-how-it-ranks-and-scores-websites/593408/){:target="_blank" rel="noopener noreferrer"}. He is clear that this was one day, one region, and a small set of queries, so read the numbers as directional.

| Finding | Result |
|---|---|
| **Median rerank score** (1,000 results, 20 SEO and GEO queries) | 1.63, ranging from 0.75 to 2.70 |
| **Share of results at 1.5 or above** | 68% |
| **Authority spread** (4,322 results) | Tier 1: 2%, Tier 2: 32%, Tier 3: 60%, Tier 4: 6%. Tiers 0 and -1 never appeared. |
| **Median rerank by tier** | Tier 1: 0.95, Tier 2: 1.45, Tier 3: 1.83, Tier 4: 1.98 |
| **Authority behavior** | Every URL on a host had the same score across 16 `site:` probes, which points to a host-level signal |
| **Undated pages** | 11% of unfiltered results had no date, and they disappeared once a date filter was applied |
| **Spam check** | Spam uploads on a government and a university host still returned authority 4, so a high tier is not a quality guarantee |

There is a conflict worth flagging. The documentation calls authority a page-level tier, while the test found host-level scoring, including two subdomains of the same site scoring differently. DeepSeek has not said which is right. Assume both your site reputation and your individual pages matter.

## What Does "GEO Manipulation" Mean?

GEO stands for generative engine optimization, which is making content easier for AI tools to find and cite. Done honestly it is just good publishing. Clear structure, direct answers, original information, named experts.

"GEO manipulation" is the shady cousin of that idea. Mass-produced pages written only to be quoted by AI. Fake expert bios. Invented statistics. Citation bait. Hidden text aimed at language models.

Here is the catch: DeepSeek does not define the term. It does not say whether filtering means demotion, removal, or detection of AI-written text. Search Engine Journal raised the same gap. Anyone who tells you exactly what DeepSeek filters is guessing.

What we can say is that DeepSeek is not alone. Google has said its spam policies apply to generative AI responses in Search too. The direction across the industry is the same: an AI answer is only worth reading if the sources behind it can be trusted. Our guide on [how to de-AI-slop your website](https://f9xr.org/articles/2026/09/28/how-to-de-ai-slop-your-website.html) covers the content habits that hold up.

## Why Should Business Owners Care?

You may be thinking: DeepSeek is not Google, so why does this matter to me? Fair question. Four reasons.

### 1. More AI tools will search with their own engines

For years, many AI assistants leaned on a handful of outside search providers. Now a major AI lab sells its own index at a low price, and The New Stack notes it undercuts several rivals. More apps, agents, and chatbots may pull answers from DeepSeek's index. Each new index is one more place your business can be found, or missed.

| Provider (as reported by The New Stack) | Price per 1,000 requests |
|---|---|
| Ceramic.ai | $0.25 |
| **DeepSeek** | **$0.75** |
| Parallel and Perplexity (Fast Search API) | $1 |
| Exa (Instant Search) | $4 |
| Brave | $5 |
| Tavily (basic) | $8 |

These providers differ in result quality, limits, and speed, so treat the prices as orientation, not a like-for-like comparison.

### 2. Authority is becoming visible

Ranking signals are normally hidden. Here, a developer sees an authority tier and a relevance score next to every result. Builders of research tools, shopping assistants, and support bots can then favor trusted sources. If your site is thin, anonymous, or full of copied content, that is now easier to spot and easier to skip.

### 3. Spam tactics have a shorter shelf life

If you have ever been tempted by a "rank in AI answers overnight" package, this is a good moment to walk away. Search engines and AI providers are all building defenses, and shortcuts that work this month tend to become penalties next quarter. We covered the Google side of this in our [Google September 2026 spam update guide](https://f9xr.org/articles/2026/10/03/google-september-2026-spam-update-guide.html).

### 4. Local businesses still win on trust and consistency

AI search tools reward clear, consistent facts: who you are, where you are, what you do, and what real customers say. Our guide on [how AI picks local businesses](https://f9xr.org/articles/2026/08/16/how-ai-picks-local-businesses-2026.html) covers the basics. Nothing in this launch changes that, and it raises the value of getting them right.

## Open Questions and Caveats

A trustworthy article has to say what is not known yet. Here are the gaps.

- **How the filtering works.** DeepSeek has not explained how it detects spam, GEO manipulation, or low-quality AI content, nor how a page earns its authority tier or rerank score.
- **The crawler.** Search Engine Journal notes that an EU training-data summary says DeepSeek's crawler respects robots.txt, but the launch pages do not name the crawler or say whether blocking it affects indexing.
- **Fetch behavior.** In the early test, the Fetch API presented itself as Firefox 149 with a `zh-CN` language header, did not identify itself as DeepSeek, and returned content from three URLs that robots.txt disallowed. The tester could not confirm whether robots.txt was requested. Treat this as one person's observation, not a confirmed policy.
- **Privacy.** DeepSeek's privacy policy says it shares search keywords with third-party APIs and processes and stores personal data in China. The docs do not say how long queries are kept, so keep customer and sensitive data out of search queries.
- **Where results come from.** A Chinese search company has described itself as DeepSeek's web search supplier in a public GitHub README, but DeepSeek's launch pages do not mention it. It is unclear whether DeepSeek still relies on outside providers.

## What to Do This Week

You do not need a developer account to prepare. Start here.

1. **Check whether you are findable.** Search your brand name, your main service plus your city, and your top three products across several AI tools. Note whether you are mentioned and whether the facts are right.
2. **Put dates on your content.** In the early test, undated pages vanished from date-filtered searches. Show a publish date and a "last updated" date, and include both in your structured data.
3. **Add structured data.** Use Organization, LocalBusiness, Article, and FAQ markup where it fits, then test it in Google's Rich Results Test. Our [schema markup guide](https://f9xr.org/articles/2026/09/26/schema-markup-generator-guide-why-it-matters.html) is a good starting point.
4. **Show real people, skip the tricks.** Named authors, real bios, original photos, actual customer stories. No fake reviews, no invented stats, no mass-produced AI pages, no hidden text for language models. If you would be embarrassed explaining it to a customer, do not publish it.
5. **Review your robots.txt and server logs.** Decide on purpose which AI crawlers you allow. Our guide to [blocking AI crawlers](https://f9xr.org/articles/2026/09/04/block-ai-crawlers-on-your-site.html) covers the trade-offs. Be careful about blocking a whole network or IP range, because fetcher traffic may not belong to DeepSeek alone.
6. **Keep your facts consistent.** Your name, address, phone number, hours, and service descriptions should match on your site, your Google Business Profile, and your directory listings.
7. **Test your own visibility if you have a developer.** A `site:yourdomain.com` query shows which pages are indexed, with their authority and rerank scores. One check costs less than a cent. Set the `localization` field to the market you serve, because leaving it out uses the caller's IP, and in the early test that changed the scores of half the results.
8. **Be careful with parasite content, and with what you send.** Publishing on a high-authority host does not guarantee quality treatment, and the early test found spam on strong hosts, so build on your own domain first. Keep customer names, order details, and private information out of search queries. Our explainer on [what parasite SEO is and whether you should use it](https://f9xr.org/articles/2026/08/17/what-is-parasite-seo-should-business-use-it.html) covers the trade-offs.

## Common Myths About DeepSeek's Search API

| Myth | Reality |
|---|---|
| DeepSeek is replacing Google. | No. It is an API developers can use in their own apps. It does not replace Google Search for most people. |
| I can pay to rank higher. | The documentation describes no paid placement. Results come with relevance and authority scores. |
| High authority means high quality. | An early test found spam on high-authority hosts, so a tier is a hint, not a verdict. |
| DeepSeek has explained what GEO manipulation is. | It has not. The term is undefined in the launch materials. |
| My site will be penalized for using AI tools. | DeepSeek says it filters low-quality AI-generated content. Helpful, edited, accurate writing is a different thing from mass-produced filler. |
| It is free to use. | Search and Fetch are $0.75 per 1,000 successful requests. Some server-side tool calls are free until October 31. |

## How F9XR Team Can Help You

Whether people find you through Google, ChatGPT, Gemini, Claude, Perplexity, or an engine that did not exist last month, the same foundations apply. A fast, clear website. Accurate business information. Honest content. Real reviews.

- **Website development and redesign.** Clean, mobile-friendly sites with proper structure, dates, authorship, and schema.
- **Local SEO.** Google Business Profile optimization, citations, review strategy, and consistent business data.
- **AI search readiness.** Content structure, entity signals, and markup that get your business found and cited in AI answers.
- **Digital presence and trust audits.** A clear look at what search engines and AI tools see when they look for your brand, with a practical fix list.

Want a second opinion on your site? [Contact the F9XR Team](https://f9xr.org/articles/press/contact.html) and we will point you to the quickest wins.

## Key Takeaways

- DeepSeek opened its in-house search engine to developers on October 17, 2026, through a Search API and a Fetch API.
- Both cost $0.75 per 1,000 successful requests, and failed or empty requests are not billed.
- Each result carries an authority tier (0 to 4) and a rerank score (0 to 3), which makes source quality visible to developers.
- DeepSeek claims its index covers hundreds of billions of pages and that it filters SEO spam, GEO manipulation, and low-quality AI content. It has not explained the method or defined GEO manipulation.
- Early independent testing found host-level authority behavior, undated pages dropping out of date-filtered searches, and some spam on high-authority sites.
- Open questions remain about the crawler, robots.txt handling, query privacy, and where the results come from.
- The safest strategy has not changed: honest content, clear structure, dated pages, named experts, consistent business facts, a trustworthy website.

## Conclusion

DeepSeek opening its search engine is another sign that AI search is turning into a crowded, competitive field. More engines, more agents, more ways for a customer to ask a question and get an answer without ever seeing a list of blue links.

For small businesses the winning plan stays simple. Be real, be clear, be consistent, and keep your site in good shape. Skip anything that smells like a trick, because the people building these systems are openly saying they are looking for it.

If you want a hand with the foundations, the F9XR Team works on website development, website redesign, local SEO, and digital presence solutions that keep your business visible wherever people search next. Our guide on [steps to make your business site visible to AI](https://f9xr.org/articles/2026/08/14/steps-make-business-site-visible-to-ai.html) covers the groundwork in more detail.

---

## Sources

- [DeepSeek API Docs: Search and Fetch guide](https://api-docs.deepseek.com/guides/search/){:target="_blank" rel="noopener noreferrer"}
- [DeepSeek API Docs: Change log](https://api-docs.deepseek.com/updates){:target="_blank" rel="noopener noreferrer"}
- [Search Engine Journal: DeepSeek Opens Its In-House Search Engine To Developers](https://www.searchenginejournal.com/deepseek-opens-its-in-house-search-engine-to-developers/593526/){:target="_blank" rel="noopener noreferrer"}
- [Search Engine Journal: I Tested DeepSeek's New Search API](https://www.searchenginejournal.com/i-tested-deepseeks-new-search-api-heres-how-it-ranks-and-scores-websites/593408/){:target="_blank" rel="noopener noreferrer"}
- [The New Stack: DeepSeek made its name with cheap AI models. Now it's undercutting search API rivals, too.](https://thenewstack.io/deepseek-web-search-api/){:target="_blank" rel="noopener noreferrer"}

---

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
