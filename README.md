# Mood Tracker App

This is a simple mobile application for tracking your mood over time. It allows users to select a mood from a predefined list and optionally add notes to each mood entry.

## All Features
- using TypeScript with React Native
- recap on core components and React Hooks
- bottom navigation
- JavaScript-only vs native libraries for React Native
- using React Context to store global app state
- persisting data across app launches
- rendering images locally and via url
- svg's in React Native
- animations using LayoutAnimation
- bespoke animations using Reanimated 3
- adding app icons
- adding a splash screen

## Changes
- Added add note optionally functionality for mood items in the `MoodItemRow` component.
## TO DO:
-    add a feature to allow the user to edit a mood item
- group the items in the history tab by day and render the days using a drawer layout
-    create a component to fade or scale in when an image loaded via url has finished loading
-    animated header for a scrollable page
 -   use react-native-haptic-feedback to add a vibration effect when the user selects a mood
 -   react-native-sound to play a soundtrack in your app that the user can turn on and off
 -  react-native-push-notification to send a notification to the user at a specific time
 -  react-native-share to allow the user to share their mood data with others
 -  auth flow with react-navigation
 -  react-native-firebase for push notifications
 -  react-native-firebase for analytics
 -  react-native-firebase for crashlytics
 -  react-native-firebase for remote config

## Screens
<div style="display: flex; justify-content: space-between;">
<img src="https://raw.githubusercontent.com/ugrylmz/MoodTracker/main/1.png" style="width: 30%;" />
<img src="https://raw.githubusercontent.com/ugrylmz/MoodTracker/main/2.png" style="width: 30%;" />
<img src="https://raw.githubusercontent.com/ugrylmz/MoodTracker/main/3.png" style="width: 30%;"/>
</div>

### Home Screen

The Home screen displays a background image and allows users to select their current mood from a predefined list.

### History Screen

The History screen shows a list of mood entries, with the most recent entries displayed first. Users can swipe left on a mood item to delete it.

### Analytics Screen

The Analytics screen provides insights and visualizations based on the user's mood data over time.

## Setup and Installation

1. **Clone the Repository**
   ```
   git clone https://github.com/ugrylmz/MoodTracker.git
   ```
2. **Install Dependencies**
   ```
   npm install
   ```
   or 
   ```
   yarn install
   ```
   This installs the necessary packages, including React Navigation (`@react-navigation/bottom-tabs`, `@react-navigation/native`) and UI enhancement packages (`react-native-safe-area-context`, `react-native-screens`).

3. **Run the App**
   ```
   npx react-native run-android
   ```
   |
   ```
   yarn android
   ```
    or
   ```
   npx react-native run-ios
   ```
   |
    ```
    yarn ios
    ```
   depending on your target platform.

## Additional Information

- **Prettier and VSCode Settings**: The project is configured with Prettier for code formatting and includes custom VSCode settings for enhanced development experience.
  
- **MainActivity.java**: Customization in the `MainActivity.java` for optimal React Native setup.

## Contributing

Feel free to contribute to this project. Please ensure that you follow the existing coding standards and commit message formats.

## Author

- Uğur Yılmaz - [ugur@uguryilmaz.dev](mailto:ugur@uguryilmaz.dev)
- Koray Emre Şenel - [https://www.linkedin.com/in/korayemresenel](https://www.linkedin.com/in/korayemresenel)