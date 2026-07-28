---
layout: page
title: F9XR Articles
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
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "{{ '/archive' | absolute_url }}?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
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

<div style="text-align:center; padding:2em 0 1em;">
   <h1 style="font-size:1.8em; color:#f8f9fa; margin-bottom:0.3em; border:none; background:none; -webkit-text-fill-color:#f8f9fa;">F9XR Articles</h1>
   <p style="color:#8b8b8b; max-width:520px; margin:0 auto; font-size:1.05em;">
    Engineering digital growth — technical insights, architecture notes, and strategies from the F9XR Team.
  </p>
  <div style="margin-top:1em;">
     <a href="https://f9xr.github.io" style="color:#3b82f6; font-size:0.88em; margin:0 0.5em;">Main Site</a>
     <a href="https://f9xr.github.io/pages/services.html" style="color:#8b8b8b; font-size:0.88em; margin:0 0.5em;">Services</a>
     <a href="https://f9xr.github.io/pages/portfolio.html" style="color:#8b8b8b; font-size:0.88em; margin:0 0.5em;">Portfolio</a>
     <a href="https://f9xr.github.io/pages/contact.html" style="color:#8b8b8b; font-size:0.88em; margin:0 0.5em;">Contact</a>
  </div>
</div>

<hr style="border-top:1px solid #1e1e1e; margin:1.5em 0;">

{% for post in site.posts %}
<article style="margin-bottom:2em; padding-bottom:1.5em; border-bottom:1px solid #151515;">
  <h2 style="margin-top:0;"><a href="{{ post.url | relative_url }}" style="color:#f0f0f0;">{{ post.title | escape }}</a></h2>
  <p style="color:#888; font-size:0.85em; margin-bottom:0.8em;">
    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
    {{ post.date | date: date_format }}
    &nbsp;&mdash;&nbsp; {{ post.author | default: site.author }}
  </p>
  {%- if post.description -%}
    <p style="color:#bbb;">{{ post.description }}</p>
  {%- else -%}
    <p style="color:#bbb;">{{ post.content | strip_html | truncate: 200 }}</p>
  {%- endif -%}
   <a href="{{ post.url | relative_url }}" style="color:#3b82f6; font-size:0.9em;">Read more &rarr;</a>
</article>
{% endfor %}
