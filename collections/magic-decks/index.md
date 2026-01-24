---
layout: default
title: "magic-decks"
---
<h2>>cd magic-decks</h2>
<h2>>ls</h2>
<ul>
  {% for magic-deck in site.magic-decks %}
      <h3>><a href="{{ magic-deck.url | relative_url }}">{{ magic-deck.title }}</a></h3>
  {% endfor %}
</ul>