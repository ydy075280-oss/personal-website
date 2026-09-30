import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'home', label: '首页' },
  { id: 'insights', label: '洞察', hash: '#/insights' },
  { id: 'works', label: '作品', hash: '#/works' },
  { id: 'about', label: '关于', hash: '#/about' },
]

const languages = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

// 首页中的深色区块（导航浮在它们上方时自动反色）
const DARK_SECTIONS = ['home', 'home-works']

export default function Navbar({ activeId, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [overDark, setOverDark] = useState(false)
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'zh'
    } catch {
      return 'zh'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  // 滚动位置是否落在深色区块上
  useEffect(() => {
    const update = () => {
      const y = window.scrollY
      const navH = 72
      setScrolled(y > 50)

      const over = DARK_SECTIONS.some((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const top = el.offsetTop - navH
        const bottom = el.offsetTop + el.offsetHeight - navH
        return y >= top && y < bottom
      })
      setOverDark(over)
    }

    update()
    const onRoute = () => window.setTimeout(update, 120)

    window.addEventListener('scroll', update)
    window.addEventListener('resize', update)
    window.addEventListener('hashchange', onRoute)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      window.removeEventListener('hashchange', onRoute)
    }
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNav = (link) => {
    setMenuOpen(false)
    if (link.hash) {
      window.location.hash = link.hash
    } else {
      onNavigate(link.id)
    }
  }

  // 移动端菜单展开时，背景是米白，导航需要保持深色文字
  const dark = overDark && !menuOpen

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 h-[72px] flex items-center justify-between transition-colors duration-300 border-b ${
          dark
            ? 'bg-transparent border-transparent'
            : scrolled
              ? 'bg-[#f2efe9]/90 border-[#ddd7ca] backdrop-blur-md'
              : 'bg-[#f2efe9]/70 border-[#e6e1d7] backdrop-blur-md'
        } ${dark ? 'nav-on-dark' : ''}`}
      >
        <button
          onClick={() => onNavigate('home', 'top')}
          className={`font-medium text-[0.82rem] tracking-[0.28em] uppercase transition-colors duration-300 ${
            dark ? 'text-[#ece8e2] hover:text-[#e2754f]' : 'text-[#1c1a17] hover:text-[#c1502e]'
          }`}
        >
          YANGZHI
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(link =>
            link.hash ? (
              <a
                key={link.id}
                href={link.hash}
                className={`nav-item ${activeId === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`nav-item ${activeId === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            )
          )}
        </div>

        {/* Desktop right：语言切换 */}
        <div
          className={`hidden md:flex items-center rounded-full border overflow-hidden transition-colors duration-300 ${
            dark ? 'border-[#3a3733]' : 'border-[#ddd7ca]'
          }`}
        >
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`h-7 px-3 text-[0.72rem] leading-none transition-colors duration-200 ${
                lang === l.code
                  ? dark
                    ? 'bg-[#ece8e2] text-[#0b0a09]'
                    : 'bg-[#1c1a17] text-[#f2efe9]'
                  : dark
                    ? 'text-[#9c9890] hover:text-[#ece8e2]'
                    : 'text-[#8d877c] hover:text-[#1c1a17]'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <span className={`block w-6 h-[2px] transition-all duration-300 ${dark ? 'bg-[#ece8e2]' : 'bg-[#1c1a17]'} ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] transition-all duration-300 ${dark ? 'bg-[#ece8e2]' : 'bg-[#1c1a17]'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] transition-all duration-300 ${dark ? 'bg-[#ece8e2]' : 'bg-[#1c1a17]'} ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-[#f2efe9] transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '72px' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleNav(link)}
              className={`text-2xl font-medium tracking-[0.1em] ${
                activeId === link.id ? 'text-[#c1502e]' : 'text-[#1c1a17]'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* 移动端语言切换 */}
          <div className="flex items-center rounded-full border border-[#ddd7ca] overflow-hidden">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`h-9 px-4 text-sm leading-none transition-colors duration-200 ${
                  lang === l.code
                    ? 'bg-[#1c1a17] text-[#f2efe9]'
                    : 'text-[#8d877c]'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
