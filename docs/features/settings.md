---
sidebar_position: 5
---

# Settings & Devices

Tap the user icon in the top right corner to open the settings page, where you manage all Spotoolfy configuration options.

## Account Settings

### Spotify Account
- **Login/Logout**: Manage Spotify account connection
- Shows currently logged-in username
- Login requires Spotify Premium for full playback control features

### Google AI API Key
- For Gemini translation and insights features
- Tap to enter or modify API Key
- API Key is securely stored on local device

**Getting API Key**:
1. Visit [Google AI Studio](https://aistudio.google.com/apikey)
2. Log in with Google account
3. Create new API Key
4. Copy and paste into Spotoolfy

:::note
Due to limited personal capacity, prompts are currently only optimized for Gemini 2.5 Flash series models. Other models are not supported. If needed, you can compile and modify yourself.
:::

## Language Settings

### Gemini's Language (Translation Language)
Select the target language for AI translation and insights output:
- **English**
- **简体中文** - Simplified Chinese
- **繁體中文** - Traditional Chinese
- **日本語** - Japanese

This setting is independent of app interface language. You can:
- Use Chinese interface + English translation
- Use English interface + Chinese translation
- Any other combination

### App Language
App interface language defaults to system settings, or can be configured separately for Spotoolfy in system settings.

## Translation Settings

### Translation Style
Select your preferred lyrics translation style:

| Style | Description | Features |
|-------|-------------|----------|
| **Faithful** | Accurate translation | Accurately conveys original meaning, preserves original structure |
| **Melodramatic Poet** | Poetic translation | Uses more poetic language, enhances emotional expression |
| **Machine Classic** | Machine translation | Simulates early machine translation direct style, sometimes produces interesting results |
| **NetEase Provider** | NetEase translation | Uses NetEase Cloud Music native translation (if available) |

### Copy Lyrics as Single Line
When enabled, copying lyrics or translations replaces line breaks with spaces, suitable for:
- Sharing to social media
- Pasting into single-line input fields
- Avoiding format confusion

### Deep Translation

:::warning Deprecated
This feature has been removed in v1.3 due to excessively long processing time.
:::

- Sets thinking budget for Gemini 2.5 Flash (1024 Tokens)
- May provide higher quality, deeper translation
- **Note**: Consumes more API quota, monitor usage if using paid API Key
- For pricing, refer to [Google AI Documentation](https://ai.google.dev/pricing)

## Tutorial

### Tutorial
Tap to view usage tutorial, suitable for:
- First-time Spotoolfy users
- Learning about new features
- Reviewing operation methods

## Data Management

### Export Data
Exports all local data as JSON file:
- All note records
- Song information
- Translation cache
- Playback context records

Exported file can be used for:
- Data backup
- Migration to other devices
- Data analysis

### Import Data
Import data from previously exported JSON file:
- Data will merge with existing data
- Won't overwrite existing notes
- Takes effect immediately after import

### Import/Export Process
1. **Export**: Settings → Export Data → Choose save location → Save
2. **Import**: Settings → Import Data → Select JSON file → Confirm

## Device Management

Tap the device icon (🔊) in the top right corner to open the device management page.

### Device List
Shows all available Spotify devices:
- Device name
- Device type icon (phone, computer, speaker, etc.)
- Current active status

### Device Types
Device types Spotoolfy can control:
- **Phone/Tablet**: iOS, Android devices
- **Computer**: Spotify client on Windows, macOS
- **Smart Speaker**: Speakers supporting Spotify Connect
- **TV**: Smart TVs supporting Spotify
- **Car**: Car systems supporting Spotify

### Switch Device
Tap a device in the list to switch playback target:
- Music will seamlessly transfer to new device
- Playback progress stays in sync
- Some devices may need Spotify opened on that device first

### Device Refresh
Device list auto-refreshes every 15 seconds, or pull down to manually refresh.

## FAQ

### Device list is empty?
- Ensure Spotify client is running
- Try playing a song in Spotify to activate the device
- Check if devices are connected to the same network

### API Key not working?
- Ensure no extra spaces when copying
- Try regenerating API Key
- Check if API quota is exhausted

### Translation quality not ideal?
- Try switching translation styles
- Enable deep translation
- Translation quality depends on source lyrics accuracy

### Data export failed?
- Check storage permissions
- Ensure sufficient storage space
- Try selecting a different save location
