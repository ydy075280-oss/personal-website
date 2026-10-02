@echo off
chcp 65001 >nul
cd /d "G:\我的项目\业务mvp\personal-website"

echo ============================================
echo   创造试验室 · 本地服务
echo ============================================
echo.
echo   正在启动，约需 5-15 秒...
echo   服务就绪后会自动打开浏览器
echo.
echo   首页：     http://localhost:5173
echo   写作后台： http://localhost:5173/#/studio
echo.
echo   关闭这个窗口 = 停止服务（后台会打不开）
echo ============================================
echo.

call npm run dev

echo.
echo 服务已停止。按任意键关闭窗口。
pause >nul
