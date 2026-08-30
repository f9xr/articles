---
layout: page
title: F9XR Articles
title_hidden: true
description: "Engineering digital growth — technical insights, architecture notes, and strategies from the F9XR Team on web performance, AI integration, and local SEO."
keywords: "F9XR Articles, engineering digital growth, web architecture, AI integration, local SEO, web performance, Core Web Vitals, technical SEO, F9XR Team blog"
---

<div class="ed-site">

<h1 class="sr-only">F9XR Articles — Engineering Digital Growth</h1>

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
    "@id": "https://f9xr.github.io#organization",
    "@type": "Organization",
    "name": "F9XR Team",
    "url": "https://f9xr.github.io",
    "logo": {
      "@type": "ImageObject",
      "url": "{{ '/logo.webp' | absolute_url }}",
      "width": 512,
      "height": 512
    }
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://f9xr.github.io#organization",
  "name": "F9XR Team",
  "url": "https://f9xr.github.io",
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
    "https://www.threads.com/@f9xrteam",
    "https://www.youtube.com/@QuarterlyLIV"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "tontufytservices@gmail.com",
    "contactType": "customer service"
  }
}
</script>

<header class="ed-masthead">
  <div class="ed-masthead-brand">
    <img src="{{ '/logo.webp' | absolute_url }}" alt="F9XR Team" class="ed-masthead-logo" width="28" height="28">
    <span class="ed-masthead-name">F9XR <em>Articles</em></span>
  </div>
  <div class="ed-masthead-meta">
    <span class="ed-mono">{{ site.time | date: "%B %d, %Y" }}</span>
    <span class="ed-mono">Engineering digital growth</span>
  </div>
  <nav class="ed-masthead-links" aria-label="Quick links">
    <a href="https://f9xr.github.io">Main Site</a>
    <a href="https://f9xr.github.io/pages/services.html">Services</a>
    <a href="https://f9xr.github.io/pages/portfolio.html">Portfolio</a>
    <a href="https://f9xr.github.io/pages/contact.html">Contact</a>
    <button type="button" class="ed-masthead-search" onclick="toggleSearch(); return false;"><i class="fa-solid fa-magnifying-glass"></i> Search</button>
  </nav>
</header>

{% if site.posts.size > 0 %}

<section class="ed-hero" aria-label="Latest article and must reads">
  <div class="ed-hero-featured">
    {% assign featured = site.posts.first %}
    {% assign featured_author = site.data.authors[featured.author] %}
    {% assign featured_min = featured.content | strip_html | number_of_words | divided_by: 200 | plus: 1 %}
    {% assign featured_desc = featured.content | strip_html | truncate: 240 %}
    <div class="ed-hero-meta">
      <span class="ed-tag">{{ featured.tags.first | default: "Latest" }}</span>
      <span class="ed-mono">{{ featured.date | date: "%B %d, %Y" }}</span>
      <span class="ed-mono">{{ featured_min }} min read</span>
    </div>
    <a href="{{ featured.url | relative_url }}" class="ed-hero-link" aria-label="{{ featured.title | escape }}">
      <span class="ed-hero-img"{% if featured.image %} style="background-image:url('{{ featured.image }}');"{% endif %}></span>
      <h2 class="ed-hero-title">{{ featured.title | escape }}</h2>
    </a>
    <p class="ed-hero-desc">{{ featured.description | default: featured_desc }}</p>
    <div class="ed-byline">
      <img class="ed-byline-avatar" src="{{ featured_author.avatar | default: '/logo.webp' | relative_url }}" alt="{{ featured_author.name | default: 'F9XR Editorial Team' }}" width="200" height="200" loading="lazy">
      <a class="ed-byline-name" href="{{ featured_author.url | default: '/authors/f9xr-team/' | relative_url }}">{{ featured_author.name | default: "F9XR Editorial Team" }}</a>
      <span class="ed-byline-dot"></span>
      <a class="ed-hero-cta" href="{{ featured.url | relative_url }}">Read article <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </div>

  <aside class="ed-hero-trending" aria-label="Must read">
    <h3 class="ed-panel-title"><i class="fa-solid fa-fire" style="color:#3b82f6;"></i> Must Read</h3>
    {% for post in site.posts offset:1 limit:3 %}
    {% assign t_author = site.data.authors[post.author] %}
    {% assign t_min = post.content | strip_html | number_of_words | divided_by: 200 | plus: 1 %}
    {% assign t_desc = post.content | strip_html | truncate: 110 %}
    <article class="ed-trend" itemscope itemtype="https://schema.org/Article">
      <div class="ed-trend-meta">
        <span class="ed-mono">{{ t_min }} min</span>
        <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
      </div>
      <h4 class="ed-trend-title" itemprop="headline"><a href="{{ post.url | relative_url }}" itemprop="url">{{ post.title | escape }}</a></h4>
      <p class="ed-trend-desc" itemprop="description">{{ post.description | default: t_desc }}</p>
      <span class="ed-trend-author">{{ t_author.name | default: post.author }}</span>
    </article>
    {% endfor %}
    <a class="ed-trend-all" href="{{ '/archive.html' | relative_url }}">View all articles <i class="fa-solid fa-arrow-right"></i></a>
  </aside>
</section>

<section class="ed-latest" aria-label="Latest insights">
  <div class="ed-sec-head">
    <h2 class="ed-sec-title">Latest Insights</h2>
    <a class="ed-sec-link" href="{{ '/archive.html' | relative_url }}">Browse archive <i class="fa-solid fa-arrow-right"></i></a>
  </div>
  <div class="ed-grid">
    {% for post in site.posts offset:4 limit:8 %}
    {% assign g_author = site.data.authors[post.author] %}
    {% assign g_min = post.content | strip_html | number_of_words | divided_by: 200 | plus: 1 %}
    {% assign g_desc = post.content | strip_html | truncate: 140 %}
    <article class="ed-card" itemscope itemtype="https://schema.org/Article">
      <a class="ed-card-img" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}"{% if post.image %} style="background-image:url('{{ post.image }}');"{% endif %}></a>
      <div class="ed-card-meta">
        <span class="ed-tag">{{ post.tags.first | default: "Article" }}</span>
        <span class="ed-mono">{{ post.date | date: "%b %d" }}</span>
        <span class="ed-mono">{{ g_author.name | default: post.author }}</span>
      </div>
      <h3 class="ed-card-title" itemprop="headline"><a href="{{ post.url | relative_url }}" itemprop="url">{{ post.title | escape }}</a></h3>
      <p class="ed-card-desc" itemprop="description">{{ post.description | default: g_desc }}</p>
      <span class="ed-card-foot">{{ g_min }} min read</span>
    </article>
    {% endfor %}
  </div>
</section>

<section class="ed-tabs" aria-label="Explore articles by category">
  <div class="ed-sec-head">
    <h2 class="ed-sec-title">Explore by Category</h2>
    <a class="ed-sec-link" href="{{ '/archive.html' | relative_url }}">Browse archive <i class="fa-solid fa-arrow-right"></i></a>
  </div>

  {% assign tab_featured = "google-e-e-a-t-checklist-every-seo-should-bookmark|steps-make-business-site-visible-to-ai|rank-number-1-google-maps-2026|cloudflare-emdash-cms-explained|consistency-audits-seo-aeo-geo|how-ai-picks-local-businesses-2026" | split: "|" %}
  {% assign tab_news_tags = "Google Search Updates|Google News|Google Preferred Sources|Google Discover|Wix Symphony|Cloudflare EmDash|Microsoft Advertising|Parasite SEO|Paid Media|Google AI Mode" | split: "|" %}
  {% assign tab_seo_tags = "Technical SEO|On-Page SEO|E-E-A-T|Core Web Vitals|Link Building|SEO Strategy|Schema Markup|Search Console|Website Audits|Indexing" | split: "|" %}
  {% assign tab_ai_tags = "AEO|GEO|AI search visibility|AI Overviews|ChatGPT SEO|ChatGPT Search|Agentic AI|AI Tools|AI in Business|Generative AI Transparency" | split: "|" %}
  {% assign tab_local_tags = "Local SEO|Google Business Profile|Google Maps ranking|Local Citations|NAP consistency" | split: "|" %}

  <div class="ed-tabs-nav" role="tablist" aria-label="Article categories">
    <button class="ed-tab-btn is-active" role="tab" id="tab-featured" aria-selected="true" aria-controls="panel-featured" data-tab="featured">Featured Articles</button>
    <button class="ed-tab-btn" role="tab" id="tab-news" aria-selected="false" aria-controls="panel-news" data-tab="news">Latest News</button>
    <button class="ed-tab-btn" role="tab" id="tab-seo" aria-selected="false" aria-controls="panel-seo" data-tab="seo">SEO Articles</button>
    <button class="ed-tab-btn" role="tab" id="tab-ai" aria-selected="false" aria-controls="panel-ai" data-tab="ai">AI &amp; Agents</button>
    <button class="ed-tab-btn" role="tab" id="tab-local" aria-selected="false" aria-controls="panel-local" data-tab="local">Local SEO</button>
  </div>

  <div class="ed-tabs-panels">

    <div class="ed-tab-panel is-active" role="tabpanel" id="panel-featured" data-panel="featured" tabindex="0">
      <div class="ed-grid">
        {% for post in site.posts %}
        {% assign post_slug = post.url | split: "/" | last | remove: ".html" %}
        {% if tab_featured contains post_slug %}
        {% assign g_author = site.data.authors[post.author] %}
        {% assign g_min = post.content | strip_html | number_of_words | divided_by: 200 | plus: 1 %}
        {% assign g_desc = post.content | strip_html | truncate: 140 %}
        <article class="ed-card" itemscope itemtype="https://schema.org/Article">
          <a class="ed-card-img" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}"{% if post.image %} style="background-image:url('{{ post.image }}');"{% endif %}></a>
          <div class="ed-card-meta">
            <span class="ed-tag">{{ post.tags.first | default: "Article" }}</span>
            <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
            <span class="ed-mono">{{ g_author.name | default: post.author }}</span>
          </div>
          <h3 class="ed-card-title" itemprop="headline"><a href="{{ post.url | relative_url }}" itemprop="url">{{ post.title | escape }}</a></h3>
          <p class="ed-card-desc" itemprop="description">{{ post.description | default: g_desc }}</p>
          <span class="ed-card-foot">{{ g_min }} min read</span>
        </article>
        {% endif %}
        {% endfor %}
      </div>
    </div>

    <div class="ed-tab-panel" role="tabpanel" id="panel-news" data-panel="news" tabindex="0">
      <div class="ed-grid">
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
          <a class="ed-card-img" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}"{% if post.image %} style="background-image:url('{{ post.image }}');"{% endif %}></a>
          <div class="ed-card-meta">
            <span class="ed-tag">{{ post.tags.first | default: "Article" }}</span>
            <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
            <span class="ed-mono">{{ g_author.name | default: post.author }}</span>
          </div>
          <h3 class="ed-card-title" itemprop="headline"><a href="{{ post.url | relative_url }}" itemprop="url">{{ post.title | escape }}</a></h3>
          <p class="ed-card-desc" itemprop="description">{{ post.description | default: g_desc }}</p>
          <span class="ed-card-foot">{{ g_min }} min read</span>
        </article>
        {% endif %}
        {% endfor %}
      </div>
    </div>

    <div class="ed-tab-panel" role="tabpanel" id="panel-seo" data-panel="seo" tabindex="0">
      <div class="ed-grid">
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
          <a class="ed-card-img" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}"{% if post.image %} style="background-image:url('{{ post.image }}');"{% endif %}></a>
          <div class="ed-card-meta">
            <span class="ed-tag">{{ post.tags.first | default: "Article" }}</span>
            <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
            <span class="ed-mono">{{ g_author.name | default: post.author }}</span>
          </div>
          <h3 class="ed-card-title" itemprop="headline"><a href="{{ post.url | relative_url }}" itemprop="url">{{ post.title | escape }}</a></h3>
          <p class="ed-card-desc" itemprop="description">{{ post.description | default: g_desc }}</p>
          <span class="ed-card-foot">{{ g_min }} min read</span>
        </article>
        {% endif %}
        {% endfor %}
      </div>
    </div>

    <div class="ed-tab-panel" role="tabpanel" id="panel-ai" data-panel="ai" tabindex="0">
      <div class="ed-grid">
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
          <a class="ed-card-img" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}"{% if post.image %} style="background-image:url('{{ post.image }}');"{% endif %}></a>
          <div class="ed-card-meta">
            <span class="ed-tag">{{ post.tags.first | default: "Article" }}</span>
            <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
            <span class="ed-mono">{{ g_author.name | default: post.author }}</span>
          </div>
          <h3 class="ed-card-title" itemprop="headline"><a href="{{ post.url | relative_url }}" itemprop="url">{{ post.title | escape }}</a></h3>
          <p class="ed-card-desc" itemprop="description">{{ post.description | default: g_desc }}</p>
          <span class="ed-card-foot">{{ g_min }} min read</span>
        </article>
        {% endif %}
        {% endfor %}
      </div>
    </div>

    <div class="ed-tab-panel" role="tabpanel" id="panel-local" data-panel="local" tabindex="0">
      <div class="ed-grid">
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
          <a class="ed-card-img" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}"{% if post.image %} style="background-image:url('{{ post.image }}');"{% endif %}></a>
          <div class="ed-card-meta">
            <span class="ed-tag">{{ post.tags.first | default: "Article" }}</span>
            <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
            <span class="ed-mono">{{ g_author.name | default: post.author }}</span>
          </div>
          <h3 class="ed-card-title" itemprop="headline"><a href="{{ post.url | relative_url }}" itemprop="url">{{ post.title | escape }}</a></h3>
          <p class="ed-card-desc" itemprop="description">{{ post.description | default: g_desc }}</p>
          <span class="ed-card-foot">{{ g_min }} min read</span>
        </article>
        {% endif %}
        {% endfor %}
      </div>
    </div>

  </div>
</section>

<section class="ed-episodes" aria-label="Podcast episodes">
  <div class="ed-sec-head">
    <h2 class="ed-sec-title"><i class="fa-solid fa-podcast" style="color:#3b82f6;"></i> Episodes</h2>
    <a class="ed-sec-link" href="{{ '/episodes/' | relative_url }}">All episodes <i class="fa-solid fa-arrow-right"></i></a>
  </div>
  {% assign sorted_episodes = site.episodes | sort: "date" | reverse %}
  <div class="ed-grid">
    {% for episode in sorted_episodes limit:6 %}
    <article class="ed-card" itemscope itemtype="https://schema.org/PodcastEpisode">
      <a class="ed-card-img" href="{{ episode.url | relative_url }}" aria-label="{{ episode.title | escape }}"{% if episode.image %} style="background-image:url('{{ episode.image }}');"{% endif %}></a>
      <div class="ed-card-meta">
        <span class="ed-tag">{% if episode.episode_number %}Episode {{ episode.episode_number }}{% else %}Episode{% endif %}</span>
        <span class="ed-mono">{{ episode.date | date: "%b %d, %Y" }}</span>
        {% if episode.audio_duration %}<span class="ed-mono"><i class="fa-solid fa-clock"></i> {{ episode.audio_duration }}</span>{% endif %}
      </div>
      <h3 class="ed-card-title" itemprop="headline"><a href="{{ episode.url | relative_url }}" itemprop="url">{{ episode.title | escape }}</a></h3>
      <p class="ed-card-desc" itemprop="description">{{ episode.description | default: "Listen to the latest F9XR Articles episode." }}</p>
      <span class="ed-card-foot"><i class="fa-solid fa-play"></i> Listen now</span>
    </article>
    {% else %}
    <p style="color:#71717a;">No episodes yet. Stay tuned.</p>
    {% endfor %}
  </div>
</section>

<script>
(function() {
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
})();
</script>

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
    <h3 class="ed-panel-title"><i class="fa-solid fa-chart-line" style="color:#3b82f6;"></i> Publication Stats</h3>
    <div class="ed-metric">
      <span class="ed-metric-label"><i class="fa-solid fa-file-lines"></i> Articles Published</span>
      <span class="ed-metric-value">{{ site.posts.size }}</span>
    </div>
    <div class="ed-metric">
      <span class="ed-metric-label"><i class="fa-solid fa-tags"></i> Topics Covered</span>
      <span class="ed-metric-value">{{ site.tags.size }}</span>
    </div>
    <div class="ed-metric">
      <span class="ed-metric-label"><i class="fa-solid fa-font"></i> Words Published</span>
      <span class="ed-metric-value">{{ metric_words_k }}K</span>
    </div>
    <div class="ed-metric">
      <span class="ed-metric-label"><i class="fa-regular fa-clock"></i> Avg. Read Time</span>
      <span class="ed-metric-value">~{{ metric_avg_min }} min</span>
    </div>
    <a class="ed-panel-cta" href="https://f9xr.github.io/pages/services.html">Explore performance services <i class="fa-solid fa-arrow-right"></i></a>
  </div>

  <div class="ed-col ed-col-bulletin">
    <h3 class="ed-panel-title"><i class="fa-solid fa-newspaper" style="color:#3b82f6;"></i> Bulletin</h3>
    <div class="ed-marquee" aria-hidden="true">
      <div class="ed-marquee-track">
        <span class="ed-badge ed-badge-mono">J</span><span class="ed-badge">Jekyll</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-github"></i></span><span class="ed-badge">GitHub Pages</span>
        <span class="ed-badge ed-badge-mono">R</span><span class="ed-badge">Ruby</span>
        <span class="ed-badge ed-badge-mono">L</span><span class="ed-badge">Liquid</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-html5"></i></span><span class="ed-badge">HTML5</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-css3-alt"></i></span><span class="ed-badge">CSS3</span>
        <span class="ed-badge ed-badge-mono">W</span><span class="ed-badge">WebP</span>
        <span class="ed-badge ed-badge-mono">S</span><span class="ed-badge">Schema.org</span>
        <span class="ed-badge ed-badge-mono">J</span><span class="ed-badge">Jekyll</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-github"></i></span><span class="ed-badge">GitHub Pages</span>
        <span class="ed-badge ed-badge-mono">R</span><span class="ed-badge">Ruby</span>
        <span class="ed-badge ed-badge-mono">L</span><span class="ed-badge">Liquid</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-html5"></i></span><span class="ed-badge">HTML5</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-css3-alt"></i></span><span class="ed-badge">CSS3</span>
        <span class="ed-badge ed-badge-mono">W</span><span class="ed-badge">WebP</span>
        <span class="ed-badge ed-badge-mono">S</span><span class="ed-badge">Schema.org</span>
      </div>
    </div>
    <p class="ed-bulletin-note">The stack behind F9XR Articles — open source, static, and continuously measured.</p>
    <a class="ed-panel-cta" href="{{ '/archive.html' | relative_url }}">Read the full archive <i class="fa-solid fa-arrow-right"></i></a>
  </div>

  <div class="ed-col ed-col-watch">
    <h3 class="ed-panel-title"><i class="fa-solid fa-circle-play" style="color:#3b82f6;"></i> Watch &amp; Learn</h3>
    <div class="ed-video">
      <iframe class="youtube-embed" src="https://www.youtube-nocookie.com/embed/l-52kGRwH_Y" title="Introducing F9XR Team: Digital Growth Agency - AI-Powered Web Design &amp; Local SEO Growth Agency" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
    </div>
    <p class="ed-video-caption">Introducing F9XR Team — AI-powered web design &amp; local SEO growth agency.</p>
    <a class="ed-panel-cta" href="https://f9xr.github.io/pages/about.html">About the team <i class="fa-solid fa-arrow-right"></i></a>
  </div>
</section>

<section class="ed-archive" aria-label="Articles by month">
  <div class="ed-sec-head">
    <h2 class="ed-sec-title">Archive</h2>
    <span class="ed-mono">{{ site.posts.size }} articles published</span>
  </div>
  <div class="index-accordion">
    {% assign posts_by_month = site.posts | group_by_exp: "post", "post.date | date: '%B %Y'" %}
    {% for group in posts_by_month %}
    <details class="accordion-item"{% if forloop.first %} open{% endif %}>
      <summary class="accordion-header">
        <span class="accordion-title">{{ group.name }}</span>
        <span class="accordion-count">{{ group.items.size }} article{% if group.items.size != 1 %}s{% endif %}</span>
        <span class="accordion-chevron"><i class="fa-solid fa-chevron-down"></i></span>
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

<script>
(function() {
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

<section class="ed-topics" aria-label="Browse by topic">
  <details class="topic-dropdown">
    <summary class="topic-dropdown-summary">
      <span class="topic-dropdown-title"><i class="fa-solid fa-tags"></i> Browse by Topic</span>
      <span class="topic-dropdown-count">{{ site.tags.size }} categories</span>
      <span class="topic-dropdown-chevron"><i class="fa-solid fa-chevron-down"></i></span>
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

{% endif %}

</div>
