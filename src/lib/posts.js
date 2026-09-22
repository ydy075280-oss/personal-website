import { marked } from 'marked'

// 用 Vite 的 glob 在构建期扫描 src/content 下所有 .md 文章
const modules = import.meta.glob('/src/content/*.md', { as: 'raw', eager: true })

// 解析 Markdown 文件顶部的 YAML frontmatter（仅支持简单 key: value 行）
export function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { meta: {}, content: raw.trim() }

  const meta = {}
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/)
    if (kv) meta[kv[1]] = kv[2].replace(/^['"]|['"]$/g, '').trim()
  }
  return { meta, content: m[2].trim() }
}

export function getAllPosts() {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const { meta, content } = parseFrontmatter(raw)
      const slug = path.split('/').pop().replace(/\.md$/, '')
      // frontmatter 没有 excerpt 时，从正文提取前 200 字作为摘要
      // 保留段落结构：空行视为分段（保留换行），段内换行合并为空格
      const plain = content
        .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
        .replace(/[#>*`~\-|]/g, '')
        .split(/\n{2,}/)
        .map((para) => para.replace(/\s+/g, ' ').trim())
        .filter(Boolean)
        .join('\n')
        .trim()
      return {
        slug,
        raw,
        content,
        title: meta.title || slug,
        date: meta.date || '',
        tag: meta.tag || '',
        excerpt: meta.excerpt || plain.slice(0, 200),
      }
    })
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
}

export function getPost(slug) {
  return getAllPosts().find((p) => p.slug === slug)
}

// marked 渲染器：把 md 中的相对图片路径（images/xxx.png）统一转换为
// /images/xxx.png，dev 由 Vite 中间件映射到 src/content/images，build 时复制到 dist/images
const renderer = new marked.Renderer()
const originalImage = renderer.image.bind(renderer)
renderer.image = ({ href, title, text }) => {
  let src = href
  if (href && !/^(https?:|data:|\/|#)/i.test(href)) {
    src = `/images/${href.replace(/^\.?\//, '')}`
  }
  return originalImage({ href: src, title, text })
}

marked.setOptions({ renderer, gfm: true, breaks: true })

// 渲染 Markdown 为 HTML（同步）
export function renderMarkdown(md) {
  return marked.parse(md || '')
}
