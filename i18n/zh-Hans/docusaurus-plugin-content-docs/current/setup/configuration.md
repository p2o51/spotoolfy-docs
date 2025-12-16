---
sidebar_position: 2
---

# 配置

首次使用 Spotoolfy 需要进行一些简单的配置。本文将指导你完成初始设置。

## 凭据配置

使用 Spotoolfy 之前，你需要配置 Spotify Developer 凭据。这是必需的，因为 Spotoolfy 使用 Spotify API 来控制播放。

:::note 前提条件
- **需要 Spotify Premium** 才能使用播放控制功能
- 一个 Spotify Developer 账户（免费创建）
:::

### 设置 Spotify Developer

1. 访问 [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. 使用你的 Spotify 账户登录
3. 点击 **Create App**
4. 填写以下信息：
   - **App Name**：任意名称（例如 "My Spotoolfy"）
   - **App Description**：任意描述
   - **APIs used**：选择以下选项：
     - Web API
     - Android SDK
     - iOS SDK
     - Web Playback SDK

### 平台配置

创建应用后，你需要根据 Spotoolfy 的安装方式配置对应平台的设置：

#### iOS

| 设置 | 值 |
|------|---|
| Redirect URIs | `spotoolfy://callback` |
| iOS App Bundles | `com.gojyuplusone.spotoolfy.spotoolfyFlutter` |

#### Android（Google Play 商店）

| 设置 | 值 |
|------|---|
| Redirect URIs | `spotoolfy://callback` |
| Android Packages | `com.gojyuplusone.spotoolfy.spotoolfy_flutter` |
| SHA1 Fingerprint | `D7:A1:25:6A:D6:C9:58:FC:95:A1:48:54:00:99:E2:99:ED:0C:A0:2E` |

#### Android（APK v1.3.0+）

| 设置 | 值 |
|------|---|
| Redirect URIs | `spotoolfy://callback` |
| Android Packages | `com.gojyuplusone.spotoolfy.spotoolfy_flutter` |
| SHA1 Fingerprint | `8D:BF:1F:07:DC:3D:96:5E:36:49:1E:00:B3:F7:45:B4:77:A2:93:C4` |

#### Android（APK v1.1.0 - v1.2.x）

| 设置 | 值 |
|------|---|
| Redirect URIs | `spotoolfy://callback` |
| Android Packages | `com.gojyuplusone.spotoolfy.spotoolfy_flutter` |
| SHA1 Fingerprint | `B4:DC:68:C9:BB:AF:5B:A3:AE:D0:2D:15:EF:6C:FC:6C:F4:CF:08:22` |

#### Web

| 设置 | 值 |
|------|---|
| Redirect URIs | `https://app.spotoolfy.gojyuplus.com/callback` |

:::tip 多平台使用
如果你在多个平台使用 Spotoolfy，请将所有对应的 Redirect URIs 和平台配置添加到同一个应用中。
:::

:::caution 网络环境
部分地区可能需要适当的网络环境才能访问 Spotify 服务。
:::

## 基本配置

### 1. 登录 Spotify

这是使用 Spotoolfy 的第一步：

1. 打开 Spotoolfy
2. 点击右上角的 **用户图标** 按钮
3. 点击「登录 Spotify」
4. 在弹出的 Spotify 授权页面中登录你的账户
5. 授权 Spotoolfy 访问你的 Spotify 数据
6. 登录成功后，你会看到你的用户名显示在设置页面

:::note 注意事项
- 需要 Spotify Premium 才能使用播放控制功能
- 免费用户可以使用歌词查看、笔记记录等功能
- 授权不会泄露你的密码，仅授予必要的访问权限
:::

### 2. 配置 Google AI API Key（可选但推荐）

如果你想使用 AI 翻译和洞察功能，需要配置 Google AI API Key：

1. 访问 [Google AI Studio](https://aistudio.google.com/apikey)
2. 登录你的 Google 账户
3. 点击「Create API Key」创建新密钥
4. 复制生成的 API Key
5. 在 Spotoolfy 设置中点击「Google AI API Key」
6. 粘贴 API Key 并保存

:::tip 关于 API Key
- Google AI API Key 可以**免费**获取和使用
- 免费版有使用配额限制，但对于个人使用完全足够
- API Key 仅存储在本地设备上，不会上传到任何服务器
:::

### 3. 确保设备可用

Spotoolfy 需要一个活跃的 Spotify 播放设备：

1. 确保你的手机/电脑上已安装 Spotify 官方客户端
2. 在 Spotify 客户端中播放任意歌曲（确保设备处于活跃状态）
3. 在 Spotoolfy 右上角点击 **设备图标**
4. 在设备列表中选择要控制的设备

## 高级配置

### 语言设置

Spotoolfy 支持多种语言，分为两类：

#### 应用语言
应用界面的显示语言，跟随系统设置或在设置中手动选择：
- English（英语）
- 简体中文
- 繁体中文
- 日本語（日语）

#### Gemini 语言
AI 翻译和洞察使用的目标语言：
- 在设置中找到「Gemini's Language」
- 选择你希望 AI 输出的语言
- 这个设置独立于应用语言

### 翻译风格

在设置中选择你喜欢的翻译风格：

| 风格 | 说明 | 适用场景 |
|------|------|----------|
| **Faithful（忠实）** | 准确传达原意 | 想要理解歌词准确含义 |
| **Melodramatic Poet（诗意）** | 更富诗意和情感 | 欣赏文学化的翻译 |
| **Machine Classic（机器）** | 模拟早期机翻 | 娱乐或特殊需求 |
| **NetEase（网易云）** | 网易云原生翻译 | 需要已有的翻译版本 |

### 深度翻译

:::warning 已弃用
由于耗时过长，此功能已在 v1.3 版本中删除。
:::

- 在设置中启用「Deep Translation」
- 为 Gemini 设置思考预算（1024 Tokens）
- 可能提供更高质量的翻译，但会消耗更多 API 配额
- **注意**：如果使用付费 API Key，请关注使用量

### 数据管理

#### 导出数据
1. 在设置中点击「Export Data」
2. 选择保存位置
3. 数据以 JSON 格式导出，包含所有笔记和翻译

#### 导入数据
1. 在设置中点击「Import Data」
2. 选择之前导出的 JSON 文件
3. 数据会合并到当前数据中

## 常见问题

### Q: 登录后显示「未找到设备」？
A: 确保 Spotify 客户端正在运行并播放音乐。如果问题持续，尝试重新登录。

### Q: API Key 无效或翻译失败？
A: 检查 API Key 是否正确复制，确保没有多余的空格。如果仍然失败，尝试重新生成 API Key。

### Q: 设置后数据会同步吗？
A: 目前数据仅存储在本地设备。如需在其他设备使用，请使用导出/导入功能。
