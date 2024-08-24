---
layout: default
title: "magic-decks"
---

<ul>
  {% for post in site.categories.deck %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>