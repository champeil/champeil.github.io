---
layout: page
title: 文献分享
permalink: /papers/
description: 文献解读与分享，输入关键词检索
nav: true
nav_order: 3
---

<style>
.section-search-wrap{margin:4px 0 18px}
#section-q{width:100%;padding:11px 15px;font-size:15px;border:1px solid var(--global-divider-color);border-radius:8px;outline:none;background:var(--global-card-bg-color);color:var(--global-text-color)}
#section-q:focus{border-color:var(--global-theme-color);box-shadow:0 0 0 3px color-mix(in srgb, var(--global-theme-color) 15%, transparent)}
#section-q::placeholder{color:var(--global-text-color-light)}
.section-count{margin:8px 2px 0;font-size:13px;color:var(--global-text-color-light)}
#section-list{list-style:none;padding:0;margin:0}
#section-list .repo-list-item{padding:13px 0;border-bottom:1px solid var(--global-divider-color)}
#section-list .repo-list-name{margin:0 0 2px;font-size:16px;font-weight:600}
#section-list .repo-list-name a{color:var(--global-text-color);text-decoration:none}
#section-list .repo-list-name a:hover{color:var(--global-theme-color)}
.sec-date{font-size:13px;color:var(--global-text-color-light);font-weight:normal;margin-left:10px}
.sec-ext{font-size:12px;color:var(--global-text-color-light);font-weight:normal}
#section-list .repo-list-description{margin:4px 0 0;font-size:14px;color:var(--global-text-color-light)}
.sec-kws{margin-top:7px}
.sec-kw{display:inline-block;margin:2px 5px 2px 0;padding:1px 10px;font-size:12px;color:var(--global-theme-color);background:color-mix(in srgb, var(--global-theme-color) 7%, transparent);border:1px solid color-mix(in srgb, var(--global-theme-color) 35%, transparent);border-radius:999px;cursor:pointer}
.sec-kw:hover{background:var(--global-theme-color);border-color:var(--global-theme-color);color:var(--global-hover-text-color)}
.sec-badge{display:inline-block;margin-left:10px;padding:1px 8px;font-size:12px;color:var(--global-text-color-light);background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:4px;font-weight:normal;vertical-align:1px}
.section-empty{padding:48px 0;text-align:center;color:var(--global-text-color-light);font-size:15px}
</style>

<div class="section-search-wrap">
  <input id="section-q" type="text" placeholder="输入关键词检索…" autocomplete="off">
  <div id="section-count" class="section-count"></div>
</div>
<ol id="section-list" class="repo-list"></ol>
<div id="section-empty" class="section-empty" hidden>没有找到匹配的内容，换个关键词试试</div>

<script id="section-data" type="application/json">
[
{% assign items = site.paper | where: 'cate1', '文献分享' | sort: 'title' %}
{% for item in items %}
{"title":{{ item.title | jsonify }},"url":{{ item.url | prepend: site.url | jsonify }},"external":false,"date":"","desc":{{ item.description | default: '' | jsonify }},"keywords":{{ item.keywords | default: '' | jsonify }},"meta":{{ item.cate2 | default: '' | jsonify }}}{% unless forloop.last %},{% endunless %}
{% endfor %}
]
</script>

{% include section-search.html %}
