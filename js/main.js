/* ============================================
   CONFIG — edite com seus dados
   ============================================ */
const CONFIG = {
  nome:      "Érik Cássio",
  iniciais:  "EC",
  cargo:     "Economista · Analista Quantitativo",
  slogan:    "Economia orientada por dados.",
  tagline:   "Análises quantitativas sobre economia, mercados e ciência de dados. Sem sensacionalismo, sem promessas — apenas dados bem analisados.",

  redes: {
    linkedin:  "https://linkedin.com/in/erikcassio",
    github:    "https://github.com/ErikCassiocs",
    twitter:   "https://twitter.com/erikcassio",
    instagram: "https://instagram.com/erikcassio",
    medium:    "https://medium.com/@erikcassio",
    email:     "email@email.com",
  },

  stats: [
    { num: "12+", label: "Estudos publicados" },
    { num: "8",   label: "Projetos técnicos"  },
    { num: "5+",  label: "Anos de experiência"},
  ],

  bio: [
    "Sou economista e atuo de forma independente desenvolvendo análises quantitativas, modelos preditivos e projetos de ciência de dados aplicados à economia e ao mercado financeiro.",
    "Minha principal área de interesse é entender fenômenos econômicos por meio de dados. Para isso, utilizo estatística, econometria e programação em Python para construir modelos, analisar indicadores e transformar informações complexas em análises objetivas.",
    "Neste site compartilho artigos, estudos, simulações e projetos desenvolvidos ao longo da minha trajetória. O objetivo é reunir conhecimento aplicado sobre macroeconomia, investimentos, análise de dados e modelagem quantitativa, sempre com foco em evidências e interpretação crítica.",
    "Acredito que boas decisões começam com boas perguntas e são fortalecidas por dados bem analisados."
  ],

  bioQuote: "Boas decisões começam com boas perguntas e são fortalecidas por dados bem analisados.",

  skills: [
    "Python","Econometria","Séries Temporais","Machine Learning",
    "Power BI","SQL","R","Pandas","Statsmodels","Estatística",
    "Modelagem Quantitativa","Revenue Management","Git","Streamlit"
  ],

  atuacao: [
    "Macroeconomia e política monetária",
    "Mercado de trabalho e inflação",
    "Tesouro Direto e renda fixa",
    "Análise cambial e gestão de risco",
    "Revenue Management",
    "Ciência de dados aplicada",
    "Econometria e séries temporais"
  ],

  formacao: [
    "Graduação em Ciências Econômicas",
    "Especialização em Estatística e Data Science",
    "Python para Análise Econômica",
    "Econometria Aplicada"
  ],

  referencias: [
    "Banco Central do Brasil",
    "OCDE e FMI",
    "The Economist · Bloomberg",
    "Financial Times"
  ],

  disponivel: [
    "Análises econômicas quantitativas",
    "Modelagem e previsão econômica",
    "Dashboards e visualizações",
    "Consultoria em ciência de dados",
    "Projetos de revenue management",
    "Parcerias de pesquisa"
  ],

  artigosExemplo: [  ],

  projetos: [
    {
      icon: "chart-line", tag: "Macroeconomia · Python",
      title: "Dashboard Macroeconômico Brasileiro",
      desc: "Painel interativo com indicadores do Bacen, IBGE e IPEA atualizados automaticamente via API.",
      techs: ["Python","Streamlit","Pandas","Plotly","API Bacen"],
      github: "https://github.com/ErikCassiocs", demo: null
    },
    {
      icon: "currency-dollar", tag: "Tesouro Direto · Simulação",
      title: "Simulador de Tesouro Direto",
      desc: "Ferramenta para comparar rentabilidade de títulos públicos com inflação, imposto de renda e cenários de resgate antecipado.",
      techs: ["Python","Streamlit","NumPy","Matplotlib"],
      github: "https://github.com/ErikCassiocs", demo: null
    },
    {
      icon: "brain", tag: "Econometria · Machine Learning",
      title: "Modelo de Previsão Cambial (BRL/USD)",
      desc: "Modelo híbrido VAR + LSTM para previsão de curto prazo do câmbio com variáveis macroeconômicas.",
      techs: ["Python","Statsmodels","TensorFlow","Keras"],
      github: "https://github.com/ErikCassiocs", demo: null
    },
    {
      icon: "receipt", tag: "Revenue Management",
      title: "Modelo de Precificação Dinâmica",
      desc: "Algoritmo de otimização de preços com base em elasticidade, sazonalidade e análise de concorrência.",
      techs: ["Python","SciPy","Power BI","SQL"],
      github: "https://github.com/ErikCassiocs", demo: null
    },
    {
      icon: "database", tag: "Automação · ETL",
      title: "Pipeline de Dados Econômicos",
      desc: "ETL automatizado que coleta, trata e armazena dados do Bacen, IBGE e IPEA para análise periódica.",
      techs: ["Python","SQL","SQLite","Schedule"],
      github: "https://github.com/ErikCassiocs", demo: null
    },
    {
      icon: "trending-up", tag: "Inflação · Econometria",
      title: "Análise de Componentes do IPCA",
      desc: "Decomposição e previsão dos subcomponentes do IPCA com modelos de séries temporais.",
      techs: ["Python","R","ARIMA","Prophet","Statsmodels"],
      github: "https://github.com/ErikCassiocs", demo: null
    },
  ]
};

/* ============================================
   STORAGE
   ============================================ */
const STORAGE_KEY = 'portfolio_artigos';

function getArtigos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      if (Array.isArray(saved) && saved.length > 0) return saved;
    }
  } catch(e) {}
  return CONFIG.artigosExemplo;
}

/* ============================================
   ÍCONES
   ============================================ */
const ICONS = {
  linkedin:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  github:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>`,
  twitter:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4l16 16M4 20L20 4"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>`,
  medium:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>`,
  email:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  arrow:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="9 18 15 12 9 6"/></svg>`,
  back:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="15 18 9 12 15 6"/></svg>`,
  external:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  menu:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  clock:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  cal:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  "chart-line":      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  "currency-dollar": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
  "brain":           `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.5 2A2.5 2.5 0 017 4.5A2.5 2.5 0 014.5 7A2.5 2.5 0 012 9.5V12a10 10 0 0020 0V9.5A2.5 2.5 0 0019.5 7A2.5 2.5 0 0017 4.5A2.5 2.5 0 0014.5 2h-5z"/><line x1="12" y1="12" x2="12" y2="22"/><path d="M7 12H2M22 12h-5"/></svg>`,
  "receipt":         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 7 12 3 4 7 4 17 12 21 20 17 20 7"/><line x1="12" y1="3" x2="12" y2="21"/></svg>`,
  "database":        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  "trending-up":     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
};

/* ============================================
   RENDER — HOME
   ============================================ */
function renderHome() {
  // stats
  document.getElementById('hero-stats').innerHTML = CONFIG.stats.map(s => `
    <div class="hero-stat">
      <div class="hero-stat-num">${s.num}</div>
      <div class="hero-stat-label">${s.label}</div>
    </div>`).join('');

  // latest articles
  const artigos = getArtigos();
  document.getElementById('home-articles').innerHTML = artigos.slice(0, 5).map((a, i) => `
    <div class="article-row" onclick="abrirArtigo('${a.id}')">
      <div class="art-index">0${i+1}</div>
      <div>
        <div class="art-cat">${a.cat}</div>
        <div class="art-title">${a.title}</div>
        <div class="art-desc">${a.desc}</div>
      </div>
      <div class="art-meta">${a.date}<br>${a.time} leit.</div>
    </div>`).join('');

  // featured projects (first 3)
  document.getElementById('home-projects').innerHTML = CONFIG.projetos.slice(0, 3).map((p, i) => `
    <div class="project-row">
      <div class="proj-index">0${i+1}</div>
      <div>
        <div class="proj-tag">${p.tag}</div>
        <div class="proj-title">${p.title}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-techs">${p.techs.map(t=>`<span class="proj-tech">${t}</span>`).join('')}</div>
      </div>
      <div class="proj-links">
        ${p.github ? `<a href="${p.github}" class="proj-link" target="_blank" rel="noopener">${ICONS.external} GitHub</a>` : ''}
        ${p.demo   ? `<a href="${p.demo}"   class="proj-link" target="_blank" rel="noopener">${ICONS.external} Demo</a>`   : ''}
      </div>
    </div>`).join('');
}

/* ============================================
   RENDER — SOBRE
   ============================================ */
function renderSobre() {
  document.getElementById('about-bio').innerHTML =
    CONFIG.bio.map((p, i) =>
      i === CONFIG.bio.length - 1
        ? `<blockquote class="about-quote">${p}</blockquote>`
        : `<p>${p}</p>`
    ).join('');

  document.querySelector('.skills-grid').innerHTML =
    CONFIG.skills.map(s => `<span class="skill-tag">${s}</span>`).join('');

  document.querySelector('.sidebar-atuacao').innerHTML =
    CONFIG.atuacao.map(i => `<div class="sidebar-item"><div class="sidebar-dot"></div>${i}</div>`).join('');

  document.querySelector('.sidebar-formacao').innerHTML =
    CONFIG.formacao.map(i => `<div class="sidebar-item"><div class="sidebar-dot"></div>${i}</div>`).join('');

  document.querySelector('.sidebar-refs').innerHTML =
    CONFIG.referencias.map(i => `<div class="sidebar-item"><div class="sidebar-dot"></div>${i}</div>`).join('');
}

/* ============================================
   RENDER — ARTIGOS
   ============================================ */
function renderArtigos(filtro = 'todos') {
  const artigos = getArtigos();
  const lista = filtro === 'todos' ? artigos : artigos.filter(a => a.filtro === filtro);
  document.getElementById('articles-list').innerHTML = lista.length === 0
    ? `<p style="color:var(--slate);padding:2rem 0;font-size:14px">Nenhum artigo nesta categoria.</p>`
    : lista.map((a, i) => `
      <div class="article-card" onclick="abrirArtigo('${a.id}')">
        <div class="article-card-inner">
          <div class="art-index">0${i+1}</div>
          <div>
            <div class="art-cat">${a.cat}</div>
            <div class="art-title">${a.title}</div>
            <div class="art-desc" style="margin-top:4px">${a.desc}</div>
            <div class="art-tags">${(a.tags||[]).map(t=>`<span class="art-tag">${t}</span>`).join('')}</div>
          </div>
          <div class="art-meta">${a.date}<br>${a.time} leit.</div>
        </div>
      </div>`).join('');
}

/* ============================================
   RENDER — ARTIGO (leitura)
   ============================================ */
function abrirArtigo(id) {
  const artigos = getArtigos();
  const a = artigos.find(x => x.id === id);
  if (!a) return;

  document.getElementById('artigo-cat').textContent   = a.cat;
  document.getElementById('artigo-title').textContent = a.title;
  document.getElementById('artigo-date').textContent  = a.date;
  document.getElementById('artigo-time').textContent  = a.time + ' de leitura';
  document.getElementById('artigo-tags').innerHTML    = (a.tags||[]).map(t=>`<span class="art-tag">${t}</span>`).join('');
  document.getElementById('artigo-body').innerHTML    = a.conteudo || '';
  navigate('artigo');
}

/* ============================================
   RENDER — PROJETOS
   ============================================ */
function renderProjetos() {
  document.getElementById('projects-grid').innerHTML = CONFIG.projetos.map((p, i) => `
    <div class="project-row">
      <div class="proj-index">0${i+1}</div>
      <div>
        <div class="proj-tag">${p.tag}</div>
        <div class="proj-title">${p.title}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-techs">${p.techs.map(t=>`<span class="proj-tech">${t}</span>`).join('')}</div>
      </div>
      <div class="proj-links">
        ${p.github ? `<a href="${p.github}" class="proj-link" target="_blank" rel="noopener">${ICONS.external} GitHub</a>` : ''}
        ${p.demo   ? `<a href="${p.demo}"   class="proj-link" target="_blank" rel="noopener">${ICONS.external} Demo</a>`   : ''}
      </div>
    </div>`).join('');
}

/* ============================================
   RENDER — CONTATO
   ============================================ */
function renderContato() {
  const links = [
    { key:'linkedin',  label:'LinkedIn',    handle: CONFIG.redes.linkedin.replace('https://','') },
    { key:'github',    label:'GitHub',      handle: CONFIG.redes.github.replace('https://','') },
    { key:'twitter',   label:'Twitter / X', handle:'@'+CONFIG.redes.twitter.split('/').pop() },
    { key:'instagram', label:'Instagram',   handle:'@'+CONFIG.redes.instagram.split('/').pop() },
    { key:'medium',    label:'Medium',      handle: CONFIG.redes.medium.replace('https://','') },
    { key:'email',     label:'E-mail',      handle: CONFIG.redes.email },
  ];
  document.querySelector('.contact-list').innerHTML = links.map(l => {
    const href = l.key==='email' ? `mailto:${CONFIG.redes.email}` : CONFIG.redes[l.key];
    return `<a href="${href}" class="contact-link" target="_blank" rel="noopener">
      <div class="contact-icon">${ICONS[l.key]}</div>
      <div class="contact-info">
        <div class="contact-name">${l.label}</div>
        <div class="contact-handle">${l.handle}</div>
      </div>
      <div class="contact-arrow">${ICONS.arrow}</div>
    </a>`;
  }).join('');

  document.querySelector('.sidebar-disponivel').innerHTML =
    CONFIG.disponivel.map(i => `<div class="sidebar-item"><div class="sidebar-dot"></div>${i}</div>`).join('');
}

/* ============================================
   NAVEGAÇÃO
   ============================================ */
function navigate(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('section-'+section).classList.add('active');
  const link = document.querySelector(`[data-section="${section}"]`);
  if (link) link.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('nav-links').classList.remove('open');
  document.getElementById('nav-toggle').innerHTML = ICONS.menu;
  if (section === 'artigos')  renderArtigos();
  if (section === 'projetos') renderProjetos();
  if (section === 'contato')  renderContato();
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.title = CONFIG.nome + ' — Economista Quantitativo';

  // nav
  document.querySelectorAll('.nav-links a[data-section]').forEach(link => {
    link.addEventListener('click', e => { e.preventDefault(); navigate(link.dataset.section); });
  });
  document.addEventListener('click', e => {
    const s = e.target.closest('[data-goto]');
    if (s) { e.preventDefault(); navigate(s.dataset.goto); }
  });

  // filtros artigos
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderArtigos(btn.dataset.filter);
    });
  });

  // mobile toggle
  const toggle   = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  toggle.innerHTML = ICONS.menu;
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.innerHTML = open ? ICONS.close : ICONS.menu;
  });

  // hero social
  document.getElementById('nav-linkedin').href = CONFIG.redes.linkedin;
  document.getElementById('nav-github').href   = CONFIG.redes.github;

  // footer
  document.getElementById('footer-year').textContent = '© ' + new Date().getFullYear();

  // render
  renderHome();
  renderSobre();
  renderContato();
  navigate('home');
});
