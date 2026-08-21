export default function Hero() {
  return (
    <div id="home" className="hero-section">
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
          alt="Creative Space"
        />
        <div className="hero-overlay">
          <div className="hero-label">/// EST. 2024</div>
          <h1 className="hero-title">
            创造试验室
            <br />
            Creative Laboratory
          </h1>
          <p className="hero-slogan">
            我研究文化、技术与生活方式，
            <br />
            并创造未来产品。
          </p>
          <div className="status-badge">
            <span className="status-dot"></span>
            系统运行中 · 正在研究：AI 与伦理
          </div>
        </div>
      </div>
    </div>
  )
}
