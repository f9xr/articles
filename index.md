---
layout: page
title: F9XR Articles
title_hidden: true
description: "Engineering digital growth — technical insights, architecture notes, and strategies from the F9XR Team on web performance, AI integration, and local SEO."
keywords: "F9XR Articles, engineering digital growth, web architecture, AI integration, local SEO, web performance, Core Web Vitals, technical SEO, F9XR Team blog"
---

<div class="ed-site">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "F9XR Articles",
  "url": "{{ '/' | absolute_url }}",
  "description": "Engineering digital growth — technical insights, architecture notes, and strategies from the F9XR Team on web performance, AI integration, and local SEO.",
  "publisher": {
    "@type": "Organization",
    "name": "F9XR Team",
    "url": "https://f9xr.github.io",
    "logo": {
      "@type": "ImageObject",
      "url": "https://f9xr.github.io/logo.webp"
    }
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "F9XR Team",
  "url": "https://f9xr.github.io",
  "logo": "https://f9xr.github.io/logo.webp",
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
    <img src="https://f9xr.github.io/logo.webp" alt="F9XR Team" class="ed-masthead-logo" width="28" height="28">
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
      <img class="ed-byline-avatar" src="{{ featured_author.avatar | default: 'https://f9xr.github.io/logo.webp' | relative_url }}" alt="{{ featured_author.name | default: 'F9XR Editorial Team' }}" loading="lazy">
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

<section class="ed-cols" aria-label="Analytics, bulletins, and video">
  <div class="ed-col ed-col-analytics">
    <h3 class="ed-panel-title"><i class="fa-solid fa-chart-line" style="color:#3b82f6;"></i> Technical Analytics</h3>
    <div class="ed-metric">
      <span class="ed-metric-label"><i class="fa-solid fa-gauge-high"></i> PageSpeed Score</span>
      <span class="ed-metric-value">98/100</span>
      <div class="ed-bar"><span style="width:98%"></span></div>
    </div>
    <div class="ed-metric">
      <span class="ed-metric-label"><i class="fa-solid fa-heart-pulse"></i> Core Web Vitals</span>
      <span class="ed-metric-value">0 Failing</span>
      <div class="ed-bar"><span style="width:100%"></span></div>
    </div>
    <div class="ed-metric">
      <span class="ed-metric-label"><i class="fa-solid fa-robot"></i> AI Crawler Traffic</span>
      <span class="ed-metric-value">12.4K/mo</span>
      <div class="ed-bar"><span style="width:78%"></span></div>
    </div>
    <div class="ed-metric">
      <span class="ed-metric-label"><i class="fa-solid fa-file-lines"></i> Indexed Articles</span>
      <span class="ed-metric-value">48</span>
      <div class="ed-bar"><span style="width:86%"></span></div>
    </div>
    <div class="ed-metric">
      <span class="ed-metric-label"><i class="fa-regular fa-clock"></i> Avg. Read Time</span>
      <span class="ed-metric-value">8.2 min</span>
      <div class="ed-bar"><span style="width:64%"></span></div>
    </div>
    <a class="ed-panel-cta" href="https://f9xr.github.io/pages/services.html">Explore performance services <i class="fa-solid fa-arrow-right"></i></a>
  </div>

  <div class="ed-col ed-col-bulletin">
    <h3 class="ed-panel-title"><i class="fa-solid fa-newspaper" style="color:#3b82f6;"></i> Bulletin</h3>
    <div class="ed-marquee" aria-hidden="true">
      <div class="ed-marquee-track">
        <span class="ed-badge ed-badge-mono">J</span><span class="ed-badge">Jekyll</span>
        <span class="ed-badge ed-badge-mono">T</span><span class="ed-badge">Tailwind</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-github"></i></span><span class="ed-badge">GitHub</span>
        <span class="ed-badge ed-badge-mono">L</span><span class="ed-badge">Lucide</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-react"></i></span><span class="ed-badge">React</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-node"></i></span><span class="ed-badge">Node.js</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-docker"></i></span><span class="ed-badge">Docker</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-vercel"></i></span><span class="ed-badge">Vercel</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-graphql"></i></span><span class="ed-badge">GraphQL</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-html5"></i></span><span class="ed-badge">HTML5</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-css3-alt"></i></span><span class="ed-badge">CSS3</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-figma"></i></span><span class="ed-badge">Figma</span>
        <span class="ed-badge ed-badge-mono">J</span><span class="ed-badge">Jekyll</span>
        <span class="ed-badge ed-badge-mono">T</span><span class="ed-badge">Tailwind</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-github"></i></span><span class="ed-badge">GitHub</span>
        <span class="ed-badge ed-badge-mono">L</span><span class="ed-badge">Lucide</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-react"></i></span><span class="ed-badge">React</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-node"></i></span><span class="ed-badge">Node.js</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-docker"></i></span><span class="ed-badge">Docker</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-vercel"></i></span><span class="ed-badge">Vercel</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-graphql"></i></span><span class="ed-badge">GraphQL</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-html5"></i></span><span class="ed-badge">HTML5</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-css3-alt"></i></span><span class="ed-badge">CSS3</span>
        <span class="ed-badge ed-badge-icon"><i class="fa-brands fa-figma"></i></span><span class="ed-badge">Figma</span>
      </div>
    </div>
    <p class="ed-bulletin-note">The stack behind F9XR Articles — open source, static, and continuously measured.</p>
    <a class="ed-panel-cta" href="{{ '/archive.html' | relative_url }}">Read the full archive <i class="fa-solid fa-arrow-right"></i></a>
  </div>

  <div class="ed-col ed-col-watch">
    <h3 class="ed-panel-title"><i class="fa-solid fa-circle-play" style="color:#3b82f6;"></i> Watch &amp; Learn</h3>
    <div class="ed-video">
      <iframe class="youtube-embed" src="https://www.youtube.com/embed/l-52kGRwH_Y" title="Introducing F9XR Team: Digital Growth Agency - AI-Powered Web Design &amp; Local SEO Growth Agency" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
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
  <div class="ed-sec-head">
    <h2 class="ed-sec-title">Browse by Topic</h2>
  </div>
  <div class="index-tags">
    {% assign all_tags = site.posts | map: "tags" | join: "," | split: "," | uniq | sort %}
    {% for tag in all_tags %}
    <a class="index-tag" href="{{ '/archive.html' | relative_url }}#{{ tag | slugify }}">{{ tag }}</a>
    {% endfor %}
  </div>
</section>

{% endif %}

</div>
