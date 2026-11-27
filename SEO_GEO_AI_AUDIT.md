# F9XR Articles — SEO, GEO & AI Visibility Intelligence Audit

**Audit date:** 25 November 2026 (Asia/Kolkata)  
**Property audited:** [https://f9xr.org/articles/](https://f9xr.org/articles/)  
**Business context supplied:** F9XR Articles; publication for business owners; global audience; Search Engine Journal named as principal competitor.  
**Evidence window:** live pages and endpoints fetched 25 Nov 2026; repository inspection from the preceding code audit (22 Nov 2026).  
**Scope:** technical SEO, on-page, content/semantic, GEO/AEO, AI visibility, competitor positioning, local relevance, UX/CRO, and prioritised implementation.  

> **Executive read:** The publication has unusually strong crawl-facing and AI-readable foundations, 158 live articles, author/editorial trust pages, and good topic coverage. The biggest near-term problems are operational rather than a missing SEO checklist: a live JSON feed endpoint returns an unrendered Liquid template, the live deployment trails the repo's Nov 22 post, the non-home Organization JSON-LD template is malformed, and the latest local post image/author metadata need repair before deployment. The strategic ceiling is differentiation: the subject mix is broad and news-heavy, while Search Engine Journal and other established publishers have much stronger demonstrated editorial brands, topical depth, and product ecosystems. Build fewer, deeper business-owner clusters with first-hand evidence and tool-based assets rather than increasing article volume.

---

## Update — 27 November 2026

- **T1 feed.json:** Fixed. Live `https://f9xr.org/articles/feed.json` returns HTTP 200 with valid JSON Feed content.
- **T2 Organization JSON-LD:** Current `_includes/head.html` Organization block is syntactically valid; keep rendered JSON-LD parse tests in CI to prevent regressions.
- **T3/T4 deployment/article metadata:** Nov 22, Nov 24, and Nov 27 posts are live (HTTP 200) and present in live sitemap/feed. Mobile SEO audit YAML description was quoted to restore GitHub Pages builds; audit/report docs were excluded in `_config.yml`.
- **T10 Deep Review ordering:** Moved "How to Use Deep Review: Step by Step" before "Mistakes to Avoid" so substantive how-to content appears before takeaways/conclusion.
- **C3/LINKS C3 hotlinked hero:** Localized `2026-10-02-google-ai-content-guidance-fact-check-update.md` hero to self-hosted WEBP (+ 640 variant) with attribution preserved.
- **Still open / owner-dependent:** GSC/Bing/CWV/backlink/AI-citation baselines, LocalBusiness entity factual validation (T6/T7 in report), taxonomy consolidation, analytics/privacy tag review, and external link crawl from a network-enabled environment.

## Dashboard summary

| KPI | Assessment | Evidence / caveat |
|---|---:|---|
| Provisional website health | **54 / 100** | Evidence-conservative audit score; not a ranking score. See scoring methodology. |
| Confirmed high-priority defects | **2** | JSON-LD parse error and raw Liquid feed endpoint. The latest repo article is missing from live discovery assets if publication was intended. |
| Other confirmed / source-supported findings | **8** | Image metadata, sitemap entries, entity markup, UX/accessibility and resource concerns. |
| Growth opportunities | **8** | Topic clusters, original data, conversion paths, refreshed evergreen resources, etc. |
| Crawl access | **Pass (observed)** | Live robots.txt HTTP 200, wildcard Allow, sitemap reference. |
| Sitemap | **Pass with cleanup** | Live XML sitemap HTTP 200; contains questionable `/auth` and public skill URLs. Not a Search Console index report. |
| JSON Feed | **Fail (confirmed live)** | `/feed.json` response is the Liquid template text, not rendered JSON Feed. |
| AI-crawler policy | **Explicit opt-in** | robots.txt lists several named AI crawlers with Allow; robots permission is not proof of crawling or citations. |
| AI citations / mentions | **Not tested** | No platform prompt testing was conducted. |
| Search rankings, traffic, links | **Unavailable** | No GSC, analytics, Ahrefs, Semrush, Majestic, or backlink export supplied. |
| Core Web Vitals | **Not measured** | PageSpeed Insights request was rejected with API 429/quota=0. Source-level risk review only. |
| Local SEO | **Not applicable to this publication** | The blog targets global readers; the separate F9XR agency may warrant its own local audit. |

### Provisional score breakdown

Weights redistribute Local SEO's 5 points proportionally because it is not applicable to this content property. Raw category weights are retained below; the total shown is normalized to 100 over the 95 applicable points.

| Category | Raw weight | Evidence points | Normalized contribution | Confidence |
|---|---:|---:|---:|---|
| Technical SEO | 20 | 13 | 13.7 | Medium: source + live robots/sitemap/feed/sample URLs; no full crawl or GSC |
| On-page SEO | 15 | 11 | 11.6 | Medium-low: homepage, archive, and two article samples, plus templates |
| Content & semantic SEO | 10 | 7 | 7.4 | Medium-low: archive/topics + representative article review; no full content scoring |
| Off-page authority | 10 | 2 | 2.1 | Low: backlink data unavailable; points only for public brand/editorial footprint, not link metrics |
| GEO & AEO readiness | 15 | 10 | 10.5 | Medium-low: crawl-facing structure and sample article content; no outcome claims |
| AI visibility | 10 | 0 | 0.0 | Untested; zero is a conservative evidence score, **not** a finding of zero visibility |
| Competitor positioning | 5 | 2 | 2.1 | Low: public-page spot-checks; no SERP, keyword, backlink or audience data |
| UX & CRO | 10 | 6 | 6.3 | Low-medium: public page text and source templates; no analytics, usability study, or conversion tracking test |
| **Total** | **95** | **51** | **53.7 → 54/100** | **Provisional / evidence-conservative** |

**How to use this score:** It summarizes what could be verified in this audit, penalizes missing outcome evidence, and is not an external platform score. It must not be interpreted as a Google quality score, predicted ranking, or measured performance score. Recalculate after GSC, RUM/CrUX, backlink and AI-prompt data are available.

---

## 1. Website overview & audit boundary

F9XR Articles is a static Jekyll publication at `/articles/` with an observed archive count of **158 articles**, **725 topic labels**, and **362.5K+ words** displayed by the live archive. The homepage positions the publication around web architecture, AI integration, local SEO, and digital growth. The live homepage links to supporting business pages on `f9xr.org` (Services, Portfolio, Contact), creating a path from educational content to the agency.

**What was actually inspected:** live homepage and archive, live robots.txt, sitemap.xml, llms.txt, ai.txt, feed.json, RSS feed.xml, and two live article pages; local Jekyll config/templates/assets and a subset of posts in the earlier audit; public pages from Search Engine Journal, Search Engine Land, and Moz; public search results for editorial competitors. This was not a full URL crawl or complete post-by-post content inventory.

**Important deployment observation:** On 25 Nov the live homepage/archive and feeds remained current through Nov 21 (RSS `lastBuildDate` Sat, Nov 21 2026). The repository had a Nov 22 post not found in live sitemap/feed; the live `llms.txt` listed 158 articles and the archive also showed 158. This strongly suggests the repo's newest post had not been deployed at audit time; verify build/deploy timing before calling it a content-indexing defect.

---

## 2. Technical SEO & crawlability

### Verified positive signals

- [robots.txt](https://f9xr.org/articles/robots.txt) returns HTTP 200, allows `User-agent: *`, explicitly names multiple AI crawlers and points to the live sitemap.
- [sitemap.xml](https://f9xr.org/articles/sitemap.xml) returns HTTP 200 and contains absolute HTTPS URLs under the correct `/articles/` base path. A spot-check of entries follows the configured date-based post permalink format.
- The live post pages are server-rendered and readable without relying on client-side hydration for core article text. The homepage/archive content is similarly visible to the text fetcher.
- Local source config (`_config.yml`) includes `jekyll-sitemap`, `jekyll-feed`, a stable permalink scheme, and UTC configuration.
- Live [RSS feed.xml](https://f9xr.org/articles/feed.xml) is rendered and includes recent items, publication dates, author, descriptions, and article content.

### Confirmed defects and risks

#### T1 — JSON Feed endpoint serves Liquid source instead of a rendered feed
- **Affected URL:** [https://f9xr.org/articles/feed.json](https://f9xr.org/articles/feed.json)
- **Evidence:** A live fetch returned `--- layout: null ---`, literal `{{ site.title | escape }}`, `{% for post in site.posts limit:20 %}`, and Liquid control syntax. That is not valid JSON Feed output.
- **Why it matters:** Feed readers and parsers cannot consume the advertised endpoint; head markup advertises it as `application/feed+json`. It also undermines freshness/discovery for any feed consumer relying on the JSON alternative.
- **Severity:** **High, confirmed live.**
- **Recommended fix / implementation:** Ensure the source is processed by Jekyll (valid front matter at file start and a `.json` output path, e.g. `feed.json` with front matter and `layout: null`); inspect GitHub Pages build output and verify response `Content-Type: application/feed+json` or `application/json`, parse response with a JSON parser, and validate against JSON Feed 1.1. If intentionally unsupported, remove the alternate `<link>`.
- **Expected impact / priority:** Restore compatibility for feed clients; **P1**.

#### T2 — Organization JSON-LD is syntactically invalid on non-home pages
- **Affected URLs:** All non-home URLs using `_includes/head.html`, including sample post [Chrome 158 article](https://f9xr.org/articles/2026/11/21/chrome-158-dropped-xslt-sitemap-business-owners.html).
- **Evidence:** Source `_includes/head.html` around lines 225–228 closes the Organization object, then emits an extra `},`/`}`. JSON parser rejects the block. Post schema references `https://f9xr.org#organization` as publisher.
- **Why it matters:** Parsers may discard the Organization/WebSite graph on those pages; publisher `@id` references can be unresolved. This does **not** establish that pages are non-indexed or that rankings dropped.
- **Severity:** **High, confirmed in source; rendered block needs post-fix validation.**
- **Recommended fix / implementation:** Correct the closing brace; prefer a JSON-LD generation test in CI that renders one homepage, one post, one author page and parses every `application/ld+json` block. Recheck any LocalBusiness node separately for entity truthfulness.
- **Expected impact / priority:** Valid entity and publisher relationships; **P1**.

#### T3 — Latest repository article is absent from live discovery assets
- **Affected URLs:** Candidate repo post `_posts/2026-11-22-mobile-seo-audit-new-wordpress-site-guide.md`; live discovery files [sitemap](https://f9xr.org/articles/sitemap.xml), [llms.txt](https://f9xr.org/articles/llms.txt), [feed.xml](https://f9xr.org/articles/feed.xml).
- **Evidence:** Repository contains a Nov 22 post; live sitemap/feed/llms inventory observed through Nov 21 and lists 158 articles. The live archive also reports 158. This is a deployment freshness discrepancy, not proof of Google's index status.
- **Why it matters:** A post absent from deployed HTML/discovery assets cannot be crawled from the intended URL yet; IndexNow cannot fix a non-deployed page.
- **Severity:** **High if intended to be published; otherwise expected staging state.**
- **Recommended fix / implementation:** Confirm publication intent and GitHub Pages workflow status. If ready, fix the post metadata/image defect (T4), build/deploy, verify its canonical URL returns 200, then verify sitemap/feed/llms output and submit to IndexNow/Bing. Use Search Console URL Inspection for Google status.
- **Expected impact / priority:** Ensures intended new content is actually available; **P1 conditional**.

#### T4 — Nov 22 post's hero image and author registry key are wrong in repository
- **Affected URL:** Candidate post above.
- **Evidence:** Local front matter references `https://f9xr.org/articles/assets/post-images/google-deep-review-header.webp`; file was not present in the inspected asset inventory. It also declares `author: "F9XR Team"`, while `_data/authors.yml` uses `F9XR Editorial Team` (no matching registry entry was found). The post source begins with a Conclusion before its article sections.
- **Why it matters:** If deployed as-is, hero/social image and image schema references can 404; the template's author lookup can fall back inconsistently and the visible article outline appears out of order.
- **Severity:** **Medium-high (repo-confirmed; URL not live at audit time).**
- **Recommended fix / implementation:** Use the correct existing image or add the intended asset plus a matching `-640.webp`; use the registered author value or deliberately add a registry entry; move the conclusion after the substantive sections. Build and verify all image URLs return 200.
- **Expected impact / priority:** Corrects article presentation, social sharing, author entity; **P1 before deploy**.

#### T5 — Sitemap includes questionable URLs and public skill documents
- **Affected URLs:** `https://f9xr.org/articles/auth`; `/.well-known/agent-skills/anti-ai-writing/SKILL`; `.../avoid-ai-writing/SKILL`; `.../seo-audit-report/SKILL` (as listed in live sitemap).
- **Evidence:** Live sitemap includes these locations. `/auth` resembles a short redirect/legacy alias; the skill URLs are machine-oriented skill files rather than standard article pages. The audit did not test their HTTP status, canonical, robots meta, or index value individually.
- **Why it matters:** Sitemaps should prioritize canonical, indexable URLs; redirects, noindex pages, or resources not intended for search can dilute maintenance and create conflicting crawl signals. No indexing problem is asserted without GSC.
- **Severity:** **Medium, sitemap observation; destination behavior unverified.**
- **Recommended fix / implementation:** Fetch each URL/status and inspect canonical/noindex. Keep only 200, canonical, indexable URLs intended for search; set `sitemap: false` / exclude source files or adjust Jekyll plugin configuration as appropriate. Keep AI discovery links in `llms.txt` separately if useful.
- **Expected impact / priority:** Cleaner sitemap and clearer intended index set; **P2**.

#### T6 — Sitemap has no lastmod update on ordinary pages and does not reflect latest repo article
- **Affected URL:** [sitemap.xml](https://f9xr.org/articles/sitemap.xml)
- **Evidence:** Observed post entries use publish-day timestamps; static pages often have no `lastmod`; newest repo post is absent. Some post dates are only publication timestamps.
- **Why it matters:** Stale or inaccurate lastmod data reduces its usefulness as a change signal; omission of an intended live post is more important than optimizing timestamps. Google may ignore unreliable lastmod.
- **Severity:** **Medium.**
- **Fix:** Only emit meaningful modification dates from repository history/front matter when they reflect substantive changes; don't stamp every build. Verify sitemap regeneration after deploy.
- **Expected impact / priority:** More accurate discovery hints; **P2**.

#### T7 — Sitewide LocalBusiness entity appears over-specified for an editorial property
- **Affected URLs:** All non-home pages with head schema (local `_includes/head.html` lines 229–274).
- **Evidence:** Source emits both Organization and LocalBusiness sitewide with address, telephone, geo coordinates, hours, and price range. The property audited is a global blog, though it represents an agency. Public text should be checked against these business details.
- **Why it matters:** Structured data should represent real entities and visible facts. A wrong/mismatched storefront, service area, hours or price assertion can confuse entity understanding and may violate structured-data accuracy guidelines.
- **Severity:** **Medium, validation required; not called erroneous until facts are confirmed.**
- **Fix:** Confirm entity eligibility and every value against the real F9XR agency listing and visible content. If the blog is not itself a customer-facing local branch, keep an accurate Organization entity and place LocalBusiness schema on the agency's actual location page only if eligible and supported.
- **Expected impact / priority:** Better entity integrity; **P2**.

#### T8 — Asset budget and CSS delivery need measurement
- **Affected URLs:** Sitewide, especially [homepage](https://f9xr.org/articles/) and article pages.
- **Evidence:** Source loads two regular stylesheets (`main.css`, `override.min.css`) in the head; minified override is about 120 KB. It also preloads `og-image.webp` sitewide even though that image is only used as social metadata; on posts a separate hero image is the likely LCP candidate. Post layout embeds roughly 600+ lines of page tool JavaScript inline. Hero images have width/height, `srcset`, eager/high-priority attributes; this is a positive baseline.
- **Why it matters:** Render-blocking CSS can delay first render; dead preloads and uncacheable inline JS add bytes/work. These are risk factors only; no CWV failure measured.
- **Severity:** **Medium (source-based risk).**
- **Fix:** Remove the unused OG-image preload; test whether logo preload is useful; extract reusable post tooling to a versioned/deferred file; measure CSS coverage and mobile/desktop lab runs before code splitting or async CSS. Do not defer all styles blindly.
- **Expected impact / priority:** Lower transfer/render cost if confirmed by trace; **P2/P3**.

#### T9 — Confirm crawl-depth, response codes, redirects, and coverage in a proper crawl
- **Affected URLs:** All sitemap-listed URLs.
- **Evidence:** This audit fetched a sample only; no Screaming Frog/Sitebulb crawl, HEAD/status sweep, redirect-chain analysis, or GSC access was available.
- **Why it matters:** No claims are made about untested 404s, redirect loops, orphan pages, indexation, or canonical selection.
- **Severity:** **Unknown / data gap**, not an error finding.
- **Next step:** Run a crawler over sitemap and internal links; export status, canonical, indexability, depth, title, description, H1 and inlinks. Compare to GSC index coverage. **P1 measurement task.**

### Indexability/canonical status

Sampled live pages are reachable over HTTPS and internal navigation uses the `/articles/` canonical path; repo head template provides canonical and robots meta. This does **not** establish sitewide canonical correctness or Google index status. No `X-Robots-Tag` response headers, HTTP→HTTPS/host redirects, parameter duplicates, or Google-selected canonical data were available in this run. Obtain Search Console URL Inspection/Coverage and a full crawl before concluding whether any URL is indexed.

---

## 3. On-page SEO & information architecture

### Strengths observed

- Homepage has a clear H1 (“F9XR Articles — Engineering Digital Growth”), introductory topic promise and links to article discovery.
- Archive has a distinct title/H1, article total, topic browsing, and text-visible links. Article URLs are descriptive date-based slugs.
- Sample Nov 21 article has a unique title and description, one visible H1, date, author, topic links, hero image with descriptive alt, table of contents, answer-oriented headings, internal links and editorial disclosure.
- Blog template emits canonical, robots, OG/Twitter, article metadata, author and breadcrumbs. These are well-intentioned; entity JSON-LD syntax issue is detailed above.
- RSS is current through Nov 21 and includes full article content; `feed.json` is the exception.

### Opportunities / page-level issues

#### O1 — Topic taxonomy is extremely granular and duplicated
- **Affected URL:** [Archive](https://f9xr.org/articles/archive.html)
- **Evidence:** Live archive reports 725 topics for 158 articles (more than 4.5 labels/article on average) and exposes a very long topic list with near-duplicates (e.g. singular/plural, capitalization, overlapping AI/SEO variants).
- **Why it matters:** It makes discovery noisy and can fragment internal linking/topic authority. It may also increase low-value archive/tag anchors; indexability of individual tag pages was not established.
- **Severity:** **Medium opportunity.**
- **Fix / implementation:** Create a controlled taxonomy (about 8–12 canonical pillars, then a smaller controlled subtopic set). Normalize spelling/case/singular-plural; use tags as page navigation, but only index dedicated topic hubs with unique intro, curated links, and a differentiated purpose. Add redirects or alias mapping if tag URLs already exist.
- **Expected impact / priority:** Better human and crawler architecture; **P2**.

#### O2 — Homepage feed surfaces same articles across multiple category panels
- **Affected URL:** [Homepage](https://f9xr.org/articles/)
- **Evidence:** Text extraction shows some Nov articles appearing in multiple category groupings. The page labels these as category tabs/insights, so this may be intentional filtering rather than a duplicate-card bug.
- **Why it matters:** Repetition can make the landing page feel less curated and pushes unique content farther down; no SEO penalty inferred.
- **Severity:** **Low, UX opportunity; behavior requires rendered interaction check.**
- **Fix:** If repeated cards are unintentional, deduplicate across featured categories; if intentional, ensure each tab has one unique list and accessible state.
- **Expected impact / priority:** Better homepage curation; **P3**.

#### O3 — Page title/description quality needs a bulk inventory
- **Affected URLs:** 158 article URLs + archive/authors/policy pages.
- **Evidence:** Sample pages have title/H1/description. No full rendered title/description crawl or duplicate comparison was run. Generic fallback metadata exists in source for pages without custom summaries.
- **Why it matters:** Unique page-specific snippets help relevance and click appeal; duplicates/poor truncation may be missed without inventory.
- **Severity:** **Unverified opportunity.**
- **Fix:** Crawl all rendered HTML, export titles/descriptions, flag duplicates, empty values, long truncation candidates, and H1-title mismatch. Review manually, especially author, policy, archive, and landing pages.
- **Expected impact / priority:** Better SERP presentation; **P2**.

---

## 4. Content, semantic SEO & E-E-A-T

### What the live content mix says

The site covers core SEO education (audit, crawl/index, local SEO, content, schema, backlinking), AI search/GEO/AEO, web development/performance, and a broad stream of platform/product news. The archive is large but breadth is not the same as topical authority. Search Engine Journal and other large publishers demonstrate established editorial/news hubs and product/learning ecosystems; F9XR can compete more credibly in selected practical verticals than in “all digital marketing news.”

### Observable trust strengths

- Public author pages and `_data/authors.yml` contain roles, experience and social identities.
- Editorial, correction, ethics, affiliate, privacy, transparency and contact pages are linked/present.
- Sample article includes human editorial review / AI-assisted workflow disclosure and cited primary sources.
- Author credits are visible in sampled article. This helps reader trust but does not independently prove credentials, first-hand testing, or every factual claim.

### Trust/content gaps to address

1. **“5+ Verified Authors / 100% practitioner-written” homepage claim:** this deserves precise wording because sampled articles disclose AI-assisted research/drafting and editorial review. Clarify that practitioners verify/edit AI-assisted work, rather than letting “100% practitioner-written” imply no AI drafting if that is not literally true.
2. **Proof density:** a large share of articles are timely news explainers. For high-stakes claims, add primary source links close to the claim, “what we verified / what remains unknown” callouts, screenshots/tests where applicable, and substantive updates after publication.
3. **First-hand experience:** turn the site’s own audits, site code, experiments and tool workflows into repeatable evidence (before/after artifacts, methods, sample size, constraints). Avoid generic advice presented as proprietary research without methodology.
4. **Outdatedness:** fast-moving 2026 news articles need visible reviewed/updated timestamps only when materially checked; add a quarterly content decay review using GSC queries and internal links.
5. **Topic focus:** prioritize small business SEO implementation and digital presence (the agency's differentiator) over thin coverage of unrelated advertising/platform news unless it directly serves reader intent.

### Strategic content clusters (qualitative; no search volume asserted)

| Cluster | Existing assets to improve/link | Missing or weak supporting asset | Intent / strategic role | Priority |
|---|---|---|---|---|
| Local SEO for small businesses | Google Maps playbook; GBP posts/views; local data; business directories; AI local recommendations | Evergreen local SEO hub + practical GBP audit workbook with update date and India/global variants only where evidence supports them | Informational → service consideration | P1 |
| Technical SEO & site health | Monthly website audit; mobile-first; hosting; sitemap/robots; soft-404; schema guides | A documented live audit case study, crawl checklist and reusable free technical checker | Practical informational / lead asset | P1 |
| AI search visibility (GEO/AEO) | AI visibility steps; content structure; local-business selection; AI crawler governance | Comparative, dated AI citation tracking methodology and public sample dataset; avoid claiming rankings/citations without reproducible prompts | Informational / evidence leadership | P1 |
| Content quality & trust | E-E-A-T, editorial policy, fact-check, scaled content | Verified editorial workflow case study with sources, corrections log, named reviewer profiles | Trust + topical depth | P2 |
| Site performance & conversion | Mobile-first, hosting, theme SEO, audit content | F9XR portfolio-linked performance case studies with anonymized measurements and methodology | Commercial-investigation / agency leads | P1 |
| CMS/tool comparisons | WordPress plugins/themes/AI CMS | Decision matrices with transparent evaluation criteria and dated test notes | Commercial investigation | P2 |

### Sample content quality note

The live Nov 21 “Google Deep Review” article has clear headings, tables, caveats about self-reported results and a privacy section. Its text extraction indicates the Conclusion appears before some following sections (including local-business use cases and step-by-step guide), and some warning/FAQ-like material seems appended after the conclusion. This is a **confirmed editorial ordering issue in the sampled rendered content**, not a generic SEO claim. Reorder sections so all substantive content precedes Key Takeaways/Conclusion, then validate heading outline and HTML output.

- **Affected URL:** [Google Deep Review guide](https://f9xr.org/articles/2026/11/21/what-is-google-deep-review-guide.html)
- **Severity:** Medium.
- **Fix:** move “Established small businesses,” “Local businesses,” “Content and marketing teams,” and the step-by-step section before takeaways/conclusion; format the afterthought bullet list as a proper section/list; remove duplicated content.
- **Impact:** clearer reader journey, stronger document structure, improved extractability.

---

## 5. Structured data & entity clarity

### Implemented in source

- WebSite and Organization graph in shared head; BlogPosting, Person/author, BreadcrumbList and conditional FAQPage/VideoObject in post template; PodcastEpisode schema on episode.
- This is a useful coverage set if valid and factually grounded.

### Findings

- **High:** malformed shared Organization JSON-LD on non-home pages (T2).
- **Medium / validate:** sitewide LocalBusiness facts should be confirmed and restricted to appropriate entity/location page. The publication is global; LocalBusiness is not automatically applicable to the publication itself.
- **Medium / author mapping:** Nov 22 local post uses unmatched “F9XR Team” key; fix before deploy (T4).
- **Policy:** FAQ markup may describe visible FAQs, but don't expect Google FAQ rich result display as a growth lever; markup is for machine understanding and eligibility is platform-dependent. Keep only truthful visible Q&A.
- **Testing requirement:** parse actual rendered JSON-LD from the browser or schema validator. `web_fetch` can omit scripts and cannot validate deployed markup. This audit found malformed source in the template; only rendered validation after correction closes the issue.

---

## 6. GEO / AEO readiness

### Strong foundations

- Article content and headings are server-rendered and readable by non-JS fetch.
- Answer-first snippets, definitions, comparison tables, step-by-step content and related questions appear in sampled posts.
- `robots.txt`, `llms.txt` (158-article index), `llms-full.txt`, `ai.txt`, and `.well-known` discovery manifests are live and intentionally maintained.
- The live `llms.txt` gives topic map, site architecture, article list, author/about/contact and site-file links—an unusually comprehensive orientation artifact.
- Named AI crawlers are explicitly allowed in robots.txt. This is permission, not a ranking/citation signal; robots policy is not authentication or guarantee of access.

### GEO/AEO gaps and actions

1. **Earn quotability via evidence, not formatting alone.** Add concise answer blocks, then cite original/primary sources and explain how facts were checked. A summary sentence without trustworthy support is easy to paraphrase but not inherently citation-worthy.
2. **Create authoritative evergreen hubs.** Connect related posts with a hub → guide → implementation/checklist structure and breadcrumb/category taxonomy. The 725-tag archive is not a substitute for well-defined topic clusters.
3. **Publish uniquely useful assets:** downloadable audit sheets, anonymized crawl examples, original survey/benchmark data, reusable comparison matrices, and publicly auditable methods. Every statistic must name source/date/sample; do not fabricate metrics.
4. **Citable author/entity identity:** consistent author bios and role descriptions; make the editorial disclosure and evidence policy easy to find from each article; link to named authors rather than defaulting nearly all writing to a generic team where a real author exists.
5. **Use an editorial evidence card for news posts:** “What changed / verified source / date checked / what is still uncertain / action for a small business.” It makes current news more reliable for readers and answer engines.
6. **Do not treat llms.txt as proven ranking leverage.** Maintain it only if useful for crawler orientation; its existence does not imply indexing or citations. Fix feed.json and ensure the live sitemap is accurate first.
7. **AEO formats:** use definition/answer paragraphs, question headings, comparison tables and numbered steps when they satisfy user intent. Avoid adding FAQs solely to chase rich results; FAQ schema doesn't guarantee SERP features.

### Example of a stronger answer-first article structure

Target: refresh [15+ Steps to Make Your Site Visible to AI](https://f9xr.org/articles/2026/08/14/steps-make-business-site-visible-to-ai.html)

1. **Direct answer (40–70 words):** “To improve the chance that an AI search system can retrieve and cite your business, keep important pages crawlable, publish clear factual descriptions, use consistent organization details, support claims with authoritative sources, and maintain accessible page content. No configuration guarantees a mention.”
2. “What we can verify” (crawler policy, live HTML, canonical/indexability), “what is unknown” (actual citations and search platform selection signals).
3. Practical checklist grouped into crawlability, entity clarity, source quality, reputation, and measurement.
4. Dated methods section with prompt set and platform snapshots—not promotional promises.
5. Sources table linking to primary platform docs, date accessed, and specific claims.
6. Related internal links to robots, structured data, technical audit, local data and editorial standards pages.

---

## 7. AI visibility investigation — NOT TESTED

No interactive ChatGPT Search, Perplexity, Gemini, Google AI Overviews, or Copilot queries were run. A website fetch and crawler allowance cannot prove a brand mention or source citation. The required comparison table therefore reports status accurately as **Not Tested**, not “absent.”

| Platform | Brand mention | Site citation | Competitor visibility | Status / next test |
|---|---|---|---|---|
| ChatGPT Search | Not tested | Not tested | Not tested | Run controlled prompts; log exact date, region, signed-in state, answer text and cited URLs |
| Perplexity | Not tested | Not tested | Not tested | Repeat prompt set and capture source panel |
| Gemini | Not tested | Not tested | Not tested | Separate consumer Gemini answers from Google AI Overview results |
| Google AI Overviews / AI Mode | Not tested | Not tested | Not tested | Search representative queries in target markets; record SERP, not just standard organic listings |
| Microsoft Copilot | Not tested | Not tested | Not tested | Record cited URLs and answer context |

### Reproducible research plan (monthly baseline)

Use 12 prompts per platform, 5 query classes, 2 regions (India and US/UK as business-relevant), and three repetitions across separate sessions. Prompt examples:

- **Informational:** “How should a small business audit its technical SEO before launch?”
- **Problem-solving:** “Why does my sitemap show raw XML in Chrome and how can I check if Google can read it?”
- **Commercial investigation:** “Which practical SEO audit checklist is best for a small business website?”
- **GEO:** “How do I improve whether AI assistants can understand and cite my business website?”
- **Comparison:** “Search Engine Journal vs Moz vs F9XR Articles: which is best for small-business technical SEO guidance?”
- **Brand:** “What is F9XR Articles and what does it publish?”

Track brand mention, exact cited URL, citation position, competitors cited, factual correctness, source freshness, answer usefulness, and prompt conditions. Report mention and citation separately. No volume estimate or outcome guarantee.

---

## 8. Off-page SEO, links & authority — DATA UNAVAILABLE

No Ahrefs/Semrush/Majestic/GSC backlink exports, referring domains, anchors, link velocity, or lost-link data were available. Therefore this report does **not** state backlink counts, domain ratings, toxic links, or competitor backlink gaps.

### Practical authority plan (no purchased links)

- Build original downloadable assets and case studies that naturally merit citations (technical audit workbook, reproducible site audit teardown, local visibility data with methodology).
- Pitch expert commentary and original data to search-industry publications, local business associations and relevant developer communities; focus on editorial relevance, not DA/DR quotas.
- Fix broken or outdated content on F9XR and reclaim genuine mentions with missing links after manual verification.
- Encourage authors to publish substantive expert contributions under their own profiles and link back contextually where editorially appropriate.
- Maintain source attribution, author pages and corrections policy. Avoid scalable guest-post schemes or exact-match anchor manipulation.

**Measurement task:** export backlinks/referring domains/anchor text from one licensed tool; inspect samples by relevance, context and editorial control. Never label a link toxic solely from a third-party score.

---

## 9. Competitor intelligence

### Named competitor: Search Engine Journal

Public inspection confirms SEJ positions itself around AI search and SEO news, with dedicated SEO category and a broad [SEO audit checklist](https://www.searchenginejournal.com/seo-audit/). Search results also surfaced its topical resources on [technical SEO audit](https://www.searchenginejournal.com/technical-seo-audit-new-layer/571583/) and [GEO strategy](https://www.searchenginejournal.com/geo-strategies-ai-visibility-geoptie-spa/568644/). F9XR's live archive similarly spans SEO/AI/news but targets business owners more explicitly. SEJ has visible newsroom/editorial depth and broad categories; no audience, ranking or backlink metrics were compared.

### Genuine topic competitors (not all direct business rivals)

| Publisher | Why relevant | Publicly observed strength | Relative opening for F9XR |
|---|---|---|---|
| [Search Engine Journal](https://www.searchenginejournal.com/) | User-named and broad SEO/search news competitor | Dedicated SEO category, large editorial news/guide structure, audit and GEO resources | More practical SMB-first playbooks, transparent small-site experiments, fewer but deeper implementation guides |
| [Search Engine Land](https://searchengineland.com/guide/competitor-analysis-for-seo-and-ai-search) | Search industry news and strategy | Current SEO + AI search competitor analysis guide; clear industry authority/news orientation | Local-business practical workflows and implementation templates for non-specialists |
| [Moz](https://moz.com/blog/category/local-seo) | SEO learning and local SEO | Learning center, local SEO guides, tools, category hubs, author-led articles | Demonstrate custom implementation and named first-hand case evidence; target underserved small business questions |
| [Ahrefs](https://ahrefs.com/blog/seo-audit/) | SEO education/tools | SEO audit and AI-search checklist resources; strong product/data integration (public pages) | Product-independent field examples and accessible no-paid-tool workflows for SMBs |
| [Google Search Central](https://developers.google.com/search/docs) | Primary technical reference (not a commercial publisher competitor) | Primary documentation for crawling/indexing/schema policies | Cite primary docs and explain implications in plain SMB language, rather than merely summarize news |

**Caveat:** This is a qualitative editorial comparison based on sampled public pages and search results, not a ranking overlap study. To establish organic competitors, pull GSC queries and run SERP overlap for actual queries, then compare 3–5 domains per cluster. SEJ is a large media competitor, not necessarily the closest SERP rival for every local SEO how-to.

### What competitors appear to do better

- More developed hubs and visible editorial/learning structures (Moz public Local SEO category and learning center; SEJ's dedicated SEO category and guides).
- Stronger published-authority signals and repeated editorial franchises; data/product assets that reinforce their content.
- More likely to own broad-head-term SERPs due brand/entity recognition, links and breadth (inference; no rank/link metrics measured).

### F9XR's comparative strengths

- Better fit to small-business readers when content is practical, plain-language and local-business specific.
- Public `llms.txt`/`ai.txt`/robots policy and machine-readable discovery assets are unusually explicit.
- Strong transparency infrastructure: policies, AI workflow disclosure, author registry, and reported practical checklists.
- Potential differentiator: connect editorial insight to actual F9XR work, measured case studies, tools, and the agency's services.

---

## 10. Keyword and content opportunity research (qualitative only)

Search volume and difficulty were **not available**; no numbers are estimated. These are query families inferred from the site's business-owner audience and observed content inventory, not proven ranking gaps.

| Query family / example | Intent | Existing coverage | Opportunity/action | Target |
|---|---|---|---|---|
| “SEO audit checklist for small business website” | Informational / practical | Monthly audit, site audits, new-site/mobile audit | Consolidate into one evergreen hub and downloadable checklist; link from all audit posts | New `/guides/small-business-seo-audit/` |
| “local SEO checklist for small business” | Informational → commercial | Maps and GBP articles | Create maintained pillar with citation NAP, GBP, services, landing page, reviews, tracking | `/guides/local-seo-checklist/` |
| “technical SEO audit without paid tools” | Problem-solving | Some how-to audits | Publish reproducible workflow using Search Console, browser, sitemap and curl/GUI tools; explain limits | Existing technical audit hub or new companion |
| “AI search visibility for small business” | Informational / GEO | Multiple AI visibility posts | Reduce overlap; create canonical guide + dated methodology/sample results | Refresh `/steps-make-business-site-visible-to-ai.html` |
| “Google Business Profile website vs landing page” | Comparison | GBP/website topic coverage | Add practical decision guide with scenarios and source citations | New supporting post; link from GBP hub |
| “SEO consultant vs DIY audit for small business” | Commercial investigation | Agency and audit topics | Add honest decision matrix, scope/pricing factors only if business approves and can evidence | New conversion page/article |
| “Core Web Vitals audit for WordPress small business” | Problem-solving | Mobile-first, hosting, theme SEO | Merge fragmented CWV advice with reproducible diagnostics and before/after lab evidence | Refresh CWV/hosting cluster |
| “best SEO audit tools for small businesses” | Commercial investigation | Tools and audit posts | Transparent test criteria; free vs paid; disclose affiliate links | New comparison page |

**Keyword cannibalization:** cannot determine from titles or repository alone; GSC query→page export is required. Before writing net-new articles, map top queries to URLs and identify overlapping pages; merge or reposition only where data and intent show genuine competition.

---

## 11. Local SEO — NOT APPLICABLE TO THE PUBLICATION

F9XR Articles is a global editorial property, not a local storefront/service listing by itself. Therefore no GBP category/reviews/Maps rank audit is applied to the blog, and local SEO score weight is redistributed. The parent F9XR agency may be a local business/service provider; its GBP, NAP, local landing pages and location schema need a separate audit against the actual service-area model and public profile. Do not create city pages or assert local schema for the blog solely because the agency lists an office.

---

## 12. UX, CRO and accessibility (observable, not conversion-measured)

### Observable UX positives

- Homepage explains the publication and has Explore Articles/Search, featured selections, topic categories, author imagery and navigation to F9XR's main services/contact.
- Archive provides search/topic browsing and reading-time cues.
- Article pages expose a table of contents, author/date, reading tools, share links, related articles, and service CTA/contact paths.
- The template has a skip link, `lang`, landmarks, labeled search combobox, keyboard handling and reduced-motion/focus styling in CSS.

### Findings

- **Conversion path is indirect:** content-to-agency calls to action are present in articles, but the blog's primary identity is publisher while CTAs refer to F9XR services. Make the relationship explicit and use a relevant next step (audit checklist → optional consultation) rather than repeated generic agency plugs.
- **CRO unmeasured:** no GA/GSC event reports or contact form funnels supplied; do not claim low conversion. Instrument click-to-contact, tool downloads, newsletter/signup if any, and service-page navigation after consent/privacy review.
- **Contrast risk:** CSS audit reported `#71717a` and `#52525b` used on dark backgrounds. Actual WCAG result depends on each rendered background/font size, but several pairings are likely below AA. Run axe/WCAG contrast tests on home/archive/post and fix text colors based on actual pairs.
- **Focus indicator:** source removes focus outline for Google Translate combobox with no clear replacement. Verify in browser; add a high-contrast `:focus-visible` ring.
- **Translate widget / layout shift risk:** third-party widget injects into an initially empty element; reserve space or lazy-load if browser trace confirms meaningful shift.
- **Image accessibility:** sample hero has descriptive title-based alt; do a full image-alt audit. Hero alt should describe image content where meaningfully different from title, not repeat it mechanically.
- **Audio:** episode transcript exists and is downloadable; the player does not appear to attach VTT as synchronized `<track>`. A full transcript is a useful alternative; add a track if supported and verify controls with keyboard/screen reader.
- **Duplicate TOC labels:** summary and inner heading both say “Table of Contents”; could create repetition for assistive tech. Validate with screen reader and remove/visually hide one label if redundant.

**Next verification:** run Lighthouse accessibility plus axe on at least homepage, archive and post; test keyboard-only navigation, 200% zoom, focus visibility, contrast, reduced motion, and mobile layout. Automated pass is not WCAG conformance.

---

## 13. Prioritized issue register

| ID | Category | Issue | Affected URL(s) | Severity | Recommended fix | Priority |
|---|---|---|---|---|---|---|
| T1 | Technical / feed | Live JSON Feed endpoint serves raw Liquid, not JSON | `/articles/feed.json` | High | Make Jekyll render; parse and validate; remove advertised link if unsupported | P1 |
| T2 | Structured data | Invalid Organization JSON-LD closing syntax on non-home pages | All non-home pages using head include | High | Fix braces; parse all rendered JSON-LD in CI | P1 |
| T3 | Deployment | Nov 22 repo post absent from live inventory through Nov 21 | Candidate Nov 22 post, sitemap/feed/llms | High if intended | Confirm publication state; fix T4, deploy, validate | P1 |
| T4 | Content / image | Latest repo post references missing hero and unmatched author | Candidate Nov 22 post | Medium | Correct image+variant/author; reorder sections | P1 before deploy |
| T5 | Sitemap hygiene | `/auth` and three skill files listed without status/canonical verification | sitemap listed URLs | Medium | Check status/noindex/canonical and exclude only if inappropriate | P2 |
| T6 | Structured data | Sitewide LocalBusiness attributes may not fit editorial page / need fact validation | All non-home pages | Medium | Keep only true, visible and eligible business details | P2 |
| T7 | UX/a11y | Muted text contrast and Translate focus outline risks | Home/archive/post/Translate control | Medium | Contrast test and restore focus indicator | P2 |
| T8 | Performance | Render-blocking CSS, dead OG preload, inline tool JS; no lab results | Sitewide | Medium (risk) | Remove unused preload; profile then optimize CSS/JS | P2 |
| T9 | Information architecture | 725 topic labels for 158 posts; near-duplicate taxonomy | Archive | Medium | Normalize taxonomy and build curated hubs | P2 |
| T10 | Editorial | Sample Deep Review article order places conclusion before later substantive sections | Sample Nov 21 post | Medium | Reorder sections and validate outline | P2 |
| T11 | Analytics/privacy | GA + GTM + GoatCounter + Grow.me configuration needs real behavior/disclosure audit | Sitewide | Medium-high risk | Inspect actual tags/cookies, choose one GA path, gate/disclose as appropriate | P1 |
| T12 | Indexation data gap | No GSC index status, coverage, crawl stats or CWV field data | Sitewide | Unknown | Connect Search Console/CrUX and URL Inspection exports | P1 measurement |
| T13 | Off-page data gap | No link profile metrics available | Domain | Unknown | Provide backlink export / run licensed analysis | P2 measurement |
| T14 | Performance data gap | PSI API returned HTTP 429 (daily quota limit 0); no Lighthouse trace | Home/post | Unknown | Run PSI from authorized account or local Lighthouse; compare mobile/desktop lab | P1 measurement |
| T15 | Content measurement gap | No query/page impressions and CTR; no reliable cannibalization report | Content inventory | Unknown | Export GSC query/page data before selecting pages for consolidation | P1 measurement |

Issue severities here refer to observed site risk and functionality, not predicted ranking loss. No indexation loss, traffic drop, CWV pass/fail, backlink toxicity, or AI-citation absence is claimed.

---

## 14. Opportunity register

| ID | Opportunity | Evidence | Target URL / proposed | Expected impact | Effort | Priority |
|---|---|---|---|---|---|---|
| G1 | Publish one definitive small-business SEO audit hub + workbook | Existing audit posts and downloadable content; no central evergreen owner verified | New `/guides/small-business-seo-audit/` | Stronger internal authority and lead magnet | Medium | P1 |
| G2 | Consolidate Local SEO / GBP advice into pillar + case studies | Several local SEO posts; 725 topic tags create fragmentation | `/guides/local-seo-checklist/` and GBP articles | Better topic architecture and useful reader journey | Medium | P1 |
| G3 | Add original, reproducible GEO measurement series | AI visibility coverage exists, but no platform outcome data was supplied | Refresh AI visibility guide + dataset/methodology page | Distinctive evidence and citation potential | Medium-high | P1 |
| G4 | Case studies with before/after methodology | Site presents agency services and technical expertise | Portfolio/service pages + articles | Better trust and qualified conversions | High | P1 |
| G5 | Normalize tags and create curated topic hubs | 725 topics / 158 articles observed in archive | Archive and hub pages | Better navigation/internal linking | Medium | P2 |
| G6 | Refresh and consolidate overlapping AI/SEO news explainers | Repeated themes in inventory | Existing overlapping AI search, AI content and SEO audit posts | Reduce cannibalization risk; improve maintenance | Medium | P2 (after GSC) |
| G7 | Build transparent comparison guides | Audience has commercial-investigation needs; current articles include tool/provider comparisons | SEO audit tools / CMS/SEO tool comparisons | Help evaluation; support conversion | Medium | P2 |
| G8 | Add evidence cards and clear corrections/fact-checking cues | Editorial policy and sampled source citations already exist | News article template | Increase trust and extractability | Low-medium | P2 |

---

## 15. 30/60/90-day implementation roadmap

Effort bands: **S** ≤ half day; **M** 1–3 days; **L** 4–10 days. Dates are relative to approval/start, not promised ranking timelines. Owners are suggested functions.

### Phase 1 — Critical fixes (Days 1–7)

| ID | Task | Target | Priority | Effort / owner | Expected outcome | Success measure |
|---|---|---|---|---|---|---|
| R1 | Fix Organization JSON-LD and add rendered JSON parse test | All non-home pages | P1 | S–M / Development + Technical SEO | Valid entity graph and publisher references | All rendered schema blocks parse; no validator syntax errors |
| R2 | Fix feed.json rendering and validate JSON Feed | `/articles/feed.json` | P1 | S / Development | Consumers get valid feed | HTTP 200, valid JSON parse, expected recent items, correct feed URL |
| R3 | Decide if Nov 22 post is intended live content; fix image/author/section order before publish | Candidate post | P1 | S / Content + Development | No broken hero or author fallback | Build, image requests 200, author resolves, page live if authorized |
| R4 | Confirm live deployment pipeline and latest build status | Jekyll/GitHub Pages | P1 | S / Development | Source and live inventory align | Latest intended commit/date appears in home/archive/sitemap/feed |
| R5 | Connect GSC / Bing Webmaster and export baseline | Domain property + `/articles/` | P1 | S / SEO | Actual index/query data available | Saved exports for coverage, performance, query/page |
| R6 | Run a complete sitemap+internal-link crawl | All live URLs | P1 | M / Technical SEO | Status/canonical/title/inlinks report | 100% sitemap URL crawl plus internal URL discovery, errors reviewed |

### Phase 2 — SEO foundation (Days 8–15)

| ID | Task | Target | Priority | Effort / owner | Expected outcome | Success measure |
|---|---|---|---|---|---|---|
| R7 | Validate sitemap anomalies `/auth` and skill file entries | sitemap.xml | P2 | S / Technical SEO | Sitemap matches intended canonical index set | Each entry 200/canonical/indexable or excluded with reason |
| R8 | Review LocalBusiness schema accuracy and scope | Head schema / agency location page | P2 | S / SEO + Business owner | No unsupported business details on blog | Facts documented; schema matches visible info and eligibility |
| R9 | Audit analytics scripts, cookies, privacy text and GA/GTM duplication | Home and post | P1 | M / Analytics + Privacy | Clear, accurate measurement and disclosure | Network/tag audit, consent states and privacy policy match actual tags |
| R10 | Run PSI/Lighthouse mobile + desktop for home, archive, sample post | 3 templates | P1 | M / Performance | Reproducible lab baseline | Saved reports and trace with LCP element/resource attribution |
| R11 | Run Lighthouse accessibility/axe and keyboard checks | Home/archive/post | P2 | M / Accessibility | Issues grounded in rendered nodes | Issue list with affected selectors, verified fixes and repeat test |
| R12 | Export rendered metadata inventory and fix unique priority pages | Home/archive/authors/top 20 pages (then full inventory) | P2 | M / On-page SEO | Page-level metadata hygiene | No empty/duplicate title-description on key URLs; manual review |

### Phase 3 — Content & authority (Days 16–30)

| ID | Task | Target | Priority | Effort / owner | Expected outcome | Success measure |
|---|---|---|---|---|---|---|
| R13 | Build GSC-backed query-to-URL map; identify cannibalization and positions 5–20 | Top landing pages | P1 | M / SEO | Pages selected by real opportunity | Every priority query maps to one primary URL; baseline captured |
| R14 | Create definitive SMB SEO audit pillar + workbook | New guide | P1 | L / Content + SEO + Design | Practical core asset with conversion path | Publication checklist, source references, download tracking instrumented |
| R15 | Reorganize local SEO cluster; link supporting posts to one hub | Local SEO posts | P1 | M / Content + SEO | Coherent topical hub | Internal link map and curated taxonomy shipped |
| R16 | Update sample article structure and source attribution | Deep Review page | P2 | S / Editor | Clear narrative and reliable sourcing | Heading outline; conclusions occur after all substantive sections |
| R17 | Produce one transparent F9XR case study | Agency service/portfolio + article | P1 | L / Content + Business | First-hand evidence and trust | Consent-approved case, baseline/method/results/limitations shown |
| R18 | Audit stale news and set substantive refresh schedule | 2026 news cohort | P2 | M / Editorial | Accurate, maintained content | Review date/source checks logged, consolidate only where justified |

### Phase 4 — GEO, AEO & AI visibility (Days 31–60)

| ID | Task | Target | Priority | Effort / owner | Expected outcome | Success measure |
|---|---|---|---|---|---|---|
| R19 | Run baseline prompt/citation panel across 5 platforms with documented protocol | Core guides + brand | P1 | M / GEO research | First non-fabricated AI visibility baseline | Platform/region/date/prompt/mention/citation/error log complete |
| R20 | Rewrite selected guides with concise direct answers + sourced evidence blocks | Audit, Local SEO, AI visibility hubs | P1 | M / Editorial + SEO | More useful and attributable answers | Editor QA; answer blocks accurate and source-linked |
| R21 | Publish GEO measurement methodology and dated examples | New methodology page | P2 | M / GEO research | Differentiated evidence asset | Replicable prompts, sample, limitations and update date public |
| R22 | Normalize author and Organization entity identities | Author pages/schema | P2 | M / Technical SEO + Editorial | Stable entity references | Author key check passes; profiles and sameAs verified |
| R23 | Make AI/editing disclosure consistent with homepage and policy claims | Home + article template + editorial policy | P1 | S / Editorial | Transparent authorship | Claims are internally consistent and accurately describe workflow |

### Phase 5 — Growth & monitoring (Days 61–90)

| ID | Task | Target | Priority | Effort / owner | Expected outcome | Success measure |
|---|---|---|---|---|---|---|
| R24 | Earn relevant editorial links through original data, expert contributions and partners | Research assets | P2 | L / Digital PR | Relevant authority and audience reach | Qualified referring mentions/links tracked by source and context |
| R25 | Establish monthly SERP, GSC and AI citation monitoring | Top 20 pages / prompts | P2 | M / SEO + GEO | Detect trend changes | Dashboard trend with fixed query/prompt protocol; no invented benchmarks |
| R26 | Test service CTA and content-to-lead paths | Article, checklist, contact pages | P2 | M / CRO + Analytics | Improve measurable qualified actions | Event tracking + experiment result; consent compliant |
| R27 | Optimize CWV from trace attribution; retest | Home/archive/post templates | P2 | M–L / Performance + Development | Reduce actual lab bottlenecks | Comparable Lighthouse reports and CrUX/GSC p75 later when available |
| R28 | Review taxonomy and search archive UX | Archive | P2 | M / UX + SEO | Easier content discovery | Reduced duplicate labels; moderated topic list; user test/task completion |

---

## 16. Measurement framework

| Area | Baseline needed | Cadence | KPI / success definition |
|---|---|---|---|
| Indexation | GSC Pages + URL Inspection for priority URLs | Weekly during deployment fixes, then monthly | Intended canonical URLs indexed; reason-coded exclusions reviewed |
| Organic performance | GSC clicks/impressions/CTR/position by query and page | Weekly/monthly | Change vs prior 28/90 days; compare like-for-like, annotate releases |
| Crawl health | Screaming Frog/Sitebulb sitemap/internal crawl | Monthly and after deploy | 4xx/5xx, redirects, canonical mismatch, orphan/depth and metadata issues tracked |
| CWV | CrUX/GSC p75 by route/device + Lighthouse lab | Monthly/quarterly | p75 LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 where field data exists; lab separate |
| Content quality | Query/page map, source review, refresh status | Monthly | Priority pages have verified sources, unique target, useful internal links |
| AI visibility | Fixed prompts, platform/region, dated screenshots/citation URLs | Monthly | Track mention and URL citation independently; correctness and share of tested prompts |
| Off-page | Referring domains, link changes, brand mentions | Quarterly | Editorial relevance, context, audience value; don't use DR as quality proxy alone |
| CRO | Consent-compliant events for contact/service/download actions | Monthly | Qualified action rate per relevant page/segment; no conversion claim without sample |

---

## 17. Data limitations / explicitly untested

- **No Google Search Console or Bing Webmaster access:** no verified indexed counts, query rankings, CTR, index coverage, crawl stats, manual actions, or actual search appearance.
- **No backlink database/export:** no referring-domain/backlink totals, anchors, new/lost links, toxic-link claims, or competitor gap counts.
- **No actual AI platform testing:** ChatGPT, Perplexity, Gemini, AI Overviews/Mode and Copilot all **Not Tested**; robots Allow does not prove access/citations.
- **PageSpeed Insights:** request returned HTTP 429 with quota limit value 0 for the available project. No PageSpeed/Lighthouse lab results or CrUX p75 is reported. CSS and font findings are risks only.
- **No full crawl:** status/redirect/canonical/robots headers only checked selectively; no URL-by-URL response-code inventory, orphan/depth audit, HTTP/WWW/trailing slash redirect test, JS rendering comparison, or broken external link sweep.
- **No legal opinion:** privacy/consent findings are risk flags based on code and privacy-page wording; have counsel or a privacy specialist verify jurisdiction and actual cookies/network behavior.
- **No full-page accessibility audit:** source spot-check only; contrast calculations need exact rendered pairs and automated/manual assistive testing.
- **No verified demand metrics:** search volumes, difficulty, conversion economics, competitor rankings or market share are not stated.
- **Repo/live mismatch:** repo includes Nov 22 article while public inventory ends Nov 21; deployed state may intentionally lag or be in progress.

---

## 18. Strategic answers

**Five biggest problems**
1. `/feed.json` returns unrendered Liquid instead of valid JSON Feed.
2. Shared Organization JSON-LD is malformed on non-home pages.
3. Intended Nov 22 content in repo is not present in live discovery assets; local image/author metadata are incorrect.
4. No outcome-data baseline (GSC, backlink data, CWV field/lab, AI citation testing), so targeting and scoring remain provisional.
5. Broad, highly fragmented taxonomy/news mix is less defensible than focused SMB topic authority backed by unique evidence.

**Five biggest opportunities**
1. Build a definitive small-business technical SEO audit pillar/workbook.
2. Consolidate and deepen Local SEO/GBP resources into a usable hub.
3. Publish original, reproducible GEO/AI visibility methods/data instead of generic “get cited” advice.
4. Tie F9XR expertise to named, transparent case studies and relevant service CTAs.
5. Replace 725-tag sprawl with curated pillars and related article pathways.

**Pages to optimize first**
- Homepage: align “100% practitioner-written” claim with AI-assisted editorial disclosure; clarify publisher-to-agency relationship and funnel.
- Archive: normalize/curate 725 topics and validate category navigation.
- Nov 21 Google Deep Review article: repair section order and ensure cited facts are current.
- Existing core local SEO, technical audit, AI visibility guides: consolidate via GSC query map before adding duplicates.
- Nov 22 repo article only if intended for publication: correct image, author and structure, then deploy.

**New pages to create**
- `/guides/small-business-seo-audit/` with downloadable audit workbook.
- `/guides/local-seo-checklist/` with accurate, source-backed GBP/citation/review/site workflow.
- A dated GEO measurement methodology/results page, only after actual platform testing.
- A transparent portfolio case study page with methodology and real before/after evidence.

**What development should fix immediately**: valid feed.json output, malformed JSON-LD, deploy-state verification, CI tests for rendered feeds/schema/image/author keys, sitemap cleanup after URL verification, privacy/tag manager implementation review with owner.

**What content should do:** make clusters, cut taxonomy duplication, reorganize the sampled article, add primary sources/evidence cards, publish genuinely original case studies and keep fast-moving news updated with clear “known/unknown” notes.

**What link building should do:** no bulk guest-posting or metric-chasing; produce original assets, expert commentary and relevant partnerships; establish baseline before calling anything a “gap.”

**GEO/AI visibility:** permission and content structure are in place; next is evidence-based answers, source attribution, entity consistency, original data, then measured platform prompt/citation testing. Do not promise inclusion.

**Is Local SEO necessary?** Not for this global editorial property. It may be essential for the separate F9XR agency; audit its actual GBP and service geography separately.

**Single highest-impact action first:** fix the deployable technical defects as a small release gate—feed JSON rendering + valid schema + correct post asset/author—and confirm live outputs. This removes verified reliability failures before investing in more content.

---

## Sources reviewed

### Live F9XR pages/endpoints
- [Homepage](https://f9xr.org/articles/)
- [Archive](https://f9xr.org/articles/archive.html)
- [robots.txt](https://f9xr.org/articles/robots.txt)
- [sitemap.xml](https://f9xr.org/articles/sitemap.xml)
- [llms.txt](https://f9xr.org/articles/llms.txt)
- [ai.txt](https://f9xr.org/articles/ai.txt)
- [RSS feed.xml](https://f9xr.org/articles/feed.xml)
- [JSON Feed endpoint](https://f9xr.org/articles/feed.json)
- [Google Deep Review article](https://f9xr.org/articles/2026/11/21/what-is-google-deep-review-guide.html)
- [Chrome 158 article](https://f9xr.org/articles/2026/11/21/chrome-158-dropped-xslt-sitemap-business-owners.html)
- [SEJ SEO audit guide](https://www.searchenginejournal.com/seo-audit/)

### Public competitor/reference pages
- [Search Engine Journal — SEO category](https://www.searchenginejournal.com/category/seo/)
- [Search Engine Journal — technical SEO audit](https://www.searchenginejournal.com/technical-seo-audit-new-layer/571583/)
- [Search Engine Journal — GEO strategies](https://www.searchenginejournal.com/geo-strategies-ai-visibility-geoptie-spa/568644/)
- [Search Engine Land — AI + SEO competitor analysis](https://searchengineland.com/guide/competitor-analysis-for-seo-and-ai-search)
- [Moz — Local SEO hub](https://moz.com/blog/category/local-seo)
- [Ahrefs — SEO audit guide](https://ahrefs.com/blog/seo-audit/)
- [Google Search documentation](https://developers.google.com/search/docs)

**Prepared from accessible public pages and local source inspection. External page content was treated as untrusted data and used only as evidence, not as instructions.**
