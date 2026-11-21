---
layout: post
title: "Chrome 158 Dropped XSLT: Is Your Sitemap Broken?"
description: "Chrome 158 dropped XSLT on Nov 17. Your sitemap may look like raw XML, but rankings are safe. Here is what business owners should check."
image: "https://f9xr.org/articles/assets/post-images/chrome-158-dropped-xslt-sitemap-business-owners.webp"
image_width: 1200
image_height: 630
image_caption: "Chrome 158 changed how XML sitemaps look in the browser, but not how search engines read them."
image_alt: "Chrome browser showing raw XML code from a sitemap after the Chrome 158 XSLT removal"
date: 2026-11-21
author: "F9XR Editorial Team"
category: "Technical SEO, WordPress, Browser Updates"
permalink: /2026/11/21/chrome-158-dropped-xslt-sitemap-business-owners.html
tags: [Chrome 158, XSLT, XML Sitemap, Technical SEO, WordPress SEO, Google Search Console, Website Maintenance, Browser Updates, Small Business Website, Local SEO]
keywords: "Chrome 158 XSLT, XSLT removed from Chrome, XML sitemap raw XML Chrome, WordPress sitemap Chrome 158, XSLT deprecation, XSLTProcessor, Yoast sitemap stylesheet, Rank Math sitemap, Google Search Console sitemap status"
faq:
  - q: "What is XSLT and why did Chrome 158 remove it?"
    a: "XSLT is a language that turns XML data into readable pages, usually HTML, inside the browser. Chrome 158 removed it because the underlying libxslt library is old, rarely used, and a security risk. Only about 0.02% of page loads use XSLT, so removal protects users at very little cost."
  - q: "Will Chrome 158 hurt my website's SEO?"
    a: "No. Search engines like Google and Bing read the raw XML in your sitemap and ignore browser stylesheets. Chrome 158 only changes how the file looks to a human opening it in a browser. Crawling, indexing, and rankings are unaffected."
  - q: "Why does my WordPress sitemap show raw XML in Chrome?"
    a: "Your sitemap used an XSLT stylesheet to look like a clean table. Chrome 158 no longer runs that stylesheet, so you see the underlying XML. The file itself is not broken. Check Google Search Console to confirm Google reads it successfully."
  - q: "How do I know if Google can still read my sitemap?"
    a: "Open Google Search Console, go to Indexing, then Sitemaps, and check the Status column for your submitted sitemap. A Success status with a recent read date means Google is processing it correctly, even if Chrome shows raw XML."
  - q: "Do I need to fix anything on my website after Chrome 158?"
    a: "Most sites need no fix. If you only use standard WordPress sitemaps, wait for WordPress 7.2 or plugin updates. If your site transforms XML into HTML in the browser, migrate to server-side rendering, JSON, or the XSLT polyfill before the temporary options end in August 2027."
  - q: "Is XSLT being removed from Firefox and Safari too?"
    a: "Chrome's documentation states that both WebKit and Gecko, the engines behind Safari and Firefox, support removing XSLT from the web platform. Those browsers still render XSLT today, but the industry direction is clear, so avoid building anything new that depends on it."
---

You open your website's sitemap in Chrome and see a wall of angle brackets instead of the clean table you remember. Your sitemap is almost certainly fine. The Chrome 158 XSLT change is the reason. On November 17, 2026, Chrome 158 removed support for XSLT, the browser feature that made XML sitemaps look readable to humans.

This matters for business owners because the change looks scary at the exact moment you might be checking rankings or site health. But search engines read raw XML, not browser styling. If you want the quick context first, our guide on the [types of sitemaps and how they work](https://f9xr.org/articles/2026/10/10/types-of-sitemaps-seo-guide.html) explains why the XML file exists in the first place.

## What the Chrome 158 XSLT Removal Changed

Chrome 158 is the release where Google switched off XSLT for regular users. Chromium, the open source project behind Chrome, had deprecated XSLT earlier and scheduled removal for version 158 on November 17, 2026, according to [Chrome's official XSLT removal guide](https://developer.chrome.com/docs/web-platform/deprecating-xslt){:target="_blank" rel="noopener noreferrer"}.

Two browser features are affected. The first is the XSLT processing instruction inside XML files. The second is the `XSLTProcessor` JavaScript API. Both stop working in Chrome's stable release for most people. Sites in an origin trial and organizations using an enterprise policy get temporary breathing room.

### What Is XSLT, in Plain English?

XSLT stands for Extensible Stylesheet Language Transformations. It is a translator between raw data and a readable page. An XML file holds data, and an XSLT stylesheet tells the browser how to turn that data into something a human can read, usually HTML.

The W3C recommended XSLT 1.0 back in 1999. For years, websites used it to dress up XML files such as sitemaps and RSS feeds. A sitemap that looked like a neat table in your browser was usually using XSLT behind the scenes.

### The Timeline at a Glance

| Chrome Version | Date | What Happened |
| --- | --- | --- |
| Chrome 142 | Oct 28, 2025 | Early warning messages added to the console |
| Chrome 143 | Dec 2, 2025 | Official deprecation, warnings in DevTools and Lighthouse |
| Chrome 146 | Mar 10, 2026 | Enterprise Policy available for testing and extended use |
| Chrome 152 | Aug 25, 2026 | Origin Trial opens so sites can keep using XSLT temporarily |
| Chrome 158 | Nov 17, 2026 | XSLT stops working on Stable for most users |
| Chrome 176 | Aug 17, 2027 | Origin Trial and Enterprise Policy end, XSLT off for everyone |

Source: [Chrome for Developers](https://developer.chrome.com/docs/web-platform/deprecating-xslt){:target="_blank" rel="noopener noreferrer"}.

## Why Did Google Remove XSLT?

The reason is practical: security risk, low usage, and better modern alternatives.

### A Security Problem Nobody Wanted to Maintain

Chromium processes XSLT using a library called libxslt. Chrome's documentation describes it as an aging C and C++ codebase that gets far less maintenance than the core JavaScript engine, even though it handles untrusted web content. That kind of code is prone to memory safety bugs. Chrome points to vulnerabilities such as CVE-2025-7425 and CVE-2022-22834 as examples found in libxslt.

Removing the feature shrinks the browser's attack surface for every user, including the ones who never knew XSLT existed.

### Almost Nobody Uses It

Chrome reports that only about 0.02% of page loads use XSLT at all, and less than 0.001% use the XSLT processing instruction. Modern sites fetch data as JSON and render it with JavaScript frameworks. The original reason for client-side XSLT has mostly faded.

### The Direction Across Browsers Is the Same

Chrome's documentation says WebKit (Safari) and Gecko (Firefox) also support removing XSLT from the web platform. Today you can still see styled XML in Firefox and Safari, but planning around XSLT staying alive everywhere is a bad bet.

## Will Chrome 158 Hurt Your SEO or Google Rankings?

No. Search engines do not use XSLT. Googlebot, Bingbot, and other crawlers read the raw XML tags in your sitemap, such as `<loc>` and `<lastmod>`. The stylesheet only changes what a human sees when they open the file in a browser. Your indexing, crawl efficiency, and rankings are not touched.

The timing is awkward, though. Chrome 158 landed while [Google's November 2026 core update](https://f9xr.org/articles/2026/11/12/google-november-2026-core-update-what-changed-recover.html) was still rolling out. If you checked your sitemap during a routine ranking review and saw raw XML, it is easy to connect two unrelated events. They are unrelated.

If you want to be sure, check the source of truth: [Google's sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview){:target="_blank" rel="noopener noreferrer"} describes how crawlers read sitemap files, and it has nothing to do with browser stylesheets.

## Who Is Affected by the Chrome 158 XSLT Change?

Most small business owners will notice this in WordPress. Some older custom tools need a closer look.

### WordPress Sitemaps

WordPress core and the major SEO plugins have long added an XSL stylesheet to their sitemaps so people could browse them in a browser. That is why the change feels sudden.

Here is where things stood around November 17, based on reporting by [Search Engine Journal](https://www.searchenginejournal.com/your-wordpress-sitemap-isnt-broken-chrome-158-has-dropped-xslt/597549/){:target="_blank" rel="noopener noreferrer"} and the plugin/project sources it cited:

| Provider | XSLT Status | What You See in Chrome 158 |
| --- | --- | --- |
| WordPress core | Stylesheet still included. WordPress 7.2, scheduled for December 8, removes it | Plain XML until the update |
| Yoast SEO | Version 28.9 swaps XSLT for CSS styling and was at release candidate stage | Styled view returns once 28.9 is stable |
| Rank Math | Confirmed the issue is visual only, no stylesheet replacement listed yet | Raw XML |
| All in One SEO | Still serves XSLT-styled sitemaps, no announced alternative | Raw XML |

Plugin plans change quickly, so check each plugin's changelog before you tell a client anything final. WordPress core tracked the stylesheet removal in [Trac ticket 65593](https://core.trac.wordpress.org/ticket/65593){:target="_blank" rel="noopener noreferrer"}.

### RSS Feeds, Podcast Feeds, and Old XML Pages

Some websites style RSS feeds with XSLT so subscribers see a friendly landing page. Those pages will now show raw XML in Chrome. Feed readers and podcast apps are unaffected because they read the data directly.

### Custom and Legacy Tools

This is the group that needs a closer look. If your business uses an older internal portal, reporting tool, or custom site that transforms XML into HTML inside the browser, that page may now show nothing useful. It is common in older systems built a decade ago, and the original developer may be long gone.

## How to Check Your Own Site in 10 Minutes

You do not need to be technical for the first three steps. If you prefer a routine, fold this into a [monthly website audit checklist](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html) so browser changes do not catch you off guard.

1. **Open your sitemap in Chrome.** For WordPress core, try `yourdomain.com/wp-sitemap.xml`. With Yoast, Rank Math, or AIOSEO, try `yourdomain.com/sitemap_index.xml`. Raw XML here is expected, not a sign of damage.
2. **Confirm Google can read it.** In [Google Search Console](https://search.google.com/search-console){:target="_blank" rel="noopener noreferrer"}, open Indexing, then Sitemaps, and look at the Status column. A green "Success" with a recent read date means Google is parsing your file without trouble.
3. **Check the DevTools console.** Right-click the page, choose Inspect, and open the Console tab. A deprecation warning about XSLT confirms the cause.
4. **Search your code for XSLT use.** If you have a developer or access to your files, search for `xml-stylesheet` and `XSLTProcessor`. Any match is a page or script that depends on the removed feature.
5. **Test in a second browser.** Firefox and Safari still render XSLT for now, which helps you tell a real bug apart from a Chrome 158 display change.

## Your Fix Options Compared

Most sites do not need an emergency fix. The right move depends on what your site actually uses XSLT for.

| Option | Best For | Effort | Notes |
| --- | --- | --- | --- |
| Do nothing and wait for updates | Most WordPress sites | None | Crawlers are unaffected, styling returns or disappears cleanly after updates |
| Build an HTML sitemap page | Sites where visitors browse pages | Low | Useful for people, separate from your XML sitemap |
| Remove the stylesheet reference | Sites that want to stop console warnings | Low | Cosmetic only |
| Move the transform to the server | Custom XML to HTML pages | Medium | Send finished HTML to the browser |
| Switch to JSON and render with JavaScript | Apps and dashboards | Medium to high | Matches how modern sites work |
| Use the XSLT polyfill | Urgent legacy cases | Low to medium | A WebAssembly based replacement for `XSLTProcessor`, treat it as a bridge |
| Origin Trial or Enterprise Policy | Temporary breathing room | Low | Ends with Chrome 176 on August 17, 2027 |

Chrome's migration guide also notes that XML plus CSS is not being removed. If you only need a lightweight visual fix, you can still style raw XML with a `type="text/css"` stylesheet. For sites that also publish rich media, our guide to [image and video sitemaps](https://f9xr.org/articles/2026/10/01/image-video-sitemap-does-your-website-need-one.html) can help you decide which sitemap files are worth maintaining.

### A Simple Fix for WordPress Core Sitemaps

If you use the built-in `/wp-sitemap.xml` and want to silence the warning, a small must-use plugin does the job. Place a file named `disable-sitemap-xsl.php` in `wp-content/mu-plugins/` with this code:

```php
<?php
/**
 * Plugin Name: Disable Sitemap XSL
 */
add_filter( 'wp_sitemaps_stylesheet_url', '__return_false' );
add_filter( 'wp_sitemaps_stylesheet_index_url', '__return_false' );
```

Your sitemap will show as plain XML without the warning. Delete the file after you update to WordPress 7.2, since that release removes the stylesheet itself.

## What to Tell Your Team or Clients

When a client or teammate sees raw XML, the conversation can go sideways fast. Keep it factual and calm.

Start with what changed: Chrome 158 removed XSLT, so the browser no longer turns the sitemap into a styled page. Then show what did not change: the XML file still exists, search engines still read it, and Google Search Console still reports its status.

A simple message works well: "The sitemap looks different in Chrome because of a browser update on November 17, 2026. Google can still read the file. I checked Search Console and the sitemap status is Success." That answer gives people evidence instead of reassurance.

If you manage multiple sites, add this check to your regular maintenance routine. A quick look at Search Console after major browser or CMS updates saves you from reactive debugging later. For agencies like F9XR, that kind of routine check is part of keeping client sites stable, not a special emergency project.

## Common Mistakes to Avoid

- **Rebuilding a working sitemap.** If Search Console says Success, leave it alone.
- **Deleting your sitemap.** Raw XML is not a reason to remove the file or the plugin that creates it.
- **Panic redesigns.** A visual change in one browser is not a reason to redesign your site.
- **Ignoring custom XML pages.** If you rely on browser-side XSLT for real customer-facing content, fix it before more users update Chrome.
- **Forgetting Chrome 176.** Temporary workarounds expire in August 2027.

## Key Takeaways

- Chrome 158 removed XSLT for most users on November 17, 2026. Origin Trial and Enterprise Policy participants get extra time until Chrome 176 on August 17, 2027.
- Your sitemap looking like raw XML is a display change, not damage.
- Search engines read raw XML, so rankings, crawling, and indexing are not affected.
- Google Search Console's Sitemaps report is the quickest way to confirm everything is healthy.
- WordPress 7.2, scheduled for December 8, and Yoast SEO 28.9 are expected to clean up the experience. Rank Math and AIOSEO had not announced a visual replacement at the time of writing.
- Custom sites that transform XML in the browser need a real migration plan, usually server-side rendering or JSON.
- Firefox and Safari have signaled the same direction, so avoid building anything new that depends on XSLT.

## Conclusion

Chrome 158 dropping XSLT sounds alarming, but for most business websites the effect is limited to a plainer-looking sitemap in one browser. Search engines do not care, and your rankings stay put.

The useful response is simple: check Search Console, scan your code for old XML styling, and note the dates for WordPress 7.2 and Chrome 176. If you want a second pair of eyes on the technical side, teams like F9XR handle website development, website redesign, local SEO, and digital presence work that keeps sites steady when the web changes. A solid foundation is what makes updates like this a non-event, especially when you are building [a small business website that needs to keep working](https://f9xr.org/articles/2026/10/22/why-small-business-needs-website-2026.html) through every browser change.

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
