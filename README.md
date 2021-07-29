# 📝- ElectronFlash
This guide will step you through the process of creating a barebones Electron app in Electron to allow your app running a Flash with **Pepperflash Plugin** version **32.0.0.371**, if you lazy and want to clone this repo look at here.

To use Electron, you need to install [Node.js](https://nodejs.org/en/download/). I recommend that you use the latest `LTS` version available.
> Please install Node.js using pre-built installers for your platform. You may encounter incompatibility issues with different development tools otherwise.

To check that Node.js was installed correctly, type the following commands in your terminal client:
```sh
node -v
npm -v
```
The commands should print the versions of Node.js and npm accordingly.

**Note:** Since Electron embeds Node.js into its binary, the version of Node.js running your code is unrelated to the version running on your system.

# 💥- Quick Start
Electron apps follow the same general structure as other Node.js projects. Start by creating a folder and initializing an npm package.
```sh
mkdir your-app-name && cd your-app-name
npm init
```
The interactive `init` command will prompt you to set some fields in your config. There are a few rules to follow for the purposes of this tutorial:
* `entry point` should be `main.js`.
* `author` and `description` can be any value, but are necessary for app [app packaging](https://www.electronjs.org/docs/tutorial/quick-start#package-and-distribute-your-application).

Your package.json file should look something like this:
```javascript
{
  "name": "Alter-Dimension",
  "version": "1.0.0",
  "description": "The best AQW World Private Server! maded with kathleen's love and the slaves",
  "main": "main.js",
  "author": "Zueira",
  "license": "MIT"
}
```
We will use the old version of **prebuilt Electron binaries** because Electron no longer supports the Pepper Flash plugin, as Chrome has removed support. install the `electron` package into your app's `devDependencies`.
```sh
npm install electron@8.1.0
```
> Note: If you're encountering any issues with installing Electron, please refer to the [Advanced Installation](https://www.electronjs.org/docs/tutorial/installation) guide.

Finally, you want to be able to execute Electron. In the `scripts` field of your `package.json` config, add a `start` command like so:
```sh
{
  "scripts": {
    "start": "electron ."
  }
}
```
This `start` command will let you open your app in development mode.
```sh
npm start
```
> Note: This script tells Electron to run on your project's root folder. At this stage, your app will immediately throw an error telling you that it cannot find an app to run.

Example the full code of `package.json`:
```javascript
{
  "name": "Alter-Dimension",
  "version": "1.0.0",
  "description": "The best AQW World Private Server! maded with kathleen's love and the slaves",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "electron ."
  },
  "author": "Zueira",
  "license": "MIT",
  "devDependencies": {
    "electron": "8.1.0"
  }
}
```
## 🐮- Create a web page
Before we can create a window for our application, Download the [Pepflashplayer Plugin Here](https://mega.nz/file/DDJTXawC#UxIfKcj98zFfp1-5ql-EjgeR769wWZJuzSnexTv84Rk). extract the `pepflashplayer.dll` in your app folder, in this case put the file in `YourAppName/plugin/pepflashplayer.dll`. Create an `main.js` file in the app folder of your project:
```javascript
const { app, BrowserWindow } = require("electron");
const path = require("path");
const fs = require('fs');

// Specify flash path, supposing it is placed in the same directory with main.js.
let pluginName;
switch (process.platform) {
  case "win32":
    pluginName = "pepflashplayer.dll";
    break;
  case "darwin":
    pluginName = "PepperFlashPlayer.plugin";
    break;
  case "linux":
    pluginName = "libpepflashplayer.so";
    break;
  default:
    pluginName = "pepflashplayer.dll";
    break;
}

app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname + "/plugin/", pluginName)); // your app/folder/plugin/pepflashplayer.dll
app.commandLine.appendSwitch('ppapi-flash-version', '32.0.0.371');

app.on("ready", () => {
  let win = new BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      devTools: false,
      plugins: true,
    }
  });
  win.loadURL('https://aq.com/game/'); // if you want to open your local web site just change it. example win.loadURL('http://localhost/');
});
```

Open CMD (Command Prompt) in your app folder and run `npm start`. For more information about Electron Documentation click [here](https://www.electronjs.org/docs/tutorial/quick-start#package-and-distribute-your-application)
> Note: At this point, your Electron application should successfully open a window!

If you want to distribute your app, you can look at the official electron guide [here](https://www.electronjs.org/docs/tutorial/quick-start#package-and-distribute-your-application).

## 🦄- Clone
Clone this repo from your terminal:
```sh
git clone https://github.com/Loneth/ElectronFlash
```
and then install the package Dependencies from `package.json` by doing:
```sh
npm install
```
