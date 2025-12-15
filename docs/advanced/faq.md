---
sidebar_position: 1
---

# FAQ & Known Issues

## Known Issues

### Lyrics Related

#### Lyrics Display Incorrectly
- **Symptom**: Lyrics timestamps out of sync with music, or lyrics content is wrong
- **Cause**: Third-party lyrics sources may have errors
- **Solution**: Use manual search function to select other versions of lyrics

#### Some Songs Have No Lyrics
- **Symptom**: Shows "Lyrics not found"
- **Cause**: Song may be obscure, or song information is incomplete
- **Solution**: Try manual search with different keyword combinations

#### Translation Loading Slowly
- **Symptom**: Long wait after tapping translate
- **Cause**: Gemini API response time affected by network
- **Solution**: Be patient, translation results are cached, instant load next time

### Playback Control

#### Device List is Empty
- **Symptom**: Cannot find any Spotify devices
- **Cause**: No active Spotify client
- **Solution**:
  1. Open Spotify client on any device
  2. Play a song to activate the device
  3. Refresh device list in Spotoolfy

#### Playback Control Unresponsive
- **Symptom**: Tapping play/pause has no effect
- **Cause**: May be expired token or network issue
- **Solution**:
  1. Check network connection
  2. Try logging out and back into Spotify
  3. Ensure Spotify client is running

#### Progress Bar Out of Sync After Track Change
- **Symptom**: Progress bar display doesn't match actual playback position
- **Cause**: Network delay causes state update lag
- **Solution**: Wait a few seconds, progress will auto-sync

### Time Machine

#### First Time Machine Use is Slow
- **Symptom**: Long wait when first opening Time Machine
- **Cause**: Building sparse index, scanning Spotify library
- **Solution**: Be patient, queries will be very fast after index is built

#### Time Machine Shows No Content
- **Symptom**: Shows "No memories found"
- **Cause**: May not have saved any songs on this day in previous years
- **Solution**: Try using custom date range to query a larger time span

### iOS Specific Issues

#### Cannot Return to App After Login
- **Symptom**: Stays in browser after completing Spotify authorization
- **Cause**: URL Scheme callback may be intercepted by system
- **Solution**: Manually switch back to Spotoolfy app

#### TestFlight Version Expired
- **Symptom**: App won't open, shows version expired
- **Cause**: TestFlight builds have expiration limits
- **Solution**: Wait for new version release, or contact developer for update

## Frequently Asked Questions

### Account & Login

**Q: Do I need Spotify Premium?**
A: Full features require Premium. Free users can view lyrics, take notes, but cannot control playback.

**Q: Is my Spotify data safe?**
A: Spotoolfy doesn't store your password. OAuth authorization only obtains necessary permissions, token is securely stored on local device.

**Q: Can I log in to multiple accounts?**
A: Currently only single account login is supported. To switch accounts, please log out of current account first.

### Lyrics & Translation

**Q: Why are some lyrics garbled?**
A: May be lyrics source encoding issue. Try manually searching for other sources.

**Q: Does translation cost money?**
A: Google AI API Key is free to obtain and use, completely free for personal use.

**Q: Can I save translated lyrics?**
A: Translations are automatically cached locally, you can also use copy function to save.

**Q: What's the difference between translation styles?**
A:
- Faithful: Direct translation, accurately conveys original meaning
- Melodramatic Poet: Liberal translation, more poetic and emotional
- Machine Classic: Simulates early machine translation, unique style
- NetEase: Uses NetEase native translation

### Notes & Data

**Q: Do notes sync to cloud?**
A: Currently notes are only stored on local device. You can use export function to backup data.

**Q: Will I lose notes when changing phones?**
A: Need to manually export then import. Suggest backing up data regularly.

**Q: Can I delete all data?**
A: You can clear app data in device storage, or uninstall and reinstall.

**Q: Is there a character limit for notes?**
A: No hard limit, but suggest keeping it concise.

### Features & Compatibility

**Q: Does it support Apple Watch?**
A: Currently not supported, but you can control iPhone/iPad through Spotoolfy.

**Q: Can I use it offline?**
A: Lyrics and translation require network. Cached content can be viewed offline, but playback control requires internet.

**Q: Does it support podcasts?**
A: Currently optimized mainly for music, podcasts may not fetch lyrics.

**Q: Why is there no Android widget?**
A: Widget feature is planned, will be added in future versions.

### Issue Reporting

**Q: How to report a bug?**
A:
1. Discord `#bug-reports` channel (recommended)
2. GitHub Issues
3. Email lastnatsu51@gmail.com

**Q: How to request new features?**
A:
1. Discuss in Discord `#feedback` channel
2. Submit Feature Request on GitHub Issues

**Q: What information to provide when reporting issues?**
A:
- Device model and system version
- Spotoolfy version number
- Detailed description of the issue
- Reproduction steps
- Screenshots or screen recordings (if possible)

## Error Code Reference

| Error Code | Meaning | Solution |
|------------|---------|----------|
| `AUTH_EXPIRED` | Authorization expired | Re-login to Spotify |
| `NO_ACTIVE_DEVICE` | No active device | Play any song in Spotify client |
| `NETWORK_ERROR` | Network error | Check network connection |
| `LYRICS_NOT_FOUND` | Lyrics not found | Try manual search |
| `API_RATE_LIMITED` | API requests too frequent | Try again later |
| `TRANSLATION_FAILED` | Translation failed | Check API Key configuration |
