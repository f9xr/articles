---
layout: post
title: "Gemini Now Tags Its Links With UTMs: Track AI Traffic"
description: "Google Gemini now adds UTM parameters to outgoing links. See what changed, what is still unclear, and how to track Gemini traffic in GA4."
image: "https://f9xr.org/articles/assets/post-images/google-gemini-utm-parameters-referral-attribution.webp"
image_width: 1200
image_height: 630
image_caption: "A tagged citation is proof of a click. It is not proof of a conversion."
youtube_id: "Fl5OcKM22Ro"
video_duration: "PT13M29S"
date: 2026-10-01
dateModified: 2026-10-01
author: "Mohammed Ahetasham Uddin"
tags: [Gemini UTM parameters, AI referral tracking, GA4 attribution, ChatGPT traffic, AI search analytics, UTM tracking, Google Analytics 4, AI visibility, AI SEO, GA4 reports]
keywords: "gemini utm parameters, ai referral tracking, ga4 ai assistant channel, chatgpt utm source, ai traffic attribution, utm tracking in ga4, google analytics 4 ai traffic"
faq:
  - q: "What UTM parameters does Google Gemini add to its links?"
    a: "Gemini appends tracking parameters to the outbound URLs it cites, and the most widely reported example is utm_source=chatgpt.com on ChatGPT referral and web-grounded links. Google has not published a full specification of the parameter set, and the tagging can be missing entirely depending on which surface the answer came from."
  - q: "Why does my GA4 landing page report not show the UTM parameters?"
    a: "Google deliberately strips UTM values out of the Landing page + query string and Page path + query string dimensions, so the query string never reaches them. The parameters are populated in the Page location dimension instead. Check there, or read Session campaign name and Session source / medium, before concluding the tags were missing."
  - q: "Does GA4 report ChatGPT and Gemini traffic separately from organic search?"
    a: "Yes, for most assistants. GA4 has a default channel group called AI Assistant, which covers sources such as ChatGPT, Gemini, DeepSeek, Copilot, and Grok. Google's AI Overviews and AI Mode are explicitly excluded from that channel and are counted under Organic Search instead."
  - q: "Could these UTM tags inflate my campaign numbers?"
    a: "Not by colliding with your own campaigns, because GA4 assigns AI Assistant traffic the reserved medium ai-assistant and the campaign name (ai-assistant). The likelier problem is double counting: an AI referral can be credited as a campaign and then re-credited to another channel by your attribution model, so keep it in a separate segment."
  - q: "How do I know whether AI traffic actually converts?"
    a: "Run the AI Assistant source / medium segment against a key event that matters commercially, such as a qualified lead or a purchase, and compare the result against what the cited content costs you to produce. Session counts alone will tell you the channel exists without telling you whether it is worth funding."
---

Google has started tagging the links Gemini cites, which means AI referrals can now carry a campaign marker all the way into your analytics. On the surface that is a small change. For reporting it is not, because for most of the past two years AI traffic has been arriving at your site as an anonymous direct visit.

The question is no longer whether AI assistants send traffic. They do. The question is whether you can tell which answers, which prompts, and which pages are producing it, and right now most sites cannot.

Here is what changed, where the tagging is unreliable, and what to configure in GA4 this week.

## What Google Actually Changed

Gemini now appends UTM parameters to the outbound URLs it includes in an answer. The same class of tagging is visible on ChatGPT referral and web-grounded links, where `utm_source=chatgpt.com` shows up on the destination URL. [Search Engine Journal covered the rollout](https://www.searchenginejournal.com/google-gemini-adds-utm-parameters-for-referral-attribution/591754/) and put the significance plainly: referral attribution is becoming a measurable channel rather than a footnote buried inside direct traffic.

Worth separating the two halves of that. The tagging is a Google-side change, and it is reversible or adjustable at any time. Nothing about your content, your rankings, or your citations changed. What changed is that the sessions can now be counted.

## Why UTM Parameters Matter Here

A UTM parameter is a key and value pair appended to a URL. Add `utm_source` to a link and your analytics tool can read it on arrival, group the visit with others carrying the same value, and report it as a campaign instead of folding it into direct traffic.

Google's own documentation lists the parameters you can send: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, and `utm_content`, plus `utm_id` and `utm_source_platform`. Two newer additions, `utm_creative_format` and `utm_marketing_tactic`, are documented but not currently reported in GA4 properties. The [URL builders help page](https://support.google.com/analytics/answer/10917952) covers the full list and the naming rules.

For an AI referral you control none of this. The assistant decides what to send, and you are reading its naming convention rather than applying your own. That has a practical consequence. If it sends `utm_source` with no `utm_medium`, the medium stays whatever GA4 infers, so the source is doing all the work. When you later compare AI sessions against email or paid search, an inconsistent medium is the first thing that will distort the comparison.

## Where the Tagging Breaks Down

The tagging is real, and it is also inconsistent, which is the part most coverage skips.

A Reddit discussion reported by Search Engine Journal found roughly 9% referrer pass-through from the Gemini mobile app, with the Android Assistant stripping the parameter entirely. John Mueller has also reported seeing the tags, while asking for reproducible examples with full referrer details before drawing firm conclusions. Treat all of it as practitioner observation rather than behaviour you can plan around.

So the honest position looks like this:

- The parameters appear on many citations, and the pattern is consistent enough to suggest something deliberate rather than accidental.
- Mobile app and assistant surfaces do not pass the referrer through reliably, so a large share of the same traffic arrives untagged.
- A tagged session is proof of a click. An untagged session is not proof of a direct visit.

That last point is the one to hold onto. If direct traffic rises in the same week you notice the tags appearing, you have not found new human visitors. You have found the visitors you already had, arriving through a surface that dropped the label.

## Reading It Correctly in GA4

GA4 already has a home for this traffic, and most sites are not using it. The `AI Assistant` default channel group covers sources such as ChatGPT, Gemini, DeepSeek, Copilot, and Grok. The classification rule is exact: the medium matches `ai-assistant`, and GA4 sets the medium to `ai-assistant` with the campaign `(ai-assistant)` when the referrer matches its list of assistants. Google's [default channel group documentation](https://support.google.com/analytics/answer/9756891) spells this out, and it has an exclusion that catches people out.

AI Overviews and AI Mode are not part of the AI Assistant channel. They are counted under `Organic Search`. So if you have been watching AI search visibility climb and expecting that to show up as AI traffic, it will not. Those are two different measurements, and conflating them is how teams end up with a channel that looks bigger than it is. Our guide on [monitoring AI search trends to boost citations](https://f9xr.org/articles/2026/08/26/monitor-ai-search-trends-boost-visibility-citations.html) covers that separate problem.

There is a second trap in the reporting, and it has caught nearly every site at least once. Google omits UTM data from the `Landing page + query string` and `Page path + query string` dimensions, so if you go searching for `utm_source` in the landing page report you will never find it. The absence of the parameter there is not evidence the tags were missing. Analytics populates the `Page location` dimension instead.

This walkthrough covers the GA4 side of reading UTM values, if the dimension list is new to you.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/Fl5OcKM22Ro" title="UTM parameters in Google Analytics 4, GA4 campaign tracking with UTMs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>

Once the data is landing where you can read it, three checks will tell you most of what you need:

1. Filter `Session source / medium` for `ai-assistant` to see which assistants are actually sending sessions.
2. Add `Page location` as a secondary dimension to confirm the parameters arrived intact.
3. Compare that segment against a key event rather than against sessions.

If you want this as a repeatable report rather than something you rebuild each month, the segment structure in [our GA4 include filters and hostname guide](https://f9xr.org/articles/2026/09/22/google-analytics-include-filters-hostnames.html) is worth reading before you start building it.

## The Double Counting Risk

This is the part that can quietly inflate a report and cost you budget later.

AI referrals are now visible as a campaign hit and as a session your attribution model may credit to a different channel. A visitor who sees your page in a Gemini answer, clicks through, and converts after a Google search can be attributed twice depending on which report you open. Nobody is fabricating sessions. The same session is simply visible through more than one lens.

The 9% pass-through figure matters here for a second-order reason. If only a fraction of AI referrals arrive tagged, then tagged sessions are a biased sample of the AI audience rather than a complete count of it. The surfaces that strip parameters are not random, and they skew toward mobile, which most people use most.

Practically, that argues for reporting AI traffic as a trend line over months rather than a weekly number you act on. It also argues for keeping it in its own source / medium segment so it never gets summed into a campaign you built yourself. If your naming discipline is already inconsistent, the extra traffic will expose that quickly. [AI visibility tracking and citation trends](https://f9xr.org/articles/2026/09/12/ai-visibility-trending-topics-citations.html) is the other half of this measurement problem.

## A Practical Checklist

If you are picking this up mid-month, work through it in this order:

1. Confirm the tags are arriving by adding `Page location` to a report and searching for `utm_source`.
2. Build a saved report for the `AI Assistant` channel group and leave it running for a full month.
3. Mark the key event you care about so AI sessions can be compared against a business outcome.
4. Check server logs or host-level referrer data if mobile numbers in GA4 look implausibly low.
5. Add AI referrals to your monthly report as a named line rather than folding them into organic search.

Step four is the one most teams skip, and it is the one that tells you the size of the gap. Analytics undercounts on the surfaces that strip parameters, so a log check is often the only honest way to know what you are missing. The rest of the monthly routine is in [our website audit checklist](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html).

## What I Would Not Do Yet

It is tempting to treat this as a channel to fund. I would hold off.

The tagging confirms AI referrals exist and can be counted. It says nothing about cost per session, traffic quality, or whether the content that earned the citation converts. Teams that jumped on AI traffic as a growth line in the last year built it on referral estimates rather than measured conversion.

The number worth watching first is referred conversions per thousand cited pages, measured against what that same content costs to produce and maintain. [How to report AI conversions across channels in GA4](https://f9xr.org/articles/2026/09/30/google-analytics-app-conversions-cross-channel-reports.html) covers the reporting side of that comparison.

## The Honest Position

Gemini tagging its links closes a measurement gap that has been open for two years. You can now report AI referral traffic through the `AI Assistant` channel, and you can verify individual parameters using `Page location` instead of the landing page report.

What it still cannot give you is a clean, complete count. Mobile apps and assistant surfaces strip the tags, so tagged sessions are a partial sample. That is enough to establish the trend and start measuring conversion. It is not enough to size a market or move budget on its own.

Treat this as instrumentation, not as a growth channel. Fix the reporting this month, run it for a quarter, and let the conversion data make the argument for the investment.

## Sources

- [Search Engine Journal: Google Gemini adds UTM parameters for referral attribution](https://www.searchenginejournal.com/google-gemini-adds-utm-parameters-for-referral-attribution/591754/)
- [Google Analytics Help: URL builders and campaign data with custom URLs](https://support.google.com/analytics/answer/10917952)
- [Google Analytics Help: Default channel group and the AI Assistant channel](https://support.google.com/analytics/answer/9756891)
- [Seer Interactive: Are AI sites like ChatGPT sending your website traffic?](https://www.seerinteractive.com/insights/are-ai-sites-like-chatgpt-sending-your-website-traffic)
- [GeoCara: ChatGPT referral traffic in GA4](https://www.geocara.com/blog/chatgpt-referral-traffic-ga4)
- [Analytics Mania: UTM parameters in Google Analytics 4](https://www.youtube.com/watch?v=Fl5OcKM22Ro)

---

*This article was researched and drafted with AI assistance, then reviewed and edited by a human before publication. GA4 channel rules change over time, so verify current behaviour in your own property before acting on it.*
