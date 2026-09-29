---
layout: paper
title: NM：Spatialproteomics：多重免疫荧光工具
cate1: 文献分享
cate2: Nature Methods
description: 介绍 Python 软件包 spatialproteomics，用于处理高多重荧光免疫成像数据的端到端工作流
keywords: 文献分享, 科研学习, 空间蛋白组, 多重免疫荧光图像, 工具, 分析工具
---

**Nature Methods**：本文介绍了一个名为 spatialproteomics 的 Python 软件包，用于处理高多重荧光免疫成像数据（如 CODEX、MICS、IMC）。该工具基于 xarray，提供从图像分割、蛋白定量、细胞分型到空间邻域分析的端到端工作流，并能自动同步空间坐标、细胞标签和表达矩阵等多模态维度。研究者在 132 例 B 细胞非霍奇金淋巴瘤（含惰性和侵袭性亚型）的 TMA 及全切片数据上验证了该工具，分析了超过千万个细胞，揭示了侵袭性淋巴瘤中细胞组成、细胞大小、空间聚集模式（如 Ripley's K 和邻域富集）的显著变化。该包与 scverse 生态（anndata/spatialdata）互操作，支持懒加载和并行计算，可处理百 GB 级图像。

![](/images/paper/nm-spatialproteomics.webp)

## 亮点

1. **统一的数据同步机制**：通过 xarray 自动同步图像、分割掩膜、表达矩阵和细胞标签，子集操作自动联动，避免数据不一致，这在同类工具（如 Sopa、SPACEC）中尚不具备。
2. **端到端且高度可定制**：覆盖从原始图像到空间统计全流程，用户可自由替换分割算法（Cellpose/Mesmer/Stardist）、自定义图像处理、量化函数和分型规则（层次门控树、argmax、astir），灵活性远超固定管线（如 MCMICRO、SIMPLI）。
3. **大规模数据处理能力**：基于 Dask 的懒加载和并行计算，可处理 > 100 GB 的全切片图像，内存占用可控，而多数现有工具（如 imcRtools、steinbock）受限于内存或依赖繁琐的 tile 拼接。
4. **跨平台互操作性**：原生支持导出至 anndata 和 spatialdata，无缝对接 scverse 生态（squidpy、SCIMAP、napari），同时提供 R（spatstat、Seurat）导出指导，便于多语言分析流程集成，而多数竞争对手（如 SPACEC）仅限 Python 内部使用。

> 首发于小红书（2026-08-19）· [查看原文](https://www.xiaohongshu.com/explore/6a8511890000000028006ea3?xsec_token=YBTsA5zsgF1XWGFPsk-FfANUs-53MuohZ1Wutcnmsxxx0=&xsec_source=pc_creatormng)
