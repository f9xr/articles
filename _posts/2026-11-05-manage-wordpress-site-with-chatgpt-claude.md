---
layout: post
title: "Run Your WordPress Site From Chat: Claude and ChatGPT"
description: "Manage your WordPress site with ChatGPT and Claude from chat: alt text, business details and comments. Free plans get access through November."
image: "https://f9xr.org/articles/assets/post-images/manage-wordpress-site-with-chatgpt-claude.webp"
image_width: 1200
image_height: 630
image_caption: "WordPress.com's AI agent can take routine site chores off your list. Image: WordPress.com."
date: 2026-11-05
author: "Mohammed Ahetasham Uddin"
tags: [WordPress.com MCP, ChatGPT for WordPress, Claude for WordPress, AI website management, Website maintenance, Alt text SEO, Local business websites, Small business SEO, AI agents for business, Website chores]
keywords: "manage WordPress site with ChatGPT and Claude, WordPress.com MCP, AI agent for website maintenance, WordPress alt text, update business details on website, WordPress comment moderation, website chores automation"
faq:
  - q: "What does it mean to manage a WordPress site from a chat?"
    a: "It means you connect your WordPress.com site to an AI agent such as ChatGPT or Claude, then ask it to do site tasks in plain language. The agent searches, sorts and suggests, and you approve the changes before they go live."
  - q: "Is the WordPress.com MCP free?"
    a: "Paid WordPress.com plans always include MCP access. WordPress.com also opened access to free-plan sites, and its October 2026 announcement said that free access runs through the end of November 2026. Check the current support page before you rely on the free window."
  - q: "Which AI agents work with WordPress.com?"
    a: "ChatGPT and Claude have dedicated setup links. Other MCP-compatible clients, including Cursor, VS Code, Gemini and Perplexity, can connect through the WordPress.com MCP server address."
  - q: "Can the AI change my website without asking?"
    a: "Only if you allow it. You choose which read and write tools the agent can use, and you decide whether it asks before each change or acts on its own. Some actions, such as permanent deletions, always ask first."
  - q: "Is it safe to let an AI agent edit my website?"
    a: "It can be, with sensible settings. Keep approvals on at first, ask for a list before any edit, check the Activity Log, and confirm that your plan includes restorable backups before you approve bulk changes."
---

Count the minutes you spend each month correcting one detail across your website. A changed closing time can live on the homepage, the contact page, the footer, two old posts and in your site settings. At an hour of your time, that is a small bill. Repeat it for every price change, new photo and unread comment, and the yearly cost becomes a line item you never budgeted for.

WordPress.com now lets you hand that work to an AI agent. You can manage your WordPress site with ChatGPT and Claude by asking in plain language, instead of hunting through tabs and settings. The company introduced the capability in an [October 23, 2026 blog post](https://wordpress.com/blog/2026/10/23/wordpress-mcp-chores/){:target="_blank" rel="noopener noreferrer"} and documents the setup in its [MCP support guide](https://wordpress.com/support/mcp/){:target="_blank" rel="noopener noreferrer"}.

This guide covers what it does, who gets access, the four chores worth starting with, and where a human still signs off.

> **Quick answer:** Yes, you can manage a WordPress.com site from a ChatGPT or Claude chat. You connect your site through WordPress.com's MCP, then ask your agent to save drafts, find outdated business details, suggest image alt text or sort comments. You choose what the agent can read, what it can change and whether it asks before every edit.

---

## What Is the WordPress.com MCP?

MCP stands for Model Context Protocol, an open standard for connecting an AI application to outside tools and data. In practice, it is a secure link between your website and an AI agent you already use. Once approved, the agent can look at your site and act within the limits you set.

Think of it as giving a capable assistant a visitor badge. The assistant can walk around, read what is there and report back. Whether it also gets to move the furniture is your call.

The connection respects your WordPress.com user role. An administrator can reach every tool. An editor can manage content and comments but cannot change site settings or plugins. Authors and contributors get a narrower set. The agent inherits those limits rather than overriding them.

WordPress.com also states that the MCP server does not share data with the AI model unless you choose to send it, and that data from MCP tools is not used to train AI models. That matters if you handle customer names, order details or private drafts on the same site.

Most small business websites do not fail from one big mistake. They drift. A price changes in one place but not another. Photos go up without descriptions. Comments pile up unread. None of it is hard, but all of it takes time from selling and serving customers. Handing the searching and sorting to an agent gives that time back. You still make every decision that carries risk.

---

## Who Can Manage a WordPress Site With ChatGPT and Claude?

Access is broader than the launch post first suggested. Here is the current picture, based on WordPress.com's support page last reviewed on October 30, 2026.

| Plan type | Access to WordPress.com MCP | Notes |
|---|---|---|
| Paid WordPress.com plans | Yes, always | Included with your plan |
| Free plan sites | Yes, for now | The October 23 announcement said free access runs through the end of November 2026 |
| Self-hosted WordPress with Jetpack | Yes | No Jetpack plan required, per the support page |
| Supported agents | ChatGPT, Claude and other MCP clients | Setup links are below |

If you are on the free plan, treat November as a trial window. Connect the site and try one small chore before the period ends. Check the support page before you build a routine around it, because access terms can change.

There is no separate MCP fee. You may still pay your AI provider's subscription, and the work counts against that plan's limits.

---

## How to Manage Your WordPress Site With ChatGPT and Claude

Setup takes a few minutes. The connection stays available for the sites you allow.

1. **Turn on MCP access.** In WordPress.com, open Preferences, then AI and MCP. You can enable access for every site or add specific sites only. Turning it on enables both Read and Write tool groups by default, so customize the lists before you connect if you want tighter control.
2. **Pick your agent.** Use the official setup links for [ChatGPT](https://wp.me/chatgpt){:target="_blank" rel="noopener noreferrer"} or [Claude](https://wp.me/claude){:target="_blank" rel="noopener noreferrer"}. For another MCP client, add the server address `https://public-api.wordpress.com/wpcom/v2/mcp/v1`.
3. **Approve the connection.** Sign in and authorize access. On the authorization screen you can choose full access, read only, or keep your existing settings.
4. **Start with a read-only request.** Ask for a list or a plan first, not an edit. That shows you how the agent reads your site before it changes anything.
5. **Review the result.** Open the Activity Log after the first change and confirm what the agent touched.

If the agent cannot find your tools, restart the client and start a new chat. MCP connections and tool lists are cached.

---

## Four Website Chores You Can Hand Off

WordPress.com highlights four jobs that are easy to postpone. Each one has a clear boundary between what the agent finds and what you decide.

### 1. Get a Finished Draft Ready to Publish

Writing the post is only half the work. Then comes formatting, a category, a search title and a meta description.

You can paste a finished draft into the chat and ask the agent to save it as a draft with your wording untouched. If the category you want does not exist, it can create it. You can also ask for a proofread, then decide whether the agent publishes on its own or waits for approval.

**Try asking:** "Upload this draft as a blog post and save it with a category."

### 2. Find and Update Outdated Business Details

A business name, price, address or set of opening hours hides in more places than you expect: posts, pages, the header, the footer, site settings and even the search titles on unpublished drafts.

Ask the agent to search first and change nothing. It looks through published and draft posts, pages, the header and footer, and settings, then shows you where each detail appears. You say what to change and what to skip. After you approve, it can make the edits and check each one.

**Try asking:** "Find every place my business hours appear and show me the list before changing anything."

This is a quiet win for local SEO. When your name, address and phone number match everywhere, search engines and customers have less reason to doubt you. Our guide on [how AI picks local businesses](https://f9xr.org/articles/2026/08/16/how-ai-picks-local-businesses-2026.html) explains why that consistency carries weight.

### 3. Find and Fix Images Missing Alt Text

Alt text is a short description of an image that a screen reader reads aloud, so people who cannot see the picture still know what it shows. It also gives search engines context for your visuals. Google's [image SEO guidance](https://developers.google.com/search/docs/appearance/google-images){:target="_blank" rel="noopener noreferrer"} treats useful alt text as part of making images discoverable.

The usual way to find missing alt text is to open the media library and check images one by one. Instead, ask the agent to scan for images with missing titles or alt text. It suggests descriptions from titles, captions and the page where the image was uploaded. Because it is working from clues rather than seeing every photo, check each suggestion against the real picture before you approve it.

**Try asking:** "Find images in my media library that are missing alt text and give me suggested changes."

For a wider look at the topic, see our [complete image SEO audit guide](https://f9xr.org/articles/2026/08/14/image-seo-audit-complete-guide.html).

### 4. Find the Comments That Need a Real Answer

By default, comments from first-time commenters wait for your approval. If your site gets a lot of them, one customer question can get buried under spam.

Ask the agent to sort new comments into praise, questions, feedback and likely spam. You review the list and decide what happens next. It can also draft replies for the comments that deserve an answer, which you can edit before anything goes live.

**Try asking:** "Sort my new comments into praise, questions and likely spam."

### Quick Reference: Chores, Prompts and What You Still Decide

| Chore | Sample prompt | What you still decide |
|---|---|---|
| Publish a draft | "Save this as a draft in a new category." | Final wording, category, publish time |
| Update business details | "Show me every page with my old address first." | Which pages change and which stay |
| Fix alt text | "List images with no alt text and suggest descriptions." | Whether each description is accurate |
| Sort comments | "Group new comments into praise, questions and spam." | Which to approve, reply to or delete |

---

## You Stay in Control

The common worry is losing control of your own website. WordPress.com handles it in specific ways.

- The agent only acts when you ask it to.
- You choose which read and write tools it can use.
- You decide whether it asks before every change or acts on its own. Permanent deletions always ask first.
- Your user role still limits what is possible.
- The [Activity Log](https://wordpress.com/support/activity/){:target="_blank" rel="noopener noreferrer"} marks changes made by your agent, so you can see what it touched.

Backups deserve a careful reading. Restoring from a backup is available on Business and Commerce plans, according to the support page. Deleted posts and pages can be recovered from trash for 30 days. Deleted media, categories and tags are permanent. If you are on a lower plan, do not assume a bulk edit can be undone.

AI features are also opt-in. You can review individual features in your site's [AI tools settings](https://wordpress.com/support/ai/){:target="_blank" rel="noopener noreferrer"}, so nothing has to be switched on if you would rather not use it.

---

## Practical Tips Before You Hand Over the Keys

These habits keep the first month boring, which is what you want.

- **Start with one chore.** Pick the job you have avoided longest. One clean win teaches you more than a broad experiment.
- **Always ask for the list first.** "Show me before changing anything" turns the agent into a researcher, which is its safest role.
- **Keep approvals on at the beginning.** Loosen the settings later, after you have watched how the agent behaves on your site.
- **Check your backup position before bulk edits.** A name change across fifty pages is exactly when you want a restore point. Confirm what your plan supports.
- **Spot check alt text yourself.** A description that is slightly wrong can be worse than none, especially on product photos.
- **Do not paste private customer data into a chat** unless you are comfortable with how that tool stores and processes it.
- **Review the Activity Log weekly.** It takes two minutes and keeps you aware of every change.

---

## What This Means for Local SEO and AI Search

Maintenance is not glamorous, but it feeds how search engines and AI assistants see your business.

- **Consistent business details** help Google, Bing and AI tools confirm who you are and where you operate.
- **Descriptive alt text** improves accessibility and gives search engines context for your images.
- **Answered comments** show active engagement, which supports the trust signals behind E-E-A-T, the experience, expertise, authoritativeness and trust that Google's guidelines describe.
- **Clean, current pages** are easier for crawlers and AI systems to read and quote.

The financial case is simple. An agent that finds three outdated prices and forty missing alt text entries in ten minutes returns more than ten minutes spent scrolling a media library. You still check the work, but the searching is no longer your job.

If you want a routine to follow, our [monthly website audit checklist](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html) pairs well with an agent. Let it do the finding. You do the judging.

---

## Limits Worth Knowing

Being honest about limits is part of using AI well.

- An agent can review content, metadata and alt text, but it cannot guarantee factual accuracy, accessibility compliance or that your original intent is preserved. WordPress.com's own team says editorial decisions stay with you.
- Alt text suggestions come from titles, captions and page context, so they need human review.
- Large archives deserve extra care. Review suggestions in batches against the original material.
- This works on WordPress.com sites and on self-hosted sites connected through Jetpack. If you run a self-hosted site, the plugin and connection route differs. See our guide to the [WordPress canonical MCP adapter plugin](https://f9xr.org/articles/2026/10/08/wordpress-canonical-mcp-adapter-plugin-guide.html) for that setup.

---

## How F9XR Team Can Help

Connecting an agent is easy. Getting the most from your website is where experience counts. F9XR Team works with business owners, startups and local businesses that want a site that earns its keep.

Here is where we can help:

- **Set up and audit:** We review your site before you connect an agent, so you know which chores are safe to automate.
- **Workflow design:** We build simple routines for alt text checks, business detail audits and comment review, so the work happens on a schedule.
- **Website development and redesign:** If your current site is slow, dated or hard to update, we can rebuild it.
- **Local SEO:** We tighten your business profile, schema and on-page signals so customers and AI assistants find the right details.
- **Content support:** We turn drafts into search-ready posts.

You can read how we approach automation in our [guide to AI agents for marketing workflows](https://f9xr.org/articles/2026/09/17/ai-agents-automate-business-marketing-workflow.html) or reach us through the [contact page](https://f9xr.org/articles/press/contact.html).

---

## Key Takeaways

- WordPress.com lets you connect ChatGPT, Claude and other MCP-compatible agents to your site and manage routine work by chat.
- Paid plans always have access. Free-plan sites have access now, and the October 2026 announcement said free access runs through the end of November 2026.
- Useful starter chores are saving drafts, finding outdated business details, fixing missing alt text and sorting comments.
- You control which tools the agent can use and whether it asks before each change. The Activity Log marks agent changes, but backup restore is limited to Business and Commerce plans.
- AI suggestions still need your review. The agent searches, you decide.

---

## Conclusion

You do not need to become a technical expert to keep a website tidy. The WordPress.com connection to ChatGPT and Claude takes the searching, sorting and checking off your list, and leaves the judgment with you. Start small, keep approvals on, and let the Activity Log keep you honest.

If your site needs more than a tidy-up, F9XR Team supports businesses with website development, website redesign, local SEO and wider digital presence solutions.

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
