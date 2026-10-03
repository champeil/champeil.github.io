---
layout: categories
title: Keywords
description: 按关键词找文章
keywords: 关键词
comments: false
permalink: /keywords/
---

<section class="container posts-content">
{% assign all_kw = '' %}
{% for post in site.posts %}
{% assign kws = post.keywords | default: '' | replace: '，', ',' | replace: '、', ',' | split: ',' %}
{% for kw in kws %}
{% assign k = kw | strip %}
{% if k != '' %}{% assign all_kw = all_kw | append: k | append: '|' %}{% endif %}
{% endfor %}
{% endfor %}
{% assign kw_list = all_kw | split: '|' | sort | uniq %}
{% for k in kw_list %}
<h3 id="{{ k }}">{{ k }}</h3>
<ol class="posts-list">
{% assign needle = '|' | append: k | append: '|' %}
{% for post in site.posts %}
{% assign norm = post.keywords | default: '' | replace: '，', ',' | replace: '、', ',' | replace: ',', '|' %}
{% assign norm = '|' | append: norm | append: '|' %}
{% if norm contains needle %}
<li class="posts-list-item">
<span class="posts-list-meta">{{ post.date | date:"%Y-%m-%d" }}</span>
<a class="posts-list-name" href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
</li>
{% endif %}
{% endfor %}
</ol>
{% endfor %}
</section>
<!-- /section.content -->
