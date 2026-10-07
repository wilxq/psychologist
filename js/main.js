document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav__link');

  if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.classList.toggle('is-active', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const SECTION_SELECTOR = '.section';
  const VISIBLE_CLASS = 'is-visible';
  const INTERSECTION_THRESHOLD = 0.15;
  const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
  const sections = document.querySelectorAll(SECTION_SELECTOR);
  const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;

  const revealSections = () => {
    sections.forEach((section) => {
      section.classList.add(VISIBLE_CLASS);
    });
  };

  if (prefersReducedMotion) {
    revealSections();
  } else if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(VISIBLE_CLASS);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: INTERSECTION_THRESHOLD }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  } else {
    revealSections();
  }

  const faqQuestions = document.querySelectorAll('.faq__question');
  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq__item');
      const answer = item.querySelector('.faq__answer');
      const isOpen = item.classList.contains('is-open');

      faqQuestions.forEach((q) => {
        const qItem = q.closest('.faq__item');
        const qAnswer = qItem.querySelector('.faq__answer');
        qItem.classList.remove('is-open');
        qAnswer.classList.remove('is-open');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        answer.classList.add('is-open');
      }
    });
  });
});
