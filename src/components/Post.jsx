import { getPost, renderMarkdown, getAllPosts } from '../lib/posts'

export default function Post({ slug, onBack }) {
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="post-page">
        <div className="post-empty">
          <p>文章不存在或已被删除。</p>
          <button className="post-back" onClick={onBack}>
            ← 返回洞察画廊
          </button>
        </div>
      </div>
    )
  }

  const html = renderMarkdown(post.content)
  const posts = getAllPosts()
  const idx = posts.findIndex((p) => p.slug === post.slug)
  const prev = idx > 0 ? posts[idx - 1] : null
  const next = idx >= 0 && idx < posts.length - 1 ? posts[idx + 1] : null

  return (
    <div className="post-page">
      <div className="post-toolbar">
        <button className="post-back" onClick={onBack}>
          ← 返回洞察画廊
        </button>
        <span className="post-toolbar-hint">创作于 · {post.date}</span>
      </div>

      <article className="post-article">
        <header className="post-header">
          <div className="post-meta">
            <span className="post-tag">{post.tag}</span>
            <span>{post.date}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
        </header>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      <nav className="post-nav">
        {prev && (
          <a className="post-nav-item" href={`#/post/${encodeURIComponent(prev.slug)}`}>
            <span className="post-nav-label">← 上一篇</span>
            <span className="post-nav-title">{prev.title}</span>
          </a>
        )}
        {next && (
          <a className="post-nav-item next" href={`#/post/${encodeURIComponent(next.slug)}`}>
            <span className="post-nav-label">下一篇 →</span>
            <span className="post-nav-title">{next.title}</span>
          </a>
        )}
      </nav>
    </div>
  )
}
