---
layout: default
title: "magic-decks"
---
<h2>>cd magic-decks</h2>
<h2>>ls</h2>
<ul>
  {% for post in site.categories.deck %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>