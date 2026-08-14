(() => {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  // --- i18n: español (ES) / English (en-GB) ---
  const I18N = {
    es: {
      'meta.title': 'Eneko — software de verdad, bien construido',
      'meta.description': 'Desarrollador en Computershare, afincado en Bristol. Aplicaciones web corporativas con .NET y React.',
      'nav.sobreMi': '01 sobre-mí',
      'nav.proyectos': '02 proyectos',
      'nav.experiencia': '03 experiencia',
      'nav.contacto': '04 contacto',
      'hero.whoami': 'whoami',
      'hero.title': 'Eneko —<br>\n      <span style="background:linear-gradient(100deg,#E7EAF0 8%,#5FC8F5 48%,#22D3EE 82%); -webkit-background-clip:text; background-clip:text; color:transparent;">software de verdad,<br>bien construido.</span>',
      'hero.subtitle': 'Desarrollador en Computershare, afincado en Bristol. Construyo aplicaciones web corporativas con .NET y React — arquitectura limpia, APIs cuidadas y frontends que no estorban.',
      'hero.ctaProjects': 'Ver proyectos',
      'hero.ctaContact': 'Contacto',
      'about.heading': 'Sobre mí',
      'about.p1': 'Trabajo en aplicaciones web corporativas: dominios con reglas de verdad, APIs mínimas bien tipadas y una capa de datos que aguanta. Me interesa la parte aburrida y decisiva — límites entre capas, validación, observabilidad, despliegues repetibles.',
      'about.p2': 'Fuera del trabajo todo mi código vive en la organización de GitHub <a href="https://github.com/Enekoiza" style="color:var(--accent,#22D3EE); border-bottom:1px solid rgba(34,211,238,.3);">Enekoiza</a>, con los paquetes NuGet compartidos publicados en GitHub Packages. Últimamente, observabilidad propia y apps iOS en SwiftUI.',
      'about.backend': 'Backend',
      'about.frontend': 'Frontend',
      'about.mobile': 'Mobile',
      'about.devops': 'DevOps',
      'projects.heading': 'Proyectos',
      'projects.eniflare.desc': 'Plataforma personal de observabilidad: agregación de logs y errores con ingesta desacoplada mediante <span style="font-family:\'JetBrains Mono\',monospace; font-size:14px; color:#C9D1DE;">Channel&lt;T&gt;</span> y un sink de Serilog publicado como paquete NuGet multi-framework.',
      'projects.viewRepo': 'ver repo',
      'projects.flatHolm.desc': 'Registro de reavistamientos de gaviotas anilladas en la isla de Flat Holm. Mapa interactivo en React + Leaflet sobre un backend .NET 10 con Clean Architecture.',
      'projects.flyway.desc': 'App de avistamiento de aves: cliente iOS nativo en Swift/SwiftUI y backend .NET con generación propia de teselas de mapa vía Planetiler y PMTiles.',
      'experience.heading': 'Experiencia',
      'experience.current.dates': '20XX — actualidad',
      'experience.current.role': 'Puesto actual',
      'experience.current.desc': 'Descripción breve de responsabilidades y logros. Sustituye este texto.',
      'experience.prev1.dates': '20XX — 20XX',
      'experience.prev1.role': 'Puesto anterior',
      'experience.prev1.place': 'Empresa · Ciudad',
      'experience.prev1.desc': 'Descripción breve de responsabilidades y logros. Sustituye este texto.',
      'experience.prev2.dates': '20XX — 20XX',
      'experience.prev2.role': 'Formación / primer puesto',
      'experience.prev2.place': 'Institución · Ciudad',
      'experience.prev2.desc': 'Descripción breve. Sustituye este texto.',
      'contact.heading': 'Contacto',
      'contact.intro': 'Abierto a hablar de proyectos .NET, React o iOS. La vía más rápida es el email.',
      'contact.email': 'Email',
      'footer.location': 'Bristol, UK · 51.45°N, 2.59°W'
    },
    en: {
      'meta.title': 'Eneko — real software, properly built',
      'meta.description': 'Developer at Computershare, based in Bristol. Corporate web applications with .NET and React.',
      'nav.sobreMi': '01 about',
      'nav.proyectos': '02 projects',
      'nav.experiencia': '03 experience',
      'nav.contacto': '04 contact',
      'hero.whoami': 'whoami',
      'hero.title': 'Eneko —<br>\n      <span style="background:linear-gradient(100deg,#E7EAF0 8%,#5FC8F5 48%,#22D3EE 82%); -webkit-background-clip:text; background-clip:text; color:transparent;">real software,<br>properly built.</span>',
      'hero.subtitle': 'Developer at Computershare, based in Bristol. I build corporate web applications with .NET and React — clean architecture, well-crafted APIs and frontends that stay out of the way.',
      'hero.ctaProjects': 'View projects',
      'hero.ctaContact': 'Contact',
      'about.heading': 'About me',
      'about.p1': 'I work on corporate web applications: domains with real business rules, small well-typed APIs and a data layer that holds up. I care about the boring, decisive part — boundaries between layers, validation, observability, repeatable deployments.',
      'about.p2': 'Outside work all my code lives in the GitHub organisation <a href="https://github.com/Enekoiza" style="color:var(--accent,#22D3EE); border-bottom:1px solid rgba(34,211,238,.3);">Enekoiza</a>, with shared NuGet packages published to GitHub Packages. Lately, my own observability tooling and iOS apps in SwiftUI.',
      'about.backend': 'Backend',
      'about.frontend': 'Frontend',
      'about.mobile': 'Mobile',
      'about.devops': 'DevOps',
      'projects.heading': 'Projects',
      'projects.eniflare.desc': 'A personal observability platform: log and error aggregation with decoupled ingestion via <span style="font-family:\'JetBrains Mono\',monospace; font-size:14px; color:#C9D1DE;">Channel&lt;T&gt;</span> and a Serilog sink published as a multi-framework NuGet package.',
      'projects.viewRepo': 'view repo',
      'projects.flatHolm.desc': 'A sightings log for ringed gulls on Flat Holm island. An interactive React + Leaflet map on top of a .NET 10 backend with Clean Architecture.',
      'projects.flyway.desc': 'A bird-watching app: a native iOS client in Swift/SwiftUI and a .NET backend with its own map tile generation via Planetiler and PMTiles.',
      'experience.heading': 'Experience',
      'experience.current.dates': '20XX — present',
      'experience.current.role': 'Current role',
      'experience.current.desc': 'Brief description of responsibilities and achievements. Replace this text.',
      'experience.prev1.dates': '20XX — 20XX',
      'experience.prev1.role': 'Previous role',
      'experience.prev1.place': 'Company · City',
      'experience.prev1.desc': 'Brief description of responsibilities and achievements. Replace this text.',
      'experience.prev2.dates': '20XX — 20XX',
      'experience.prev2.role': 'Education / first role',
      'experience.prev2.place': 'Institution · City',
      'experience.prev2.desc': 'Brief description. Replace this text.',
      'contact.heading': 'Contact',
      'contact.intro': 'Happy to talk about .NET, React or iOS projects. Email is the fastest way to reach me.',
      'contact.email': 'Email',
      'footer.location': 'Bristol, UK · 51.45°N, 2.59°W'
    }
  };

  const LANG_STORAGE_KEY = 'lang';

  function resolveInitialLanguage() {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
    return navigator.language && navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
  }

  function applyLanguage(lang) {
    const dict = I18N[lang];

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.documentElement.lang = lang === 'es' ? 'es' : 'en-GB';
    document.title = dict['meta.title'];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', dict['meta.description']);

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang-btn') === lang));
    });
  }

  function setLanguage(lang) {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    applyLanguage(lang);
  }

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang-btn')));
  });

  applyLanguage(resolveInitialLanguage());

  // --- Reveal on scroll ---
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = Array.from(document.querySelectorAll('[data-reveal]'));

  if (!reduced && targets.length) {
    document.body.classList.add('js-reveal');
    const show = (t) => t.classList.add('is-visible');

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          show(e.target);
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    targets.forEach((t) => {
      if (t.getBoundingClientRect().top < window.innerHeight) show(t);
      else io.observe(t);
    });

    if (document.documentElement.scrollHeight <= window.innerHeight + 4) {
      targets.forEach(show);
    }

    // Fallback: nothing stays hidden if the observer never fires.
    setTimeout(() => targets.forEach(show), 1200);
  }

  // --- Card glow following the cursor ---
  document.querySelectorAll('.project-card').forEach((card) => {
    const glow = card.querySelector('[data-glow]');
    if (!glow) return;
    card.addEventListener('mousemove', (ev) => {
      const r = card.getBoundingClientRect();
      glow.style.setProperty('--gx', (ev.clientX - r.left) + 'px');
      glow.style.setProperty('--gy', (ev.clientY - r.top) + 'px');
      glow.style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
    });
  });
})();
