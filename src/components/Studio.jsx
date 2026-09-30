import { useState, useEffect, useRef } from 'react'
import { renderMarkdown, getAllPosts } from '../lib/posts'
import { fetchWorks, markWorksUpdated, getWorkCover } from '../lib/works'

function isNotionUrl(url) {
  try {
    const u = new URL(url)
    return /(^|\.)notion\.so$|(^|\.)notion\.site$|(^|\.)notion\.new$|(^|\.)notion\.com$/.test(u.hostname)
  } catch {
    return false
  }
}

function extractNotionPageId(url) {
  // 支持：
  // - https://xxx.notion.site/Title-abc123def456
  // - https://www.notion.so/Title-abc123def456?pvs=4
  // - https://app.notion.com/p/abc123def456?v=...
  const m = url.match(/[0-9a-f]{32}/i)
  return m ? m[0] : null
}

export default function Studio({ onOpenPost }) {
  const [url, setUrl] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [mode, setMode] = useState(null) // 'notion' | 'url'
  const [draft, setDraft] = useState(null) // { title, tag, date, content, slug? }
  const [saving, setSaving] = useState(false)
  const [savedSlug, setSavedSlug] = useState(null)
  const [posts, setPosts] = useState(getAllPosts())
  const [editingSlug, setEditingSlug] = useState(null)

  // 文章图片上传
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [dragFile, setDragFile] = useState(false)
  const textareaRef = useRef(null)
  const fileInputRef = useRef(null)
  const titleRef = useRef(null)

  // 一键推送到 GitHub
  const [pushMsg, setPushMsg] = useState('')
  const [pushing, setPushing] = useState(false)
  const [pushOutput, setPushOutput] = useState('')
  const [pushError, setPushError] = useState('')

  // 作品集导入
  const [worksUrl, setWorksUrl] = useState('')
  const [worksBusy, setWorksBusy] = useState(false)
  const [worksError, setWorksError] = useState('')
  const [worksMsg, setWorksMsg] = useState('')

  // 作品集管理
  const [works, setWorks] = useState([])
  const [worksLoading, setWorksLoading] = useState(false)

  // 作品图片管理（拖拽排序 / 删除 / 设封面）
  const [activeWorkId, setActiveWorkId] = useState(null)
  const [savingWork, setSavingWork] = useState(false)
  const [dragOverIndex, setDragOverIndex] = useState(null)
  const dragIndexRef = useRef(null)

  const activeWork = works.find((w) => w.id === activeWorkId) || null

  const refreshPosts = () => setPosts(getAllPosts())

  // 读取作品列表；没有封面的作品，自动把图库第一张设为首页图（一次性补齐）
  const refreshWorks = async () => {
    try {
      let list = await fetchWorks()
      const missing = list.filter((w) => !w.image && w.images?.length)

      for (const w of missing) {
        try {
          const res = await fetch('/api/works/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: w.id, image: w.images[0], images: w.images.slice(1) }),
          })
          const data = await res.json()
          if (res.ok && data.work) {
            list = list.map((x) => (x.id === data.work.id ? data.work : x))
          }
        } catch {
          // 单个作品失败不影响其他
        }
      }

      if (missing.length > 0) {
        setWorksMsg(`已自动把 ${missing.length} 个作品的图库第一张设为首页图`)
        markWorksUpdated()
      }
      setWorks(list)
    } catch {
      setWorks([])
    }
  }

  const handleDeleteWork = async (w) => {
    if (!window.confirm(`确定删除作品「${w.title}」吗？`)) return
    try {
      const res = await fetch('/api/works/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: w.id }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '删除失败')
      setWorks((prev) => prev.filter((x) => x.id !== w.id))
      markWorksUpdated()
    } catch (err) {
      setWorksError(err.message || String(err))
    }
  }

  /* ---------- 作品图片管理：拖拽排序 / 删除 / 设封面 ---------- */

  const saveWork = async (patch) => {
    setSavingWork(true)
    setWorksError('')
    try {
      const res = await fetch('/api/works/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patch),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '保存失败')
      setWorks((prev) => prev.map((w) => (w.id === data.work.id ? data.work : w)))
      markWorksUpdated()
    } catch (err) {
      setWorksError(err.message || String(err))
    } finally {
      setSavingWork(false)
    }
  }

  const handleRemoveImage = (idx) => {
    const w = activeWork
    if (!w) return
    const removed = w.images?.[idx]
    if (!removed) return
    if (!window.confirm('确定删除这张图片？图片文件会一并删除，不可恢复。')) return
    const images = (w.images || []).filter((_, i) => i !== idx)
    // 删掉的正好是封面时，顺位用剩下第一张补上
    const image = w.image === removed ? images[0] || '' : w.image
    saveWork({ id: w.id, image, images })
  }

  const handleRemoveCover = () => {
    const w = activeWork
    if (!w || !w.image) return
    // 封面被删后，由紧接着的下一张图顶上来接替，其余依次前移
    const rest = [...(w.images || [])]
    const nextCover = rest.shift() || ''
    const tip = nextCover
      ? '确定删除封面图？删除后，后面的第一张会自动顶上来成为新封面。'
      : '确定删除封面图？图片文件会一并删除，不可恢复。'
    if (!window.confirm(tip)) return
    saveWork({ id: w.id, image: nextCover, images: rest })
  }

  const handleSetCover = (src) => {
    const w = activeWork
    if (!w) return
    saveWork({ id: w.id, image: src })
  }

  const handleDropImage = (toIdx) => {
    const fromIdx = dragIndexRef.current
    dragIndexRef.current = null
    setDragOverIndex(null)
    const w = activeWork
    if (!w || fromIdx == null || fromIdx === toIdx) return
    const images = [...(w.images || [])]
    const [moved] = images.splice(fromIdx, 1)
    images.splice(toIdx, 0, moved)
    saveWork({ id: w.id, images })
  }

  const handleImport = async () => {
    const target = url.trim()
    if (!target) return
    setError('')
    setBusy(true)
    setSavedSlug(null)
    setDraft(null)
    setEditingSlug(null)

    try {
      if (isNotionUrl(target)) {
        const pageId = extractNotionPageId(target)
        if (!pageId) throw new Error('无法从链接中识别 Notion 页面 ID，请复制完整的页面链接')
        const res = await fetch('/api/import/notion', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: target, pageId }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || 'Notion 导入失败')
        setMode('notion')
        setDraft({
          title: data.title || '未命名文章',
          tag: '',
          date: new Date().toISOString().slice(0, 7),
          content: data.content || '',
        })
      } else {
        const res = await fetch('/api/import/url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: target }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || '链接导入失败')
        setMode('url')
        setDraft({
          title: data.title || new URL(target).hostname,
          tag: '',
          date: new Date().toISOString().slice(0, 7),
          content: data.content || '',
        })
      }
    } catch (err) {
      setError(err.message || String(err))
    } finally {
      setBusy(false)
    }
  }

  /* ---------- 文章图片上传 ---------- */

  // 把 Markdown 片段插入到正文光标处
  const insertAtCursor = (text) => {
    const ta = textareaRef.current
    const content = draft?.content ?? ''
    if (!ta) {
      setDraft((d) => ({ ...d, content: (d?.content ?? '') + text }))
      return
    }
    const start = ta.selectionStart ?? content.length
    const end = ta.selectionEnd ?? start
    const next = content.slice(0, start) + text + content.slice(end)
    setDraft((d) => ({ ...d, content: next }))
    requestAnimationFrame(() => {
      ta.focus()
      const pos = start + text.length
      ta.selectionStart = pos
      ta.selectionEnd = pos
    })
  }

  // 上传一张或多张图片，成功后一次性插入正文
  const uploadImages = async (files) => {
    const list = (files || []).filter((f) => f && f.type.startsWith('image/'))
    if (list.length === 0) {
      setUploadError('请选择图片文件')
      return
    }

    setUploading(true)
    setUploadError('')
    const urls = []

    try {
      for (const file of list) {
        if (file.size > 8 * 1024 * 1024) {
          throw new Error(`${file.name} 超过 8MB，请先压缩`)
        }
        const dataUrl = await new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result)
          reader.onerror = () => reject(new Error(`读取 ${file.name} 失败`))
          reader.readAsDataURL(file)
        })

        const res = await fetch('/api/upload/image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: file.name, data: dataUrl }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || '上传失败')
        urls.push(data.url)
      }

      if (urls.length > 0) {
        insertAtCursor(`\n${urls.map((u) => `![](${u})`).join('\n\n')}\n`)
      }
    } catch (err) {
      setUploadError(err.message || String(err))
    } finally {
      setUploading(false)
    }
  }

  const handleDropFiles = (e) => {
    e.preventDefault()
    setDragFile(false)
    uploadImages(Array.from(e.dataTransfer?.files || []))
  }

  /* ---------- 一键推送到 GitHub ---------- */

  const handlePush = async () => {
    setPushing(true)
    setPushOutput('')
    setPushError('')
    try {
      const res = await fetch('/api/git/push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: pushMsg }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '推送失败')
      setPushOutput(data.skipped ? data.output : `已推送 ✓\n${data.output || ''}`)
      setPushMsg('')
    } catch (err) {
      setPushError(err.message || String(err))
    } finally {
      setPushing(false)
    }
  }

  // 从零开始写一篇新文章
  const handleNewPost = () => {
    setUrl('')
    setError('')
    setMode(null)
    setSavedSlug(null)
    setEditingSlug(null)
    setDraft({
      title: '',
      tag: '',
      date: new Date().toISOString().slice(0, 7),
      content: '',
    })
    requestAnimationFrame(() => titleRef.current?.focus())
  }

  const handleSave = async () => {
    if (!draft) return
    if (!draft.title.trim()) {
      setError('请先填写标题')
      titleRef.current?.focus()
      return
    }
    if (!draft.content.trim()) {
      setError('正文还是空的，写点什么再发布吧')
      textareaRef.current?.focus()
      return
    }
    setSaving(true)
    setError('')
    try {
      const res = await fetch('/api/import/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: draft.title.trim(),
          tag: draft.tag.trim(),
          date: draft.date.trim(),
          content: draft.content,
          slug: editingSlug || undefined,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '保存失败')
      setSavedSlug(data.slug)
      // 刷新页面，让构建期的 import.meta.glob 重新扫描到新文件，并直接进入文章阅读页
      window.location.hash = `#/post/${encodeURIComponent(data.slug)}`
      window.location.reload()
    } catch (err) {
      setError(err.message || String(err))
    } finally {
      setSaving(false)
    }
  }

  const handleEdit = (p) => {
    setUrl('')
    setError('')
    setSavedSlug(null)
    setDraft({
      title: p.title,
      tag: p.tag,
      date: p.date,
      content: p.content,
    })
    setEditingSlug(p.slug)
  }

  const handleDelete = async (p) => {
    if (!window.confirm(`确定删除「${p.title}」吗？此操作不可恢复。`)) return
    setError('')
    try {
      const res = await fetch('/api/import/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: p.slug }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '删除失败')
      // 刷新页面让 import.meta.glob 重新扫描
      window.location.reload()
    } catch (err) {
      setError(err.message || String(err))
    }
  }

  const handleImportWorks = async () => {
    const target = worksUrl.trim()
    if (!target) return
    setWorksError('')
    setWorksMsg('')
    setWorksBusy(true)
    try {
      const m = target.match(/[0-9a-f]{32}/i)
      const databaseId = m ? m[0] : ''
      if (!databaseId) throw new Error('无法从链接中识别 Notion Database ID')

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 30000) // 30秒超时

      const res = await fetch('/api/import/works', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ databaseId }),
        signal: controller.signal,
      })
      clearTimeout(timeoutId)

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '导入失败')
      setWorksMsg(`已导入 ${data.count} 个作品，首页会同步更新`)
      setWorksUrl('')
      await refreshWorks()
      markWorksUpdated()
    } catch (err) {
      if (err.name === 'AbortError') {
        setWorksError('请求超时，请检查网络或稍后重试')
      } else {
        setWorksError(err.message || String(err))
      }
    } finally {
      setWorksBusy(false)
    }
  }

  useEffect(() => {
    refreshPosts()
    refreshWorks()
  }, [])

  return (
    <div className="studio-page">
      <div className="section-header">
        <h2>写作台</h2>
        <p>粘贴 Notion / 任意网页链接，自动导入并转为 Markdown，预览确认后发布到本站。Obsidian 里写的文章放到 src/content/ 目录即可直接出现。</p>
      </div>

      {/* 一键推送到 GitHub */}
      <div className="studio-push">
        <div className="studio-push-row">
          <input
            className="studio-input"
            type="text"
            placeholder="更新说明（可选，默认按时间生成）"
            value={pushMsg}
            onChange={(e) => setPushMsg(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handlePush()}
            disabled={pushing}
          />
          <button className="studio-btn primary" onClick={handlePush} disabled={pushing}>
            {pushing ? '推送中…' : '推送到 GitHub'}
          </button>
        </div>
        <p className="studio-tip">
          会把本地所有改动提交并推送到 main 分支。若已配置 GitHub Actions，推送后服务器会自动部署上线。
        </p>
        {pushError && <p className="studio-error">{pushError}</p>}
        {pushOutput && <pre className="studio-push-output">{pushOutput}</pre>}
      </div>

      {/* 导入区 */}
      <div className="studio-import">
        <div className="studio-input-row">
          <input
            className="studio-input"
            type="text"
            placeholder="粘贴链接：Notion 页面链接，或任意网页地址（https://…）"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleImport()}
            disabled={busy}
          />
          <button className="studio-btn primary" onClick={handleImport} disabled={busy}>
            {busy ? '导入中…' : '导入并预览'}
          </button>
        </div>
        <p className="studio-tip">
          提示：Notion 链接需在页面右上角 ··· → Connections 中添加你的 Integration 授权，并配置
          NOTION_TOKEN（见 README）。
        </p>
        {error && <p className="studio-error">{error}</p>}

        <div className="studio-actions" style={{ margin: '16px 0 0' }}>
          <button className="studio-btn" onClick={handleNewPost}>
            + 新建空白文章
          </button>
          <span className="studio-tip" style={{ margin: 0 }}>
            想直接写？点这里开一篇新文章，边写边预览，写完点「发布到网站」。
          </span>
        </div>
      </div>

      {/* 编辑区 */}
      {draft && (
        <div className="studio-editor">
          <div className="studio-fields">
            <label>
              标题
              <input
                ref={titleRef}
                className="studio-input"
                value={draft.title}
                placeholder="给这篇文章起个标题"
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              />
            </label>
            <label>
              标签
              <input
                className="studio-input"
                value={draft.tag}
                placeholder="如：技术 / 文化 / 生活方式"
                onChange={(e) => setDraft({ ...draft, tag: e.target.value })}
              />
            </label>
            <label>
              日期
              <input
                className="studio-input"
                value={draft.date}
                placeholder="YYYY.MM"
                onChange={(e) => setDraft({ ...draft, date: e.target.value })}
              />
            </label>
          </div>
          <label>
            Markdown 正文（可直接编辑）
            <div
              className={`studio-dropzone ${dragFile ? 'drag-over' : ''}`}
              onDragOver={(e) => { e.preventDefault(); setDragFile(true) }}
              onDragLeave={(e) => {
                if (e.currentTarget.contains(e.relatedTarget)) return
                setDragFile(false)
              }}
              onDrop={handleDropFiles}
            >
              <textarea
                ref={textareaRef}
                className="studio-textarea"
                rows={14}
                value={draft.content}
                onChange={(e) => setDraft({ ...draft, content: e.target.value })}
              />
              {dragFile && <div className="studio-dropzone-hint">松开即可上传图片</div>}
            </div>
          </label>

          <div className="studio-upload">
            <button
              className="studio-btn small"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
            >
              {uploading ? '上传中…' : '上传图片'}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={(e) => {
                uploadImages(Array.from(e.target.files || []))
                e.target.value = ''
              }}
            />
            <span className="studio-tip" style={{ margin: 0 }}>
              支持 png / jpg / gif / webp / svg，单张 ≤ 8MB；上传后自动插入到光标位置，也可直接把图片拖进正文框
            </span>
          </div>
          {uploadError && <p className="studio-error">{uploadError}</p>}

          <div className="studio-actions">
            <button
              className="studio-btn primary"
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? '保存中…' : editingSlug ? '更新文章' : '发布到网站'}
            </button>
            <button className="studio-btn" onClick={() => { setDraft(null); setEditingSlug(null); setSavedSlug(null) }}>
              取消
            </button>
          </div>

          <div className="studio-preview">
            <h3>预览</h3>
            <div
              className="article-content preview"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(draft.content) }}
            />
          </div>
        </div>
      )}

      {savedSlug && (
        <div className="studio-success">
          <p>已发布 ✦</p>
          <a href={`#/post/${encodeURIComponent(savedSlug)}`}>查看新文章 →</a>
        </div>
      )}

      {/* 作品集导入 */}
      <div className="studio-import" style={{ borderTop: '1px solid var(--dirt-line)', paddingTop: 40 }}>
        <h3 style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dirt-muted)', marginBottom: 20 }}>
          从 Notion 导入作品集
        </h3>
        <div className="studio-input-row">
          <input
            className="studio-input"
            type="text"
            placeholder="粘贴 Notion Database 链接（数据库视图链接）"
            value={worksUrl}
            onChange={(e) => setWorksUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleImportWorks()}
            disabled={worksBusy}
          />
          <button className="studio-btn primary" onClick={handleImportWorks} disabled={worksBusy}>
            {worksBusy ? '导入中…' : '导入作品集'}
          </button>
        </div>
        <p className="studio-tip">
          提示：在 Notion 里建一个数据库，列名为「标题、类型、年份、状态、封面」。复制数据库链接粘贴上方即可导入。
        </p>
        {worksError && <p className="studio-error">{worksError}</p>}
        {worksMsg && <p className="studio-success" style={{ display: 'block', marginTop: 12 }}>{worksMsg}</p>}
      </div>

      {/* 文章管理 */}
      <div className="studio-list">
        <h3>已发布文章（{posts.length}）</h3>
        {posts.length === 0 && <p className="studio-tip">还没有文章。把 Markdown 文件放进 src/content/，或使用上方导入。</p>}
        <ul>
          {posts.map((p) => (
            <li key={p.slug}>
              <div className="studio-list-meta">
                <span className="studio-list-tag">{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <a className="studio-list-title" href={`#/post/${encodeURIComponent(p.slug)}`}>
                {p.title}
              </a>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="studio-btn small" onClick={() => handleEdit(p)}>
                  编辑
                </button>
                <button
                  className="studio-btn small danger"
                  onClick={() => handleDelete(p)}
                >
                  删除
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 作品集管理 */}
      <div className="studio-list" style={{ borderTop: '1px solid var(--dirt-line)', marginTop: 48, paddingTop: 32 }}>
        <h3>作品集管理（{works.length}）</h3>
        {works.length === 0 && <p className="studio-tip">还没有作品。使用上方「从 Notion 导入作品集」功能添加。</p>}
        <ul>
          {works.map((w) => (
            <li key={w.id}>
              <div className="studio-list-meta">
                <span className="studio-list-tag">{w.meta?.[0] || '作品'}</span>
                <span>{w.meta?.[1] || ''}</span>
              </div>
              <a className="studio-list-title" href={w.url || '#'} target={w.url ? '_blank' : undefined} rel={w.url ? 'noreferrer' : undefined}>
                {w.title}
              </a>
              <div style={{ display: 'flex', gap: 8 }}>
                {getWorkCover(w) && (
                  <img
                    src={getWorkCover(w)}
                    alt=""
                    style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 4, border: '1px solid var(--dirt-line)' }}
                  />
                )}
                <button
                  className="studio-btn small"
                  onClick={() => setActiveWorkId(activeWorkId === w.id ? null : w.id)}
                >
                  {activeWorkId === w.id
                    ? '收起'
                    : `管理图片${w.images?.length ? `（${w.images.length}）` : ''}`}
                </button>
                <button
                  className="studio-btn small danger"
                  onClick={() => handleDeleteWork(w)}
                >
                  删除
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* 图片管理：拖拽排序 / 删除 / 设封面 */}
        {activeWork && (
          <div className="studio-work-editor">
            <div className="studio-work-editor-head">
              <h4>{activeWork.title} · 图片管理</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {savingWork && <span className="studio-tip" style={{ margin: 0 }}>保存中…</span>}
                <button className="studio-btn small" onClick={() => setActiveWorkId(null)}>
                  收起
                </button>
              </div>
            </div>
            <p className="studio-tip">
              按住图片拖拽即可调整顺序，右上角 × 删除图片，左下角可将该图设为封面。所有改动自动保存到 works.json。
            </p>

            <div className="studio-img-grid">
              {activeWork.image && (
                <div className="studio-img-item cover">
                  <img src={activeWork.image} alt="封面" />
                  <span className="studio-img-badge">封面</span>
                  <button
                    className="studio-img-remove"
                    onClick={handleRemoveCover}
                    aria-label="删除封面"
                  >
                    ×
                  </button>
                </div>
              )}

              {(activeWork.images || []).map((src, idx) => (
                <div
                  key={`${src}-${idx}`}
                  className={`studio-img-item ${dragOverIndex === idx ? 'drag-over' : ''}`}
                  draggable
                  onDragStart={(e) => {
                    dragIndexRef.current = idx
                    e.dataTransfer.effectAllowed = 'move'
                  }}
                  onDragEnd={() => {
                    dragIndexRef.current = null
                    setDragOverIndex(null)
                  }}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setDragOverIndex(idx)
                  }}
                  onDragLeave={() => setDragOverIndex(null)}
                  onDrop={(e) => {
                    e.preventDefault()
                    handleDropImage(idx)
                  }}
                >
                  <img src={src} alt="" />
                  <span className="studio-img-order">{idx + 1}</span>
                  <button
                    className="studio-img-set-cover"
                    onClick={() => handleSetCover(src)}
                    title="设为封面"
                  >
                    设为封面
                  </button>
                  <button
                    className="studio-img-remove"
                    onClick={() => handleRemoveImage(idx)}
                    aria-label="删除图片"
                  >
                    ×
                  </button>
                </div>
              ))}

              {!activeWork.image && !activeWork.images?.length && (
                <p className="studio-tip" style={{ gridColumn: '1 / -1' }}>
                  该作品还没有图片。
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
