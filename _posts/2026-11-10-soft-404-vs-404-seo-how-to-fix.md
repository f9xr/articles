---
layout: post
title: "Soft 404 vs 404: The Quiet SEO Leak and How to Fix It"
description: "A soft 404 shows an error page but tells Google the page is fine. Learn how it differs from a 404, how it hurts SEO, and how to fix it step by step."
image: "https://f9xr.org/articles/assets/post-images/soft-404-vs-404-seo-how-to-fix.webp"
image_width: 1200
image_height: 630
date: 2026-11-10
author: "F9XR Editorial Team"
category: "Technical SEO, Website Maintenance"
permalink: /2026/11/10/soft-404-vs-404-seo-how-to-fix.html
tags: [Soft 404, 404 error, Technical SEO, Google Search Console, HTTP status codes, 301 redirects, Page indexing, Crawl budget, Website maintenance, Local business SEO]
keywords: "soft 404 vs 404, what is a soft 404 error, how to fix soft 404, soft 404 Search Console, 404 vs 410, HTTP status codes SEO, custom 404 page, 301 redirect, crawl budget, page indexing report"
faq:
  - q: "What is a soft 404 error?"
    a: "A soft 404 is a page that looks like an error or has almost no content, but the server still returns a \"200 OK\" success status. Google detects the mismatch and flags it in Search Console."
  - q: "What is the difference between a soft 404 and a 404?"
    a: "A 404 is a server response that honestly says a page does not exist. A soft 404 sends a success code while the page looks missing or empty, so search engines must guess that it is an error."
  - q: "Do soft 404s hurt SEO?"
    a: "They can. Google usually leaves soft 404 pages out of its index, wastes crawl effort on them and may miss useful pages that were wrongly flagged. They do not usually penalize an entire website."
  - q: "How do I fix a soft 404?"
    a: "Return a real 404 or 410 if the page is gone, 301 redirect to a closely related page if it moved, or add useful content if the page should exist. Then click Validate Fix in Search Console."
  - q: "Is a 404 or a 410 better?"
    a: "Google treats them almost the same for indexing. Use 410 when you removed a page on purpose and 404 for general missing pages. Either is fine if you apply it consistently."
  - q: "Should I redirect all 404 pages to the homepage?"
    a: "No. Redirecting unrelated pages to the homepage can be treated like a soft 404 and frustrates visitors. Redirect only when a close replacement exists, otherwise return a real 404."
  - q: "How do I find soft 404 errors?"
    a: "Open Google Search Console, go to Indexing and then Pages, and look for \"Soft 404\" in the reasons list. Inspect example URLs with URL Inspection and check status codes with a crawler or the curl command."
---

A physiotherapy clinic we know cleaned up its website last spring. It deleted a handful of old service pages, removed a seasonal offer and trimmed the blog. Everything looked tidy. Three months later, the owner opened Google Search Console and found a warning she had never seen before: "Soft 404."

Nothing was visibly broken. The pages showed a friendly "Sorry, we could not find that" message. Yet Google was treating them as errors, and a few of those URLs used to bring in enquiries.

That is the strange thing about soft 404s. A normal 404 is honest and mostly harmless. A soft 404 is a mixed message, and mixed messages are where search engines get confused. This guide explains the difference in plain English, shows how it affects your SEO, and gives you a step by step fix you can follow even if you are not a developer.

> **Quick answer:** A 404 is a server response that correctly says a page does not exist. A soft 404 is a page that looks like an error or is nearly empty, but the server still says "200 OK" (success). Google flags soft 404s in Search Console and usually leaves them out of its index. To fix one, return a real 404 or 410 if the page is gone, redirect to a closely related page if it moved, or improve the content if the page should exist.

---

## What Is a 404 Error?

Every time a browser or Googlebot asks your server for a page, the server replies with a three digit status code before sending anything else. A [404 means "Not Found"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404){:target="_blank" rel="noopener noreferrer"}: the server looked, and nothing lives at that address.

### What visitors see

Usually a page that says something like "404, page not found." Good websites style this page with their branding, a search box and helpful links. Bad ones leave the default message.

### Is a 404 bad for SEO?

Not by itself. Pages disappear on every healthy website: you delete an old offer, fix a typo in a URL, retire a product. Google's [documentation on how HTTP status codes affect its crawlers](https://developers.google.com/search/docs/crawling-indexing/http-network-errors){:target="_blank" rel="noopener noreferrer"} explains that a 404 simply tells it the page does not exist, and Google drops such URLs from its index over time. A normal 404 on a page that should not exist is not a penalty on the rest of your site.

The trouble starts in two places: when an important page returns a 404 by accident, and when pages that should be 404s do not say so honestly. That second case is the soft 404.

---

## What Is a Soft 404?

A soft 404 is a page that behaves like a "not found" page for the visitor but reports success to the machine. The page says "nothing here," while the server's status code says "200 OK."

Search engines read the status code first. When the code says everything is fine but the content says otherwise, Google tries to work out the truth from the page itself. When its systems decide the page is really an error, Search Console shows a "Soft 404" in the Page Indexing report. Google also uses the same label for pages with almost no useful content.

It is called "soft" because the server never declared an error. Google inferred it.

### Common causes of soft 404s

- **A custom 404 page that returns 200.** This is the most common one. The page looks perfect but the server sends the wrong code.
- **Redirecting every missing URL to the homepage.** Google's guidance and many SEO guides note that redirecting unrelated URLs to the homepage can be treated like a soft 404.
- **Empty search result or category pages.** A page that says "0 products found" but returns 200.
- **Thin or placeholder pages.** "Coming soon," a template with no real text, or a page with only a heading.
- **Out of stock product pages with no information.** A blank product page with no price, description or alternative.
- **Pages that fail to load content.** Scripts break, the main content never appears, and Google sees an empty shell.
- **Single page apps.** Some JavaScript frameworks show "not found" content but cannot send a real 404 status.

---

## Soft 404 vs 404 vs 410 vs 301 at a Glance

| Response | What the server says | What the page looks like | What Google does | Best used when |
|---|---|---|---|---|
| **200 OK** | Success | A real, useful page | May index it | The page exists and is useful |
| **404 Not Found** | Page does not exist | Error page | Drops it from the index over time | Page is gone, no replacement |
| **410 Gone** | Page was removed on purpose | Error page | Treated almost the same as 404 for indexing | Page is gone for good |
| **301 Redirect** | Moved permanently | Visitor lands on the new page | Passes signals to the new URL | A close replacement exists |
| **Soft 404** | Success (200) | Looks empty or like an error | Flags it and usually does not index it | Never a goal, always a bug to fix |

A [410](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410){:target="_blank" rel="noopener noreferrer"} tells crawlers the page was removed on purpose, while a 404 just says the address has nothing at it. Google says it treats all 4xx codes except 429 the same way for indexing, so the practical difference between 404 and 410 is small. Pick one and use it consistently.

---

## How Soft 404s Affect Your SEO

Be careful with scary claims here. Soft 404s are not a ban and they do not wreck an entire site. They do cause real, quieter problems.

### 1. Pages that should rank may drop out of the index

If Google decides a useful page is a soft 404, it can leave that page out of search results. That happens more often than people expect with thin product pages, empty category pages and pages that load content late.

### 2. You waste crawl effort

Googlebot keeps visiting URLs that give it nothing. For a small local site this rarely becomes a crawl budget crisis, but on bigger sites with thousands of URLs, fixing soft 404s helps Google spend time on the pages that matter.

### 3. You may lose link value

If another site links to a page you deleted, a clean 301 to a relevant page can keep some of that value. A 404 or a soft 404 does not. Redirecting everything to the homepage tends to be ignored.

### 4. Visitors lose trust

Someone clicking a Google result expects a real page. An empty "nothing here" page makes your business look careless, and they leave.

### 5. It muddies your reports

A growing soft 404 count in Search Console hides the genuine problems you need to see. It also makes your monthly audit harder to read.

### What about AI search?

AI tools such as ChatGPT, Gemini, Claude and Perplexity rely on pages they can fetch and read. A page that looks empty or returns a confusing signal is less likely to be used as a source. Clean status codes and real content help both classic search and AI answers.

---

## How to Find Soft 404s on Your Website

### Step 1: Check the Page Indexing report

In [Google Search Console](https://search.google.com/search-console){:target="_blank" rel="noopener noreferrer"}, open **Indexing > Pages** and scroll to the reasons why pages are not indexed. If you see "Soft 404," click it to see example URLs.

### Step 2: Inspect an example URL

Paste a flagged URL into the **URL Inspection** tool and run a live test. Look at the status Google received and the rendered page. Ask: is this page really empty, or did the content fail to load?

### Step 3: Check the status code yourself

You can check any page with a simple command in a terminal:

```bash
curl -I https://yourwebsite.com/a-page-that-does-not-exist
```

A correct missing page shows `HTTP/2 404` (or `HTTP/1.1 404`). If it shows `200` while the page says "not found," you have a soft 404 problem. You can also open your browser's developer tools, go to the Network tab and reload the page to read the status.

### Step 4: Crawl the site

Tools like Screaming Frog or Sitebulb can crawl your website and list every URL with its status code. Sort by status and look for pages with 200 and very little text, or titles like "Not found."

### Step 5: Test a random fake URL

Type `yourwebsite.com/this-page-should-not-exist-12345` into your browser. If you see a "not found" message, run the curl test above. This single test catches the most common cause, a custom 404 page returning 200.

---

## How to Fix Soft 404 Errors

The right fix depends on what the page should be. Use this table first:

| Situation | Right fix |
|---|---|
| The page is gone and nothing replaces it | Return a real 404 or 410 |
| The page moved or merged into another page | 301 redirect to the closest relevant page |
| The page should exist but has little content | Add real, useful content |
| A product is temporarily out of stock | Keep the page live with details and options |
| A product is discontinued for good | 301 to a similar product or category, or 404/410 if none exists |
| Your custom 404 page returns 200 | Fix the server or CMS so it sends a 404 status |
| Empty search or filter pages | Keep them out of the index and your sitemap |
| Content fails to load for Google | Fix rendering so the main content appears |

### Fix 1: Return the correct status code

If you removed a page and there is no replacement with similar content, return a 404 or 410. Google's own guidance says exactly this. In WordPress, an ordinary missing URL already returns 404, but some plugins and themes override it, so test it.

### Fix 2: Use a 301 redirect only when there is a real match

Redirect an old page to the closest relevant page: an old "teeth whitening offer" to the main "teeth whitening" service page, for example. [Google's redirect guidance](https://developers.google.com/search/docs/crawling-indexing/301-redirects){:target="_blank" rel="noopener noreferrer"} recommends this over blanket redirects. Do not send everything to the homepage. If no close match exists, a 404 is the honest answer.

Googlebot follows up to 10 redirect hops, but keep chains short, ideally a single jump. Our [monthly website audit checklist](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html) includes checking redirect chains.

### Fix 3: Improve thin pages that should exist

If the page should rank, give it a reason to. Add useful text, real images, pricing, location details, FAQs and clear next steps. Our guide on [what Google considers low effort content](https://f9xr.org/articles/2026/10/27/what-is-low-effort-content-for-google.html) shows what to avoid. If you cannot make a page useful, merge it into a stronger page and redirect, or remove it.

### Fix 4: Handle out of stock and empty pages carefully

For temporarily unavailable products, keep the full product details visible, say when it will return, and suggest alternatives. For permanently discontinued items, redirect to the closest equivalent or return 404 or 410. For empty search or filter results, keep those URLs out of your sitemap and avoid linking to them.

### Fix 5: Build a custom 404 page that actually returns 404

A good 404 page helps visitors recover. Include:

- A clear message in plain language
- A search box
- Links to your main services, products or blog
- Contact options, such as phone, WhatsApp or a form
- Your normal header and footer

Then confirm it returns a true 404 status with the curl test above.

### Fix 6: Make sure content loads for Google

If you use a JavaScript heavy site, use the URL Inspection tool to compare what Google renders with what you see. For single page apps, Google's documentation describes workarounds such as redirecting to a URL that returns a real 404. If this sounds technical, a developer can fix it in a short job.

### After you fix it: tell Google

1. Test the fixed URL again in URL Inspection.
2. In Search Console, open the Soft 404 issue and click **Validate Fix**.
3. Be patient. Google rechecks over days or weeks.
4. Watch the count trend down over the following month.

Bing and a few other engines accept IndexNow pings for faster recrawling. Our look at [whether the IndexNow API still works in 2026](https://f9xr.org/articles/2026/10/09/indexnow-api-2026-does-it-still-work.html) covers what it can and cannot do.

---

## Mistakes That Make It Worse

- **Redirecting all 404s to the homepage "to be safe."** It can create soft 404s and hurts the visitor.
- **Deleting a ranking page without a plan.** Check traffic and backlinks first.
- **Fixing the report, not the cause.** If a template creates empty pages, they will come back.
- **Putting broken URLs in your sitemap.** Your sitemap should list only live, indexable pages. See our guide on [types of sitemaps](https://f9xr.org/articles/2026/10/10/types-of-sitemaps-seo-guide.html).
- **Using noindex as a bandage on important pages.** If the page matters, fix it instead.
- **Ignoring it for months.** Small errors pile up.

---

## Examples for Local Businesses

| Business | What happened | Right move |
|---|---|---|
| Restaurant | Seasonal Diwali menu page deleted but still redirects to the homepage | 301 to the main menu page, or 404 if no match |
| Dental clinic | A doctor left and her profile page now says "coming soon" | Remove the page with a 410, or redirect to the team page |
| Online shop | Out of stock products show "no results found" with a 200 status | Keep product info live, add alternatives, or redirect if discontinued |
| Salon | The custom 404 page looks nice but returns 200 | Fix the server setting so it sends a real 404 |
| Coaching center | Empty "tag" pages for unused topics in the blog | Remove or noindex them and keep them out of the sitemap |

---

## A 15 Minute Monthly Routine

1. Open the Page Indexing report and check the Soft 404 and Not Found counts
2. Inspect two or three example URLs
3. Test a fake URL to confirm your 404 page returns 404
4. Check the top 10 pages from your sitemap return 200
5. Review recent deletions or redesigned pages for redirects
6. Note anything you changed, with the date

If you do not have a routine yet, our [real findings from a monthly website audit](https://f9xr.org/articles/2026/10/01/monthly-website-audit-real-findings.html) shows what this looks like in practice. For old content cleanup, see our guide to [reviving dead content with systematic audits](https://f9xr.org/articles/2026/08/20/reviving-dead-content-systematic-audits.html).

---

## How F9XR Team Can Help

Soft 404s are easy to miss and easy to fix once you know where to look. F9XR Team helps business owners, startups and local businesses with:

- **Technical SEO audits:** We check status codes, redirects, sitemaps and Search Console reports so nothing slips through.
- **Redirect planning:** We map old URLs to the right new pages before a redesign or cleanup.
- **Custom 404 pages:** We build helpful error pages that return the correct status.
- **Website development and redesign:** Clean structure and templates that do not create empty pages.
- **Local SEO:** Consistent business details and pages that actually help customers find you.

Hosting also plays a part in speed and reliability, which we cover in [how your hosting provider affects SEO](https://f9xr.org/articles/2026/10/06/how-hosting-provider-affects-website-seo.html). To talk to us, use our [contact page](https://f9xr.org/articles/press/contact.html).

---

## Key Takeaways

- A 404 says a page is missing and is usually harmless. A soft 404 shows an error or empty page while the server says "200 OK."
- Google flags soft 404s in the Page Indexing report and usually leaves them out of the index.
- 404 and 410 are treated almost the same for indexing. Choose one and be consistent.
- Redirect only to a closely related page. Mass redirects to the homepage can create soft 404s.
- Thin, empty or broken pages that should rank need real content, not a different status code.
- A custom 404 page must return a true 404 status. Test with a fake URL.
- Use Search Console, URL Inspection and a quick curl test to find problems.
- After fixing, use Validate Fix and give Google time to recheck.
- A short monthly routine prevents most soft 404 problems.

---

## Say What You Mean

A 404 is your website being honest. A soft 404 is your website being unclear. Search engines, AI tools and customers all prefer honesty: pages that exist should be useful, and pages that do not exist should say so plainly.

The good news is that most soft 404 problems take an afternoon to diagnose and a few small changes to fix. Check Search Console, test a fake URL, clean up your redirects and make your error page return the right status.

If you would rather have a team handle the technical side, F9XR Team supports businesses with website development, website redesign, local SEO and wider digital presence solutions. We are happy to help whenever you are ready.

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
