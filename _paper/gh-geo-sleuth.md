---
layout: paper
title: ai skill：geo-sleuth
cate1: GitHub项目
cate2: AI Skill
description: geo-sleuth：面向 AI Agent 的照片定位技能，一张照片 + 一句话返回相机位置、朝向与卫星证据图，几何硬解无文字线索，20 个脚本分层架构
keywords: GitHub项目, AI Skill, github开源项目分享, 照片定位, 定位推断, skill, ai
---

**ai skill：geo-sleuth**：geo-sleuth 是一个面向 AI Agent 的照片定位技能（Agent Skill）：给 Agent 一张照片，说一句“find where this photo was taken”，就能返回相机位置、朝向和一张卫星证据图。标准 SKILL.md + Python 脚本结构，Claude Code、Codex、Cursor、Gemini CLI、OpenCode、GitHub Copilot 六大 Agent 通用，安装一条命令：npx skills add Oldcircle/geo-sleuth。亮点：无文字线索也能定位（不依赖文字、车牌、地标，靠 OSM 几何数据、高程数据、卫星影像和街景硬解）；几何代替猜测（桥墩间距当距离标尺、阴影方向推方位角、山脊轮廓线当高程指纹）；每个结论可溯源（必须指向本次会话实际运行的命令和文件）；脚本排名、模型判断（20 个单一职责脚本先排序，模型只在前几名里做最终选择）；答案自带误差半径与置信度。实测案例：广东清远稻田高架桥 ±2 米；青海大柴旦沙漠天际线盲测 87 米；加拿大温哥华樱花街道 3 米。MIT 协议。仓库地址：https://github.com/Oldcircle/geo-sleuth/

> 首发于小红书（2026-11-05）· [查看原文](https://www.xiaohongshu.com/explore/6aec04190000000015004b9b)
