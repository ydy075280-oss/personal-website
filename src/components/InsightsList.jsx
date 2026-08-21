import { useState } from 'react'
import { getAllPosts } from '../lib/posts'

const insights = getAllPosts()

export default function InsightsList() {
  const [hovered, setHovered] = useState(null)

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
        {insights.map((item, idx) => (
          <div
            key={item.slug}
            className="insights-long-item"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => openPost(item.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') openPost(item.slug) }}
          >
            <span
              className="insights-long-title"
              style={{
                transform: hovered === idx ? 'scale(1.06)' : 'scale(1)',
              }}
            >
              {item.title}
            </span>
            <span className="insights-long-sub">
              {item.tag} · {item.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
