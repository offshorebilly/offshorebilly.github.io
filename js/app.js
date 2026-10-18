/* ============================================================
   Zhou Chenlin — Personal Website
   JS: i18n, multi-image gallery, lightbox, scroll animations
   ============================================================ */

// -------- i18n Content Data --------
const content = {
  zh: {
    nav: {
      logo: 'Zhou Chenlin',
      about: '关于',
      projects: '项目',
      skills: '技能',
      contact: '联系'
    },
    hero: {
      greeting: '你好，我是',
      name: '周辰霖',
      subtitle: '机器人工程 · SolidWorks 三维建模',
      tagline: '将工程精度转化为视觉艺术'
    },
    about: {
      heading: '关于我',
      p1: '哈尔滨工业大学（深圳）机器人工程专业大三学生，专注于机械设计与三维建模。现任校青年志愿者协会义卖部副部长，南工骁鹰机器人战队正式队员。',
      p2: '精通 SolidWorks 建模、装配体设计及工程图纸输出。项目经验涵盖摩托车悬挂系统与减震器设计（德国客户）、外骨骼机器人、工业产品设计、螺旋桨叶片数控加工、可折叠家具等多个领域。',
      p3: '曾为德国客户独立完成减震器上下联板等关键零部件设计，从三维建模到制造交付（STEP 文件）全流程负责，具备国际协作与工程落地能力。',
      p4: '在 2024 年 RoboMaster 机甲大师赛中，作为南工骁鹰战队正式队员参与机器人底盘结构设计与装配，团队荣获全国二等奖。',
      badge: 'SolidWorks 专家级建模'
    },
    projects: {
      heading: '项目作品',
      all: '全部',
      damper: '减震器',
      suspension: '摩托车悬挂',
      industrial: '工业设计',
      exoskeleton: '外骨骼',
      competition: '螺旋桨'
    },
    skills: {
      heading: '技能',
      s1name: 'SolidWorks',
      s1desc: '零件建模 · 装配体 · 工程图 · 曲面造型 · 运动仿真',
      s2name: 'KeyShot / 渲染',
      s2desc: '产品级渲染 · 材质与光照 · 透视截面展示',
      s3name: 'SolidCAM / 数控加工',
      s3desc: 'CNC 刀路设计 · 五轴加工编程 · 后处理',
      s4name: '原型制造',
      s4desc: '3D 打印 · CNC 加工 · 装配验证'
    },
    experience: {
      heading: '经历',
      i1tag: 'RoboMaster',
      i1title: '南工骁鹰战队 · 2024 机甲大师赛全国二等奖',
      i1desc: '作为正式队员参与机器人底盘结构设计与装配调试。团队在全国大学生机器人大赛 RoboMaster 2024 机甲大师赛中荣获全国二等奖。',
      i2tag: '兼职项目',
      i2title: '德国客户 — 摩托车减震器零部件设计',
      i2desc: '独立完成摩托车减震器上下联板、方向柱、左右前叉等关键零部件设计。根据客户规格从零建模，输出 STEP 工程文件交付德国客户制造，涵盖零件建模、装配验证及图纸输出全流程。',
      i3tag: '年度项目',
      i3title: '可折叠家具 — 大一年度创新项目',
      i3desc: '大一期间主导可折叠收纳家具设计项目，获年度创新项目立项支持。完成从用户调研、概念草图、SolidWorks 三维建模到工程图纸的全流程设计，顺利通过中期检查与结题答辩，成果获评优秀。',
      i4tag: '学生工作',
      i4title: '青年志愿者协会义卖部副部长',
      i4desc: '负责校园义卖活动的文创产品策划、供应商对接及现场组织，协调部门成员完成多次大型义卖活动。'
    },
    contact: {
      heading: '联系',
      text: '欢迎通过邮件与我联系'
    },
    footer: {
      copy: '© 2026 Zhou Chenlin. All rights reserved.',
      school: '哈尔滨工业大学（深圳）· 机器人工程'
    }
  },
  en: {
    nav: {
      logo: 'Zhou Chenlin',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Zhou Chenlin',
      subtitle: 'Robotics Engineering · SolidWorks 3D Modeling',
      tagline: 'Engineering precision meets visual artistry'
    },
    about: {
      heading: 'About',
      p1: 'Junior Robotics Engineering student at Harbin Institute of Technology, Shenzhen. Vice Minister of the HIT Youth Volunteer Association Charity Sale Department and official member of the Nan Gong Xiao Ying RoboMaster team.',
      p2: 'Proficient in SolidWorks modeling, assembly design, and engineering drawings. Project experience spans motorcycle suspension and damper systems (for a German client), exoskeleton robotics, industrial product design, propeller blade CNC machining, and foldable furniture.',
      p3: 'Independently designed and delivered damper linkage components (upper/lower clamps, steering column) for a German client — from 3D modeling to STEP file delivery. Experienced in international collaboration and engineering execution.',
      p4: 'Participated in the RoboMaster 2024 competition as an official member of the Nan Gong Xiao Ying team, contributing to robot chassis design and assembly. The team won National Second Prize.',
      badge: 'SolidWorks Expert'
    },
    projects: {
      heading: 'Projects',
      all: 'All',
      damper: 'Damper',
      suspension: 'Suspension',
      industrial: 'Industrial',
      exoskeleton: 'Exoskeleton',
      competition: 'Propeller'
    },
    skills: {
      heading: 'Skills',
      s1name: 'SolidWorks',
      s1desc: 'Part modeling · Assemblies · Drawings · Surfacing · Motion simulation',
      s2name: 'KeyShot / Rendering',
      s2desc: 'Product rendering · Materials & lighting · Cross-section views',
      s3name: 'SolidCAM / CNC',
      s3desc: 'CNC toolpath design · 5-axis programming · Post-processing',
      s4name: 'Prototyping',
      s4desc: '3D printing · CNC machining · Assembly verification'
    },
    experience: {
      heading: 'Experience',
      i1tag: 'RoboMaster',
      i1title: 'Nan Gong Xiao Ying · RoboMaster 2024 National 2nd Prize',
      i1desc: 'Official team member responsible for robot chassis structural design and assembly. The team won National Second Prize in the RoboMaster 2024 University Robotics Competition.',
      i2tag: 'Freelance Project',
      i2title: 'German Client — Motorcycle Damper Component Design',
      i2desc: 'Independently designed key motorcycle damper components including upper/lower clamps, steering column, and left/right fork assemblies. Modeled from client specifications and delivered STEP files for manufacturing in Germany.',
      i3tag: 'Year One Project',
      i3title: 'Foldable Furniture — Annual Innovation Project',
      i3desc: 'Led a foldable storage furniture design project in freshman year, receiving annual innovation project funding. Completed the full design workflow from user research through 3D modeling and engineering drawings. Passed mid-term review and final defense with excellent results.',
      i4tag: 'Student Leadership',
      i4title: 'Youth Volunteer Association — Vice Minister of Charity Sale Dept.',
      i4desc: 'Planned campus charity sale events including cultural product design, vendor coordination, and on-site management. Coordinated team members to successfully execute multiple large-scale fundraising events.'
    },
    contact: {
      heading: 'Contact',
      text: 'Feel free to reach out via email'
    },
    footer: {
      copy: '© 2026 Zhou Chenlin. All rights reserved.',
      school: 'HIT Shenzhen · Robotics Engineering'
    }
  }
};

// -------- Project Data (multi-image per project) --------
const projects = [
  {
    id: 'p01',
    category: 'damper',
    catZh: '减震器',
    catEn: 'Damper',
    titleZh: '后避震器透视装配',
    titleEn: 'Rear Shock — Cross-Section Assembly',
    descZh: '598UA 减震器透视装配渲染，展现内部油阀、活塞及弹簧结构。为德国客户设计。',
    descEn: 'Transparent assembly render of 598UA shock absorber for a German client, revealing internal oil valve, piston, and spring mechanisms.',
    images: [
      { full: 'images/project-01-01.webp', thumb: 'images/thumb-01.webp',
        capZh: '598UA 后避震器透视装配渲染', capEn: '598UA Rear shock transparent assembly render' },
      { full: 'images/project-01-02.webp',
        capZh: '前减震器左侧完整装配体，包含叉管、弹簧、油封等组件', capEn: 'Front fork left-side complete assembly with fork tubes, springs, and oil seals' },
      { full: 'images/project-01-03.webp',
        capZh: '前减震器右侧装配体渲染', capEn: 'Front fork right-side assembly render' },
      { full: 'images/project-01-04.webp',
        capZh: '减震器整体装配体效果图', capEn: 'Full damper assembly render' },
      { full: 'images/project-01-05.webp',
        capZh: '减震器上联板零件设计，为德国客户定制', capEn: 'Upper clamp plate design for German client' }
    ]
  },
  {
    id: 'p02',
    category: 'suspension',
    catZh: '摩托车悬挂',
    catEn: 'Suspension',
    titleZh: '方向柱总成',
    titleEn: 'Steering Column Assembly',
    descZh: '摩托车前叉方向柱完整装配体渲染，含上下联板及轴承组件。为德国客户设计的摩托车悬挂系统零部件。',
    descEn: 'Complete motorcycle steering column assembly render with upper/lower clamps and bearing components, designed for a German client.',
    images: [
      { full: 'images/project-02-01.webp', thumb: 'images/thumb-02.webp',
        capZh: '方向柱完整装配体', capEn: 'Steering column complete assembly' },
      { full: 'images/project-02-02.webp',
        capZh: '摩托车前叉方向柱 — 视角2', capEn: 'Motorcycle fork steering column — angle 2' },
      { full: 'images/project-02-03.webp',
        capZh: '摩托车前叉方向柱 — 视角3', capEn: 'Motorcycle fork steering column — angle 3' },
      { full: 'images/project-02-04.webp',
        capZh: '方向柱细节特写', capEn: 'Steering column detail close-up' },
      { full: 'images/project-02-05.webp',
        capZh: '方向柱总成 — 含上下联板', capEn: 'Steering column assembly with upper/lower clamps' }
    ]
  },
  {
    id: 'p03',
    category: 'industrial',
    catZh: '工业设计',
    catEn: 'Industrial',
    titleZh: '鼠标外观设计',
    titleEn: 'Mouse — Industrial Design',
    descZh: '人体工学鼠标外观设计渲染，探索曲面造型与功能结合。SolidWorks 建模 + KeyShot 渲染。',
    descEn: 'Ergonomic mouse design render exploring the integration of surfacing and functionality. SolidWorks + KeyShot.',
    images: [
      { full: 'images/project-03-04.webp', thumb: 'images/thumb-03.webp',
        capZh: '鼠标 — 视角4', capEn: 'Mouse — angle 4' },
      { full: 'images/project-03-02.webp',
        capZh: '鼠标 — 另一个角度', capEn: 'Mouse — alternate angle' },
      { full: 'images/project-03-03.webp',
        capZh: '鼠标 — 视角3', capEn: 'Mouse — angle 3' },
      { full: 'images/project-03-05.webp',
        capZh: '鼠标 — 视角5', capEn: 'Mouse — angle 5' },
      { full: 'images/project-03-06.webp',
        capZh: '鼠标 — 视角6', capEn: 'Mouse — angle 6' },
      { full: 'images/project-03-01.webp',
        capZh: '鼠标外观设计渲染', capEn: 'Mouse industrial design render' }
    ]
  },
  {
    id: 'p04',
    category: 'industrial',
    catZh: '工业设计',
    catEn: 'Industrial',
    titleZh: '花瓶 — Grasshopper + Rhino 参数化曲面',
    titleEn: 'Vase — Parametric Surfacing (Rhino + GH)',
    descZh: '通过 Grasshopper 参数化 + Rhino 曲面建模生成花瓶形态，探索算法驱动设计的可能性。',
    descEn: 'Parametric surface modeling with Grasshopper and Rhino for vase form generation — exploring algorithm-driven design.',
    images: [
      { full: 'images/project-04-01.webp', thumb: 'images/thumb-04.webp',
        capZh: 'Grasshopper + Rhino 参数化花瓶', capEn: 'Grasshopper + Rhino parametric vase' },
      { full: 'images/project-04-02.webp',
        capZh: '参数化花瓶 — 造型变体1', capEn: 'Parametric vase — variation 1' },
      { full: 'images/project-04-03.webp',
        capZh: '参数化花瓶 — 造型变体2', capEn: 'Parametric vase — variation 2' },
      { full: 'images/project-04-04.webp',
        capZh: '参数化花瓶 — 造型变体3', capEn: 'Parametric vase — variation 3' },
      { full: 'images/project-04-05.webp',
        capZh: '参数化花瓶 — 造型变体4', capEn: 'Parametric vase — variation 4' },
      { full: 'images/project-04-06.webp',
        capZh: '参数化花瓶 — 造型变体5', capEn: 'Parametric vase — variation 5' }
    ]
  },
  {
    id: 'p05',
    category: 'exoskeleton',
    catZh: '外骨骼',
    catEn: 'Exoskeleton',
    titleZh: '外骨骼座椅',
    titleEn: 'Exoskeleton Chair',
    descZh: '可穿戴外骨骼座椅设计，SolidWorks 建模 + 3D 打印原型验证。探索人机工程与外骨骼结构的融合。',
    descEn: 'Wearable exoskeleton chair design with SolidWorks modeling and 3D-printed prototype validation.',
    images: [
      { full: 'images/project-05-01.webp', thumb: 'images/thumb-05.webp',
        capZh: '外骨骼座椅渲染图', capEn: 'Exoskeleton chair render' },
      { full: 'images/project-05-02.webp',
        capZh: '外骨骼座椅结构视图 — 正面', capEn: 'Exoskeleton chair — front view' },
      { full: 'images/project-05-03.webp',
        capZh: '外骨骼座椅结构视图 — 侧面', capEn: 'Exoskeleton chair — side view' },
      { full: 'images/project-05-04.webp',
        capZh: '外骨骼座椅结构视图 — 细节', capEn: 'Exoskeleton chair — detail view' },
      { full: 'images/project-05-05.webp',
        capZh: '外骨骼座椅 — 穿戴示意', capEn: 'Exoskeleton chair — wearing demonstration' }
    ]
  },
  {
    id: 'p06',
    category: 'competition',
    catZh: '螺旋桨',
    catEn: 'Propeller',
    titleZh: '螺旋桨叶片 — 五轴 CNC 加工',
    titleEn: 'Propeller Blade — 5-Axis CNC Machining',
    descZh: 'SolidWorks 参数化建模 + SolidCAM 五轴数控刀路设计，CNC 加工验证。同时为该比赛设计了船体模型并完成桨叶装配。',
    descEn: 'SolidWorks parametric modeling + SolidCAM 5-axis CNC toolpath design with machining verification. Also designed the hull model for the competition with propeller assembly.',
    images: [
      { full: 'images/project-06-01.webp', thumb: 'images/thumb-06.webp',
        capZh: '螺旋桨叶片 SolidWorks 建模', capEn: 'Propeller blade — SolidWorks model' },
      { full: 'images/project-06-02.webp',
        capZh: 'SolidCAM 五轴数控铣削刀路设计', capEn: 'SolidCAM 5-axis CNC milling toolpath' },
      { full: 'images/project-06-03.webp',
        capZh: '比赛船体建模 + 桨叶装配', capEn: 'Competition hull model with propeller assembly' },
      { full: 'images/project-06-04.webp',
        capZh: '桨叶工程图纸', capEn: 'Propeller engineering drawing' }
    ]
  }
];

// -------- State --------
let currentLang = localStorage.getItem('lang') || 'zh';
let currentFilter = 'all';
let currentProjectId = null;
let currentImageIndex = 0;
let lightboxOpen = false;

// -------- Helper --------
function t(obj, lang) {
  return lang === 'zh' ? obj.zh : obj.en;
}

// -------- i18n Engine --------
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const path = el.dataset.i18n.split('.');
    let value = content[lang];
    for (const key of path) {
      if (value && typeof value === 'object') value = value[key];
      else { value = null; break; }
    }
    if (value && typeof value === 'string') {
      el.textContent = value;
    }
  });

  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.textContent = lang === 'zh' ? 'EN' : '中';

  renderFilters();
  renderGallery();
  if (lightboxOpen) updateLightboxContent();
}

// -------- Gallery --------
function renderFilters() {
  const bar = document.getElementById('filter-bar');
  const cats = [
    { key: 'all',         zh: content.zh.projects.all,         en: content.en.projects.all },
    { key: 'damper',      zh: content.zh.projects.damper,      en: content.en.projects.damper },
    { key: 'suspension',  zh: content.zh.projects.suspension,  en: content.en.projects.suspension },
    { key: 'industrial',  zh: content.zh.projects.industrial,  en: content.en.projects.industrial },
    { key: 'exoskeleton', zh: content.zh.projects.exoskeleton, en: content.en.projects.exoskeleton },
    { key: 'competition', zh: content.zh.projects.competition, en: content.en.projects.competition }
  ];

  bar.innerHTML = cats.map(c =>
    `<button class="filter-btn${c.key === currentFilter ? ' active' : ''}" data-filter="${c.key}">
      ${currentLang === 'zh' ? c.zh : c.en}
    </button>`
  ).join('');

  bar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      renderFilters();
      renderGallery();
    });
  });
}

function renderGallery() {
  const gallery = document.getElementById('gallery');
  const filtered = currentFilter === 'all'
    ? projects
    : projects.filter(p => p.category === currentFilter);

  gallery.innerHTML = filtered.map(p => {
    const thumb = p.images[0].thumb;
    return `
    <div class="gallery-card reveal" data-project-id="${p.id}">
      <img src="${thumb}" alt="${t({zh: p.titleZh, en: p.titleEn}, currentLang)}" loading="lazy">
      <div class="gallery-card-info">
        <h3>${t({zh: p.titleZh, en: p.titleEn}, currentLang)}</h3>
        <span class="card-cat">${t({zh: p.catZh, en: p.catEn}, currentLang)}</span>
      </div>
    </div>`;
  }).join('');

  gallery.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      openLightbox(card.dataset.projectId);
    });
  });

  observeReveal();
}

// -------- Lightbox (multi-image per project) --------
function getProjectById(id) {
  return projects.find(p => p.id === id);
}

function openLightbox(projectId) {
  const proj = getProjectById(projectId);
  if (!proj) return;
  currentProjectId = projectId;
  currentImageIndex = 0;
  updateLightboxContent();
  document.getElementById('lightbox').classList.add('open');
  document.getElementById('lightbox').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  lightboxOpen = true;
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lightbox').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lightboxOpen = false;
  currentProjectId = null;
}

function navigateImage(dir) {
  const proj = getProjectById(currentProjectId);
  if (!proj) return;
  const n = proj.images.length;
  currentImageIndex = (currentImageIndex + dir + n) % n;
  updateLightboxContent();
}

function updateLightboxContent() {
  const proj = getProjectById(currentProjectId);
  if (!proj) return;
  const img = proj.images[currentImageIndex];
  const n = proj.images.length;

  document.getElementById('lightbox-img').src = img.full;
  document.getElementById('lightbox-img').alt = t({zh: proj.titleZh, en: proj.titleEn}, currentLang);
  document.getElementById('lightbox-title').textContent = t({zh: proj.titleZh, en: proj.titleEn}, currentLang);
  document.getElementById('lightbox-cat').textContent = t({zh: proj.catZh, en: proj.catEn}, currentLang);

  // Per-image caption (falls back to project description)
  const capEl = document.getElementById('lightbox-desc');
  if (img.capZh && img.capEn) {
    capEl.textContent = t({zh: img.capZh, en: img.capEn}, currentLang);
  } else {
    capEl.textContent = t({zh: proj.descZh, en: proj.descEn}, currentLang);
  }

  // Image counter "2 / 4" (only show when > 1 image)
  document.getElementById('lightbox-counter').textContent =
    n > 1 ? `${currentImageIndex + 1} / ${n}` : '';
}

// Lightbox event listeners
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', () => navigateImage(-1));
document.getElementById('lightbox-next').addEventListener('click', () => navigateImage(1));

// Click outside image to close
document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});

// Keyboard: Escape, arrows
document.addEventListener('keydown', (e) => {
  if (!lightboxOpen) return;
  if (e.key === 'Escape') { closeLightbox(); return; }
  if (e.key === 'ArrowLeft')  { navigateImage(-1); return; }
  if (e.key === 'ArrowRight') { navigateImage(1); return; }
});

// Touch swipe on lightbox
let touchStartX = 0;
document.getElementById('lightbox').addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
document.getElementById('lightbox').addEventListener('touchend', (e) => {
  if (!lightboxOpen) return;
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) navigateImage(diff > 0 ? 1 : -1);
});

// -------- Scroll Reveal --------
let revealObserver;

function observeReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentNode.children)
          .filter(c => c.classList.contains('reveal'));
        const idx = siblings.indexOf(entry.target);
        const delay = Math.min(idx * 80, 500);
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// -------- Nav Scroll Spy --------
function updateNavOnScroll() {
  const nav = document.getElementById('nav');
  const heroBottom = document.getElementById('hero').offsetHeight;

  if (window.scrollY > heroBottom - 80) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
  const scrollPos = window.scrollY + 120;
  let activeId = 'hero';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) activeId = id;
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
  });
}
window.addEventListener('scroll', updateNavOnScroll, { passive: true });

// -------- Mobile Menu --------
document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
  });
});

// -------- Hero Parallax --------
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg && scrollY < window.innerHeight) {
    heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
  }
}, { passive: true });

// -------- Init --------
function init() {
  applyLanguage(currentLang);
  renderFilters();
  renderGallery();
  observeReveal();
  updateNavOnScroll();

  document.getElementById('lang-toggle').addEventListener('click', () => {
    const next = currentLang === 'zh' ? 'en' : 'zh';
    applyLanguage(next);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
