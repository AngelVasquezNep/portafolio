const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const root = document.documentElement;
const hero = document.querySelector<HTMLElement>('.hero');
const sections = document.querySelectorAll<HTMLElement>(
  '.work-section, .experience-section, .about-section, .contact-section',
);
const elements = document.querySelectorAll<HTMLElement>('[data-motion]');
let frame = 0;

const clamp = (value: number) => Math.min(1, Math.max(0, value));

function update() {
  frame = 0;
  if (reducedMotion.matches) return;

  const viewport = window.innerHeight;
  const heroProgress = clamp(window.scrollY / (hero?.offsetHeight || viewport));
  const sectionFrames = Array.from(sections, (section) => ({
    section,
    rect: section.getBoundingClientRect(),
  }));
  const elementFrames = Array.from(elements, (element) => ({
    element,
    top:
      element.dataset.motion === 'image'
        ? (element.closest('.project-image-wrap')?.getBoundingClientRect().top ??
          element.getBoundingClientRect().top)
        : element.getBoundingClientRect().top -
          (parseFloat(element.style.getPropertyValue('--motion-y')) || 0),
  }));

  hero?.style.setProperty('--hero-title-y', `${-72 * heroProgress}px`);
  hero?.style.setProperty('--hero-scale', `${1 - 0.1 * heroProgress}`);
  hero?.style.setProperty('--hero-copy-y', `${-38 * heroProgress}px`);
  hero?.style.setProperty('--hero-orbit-y', `${-115 * heroProgress}px`);

  sectionFrames.forEach(({ section, rect }) => {
    const progress = clamp((viewport - rect.top) / (viewport + rect.height));
    section.style.setProperty('--ambient-y', `${(0.5 - progress) * 86}px`);
  });

  elementFrames.forEach(({ element, top }) => {
    const kind = element.dataset.motion;
    const distance = kind === 'image' ? 0.82 : 0.58;
    const progress = clamp((viewport * 0.92 - top) / (viewport * distance));
    const eased = 1 - (1 - progress) ** 3;
    const remaining = 1 - eased;

    if (kind === 'image') {
      element.style.setProperty('--image-scale', `${1 + remaining * 0.16}`);
      element.style.setProperty('--image-y', `${remaining * 26 - eased * 10}px`);
      return;
    }

    const horizontal =
      kind === 'line'
        ? Math.min(150, window.innerWidth * 0.3)
        : kind === 'role'
          ? Math.min(110, window.innerWidth * 0.2)
          : 0;
    const fromRight = element.dataset.from === 'right' || element.matches('.role:nth-child(even)');
    element.style.setProperty('--motion-x', `${horizontal * remaining * (fromRight ? 1 : -1)}px`);
    element.style.setProperty('--motion-y', `${(kind === 'detail' ? 60 : 24) * remaining}px`);
    element.style.setProperty('--motion-opacity', `${0.12 + 0.88 * eased}`);
  });

  root.classList.add('motion-ready');
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(update);
}

window.addEventListener('scroll', schedule, { passive: true });
window.addEventListener('resize', schedule);
reducedMotion.addEventListener('change', () => {
  root.classList.remove('motion-ready');
  schedule();
});
schedule();
