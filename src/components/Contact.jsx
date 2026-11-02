import Reveal from './Reveal'

export default function Contact() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="contact" id="contact">
      <div className="container contact-inner">
        <Reveal>
          <div className="contact-eyebrow">04 — Contact · 联系方式</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="contact-title">
            Let&apos;s Build
            <span className="row2">Something Real</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="contact-cn">让设计落地，让机器人走进真实场景</p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="contact-actions">
            <a className="btn-accent" href="mailto:offshorebilly225@gmail.com">
              offshorebilly225@gmail.com <span>↗</span>
            </a>
            <a className="btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">
              下载简历 PDF
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="contact-links">
            <a href="tel:13808460933">
              <small>Phone</small>
              +86 138 0846 0933
            </a>
            <a href="https://offshorebilly.github.io" target="_blank" rel="noreferrer">
              <small>Website</small>
              offshorebilly.github.io
            </a>
            <a href="mailto:offshorebilly225@gmail.com">
              <small>Email</small>
              offshorebilly225
            </a>
          </div>
        </Reveal>
      </div>

      <div className="footer-bar">
        <div className="container footer-inner">
          <span>© 2026 Zhou Chenlin — 周辰霖</span>
          <span>Mechanical / Industrial Design Portfolio</span>
          <button className="up" onClick={backToTop}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
