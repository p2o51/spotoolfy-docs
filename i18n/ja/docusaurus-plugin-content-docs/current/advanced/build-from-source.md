---
sidebar_position: 2
---

# ソースからビルド

このガイドはソースコードからSpotoolfyをビルドする方法を説明します。機能をカスタマイズしたい開発者、Flutter開発を学びたい方、プロジェクトに貢献したい方に適しています。

## 環境準備

### 1. Flutterのインストール

Flutter SDKがインストールされていることを確認（バージョン3.19以上を推奨）：

```bash
# Flutterバージョンを確認
flutter --version

# 環境設定を確認
flutter doctor
```

Flutterがインストールされていない場合は、[Flutter公式サイト](https://flutter.dev/docs/get-started/install)にアクセスしてインストールガイドに従ってください。

### 2. リポジトリのクローン

```bash
git clone https://github.com/p2o51/spotoolfy_flutter.git
cd spotoolfy_flutter
```

### 3. APIキーの設定

`lib/config/secrets.dart` ファイルを作成：

```dart
class Secrets {
  // Spotify API資格情報
  // https://developer.spotify.com/dashboard から取得
  static const String spotifyClientId = 'YOUR_CLIENT_ID';
  static const String spotifyRedirectUrl = 'spotoolfy://callback';

  // Google AI API Key（オプション、翻訳とインサイト用）
  // https://aistudio.google.com/apikey から取得
  static const String geminiApiKey = 'YOUR_GEMINI_API_KEY';
}
```

完全なテンプレートは `lib/config/secrets.example.dart` を参照。

### 4. Spotifyアプリの設定

1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)にアクセス
2. 新しいアプリを作成
3. リダイレクトURIを追加：`spotoolfy://callback`
4. Client IDを `secrets.dart` にコピー

## ビルド手順

### 依存関係のインストール

```bash
flutter pub get
```

### 開発バージョンの実行

```bash
# 接続されたデバイスで実行
flutter run

# プラットフォームを指定
flutter run -d ios
flutter run -d android
flutter run -d web
```

### リリースバージョンのビルド

#### Android APK

```bash
# Release APKをビルド
flutter build apk --release

# 出力場所
# build/app/outputs/flutter-apk/app-release.apk
```

#### Android App Bundle

```bash
# Google Playリリース用
flutter build appbundle --release
```

#### iOS

```bash
# macOSとXcodeが必要
flutter build ios --release
```

#### Web

```bash
flutter build web --release

# 出力場所
# build/web/
```

## プラットフォーム固有の設定

### Android

`android/app/src/main/AndroidManifest.xml` を編集し、以下が含まれていることを確認：

```xml
<!-- ネットワーク権限 -->
<uses-permission android:name="android.permission.INTERNET" />

<!-- SpotifyコールバックURLスキーム -->
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="spotoolfy" android:host="callback" />
</intent-filter>
```

### iOS

`ios/Runner/Info.plist` を編集し、以下が含まれていることを確認：

```xml
<!-- URLスキーム -->
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

<!-- Spotifyアプリクエリ -->
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>spotify</string>
</array>
```

## コード構造

```
lib/
├── config/          # 設定ファイル（secrets、constants）
├── data/            # データ層（database_helper）
├── l10n/            # 国際化リソース
├── models/          # データモデル
├── pages/           # ページコンポーネント
├── providers/       # 状態管理（Provider）
├── services/        # ビジネスロジックサービス
├── utils/           # ユーティリティ関数
├── widgets/         # 再利用可能なUIコンポーネント
└── main.dart        # アプリエントリーポイント
```

## よくあるビルド問題

### Gradleビルドの失敗

**問題**：AndroidビルドでGradleエラー

**解決策**：
```bash
cd android
./gradlew clean
cd ..
flutter clean
flutter pub get
flutter build apk
```

### CocoaPodsの問題

**問題**：iOSビルドでPodインストールに失敗

**解決策**：
```bash
cd ios
rm Podfile.lock
rm -rf Pods
pod install --repo-update
cd ..
flutter clean
flutter build ios
```

### 依存関係バージョンの競合

**問題**：pub getがバージョン競合で失敗

**解決策**：
```bash
flutter pub upgrade --major-versions
```

### secrets.dartが見つからない

**問題**：secrets.dartが見つからないというビルドエラー

**解決策**：`lib/config/secrets.dart` を作成したことを確認。`secrets.example.dart` をコピーしてAPIキーを入力できます。

### Android SDKバージョンの問題

**問題**：minSdkVersionの非互換性

**解決策**：`android/app/build.gradle` を確認し、`minSdkVersion` が24以上であることを確認。

### iOS署名の問題

**問題**：iOSビルドで署名エラー

**解決策**：
1. Xcodeで `ios/Runner.xcworkspace` を開く
2. Runnerターゲットを選択
3. Signing & Capabilitiesで開発者アカウントを設定

## 開発のヒント

### コードフォーマット

```bash
dart format .
```

### 静的解析

```bash
flutter analyze
```

### テストの実行

```bash
flutter test
```

### ローカライゼーションファイルの生成

```bash
flutter gen-l10n
```

### ホットリロード

開発中はホットリロードを使用してイテレーションを高速化：
- `r` を押してホットリロード
- `R` を押してホットリスタート

## コードの貢献

1. リポジトリをフォーク
2. フィーチャーブランチを作成：`git checkout -b feature/your-feature`
3. 変更をコミット：`git commit -m 'Add some feature'`
4. ブランチをプッシュ：`git push origin feature/your-feature`
5. Pull Requestを作成

## ライセンス

Spotoolfyはオープンソースプロジェクトです。具体的なライセンスの詳細はリポジトリのLICENSEファイルを確認してください。
