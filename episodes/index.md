---
layout: page
title: "Episodes"
title_hidden: true
description: "Listen to the F9XR Articles podcast — episodes on web architecture, AI integration, local SEO, and digital systems for business owners and developers."
permalink: /episodes/
---

<div style="text-align:center; margin-bottom:3em;">
  <h1 style="margin-bottom:0.3em;">Episodes</h1>
  <p style="color:#8b8b8b; font-size:1.05em; max-width:600px; margin:0 auto;">Audio episodes on web architecture, AI integration, local SEO, and high-performance digital systems.</p>
</div>

{% assign sorted_episodes = site.episodes | sort: "date" | reverse %}

{% if sorted_episodes.size == 0 %}
<div style="text-align:center; padding:4em 1em; border:1px dashed #1e2024; border-radius:14px;">
  <p style="color:#71717a; font-size:1.1em; margin:0;">No episodes yet. Stay tuned.</p>
</div>
{% else %}

<div style="display:flex; flex-direction:column; gap:1.5em;">
{% for episode in sorted_episodes %}
  <a href="{{ episode.url | relative_url }}" style="display:flex; gap:1.5em; padding:1.5em; background:linear-gradient(135deg, #0c0d10 0%, #111318 100%); border:1px solid #1e2024; border-radius:14px; text-decoration:none; transition:border-color 0.25s, transform 0.25s, box-shadow 0.25s; isolation:isolate; position:relative; overflow:hidden;" onmouseover="this.style.borderColor='#2563eb'; this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 28px rgba(37,99,235,0.16)'" onmouseout="this.style.borderColor='#1e2024'; this.style.transform='none'; this.style.boxShadow='none'">
    {% if episode.image %}
    <div style="flex:0 0 120px; height:120px; border-radius:12px; background-image:url('{{ episode.image }}'); background-size:cover; background-position:center; border:1px solid rgba(255,255,255,0.05);"></div>
    {% endif %}
    <div style="flex:1; min-width:0; display:flex; flex-direction:column; justify-content:center;">
      {% if episode.episode_number %}<p style="margin:0 0 0.3em 0; color:#3b82f6; font-size:0.75em; font-weight:700; text-transform:uppercase; letter-spacing:0.1em;">Episode {{ episode.episode_number }}{% if episode.season %} · Season {{ episode.season }}{% endif %}</p>{% endif %}
      <h2 style="margin:0 0 0.4em 0; font-size:1.2em; color:#f0f0f0; line-height:1.3;">{{ episode.title }}</h2>
      {% if episode.description %}<p style="margin:0 0 0.5em 0; color:#8b8b8b; font-size:0.9em; line-height:1.5; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">{{ episode.description }}</p>{% endif %}
      <div style="display:flex; gap:1em; align-items:center; color:#52525b; font-size:0.8em;">
        <span>{{ episode.date | date: "%B %-d, %Y" }}</span>
        {% if episode.audio_duration %}<span>·</span><span><i class="fa-solid fa-clock" style="margin-right:0.2em;"></i>{{ episode.audio_duration }}</span>{% endif %}
      </div>
    </div>
  </a>
{% endfor %}
</div>

{% endif %}
