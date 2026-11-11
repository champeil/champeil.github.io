---
layout: paper
title: github项目：deepsearch
cate1: GitHub项目
cate2: AI Skill
description: Deep Research Agent：把大模型变成严谨深度研究助手的工作流工具，依附 Codex、Claude Code、ds-harness 运行，证据链可审计，23 个证据工具，10 种搜索渠道
keywords: GitHub项目, AI Skill, github开源项目分享, deepsearch, 深度搜索, agent, skill, 深度研究, 自建项目
---

**github项目：deepsearch**：Deep Research Agent 是把大模型变成严谨深度研究助手的工作流工具：依附 Codex、Claude Code、ds-harness 三种宿主运行，用结构化流程和本地 Python 工具链，把开放式深度研究拆成可执行、可审查、可溯源的步骤。0.6.0 版，MIT 开源，今天刚发布。核心是让研究过程可审计：一次研究拆成规划、检索、阅读、证据提取、审阅、补查、报告生成等阶段，模型主导每个阶段，关键证据的提取、引用校验和状态保存由 Python 工具强制记录。每个结论拆成独立“主张”，必须关联证据 ID 并标注事实/推断；证据必须是原文连续短片段，带字符偏移量；逐条审阅数字、条件、因果措辞并记录理由。每次研究生成 report.md、audit.json 和 research.sqlite3，完整复盘。亮点：三宿主兼容（Codex 工作流+MCP、Claude Code 子 Agent、DSH 插件 bundle，23 个证据工具，MCP 与 CLI 双模式）；十种可配置搜索渠道（Exa、Firecrawl、Tavily、Linkup、Parallel、SerpApi 等），自动选择与回退，economy 低消耗模式；全文优先与阅读登记，区分 primary_sections/partial_primary 等证据等级；领域特定指引（技术文档、政策法律、数据集、新闻）。Python 工具不单独调模型，无需额外配模型 API Key。注意：它复现 Perplexity 式研究的公开流程，不是 Perplexity 官方客户端；不能替代系统综述。仓库地址：https://github.com/champeil/deep_search_agent

![Deep Research Agent](/images/paper/gh-deep-search-agent.webp)

> 首发于小红书（2026-11-11）· [查看原文](https://www.xiaohongshu.com/explore/6af3e396000000002903f5b5)

<!-- 封面已更新为新版 README 横幅（2026-11-11） -->
