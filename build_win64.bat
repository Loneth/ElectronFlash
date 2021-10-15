del /f dist\ArtixLauncher_win_x64.exe
del /f plugins\pepflashplayer32.dll
del /f plugins\libpepflashplayer.so
rmdir /Q /S plugins\PepperFlashPlayer.plugin
call npm run dist
ren "dist\Artix Game Launcher Setup 2.1.0.exe" ArtixLauncher_win_x64.exe

git checkout -- plugins\*

Echo "Command Finished Successfully!""
