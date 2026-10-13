---
layout: section
title: GitHub项目分享
subtitle: 开源项目整理，输入关键词检索
description: GitHub项目分享
keywords: GitHub项目分享
comments: false
copyright: false
menu: 项目分享
permalink: /projects/
---

<script id="section-data" type="application/json">
[
{% assign items = site.paper | where: 'cate1', 'GitHub项目' | sort: 'title' %}
{% for item in items %}
{"title":{{ item.title | jsonify }},"url":{% if item.type == 'link' %}{{ item.link | jsonify }}{% else %}{{ item.url | prepend: site.url | jsonify }}{% endif %},"external":{% if item.type == 'link' %}true{% else %}false{% endif %},"date":"","desc":{{ item.description | default: '' | jsonify }},"keywords":{{ item.keywords | default: '' | jsonify }},"meta":{{ item.cate2 | default: '' | jsonify }}}{% unless forloop.last %},{% endunless %}
{% endfor %}
]
</script>
