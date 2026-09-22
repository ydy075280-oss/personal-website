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

export default function Navbar({ activeId, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 h-[72px] flex items-center justify-between transition-colors duration-300 backdrop-blur-md border-b ${
          scrolled
            ? 'bg-[#0b0a09]/90 border-[#262421]'
            : 'bg-[#0b0a09]/70 border-[#1c1a18]'
        }`}
      >
        <button
          onClick={() => onNavigate('home', 'top')}
          className="font-medium text-[0.82rem] tracking-[0.28em] uppercase text-[#ece8e2] transition-colors duration-300 hover:text-[#c9a063]"
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
        <div className="hidden md:flex items-center rounded-full border border-[#2a2724] overflow-hidden">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`h-7 px-3 text-[0.72rem] leading-none transition-colors duration-200 ${
                lang === l.code
                  ? 'bg-[#ece8e2] text-[#0b0a09]'
                  : 'text-[#9c9890] hover:text-[#ece8e2]'
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
          <span className={`block w-6 h-[2px] bg-[#ece8e2] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-[#ece8e2] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-[#ece8e2] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-[#0b0a09] transition-transform duration-300 md:hidden ${
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
                activeId === link.id ? 'text-[#c9a063]' : 'text-[#ece8e2]'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* 移动端语言切换 */}
          <div className="flex items-center rounded-full border border-[#2a2724] overflow-hidden">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`h-9 px-4 text-sm leading-none transition-colors duration-200 ${
                  lang === l.code
                    ? 'bg-[#ece8e2] text-[#0b0a09]'
                    : 'text-[#9c9890]'
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
