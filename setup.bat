@echo off
title Lili's Website Setup
color 0A
echo ================================================
echo   Lili's Website - Setup Script
echo ================================================
echo.
echo Step 1: Installing Node.js (this may take a minute)...
echo.
winget install OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
echo.
echo Step 2: Refreshing environment variables...
call refreshenv 2>nul
SET "PATH=%PATH%;C:\Program Files\nodejs"
echo.
echo Step 3: Installing website dependencies...
cd /d "C:\Lili's Website"
call npm install
echo.
echo ================================================
echo   Setup complete!
echo   Now run start.bat to launch your website.
echo ================================================
echo.
pause
