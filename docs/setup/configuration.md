---
sidebar_position: 2
---

# Configuration

This guide will help you complete the initial setup for Spotoolfy.

## Basic Configuration

### 1. Log in to Spotify

This is the first step to using Spotoolfy:

1. Open Spotoolfy
2. Tap the **User icon** button in the top right corner
3. Tap "Log in to Spotify"
4. Log in to your account on the Spotify authorization page
5. Authorize Spotoolfy to access your Spotify data
6. Once logged in, your username will appear on the settings page

:::note Important
- Spotify Premium is required for playback control features
- Free users can use lyrics viewing, note-taking, and other features
- Authorization does not expose your password, only grants necessary access permissions
:::

### 2. Configure Google AI API Key (Optional but Recommended)

To use AI translation and insights features, you need to configure a Google AI API Key:

1. Visit [Google AI Studio](https://aistudio.google.com/apikey)
2. Log in with your Google account
3. Click "Create API Key" to generate a new key
4. Copy the generated API Key
5. In Spotoolfy settings, tap "Google AI API Key"
6. Paste the API Key and save

:::tip About API Keys
- Google AI API Key is **free** to obtain and use
- Free tier has usage quota limits, but is sufficient for personal use
- API Key is stored locally on your device only, never uploaded to any server
:::

### 3. Ensure Device Availability

Spotoolfy requires an active Spotify playback device:

1. Ensure the official Spotify client is installed on your phone/computer
2. Play any song in the Spotify client (to activate the device)
3. Tap the **Device icon** in the top right corner of Spotoolfy
4. Select the device you want to control from the device list

## Advanced Configuration

### Language Settings

Spotoolfy supports multiple languages in two categories:

#### App Language
The display language of the app interface, follows system settings or can be manually selected:
- English
- 简体中文 (Simplified Chinese)
- 繁體中文 (Traditional Chinese)
- 日本語 (Japanese)

#### Gemini Language
The target language for AI translation and insights:
- Find "Gemini's Language" in settings
- Select the language you want AI output in
- This setting is independent of app language

### Translation Style

Select your preferred translation style in settings:

| Style | Description | Best For |
|-------|-------------|----------|
| **Faithful** | Accurately conveys original meaning | Understanding precise lyrics meaning |
| **Melodramatic Poet** | More poetic and emotional | Appreciating literary translation |
| **Machine Classic** | Simulates early machine translation | Entertainment or special needs |
| **NetEase** | NetEase native translation | When existing translation is available |

### Deep Translation

- Enable "Deep Translation" in settings
- Sets a thinking budget for Gemini (1024 Tokens)
- May provide higher quality translation, but consumes more API quota
- **Note**: If using a paid API Key, monitor your usage

### Data Management

#### Export Data
1. Tap "Export Data" in settings
2. Choose save location
3. Data exports in JSON format, including all notes and translations

#### Import Data
1. Tap "Import Data" in settings
2. Select previously exported JSON file
3. Data will merge with current data

## Common Questions

### Q: Shows "No device found" after login?
A: Ensure the Spotify client is running and playing music. If the issue persists, try logging in again.

### Q: API Key invalid or translation failed?
A: Check that the API Key was copied correctly without extra spaces. If still failing, try regenerating the API Key.

### Q: Will data sync after setup?
A: Currently data is stored locally on device only. To use on other devices, use the export/import feature.
