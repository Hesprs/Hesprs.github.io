---
layout: project
title: Sync Engine
titleTemplate: Obsidian 的可扩展同步引擎
description: Sync Engine 是下一代 Obsidian 插件，可将你的仓库与自有基础设施同步。它是首个允许通过自定义模块扩展核心功能的 Obsidian 插件。
logo: https://github.com/hesprs/sync-engine/raw/refs/heads/main/docs/public/logo.svg
links:
  - name: GitHub 仓库
    url: https://github.com/hesprs/sync-engine
    color: '#010409'
  - name: 插件商店
    url: https://community.obsidian.md/plugins/sync-engine
    color: '#8b5cf6'
  - name: 文档
    url: https://sync.consensia.cc
    color: '#425aef'
head:
  - - meta
    - name: keywords
      content: Obsidian, Obsidian 插件, Sync Engine, 同步, 跨设备同步
---

<script lang="ts" setup>
import { IconBrandGithub, IconPackage, IconVocabulary } from '@tabler/icons-vue';
import useLinkIcons from '$/composables/link-icons';
import canvas from '$/assets/encryption.canvas';
import Viewer from '$/components/CanvasViewer.vue';
useLinkIcons({
    'GitHub 仓库': IconBrandGithub,
    '插件商店': IconPackage,
    '文档': IconVocabulary,
});
</script>

## 简介

Sync Engine 是一种革命性的仓库同步方案。它不仅是同步插件，更是一个任何人都可以构建于其上的模块化平台。

核心部分提供基础设施，所有后端（WebDAV、S3、GDrive）和功能（国际化、优化、同步策略）都来自可组合模块。你和你的 AI 代理可以通过便捷的 SDK 构建自己的模块，扩展插件并参与社区贡献，无需修改源代码。

你可以在 [`sync.consensia.cc`](https://sync.consensia.cc) 查看 Sync Engine 文档，其中包含使用指南、现有模块、权限声明、基准测试，以及模块开发文档。

## 功能

### 核心功能

- 双向同步。
- 启动同步、定时同步、保存时同步。
- 冲突解决策略（全部保留、最新者胜出、保留远程、保留本地、跳过）。
- 速率和内存控制选项。
- 自定义请求头。
- 你可以通过编写模块扩展上述大多数功能。

### 模块扩展（[你可以开发自己的模块](#开发模块)）

- **后端**：WebDAV、S3
- **功能**：加密、智能合并冲突解决

### 可扩展架构

- 你可以在自定义模块中添加后端、优化器、同步触发器、国际化资源、决策策略、冲突策略、设置项、自定义文件处理，并调用所有可能的操作。
- 提供文档、AI 代理技能，以及带有调试和测试工具包的 SDK。
- 插件提供专用的模块发现和管理界面。
- 只要遵守[贡献指南](https://github.com/hesprs/sync-engine/blob/main/CONTRIBUTING.md)，仓库接受任何模块贡献。

### 激进优化

- 增量同步不会每次都上传整个仓库。
- [锚定非对称存储](https://sync.consensia.cc/deep-dive/asymmetric-storage)技术大幅提升同步速度。
- 实时同步使用缓存的远程状态，可在毫秒内完成。
- [基准测试显示，日常同步速度约为 Remotely Save 的 **100 倍**](https://sync.consensia.cc/usage/benchmark)。
- 流畅处理包含数千个文件的仓库。
- 速度不低于自托管服务器。
- 详细性能对比请参阅[性能基准测试](https://sync.consensia.cc/usage/benchmark)。

## 又是另一个同步插件？

作为一名在多设备间工作的 Obsidian 用户，我亲身经历过同步困境：寻找一个既可靠、灵活，又不损害数据完整性的解决方案。在尝试了社区中几乎所有的同步插件后，我发现它们各自都存在令我日常工作流程受挫的权衡：

- **Remotely Save** 支持多种后端（S3、Dropbox、OneDrive、WebDAV），但部分功能收费，且多年停止开发并存在稳定性问题。
- **Syncthing** 提供了优秀的 P2P 同步体验，但要求所有设备必须同时在线。
- **Self-hosted Live Sync** 和 **Fast Note Sync** 虽然稳健，但代价是复杂的服务器搭建流程。
- **基于 Git 的方案**在版本控制方面表现出色，但并不适合无缝的日常同步。

于是我开发了 **Sync Engine**：你可以自由选择存储方式；由于不会捆绑未使用的功能，插件能够保持小巧；同时，它还提供不逊于自托管服务器的高度优化同步体验。

## 文件处理

将 Obsidian 仓库同步到 WebDAV 服务器是一个典型的**分布式协调**问题，其中每个客户端都拥有自己的仓库副本和更改记录，且中间没有集中的解析器。目标是在客户端之间同步仓库，以实现最大的数据完整性。

为解决这一问题，本插件保留了本地和远程文件上次已知同步状态的记录。在同步期间，它会评估每个文件路径的**三种状态（当前本地、当前远程、上次同步时记录的本地和远程）**，并据此决定同步操作：

> ✅ = 存在，❌ = 不存在，✏️ = 相较于记录已更改

| 情况 | 本地文件 |     远程文件     | 同步记录 | 操作                            |
| ---- | :------: | :--------------: | :------: | ------------------------------- |
| 1    |    ✅    |        ✅        |    ✅    | ⏭️ **跳过**（已同步）           |
| 2    |    ✏️    |        ✏️        |    ✅    | ⚠️ **解决冲突**（应用策略）     |
| 3    |    ✅    |        ✏️        |    ✅    | ⬇️ **拉取**（下载远程版本）     |
| 4    |    ✏️    |        ✅        |    ✅    | ⬆️ **推送**（上传本地版本）     |
| 5    |    ✅    |        ❌        |    ✅    | 🗑️ **删除本地**（清理）         |
| 6    |    ❌    |        ✅        |    ✅    | 🗑️ **删除远程**（清理）         |
| 7    |    ❌    |        ✏️        |    ✅    | ⬇️ **拉取**（从远程恢复）       |
| 8    |    ✏️    |        ❌        |    ✅    | ⬆️ **推送**（恢复到远程）       |
| 9    |    ✅    | ✅（与本地比较） |    ❌    | 📝 **记录**（捕获未记录的文件） |
| 10   |    ✅    | ✏️（与本地比较） |    ❌    | ⚠️ **解决冲突**（首次同步）     |
| 11   |    ❌    |        ✅        |    ❌    | ⬇️ **拉取**（新远程文件）       |
| 12   |    ✅    |        ❌        |    ❌    | ⬆️ **推送**（新本地文件）       |
| 13   |    ❌    |        ❌        |    ✅    | 🧹 **清理记录**（数据库清理）   |

## 使用

1. 从 Obsidian 插件商店下载并启用 `Sync Engine`。
2. 打开“模块管理”面板，安装所需的翻译、后端和可选功能。
3. 在设置界面填写云服务的必要信息。
4. 从命令面板或功能区按钮开始首次同步。
5. 查看将要执行的同步任务。
6. 点击“确认”，文件将以光速抵达已配置的后端。

## 开发模块

Sync Engine 欢迎所有希望开发和贡献模块的人。详细的模块开发文档请参阅 [Sync Engine 网站](https://sync.consensia.cc/development/develop-a-module)。

## 许可证

Sync Engine 采用 [MIT 许可证](https://mit-license.org/)。
