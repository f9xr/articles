---
layout: post
title: "Sitemap Types That Quietly Shape Your SEO (2026 Guide)"
description: "Learn the main types of sitemaps, XML, HTML, image, video, news and index files, and which ones your business site needs to get crawled and indexed."
image: "https://f9xr.org/articles/assets/post-images/types-of-sitemaps-seo-guide.webp"
image_width: 1200
image_height: 630
date: 2026-10-10
dateModified: 2026-10-10
author: "F9XR Editorial Team"
tags: [types of sitemaps, XML Sitemap, HTML Sitemap, Sitemap Index, Image Sitemap, Video Sitemap, News Sitemap, Technical SEO, Google Search Console, Website Indexing]
keywords: "types of sitemaps, XML sitemap, HTML sitemap, image sitemap, video sitemap, news sitemap, sitemap index, sitemap for SEO, submit sitemap to Google Search Console, sitemap for local business"
faq:
  - q: "What are the types of sitemaps?"
    a: "The main types are XML sitemaps, HTML sitemaps, sitemap index files, image sitemaps, video sitemaps, news sitemaps, and text sitemaps. XML versions are made for search engine crawlers, while HTML sitemaps are made for human visitors."
  - q: "What is the difference between an XML sitemap and an HTML sitemap?"
    a: "An XML sitemap is a file that lists your URLs for search engine crawlers. An HTML sitemap is a regular web page with clickable links that helps visitors find content. They serve different audiences, and an HTML sitemap does not replace an XML one."
  - q: "Does a sitemap improve SEO?"
    a: "A sitemap does not directly improve rankings. It helps search engines discover and crawl your pages faster, which supports indexing. Good content and technical health still decide how well pages rank."
  - q: "How many URLs can a sitemap contain?"
    a: "A single XML sitemap can contain up to 50,000 URLs or 50 MB uncompressed, whichever limit is reached first. If you need more, split the URLs into several sitemaps and list them in a sitemap index file."
  - q: "How do I submit a sitemap to Google?"
    a: "Open Google Search Console, select your site, go to the Sitemaps report, enter your sitemap URL, and click Submit. You can also add a Sitemap line to your robots.txt file so crawlers can find it automatically."
---

You launch a new website. The design is sharp, the copy is good, the photos look great. A month later you search for your own business and find nothing. Half your pages have not been indexed, and nobody can tell you why.

This happens more often than people admit, and one of the usual suspects is a missing or poorly built sitemap.

A sitemap is a file or a page that lists the important URLs on your site. It sounds like a small technical chore, but there are several types of sitemaps, and each one does a different job. Some help Google find your pages. Some help visitors. Some tell search engines about your images, your videos, or your breaking news.

If you run a business, a startup, or a local shop, this guide explains the major types of sitemaps in plain language, which ones actually matter for SEO, and how to set them up without a headache.

---

## Quick Answer: What Are the Types of Sitemaps?

**The main types of sitemaps are XML sitemaps, HTML sitemaps, sitemap index files, image sitemaps, video sitemaps, news sitemaps, and text or feed based sitemaps.** XML sitemaps are written for search engine crawlers, HTML sitemaps are written for human visitors, and the specialized sitemaps (image, video, news) give search engines extra detail about specific kinds of content.

Most business websites need only two: a standard **XML sitemap** and, if the site is large, an **HTML sitemap** for people.

---

## What Does a Sitemap Actually Do?

Think of your website as a city and Googlebot as a delivery driver with limited time. Links between your pages are the roads. A sitemap is the address list you hand the driver at the start of the day.

Search engines can find most pages by following links. But a sitemap helps in situations where that is slow or unreliable:

- A brand new site with few links pointing to it
- A large site with thousands of pages
- Pages buried deep in the structure
- Sites with lots of media content
- Pages that change often

Here is the part many beginners get wrong. **A sitemap does not guarantee indexing, and it is not a ranking factor.** It helps discovery. Whether a page is indexed and how it ranks still depends on quality, relevance, and technical health. Google's own [sitemap overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview){:target="_blank" rel="noopener noreferrer"} says the same thing: a sitemap is a hint, not a command.

---

## The Types of Sitemaps at a Glance

| Sitemap Type | Written For | Format | What It Lists | Who Needs It |
|---|---|---|---|---|
| **XML sitemap** | Search engines | .xml | Your important page URLs | Almost every site |
| **Sitemap index** | Search engines | .xml | Links to multiple sitemaps | Large or segmented sites |
| **HTML sitemap** | Human visitors | Web page | Clickable links to main sections | Large sites, ecommerce, directories |
| **Image sitemap** | Search engines | .xml | Image URLs tied to pages | Photo heavy sites, portfolios, stores |
| **Video sitemap** | Search engines | .xml | Video details and landing pages | Sites hosting their own videos |
| **News sitemap** | Google News | .xml | Recent news articles | Publishers and news sites |
| **Text sitemap** | Search engines | .txt | Plain list of URLs | Simple setups |
| **RSS or Atom feed** | Search engines | .xml | Recently updated content | Blogs, as a supplement |

Here is how the main types split by audience.

- Sitemaps for search engines
  - XML sitemap
  - Sitemap index
  - Image sitemap
  - Video sitemap
  - News sitemap
  - Text sitemap
  - RSS and Atom feeds
  - Multilingual hreflang entries
- Sitemaps for people
  - HTML sitemap

Now let us go through each one.

---

## 1. XML Sitemap (The Standard One)

This is the sitemap most people mean when they say "sitemap." It is an XML file, usually found at an address like `yourdomain.com/sitemap.xml`, that lists the URLs you want search engines to know about.

### What it looks like

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-10-01</lastmod>
  </url>
  <url>
    <loc>https://example.com/services/local-seo/</loc>
    <lastmod>2026-09-20</lastmod>
  </url>
</urlset>
```

### The tags that matter

- **loc:** the full URL of the page. This is required.
- **lastmod:** the date the page was last meaningfully changed. This is useful, but only if it is accurate.
- **priority and changefreq:** you will see these in many older guides. Google has said it ignores them, so do not spend time tuning them.

### Limits to know

Each XML sitemap can hold up to **50,000 URLs** or **50 MB uncompressed**, whichever comes first. Past that, you split it into several files and use a sitemap index. Google documents those exact ceilings in its [guide to large sitemaps and index files](https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps){:target="_blank" rel="noopener noreferrer"}.

### Best for

Every business website. If you only add one sitemap, this is the one. The shared standard behind the file format is the [sitemaps.org protocol](https://www.sitemaps.org/protocol.html){:target="_blank" rel="noopener noreferrer"}, which is worth a skim if you plan to write one by hand.

---

## 2. Sitemap Index File

A sitemap index is a sitemap of sitemaps. Instead of listing pages, it lists other sitemap files. It is how large sites stay organized when one file is not enough.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://example.com/sitemap-products.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://example.com/sitemap-blog.xml</loc>
  </sitemap>
</sitemapindex>
```

### Why it helps beyond size limits

Splitting by content type (pages, products, blog posts, locations) makes troubleshooting much easier. In Google Search Console, you can see indexing results for each file separately. If your blog sitemap shows lots of unindexed URLs but your product sitemap looks healthy, you instantly know where to look.

Popular SEO plugins like Yoast SEO and Rank Math generate sitemap index files automatically.

### Best for

Online stores, large blogs, directories, multi location businesses, or any site with several content types.

---

## 3. HTML Sitemap

An HTML sitemap is an ordinary web page with a structured list of links to your main pages. Unlike the XML kind, it is meant for people.

### What it does for SEO

- Gives visitors a fallback when they cannot find something
- Adds another internal link path to deep pages
- Reinforces your site structure for crawlers

### What it does not do

It does not replace an XML sitemap. Search engines read XML sitemaps through a dedicated process, and they treat an HTML sitemap as just another page.

### Example layout for a local business

```
Home
Services
   Website Development
   Website Redesign
   Local SEO
Locations
   Hyderabad
   Bengaluru
Blog
Contact
```

### Best for

Large sites with many categories, ecommerce stores, directories, and any site where visitors often cannot find what they need. A five page brochure site does not need one.

---

## 4. Image Sitemap

An image sitemap helps search engines discover images that might otherwise be missed, such as pictures loaded through JavaScript or galleries.

You can either add image entries inside your regular XML sitemap or create a separate file.

```xml
<url>
  <loc>https://example.com/products/handloom-saree/</loc>
  <image:image>
    <image:loc>https://example.com/images/kasavu-saree.webp</image:loc>
  </image:image>
</url>
```

(The root `urlset` tag needs the image namespace declared for this to work.)

A heads up: Google has simplified its image sitemap support over time and now relies mainly on the image location. Older optional tags like caption or title are no longer used by Google, so do not worry about filling them in.

### Best for

Photographers, designers, ecommerce stores, restaurants, real estate sites, and portfolios. For the bigger picture on pictures and SEO, read our [image SEO audit guide](https://f9xr.org/articles/2026/08/14/image-seo-audit-complete-guide.html).

---

## 5. Video Sitemap

A video sitemap gives search engines details about video content on your pages, such as the title, description, thumbnail, and where the video file or player lives.

```xml
<url>
  <loc>https://example.com/videos/how-to-claim-gst-refund/</loc>
  <video:video>
    <video:thumbnail_loc>https://example.com/thumbs/gst-refund.jpg</video:thumbnail_loc>
    <video:title>How to Claim a GST Refund</video:title>
    <video:description>A short walkthrough of the GST refund process.</video:description>
    <video:content_loc>https://example.com/videos/gst-refund.mp4</video:content_loc>
  </video:video>
</url>
```

Google's [video sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps){:target="_blank" rel="noopener noreferrer"} lists a required thumbnail, title, and description, plus either a content URL or a player URL.

### Do you really need one?

If you only embed YouTube videos, YouTube already handles discovery on its own platform. A video sitemap is most useful when you **host your own videos** and want them to appear in Google's video results. We break down when the extra work is worth it in our article on [whether your website needs an image or video sitemap](https://f9xr.org/articles/2026/10/01/image-video-sitemap-does-your-website-need-one.html).

### Best for

Course creators, training businesses, media sites, and brands that publish original video on their own domain.

---

## 6. News Sitemap

A news sitemap is built for sites that publish timely news content and are included in Google News. It lists recently published articles so they can be picked up quickly.

### Rules worth knowing

- It should only include articles published in roughly the last two days
- It is limited to a maximum of 1,000 news URLs per sitemap
- Each entry carries publication details like the publication name, language, date, and article title

These rules come from Google's [news sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemaps){:target="_blank" rel="noopener noreferrer"}, which is the source to check if your setup changes.

### Best for

Newsrooms, magazines, and publishers. A regular business blog does not need a news sitemap, even if the posts discuss industry news. Your standard XML sitemap does the job.

---

## 7. Text Sitemap

The simplest format of all: a plain `.txt` file with one URL per line.

```
https://example.com/
https://example.com/services/
https://example.com/contact/
```

It works, and Google accepts it, but you cannot add details like last modified dates. Use it only for very simple setups or quick tests.

---

## 8. RSS and Atom Feeds

Google also accepts RSS and Atom feeds as sitemaps. Most blogs already publish a feed automatically. Feeds are good at announcing *recent* content, but they usually do not list the whole site, so treat them as a supplement, not a replacement for your XML sitemap.

---

## 9. Multilingual Sitemaps (Hreflang Entries)

If your site has versions in different languages or regions, for example an English page and a Hindi page, you can mention the alternate versions inside your XML sitemap using `xhtml:link` annotations with `hreflang` values. This helps search engines serve the right language version to the right audience.

### Best for

Businesses serving several languages or countries. For Indian businesses targeting English and regional language audiences, it can be a smart addition.

---

## What About Mobile Sitemaps?

You may still read about "mobile sitemaps" in older articles. They were designed for feature phones, not modern smartphones. If your website is responsive, you do not need one. Our piece on [why to go mobile first](https://f9xr.org/articles/2026/08/03/why-go-mobile-first.html) covers what actually matters today.

---

## Which Sitemaps Does Your Business Need?

Use this quick guide.

| Your Situation | Recommended Sitemaps |
|---|---|
| Small local business site (under 50 pages) | One XML sitemap |
| Growing blog or service site | XML sitemap, optionally split by content type |
| Online store with many products | Sitemap index, product and category sitemaps, optional image sitemap, HTML sitemap |
| Site hosting its own video | XML sitemap plus video sitemap |
| News publisher | XML sitemap plus news sitemap |
| Multi location or multilingual business | Sitemap index, hreflang entries, separate location sitemap |
| Photographer or visual portfolio | XML sitemap plus image sitemap |

---

## How to Create and Submit a Sitemap

### Step 1: Generate it

- **WordPress:** Yoast SEO and Rank Math create XML sitemaps automatically. Check that the feature is switched on.
- **Shopify and Wix:** both generate a sitemap file for you. You can usually find it at `yourdomain.com/sitemap.xml`.
- **Custom sites:** use a generator tool or write a script that builds the file from your page list.

### Step 2: Clean it up

Only include URLs you actually want people to find. That means pages that:

- Return a 200 status code
- Are indexable (no noindex tag)
- Are the canonical version of the page
- Are not redirects or error pages

### Step 3: Reference it in robots.txt

Add a line like this to your robots.txt file:

```
Sitemap: https://example.com/sitemap.xml
```

This lets any crawler find your sitemap without being told. Our guide on [essential text files for SEO, AEO and GEO](https://f9xr.org/articles/2026/08/08/essential-txt-files-seo-aeo-geo-2026.html) explains where robots.txt fits in.

### Step 4: Submit it in Google Search Console

Open Search Console, choose your property, go to the Sitemaps report, paste your sitemap address, and submit. Do the same in Bing Webmaster Tools.

### Step 5: Monitor

Return to the Sitemaps report after a few days. Look at the status, the number of discovered URLs, and any errors. Also check the Page indexing report for URLs that were submitted but not indexed.

*Note on pinging: Google retired its old sitemap ping tool in 2023, so submitting through Search Console and robots.txt is the right method. For faster notification to supporting engines like Bing, read about [how IndexNow works in 2026](https://f9xr.org/articles/2026/10/09/indexnow-api-2026-does-it-still-work.html).*

---

## Sitemap Setup Rules That Actually Matter

1. **Keep it clean.** Only list canonical, indexable, live pages.
2. **Keep lastmod honest.** Update it only when the page content changes in a meaningful way. If every URL shows today's date, search engines learn to ignore the field.
3. **Use absolute URLs** with the correct protocol (https) and the right domain version.
4. **Stay under the limits:** 50,000 URLs and 50 MB uncompressed per file.
5. **Keep it updated automatically.** Static sitemaps go stale quickly.
6. **Do not include blocked pages.** Listing URLs that robots.txt blocks sends contradictory signals.
7. **Split large sites** into logical sitemaps with an index file.
8. **Use one hostname.** Do not mix www and non www versions in the same file.
9. **Fix errors fast.** Treat Search Console sitemap errors as a to do list.

---

## Common Sitemap Mistakes That Hurt Your SEO

| Mistake | Why it hurts | Quick fix |
|---|---|---|
| Including redirected or 404 pages | Wastes crawl effort and signals poor maintenance | Remove them or let your plugin filter them |
| Listing noindex pages | Contradicts your own instructions | Keep noindex pages out of the sitemap |
| Listing non canonical URLs | Splits signals between duplicates | Include only the canonical version |
| Wrong lastmod dates on every URL | Search engines stop trusting the field | Update only after real content changes |
| Forgetting to submit it | Slower discovery for new sites | Submit in Search Console and Bing |
| Using the wrong domain version | Mixed signals and errors | Match the live, canonical version of your domain |
| Leaving a staging site sitemap live | Search engines may find test URLs | Remove or block it before launch |
| Treating the sitemap as a ranking boost | Leads to wasted effort | Use it for discovery, then improve content quality |

---

## Sitemaps and AI Search: What Is Fair to Say

AI answer tools such as ChatGPT, Gemini, Claude, and Perplexity pull from a mix of search indexes, their own crawlers, and live fetching. Here is what we can say honestly:

- **Sitemaps help crawlers discover your content,** and search indexes feed many AI answers. A page that never gets discovered has little chance of being used.
- **No AI platform has said** that submitting a sitemap guarantees citations or higher visibility.
- **Clean structure helps everyone.** A tidy sitemap, a sensible robots.txt, and well organized pages make your site easier for any crawler to understand.

If AI visibility is a goal, see our steps to [make your business site visible to AI](https://f9xr.org/articles/2026/08/14/steps-make-business-site-visible-to-ai.html). And if you also want to control which AI crawlers can visit, read [how to block AI crawlers on your site](https://f9xr.org/articles/2026/09/04/block-ai-crawlers-on-your-site.html).

---

## Practical Tips You Can Use This Week

- **Find your sitemap.** Visit `yourdomain.com/sitemap.xml` and see what loads. If you get an error, you have your first task.
- **Check what is inside.** Open the file and scan for old, redirected, or noindex URLs.
- **Confirm submission.** Open the Sitemaps report in Search Console and check the status.
- **Compare submitted vs indexed.** A big gap tells you where to dig deeper.
- **Add the robots.txt reference** if it is missing.
- **Split by content type** if your site has more than a few hundred URLs.
- **Add an HTML sitemap** if visitors often struggle to find things.
- **Schedule a monthly check.** Include your sitemap in your [monthly website audit routine](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html).

---

## How F9XR Team Can Help You

Most owners we speak with are not asking about sitemap tags. They are asking, "Why is Google not showing my pages?" A sitemap is often part of the answer, but rarely the whole answer.

F9XR Team works with business owners, startups, and local businesses to fix the foundations behind visibility. For sitemaps and technical SEO, we can help with:

- **Sitemap audits:** finding wrong URLs, bad lastmod values, and missing submissions
- **Setup and structure:** building clean XML, image, and video sitemaps and the right index files
- **Search Console and Bing setup:** submission, monitoring, and indexing diagnostics
- **Website development and redesign:** building sites that are easy to crawl from day one
- **Local SEO:** helping nearby customers find you on Google Search and Maps
- **Ongoing technical audits:** catching problems before they cost you traffic

You can see the full list on the [F9XR services page](https://f9xr.org/pages/services.html). You focus on running the business. We will handle the plumbing.

---

## Key Takeaways

- A sitemap is a list of important URLs that helps search engines discover your content. It does not guarantee indexing and is not a ranking factor.
- The main types are XML, sitemap index, HTML, image, video, news, text, and feed based sitemaps.
- XML sitemaps are for search engines and HTML sitemaps are for visitors. They do different jobs.
- Most small business sites need only one clean XML sitemap.
- Each XML sitemap can hold up to 50,000 URLs or 50 MB uncompressed. Larger sites use a sitemap index.
- Google ignores the priority and changefreq tags, and it trusts lastmod only when it is accurate.
- Only include live, indexable, canonical URLs in your sitemap.
- Submit through Google Search Console and Bing Webmaster Tools, and reference the sitemap in robots.txt.
- Video and news sitemaps are specialized. Use them only if they match your content.
- No AI platform has promised that a sitemap boosts citations, but clean discovery supports the indexes that feed AI answers.

---

## Conclusion

Sitemaps are one of those parts of SEO that nobody gets excited about, yet when they are wrong, everything feels harder. A clean XML sitemap, a smart index file for bigger sites, and the right specialized sitemap for your content give search engines a clear map to follow.

Start simple. Check what you have, remove the clutter, submit it, and monitor it. The rest builds from there. Teams like F9XR Team support businesses with website development, website redesign, local SEO, and wider digital presence solutions, so the technical groundwork behind your visibility is handled properly from the start.

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
