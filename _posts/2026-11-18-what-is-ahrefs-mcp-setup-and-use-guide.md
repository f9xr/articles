---
layout: post
title: "Ahrefs MCP: Chat With Your SEO Data (Setup Guide)"
description: "Ahrefs MCP lets Claude and ChatGPT pull live SEO data from your account. Learn what it is, who can use it, setup steps and smart prompts."
image: "https://f9xr.org/articles/assets/post-images/what-is-ahrefs-mcp-setup-and-use-guide.webp"
image_width: 1200
image_height: 630
image_caption: "Ahrefs MCP connects Claude, ChatGPT and other AI assistants to live Ahrefs SEO data."
date: 2026-11-18
author: "Masna Sudhir"
category: "SEO Tools, AI, MCP"
permalink: /2026/11/18/what-is-ahrefs-mcp-setup-and-use-guide.html
tags: [Ahrefs MCP, Ahrefs MCP Server, Model Context Protocol, MCP for SEO, Claude Connectors, AI SEO Tools, Keyword Research, Backlink Analysis, Local SEO, Answer Engine Optimization]
keywords: "Ahrefs MCP, Ahrefs MCP server, how to use Ahrefs MCP, connect Ahrefs to Claude, Ahrefs MCP setup, Ahrefs with ChatGPT, MCP for SEO"
faq:
  - q: "What is Ahrefs MCP?"
    a: "Ahrefs MCP is Ahrefs' official hosted Model Context Protocol server. It lets compatible AI assistants such as Claude and ChatGPT read live data from your Ahrefs account and answer SEO questions about keywords, backlinks, competitors and rankings."
  - q: "Is Ahrefs MCP free?"
    a: "No. The hosted Ahrefs MCP server requires a paid Ahrefs plan from Lite and up. Each request also spends API units from your monthly allowance. Your AI app may have its own plan rules for connectors."
  - q: "How do I connect Ahrefs MCP to Claude?"
    a: "In Claude web or desktop, open Customize, then Connectors, click the plus button, find Ahrefs, click Connect, choose your workspace and click Allow. In Claude Code, run claude mcp add ahrefs https://api.ahrefs.com/mcp/mcp -t http and authenticate through /mcp."
  - q: "Does Ahrefs MCP work with ChatGPT?"
    a: "Yes, but Ahrefs documents MCP access in ChatGPT as a beta feature in Developer mode for Pro and Plus accounts on the web. You create an app with the server URL, choose OAuth, approve your workspace and enable the connector in the chat."
  - q: "What is the difference between an Ahrefs MCP key and an API key?"
    a: "They are separate. Ahrefs API v3 keys work with the direct API and the archived local server. MCP keys work with the hosted remote server. Using the wrong key type often fails without a clear error message."
---

The Lite plan gives you 200,000 API units a month and caps every Ahrefs MCP request at 100 rows. Those two numbers tell you more about the experience than any prompt trick. They set how much data the AI can pull, how often you can ask, and why a broad question can eat a month of budget in an afternoon.

Ahrefs MCP is Ahrefs' official hosted Model Context Protocol server. It lets AI assistants such as Claude and ChatGPT read live data from your Ahrefs account. You ask in plain English. The assistant calls the server, the server calls Ahrefs, and you get an answer built from real data on keywords and backlinks, competitor pages and ranking positions. The endpoint is `https://api.ahrefs.com/mcp/mcp`.

This Ahrefs MCP setup guide covers what the server does, which plans include it, how to connect it in three ways and how to prompt it without wasting units. Plan details below come from Ahrefs' documentation and pricing page. Check both before you buy.

---

## What Is Ahrefs MCP?

MCP stands for Model Context Protocol. Anthropic published it in late 2024 as an open standard for connecting AI assistants to outside tools and data. The [official MCP site](https://modelcontextprotocol.io/docs/getting-started/intro) splits the architecture into three parts: a host (your AI app), a client (the connector inside it) and a server (the service that exposes tools and data).

Ahrefs MCP is the server side of that setup, run by Ahrefs. In the company's words, it "lets AI agents securely access the Ahrefs API and enrich their answers with real Ahrefs data." You do not install anything locally. Ahrefs hosts the endpoint, and your connection syncs across devices on the same account.

The server exposes Ahrefs data as callable tools. Ahrefs lists keyword research, competitor traffic, backlink audits, content gaps and AI visibility as use cases. When you ask a question, the assistant picks a tool, sends the request and summarizes the response.

Here is the pipeline in one example:

- Input: "Show the top 10 referring domains for competitor.com in the last 7 days."
- Processing: the assistant calls an Ahrefs backlink tool through MCP, and Ahrefs returns the rows.
- Output: a table of referring domains with domain rating and link counts.
- Action: you pick three realistic outreach targets.

MCP only moves a request from your chat window to Ahrefs and brings the answer back. The server does not decide what to ask, does not know whether a keyword matters to your business, and will not warn you when a request is likely to spend more units than the answer is worth. The reasoning belongs to the AI model. Verify the result.

### The endpoint and the old GitHub trap

Use the Streamable HTTP address:

```
https://api.ahrefs.com/mcp/mcp
```

You may find an older local project, `ahrefs/ahrefs-mcp-server`, and an npm package named `@ahrefs/mcp`. Ahrefs archived that repository on February 24, 2026. Its README now says it is no longer maintained, works only with API v3 keys, and does not work with MCP keys. Skip it, because the hosted server is the only supported route.

F9XR keeps a copy-ready [Ahrefs MCP entry on YoPrompts](https://f9xr.org/yoprompts/mcp-server-index/ahrefs/) with the endpoint, plan requirement and an install prompt.

---

## Who Can Use Ahrefs MCP? Plans, Rows and Units

Ahrefs sells MCP access as part of its paid plans. The entry-level Starter plan at $29 per month does not list API or MCP access. Lite and above do.

An API unit is Ahrefs' billing unit for API consumption. The [API limits guide](https://docs.ahrefs.com/api/docs/limits-consumption) says the minimum cost of any billable request is 50 units, and cost rises with the number of rows and fields you request. MCP calls spend from the same monthly allowance as direct API calls.

| Plan | Monthly price | Rows per MCP request | API units per month |
|---|---|---|---|
| Lite | $129 | 100 | 200,000 |
| Standard | $249 | 250 | 800,000 |
| Advanced | $449 | 500 | 2,000,000 |
| Enterprise | Custom | Unlimited | 4,000,000 or custom |

Prices are November 2026 monthly rates, exclusive of tax. Confirm current numbers on the [Ahrefs pricing page](https://ahrefs.com/pricing).

Two details matter more than the headline price. First, the row cap applies per request, so a Lite account cannot pull a 5,000-row export through MCP in one go.

Second, OAuth-created MCP keys default to a monthly limit of 200,000 API units per key. Workspace admins can raise or lower that cap in the API keys report. Manually created keys have no per-key limit by default, though the plan limit still applies.

To see where you stand, open Ahrefs and go to **Account settings**, then **Limits and usage**. Watch the API units bar. If it drops faster than you expect, your prompts are too broad.

---

## How to Set Up Ahrefs MCP

Pick the route that matches the tool you already use.

### Method 1: Claude web or desktop (OAuth)

Start here if you are unsure.

1. Sign in at claude.ai or open the desktop app.
2. Open **Customize**, then **Connectors**, and click the plus button.
3. Search for **Ahrefs** in the approved connector list and open the card.
4. Click **Connect**.
5. Choose your Ahrefs workspace and account, then click **Allow** on the consent screen.
6. Start a new chat and ask a simple question to test the connection.

Ahrefs' [Claude setup guide](https://docs.ahrefs.com/mcp/docs/claude-desktop-web) shows the same flow with screenshots. Once connected, the server appears in your connector list and syncs to other devices on your Claude account, including mobile, so you can run the same question from your phone without repeating the sign-in.

In Claude's connector settings you can set the permission mode. "Always ask permission" shows each request before it runs, while "Allow unsupervised" skips the prompts.

Start with approval mode. It protects your units while you learn what a normal request looks like.

For more on picking connectors, see F9XR's guide to [the best Claude connectors for marketers](https://f9xr.org/articles/2026/09/10/best-claude-connectors-for-marketers-2026.html).

### Method 2: Claude Code

If you work in a terminal, one command adds the server:

```bash
claude mcp add ahrefs https://api.ahrefs.com/mcp/mcp -t http
```

Launch Claude Code, run `/mcp`, select Ahrefs, authenticate, pick your workspace and click **Allow**. The [Claude Code guide](https://docs.ahrefs.com/mcp/docs/claude-code) lists the same steps.

This route fits technical marketers who already audit sites or edit content in a terminal. You can check a page's rankings in the same session where you change its title tag.

### Method 3: Manual MCP key in a config file

Some desktop setups authenticate with an MCP key instead of OAuth. Ahrefs documents a Claude Desktop config that runs `mcp-remote` and sends the key as a bearer token:

```json
{
  "mcpServers": {
    "Ahrefs": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://api.ahrefs.com/mcp/mcp",
        "--header",
        "Authorization:${AUTH_HEADER}"
      ],
      "env": {
        "AUTH_HEADER": "Bearer YOUR_MCP_KEY"
      }
    }
  }
}
```

Generate the key in Ahrefs under **Account settings**, then **API keys**, using the **Generate MCP key** button. Never put a real key in a screenshot, a shared document or a public repository.

The key type is the detail people get wrong. MCP keys work with the hosted server. API v3 keys work with the direct API and the archived local server. Mixing them often fails without a clear error message.

### ChatGPT, Copilot Studio and other clients

Ahrefs publishes guides for Claude Web and Desktop, Claude Mobile, Claude Code, Copilot Studio, ChatGPT Web, Lovable, n8n, Manus, Mistral's Le Chat and OpenClaw. The pattern is the same everywhere: add the remote URL, sign in, approve the workspace.

ChatGPT needs one caveat. Ahrefs' [ChatGPT guide](https://docs.ahrefs.com/mcp/docs/chatgpt-web) says MCP access is in beta and currently limited to Developer mode on Pro and Plus accounts on the web. You create an app under Settings, Apps, Advanced settings, set the server URL to `https://api.ahrefs.com/mcp/mcp`, choose OAuth and approve access. Then enable the connector in the chat before you ask a question.

---

## How to Use Ahrefs MCP: Prompts That Work

The quality of the answer tracks the quality of the request. These prompts are starting points. Replace the domains, country and numbers with your own.

### Competitor research

> "Using Ahrefs, compare organic traffic and top pages for mydomain.com and competitor.com in the United States. Show the 20 pages that bring them the most traffic and tell me which topics I do not cover."

Pair this with F9XR's process for [competitor analysis that actually wins customers](https://f9xr.org/articles/2026/10/26/competitor-analysis-that-actually-wins-you-customers.html).

### Keyword opportunities

> "Find 20 keywords related to emergency plumber in the United States with a keyword difficulty under 30. Group them by search intent and mark the ones that suggest someone needs help now."

That last instruction matters. Bottom-of-funnel terms usually convert better, a point F9XR covers in its guide to [ranking for bottom-of-funnel keywords](https://f9xr.org/articles/2026/11/11/rank-1-google-bottom-of-funnel-keywords-strategy.html).

### Backlink review

> "List the 25 strongest referring domains for competitor.com. For each one, tell me whether a local service business could plausibly earn a link, and why."

If link building is on your list, read [how to get backlinks in 2026](https://f9xr.org/articles/2026/08/07/get-backlinks-2026-free-paid-ai-methods.html), then use the YoPrompts [backlink outreach system](https://f9xr.org/yoprompts/prompts/backlink-outreach-system/) to draft pitches.

### Content planning

> "Which pages on competitor.com get the most organic traffic? Suggest five topics I could cover better, with the search intent and a suggested title for each."

### Monthly reporting

> "Summarize my site's organic performance this month in plain English. What rose, what fell, and what are the three actions I should take first? Keep it under 250 words."

### AI search visibility

> "Compare how my brand appears in AI search results with my three closest competitors. Which content gaps might explain the difference?"

This works best when your plan includes Brand Radar data. For background, see F9XR on [monitoring AI search trends](https://f9xr.org/articles/2026/08/26/monitor-ai-search-trends-boost-visibility-citations.html).

### Five prompting habits that save units

1. **Name the domain and country.** A request without a market can pull the wrong dataset and spend units twice.
2. **Cap the rows.** "Top 20" is cheaper and easier to check than "everything."
3. **State the decision.** "I need three blog topics" gives the model a target. "Analyze my site" does not.
4. **Ask for the method.** A short explanation of which tool it used helps you spot a wrong turn.
5. **Verify anything that affects money or site structure.** Open the same report inside Ahrefs before you act.

Treat the answer as a query result, not a verdict. Check the row count, the date range and the country. If one is missing, ask again before you use the number.

---

## Costs, Limits and Rules to Know

These rules decide whether a connection works and what it costs.

| Topic | What to know |
|---|---|
| Plan access | Lite and above. Starter does not include API or MCP access. |
| Row cap | 100 rows per request on Lite, 250 on Standard, 500 on Advanced, unlimited on Enterprise. |
| API units | Every call spends from the monthly allowance. Minimum billable request is 50 units. |
| Per-key cap | OAuth-created MCP keys default to 200,000 units per month. Admins can change it. |
| Usage tracking | Account settings, then Limits and usage. |
| Permitted use | Interactive workflows in supported AI clients. Custom scripts, bridges and standalone HTTP clients are not permitted. |
| Programmatic access | Use the Ahrefs public API instead. |

Ahrefs says the external MCP endpoint is not a general-purpose API. For a nightly job that pulls rankings into a database, use the public API.

For your own audit, compare two numbers each week: API units used and questions asked. If the ratio climbs, your prompts are getting broader. If it falls, you are asking tighter questions.

---

## Common Problems and Fixes

**The connection succeeds but every question fails.**
Check the key type. The hosted server needs OAuth or an MCP key, not an API v3 key.

**The tool list is empty.**
Reload the connection and ask the assistant to list the Ahrefs tools. Some clients hide tools until you enable the connector in the current chat.

**Units disappear fast.**
Broad prompts pull large datasets. Limit rows, name the country and ask for a summary instead of a raw dump. Ask an admin to set a per-key cap.

**The answer looks plausible but wrong.**
AI models can misread a table. Open the same report in Ahrefs and compare the numbers. Ask the assistant to cite the tool and the date range it used.

**Access is denied.**
Confirm the plan is Lite or higher, and confirm you chose the right workspace during sign-in.

---

## Ahrefs MCP vs Other SEO MCP Servers

Ahrefs is not the only server worth connecting. A second server often fills the gaps, and a small MCP for SEO stack beats an overloaded one.

| Server | Best for | Account needed |
|---|---|---|
| Ahrefs MCP | Keywords, backlinks, competitor data, rank tracking and AI visibility | Paid Ahrefs plan from Lite |
| [Google Search Console MCP](https://f9xr.org/yoprompts/mcp-server-index/google-search-console/) | Your own clicks, impressions and indexing data | Free Search Console account |
| [Firecrawl MCP](https://f9xr.org/yoprompts/mcp-server-index/firecrawl/) | Scraping and crawling pages for content checks | Varies by plan |
| [Exa MCP](https://f9xr.org/yoprompts/mcp-server-index/exa/) | Semantic web search and research | Varies by plan |

A practical stack: Ahrefs for market data, Search Console for your own performance and Firecrawl for page checks. For more options, see F9XR's roundup of [top MCP servers every marketer should use](https://f9xr.org/articles/2026/09/19/top-mcp-servers-every-marketer-should-use.html).

Local businesses feel this too. Customers now ask AI assistants for recommendations, and missing from those answers does not show up as a classic ranking drop. See F9XR's guide to [how AI picks local businesses](https://f9xr.org/articles/2026/08/16/how-ai-picks-local-businesses-2026.html).

---

## How F9XR Team Can Help You

Setup takes minutes. Turning the data into traffic takes a plan. F9XR Team works on the second part.

- Website development: fast, mobile-first sites built to convert.
- Website redesign: fixing slow or dated sites that lose visitors.
- Local SEO: Google Business Profile work, local keyword targeting, citations and reviews.
- Digital presence: consistent business details and structured data that search engines and AI assistants can read.

If you want help connecting the tools or acting on what the data shows, start with [F9XR's services](https://f9xr.org/services/) or the [local SEO service page](https://f9xr.org/services/google-business-optimization.html).

---

## Key Takeaways

- Ahrefs MCP is Ahrefs' official hosted server, reachable at `https://api.ahrefs.com/mcp/mcp`.
- Access starts at Lite, $129 per month, with 100 rows per request and 200,000 API units.
- OAuth through Claude's connector directory is the fastest setup for most users.
- MCP keys and API v3 keys are different, and mixing them is the most common silent failure.
- Every call spends API units, so narrow prompts and a quick check inside Ahrefs matter more than clever wording.

## Conclusion

Start with one question you already know the answer to. A competitor's top page, your own best keyword, a backlink you can see in Ahrefs. Connect the server, ask the question, and compare the answer with the report. If the numbers match, you have a working setup and a calibrated sense of what the tool does well. If they do not, fix the connection before you trust a bigger request.

Then pick one repeatable job, such as a monthly competitor check, and turn it into a saved prompt. That is where the time saving shows up.

F9XR Team builds websites, redesigns underperforming sites and runs local SEO and digital presence work for businesses that want the data to turn into customers.

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
