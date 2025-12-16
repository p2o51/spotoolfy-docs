---
sidebar_position: 2
---

# 設定

Spotoolfy を初めて使用する際には、いくつかの簡単な設定が必要です。このガイドでは初期設定の手順を説明します。

## 資格情報の設定

Spotoolfy を使用する前に、Spotify Developer の資格情報を設定する必要があります。これは Spotoolfy が再生制御に Spotify API を使用するために必要です。

:::note 前提条件
- 再生制御機能には **Spotify Premium が必要**
- Spotify Developer アカウント（無料で作成可能）
:::

### Spotify Developer の設定

1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) にアクセス
2. Spotify アカウントでログイン
3. **Create App** をクリック
4. 以下の情報を入力：
   - **App Name**：任意の名前（例：「My Spotoolfy」）
   - **App Description**：任意の説明
   - **APIs used**：以下を選択：
     - Web API
     - Android SDK
     - iOS SDK
     - Web Playback SDK

### プラットフォーム設定

アプリ作成後、Spotoolfy のインストール方法に応じてプラットフォーム固有の設定を構成する必要があります：

#### iOS

| 設定 | 値 |
|------|---|
| Redirect URIs | `spotoolfy://callback` |
| iOS App Bundles | `com.gojyuplusone.spotoolfy.spotoolfyFlutter` |

#### Android（Google Play ストア）

| 設定 | 値 |
|------|---|
| Redirect URIs | `spotoolfy://callback` |
| Android Packages | `com.gojyuplusone.spotoolfy.spotoolfy_flutter` |
| SHA1 Fingerprint | `D7:A1:25:6A:D6:C9:58:FC:95:A1:48:54:00:99:E2:99:ED:0C:A0:2E` |

#### Android（APK v1.3.0+）

| 設定 | 値 |
|------|---|
| Redirect URIs | `spotoolfy://callback` |
| Android Packages | `com.gojyuplusone.spotoolfy.spotoolfy_flutter` |
| SHA1 Fingerprint | `8D:BF:1F:07:DC:3D:96:5E:36:49:1E:00:B3:F7:45:B4:77:A2:93:C4` |

#### Android（APK v1.1.0 - v1.2.x）

| 設定 | 値 |
|------|---|
| Redirect URIs | `spotoolfy://callback` |
| Android Packages | `com.gojyuplusone.spotoolfy.spotoolfy_flutter` |
| SHA1 Fingerprint | `B4:DC:68:C9:BB:AF:5B:A3:AE:D0:2D:15:EF:6C:FC:6C:F4:CF:08:22` |

#### Web

| 設定 | 値 |
|------|---|
| Redirect URIs | `https://app.spotoolfy.gojyuplus.com/callback` |

:::tip 複数プラットフォーム
複数のプラットフォームで Spotoolfy を使用する場合は、対応するすべての Redirect URI とプラットフォーム設定を同じアプリに追加してください。
:::

:::caution ネットワーク環境
一部の地域では Spotify サービスにアクセスするために適切なネットワーク環境が必要な場合があります。
:::

## 基本設定

### 1. Spotify にログイン

これが Spotoolfy を使用する最初のステップです：

1. Spotoolfy を開く
2. 右上の **ユーザーアイコン** ボタンをタップ
3. 「Spotify にログイン」をタップ
4. Spotify 認証ページでアカウントにログイン
5. Spotoolfy が Spotify データにアクセスすることを許可
6. ログイン完了後、設定ページにユーザー名が表示されます

:::note 重要事項
- 再生コントロール機能には Spotify Premium が必要
- 無料ユーザーは歌詞閲覧、ノート記録などの機能を使用可能
- 認証でパスワードが漏洩することはありません、必要な権限のみ付与されます
:::

### 2. Google AI API Key の設定（オプションだが推奨）

AI翻訳とインサイト機能を使用するには、Google AI API Key を設定する必要があります：

1. [Google AI Studio](https://aistudio.google.com/apikey) にアクセス
2. Google アカウントでログイン
3. 「Create API Key」をクリックして新しいキーを生成
4. 生成された API Key をコピー
5. Spotoolfy の設定で「Google AI API Key」をタップ
6. API Key を貼り付けて保存

:::tip API Key について
- Google AI API Key は**無料**で取得・使用可能
- 無料版には使用量の制限がありますが、個人使用には十分
- API Key はローカルデバイスにのみ保存され、サーバーにはアップロードされません
:::

### 3. デバイスの確認

Spotoolfy にはアクティブな Spotify 再生デバイスが必要です：

1. スマートフォン/コンピュータに Spotify 公式クライアントがインストールされていることを確認
2. Spotify クライアントで任意の曲を再生（デバイスをアクティブにする）
3. Spotoolfy の右上にある **デバイスアイコン** をタップ
4. デバイスリストからコントロールしたいデバイスを選択

## 上級設定

### 言語設定

Spotoolfy は複数の言語をサポートし、2つのカテゴリに分かれています：

#### アプリ言語
アプリインターフェースの表示言語、システム設定に従うか手動で選択：
- English（英語）
- 简体中文（簡体字中国語）
- 繁體中文（繁体字中国語）
- 日本語

#### Gemini 言語
AI翻訳とインサイトの出力言語：
- 設定で「Gemini's Language」を見つける
- AI出力の言語を選択
- この設定はアプリ言語とは独立

### 翻訳スタイル

設定で好みの翻訳スタイルを選択：

| スタイル | 説明 | 最適な用途 |
|---------|------|-----------|
| **Faithful（忠実）** | 原文の意味を正確に伝える | 歌詞の正確な意味を理解したい時 |
| **Melodramatic Poet（詩的）** | より詩的で感情的 | 文学的な翻訳を楽しみたい時 |
| **Machine Classic（機械）** | 初期の機械翻訳をシミュレート | エンターテイメントや特殊なニーズ |
| **NetEase（網易雲）** | 網易雲のネイティブ翻訳 | 既存の翻訳版が必要な時 |

### 深層翻訳

:::warning 非推奨
処理時間が長すぎるため、この機能は v1.3 で削除されました。
:::

- 設定で「Deep Translation」を有効化
- Gemini の思考バジェット（1024 Tokens）を設定
- より高品質な翻訳を提供する可能性がありますが、API クォータを多く消費
- **注意**：有料 API Key を使用している場合は使用量に注意

### データ管理

#### データエクスポート
1. 設定で「Export Data」をタップ
2. 保存場所を選択
3. JSON形式でエクスポート、すべてのノートと翻訳を含む

#### データインポート
1. 設定で「Import Data」をタップ
2. 以前エクスポートした JSON ファイルを選択
3. データは現在のデータとマージされます

## よくある質問

### Q: ログイン後「デバイスが見つかりません」と表示される？
A: Spotify クライアントが実行中で音楽を再生していることを確認してください。問題が続く場合は、再ログインしてみてください。

### Q: API Key が無効または翻訳に失敗する？
A: API Key が余分なスペースなしで正しくコピーされているか確認してください。それでも失敗する場合は、API Key を再生成してみてください。

### Q: 設定後データは同期されますか？
A: 現在、データはローカルデバイスにのみ保存されています。他のデバイスで使用するには、エクスポート/インポート機能を使用してください。
