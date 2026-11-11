---
layout: paper
title: github项目分享：claude沙箱
cate1: GitHub项目
cate2: 效率工具
description: Claude Cage：为 Claude 特化的轻量化虚拟机，开箱即用的桌面程序，隔离网络与指纹，彻底杜绝网络泄露，支持多账号管理、手机接续、SSH 远程部署
keywords: GitHub项目, 效率工具, github开源项目分享, claude环境隔离, 把Claude关进笼子
---

**github项目分享：claude沙箱**：Claude Cage 是为 Claude 特化的轻量化虚拟机：开箱即用的桌面程序，配置好自己的网络代理，就能在一个隔离环境里和 Claude 协作，彻底杜绝网络泄露。Go 编写，MIT 开源，基于 agent-vm 二次开发，上线约两周已 1357 stars。它把虚拟机、代理网络、开发工具和账户管理做成一个 Claude 专用工作台：Mac 上用 macOS 虚拟机、Windows 上用 Windows 虚拟机，也可选轻量 Linux 环境；终端（跑 Claude Code）、编辑器、Cage 浏览器和官方 Claude Desktop 汇集在同一窗口，项目按需共享。亮点：Cage 自己接管内部所有网络流量，时区、语言等指纹自动与代理 IP 同步，与主机完全隔离；内置网络与隔离检查，关键检查失败时自动暂停外网，代理不可用时没有直连回退；支持多 Claude Code 订阅的额度查看、账号分配和授权切换；手机可接续电脑上的任务、审批工具操作；还能通过 SSH 部署到自己的 Linux VPS，Tailscale 私网连接。工具、文件和登录状态保存在虚拟磁盘里，关窗口后任务保留；主机的 Claude 登录、浏览器配置和 SSH 密钥不会自动导入。注意：同一份配置下的项目共用客机系统、工具与文件系统，项目之间没有独立隔离；网络检查不能保证账号不受平台限制。仓库地址：https://github.com/Lee-xeo/Claude-Cage

![Claude Cage](/images/paper/gh-claude-cage.webp)

> 首发于小红书（2026-11-11）· [查看原文](https://www.xiaohongshu.com/explore/6af3e0aa000000002903ecb3)
