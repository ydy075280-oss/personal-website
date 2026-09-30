import { useState, useEffect, useRef } from 'react'
import { getAllPosts } from '../lib/posts'

// 数据来自 src/content/*.md（import.meta.glob 扫描），保存即发布
// 首页只展示最新的 6 篇，其余通过「更多」进入洞察列表页查看
const HOME_POST_LIMIT = 6
const insights = getAllPosts().slice(0, HOME_POST_LIMIT)

export default function Insights() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState('down')
  const [visible, setVisible] = useState(false)
  const articlesRef = useRef(null)
  const sectionRef = useRef(null)
  const active = insights[activeIndex]

  // 标题在区块进入视口时显示；每篇文章各自滚入视口时才弹出
  // （逐条触发，这样往下滚动时能一眼看出哪些是刚出现的）
  useEffect(() => {
    const section = sectionRef.current

    if (!section || typeof IntersectionObserver === 'undefined') {
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
      { threshold: 0.1 }
    )
    blockIo.observe(section)

    const itemIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            itemIo.unobserve(entry.target)
          }
        })
      },
      // 底部内收一点，让条目再往上滚一些才出现，动效更容易被看到
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    section.querySelectorAll('.toc-item').forEach((el) => itemIo.observe(el))

    return () => {
      blockIo.disconnect()
      itemIo.disconnect()
    }
  }, [])

  useEffect(() => {
    const el = articlesRef.current
    if (!el) return

    let lastWheelTime = 0
    const onWheel = (e) => {
      if (window.innerWidth <= 900) return
      const now = Date.now()
      if (now - lastWheelTime < 180) return
      lastWheelTime = now

      const dir = e.deltaY > 0 ? 1 : -1
      const atStart = activeIndex === 0
      const atEnd = activeIndex === insights.length - 1

      if ((dir === -1 && atStart) || (dir === 1 && atEnd)) return

      e.preventDefault()
      const next = activeIndex + dir
      if (next >= 0 && next < insights.length) {
        setDirection(dir > 0 ? 'down' : 'up')
        setActiveIndex(next)
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [activeIndex])

  const handleTocClick = (idx) => {
    if (idx === activeIndex) return
    setDirection(idx > activeIndex ? 'down' : 'up')
    setActiveIndex(idx)
  }

  const openPost = (slug) => {
    window.location.hash = `#/post/${encodeURIComponent(slug)}`
  }

  return (
    <div
      className={`home-insights ${visible ? 'is-visible' : ''}`}
      id="home-insights"
      ref={sectionRef}
    >
      <div className="section-header">
        <div className="section-header-row">
          <div>
            <h2>洞察画廊</h2>
            <p>对文化、技术与设计的持续观察与思考。点击左侧目录，或在右侧区域滚动鼠标切换，点击文章可进入全文阅读。</p>
          </div>
          <a className="section-more" href="#/insights">更多 →</a>
        </div>
      </div>

      <div className="works-reader">
        {/* 左侧目录 */}
        <div className="works-toc">
          {insights.map((item, idx) => (
            <div
              key={item.slug}
              className={`toc-item ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => handleTocClick(idx)}
            >
              <div className="toc-title">{item.title}</div>
              <div className="toc-meta">
                <span>{item.tag}</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 右侧文章 */}
        <div className="works-articles" ref={articlesRef}>
          <article
            className={`work-article slide-${direction}`}
            key={active.slug}
          >
            <div className="article-header">
              <h3 className="article-title">{active.title}</h3>
              <div className="article-meta">
                <span>{active.tag}</span>
                <span>·</span>
                <span>{active.date}</span>
              </div>
            </div>
            <div className="article-body">
              <p>{active.excerpt}</p>
            </div>
            <div className="article-tags">
              <span className="article-tag">{active.tag}</span>
              <button
                className="article-read-more"
                onClick={() => openPost(active.slug)}
              >
                阅读全文 →
              </button>
            </div>

            {/* 滚动提示 */}
            <div className="scroll-hint">
              {activeIndex < insights.length - 1 ? (
                <span>↓ 滚动查看下一篇：{insights[activeIndex + 1].title}</span>
              ) : (
                <span>↑ 已是最后一篇，向上滚动返回</span>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
