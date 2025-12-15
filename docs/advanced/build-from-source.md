---
sidebar_position: 2
---

# Build from Source

This guide helps you build Spotoolfy from source code. Suitable for developers who want to customize features, learn Flutter development, or contribute to the project.

## Environment Setup

### 1. Install Flutter

Ensure Flutter SDK is installed (recommend version 3.19 or higher):

```bash
# Check Flutter version
flutter --version

# Check environment configuration
flutter doctor
```

If Flutter is not installed, visit the [Flutter official website](https://flutter.dev/docs/get-started/install) and follow the installation guide.

### 2. Clone Repository

```bash
git clone https://github.com/p2o51/spotoolfy_flutter.git
cd spotoolfy_flutter
```

### 3. Configure API Keys

Create `lib/config/secrets.dart` file:

```dart
class Secrets {
  // Spotify API credentials
  // Get from https://developer.spotify.com/dashboard
  static const String spotifyClientId = 'YOUR_CLIENT_ID';
  static const String spotifyRedirectUrl = 'spotoolfy://callback';

  // Google AI API Key (optional, for translation and insights)
  // Get from https://aistudio.google.com/apikey
  static const String geminiApiKey = 'YOUR_GEMINI_API_KEY';
}
```

Refer to `lib/config/secrets.example.dart` for the complete template.

### 4. Configure Spotify App

1. Visit [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create new app
3. Add redirect URI: `spotoolfy://callback`
4. Copy Client ID to `secrets.dart`

## Build Steps

### Install Dependencies

```bash
flutter pub get
```

### Run Development Version

```bash
# Run on connected device
flutter run

# Specify platform
flutter run -d ios
flutter run -d android
flutter run -d web
```

### Build Release Version

#### Android APK

```bash
# Build Release APK
flutter build apk --release

# Output location
# build/app/outputs/flutter-apk/app-release.apk
```

#### Android App Bundle

```bash
# For Google Play release
flutter build appbundle --release
```

#### iOS

```bash
# Requires macOS and Xcode
flutter build ios --release
```

#### Web

```bash
flutter build web --release

# Output location
# build/web/
```

## Platform-Specific Configuration

### Android

Edit `android/app/src/main/AndroidManifest.xml`, ensure it includes:

```xml
<!-- Network permission -->
<uses-permission android:name="android.permission.INTERNET" />

<!-- Spotify callback URL Scheme -->
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="spotoolfy" android:host="callback" />
</intent-filter>
```

### iOS

Edit `ios/Runner/Info.plist`, ensure it includes:

```xml
<!-- URL Scheme -->
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>spotoolfy</string>
        </array>
        <key>CFBundleURLName</key>
        <string>com.gojyuplusone.spotoolfy</string>
    </dict>
</array>

<!-- Spotify App Query -->
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>spotify</string>
</array>
```

## Code Structure

```
lib/
├── config/          # Configuration files (secrets, constants)
├── data/            # Data layer (database_helper)
├── l10n/            # Internationalization resources
├── models/          # Data models
├── pages/           # Page components
├── providers/       # State management (Provider)
├── services/        # Business logic services
├── utils/           # Utility functions
├── widgets/         # Reusable UI components
└── main.dart        # App entry point
```

## Common Build Issues

### Gradle Build Failure

**Problem**: Gradle errors during Android build

**Solution**:
```bash
cd android
./gradlew clean
cd ..
flutter clean
flutter pub get
flutter build apk
```

### CocoaPods Issues

**Problem**: Pod installation fails during iOS build

**Solution**:
```bash
cd ios
rm Podfile.lock
rm -rf Pods
pod install --repo-update
cd ..
flutter clean
flutter build ios
```

### Dependency Version Conflicts

**Problem**: pub get fails with version conflicts

**Solution**:
```bash
flutter pub upgrade --major-versions
```

### secrets.dart Not Found

**Problem**: Build errors saying secrets.dart not found

**Solution**: Ensure you've created `lib/config/secrets.dart`. You can copy `secrets.example.dart` and fill in your API keys.

### Android SDK Version Issues

**Problem**: minSdkVersion incompatibility

**Solution**: Check `android/app/build.gradle`, ensure `minSdkVersion` is 24 or higher.

### iOS Signing Issues

**Problem**: Signing errors during iOS build

**Solution**:
1. Open `ios/Runner.xcworkspace` in Xcode
2. Select Runner target
3. Configure developer account in Signing & Capabilities

## Development Tips

### Code Formatting

```bash
dart format .
```

### Static Analysis

```bash
flutter analyze
```

### Run Tests

```bash
flutter test
```

### Generate Localization Files

```bash
flutter gen-l10n
```

### Hot Reload

Use hot reload during development to speed up iteration:
- Press `r` for hot reload
- Press `R` for hot restart

## Contributing Code

1. Fork the repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push branch: `git push origin feature/your-feature`
5. Create Pull Request

## License

Spotoolfy is an open-source project. Check the LICENSE file in the repository for specific license details.
