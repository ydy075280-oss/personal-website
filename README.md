# 个人网站 —— 文章系统使用说明

React + Vite 纯前端静态站。文章采用 **Markdown 文件**存储（`src/content/*.md`），支持 Obsidian 直写、Notion / 任意链接导入，构建时自动生成 RSS。

## 一、两条写作路径

```
Obsidian（仓库直连 src/content/）→ 保存即发布
Notion（复制页面链接）         → 网站写作台 (#/studio) 粘贴 → 预览 → 发布
```

两条路最终都汇成 `src/content/*.md` + `src/content/images/`，构建时自动生成 `feed.xml`，为未来的多平台分发（Medium / WordPress / Ghost 等支持 RSS 的平台）预留入口。

## 二、日常发布流程

### 方式 A：Obsidian 写作（推荐，保存即发布）

1. Obsidian 中「打开文件夹作为仓库」→ 选择本项目的 `src/content` 目录
   （或将整个项目目录设为仓库，附件默认存放目录设为 `content/images`）
2. 新建笔记，顶部写入 frontmatter：

```markdown
---
title: "文章标题"
date: "2026.08"
tag: "技术"
excerpt: "一句话摘要（可选，不写则自动取正文前 200 字）"
---

正文写 Markdown……
```

3. 图片放进同目录的 `images/` 子文件夹，用标准语法引用：`![描述](images/xxx.png)`
4. 保存 → 网站「洞察画廊」与 RSS 自动出现，无需任何操作

> Obsidian 设置建议：附件默认存放路径选「当前文件夹的子文件夹 images」；
> 关闭 Wiki 链接，统一使用 `![]()` 语法，保证网站正常显示。

### 方式 B：Notion 导入

1. 在 Notion 中打开要发布的页面 → 右上角 `···` → **Connections** → 添加你的 Integration
2. 复制页面链接
3. 打开网站「写作台」（导航栏 → 写作台），粘贴链接 → 导入并预览
4. 编辑标题 / 标签 / 日期 → 发布到网站

### 方式 C：任意网页链接导入

复制任意网页地址（博客、公众号文章等）→ 写作台粘贴 → 导入并预览 → 发布。
底层使用 [Jina Reader](https://jina.ai/reader/) 将网页转成 Markdown。

## 三、首次配置（Notion 授权）

1. 打开 https://www.notion.so/my-integrations ，新建 **Internal integration**，名称随意（如 `my-website`）
2. 记下生成的 `secret_xxx` Token
3. 项目根目录 `.env.local` 中填入：

```
NOTION_TOKEN=secret_xxx
```

4. 重启 `npm run dev` 即可使用 Notion 导入

> Token 属于私密信息，`.env.local` 已加入 `.gitignore`，不会提交到仓库。
> 如果使用通用链接导入时频繁被限流，可申请 Jina Reader 的免费 API Key 填入 `.env.local` 的 `JINA_API_KEY`。

## 四、本地运行

```bash
npm install
npm run dev        # 开发：http://localhost:5173
npm run build      # 构建：生成 dist/（含 feed.xml 与 images/）
npm run preview    # 预览构建产物
```

首次使用 Notion / 链接导入前，请先执行 `npm install` 安装 `marked`、`@notionhq/client`、`notion-to-markdown`。

## 五、文章管理

- **新增**：Obsidian 写文件 / 写作台导入
- **编辑**：写作台 → 已发布文章 → 编辑；或直接在 Obsidian 中改 md 文件
- **删除**：删除 `src/content/` 下对应 `.md` 文件
- 文件命名即网址 slug，如 `digital-nomad-life-experiment.md` → `/#/post/digital-nomad-life-experiment`

## 六、RSS 与未来分发

构建时会从 `src/content/*.md` 自动生成 `dist/feed.xml`。
把 `feed.xml` 的地址（形如 `https://你的域名/feed.xml`）提交给支持 RSS 的开放平台
（Medium / WordPress / Ghost / Dev.to 等），即可实现"一次写作，多平台自动分发"。

正式部署前，将环境变量 `SITE_URL` 设为你的域名，RSS 链接才会指向正确地址：

```bash
SITE_URL=https://你的域名 npm run build
```

## 七、目录结构

```
src/content/          文章 Markdown 源文件（Obsidian 仓库）
src/content/images/   文章图片（md 中以 images/xxx 引用）
src/lib/posts.js      文章扫描、frontmatter 解析、Markdown 渲染
src/components/Post.jsx    文章阅读页（#/post/:slug）
src/components/Studio.jsx  写作台（#/studio）
src/components/Insights.jsx 首页洞察画廊
scripts/notion-import.js   Notion → Markdown（dev 专用）
vite.config.js        导入 API 中间件 + 构建 RSS/图片
```
