import { useEffect, useRef, useState } from 'react'
import { getAllPosts } from '../lib/posts'

const insights = getAllPosts()

export default function InsightsList() {
  const [visible, setVisible] = useState(false)
  const pageRef = useRef(null)

  // 进入页面时，文章列表依次弹出
  useEffect(() => {
    const el = pageRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const openPost = (slug) => {
    window.location.hash = `#/post/${encodeURIComponent(slug)}`
  }

  return (
    <div className={`insights-list-page ${visible ? 'is-visible' : ''}`} ref={pageRef}>
      <div className="section-header">
        <h2>洞察画廊</h2>
        <p>对文化、技术与设计的持续观察与思考。</p>
      </div>

      <div className="insights-long-list">
        {insights.map((item, idx) => (
          <div
            key={item.slug}
            className="insights-long-item"
            style={{ animationDelay: `${idx * 70}ms` }}
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
