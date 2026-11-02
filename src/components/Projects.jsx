import Reveal from './Reveal'

const projects = [
  {
    index: 'P—01',
    title: '智能物流小车',
    sub: '2025 广东省工创赛 · 校级一等奖 — 项目负责人',
    badge: '项目负责人',
    desc: '独立负责从底盘到机械臂的完整机械结构设计、制造与装配；基于 STM32（C 语言）实现运动控制与物料抓取，并以 Python 完成物料视觉识别，打通「感知—决策—执行」的完整链路。',
    tags: ['SolidWorks', 'STM32 / C', 'Python Vision', '3D Printing'],
    img: '/projects/logistics-car.png',
  },
  {
    index: 'P—02',
    title: 'RoboMaster 2024 机甲大师赛',
    sub: '全国大学生机器人大赛 · 全国二等奖',
    badge: '全国二等奖',
    desc: '作为南工骁鹰战队正式队员征战 RoboMaster 2024，参与机器人机械结构的迭代设计与赛场维护，在高强度对抗与极限工期中验证了工程可靠性，最终获全国二等奖。',
    tags: ['RoboMaster', '机械结构', '迭代设计', '团队协作'],
    img: '/projects/robomaster-blueprint.png',
  },
  {
    index: 'P—03',
    title: '摩托车减震器零部件设计',
    sub: 'Pureracing（德国）· 客户项目 — 独立交付',
    badge: '国际客户',
    desc: '为德国品牌 Pureracing 独立完成前后减震器、减震器上下联板、方向柱、左右前叉等关键零部件的外观设计，涵盖建模、装配验证与效果图渲染，直接面向海外客户交付。',
    tags: ['工业设计', 'KeyShot 渲染', '装配验证', '国际协作'],
    img: '/projects/shock-absorber.png',
  },
  {
    index: 'P—04',
    title: '摩托车前叉与方向柱组件',
    sub: 'Pureracing（德国）· 客户项目 — 独立交付',
    badge: '国际客户',
    desc: '同一客户项目的另一部分交付物：上下联板、方向柱与左右前叉的装配体设计。在减震器之外完成转向系统关键构件的外观与结构设计，通过装配验证确保各零件的配合关系，并输出产品级效果图。',
    tags: ['SolidWorks 装配', 'KeyShot 渲染', 'CNC 零件', '装配验证'],
    img: '/projects/triple-clamp.jpg',
  },
  {
    index: 'P—05',
    title: '可折叠家具创新项目',
    sub: '校级立项 · 优秀结题 — 项目负责人',
    badge: '优秀结题',
    desc: '主导从用户调研、概念草图到 SolidWorks 三维建模与工程图纸的全流程设计，并通过 3D 打印制作实物模型，完成从需求到原型的完整闭环。',
    tags: ['用户调研', '概念设计', 'SolidWorks', '原型制作'],
    img: '/projects/foldable-chair.jpg',
  },
  {
    index: 'P—06',
    title: '电竞鼠标外观建模与渲染',
    sub: '工业产品设计 · 个人练习',
    badge: '产品表达',
    desc: '以专业电竞鼠标为对象的曲面建模与渲染练习：从形态曲线、分件缝隙到底部脚贴与按键细节完整复刻，训练复杂曲面造型与产品级材质、光影表达能力。',
    tags: ['曲面造型', 'KeyShot 渲染', '产品细节', '光影表达'],
    img: '/projects/mouse-render.png',
  },
]

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <span className="sec-index">02</span>
            <span className="sec-label">Selected Works — 精选项目</span>
            <h2 className="sec-title">从图纸到实物</h2>
          </div>
        </Reveal>

        <div className="project-list">
          {projects.map((p, i) => (
            <Reveal key={p.index} delay={0.05}>
              <article className="project-card">
                <div className="p-media">
                  <span className="badge">{p.badge}</span>
                  <img src={p.img} alt={p.title} loading="lazy" />
                </div>
                <div className="p-info">
                  <div className="p-index">{p.index}</div>
                  <h3>{p.title}</h3>
                  <div className="p-sub">{p.sub}</div>
                  <p>{p.desc}</p>
                  <div className="p-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
