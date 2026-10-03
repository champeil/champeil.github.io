---
layout: page
title: 关于
description: 生物信息 · 肿瘤基因组 · 单细胞与空间组学
keywords: 关于, 简介
comments: true
menu: 关于
permalink: /about/
---

我是 champeil，一名肿瘤基因组学与生物信息学研究者。

**研究方向**：生物信息学、肿瘤学、肿瘤基因组学、单细胞测序、空间组学、影像组学、医学影像与 AI。

**这个小站里有什么**：

- 📝 **文章** — 技术笔记、分析流程与踩坑记录
- 📚 **文献** — 读过的论文分享
- 💻 **GitHub 项目** — 分享过的开源项目，以及自己 fork 的工具整理
- 🏷️ **关键词** — 首页的 Keywords Cloud 可以按关键词找文章，文献页也支持关键词筛选

欢迎交流。


## 联系

<ul>
{% for website in site.data.social %}
<li>{{website.sitename }}：<a href="{{ website.url }}" target="_blank">@{{ website.name }}</a></li>
{% endfor %}
{% if site.url contains 'mazhuang.org' %}
<li>
微信公众号：<br />
<img style="height:192px;width:192px;border:1px solid lightgrey;" src="{{ site.url }}/assets/images/qrcode.jpg" alt="闷骚的程序员" />
</li>
{% endif %}
</ul>


## Skill Keywords

{% for skill in site.data.skills %}
### {{ skill.name }}
<div class="btn-inline">
{% for keyword in skill.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}
