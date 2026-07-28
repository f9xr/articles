---
layout: default
title: Archive — F9XR Articles
description: "Complete archive of all articles by F9XR Team covering web architecture, AI integration, local SEO, and digital growth strategies."
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

<div style="max-width:800px; margin:0 auto; padding:2em 1em;">

<h2 style="color:#f0f0f0; border-bottom:1px solid #1e1e1e; padding-bottom:0.5em;">All Articles</h2>

{% for tag in site.tags %}
  <h3 style="color:#3b82f6; margin-top:1.5em;">{{ tag[0] }}</h3>
  <ul style="list-style:none; padding-left:0;">
    {% for post in tag[1] %}
      <li style="padding:0.5em 0; border-bottom:1px solid #151515;">
        <a href="{{ post.url }}" style="color:#d0d0d0;">{{ post.date | date: "%B %Y" }} — {{ post.title }}</a>
        {%- if post.description -%}
          <p style="color:#777; font-size:0.85em; margin:0.2em 0 0 0;">{{ post.description | truncatewords: 20 }}</p>
        {%- endif -%}
      </li>
    {% endfor %}
  </ul>
{% endfor %}

</div>
