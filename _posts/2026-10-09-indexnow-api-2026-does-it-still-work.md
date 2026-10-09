---
layout: post
title: "IndexNow in 2026: Does It Still Work? The Honest Answer"
description: "IndexNow still works in 2026 for Bing, Yandex and more, but not Google. Learn what it does, who needs it and how to set it up."
image: "https://f9xr.org/articles/assets/post-images/indexnow-api-2026-does-it-still-work.webp"
image_width: 1200
image_height: 630
date: 2026-10-09
dateModified: 2026-10-09
author: "Masna Sudhir"
tags: [IndexNow, IndexNow API, Technical SEO, Bing SEO, Search Indexing, Google Search Console, XML Sitemap, Local SEO, Website Development, Digital Presence]
keywords: "indexnow api, what is indexnow, does indexnow work in 2026, does google support indexnow, indexnow bing, instant indexing, indexnow wordpress, bing webmaster tools, xml sitemap, search indexing"
faq:
  - q: "What is the IndexNow API?"
    a: "IndexNow is a free, open protocol that lets a website notify participating search engines when a URL is added, updated, or deleted. The site sends the changed URLs with a verification key, so search engines can discover the changes without waiting for their next crawl."
  - q: "Does IndexNow still work in 2026?"
    a: "Yes. IndexNow still works in 2026 for the search engines that support it, including Bing, Yandex, Naver, Seznam.cz, and Yep. It does not work for Google, which has not adopted the protocol."
  - q: "Does Google support IndexNow?"
    a: "No. Google said in 2021 it would test IndexNow, but it is still not a participant. For Google, use an XML sitemap, internal links, and Google Search Console."
  - q: "Which search engines support IndexNow?"
    a: "Bing, Yandex, Naver, Seznam.cz, and Yep support IndexNow. The official documentation also lists an Amazon endpoint. DuckDuckGo does not run its own IndexNow system, but it relies heavily on Bing results."
  - q: "Does the F9XR SEO Codebase Auditor skill check for IndexNow?"
    a: "Yes. The F9XR SEO Codebase Auditor skill includes an IndexNow Protocol Setup check inside Pillar 9, XML Sitemap and Robots.txt. If the protocol is missing, the skill flags it and provides the key file, the JSON request body, and the expected response codes."
---

Here is one number worth holding onto before you read another word about the IndexNow API. Roughly nine out of ten searches worldwide still happen on Google, and Google does not participate in IndexNow. That single fact should shape how you read every "instant indexing" promise you see.

So here is the honest answer up front. Yes, IndexNow still works in 2026, but it does not work with Google. It speeds up discovery on Bing, Yandex, Naver, Seznam.cz, Yep and a few other platforms. For most local businesses, that makes it a useful extra, not a cure for slow rankings.

I look at a tool the way I look at any metric. What does it actually measure? Where does the data go? What can you do with the result? Let me walk through IndexNow in that order, with the numbers attached.

## What Is the IndexNow API?

IndexNow is a free, open protocol that lets a website tell search engines when a page is added, updated, or deleted. Microsoft Bing and Yandex launched it in October 2021. It costs nothing and it has no reporting dashboard of its own.

Picture normal crawling as a postman who walks your street on his own schedule, checking every house for mail. IndexNow is the doorbell. You say "something changed at this address," and the search engine still decides what to do with that. The difference is that it now knows where to look.

Technically, one call does three things. It names the host, proves you own that host with a key, and lists the URLs that changed. That is the entire protocol.

### How IndexNow Works, Step by Step

1. Generate a key. This is a random string of letters and numbers, typically 8 to 128 characters, that acts like a password for your domain.
2. Host a key file. Put a UTF-8 text file named after your key, for example `yourkey.txt`, at the root of your site. The file holds only the key, nothing else.
3. Send your URLs. When a page changes, your site or a plugin posts the URL to the IndexNow endpoint. One request carries up to 10,000 URLs.
4. The engines verify and share. Each participating engine fetches your key file to confirm ownership. Under the protocol, a submission to one participating engine is shared with the others.

If your CMS, host, or SEO plugin supports IndexNow, the plugin writes and hosts the key file for you. That file is the same kind of small text file we cover in our guide to [essential TXT files for SEO and AEO](https://f9xr.org/articles/2026/08/08/essential-txt-files-seo-aeo-geo-2026.html), just for a different job.

### What a Request Looks Like

Here is the whole pipeline in one request. Input: the list of changed URLs. Processing: the JSON body plus your key. Output: an HTTP status code. Action: what you do with that code.

```bash
curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
    "host": "www.yourdomain.com",
    "key": "your-key-here",
    "keyLocation": "https://www.yourdomain.com/your-key-here.txt",
    "urlList": [
      "https://www.yourdomain.com/new-service-page/",
      "https://www.yourdomain.com/updated-pricing/"
    ]
  }'
```

Read the response before you celebrate. A 200 means the engine received your list. It does not mean your pages are indexed. The complete set of status codes lives in the [IndexNow documentation](https://www.indexnow.org/documentation){:target="_blank" rel="noopener noreferrer"}.

In your own data, track two numbers: URLs submitted and URLs later seen in the index. They are never the same figure, and the gap is where the real learning happens.

## Does IndexNow Still Work in 2026?

Yes. The protocol is active and documented at [indexnow.org](https://indexnow.org/faq){:target="_blank" rel="noopener noreferrer"}, and adoption is broad. Industry reports in 2026 describe more than 60 million websites using it. One summary also cites Bing data from December 2024 showing over 3.5 billion URL submissions per day. Treat both figures as reported estimates from secondary sources, not audited counts.

What has not changed is the catch. Google does not support it.

### Which Search Engines Support IndexNow in 2026?

| Search engine or platform | Supports IndexNow? | Notes |
|---|---|---|
| Microsoft Bing | Yes | Co-creator of the protocol. It also feeds other Microsoft products. |
| Yandex | Yes | Co-creator. Most relevant for Russia and nearby markets. |
| Naver | Yes | The major search engine in South Korea. |
| Seznam.cz | Yes | Popular in the Czech Republic. |
| Yep | Yes | Runs its own IndexNow endpoint. |
| Amazon | Listed | The official FAQ lists an Amazon endpoint. |
| Google | No | Said in 2021 it would test the protocol, but it never joined. |
| DuckDuckGo | Indirect | Relies heavily on Bing results, so Bing's index matters. |

### Why Google Is the Missing Piece

Google announced in 2021 that it would test IndexNow. Years later, it still does not accept IndexNow submissions. Independent guides checked the participant list at different points in 2026 and reached the same conclusion. Google uses its own discovery systems instead: XML sitemaps, internal links, Search Console, and a separate Indexing API.

Be careful with that last one. Google's Indexing API is limited to specific content types such as job postings and livestream events. It is not a general "submit any page instantly" tool for a normal business site.

This matters because sending a URL through IndexNow has zero effect on Google indexing. Anyone who tells you otherwise is selling something.

## What About ChatGPT, Gemini, Claude, and Perplexity?

This is where a lot of articles get overexcited, so let me keep it grounded.

IndexNow notifies search engines, not AI assistants directly. But some AI products draw on search indexes. Microsoft Copilot, for example, uses Bing's index, so faster Bing discovery can help a fresh page surface there. Other AI tools run their own crawlers or use different sources, and none of them promise that an IndexNow submission changes what they show.

The honest takeaway: IndexNow may help the Bing-powered corner of AI search. It is not a guaranteed route into every AI answer. For broader AI visibility, content quality, clear structure, schema markup, and accurate business information do more work. We cover that wider checklist in [how to make your business site visible to AI](https://f9xr.org/articles/2026/08/14/steps-make-business-site-visible-to-ai.html).

## Does the F9XR SEO Codebase Auditor Skill Check for IndexNow?

Yes, and this is not a side note. Our free SEO Codebase Auditor skill reviews a code repository against 24 SEO pillars, and Pillar 9 (XML Sitemap and Robots.txt) includes an IndexNow Protocol Setup check. When the protocol is missing, the skill flags it and returns the exact fix: the key generation step, the key file, the JSON request body, and the expected response codes.

That gives you a repeatable way to catch a missing IndexNow setup during a normal audit instead of discovering it months later. If you want to run the check on your own codebase, the [SEO Codebase Auditor skill guide](https://f9xr.org/articles/2026/07/31/f9xr-seo-codebase-auditor-skill-guide.html) explains the 24-pillar model, and the [install and update guide](https://f9xr.org/dev9b/p/how-to-install-update-f9xr-codebase-auditor-skill/) walks you through adding it to a project.

## Does F9XR Use IndexNow?

We do. We run IndexNow on f9xr.org, and every new article in this library is submitted through it after we publish. It does not speed up our Google indexing, and we do not pretend that it does. What it gives us is a clean notification path for Bing and its partners, plus a little extra reach with the readers who find us there.

The math is easy. If a free protocol improves discovery on even one non-Google engine, and the setup is a key file and one API call, then the cost is close to zero. That is a trade we take.

## IndexNow vs Other Ways to Get Pages Discovered

| Method | Works for | Speed | Best use |
|---|---|---|---|
| IndexNow | Bing, Yandex, Naver, Seznam.cz, Yep | Fast notification | Frequent updates, new pages, deleted pages |
| XML sitemap | Google, Bing, and most engines | Slower, scheduled | Your baseline for every site |
| Google Search Console URL Inspection | Google | Manual, one URL at a time | Urgent single-page fixes |
| Google Indexing API | Google | Fast | Only job posting and livestream pages |
| Internal links | All crawlers | Depends on crawling | Helping new pages get found naturally |

Notice that IndexNow does not replace your sitemap. Even participating search engines still treat sitemaps as the main inventory of your pages. Think of IndexNow as a quick nudge on top of a solid foundation. If you are unsure whether your sitemap covers the right pages, our guide on whether you need an [image or video sitemap](https://f9xr.org/articles/2026/10/01/image-video-sitemap-does-your-website-need-one.html) covers the media side, and Google's [sitemap overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview){:target="_blank" rel="noopener noreferrer"} covers the basics.

## Who Actually Benefits From IndexNow?

### Local Businesses

If your customers mostly use Google, and for most local businesses they do, IndexNow will not move the needle there. Your time is better spent on your Google Business Profile, reviews, and clean local pages. That said, enabling IndexNow costs nothing and can help your pages appear faster on Bing, which also matters for Bing-powered products and some desktop and voice searches.

### Startups and Content-Heavy Sites

If you publish often, run a blog, or push product updates weekly, IndexNow is worth switching on. Faster discovery on Bing and partner engines means new pages can start earning impressions sooner.

### E-Commerce and Frequently Changing Sites

Stores that change prices, stock, or product pages regularly benefit from instant notifications. That is especially true for removed or out-of-stock pages that should disappear quickly. Several platforms and CDNs offer built-in options, so check your settings before building anything custom.

### Sites That Rarely Change

If your five-page brochure site changes twice a year, IndexNow will make very little difference. A clean sitemap is enough.

## How to Set Up IndexNow

### Option 1: Use Your Platform or Plugin

This is the easiest path for most business owners.

- WordPress: check your SEO plugin settings. Several popular SEO plugins include an IndexNow option or module you can switch on.
- Shopify, Wix, and similar builders: look for IndexNow in your search or SEO settings. Support varies by platform, so confirm in your dashboard.
- Cloudflare and hosting panels: some CDNs and hosts send IndexNow pings automatically. Check your provider's documentation.
- [Bing Webmaster Tools](https://www.bing.com/webmasters){:target="_blank" rel="noopener noreferrer"}: verify your site there and generate a key if you need one.

### Option 2: Set It Up Manually

1. Generate a random key of letters and numbers.
2. Create `yourkey.txt` containing only that key, and upload it to your site root.
3. Submit URLs using the IndexNow endpoint or the JSON request shown earlier.
4. Check the response code. A 200 means received. A 403 usually points to a key or hostname mismatch, and a 422 means the URLs do not belong to the host.

### Mistakes to Avoid

- Submitting everything, every day. Only send URLs that are new, updated, or deleted.
- Expecting instant indexing. IndexNow gives awareness, not a guarantee.
- Skipping the sitemap. Keep your XML sitemap clean and current.
- Ignoring Google. Pair IndexNow with Search Console and a healthy sitemap for Google.
- Buying shady "instant indexing" services. If someone promises guaranteed Google indexing, be skeptical. We cover the risks in our guide on [how paid indexing services work](https://f9xr.org/articles/2026/08/30/how-paid-indexing-services-work-tech-truth-risks.html).

## Quick Tips for Business Owners

1. Turn on IndexNow if your platform offers a simple toggle. It is free.
2. Verify your site in both Google Search Console and Bing Webmaster Tools.
3. Keep your sitemap updating automatically.
4. Submit deleted or redirected URLs too, so old pages clear out faster.
5. Review visibility monthly instead of chasing instant results. Our [monthly website audit checklist](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html) covers the full review.

In Bing Webmaster Tools, check the IndexNow section for submission counts and error rates. That is your feedback loop. If the error count is climbing, the key file or the host value is usually the cause.

## Key Takeaways

- IndexNow is a free, open protocol that tells search engines when your pages are added, updated, or deleted.
- It still works in 2026 for Bing, Yandex, Naver, Seznam.cz, Yep and other participating platforms.
- Google does not support IndexNow, so it will not speed up Google indexing.
- IndexNow does not guarantee indexing or rankings. It only speeds up awareness.
- You can submit up to 10,000 URLs per request, and most business owners can use a plugin instead of coding.
- Your XML sitemap and Search Console stay essential, especially for Google.
- It suits sites that update often, and it is a harmless free extra for everyone else.

## Conclusion

IndexNow is not dead, and it is not a miracle. In 2026 it remains a simple, free way to alert Bing and several other search engines when your site changes. It just does not reach Google, which is where most small businesses still win or lose customers.

Use it as a helpful extra, and keep your focus on the fundamentals: a clean sitemap, fast pages, accurate business details, and content people trust.

If you would rather have a team handle the technical side, F9XR Team offers website development, website redesign, local SEO, and digital presence services. The [services page](https://f9xr.org/pages/services.html) lists everything, and the [contact page](https://f9xr.org/pages/contact.html) is the fastest way to reach us.

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
