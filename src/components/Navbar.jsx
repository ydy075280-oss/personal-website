import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'home', label: '首页' },
  { id: 'insights', label: '洞察', hash: '#/insights' },
  { id: 'home-works', label: '作品' },
  { id: 'about', label: '关于', hash: '#/about' },
]

export default function Navbar({ activeId, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] px-3 h-[72px] flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? 'bg-[#e8e2d5]/95 backdrop-blur-md border-b border-[#c9bfa8]'
          : 'bg-[#e8e2d5]/95 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <button
        onClick={() => onNavigate('home', 'top')}
        className="font-black text-[1.1rem] tracking-tight uppercase text-[#241f19]"
      >
        CREATIVE LAB.
      </button>

      <div className="hidden md:flex items-center gap-8">
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
    </nav>
  )
}
