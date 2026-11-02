import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-video">
        <video autoPlay muted loop playsInline poster="">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-side">Mechanical · Industrial · Robotics — Portfolio 2026</div>

      <div className="container hero-content">
        <Reveal>
          <div className="hero-eyebrow">
            Harbin Institute of Technology (Shenzhen) · Robotics Engineering
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <h1 className="hero-title">
            Zhou<br />
            <span className="thin">Chenlin</span>
          </h1>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="hero-sub">
            <div className="hero-role">
              机械设计 <em>/</em> 工业设计 <em>/</em> 机器人工程
              <small>从建模、制造到装配 —— 让设计真正落地。</small>
            </div>
            <div className="hero-actions">
              <a className="btn-primary" href="mailto:offshorebilly225@gmail.com">
                联系我 <span className="arrow">→</span>
              </a>
              <a className="btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">
                下载简历 PDF
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hero-meta">
        <div className="container hero-meta-inner">
          <span>Shenzhen, China — 22.54°N 113.93°E</span>
          <span className="scroll-hint">
            <span className="bar" /> Scroll
          </span>
          <span>Open for Research & Collaboration</span>
        </div>
      </div>
    </section>
  )
}
