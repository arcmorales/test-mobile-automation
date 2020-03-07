# Mobile Test Automation

UI Test automation for both iOS and Android

The framework follows the page-object model structure.

## Pre-requisites
1. Machine has latest version of node set up. Framework is also tested to support **v12.13.0**. NVM can also be used to switch node versions.
2. Ensure that the simulators and emulators appium-ready
    - There is no need to install the app (iOS) or apk(Android) separately before running the test. The framework installs the app on runtime.
3. For iOS, make sure that webdriverAgent is also configured
4. To verify set-up, run `appium-doctor`

## Apps
1. For Android, provide the apk
2. For iOS, the app has to be **built for the simulator**. Extension should be in `.zip` format.
3. Move the `apk` and `zip` files (for android and iOS respectively) to this framework's `app` folder

Note: For iOS, make sure that WebdriverAgent is correctly set-up. For further reference, check document for [Facebook WebdriverAgent.](https://github.com/facebookarchive/WebDriverAgent)


## Getting Started

1. Clone this repo
2. Run `npm install` to install all dependencies


## Running the test
This framework is designed to use a testrunner that can handle logic, allowing the tests to be ran programmatically. This framework can also be ran on an arbitrary environment.

Command to run tests: `npm test <platform> <suite>` Example: `npm test ios login` or `npm test android login`. For this repo, since there is only one test written, use `login` as the suite.


## Demo

#### iOS
![alt text](ios_login.gif)


#### Android
![alt text](android_login.gif)

## Environment
Credentials and secrets are stored in a `.env` file. Follow the `.env.sample` file as reference.


## Configurations
There are three key config files on this framework:
1. `wdio.conf.js` - contains all the main, common configurations that are essential for the framework. It includes hooks, options, etc
2. `config/wdio.android.conf.js` - contains the capabilities for android
3. `config/wdio.ios.conf.js` - contains the capabilities for ios


---

## Assumptions, Pre-conditions and Other Info

1. The test apps used for this framework are Native iOS and Android apps. However, these apps are NOT production builds
2. iOS: For the apps to be ran on appium, the app need to be built for the simulator. To do so, the app needs to be built locally with proper signing with all the necessary dependencies installed. Most production applications do not have their codebase as open source, so it is extremely difficult to generate a simulator-compatible build of a production app. Therefore I opted to use a Native Demo app.

### Limitations
1. As per instruction, "The test case is considered as passed successfully when the next screen after sign-in appears". However, the native demo app has no redirection but rather shows a pop-up confirmation. This is what is used to determine a *successful* log in on this test. 
2. The app is not hooked up with any actual DB. There is also no password field. Therefore, any log in is considered a successful log in.
3. The app has inline validation for the fields. These are added on the test case
4. The test runs on iOS 13.1 (simulator) and Android 9.0 (emulator). Other OS versions (for compatibility) were NOT tested.