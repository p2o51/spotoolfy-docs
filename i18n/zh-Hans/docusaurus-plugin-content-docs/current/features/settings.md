---
sidebar_position: 5
---

# 设置与设备

点击右上角的用户图标打开设置页面，这里管理 Spotoolfy 的所有配置选项。

## 账户设置

### Spotify 账户
- **登录/登出**：管理 Spotify 账户连接
- 显示当前登录的用户名
- 登录需要 Spotify Premium 才能使用完整的播放控制功能

### Google AI API Key
- 用于 Gemini 翻译和洞察功能
- 点击输入或修改 API Key
- API Key 安全存储在本地设备

**获取 API Key**：
1. 访问 [Google AI Studio](https://aistudio.google.com/apikey)
2. 登录 Google 账户
3. 创建新的 API Key
4. 复制并粘贴到 Spotoolfy

:::note
个人能力有限，目前仅针对 Gemini 2.5 Flash 系列模型调整了 Prompt，暂不支持其他模型。如有需要可自行编译修改。
:::

## 语言设置

### Gemini's Language（翻译语言）
选择 AI 翻译和洞察输出的目标语言：
- **English** - 英语
- **简体中文** - Simplified Chinese
- **繁体中文** - Traditional Chinese
- **日本語** - Japanese

此设置独立于应用界面语言，你可以：
- 使用中文界面 + 英文翻译
- 使用英文界面 + 中文翻译
- 等任意组合

### 应用语言
应用界面语言默认跟随系统设置，也可以在系统设置中为 Spotoolfy 单独配置。

## 翻译设置

### Translation Style（翻译风格）
选择歌词翻译的风格：

| 风格 | 说明 | 特点 |
|------|------|------|
| **Faithful** | 忠实翻译 | 准确传达原意，保留原文的含义和结构 |
| **Melodramatic Poet** | 诗意翻译 | 使用更富诗意的语言，增强情感表达 |
| **Machine Classic** | 机器翻译 | 模拟早期机器翻译的直译风格，有时会产生有趣的效果 |
| **NetEase Provider** | 网易云翻译 | 使用网易云音乐的原生翻译（如果可用） |

### Copy Lyrics as Single Line
启用后，复制歌词或翻译时会将换行替换为空格，适合：
- 分享到社交媒体
- 粘贴到单行输入框
- 避免格式混乱

### Deep Translation（深度翻译）

:::warning 已弃用
由于耗时过长，此功能已在 v1.3 版本中删除。
:::

- 为 Gemini 2.5 Flash 设置思考预算（1024 Tokens）
- 可能提供更高质量、更有深度的翻译
- **注意**：会消耗更多 API 配额，如果使用付费 API Key 请关注用量
- 收费标准请参考 [Google AI 文档](https://ai.google.dev/pricing)

## 教程

### Tutorial
点击查看使用教程，适合：
- 首次使用 Spotoolfy
- 了解新功能
- 复习操作方法

## 数据管理

### Export Data（导出数据）
将所有本地数据导出为 JSON 文件：
- 所有笔记记录
- 歌曲信息
- 翻译缓存
- 播放上下文记录

导出的文件可用于：
- 备份数据
- 迁移到其他设备
- 数据分析

### Import Data（导入数据）
从之前导出的 JSON 文件导入数据：
- 数据会与现有数据合并
- 不会覆盖已有的笔记
- 导入后立即生效

### 导入导出流程
1. **导出**：设置 → Export Data → 选择保存位置 → 保存
2. **导入**：设置 → Import Data → 选择 JSON 文件 → 确认

## 设备管理

点击右上角的设备图标（🔊）打开设备管理页面。

### 设备列表
显示所有可用的 Spotify 设备：
- 设备名称
- 设备类型图标（手机、电脑、音箱等）
- 当前活跃状态

### 设备类型
Spotoolfy 支持控制的设备类型：
- **手机/平板**：iOS、Android 设备
- **电脑**：Windows、macOS 上的 Spotify 客户端
- **智能音箱**：支持 Spotify Connect 的音箱
- **电视**：支持 Spotify 的智能电视
- **车载**：支持 Spotify 的车载系统

### 切换设备
点击列表中的设备即可切换播放目标：
- 音乐会无缝转移到新设备
- 播放进度保持同步
- 部分设备可能需要先在该设备上打开 Spotify

### 设备刷新
设备列表每 15 秒自动刷新，也可以下拉手动刷新。

## 常见问题

### 设备列表为空？
- 确保 Spotify 客户端正在运行
- 尝试在 Spotify 中播放一首歌激活设备
- 检查设备是否连接到同一网络

### API Key 不生效？
- 确保复制时没有多余空格
- 尝试重新生成 API Key
- 检查 API 配额是否用尽

### 翻译质量不理想？
- 尝试切换翻译风格
- 启用深度翻译
- 歌词质量取决于源歌词的准确性

### 数据导出失败？
- 检查存储权限
- 确保有足够的存储空间
- 尝试选择其他保存位置
