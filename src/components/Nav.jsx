import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <span className="dot" />
          ZC<sup style={{ fontSize: '10px', color: 'var(--muted)' }}>®</sup>
          <span className="cn">周辰霖</span>
        </a>
        <nav className="nav-links">
          <a className="link" href="#about">关于</a>
          <a className="link" href="#projects">项目</a>
          <a className="link" href="#strengths">优势</a>
          <a className="link" href="#contact">联系</a>
          <a className="nav-cta" href="mailto:offshorebilly225@gmail.com">联系我</a>
        </nav>
      </div>
    </header>
  )
}
