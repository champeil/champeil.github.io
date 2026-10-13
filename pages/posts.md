---
layout: section
title: 帖子
subtitle: 站内技术文章，输入关键词检索
description: 技术文章
keywords: 帖子, 文章
comments: false
copyright: false
menu: 帖子
permalink: /posts/
---

<script id="section-data" type="application/json">
[
{% for post in site.posts %}
{"title":{{ post.title | jsonify }},"url":{{ post.url | prepend: site.url | jsonify }},"external":false,"date":{{ post.date | date: "%Y-%m-%d" | jsonify }},"desc":{{ post.description | default: '' | jsonify }},"keywords":{{ post.keywords | default: '' | jsonify }},"meta":{{ post.categories | join: ', ' | jsonify }}}{% unless forloop.last %},{% endunless %}
{% endfor %}
]
</script>
