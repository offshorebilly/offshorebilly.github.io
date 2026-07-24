/* ============================================================
   Zhou Chenlin — Personal Website
   JS: i18n, gallery, lightbox, scroll animations
   Updated: German client, RoboMaster, YVA, exoskeleton project
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
      p2: '精通 SolidWorks 建模、装配体设计及工程图纸输出。项目经验涵盖摩托车悬挂系统与减震器设计（德国客户）、外骨骼机器人、工业产品设计、可折叠家具等多个领域。',
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
      exoskeleton: '外骨骼'
    },
    skills: {
      heading: '技能',
      s1name: 'SolidWorks',
      s1desc: '零件建模 · 装配体 · 工程图 · 曲面造型 · 运动仿真',
      s2name: 'KeyShot / 渲染',
      s2desc: '产品级渲染 · 材质与光照 · 透视截面展示',
      s3name: '工程制图',
      s3desc: '工程图纸 · GD&T · STEP/STL 格式转换',
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
    },
    lightbox: {
      close: '关闭',
      prev: '上一张',
      next: '下一张'
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
      p1: 'Junior Robotics Engineering student at Harbin Institute of Technology, Shenzhen. Vice Minister of the HIT Youth Volunteer Association Charity Sale Department and official member of the Nan Gong Xiao Ying (南工骁鹰) RoboMaster team.',
      p2: 'Proficient in SolidWorks modeling, assembly design, and engineering drawings. Project experience spans motorcycle suspension and damper systems (for a German client), exoskeleton robotics, industrial product design, and foldable furniture.',
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
      exoskeleton: 'Exoskeleton'
    },
    skills: {
      heading: 'Skills',
      s1name: 'SolidWorks',
      s1desc: 'Part modeling · Assemblies · Drawings · Surfacing · Motion simulation',
      s2name: 'KeyShot / Rendering',
      s2desc: 'Product rendering · Materials & lighting · Cross-section views',
      s3name: 'Engineering Drawing',
      s3desc: 'Technical drawings · GD&T · STEP/STL format conversion',
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
      i2desc: 'Independently designed key motorcycle damper components including upper/lower clamps, steering column, and left/right fork assemblies. Modeled from client specifications and delivered STEP files for manufacturing in Germany. Full workflow from part modeling to assembly verification and drawing output.',
      i3tag: 'Year One Project',
      i3title: 'Foldable Furniture — Annual Innovation Project',
      i3desc: 'Led a foldable storage furniture design project in freshman year, receiving annual innovation project funding. Completed the full design workflow from user research and concept sketching through SolidWorks 3D modeling and engineering drawings. Passed mid-term review and final defense with excellent results.',
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
    },
    lightbox: {
      close: 'Close',
      prev: 'Previous',
      next: 'Next'
    }
  }
};

// -------- Project Data --------
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
    thumb: 'images/thumb-01.webp',
    full: 'images/project-01.webp'
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
    thumb: 'images/thumb-02.webp',
    full: 'images/project-02.webp'
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
    thumb: 'images/thumb-03.webp',
    full: 'images/project-03.webp'
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
    thumb: 'images/thumb-04.webp',
    full: 'images/project-04.webp'
  },
  {
    id: 'p05',
    category: 'exoskeleton',
    catZh: '外骨骼',
    catEn: 'Exoskeleton',
    titleZh: '外骨骼座椅',
    titleEn: 'Exoskeleton Chair',
    descZh: '可穿戴外骨骼座椅设计，SolidWorks 建模 + 3D 打印原型验证。探索人机工程与外骨骼结构的融合。',
    descEn: 'Wearable exoskeleton chair design with SolidWorks modeling and 3D-printed prototype validation. Exploring the integration of ergonomics and exoskeleton structures.',
    thumb: 'images/thumb-05.webp',
    full: 'images/project-05.webp'
  }
];

// -------- State --------
let currentLang = localStorage.getItem('lang') || 'zh';
let currentFilter = 'all';
let currentProjectIndex = -1;
let lightboxOpen = false;

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

  // Update lang toggle button text
  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.textContent = lang === 'zh' ? 'EN' : '中';

  // Re-render gallery and filters to update text
  renderFilters();
  renderGallery();
}

// -------- Gallery --------
function renderFilters() {
  const bar = document.getElementById('filter-bar');
  const cats = [
    { key: 'all', zh: content.zh.projects.all, en: content.en.projects.all },
    { key: 'damper', zh: content.zh.projects.damper, en: content.en.projects.damper },
    { key: 'suspension', zh: content.zh.projects.suspension, en: content.en.projects.suspension },
    { key: 'industrial', zh: content.zh.projects.industrial, en: content.en.projects.industrial },
    { key: 'exoskeleton', zh: content.zh.projects.exoskeleton, en: content.en.projects.exoskeleton }
  ];

  bar.innerHTML = cats.map(c =>
    `<button class="filter-btn${c.key === currentFilter ? ' active' : ''}" data-filter="${c.key}">
      ${currentLang === 'zh' ? c.zh : c.en}
    </button>`
  ).join('');

  // Attach listeners
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

  gallery.innerHTML = filtered.map(p => `
    <div class="gallery-card reveal" data-project-id="${p.id}">
      <img src="${p.thumb}" alt="${currentLang === 'zh' ? p.titleZh : p.titleEn}" loading="lazy">
      <div class="gallery-card-info">
        <h3>${currentLang === 'zh' ? p.titleZh : p.titleEn}</h3>
        <span class="card-cat">${currentLang === 'zh' ? p.catZh : p.catEn}</span>
      </div>
    </div>
  `).join('');

  // Attach click handlers
  gallery.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.dataset.projectId;
      openLightbox(pid);
    });
  });

  // Re-observe new cards for scroll reveal
  observeReveal();
}

// -------- Lightbox --------
function openLightbox(projectId) {
  const idx = projects.findIndex(p => p.id === projectId);
  if (idx === -1) return;
  currentProjectIndex = idx;
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
}

function navigateLightbox(dir) {
  const filtered = currentFilter === 'all'
    ? projects
    : projects.filter(p => p.category === currentFilter);

  if (filtered.length === 0) return;

  const currentId = projects[currentProjectIndex].id;
  const filteredIdx = filtered.findIndex(p => p.id === currentId);

  let newFilteredIdx = filteredIdx + dir;
  if (newFilteredIdx < 0) newFilteredIdx = filtered.length - 1;
  if (newFilteredIdx >= filtered.length) newFilteredIdx = 0;

  currentProjectIndex = projects.findIndex(p => p.id === filtered[newFilteredIdx].id);
  updateLightboxContent();
}

function updateLightboxContent() {
  const p = projects[currentProjectIndex];
  document.getElementById('lightbox-img').src = p.full;
  document.getElementById('lightbox-img').alt = currentLang === 'zh' ? p.titleZh : p.titleEn;
  document.getElementById('lightbox-title').textContent = currentLang === 'zh' ? p.titleZh : p.titleEn;
  document.getElementById('lightbox-desc').textContent = currentLang === 'zh' ? p.descZh : p.descEn;
  document.getElementById('lightbox-cat').textContent = currentLang === 'zh' ? p.catZh : p.catEn;
}

// Lightbox event listeners
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
document.getElementById('lightbox-next').addEventListener('click', () => navigateLightbox(1));

// Click outside image to close
document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});

// Keyboard: Escape, arrows
document.addEventListener('keydown', (e) => {
  if (!lightboxOpen) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
});

// -------- Scroll Reveal (Intersection Observer) --------
let revealObserver;

function observeReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
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

// -------- Nav Scroll Spy + Background --------
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
    if (el && el.offsetTop <= scrollPos) {
      activeId = id;
    }
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

  // Language toggle button
  document.getElementById('lang-toggle').addEventListener('click', () => {
    const next = currentLang === 'zh' ? 'en' : 'zh';
    applyLanguage(next);
  });
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
