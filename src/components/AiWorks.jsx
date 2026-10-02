import aiWorks from '../data/ai-works.json'

/**
 * AI 作品区：卡片网格
 * 内容来自 src/data/ai-works.json，改那个文件即可增删卡片
 * size 取值：
 *   "large" —— 跨两列两行（左上角主卡）
 *   "wide"  —— 跨两列（用来铺满一行）
 */
export default function AiWorks() {
  return (
    <section id="home-ai" className="ai-works">
      <div className="section-header">
        <div className="section-header-row">
          <div>
            <h2>AI 实验</h2>
            <p>我自己动手做的 AI 小工具：从冒出一个念头，到真正用起来，记录做法和踩过的坑。</p>
          </div>
        </div>
      </div>

      <div className="ai-grid">
        {aiWorks.map((item) => (
          <article
            key={item.id}
            className={`ai-card ${
              item.size === 'large' ? 'ai-card-large' : item.size === 'wide' ? 'ai-card-wide' : ''
            }`}
          >
            {/* 右上角跳转按钮 */}
            {item.link ? (
              <a
                className="ai-card-corner"
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`打开：${item.title}`}
                title="打开作品"
              >
                ↗
              </a>
            ) : (
              <span className="ai-card-corner ai-card-corner-static" aria-hidden="true">
                ↗
              </span>
            )}

            <div className="ai-card-meta">
              <span className="ai-card-index">{item.index}</span>
              <span className="ai-card-sep" aria-hidden="true" />
              <span>{item.year}</span>
            </div>

            <h3 className="ai-card-title">{item.title}</h3>
            <p className="ai-card-desc">{item.desc}</p>

            {/* CTA 固定在左下角：填了 link 就是可点链接，否则只做展示 */}
            {item.link ? (
              <a
                className="ai-card-link"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.linkText || '查看项目'} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="ai-card-link ai-card-link-static">
                {item.linkText || '查看项目'} <span aria-hidden="true">↗</span>
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
