---
layout: post
title: "GoatCounter Guide: Simple Privacy Analytics Setup"
description: "New to GoatCounter? Learn what it is, how it works, and how to set it up on your website in minutes, no cookies, no complexity."
image: "https://f9xr.github.io/articles/assets/post-images/goatcounter-guide-what-it-is-how-to-set-it-up.webp"
image_width: 1200
image_height: 630
date: 2026-08-29
author: "Ankush Santra"
author_key: "Ankush Santra"
youtube_id: "qKSqTPY-qV8"
tags: [goatcounter, privacy friendly analytics, website analytics setup, cookie free analytics, self hosted analytics, google analytics alternative, local seo, small business website tools, gdpr compliant analytics, f9xr team]
keywords: "goatcounter, privacy friendly analytics, website analytics setup, cookie free analytics, self hosted analytics, google analytics alternative, small business analytics, gdpr compliant analytics"
faq:
  - q: "What is GoatCounter used for?"
    a: "GoatCounter is used for tracking website traffic, including pageviews, unique visitors, referrers, and basic device and location data, without using cookies or collecting personal information."
  - q: "Is GoatCounter free to use?"
    a: "GoatCounter's hosted version is free for non-commercial use. Businesses typically need a paid hosted plan or can self-host for free on their own server, paying only for hosting costs."
  - q: "Does GoatCounter require a cookie consent banner?"
    a: "In most cases, no. Because GoatCounter does not use cookies or track individual users with persistent identifiers, sites using it generally don't need a GDPR cookie consent notice, though you should always confirm compliance based on your specific situation."
  - q: "How do I add GoatCounter to my website?"
    a: "Create a free account at goatcounter.com, copy the small JavaScript tracking snippet provided, and paste it into your website's header or footer section, either manually in your theme files or through a header/footer plugin if you use WordPress."
  - q: "Can GoatCounter track button clicks and conversions?"
    a: "Yes, GoatCounter supports custom event tracking through simple data attributes, allowing you to track specific actions like button clicks, downloads, or outbound link clicks."
  - q: "Is GoatCounter better than Google Analytics for small businesses?"
    a: "For business owners who want a simple, privacy-friendly view of website traffic without a complex interface, GoatCounter is often easier to use than Google Analytics. However, it lacks the advanced marketing features and deep reporting that Google Analytics offers, so the right choice depends on how much detail your business actually needs."
---

If you run a website for your business and dread opening Google Analytics because the dashboard feels like a cockpit built for a data scientist, you are not alone. Plenty of small business owners and startup founders just want one simple answer: who is visiting my site, and where are they coming from. That is exactly the gap GoatCounter was built to fill.

GoatCounter is a lightweight, privacy-friendly web analytics tool that shows you the numbers that matter without tracking cookies, without a consent banner headache, and without a bloated interface you need a tutorial to understand. It has quietly become a favorite among bloggers, indie developers, and small business sites that want clean visitor data and nothing else.

In this guide, we will cover what GoatCounter actually is, how it works under the hood, and walk through the exact steps to get it running on your website, whether you use WordPress, a static site generator, or plain HTML.

---

## What Is GoatCounter, Exactly?

GoatCounter is an open source web analytics platform created and maintained by developer Martin Tournoij. It comes in two forms: a hosted version at goatcounter.com, and a self-hosted version you run on your own server. Both use the same lightweight tracking script, roughly 3.5KB, which is a fraction of the size of most analytics scripts on the market.

What sets GoatCounter apart is its approach to privacy. It does not use cookies, does not track individual users with persistent identifiers, and does not collect personal data. Because of this, most sites using GoatCounter do not need to display a GDPR cookie consent notice, which is a real practical win for small businesses that want compliance without hiring a lawyer to review a banner.

### What You Actually Get With GoatCounter

* Pageview counts and unique visits
* Referrer tracking, so you know which sites and campaigns send you traffic
* Browser, device, and location breakdowns
* Custom event tracking for clicks, downloads, and outbound links
* A clean, single-page dashboard with no clutter
* Data export options
* Full API access on the self-hosted version (the hosted plans require a paid tier for API access)

### What GoatCounter Does Not Do

GoatCounter is intentionally minimal. It does not offer conversion funnels, deep audience segmentation, session recordings, or e-commerce attribution. If you need marketing-grade reporting with detailed customer journeys, tools like Plausible or a full analytics suite will serve you better. GoatCounter's strength is simplicity, not depth.

![GoatCounter dashboard showing pageviews and unique visitors over time](https://f9xr.github.io/articles/assets/post-images/goatcounter-screenshot-dashboard.webp){: width="1080" height="675" loading="lazy"}

## Is GoatCounter Free?

Pricing is where a lot of business owners get confused, so here it is plainly.

| Plan | Cost | Best for |
|---|---|---|
| Hosted, non-commercial | Free | Personal blogs, hobby projects |
| Hosted, commercial/business | Paid (roughly $5 to $15/month depending on plan) | Small businesses using goatcounter.com |
| Self-hosted | Free (you cover server costs) | Businesses comfortable running their own server or a low-cost VPS |

If you run a business, the free hosted tier is technically meant for non-commercial use. Most small businesses either opt for the affordable paid hosted plan or self-host on a cheap VPS, which can run as low as $5 a month with plenty of capacity to spare. GoatCounter runs on a single lightweight Go binary with SQLite underneath.

## How Does GoatCounter Work?

At a basic level, GoatCounter works by placing a small JavaScript snippet on your website. Every time someone visits a page, the script sends a lightweight ping back to GoatCounter's servers (or your own server, if self-hosted), logging the pageview, referrer, browser, and rough location, all without cookies or persistent tracking IDs.

For sites that avoid JavaScript entirely, GoatCounter also offers an image-based no-JS tracking option and backend middleware integrations, so you are not locked into one method.

## How to Set Up GoatCounter on Your Website

Setting up GoatCounter is quick. Here is the step-by-step process.

### Step 1: Create Your GoatCounter Account

Head to [goatcounter.com](https://www.goatcounter.com){:target="_blank" rel="noopener noreferrer"} and sign up for a free account. You will choose a unique site code, which becomes part of your dashboard URL (for example, yoursite.goatcounter.com).

### Step 2: Grab Your Tracking Code

Once your account is set up, GoatCounter generates a small JavaScript snippet unique to your site. It looks something like this:

```html
<script data-goatcounter="https://yoursite.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
```

### Step 3: Add the Script to Your Website

Where you paste this depends on your platform:

**For WordPress:** There is no official GoatCounter plugin, so you add the script manually through your theme's header file (Appearance > Theme File Editor > header.php), or use a lightweight "insert headers and footers" plugin to paste it in without touching code directly.

**For static sites (Hugo, Jekyll, Astro, Gatsby):** Add the script tag to your site's base layout or template file, typically inside the `<head>` section, so it loads on every page.

**For plain HTML sites:** Paste the script just before the closing `</body>` tag on every page you want tracked, or in a shared header/footer include if your site uses one.

### Step 4: Verify Tracking Is Working

Visit your own website in a browser, then check your GoatCounter dashboard. You should see a pageview logged within moments. If nothing shows up, double check that the script tag is correctly placed and that no ad blocker or script blocker on your test device is interfering.

### Step 5: Set Up Custom Events (Optional but Useful)

Want to track button clicks, form submissions, or outbound links? GoatCounter supports this through simple data attributes, for example:

```html
<a href="/contact" data-goatcounter-click="contact-button-click">Contact Us</a>
```

This is particularly useful for local businesses tracking how many visitors click "Call Now" or "Get Directions" buttons.

### Step 6: Explore Your Dashboard

Once data starts flowing in, your GoatCounter dashboard will show:

* Total pageviews and unique visitors over time
* Top referring sites and campaigns
* Most visited pages
* Browser and device breakdowns
* Location data at a country/region level

![GoatCounter pages report listing the most visited pages and referrers](https://f9xr.github.io/articles/assets/post-images/goatcounter-screenshot-pages.webp){: width="1080" height="736" loading="lazy"}

## Self-Hosting GoatCounter: A Quick Overview

If you want full data ownership or need the API without paying for a hosted business plan, self-hosting is worth a look. GoatCounter ships as a single Go binary with SQLite as the default database, so there is no complicated stack to assemble. Many developers run it comfortably on a basic $5 VPS, and an official Docker image plus a community Helm chart make it workable for Kubernetes setups too, if your team is already there.

The [GoatCounter source code](https://github.com/arp242/goatcounter){:target="_blank" rel="noopener noreferrer"} is on GitHub if you want to inspect it before committing to the route.

Self-hosting makes the most sense for businesses with in-house technical support or an existing server they are already paying for. For everyone else, the affordable hosted plan is usually the faster, lower-maintenance route.

## GoatCounter vs Other Privacy-Focused Analytics Tools

| Feature | GoatCounter | Plausible | Umami |
|---|---|---|---|
| Cookie-free tracking | Yes | Yes | Yes |
| Script size | ~3.5KB | Under 1KB | Small |
| Self-hosting | Very easy (single binary) | Moderate | Moderate |
| Dashboard design | Basic, functional | Polished | Modern |
| Custom events | Yes | Yes | Yes |
| API access | Self-host only for free | Included | Included |
| Best for | Bloggers, indie sites, docs, small business | Businesses wanting polish | Developers wanting modern UI |

If you value the absolute lightest footprint and do not mind a plainer dashboard, GoatCounter wins. If a more polished interface and richer feature set matter more to your team, compare Plausible or Umami before deciding.

![Comparison of GoatCounter against other privacy-focused analytics tools](https://f9xr.github.io/articles/assets/post-images/goatcounter-comparison-screenshot.webp){: width="1080" height="506" loading="lazy"}

## Practical Tips for Business Owners Using GoatCounter

1. **Track your call-to-action buttons.** Use custom events on "Book Now," "Call Us," or "Get a Quote" buttons so you know which pages actually drive action, not just traffic.
2. **Check referrer data monthly.** This tells you which marketing channels, whether it is a local directory listing, social post, or Google search, are actually sending visitors.
3. **Pair it with local SEO tracking.** GoatCounter shows you the traffic, but combining it with search visibility efforts (Google Business Profile, local keyword rankings) gives you the full picture of how customers find you.
4. **Do not over-interpret location data.** GoatCounter's location tracking is broad, at the country or region level, not the precise personal tracking you would get from more invasive tools. Use it for general trends, not individual visitor profiling.
5. **Revisit your setup after a redesign.** If you update your website theme or migrate platforms, double check the tracking script survived the change. It is a common reason analytics suddenly go quiet.

The GoatCounter [help pages](https://www.goatcounter.com/help){:target="_blank" rel="noopener noreferrer"} and [why page](https://www.goatcounter.com/why){:target="_blank" rel="noopener noreferrer"} are worth a read if you want the full reasoning behind its privacy-first design.

WATCH: Web Analytics Without the Creepy Tracking With GoatCounter!

<div class="youtube-embed" style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; margin-bottom:2em;">
  <iframe src="https://www.youtube.com/embed/qKSqTPY-qV8?si=aNY7cRtFnovQ90N4" title="Web Analytics Without the Creepy Tracking With GoatCounter!" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
</div>

---

## Key Takeaways

* GoatCounter is an open source, privacy-friendly web analytics tool available as a free hosted service for non-commercial use, a paid hosted plan for businesses, or a self-hosted option.
* It does not use cookies or track personal data, which typically removes the need for a GDPR cookie consent banner.
* Setup takes minutes: create an account, copy the tracking script, paste it into your site's header or footer, and verify it is logging visits.
* It supports custom event tracking, useful for monitoring button clicks like "Call Now" or "Get a Quote."
* GoatCounter is intentionally minimal. It is ideal for bloggers, small businesses, and indie sites, but lacks funnels, deep segmentation, and e-commerce attribution found in more advanced tools.
* Self-hosting is straightforward thanks to a single lightweight Go binary, making it a low-cost option for businesses with basic server access.
* Pairing clean analytics with a solid local SEO and website strategy gives business owners the full picture of how customers find and interact with their site.

---

## Conclusion

For anyone tired of fighting a heavyweight analytics interface just to answer a basic question, GoatCounter delivers exactly what it promises: clean, privacy-friendly traffic data with a setup that takes minutes. It is not the right tool for every business. If you need deep conversion funnels or granular audience segmentation, you will outgrow it. But for positioning [GoatCounter's own docs](https://www.goatcounter.com/help){:target="_blank" rel="noopener noreferrer"} describe a tool focused on simplicity, and for the majority of small business sites, that simplicity is the whole point.

Numbers on a dashboard are only useful if someone is acting on them. If you want your website and local SEO wired up so the traffic showing up in GoatCounter keeps growing, teams like the F9XR Team specialize in [website development](https://f9xr.github.io/services/website-rentals.html), [website redesign](https://f9xr.github.io/services/index.html), and [local SEO strategy](https://f9xr.github.io/services/google-business-optimization.html).

## How the F9XR Team Can Help

Setting up analytics is one piece of a bigger puzzle. Knowing your traffic numbers only matters if your website is actually built to convert that traffic into customers. The kinds of services that close that loop include:

* **Website development and website redesign** built around real user behavior, not guesswork.
* **Local SEO** so the traffic showing up in your analytics dashboard keeps growing month over month.
* **Digital presence strategy** that ties analytics, search visibility, and site performance into one clear plan.

---

## Internal Linking Suggestions

1. [Website Development Services](https://f9xr.github.io/services/website-rentals.html)
2. [Website Redesign Services](https://f9xr.github.io/services/index.html)
3. [Local SEO Services](https://f9xr.github.io/services/google-business-optimization.html)
4. [SEO Metrics Beyond Rankings](https://f9xr.github.io/articles/2026/08/19/seo-metrics-beyond-rankings.html)
5. [Steps to Make Your Business Site Visible to AI](https://f9xr.github.io/articles/2026/08/14/steps-make-business-site-visible-to-ai.html)

## External Linking Suggestions

* [GoatCounter Official Website](https://www.goatcounter.com)
* [GoatCounter GitHub Repository](https://github.com/arp242/goatcounter)
* [GoatCounter Documentation](https://www.goatcounter.com/help)

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.github.io/articles/press/editorial-policy.html) for how we create and verify content.*
