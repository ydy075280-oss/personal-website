import { getAllPosts } from '../lib/posts'

const insights = getAllPosts()

export default function InsightsList() {
  const openPost = (slug) => {
    window.location.hash = `#/post/${encodeURIComponent(slug)}`
  }

  return (
    <div className="insights-list-page">
      <div className="section-header">
        <h2>洞察画廊</h2>
        <p>对文化、技术与设计的持续观察与思考。</p>
      </div>

      <div className="insights-long-list">
        {insights.map((item) => (
          <div
            key={item.slug}
            className="insights-long-item"
            onClick={() => openPost(item.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') openPost(item.slug) }}
          >
            <div className="insights-long-main">
              <span className="insights-long-title">{item.title}</span>
              <p className="insights-long-excerpt">{item.excerpt}</p>
            </div>
            <span className="insights-long-sub">
              {item.tag} · {item.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
