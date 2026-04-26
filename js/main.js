/* ── Language ── */
const SUPPORTED_LANGS = ['ko', 'en', 'ja', 'zh'];
const DEFAULT_LANG = 'ko';

function detectLang() {
  const params = new URLSearchParams(location.search);
  if (params.get('lang') && SUPPORTED_LANGS.includes(params.get('lang'))) return params.get('lang');
  const stored = localStorage.getItem('mm_lang');
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const browser = (navigator.language || '').slice(0, 2).toLowerCase();
  if (browser === 'ja') return 'ja';
  if (browser === 'zh') return 'zh';
  if (browser === 'ko') return 'ko';
  return DEFAULT_LANG;
}

function applyLang(lang) {
  if (!translations[lang]) return;
  const t = translations[lang];
  localStorage.setItem('mm_lang', lang);

  document.documentElement.lang = t['html.lang'];
  document.title = t['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t['meta.description']);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const url = new URL(location.href);
  url.searchParams.set('lang', lang);
  history.replaceState({}, '', url);
}

/* ── Theme ── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('mm_theme', theme);
  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(cur === 'dark' ? 'light' : 'dark');
}

/* ── Navbar scroll ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ── Mobile menu ── */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('navLinks');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggle.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
    });
  });
}

/* ── Scroll animations ── */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

/* ── Floating cards animation ── */
function initFloatingCards() {
  const cards = document.querySelectorAll('.floating-card');
  cards.forEach((card, i) => {
    card.style.animationDelay = `${i * 0.4}s`;
  });
}

/* ── Email form ── */
function initEmailForm() {
  const form = document.getElementById('notifyForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('.notify-input');
    const btn = form.querySelector('.notify-btn');
    const lang = detectLang();
    const msg = translations[lang]?.['dl.success'] || 'Registered! 🎉';

    if (!input.value || !input.value.includes('@')) {
      input.classList.add('error');
      setTimeout(() => input.classList.remove('error'), 1200);
      return;
    }

    btn.textContent = msg;
    btn.disabled = true;
    input.value = '';
    setTimeout(() => {
      btn.textContent = translations[lang]?.['dl.notify'] || 'Notify Me';
      btn.disabled = false;
    }, 4000);
  });
}

/* ── Smooth scroll ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Counter animation ── */
function animateCounters() {
  // Simple pulse effect on stat numbers when they scroll into view
  const statsSection = document.querySelector('.hero-stats');
  if (!statsSection) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-num').forEach(el => {
          el.classList.add('pop');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  observer.observe(statsSection);
}

/* ── Phone mockup parallax ── */
function initParallax() {
  const phone = document.querySelector('.phone-mockup');
  if (!phone) return;
  window.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    phone.style.transform = `perspective(1200px) rotateY(${dx * 6}deg) rotateX(${-dy * 4}deg)`;
  }, { passive: true });
  window.addEventListener('mouseleave', () => {
    phone.style.transform = 'perspective(1200px) rotateY(0) rotateX(0)';
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLang();
  applyLang(lang);

  const savedTheme = localStorage.getItem('mm_theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initFloatingCards();
  initEmailForm();
  initSmoothScroll();
  animateCounters();
  initParallax();
});
