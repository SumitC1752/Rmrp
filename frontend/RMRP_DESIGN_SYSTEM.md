# RMRP Global Trade — Design System Foundation

**Brand:** RMRP Global Trade | **Type:** B2B Corporate | **Industry:** Manufacturing, Export & Global Trade
**Version:** 1.0 | **Tone:** Premium · International · Trustworthy · Modern

---

## 1. Color System

### 1.1 Brand Palette

```css
/* Primary Colors */
--color-navy-900: #0B1F3A;     /* Deep Navy — Primary brand color */
--color-navy-800: #0F2A4F;     /* Dark Navy — Interactive states, hover */
--color-navy-700: #163A6B;     /* Mid Navy — Secondary backgrounds */
--color-navy-600: #1E4A87;     /* Accent Navy — Borders, dividers */
--color-navy-500: #2D5FA8;     /* Light Navy — Disabled states */

--color-gold-500: #D4AF37;     /* Premium Gold — Primary accent */
--color-gold-400: #DFC160;     /* Light Gold — Hover states */
--color-gold-300: #E8D18A;     /* Pale Gold — Background tints */
--color-gold-600: #B8952E;     /* Dark Gold — Active states, text on light */
--color-gold-700: #9A7B25;     /* Deep Gold — Pressed states */

/* Neutral Palette */
--color-white: #FFFFFF;
--color-gray-50:  #F8F9FB;     /* Page backgrounds */
--color-gray-100: #F0F2F5;     /* Card backgrounds, subtle sections */
--color-gray-200: #E2E5EA;     /* Borders, dividers */
--color-gray-300: #C8CDD4;     /* Disabled inputs, placeholder text */
--color-gray-400: #9EA4AE;     /* Secondary text, meta data */
--color-gray-500: #757B86;     /* Body text (low emphasis) */
--color-gray-600: #515761;     /* Body text (medium emphasis) */
--color-gray-700: #363A42;     /* Body text (primary) */
--color-gray-800: #22252A;     /* Headings on light backgrounds */
--color-gray-900: #111316;     /* Headings on white, deep text */

/* Semantic Colors */
--color-success: #0F7B3E;
--color-warning: #B8860B;
--color-error:   #C43B35;
--color-info:    #1A6BB5;
```

### 1.2 Color Application Rules

| Element | Primary | Hover | Active | Disabled |
|---------|---------|-------|--------|----------|
| **Primary Button (Gold)** | Gold-500 bg, White text | Gold-400 bg | Gold-600 bg | Gray-300 bg, Gray-400 text |
| **Secondary Button (Navy)** | Navy-900 bg, Gold-500 text (+ border gold) | Navy-800 bg | Navy-700 bg | Gray-200 bg, Gray-400 text |
| **Tertiary Button (Ghost)** | Transparent, Navy-900 text | Gray-100 bg | Gray-200 bg | Gray-300 text |
| **Section Backgrounds** | White (default), Gray-50 (alternate), Navy-900 (dark sections) | — | — | — |
| **Headings** | Gray-900 (light bg), White (dark bg), Gold-500 (accent headings) | — | — | — |
| **Body Text** | Gray-700 (light bg), Gray-100 (dark bg) | — | — | — |
| **Links (inline)** | Gold-600, underline | Gold-500 | Gold-700 | — |
| **Borders** | Gray-200 (default), Navy-600 (premium), Gold-300 (accent) | — | — | — |
| **Icons** | Gray-600 (default), Gold-500 (accent), Navy-900 (brand) | — | — | — |

### 1.3 Gradient Usage

```css
/* Hero gradient overlay */
--gradient-hero: linear-gradient(135deg, rgba(11, 31, 58, 0.95) 0%, rgba(11, 31, 58, 0.70) 50%, rgba(11, 31, 58, 0.30) 100%);

/* Gold gradient accent */
--gradient-gold: linear-gradient(135deg, #D4AF37 0%, #DFC160 50%, #B8952E 100%);

/* Section divider */
--gradient-divider: linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%);
```

### 1.4 Color Psychology Rationale

- **Deep Navy (#0B1F3A):** Authority, stability, trust — the standard for financial and trade institutions globally. Conveys depth, expertise, and international sophistication.
- **Premium Gold (#D4AF37):** Quality, prestige, value — signals premium-grade products and high standards without being ostentatious. Used sparingly as an accent, never as a dominant color.
- **White & Soft Grays:** Clean, open, professional — ensures readability and creates breathing room. Gray-50 for alternate sections maintains visual rhythm.
- **Gold as accent only:** Applied to CTAs, key data points, decorative dividers, and hover states. Never used for body text or large backgrounds. This restraint is what makes it feel premium rather than flashy.

---

## 2. Typography System

### 2.1 Font Stack

```css
--font-heading: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body:    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

- **Poppins** — Geometric, clean, authoritative. Used exclusively for headings and display text. Its balanced proportions convey stability and clarity.
- **Inter** — Highly legible at all sizes, optimized for screens. Used for body copy, labels, captions, and UI elements. Its open counters and tall x-height improve readability in dense B2B content.

### 2.2 Type Scale

```css
/* Fluid Type Scale — Desktop / Tablet / Mobile */

--text-xs:     clamp(0.75rem, 0.70rem + 0.25vw, 0.875rem);     /* 12–14px */
--text-sm:     clamp(0.875rem, 0.80rem + 0.35vw, 1rem);         /* 14–16px */
--text-base:   clamp(1rem, 0.90rem + 0.50vw, 1.125rem);         /* 16–18px */
--text-lg:     clamp(1.125rem, 1rem + 0.60vw, 1.25rem);         /* 18–20px */
--text-xl:     clamp(1.25rem, 1.10rem + 0.75vw, 1.5rem);        /* 20–24px */
--text-2xl:    clamp(1.5rem, 1.25rem + 1.25vw, 1.875rem);       /* 24–30px */
--text-3xl:    clamp(1.875rem, 1.50rem + 1.50vw, 2.25rem);      /* 30–36px */
--text-4xl:    clamp(2.25rem, 1.75rem + 2.00vw, 3rem);          /* 36–48px */
--text-5xl:    clamp(2.5rem, 2rem + 2.50vw, 3.75rem);           /* 40–60px */
--text-6xl:    clamp(3rem, 2.25rem + 3.00vw, 4.5rem);           /* 48–72px */
```

### 2.3 Type Hierarchy

| Level | Font | Size | Weight | Line Height | Letter Spacing | Case |
|-------|------|------|--------|-------------|----------------|------|
| **Hero Display** | Poppins | 6xl | 700 (Bold) | 1.10 | -0.02em | Default |
| **H1** | Poppins | 5xl | 700 (Bold) | 1.15 | -0.02em | Default |
| **H2** | Poppins | 4xl | 600 (Semibold) | 1.20 | -0.01em | Default |
| **H3** | Poppins | 3xl | 600 (Semibold) | 1.25 | -0.01em | Default |
| **H4** | Poppins | 2xl | 600 (Semibold) | 1.30 | 0em | Default |
| **H5** | Poppins | xl | 500 (Medium) | 1.35 | 0em | Default |
| **H6** | Poppins | lg | 500 (Medium) | 1.40 | +0.01em | Default |
| **Body Large** | Inter | lg | 400 (Regular) | 1.65 | 0em | Default |
| **Body Default** | Inter | base | 400 (Regular) | 1.70 | 0em | Default |
| **Body Small** | Inter | sm | 400 (Regular) | 1.65 | 0em | Default |
| **Caption** | Inter | xs | 400 (Regular) | 1.50 | +0.02em | Default |
| **Label** | Inter | sm | 500 (Medium) | 1.40 | +0.03em | Default |
| **Button Text** | Inter | sm | 600 (Semibold) | 1 | +0.04em | Uppercase |
| **Overline** | Inter | xs | 600 (Semibold) | 1.20 | +0.08em | Uppercase |
| **Stat Number** | Poppins | 5xl | 700 (Bold) | 1 | -0.02em | Default |
| **Stat Label** | Inter | sm | 500 (Medium) | 1.30 | +0.02em | Uppercase |
| **Nav Link** | Inter | sm | 500 (Medium) | 1 | 0em | Default |
| **Blockquote** | Inter | lg | 400 (Regular, Italic) | 1.60 | 0em | Default |
| **Micro (meta, legal)** | Inter | xs | 400 (Regular) | 1.40 | 0em | Default |

### 2.4 Typography Rules

- **Maximum line length for body text:** 75 characters (optimal for readability)
- **Heading line length:** As short as possible — avoid multi-line headings where practical
- **No Poppins for body text:** Strict separation. Poppins is display-only. Inter handles all reading text.
- **No gold colored body text:** Gold used only for headings, accents, stat numbers, and interactive elements.
- **Dark mode typography:** Headings white, body Gray-100, accent headings in Gold-400.
- **Kerning/tracking:** Headings get slightly negative tracking (-0.01 to -0.02em) for a refined, premium feel.

---

## 3. Spacing System

### 3.1 Base Unit: 4px

```css
--space-1:  0.25rem;   /*  4px */
--space-2:  0.5rem;    /*  8px */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-5:  1.25rem;   /* 20px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-14: 3.5rem;    /* 56px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-28: 7rem;      /* 112px */
--space-32: 8rem;      /* 128px */
```

### 3.2 Spacing Rules

| Context | Spacing Token | Notes |
|---------|--------------|-------|
| **Section padding (desktop)** | `--space-24` top & bottom | Generous breathing room |
| **Section padding (tablet)** | `--space-16` top & bottom | |
| **Section padding (mobile)** | `--space-12` top & bottom | |
| **Card padding** | `--space-8` | Internal padding |
| **Card gap (grid)** | `--space-8` | Between cards |
| **Content max-width** | 1280px | Constrained layout |
| **Text content max-width** | 800px | For reading comfort |
| **Button padding X** | `--space-8` | Horizontal padding |
| **Button padding Y** | `--space-4` | Vertical padding |
| **Stack gap (between components within a section)** | `--space-12` or `--space-16` | — |
| **Stack gap (between text elements)** | `--space-4` or `--space-6` | Typography rhythm |
| **List item spacing** | `--space-3` | Between list items |
| **Form field gap** | `--space-6` | Between form groups |
| **Icon + text gap** | `--space-3` | Inline icon + label |

### 3.3 Rhythm Principle

All vertical spacing follows a modular rhythm of 4px. Adjacent elements with different visual weights (e.g., a heading followed by body text) use a tighter gap (`--space-4` to `--space-6`) than elements at the same hierarchy level (e.g., section-to-section uses `--space-24`). This creates a predictable, calm vertical rhythm that feels intentional and unhurried.

---

## 4. Grid System

### 4.1 Layout Grid

```css
--container-max: 1280px;
--container-padding: 2rem;  /* 32px on desktop */
--container-padding-mobile: 1rem;  /* 16px on mobile */

--grid-columns: 12;
--grid-gap: 2rem;    /* 32px */
--grid-gap-mobile: 1rem;  /* 16px */
```

### 4.2 Column Distributions (Common Patterns)

| Layout | Desktop | Tablet | Mobile |
|--------|---------|--------|--------|
| **Full width content** | 12 col | 12 col | 12 col |
| **Two columns (equal)** | 6 + 6 | 6 + 6 | 12 (stacked) |
| **Two columns (60/40)** | 7 + 5 | 6 + 6 | 12 (stacked) |
| **Three columns** | 4 + 4 + 4 | 6 + 6 (wrap) | 12 (stacked) |
| **Four columns** | 3 + 3 + 3 + 3 | 6 + 6 (2 rows) | 12 (stacked) |
| **Sidebar layout** | 8 + 4 | 12 (sidebar below) | 12 (sidebar below) |
| **Product grid** | 3 + 3 + 3 + 3 | 6 + 6 | 12 |
| **Content + image** | 5 + 7 or 7 + 5 | 6 + 6 | 12 (stacked) |

### 4.3 Grid Behavior

- **All grids are fully fluid** within the container constraint
- **No fixed-width columns** — use proportional fractions
- **Gutters collapse on mobile** to maximize viewport utilization
- **Masonry / uneven grids** are used only for the product category listing (image-led cards)
- **Content-first approach:** text always precedes its corresponding image on mobile (logical content order)

---

## 5. Component Design Principles

Every component must adhere to these 6 design principles:

### 5.1 Hierarchy-Driven

Components should visually communicate their importance through size, color weight, and positioning. The user should never wonder "is this clickable?" or "what should I look at first?"

**Implementation:** Primary actions use Gold-500 bg. Secondary actions use Navy-900 bg with gold border. Tertiary actions are ghost/underline. Each step down reduces visual weight visibly.

### 5.2 Generous Negative Space

Premium B2B design breathes. Never crowd components. Padding should feel intentional and comfortable. When in doubt, add more space.

**Implementation:** Minimum 24px padding inside cards. Minimum 48px between major sections. Component gaps never below 16px on desktop.

### 5.3 Subtle Elevation

Surfaces should feel tactile but not aggressive. Shadows are soft and diffused. Only active/focused states use more pronounced shadows.

**Implementation:** 
```css
--shadow-sm:   0 1px 3px rgba(11, 31, 58, 0.06), 0 1px 2px rgba(11, 31, 58, 0.04);
--shadow-md:   0 4px 12px rgba(11, 31, 58, 0.08), 0 2px 4px rgba(11, 31, 58, 0.04);
--shadow-lg:   0 10px 30px rgba(11, 31, 58, 0.10), 0 4px 8px rgba(11, 31, 58, 0.05);
--shadow-xl:   0 20px 50px rgba(11, 31, 58, 0.12), 0 8px 16px rgba(11, 31, 58, 0.06);
--shadow-gold: 0 4px 14px rgba(212, 175, 55, 0.25);
```

### 5.4 Consistent Radius

Rounded corners should follow a system, not be arbitrary.

```css
--radius-none: 0;
--radius-sm:   4px;    /* Inputs, small UI elements */
--radius-md:   8px;    /* Cards, dropdowns, modals */
--radius-lg:   12px;   /* Large cards, hero sections */
--radius-xl:   16px;   /* Containers, modal dialogs */
--radius-full: 9999px; /* Pills, badges, avatars */
```

### 5.5 Border Restraint

Borders are used minimally. A premium brand separates sections with spacing and background changes (white → gray-50 → navy-900) rather than visible borders. When borders are used, they are `1px solid` and use the lightest available color.

**Implementation:** 
- Card borders: `1px solid var(--color-gray-200)`
- Input borders: `1.5px solid var(--color-gray-300)` — slightly thicker for visibility
- Interactive borders (hover/focus): `1.5px solid var(--color-gold-500)`
- Section dividers: Background color shift preferred; if border needed, a thin gold line (1px, 80px wide, centered)

### 5.6 Content-Led Layout

The component should never decorate purely for decoration. Every visual element must serve content comprehension or user flow. Gold accents are used to draw attention to key information (stats, CTAs, active states), not as random ornamentation.

---

## 6. Button Styles

### 6.1 Button Hierarchy

#### Primary Button (Gold — Highest Priority Action)

```
┌─────────────────────────────┐
│     REQUEST A QUOTATION      │
└─────────────────────────────┘
```
- Background: Gold-500
- Text: White, Inter 600, 14px, 0.04em tracking, uppercase
- Padding: 14px 32px (Y: 3.5, X: 8)
- Radius: 8px (md)
- Shadow: `--shadow-gold` on hover only
- Border: none
- Hover: Background Gold-400, lift transform (translateY(-2px)), shadow-gold
- Active: Background Gold-600, no transform
- Disabled: Background Gray-300, text Gray-400, no shadow, no hover effect

#### Secondary Button (Navy + Gold Outline — Medium Priority)

```
┌─────────────────────────────┐
│     EXPLORE OUR PRODUCTS     │
└─────────────────────────────┘
```
- Background: Navy-900
- Text: Gold-500, Inter 600, 14px, 0.04em tracking, uppercase
- Border: 1.5px solid Gold-500
- Padding: 14px 32px
- Radius: 8px (md)
- Shadow: none
- Hover: Background Navy-800, text Gold-400
- Active: Background Navy-700
- Disabled: Background transparent, border Gray-300, text Gray-400

#### Tertiary Button (Ghost/Link — Lower Priority)

```
┌─────────────────────────────┐
│     VIEW SPECIFICATIONS →    │
└─────────────────────────────┘
```
- Background: transparent
- Text: Gray-700 or Navy-900, Inter 500, 14px, uppercase (optional)
- Border: none
- Padding: 8px 0px
- Radius: none
- Hover: Text Gold-600, underline
- Active: Text Gold-700
- Disabled: Text Gray-400

#### Button Sizes

| Size | Padding Y | Padding X | Font Size | Icon Size |
|------|-----------|-----------|-----------|-----------|
| **Large** | 16px | 40px | 15px | 20px |
| **Default** | 14px | 32px | 14px | 18px |
| **Small** | 10px | 24px | 13px | 16px |

### 6.2 Button States (system-wide)

| State | Transform | Shadow | Cursor |
|-------|-----------|--------|--------|
| Default | none | none | pointer |
| Hover | translateY(-2px) | shadow-md or shadow-gold | pointer |
| Active | translateY(0px) | none | pointer |
| Focus-visible | ring: 2px Gold-400, offset 2px | — | pointer |
| Loading | opacity 0.7, spinner visible | as default | wait |
| Disabled | none | none | not-allowed |

### 6.3 Button Content Rules

- **Primary and Secondary buttons:** ALWAYS uppercase, semibold, tracked
- **Tertiary/ghost buttons:** Sentence case or uppercase based on context; trailing arrow (→) for navigational actions
- **Max character length:** 35 characters (shorter = better for buttons)
- **Icon buttons:** Only when the icon is universally understood (search, close, menu, arrow)
- **Button groups:** Primary on the right, secondary on the left; 16px gap between them

---

## 7. Card Styles

### 7.1 Card Types

#### Product Card

```
┌────────────────────────────────┐
│   ┌──────────────────────┐     │
│   │   Product Image      │     │
│   │   (16:9 aspect)      │     │
│   └──────────────────────┘     │
│                                │
│   Product Category Tag         │
│   Product Name — H5            │
│   Brief description (2 lines)  │
│                                │
│   Key spec badges              │
│   ● Purity 99.5%              │
│   ● Grade A                   │
│   ● 25kg bags                 │
│                                │
│   ┌─────────────────────────┐  │
│   │   REQUEST QUOTE        │  │
│   └─────────────────────────┘  │
└────────────────────────────────┘
```

**Specs:**
- Background: White
- Border: 1px solid Gray-200
- Radius: 12px (lg)
- Shadow: `--shadow-sm` default, `--shadow-lg` on hover
- Image: 16:9, object-fit cover, border-radius top corners only (12px)
- Padding: 24px (all sides)
- Hover: Shadow lift, subtle image scale (transform: scale(1.02)), gold border if selected
- Transition: 300ms ease-out

#### Certification / Trust Badge Card

```
┌──────────────────┐
│    ┌────────┐     │
│    │  Icon  │     │
│    └────────┘     │
│   ISO 9001:2015   │
│   Certified       │
└──────────────────┘
```

**Specs:**
- Background: White or Gray-50
- Border: 1px solid Gray-200 (or none for badge grid)
- Radius: 8px
- Padding: 20px
- Icon centered or left-aligned
- Text: centered, small, subtle

#### Stats Card (Counters)

```
┌──────────────────────────┐
│       250,000+           │  ← Poppins Bold, 5xl, Gold-500
│    Metric Tons Exported   │  ← Inter Medium, sm, uppercase, Navy or Gray
└──────────────────────────┘
```

**Specs:**
- Background: transparent (inverted on dark sections)
- No border, no shadow
- Number: Poppins Bold in Gold-500 (light bg) or Gold-400 (dark bg)
- Label: Inter Medium, uppercase, tracked, in Gray-600 (light) or Gray-100 (dark)
- Animated counter on scroll reveal

#### Testimonial Card

```
┌──────────────────────────────────┐
│  "RMRP has been our trusted      │
│   aluminum scrap supplier for   │
│   over 3 years. Consistent       │
│   quality, on-time delivery."    │
│                                  │
│   — Mohammed Al Fahim            │
│   Procurement Director           │
│   Gulf Metals Trading, Dubai     │
└──────────────────────────────────┘
```
**Specs:**
- Background: White
- Border: Left 3px solid Gold-500
- Radius: 8px
- Padding: 32px
- Shadow: `--shadow-sm`
- Quote mark: Decorative opening quote in Gold-200 (large, 48px)
- Attribution: Gray-700 name, Gray-400 title/company

### 7.2 Card Interaction Rules

- **Product cards:** Full card clickable (entire surface navigates to product page). Hover: shadow lift + image scale.
- **Info cards** (stats, certifications): No click interaction unless specified.
- **Clickable cards** must have cursor: pointer and focus-visible ring.

---

## 8. Form Styles

### 8.1 Input Fields

```
┌────────────────────────────────────────────┐
│  Label                                     │
│  ┌──────────────────────────────────────┐  │
│  │  Placeholder text                    │  │
│  └──────────────────────────────────────┘  │
│  Helper text or error message              │
└────────────────────────────────────────────┘
```

**Specs:**
- Input height: 48px (default), 56px (large)
- Border: 1.5px solid Gray-300
- Radius: 8px (md)
- Background: White
- Text: Inter, 16px, Gray-800 (entered) / Gray-400 (placeholder)
- Padding: 12px 16px
- Label: Inter Medium, 14px, Gray-700, 8px gap to input
- Focus state: Border changes to Gold-500, `--shadow-gold` (30% opacity), outline: none
- Error state: Border changes to `--color-error`, error message below in 12px Inter Regular, Error color
- Disabled state: Background Gray-100, text Gray-400, border Gray-200
- Success state: Border changes to `--color-success`

### 8.2 Textarea

Same as input, but:
- Min height: 120px
- Resize: vertical (only)
- Padding: 16px

### 8.3 Select / Dropdown

Same visual as input, with:
- Custom chevron icon (Gold-500) on the right
- Dropdown menu: White bg, Gray-200 border, radius 8px, `--shadow-lg`
- Option hover: Gray-100 background
- Selected option: Gold-50 background (subtle tint)

### 8.4 Checkboxes & Radio

- **Custom styled** (hide native, use SVG)
- Checkbox: 20px × 20px square, radius 4px, border 1.5px Gray-300
- Radio: 20px × 20px circle, radius full, border 1.5px Gray-300
- Checked: Gold-500 background, white checkmark (checkbox) or white dot (radio)
- Label: Inter, 15px, Gray-700, 10px gap

### 8.5 Form Layout

- **Single column** for all B2B forms (proven higher completion rate)
- **Two columns only** for fields that are naturally paired (e.g., City + Country, First Name + Last Name)
- **Submit button:** Full-width on mobile, right-aligned on desktop
- **Error summary:** At top of form on submission if errors exist
- **Success state:** Thank-you message replaces form (smooth transition)

### 8.6 Form Design Principles

- **Label every field** — no placeholder-as-label pattern (bad for B2B forms where users may return to check details)
- **Show errors inline** and in real-time where possible (valid email format, required field)
- **Minimize fields** — never ask for information you don't need. RFQ forms: product name, quantity, destination port, name, company, email, phone. That's it.
- **Progress indicator** for multi-step forms (like Request a Quote)
- **Autosave** form state so users don't lose data on page refresh

---

## 9. Iconography Style

### 9.1 Icon Set

- **Library:** Phosphor Icons (bold variant) — clean, consistent stroke weight, professional
- **Fallback:** Lucide Icons (similar style)
- **Stroke width:** 1.5px (bold variant) for all icons
- **Size scale:** 16px (inline), 20px (buttons), 24px (standalone), 32px (feature cards), 48px+ (hero/large illustrations)

### 9.2 Icon Usage Rules

| Context | Size | Color | Style |
|---------|------|-------|-------|
| Inline with text | 16px | Gray-600 (default), Gold-500 (accent) | Solid or outline based on emphasis |
| Button icon | 18–20px | Button text color | Outline, no fill |
| Feature card icon | 32px | Gold-500 (primary), Navy-900 (secondary) | Outline or duotone |
| Certification badge | 48–64px | As per certification | Official logo where applicable |
| Social media | 20px | Gray-400 (footer), White (dark bg) | Brand colors on hover |
| Navigation | 20px | Gray-600 | Outline |
| Decorative (stats, dividers) | Custom | Gold-500 or Navy-900 | Custom SVG lines/shapes |
| Loading spinner | 20–24px | Gold-500 or White | Animated spin |

### 9.3 Custom / Brand Icons (to be created)

- RMRP logo mark (could be an abstract R + globe motif)
- Trade/export icons: container ship, cargo plane, warehouse, globe, handshake, quality seal
- Product category icons: aluminum ingot, scrap pile, grain sack, jaggery block, spices

### 9.4 Icon Animation

- **Loading state:** Spinner rotates (Gold-500)
- **Hover on clickable icons:** Subtle scale (1.1) or color shift to Gold-500
- **Section reveal icons:** Fade-in with slight upward drift (no bounce, no rotation)
- **Success checkmarks:** Brief scale-in animation (0 → 1) with color fill

---

## 10. Motion Design Principles

### 10.1 Motion Philosophy

> "Motion should feel like a luxury hotel elevator — smooth, quiet, and intentional. Never like a carnival ride."

**Guiding principles:**

1. **Purposeful** — Every animation must serve content comprehension or user flow. No decoration.
2. **Subtle** — Durations are short (200-500ms). Easing is smooth. Effects never draw attention to themselves.
3. **Consistent** — All motion uses the same easing curve and duration rhythm.
4. **Performant** — Use `transform` and `opacity` only. No layout-triggering animations.
5. **Accessible** — Respect `prefers-reduced-motion`. Provide a static fallback.

### 10.2 Motion Tokens

```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);
--ease-out:      cubic-bezier(0.33, 1, 0.68, 1);
--ease-in:       cubic-bezier(0.32, 0, 0.67, 0);

--duration-fast:   200ms;     /* Color transitions, hover effects */
--duration-base:   400ms;     /* Standard reveal, open/close */
--duration-slow:   600ms;     /* Hero reveals, large elements */
--duration-xslow:  800ms;     /* Page transitions, large reveals */

--delay-stagger-baseline: 100ms;   /* Staggered children */
--delay-stagger-increment: 80ms;   /* Per-child delay increment */
```

### 10.3 Animation Types

| Type | Duration | Easing | Property | Usage |
|------|----------|--------|----------|-------|
| **Fade In** | 400ms | ease-out-expo | opacity + translateY(0) | Section reveals, content blocks |
| **Fade In Up** | 500ms | ease-out-expo | opacity: 0→1, Y: 24px→0 | Cards, grid items on scroll |
| **Fade In Down** | 400ms | ease-out-expo | opacity: 0→1, Y: -16px→0 | Dropdown menus, modals |
| **Scale In** | 300ms | ease-out-expo | opacity + scale(0.95→1) | Badges, tags appearing |
| **Slide In Right** | 400ms | ease-out | opacity + X: -20px→0 | Mobile nav drawer, side panels |
| **Lift (Hover)** | 200ms | ease-out | translateY(-2px), shadow | Card hover, button hover |
| **Counter** | 1500ms | ease-out-expo | number count-up | Stats counters on scroll reveal |
| **Parallax** | scroll-driven | — | translateY(speed * scroll) | Hero background, decorative elements |
| **Stagger** | 100ms baseline + 80ms per child | ease-out-expo | opacity + Y | Grid of cards, menu items |
| **Page transition** | 500ms | ease-in-out | opacity | Route change in Next.js |

### 10.4 Scroll-Triggered Reveals

**Implementation via Intersection Observer + Framer Motion:**

- **Threshold:** 0.15 (15% of element visible)
- **Once:** True (animate once, don't repeat)
- **Root margin:** -50px (slight delay before element enters viewport)
- **Sequence:** Sections reveal in order as user scrolls. Elements within a section stagger (children animate after parent).

### 10.5 Animation Behavior per Component

| Component | Entry Animation | Exit Animation | Hover Animation | Notes |
|-----------|----------------|----------------|-----------------|-------|
| Hero heading | Fade In Up, 600ms, stagger children (100ms) | — | — | First load only |
| Hero CTA buttons | Fade In, 400ms, delay 300ms after heading | — | Lift (transY -2px) | — |
| Product cards | Fade In Up, 500ms, stagger 80ms per card | — | Lift + shadow-lg, image scale(1.02) | — |
| Stats counters | Fade In, 400ms, then counter animation (1.5s) | — | — | Count from 0 |
| Section headings | Fade In Up, 500ms | — | — | — |
| Testimonials carousel | Fade In, 400ms | Fade Out, 300ms | — | Auto-advance with pause on hover |
| Navigation dropdown | Fade In Down, 300ms, stagger 50ms per item | Fade Out, 200ms | Background Gray-100 on item | — |
| Mobile menu | Slide In Right, 400ms | Slide Out Right, 300ms | Background Gray-100 | Overlay backdrop fade |
| Form submit | Button loading spinner (spin, 600ms) | Form fades out (300ms) → success message fades in (400ms) | — | — |
| Image gallery | Fade In, 400ms | Fade Out, 300ms | — | Click to switch image |
| Modal/lightbox | Fade In Down (backdrop + content), 350ms | Fade Out, 250ms | — | Escape to close |
| Page transition | Fade In, 500ms | Fade Out, 300ms | — | Next.js page transition |
| Map markers (global) | Scale In, 400ms, stagger 200ms | — | pulse animation (subtle) | — |
| Loading skeleton | Pulse opacity (1→0.6→1), 1.5s loop | — | — | — |

### 10.6 Motion Don'ts (Strictly Prohibited)

| Effect | Reason |
|--------|--------|
| Bounce / spring animations | Feels playful, not premium B2B |
| Rotate / flip on hover | Distracting, unprofessional |
| Particles / confetti | Gaming aesthetic |
| Flash / strobe effects | Accessibility violation |
| Auto-playing video | Slows load, annoys users |
| Horizontal scroll sections | Bad UX, disorienting |
| 3D transforms / perspective tilts | Gimmicky for a corporate site |
| Delayed load / "loading screen" | Premium sites load fast |
| Continuous parallax | Performance drain, motion sickness |
| Text typing animation | Too casual for B2B |
| Color cycling / gradient animation | Distracting, cheapens the brand |

### 10.7 Performance Budget

- **Animation frame rate:** 60fps target (use `will-change: transform` sparingly)
- **Animated properties allowed:** Only `opacity` and `transform` (translate, scale). Never `width`, `height`, `top`, `left`, `margin`, `padding`.
- **Max concurrent animations:** 20 (beyond this, performance degrades)
- **GPU acceleration:** Triggered via `translateZ(0)` or `will-change: transform` on animated elements
- **Scroll-based animations:** Debounced to requestAnimationFrame

---

## 11. Design Tokens (Summary)

```css
:root {
  /* Colors */
  --color-brand:       #0B1F3A;
  --color-accent:      #D4AF37;
  --color-bg:          #FFFFFF;
  --color-bg-alt:      #F8F9FB;
  --color-bg-dark:     #0B1F3A;
  --color-text:        #363A42;
  --color-text-light:  #9EA4AE;
  --color-text-inverse:#F0F2F5;
  --color-border:      #E2E5EA;

  /* Typography */
  --font-heading: 'Poppins', sans-serif;
  --font-body:    'Inter', sans-serif;

  /* Spacing */
  --space-unit: 4px;

  /* Radius */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm:  0 1px 3px rgba(11, 31, 58, 0.06);
  --shadow-md:  0 4px 12px rgba(11, 31, 58, 0.08);
  --shadow-lg:  0 10px 30px rgba(11, 31, 58, 0.10);
  --shadow-xl:  0 20px 50px rgba(11, 31, 58, 0.12);
  --shadow-gold: 0 4px 14px rgba(212, 175, 55, 0.25);

  /* Motion */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast:  200ms;
  --duration-base:  400ms;
  --duration-slow:  600ms;
}
```

---

*End of Design System Foundation — v1.0*

*Next step: Page-level layout wireframes and component composition.*
