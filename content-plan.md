# F9XR Articles — Content Plan

Strategic content roadmap for the F9XR Articles blog.
Built with Jekyll, hosted on GitHub Pages, auto-deployed on push to `main`.

---

## 5 Content Pillars

### 1. Web Performance & Core Web Vitals
| Topic Area | Example Articles |
|---|---|
| Speed optimization | "How to Pass Core Web Vitals: A Technical Guide", "CLS Fixes for WordPress Sites" |
| Lighthouse audits | "Reading Your Lighthouse Report: What Actually Matters" |
| Hosting & CDN | "How Hosting Choice Affects Time to First Byte" |
| Mobile performance | "Mobile-First Rendering: Why 0.1s Costs You 10% Conversions" |

### 2. AI Integration & Chatbots
| Topic Area | Example Articles |
|---|---|
| GPT chatbot setup | "Building a GPT Chatbot for Your Business: Step-by-Step" |
| Workflow automation | "Automating Lead Capture with AI Workflows" |
| Content generation | "Using AI for Content: Where It Works and Where It Doesn't" |
| Smart scoring | "Behavioral Lead Scoring with Simple AI Pipelines" |

### 3. Local SEO & Google Business Profile
| Topic Area | Example Articles |
|---|---|
| GBP optimization | "Google Business Profile Audit: A 12-Point Checklist" |
| Citation building | "Local Citations: Where to List Your Business and Why" |
| Review strategy | "Building a Review Generation System That Works" |
| Local rank tracking | "How to Track Local Keyword Rankings Without Expensive Tools" |

### 4. Digital Architecture & Full-Stack Dev
| Topic Area | Example Articles |
|---|---|
| Framework choices | "WordPress vs Custom Build: Choosing the Right Stack" |
| Jekyll/static sites | "Why Static Sites Still Win for Content-First Projects" |
| Web security | "Security Headers Every Site Should Have" |
| Monitoring | "Setting Up Uptime Monitoring for Client Sites" |

### 5. Case Studies & Technical Deep-Dives
| Topic Area | Example Articles |
|---|---|
| Before/after | "From 40 to 95 Lighthouse Score: A Real Migration Story" |
| Technique deep-dives | "How We Structured Schema Markup for a Multi-Location Business" |
| Tool comparisons | "Netlify vs Cloudflare Pages vs GitHub Pages for Jekyll" |

---

## SEO Keyword Map

| Pillar | Primary Keyword | Long-Tail Keywords | Intent | Est. Volume |
|---|---|---|---|---|
| Web Performance | Core Web Vitals optimization | "how to fix cumulative layout shift wordpress", "improve LCP score 2026" | Transactional/Informational | Medium |
| AI Integration | AI chatbot for business | "build gpt chatbot for website cost", "ai lead generation automation" | Commercial/Informational | High |
| Local SEO | Google Business Profile optimization | "google business profile audit checklist", "local citations for small business" | Transactional/Informational | Medium |
| Digital Architecture | static site generator | "jekyll vs wordpress for blog 2026", "github pages jekyll setup" | Informational | Low |
| Technical SEO | technical SEO audit | "seo audit checklist 2026", "structured data schema markup guide" | Informational | Medium |

---

## Posting Cadence

- **Target:** 2 posts per month minimum
- **Best days:** Tuesday or Wednesday mornings
- **Seasonal topics:**
  - Q1: New year audits, strategy planning
  - Q2: Seasonal SEO, summer campaign prep
  - Q3: Core Web Vitals, Google algorithm updates
  - Q4: Holiday readiness, year-in-review, SEO audits

---

## Content Funnel

| Stage | Goal | Post Types | CTA |
|---|---|---|---|
| **Top (Awareness)** | Attract new readers | "How to..." guides, explainers, industry stats | Read more articles, subscribe to feed |
| **Middle (Consideration)** | Build authority | Implementation guides, comparisons, best practices | Explore F9XR service pages |
| **Bottom (Conversion)** | Drive inquiries | Case studies, technical deep-dives, ROI analysis | Contact F9XR for consultation |

---

## Draft Calendar Template

| Date | Topic | Pillar | Primary Keyword | Status | Author |
|---|---|---|---|---|---|
| | | | | draft / scheduled / published | |

---

## Pre-Publish Checklist

Copy this into each post task:

- [ ] Title is SEO-optimized (includes primary keyword, under 60 chars)
- [ ] Description is 2-3 sentences, under 160 chars, includes primary keyword
- [ ] Tags array has 3-5 relevant tags
- [ ] Keywords string covers primary + 3-5 related terms
- [ ] FAQ has 3-5 questions derived from content
- [ ] Hero image URL is set (or default og-image.webp)
- [ ] Internal links connect to f9xr.github.io service pages and related posts
- [ ] External links open in new tab with `rel="noopener noreferrer"`
- [ ] Heading hierarchy: H1 (title) → H2 sections → H3 subsections (no jumps)
- [ ] At least 2 H2 headings for Table of Contents to auto-generate
- [ ] Reading time estimate is reasonable (200 words/min)
- [ ] Code blocks have language tags for syntax highlighting
- [ ] No AI writing patterns — run `@skills\avoid-ai-writing`
- [ ] SEO is sound — run `@skills\seo-codebase-audit`
- [ ] File named correctly: `_posts/YYYY-MM-DD-slugified-title.md`
- [ ] Front-matter has no YAML syntax errors
- [ ] Commit message follows convention: `git commit -m "Add article: Title"`
- [ ] Push triggers deploy: `git push origin main`
- [ ] Verify live URL: `https://f9xr.github.io/articles/YYYY/MM/DD/slug/`

---

## F9XR Brand Voice Quick Reference

**Do:**
- Write as a teacher explaining a concept
- Use "you" to center the reader
- Mention F9XR as a real-world example of applying the technique
- Show results with specific numbers when relevant
- Link to F9XR service pages when they genuinely help the reader

**Don't:**
- Start with "At F9XR, we believe..."
- Make unsupported claims about being "the best"
- Pitch services in every paragraph
- Use aggressive CTAs like "hire us now"
- Sound like a sales page disguised as a blog post
