---
sidebar_position: 3
---

# MD3スタイルコンポーネント

SpotoolfyはMaterial Design 3（MD3）スタイルデザインを使用しています。このドキュメントでは、プロジェクト内の再利用可能なUIコンポーネントを紹介します。開発者の参考資料として、または他のプロジェクトでの使用に適しています。

## デザイン原則

### Material Design 3

SpotoolfyはMD3デザイン仕様に従っています：
- **ダイナミックカラー**：アルバムカバーに基づいてカラースキームを生成
- **丸みのあるデザイン**：大きめの角丸を使用（16-28dp）
- **明確な階層**：Surfaceレベルでコンテンツを区別
- **アクセシビリティ**：十分なコントラストとタッチエリアを確保

### テーマシステム

アプリは `ThemeProvider` を使用してテーマを動的に生成：
- アルバムカバーからプライマリカラーを抽出
- 完全なColorSchemeを自動生成
- ダーク/ライトモード切り替えをサポート

## コンポーネントリスト

### プレーヤーコンポーネント

#### MiniPlayer
簡略化された再生情報を表示するミニプレーヤーコンポーネント。

**場所**：`lib/widgets/mini_player.dart`

**機能**：
- アルバムカバーサムネイル
- 曲名とアーティスト名
- 再生/一時停止ボタン
- 進行インジケーター

#### AlbumArtwork
ダイナミックな角丸とシャドウをサポートするアルバムカバー表示コンポーネント。

**場所**：`lib/widgets/album_artwork.dart`

**機能**：
- ネットワーク画像の読み込みとキャッシュ
- 読み込みプレースホルダー
- エラー状態の処理
- 設定可能な角丸

### 歌詞コンポーネント

#### LyricsWidget
自動スクロールとインタラクションをサポートする歌詞表示コンポーネント。

**場所**：`lib/widgets/lyrics.dart`

**機能**：
- 行ごとのハイライト
- 自動スクロール追従
- タップでシーク再生
- 手動スクロール一時停止

#### TranslationPage
原文と翻訳を表示する翻訳表示ページ。

**場所**：`lib/widgets/translation_page.dart`

**機能**：
- バイリンガル対照表示
- スタイル切り替え
- コピー機能

### カードコンポーネント

#### RandomReviewCard
過去のノートを表示するランダムレビューカード。

**場所**：`lib/widgets/random_review_card.dart`

**機能**：
- アルバムカバー背景
- ノート内容と歌詞スナップショット
- 評価アイコン
- アニメーション遷移効果

#### TimeMachineCarousel
過去の今日の曲を表示するタイムマシンカルーセルコンポーネント。

**場所**：`lib/widgets/time_machine_carousel.dart`

**機能**：
- メモリーカード表示
- 年ラベル
- 自動カルーセル
- タップインタラクション

### ポスターコンポーネント

#### NotePosterPreviewPage
ノートポスターのプレビューと生成ページ。

**場所**：`lib/widgets/note_poster_preview_page.dart`

**機能**：
- ポスタープレビュー
- ギャラリーへの保存
- 共有機能

#### LyricsPosterPage
歌詞ポスター生成ページ。

**場所**：`lib/widgets/lyrics_poster_page.dart`

**機能**：
- 歌詞選択
- スタイルカスタマイズ
- 画像エクスポート

### 汎用コンポーネント

#### ResponsiveNavigation
異なる画面サイズに対応するレスポンシブナビゲーションコンポーネント。

**場所**：`lib/utils/responsive.dart`

**機能**：
- 狭い画面でフルスクリーンナビゲーション
- 広い画面でサイドパネル
- 自動モード検出

#### FilterChips
複数選択フィルタリング用のフィルターチップグループ。

**使用例**：
```dart
FilterChip(
  avatar: Icon(Icons.whatshot_outlined, size: 18),
  label: Text('好き'),
  selected: isSelected,
  onSelected: (value) => setState(() => isSelected = value),
)
```

## 使用ガイド

### ダイナミックテーマ

`ThemeProvider` を使用してダイナミックテーマを取得：

```dart
// 現在のテーマを取得
final theme = Theme.of(context);
final colorScheme = theme.colorScheme;

// テーマカラーを使用
Container(
  color: colorScheme.primaryContainer,
  child: Text(
    'Hello',
    style: TextStyle(color: colorScheme.onPrimaryContainer),
  ),
)
```

### アルバムカバーからテーマを更新

```dart
final themeProvider = Provider.of<ThemeProvider>(context, listen: false);
await themeProvider.updateThemeFromAlbumArt(imageUrl);
```

### レスポンシブレイアウト

`ResponsiveNavigation` を使用してセカンダリページを処理：

```dart
ResponsiveNavigation.showSecondaryPage(
  context: context,
  child: DetailPage(),
  preferredMode: SecondaryPageMode.sideSheet,
  maxWidth: 520,
);
```

### 画像キャッシュ

`CachedNetworkImage` を使用してネットワーク画像を読み込み：

```dart
CachedNetworkImage(
  imageUrl: albumCoverUrl,
  width: 100,
  height: 100,
  fit: BoxFit.cover,
  placeholder: (context, url) => Container(
    color: colorScheme.surfaceContainerHighest,
    child: Icon(Icons.music_note),
  ),
  errorWidget: (context, url, error) => Container(
    color: colorScheme.surfaceContainerHighest,
    child: Icon(Icons.broken_image),
  ),
)
```

## デザインリソース

### カラー使用ガイドライン

| 用途 | ColorSchemeプロパティ |
|------|---------------------|
| プライマリアクション | `primary` / `onPrimary` |
| セカンダリ要素 | `secondary` / `onSecondary` |
| 背景 | `surface` / `onSurface` |
| エラー状態 | `error` / `onError` |
| コンテナ | `primaryContainer` / `onPrimaryContainer` |
| アウトライン | `outline` / `outlineVariant` |

### 角丸ガイドライン

| コンポーネントタイプ | 角丸 |
|-------------------|------|
| カード | 16-24dp |
| ボタン | 12dp |
| 入力フィールド | 28dp |
| ボトムシート | 28dp（上部） |
| アルバムカバー | 8-12dp |

### 間隔ガイドライン

| タイプ | サイズ |
|-------|-------|
| コンポーネントパディング | 16dp |
| カード間隔 | 8-12dp |
| リストアイテム間隔 | 4-8dp |
| ページマージン | 16dp |

## 注意事項

1. **パフォーマンス最適化**：長いリストには `ListView` ではなく `SliverList` を使用
2. **状態管理**：共有状態の管理には `Provider` を使用
3. **画像読み込み**：重複リクエストを避けるため `CachedNetworkImage` を使用
4. **アニメーション**：スムーズな遷移のため `AnimatedContainer` と `AnimatedSwitcher` を使用
5. **アクセシビリティ**：インタラクティブ要素に `Semantics` または `tooltip` を追加

## 参考資料

- [Material Design 3公式ドキュメント](https://m3.material.io/)
- [Flutter Material 3ガイド](https://flutter.dev/docs/development/ui/material3)
- [palette_generatorパッケージ](https://pub.dev/packages/palette_generator)
