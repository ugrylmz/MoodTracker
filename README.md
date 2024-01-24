# React Native Mood Tracker App

## Introduction

This project is a React Native application developed using TypeScript. It's designed as a mood tracking app, allowing users to log and monitor their moods over time. This README provides an overview of the project's features and instructions for setting up and running the app.

## Features

- **Mood Picker Component**: A feature allowing users to select their mood, implemented in `MoodPicker.tsx`. This component uses emoji representations for different moods and is styled using flexbox for optimal layout.
  
- **Bottom Tabs Navigation**: Implemented in `BottomTabs.navigator.tsx`, this feature facilitates navigation between the Home, History, and Analytics screens using a bottom tab navigation pattern.
  
- **Home Screen**: The central screen of the app, where users can interact with the Mood Picker component.
  
- **History Screen**: A screen that displays the user's mood history.
  
- **Analytics Screen**: This screen provides analytical insights into the user's mood trends over time.
  
- **App Navigation**: The app includes a `NavigationContainer` and a `BottomTabsNavigator`, enhancing user navigation experience.

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