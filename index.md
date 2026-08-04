---
layout: page
title: F9XR Articles
title_hidden: true
description: "Engineering digital growth — technical insights, architecture notes, and strategies from the F9XR Team on web performance, AI integration, and local SEO."
---

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
    "https://www.youtube.com/@QuarterlyLIV"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "tontufytservices@gmail.com",
    "contactType": "customer service"
  }
}
</script>

<section class="index-hero">
  <h1 class="index-title">F9XR Articles</h1>
  <p class="index-tagline">Engineering digital growth &mdash; technical insights, architecture notes, and strategies from the F9XR Team on web performance, AI integration, and local SEO.</p>
  <div class="index-links">
    <a class="index-link index-link-primary" href="https://f9xr.github.io">Main Site</a>
    <a class="index-link" href="https://f9xr.github.io/pages/services.html">Services</a>
    <a class="index-link" href="https://f9xr.github.io/pages/portfolio.html">Portfolio</a>
    <a class="index-link" href="https://f9xr.github.io/pages/contact.html">Contact</a>
    <button type="button" class="index-link index-link-search" onclick="toggleSearch(); return false;"><i class="fa-solid fa-magnifying-glass" style="font-size:0.85em;"></i> Search</button>
  </div>
</section>

{% if site.posts.size > 0 %}

<section class="index-section">
  <h2 class="index-section-title"><i class="fa-solid fa-star" style="color:#a855f7; font-size:0.8em;"></i> Latest Article</h2>
  {% assign featured = site.posts.first %}
  <a class="featured-post" href="{{ featured.url | relative_url }}" itemscope itemtype="https://schema.org/Article">
    {% if featured.image %}
    <img class="featured-post-img" src="{{ featured.image }}" alt="{{ featured.title | escape }}" loading="eager" itemprop="image">
    {% endif %}
    <div class="featured-post-body">
      <div class="featured-post-meta">
        <span class="featured-post-date"><i class="fa-regular fa-calendar" style="font-size:0.85em;"></i> <time datetime="{{ featured.date | date: '%Y-%m-%d' }}" itemprop="datePublished">{{ featured.date | date: "%b %d, %Y" }}</time></span>
        {% if featured.dateModified %}
        <span class="featured-post-updated"><i class="fa-solid fa-pen-to-square" style="font-size:0.75em;"></i> Updated {{ featured.dateModified | date: "%b %d, %Y" }}</span>
        {% endif %}
        <span class="featured-post-read"><i class="fa-regular fa-clock" style="font-size:0.85em;"></i> {{ featured.content | strip_html | number_of_words | divided_by: 200 | plus: 1 }} min read</span>
        {% if featured.tags.first %}
        <span class="featured-post-tag">{{ featured.tags.first }}</span>
        {% endif %}
      </div>
      <h3 class="featured-post-title" itemprop="headline">{{ featured.title | escape }}</h3>
      {% assign featured_desc = featured.content | strip_html | truncate: 200 %}
      <p class="featured-post-desc" itemprop="description">{{ featured.description | default: featured_desc }}</p>
      <div class="featured-post-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
        <span class="featured-post-author-avatar"><img src="https://f9xr.github.io/logo.webp" alt="F9XR Team" loading="lazy"></span>
        <span class="featured-post-author-name" itemprop="name">{{ featured.author | default: "F9XR Team" }}</span>
      </div>
      <span class="featured-post-cta">Read article <i class="fa-solid fa-arrow-right"></i></span>
    </div>
  </a>
</section>

{% if site.posts.size > 1 %}
<section class="index-section">
  <h2 class="index-section-title"><i class="fa-solid fa-newspaper" style="color:#3b82f6; font-size:0.8em;"></i> All Articles</h2>
  <div class="post-grid">
    {% for post in site.posts offset:1 %}
    <a class="post-card" href="{{ post.url | relative_url }}" itemscope itemtype="https://schema.org/Article">
      {% if post.image %}
      <img class="post-card-img" src="{{ post.image }}" alt="{{ post.title | escape }}" loading="lazy" itemprop="image">
      {% endif %}
      <div class="post-card-body">
        <div class="post-card-meta">
          <span class="post-card-date"><i class="fa-regular fa-calendar" style="font-size:0.85em;"></i> <time datetime="{{ post.date | date: '%Y-%m-%d' }}" itemprop="datePublished">{{ post.date | date: "%b %d, %Y" }}</time></span>
          {% if post.dateModified %}
          <span class="post-card-updated"><i class="fa-solid fa-pen-to-square" style="font-size:0.75em;"></i> Updated {{ post.dateModified | date: "%b %d, %Y" }}</span>
          {% endif %}
          <span class="post-card-read"><i class="fa-regular fa-clock" style="font-size:0.85em;"></i> {{ post.content | strip_html | number_of_words | divided_by: 200 | plus: 1 }} min read</span>
        </div>
        <h3 class="post-card-title" itemprop="headline">{{ post.title | escape }}</h3>
        {% assign post_desc = post.content | strip_html | truncate: 160 %}
        <p class="post-card-desc" itemprop="description">{{ post.description | default: post_desc }}</p>
        <div class="post-card-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
          <span class="post-card-author-avatar"><img src="https://f9xr.github.io/logo.webp" alt="F9XR Team" loading="lazy"></span>
          <span class="post-card-author-name" itemprop="name">{{ post.author | default: "F9XR Team" }}</span>
        </div>
        {% if post.tags %}
        <div class="post-card-tags">
          {% for tag in post.tags limit:3 %}
          <span class="post-card-tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
        <span class="post-card-cta">Read article <i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </a>
    {% endfor %}
  </div>
</section>
{% endif %}

<section class="index-section">
  <h2 class="index-section-title"><i class="fa-solid fa-tags" style="color:#00ff88; font-size:0.8em;"></i> Browse by Topic</h2>
  <div class="index-tags">
    {% assign all_tags = site.posts | map: "tags" | join: "," | split: "," | uniq | sort %}
    {% for tag in all_tags %}
    <a class="index-tag" href="{{ '/archive.html' | relative_url }}#{{ tag | slugify }}">{{ tag }}</a>
    {% endfor %}
  </div>
</section>

{% endif %}
