const systems = [
  { number: '01', title: '文化观察框架', desc: '用人类学的视角观察日常现象，从微观行为中捕捉宏观趋势。', points: ['田野笔记', '符号解码', '趋势映射'] },
  { number: '02', title: '产品创造流程', desc: '从问题发现到产品原型的最小闭环，强调快速验证与持续迭代。', points: ['假设形成', 'MVP 构建', '真实场景测试'] },
  { number: '03', title: '生活方式设计', desc: '将设计思维应用于个人生活，主动设计而非被动接受默认选项。', points: ['价值澄清', '节奏实验', '习惯系统'] },
  { number: '04', title: '跨学科迁移', desc: '在不同领域之间建立连接，将一个地方的方法迁移到另一个地方。', points: ['概念类比', '模型借用', '边界突破'] },
  { number: '05', title: '知识管理系统', desc: '构建可生长的知识网络，让阅读、思考与创作形成正反馈。', points: ['闪念收集', '主题研究', '观点输出'] },
]

export default function Systems() {
  return (
    <div id="system" className="system-page">
      <div className="section-header">
        <h2>研究系统</h2>
      </div>
      <div className="system-intro">
        <p>
          这里是我在长期实践中沉淀出的方法论框架，用于指导从发现问题到创造解决方案的全过程。
        </p>
      </div>
      <div className="system-container">
        {systems.map((system, idx) => (
          <div className="method-card" key={idx}>
            <span className="method-number">{system.number}</span>
            <h3 className="method-title">{system.title}</h3>
            <p className="method-desc">{system.desc}</p>
            <div className="method-points">
              {system.points.map(point => (
                <span className="method-point" key={point}>{point}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
