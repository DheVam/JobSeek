# JobFinder

JobFinder is a mobile application designed to provide users with a seamless experience for browsing and bookmarking job listings. The app features a user-friendly interface with smooth navigation, infinite scroll, and offline storage for bookmarked jobs. Built using modern technologies, JobFinder ensures a high-performance and scalable solution for job seekers.
This app was created as a part of assignment given by LoKal Pvt Ltd

## Features

- **Bottom Navigation**: Easy navigation through the app with a bottom navigation bar.
- **Infinite Scroll**: Smooth scrolling through job listings without interruption.
- **API Integration**: Fetches real-time job listings from a remote server.
- **Bookmarking**: Users can bookmark jobs for later viewing.
- **Offline Storage**: Access bookmarked jobs even without an internet connection.
- **Native Base UI**: Clean and modern UI components from Native Base.
- **FontAwesome Icons**: Enhanced visual elements using FontAwesome icons.

## Technologies Used

- **React Native**: For building the mobile application.
- **Redux Toolkit**: For state management.
- **Native Base**: For UI components.
- **FontAwesome Icons**: For icons.
- **Yarn**: For package management.
- **AsyncStorage**: For offline data storage.

## Installation and Setup

Follow these steps to install and run the application:

### Prerequisites

- Node.js
- Yarn
- Android Studio (for Android development)
- JDK (Java Development Kit)

### Steps

1. **Clone the Repository**
   git clone https://github.com/your-username/jobfinder.git
   cd jobfinder

2. **Install Dependencies**
   
   yarn install

5. **Run the Application**


     Start an Android emulator from Android Studio or connect an Android device, then run:

     npx react-native run-android

## Building an APK

To generate an installable APK file:

1. **Generate a Release APK**

   cd android
   ./gradlew assembleRelease
   
3. The generated APK can be found in the `android/app/build/outputs/apk/release/` directory.
