# RMRP Global Trade — Enterprise Folder Structure

**Framework:** Next.js 15 (App Router) | **Language:** TypeScript 5.x | **Styling:** Tailwind CSS 3.x | **Animation:** Framer Motion 11.x
**Rendering:** Static (SSG) via `output: 'export'` | **Package Manager:** pnpm

---

## 1. Root Structure

```
rmrp-global-trade/
├── src/                              ← Application source code
│   ├── app/                          ← Next.js App Router (routes + pages)
│   ├── components/                   ← All reusable components
│   ├── sections/                     ← Page-section composers (page-specific)
│   ├── lib/                          ← Pure utilities, constants, helpers
│   ├── data/                         ← Static data (JSON, MDX)
│   ├── types/                        ← Global TypeScript type definitions
│   ├── hooks/                        ← Custom React hooks
│   ├── styles/                       ← Global styles, Tailwind config extensions
│   └── providers/                    ← React context providers
│
├── public/                           ← Static assets (images, fonts, PDFs)
│   ├── images/                       ← All raster images
│   ├── icons/                        ← SVG icons, favicon
│   ├── fonts/                        ← Self-hosted fonts (optional)
│   └── downloads/                    ← PDF brochures, certificates, profiles
│
├── tests/                            ← Test files (mirrors src/ structure)
├── scripts/                          ← Build, migration, data-processing scripts
│
├── config/                           ← Non-code configuration
│   ├── tailwind/                     ← Extended Tailwind config (design tokens)
│   └── content/                      ← Content sourcing config
│
├── .env                              ← Environment variables
├── .env.example
├── .gitignore
├── next.config.ts                    ← Next.js 15 configuration
├── tailwind.config.ts                ← Tailwind CSS configuration
├── tsconfig.json                     ← TypeScript configuration
├── package.json
├── pnpm-lock.yaml
├── eslint.config.mjs                 ← ESLint flat config
├── .prettierrc
└── README.md
```

---

## 2. `src/` — Deep Dive

### 2.1 `src/app/` — Route Definitions (App Router)

```
src/app/
│
├── (home)/                           ← Route group: home page (no layout wrapper)
│   └── page.tsx                      ← Route: /
│
├── (main)/                           ← Route group: shared layout for all inner pages
│   ├── layout.tsx                    ← Shared layout (Breadcrumbs, section padding)
│   │
│   ├── about/
│   │   ├── page.tsx                  ← Route: /about
│   │   ├── layout.tsx                ← Sub-layout: about section tabs
│   │   ├── infrastructure/page.tsx   ← Route: /about/infrastructure
│   │   ├── leadership/page.tsx       ← Route: /about/leadership
│   │   ├── certifications/page.tsx   ← Route: /about/certifications
│   │   └── csr/page.tsx              ← Route: /about/csr
│   │
│   ├── products/
│   │   ├── page.tsx                  ← Route: /products (master listing)
│   │   ├── layout.tsx                ← Sub-layout: product sidebar/filter
│   │   ├── metals/page.tsx           ← Route: /products/metals
│   │   ├── food-agro/page.tsx        ← Route: /products/food-agro
│   │   ├── grains-flour/page.tsx     ← Route: /products/grains-flour
│   │   └── [slug]/
│   │       └── page.tsx              ← Route: /products/[slug] (dynamic product detail)
│   │
│   ├── export-services/
│   │   ├── page.tsx                  ← Route: /export-services
│   │   ├── layout.tsx                ← Sub-layout: sidebar nav
│   │   ├── process/page.tsx
│   │   ├── logistics/page.tsx
│   │   ├── documentation/page.tsx
│   │   ├── incoterms/page.tsx
│   │   └── payment/page.tsx
│   │
│   ├── quality/
│   │   ├── page.tsx                  ← Route: /quality
│   │   ├── layout.tsx                ← Sub-layout: quality tab nav
│   │   ├── policy/page.tsx
│   │   ├── process/page.tsx
│   │   ├── certifications/page.tsx
│   │   ├── laboratory/page.tsx
│   │   └── reports/page.tsx
│   │
│   ├── global-markets/
│   │   ├── page.tsx                  ← Route: /global-markets
│   │   ├── layout.tsx                ← Sub-layout: region sidebar
│   │   ├── case-studies/page.tsx
│   │   └── [region]/
│   │       └── page.tsx              ← Route: /global-markets/[region] (dynamic)
│   │
│   ├── contact/
│   │   ├── page.tsx                  ← Route: /contact
│   │   └── thank-you/page.tsx        ← Route: /contact/thank-you
│   │
│   ├── request-quote/
│   │   ├── page.tsx                  ← Route: /request-quote
│   │   └── thank-you/page.tsx        ← Route: /request-quote/thank-you
│   │
│   ├── downloads/
│   │   └── page.tsx                  ← Route: /downloads
│   │
│   ├── blog/
│   │   ├── page.tsx                  ← Route: /blog (listing)
│   │   └── [slug]/
│   │       └── page.tsx              ← Route: /blog/[slug] (dynamic article)
│   │
│   ├── faq/
│   │   └── page.tsx                  ← Route: /faq
│   │
│   └── (utility)/                    ← Route group: utility pages (no main layout)
│       ├── privacy/page.tsx
│       ├── terms/page.tsx
│       ├── cookies/page.tsx
│       └── sitemap/page.tsx
│
├── layout.tsx                        ← Root layout (html, body, providers, global components)
├── not-found.tsx                     ← 404 page
├── sitemap.ts                        ← Dynamic XML sitemap generation
└── robots.ts                         ← Robots.txt generation
```

#### Route Group Strategy

| Route Group | Purpose | Layout Applied |
|------------|---------|---------------|
| `(home)` | Home page — needs hero header (transparent) | No sub-layout; uses root layout |
| `(main)` | All inner pages — needs standard header (solid) + breadcrumbs + footer gap | Shared layout with breadcrumbs and section defaults |
| `(utility)` | Legal pages — minimal layout, no breadcrumbs, no sub-nav | Minimal sub-layout |

#### Dynamic Route Strategy

| Dynamic Segment | Source | Generated Routes |
|----------------|--------|-----------------|
| `/products/[slug]` | `data/products.json` (12 products) | `/products/aluminum-ingots`, `/products/jaggery`, etc. |
| `/global-markets/[region]` | `data/markets.json` (6 regions) | `/global-markets/middle-east`, `/global-markets/europe`, etc. |
| `/blog/[slug]` | `data/blog/` (MDX files) | Dynamic, growing over time |

**Static generation:** All dynamic routes use `generateStaticParams()` at build time. No server-side rendering needed.

---

### 2.2 `src/components/` — Reusable UI Components

```
src/components/
│
├── primitives/                       ← Atomic UI primitives (no business logic)
│   ├── Button.tsx                    ← Button with all variants
│   ├── Heading.tsx                   ← Typography heading component
│   ├── Text.tsx                      ← Body text component
│   ├── Badge.tsx                     ← Tag/badge/chip
│   ├── Input.tsx                     ← Text input with states
│   ├── Textarea.tsx                  ← Multi-line input
│   ├── Select.tsx                    ← Dropdown select
│   ├── Checkbox.tsx                  ← Checkbox input
│   ├── Radio.tsx                     ← Radio input
│   ├── Label.tsx                     ← Form label
│   ├── Divider.tsx                   ← Horizontal divider (gold accent)
│   ├── Spinner.tsx                   ← Loading spinner
│   ├── Skeleton.tsx                  ← Loading skeleton
│   ├── Icon.tsx                      ← Icon wrapper component
│   └── VisuallyHidden.tsx            ← Accessible hidden content
│
├── global/                           ← Site-wide chrome components (one instance each)
│   ├── TopBar.tsx
│   ├── Header.tsx
│   ├── MobileNav.tsx
│   ├── MegaMenu.tsx
│   ├── Footer.tsx
│   └── Breadcrumbs.tsx
│
├── layout/                           ← Layout structural components
│   ├── Section.tsx                   ← Page section wrapper
│   ├── Container.tsx                 ← Content width constraint
│   ├── Grid.tsx                      ← Responsive grid system
│   └── SplitLayout.tsx               ← Two-column content/media layout
│
├── shared/                           ← Reusable content components
│   ├── SectionHeader.tsx             ← Section title block
│   ├── CTA.tsx                       ← Call-to-action block
│   ├── StatsBar.tsx                  ← Statistics row
│   ├── BadgeGrid.tsx                 ← Certification badge grid
│   ├── TestimonialCard.tsx
│   ├── TestimonialsCarousel.tsx
│   ├── Accordion.tsx
│   ├── ImageGallery.tsx
│   ├── Card.tsx                      ← Generic card wrapper
│   └── Logo.tsx                      ← RMRP logo (responsive)
│
├── product/                          ← Product-specific components
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── ProductFilterBar.tsx
│   ├── SpecificationsTable.tsx
│   ├── PackagingOptions.tsx
│   ├── RelatedProducts.tsx
│   └── CategoryNav.tsx
│
├── contact/                          ← Contact/inquiry components
│   ├── ContactForm.tsx
│   ├── QuickInquiryForm.tsx
│   ├── WhatsAppButton.tsx
│   ├── ContactInfo.tsx
│   ├── FAQAccordion.tsx
│   └── MapEmbed.tsx
│
├── animation/                        ← Animation wrapper components
│   ├── Reveal.tsx                    ← Fade-in-up on scroll
│   ├── Stagger.tsx                   ← Staggered child reveal
│   ├── Counter.tsx                   ← Animated number counter
│   ├── ParallaxWrapper.tsx           ← Scroll parallax
│   └── TextReveal.tsx                ← Character/word reveal
│
└── utility/                          ← Utility/helper components
    ├── SEOHead.tsx                   ← Per-page SEO metadata
    ├── SchemaMarkup.tsx              ← JSON-LD structured data
    ├── ScrollToTop.tsx
    ├── ScrollProgress.tsx
    ├── SkipToContent.tsx
    ├── LazyLoad.tsx
    └── CookieConsent.tsx             ← GDPR cookie banner
```

#### Component Organization Principles

| Directory | Contains | Dependencies Allowed |
|-----------|----------|---------------------|
| `primitives/` | Pure UI atoms | Nothing — only React + Tailwind |
| `layout/` | Structural wrappers | `primitives/` |
| `shared/` | Common content blocks | `primitives/`, `layout/`, `animation/` |
| `global/` | Site chrome | `primitives/`, `shared/`, `animation/` |
| `product/` | Product-specific | `primitives/`, `shared/`, `layout/`, `animation/` |
| `contact/` | Contact-specific | `primitives/`, `shared/`, `layout/`, `animation/` |
| `animation/` | Motion wrappers | Framer Motion only |
| `utility/` | Non-visual helpers | React only |

**Cross-boundary rule:** A component in `product/` may import from `shared/` and `primitives/`, but a component in `primitives/` may NOT import from `product/`. This enforces a clean dependency graph.

---

### 2.3 `src/sections/` — Page Section Compositions

Each directory corresponds to a top-level page. Sections compose multiple components into a complete page region.

```
src/sections/
│
├── home/
│   ├── HeroSection.tsx               ← ParallaxWrapper + TextReveal + CTA
│   ├── StatsSection.tsx              ← Section + StatsBar + Counter[]
│   ├── FeaturedProductsSection.tsx   ← Section + SectionHeader + ProductGrid
│   ├── WhyChooseUsSection.tsx        ← Section + Grid + feature cards
│   ├── GlobalReachSection.tsx        ← Section + world map component
│   ├── TestimonialsSection.tsx       ← Section + TestimonialsCarousel
│   ├── CTASection.tsx                ← CTA block
│   └── ContactPreviewSection.tsx     ← Section + ContactInfo + QuickInquiryForm
│
├── about/
│   ├── CompanyOverviewSection.tsx
│   ├── MissionVisionSection.tsx
│   ├── TimelineSection.tsx
│   ├── LeadershipSection.tsx
│   ├── InfrastructureSection.tsx
│   ├── CertificationsSection.tsx
│   └── CSRSection.tsx
│
├── products/
│   ├── MasterListingSection.tsx      ← ProductGrid + ProductFilterBar
│   ├── CategoryHeroSection.tsx
│   └── ProductDetailSection.tsx      ← Product detail content composition
│
├── services/
│   ├── ProcessStepsSection.tsx
│   ├── LogisticsSection.tsx
│   ├── DocumentationSection.tsx
│   ├── IncotermsSection.tsx
│   └── PaymentTermsSection.tsx
│
├── quality/
│   ├── QualityPolicySection.tsx
│   ├── QualityProcessSection.tsx
│   ├── LaboratorySection.tsx
│   ├── CertificationsSection.tsx
│   └── ReportsSection.tsx
│
├── markets/
│   ├── GlobalMapSection.tsx
│   ├── RegionGridSection.tsx
│   ├── RegionProfileSection.tsx
│   ├── CaseStudiesSection.tsx
│   └── PartnerSection.tsx
│
├── contact/
│   ├── InquiryFormSection.tsx        ← Section + ContactForm
│   ├── ContactInfoSection.tsx         ← Section + ContactInfo + MapEmbed
│   ├── FAQSection.tsx
│   └── ThankYouSection.tsx
│
└── shared/                           ← Cross-page section patterns
    ├── HeroBannerSection.tsx         ← Generic hero (page-specific content)
    ├── CTASection.tsx
    └── StatsSection.tsx
```

#### Section → Page Mapping

```
about/page.tsx
├── HeroBannerSection            (styled for About)
├── CompanyOverviewSection
├── MissionVisionSection
├── TimelineSection
├── LeadershipSection
├── InfrastructureSection
├── CertificationsSection
└── CTASection

products/[slug]/page.tsx
├── Breadcrumbs                  (from global)
├── ProductDetailSection
│   ├── ImageGallery
│   ├── SpecificationsTable
│   ├── PackagingOptions
│   ├── BadgeGrid
│   └── QuickInquiryForm
└── RelatedProducts
```

---

### 2.4 `src/lib/` — Pure Functions & Configuration

```
src/lib/
│
├── constants/                        ← Site-wide constants
│   ├── site.ts                       ← Company name, tagline, URLs, social links
│   ├── navigation.ts                 ← Nav items, mega menu structure, footer links
│   ├── contact.ts                    ← Phone, email, address, hours, WhatsApp number
│   └── seo.ts                        ← Default SEO metadata, OG image
│
├── utils/                            ← Pure utility functions
│   ├── cn.ts                         ← Tailwind class merge (clsx + tailwind-merge)
│   ├── formatNumber.ts               ← Number formatting (1,000 → 1K, 1,000,000 → 1M)
│   ├── slugify.ts                    ← String to URL slug
│   ├── validateEmail.ts
│   ├── validatePhone.ts
│   ├── formatDate.ts
│   └── truncate.ts
│
├── seo/                              ← SEO helpers
│   ├── generateMetadata.ts           ← Per-page metadata factory
│   └── schemas/                      ← JSON-LD schema generators
│       ├── organization.ts
│       ├── product.ts
│       ├── breadcrumb.ts
│       ├── faq.ts
│       └── website.ts
│
├── form/                             ← Form utilities
│   ├── validation.ts                 ← Validation rules per form type
│   ├── submit.ts                     ← Form submission handler
│   └── schema.ts                     ← Zod schemas (if using Zod)
│
└── api/                              ← API helpers (if using serverless functions)
    ├── sendEmail.ts
    ├── submitToCRM.ts
    └── rateLimit.ts
```

**Key rule:** `lib/` contains ZERO React code. No JSX, no hooks, no Framer Motion. These are pure TypeScript modules importable anywhere.

---

### 2.5 `src/data/` — Static Content Data

```
src/data/
│
├── products.json                     ← All 12 products with full specs, images, metadata
├── markets.json                      ← 6 region profiles with country lists, compliance info
├── testimonials.json                 ← Testimonial entries
├── team.json                         ← Leadership team members
├── faq.json                          ← FAQ entries by category
├── stats.json                        ← Site statistics (years, countries, etc.)
└── blog/                             ← Blog posts as MDX
    ├── hello-world.mdx
    └── aluminum-market-trends.mdx
```

**Data loading pattern:** Pages import JSON directly (static at build time) or use `fs` + `gray-matter` for MDX. No database, no CMS, no API calls at runtime.

```typescript
// Example: fetching products in a page
import { getProductBySlug } from '@/data/products.json';

// Or via a thin access layer in lib/
import { getProductBySlug } from '@/lib/products';
// where lib/products.ts reads from data/products.json with typed return
```

---

### 2.6 `src/types/` — TypeScript Type Definitions

```
src/types/
│
├── product.ts                        ← Product, ProductSpec, Packaging, Category
├── market.ts                         ← Market, Region, TradeRoute
├── testimonial.ts                    ← Testimonial
├── navigation.ts                     ← NavItem, MegaMenuItem, FooterSection
├── contact.ts                        ← ContactFormData, InquiryType
├── seo.ts                            ← Metadata, Schema
├── site.ts                           ← SiteConfig, SocialLink, Stat
└── common.ts                         ← Shared utility types (DeepPartial, Nullable, etc.)
```

**Type import rule:** Types are imported using `import type { Product } from '@/types/product'`. No barrel files (no `index.ts` re-exports) — explicit import paths prevent circular dependencies.

---

### 2.7 `src/hooks/` — Custom React Hooks

```
src/hooks/
│
├── useScrollPosition.ts              ← Current scroll Y position
├── useScrollDirection.ts             ← Scroll direction (up/down)
├── useInView.ts                      ← IntersectionObserver wrapper
├── useMediaQuery.ts                  ← Responsive breakpoint detection
├── useLockedBody.ts                  ← Body scroll lock (for modals/mobile nav)
├── useDebounce.ts
├── useReducedMotion.ts               ← prefers-reduced-motion media query
└── useFormValidation.ts              ← Form validation state management
```

**Hook rule:** Hooks should be generic enough to be reusable across any Next.js project. No business logic in hooks.

---

### 2.8 `src/providers/` — React Context Providers

```
src/providers/
│
├── ThemeProvider.tsx                  ← Light/dark theme context (optional)
├── NavigationProvider.tsx            ← Mobile nav open/close state (global)
├── FormProvider.tsx                  ← Global form submission state
└── MotionProvider.tsx                ← Reduced motion preference context
```

Provider composition in root layout:

```typescript
// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <NavigationProvider>
            <MotionProvider>
              <SkipToContent />
              <TopBar />
              <Header />
              <WhatsAppButton />
              <main id="main-content">{children}</main>
              <Footer />
              <ScrollToTop />
              <CookieConsent />
            </MotionProvider>
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

### 2.9 `src/styles/` — Global Styles & Tailwind Extensions

```
src/styles/
│
├── globals.css                        ← Tailwind directives, CSS custom properties
├── typography.css                     ← @font-face declarations, prose styles
├── animations.css                     ← Keyframe animations (fallbacks for Framer Motion)
└── utilities.css                      ← Custom utility classes
```

**Design tokens** are defined in `tailwind.config.ts` as Tailwind extensions (custom colors, spacing, fonts, shadows) — NOT in CSS variables alone. This ensures full integration with Tailwind's utility classes.

---

## 3. `public/` — Static Assets

```
public/
│
├── images/
│   ├── hero/                         ← Hero background imagery
│   │   ├── world-map-bg.webp
│   │   └── shipping-containers.webp
│   ├── products/                     ← Product photography
│   │   ├── aluminum-ingots.webp
│   │   ├── aluminum-scrap.webp
│   │   ├── jaggery.webp
│   │   └── ... (12 product images)
│   ├── about/                        ← Facility, team, infrastructure
│   ├── certifications/               ← Badge images (ISO, FSSAI, etc.)
│   ├── team/                         ← Team member headshots
│   ├── blog/                         ← Blog post featured images
│   └── og/                           ← Open Graph images
│
├── icons/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── icon-192.png
│   ├── icon-512.png
│   └── social/                       ← Social media icons (LinkedIn, etc.)
│
├── fonts/                            ← Self-hosted fonts (optional, replaces Google Fonts)
│   ├── Poppins/
│   │   ├── Poppins-Bold.woff2
│   │   ├── Poppins-SemiBold.woff2
│   │   └── Poppins-Medium.woff2
│   └── Inter/
│       ├── Inter-Regular.woff2
│       ├── Inter-Medium.woff2
│       └── Inter-SemiBold.woff2
│
├── downloads/                        ← Downloadable PDF assets
│   ├── corporate-profile.pdf
│   ├── aluminum-grade-guide.pdf
│   ├── agro-export-checklist.pdf
│   └── certificates/                 ← Individual certification PDFs
│
├── robots.txt                        ← (static fallback, also generated by robots.ts)
└── sitemap.xml                       ← (static fallback, also generated by sitemap.ts)
```

**Image optimization:** All static images use Next.js `<Image>` component with `next.config.ts` defining remotePatterns if needed. Product images are WebP format for optimal compression.

---

## 4. `config/` — Non-Code Configuration

```
config/
│
├── tailwind/
│   ├── colors.ts                     ← Tokenized color palette
│   ├── typography.ts                 ← Font sizes, line heights, letter spacing
│   ├── spacing.ts                    ← Extended spacing scale
│   └── shadows.ts                    ← Shadow tokens
│
└── content/
    └── sources.ts                    ← Content sourcing instructions (for future CMS migration)
```

The `config/tailwind/` files are imported into `tailwind.config.ts` to extend the default Tailwind theme. This keeps the Tailwind config file clean and the design tokens version-controlled independently.

---

## 5. `tests/` — Test Architecture

```
tests/
│
├── unit/
│   ├── components/                   ← Component unit tests
│   ├── hooks/                        ← Hook tests
│   └── lib/                          ← Utility function tests
│
├── integration/                      ← Page/section integration tests
│
└── e2e/                              ← Playwright end-to-end tests
    ├── home.spec.ts
    ├── products.spec.ts
    ├── contact.spec.ts
    └── navigation.spec.ts
```

**Testing stack:** Vitest (unit) + React Testing Library (component) + Playwright (E2E).

---

## 6. Complete File Tree (Condensed)

```
src/
├── app/
│   ├── (home)/page.tsx
│   ├── (main)/
│   │   ├── layout.tsx
│   │   ├── about/*/page.tsx (×5)
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── metals/page.tsx
│   │   │   ├── food-agro/page.tsx
│   │   │   ├── grains-flour/page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── export-services/*/page.tsx (×6)
│   │   ├── quality/*/page.tsx (×6)
│   │   ├── global-markets/*/page.tsx (×8)
│   │   ├── contact/*/page.tsx (×2)
│   │   ├── request-quote/*/page.tsx (×2)
│   │   ├── downloads/page.tsx
│   │   ├── blog/*/page.tsx (×2)
│   │   └── faq/page.tsx
│   ├── (utility)/*/*.tsx (×4)
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── primitives/        (17 files)
│   ├── global/            (6 files)
│   ├── layout/            (4 files)
│   ├── shared/            (10 files)
│   ├── product/           (7 files)
│   ├── contact/           (6 files)
│   ├── animation/         (5 files)
│   └── utility/           (7 files)
│
├── sections/
│   ├── home/              (8 files)
│   ├── about/             (7 files)
│   ├── products/          (3 files)
│   ├── services/          (5 files)
│   ├── quality/           (5 files)
│   ├── markets/           (5 files)
│   ├── contact/           (4 files)
│   └── shared/            (3 files)
│
├── lib/
│   ├── constants/         (4 files)
│   ├── utils/             (7 files)
│   ├── seo/               (6 files)
│   ├── form/              (3 files)
│   └── api/               (3 files)
│
├── data/                  (8 files)
├── types/                 (7 files)
├── hooks/                 (8 files)
├── providers/             (4 files)
└── styles/                (4 files)
```

**Estimated total files:** ~175 source files (excluding tests).

---

## 7. Scaling Strategy

### 7.1 Adding a New Product

```
1. Add product data to  src/data/products.json
2. Add product image(s) to  public/images/products/
3. The dynamic route  src/app/(main)/products/[slug]/page.tsx  auto-picks it up
4. (No new components, no new routes, no new pages)
```

**Result:** 0 new files created. ~5 lines added to `products.json`.

### 7.2 Adding a New Market Region

```
1. Add region data to  src/data/markets.json
2. The dynamic route  src/app/(main)/global-markets/[region]/page.tsx  auto-picks it up
```

**Result:** 0 new files.

### 7.3 Adding a New Top-Level Page

```
1. Create  src/app/(main)/new-page/page.tsx  (compose sections)
2. Create  src/sections/new-page/  (section components)
3. Add nav link in  src/lib/constants/navigation.ts
4. Add route label in breadcrumb mapping
```

**Result:** 2–5 new files. No changes to global components, layout, or routing infrastructure.

### 7.4 Adding a New Component

```
1. Determine which directory it belongs in (primitives, shared, product, etc.)
2. Create the component file
3. Import and use in the relevant section
```

**Result:** 1 new file. No modification to existing components required if following the composition pattern.

### 7.5 Scaling to a CMS (Future)

If the business later adopts a headless CMS:

```
1. Content moves from  src/data/*.json  →  CMS API
2. Data access moves from  import json  →  fetch()  in  src/lib/api/
3. All components, sections, pages remain unchanged
4. Only data sources change — the entire component layer is CMS-agnostic
```

**Result:** Zero UI changes. Only `lib/api/` and `data/` are affected.

---

## 8. Import Path Conventions

```typescript
// Components
import { Button } from '@/components/primitives/Button';
import { Section } from '@/components/layout/Section';
import { ProductCard } from '@/components/product/ProductCard';
import { Reveal } from '@/components/animation/Reveal';

// Sections
import { HeroSection } from '@/sections/home/HeroSection';

// Data
import products from '@/data/products.json';

// Types
import type { Product } from '@/types/product';

// Hooks
import { useScrollDirection } from '@/hooks/useScrollDirection';

// Utilities
import { cn } from '@/lib/utils/cn';
import { site } from '@/lib/constants/site';
```

**Path alias** configured in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 9. Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **Sections separate from Components** | Prevents page-specific logic leaking into reusable components. Sections are the only place that composes multiple components and adds layout. |
| **No barrel exports** (`index.ts`) | Explicit imports prevent circular dependencies, make refactoring easier, and improve tree-shaking. |
| **Data separate from Components** | JSON files in `data/` are pure content. Components remain content-agnostic. Future CMS migration requires zero UI changes. |
| **Route groups for layout variants** | Home needs a transparent hero header; inner pages need breadcrumbs; utility pages need minimal chrome. Route groups handle this without conditional logic. |
| **Dynamic routes for products and regions** | 12 products + 6 regions would create 18 nearly-identical static files. Dynamic routes + `generateStaticParams()` reduce this to 2 route files. |
| **Animation components as wrappers** | Framer Motion is isolated in `animation/` components. If the animation library changes, only `animation/` is affected — no business components need changes. |
| **No `use client` at the page level** | Pages remain server components by default. Only interactive sections (forms, carousels, mobile nav) are client components. This minimizes JavaScript bundle size. |

---

*End of Folder Structure Architecture — v1.0*

*Ready for project scaffolding and implementation.*
