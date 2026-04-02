@echo off
title Lili's Website
color 0A
echo ================================================
echo   Starting Lili's Website...
echo ================================================
echo.
echo Your website will open at: http://localhost:4321
echo.
echo To stop the website, press Ctrl+C in this window.
echo.
cd /d "C:\Lili's Website"
SET "PATH=%PATH%;C:\Program Files\nodejs"
npm run dev
pause
