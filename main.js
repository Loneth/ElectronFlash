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
