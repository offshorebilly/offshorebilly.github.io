import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Strengths from './components/Strengths'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="glow glow-a" aria-hidden="true" />
      <div className="glow glow-b" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Strengths />
        <Contact />
      </main>
    </>
  )
}
