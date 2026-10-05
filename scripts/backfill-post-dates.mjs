// 一次性脚本：为已有文章补上精确的「上传时间」
// 1) date 只有年月（如 2026-08）时，补全为 年-月-日
// 2) 新增 posted 字段（YYYY-MM-DD HH:mm:ss），作为列表排序依据
// 时间来源：该文件在 git 中首次被提交的时刻（即上传时刻），取不到则用文件修改时间
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const contentDir = join(__dirname, '..', 'src', 'content')

function pad(n) { return String(n).padStart(2, '0') }

function fmt(ts) {
  const d = new Date(ts)
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function fmtFull(ts) {
  const d = new Date(ts)
  return `${fmt(ts)} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

// 文件首次进入 git 的时间
function gitFirstCommitTime(file) {
  try {
    const out = execSync(`git log --diff-filter=A --format=%at -- ${JSON.stringify(file)}`, {
      cwd: join(__dirname, '..'),
      encoding: 'utf8',
      env: { ...process.env, GIT_DIR: undefined, GIT_WORK_TREE: undefined },
    }).trim()
    const lines = out.split(/\r?\n/).map((s) => s.trim()).filter(Boolean)
    const last = lines[lines.length - 1]
    const sec = Number(last)
    return Number.isFinite(sec) && sec > 0 ? sec * 1000 : null
  } catch {
    return null
  }
}

function fileMTime(file) {
  try {
    const st = statSync(file)
    return Math.max(st.mtimeMs || 0, st.birthtimeMs || 0) || st.mtimeMs
  } catch {
    return null
  }
}

let changed = 0
for (const f of readdirSync(contentDir)) {
  if (!f.endsWith('.md')) continue
  const file = join(contentDir, f)
  const raw = readFileSync(file, 'utf8')
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) {
    console.log(`- 跳过（无 frontmatter）：${f}`)
    continue
  }

  const lines = m[1].split(/\r?\n/)
  const meta = {}
  for (const line of lines) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/)
    if (kv) meta[kv[1]] = kv[2].replace(/^['"]|['"]$/g, '').trim()
  }

  const ts = gitFirstCommitTime(file) || fileMTime(file)
  if (!ts) {
    console.log(`- 跳过（取不到时间）：${f}`)
    continue
  }

  const fullDate = fmt(ts)
  const posted = fmtFull(ts)
  // 已有精确到日且已有 posted 的文件不动
  if (/^\d{4}-\d{2}-\d{2}$/.test(meta.date || '') && meta.posted) continue

  const nextLines = []
  let hasPosted = false
  for (const line of lines) {
    if (/^date:/.test(line)) {
      nextLines.push(`date: "${/^\d{4}-\d{2}-\d{2}$/.test(meta.date || '') ? meta.date : fullDate}"`)
      continue
    }
    if (/^posted:/.test(line)) {
      hasPosted = true
      nextLines.push(`posted: "${posted}"`)
      continue
    }
    nextLines.push(line)
  }
  if (!hasPosted) nextLines.push(`posted: "${posted}"`)

  writeFileSync(file, `---\n${nextLines.join('\n')}\n---\n\n${m[2].trim()}\n`, 'utf8')
  changed += 1
  console.log(`✓ ${f} → date=${/^\d{4}-\d{2}-\d{2}$/.test(meta.date || '') ? meta.date : fullDate} posted=${posted}`)
}

console.log(`\n完成，共更新 ${changed} 篇`)
