---
layout: post
title: "Robots.txt: Google Says Keep It Beautifully Boring"
description: "Google's new Search Central video explains what robots.txt can and can't do, from AI crawlers to emoji rules, and what owners should fix."
image: "https://f9xr.org/articles/assets/post-images/google-robots-txt-video-what-site-owners-should-know.webp"
image_width: 1200
image_height: 630
date: 2026-10-23
author: "Mohammed Ahetasham Uddin"
tags: [robots.txt, Google Search Central, Technical SEO, AI crawlers, Google-Extended, RFC 9309, Local SEO, Website crawling, Gary Illyes, Answer Engine Optimization]
keywords: "robots.txt, Google robots.txt video, robots.txt AI crawlers, Google-Extended, RFC 9309, robots.txt best practices, Non-Canonical Cabinet, robots.txt rules, block AI crawlers, robots.txt sitemap"
youtube_id: "-jHONLQgE-s"
faq:
  - q: "What does Google's new robots.txt video say?"
    a: "Google's October 21, 2026 Search Central video says robots.txt supports only four rules: user-agent, allow, disallow, and sitemap. Anything else is silently ignored. It also explains that robots.txt controls crawling access, not how content is used afterward, and recommends percent-encoding non-English URL paths."
  - q: "Can robots.txt stop AI companies from training on my content?"
    a: "Not by itself. Robots.txt only controls whether a crawler may access a page, not how collected content is used. You can block a specific AI crawler by naming its user-agent token, but compliance is voluntary, and a usage rule such as Content-Usage is still only a draft."
  - q: "Can I use emoji or non-English characters in robots.txt?"
    a: "Not in user-agent names, which allow only letters, underscores, and hyphens. In URL paths, Google converts raw characters on its own, but other crawlers may not. The safest option is to write the percent-encoded version of any non-English or emoji path."
  - q: "Does blocking a page in robots.txt remove it from Google?"
    a: "No. Robots.txt blocks crawling, not indexing. A blocked URL can still show up in Google's results if other websites link to it, because Google never fetches the page to see a noindex tag. To keep a page out of search, use noindex and leave the page crawlable."
  - q: "What is Google-Extended?"
    a: "Google-Extended is a robots.txt token that controls whether content Google crawls can be used to train future Gemini models and for grounding in certain Gemini products. It has no crawler of its own, and Google says it does not affect Search inclusion or rankings."
---

A typo in a 200-byte text file can keep a product page out of Google for months. The file costs nothing to fix, and almost nobody checks it.

That file is robots.txt. It sits at the front door of your website and tells every well-behaved bot, from Googlebot to the crawlers behind AI tools, which rooms it may enter. Most business owners have never opened it. Many do not know it exists.

On October 21, 2026, Google's Search Central team published a short video about it. The episode stars a cartoon filing cabinet and a running chicken joke, which sounds silly until you notice how practical the answers are. For a local business, a startup site, or a client-facing practice, a few of those answers can change what you do this week.

> **Quick answer:** Google's video says robots.txt understands only four rules (user-agent, allow, disallow, and sitemap), silently ignores everything else, controls whether a bot can crawl a page but not what happens to the content afterward, and works best when non-English URL paths are percent-encoded. Google's own summary is to keep your file beautifully boring.

If you have never edited the file, start with [the essential text files for SEO, AEO and GEO](https://f9xr.org/articles/2026/08/08/essential-txt-files-seo-aeo-geo-2026.html). It explains where robots.txt sits next to sitemaps, llms.txt, and ai.txt.

---

## What Google actually published

The video is called "What can you actually put in a robots.txt?" and it went live on the [Google Search Central YouTube channel](https://www.youtube.com/watch?v=-jHONLQgE-s){:target="_blank" rel="noopener noreferrer"} on October 21, 2026. It runs a little over nine minutes.

It is the second episode of a series called The Non-Canonical Cabinet, hosted by Gary Illyes and Cherry Prommawin from Google's Search Relations team. The format is simple: they pull odd, edge-case technical questions from the community and answer them. [Episode one](https://www.searchenginejournal.com/google-launches-a-video-series-for-odd-technical-seo-questions/592952/){:target="_blank" rel="noopener noreferrer"}, published October 14, covered what can appear in domain names and URL paths. According to the video description, the next episode covers the 404 status code.

A joke-filled video still deserves a news article, because Google rarely says this much, this plainly, about a file that quietly controls how search engines and AI systems treat your website.

---

## The six lessons from Google's robots.txt video

### 1. Robots.txt understands only four rules

Google's parser reads your file line by line and looks for four things: `User-agent`, `Allow`, `Disallow`, and `Sitemap`. That is the whole vocabulary. [Google's robots.txt documentation](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec){:target="_blank" rel="noopener noreferrer"} says the same, and adds that other fields, such as crawl-delay, are not supported.

One distinction matters here. The formal internet standard, [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html){:target="_blank" rel="noopener noreferrer"}, defines the first three. The sitemap line is a widely supported extension that Google also honors.

### 2. Lines it does not understand are silently thrown away

This is the lesson that matters most for real businesses. If you write something in plain English, such as "please don't crawl my secret page," Google does not raise an error. It reads the line, decides it is not a valid rule, drops it, and moves on. Your secret page may then get crawled like any other.

There is no warning, no red flag, and no partial protection. A broken rule simply does not exist.

### 3. You can add comments, but do not turn your file into a billboard

Anything after a hash symbol (`#`) is ignored by crawlers, so comments are safe. The hosts joked that you could paste a giant ASCII chicken into the file if you really wanted to.

You should not. The video did not mention it, but Google's documentation says it only reads the first 500 kibibytes of a robots.txt file and ignores the rest. A file stuffed with decoration wastes bandwidth on every fetch. In the worst case, your real rules end up past the cutoff where nobody reads them.

### 4. Emoji and non-English characters do not work in user-agent names

Can you use an emoji to name a bot you want to block? No. Per the standard, a bot's product token can only contain letters, underscores, and hyphens. An emoji is a multi-byte character, so it will not match anything. Accented letters, Cyrillic, Arabic, and Chinese characters have the same problem inside a user-agent line.

### 5. For non-English URL paths, use the percent-encoded version

This one affects Indian businesses, multilingual sites, and anyone whose URLs include regional scripts. Google's parser is flexible and will convert raw characters such as Hindi, Chinese, or emoji into their encoded form on its own. The hosts warned that other or older crawlers may not, and a confused crawler can ignore your disallow line entirely.

The safer habit is to write the encoded form directly:

```txt
# Works for Google, riskier for other crawlers
Disallow: /🐔-gear

# The safe, standard way
Disallow: /%F0%9F%90%94-gear
```

### 6. Robots.txt controls access, not what happens to your content afterward

This is the headline for anyone worried about AI. The hosts explained that robots.txt, as defined by the standard, is about access. It tells a crawler whether it may fetch a page. It says nothing about what a company does with that content after it has been collected.

If your goal is "let AI bots in, but don't use my content for training," a custom rule will not do it. An invented line such as `No-AI-Training: true` is exactly the kind of thing a parser ignores. To keep a specific AI crawler out, you have to name its user-agent token and disallow it.

---

## What robots.txt can and cannot do

The difference between a crawl rule and a usage rule is the difference between locking a door and asking someone not to look through the window. This table sets the boundary.

| Question | Can robots.txt do it? | Notes |
|---|---|---|
| Stop a well-behaved bot from crawling a folder | Yes | Use `Disallow` under the right `User-agent` |
| Point bots to your XML sitemap | Yes | Use the `Sitemap:` line |
| Keep a page out of Google's index | Not reliably | A blocked page can still appear in results if other sites link to it, because Google never fetches it to see a noindex tag |
| Hide private or sensitive pages | No | Robots.txt is public and voluntary. Use a login or server-side protection |
| Set rules for how AI may use my content | Not through custom lines | Unknown directives are discarded. Only named crawler tokens work |
| Force a bad bot to behave | No | Compliance is voluntary |

The index point catches more businesses than any other row. A page blocked in robots.txt can still be indexed if enough external links point at it. Google sees the URL, not the content, and may list it with a thin snippet. If you need a page out of search, the page has to stay crawlable so the `noindex` tag can be read.

---

## What the video did not say, but you should know

The hosts kept the episode light, so a few important details sit outside the video. These matter more as AI crawlers multiply.

### Google-Extended is Google's own AI control

Google runs a token called **Google-Extended**. It has no crawler of its own. You set it in robots.txt, and it tells Google whether content its crawlers collect can be used to train future Gemini models and for grounding in some Gemini products. [Google's crawler list](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers){:target="_blank" rel="noopener noreferrer"} says it does not affect your inclusion in Google Search and is not a ranking signal. Blocking it will not hurt your rankings, but it shows that even Google attaches usage meaning to specific tokens. Our guide to [blocking AI crawlers on your site](https://f9xr.org/articles/2026/09/04/block-ai-crawlers-on-your-site.html) walks through the token-by-token decision.

### Some Google fetchers skip robots.txt altogether

Google-Agent, a user-triggered fetcher added to Google's crawler documentation in March 2026, [ignores robots.txt rules because a real person asked for the fetch](https://ppc.land/google-agent-joins-the-crawler-list-as-ai-browsing-gets-an-official-identity/){:target="_blank" rel="noopener noreferrer"}. A rule for Googlebot says nothing about it.

### Not every bot plays fair

Third-party testing gives an uneven picture, as reported by PPC Land.

- TollBit's data for the first half of 2026 found that about 15% of identified AI page-fetching agents [reached URLs that European sites had disallowed](https://ppc.land/15-of-ai-page-fetchers-in-europe-reached-disallowed-urls-tollbit-finds/){:target="_blank" rel="noopener noreferrer"}.
- A HasData test in July found that of 592 sites disallowing GPTBot, 234, or roughly four in ten, still served it a live page.
- On October 16, Cloudflare said it plans to score Verified bots on whether they honor robots.txt.

That is the financial reality of the file. Robots.txt is a polite request, not a lock.

### A usage rule is being drafted, but it is not a standard yet

Gary Illyes is a co-author of an IETF draft that would add a `Content-Usage` rule to robots.txt, with examples such as `train-ai=n`. As [Search Engine Journal reported](https://www.searchenginejournal.com/google-illyes-robots-txt-crawling-ai-training/593957/){:target="_blank" rel="noopener noreferrer"}, it is still a working group draft and not an approved standard, so no search engine or AI company is bound by it today. Track it, but do not build a policy on it yet.

For the near term, the practical controls remain the crawler tokens and the files search and AI systems already read. Our breakdown of [whether llms.txt and ai.txt actually work](https://f9xr.org/articles/2026/09/08/llms-txt-ai-txt-do-they-work-2026.html) covers what those files can and cannot promise.

---

## Why this matters for business owners, startups, and local businesses

You might think this is a topic for developers. It is not. A few everyday examples show where the cost lands.

A local clinic or restaurant with a regional-language page structure can have broken rules if the paths are not encoded properly. A startup with a staging site or internal search pages can waste crawl attention, or leak half-finished pages into search. A professional practice, such as a CA or CS firm with a client portal, might assume a disallow line protects private pages. It does not. The file is public and anyone can read it. A growing e-commerce store can block the wrong folder during a redesign and accidentally hide product pages from Google.

The pattern is the same each time. One typo, one invented directive, or one wrong assumption, and nothing tells you it failed. The loss shows up weeks later as missing impressions in Search Console, and by then the cause is buried under a redesign, a campaign, or a seasonal dip.

The check costs about ten minutes. The recovery can take months.

---

## What a clean, boring robots.txt looks like

Here is a simple example for a small business website. Adjust the folders to match your own site.

```txt
# Rules for all crawlers
User-agent: *
Disallow: /admin/
Disallow: /cart/
Disallow: /search/
Allow: /admin/admin-ajax.php

# Optional: opt out of Google's Gemini training and grounding
# This does not affect Google Search rankings
User-agent: Google-Extended
Disallow: /

# Help crawlers find your pages
Sitemap: https://www.yourwebsite.com/sitemap.xml
```

Blocking AI crawlers is a business decision. If you want your brand mentioned in AI answers, blocking everything can work against you. Always check each AI company's current documentation for its exact crawler names, because they change. When you update the sitemap line, confirm you are using the right format from [the guide to types of sitemaps](https://f9xr.org/articles/2026/10/10/types-of-sitemaps-seo-guide.html).

---

## Your eight-step action plan

1. **Open your file.** Visit `yourwebsite.com/robots.txt` and read it line by line.
2. **Delete anything that is not a valid rule.** If a line is not `User-agent`, `Allow`, `Disallow`, `Sitemap`, or a `#` comment, assume Google is ignoring it.
3. **Check your size.** Keep the file small and well under 500 KiB.
4. **Encode non-English paths.** If your URLs use regional scripts or emoji, write the percent-encoded form in your rules.
5. **Name the bots you want to block.** Use the exact user-agent token from each company's documentation. Do not invent rules.
6. **Do not hide secrets with it.** Protect private content with logins or server settings, and use a `noindex` tag on pages you want out of search. Leave those pages crawlable so the tag can be seen.
7. **Add your sitemap line.** It helps crawlers find your important pages faster.
8. **Test after every change.** Use Google Search Console to confirm important pages are not blocked, and re-check after any redesign or migration. A [monthly website audit checklist](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html) keeps the check from slipping.

---

## Key takeaways

- Google's robots.txt recognizes four rules: `User-agent`, `Allow`, `Disallow`, and `Sitemap`.
- Invalid or invented lines are silently ignored, with no error message.
- Comments starting with `#` are safe, but Google reads only the first 500 KiB of the file.
- Emoji and non-English characters cannot be used in user-agent names.
- Percent-encode non-English or emoji URL paths so every crawler reads them correctly.
- Robots.txt controls crawling, not what an AI company does with content it already collected.
- To block a specific AI crawler, name its exact user-agent token.
- Blocking a page in robots.txt does not guarantee it stays out of Google's index.
- Robots.txt is public and voluntary, so never use it to hide sensitive pages.
- Google's advice in a nutshell is to keep it simple and keep it boring.

---

## Conclusion

The most useful part of Google's robots.txt video is its reminder that the file works only when it is simple, valid, and honest about what it can do. It can ask bots to stay out of certain areas. It cannot enforce good behavior, hide private data, or set terms for how AI uses your content.

For most small businesses, the fix takes about ten minutes: open the file, remove the clutter, name the bots you care about, and test. Do that now, and you avoid a silent mistake that can cost traffic or visibility for months.

If you would rather not run the technical side yourself, F9XR Team handles technical SEO audits, website development and redesign, local SEO, and AI visibility setup for small and local businesses. The robots.txt review is small, but it sits inside a larger system of crawl paths, sitemaps, and structured data that decides whether search engines and AI tools can read your site at all. You can see how that system connects in [why a small business needs a website in 2026](https://f9xr.org/articles/2026/10/22/why-small-business-needs-website-2026.html).

---

*Sources: [Google Search Central video](https://www.youtube.com/watch?v=-jHONLQgE-s), [Search Engine Journal](https://www.searchenginejournal.com/google-illyes-robots-txt-crawling-ai-training/593957/), [PPC Land](https://ppc.land/google-says-robots-txt-limits-ai-crawling-not-what-bots-do-with-data/), [Google's robots.txt specification](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec), [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html). Compliance figures come from third-party testing reported by PPC Land and should be treated as directional.*

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
