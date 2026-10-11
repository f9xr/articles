---
layout: post
title: "Jetpack 16.3 Is Out: Smarter Forms and Video Playlists"
description: "Jetpack 16.3 adds conditional logic in forms, VideoPress playlists, a Zoom Scheduler block, and a new Features tab. Here is what business sites should know."
image: "https://f9xr.org/articles/assets/post-images/jetpack-16-3-update-whats-new.webp"
image_width: 1200
image_height: 630
date: 2026-10-11
dateModified: 2026-10-11
author: "Mohammed Ahetasham Uddin"
tags: [Jetpack 16.3, Jetpack Plugin, WordPress Plugin Update, WordPress News, Jetpack Forms, VideoPress, Zoom Scheduler Block, Jetpack AI, WordPress Security, Website Maintenance]
keywords: "Jetpack 16.3, Jetpack update, Jetpack WordPress plugin, Jetpack conditional logic forms, VideoPress playlist block, Zoom Scheduler block, My Jetpack Features tab, Jetpack AI MCP, WordPress plugin update"
faq:
  - q: "What is new in Jetpack 16.3?"
    a: "Jetpack 16.3 adds conditional logic to forms, two new VideoPress playlist blocks, a Zoom Scheduler block, and a Features tab in My Jetpack. It also redesigns the Newsletter sidebar, adds ChatGPT and Codex to the AI MCP setup page, reduces false connection errors, and includes security improvements."
  - q: "When was Jetpack 16.3 released?"
    a: "The official changelog dates Jetpack 16.3 to October 6, 2026. The Jetpack team published its announcement post on October 7, 2026."
  - q: "What is conditional logic in Jetpack Forms?"
    a: "Conditional logic lets you show or hide a form field based on how a visitor answered another field. For example, a Which podcast question can appear only when someone selects Podcast as how they heard about you. It is available on all Jetpack plans."
  - q: "Is the Zoom Scheduler block free in Jetpack 16.3?"
    a: "Yes. Jetpack says the Zoom Scheduler block is available on every plan, including the free plan. You paste in your Zoom Scheduler booking page URL, and visitors can book time from your post or page."
  - q: "Does Jetpack 16.3 improve SEO?"
    a: "Jetpack 16.3 has no direct SEO features, and Jetpack has not claimed it improves rankings. Some changes may help indirectly, such as easier forms and optional lighter player loading on video pages, but you should measure results on your own site."
---

If your business website runs on WordPress, there is a good chance Jetpack is installed on it. It handles contact forms, stats, backups, newsletters, security tools, and video hosting, all from one plugin. So when Jetpack ships a big update, a lot of small business sites feel it.

Jetpack 16.3 is one of those updates. The official changelog dates the release to October 6, 2026, and the Jetpack team published [its announcement](https://jetpack.com/resources/jetpack-16-3-conditional-logic-video-playlists-and-more/){:target="_blank" rel="noopener noreferrer"} the next day. That announcement counts 380 pull requests from 52 contributors. That is a lot of work for one version, and volume like that usually means new features sitting next to quiet fixes.

The headline changes are easy to picture. Your contact form can now show or hide questions depending on what someone answers. You can add video playlists that update themselves. Visitors can book a Zoom meeting right from a page. And the dashboard has been reorganized so you can see and switch on every Jetpack feature in one place.

This article walks through what is new, who benefits, what to check before you update, and what it does and does not mean for your SEO. Everything here is based on Jetpack's official release notes and announcement, and we link to them in the resources.

---

## Quick Answer: What Is New in Jetpack 16.3?

**Jetpack 16.3 adds conditional logic to Jetpack Forms, two new VideoPress playlist blocks, a Zoom Scheduler block, a new Features tab in My Jetpack, a redesigned Newsletter sidebar, ChatGPT and Codex support on the Jetpack AI MCP setup page, fewer false connection errors, a Stats Settings tab, accessibility improvements, and security fixes.**

Conditional logic and the Zoom Scheduler block are both available on every Jetpack plan, including the free one.

---

## Jetpack 16.3 at a Glance

| Area | What Changed | Why a Business Owner Might Care |
|---|---|---|
| **Forms** | Conditional logic for form fields | Shorter, more relevant forms and better lead quality |
| **Forms** | Smarter spam deletion with batching and safer confirmations | Less admin work, fewer accidents |
| **VideoPress** | Latest Videos Playlist and All Playlists blocks | Self updating video sections without editing posts |
| **VideoPress** | New sharing, upload, and player loading settings | More control over how videos behave |
| **My Jetpack** | "Features" tab replaces "Products" tab | See and toggle every feature in one place |
| **Newsletter** | Sidebar split into Email, Audience, and Categories | Easier email sending from the editor |
| **Jetpack AI** | ChatGPT and Codex added to MCP setup | Connect AI assistants to your site more easily |
| **Blocks** | New Zoom Scheduler block | Visitors can book calls from a page |
| **Connection** | Fewer false errors, clearer notices | Less confusion about site health |
| **Stats** | Settings moved into a Settings tab | Cleaner dashboard |
| **Accessibility** | Better keyboard and screen reader support for tooltips and charts | A more inclusive admin experience |
| **Security** | Fixes across Forms, Memberships, VideoPress, and more | Another reason to keep plugins current |

<!--
Mind map version of Jetpack 16.3 (Mermaid source, kept in a comment because Mermaid is not enabled on this site). To render it, swap this comment for a Mermaid code block:

mindmap
  root((Jetpack 16.3))
    Forms
        Conditional logic
        Smarter spam deletion
    VideoPress
        Latest Videos Playlist
        All Playlists
        Player settings
    My Jetpack
        Features tab
    Newsletter
        Email, Audience, Categories
    Jetpack AI
        ChatGPT and Codex on MCP
    Blocks
        Zoom Scheduler
    Connection
        Fewer false errors
    Stats
        Settings tab
    Security
        Fixes across several modules
-->

---

## 1. Conditional Logic in Jetpack Forms

This is the feature Jetpack itself leads with, and it is easy to see why.

Conditional logic lets you show or hide a form field based on how someone answered a different field. Jetpack's own example is a form that asks "How did you hear about us?" and only reveals a "Which podcast?" field when the visitor picks "Podcast." People see only the questions that apply to them.

### How to set it up

Select a field inside the Form block, then open its conditional logic settings from the block toolbar or the sidebar. It is available on all plans, including free.

### Why it matters for business sites

Long forms scare people off. Conditional logic lets you collect detail without making everyone wade through it. A few practical ideas (illustrative examples, not client results):

- **A clinic or salon:** show a "Preferred stylist" field only if the visitor selects "Hair" as the service
- **A CA or consulting firm:** show a "GST registration number" field only when someone picks "GST services"
- **A coaching institute:** show different follow up questions for "Online" and "Classroom" enquiries
- **A home services company:** show an "Upload a photo" prompt only for repair requests

Shorter, cleaner forms tend to be easier to finish. Jetpack has not published conversion numbers for this feature, so we will not invent any. Test it on your own forms and watch your submission rate in your analytics.

### Better spam and response management

The same release improves how you clean up form responses:

- The "Delete spam" button now acts on the responses you have selected or filtered, and tells you how many it is about to delete
- Large spam and trash folders are emptied in batches with a progress indicator
- Delete confirmations now default to "Cancel," so pressing Enter will not wipe a whole folder by accident

If your forms get spammed regularly, that last change could save you a bad afternoon. Treat it as one free hour of admin time recovered each month.

---

## 2. Two New VideoPress Playlist Blocks

Last month, Jetpack shipped a [Video Playlist block for VideoPress](https://jetpack.com/support/jetpack-videopress/video-playlist-block/){:target="_blank" rel="noopener noreferrer"}. Version 16.3 builds two more blocks on top of it.

### Latest Videos Playlist

This block plays your site's newest VideoPress videos. When you upload a new video, it appears at the top on its own, so you do not need to edit the post. You choose how many videos to show, up to 20.

### All Playlists

This block lists every Video Playlist on your site, either as a grid or a list, with page numbers or a "Load more" button.

### Smaller VideoPress updates

- Playlists get an editable title and description
- A "Show player" setting lets you display a playlist as a simple list of videos instead
- An "Allow sharing" setting turns off the share menu on every video at once
- You can edit a video's details while it is still uploading
- A new setting loads the VideoPress player once per page rather than once per video. On a test post with four videos, Jetpack reports this meant one player download instead of four. Your results will vary with your own pages.

### Who should care

Businesses that publish regular video: training providers, real estate agents, restaurants with dish videos, and agencies with client testimonials. A "Latest Videos" section on a homepage can keep fresh content visible without anyone touching the page again.

---

## 3. The "Products" Tab Is Now "Features"

Open My Jetpack and the first thing you will notice is the new **Features** tab. It replaces the old Products tab and puts every Jetpack feature in one place.

- Each feature has its own on/off switch
- You can filter by active, inactive, or "Included in plan"
- You can search for a feature by name
- Opening a feature shows what is free and what a paid plan adds
- A "List view" lets you switch several features on or off at once
- A "More Features" section collects the rest of Jetpack's modules, and Activity Log has a switch here too

For owners who inherited a site and have no idea what Jetpack is doing in the background, this is a useful clean up point. Ten minutes here is one of the cheapest audits you can run on your own site. Open the tab and review what is switched on.

---

## 4. A Clearer Newsletter Sidebar

If you send posts by email through Jetpack Newsletter, the editor sidebar now has three sections: **Email**, **Audience**, and **Newsletter categories**. Sending a post by email is one on/off switch, and you can choose which newsletter categories receive the post without digging through the general Categories panel.

---

## 5. ChatGPT and Codex Join the Jetpack AI MCP Setup

The MCP setup page inside Jetpack AI now includes ChatGPT and Codex, alongside Claude, Cursor, VS Code, and others. Jetpack says connecting Claude or ChatGPT takes two steps, and a new "How it works" guide sits at the top of the "MCP and Connectors" tab. The release notes also point Cursor users to the WordPress.com plugin in the Cursor Marketplace.

**A plain explanation:** MCP (Model Context Protocol) is a way for AI assistants to connect to outside tools. In practice, it lets an AI assistant work with your WordPress site once you connect it.

**Our practical advice:** treat any AI connection like you would treat giving a new staff member access. Check what permissions you are granting, use accounts with limited roles where possible, and keep backups. We cover the bigger picture in our guide to the [WordPress Canonical MCP Adapter plugin](https://f9xr.org/articles/2026/10/08/wordpress-canonical-mcp-adapter-plugin-guide.html).

---

## 6. New Zoom Scheduler Block

Paste in your Zoom Scheduler booking page URL, and visitors can book time with you directly from a post or page. The block is available on every plan, including free.

This is handy for consultants, tutors, coaches, accountants, and anyone who sells time. Place it on your contact page or at the end of a service page so interested visitors can book without sending an email first. One extra booking a month often covers the cost of the page it sits on.

---

## 7. Fewer False Connection Errors

Anyone who has seen a scary red "connection problem" notice on a perfectly healthy site will appreciate this one. Jetpack says it fixed several cases where it reported a problem on a working site, including stale notices and false failures in Site Health.

When there is a real issue, all errors now appear in a single notice that names the affected account. Reconnecting also now repairs just the owner's account, rather than disconnecting every user. The release notes add a few related improvements, such as a clearer Site Health result when WordPress.com cannot verify a site's SSL certificate, and a menu badge when a connection error is detected.

---

## 8. More Changes Worth Knowing

- **Stats settings** now live in a Settings tab inside the Stats dashboard, and Jetpack now recognizes the standalone Jetpack Stats plugin in My Jetpack
- **Settings page** moves to its own admin page inside a new rounded Jetpack admin frame, and old links redirect there
- **Accessibility:** tooltips and charts work better with keyboards and screen readers
- **Notices** in the Jetpack admin now use the WordPress design system Notice component
- **VideoPress library thumbnails** now show in a 16:9 aspect ratio
- **Daily Writing Prompt widget** in WP Admin has a new "Freshly Pressed" tab
- **Firewall fixes:** the changelog lists fixes for a fatal error affecting visitors on the IP block list in certain setups, and for blank Jetpack admin pages in standalone mode

### Notes for developers

The [16.3 release notes on GitHub](https://github.com/Automattic/jetpack-production/releases/tag/16.3){:target="_blank" rel="noopener noreferrer"} deprecate the `jetpack_forms_alpha` filter, which no longer selects anything, and deprecate legacy Settings and Sharing methods in `Jetpack_Likes_Settings`. If your theme or custom plugin touches either, check your code.

---

## What About Security?

Jetpack's announcement says the release includes security improvements across Forms, Memberships, VideoPress, and more. Search Engine Journal's [coverage of Jetpack 16.3](https://www.searchenginejournal.com/jetpack-16-3-wordpress-plugin-update-is-a-winner/592452/){:target="_blank" rel="noopener noreferrer"} describes security strengthening in three areas: how incoming requests are handled, how user logins are verified, and how stored site content is validated.

We do not have details beyond what Jetpack has published, so we will not speculate. The takeaway is simple and not new: update promptly. For context, Jetpack also shipped a critical security update, version 16.1.3, in early September 2026. Jetpack said at the time that it had no evidence the issue had been exploited, and still urged site owners to update quickly. Our overview of the [WordPress core security initiative](https://f9xr.org/articles/2026/09/04/wordpress-updates-core-security-initiative.html) explains why fast updates matter more every year.

---

## Does Jetpack 16.3 Help Your SEO?

Nothing in the 16.3 release notes is an SEO feature, and Jetpack has not claimed it improves rankings. Still, some changes can help your site indirectly:

| Change | Possible Indirect Benefit | Honest Caveat |
|---|---|---|
| Conditional logic forms | More relevant, easier forms may improve lead completion | No published conversion data |
| One player load per page (VideoPress setting) | Less to download on video heavy pages | Jetpack's example is one test post, so measure your own |
| Latest Videos Playlist | Fresh video content stays visible on key pages | Video on a page is not a ranking factor by itself |
| Fewer false connection errors | Less time lost chasing non issues | Not a ranking signal |
| Accessibility improvements | Better admin experience for team members | Applies to the dashboard, not your public pages |
| Security fixes | A safer site protects your visibility long term | Only if you actually update |

If you host your own videos and want them discovered, remember that a plugin block does not replace proper discovery signals. Our guide on [whether your website needs an image or video sitemap](https://f9xr.org/articles/2026/10/01/image-video-sitemap-does-your-website-need-one.html) covers that side.

---

## How to Update to Jetpack 16.3 Safely

Jetpack says you can update from your WordPress "Plugins" page. Check the [Jetpack plugin page](https://wordpress.org/plugins/jetpack/){:target="_blank" rel="noopener noreferrer"} for the current requirements before you start. Here is the routine we recommend for any significant plugin update.

1. **Back up first.** Take a full backup of files and database.
2. **Use a staging site if you have one,** especially for stores, membership sites, and sites with custom code.
3. **Check compatibility.** Make sure your WordPress and PHP versions are supported.
4. **Update during a quiet period,** not at peak traffic.
5. **Test your forms.** Submit a test enquiry, including any conditional fields, and confirm the email arrives.
6. **Test videos and playlists** if you use VideoPress.
7. **Open My Jetpack and Site Health.** Confirm the connection looks healthy and review what is switched on in the Features tab.
8. **Find your Settings page.** It now has its own admin page, so show your team where it went.
9. **Check your caching and firewall plugins** for odd behavior after the update.
10. **Log what you changed.** A simple note saves hours later. Our [monthly website audit checklist](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html) can help you build the habit.

---

## Practical Tips for Business Owners

- **Audit your forms this week.** Which questions do only some visitors need? Those are your conditional logic candidates.
- **Review the Features tab** and switch off anything you do not use. Fewer active modules means less to maintain.
- **Try the Zoom Scheduler block** on one high intent page, such as Contact or Book a Call, and track bookings.
- **Set a spam routine.** Use the improved spam deletion to clear your forms inbox on a schedule.
- **Be careful with AI connections.** Only connect assistants you trust, and know what access you are granting.
- **Think about hosting.** Updates behave better on well configured servers. Our article on [how your hosting provider affects website SEO](https://f9xr.org/articles/2026/10/06/how-hosting-provider-affects-website-seo.html) explains why.
- **Do not update blindly on important sites.** Back up first, test after.

---

## How F9XR Team Can Help You

Plugin updates are easy when everything is simple, and stressful when your site has years of customizations. F9XR Team works with business owners, startups, and local businesses to keep their websites healthy and working for them.

For WordPress sites running Jetpack, we can help with:

- **Update and compatibility checks:** testing before and after updates so nothing breaks quietly
- **Form and lead flow setup:** building clean, conversion friendly forms, including conditional logic
- **Plugin audits:** removing overlap, unused modules, and risky leftovers
- **Website development and redesign:** building faster, more maintainable WordPress sites
- **Local SEO:** helping nearby customers find you on Google Search and Maps
- **Ongoing technical audits:** catching problems before they affect traffic or leads

You run the business. We will watch the plumbing.

---

## Key Takeaways

- Jetpack 16.3 was released on October 6, 2026, and announced on October 7. Jetpack says it includes 380 pull requests from 52 contributors.
- Jetpack Forms now supports conditional logic, so fields can appear or hide based on earlier answers. It works on all plans, including free.
- Two new VideoPress blocks, Latest Videos Playlist and All Playlists, build on last month's Video Playlist block.
- The My Jetpack "Products" tab is now "Features," with on/off switches, filters, and search.
- A new Zoom Scheduler block lets visitors book calls from a page, on every plan.
- The Jetpack AI MCP setup page now includes ChatGPT and Codex alongside other tools.
- Fewer false connection errors, and reconnecting now repairs only the owner's account.
- Security improvements are included across several areas. Update promptly, but back up first.
- Nothing in the release is a direct SEO feature. Any SEO benefit is indirect, through user experience, performance, and safety.
- Developers should note two deprecations: the `jetpack_forms_alpha` filter and legacy Likes settings methods.

---

## Conclusion

Jetpack 16.3 is the kind of release that rewards a little attention. Conditional logic makes forms friendlier, the new playlist blocks keep video sections fresh, the Features tab finally shows what Jetpack is doing on your site, and the Zoom Scheduler block turns a contact page into a booking page. None of it is a magic SEO switch. But better forms, safer updates, and a cleaner admin all support a website that works harder for you.

Back up, update, test your forms, and take ten minutes to review the new Features tab. If you would rather have someone handle the technical side, teams like F9XR Team support businesses with website development, website redesign, local SEO, and wider digital presence solutions, so your WordPress site stays secure, fast, and ready to bring in customers.

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
