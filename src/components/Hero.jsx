const stats = [
  { value: '6+', label: '年经验' },
  { value: '12+', label: '上线产品' },
  { value: '3K+', label: '用户' },
]

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-inner">
        {/* 左侧：身份标签 + 主标题 */}
        <div className="hero-main">
          <p className="hero-label">产品设计师 · 独立开发者</p>
          <h1 className="hero-title">
            <span>做让人</span>
            <span className="hero-title-accent">真正喜欢</span>
            <span>用的东西</span>
          </h1>
        </div>

        {/* 右侧：自我介绍 + 数据 */}
        <div className="hero-side">
          <p className="hero-lede">
            我是创造试验室的主理人，一名跨领域的设计师与开发者。过去六年里，
            我专注于打造简洁而有深度的数字产品——从概念到代码，从界面到体验。
          </p>
          <p className="hero-lede">
            我相信好的产品是克制的：它只做一件事，但把这件事做到极致。
            我的工作横跨设计工具、开发者基础设施与内容创作领域。
          </p>

          <div className="hero-stats">
            {stats.map((item) => (
              <div className="hero-stat" key={item.label}>
                <div className="hero-stat-value">{item.value}</div>
                <div className="hero-stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部：滚动提示 */}
      <div className="hero-foot">
        <span>向下滚动探索</span>
        <span className="hero-foot-arrow">↓</span>
      </div>
    </section>
  )
}
