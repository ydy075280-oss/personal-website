import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Insights from './components/Insights'
import Works from './components/Works'
import WorksGallery from './components/WorksGallery'
import InsightsList from './components/InsightsList'
import AiWorks from './components/AiWorks'
import About from './components/About'
import Footer from './components/Footer'
import Post from './components/Post'
import Studio from './components/Studio'
import './styles.css'

// 极简 hash 路由：#/post/:slug 文章阅读、#/studio 写作台、#/works 作品画廊、其余为首页单页滚动
function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, '')
  if (h.startsWith('post/')) return { page: 'post', slug: decodeURIComponent(h.slice(5)) }
  if (h === 'studio') return { page: 'studio' }
  if (h === 'works') return { page: 'works' }
  if (h === 'insights') return { page: 'insights' }
  if (h === 'about') return { page: 'about' }
  return { page: 'home' }
}

export default function App() {
  const [activeId, setActiveId] = useState('home')
  const [route, setRoute] = useState(parseHash)
  const pendingScrollRef = useRef(null)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (!rect) return
    window.scrollTo({ top: rect.top + window.pageYOffset - 72, behavior: 'smooth' })
  }

  useEffect(() => {
    const onHash = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // 从 post / studio 页面切回首页后，滚动到之前请求的区块
  useEffect(() => {
    if (route.page === 'home') {
      if (pendingScrollRef.current) {
        const id = pendingScrollRef.current
        pendingScrollRef.current = null
        requestAnimationFrame(() => scrollToSection(id))
      }
      setActiveId((prev) => (prev === 'home-insights' ? prev : 'home'))
    } else {
      setActiveId(route.page)
    }
  }, [route])

  const handleNavigate = (id) => {
    if (id === 'studio') {
      window.location.hash = '#/studio'
      return
    }
    if (route.page !== 'home') {
      // 先回到首页，再滚动到目标区块
      pendingScrollRef.current = id
      window.location.hash = ''
      return
    }
    setActiveId(id)
    scrollToSection(id)
  }

  // 首页滚动时根据位置更新导航高亮（仅首页生效）
  const updateActiveOnScroll = () => {
    const scrollY = window.scrollY
    const insightsEl = document.getElementById('home-insights')
    const worksEl = document.getElementById('home-works')
    const aboutEl = document.getElementById('about')

    if (!insightsEl || !worksEl || !aboutEl) return

    if (scrollY < insightsEl.offsetTop - 100) {
      setActiveId('home')
    } else if (scrollY < worksEl.offsetTop - 100) {
      setActiveId('home-insights')
    } else if (scrollY < aboutEl.offsetTop - 100) {
      setActiveId('works')
    } else {
      setActiveId('about')
    }
  }

  useEffect(() => {
    if (route.page !== 'home') return
    window.addEventListener('scroll', updateActiveOnScroll)
    return () => window.removeEventListener('scroll', updateActiveOnScroll)
  }, [route.page])

  return (
    <div className="site">
      <Navbar activeId={activeId} onNavigate={handleNavigate} />

      {route.page === 'post' ? (
        <Post slug={route.slug} onBack={() => handleNavigate('home-insights')} />
      ) : route.page === 'studio' ? (
        <Studio />
      ) : route.page === 'works' ? (
        <main>
          <WorksGallery />
        </main>
      ) : route.page === 'insights' ? (
        <main>
          <InsightsList />
        </main>
      ) : route.page === 'about' ? (
        <main>
          <About />
        </main>
      ) : (
        <main>
          {/* 首页长页面 */}
          <section id="home">
            <Hero />
            <Marquee />
            <Insights />
            <Works />
            <AiWorks />
          </section>

          <Marquee />
        </main>
      )}

      <Footer />
    </div>
  )
}

/* Dirtverse 风格的无限滚动品牌横幅 */
function Marquee() {
  const items = ['创造试验室', 'Creative Laboratory', '文化 · 技术 · 生活方式', 'It Starts in the Lab']
  // 复制一份实现无缝循环
  const track = [...items, ...items, ...items, ...items]
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {track.map((text, i) => (
          <span key={i}>
            {text}
            <span className="dot"> ● </span>
          </span>
        ))}
      </div>
    </div>
  )
}
