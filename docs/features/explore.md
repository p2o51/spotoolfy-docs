---
sidebar_position: 4
---

# Explore Page

The Explore page is your music notes center, containing Time Machine, Random Review, and a complete notes list. Here records all your stories with music.

## Time Machine

Time Machine lets you rediscover songs you saved on this day in previous years, discovering forgotten music memories.

### Today in History
- Automatically finds songs added to favorites on this day in previous years (±1 day tolerance)
- Shows "X years ago today" label
- Displays song name, artist, album cover

### Time Machine Interactions
- **Tap song**: Open memory details, showing full information
- **Play**: Replay this song from years past
- **View All**: Enter the full Time Machine page

### Time Machine Page
Tap "View All" or date range button to enter Time Machine page:
- Shows all matching memory songs
- Supports custom date range queries
- Tap date button to switch between "Today in History" and "Custom Range" modes

### Sparse Index
Time Machine uses sparse index technology for optimized performance:
- First use will scan your Spotify library
- Queries are extremely fast after index is built
- Index data stored locally, never uploaded

## Random Review

Randomly displays notes you've written in the past, helping you relive music-related memories.

### Auto Carousel
- Automatically switches to display different notes every 4 seconds
- Shows note content, song info, rating

### Review Card
Card displays:
- Note content (if any)
- Lyrics snapshot (if any)
- Song name, artist name
- Album cover
- Rating icon
- Recording time

### Interactions
- **Tap card**: Open note details
- **Long press card**: Play that song immediately

## Carousel Area

Time Machine and Random Review form a swipeable carousel area:
- **First page**: Time Machine (Today in History)
- **Second page**: Random Review
- Page indicator at bottom
- Swipe left/right to switch

## All Notes

The bottom of the page displays all your recorded notes, sorted by time in reverse order.

### Search Notes
Use the search bar to search notes:
- Supports searching note content
- Supports searching song names
- Supports searching artist names

### Filter Function
Use filter tags to quickly filter notes:

| Filter | Description |
|--------|-------------|
| **All** | Shows all notes with content |
| **🔥 Like** | Only shows notes rated "Like" |
| **😐 Neutral** | Only shows notes rated "Neutral" |
| **👎 Dislike** | Only shows notes rated "Dislike" |
| **⭐ Ratings Only** | Only shows rating records without text content |

Each filter tag shows the corresponding note count.

### Note Cards
Each note displays:
- **Note content**: Your written text (if any)
- **Lyrics snapshot**: Lyrics when recorded (if any)
- **Song info**: Song name, artist, album cover
- **Recording time**: Shows as "Today HH:mm", "Yesterday HH:mm", or "MM-DD HH:mm"
- **Rating icon**: 👎 / 😐 / 🔥

### Note Actions

#### Tap Note
Opens note detail panel, where you can:
- View full note content
- Modify rating
- Edit note content
- Play song (from recorded timestamp position)
- Generate share poster
- Delete note

#### Swipe Actions (Narrow Screen Mode)
- **Swipe right**: Play song
- **Swipe left**: Delete note (requires confirmation)

### Statistics
The left side of the filter bar shows total note count, letting you know how many music stories you've recorded.

## Refresh Data

Pull down the page to refresh data:
- Reload notes list
- Update Time Machine data
- Refresh Random Review

## Responsive Layout

The Explore page adjusts layout based on screen width:

### Narrow Screen (Phone)
- Single column note list
- Supports swipe actions (swipe left to delete, swipe right to play)
- More compact card design

### Wide Screen (Tablet/Desktop)
- Two-column masonry layout
- Card grid display
- Separator decorations

## Empty State

If you haven't recorded any notes:
- Shows friendly empty state prompt
- Guides you to add your first note on the "Now Playing" page
