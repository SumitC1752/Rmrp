# RMRP Global Trade — Component Architecture

**Framework:** Next.js 15 (App Router) | **Language:** TypeScript | **Styling:** Tailwind CSS | **Animation:** Framer Motion
**Architecture Pattern:** Atomic Design-inspired (Composed) | **Rendering:** Static (SSG) with selective ISR

---

## 1. Component Architecture Principles

### 1.1 Separation Philosophy

```
Pages          → Compose sections, provide data
Sections       → Compose components, manage layout
Components     → Pure UI, receive props, no data fetching
Primitives     → Atoms (buttons, inputs, text), highly reusable
```

### 1.2 Rules

| Rule | Rationale |
|------|-----------|
| **Components never fetch data** — data flows down via props from page-level | Pages are the single source of truth; components remain testable and portable |
| **Sections own layout** — spacing, grid placement, background colors | Section wrappers define the "slot" a component fills |
| **Primitives are framework-agnostic** — no Framer Motion, no `use client` unless necessary | Maximizes reusability, minimizes bundle size |
| **One component = one responsibility** | If a component does two things, split it |
| **Props interfaces always explicit** — no `any`, no implied defaults hidden | TypeScript-first; self-documenting |
| **Composition over configuration** — prefer `children` and slots over boolean props | More flexible, fewer prop-drilling issues |

---

## 2. Component Tree (Overview)

```
app/
├── (global)                        ← Providers, layout shell
├── pages/                          ← Page compositions
│   ├── HomePage
│   ├── AboutPage
│   └── ...
├── sections/                       ← Page-section composers
│   ├── home/
│   ├── about/
│   ├── products/
│   ├── services/
│   ├── quality/
│   ├── markets/
│   └── contact/
├── components/                     ← All reusable components
│   ├── global/                     ← Header, Footer, TopBar, MobileNav, Breadcrumbs
│   ├── shared/                     ← SectionHeader, CTA, StatsBar, TestimonialCard, etc.
│   ├── primitives/                 ← Button, Input, Badge, Card, Container, etc.
│   ├── product/                    ← ProductCard, ProductGrid, SpecsTable, etc.
│   ├── contact/                    ← ContactForm, InquiryForm, FAQAccordion, etc.
│   ├── animation/                  ← Reveal, Stagger, Counter, ParallaxWrapper, etc.
│   └── utility/                    ← ScrollToTop, SEOHead, SchemaMarkup, etc.
└── lib/                            ← Constants, types, helpers
```

---

## 3. Global Components

These render once per page load and wrap the entire application. They handle navigation, branding, and global chrome.

### 3.1 TopBar

**File:** `components/global/TopBar.tsx`
**Scope:** Renders above Header on all pages

**Responsibilities:**
- Display utility navigation: phone number, email, language switcher (EN/AR/ES/FR), downloads link
- Show "Request a Quote" quick-link button
- Collapse on scroll (transform: translateY(-100%) with 300ms ease) — reappears on scroll-up
- Sticky behavior managed via `useScrollDirection` utility hook

**Props Interface:**
```typescript
interface TopBarProps {
  email: string;
  phone: string;
  languages: { code: string; label: string; flag?: string }[];
  downloadUrl: string;
  quoteUrl: string;
}
```

**Reusability:** Single instance. Shared across all routes via root layout. Props sourced from `constants.ts`.

### 3.2 Header

**File:** `components/global/Header.tsx`
**Scope:** Primary navigation — renders on every page

**Responsibilities:**
- Logo (left), primary nav links (center), CTA button (right)
- Sticky on scroll: fixed positioning, background transitions from transparent → white (with shadow) on scroll past hero
- Manages mega menu open/close state for Products dropdown
- Handles mobile hamburger toggle (delegates to MobileNav)
- Accessibility: keyboard navigation, aria-expanded, focus trapping in mega menu

**Props Interface:**
```typescript
interface HeaderProps {
  logo: { src: string; alt: string; width: number; height: number };
  navItems: NavItem[];  // from constants.ts
  cta: { label: string; href: string };
  transparent?: boolean;  // true on home hero, false on inner pages
}
```

**Sub-components (internal):**
- `Logo` — Link to home, responsive image sizing
- `NavLink` — Single nav item, handles active state via `usePathname()`
- `MegaMenu` — Two-column dropdown for Products (Metals | Food & Agro | Grains & Flour)
- `MobileMenuToggle` — Hamburger icon button

**Reusability:** Single instance. `transparent` prop allows hero overlay behavior on home vs solid header on inner pages.

### 3.3 MobileNav

**File:** `components/global/MobileNav.tsx`
**Scope:** Slide-out navigation drawer for mobile/tablet

**Responsibilities:**
- Slide-in from right (Framer Motion, 400ms ease-out), backdrop overlay
- Accordion for Products (expandable by division)
- All primary links + utility links at bottom
- "Request a Quote" sticky CTA at bottom of drawer
- Focus trap when open, close on Escape, close on backdrop click
- Body scroll lock when open

**Props Interface:**
```typescript
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  phone: string;
  email: string;
  quoteUrl: string;
}
```

**Reusability:** Single instance. Controlled by Header parent.

### 3.4 Breadcrumbs

**File:** `components/global/Breadcrumbs.tsx`
**Scope:** All inner pages (not home)

**Responsibilities:**
- Auto-generate breadcrumb trail from route pathname
- Show: `Home > Parent > Current Page`
- Last item is plain text (not a link), all prior items are links
- Uses `usePathname()` and a route-label mapping from `constants.ts`
- Microdata schema (JSON-LD) for breadcrumb structured data

**Props Interface:**
```typescript
interface BreadcrumbsProps {
  customLabels?: Record<string, string>;  // override auto-generated labels
  className?: string;
}
```

**Reusability:** Renders on every inner page. Can accept customLabels for edge cases.

### 3.5 Footer

**File:** `components/global/Footer.tsx`
**Scope:** Bottom of every page

**Responsibilities:**
- 4-column layout: About RMRP | Products | Quick Links | Contact
- Products column: grouped by division (Metals, Food & Agro, Grains & Flour)
- Contact column: phone, email, address, business hours
- Social media links (LinkedIn, YouTube, Facebook, Instagram)
- Bottom bar: copyright, privacy, terms, cookies, tagline
- Newsletter signup (optional, simple email input + submit)

**Props Interface:**
```typescript
interface FooterProps {
  companyName: string;
  tagline: string;
  aboutText: string;
  products: { division: string; items: { label: string; href: string }[] }[];
  quickLinks: { label: string; href: string }[];
  contact: { phone: string; email: string; address: string; hours: string };
  social: { platform: string; url: string; icon: string }[];
  year?: number;  // defaults to current year
}
```

**Reusability:** Single instance. Data from constants.

---

## 4. Layout Components

These are structural wrappers that provide consistent spacing, backgrounds, and grid behavior across sections.

### 4.1 Section

**File:** `components/shared/Section.tsx`
**Scope:** Wraps every major page section

**Responsibilities:**
- Provides consistent horizontal padding (container constraint: 1280px max-width + 32px padding)
- Provides vertical spacing (`py-24` desktop, `py-16` tablet, `py-12` mobile)
- Accepts background color variant: `white`, `gray`, `navy`, `gold-tint`
- Handles background color transitions between sections (smooth edges)

**Props Interface:**
```typescript
interface SectionProps {
  children: React.ReactNode;
  bgColor?: 'white' | 'gray' | 'navy' | 'gold-tint';
  className?: string;
  id?: string;  // for anchor links / scroll-to
}
```

**Reusability:** Every page section. 40+ instances across the site.

### 4.2 Container

**File:** `components/shared/Container.tsx`
**Scope:** Inner content wrapper within a Section

**Responsibilities:**
- Constrains content to 1280px max-width
- Centers content with auto margins
- Optional `narrow` variant (800px max-width for text-heavy content)
- Optional `full` variant (edge-to-edge for maps, hero)

**Props Interface:**
```typescript
interface ContainerProps {
  children: React.ReactNode;
  variant?: 'default' | 'narrow' | 'full';
  className?: string;
}
```

**Reusability:** Every content block. Hundreds of instances.

### 4.3 Grid

**File:** `components/shared/Grid.tsx`
**Scope:** Creates consistent grid layouts

**Responsibilities:**
- 12-column CSS grid implementation
- Responsive column control via props: `cols` takes `{ desktop, tablet?, mobile? }`
- Gap control via `gap` prop
- Optional `alignItems` and `justifyContent` for vertical/horizontal alignment

**Props Interface:**
```typescript
interface GridProps {
  children: React.ReactNode;
  cols: { desktop: number; tablet?: number; mobile?: number };
  gap?: SpacingToken;  // from design system
  alignItems?: 'start' | 'center' | 'stretch';
  className?: string;
}
```

**Reusability:** Product grids, team grids, feature grids, certification grids.

### 4.4 SplitLayout

**File:** `components/shared/SplitLayout.tsx`
**Scope:** Two-column layouts (content + media)

**Responsibilities:**
- Two-column split: configurable ratio (50/50, 60/40, 40/60)
- Content on left or right (controlled via `order` prop)
- Responsive: stacks on mobile, image above or below based on `mediaPosition`
- Image or Video slot via `media` prop (ReactNode)
- Optional media border-radius and shadow

**Props Interface:**
```typescript
interface SplitLayoutProps {
  children: React.ReactNode;  // content side
  media: React.ReactNode;     // image/video side
  ratio?: [number, number];   // e.g., [5, 7] for 5/12 + 7/12
  order?: 'content-first' | 'media-first';
  mediaPosition?: 'top' | 'bottom';  // mobile stacking order
  mediaRounded?: boolean;
  className?: string;
}
```

**Reusability:** About page sections, product highlights, service descriptions, quality process steps.

---

## 5. Shared Components

Reusable across multiple pages and sections. These are the building blocks of page content.

### 5.1 SectionHeader

**File:** `components/shared/SectionHeader.tsx`
**Scope:** Headline block at the top of each section

**Responsibilities:**
- Renders overline label (optional, uppercase, tracked), heading, and subtitle
- Centered (default) or left-aligned (`align` prop)
- Gold divider line between overline and heading (80px, centered on centered align)
- Optional CTA button below subtitle
- Responsive heading sizing

**Props Interface:**
```typescript
interface SectionHeaderProps {
  overline?: string;
  heading: string;
  subtitle?: string;
  align?: 'center' | 'left';
  cta?: { label: string; href: string };
  light?: boolean;  // white text on dark backgrounds
}
```

**Reusability:** Every section heading. 25+ instances.

### 5.2 CTA (Call to Action Block)

**File:** `components/shared/CTA.tsx`
**Scope:** Prompts user action at bottom of sections

**Responsibilities:**
- Heading + supporting text + one or two buttons
- Full-width background section (navy or gold variant)
- Optional icon/illustration on one side
- Responsive: stacks on mobile, side-by-side on desktop

**Props Interface:**
```typescript
interface CTAProps {
  heading: string;
  text: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: 'navy' | 'gold';
  illustration?: React.ReactNode;
}
```

**Reusability:** Home page, bottom of product categories, services page, contact preview.

### 5.3 StatsBar

**File:** `components/shared/StatsBar.tsx`
**Scope:** Animated statistics counters

**Responsibilities:**
- Horizontal row of 3–6 stat items
- Each item: animated number (counts up on scroll reveal) + label
- Accepts `variant`: `light` (white bg, gold numbers) or `dark` (navy bg, gold numbers)
- Auto-adjusts column count based on number of items
- Counter animation via Framer Motion (1.5s duration, ease-out-expo)

**Props Interface:**
```typescript
interface StatsBarProps {
  stats: { value: number; suffix?: string; prefix?: string; label: string }[];
  variant?: 'light' | 'dark';
  columns?: 3 | 4 | 6;
}
```

**Reusability:** Home hero, about page, quality page.

### 5.4 BadgeGrid

**File:** `components/shared/BadgeGrid.tsx`
**Scope:** Displays certification and trust badges

**Responsibilities:**
- Grid of certification/logo badges (ISO, FSSAI, HACCP, trade memberships)
- Badges rendered as images or SVG icons
- Optional tooltip showing badge details on hover
- Responsive grid: auto-fill, min 120px column width

**Props Interface:**
```typescript
interface BadgeGridProps {
  badges: { src: string; alt: string; label?: string; href?: string }[];
  variant?: 'light' | 'dark';
}
```

**Reusability:** About page certifications, quality page, footer, product pages.

### 5.5 TestimonialCard

**File:** `components/shared/TestimonialCard.tsx`
**Scope:** Single testimonial display

**Responsibilities:**
- Quote text, decorative opening quote mark (Gold-200, large)
- Attribution: name, title, company, logo (optional)
- Left gold border accent

**Props Interface:**
```typescript
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  logo?: string;
  variant?: 'default' | 'compact';
}
```

**Reusability:** Testimonials carousel on home, about page, quality page.

### 5.6 TestimonialsCarousel

**File:** `components/shared/TestimonialsCarousel.tsx`
**Scope:** Auto-advancing carousel of testimonials

**Responsibilities:**
- Horizontal carousel with 1 card visible (centered), adjacent cards partially visible (peek)
- Auto-advance every 6 seconds, pause on hover
- Dots navigation + prev/next arrows
- Framer Motion AnimatePresence for slide transitions
- Accessible: keyboard navigation, aria-live region

**Props Interface:**
```typescript
interface TestimonialsCarouselProps {
  testimonials: TestimonialCardProps[];
  autoPlay?: boolean;  // defaults true
  interval?: number;   // defaults 6000
}
```

**Reusability:** Home page, about page.

### 5.7 Accordion

**File:** `components/shared/Accordion.tsx`
**Scope:** Expandable content sections (FAQ, process steps)

**Responsibilities:**
- Vertical list of items with click-to-expand behavior
- Single or multiple open items (controlled via `type` prop)
- Smooth height animation on open/close (Framer Motion, layout animation)
- Chevron icon rotates 180° on open
- Accessibility: proper aria-expanded, role=button, keyboard Enter/Space

**Props Interface:**
```typescript
interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
  type?: 'single' | 'multiple';
  defaultOpen?: number | number[];
}
```

**Reusability:** FAQ page, export process, quality process, product details.

### 5.8 ImageGallery

**File:** `components/shared/ImageGallery.tsx`
**Scope:** Product image gallery / lightbox

**Responsibilities:**
- Grid of thumbnails (2-5 images)
- Click thumbnail to open full-size in lightbox modal
- Lightbox: overlay, close button, prev/next arrows, keyboard navigation
- Image loading: next/image with blur placeholder

**Props Interface:**
```typescript
interface ImageGalleryProps {
  images: { src: string; alt: string; width: number; height: number }[];
  aspectRatio?: string;  // defaults '16:9'
}
```

**Reusability:** All 12 product detail pages, about infrastructure page.

---

## 6. Product Components

### 6.1 ProductCard

**File:** `components/product/ProductCard.tsx`
**Scope:** Single product in a listing grid

**Responsibilities:**
- Image (16:9), category tag, product name, 2-line description
- Key specification badges (purity, grade, packaging)
- "Request Quote" CTA button
- Full card clickable → navigates to product detail page
- Hover: shadow lift, image scale(1.02), gold border activation
- Framer Motion: stagger reveal on scroll

**Props Interface:**
```typescript
interface ProductCardProps {
  product: {
    slug: string;
    name: string;
    category: string;
    description: string;
    image: { src: string; alt: string };
    specs: { label: string; value: string }[];
  };
  index?: number;  // for stagger delay calculation
}
```

**Reusability:** Master product listing, category pages, featured products on home, related products on detail pages.

### 6.2 ProductGrid

**File:** `components/product/ProductGrid.tsx`
**Scope:** Filterable grid of product cards

**Responsibilities:**
- Renders `ProductCard` items in responsive grid (4 cols desktop, 2 tablet, 1 mobile)
- ProductFilterBar integrated above grid
- Empty state when no products match filter
- AnimatePresence for filter transitions
- Stagger animation on initial load

**Props Interface:**
```typescript
interface ProductGridProps {
  products: ProductCardProps['product'][];
  loading?: boolean;
}
```

**Reusability:** `/products` page, `/products/metals`, `/products/food-agro`, `/products/grains-flour`.

### 6.3 ProductFilterBar

**File:** `components/product/ProductFilterBar.tsx`
**Scope:** Category/tag filter for product grid

**Responsibilities:**
- Row of filter buttons: All | Metals | Food & Agro | Grains & Flour
- Active state: gold underline / filled button
- Optional additional filters (grade, certification, etc.)
- Emits `onFilterChange` callback to parent

**Props Interface:**
```typescript
interface ProductFilterBarProps {
  categories: { slug: string; label: string; count?: number }[];
  activeCategory: string;
  onFilterChange: (slug: string) => void;
}
```

**Reusability:** Product master page, embedded in ProductGrid.

### 6.4 SpecificationsTable

**File:** `components/product/SpecificationsTable.tsx`
**Scope:** Key-value spec display on product detail pages

**Responsibilities:**
- Two-column table: parameter | value
- Clean, minimal styling: alternating row backgrounds (gray-50)
- Responsive: on mobile, converts to stacked layout (label above value)
- Optional badge for certifications inline with specs

**Props Interface:**
```typescript
interface SpecificationsTableProps {
  specs: { label: string; value: string; highlight?: boolean }[];
  title?: string;
}
```

**Reusability:** All 12 product detail pages, quality page (product testing specs).

### 6.5 PackagingOptions

**File:** `components/product/PackagingOptions.tsx`
**Scope:** Displays available packaging variants

**Responsibilities:**
- Card grid: each card shows packaging type (25kg bag, 500g pouch, jumbo bag, etc.)
- Each card: icon + packaging type + weight + MOQ
- Optional "custom packaging available" note
- Hover: shadow lift

**Props Interface:**
```typescript
interface PackagingOptionsProps {
  options: { type: string; weight: string; moq: string; image?: string }[];
  customAvailable?: boolean;
}
```

**Reusability:** All product detail pages.

### 6.6 RelatedProducts

**File:** `components/product/RelatedProducts.tsx`
**Scope:** Cross-sell section at bottom of product detail pages

**Responsibilities:**
- Grid of 3-4 ProductCards from the same division
- Excludes current product
- Section header: "You May Also Like" or "Related Products"
- Section wrapper with `bg="gray"`

**Props Interface:**
```typescript
interface RelatedProductsProps {
  currentSlug: string;
  division: string;
  products: ProductCardProps['product'][];
}
```

**Reusability:** All 12 product detail pages.

### 6.7 CategoryNav

**File:** `components/product/CategoryNav.tsx`
**Scope:** Side navigation for product categories (desktop) / horizontal tabs (mobile)

**Responsibilities:**
- Lists all product categories with links
- Highlights active category based on current route
- Desktop: vertical sidebar; Mobile: horizontal scrollable tabs
- Collapsible subcategories

**Props Interface:**
```typescript
interface CategoryNavProps {
  categories: { slug: string; label: string; count?: number; children?: CategoryNode[] }[];
  activeSlug: string;
}
```

**Reusability:** Product listing page, category pages.

---

## 7. Contact Components

### 7.1 ContactForm

**File:** `components/contact/ContactForm.tsx`
**Scope:** Primary contact/inquiry form

**Responsibilities:**
- Fields: Name, Email, Phone, Company, Country (select), Product Interest (multi-select), Message
- Client-side validation (required fields, email format, phone format)
- Real-time error display per field
- Submit → loading state → success state (form replaced with thank-you)
- POST to API route or form service
- reCAPTCHA or honeypot spam protection

**Props Interface:**
```typescript
interface ContactFormProps {
  type: 'general' | 'product-inquiry' | 'partnership';
  productOptions?: { value: string; label: string }[];
  onSubmit: (data: FormData) => Promise<{ success: boolean; message?: string }>;
}
```

**Reusability:** Contact page, request-quote page, embedded in product detail pages (variant).

### 7.2 QuickInquiryForm

**File:** `components/contact/QuickInquiryForm.tsx`
**Scope:** Compact form embedded on product pages

**Responsibilities:**
- Minimal fields: Product (pre-filled), Quantity, Destination Port, Email, WhatsApp number
- Single row layout on desktop, stacked on mobile
- "Submit" CTA triggers API call
- On success: "Thank you — we'll respond within 4 hours"

**Props Interface:**
```typescript
interface QuickInquiryFormProps {
  productName: string;
  onSubmit: (data: Partial<FormData>) => Promise<{ success: boolean }>;
}
```

**Reusability:** Bottom of every product detail page.

### 7.3 WhatsAppButton

**File:** `components/contact/WhatsAppButton.tsx`
**Scope:** Sticky WhatsApp CTA

**Responsibilities:**
- Fixed position, bottom-right corner
- Pre-filled message template: "Hi RMRP Global Trade! I'm interested in [product]."
- Dynamically appends product name based on current page (via usePathname)
- Shows/hides based on scroll distance (hide at very top of hero)
- Pulse notification dot (optional)

**Props Interface:**
```typescript
interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;  // fallback template
  showOnHome?: boolean;  // defaults true
}
```

**Reusability:** Single instance in root layout.

### 7.4 ContactInfo

**File:** `components/contact/ContactInfo.tsx`
**Scope:** Displays business contact details

**Responsibilities:**
- Icon + text list: Address, Phone, Email, Hours
- Each item is clickable (maps link, tel:, mailto:)
- Consistent iconography (Phosphor icons, bold)

**Props Interface:**
```typescript
interface ContactInfoProps {
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl?: string;
  variant?: 'vertical' | 'horizontal';
}
```

**Reusability:** Contact page, footer, about page.

### 7.5 FAQAccordion

**File:** `components/contact/FAQAccordion.tsx`
**Scope:** FAQ section on contact page (and standalone FAQ page)

**Responsibilities:**
- Groups FAQ items by category (Shipping, Payments, Products, Orders)
- Accordion behavior (uses Accordion shared component)
- Search/filter functionality (optional)

**Props Interface:**
```typescript
interface FAQAccordionProps {
  categories: { label: string; items: { question: string; answer: string }[] }[];
  showSearch?: boolean;
}
```

**Reusability:** Contact page, FAQ page.

### 7.6 MapEmbed

**File:** `components/contact/MapEmbed.tsx`
**Scope:** Location map display

**Responsibilities:**
- Google Maps or Mapbox embed
- Pin marker at company location
- Static during page load (no scrolling interaction unless engaged)
- Lazy loads below the fold
- Click to open in Google Maps app

**Props Interface:**
```typescript
interface MapEmbedProps {
  address: string;
  lat: number;
  lng: number;
  zoom?: number;
}
```

**Reusability:** Contact page, about page (infrastructure).

---

## 8. Animation Components

These are thin wrappers around Framer Motion that handle animation orchestration. They add NO styling — only motion behavior.

### 8.1 Reveal

**File:** `components/animation/Reveal.tsx`
**Scope:** Fade-in-up animation on scroll

**Responsibilities:**
- Wraps children in a motion.div with fade-in-up on viewport entry
- Accepts `direction` (up, down, left, right, none)
- Accepts `delay` for sequencing
- Accepts `duration` override
- Respects `prefers-reduced-motion` (renders children without animation)
- IntersectionObserver: once=true, threshold=0.15

**Props Interface:**
```typescript
interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;  // px to travel, defaults 24
  className?: string;
}
```

**Reusability:** Every section, every card, every heading. 100+ instances.

### 8.2 Stagger

**File:** `components/animation/Stagger.tsx`
**Scope:** Staggered reveal for child elements

**Responsibilities:**
- Wraps children (expected to be multiple items)
- Each child fades in sequentially with stagger delay
- Children must accept an `index` or `i` prop for stagger calculation
- Uses Framer Motion `variants` with `staggerChildren`

**Props Interface:**
```typescript
interface StaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;   // per-child delay, defaults 80ms
  initialDelay?: number;   // before first child, defaults 100ms
  direction?: 'up' | 'down' | 'none';
}
```

**Reusability:** Product grids, team grids, feature card grids, stat bars.

### 8.3 Counter

**File:** `components/animation/Counter.tsx`
**Scope:** Animated number counter

**Responsibilities:**
- Animates from 0 (or `from` prop) to `to` value
- Duration: 1.5s, ease-out-expo
- Triggers on scroll reveal via useInView
- Accepts prefix ($, +) and suffix (+, MT, %, K)
- Renders as inline span

**Props Interface:**
```typescript
interface CounterProps {
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  format?: boolean;  // comma-separated thousands
}
```

**Reusability:** StatsBar, hero stats, quality page metrics.

### 8.4 ParallaxWrapper

**File:** `components/animation/ParallaxWrapper.tsx`
**Scope:** Subtle parallax scroll effect on background elements

**Responsibilities:**
- Translates children on scroll based on speed factor
- Speed: 0 (static) to 1 (scroll speed) — defaults 0.3
- Uses `useScroll` + `useTransform` from Framer Motion
- Only for decorative backgrounds, not critical content
- Disables on mobile (performance)

**Props Interface:**
```typescript
interface ParallaxWrapperProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
}
```

**Reusability:** Hero background, world map, decorative elements.

### 8.5 TextReveal

**File:** `components/animation/TextReveal.tsx`
**Scope:** Staggered character reveal for hero headings

**Responsibilities:**
- Splits text into individual characters or words
- Reveals each sequentially (fade-in-up per character/word)
- Only for high-impact headings (hero, major section titles)
- Fallback: renders plain text if reduced-motion

**Props Interface:**
```typescript
interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  mode?: 'char' | 'word';
  delay?: number;
  className?: string;
}
```

**Reusability:** Hero headline, major CTA sections (2–3 instances max).

---

## 9. Utility Components

### 9.1 ScrollToTop

**File:** `components/utility/ScrollToTop.tsx`
**Scope:** Button to scroll to top, appears on scroll-down

**Responsibilities:**
- Fixed bottom-left button, appears after 300px scroll
- Smooth scroll to top on click
- Fade in/out based on scroll position
- No animation on initial page load

**Props Interface:** None (self-contained)

**Reusability:** Single instance in root layout.

### 9.2 ScrollProgress

**File:** `components/utility/ScrollProgress.tsx`
**Scope:** Thin progress bar at top of page indicating scroll depth

**Responsibilities:**
- 2px tall, Gold-500 gradient
- Fixed at top of viewport (below header on non-home pages)
- Width = scroll progress percentage
- Hidden on home page (conflicts with hero)

**Props Interface:** None (self-contained)

**Reusability:** Single instance.

### 9.3 SEOHead

**File:** `components/utility/SEOHead.tsx`
**Scope:** Manages per-page meta tags

**Responsibilities:**
- Sets title, meta description, canonical URL, OG tags
- Accepts page-specific data; merges with site defaults
- JSON-LD structured data injection (Organization, WebSite, BreadcrumbList, Product)
- No SSR flash (set in metadata export)

**Props Interface:**
```typescript
interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;  // additional JSON-LD
}
```

**Reusability:** Every page.

### 8.4 SchemaMarkup

**File:** `components/utility/SchemaMarkup.tsx`
**Scope:** Injects JSON-LD structured data

**Responsibilities:**
- Renders `<script type="application/ld+json">` with schema.org data
- Types: Organization, WebSite, BreadcrumbList, Product, FAQPage, ContactPoint
- Composes with SEOHead data

**Props Interface:**
```typescript
interface SchemaMarkupProps {
  type: 'organization' | 'website' | 'product' | 'faq' | 'breadcrumb';
  data: Record<string, unknown>;
}
```

**Reusability:** Layout (Organization), product pages (Product), FAQ page.

### 9.4 LazyLoad

**File:** `components/utility/LazyLoad.tsx`
**Scope:** Delays rendering of below-fold content

**Responsibilities:**
- Wraps children; renders only when near viewport
- Uses IntersectionObserver with rootMargin
- Placeholder element of equal height during loading
- Smooth reveal when content loads

**Props Interface:**
```typescript
interface LazyLoadProps {
  children: React.ReactNode;
  rootMargin?: string;  // defaults '200px'
  placeholder?: React.ReactNode;
}
```

**Reusability:** Map embeds, testimonials carousel, heavy sections.

### 9.5 SkipToContent

**File:** `components/utility/SkipToContent.tsx`
**Scope:** Accessibility skip navigation link

**Responsibilities:**
- Hidden until focused (keyboard tab)
- Links to `#main-content` anchor
- First focusable element on page

**Props Interface:**
```typescript
interface SkipToContentProps {
  label?: string;  // defaults 'Skip to main content'
}
```

**Reusability:** Single instance in root layout.

### 9.6 LoadingSpinner

**File:** `components/utility/LoadingSpinner.tsx`
**Scope:** Loading state indicator

**Responsibilities:**
- Animated spinning circle (SVG + CSS animation)
- Gold-500 stroke, or White on dark backgrounds
- Configurable size (sm, md, lg)
- Optional label below spinner

**Props Interface:**
```typescript
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'gold' | 'white' | 'navy';
  label?: string;
}
```

**Reusability:** Form submissions, page transitions, lazy-loading sections.

---

## 10. Component Dependency Map

```
RootLayout
├── SkipToContent (utility)
├── TopBar (global)
├── Header (global)
│   ├── Logo
│   ├── NavLink[]
│   ├── MegaMenu
│   └── MobileMenuToggle
├── MobileNav (global)
├── WhatsAppButton (contact)
├── ScrollToTop (utility)
├── ScrollProgress (utility)
├── Breadcrumbs (global) [inner pages only]
└── Footer (global)
    └── ContactInfo (contact)

HomePage
├── Section
│   ├── Container
│   ├── ParallaxWrapper
│   ├── TextReveal (hero)
│   └── CTA
├── Section (stats)
│   ├── Container
│   └── StatsBar
│       └── Counter[]
├── Section (featured products)
│   ├── Container
│   ├── SectionHeader
│   ├── Stagger
│   │   └── ProductCard[]
│   └── CTA
├── Section (why choose us)
│   ├── Container
│   ├── SectionHeader
│   └── Grid
│       └── FeatureCard[] (improvised)
├── Section (global reach)
│   ├── Container
│   ├── SectionHeader
│   └── WorldMap (improvised)
├── Section (testimonials)
│   ├── Container
│   ├── SectionHeader
│   └── TestimonialsCarousel
│       └── TestimonialCard[]
├── Section (CTA block)
│   └── CTA
└── Section (contact preview)
    ├── Container
    ├── ContactInfo
    └── QuickInquiryForm

ProductDetailPage
├── Breadcrumbs
├── Container
│   ├── ImageGallery
│   ├── SectionHeader (product name)
│   ├── SpecificationsTable
│   ├── PackagingOptions
│   ├── BadgeGrid (certifications)
│   ├── QuickInquiryForm
│   └── RelatedProducts
│       └── ProductCard[]
└── SchemaMarkup (Product)

ContactPage
├── Breadcrumbs
├── Section
│   ├── Container
│   ├── SplitLayout
│   │   ├── ContactForm
│   │   └── ContactInfo
│   └── MapEmbed (lazy)
├── Section (FAQ)
│   ├── Container
│   ├── SectionHeader
│   └── FAQAccordion
└── CTA section
```

---

## 11. Props Flow Architecture

```
Page (data source)
 │
 ├── Reads data from lib/constants.ts, data/products.json
 ├── Composes sections
 │
 ├── Section
 │   ├── Receives bgColor, id
 │   └── Container
 │       ├── Receives variant
 │       ├── SectionHeader
 │       │   └── Receives overline, heading, subtitle, align
 │       └── [Content Component]
 │           ├── ProductGrid
 │           │   └── ProductCard[]
 │           │       └── Receives product data via props
 │           └── Animations wrapped via Reveal / Stagger
 │
 └── No prop drilling beyond 3 levels
     (Context only used for: theme, mobile menu state, form submission state)
```

---

## 12. Reusability Matrix

| Component | Category | Instances | Sites Used |
|-----------|----------|-----------|------------|
| Section | Layout | 40+ | Every page |
| Container | Layout | 50+ | Every page |
| Reveal | Animation | 100+ | Every page |
| SectionHeader | Shared | 25+ | Every section |
| ProductCard | Product | 12–16 | Product pages, home |
| SpecificationsTable | Product | 12 | Product detail pages |
| ContactForm | Contact | 2–3 | Contact, quote pages |
| CTA | Shared | 8–10 | Home, products, services |
| StatsBar | Shared | 3–4 | Home, about, quality |
| BadgeGrid | Shared | 5–6 | About, quality, products |
| Accordion | Shared | 3–4 | FAQ, process, quality |
| Counter | Animation | 12–20 | Stats bars |
| Breadcrumbs | Global | 25+ | All inner pages |
| WhatsAppButton | Contact | 1 | Global (sticky) |

---

*End of Component Architecture Document — v1.0*

*Ready for component implementation phase.*
