---
sidebar_position: 2
---

# Now Playing Page

The Now Playing page is the core interface of Spotoolfy, displaying the currently playing song on Spotify and providing three sub-pages: Lyrics, Notes, and Queue.

## Player

### Album Cover Area
- Displays the album cover of the currently playing song
- App theme dynamically changes based on cover colors
- **Swipe left/right**: Skip to previous/next track
- **Tap cover**: Adjust playback progress
- **Long press cover**: Jump to current playback context (album/playlist)

### Song Information
- **Tap song title**: Navigate to album page
- **Tap artist name**: Navigate to artist page (multi-artist shows selection page first)

### Playback Controls
- Previous / Play・Pause / Next
- Playback mode toggle (sequential, shuffle, repeat one)
- Progress bar: Displayed below the AppBar, tap to seek

### Mini Player
On smaller screens, when switching to the lower half of Lyrics/Notes/Queue tabs, the player automatically switches to mini mode:
- Shows simplified song information
- Tap to expand full player

## Lyrics

The Lyrics tab displays real-time lyrics for the currently playing song.

### Lyrics Sources
Spotoolfy fetches lyrics from multiple sources, prioritized as:
1. **NetEase Cloud Music** - Preferred for Chinese songs
2. **QQ Music** - Fallback source
3. **LRCLIB** - Fallback for English songs

### Lyrics Display
- Lyrics highlight line by line, auto-scrolling with playback progress
- **Tap any lyrics line**: Jump to that position and play
- Current line is highlighted, other lines are semi-transparent

### Auto-Scroll
- Auto-scroll is enabled by default
- **Drag lyrics**: Pause auto-scroll
- **Tap auto-scroll button** (bottom): Resume auto-scroll

### Translation Feature
Tap the translation button to enter the translation page:

#### Translation Styles
- **Faithful**: Accurately conveys original meaning
- **Melodramatic Poet**: More poetic and emotional
- **Machine Classic**: Simulates early machine translation style
- **NetEase**: Uses NetEase native translation (if available)

#### Translation Actions
- **Switch style**: Re-select translation style
- **Re-translate**: Force refresh translation result
- **Copy**: Copy translated lyrics
- **Show original**: Toggle between original/translation

### Copy Lyrics Mode
Tap the "Copy Lyrics Mode" button:
- Lyrics stop auto-scrolling
- Playback mode automatically switches to repeat one
- Convenient for transcribing or studying lyrics
- Close mode or tap auto-scroll button to restore previous playback mode

### Search Lyrics
If auto-matched lyrics are incorrect, tap the search button to manually search:
- Enter song name and artist name
- Select correct lyrics from search results
- Selection is cached locally

## Notes (Records)

The Notes tab displays status information and history notes for the current song.

### Status Panel
Shows statistics for the current song:
- **First recorded**: Time of first note for this song
- **Last listened**: Most recent play time from Spotify
- **Rating change**: Rating change compared to last time (↑up / →same / ↓down)
- **Current rating**: Latest rating

### Notes List
Displays all notes for this song in reverse chronological order:
- **Note content**: Your text record
- **Rating icon**: 👎 / 😐 / 🔥
- **Time markers**:
  - "First": First note
  - "Today" "Yesterday": Notes from today/yesterday
  - Others show relative time or specific date
- **Lyrics snapshot**: Lyrics position when recorded (if any)

### Note Actions
**Long press a note** to open action menu:
- **Play**: Play from the lyrics timestamp recorded in the note
- **Edit**: Modify note content and rating
- **Share**: Generate note poster
- **Delete**: Delete this note

### Related Notes
If notes exist for songs with the same name but different TrackIDs (e.g., same song in regular vs deluxe album), they appear in the "Related Notes" section.

## Queue

The Queue tab displays the upcoming songs in the playback queue.

### Queue Display
- Shows songs that will play next
- Includes song name, artist name, album cover

### Queue Actions
- **Tap song**: Play that song immediately
- **Long press song**: Open in Spotify client

## Floating Action Button (FAB)

The floating button in the bottom right corner is for adding new notes.

### Adding Notes
Tap FAB to open the add note panel:

1. **Enter note content** (optional): Write your thoughts about this song
2. **Select rating**:
   - 👎 Dislike (0 points)
   - 😐 Neutral (3 points)
   - 🔥 Like (5 points)
3. **Auto-recorded**:
   - Current playback timestamp
   - Current lyrics position (lyrics snapshot)
   - Playback context (album/playlist)

### Quick Rating
If no note content is entered, the note is automatically marked as "Rating" type, suitable for quickly recording song evaluations.

## Large Screen Adaptation

On tablets or large screen devices, the Now Playing page uses a side-by-side layout:
- **Left**: Player (album cover and controls)
- **Right**: Tab content (Lyrics/Notes/Queue)

This layout lets you see both the album cover and lyrics content simultaneously.
