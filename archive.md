---
layout: default
title: Archive — F9XR Articles
description: "Complete archive of all articles by F9XR Team covering web architecture, AI integration, local SEO, and digital growth strategies."
keywords: "F9XR articles archive, web architecture, AI integration, local SEO, digital growth, technical SEO, all articles"
---

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

<div class="archive-container">

<h1 class="archive-heading">All Articles</h1>

{% for tag in site.tags %}
  <h2 class="archive-tag-heading" id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
  <ul class="archive-list">
    {% for post in tag[1] %}
      <li class="archive-item">
        <a href="{{ post.url | relative_url }}" class="archive-link">{{ post.date | date: "%B %Y" }} — {{ post.title }}</a>
        {%- if post.description -%}
          <p class="archive-description">{{ post.description | truncatewords: 20 }}</p>
        {%- endif -%}
      </li>
    {% endfor %}
  </ul>
{% endfor %}

</div>
