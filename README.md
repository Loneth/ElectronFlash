# 📝- ElectronFlash
An example bare project structure of Electron with Adobe Flash Player plugin, and developed with [`electron-webpack`](https://github.com/electron-userland/electron-webpack). Make sure to check out [`electron-webpack`](https://webpack.electron.build/), and [`electron-builder`](https://www.electron.build/) documentation for more details.

## 💥- Getting Started
Simply clone down this repository, install dependencies, and get started on your application. The use of the [yarn](https://yarnpkg.com/) package manager is **strongly** recommended, as opposed to using `npm`.

```bash
git clone https://github.com/Loneth/ElectronFlash.git
cd ElectronFlash
rm -rf .git
```

and then 
```bash
yarn
```

## 🦄 - Info
run application in development mode
```bash
yarn dev
```
compile source code and create webpack output
```bash
yarn compile
```
`yarn compile` & create build with electron-builder
```bash
yarn dist
```
`yarn compile` & create unpacked build with electron-builder
```bash
yarn dist:dir
```
or you can just run the `build_win32.bat` for windows 32 bit or `build_win64.bat` for windows 64 bit.
