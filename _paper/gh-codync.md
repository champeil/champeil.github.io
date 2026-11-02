---
layout: paper
title: codync
cate1: GitHub项目
cate2: AI 应用
type: link
link: https://github.com/leepokai/Codync
description: 用 Rust 构建的开源“指挥调度层”：像给同事发消息一样，从手机或任何设备随时指挥电脑里的 AI 编程助手，自带代理与订阅、代理无关、端到端加密
keywords: GitHub项目, AI 应用, github开源项目分享, grokbot平替, bot
---

用 Rust 构建的开源项目，解决一个具体痛点——让你像给同事发消息一样，从手机或任何设备上随时指挥电脑里的 AI 编程助手，不必被困在电脑前操作复杂的终端会话。自带代理与订阅：Codync 本身不提供模型，复用你电脑上已登录的 Claude、ChatGPT 等代理的账户额度，在本机运行，不产生额外模型调用费用。广泛兼容：支持 40+ 主流编程代理（Claude Code、Codex、Cursor、Gemini、Copilot、OpenCode 等），通过 ACP 协议通信，ACP 注册表可自动发现新装的代理。多机器人团队协作：同时运行任意数量的机器人，各有独立代理、项目文件夹和审批策略；群聊模式 @机器人名 指定回复者；内置 team MCP 服务器，一个机器人可主动向另一个“求助”并整合结果。隐私与安全优先：手机与电脑间通信端到端加密，免费云端中继只能转发密文；推送通知文本也是加密的；每台电脑需单独批准新设备访问（验证码），账户本身无法直接解锁电脑。跨端全能、极致轻量：核心 codync-host 是小巧快速的 Rust 二进制，跑 macOS、Windows、Linux；iPhone 原生 SwiftUI 应用、桌面 Electron 应用、SSH 终端界面；内置免费 Cloudflare 中继，无需配 Tailscale、VPN 或端口转发即可外网访问，同 Wi-Fi 自动直连；还支持 WebRTC 远程看屏控屏、语音通话。Apache 2.0 许可，无订阅费、无付费层级。

**仓库**：[leepokai/Codync](https://github.com/leepokai/Codync)

**来源**：[小红书笔记](https://www.xiaohongshu.com/explore/6ae83daa0000000027031f30)（2026-11-02）
