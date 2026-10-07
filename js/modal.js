document.addEventListener('DOMContentLoaded', () => {
  const formModal = document.getElementById('modalForm');
  const successModal = document.getElementById('modalSuccess');
  const openButtons = document.querySelectorAll('[data-modal-open]');

  if (!formModal) return;

  let lastTrigger = null;
  let returnFocus = null;

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
  };

  const openFormModal = (trigger) => {
    lastTrigger = trigger;
    formModal.classList.add('is-open');
    lockScroll();
    trigger.setAttribute('aria-expanded', 'true');
    const closeButton = formModal.querySelector('.modal__close');
    if (closeButton) closeButton.focus();
  };

  const closeFormModal = () => {
    formModal.classList.remove('is-open');
    unlockScroll();
    if (lastTrigger) {
      lastTrigger.setAttribute('aria-expanded', 'false');
    }
  };

  const openSuccessModal = (trigger) => {
    if (!successModal) return;
    returnFocus = trigger || lastTrigger;
    successModal.classList.add('is-open');
    lockScroll();
    const closeButton = successModal.querySelector('.modal__close');
    if (closeButton) closeButton.focus();
  };

  const closeSuccessModal = () => {
    if (!successModal) return;
    successModal.classList.remove('is-open');
    unlockScroll();
    if (returnFocus) returnFocus.focus();
  };

  openButtons.forEach((button) => {
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => openFormModal(button));
  });

  const formCloseButton = formModal.querySelector('.modal__close');
  const formOverlay = formModal.querySelector('.modal__overlay');

  if (formCloseButton) formCloseButton.addEventListener('click', closeFormModal);
  if (formOverlay) formOverlay.addEventListener('click', closeFormModal);

  if (successModal) {
    const successCloseButton = successModal.querySelector('.modal__close');
    const successOverlay = successModal.querySelector('.modal__overlay');

    if (successCloseButton) successCloseButton.addEventListener('click', closeSuccessModal);
    if (successOverlay) successOverlay.addEventListener('click', closeSuccessModal);

    document.addEventListener('booking:success', (event) => {
      const trigger = event.detail ? event.detail.trigger : null;
      closeFormModal();
      openSuccessModal(trigger);
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (successModal && successModal.classList.contains('is-open')) {
      closeSuccessModal();
    } else if (formModal.classList.contains('is-open')) {
      closeFormModal();
    }
  });
});
