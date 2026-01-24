---
layout: default
title: "blog"
---
<h2>>cd blogs</h2>
<h2>>ls</h2>
<ul>

{% assign sorted = site.blogs | reverse %}
  {% for item in sorted %}
    <h3>><a href="{{ item.url | relative_url }}">{{ item.date| date: "%Y-%m-%d" }}: {{ item.title }}</a></h3>
  {% endfor %}
</ul>