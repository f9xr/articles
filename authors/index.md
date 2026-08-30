---
layout: page
title: Authors — F9XR Articles
title_hidden: true
description: "Meet the F9XR Editorial Team and the contributors behind F9XR Articles — the people engineering digital growth across web performance, AI integration, and local SEO."
keywords: "F9XR Articles authors, F9XR Editorial Team, Mohammed Ahetasham Uddin, Ankush Santra, Masna Sudhir, F9XR Team"
---

<h1 class="sr-only">Authors — F9XR Articles</h1>

<p>F9XR Articles is published by the <a href="{{ '/authors/f9xr-team/' | relative_url }}">F9XR Editorial Team</a> and its contributors. Each profile links to the author's credentials and published articles.</p>

<div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:1em;">
  {% for a in site.data.authors %}
    {% assign a_key = a[0] %}
    {% assign a_rec = a[1] %}
    {% assign a_posts = site.posts | where: "author", a_key %}
    <a href="{{ a_rec.url | relative_url }}" style="text-decoration:none; border:1px solid #1e2024; border-radius:12px; padding:1.25em; background:rgba(255,255,255,0.02); display:block; transition:border-color 0.2s;">
      <img src="{{ a_rec.avatar | default: '/logo.webp' | relative_url }}" alt="{{ a_rec.name }}" width="56" height="56" style="border-radius:50%; margin-bottom:0.6em;" loading="lazy">
      <div style="font-weight:700; color:#e6edf3;">{{ a_rec.name }}</div>
      <div style="font-size:0.85em; color:#71717a; margin:0.2em 0 0.7em;">{{ a_rec.role }}</div>
      <div style="font-size:0.8em; color:#3b82f6;">{{ a_posts.size }} article{{ a_posts.size | pluralize }}</div>
    </a>
  {% endfor %}
</div>