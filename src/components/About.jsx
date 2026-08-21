import { useState } from 'react'

const philosophy = [
  { title: '文化是土壤', desc: '任何脱离文化语境的产品都是无根之木。理解文化，才能理解真正的需求。' },
  { title: '技术是工具', desc: '技术本身不是目的，而是实现人文关怀与美学追求的媒介。' },
  { title: '生活是实验场', desc: '最好的研究对象是自己真实的日常生活，最好的验证是把想法付诸实践。' },
  { title: '产品是回答', desc: '每个产品都是对某个问题的回答，而我始终在寻找更好的问题。' },
]

const socials = [
  { name: '小红书', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', url: '#' },
  { name: '抖音', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', url: '#' },
  { name: 'Bilibili', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', url: '#' },
  { name: 'Instagram', icon: 'M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.85 3.9 2.31 7.15 2.16 8.42 2.1 8.8 2.09 12 2.09zm0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.63 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.3.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm7.85-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z', url: '#' },
  { name: 'Facebook', icon: 'M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.12 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z', url: '#' },
]

// 替换为你的 Formspree 表单 ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function About() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="about" className="about-page">
      {/* 关于我 */}
      <div className="about-layout">
        <div className="profile-section">
          <div className="profile-pic">
            <img
              src="/profile.png"
              alt="Profile"
            />
          </div>
          <div className="profile-label">主理人</div>
          <div className="profile-name">创造试验室</div>
        </div>

        <div className="bio-text">
          <h2>关于我</h2>
          <p>
            我是一名跨领域研究者与产品创造者，关注文化、技术与生活方式的交叉地带。
            在这里，我尝试用设计、写作与代码来回应一个问题：
            我们如何在快速变化的时代中，创造既有意义又有美感的产品与体验？
          </p>
          <p>
            我的实践横跨研究、设计与开发：观察文化现象，提炼可复用的方法论，
            并将其转化为具体的作品。比起追逐热点，我更愿意做深、做透，
            在实验中寻找属于自己的创造节奏。
          </p>

          <div className="philosophy-grid">
            {philosophy.map((item, idx) => (
              <div className="philosophy-item" key={idx}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="contact-links">
            <a href="mailto:your@email.com" className="contact-link">发送邮件 →</a>
            <a href="#" className="contact-link">查看简历 →</a>
          </div>
        </div>
      </div>

      {/* 联系表单 - 参考 dirtverse.co/contact 风格 */}
      <div className="contact-form-section">
        <div className="contact-form-layout">
          <div className="contact-form-left">
            <div className="contact-form-email">hello@creativelab.co</div>
            <p className="contact-form-desc">
              扎根于珀斯与悉尼。<br/>
              为全世界而建立。
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-label">发起咨询</div>
            <input
              type="text"
              name="name"
              placeholder="全名"
              className="contact-form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="你的电子邮件"
              className="contact-form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="你的信息"
              rows="4"
              className="contact-form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="contact-form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? '提交中...' : '提交'}
            </button>
            {submitStatus === 'success' && (
              <div className="form-status success">消息已发送，我会尽快回复你！</div>
            )}
            {submitStatus === 'error' && (
              <div className="form-status error">发送失败，请稍后重试或直接发邮件。</div>
            )}
          </form>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="about-footer">
        <div className="about-footer-inner">
          <div className="footer-col">
            <div className="footer-col-title">关注</div>
            <div className="footer-links">
              <a href="#" className="footer-link">小红书</a>
              <a href="#" className="footer-link">抖音</a>
              <a href="#" className="footer-link">WeChat</a>
              <a href="#" className="footer-link">Bilibili</a>
              <a href="#" className="footer-link">Instagram</a>
              <a href="#" className="footer-link">X</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">联系方式</div>
            <div className="footer-links">
              <a href="mailto:hello@creativelab.co" className="footer-link">hello@creativelab.co</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">法律</div>
            <div className="footer-links">
              <a href="#" className="footer-link">隐私政策</a>
              <a href="#" className="footer-link">条款与条件</a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">©2026 创造试验室</div>
      </footer>
    </div>
  )
}
