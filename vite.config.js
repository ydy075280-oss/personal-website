import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname, join, extname } from 'node:path'
import {
  readdirSync, readFileSync, writeFileSync, mkdirSync, copyFileSync,
  existsSync, statSync, unlinkSync,
} from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const contentDir = join(__dirname, 'src/content')
const imagesDir = join(contentDir, 'images')
const distDir = join(__dirname, 'dist')

const MIME = {
  svg: 'image/svg+xml',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  gif: 'image/gif',
  avif: 'image/avif',
}

/* ---------- 通用工具 ---------- */

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (c) => (data += c))
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}) } catch { reject(new Error('请求体不是合法 JSON')) }
    })
    req.on('error', reject)
  })
}

function sendJson(res, status, obj) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(obj))
}

// 保留中文与字母数字，其余转连字符
function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || `post-${Date.now()}`
}

function uniqueSlug(base) {
  let slug = base
  let i = 2
  while (existsSync(join(contentDir, `${slug}.md`))) slug = `${base}-${i++}`
  return slug
}

function extractTitle(md) {
  const m = md.match(/^#\s+(.+)$/m)
  return m ? m[1].trim() : ''
}

/* ---------- 通用链接导入（Jina Reader） ---------- */

async function importFromUrl(url, apiKey) {
  const headers = { Accept: 'text/markdown' }
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`
  const res = await fetch(`https://r.jina.ai/${url}`, { headers })
  if (!res.ok) throw new Error(`网页抓取失败（HTTP ${res.status}），可稍后重试`)
  const text = await res.text()
  // Jina 返回格式：Title / URL Source / Date / Markdown Content: ...
  const marker = 'Markdown Content:'
  const idx = text.indexOf(marker)
  const content = (idx >= 0 ? text.slice(idx + marker.length) : text).trim()
  const title = extractTitle(content)
  return { title, content }
}

/* ---------- Notion 导入 ---------- */

async function importFromNotion(pageId, token, imagesDir) {
  const { importNotionPage } = await import('./scripts/notion-import.js')
  return importNotionPage(pageId, token, imagesDir)
}

/* ---------- 保存文章 ---------- */

function savePost({ title, content, tag, date, slug }) {
  const isNew = !slug
  const base = isNew ? slugify(title) : String(slug).replace(/\.md$/, '')
  const finalSlug = isNew ? uniqueSlug(base) : base
  const safe = (s) => String(s || '').replace(/"/g, '\\"')
  const fm =
`---
title: "${safe(title)}"
date: "${date || new Date().toISOString().slice(0, 7)}"
tag: "${safe(tag || '随笔')}"
---

`
  writeFileSync(join(contentDir, `${finalSlug}.md`), fm + String(content).trim() + '\n', 'utf8')
  return { slug: finalSlug, isNew }
}

/* ---------- 构建：复制图片 + 生成 RSS ---------- */

function escapeXml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function parseFrontmatterNode(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { meta: {}, content: raw }
  const meta = {}
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/)
    if (kv) meta[kv[1]] = kv[2].replace(/^['"]|['"]$/g, '').trim()
  }
  return { meta, content: m[2].trim() }
}

function toRfc822(date) {
  const d = date ? new Date(date.replace(/\./g, '-') + '-01T00:00:00') : new Date()
  return isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString()
}

function buildFeed(siteUrl) {
  const base = siteUrl.endsWith('/') ? siteUrl : siteUrl + '/'
  const files = readdirSync(contentDir).filter((f) => f.endsWith('.md'))
  const items = files
    .map((f) => {
      const raw = readFileSync(join(contentDir, f), 'utf8')
      const { meta, content } = parseFrontmatterNode(raw)
      return { slug: f.replace(/\.md$/, ''), meta, content }
    })
    .sort((a, b) => (b.meta.date || '').localeCompare(a.meta.date || ''))
    .map((p) => {
      const plain = p.content
        .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
        .replace(/[#>*`~\-|]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
      const link = `${base}#/post/${p.slug}`
      return [
        '<item>',
        `  <title>${escapeXml(p.meta.title || p.slug)}</title>`,
        `  <link>${link}</link>`,
        `  <guid>${link}</guid>`,
        `  <pubDate>${toRfc822(p.meta.date)}</pubDate>`,
        `  <description>${escapeXml(p.meta.excerpt || plain.slice(0, 300))}</description>`,
        '</item>',
      ].join('\n')
    })
    .join('\n')

  const feed = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    '    <title>创造试验室 | Creative Laboratory</title>',
    `    <link>${base}</link>`,
    '    <description>对文化、技术与设计的持续观察与思考</description>',
    `    <atom:link href="${base}feed.xml" rel="self" type="application/rss+xml"/>`,
    items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n')

  writeFileSync(join(distDir, 'feed.xml'), feed, 'utf8')
}

function buildSitePlugin() {
  // 以实际构建输出目录为准（支持 vite build --outDir xxx）
  let outDir = 'dist'
  return {
    name: 'personal-site-build',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir || 'dist'
    },
    closeBundle() {
      const distDir = join(__dirname, outDir)
      // 1. 复制文章图片到 dist/images（md 中统一引用 /images/xxx）
      if (existsSync(imagesDir)) {
        mkdirSync(join(distDir, 'images'), { recursive: true })
        for (const f of readdirSync(imagesDir)) {
          const src = join(imagesDir, f)
          if (statSync(src).isFile()) copyFileSync(src, join(distDir, 'images', f))
        }
      }
      // 2. 生成 RSS feed.xml
      const siteUrl = process.env.SITE_URL || 'https://example.com'
      buildFeed(siteUrl)
      console.log('[build] feed.xml 已生成，图片已复制到 dist/images')
    },
  }
}

/* ---------- dev server 中间件插件 ---------- */

function devApiPlugin(env) {
  const notionToken = env.NOTION_TOKEN || process.env.NOTION_TOKEN
  const jinaKey = env.JINA_API_KEY || process.env.JINA_API_KEY

  return {
    name: 'personal-site-dev-api',
    apply: 'serve',
    configureServer(server) {
      // dev 下把 /images/* 映射到 src/content/images/，与生产构建后的路径保持一致
      server.middlewares.use('/images/', (req, res, next) => {
        const rel = req.url.replace(/^\//, '')
        if (!rel || rel.includes('..')) {
          res.statusCode = 404
          res.end('Not Found')
          return
        }
        const file = join(imagesDir, rel)
        if (!existsSync(file) || !statSync(file).isFile()) {
          res.statusCode = 404
          res.end('Not Found')
          return
        }
        const ext = extname(file).slice(1).toLowerCase()
        res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream')
        res.setHeader('Cache-Control', 'no-cache')
        res.end(readFileSync(file))
      })

      // 导入 / 保存 API
      server.middlewares.use(async (req, res, next) => {
        const urlPath = req.url.split('?')[0]

        if (urlPath === '/api/import/url' && req.method === 'POST') {
          let body
          try { body = await readJsonBody(req) } catch (e) { return sendJson(res, 400, { error: e.message }) }
          const target = (body.url || '').trim()
          if (!/^https?:\/\//i.test(target)) return sendJson(res, 400, { error: '请输入以 http(s):// 开头的链接' })
          try {
            const { title, content } = await importFromUrl(target, jinaKey)
            return sendJson(res, 200, { title, content })
          } catch (e) {
            return sendJson(res, 500, { error: e.message || '链接导入失败' })
          }
        }

        if (urlPath === '/api/import/notion' && req.method === 'POST') {
          if (!notionToken) return sendJson(res, 400, { error: '未配置 NOTION_TOKEN，请在 .env.local 中设置（见 README）' })
          let body
          try { body = await readJsonBody(req) } catch (e) { return sendJson(res, 400, { error: e.message }) }
          const pageId = String(body.pageId || '').replace(/[^0-9a-f]/gi, '')
          if (pageId.length !== 32) return sendJson(res, 400, { error: '无法从链接中识别 Notion 页面 ID' })
          try {
            const { title, content } = await importFromNotion(pageId, notionToken, imagesDir)
            return sendJson(res, 200, { title, content })
          } catch (e) {
            return sendJson(res, 500, { error: `Notion 导入失败：${e.message}` })
          }
        }

        if (urlPath === '/api/import/save' && req.method === 'POST') {
          let body
          try { body = await readJsonBody(req) } catch (e) { return sendJson(res, 400, { error: e.message }) }
          const { title, content, tag, date, slug } = body
          if (!title || !content) return sendJson(res, 400, { error: '标题和正文不能为空' })
          try {
            const { slug: finalSlug, isNew } = savePost({ title, content, tag, date, slug })
            return sendJson(res, 200, { ok: true, slug: finalSlug, isNew })
          } catch (e) {
            return sendJson(res, 500, { error: `保存失败：${e.message}` })
          }
        }

        if (urlPath === '/api/import/delete' && req.method === 'POST') {
          let body
          try { body = await readJsonBody(req) } catch (e) { return sendJson(res, 400, { error: e.message }) }
          const slug = String(body.slug || '').trim()
          if (!slug) return sendJson(res, 400, { error: '缺少 slug' })
          const file = join(contentDir, `${slug}.md`)
          if (!existsSync(file)) return sendJson(res, 404, { error: '文章不存在' })
          try {
            unlinkSync(file)
            return sendJson(res, 200, { ok: true, slug })
          } catch (e) {
            return sendJson(res, 500, { error: `删除失败：${e.message}` })
          }
        }

        if (urlPath === '/api/works/delete' && req.method === 'POST') {
          let body
          try { body = await readJsonBody(req) } catch (e) { return sendJson(res, 400, { error: e.message }) }
          const id = String(body.id || '').trim()
          if (!id) return sendJson(res, 400, { error: '缺少作品 ID' })
          const worksDir = join(__dirname, 'public', 'works')
          const worksJson = join(worksDir, 'works.json')
          if (!existsSync(worksJson)) return sendJson(res, 404, { error: '作品集尚未导入' })
          try {
            const works = JSON.parse(readFileSync(worksJson, 'utf8'))
            const target = works.find((w) => w.id === id)
            const next = works.filter((w) => w.id !== id)
            // 如果有本地图片，一并删除
            if (target && target.image && target.image.startsWith('/works/')) {
              const imgFile = join(worksDir, target.image.replace('/works/', ''))
              if (existsSync(imgFile)) unlinkSync(imgFile)
            }
            writeFileSync(worksJson, JSON.stringify(next, null, 2) + '\n', 'utf8')
            return sendJson(res, 200, { ok: true, id, remaining: next.length })
          } catch (e) {
            return sendJson(res, 500, { error: `删除失败：${e.message}` })
          }
        }

        if (urlPath === '/api/works/update' && req.method === 'POST') {
          let body
          try { body = await readJsonBody(req) } catch (e) { return sendJson(res, 400, { error: e.message }) }
          const id = String(body.id || '').trim()
          if (!id) return sendJson(res, 400, { error: '缺少作品 ID' })
          const worksDir = join(__dirname, 'public', 'works')
          const worksJson = join(worksDir, 'works.json')
          if (!existsSync(worksJson)) return sendJson(res, 404, { error: '作品集尚未导入' })
          try {
            const works = JSON.parse(readFileSync(worksJson, 'utf8'))
            const idx = works.findIndex((w) => w.id === id)
            if (idx < 0) return sendJson(res, 404, { error: '作品不存在' })

            const before = works[idx]
            const updated = { ...before }
            if (Array.isArray(body.images)) updated.images = body.images
            if (body.image !== undefined) updated.image = body.image
            works[idx] = updated
            writeFileSync(worksJson, JSON.stringify(works, null, 2) + '\n', 'utf8')

            // 清理不再被任何作品引用的本地图片文件
            const stillUsed = new Set()
            for (const w of works) {
              if (w.image && w.image.startsWith('/works/')) stillUsed.add(w.image.replace('/works/', ''))
              for (const src of w.images || []) {
                if (src && src.startsWith('/works/')) stillUsed.add(src.replace('/works/', ''))
              }
            }
            const candidates = [...(before.images || []), before.image].filter(Boolean)
            for (const src of candidates) {
              if (!src.startsWith('/works/')) continue
              const rel = src.replace('/works/', '')
              if (stillUsed.has(rel)) continue
              const file = join(worksDir, rel)
              if (existsSync(file) && statSync(file).isFile()) {
                try { unlinkSync(file) } catch { /* 文件被占用时忽略 */ }
              }
            }

            return sendJson(res, 200, { ok: true, work: updated })
          } catch (e) {
            return sendJson(res, 500, { error: `保存失败：${e.message}` })
          }
        }

        if (urlPath === '/api/import/works' && req.method === 'POST') {
          if (!notionToken) return sendJson(res, 400, { error: '未配置 NOTION_TOKEN' })
          let body
          try { body = await readJsonBody(req) } catch (e) { return sendJson(res, 400, { error: e.message }) }
          const databaseId = String(body.databaseId || '').replace(/[^0-9a-f]/gi, '')
          if (databaseId.length !== 32) return sendJson(res, 400, { error: '无法从链接中识别 Notion Database ID' })
          try {
            console.log('[API] 开始导入作品集，databaseId:', databaseId)
            const { importWorksFromNotion } = await import('./scripts/notion-import.js')
            const worksDir = join(__dirname, 'public', 'works')
            const works = await importWorksFromNotion(databaseId, notionToken, worksDir, { includeBodyImages: false })
            console.log('[API] 导入完成，作品数:', works.length)
            writeFileSync(join(worksDir, 'works.json'), JSON.stringify(works, null, 2) + '\n', 'utf8')
            return sendJson(res, 200, { ok: true, count: works.length })
          } catch (e) {
            console.error('[API] 导入失败:', e)
            return sendJson(res, 500, { error: `作品集导入失败：${e.message}` })
          }
        }

        next()
      })
    },
  }
}

/* ---------- Vite 配置 ---------- */

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), buildSitePlugin(), devApiPlugin(env)],
    build: {
      // 服务器上可直接把产物输出到 nginx 网站目录：
      // BUILD_OUT_DIR=/var/www/xxx npm run build
      outDir: process.env.BUILD_OUT_DIR || 'dist',
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: true,
      open: true,
    },
  }
})
