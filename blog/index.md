---
layout: default
title: "blog"
---

<ul>
  {% for post in site.categories.blog %}
    <li>
      <a href="{{ post.url }}">{{ post.rdate }}: {{ post.title }}</a>
    </li>
  {% endfor %}
</ul>