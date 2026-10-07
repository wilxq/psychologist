document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.reviews__track');
  const slides = document.querySelectorAll('.reviews__slide');
  const prevButton = document.querySelector('.reviews__arrow--prev');
  const nextButton = document.querySelector('.reviews__arrow--next');
  const dotsContainer = document.querySelector('.reviews__dots');

  if (!track || slides.length === 0) return;

  let index = 0;
  const total = slides.length;

  const dots = Array.from(slides).map((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'reviews__dot';
    dot.setAttribute('aria-label', `Отзыв ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    if (dotsContainer) dotsContainer.appendChild(dot);
    return dot;
  });

  const render = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
  };

  const goTo = (i) => {
    index = (i + total) % total;
    render();
  };

  if (prevButton) prevButton.addEventListener('click', () => goTo(index - 1));
  if (nextButton) nextButton.addEventListener('click', () => goTo(index + 1));

  let startX = 0;

  track.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
  });

  track.addEventListener('touchend', (event) => {
    const delta = event.changedTouches[0].clientX - startX;
    if (Math.abs(delta) > 50) goTo(delta < 0 ? index + 1 : index - 1);
  });

  render();
});
