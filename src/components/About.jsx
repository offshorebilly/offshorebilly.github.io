import Reveal from './Reveal'

const stats = [
  { num: '05', sup: '+', label: '竞赛奖项 · Awards' },
  { num: '07', sup: '+', label: '项目与实践 · Projects' },
  { num: '02', sup: '', label: '国家级奖项 · National' },
  { num: '01', sup: '', label: '国际客户项目 · Client' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <span className="sec-index">01</span>
            <span className="sec-label">About — 关于我</span>
            <h2 className="sec-title">设计，然后把它做出来</h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-photo" delay={0.1}>
            <div className="frame">
              <img src="/avatar.jpg" alt="周辰霖证件照" />
              <span className="tag">Zhou Chenlin — 周辰霖</span>
            </div>
            <svg className="orbit" viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <circle cx="50" cy="50" r="46" stroke="rgba(110,231,255,0.5)" strokeWidth="1" strokeDasharray="4 8" />
              <circle cx="50" cy="4" r="3.5" fill="#6ee7ff" />
            </svg>
          </Reveal>

          <div className="about-body">
            <Reveal delay={0.15}>
              <p className="lead">
                哈尔滨工业大学（深圳）机器人工程专业大三在读。
                我相信好的工程师既要<strong>画得出</strong>，也要<strong>做得出</strong>——
                从 SolidWorks 建模到五轴 CNC 加工，从 STM32 电控到 ROS 自主巡航，
                我习惯把一件事从图纸推进到实物。
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="desc">
                曾作为正式队员获 RoboMaster 2024 机甲大师赛全国二等奖，获中国机器人及人工智能大赛全国一等奖；
                带队完成智能物流小车从底盘到机械臂的完整设计制造；也为德国品牌 Pureracing
                独立交付摩托车减震器关键零部件的外观设计。兴趣方向是具身智能与机器人技术的真实场景落地。
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="about-facts">
                <div className="fact">
                  <span className="k">Education</span>
                  <span className="v">哈尔滨工业大学（深圳）· 机器人工程 · 2024.09 至今</span>
                </div>
                <div className="fact">
                  <span className="k">Email</span>
                  <span className="v"><a href="mailto:offshorebilly225@gmail.com">offshorebilly225@gmail.com</a></span>
                </div>
                <div className="fact">
                  <span className="k">Phone</span>
                  <span className="v"><a href="tel:13808460933">+86 138 0846 0933</a></span>
                </div>
                <div className="fact">
                  <span className="k">Website</span>
                  <span className="v"><a href="https://offshorebilly.github.io" target="_blank" rel="noreferrer">offshorebilly.github.io</a></span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={0.08 * i}>
              <div className="num">
                {s.num}
                {s.sup && <sup>{s.sup}</sup>}
              </div>
              <div className="lbl">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
