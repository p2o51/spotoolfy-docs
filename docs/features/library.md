---
sidebar_position: 3
---

# Library Page

The Library page displays your recently played content, provides AI music insights, and Spotify global search functionality.

## Carousel

The carousel at the top of the page displays your 15 most recently played contexts (albums or playlists).

### Display Content
- Album or playlist cover images
- If cover cannot be fetched (e.g., Spotify Daily Mix), Material Design colors fill in

### Interactions
- **Swipe left/right**: Browse different albums/playlists
- **Tap**: Start playing that context
- Carousel supports parallax scrolling effect

### Data Source
Carousel data comes from local database records, automatically updated as you play music.

## Insights

The AI music insights feature analyzes your recently played music to generate personalized music personality and mood analysis.

### Generating Insights
Tap the ✨ button below the carousel to generate insights:
- Requires configured Google AI API Key
- Analysis based on recently played contexts
- Analysis results are cached, automatically displayed on next open

### Insight Content

#### Music Personality
A short tag describing your music taste, for example:
- "Late Night Jazz Wanderer"
- "Nostalgic Rock Collector"
- "Electronic Dance Explorer"

#### Mood Analysis
Based on your recently played music, AI provides an analysis describing:
- Your possible mood state
- Characteristics of your music choices
- Observations about listening habits

Rest assured, Gemini will not make any negative judgments about your music.

#### Song Recommendations
AI recommends songs you might like:
- Tap recommended songs to auto-search
- Intelligently recommended based on your listening habits

### Insight Actions
- **Expand/Collapse**: Tap expand button to view full insights
- **Regenerate**: Tap ✨ button to refresh insights
- **Long press to copy**: Long press music personality or mood analysis to copy text

## Search

The search bar in the middle of the page supports Spotify global search.

### Search Functionality
1. Tap search bar or enter keywords
2. Press enter or tap search to submit
3. Search results display by category:
   - **Tracks**: Matching songs
   - **Albums**: Matching albums
   - **Artists**: Matching artists/bands
   - **Playlists**: Matching playlists

### Search Result Actions

#### Tracks
- **Tap**: Play immediately
- **Long press**: View more options (add to queue, etc.)

#### Albums
- **Tap**: Enter album detail page
- Album page shows:
  - Album cover and info
  - Complete track list
  - Play entire album

#### Artists
- **Tap**: Enter artist detail page
- Artist page shows:
  - Top tracks
  - Album list
  - Related artists

#### Playlists
- **Tap**: Enter playlist detail page
- **Long press**: Play directly

### Clear Search
- Tap the ✕ button on the right side of search bar to clear search
- Returns to carousel and insights interface after clearing

## Library Content

When not searching, the page displays your Spotify library content:

### Playlists
Shows your saved playlists, tap to enter detail page.

### Albums
Shows your saved albums, tap to view album details and tracks.

### Refresh
Pull down the page to refresh library content and sync latest Spotify data.

## Responsive Layout

The Library page automatically adjusts layout based on screen width:
- **Narrow screen** (phone): Single column display, search results arranged vertically
- **Wide screen** (tablet/desktop): Multi-column grid display, search results shown side by side

Maximum content width is limited to 1200px, ensuring good reading experience on ultra-wide screens.
