
# Addison Global QA Technical Assesement

## Introduction

Welcome to Addison Global QA Automation React Native Tech task.

The main goal of this exercise is to assess how you reason about you're ability to test code. There's no hard rules or tricky questions.
We encorage you to use the following language/tool/framework:

* javascript
* webdriverio
* jest/mocha
* appium/selenium

> **Note:** Tests can be written for Android or/and iOS.
## Glossary
* Login View - Initial screen where user can login.
* Native View - Show the user name and his balance inside a native view.
* Web View - Show the user name and his balance inside a webview.

## Exercise
We would like to cover the following 2 happy path test scenarios:

1. Check that balance of __master__ user is 288.00 euro
2. Check that balance of __frontend__ user is 77.77 euro

Please use credentials from `Valid users` section of this doc.

> **Put all your thoughts inside the answer!!**

It is not required to create additional scenarios, but any extra work will be considered as a plus. Would be great to use boundary testing!)
Please document and let us know how would you implement any extra relevant feature that is not covered in the test (reporting, logging ...)

## Deliverable
* **Source Code**: Either of the following ways to bundle the code, whatever is easier for you:
    * A `zip` file containing the whole project. Remember to skip binaries, logs, etc if you choose this option.
    * A link to an accessible private repository with your work in (Github can host private repositories at a cost; there is no charge for doing so with Bitbucket).

* **Documentation** / **Instructions**: You can bundle it together with the code.
    * A `Readme.md` file explaining the assumptions and decisions you've made solving this task including technology and library choices.
    * Any instructions required to run your solution and tests in a Linux environment.

## How to run the App
In order to run app you need to start js bundle in separate process, please use `npm start` section of this doc.
After bundle has started you can just install app on your Emulator/Simulator, please use `Builds Path` section of this doc.
If you want to do some changes is App code, feel free. You can use `Available Scripts` section of this doc for more details.

**We hope you have fun.**

## Valid users
There are two valid user in the application.

* Username: __master__
* Password: __ILoveReactNative__

User __master__ is redirected to balance native view.

* Username: __frontend__
* Password: __ItWillWork__

User __frontend__ is redirected to balance webview screen.

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

You can check if you have Yarn installed:
```
yarn --version
```

In case you haven't installed Yarn, you can follow the instruction to install in your OS:
[How to install Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

##### `npm install`

It is the first command that you have to run for install required packages to run the application.

```
npm install
# or
yarn install
```


#### `npm start`
```
npm start --reset-cache
# or
yarn start --reset-cache
```

Runs your app in development mode.

It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

#### `npm run ios`

```
npm run ios
# or
yarn ios
```

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

```
npm run android
# or
yarn android
```

#### `npm run web`

```
npm run web
# or
yarn web
```

You can find the project running at _http://localhost:8080/_


#### `Builds Path`

You can find your builds in the paths:

* Android: /android/build/output/apk/
* IOS: /ios/build/Build/Products/Debug-iphonesimulator/QAReactNativeThechnicalTest.app

Also you can find android and IOS builds in __/dist__ folder.

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select �Use custom Android SDK tools� and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion�s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

### [`How to install APK in Android emulator`](https://stackoverflow.com/questions/3480201/how-do-you-install-an-apk-file-in-the-android-emulator)

#### `Windows:`
1. Execute the emulator (SDK Manager.exe->Tools->Manage AVDs...->New then Start)
2. Start the console (Windows XP), Run -> type cmd, and move to the platform-tools folder of SDK directory.
3. Paste the APK file in the 'android-sdk\tools' or 'platform-tools' folder.
4. Then type the following command.

```
adb install [.apk path]
```

Example:

```
adb install C:\Users\Name\MyProject\build\Jorgesys.apk
```

##### `Linux:`
1. Copy the apk file to platform-tools in android-sdk linux folder.
2. Open Terminal and navigate to platform-tools folder in android-sdk.
3. Then Execute this command -

```
./adb install FileName.apk
```

If the operation is successful (the result is displayed on the screen), then you will find your file in the launcher of your emulator.
Mac:

```
PATH=$PATH:~/Library/Android/sdk/platform-tools
Example : PATH=$PATH:/users/jorgesys/eclipse/android-sdk-mac_64/tools
```

Then run adb.

#### `Mac:`

1. Run the emulator.
2. Then copy your .apk file and paste into /Users/your_system_username/Library/Android/sdk/platform-tools.
If you are not able to find sdk path in your mac system, do the following steps: Open finder->select Go option on top menu -> select Go to Folder option -> it will popup a window with a textfield:  /Users/your_system_username/Library/Android/sdk/ -> now open platform-tools folder and paste your copied .apk file,
3. Now open terminal and type the following: cd Library/Android/sdk/platform-tools
4. execute the following in your terminal:

```
./adb install yourapkfilename.apk
```
If you get the following error message: error: no devices found - waiting for device, follow the step 5.

5. Run your emulator from Android Studio, once emulator active then repeat step 4, you will see the success message on your terminal.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).

## Environment Variables

You can configure some of Create React Native App's behavior using environment variables.

## Troubleshooting

### iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `npm run ios`:

* "non-zero exit code: 107"
* "You may need to install Xcode" but it is already installed
* and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1. Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2. Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `npm/yarn run ios` after doing so.
3. If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `npm/yarn run ios`.
