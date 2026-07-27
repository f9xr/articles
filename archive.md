---
layout: page
title: Archive
---

<h2 style="color:#f0f0f0; border-bottom:1px solid #1e1e1e; padding-bottom:0.5em;">All Articles</h2>

{% for tag in site.tags %}
  <h3 style="color:#4fc3f7; margin-top:1.5em;">{{ tag[0] }}</h3>
  <ul style="list-style:none; padding-left:0;">
    {% for post in tag[1] %}
      <li style="padding:0.5em 0; border-bottom:1px solid #151515;">
        <a href="{{ post.url }}" style="color:#d0d0d0;">{{ post.date | date: "%B %Y" }} — {{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
