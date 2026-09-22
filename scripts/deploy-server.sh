#!/usr/bin/env bash
# 服务器端一键更新：拉取最新代码 → 构建 → 输出到 nginx 网站目录 → 修权限
#
# 用法：
#   ./scripts/deploy-server.sh
#
# 可用环境变量覆盖默认值：
#   SITE_DIR   网站根目录，默认 /var/www/youngyy.me
#   SITE_URL   站点地址（用于生成 RSS 链接），默认 https://www.youngyy.me
#   WEB_USER   nginx 运行用户，默认 www-data
#
set -e

SITE_DIR="${SITE_DIR:-/var/www/youngyy.me}"
SITE_URL="${SITE_URL:-https://www.youngyy.me}"
WEB_USER="${WEB_USER:-www-data}"
REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "== 代码目录：$REPO_DIR"
echo "== 网站目录：$SITE_DIR"

cd "$REPO_DIR"

echo
echo "== 1/3 拉取最新代码 =="
git pull origin main

echo
echo "== 2/3 构建（这会重建整个网站目录，含作品图片，约需一两分钟）=="
SITE_URL="$SITE_URL" BUILD_OUT_DIR="$SITE_DIR" npm run build

echo
echo "== 3/3 修复权限 =="
chown -R "$WEB_USER":"$WEB_USER" "$SITE_DIR"

echo
echo "== 完成 =="
ls -l "$SITE_DIR/index.html"
echo "请硬刷新浏览器（Ctrl + Shift + R）查看最新内容"
