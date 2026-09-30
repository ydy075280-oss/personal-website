import { useEffect, useRef, useState } from 'react'
import { getAllPosts } from '../lib/posts'

const insights = getAllPosts()

export default function InsightsList() {
  const [visible, setVisible] = useState(false)
  const pageRef = useRef(null)

  // 标题进入视口时显示；每篇文章各自滚入视口时才弹出
  // （逐条触发，往下滚动时能分辨哪些是刚出现的）
  useEffect(() => {
    const page = pageRef.current

    if (!page || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const blockIo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          blockIo.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    blockIo.observe(page)

    const itemIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            itemIo.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    page.querySelectorAll('.insights-long-item').forEach((el) => itemIo.observe(el))

    return () => {
      blockIo.disconnect()
      itemIo.disconnect()
    }
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
