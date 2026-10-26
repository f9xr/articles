---
layout: post
title: "Meta Commercial Terms: 'Train' Removed, Crawl Remains"
description: "Meta Commercial Terms dropped the word train, but Meta can still crawl sites linked to your business account. What to check before Oct. 30."
image: "https://f9xr.org/articles/assets/post-images/meta-removes-train-crawling-clause-what-it-means.webp"
image_width: 1200
image_height: 630
image_caption: "Meta removed the word 'train' from the crawling clause in its Commercial Terms and left the permission to crawl in place."
date: 2026-10-20
dateModified: 2026-10-21
author: "Mohammed Ahetasham Uddin"
tags: [Meta Commercial Terms, Meta crawling clause, AI training, Meta AI, robots.txt, Meta-ExternalAgent, Meta Business Suite, AI crawlers, Website protection, Small business SEO]
keywords: "Meta Commercial Terms crawling clause, Meta removes train from terms, Meta crawl business websites, Meta Commercial Terms October 30, meta-externalagent, meta-webindexer, robots.txt Meta, Meta AI training websites, Meta Self-Serve Ad Terms, Meta Business Suite terms"
faq:
  - q: "Did Meta remove AI training from its Commercial Terms?"
    a: "Meta removed the word train from the crawling clause in its upcoming Commercial Terms and limited the stated purpose to advertising and business products, plus integrity and security. Training is no longer listed, but it is not expressly prohibited, and the permission to crawl websites tied to business users remains."
  - q: "Can Meta still crawl my website after October 30?"
    a: "Yes. The revised terms still allow Meta to use automated tools such as scrapers, bots, crawlers and user agents on websites associated with your products or services. The change affects what Meta says it will do with the content, not whether it can access it."
  - q: "Can I opt out of Meta's crawling clause?"
    a: "No separate opt out has been reported. The only way to reject the terms is to stop using Meta's products for business or commercial purposes. Many businesses instead manage access with robots.txt and firewall rules."
  - q: "Does Meta respect robots.txt?"
    a: "Meta says it respects robots.txt preferences and that its terms do not override them. However, the Commercial Terms do not mention robots.txt, and some Meta fetchers, such as Meta-ExternalFetcher and FacebookExternalHit, may bypass it in specific situations like user requested fetches or security checks."
  - q: "How do I block Meta's AI crawler?"
    a: "Add a robots.txt rule that disallows the meta-externalagent user agent, then confirm the current crawler names in Meta's documentation. Changes can take up to 24 hours to take effect. Do not block FacebookExternalHit unless you accept broken link previews on Facebook and Instagram."
---

On October 30, 2026, the new Meta Commercial Terms take effect for every business that keeps using Meta's products, whether it buys ads or not. Two weeks before that deadline, Meta edited the crawling clause in its Commercial Terms preview. The word "train" came out. The permission to crawl stayed in.

Publishers, lawyers and small business owners all asked the same question: can Meta crawl my website and use what it finds to train its AI? Late last Friday, Meta answered with an edit. A sentence that once listed training among the permitted uses now points to advertising and business products instead.

That reads like a clear win. The rest of the clause says otherwise: the permission to crawl websites tied to a business using Meta's products is still there, and there is no separate opt out.

What follows is what changed, what did not, and what to do before the deadline.

> **Update note:** This story follows our earlier guide, [Meta's Oct. 30 terms: what business owners must know](https://f9xr.org/articles/2026/10/17/meta-commercial-terms-october-30-what-changed.html). Meta has since edited the disputed clause, so some details in that piece are now outdated. This article reflects the latest version we could verify as of October 20, 2026.

*This article is general information and not legal advice.*

---

## The Short Version

| Question | Answer |
| --- | --- |
| What changed? | Meta removed "train" from the list of purposes in the crawling clause and tied the use of crawled content to advertising and business products, plus integrity and security |
| What did not change? | Meta can still use automated tools (scrapers, bots, crawlers, user agents) on websites associated with your products or services, including creating test credentials and periodically pulling updates |
| When do the terms start? | October 30, 2026 |
| How do you accept them? | By continuing to use Meta's business products after that date |
| Is there an opt out for the crawling clause? | No separate opt out has been reported |
| Does the clause mention robots.txt? | No. Meta says it respects robots.txt preferences, but the terms do not promise it |
| Does this cover businesses that do not buy ads? | Yes, according to reporting. The terms apply to any business use of Meta products, including managing a Facebook Page |
| Is AI training now banned? | No. It is no longer listed as a purpose, but it is not expressly prohibited |
| Do all language editions match? | No. The UK English previews still showed the old wording on Oct. 18 and Oct. 19, while the US English version did not |
| Did Meta tell users about the edit? | No. Ars Technica reported on Oct. 20 that a Meta spokesperson confirmed users were not notified |
| What else changed on October 30? | A new AI features section makes businesses "solely responsible" for AI errors, and the warranty disclaimer now says "AS IS" |

---

## What Exactly Changed in the Meta Commercial Terms Crawling Clause

The original version, as reported by [Nieman Lab](https://www.niemanlab.org/2026/10/legal-experts-warn-metas-new-terms-still-grant-broad-scraping-permissions-despite-language-changes/){:target="_blank" rel="noopener noreferrer"}, said Meta could use content gathered from your websites to provide, develop, improve, research, train and maintain the integrity of its products and features.

The revised version limits the stated purpose. In Meta's wording, crawling is allowed "in order to provide, develop, improve, research, and maintain advertising and business products." A parenthetical adds that these include products that help a business create and deliver ads and connect with interested people. The integrity purpose stays, now worded as maintaining the integrity and security of Meta's products.

The deleted sentence also said Meta could use "any content" it collected. That phrase is gone as well, according to [Ars Technica's October 20 read of the updated terms](https://arstechnica.com/tech-policy/2026/10/meta-drops-the-word-train-from-its-commercial-tos-after-ai-backlash/){:target="_blank" rel="noopener noreferrer"}. The crawl permission is untouched, but the clause no longer spells out a content use grant in those words.

The wider October 30 rewrite deserves a look too, because it moves risk onto businesses. A new section on AI features says businesses acknowledge that "AI features may make mistakes and may not always produce accurate, complete or suitable results" and are "solely responsible for and assume any and all risks associated with such AI features and any resulting Content." The warranty disclaimer now says Meta's products are provided "AS IS," and the indemnity clause was widened to cover claims brought by the business itself. [PPC Land documented the rewrite](https://ppc.land/metas-new-terms-let-it-crawl-business-websites-to-train-ai-from-oct-30/){:target="_blank" rel="noopener noreferrer"} section by section.

The two versions, side by side:

| Element | Original clause | Revised clause |
| --- | --- | --- |
| Word "train" | Listed as a permitted purpose | Removed |
| Purpose of use | Meta's products, services and features under the terms (broad) | Advertising and business products, plus integrity and security |
| Who can be crawled | Websites associated with your products or services | Same |
| Tools allowed | Scrapers, bots, crawlers, user agents | Same |
| Test credentials | Allowed | Same |
| Caching and periodic updates | Allowed | Same |
| Mention of robots.txt | None | None |
| Opt out | None | None |
| Effective date | October 30, 2026 | October 30, 2026 |

The narrow reading is simple. Meta reduced what it says it will do with the content, and it did not reduce what it is allowed to access. The full text lives in [Meta's Commercial Terms preview](https://www.facebook.com/legal/commercial_terms_preview){:target="_blank" rel="noopener noreferrer"}, which you should read for yourself before October 30.

---

## Meta's Explanation

A Meta spokesperson said the crawling language Meta consolidated only ever applied to its ads and business products, and that the company has clarified this in the terms themselves. Meta also says the update does not change how it uses web crawlers, that it is not about scraping news sites, and that the language was previously scattered across several documents, including terms for generative AI in ads.

Meta also told Nieman Lab that the first version was not clear enough about robots.txt, and that the updates do not give it new rights that override a site's robots.txt preferences. On Saturday, a spokesperson told Nieman Lab the edit came down to clarity: it "wasn't clear in the initial consolidation of terms that robots.txt preferences are respected."

That is a helpful statement. The catch is that it is a statement, not a clause. The contract text itself still says nothing about robots.txt.

One more detail came out on October 20. [Ars Technica reported](https://arstechnica.com/tech-policy/2026/10/meta-drops-the-word-train-from-its-commercial-tos-after-ai-backlash/){:target="_blank" rel="noopener noreferrer"} that a Meta spokesperson confirmed the company did not notify users about the changed language. No email went out. The preview page just changed, and the change arrived without notice.

---

## Why Critics Are Not Fully Satisfied

Legal experts and industry groups raised several points after the edit:

- **"Develop" is a broad word.** Matt Topic, a media and intellectual property attorney at Loevy & Loevy, told Nieman Lab that publishers "should remain concerned." He said "I think 'develop' is broad enough to include 'train'," and that "business product" does not seem to be a defined term. Meta lists its business products as "ads, Meta Business Tools and Meta Business Suite."
- **Access is unchanged.** James Grimmelmann, a professor of digital and information law at Cornell Law School, said the edit does nothing to restrict the "associated with your products or services" language, which he said would let Meta scrape entire sites. He called the purposes language "still broad enough to drive a truck through."
- **Robots.txt is voluntary.** Benjamin Sobel, a law professor at the University of Wisconsin, explained that robots.txt signals a site's preferences. Following those signals is voluntary, and they do not give the site an enforceable legal right. What would help, he said, is language inside the terms committing Meta to respect robots.txt files. The current standard is documented in the [Robots Exclusion Protocol, RFC 9309](https://www.rfc-editor.org/rfc/rfc9309){:target="_blank" rel="noopener noreferrer"}.
- **Training is not banned.** Removing a word is not the same as prohibiting a practice. Sam Quigley, a spokesperson for the News/Media Alliance, told the Bay Area News Group, in a [SOFX report](https://www.sofx.com/meta-cuts-ai-training-clause-but-continues-crawling-partner-websites/){:target="_blank" rel="noopener noreferrer"}, that the edit limits what Meta may do with content but not its ability to collect it. "They may have taken out training from the listed uses," he said, "but with it not being expressly ruled out, it's still potentially on the table."

Industry bodies including the European Publishers Council and the UK's [News Media Association](https://newsmediauk.org/blog/2026/10/16/nma-condemns-arrogant-metas-shameless-landgrab-attempt-to-plunder-news-publisher-websites/){:target="_blank" rel="noopener noreferrer"} had already criticized the original wording before the revision. NMA chief executive Theo Bamber called it "a shameless landgrab attempt from Meta to scrape anything and everything from news publisher and business websites" and asked UK ministers and regulators to step in. The [News/Media Alliance went further](https://www.newsmediaalliance.org/changes-to-meta-commercial-terms-of-use/){:target="_blank" rel="noopener noreferrer"}, calling the terms "outrageous and probably illegal" and saying an October 30 rollout "cannot be allowed" to proceed.

None of these comments mean Meta plans to train on your website. They mean the contract, as written, leaves room for interpretation. If you run a business that depends on original content, that is worth knowing.

---

## A Wrinkle Worth Checking: Different Versions in Different Regions

The language editions do not match. [PPC Land](https://ppc.land/metas-ai-training-clause-still-in-oct-30-terms-after-report-of-removal/){:target="_blank" rel="noopener noreferrer"} checked Meta's Commercial Terms preview on the evening of October 18 and captured the UK English edition still containing the training sentence, word for word, with no ads-only limitation in the crawl paragraph. The next day, [Search Engine Journal](https://www.searchenginejournal.com/meta-removes-training-crawl-clause-commercial-terms/593584/){:target="_blank" rel="noopener noreferrer"} reported the same split in Meta's Self-Serve Ad Terms: the UK English preview still carried the previous wording, including "any content" and the word "train," while the US English version no longer did. The Verge had reported the removal on October 17, and [FourWeekMBA](https://fourweekmba.com/ai-meta-cuts-ai-training-clause-from-its-oct-30-business-terms/){:target="_blank" rel="noopener noreferrer"} read the two versions the same day and reached the same conclusion: the edit changes what Meta may do with the content it crawls, not whether it may crawl.

Two stories, one contract. Meta's public account describes a document that PPC Land could not find on the published preview page, which leaves the statement as a description of intent. The safe move is to read the version in your own region and language, save a dated copy, and keep checking until October 30. If you operate in India, the UK, the EU or elsewhere, do not assume the US text is what you are accepting.

---

## Timeline of Events

| Date | What happened |
| --- | --- |
| Early October 2026 | Meta notifies business users of updated terms, including through Meta Business Suite |
| October 8 | Meta announces updates to its Commercial Terms and Self-Serve Ad Terms |
| October 15 | Nieman Lab publishes legal experts' readings of the original clause |
| October 16 | Meta's Andy Stone calls reports that the terms allow scraping news sites "false". Publisher groups condemn the wording |
| October 16 (late) | Meta edits the terms preview and removes "train" from the clause. Nieman Lab, The Verge and TechCrunch report it on Oct. 17 |
| October 18 | PPC Land captures the UK English Commercial Terms preview still showing the training sentence |
| October 19 | Search Engine Journal reports the UK English Self-Serve Ad Terms preview still shows the old wording, while the US English version does not |
| October 20 | Ars Technica reports that Meta did not notify users about the wording change |
| October 28 | Separately, product browsing switches on by default for existing Meta ads |
| October 30 | Updated Commercial Terms take effect |

---

## Does This Change What You Should Do?

Partly. The edit is good news in one respect: Meta has publicly narrowed the stated purpose, which is easier to hold it to than silence. If your main concern was AI training on your content, the risk as written is lower than it was a week ago.

The practical to do list barely changes, for five reasons:

1. The right to crawl is still there.
2. Robots.txt is still not guaranteed in the contract.
3. There is still no opt out other than stopping business use of Meta's products.
4. The new AI features section puts the risk of AI errors on your business, not on Meta.
5. Meta's AI products and its crawlers are changing quickly, and so are its terms.

Treat the edit as a reason to be calmer, not to relax. And read the terms yourself, because Meta did not tell anyone what changed.

---

## Know Your Meta Crawlers Before You Touch robots.txt

In its [crawler documentation](https://developers.facebook.com/documentation/sharing/webmasters/web-crawlers){:target="_blank" rel="noopener noreferrer"}, Meta lists five user agents with different jobs. Understanding them keeps you from blocking the wrong thing.

| Crawler | What Meta says it is for | Respects robots.txt? | What to consider |
| --- | --- | --- | --- |
| Meta-ExternalAgent | Crawls the web for use cases such as training foundation AI models or improving products by indexing content directly | Meta says to block it with a robots.txt rule | This is the one most site owners block if they want to limit AI use |
| Meta-WebIndexer | Improves Meta AI search results. Meta says allowing it helps Meta cite and link to your content in Meta AI answers | Not listed among the exceptions | Allowing it can help visibility in Meta AI. Blocking it can reduce citations |
| Meta-ExternalFetcher | Fetches a link when a user asks for it, for agentic features | May bypass robots.txt because the fetch is user requested | Cannot be fully controlled with robots.txt |
| Meta-ExternalAds | Crawls the web for use cases such as improving advertising and other business-related products and services | Meta says to block it with a robots.txt rule | Relevant if you run Meta ads. Meta does not say what blocking it does to ad results, so watch your numbers after the change |
| FacebookExternalHit | Fetches pages when someone shares a link, to build the preview card | May bypass robots.txt for security or integrity checks | Do not block it, or your link previews on Facebook and Instagram may break |

Crawler names and behavior change, so confirm the current list before editing anything. Meta also notes that robots.txt changes can take up to 24 hours to take effect.

Two data points put the decision in context. A March 2026 sample of 4,047 robots.txt files parsed across Cloudflare's network, [reported by PPC Land](https://ppc.land/meta-externalagent/){:target="_blank" rel="noopener noreferrer"}, found Meta-ExternalAgent named in 3.82% of AI targeting disallow rules, behind GPTBot at 5.52%, CCBot at 5.08%, ClaudeBot at 4.88% and Google-Extended at 4.44%. The token never appeared in an allow rule. Blocking Meta's AI crawler is a mainstream choice, not an extreme one. Separately, an Axios analysis of 102 major U.S. publishers, [reported by Digital Trends](https://www.digitaltrends.com/computing/meta-changed-terms-that-could-have-let-it-use-website-content-for-ai-training/){:target="_blank" rel="noopener noreferrer"}, found that 42% block AI training crawlers, against 25% that block crawlers used for AI search.

---

## Three robots.txt Postures for the Meta Crawling Clause

You do not have to pick the strictest option. Pick the one that matches your goals.

| Posture | Who it suits | What to do | Trade off |
| --- | --- | --- | --- |
| **Open** | Local shops and service businesses that want maximum visibility | Allow Meta's crawlers. Keep your site clean and factual | Content may be used in ways you have limited control over |
| **Balanced** | Most small businesses and startups | Block Meta-ExternalAgent, allow Meta-WebIndexer, leave FacebookExternalHit alone | Keeps citations in Meta AI while limiting broad AI use. Not airtight |
| **Locked down** | Publishers, course creators, research firms, premium content sites | Block AI crawlers in robots.txt, add firewall or CDN bot rules, protect premium content behind login | Lower AI visibility, more maintenance |

A balanced robots.txt setup looks like this:

```
User-agent: meta-externalagent
Disallow: /

User-agent: meta-webindexer
Allow: /
```

Test any change on a staging copy first, and double check that you are not blocking Googlebot or Bingbot by accident. For more detail, read our guide on [how to block AI crawlers](https://f9xr.org/articles/2026/09/04/block-ai-crawlers-on-your-site.html) and our explainer on the [essential txt files for SEO, AEO and GEO](https://f9xr.org/articles/2026/08/08/essential-txt-files-seo-aeo-geo-2026.html).

---

## Your Pre-October 30 Checklist for the Meta Commercial Terms

1. **Find out who accepts terms for your business.** List every admin on your Facebook Page, Instagram account, ad account and Business Manager. Decide who is authorized to make the call, and tell them about the deadline.
2. **Save a dated copy of the terms you are accepting.** Open the Commercial Terms preview in your region and language, and save a PDF or screenshot with the date. Do the same for the Self-Serve Ad Terms if you run ads. Given the regional mismatch reported on October 18 and 19, this small step could matter later.
3. **List every website tied to your Meta presence.** Check your Page website field, Instagram bio link, catalogs, verified domains in Business Manager, and any domain where Meta Pixel or Conversions API is installed. These are the sites that could count as "associated with your products or services."
4. **Decide what content you want protected.** Public product and service pages are one thing. Premium articles, member areas, price lists for private clients, courses and proprietary research are another. Mark which is which.
5. **Choose a crawler posture and update robots.txt.** Use the table above. Remember that robots.txt is a preference signal, not a lock.
6. **Add a second layer for valuable content.** If a page matters enough that losing it would hurt, do not rely on robots.txt alone. Consider CDN or firewall bot rules, login protection and rate limiting. Since the terms mention test credentials, make sure free trials or sign up flows do not expose paid content.
7. **Check your server logs after the change.** Look for the user agents listed above. If Meta-ExternalAgent still appears after 24 to 48 hours, review your rules. If the request pattern looks odd, ask your developer or hosting provider.
8. **Do not break link previews.** Leave FacebookExternalHit alone. Blocking it can ruin the cards that appear when people share your pages.
9. **Diversify your channels.** Build an email list, keep your Google Business Profile strong and invest in a fast website you own. Our guides on [how AI picks local businesses](https://f9xr.org/articles/2026/08/16/how-ai-picks-local-businesses-2026.html) and [steps to make your business site visible to AI](https://f9xr.org/articles/2026/08/14/steps-make-business-site-visible-to-ai.html) are good places to start.
10. **Re-check on October 29.** Meta has already edited the preview once. Read the final text again the day before it takes effect.

---

## Should You Block Meta Completely?

Probably not, for most small businesses.

**Reasons to allow some access:**

- Meta AI is a growing discovery channel, and the Meta-WebIndexer crawler exists so Meta can cite and link to sites in its answers.
- Meta's AI shopping and assistant features are expanding. See [Amazon blocks Meta Muse AI assistant](https://f9xr.org/articles/2026/09/29/amazon-blocks-meta-muse-ai-assistant.html) for how big retailers are reacting.
- Local businesses benefit from being found wherever customers ask questions.

**Reasons to restrict:**

- You publish original content that is your main asset.
- You have contractual or confidentiality obligations to clients.
- You prefer to license your content rather than give it away.

If you are unsure, the balanced posture is a sensible starting point. You can tighten or loosen it later.

---

## What to Watch After October 30

- **Does Meta add a robots.txt commitment to the terms?** That would close the biggest remaining gap.
- **Do regional editions match?** The UK and US wording differences should be resolved.
- **Do publisher groups or regulators push further?** Organizations in the US, UK and EU have already raised concerns.
- **How do Meta's crawler behavior and AI features evolve?** Check your logs and Meta's documentation regularly.
- **Do other platforms follow?** Terms for ChatGPT ads and other AI products are also changing. Our [ChatGPT ads guide](https://f9xr.org/articles/2026/08/22/chatgpt-ads-guide-business-owners.html) covers that side.

---

## How F9XR Team Can Help You

Platform terms will keep changing, and your website is the one asset you fully control. F9XR Team helps business owners, startups and local businesses turn that control into a plan.

- **Bot and crawler audit:** We review your robots.txt, server logs and firewall rules to see who is visiting and what they can reach.
- **Crawler policy setup:** We help you choose between open, balanced and locked down postures, then implement it correctly without breaking SEO or link previews.
- **Meta presence review:** We help you map the domains, pages and catalogs linked to your Meta accounts and tidy up admin access.
- **Website development and redesign:** Fast, secure, mobile friendly sites that make your best content easy to find. See [how to check if your site is agent ready](https://f9xr.org/articles/2026/10/13/is-your-site-agent-ready-cloudflare-free-tool.html).
- **Local SEO and digital presence:** Google Business Profile, local citations and consistent business data, so you are not dependent on any single platform. Read about [structuring local business data for Meta AI indexers](https://f9xr.org/articles/2026/08/19/structuring-local-business-data-meta-ai-indexers.html).
- **Ongoing monitoring:** A monthly check so you hear about changes before they affect you. Start with our [monthly website audit checklist](https://f9xr.org/articles/2026/09/03/monthly-website-audit-checklist.html).

Want a second opinion before October 30? Reach out through our [contact page](https://f9xr.org/pages/contact.html).

---

## Key Takeaways

- Meta removed "train" from the crawling clause and now ties the use of crawled content to advertising and business products, plus integrity and security. The crawl permission itself is unchanged.
- The terms still take effect on October 30, 2026, and the only way to reject them is to stop using Meta's business products.
- AI training is no longer listed, but it is not expressly banned. Legal experts say "develop" and an undefined "business product" leave room for broad interpretation.
- Meta says it respects robots.txt, but the contract does not mention it, and robots.txt is a voluntary signal rather than a legal right.
- Know your crawlers: limit Meta-ExternalAgent, allow Meta-WebIndexer if you want Meta AI citations, and never block FacebookExternalHit, or link previews break. Keep channels you own, and re-read the terms on October 29. They have already changed once, and nobody was told.

---

## Conclusion

Meta listened, and that matters. Removing "train" from the crawling clause narrows the promise Meta is making about what it will do with your content, and it gives businesses a clearer statement to point to. But the structure of the deal has not changed: access stays, robots.txt is not written into the contract, and the only exit is to stop using Meta's business tools.

The sensible response is calm and practical. Save dated copies of the terms for your region, decide which content you want crawlers to reach, set a robots.txt posture that fits your business, protect your most valuable content with a second layer, and keep building channels you own. Then check again on October 29, because this story is still moving.

If you would like help with any part of that, F9XR Team supports businesses with website development, website redesign, local SEO and digital presence solutions, so your online presence stays strong no matter how platform terms shift.

---

*This article summarizes public reporting and Meta's published documentation as of October 20, 2026, including coverage from Search Engine Journal, Nieman Lab, Ars Technica, TechCrunch, The Verge, Digital Trends, SOFX, PPC Land and FourWeekMBA. It is not legal advice. Meta has edited its terms preview more than once, so read the current text and consult a qualified professional for decisions specific to your business.*

*Produced using AI-assisted research and drafting workflows, then reviewed and edited by the F9XR editorial team. See our [Editorial Policy](https://f9xr.org/articles/press/editorial-policy.html) for how we create and verify content.*
