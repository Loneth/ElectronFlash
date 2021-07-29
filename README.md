# ElectronFlash
This guide will step you through the process of creating a barebones Electron app in Electron, to allow your app running a Flash with Pepperflash Plugin(32.0.0.371).

## 📝- Prerequisites
To use Electron, you need to install [Node.js](https://nodejs.org/en/download/). I recommend that you use the latest LTS version available. Please install pre-built installers for your platform. You may encounter incompatibility issues with different development tools otherwise.

To check that Node.js was installed correctly, type the following commands in your terminal client:
```sh
node -v
npm -v
```
The commands should print the versions of Node.js and npm accordingly.

**NOTE:** Since Electron embeds Node.js into its binary, the version of Node.js running your code is unrelated to the version running on your system.

## 💥- Create your application
Electron apps follow the same general structure as other Node.js projects. **Start by creating a folder** and **initializing an npm package.**
```sh
mkdir your-app-name && cd your-app-name
npm init
```
The interactive `init` command will prompt you to set some fields in your config. There are a few rules to follow for the purposes of this tutorial:

* `entry point` should be `main.js`.
* `author` and `description` can be any value, but are necessary for **app packaging**.

example `package.json` file should look something like this:
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
**NOTE:** YOUR `package.json` SHOULD BE IN YOUR APP FOLDER.

## 🐩- Installation
In this case we will install **older version of prebuilt Electron binaries** because Electron no longer supports the Pepper Flash plugin, as Chrome has removed support.

Field of your `package.json` config, add a start command like so:
```sh
"devDependencies": {
  "electron": "8.1.0"
}
```
**AND AFTER YOU ADD THE DEPENDECIES IT SHOULD BE LIKE THIS:**
```javascript
{
  "name": "Alter-Dimension",
  "version": "1.0.0",
  "description": "The best AQW World Private Server! maded with kathleen's love and the slaves",
  "main": "main.js",
  "author": "Zueira",
  "license": "MIT",
  "devDependencies": {
    "electron": "8.1.0"
  }
}
```
Then, install the electron package into your app's devDependencies. **OPEN CMD(Command Prompt) IN YOUR APP FOLDER AND RUN THIS COMMAND:**
```sh
npm install electron --save-dev
```
For more installation options and troubleshooting tips, see [installation](https://github.com/electron/electron/blob/main/docs/tutorial/installation.md). For info on how to manage Electron versions in your apps, see [Electron versioning](https://github.com/electron/electron/blob/main/docs/tutorial/electron-versioning.md).

Finally, you want to be able to execute Electron. In the `scripts` field of your `package.json` config, add a `start` command like so:
```javascript
{
  "scripts": {
    "start": "electron ."
  }
}
```
And it will look like this:
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
This `start` command will let you open your app in development mode.
```sh
npm start
```
**NOTE:** This script tells Electron to run on your project's root folder. At this stage, your app will immediately throw an error telling you that it cannot find an app to run.

## 🐮- Create a web page
Before we can create a window for our application, Download the [Pepflashplayer Plugin Here](https://mega.nz/file/DDJTXawC#UxIfKcj98zFfp1-5ql-EjgeR769wWZJuzSnexTv84Rk) and then extrach the `pepflashplayer.dll` in your app folder in that case put the file in `YourAppName/plugins/pepflashplayer.dll`, After that create the content that will be loaded into it. In Electron, each window displays web contents that can be loaded from either from a local HTML file or a remote URL.

For this tutorial, you will be doing the former. Create an `main.js` file in the app folder of your project:
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

After that you can run `npm start` in your app folder. open [Package and distribute your application](https://www.electronjs.org/docs/tutorial/quick-start#package-and-distribute-your-application) for more information guide to distribute your app. for more **Electron.js** guide see the Documentation [HERE](https://www.electronjs.org/docs/README).
