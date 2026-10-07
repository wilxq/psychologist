document.addEventListener('DOMContentLoaded', () => {
  const telInputs = document.querySelectorAll('input[type="tel"]');

  if (window.IMask) {
    telInputs.forEach((input) => {
      IMask(input, { mask: '+{7} (000) 000-00-00' });
    });
  }

  const forms = document.querySelectorAll('.form');

  if (forms.length === 0) return;

  const setError = (field, message) => {
    const wrapper = field.closest('.form__field');
    const error = wrapper ? wrapper.querySelector('.form__error') : null;
    if (error) error.textContent = message;
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
  };

  const rules = {
    name: {
      test: (value) => value.trim().length >= 2,
      message: 'Укажите имя',
    },
    phone: {
      test: (value) => value.replace(/\D/g, '').length >= 10,
      message: 'Укажите корректный телефон',
    },
    message: {
      test: (value) => value.trim().length >= 5,
      message: 'Опишите вопрос подробнее',
    },
  };

  forms.forEach((form) => {
    const isModalForm = Boolean(form.closest('.modal'));
    const submitButton = form.querySelector('button[type="submit"]');

    const validate = () => {
      let valid = true;

      Object.keys(rules).forEach((key) => {
        const field = form.elements[key];
        if (!field) return;
        const rule = rules[key];
        const ok = rule.test(field.value);
        setError(field, ok ? '' : rule.message);
        if (!ok) valid = false;
      });

      return valid;
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!validate()) return;
      form.reset();
      const trigger = isModalForm ? null : submitButton;
      document.dispatchEvent(new CustomEvent('booking:success', { detail: { trigger } }));
    });

    form.querySelectorAll('input, textarea').forEach((field) => {
      field.addEventListener('input', () => setError(field, ''));
    });
  });
});
