import { useEffect, useRef } from 'react'

/**
 * Wraps children and fades/slides them in when scrolled into view.
 * Usage: <Reveal delay={0.1}>...</Reveal>
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}s` }}>
      {children}
    </Tag>
  )
}
