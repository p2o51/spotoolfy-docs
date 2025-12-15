---
sidebar_position: 3
---

# MD3 Style Components

Spotoolfy uses Material Design 3 (MD3) style design. This document introduces some reusable UI components in the project for developer reference or use in other projects.

## Design Principles

### Material Design 3

Spotoolfy follows MD3 design specifications:
- **Dynamic Coloring**: Generate color schemes based on album covers
- **Rounded Design**: Uses larger corner radii (16-28dp)
- **Clear Hierarchy**: Distinguish content through Surface levels
- **Accessibility**: Ensure sufficient contrast and touch areas

### Theme System

The app uses `ThemeProvider` to dynamically generate themes:
- Extract primary color from album cover
- Auto-generate complete ColorScheme
- Support dark/light mode switching

## Component List

### Player Components

#### MiniPlayer
Mini player component displaying simplified playback information.

**Location**: `lib/widgets/mini_player.dart`

**Features**:
- Album cover thumbnail
- Song name and artist name
- Play/Pause button
- Progress indicator

#### AlbumArtwork
Album cover display component with dynamic corners and shadows.

**Location**: `lib/widgets/album_artwork.dart`

**Features**:
- Network image loading and caching
- Loading placeholder
- Error state handling
- Configurable corner radius

### Lyrics Components

#### LyricsWidget
Lyrics display component with auto-scrolling and interaction.

**Location**: `lib/widgets/lyrics.dart`

**Features**:
- Line-by-line highlighting
- Auto-scroll following
- Tap to seek playback
- Manual scroll pause

#### TranslationPage
Translation display page showing original and translated text.

**Location**: `lib/widgets/translation_page.dart`

**Features**:
- Bilingual comparison display
- Style switching
- Copy function

### Card Components

#### RandomReviewCard
Random review card displaying historical notes.

**Location**: `lib/widgets/random_review_card.dart`

**Features**:
- Album cover background
- Note content and lyrics snapshot
- Rating icon
- Animated transition effect

#### TimeMachineCarousel
Time machine carousel component showing songs from this day in history.

**Location**: `lib/widgets/time_machine_carousel.dart`

**Features**:
- Memory card display
- Year labels
- Auto carousel
- Tap interaction

### Poster Components

#### NotePosterPreviewPage
Note poster preview and generation page.

**Location**: `lib/widgets/note_poster_preview_page.dart`

**Features**:
- Poster preview
- Save to gallery
- Share function

#### LyricsPosterPage
Lyrics poster generation page.

**Location**: `lib/widgets/lyrics_poster_page.dart`

**Features**:
- Lyrics selection
- Style customization
- Export image

### General Components

#### ResponsiveNavigation
Responsive navigation component adapting to different screen sizes.

**Location**: `lib/utils/responsive.dart`

**Features**:
- Full-screen navigation on narrow screens
- Side panel on wide screens
- Auto mode detection

#### FilterChips
Filter chip group for multi-select filtering.

**Usage Example**:
```dart
FilterChip(
  avatar: Icon(Icons.whatshot_outlined, size: 18),
  label: Text('Like'),
  selected: isSelected,
  onSelected: (value) => setState(() => isSelected = value),
)
```

## Usage Guide

### Dynamic Theme

Use `ThemeProvider` to get dynamic theme:

```dart
// Get current theme
final theme = Theme.of(context);
final colorScheme = theme.colorScheme;

// Use theme colors
Container(
  color: colorScheme.primaryContainer,
  child: Text(
    'Hello',
    style: TextStyle(color: colorScheme.onPrimaryContainer),
  ),
)
```

### Update Theme from Album Cover

```dart
final themeProvider = Provider.of<ThemeProvider>(context, listen: false);
await themeProvider.updateThemeFromAlbumArt(imageUrl);
```

### Responsive Layout

Use `ResponsiveNavigation` for secondary pages:

```dart
ResponsiveNavigation.showSecondaryPage(
  context: context,
  child: DetailPage(),
  preferredMode: SecondaryPageMode.sideSheet,
  maxWidth: 520,
);
```

### Image Caching

Use `CachedNetworkImage` for loading network images:

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

## Design Resources

### Color Usage Guidelines

| Purpose | ColorScheme Property |
|---------|---------------------|
| Primary actions | `primary` / `onPrimary` |
| Secondary elements | `secondary` / `onSecondary` |
| Background | `surface` / `onSurface` |
| Error states | `error` / `onError` |
| Containers | `primaryContainer` / `onPrimaryContainer` |
| Outlines | `outline` / `outlineVariant` |

### Corner Radius Guidelines

| Component Type | Corner Radius |
|---------------|---------------|
| Cards | 16-24dp |
| Buttons | 12dp |
| Input fields | 28dp |
| Bottom sheets | 28dp (top) |
| Album covers | 8-12dp |

### Spacing Guidelines

| Type | Size |
|------|------|
| Component padding | 16dp |
| Card spacing | 8-12dp |
| List item spacing | 4-8dp |
| Page margins | 16dp |

## Notes

1. **Performance Optimization**: Use `SliverList` instead of `ListView` for long lists
2. **State Management**: Use `Provider` to manage shared state
3. **Image Loading**: Use `CachedNetworkImage` to avoid repeated requests
4. **Animation**: Use `AnimatedContainer` and `AnimatedSwitcher` for smooth transitions
5. **Accessibility**: Add `Semantics` or `tooltip` for interactive elements

## References

- [Material Design 3 Official Documentation](https://m3.material.io/)
- [Flutter Material 3 Guide](https://flutter.dev/docs/development/ui/material3)
- [palette_generator Package](https://pub.dev/packages/palette_generator)
