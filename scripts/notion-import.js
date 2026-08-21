// Notion 页面导入：拉取页面 blocks 并转为 Markdown（Node 环境，仅 dev 使用）
// 仅依赖 @notionhq/client

import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, extname } from 'node:path'

export async function importNotionPage(pageId, token, imagesDir) {
  const { Client } = await import('@notionhq/client')

  const notion = new Client({ auth: token })

  // 1. 读取页面信息，取标题
  const page = await notion.pages.retrieve({ page_id: pageId })
  const title = extractNotionTitle(page)

  // 2. blocks → markdown
  const blocks = await fetchAllBlocks(notion, pageId)

  // 3. 下载 file 类型图片到本地
  const urlMap = new Map()
  if (imagesDir) {
    const imageBlocks = collectImageBlocks(blocks)
    let idx = 0
    for (const block of imageBlocks) {
      const val = block[block.type]
      const src = val.type === 'file' ? val.file?.url || '' : ''
      if (src && !src.startsWith('data:')) {
        const local = await downloadImageAsync(src, imagesDir, ++idx)
        if (local) urlMap.set(block.id, local)
      }
    }
  }

  // 4. 生成 markdown（替换已下载的图片链接）
  const content = await blocksToMarkdown(blocks, 0, { urlMap })

  return { title, content }
}

/* ---------- 辅助 ---------- */

function extractNotionTitle(page) {
  for (const prop of Object.values(page.properties || {})) {
    if (prop.type === 'title') {
      return prop.title.map((t) => t.plain_text).join('').trim()
    }
  }
  return ''
}

async function fetchAllBlocks(notion, blockId) {
  const results = []
  let cursor = undefined
  do {
    const resp = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
      start_cursor: cursor,
    })
    results.push(...resp.results)
    cursor = resp.next_cursor
  } while (cursor)

  for (const block of results) {
    if (block.has_children) {
      block.children = await fetchAllBlocks(notion, block.id)
    }
  }
  return results
}

function collectImageBlocks(blocks) {
  const out = []
  for (const b of blocks || []) {
    if (b.type === 'image') out.push(b)
    if (b.children) out.push(...collectImageBlocks(b.children))
  }
  return out
}

/* ---------- blocks → markdown ---------- */

async function blocksToMarkdown(blocks, depth = 0, state) {
  if (!blocks || blocks.length === 0) return ''
  const parts = []
  for (const b of blocks) {
    parts.push(await blockToMd(b, depth, state))
  }
  return parts.join('\n\n')
}

async function blockToMd(block, depth, state) {
  const type = block.type
  const val = block[type]

  switch (type) {
    case 'paragraph':
      return richTextToMd(val.rich_text)

    case 'heading_1':
      return `# ${richTextToMd(val.rich_text)}`
    case 'heading_2':
      return `## ${richTextToMd(val.rich_text)}`
    case 'heading_3':
      return `### ${richTextToMd(val.rich_text)}`

    case 'bulleted_list_item': {
      const indent = '  '.repeat(depth)
      return `${indent}- ${richTextToMd(val.rich_text)}`
    }
    case 'numbered_list_item': {
      const indent = '  '.repeat(depth)
      return `${indent}1. ${richTextToMd(val.rich_text)}`
    }
    case 'to_do': {
      const checked = val.checked ? '[x]' : '[ ]'
      return `- ${checked} ${richTextToMd(val.rich_text)}`
    }

    case 'quote':
      return `> ${richTextToMd(val.rich_text)}`

    case 'code':
      return `\`\`\`${val.language || ''}\n${plainText(val.rich_text)}\n\`\`\``

    case 'divider':
      return '---'

    case 'image':
      return await imageToMd(block, val, state)

    case 'bookmark':
      return `[${val.url}](${val.url})`
    case 'link_to_page': {
      const url =
        val.type === 'page_id'
          ? `https://www.notion.so/${val.page_id.replace(/-/g, '')}`
          : ''
      return `[Notion 页面](${url})`
    }

    case 'callout':
      return `> 💡 ${richTextToMd(val.rich_text)}`

    case 'toggle':
      return `<details>\n<summary>${richTextToMd(val.rich_text)}</summary>\n\n${await blocksToMarkdown(block.children || [], depth + 1, state)}\n</details>`

    case 'table': {
      const rows = block.children || []
      if (rows.length === 0) return ''
      const header = rowToMd(rows[0])
      const sep = header.split('|').map(() => '---').join('|')
      const body = rows.slice(1).map(rowToMd).join('\n')
      return `${header}\n${sep}\n${body}`
    }

    case 'table_row':
      return ''

    case 'column_list':
      return await blocksToMarkdown(block.children || [], depth, state)
    case 'column':
      return await blocksToMarkdown(block.children || [], depth, state)

    case 'embed':
      return `[嵌入内容](${val.url})`

    case 'equation':
      return `$$${val.expression}$$`

    case 'child_page': {
      const url = `https://www.notion.so/${block.id.replace(/-/g, '')}`
      return `[${val.title}](${url})`
    }

    default:
      if (val && val.rich_text) return richTextToMd(val.rich_text)
      return ''
  }
}

/* ---------- 图片处理 ---------- */

async function imageToMd(block, val, state) {
  const caption = plainText(val.caption)

  let src = ''
  if (val.type === 'external') {
    src = val.external?.url || ''
  } else if (val.type === 'file') {
    src = val.file?.url || ''
  }

  // 过滤 data URI
  if (!src || src.startsWith('data:')) {
    return ''
  }

  // 外部链接直接保留
  if (val.type === 'external') {
    return `![${caption}](${src})`
  }

  // file 类型：检查是否已下载
  if (state && state.urlMap && state.urlMap.has(block.id)) {
    const local = state.urlMap.get(block.id)
    return `![${caption}](/images/${local})`
  }

  // 未下载成功，回退到原链接（但 Notion file URL 1 小时后失效）
  return `![${caption}](${src})`
}

async function downloadImageAsync(url, imagesDir, idx) {
  try {
    if (!existsSync(imagesDir)) {
      mkdirSync(imagesDir, { recursive: true })
    }

    let ext = ''
    try {
      const u = new URL(url)
      ext = extname(u.pathname).toLowerCase()
    } catch { /* ignore */ }
    if (!ext) ext = '.png'

    const filename = `notion-img-${Date.now()}-${idx}${ext}`
    const dest = join(imagesDir, filename)

    const res = await fetch(url)
    if (!res.ok) return null
    const buf = Buffer.from(await res.arrayBuffer())
    writeFileSync(dest, buf)
    return filename
  } catch {
    return null
  }
}

/* ---------- 文本处理 ---------- */

function richTextToMd(richText) {
  if (!richText || richText.length === 0) return ''
  return richText
    .map((t) => {
      let text = t.plain_text || ''
      const a = t.annotations || {}
      if (a.code) text = `\`${text}\``
      if (a.bold) text = `**${text}**`
      if (a.italic) text = `*${text}*`
      if (a.strikethrough) text = `~~${text}~~`
      if (a.underline) text = `<u>${text}</u>`
      if (t.href) text = `[${text}](${t.href})`
      return text
    })
    .join('')
}

function plainText(richText) {
  if (!richText) return ''
  return richText.map((t) => t.plain_text || '').join('')
}

function rowToMd(row) {
  const cells = row.table_row?.cells || []
  const texts = cells.map((cell) => richTextToMd(cell).trim())
  return `| ${texts.join(' | ')} |`
}

/* ---------- 作品集 Database 导入（直接用 REST API，兼容新版 SDK） ---------- */

async function notionApi(path, token, body) {
  const res = await fetch(`https://api.notion.com/v1${path}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Notion API ${res.status}: ${text.slice(0, 200)}`)
  }
  return res.json()
}

export async function importWorksFromNotion(databaseId, token, worksDir, options = {}) {
  const { includeBodyImages = true } = options

  console.log('[Notion] 开始查询数据库:', databaseId)

  // 查询数据库所有条目
  const results = []
  let cursor = undefined
  let page = 0
  do {
    page++
    console.log(`[Notion] 查询第 ${page} 页...`)
    const resp = await notionApi(`/databases/${databaseId}/query`, token, {
      page_size: 100,
      start_cursor: cursor,
    })
    const list = resp.results || []
    console.log(`[Notion] 第 ${page} 页返回 ${list.length} 条`)
    results.push(...list)
    cursor = resp.next_cursor
  } while (cursor)

  console.log(`[Notion] 数据库共 ${results.length} 条记录`)

  // 下载图片并生成配置
  const works = []
  let imgIdx = 0
  for (let i = 0; i < results.length; i++) {
    const page = results[i]
    const p = page.properties || {}

    // 兼容中英文列名
    const title = findPropValue(p, ['Name', '名称', '标题'], 'title') || '未命名'
    console.log(`[Notion] 处理作品 ${i + 1}/${results.length}: ${title}`)

    // Tags / 标签 / 类型（multi_select，取第一个作为类型）
    const tags = findMultiSelect(p, ['Tags', '标签', '类型', 'Tag', 'Category', '分类'])
    const type = tags[0] || ''

    // Created / 年份 / 日期（created_time）
    const created = findCreatedTime(p, ['Created', '创建时间', '年份', '日期', 'Date'])
    const year = created ? created.slice(0, 4) : ''

    // Status / 状态 / 进度
    const status = findPropValue(p, ['Status', '状态', '进度', 'Stage'], 'select') || ''

    // URL / Link / 链接 / 网址
    const url = findPropValue(p, ['URL', 'Link', '链接', '网址', '项目链接'], 'rich_text') || ''

    // 封面图：三级查找（page.cover → 属性列图片 → page.icon）
    let image = ''
    const coverSrc = extractCoverUrl(page.cover)
    if (coverSrc) {
      console.log(`[Notion]   封面来源: page.cover`)
      const local = await downloadImageAsync(coverSrc, worksDir, ++imgIdx)
      image = local ? `/works/${local}` : coverSrc
    }
    if (!image) {
      const propImage = findImageProperty(p, ['封面', '图片', 'Image', 'Cover', '封面图', '主图', '缩略图', 'Thumbnail'])
      if (propImage) {
        console.log(`[Notion]   封面来源: 属性列`)
        const local = await downloadImageAsync(propImage, worksDir, ++imgIdx)
        image = local ? `/works/${local}` : propImage
      }
    }
    if (!image) {
      const iconSrc = extractCoverUrl(page.icon)
      if (iconSrc) {
        console.log(`[Notion]   封面来源: page.icon`)
        const local = await downloadImageAsync(iconSrc, worksDir, ++imgIdx)
        image = local ? `/works/${local}` : iconSrc
      }
    }

    // 抓取正文 blocks 里的图片（可选，默认开启）
    let bodyImages = []
    if (includeBodyImages) {
      try {
        console.log(`[Notion]   开始读取正文 blocks...`)
        const blocks = await fetchPageBlocks(page.id, token)
        const imageBlocks = collectImageBlocksFromRest(blocks)
        console.log(`[Notion]   正文图片数: ${imageBlocks.length}`)
        for (const block of imageBlocks) {
          const val = block[block.type]
          let src = ''
          if (val.type === 'external') src = val.external?.url || ''
          else if (val.type === 'file') src = val.file?.url || ''
          if (!src || src.startsWith('data:')) continue
          const local = await downloadImageAsync(src, worksDir, ++imgIdx)
          bodyImages.push(local ? `/works/${local}` : src)
        }
      } catch (err) {
        console.log(`[Notion]   正文读取失败: ${err.message}`)
      }
    }

    works.push({
      id: `work-${i}`,
      title,
      meta: [type, year].filter(Boolean),
      image,
      status,
      url,
      images: bodyImages,
    })
  }

  console.log(`[Notion] 导入完成，共 ${works.length} 个作品`)
  return works
}

/* ---------- 属性读取（兼容中英文列名） ---------- */

function findProp(props, names) {
  for (const n of names) {
    if (props[n] !== undefined) return props[n]
  }
  return undefined
}

function findPropValue(props, names, type) {
  const prop = findProp(props, names)
  if (!prop) return undefined
  switch (type) {
    case 'title':
      return prop.title?.map((t) => t.plain_text).join('') || undefined
    case 'select':
      return prop.select?.name || undefined
    case 'number':
      return prop.number ?? undefined
    case 'rich_text':
      return prop.rich_text?.map((t) => t.plain_text).join('') || undefined
    default:
      return undefined
  }
}

function findMultiSelect(props, names) {
  const prop = findProp(props, names)
  if (!prop) return []
  if (prop.type === 'multi_select') {
    return prop.multi_select?.map((s) => s.name) || []
  }
  if (prop.type === 'select') {
    const v = prop.select?.name
    return v ? [v] : []
  }
  return []
}

function findCreatedTime(props, names) {
  const prop = findProp(props, names)
  if (!prop) return ''
  if (prop.type === 'created_time') return prop.created_time || ''
  if (prop.type === 'date') return prop.date?.start || ''
  if (prop.type === 'rich_text') return prop.rich_text?.map((t) => t.plain_text).join('') || ''
  return ''
}

function extractCoverUrl(coverOrIcon) {
  if (!coverOrIcon) return ''
  const type = coverOrIcon.type
  let src = ''
  if (type === 'external') src = coverOrIcon.external?.url || ''
  else if (type === 'file') src = coverOrIcon.file?.url || ''
  if (!src || src.startsWith('data:')) return ''
  return src
}

function findImageProperty(props, names) {
  for (const n of names) {
    const prop = props[n]
    if (!prop) continue
    if (prop.type === 'files' && prop.files?.length > 0) {
      const f = prop.files[0]
      if (f.type === 'external') return f.external?.url || ''
      if (f.type === 'file') return f.file?.url || ''
    }
    if (prop.type === 'image') {
      if (prop.image?.type === 'external') return prop.image.external?.url || ''
      if (prop.image?.type === 'file') return prop.image.file?.url || ''
    }
  }
  return ''
}

/* ---------- 正文 blocks 抓取（REST API 版） ---------- */

async function fetchPageBlocks(pageId, token) {
  const results = []
  let cursor = undefined
  do {
    const qs = new URLSearchParams()
    qs.set('page_size', '100')
    if (cursor) qs.set('start_cursor', cursor)
    const resp = await notionApiGet(`/blocks/${pageId}/children?${qs.toString()}`, token)
    const list = resp.results || []
    results.push(...list)
    cursor = resp.next_cursor
  } while (cursor)

  for (const block of results) {
    if (block.has_children) {
      block.children = await fetchPageBlocks(block.id, token)
    }
  }
  return results
}

async function notionApiGet(path, token) {
  const res = await fetch(`https://api.notion.com/v1${path}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': '2022-06-28',
    },
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Notion API ${res.status}: ${text.slice(0, 200)}`)
  }
  return res.json()
}

function collectImageBlocksFromRest(blocks) {
  const out = []
  for (const b of blocks || []) {
    if (b.type === 'image') out.push(b)
    if (b.children) out.push(...collectImageBlocksFromRest(b.children))
  }
  return out
}

function extractProperty(props, name, type) {
  const prop = props[name]
  if (!prop) return undefined
  switch (type) {
    case 'title':
      return prop.title?.map((t) => t.plain_text).join('') || undefined
    case 'select':
      return prop.select?.name || undefined
    case 'number':
      return prop.number ?? undefined
    case 'rich_text':
      return prop.rich_text?.map((t) => t.plain_text).join('') || undefined
    default:
      return undefined
  }
}

// 供外部直接引用，避免 lint 提示未使用
export { extractProperty }
