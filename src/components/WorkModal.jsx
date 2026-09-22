import { useEffect } from 'react'
import { createPortal } from 'react-dom'

/**
 * 作品详情弹窗：展示作品的全部内容
 * 封面大图 + 正文长图列表 + meta / 状态 / 访问链接
 * 首页轮播与作品画廊页共用，保证两处看到的内容一致
 */
export default function WorkModal({ work, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // 用 portal 渲染到 body：首页轮播所在的容器有 overflow / transform，
  // 直接嵌在里面会被裁切，导致弹窗看不见
  return createPortal(
    <div
      className="work-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="work-modal-content work-modal-long">
        <button className="work-modal-close" onClick={onClose} aria-label="关闭">
          ×
        </button>

        <div className="work-modal-body">
          <h3>{work.title}</h3>
          <div className="work-modal-meta">
            {work.meta?.map((m, i) => (
              <span key={i}>{m}</span>
            ))}
            {work.status && <span className="work-modal-status">{work.status}</span>}
          </div>

          {work.url && (
            <a
              className="work-modal-link"
              href={work.url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              访问项目 →
            </a>
          )}

          {work.image && (
            <div className="work-modal-hero">
              <img src={work.image} alt={work.title} />
            </div>
          )}

          {work.images && work.images.length > 0 && (
            <div className="work-modal-long-gallery">
              {work.images.map((src, idx) => (
                <img key={idx} src={src} alt={`${work.title} ${idx + 1}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
