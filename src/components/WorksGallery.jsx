import { useEffect, useState } from 'react'
import { fetchWorks, subscribeWorksUpdate, getWorkCover } from '../lib/works'
import WorkModal from './WorkModal'

export default function WorksGallery() {
  const [works, setWorks] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    let alive = true
    const load = async () => {
      try {
        const list = await fetchWorks()
        if (alive) setWorks(list)
      } catch {
        if (alive) setWorks([])
      }
    }
    load()
    return subscribeWorksUpdate(load)
  }, [])

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
              {getWorkCover(work) ? (
                <img src={getWorkCover(work)} alt={work.title} />
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

      {/* 作品完整详情 */}
      {selected && <WorkModal work={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
