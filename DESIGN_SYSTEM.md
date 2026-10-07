# Design System — «Пространство»

## Overview

Single-page landing for psychologist Anna Volkova. Dark, quiet, intentional. No photos — color, type, and whitespace do the work.

---

## 1. Color

### Primitive Tokens

```css
--color-warm-900: #14120f;
--color-warm-800: #1c1a16;
--color-warm-700: #25221d;
--color-warm-600: #302c26;
--color-warm-500: #3d3831;
--color-warm-400: #5a5349;
--color-warm-300: #9a9488;
--color-warm-200: #c4bdb2;
--color-warm-100: #e8e3d9;

--color-accent-500: #c17a5b;
--color-accent-600: #a86648;
--color-accent-700: #8c5238;
--color-accent-100: rgba(193, 122, 91, 0.12);
--color-accent-200: rgba(193, 122, 91, 0.25);
```

### Semantic Tokens

```css
:root {
  --color-bg: var(--color-warm-900);
  --color-bg-alt: var(--color-warm-800);
  --color-bg-elevated: var(--color-warm-700);
  --color-bg-overlay: rgba(20, 18, 15, 0.85);

  --color-text: var(--color-warm-100);
  --color-text-secondary: var(--color-warm-300);
  --color-text-muted: var(--color-warm-400);

  --color-accent: var(--color-accent-500);
  --color-accent-hover: var(--color-accent-600);
  --color-accent-subtle: var(--color-accent-100);
  --color-accent-muted: var(--color-accent-200);

  --color-border: var(--color-warm-600);
  --color-border-strong: var(--color-warm-500);
  --color-border-accent: var(--color-accent-700);

  --color-success: #6b8f71;
  --color-error: #b85c5c;
  --color-star: #c4bdb2;
}
```

---

## 2. Typography

### Type Scale

| Element     | Font        | Weight | Size      | Line Height | Letter Spacing |
|-------------|-------------|--------|-----------|-------------|----------------|
| Display     | Cormorant   | 600    | 3.5rem    | 1.1         | -0.01em        |
| H1          | Cormorant   | 600    | 2.75rem   | 1.15        | -0.01em        |
| H2          | Cormorant   | 500    | 2rem      | 1.2         | 0              |
| H3          | Inter       | 600    | 1.125rem  | 1.4         | 0.02em         |
| Body        | Inter       | 400    | 1rem      | 1.6         | 0              |
| Small       | Inter       | 400    | 0.875rem  | 1.5         | 0.01em         |
| Caption     | Inter       | 500    | 0.75rem   | 1.4         | 0.04em         |

### Font Families

```css
--font-heading: 'Cormorant', 'Georgia', serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

---

## 3. Spacing

```
Token    Value    Use Case
xs       0.25rem  Icon gap, inline spacing
sm       0.5rem   Compact element padding
md       0.75rem  Button padding-y, tight gaps
base     1rem     Standard gap, input padding
lg       1.5rem   Card padding, comfortable gap
xl       2rem     Section padding
2xl      3rem     Section gap
3xl      4rem     Hero padding, large vertical rhythm
4xl      6rem     Page section gap
```

---

## 4. Radii

```
Token    Value    Use Case
none     0        Images, full-width dividers
sm       0.25rem  Small badges, tags
md       0.5rem   Inputs, small buttons
lg       0.75rem  Cards, modal dialogs
xl       1rem     Large cards, featured blocks
full     9999px   Pills, avatars, toggle switches
```

---

## 5. Shadows

```
Token              Value                                    Use Case
shadow-sm          0 1px 2px rgba(0, 0, 0, 0.3)           Inputs, small elements
shadow-md          0 4px 12px rgba(0, 0, 0, 0.35)         Cards, dropdowns
shadow-lg          0 8px 24px rgba(0, 0, 0, 0.4)          Modals, floating elements
shadow-glow        0 0 20px rgba(193, 122, 91, 0.15)      Accent focus states
shadow-inset       inset 0 2px 4px rgba(0, 0, 0, 0.2)     Input inner shadow
```

---

## 6. Z-Index

```
Token       Value    Use Case
base        0        Default stacking
dropdown    100      Dropdown menus, tooltips
sticky      200      Sticky header
overlay     300      Modal overlay
modal       400      Modal dialog
toast       500      Toast notifications
```

---

## 7. Motion

```
Token              Value       Use Case
duration-fast      150ms       Hover, small transitions
duration-normal    300ms       Modals, accordion, slider
duration-slow      500ms       Page load reveals
easing-default     cubic-bezier(0.4, 0, 0.2, 1)
easing-decelerate  cubic-bezier(0, 0, 0.2, 1)
easing-accelerate  cubic-bezier(0.4, 0, 1, 1)
```

---

## 8. Component Tokens

### Buttons

```css
--btn-primary-bg: var(--color-accent);
--btn-primary-hover: var(--color-accent-hover);
--btn-primary-text: var(--color-bg);
--btn-primary-radius: var(--radius-md);
--btn-primary-padding-x: var(--space-lg);
--btn-primary-padding-y: var(--space-md);

--btn-secondary-bg: transparent;
--btn-secondary-border: var(--color-border-strong);
--btn-secondary-text: var(--color-text);
--btn-secondary-radius: var(--radius-md);
```

### Cards

```css
--card-bg: var(--color-bg-alt);
--card-border: var(--color-border);
--card-radius: var(--radius-lg);
--card-padding: var(--space-lg);
--card-shadow: var(--shadow-md);
```

### Forms

```css
--input-bg: var(--color-bg);
--input-border: var(--color-border);
--input-border-focus: var(--color-accent);
--input-text: var(--color-text);
--input-placeholder: var(--color-text-muted);
--input-radius: var(--radius-md);
--input-padding-x: var(--space-base);
--input-padding-y: var(--space-sm);
```

### Links

```css
--link-color: var(--color-accent);
--link-hover: var(--color-text);
--link-underline: var(--color-accent-muted);
```

---

## 9. Breakpoints

```
sm   640px   Mobile landscape, large phones
md   768px   Tablets
lg   1024px  Laptops, small desktops
xl   1280px  Desktops
2xl  1536px  Large screens
```

---

## 10. Accessibility

- Minimum contrast ratio: 4.5:1 for body text
- Minimum contrast ratio: 3:1 for large text and UI elements
- Focus visible outline: 2px solid var(--color-accent), offset 2px
- Reduced motion: respect `prefers-reduced-motion`
- Keyboard navigation: all interactive elements focusable

---

## 11. Checklist

- [x] Primitive tokens defined
- [x] Semantic tokens defined (dark mode only)
- [x] Component tokens defined
- [x] Typography scale defined
- [x] Spacing scale defined
- [x] Radii scale defined
- [x] Shadows defined
- [x] Contrast ratios checked (min 4.5:1)
- [x] Dark mode tokens correct
