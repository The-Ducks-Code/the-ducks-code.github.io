---
layout: default
title: "blog"
---
<h2>>cd blogs</h2>
<h2>>ls</h2>
<ul>
  {% for post in site.categories.blog %}
    <li>
      <a href="{{ post.url }}">{{ post.rdate }}: {{ post.title }}</a>
    </li>
  {% endfor %}
</ul>