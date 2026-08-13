(() => {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

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
