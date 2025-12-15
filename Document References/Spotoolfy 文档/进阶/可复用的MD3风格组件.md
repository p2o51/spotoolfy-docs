# 可复用的 MD3 风格组件

Spotoolfy 使用 Material Design 3 (MD3) 风格设计，本文档介绍项目中一些可复用的 UI 组件，供开发者参考或在其他项目中使用。

## 设计原则

### Material Design 3

Spotoolfy 遵循 MD3 设计规范：
- **动态配色**：基于专辑封面生成配色方案
- **圆角设计**：使用较大的圆角（16-28dp）
- **层次分明**：通过 Surface 层级区分内容
- **无障碍**：保证足够的对比度和触摸区域

### 主题系统

应用使用 `ThemeProvider` 动态生成主题：
- 从专辑封面提取主色调
- 自动生成完整的 ColorScheme
- 支持深色/浅色模式切换

## 组件列表

### 播放器组件

#### MiniPlayer
迷你播放器组件，显示简化的播放信息。

**位置**：`lib/widgets/mini_player.dart`

**功能**：
- 显示专辑封面缩略图
- 歌曲名和歌手名
- 播放/暂停按钮
- 进度指示

#### AlbumArtwork
专辑封面显示组件，支持动态圆角和阴影。

**位置**：`lib/widgets/album_artwork.dart`

**功能**：
- 网络图片加载和缓存
- 加载占位符
- 错误状态处理
- 可配置圆角

### 歌词组件

#### LyricsWidget
歌词显示组件，支持自动滚动和交互。

**位置**：`lib/widgets/lyrics.dart`

**功能**：
- 逐行高亮显示
- 自动滚动跟随
- 点击跳转播放
- 手动滚动暂停

#### TranslationPage
翻译显示页面，展示原文和译文。

**位置**：`lib/widgets/translation_page.dart`

**功能**：
- 双语对照显示
- 风格切换
- 复制功能

### 卡片组件

#### RandomReviewCard
随机回顾卡片，显示历史笔记。

**位置**：`lib/widgets/random_review_card.dart`

**功能**：
- 专辑封面背景
- 笔记内容和歌词快照
- 评分图标
- 动画切换效果

#### TimeMachineCarousel
时光机轮播组件，显示往年今日的歌曲。

**位置**：`lib/widgets/time_machine_carousel.dart`

**功能**：
- 回忆卡片展示
- 年份标签
- 自动轮播
- 点击交互

### 海报组件

#### NotePosterPreviewPage
笔记海报预览和生成页面。

**位置**：`lib/widgets/note_poster_preview_page.dart`

**功能**：
- 海报预览
- 保存到相册
- 分享功能

#### LyricsPosterPage
歌词海报生成页面。

**位置**：`lib/widgets/lyrics_poster_page.dart`

**功能**：
- 歌词选择
- 样式自定义
- 导出图片

### 通用组件

#### ResponsiveNavigation
响应式导航组件，适配不同屏幕尺寸。

**位置**：`lib/utils/responsive.dart`

**功能**：
- 窄屏全屏导航
- 宽屏侧边面板
- 自动模式检测

#### FilterChips
筛选标签组，用于多选筛选。

**使用示例**：
```dart
FilterChip(
  avatar: Icon(Icons.whatshot_outlined, size: 18),
  label: Text('喜欢'),
  selected: isSelected,
  onSelected: (value) => setState(() => isSelected = value),
)
```

## 使用指南

### 动态主题

使用 `ThemeProvider` 获取动态主题：

```dart
// 获取当前主题
final theme = Theme.of(context);
final colorScheme = theme.colorScheme;

// 使用主题颜色
Container(
  color: colorScheme.primaryContainer,
  child: Text(
    'Hello',
    style: TextStyle(color: colorScheme.onPrimaryContainer),
  ),
)
```

### 从专辑封面更新主题

```dart
final themeProvider = Provider.of<ThemeProvider>(context, listen: false);
await themeProvider.updateThemeFromAlbumArt(imageUrl);
```

### 响应式布局

使用 `ResponsiveNavigation` 处理二级页面：

```dart
ResponsiveNavigation.showSecondaryPage(
  context: context,
  child: DetailPage(),
  preferredMode: SecondaryPageMode.sideSheet,
  maxWidth: 520,
);
```

### 图片缓存

使用 `CachedNetworkImage` 加载网络图片：

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

## 设计资源

### 颜色使用规范

| 用途 | ColorScheme 属性 |
|------|-----------------|
| 主要操作 | `primary` / `onPrimary` |
| 次要元素 | `secondary` / `onSecondary` |
| 背景 | `surface` / `onSurface` |
| 错误状态 | `error` / `onError` |
| 容器 | `primaryContainer` / `onPrimaryContainer` |
| 轮廓 | `outline` / `outlineVariant` |

### 圆角规范

| 组件类型 | 圆角大小 |
|---------|---------|
| 卡片 | 16-24dp |
| 按钮 | 12dp |
| 输入框 | 28dp |
| 底部面板 | 28dp (顶部) |
| 专辑封面 | 8-12dp |

### 间距规范

| 类型 | 大小 |
|------|------|
| 组件内边距 | 16dp |
| 卡片间距 | 8-12dp |
| 列表项间距 | 4-8dp |
| 页面边距 | 16dp |

## 注意事项

1. **性能优化**：长列表使用 `SliverList` 而非 `ListView`
2. **状态管理**：使用 `Provider` 管理共享状态
3. **图片加载**：使用 `CachedNetworkImage` 避免重复请求
4. **动画**：使用 `AnimatedContainer` 和 `AnimatedSwitcher` 实现平滑过渡
5. **无障碍**：为交互元素添加 `Semantics` 或 `tooltip`

## 参考资料

- [Material Design 3 官方文档](https://m3.material.io/)
- [Flutter Material 3 指南](https://flutter.dev/docs/development/ui/material3)
- [palette_generator 包](https://pub.dev/packages/palette_generator)
