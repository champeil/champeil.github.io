---
layout: paper
title: Paper
description: 文献分享
keywords: 文献, Paper
comments: false
copyright: false
menu: 文献
permalink: /paper/
---

> 分享好康的文献

{% case site.components.paper.view %}

{% when 'list' %}

<ul class="listing">
{% for paper in site.paper %}
{% if paper.title != "Paper Template" and paper.topmost == true %}
<li class="listing-item"><a href="{{ site.url }}{{ paper.url }}"><span class="top-most-flag">[置顶]</span>{{ paper.title }}</a></li>
{% endif %}
{% endfor %}
{% for paper in site.paper %}
{% if paper.title != "Paper Template" and paper.topmost != true %}
<li class="listing-item"><a href="{{ site.url }}{{ paper.url }}">{{ paper.title }}<span style="font-size:12px;color:red;font-style:italic;">{%if paper.layout == 'mindmap' %}  mindmap{% endif %}</span></a></li>
{% endif %}
{% endfor %}
</ul>

{% when 'cate' %}

<div id="kw-cloud-wrap" class="collapsed">
<button id="kw-toggle" class="kw-toggle">关键词 <span id="kw-total"></span> <span id="kw-arrow">▸</span></button>
<div id="kw-cloud"></div>
<button id="kw-more" class="kw-chip" style="display:none">展开全部</button>
</div>

<div id="kw-bar" hidden>
正在按关键词 <b id="kw-current"></b> 筛选（<span id="kw-count"></span> 篇）
<button id="kw-clear" class="kw-chip">✕ 清除筛选</button>
</div>

<style>
.kw-chip{background:#f1f3f5;border:1px solid #dee2e6;border-radius:999px;padding:2px 10px;margin:2px;font-size:12px;color:#495057;cursor:pointer;line-height:1.8}
.kw-chip:hover{background:#e7f5ff;border-color:#74c0fc;color:#1971c2}
.kw-chip.active{background:#1971c2;color:#fff;border-color:#1971c2}
.kw-chips .kw-chip{font-size:11px;padding:0 8px;color:#868e96;background:transparent;border-color:#e9ecef}
.kw-chips .kw-chip:hover{color:#1971c2;border-color:#74c0fc;background:#e7f5ff}
#kw-cloud{margin:6px 0}
#kw-bar{background:#fff9db;border:1px solid #ffd43b;border-radius:8px;padding:8px 12px;margin:12px 0;font-size:14px}
#kw-bar .kw-chip{background:#fff}
#kw-cloud-wrap.collapsed #kw-cloud,#kw-cloud-wrap.collapsed #kw-more{display:none}
.kw-toggle{background:none;border:none;font-size:16px;font-weight:bold;cursor:pointer;padding:4px 0;color:inherit}
.kw-toggle:hover{color:#1971c2}
#kw-total{font-weight:normal;font-size:12px;color:#888}
</style>

<div id="paper-groups">
{% assign item_grouped = site.paper | where_exp: 'item', 'item.title != "Paper Template"' | group_by: 'cate1' | sort: 'name' %}
{% for group in item_grouped %}
<div class="kw-group">
<h3>{{ group.name }}</h3>
{% assign cate_items = group.items | sort: 'title' %}
{% assign item2_grouped = cate_items | group_by: 'cate2' | sort: 'name' %}
{% for sub_group in item2_grouped %}
<div class="kw-subgroup">
{% assign name_len = sub_group.name | size %}
{% if name_len > 0 -%}
<i>{{ sub_group.name }}: <sup>{{ sub_group.items | size }}</sup></i>
{%- endif -%}
{%- assign item_count = sub_group.items | size -%}
{%- assign item_index = 0 -%}
{%- assign show_chips = true -%}
{%- if group.name == 'GitHub项目' or group.name == '文献分享' -%}{%- assign show_chips = false -%}{%- endif -%}
{%- for item in sub_group.items -%}
{%- assign item_index = item_index | plus: 1 -%}
<span class="paper-item" data-keywords="{{ item.keywords | replace: '，', ',' | replace: '、', ',' | escape }}"><a href="{%- if item.type == 'link' -%}{{ item.link }}{%- else -%}{{ site.url }}{{ item.url }}{%- endif -%}" style="display:inline-block;padding:0.5em" {% if item.type == 'link' %} target="_blank" {% endif %}>{{ item.title }}<span style="font-size:12px;color:red;font-style:italic;">{%if item.layout == 'mindmap' %}  mindmap{% endif %}</span></a>{% if show_chips %}{%- assign kws = item.keywords | replace: '，', ',' | replace: '、', ',' | split: ',' -%}<span class="kw-chips">{%- for kw in kws -%}{%- assign k = kw | strip -%}{%- if k != '' -%}<button class="kw-chip" data-kw="{{ k | escape }}">#{{ k }}</button>{%- endif -%}{%- endfor -%}</span>{% endif %}</span>{%- if item_index < item_count -%}<span class="kw-sep"> <b>·</b></span>{%- endif -%}
{%- endfor -%}
</div>
{% endfor %}
</div>
{% endfor %}
</div>

<script>
(function(){
  var items = Array.prototype.slice.call(document.querySelectorAll('.paper-item'));
  function kwsOf(el){
    return (el.getAttribute('data-keywords') || '').split(/[,，、]/).map(function(s){ return s.trim(); }).filter(Boolean);
  }
  var freq = {};
  items.forEach(function(el){ kwsOf(el).forEach(function(k){ freq[k] = (freq[k] || 0) + 1; }); });
  var sorted = Object.keys(freq).sort(function(a, b){ return freq[b] - freq[a]; });
  var cloud = document.getElementById('kw-cloud');
  var moreBtn = document.getElementById('kw-more');
  var bar = document.getElementById('kw-bar');
  var LIMIT = 40, expanded = false, active = null;

  function chipEl(k, extra){
    var b = document.createElement('button');
    b.className = 'kw-chip' + (extra ? ' ' + extra : '');
    b.setAttribute('data-kw', k);
    b.textContent = '#' + k;
    if (extra === 'kw-cloud-chip'){
      var sup = document.createElement('sup');
      sup.textContent = ' ' + freq[k];
      b.appendChild(sup);
    }
    return b;
  }

  function renderCloud(){
    cloud.innerHTML = '';
    var list = expanded ? sorted : sorted.slice(0, LIMIT);
    list.forEach(function(k){
      var c = chipEl(k, 'kw-cloud-chip');
      if (k === active) c.classList.add('active');
      cloud.appendChild(c);
    });
    moreBtn.style.display = (!expanded && sorted.length > LIMIT) ? '' : 'none';
  }

  function setFilter(kw){
    active = kw;
    var n = 0;
    items.forEach(function(el){
      var show = !kw || kwsOf(el).indexOf(kw) !== -1;
      el.style.display = show ? '' : 'none';
      if (show) n++;
    });
    Array.prototype.forEach.call(document.querySelectorAll('.kw-sep'), function(s){
      s.style.display = kw ? 'none' : '';
    });
    Array.prototype.forEach.call(document.querySelectorAll('.kw-subgroup'), function(g){
      var vis = g.querySelector('.paper-item:not([style*="none"])');
      g.style.display = vis ? '' : 'none';
    });
    Array.prototype.forEach.call(document.querySelectorAll('.kw-group'), function(g){
      var vis = g.querySelector('.kw-subgroup:not([style*="none"])');
      g.style.display = vis ? '' : 'none';
    });
    if (kw){
      document.getElementById('kw-current').textContent = '#' + kw;
      document.getElementById('kw-count').textContent = n;
      bar.hidden = false;
      if (location.hash !== '#kw=' + encodeURIComponent(kw)) location.hash = 'kw=' + encodeURIComponent(kw);
    } else {
      bar.hidden = true;
      if (location.hash.indexOf('#kw=') === 0) history.replaceState(null, '', location.pathname + location.search);
    }
    renderCloud();
    Array.prototype.forEach.call(document.querySelectorAll('.kw-chip'), function(c){
      c.classList.toggle('active', c.getAttribute('data-kw') === kw);
    });
  }

  document.addEventListener('click', function(e){
    var chip = e.target.closest ? e.target.closest('.kw-chip') : null;
    if (chip && chip.getAttribute('data-kw')){
      var k = chip.getAttribute('data-kw');
      setFilter(k === active ? null : k);
      return;
    }
    if (e.target.closest && e.target.closest('#kw-clear')){ setFilter(null); return; }
    if (e.target.closest && e.target.closest('#kw-more')){ expanded = true; renderCloud(); return; }
  });

  function fromHash(){
    var m = location.hash.match(/^#kw=(.+)$/);
    return m ? decodeURIComponent(m[1]) : null;
  }
  window.addEventListener('hashchange', function(){ setFilter(fromHash()); });

  var wrap = document.getElementById('kw-cloud-wrap');
  var arrow = document.getElementById('kw-arrow');
  document.getElementById('kw-total').textContent = '(' + sorted.length + ')';
  document.getElementById('kw-toggle').addEventListener('click', function(){
    wrap.classList.toggle('collapsed');
    arrow.textContent = wrap.classList.contains('collapsed') ? '\u25b8' : '\u25be';
  });

  renderCloud();
  var init = fromHash();
  if (init && freq[init]) setFilter(init);
})();
</script>

{% endcase %}
