---
sidebar_position: 2
---

# 自己编译

本指南帮助你从源代码构建 Spotoolfy。适合想要自定义功能、学习 Flutter 开发或为项目做贡献的开发者。

## 环境准备

### 1. 安装 Flutter

确保已安装 Flutter SDK（建议使用 3.19 或更高版本）：

```bash
# 检查 Flutter 版本
flutter --version

# 检查环境配置
flutter doctor
```

如果未安装 Flutter，请访问 [Flutter 官网](https://flutter.dev/docs/get-started/install) 按照指南安装。

### 2. 克隆仓库

```bash
git clone https://github.com/p2o51/spotoolfy_flutter.git
cd spotoolfy_flutter
```

### 3. 配置 API 密钥

创建 `lib/config/secrets.dart` 文件：

```dart
class Secrets {
  // Spotify API 凭据
  // 从 https://developer.spotify.com/dashboard 获取
  static const String spotifyClientId = '你的_CLIENT_ID';
  static const String spotifyRedirectUrl = 'spotoolfy://callback';

  // Google AI API Key（可选，用于翻译和洞察）
  // 从 https://aistudio.google.com/apikey 获取
  static const String geminiApiKey = '你的_GEMINI_API_KEY';
}
```

参考 `lib/config/secrets.example.dart` 获取完整模板。

### 4. 配置 Spotify 应用

1. 访问 [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. 创建新应用
3. 添加回调 URI：`spotoolfy://callback`
4. 复制 Client ID 到 `secrets.dart`

## 编译步骤

### 安装依赖

```bash
flutter pub get
```

### 运行开发版本

```bash
# 在连接的设备上运行
flutter run

# 指定平台
flutter run -d ios
flutter run -d android
flutter run -d web
```

### 构建发布版本

#### Android APK

```bash
# 构建 Release APK
flutter build apk --release

# 输出位置
# build/app/outputs/flutter-apk/app-release.apk
```

#### Android App Bundle

```bash
# 用于 Google Play 发布
flutter build appbundle --release
```

#### iOS

```bash
# 需要 macOS 和 Xcode
flutter build ios --release
```

#### Web

```bash
flutter build web --release

# 输出位置
# build/web/
```

## 平台特定配置

### Android

编辑 `android/app/src/main/AndroidManifest.xml`，确保包含：

```xml
<!-- 网络权限 -->
<uses-permission android:name="android.permission.INTERNET" />

<!-- Spotify 回调 URL Scheme -->
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="spotoolfy" android:host="callback" />
</intent-filter>
```

### iOS

编辑 `ios/Runner/Info.plist`，确保包含：

```xml
<!-- URL Scheme -->
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>spotoolfy</string>
        </array>
        <key>CFBundleURLName</key>
        <string>com.gojyuplusone.spotoolfy</string>
    </dict>
</array>

<!-- Spotify App Query -->
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>spotify</string>
</array>
```

## 代码结构

```
lib/
├── config/          # 配置文件（secrets, constants）
├── data/            # 数据层（database_helper）
├── l10n/            # 国际化资源
├── models/          # 数据模型
├── pages/           # 页面组件
├── providers/       # 状态管理（Provider）
├── services/        # 业务逻辑服务
├── utils/           # 工具函数
├── widgets/         # 可复用 UI 组件
└── main.dart        # 应用入口
```

## 常见编译问题

### Gradle 构建失败

**问题**：Android 构建时出现 Gradle 错误

**解决**：
```bash
cd android
./gradlew clean
cd ..
flutter clean
flutter pub get
flutter build apk
```

### CocoaPods 问题

**问题**：iOS 构建时 Pod 安装失败

**解决**：
```bash
cd ios
rm Podfile.lock
rm -rf Pods
pod install --repo-update
cd ..
flutter clean
flutter build ios
```

### 依赖版本冲突

**问题**：pub get 失败，显示版本冲突

**解决**：
```bash
flutter pub upgrade --major-versions
```

### secrets.dart 找不到

**问题**：编译时提示找不到 secrets.dart

**解决**：确保已创建 `lib/config/secrets.dart`，可以复制 `secrets.example.dart` 并填入你的 API 密钥。

### Android SDK 版本问题

**问题**：提示 minSdkVersion 不兼容

**解决**：检查 `android/app/build.gradle`，确保 `minSdkVersion` 为 24 或更高。

### iOS 签名问题

**问题**：iOS 构建时签名错误

**解决**：
1. 在 Xcode 中打开 `ios/Runner.xcworkspace`
2. 选择 Runner target
3. 在 Signing & Capabilities 中配置开发者账户

## 开发提示

### 代码格式化

```bash
dart format .
```

### 静态分析

```bash
flutter analyze
```

### 运行测试

```bash
flutter test
```

### 生成本地化文件

```bash
flutter gen-l10n
```

### 热重载

开发时使用热重载加速迭代：
- 按 `r` 热重载
- 按 `R` 热重启

## 贡献代码

1. Fork 仓库
2. 创建功能分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'Add some feature'`
4. 推送分支：`git push origin feature/your-feature`
5. 创建 Pull Request

## 许可证

Spotoolfy 是开源项目，具体许可证请查看仓库中的 LICENSE 文件。
