---
layout: project
title: Sync Engine
titleTemplate: The Extensible Sync Engine for Obsidian
description: Sync Engine is the next-generation plugin for Obsidian that syncs your vault with your own infrastructure. It is the first Obsidian plugin that allows custom modules to extend its core functionality.
logo: https://github.com/hesprs/sync-engine/raw/refs/heads/main/docs/public/logo.svg
links:
  - name: GitHub Repository
    url: https://github.com/hesprs/sync-engine
    color: '#010409'
  - name: Plugin Store
    url: https://community.obsidian.md/plugins/sync-engine
    color: '#8b5cf6'
  - name: Documentation
    url: https://sync.consensia.cc
    color: '#425aef'
head:
  - - meta
    - name: keywords
      content: Obsidian, Obsidian plugin, Sync Engine, synchronization, cross-device sync
---

<script lang="ts" setup>
import { IconBrandGithub, IconPackage, IconVocabulary } from '@tabler/icons-vue';
import useLinkIcons from '$/composables/link-icons';
import canvas from '$/assets/encryption.canvas';
import Viewer from '$/components/CanvasViewer.vue';
useLinkIcons({
    'GitHub Repository': IconBrandGithub,
    'Plugin Store': IconPackage,
    'Documentation': IconVocabulary,
});
</script>

## Introduction

Sync Engine is a revolutionary solution for vault syncing. Its not only a syncing plugin, it is a modular platform that everyone can build upon.

The core ships the infrastructure, and all backends (WebDAV, S3, GDrive) and features (i18n, optimization, sync strategy) come from composable modules. You and your AI agents can build your own modules via convenient SDK, extend the plugin, contribute to community, all without modifying the source code.

Access Sync Engine documentation at [`sync.consensia.cc`](https://sync.consensia.cc), which contains usage guides, existing modules, permission claims, benchmarking, and documentation on how to build a module.

## Features

### Core Functions

- Bidirectional syncing.
- Startup / periodic / save-on-change syncing.
- Conflict resolution strategies (keep both / latest survive / keep remote / keep local / skip).
- Rate / memory control options.
- Custom headers.
- You can extend most above features by writing modules.

### Module-Extended ([your can develop your own](#develop-a-module))

- **Backends**: WebDAV, S3
- **Features**: Encryption, Smart Merge Conflict Resolution

### Extensible Architecture

- You can add backends, optimizers, sync triggers, i18n resources, decision strategies, conflict strategies, setting entries, custom file processing, and invoke all possible operations in custom modules.
- Documentation, AI agent skills, and SDK with debug and testing kit are provided.
- Plugin provides dedicated module discovery and management UI.
- Repo accepts any module contribution as long as it respects [contribution guide](https://github.com/hesprs/sync-engine/blob/main/CONTRIBUTING.md).

### Radical Optimization

- Incremental syncing never uploads the full vault each time.
- [Anchored Asymmetric Storage](https://sync.consensia.cc/deep-dive/asymmetric-storage) technology substantially accelerates syncing.
- Real-time sync uses cached remote states, allowing it to complete within milliseconds.
- [Benchmarking shows around **100x** faster than Remotely Save in daily syncing](https://sync.consensia.cc/usage/benchmark).
- Handles vaults with thousands of files smoothly.
- No slower than a self-hosted server
- Detailed performance comparison can be found in [performance benchmark](https://sync.consensia.cc/usage/benchmark).

## Another Syncing Plugin?

As an Obsidian user working across multiple devices, I've personally encountered the sync dilemma: finding a solution that's reliable, flexible, and doesn't compromise data integrity. After trying nearly every syncing plugin in the community, I found that each came with trade-offs that frustrated my daily workflow:

- **Remotely Save** supports many backends (S3, Dropbox, OneDrive, WebDAV). But is optionally paid, development paused for years with stability issues.
- **Syncthing** provides excellent P2P syncing, but requires all devices to be online simultaneously.
- **Self-hosted Live Sync** and **Fast Note Sync** delivers robustness at the cost of complex server setup.
- **Git-based solutions** excels at version control but is not designed for seamless daily synchronization.

Then I developed **Sync Engine**: you want to choose your own storage, you want the plugin to stay small because unused features aren't bundled in, and you want a highly optimized syncing that is no slower than a self-hosted server.

## File Handling

To sync an Obsidian vault to a WebDAV server is a typical **distributed coordination** problem, where each client has their own copy and changes of the vault and there's no centralized resolver between. The goal is to synchronize the vaults between clients for maximum data integrity.

To address this, this plugin keeps a record of the last known sync state of local and remote files. During syncing evaluates **three states (current local, current remote, recorded local and remote in last sync)** for each file path and decides the sync action accordingly:

> ✅ = Exists, ❌ = Doesn't Exist, ✏️ = Changed Compared to Record

| Cases | Local File |       Remote File        | Sync Record | Action                                   |
| ----- | :--------: | :----------------------: | :---------: | ---------------------------------------- |
| 1     |     ✅     |            ✅            |     ✅      | ⏭️ **Skip** (already synced)             |
| 2     |     ✏️     |            ✏️            |     ✅      | ⚠️ **Resolve Conflict** (apply strategy) |
| 3     |     ✅     |            ✏️            |     ✅      | ⬇️ **Pull** (download remote)            |
| 4     |     ✏️     |            ✅            |     ✅      | ⬆️ **Push** (upload local)               |
| 5     |     ✅     |            ❌            |     ✅      | 🗑️ **Delete Local** (cleanup)            |
| 6     |     ❌     |            ✅            |     ✅      | 🗑️ **Delete Remote** (cleanup)           |
| 7     |     ❌     |            ✏️            |     ✅      | ⬇️ **Pull** (restore from remote)        |
| 8     |     ✏️     |            ❌            |     ✅      | ⬆️ **Push** (restore to remote)          |
| 9     |     ✅     | ✅ (compared with local) |     ❌      | 📝 **Record** (capture unrecorded file)  |
| 10    |     ✅     | ✏️ (compared with local) |     ❌      | ⚠️ **Resolve Conflict** (first sync)     |
| 11    |     ❌     |            ✅            |     ❌      | ⬇️ **Pull** (new remote file)            |
| 12    |     ✅     |            ❌            |     ❌      | ⬆️ **Push** (new local file)             |
| 13    |     ❌     |            ❌            |     ✅      | 🧹 **Clean Record** (database cleanup)   |

## Usage

1. Download and enable `Sync Engine` from Obsidian plugin store.
2. Open "Module management" panel, install needed translations, backends and optional features.
3. Fill the necessary information about your cloud service in the settings interface.
4. Start your first sync from command palette or ribbon button.
5. Review the sync tasks that will be performed.
6. Click "Confirm", and your files will arrive the configured backend at the speed of light.

## Develop a Module

Sync Engine welcomes everyone that would like to develop and contribute a module. The detailed module development documentation can be found in [Sync Engine website](https://sync.consensia.cc/development/develop-a-module).

## License

Sync Engine is licensed under the [MIT License](https://mit-license.org/).
