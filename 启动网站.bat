@echo off
chcp 65001 >nul
cd /d "G:\我的项目\业务mvp\personal-website"
echo 正在启动网站...
echo.
start http://localhost:5173
call npm run dev
pause
