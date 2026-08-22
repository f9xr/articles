---
layout: page
title: Archive — F9XR Articles
title_hidden: true
description: "Complete archive of all articles by F9XR Team covering web architecture, AI integration, local SEO, and digital growth strategies."
keywords: "F9XR articles archive, web architecture, AI integration, local SEO, digital growth, technical SEO, all articles"
---

<div class="ed-site">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Archive — F9XR Articles",
  "description": "Complete archive of all articles by F9XR Team covering web architecture, AI integration, local SEO, and digital growth strategies.",
  "url": "{{ '/archive' | absolute_url }}",
  "isPartOf": {
    "@type": "WebSite",
    "name": "F9XR Articles",
    "url": "{{ '/' | absolute_url }}"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {%- for post in site.posts %}
      {
        "@type": "ListItem",
        "position": {{ forloop.index }},
        "url": "{{ post.url | absolute_url }}"
      }{%- unless forloop.last %},{% endunless %}
      {%- endfor %}
    ]
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

{% assign archive_total_words = 0 %}
{% for p in site.posts %}
  {% assign archive_total_words = archive_total_words | plus: p.content | strip_html | number_of_words %}
{% endfor %}
{% assign archive_avg_min = archive_total_words | divided_by: 200.0 | divided_by: site.posts.size | round: 0 %}

<section class="ed-archive-hero" aria-label="Archive overview">
  <div class="ed-archive-intro">
    <p class="ed-kicker"><i class="fa-solid fa-archive"></i> The Complete Archive</p>
    <h1 class="ed-archive-title">All Articles</h1>
    <p class="ed-archive-sub">Engineering notes, architecture deep-dives, and growth strategies from the F9XR Team — everything published, indexed by topic.</p>
  </div>
  <div class="ed-stats">
    <div class="ed-stat">
      <span class="ed-stat-value"><em>{{ site.posts.size }}</em></span>
      <span class="ed-stat-label">Articles</span>
    </div>
    <div class="ed-stat">
      <span class="ed-stat-value"><em>{{ site.tags.size }}</em></span>
      <span class="ed-stat-label">Topics</span>
    </div>
    <div class="ed-stat">
      <span class="ed-stat-value">{{ archive_total_words | divided_by: 1000 }}K<em>+</em></span>
      <span class="ed-stat-label">Words Published</span>
    </div>
    <div class="ed-stat">
      <span class="ed-stat-value">~<em>{{ archive_avg_min }}</em> min</span>
      <span class="ed-stat-label">Avg. Read Time</span>
    </div>
  </div>
</section>

<section class="ed-topics" aria-label="Browse by topic">
  <details class="topic-dropdown">
    <summary class="topic-dropdown-summary">
      <span class="topic-dropdown-title"><i class="fa-solid fa-tags"></i> Browse by Topic</span>
      <span class="topic-dropdown-count">{{ site.tags.size }} categories</span>
      <span class="topic-dropdown-chevron"><i class="fa-solid fa-chevron-down"></i></span>
    </summary>
    <div class="topic-dropdown-body">
      <div class="index-tags">
        {% assign archive_all_tags = site.posts | map: "tags" | join: "," | split: "," | uniq | sort %}
        {% for tag in archive_all_tags %}
        <a class="index-tag" href="#{{ tag | slugify }}">{{ tag }}</a>
        {% endfor %}
      </div>
    </div>
  </details>
</section>

<section class="ed-latest" aria-label="Latest articles">
  <div class="ed-sec-head">
    <h2 class="ed-sec-title">Latest Articles</h2>
  </div>
  <div class="ed-grid">
    {% for post in site.posts limit:6 %}
    {% assign t_author = site.data.authors[post.author] %}
    {% assign t_min = post.content | strip_html | number_of_words | divided_by: 200 | plus: 1 %}
    <article class="ed-card" itemscope itemtype="https://schema.org/Article">
      <a class="ed-card-img" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}"{% if post.image %} style="background-image:url('{{ post.image }}');"{% endif %}></a>
      <div class="ed-card-meta">
        <span class="ed-tag">{{ post.tags.first | default: "Article" }}</span>
        <span class="ed-mono">{{ post.date | date: "%b %d, %Y" }}</span>
        <span class="ed-mono">{{ t_author.name | default: post.author }}</span>
      </div>
      <h3 class="ed-card-title" itemprop="headline"><a href="{{ post.url | relative_url }}" itemprop="url">{{ post.title | escape }}</a></h3>
      <p class="ed-card-desc" itemprop="description">{{ post.description }}</p>
      <span class="ed-card-foot">{{ t_min }} min read</span>
    </article>
    {% endfor %}
  </div>
</section>

{% for tag in site.tags %}
<section class="ed-topic" id="{{ tag[0] | slugify }}" aria-label="Articles tagged {{ tag[0] }}">
  <div class="ed-sec-head">
    <h2 class="ed-sec-title">{{ tag[0] }}</h2>
    <span class="ed-mono">{{ tag[1].size }} article{% if tag[1].size != 1 %}s{% endif %}</span>
  </div>
  <ul class="accordion-list">
    {% for post in tag[1] %}
    <li class="accordion-link">
      <a href="{{ post.url | relative_url }}">
        <span class="accordion-link-title">{{ post.title | escape }}</span>
        <span class="accordion-link-date"><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%b %d" }}</time></span>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>
{% endfor %}

{% endif %}

</div>
