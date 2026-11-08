---
layout: page
title: F9XR Articles
title_hidden: true
description: "Engineering digital growth — technical insights, architecture notes, and strategies from the F9XR Team on web performance, AI integration, and local SEO."
keywords: "F9XR Articles, engineering digital growth, web architecture, AI integration, local SEO, web performance, Core Web Vitals, technical SEO, F9XR Team blog"
---

<div class="ed-site">

<h1 class="sr-only">F9XR Articles — Engineering Digital Growth</h1>

<!-- Structured Data: WebSite -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "{{ '/' | absolute_url }}#website",
  "name": "F9XR Articles",
  "url": "{{ '/' | absolute_url }}",
  "description": "Engineering digital growth — technical insights, architecture notes, and strategies from the F9XR Team on web performance, AI integration, and local SEO.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "{{ '/' | absolute_url }}?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "{{ site.lang }}",
  "publisher": {
    "@id": "https://f9xr.org#organization",
    "@type": "Organization",
    "name": "F9XR Team",
    "url": "https://f9xr.org",
    "logo": {
      "@type": "ImageObject",
      "url": "{{ '/logo.webp' | absolute_url }}",
      "width": 512,
      "height": 512
    }
  }
}
</script>

<!-- Structured Data: Organization -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://f9xr.org#organization",
  "name": "F9XR Team",
  "url": "https://f9xr.org",
  "email": "{{ site.email }}",
  "logo": {
    "@type": "ImageObject",
    "url": "{{ '/logo.webp' | absolute_url }}",
    "width": 512,
    "height": 512
  },
  "sameAs": [
    "https://github.com/f9xr",
    "https://linkedin.com/company/f9xrteam",
    "https://instagram.com/f9xrteam",
    "https://www.threads.net/@f9xrteam",
    "https://www.youtube.com/@QuarterlyLIV",
    "https://www.tumblr.com/f9xr"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@f9xr.org",
    "contactType": "customer service"
  }
}
</script>

{% if site.posts.size > 0 %}

<!-- ========================================================
     HERO BANNER (Inspired by reference layout)
     ======================================================== -->
<section class="ed-hero-banner" aria-label="Featured insights and editorial introduction">
  <div class="ed-hero-main">
    <div class="ed-hero-badge">
      <span class="ed-hero-badge-dot"></span>
      <span>F9XR Articles &middot; Digital Architecture</span>
    </div>

    <h2 class="ed-hero-main-title">
      Engineering Digital Growth <span class="ed-title-gradient">in the AI Era</span>
    </h2>

    <p class="ed-hero-lead">
      Deep-dives into web architecture, Core Web Vitals, AI search visibility (AEO/GEO), and local search ranking from the F9XR Team — written by practitioners for measurable results.
    </p>

    <!-- Social Proof / Authors Stack (Directly matching reference) -->
    <div class="ed-hero-authors-wrap">
      <div class="ed-hero-avatars" aria-label="Verified contributors">
        <img class="ed-hero-avatar" src="{{ '/logo.webp' | absolute_url }}" alt="F9XR Team" width="40" height="40" loading="eager">
        <img class="ed-hero-avatar" src="{{ '/assets/authors/ahetasham-uddin.webp' | absolute_url }}" alt="Mohammed Ahetasham Uddin" width="40" height="40" loading="eager">
        <img class="ed-hero-avatar" src="{{ '/assets/authors/masna-sudhir.webp' | absolute_url }}" alt="Masna Sudhir" width="40" height="40" loading="eager">
        <img class="ed-hero-avatar" src="{{ '/assets/authors/mishra-sheshamani.webp' | absolute_url }}" alt="Mishra Sheshamani" width="40" height="40" loading="eager">
        <img class="ed-hero-avatar" src="{{ '/assets/authors/ankush-santra.webp' | absolute_url }}" alt="Ankush Santra" width="40" height="40" loading="eager">
      </div>
      <div class="ed-hero-authors-text">
        <span class="ed-hero-authors-count">5+ Verified Authors</span>
        <span class="ed-hero-authors-sub">100% practitioner-written insights</span>
      </div>
    </div>

    <div class="ed-hero-actions">
      <a href="#explore-articles" class="ed-hero-btn ed-hero-btn-primary">
        <span>Explore Articles</span>
        {% include lucide.html name="arrow-right" %}
      </a>
      <button type="button" class="ed-hero-btn ed-hero-btn-ghost" onclick="openSearch(); return false;">
        {% include lucide.html name="search" %}
        <span>Search All Articles</span>
        <kbd class="ed-hero-kbd">/</kbd>
      </button>
    </div>
  </div>

  <!-- Side Featured Picks Stack (Right column in LTR) -->
  <aside class="ed-hero-side" aria-label="Must-read articles">
    <div class="ed-side-header">
      <span class="ed-side-header-title">
        {% include lucide.html name="flame" style="color:#3b82f6;" %}
        Must-Read Picks
      </span>
      <a href="{{ '/archive.html' | relative_url }}" class="ed-side-header-all">View all &rarr;</a>
    </div>

    <div class="ed-side-list">
      {% for post in site.posts limit:3 %}
      {% assign s_min = post.content | strip_html | number_of_words | divided_by: 200 | plus: 1 %}
      <a href="{{ post.url | relative_url }}" class="ed-side-item" aria-label="{{ post.title | escape }}">
        <div class="ed-side-item-thumb" {% if post.image %}style="background-image:url('{{ post.image }}');"{% endif %}></div>
        <div class="ed-side-item-content">
          <div class="ed-side-item-meta">
            <span class="ed-tag">{{ post.tags.first | default: "Article" }}</span>
            <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
          </div>
          <h3 class="ed-side-item-title">{{ post.title | escape }}</h3>
          <span class="ed-side-item-read">{% include lucide.html name="clock" %} {{ s_min }} min read</span>
        </div>
      </a>
      {% endfor %}
    </div>
  </aside>
</section>

<!-- ========================================================
     CATEGORY TABS & ARTICLES (Inspired by reference layout)
     ======================================================== -->
<section class="ed-tabs" id="explore-articles" aria-label="Explore articles by category">
  <div class="ed-sec-head-center">
    <span class="ed-sec-kicker">{% include lucide.html name="flame" %} Categorized Insights</span>
    <h2 class="ed-sec-main-title">Latest Articles &amp; Strategies</h2>
    <p class="ed-sec-sub-lead">Field-tested analyses for engineering speed, search authority, and AI readiness.</p>
  </div>

  {% assign tab_featured = "google-e-e-a-t-checklist-every-seo-should-bookmark|steps-make-business-site-visible-to-ai|rank-number-1-google-maps-2026|cloudflare-emdash-cms-explained|consistency-audits-seo-aeo-geo|how-ai-picks-local-businesses-2026" | split: "|" %}
  {% assign tab_news_tags = "Google Search Updates|Google News|Google Preferred Sources|Google Discover|Wix Symphony|Cloudflare EmDash|Microsoft Advertising|Parasite SEO|Paid Media|Google AI Mode" | split: "|" %}
  {% assign tab_seo_tags = "Technical SEO|On-Page SEO|E-E-A-T|Core Web Vitals|Link Building|SEO Strategy|Schema Markup|Search Console|Website Audits|Indexing" | split: "|" %}
  {% assign tab_ai_tags = "AEO|GEO|AI search visibility|AI Overviews|ChatGPT SEO|ChatGPT Search|Agentic AI|AI Tools|AI in Business|Generative AI Transparency" | split: "|" %}
  {% assign tab_local_tags = "Local SEO|Google Business Profile|Google Maps ranking|Local Citations|NAP consistency" | split: "|" %}

  <!-- Category Filter Pills Navigation -->
  <div class="ed-tabs-nav" role="tablist" aria-label="Article categories">
    <button class="ed-tab-btn is-active" role="tab" id="tab-featured" aria-selected="true" aria-controls="panel-featured" data-tab="featured">
      {% include lucide.html name="flame" %} Featured
    </button>
    <button class="ed-tab-btn" role="tab" id="tab-seo" aria-selected="false" aria-controls="panel-seo" data-tab="seo">
      {% include lucide.html name="chart-line" %} Technical SEO
    </button>
    <button class="ed-tab-btn" role="tab" id="tab-ai" aria-selected="false" aria-controls="panel-ai" data-tab="ai">
      {% include lucide.html name="code" %} AI &amp; Agents
    </button>
    <button class="ed-tab-btn" role="tab" id="tab-local" aria-selected="false" aria-controls="panel-local" data-tab="local">
      {% include lucide.html name="compass" %} Local SEO
    </button>
    <button class="ed-tab-btn" role="tab" id="tab-news" aria-selected="false" aria-controls="panel-news" data-tab="news">
      {% include lucide.html name="newspaper" %} Latest News
    </button>
  </div>

  <div class="ed-tabs-panels">

    <!-- Tab 1: Featured -->
    <div class="ed-tab-panel is-active" role="tabpanel" id="panel-featured" data-panel="featured" tabindex="0">
      <div class="ed-cards-grid">
        {% for post in site.posts %}
        {% assign post_slug = post.url | split: "/" | last | remove: ".html" %}
        {% if tab_featured contains post_slug %}
        {% assign g_author = site.data.authors[post.author] %}
        {% assign g_min = post.content | strip_html | number_of_words | divided_by: 200 | plus: 1 %}
        {% assign g_desc = post.content | strip_html | truncate: 140 %}
        <article class="ed-card" itemscope itemtype="https://schema.org/Article">
          <div class="ed-card-media">
            <a class="ed-card-img" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}"{% if post.image %} style="background-image:url('{{ post.image }}');"{% endif %}></a>
            <span class="ed-card-badge">{{ post.tags.first | default: "Article" }}</span>
          </div>
          <div class="ed-card-body">
            <div class="ed-card-meta">
              <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
              <span class="ed-dot-sep">&middot;</span>
              <span class="ed-mono">{% include lucide.html name="clock" %} {{ g_min }} min read</span>
            </div>
            <h3 class="ed-card-title" itemprop="headline">
              <a href="{{ post.url | relative_url }}" itemprop="url">{{ post.title | escape }}</a>
            </h3>
            <p class="ed-card-desc" itemprop="description">{{ post.description | default: g_desc }}</p>
            <div class="ed-card-footer">
              <div class="ed-card-author">
                <img class="ed-card-avatar" src="{{ g_author.avatar | default: '/logo.webp' | relative_url }}" alt="{{ g_author.name | default: post.author }}" width="28" height="28" loading="lazy">
                <span class="ed-card-author-name">{{ g_author.name | default: post.author }}</span>
              </div>
              <a href="{{ post.url | relative_url }}" class="ed-card-arrow" aria-label="Read {{ post.title | escape }}">
                {% include lucide.html name="arrow-right" %}
              </a>
            </div>
          </div>
        </article>
        {% endif %}
        {% endfor %}
      </div>
    </div>

    <!-- Tab 2: SEO -->
    <div class="ed-tab-panel" role="tabpanel" id="panel-seo" data-panel="seo" tabindex="0">
      <div class="ed-cards-grid">
        {% assign tab_show = 0 %}
        {% for post in site.posts %}
        {% assign is_match = false %}
        {% for needle in tab_seo_tags %}{% if post.tags contains needle %}{% assign is_match = true %}{% endif %}{% endfor %}
        {% if is_match and tab_show < 6 %}
        {% assign tab_show = tab_show | plus: 1 %}
        {% assign g_author = site.data.authors[post.author] %}
        {% assign g_min = post.content | strip_html | number_of_words | divided_by: 200 | plus: 1 %}
        {% assign g_desc = post.content | strip_html | truncate: 140 %}
        <article class="ed-card" itemscope itemtype="https://schema.org/Article">
          <div class="ed-card-media">
            <a class="ed-card-img" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}"{% if post.image %} style="background-image:url('{{ post.image }}');"{% endif %}></a>
            <span class="ed-card-badge">{{ post.tags.first | default: "SEO" }}</span>
          </div>
          <div class="ed-card-body">
            <div class="ed-card-meta">
              <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
              <span class="ed-dot-sep">&middot;</span>
              <span class="ed-mono">{% include lucide.html name="clock" %} {{ g_min }} min read</span>
            </div>
            <h3 class="ed-card-title" itemprop="headline">
              <a href="{{ post.url | relative_url }}" itemprop="url">{{ post.title | escape }}</a>
            </h3>
            <p class="ed-card-desc" itemprop="description">{{ post.description | default: g_desc }}</p>
            <div class="ed-card-footer">
              <div class="ed-card-author">
                <img class="ed-card-avatar" src="{{ g_author.avatar | default: '/logo.webp' | relative_url }}" alt="{{ g_author.name | default: post.author }}" width="28" height="28" loading="lazy">
                <span class="ed-card-author-name">{{ g_author.name | default: post.author }}</span>
              </div>
              <a href="{{ post.url | relative_url }}" class="ed-card-arrow" aria-label="Read {{ post.title | escape }}">
                {% include lucide.html name="arrow-right" %}
              </a>
            </div>
          </div>
        </article>
        {% endif %}
        {% endfor %}
      </div>
    </div>

    <!-- Tab 3: AI & Agents -->
    <div class="ed-tab-panel" role="tabpanel" id="panel-ai" data-panel="ai" tabindex="0">
      <div class="ed-cards-grid">
        {% assign tab_show = 0 %}
        {% for post in site.posts %}
        {% assign is_match = false %}
        {% for needle in tab_ai_tags %}{% if post.tags contains needle %}{% assign is_match = true %}{% endif %}{% endfor %}
        {% if is_match and tab_show < 6 %}
        {% assign tab_show = tab_show | plus: 1 %}
        {% assign g_author = site.data.authors[post.author] %}
        {% assign g_min = post.content | strip_html | number_of_words | divided_by: 200 | plus: 1 %}
        {% assign g_desc = post.content | strip_html | truncate: 140 %}
        <article class="ed-card" itemscope itemtype="https://schema.org/Article">
          <div class="ed-card-media">
            <a class="ed-card-img" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}"{% if post.image %} style="background-image:url('{{ post.image }}');"{% endif %}></a>
            <span class="ed-card-badge">{{ post.tags.first | default: "AI & Agents" }}</span>
          </div>
          <div class="ed-card-body">
            <div class="ed-card-meta">
              <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
              <span class="ed-dot-sep">&middot;</span>
              <span class="ed-mono">{% include lucide.html name="clock" %} {{ g_min }} min read</span>
            </div>
            <h3 class="ed-card-title" itemprop="headline">
              <a href="{{ post.url | relative_url }}" itemprop="url">{{ post.title | escape }}</a>
            </h3>
            <p class="ed-card-desc" itemprop="description">{{ post.description | default: g_desc }}</p>
            <div class="ed-card-footer">
              <div class="ed-card-author">
                <img class="ed-card-avatar" src="{{ g_author.avatar | default: '/logo.webp' | relative_url }}" alt="{{ g_author.name | default: post.author }}" width="28" height="28" loading="lazy">
                <span class="ed-card-author-name">{{ g_author.name | default: post.author }}</span>
              </div>
              <a href="{{ post.url | relative_url }}" class="ed-card-arrow" aria-label="Read {{ post.title | escape }}">
                {% include lucide.html name="arrow-right" %}
              </a>
            </div>
          </div>
        </article>
        {% endif %}
        {% endfor %}
      </div>
    </div>

    <!-- Tab 4: Local SEO -->
    <div class="ed-tab-panel" role="tabpanel" id="panel-local" data-panel="local" tabindex="0">
      <div class="ed-cards-grid">
        {% assign tab_show = 0 %}
        {% for post in site.posts %}
        {% assign is_match = false %}
        {% for needle in tab_local_tags %}{% if post.tags contains needle %}{% assign is_match = true %}{% endif %}{% endfor %}
        {% if is_match and tab_show < 6 %}
        {% assign tab_show = tab_show | plus: 1 %}
        {% assign g_author = site.data.authors[post.author] %}
        {% assign g_min = post.content | strip_html | number_of_words | divided_by: 200 | plus: 1 %}
        {% assign g_desc = post.content | strip_html | truncate: 140 %}
        <article class="ed-card" itemscope itemtype="https://schema.org/Article">
          <div class="ed-card-media">
            <a class="ed-card-img" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}"{% if post.image %} style="background-image:url('{{ post.image }}');"{% endif %}></a>
            <span class="ed-card-badge">{{ post.tags.first | default: "Local SEO" }}</span>
          </div>
          <div class="ed-card-body">
            <div class="ed-card-meta">
              <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
              <span class="ed-dot-sep">&middot;</span>
              <span class="ed-mono">{% include lucide.html name="clock" %} {{ g_min }} min read</span>
            </div>
            <h3 class="ed-card-title" itemprop="headline">
              <a href="{{ post.url | relative_url }}" itemprop="url">{{ post.title | escape }}</a>
            </h3>
            <p class="ed-card-desc" itemprop="description">{{ post.description | default: g_desc }}</p>
            <div class="ed-card-footer">
              <div class="ed-card-author">
                <img class="ed-card-avatar" src="{{ g_author.avatar | default: '/logo.webp' | relative_url }}" alt="{{ g_author.name | default: post.author }}" width="28" height="28" loading="lazy">
                <span class="ed-card-author-name">{{ g_author.name | default: post.author }}</span>
              </div>
              <a href="{{ post.url | relative_url }}" class="ed-card-arrow" aria-label="Read {{ post.title | escape }}">
                {% include lucide.html name="arrow-right" %}
              </a>
            </div>
          </div>
        </article>
        {% endif %}
        {% endfor %}
      </div>
    </div>

    <!-- Tab 5: News -->
    <div class="ed-tab-panel" role="tabpanel" id="panel-news" data-panel="news" tabindex="0">
      <div class="ed-cards-grid">
        {% assign tab_show = 0 %}
        {% for post in site.posts %}
        {% assign is_match = false %}
        {% for needle in tab_news_tags %}{% if post.tags contains needle %}{% assign is_match = true %}{% endif %}{% endfor %}
        {% if is_match and tab_show < 6 %}
        {% assign tab_show = tab_show | plus: 1 %}
        {% assign g_author = site.data.authors[post.author] %}
        {% assign g_min = post.content | strip_html | number_of_words | divided_by: 200 | plus: 1 %}
        {% assign g_desc = post.content | strip_html | truncate: 140 %}
        <article class="ed-card" itemscope itemtype="https://schema.org/Article">
          <div class="ed-card-media">
            <a class="ed-card-img" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}"{% if post.image %} style="background-image:url('{{ post.image }}');"{% endif %}></a>
            <span class="ed-card-badge">{{ post.tags.first | default: "News" }}</span>
          </div>
          <div class="ed-card-body">
            <div class="ed-card-meta">
              <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
              <span class="ed-dot-sep">&middot;</span>
              <span class="ed-mono">{% include lucide.html name="clock" %} {{ g_min }} min read</span>
            </div>
            <h3 class="ed-card-title" itemprop="headline">
              <a href="{{ post.url | relative_url }}" itemprop="url">{{ post.title | escape }}</a>
            </h3>
            <p class="ed-card-desc" itemprop="description">{{ post.description | default: g_desc }}</p>
            <div class="ed-card-footer">
              <div class="ed-card-author">
                <img class="ed-card-avatar" src="{{ g_author.avatar | default: '/logo.webp' | relative_url }}" alt="{{ g_author.name | default: post.author }}" width="28" height="28" loading="lazy">
                <span class="ed-card-author-name">{{ g_author.name | default: post.author }}</span>
              </div>
              <a href="{{ post.url | relative_url }}" class="ed-card-arrow" aria-label="Read {{ post.title | escape }}">
                {% include lucide.html name="arrow-right" %}
              </a>
            </div>
          </div>
        </article>
        {% endif %}
        {% endfor %}
      </div>
    </div>

  </div>
</section>

<!-- ========================================================
     PROMOTIONAL / RESOURCE RIBBON (Inspired by reference strip)
     ======================================================== -->
<section class="ed-feature-ribbon" aria-label="F9XR tools and engineering resources">
  <div class="ed-ribbon-grid">
    <a href="https://f9xr.org/seo-audit-report-skill/" class="ed-ribbon-card" target="_blank" rel="noopener noreferrer">
      <div class="ed-ribbon-icon">{% include lucide.html name="chart-line" %}</div>
      <div class="ed-ribbon-body">
        <h3 class="ed-ribbon-title">SEO Codebase Auditor</h3>
        <p class="ed-ribbon-desc">24-pillar repository audit skill for static sites and Jekyll.</p>
      </div>
      <span class="ed-ribbon-link">Try Tool &rarr;</span>
    </a>
    <a href="{{ '/episodes/' | relative_url }}" class="ed-ribbon-card">
      <div class="ed-ribbon-icon">{% include lucide.html name="headphones" %}</div>
      <div class="ed-ribbon-body">
        <h3 class="ed-ribbon-title">F9XR Audio Episodes</h3>
        <p class="ed-ribbon-desc">High-fidelity podcast breakdowns on architecture &amp; local SEO.</p>
      </div>
      <span class="ed-ribbon-link">Listen &rarr;</span>
    </a>
    <a href="https://f9xr.org/dev9b/" class="ed-ribbon-card" target="_blank" rel="noopener noreferrer">
      <div class="ed-ribbon-icon">{% include lucide.html name="code" %}</div>
      <div class="ed-ribbon-body">
        <h3 class="ed-ribbon-title">Dev9b Developers Blog</h3>
        <p class="ed-ribbon-desc">Engineering tutorials, code snippets, and deployment workflows.</p>
      </div>
      <span class="ed-ribbon-link">Read Dev9b &rarr;</span>
    </a>
    <a href="https://f9xr.org/pages/contact.html" class="ed-ribbon-card" target="_blank" rel="noopener noreferrer">
      <div class="ed-ribbon-icon">{% include lucide.html name="rocket" %}</div>
      <div class="ed-ribbon-body">
        <h3 class="ed-ribbon-title">Free Website Audit</h3>
        <p class="ed-ribbon-desc">Get a technical Core Web Vitals &amp; conversion audit from our team.</p>
      </div>
      <span class="ed-ribbon-link">Request Audit &rarr;</span>
    </a>
  </div>
</section>

<!-- ========================================================
     POPULAR ARTICLES (Horizontal cards matching reference)
     ======================================================== -->
<section class="ed-popular-section" aria-label="Most popular articles">
  <div class="ed-sec-head">
    <h2 class="ed-sec-title">
      {% include lucide.html name="flame" style="color:#3b82f6;" %}
      Most Popular Articles
    </h2>
    <a class="ed-sec-link" href="{{ '/archive.html' | relative_url }}">Browse full archive &rarr;</a>
  </div>

  <div class="ed-popular-grid">
    {% for post in site.posts offset:3 limit:4 %}
    {% assign p_author = site.data.authors[post.author] %}
    {% assign p_min = post.content | strip_html | number_of_words | divided_by: 200 | plus: 1 %}
    {% assign p_desc = post.content | strip_html | truncate: 120 %}
    <article class="ed-popular-card">
      <a class="ed-popular-thumb" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}"{% if post.image %} style="background-image:url('{{ post.image }}');"{% endif %}></a>
      <div class="ed-popular-content">
        <div class="ed-popular-meta">
          <span class="ed-tag">{{ post.tags.first | default: "Featured" }}</span>
          <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
        </div>
        <h3 class="ed-popular-title">
          <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h3>
        <p class="ed-popular-desc">{{ post.description | default: p_desc }}</p>
        <div class="ed-popular-footer">
          <span class="ed-popular-author">{{ p_author.name | default: post.author }}</span>
          <span class="ed-popular-time">{% include lucide.html name="clock" %} {{ p_min }} min read</span>
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<!-- ========================================================
     COMMUNITY & SOCIAL BANNER (Inspired by reference banner)
     ======================================================== -->
<section class="ed-community-banner" aria-label="Join the community">
  <div class="ed-community-glow"></div>
  <div class="ed-community-inner">
    <div class="ed-community-brand">
      <div class="ed-community-icon">
        <img src="{{ '/logo.webp' | absolute_url }}" alt="F9XR Team" width="56" height="56" loading="lazy">
      </div>
      <div class="ed-community-text">
        <h2 class="ed-community-title">Follow F9XR Across the Digital Web</h2>
        <p class="ed-community-sub">Engineering digital growth from India to the global stage. Stay in the loop with architectural breakdowns, SEO experiments, and engineering deep-dives.</p>
      </div>
    </div>
    <div class="ed-community-socials">
      <a href="https://linkedin.com/company/f9xrteam" target="_blank" rel="noopener noreferrer" class="ed-social-btn" title="LinkedIn">
        <i class="fa-brands fa-linkedin-in"></i>
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/f9xr" target="_blank" rel="noopener noreferrer" class="ed-social-btn" title="GitHub">
        <i class="fa-brands fa-github"></i>
        <span>GitHub</span>
      </a>
      <a href="https://www.youtube.com/@QuarterlyLIV" target="_blank" rel="noopener noreferrer" class="ed-social-btn" title="YouTube">
        <i class="fa-brands fa-youtube"></i>
        <span>YouTube</span>
      </a>
      <a href="https://www.threads.net/@f9xrteam" target="_blank" rel="noopener noreferrer" class="ed-social-btn" title="Threads">
        <i class="fa-brands fa-threads"></i>
        <span>Threads</span>
      </a>
      <a href="https://instagram.com/f9xrteam" target="_blank" rel="noopener noreferrer" class="ed-social-btn" title="Instagram">
        <i class="fa-brands fa-instagram"></i>
        <span>Instagram</span>
      </a>
      <a href="https://whatsapp.com/channel/0029VbEC55y6mYPK9Ru9Fy2B" target="_blank" rel="noopener noreferrer" class="ed-social-btn" title="WhatsApp Channel">
        <i class="fa-brands fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>
    </div>
  </div>
</section>

<!-- ========================================================
     AUTHORS SHOWCASE (Directly matching reference authors row)
     ======================================================== -->
<section class="ed-authors-section" aria-label="Meet our authors">
  <div class="ed-sec-head-center">
    <span class="ed-sec-kicker">{% include lucide.html name="user" %} Technical Practitioners</span>
    <h2 class="ed-sec-main-title">Meet Our Authors &amp; Contributors</h2>
    <p class="ed-sec-sub-lead">Every insight is written and reviewed by experienced digital architects and specialists.</p>
  </div>

  <div class="ed-authors-grid">
    <!-- Author 1: Editorial Team -->
    <article class="ed-author-card">
      <div class="ed-author-avatar-wrap">
        <img class="ed-author-avatar" src="{{ '/logo.webp' | absolute_url }}" alt="F9XR Editorial Team" width="80" height="80" loading="lazy">
        <span class="ed-author-badge-icon" title="Verified">{% include lucide.html name="check" %}</span>
      </div>
      <h3 class="ed-author-name">F9XR Editorial Team</h3>
      <p class="ed-author-role">Digital Architecture Agency</p>
      <div class="ed-author-topics">
        <span>Web Architecture</span>
        <span>Technical SEO</span>
        <span>AI Systems</span>
      </div>
      <a href="{{ '/authors/f9xr-team/' | relative_url }}" class="ed-author-btn">View Profile &amp; Articles &rarr;</a>
    </article>

    <!-- Author 2: Mohammed Ahetasham Uddin -->
    <article class="ed-author-card">
      <div class="ed-author-avatar-wrap">
        <img class="ed-author-avatar" src="{{ '/assets/authors/ahetasham-uddin.webp' | absolute_url }}" alt="Mohammed Ahetasham Uddin" width="80" height="80" loading="lazy">
        <span class="ed-author-badge-icon" title="Verified">{% include lucide.html name="check" %}</span>
      </div>
      <h3 class="ed-author-name">Mohammed Ahetasham</h3>
      <p class="ed-author-role">Client Relations Associate</p>
      <div class="ed-author-topics">
        <span>Client Relations</span>
        <span>Digital Marketing</span>
        <span>SEO</span>
      </div>
      <a href="{{ '/authors/ahetasham/' | relative_url }}" class="ed-author-btn">View Profile &amp; Articles &rarr;</a>
    </article>

    <!-- Author 3: Masna Sudhir -->
    <article class="ed-author-card">
      <div class="ed-author-avatar-wrap">
        <img class="ed-author-avatar" src="{{ '/assets/authors/masna-sudhir.webp' | absolute_url }}" alt="Masna Sudhir" width="80" height="80" loading="lazy">
        <span class="ed-author-badge-icon" title="Verified">{% include lucide.html name="check" %}</span>
      </div>
      <h3 class="ed-author-name">Masna Sudhir</h3>
      <p class="ed-author-role">Jr Data Analyst</p>
      <div class="ed-author-topics">
        <span>Data Analysis</span>
        <span>Visualization</span>
        <span>BI</span>
      </div>
      <a href="{{ '/authors/masna-sudhir/' | relative_url }}" class="ed-author-btn">View Profile &amp; Articles &rarr;</a>
    </article>

    <!-- Author 4: Mishra Sheshamani -->
    <article class="ed-author-card">
      <div class="ed-author-avatar-wrap">
        <img class="ed-author-avatar" src="{{ '/assets/authors/mishra-sheshamani.webp' | absolute_url }}" alt="Mishra Sheshamani" width="80" height="80" loading="lazy">
        <span class="ed-author-badge-icon" title="Verified">{% include lucide.html name="check" %}</span>
      </div>
      <h3 class="ed-author-name">Mishra Sheshamani</h3>
      <p class="ed-author-role">Online Coordinator</p>
      <div class="ed-author-topics">
        <span>Platforms</span>
        <span>Virtual Ops</span>
        <span>Community</span>
      </div>
      <a href="{{ '/authors/mishra-sheshamani/' | relative_url }}" class="ed-author-btn">View Profile &amp; Articles &rarr;</a>
    </article>

    <!-- Author 5: Ankush Santra -->
    <article class="ed-author-card">
      <div class="ed-author-avatar-wrap">
        <img class="ed-author-avatar" src="{{ '/assets/authors/ankush-santra.webp' | absolute_url }}" alt="Ankush Santra" width="80" height="80" loading="lazy">
        <span class="ed-author-badge-icon" title="Verified">{% include lucide.html name="check" %}</span>
      </div>
      <h3 class="ed-author-name">Ankush Santra</h3>
      <p class="ed-author-role">Owner of SponsorLanes</p>
      <div class="ed-author-topics">
        <span>Sponsorships</span>
        <span>Creator Economy</span>
        <span>Marketing</span>
      </div>
      <a href="{{ '/authors/ankush-santra/' | relative_url }}" class="ed-author-btn">View Profile &amp; Articles &rarr;</a>
    </article>
  </div>
</section>

<!-- ========================================================
     PODCAST EPISODES (Rendered with modern cards)
     ======================================================== -->
<section class="ed-episodes" aria-label="Podcast episodes">
  <div class="ed-sec-head">
    <h2 class="ed-sec-title">
      {% include lucide.html name="podcast" style="color:#3b82f6;" %}
      Audio Episodes
    </h2>
    <a class="ed-sec-link" href="{{ '/episodes/' | relative_url }}">All episodes &rarr;</a>
  </div>
  {% assign sorted_episodes = site.episodes | sort: "date" | reverse %}
  <div class="ed-cards-grid">
    {% for episode in sorted_episodes limit:3 %}
    <article class="ed-card" itemscope itemtype="https://schema.org/PodcastEpisode">
      <div class="ed-card-media">
        <a class="ed-card-img" href="{{ episode.url | relative_url }}" aria-label="{{ episode.title | escape }}"{% if episode.image %} style="background-image:url('{{ episode.image }}');"{% endif %}></a>
        <span class="ed-card-badge">{% include lucide.html name="headphones" %} Episode {% if episode.episode_number %}{{ episode.episode_number }}{% endif %}</span>
      </div>
      <div class="ed-card-body">
        <div class="ed-card-meta">
          <span class="ed-mono">{{ episode.date | date: "%b %d, %Y" }}</span>
          {% if episode.audio_duration %}
          <span class="ed-dot-sep">&middot;</span>
          <span class="ed-mono">{% include lucide.html name="clock" %} {{ episode.audio_duration }}</span>
          {% endif %}
        </div>
        <h3 class="ed-card-title" itemprop="headline">
          <a href="{{ episode.url | relative_url }}" itemprop="url">{{ episode.title | escape }}</a>
        </h3>
        <p class="ed-card-desc" itemprop="description">{{ episode.description | default: "Listen to the latest F9XR Articles episode." }}</p>
        <div class="ed-card-footer">
          <span class="ed-episode-listen-tag">{% include lucide.html name="play" %} Listen now</span>
          <a href="{{ episode.url | relative_url }}" class="ed-card-arrow" aria-label="Listen to {{ episode.title | escape }}">
            {% include lucide.html name="arrow-right" %}
          </a>
        </div>
      </div>
    </article>
    {% else %}
    <p style="color:#71717a;">No episodes yet. Stay tuned.</p>
    {% endfor %}
  </div>
</section>

<!-- ========================================================
     DEV9B DEVELOPER BLOG CROSS-PROMOTION
     ======================================================== -->
{% if site.data.dev9b and site.data.dev9b.size > 0 %}
<section class="ed-dev9b" aria-label="F9XR's Dev9b developer blog">
  <div class="ed-sec-head">
    <h2 class="ed-sec-title">
      {% include lucide.html name="code" style="color:#3b82f6;" %}
      F9XR's Dev9b <span class="ed-sec-sub">Developers Blog</span>
    </h2>
    <a class="ed-sec-link" href="https://f9xr.org/dev9b/" target="_blank" rel="noopener noreferrer">Visit Dev9b &rarr;</a>
  </div>
  <p class="ed-dev9b-note">Practical developer guides from the F9XR engineering team, published on <a href="https://f9xr.org/dev9b/" target="_blank" rel="noopener noreferrer">f9xr.org/dev9b</a>.</p>
  <div class="ed-cards-grid">
    {% for dpost in site.data.dev9b limit:3 %}
    <article class="ed-card" itemscope itemtype="https://schema.org/BlogPosting">
      <div class="ed-card-body">
        <div class="ed-card-meta">
          <span class="ed-tag">{% include lucide.html name="code" %} Dev9b</span>
          <span class="ed-dot-sep">&middot;</span>
          <span class="ed-mono"><time datetime="{{ dpost.date }}" itemprop="datePublished">{{ dpost.date | date: "%b %d, %Y" }}</time></span>
        </div>
        <h3 class="ed-card-title" itemprop="headline">
          <a href="{{ dpost.url }}" itemprop="url" target="_blank" rel="noopener noreferrer">{{ dpost.title | escape }}</a>
        </h3>
        <p class="ed-card-desc" itemprop="description">{{ dpost.summary | escape }}</p>
        <div class="ed-card-footer">
          <span class="ed-mono" itemprop="author">{{ dpost.author }}</span>
          <a href="{{ dpost.url }}" target="_blank" rel="noopener noreferrer" class="ed-card-arrow" aria-label="Read on Dev9b">
            {% include lucide.html name="external-link" %}
          </a>
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
{% endif %}

<!-- ========================================================
     PUBLICATION STATS & ARCHIVE ACCORDION
     ======================================================== -->
{% assign metric_total_words = 0 %}
{% for metric_post in site.posts %}
  {% assign metric_post_words = metric_post.content | strip_html | number_of_words %}
  {% assign metric_total_words = metric_total_words | plus: metric_post_words %}
{% endfor %}
{% assign metric_post_count = site.posts.size %}
{% if metric_post_count == 0 %}
  {% assign metric_post_count = 1 %}
{% endif %}
{% assign metric_words_k = metric_total_words | times: 1.0 | divided_by: 1000.0 | round: 1 %}
{% assign metric_avg_min = metric_total_words | times: 1.0 | divided_by: 200.0 | divided_by: metric_post_count | round: 0 %}

<section class="ed-cols" aria-label="Analytics, bulletins, and video">
  <div class="ed-col ed-col-analytics">
    <h3 class="ed-panel-title">{% include lucide.html name="chart-line" style="color:#3b82f6;" %} Publication Stats</h3>
    <div class="ed-metric">
      <span class="ed-metric-label">{% include lucide.html name="file-text" %} Articles Published</span>
      <span class="ed-metric-value">{{ site.posts.size }}</span>
    </div>
    <div class="ed-metric">
      <span class="ed-metric-label">{% include lucide.html name="tags" %} Topics Covered</span>
      <span class="ed-metric-value">{{ site.tags.size }}</span>
    </div>
    <div class="ed-metric">
      <span class="ed-metric-label">{% include lucide.html name="type" %} Words Published</span>
      <span class="ed-metric-value">{{ metric_words_k }}K</span>
    </div>
    <div class="ed-metric">
      <span class="ed-metric-label">{% include lucide.html name="clock" %} Avg. Read Time</span>
      <span class="ed-metric-value">~{{ metric_avg_min }} min</span>
    </div>
    <a class="ed-panel-cta" href="https://f9xr.org/pages/services.html" target="_blank" rel="noopener noreferrer">Explore performance services &rarr;</a>
  </div>

  <div class="ed-col ed-col-bulletin">
    <h3 class="ed-panel-title">{% include lucide.html name="newspaper" style="color:#3b82f6;" %} Tech Stack</h3>
    <div class="ed-marquee" aria-hidden="true">
      <div class="ed-marquee-track">
        <span class="ed-badge ed-badge-mono">J</span><span class="ed-badge">Jekyll</span>
        <span class="ed-badge ed-badge-mono">G</span><span class="ed-badge">GitHub Pages</span>
        <span class="ed-badge ed-badge-mono">R</span><span class="ed-badge">Ruby</span>
        <span class="ed-badge ed-badge-mono">L</span><span class="ed-badge">Liquid</span>
        <span class="ed-badge ed-badge-mono">H</span><span class="ed-badge">HTML5</span>
        <span class="ed-badge ed-badge-mono">C</span><span class="ed-badge">CSS3</span>
        <span class="ed-badge ed-badge-mono">W</span><span class="ed-badge">WebP</span>
        <span class="ed-badge ed-badge-mono">S</span><span class="ed-badge">Schema.org</span>
        <span class="ed-badge ed-badge-mono">J</span><span class="ed-badge">Jekyll</span>
        <span class="ed-badge ed-badge-mono">G</span><span class="ed-badge">GitHub Pages</span>
        <span class="ed-badge ed-badge-mono">R</span><span class="ed-badge">Ruby</span>
        <span class="ed-badge ed-badge-mono">L</span><span class="ed-badge">Liquid</span>
        <span class="ed-badge ed-badge-mono">H</span><span class="ed-badge">HTML5</span>
        <span class="ed-badge ed-badge-mono">C</span><span class="ed-badge">CSS3</span>
        <span class="ed-badge ed-badge-mono">W</span><span class="ed-badge">WebP</span>
        <span class="ed-badge ed-badge-mono">S</span><span class="ed-badge">Schema.org</span>
      </div>
    </div>
    <p class="ed-bulletin-note">The stack behind F9XR Articles — open source, static, and continuously measured.</p>
    <a class="ed-panel-cta" href="{{ '/archive.html' | relative_url }}">Read the full archive &rarr;</a>
  </div>

  <div class="ed-col ed-col-watch">
    <h3 class="ed-panel-title">{% include lucide.html name="circle-play" style="color:#3b82f6;" %} Watch &amp; Learn</h3>
    <div class="ed-video">
      <iframe class="youtube-embed" src="https://www.youtube-nocookie.com/embed/l-52kGRwH_Y" title="Introducing F9XR Team" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
    </div>
    <p class="ed-video-caption">Introducing F9XR Team — AI-powered web design &amp; local SEO growth agency.</p>
    <a class="ed-panel-cta" href="https://f9xr.org/pages/about.html" target="_blank" rel="noopener noreferrer">About the team &rarr;</a>
  </div>
</section>

<!-- Monthly Archive Accordion -->
<section class="ed-archive" aria-label="Articles by month">
  <div class="ed-sec-head">
    <h2 class="ed-sec-title">Publication Timeline</h2>
    <span class="ed-mono">{{ site.posts.size }} articles published</span>
  </div>
  <div class="index-accordion">
    {% assign posts_by_month = site.posts | group_by_exp: "post", "post.date | date: '%B %Y'" %}
    {% for group in posts_by_month %}
    <details class="accordion-item"{% if forloop.first %} open{% endif %}>
      <summary class="accordion-header">
        <span class="accordion-title">{{ group.name }}</span>
        <span class="accordion-count">{{ group.items.size }} article{% if group.items.size != 1 %}s{% endif %}</span>
        <span class="accordion-chevron">{% include lucide.html name="chevron-down" %}</span>
      </summary>
      <div class="accordion-body">
        <ul class="accordion-list">
          {% for post in group.items %}
          <li class="accordion-link">
            <a href="{{ post.url | relative_url }}" itemscope itemtype="https://schema.org/Article">
              <span class="accordion-link-title" itemprop="headline">{{ post.title | escape }}</span>
              <span class="accordion-link-date"><time datetime="{{ post.date | date: '%Y-%m-%d' }}" itemprop="datePublished">{{ post.date | date: "%b %d" }}</time></span>
            </a>
          </li>
          {% endfor %}
        </ul>
      </div>
    </details>
    {% endfor %}
  </div>
</section>

<!-- Topic Cloud -->
<section class="ed-topics" aria-label="Browse by topic">
  <details class="topic-dropdown">
    <summary class="topic-dropdown-summary">
      <span class="topic-dropdown-title">{% include lucide.html name="tags" %} Browse All Topics</span>
      <span class="topic-dropdown-count">{{ site.tags.size }} categories</span>
      <span class="topic-dropdown-chevron">{% include lucide.html name="chevron-down" %}</span>
    </summary>
    <div class="topic-dropdown-body">
      <div class="index-tags">
        {% assign all_tags = site.posts | map: "tags" | join: "," | split: "," | uniq | sort %}
        {% for tag in all_tags %}
        <a class="index-tag" href="{{ '/archive.html' | relative_url }}#{{ tag | slugify }}">{{ tag }}</a>
        {% endfor %}
      </div>
    </div>
  </details>
</section>

<!-- Interactive Scripts: Tabs & Accordion -->
<script>
(function() {
  // Category tabs switcher
  var btns = Array.prototype.slice.call(document.querySelectorAll('.ed-tabs .ed-tab-btn'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.ed-tabs .ed-tab-panel'));
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var target = btn.getAttribute('data-tab');
      btns.forEach(function(b) {
        var active = (b === btn);
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach(function(p) {
        p.classList.toggle('is-active', p.getAttribute('data-panel') === target);
      });
    });
  });

  // Archive accordion exclusivity (one open at a time)
  var items = Array.prototype.slice.call(document.querySelectorAll('.index-accordion .accordion-item'));
  items.forEach(function(item) {
    item.addEventListener('toggle', function() {
      if (item.open) {
        items.forEach(function(other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
})();
</script>

{% endif %}

</div>
