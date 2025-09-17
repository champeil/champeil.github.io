# GitHub Pages 静态博客项目（支持标签统计 + 每日阅读量 + 简洁设计）

下方给出完整项目结构与文件内容。复制到你仓库即可直接部署使用。无需额外构建工具，使用 GitHub Pages 默认 Jekyll 引擎（不含自定义插件，全部兼容官方白名单）。

## 一、项目结构
```
yourusername.github.io/            # （若你用用户主页仓库，就用这个名字；若用项目页，也可以：blog 或其它）
├─ _config.yml
├─ index.html                      # 首页：文章列表 + 标签云
├─ tags.html                       # 标签汇总页
├─ about.md                        # 关于页面
├─ links.md                        # 相关网站/友链
├─ feed.xml                        # RSS (可选)
├─ _posts/
│   ├─ 2025-09-17-hello-world.md
│   └─ 2025-09-17-second-post.md
├─ _layouts/
│   ├─ default.html
│   └─ post.html
├─ _includes/
│   ├─ head.html
│   └─ footer.html
├─ assets/
│   ├─ css/
│   │   └─ style.css
│   └─ js/
│       ├─ daily-views.js
│       └─ theme.js
└─ favicon.png (可选)
```

---
## 二、关键功能说明
1. 文章使用 Markdown，放入 `_posts`，文件命名：`YYYY-MM-DD-title.md`  
   顶部 Front Matter（YAML）里写 `tags`，系统会自动在首页和 `tags.html` 统计。  
2. 标签统计：使用 Jekyll 自带 `site.tags` 循环，无需插件。  
3. 每日阅读量统计：示例集成了 CountAPI（免费匿名）按“当天日期”生成 key。首次访问自动创建并+1，展示当日全站 PV。  
   - 如果你想更可靠的统计/分析，请换成 GoatCounter/Umami/Google Analytics，说明见后文。  
4. 页脚展示联系方式（可自行修改）。  
5. 设计强调“留白 + 易读”，单文件 CSS，暗色模式自动跟随系统。  
6. 部署：直接 push 到 GitHub Pages，即可访问。

---
## 三、文件内容

### 1. _config.yml
```
title: "我的博客"
description: "一个简洁的个人博客"
url: "https://yourusername.github.io"
author: "你的名字"
timezone: Asia/Shanghai
markdown: kramdown
kramdown:
  input: GFM
permalink: /:year/:month/:day/:title/
paginate: 0
plugins: []   # 不使用自定义插件，保证 GitHub Pages 兼容
collections:
exclude:
  - README.md
  - Gemfile
  - Gemfile.lock
```

### 2. assets/css/style.css
```
:root {
  --bg:#ffffff;
  --fg:#222;
  --accent:#2962ff;
  --muted:#666;
  --border:#e5e5e5;
  --code-bg:#f5f7fa;
  --radius:6px;
  --content-width: 780px;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg:#0f1115;
    --fg:#e5e9f0;
    --accent:#5b8cff;
    --muted:#8892b0;
    --border:#2a3038;
    --code-bg:#1d232b;
  }
  img { opacity:.92; }
}
* { box-sizing:border-box; }
body {
  margin:0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif;
  background:var(--bg);
  color:var(--fg);
  line-height:1.65;
  font-size:16px;
  -webkit-font-smoothing: antialiased;
}
a { color:var(--accent); text-decoration:none; }
a:hover { text-decoration:underline; }
header {
  border-bottom:1px solid var(--border);
  backdrop-filter: blur(10px);
}
nav {
  max-width:var(--content-width);
  margin:0 auto;
  display:flex;
  align-items:center;
  gap:1.25rem;
  padding:.95rem 1.2rem;
}
nav a.brand { font-weight:600; letter-spacing:.5px; }
nav a.active { position:relative; }
nav a.active:after {
  content:"";
  position:absolute;
  left:0; bottom:-6px;
  width:100%; height:2px;
  background:var(--accent);
  border-radius:2px;
}
main {
  max-width:var(--content-width);
  margin:2.2rem auto 3.5rem;
  padding:0 1.2rem;
}
h1,h2,h3 { line-height:1.25; }
h1 { font-size:2.05rem; margin:1.8rem 0 1rem; }
h2 { font-size:1.45rem; margin:1.6rem 0 .75rem; }
h3 { font-size:1.15rem; margin:1.4rem 0 .6rem; }
p { margin:0 0 1.05rem; }
code, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
  font-size:.87rem;
}
pre {
  background:var(--code-bg);
  padding:1rem;
  border-radius:var(--radius);
  overflow:auto;
  border:1px solid var(--border);
}
code {
  background:var(--code-bg);
  padding:.2rem .45rem;
  border-radius:4px;
  border:1px solid var(--border);
}
ul { padding-left:1.25rem; }
.post-list { list-style:none; padding:0; margin:0 0 2rem; }
.post-item { padding:1rem 0; border-bottom:1px solid var(--border); }
.post-item:last-child { border-bottom:none; }
.post-item h2 { margin:.15rem 0 .35rem; font-size:1.28rem; }
.post-meta {
  font-size:.78rem;
  text-transform:uppercase;
  letter-spacing:.5px;
  color:var(--muted);
  display:flex;
  gap:.75rem;
  flex-wrap:wrap;
}
.tags-inline a {
  background:var(--code-bg);
  padding:.25rem .55rem;
  border-radius:16px;
  font-size:.7rem;
  text-decoration:none;
  border:1px solid var(--border);
  color:var(--muted);
}
.tags-inline a:hover { color:var(--accent); border-color:var(--accent); }
.tag-cloud {
  display:flex;
  gap:.55rem;
  flex-wrap:wrap;
  margin:1.2rem 0 2rem;
}
.tag-cloud a {
  --scale:1;
  font-size: calc(.65rem * var(--scale) + .45rem);
  background:var(--code-bg);
  padding:.4rem .7rem;
  border-radius:18px;
  border:1px solid var(--border);
  text-decoration:none;
  color:var(--fg);
  line-height:1;
  position:relative;
}
.tag-cloud a span.count {
  font-size:.65rem;
  color:var(--muted);
  margin-left:.35rem;
}
.tag-cloud a:hover { border-color:var(--accent); color:var(--accent); }
.post-content img { max-width:100%; border-radius:var(--radius); border:1px solid var(--border); }
.post-content blockquote {
  margin:1.2rem 0;
  padding:.9rem 1rem .9rem 1rem;
  border-left:4px solid var(--accent);
  background:var(--code-bg);
  border-radius:0 var(--radius) var(--radius) 0;
}
.divider { height:1px; background:var(--border); margin:2.5rem 0; }
footer {
  border-top:1px solid var(--border);
  padding:2rem 1.2rem 3rem;
  background:linear-gradient(180deg, var(--bg) 0%, rgba(0,0,0,0) 100%);
}
footer .inner {
  max-width:var(--content-width);
  margin:0 auto;
  font-size:.8rem;
  color:var(--muted);
}
.contact-list {
  display:flex;
  gap:1rem;
  flex-wrap:wrap;
  margin:.6rem 0 1.2rem;
  padding:0;
  list-style:none;
}
.contact-list li a { color:var(--muted); text-decoration:none; }
.contact-list li a:hover { color:var(--accent); }
.views-box {
  margin-top:1rem;
  font-size:.75rem;
  color:var(--muted);
}
.rss-badge {
  background:var(--accent);
  color:#fff;
  padding:.25rem .55rem;
  border-radius:14px;
  font-size:.65rem;
  text-decoration:none;
}
table {
  width:100%;
  border-collapse:collapse;
  margin:1.5rem 0;
  font-size:.9rem;
}
th,td {
  border:1px solid var(--border);
  padding:.55rem .7rem;
  text-align:left;
}
th { background:var(--code-bg); }
.search-box {
  margin:1.5rem 0 2rem;
}
.search-box input {
  width:100%;
  padding:.65rem .75rem;
  border:1px solid var(--border);
  border-radius: var(--radius);
  font-size:.9rem;
  background:var(--code-bg);
  outline:none;
}
.search-box input:focus {
  border-color:var(--accent);
}
.no-result {
  display:none;
  font-size:.8rem;
  color:var(--muted);
  margin-top:1rem;
}
@media (max-width:680px) {
  nav { flex-wrap:wrap; }
  h1 { font-size:1.7rem; }
  .post-item h2 { font-size:1.12rem; }
}
```

### 3. assets/js/daily-views.js
（使用 CountAPI 统计每日全站 PV；如果不想外部服务，删掉即可）
```
(function(){
  const el = document.getElementById('daily-views-number');
  if(!el) return;
  const today = new Date().toISOString().slice(0,10); // YYYY-MM-DD
  const namespace = 'your_blog_namespace';  // 可自定义，建议：你的 GitHub 用户名
  const key = 'pv_' + today;
  const url = `https://api.countapi.xyz/hit/${namespace}/${key}`;
  fetch(url)
    .then(r=>r.json())
    .then(data=>{
      el.textContent = data.value;
    })
    .catch(()=> {
      el.textContent = '—';
    });
})();
```

### 4. assets/js/theme.js （可扩展，当前留空或未来放暗色模式开关）
```
// 预留：若需要手动主题切换可在此扩展
```

### 5. _includes/head.html
```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>{% if page.title %}{{ page.title }} | {{ site.title }}{% else %}{{ site.title }}{% endif %}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="{{ page.description | default: site.description }}">
  <link rel="alternate" type="application/rss+xml" title="{{ site.title }} RSS" href="{{ '/feed.xml' | relative_url }}">
  <link rel="icon" href="{{ '/favicon.png' | relative_url }}">
  <meta name="theme-color" content="#2962ff" />
  <meta property="og:title" content="{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %}">
  <meta property="og:description" content="{{ page.description | default: site.description }}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{{ site.url }}{{ page.url }}">
  <meta property="og:image" content="{{ site.url }}/favicon.png">
  <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
  <script defer src="{{ '/assets/js/daily-views.js' | relative_url }}"></script>
  <script defer src="{{ '/assets/js/theme.js' | relative_url }}"></script>
  <!-- 可选：GoatCounter 统计（替换 yourid）-->
  <!-- <script data-goatcounter="https://yourid.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script> -->
</head>
```

### 6. _includes/footer.html
```
<footer>
  <div class="inner">
    <div class="divider"></div>
    <ul class="contact-list">
      <li><strong>联系：</strong></li>
      <li><a href="mailto:you@example.com">Email</a></li>
      <li><a href="https://github.com/yourusername" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="https://twitter.com/yourhandle" target="_blank" rel="noopener">Twitter/X</a></li>
      <li><a href="https://weibo.com/你的" target="_blank" rel="noopener">Weibo</a></li>
      <li><a href="weixin://dl/chat?yourid">WeChat</a></li>
    </ul>
    <div class="views-box">
      今日全站浏览量：<span id="daily-views-number">...</span>
      <span style="margin-left:1rem;">订阅：<a class="rss-badge" href="{{ '/feed.xml' | relative_url }}">RSS</a></span>
    </div>
    <p style="margin-top:1.2rem;">© {{ site.time | date: "%Y" }} {{ site.author }} · 由 GitHub Pages 驱动</p>
  </div>
</footer>
</body>
</html>
```

### 7. _layouts/default.html
```
{% include head.html %}
<body>
  <header>
    <nav>
      <a class="brand" href="{{ '/' | relative_url }}">{{ site.title }}</a>
      <a href="{{ '/' | relative_url }}" {% if page.url == '/' %}class="active"{% endif %}>博客</a>
      <a href="{{ '/tags.html' | relative_url }}" {% if page.url contains 'tags.html' %}class="active"{% endif %}>标签</a>
      <a href="{{ '/about' | relative_url }}" {% if page.url contains 'about' %}class="active"{% endif %}>关于</a>
      <a href="{{ '/links' | relative_url }}" {% if page.url contains 'links' %}class="active"{% endif %}>相关链接</a>
    </nav>
  </header>
  <main>
    {{ content }}
  </main>
  {% include footer.html %}
```

### 8. _layouts/post.html
```
---
layout: default
---
<article class="post">
  <header>
    <h1>{{ page.title }}</h1>
    <div class="post-meta">
      <span>{{ page.date | date: "%Y-%m-%d" }}</span>
      {% if page.tags %}
        <span class="tags-inline">
          {% for tag in page.tags %}
            <a href="{{ '/tags.html#' | append: tag | relative_url }}">{{ tag }}</a>
          {% endfor %}
        </span>
      {% endif %}
    </div>
  </header>
  <div class="post-content">
    {{ content }}
  </div>
</article>
```

### 9. index.html
```
---
layout: default
title: 博客
---
<h1>最新文章</h1>

<div class="search-box">
  <input type="text" id="search" placeholder="搜索标题或标签..." />
  <div class="no-result" id="no-result">未找到匹配文章</div>
</div>

<ul class="post-list" id="post-list">
  {% assign posts_sorted = site.posts %}
  {% for post in posts_sorted %}
    <li class="post-item" data-title="{{ post.title | downcase }}" data-tags="{% for t in post.tags %}{{ t | downcase }} {% endfor %}">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <div class="post-meta">
        <span>{{ post.date | date: "%Y-%m-%d" }}</span>
        {% if post.tags %}
          <span class="tags-inline">
            {% for tag in post.tags %}
              <a href="{{ '/tags.html#' | append: tag | relative_url }}">{{ tag }}</a>
            {% endfor %}
          </span>
        {% endif %}
      </div>
      {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>

<h2>标签云</h2>
<div class="tag-cloud">
  {% assign all_tags = site.tags %}
  {% for tag in all_tags %}
    {% assign tag_name = tag[0] %}
    {% assign posts_in_tag = tag[1] %}
    {% assign count = posts_in_tag | size %}
    {% comment %}
      简单计算 scale：最小 1 最大 2 （可调）；不用复杂逻辑以保持纯 Liquid 兼容
    {% endcomment %}
    {% assign scale = 1 %}
    {% if count > 6 %}{% assign scale = 2 %}
    {% elsif count > 3 %}{% assign scale = 1.5 %}
    {% endif %}
    <a href="{{ '/tags.html#' | append: tag_name | relative_url }}" style="--scale:{{ scale }}">
      {{ tag_name }} <span class="count">{{ count }}</span>
    </a>
  {% endfor %}
</div>

<script>
(function(){
  const input = document.getElementById('search');
  const list = document.getElementById('post-list');
  const items = Array.from(list.querySelectorAll('.post-item'));
  const noResult = document.getElementById('no-result');
  function filter(){
    const q = input.value.trim().toLowerCase();
    let visible = 0;
    items.forEach(li=>{
      if(!q){
        li.style.display = '';
        visible++;
        return;
      }
      const title = li.getAttribute('data-title');
      const tags = li.getAttribute('data-tags');
      if(title.includes(q) || tags.includes(q)){
        li.style.display = '';
        visible++;
      } else {
        li.style.display = 'none';
      }
    });
    noResult.style.display = visible ? 'none':'block';
  }
  input.addEventListener('input', filter);
})();
</script>
```

### 10. tags.html
```
---
layout: default
title: 标签
---
<h1>标签</h1>
<p>按标签浏览文章。</p>
<div class="tag-cloud">
  {% for tag in site.tags %}
    {% assign tag_name = tag[0] %}
    {% assign tag_count = tag[1] | size %}
    <a href="#{{ tag_name }}">{{ tag_name }} <span class="count">{{ tag_count }}</span></a>
  {% endfor %}
</div>
<hr style="margin:2.2rem 0;">
{% for tag in site.tags %}
  {% assign tag_name = tag[0] %}
  <h2 id="{{ tag_name }}">{{ tag_name }}</h2>
  <ul class="post-list">
    {% for post in tag[1] %}
      <li class="post-item">
        <h2 style="font-size:1.05rem;"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <div class="post-meta">
          <span>{{ post.date | date: "%Y-%m-%d" }}</span>
        </div>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
```

### 11. about.md
```
---
layout: default
title: 关于
permalink: /about
---
# 关于我
这里写你的自我介绍、技术方向、兴趣等。

## 博客说明
- 技术栈：GitHub Pages + Jekyll（无额外插件）
- 支持：Markdown、代码高亮（可后续添加）、标签云、搜索（前端过滤）

## 版权
如果没有特殊说明，文章采用 CC BY-NC-SA 4.0 协议。
```

### 12. links.md
```
---
layout: default
title: 相关链接
permalink: /links
---
# 相关网站 / 友链
欢迎申请互换友链（在关于页面联系方式中联系我）。

| 名称 | 描述 | 链接 |
| ---- | ---- | ---- |
| GitHub | 代码托管平台 | https://github.com |
| OpenAI | AI 平台 | https://openai.com |

如果添加：
1. 名称
2. 链接
3. 描述
通过邮件或 issue 告诉我。
```

### 13. _posts/2025-09-17-hello-world.md
```
---
layout: post
title: "你好，世界：第一篇文章"
date: 2025-09-17 10:00:00 +0800
tags: [随笔, 起步]
---
这是我的第一篇博客文章。使用 **Markdown** 撰写。

## 示例
```bash
echo "Hello Blog"
```

> 你可以在 front matter 中添加多个标签，系统会自动归类。
```

### 14. _posts/2025-09-17-second-post.md
```
---
layout: post
title: "第二篇：功能演示"
date: 2025-09-17 11:00:00 +0800
tags: [演示, 技术]
---
本文展示标签统计、搜索、以及每日 PV 显示等功能。

- 标签云自动计算标签出现次数
- 首页搜索支持按标题或标签匹配（前端 JS）
- 每日 PV 使用 CountAPI（若需更专业统计可换 GoatCounter/Umami）

### TODO
后续可以添加：
- 代码高亮（通过添加 highlight 样式或 prism.js）
- 站内搜索（使用 lunr.js）
- 评论系统（giscus / utterances）
```

### 15. feed.xml （RSS，可选）
```
---
layout: nil
---
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>{{ site.title | xml_escape }}</title>
    <link>{{ site.url }}</link>
    <description>{{ site.description | xml_escape }}</description>
    <lastBuildDate>{{ site.time | date_to_rfc822 }}</lastBuildDate>
    {% for post in site.posts limit:20 %}
    <item>
      <title>{{ post.title | xml_escape }}</title>
      <link>{{ site.url }}{{ post.url }}</link>
      <pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
      <description>{{ post.excerpt | strip_html | xml_escape }}</description>
      <guid>{{ site.url }}{{ post.url }}</guid>
    </item>
    {% endfor %}
  </channel>
</rss>
```

---

## 四、部署步骤（GitHub Pages）

1. 创建仓库：
   - 用户主页模式：仓库名称必须是：yourusername.github.io  
   - 或 项目模式：任意仓库名称（例如 blog），稍后在 Settings -> Pages 里启用并生成访问 URL。

2. 将上述文件结构复制进仓库根目录。
3. (可选) 替换：_config.yml 中的 url、title、author、description。
4. 推送：
   ```
   git init
   git remote add origin git@github.com:yourusername/yourusername.github.io.git
   git add .
   git commit -m "init blog"
   git push -u origin main
   ```
5. 等待 1~3 分钟，访问：https://yourusername.github.io
6. 如果使用“项目仓库模式”，需在 Settings -> Pages:
   - Source 选择：Deploy from a branch
   - Branch 选 main / root
   - 保存后查看提示的访问地址。

---

## 五、写新文章

1. 在 `_posts/` 新建：
   ```
   2025-09-18-my-new-post.md
   ```
2. Front Matter 示例：
   ```
   ---
   layout: post
   title: "新的开始"
   date: 2025-09-18 09:30:00 +0800
   tags: [技术, 随笔]
   ---
   正文内容...
   ```
3. 提交后自动构建，刷新首页即可看到。

---

## 六、标签统计机制说明
- Jekyll 自动解析 front matter 中的 `tags` 数组
- `site.tags` 结构：键为标签名，值为对应文章数组
- 首页与 tags.html 使用 Liquid 循环输出并统计 size
- 无需数据库

---

## 七、每日阅读量统计说明

当前示例使用 CountAPI：
- 优点：零后端、免费、即用
- 缺点：不可保证长期稳定；有人可伪造请求
- Key 设计：pv_YYYY-MM-DD

想要更专业：
1. GoatCounter（推荐）：注册后替换 head.html 中脚本，并登录后台看每日 PV。
2. Umami / Plausible：需自己部署。
3. Google Analytics：添加 GA 代码即可（隐私注意）。

若你希望“在页面上显示真实每日 PV”（且来自 GA/GoatCounter），需调用其 API（大多需要 token，不适合前端直接曝光），可以：
- 用 GitHub Action 定时请求 API -> 写入 JSON -> 前端拉取显示
- 或 用 Cloudflare Worker 代理 API

简化示例已足够快速上线。

---

## 八、可选增强建议

- 代码高亮：在 head.html 中引入 Prism.css + Prism.js
- 评论系统：giscus（依赖 GitHub Discussion），添加到 post.html 尾部
- 站内全文搜索：使用 lunr.js 预构建 JSON（纯前端可做：循环 site.posts 输出一个隐藏 JSON）
- 文章置顶：在 front matter 加 `pin: true`，首页先筛选 pin 的显示
- 部署自动化：使用 GitHub Action 校验链接、生成 sitemap.xml

---

## 九、常见问题 (FAQ)

1. 标签页顺序不固定？  
   Liquid 默认按标签名字母排序（或不保证顺序），可先收集再排序；如需中文排序需额外处理（可手动指定顺序列表）。

2. 文章不显示？  
   - 文件命名是否符合 `YYYY-MM-DD-title.md`
   - Front Matter 是否有 `layout: post`

3. 页面样式未生效？  
   - 检查路径：`/assets/css/style.css`
   - F12 看 404

4. Daily Views 一直是 "—"？  
   - 检查浏览器控制台网络请求是否被拦截
   - 确认未开启严格的跨域阻拦或网络代理

---

## 十、后续你需要做的（最少）
1. 替换联系方式
2. 修改 `_config.yml` 的站点信息
3. 改 favicon（可放一个 64×64 PNG）

---

祝你使用愉快，如需我后续帮你加：搜索/评论/部署脚本 等，可以继续提出！
