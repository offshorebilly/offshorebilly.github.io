export default function Marquee() {
  const items = [
    'Mechanical Design',
    'Industrial Design',
    'SolidWorks',
    'CNC Machining',
    'Robotics',
    'Parametric Modeling',
    'Prototyping',
    'Motion Control',
  ]
  const row = items.map((t, i) => (
    <span key={i}>
      <i>✦</i>
      {t}
    </span>
  ))
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  )
}
