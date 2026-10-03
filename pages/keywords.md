---
layout: categories
title: Keywords
description: 按关键词找文章
keywords: 关键词
comments: false
permalink: /keywords/
---

<section class="container posts-content">
<style>
.kw-index{line-height:2}
.kw-index a{display:inline-block;margin:0 6px;font-size:13px}
.kw-index a:hover{color:#0f766e}
</style>
{% assign all_kw = '' %}
{% for post in site.posts %}
{% assign kws = post.keywords | default: '' | replace: '，', ',' | replace: '、', ',' | split: ',' %}
{% for kw in kws %}
{% assign k = kw | strip %}
{% if k != '' %}{% assign all_kw = all_kw | append: k | append: '|' %}{% endif %}
{% endfor %}
{% endfor %}
{% assign kw_list = all_kw | split: '|' | sort | uniq %}
<p class="kw-index">快速定位：{% for k in kw_list %}<a href="#{{ k }}">{{ k }}</a>{% endfor %}</p>
<hr>
{% for k in kw_list %}
{% assign needle = '|' | append: k | append: '|' %}
{% assign kc = 0 %}
{% for post in site.posts %}
{% assign _norm = post.keywords | default: '' | replace: '，', ',' | replace: '、', ',' | replace: ',', '|' %}
{% assign _norm = '|' | append: _norm | append: '|' %}
{% if _norm contains needle %}{% assign kc = kc | plus: 1 %}{% endif %}
{% endfor %}
<h3 id="{{ k }}">{{ k }} <sup>{{ kc }}</sup></h3>
<ol class="posts-list">
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
