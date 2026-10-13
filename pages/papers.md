---
layout: section
title: 文献分享
subtitle: 文献解读与分享，输入关键词检索
description: 文献分享
keywords: 文献分享
comments: false
copyright: false
menu: 文献分享
permalink: /papers/
---

<script id="section-data" type="application/json">
[
{% assign items = site.paper | where: 'cate1', '文献分享' | sort: 'title' %}
{% for item in items %}
{"title":{{ item.title | jsonify }},"url":{{ item.url | prepend: site.url | jsonify }},"external":false,"date":"","desc":{{ item.description | default: '' | jsonify }},"keywords":{{ item.keywords | default: '' | jsonify }},"meta":{{ item.cate2 | default: '' | jsonify }}}{% unless forloop.last %},{% endunless %}
{% endfor %}
]
</script>
