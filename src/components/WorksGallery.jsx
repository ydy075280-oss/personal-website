import { useEffect, useState } from 'react'

export default function WorksGallery() {
  const [works, setWorks] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch('/works/works.json')
      .then((r) => r.json())
      .then((data) => setWorks(Array.isArray(data) ? data : []))
      .catch(() => setWorks([]))
  }, [])

  // ESC 关闭弹窗
  useEffect(() => {
    if (!selected) return
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <div className="works-gallery-page">
      <div className="section-header">
        <h2>全部作品</h2>
        <p>从概念到落地的完整设计实践。</p>
      </div>

      {/* 3列网格大图 */}
      <div className="gallery-grid">
        {works.map((work) => (
          <div
            className="gallery-card"
            key={work.id}
            onClick={() => setSelected(work)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setSelected(work) }}
          >
            <div className="gallery-card-img-wrap">
              {work.image ? (
                <img src={work.image} alt={work.title} />
              ) : (
                <div className="gallery-card-placeholder">{work.title[0]}</div>
              )}
            </div>
            <div className="gallery-card-overlay">
              <h3>{work.title}</h3>
              <div className="gallery-card-meta">
                {work.meta?.map((m, i) => (
                  <span key={i}>{m}</span>
                ))}
                {work.status && <span className="gallery-card-status">{work.status}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 详情长栏弹窗 */}
      {selected && (
        <div
          className="work-modal"
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null) }}
        >
          <div className="work-modal-content work-modal-long">
            <button className="work-modal-close" onClick={() => setSelected(null)} aria-label="关闭">
              ×
            </button>

            <div className="work-modal-body">
              <h3>{selected.title}</h3>
              <div className="work-modal-meta">
                {selected.meta?.map((m, i) => (
                  <span key={i}>{m}</span>
                ))}
                {selected.status && <span className="work-modal-status">{selected.status}</span>}
              </div>
              {selected.url && (
                <a
                  className="work-modal-link"
                  href={selected.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  访问项目 →
                </a>
              )}

              {/* 封面大图 */}
              {selected.image && (
                <div className="work-modal-hero">
                  <img src={selected.image} alt={selected.title} />
                </div>
              )}

              {/* 正文图片长栏 */}
              {selected.images && selected.images.length > 0 && (
                <div className="work-modal-long-gallery">
                  {selected.images.map((src, idx) => (
                    <img key={idx} src={src} alt={`${selected.title} ${idx + 1}`} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
