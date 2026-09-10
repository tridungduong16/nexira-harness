# Agent Note: Qonnex Web 客户端品牌

Status: implemented

[English](2026-09-10-qonnex-web-client-branding.md) | 中文

## 问题

Web 客户端通过互相独立的所有者呈现产品身份：构建时文档元数据、PWA 元数据、公共图片、UI 品牌 slot、通用 locale 文案和首次运行声明。只更改一个所有者会让用户看到混杂的产品名称或回退鱼形标志。

## 决策

随附的 Web 客户端在浏览器标题、安装元数据、侧栏、空白会话首屏和首次运行声明中呈现 Qonnex Harness。`apps/web/public/` 持有 Qonnex favicon 与标志图片。浏览器品牌包在每个构建 profile 中填充两个侧栏 slot 和首屏标志 slot。`common` locale 字典持有可见产品名称与本地构建回退文案，conversation locale 则把同一名称用于首屏标题。

`dsh-*` 包名、环境变量、profile 名称、DeepSeek 提供方身份与模型可见的 Harness 身份保持不变。这些标识描述兼容性或提供方行为，而非浏览器呈现。

## 考虑过的替代方案

**只更改标题与 favicon。** 未采用，因为侧栏、首屏与首次运行声明仍会呈现原有身份。

**继续把品牌注册限制在 `official` 构建 profile。** 未采用，因为普通仓库构建仍会渲染回退鱼形标志与本地构建标签，而不是要求的产品身份。

**重命名技术性 `dsh-*` 标识。** 未采用，因为 Web 外观品牌调整不足以支持破坏包、配置、profile 或提供方兼容性。

## 影响

本地与发布 Web 构建采用同一 Qonnex 身份，其他部署则可以排除浏览器品牌包并替换全部三个品牌 slot。本包依赖随附 Web 宿主提供 `/qonnex-mark.png`；其他宿主必须提供该资产。聚焦的组件、构建环境、PWA、引导和已构建 Web 测试锁定可见名称与资产。
