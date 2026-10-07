# Пространство

Сайт-визитка психолога **Анны Волковой**. Тревожность, отношения, самооценка.

Светлая тема, без фотографий, семь секций: hero, about, services, approach, education, reviews, contacts.

## Структура

```
├── context.md                          описание проекта
├── index.html
├── css/
│   ├── reset.css                       сброс и базовые значения
│   ├── layout.css                      сетка, обёртки, типографика
│   ├── sections.css                    стили семи секций
│   ├── animations.css                  переходы и анимации
│   └── responsive.css                  адаптив
├── js/
│   ├── main.js                         точка входа, меню, прокрутка
│   ├── modal.js                        модальное окно записи
│   ├── form.js                         валидация формы
│   └── slider.js                       слайдер отзывов
└── .github/
    ├── copilot-instructions.md         общие правила проекта
    └── instructions/
        ├── frontend.instructions.md   правила HTML/CSS
        └── javascript.instructions.md правила JS
```

## Запуск

Открыть `index.html` в браузере. Сборка не требуется.

## Правила

Без комментариев в коде, без inline-стилей, каждый селектор на новой строке, CSS-переменные в `:root`.

Подробности — в [context.md](context.md).
