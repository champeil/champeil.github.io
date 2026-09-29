---
layout: paper
title: NB：SComatic：单细胞检测体细胞突变
cate1: 文献分享
cate2: Nature Biotechnology
description: 无需匹配 DNA 测序数据，直接从单细胞转录组和染色质开放性数据中检测体细胞突变的新算法
keywords: 文献分享, 科研学习, 单细胞转录组, 单细胞atac, 体细胞突变, 工具
---

**Nature Biotechnology**：SComatic 是一种无需匹配 DNA 测序数据、直接从单细胞转录组（scRNA-seq）和染色质开放性（scATAC-seq）数据中检测体细胞突变的新算法。研究基于 268 万余个单细胞、涵盖 688 个数据集（皮肤鳞癌、结直肠癌、卵巢癌、肾癌、骨髓增殖性肿瘤及正常组织），利用 beta-binomial 统计检验与正常样本对照库（PON）区分真实突变与测序噪声、RNA 编辑及生殖细胞多态性，实现细胞类型分辨率的突变谱与克隆异质性分析。

![](/images/paper/nb-scomatic.webp)

## 亮点

SComatic 首次打通了"现有海量单细胞图谱数据（Human Cell Atlas 等）→ 体细胞突变检测"的通路，无需额外测序成本，为泛癌种、泛组织的克隆演化与体细胞镶嵌研究提供了普适性工具。

> 首发于小红书（2026-08-04）· [查看原文](https://www.xiaohongshu.com/explore/6a7147020000000025009d34)
