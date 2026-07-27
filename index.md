---
layout: page
title: F9XR Articles
---

<div style="text-align:center; padding:2em 0 1em;">
  <span style="font-size:2em; font-weight:800; color:#f0f0f0; letter-spacing:0.05em;">F9<span style="color:#4fc3f7;">XR</span></span>
  <p style="color:#888; max-width:520px; margin:0.8em auto 0; font-size:1.05em;">
    Engineering digital growth — technical insights, architecture notes, and strategies from the F9XR Team.
  </p>
  <div style="margin-top:1.2em;">
    <a href="https://f9xr.github.io" style="color:#4fc3f7; font-size:0.9em; margin:0 0.5em;">Main Site</a>
    <a href="https://f9xr.github.io/pages/services.html" style="color:#888; font-size:0.9em; margin:0 0.5em;">Services</a>
    <a href="https://f9xr.github.io/pages/portfolio.html" style="color:#888; font-size:0.9em; margin:0 0.5em;">Portfolio</a>
    <a href="https://f9xr.github.io/pages/contact.html" style="color:#888; font-size:0.9em; margin:0 0.5em;">Contact</a>
  </div>
</div>

<hr style="border-top:1px solid #1e1e1e; margin:1.5em 0;">

{% for post in site.posts %}
<article style="margin-bottom:2em; padding-bottom:1.5em; border-bottom:1px solid #151515;">
  <h2 style="margin-top:0;"><a href="{{ post.url | relative_url }}" style="color:#f0f0f0;">{{ post.title | escape }}</a></h2>
  <p style="color:#666; font-size:0.85em; margin-bottom:0.8em;">
    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
    {{ post.date | date: date_format }}
    &nbsp;&mdash;&nbsp; {{ post.author | default: site.author }}
  </p>
  <p style="color:#aaa;">{{ post.content | strip_html | truncate: 200 }}</p>
  <a href="{{ post.url | relative_url }}" style="color:#4fc3f7; font-size:0.9em;">Read more &rarr;</a>
</article>
{% endfor %}
