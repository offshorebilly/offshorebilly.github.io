import Reveal from './Reveal'

const strengths = [
  {
    num: 'S.01',
    title: '机械结构设计',
    desc: 'SolidWorks 零件建模、装配体、工程图与曲面造型；Rhino + Grasshopper 参数化建模，兼顾结构合理性与造型表达。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4 44 15v18L24 44 4 33V15L24 4Z" />
        <path d="M24 4v20m0 0L4 15m20 9 20-9M24 24v20" opacity="0.55" />
      </svg>
    ),
  },
  {
    num: 'S.02',
    title: '原型制造',
    desc: '3D 打印、五轴 CNC 加工、激光切割、装配与喷涂上色；SolidCAM 五轴数控刀路设计与后处理，具备「建模—制造—装配」完整实现能力。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 12h32v10H8zM14 22v6h20v-6M18 28v12h12V28" />
        <path d="M24 34v6M12 44h24" opacity="0.55" />
      </svg>
    ),
  },
  {
    num: 'S.03',
    title: '电控与嵌入式',
    desc: 'STM32（C 语言）运动控制与物料抓取；Arduino 传感器驱动与超声波避障，让机械结构真正动起来、完成任务。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="12" y="12" width="24" height="24" rx="2" />
        <rect x="19" y="19" width="10" height="10" opacity="0.55" />
        <path d="M18 12V6m6 6V6m6 6V6M18 42v-6m6 6v-6m6 6v-6M12 18H6m6 6H6m6 6H6m36-18h-6m6 6h-6m6 6h-6" />
      </svg>
    ),
  },
  {
    num: 'S.04',
    title: '算法与视觉',
    desc: 'Python 视觉识别与图像处理；ROS 自主巡航、避障与任务规划；KeyShot 产品级渲染，从算法到表达完整呈现方案。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="7" opacity="0.55" />
        <path d="M24 6v6m0 24v6M6 24h6m24 0h6" />
      </svg>
    ),
  },
]

export default function Strengths() {
  return (
    <section className="section" id="strengths">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <span className="sec-index">03</span>
            <span className="sec-label">Capabilities — 个人优势</span>
            <h2 className="sec-title">全链路的工程能力</h2>
          </div>
        </Reveal>

        <div className="strength-grid">
          {strengths.map((s, i) => (
            <Reveal key={s.num} delay={0.08 * i} className="strength-card">
              <span className="s-line" />
              <span className="s-num">{s.num}</span>
              <div className="s-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
