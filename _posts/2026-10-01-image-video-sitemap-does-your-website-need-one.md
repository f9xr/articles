---
layout: post
title: "Image and Video Sitemaps: Do You Really Need Them?"
description: "Does your website need a separate image or video sitemap? Learn when it helps, when it does not, and how to set one up for better Google visibility."
image: "https://f9xr.org/articles/assets/post-images/image-video-sitemap-does-your-website-need-one.webp"
image_width: 1200
image_height: 630
date: 2026-10-01
dateModified: 2026-10-01
author: "F9XR Editorial Team"
tags: [image and video sitemap, image sitemap, video sitemap, XML sitemap, technical SEO, Google Search Console, image SEO, video SEO, image indexing, small business SEO]
keywords: "image and video sitemap, do I need an image sitemap, video sitemap for SEO, image:loc, video:thumbnail_loc, sitemap extensions, Google Search Console sitemap, image indexing, video indexing, image sitemap XML, video sitemap tags"
faq:
  - q: "Do I need a separate sitemap for images and videos?"
    a: "Not always. Google says you can use a separate image or video sitemap or add the tags to your existing sitemap, and it treats both as equally valid. A media sitemap earns its place when Google struggles to find your media on its own, such as images inside JavaScript galleries, files served from a CDN, or videos hosted on your own server."
  - q: "What is an image sitemap?"
    a: "An image sitemap is an XML file, or a set of extra tags inside your existing sitemap, that lists the image URLs appearing on each page. The only tag Google still requires is image:loc, wrapped in an image:image element. A single page URL can carry up to 1,000 image entries."
  - q: "What is a video sitemap?"
    a: "A video sitemap gives Google the details it needs to index a video: a thumbnail URL, a title, a description, and either content_loc for the video file or player_loc for a player page. You can put it in a separate file, merge it into your main sitemap, or serve an mRSS feed for large video libraries."
  - q: "Do image sitemaps improve rankings?"
    a: "Not directly. A sitemap helps Google discover and fetch your images, but it does not promise indexing or higher rankings. Google still decides what to show based on relevance, page context, alt text, filenames, and how fast the page loads."
  - q: "Are image:caption and image:title still used?"
    a: "No. Google deprecated image:caption, image:title, image:geo_location, and image:license in 2022. Google states these tags have no effect on indexing or search features, so leaving them in does no harm, but a lean sitemap carrying only image:loc is the current approach. Captions and titles still matter on the page itself."
---

A restaurant owner spends a weekend photographing every dish, uploads a gallery to the website, and a month later searches Google Images for their own photos. Nothing comes up. The images are live. Visitors see them. Google never picked them up.

It happens constantly, and it produces the same question from business owners all over: do I need a separate image and video sitemap?

The honest answer is that it depends. For some sites a media sitemap is a small, quiet win. For others it is busywork that changes nothing. This guide covers how to tell the difference, which tags Google still reads, what it deprecated and when, and what to do if you decide you need one. It also addresses the part most guides skip, which is what these files do for AI assistants such as ChatGPT, Gemini, Claude, and Perplexity.

---

## The short answer

**You do not always need a separate image or video sitemap.** Google says you can build a standalone file or add image and video tags to the sitemap you already have, and it treats both routes as equally fine.

What decides the question is whether Google can already find your media. If it can, the extra file adds little. If it cannot, the file is the fix.

| Your situation | Do you need a media sitemap? |
|---|---|
| Small brochure site with ordinary images in plain HTML | Not required, and harmless |
| Galleries, sliders, or carousels that load images with JavaScript | Yes, likely helpful |
| Images served from a CDN or separate domain | Yes, and verify that domain in Search Console |
| Photography, ecommerce, real estate, travel, or food site where images drive traffic | Yes, strongly recommended |
| Videos you host yourself as MP4 files | Yes, helpful |
| A few YouTube embeds in blog posts | Usually not required |
| Video is core to the business, such as courses or property tours | Yes, recommended |
| No images or videos that matter for search | No |

---

## What an image sitemap actually is

An image sitemap tells Google about images on your site, especially the ones it might not find by crawling. That is the whole job. It is not a ranking signal, and it is not a way to stuff keywords into image metadata.

### The tags Google still requires

Google's [image sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps){:target="_blank" rel="noopener noreferrer"} lists a short required set:

- `image:image` wraps the information for a single image. One page URL can hold up to 1,000 of these.
- `image:loc` holds the image URL.

That is it. The image URL can sit on another domain, such as a CDN, as long as you have verified that domain in Search Console.

### Four old tags stopped working in 2022

Plenty of older tutorials still tell you to add captions, titles, geo coordinates, and licenses to your image sitemap. Google deprecated all four in 2022: `image:caption`, `image:geo_location`, `image:title`, and `image:license`.

Google's position is that these tags now have no effect on indexing or search features, and that nothing needs to change if they are already in your sitemap. There is no penalty. They simply do nothing.

So where did captions and image titles go? Onto the page. Google says it works out what an image shows from the surrounding content: captions, image titles, filenames, and alt text. **A lean sitemap with just `image:loc` is the modern approach**, and the descriptive work belongs in your HTML.

This matters if you are currently paying a developer to maintain `image:caption` entries across hundreds of URLs. You are paying for tags that have done nothing since 2022.

---

## What a video sitemap actually is

A video sitemap gives Google the extra detail it needs to understand and index a video that lives on your page. You can put it in its own file, merge it into your main sitemap, or publish an mRSS feed when you run a large video library.

### What Google requires

The [video sitemap reference](https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps){:target="_blank" rel="noopener noreferrer"} breaks down like this:

| Tag | What it holds | Required? |
|---|---|---|
| `video:video` | Parent element for one video on the page | Yes |
| `video:thumbnail_loc` | URL of the thumbnail image | Yes |
| `video:title` | Title of the video | Yes |
| `video:description` | Description of the video | Yes |
| `video:content_loc` | URL of the actual video file | One of these two |
| `video:player_loc` | URL of a player for the video | One of these two |
| `video:duration` | Length in seconds | Optional |
| `video:rating` | Content rating | Optional |
| `video:view_count` | Number of views | Optional |
| `video:uploader` | Uploader name | Optional |
| `video:live` | Whether it is a livestream | Optional |

Two details trip people up regularly. If you supply both `content_loc` and `player_loc`, **the two URLs have to be different**, because Search Console reports an error when they match. And every video entry needs a title, because Search Console flags a missing one.

Google also deprecated `category`, `gallery_loc`, `price`, and `tvshow` in 2022, along with some attributes on `player_loc`. Same rule as images: harmless if left in, no benefit.

Google Search Central publishes its own walkthrough, and it is worth more than any third-party tutorial on the topic because it cannot go out of date.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/SfC27XgelgE" title="SEO for Google Images, a walkthrough from Google Search Central" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>

---

## Four real cases, and what each one needs

### The restaurant with a JavaScript gallery

A cafe runs its menu photos through a slider plugin, and the images only load when a visitor clicks through. Google may never reach images that appear only after a script runs, which makes this the textbook case for an image sitemap. The sitemap hands Google the URLs so it does not have to work them out.

### The clinic with videos on its own server

A dental clinic uploads patient education videos straight to its own hosting. There is no YouTube page for Google to find, so a video sitemap with a proper thumbnail, title, and description is the clearest way to introduce those videos to search. This is also the case where `video:content_loc` earns its place.

### The plumber with YouTube embeds

A plumber embeds three YouTube videos on a service page. Google can usually pick embedded videos up from the page markup, so a video sitemap is a nice to have rather than a must. The bigger wins here are a clear page title, a short written summary under each video, and correct video schema.

### The online shop on a CDN

An ecommerce store serves product images from a separate image domain. Google allows image URLs from other domains inside an image sitemap, which is exactly what makes CDN setups work. Verify that domain in Search Console first, or the entries go nowhere.

---

## What you get in return

| Benefit | How it helps |
|---|---|
| Discovery of hidden media | Surfaces images and videos loaded by JavaScript, sliders, or lazy loading |
| CDN friendly | Lets you list images hosted on other domains |
| One place to review your media | You can see at a glance what you have told Google to expect |
| Better diagnostics | Search Console flags problems such as a missing video title |
| A shot at image search traffic | Helps images surface in Google Images when the page backs them up |

Keep the caveat in view. **A sitemap is a suggestion, not a command.** It helps Google find your media. It does not guarantee indexing or rankings, and quality, relevance, and page context still decide what appears.

---

## What about AI search engines

This is where honesty is worth more than a confident claim. Image and video sitemaps are discovery tools for traditional search engines. There is no solid public evidence that these sitemap extensions directly change what ChatGPT, Gemini, Claude, or Perplexity cite.

That does not make the work pointless. The page-side habits that make media easy for Google to read also make it easy for any system reading your text:

- Write alt text that describes what the image shows.
- Put a written summary or transcript under every video, because these systems read text far more easily than they read video.
- Give the page a clear title and headings around the media.
- Add `VideoObject` and `ImageObject` structured data where it fits.
- Keep pages crawlable and fast.

Spend your effort on the page and treat the sitemap as the delivery mechanism. Our guide on [steps to make your business site visible to AI](https://f9xr.org/articles/2026/08/14/steps-make-business-site-visible-to-ai.html) covers the page side in depth.

---

## How to set one up

### Step 1: check whether Google already finds your media

Build nothing yet. Search Google Images for a phrase from one of your pages plus your brand name, or open the URL Inspection and indexing reports in Search Console. If your key images and videos already appear, you may have nothing to fix.

### Step 2: pick your method

| Method | Best for | Effort |
|---|---|---|
| SEO plugin or built-in CMS feature | WordPress and similar platforms | Low |
| Sitemap generator tool or library | Custom and static sites | Medium |
| Hand-written XML | Small sites with a few media files | Medium |
| mRSS feed, video only | Larger video libraries | Medium to high |

Most SEO plugins and site builders ship an image or video sitemap option, though some of them sit in a paid tier. Check what your current setup already does before installing anything.

### Step 3: write the XML

An image sitemap entry using only the tags Google still documents looks like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://www.example.com/gallery/</loc>
    <image:image>
      <image:loc>https://www.example.com/images/dining-room.jpg</image:loc>
    </image:image>
    <image:image>
      <image:loc>https://www.example.com/images/signature-dish.jpg</image:loc>
    </image:image>
  </url>
</urlset>
```

And a video sitemap entry:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://www.example.com/videos/root-canal-explained/</loc>
    <video:video>
      <video:thumbnail_loc>https://www.example.com/thumbs/root-canal.jpg</video:thumbnail_loc>
      <video:title>Root Canal Treatment Explained in 3 Minutes</video:title>
      <video:description>A dentist walks through what happens during a root canal, step by step.</video:description>
      <video:content_loc>https://www.example.com/media/root-canal.mp4</video:content_loc>
      <video:duration>180</video:duration>
    </video:video>
  </url>
</urlset>
```

You can also merge both namespaces into your main sitemap. Google treats a separate file and a combined file as equally valid.

### Step 4: respect the limits

Google's general sitemap rules apply to media sitemaps. One file is capped at 50 MB uncompressed or 50,000 URLs. Past that, split into several files and reference them from a sitemap index. Files must be UTF-8 encoded. Google's [guide to building a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap){:target="_blank" rel="noopener noreferrer"} has the full rules.

### Step 5: make sure Googlebot can actually fetch everything

Every URL you list has to be reachable by Googlebot. Images, thumbnails, and video files should not sit behind a login, a blocked folder, or a robots.txt rule that shuts Google out. An entry Google cannot fetch is a wasted entry.

### Step 6: submit it and watch the report

Submit the file in the Search Console Sitemaps report and also list it in your robots.txt. Then check the report. The recurring errors are a missing video title, `content_loc` and `player_loc` pointing at the same URL, and wrong namespace headers. A sitemap needs the correct namespace declaration, such as `http://www.sitemaps.org/schemas/sitemap/0.9`.

Re-check the tag requirements against Google's current documentation once a year, because that is the one part of this page that can quietly go stale. Search Engine Journal covered [which image and video sitemap tags were deprecated](https://www.searchenginejournal.com/some-image-and-video-sitemap-extensions-deprecated/448986/){:target="_blank" rel="noopener noreferrer"} at the time, and Google has changed its guidance since.

---

## Mistakes that cost the most

Writing `image:caption` or `image:title` wastes your time, because neither has done anything since 2022. Listing images Googlebot cannot fetch wastes the entry. Forgetting to verify your CDN domain in Search Console means the entries are ignored. Pointing `content_loc` and `player_loc` at the same URL triggers an error that can block the whole file.

Then there are the two that are not XML at all. A flawless sitemap cannot rescue a page with no alt text, no captions, and a vague title. And listing every decorative icon, arrow, and social media badge buries the images that matter. Our [image SEO audit guide](https://f9xr.org/articles/2026/08/14/image-seo-audit-complete-guide.html) covers how to tell the two groups apart.

The quiet failure mode is never rechecking. Redesigns, plugin updates, and CDN migrations break media sitemaps without any error, because the sitemap still validates while pointing at files that have moved.

---

## Practical moves for this week

**Start with a check rather than a build.** If Google already finds your media, you have nothing to fix, and that is a good outcome.

Prioritise your money pages. Product, service, and location pages deserve the first pass, because that is where images and video convert. Rename files so they describe the content, since `emergency-plumber-pune-van.jpg` tells a search engine more than `IMG_4821.jpg`. Write alt text for someone who cannot see the image, not for the crawler.

Pair video with schema and a transcript. Our [schema markup guide](https://f9xr.org/articles/2026/09/26/schema-markup-generator-guide-why-it-matters.html) covers how structured data helps search engines read your content. Compress images, because a fast page helps readers and search at the same time.

Add media checks to a recurring review. Our [monthly website audit checklist](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html) has a place to put them. Remember that video shows up in YouTube search too, which is what [search everywhere optimization](https://f9xr.org/articles/2026/08/14/search-everywhere-optimization-youtube-google-seo.html) is about. And remember that sitemaps do not work alone. Our guide to [essential txt files for SEO, AEO, and GEO](https://f9xr.org/articles/2026/08/08/essential-txt-files-seo-aeo-geo-2026.html) explains how robots.txt and the other helper files fit together.

---

## Key takeaways

A separate image and video sitemap is never mandatory, because Google accepts either a standalone file or extra tags in the sitemap you already run.

They help most when Google cannot find your media by itself, which covers JavaScript galleries, CDN-hosted images, and videos on your own server.

Image sitemaps need only `image:loc` today. Google deprecated caption, title, geo location, and license in 2022, so a lean file is correct.

Video sitemaps need a thumbnail, a title, a description, and either a content URL or a player URL, and those two URLs must differ if you use both.

The limits hold at 50 MB or 50,000 URLs per file, with up to 1,000 images per page URL.

A sitemap is a hint, not a guarantee. Page quality, context, alt text, and speed decide what shows up.

Do not expect sitemap tags to move AI assistants. Transcripts, clear text, and structured data are the better investment.

---

## Conclusion

A media sitemap is a small tool with a narrow job, which is helping search engines find images and videos they would otherwise miss. A simple brochure site with plain HTML images probably does not need one. A gallery running on JavaScript, images on a CDN, or videos on your own server are good reasons to add it in an afternoon.

Either way, the file only makes the introduction. Alt text, captions, transcripts, fast loading, and clear page context do the actual work. If you want a second pair of eyes on whether your setup is working, F9XR Team builds and rebuilds websites, runs local SEO and Google Business Profile work, and keeps structured data consistent across a web presence. You can [reach the team here](https://f9xr.org/articles/press/contact.html) if you would like a look at your own media setup.

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
