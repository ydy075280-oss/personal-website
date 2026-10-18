export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-inner">
        {/* 左侧：身份标签 + 主标题 */}
        <div className="hero-main">
          <p className="hero-label">工业设计师 · 也做 AI 应用</p>
          <h1 className="hero-title">
            <span>做让人</span>
            <span className="hero-title-accent">真正喜欢</span>
            <span>用的东西</span>
          </h1>
        </div>

        {/* 右侧：自我介绍 */}
        <div className="hero-side">
          <p className="hero-lede">
            我是 YANGZHI，一名工业设计师。一边做实体产品的工业设计——
            消费电子、家居与硬件；一边自己把想法做成能用的 AI 工具。
          </p>
          <p className="hero-lede">
            这里收录我的作品与思考：从概念草图到落地产品，
            也记录我对设计、社会与技术的一些观察。
          </p>
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
