# RMRP Global Trade — Navigation System Architecture

**Type:** Premium B2B Corporate | **Pages:** 55+ | **Product Divisions:** 3 | **Products:** 12
**Key Challenge:** Balancing breadth (55+ pages) with depth (3-tier product hierarchy) without overwhelming international buyers

---

## 1. Navigation Design Principles

### 1.1 The Four-Second Rule

A B2B buyer must be able to reach ANY product category or key page within 4 seconds and 2 clicks maximum. Every additional click reduces conversion probability by ~20%.

### 1.2 Buyer Mode Alignment

```
Exploratory Mode ("What do they sell?")  →  Products mega menu
Research Mode ("Are they credible?")     →  About, Quality, Global Markets
Transactional Mode ("I want to buy")     →  Request a Quote (always visible)
Support Mode ("I have a question")       →  Contact, WhatsApp, FAQ
```

The navigation must accommodate ALL four modes simultaneously — not force the buyer to choose a path.

### 1.3 Visual Hierarchy in Navigation

```
Visual Weight = F (size, color, position, motion)

Highest:   "Request a Quote" button (Gold-500 bg)
High:      Product nav items (primary task)
Medium:    Section nav items (About, Services, Quality, Markets)
Low:       Utility items (phone, email, downloads, language)
Lowest:    Legal links (privacy, terms — footer only)
```

---

## 2. Desktop Navigation Structure

### 2.1 Three-Tier Navigation System

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  TIER 1: UTILITY BAR (40px)                                                           │
│  ┌────────────────────────────────────────────────────────────────────────────────┐  │
│  │ 📞 +91-XXX-XXXXXXX  │  ✉️ info@rmrpglobaltrade.com  │  Downloads  │  EN ▼  │ Req.Quote │  │
│  └────────────────────────────────────────────────────────────────────────────────┘  │
│  ─── 1px Gold-500 divider ──────────────────────────────────────────────────────────  │
│  TIER 2: PRIMARY NAV (72px)                                                            │
│  ┌────────────────────────────────────────────────────────────────────────────────┐  │
│  │  [LOGO]      Home │ About ▼ │ Products ▼ │ Export Services │ Quality │        │  │
│  │               Global Markets │ Contact                                          │  │
│  └────────────────────────────────────────────────────────────────────────────────┘  │
│  TIER 3: SUB-NAV / BREADCRUMBS (inner pages only, 40px)                              │
│  ┌────────────────────────────────────────────────────────────────────────────────┐  │
│  │  Home  >  Products  >  Aluminum Products                                       │  │
│  └────────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Tier 1 — Utility Bar

**Height:** 40px (compact, non-intrusive)

**Left-aligned (in order):**
| Element | Content | Behavior | Rationale |
|---------|---------|----------|-----------|
| Phone | `📞 +91-XXX-XXXXXXX` | `tel:` link, Inter 13px Medium, Gray-100 | Phone is the most direct trust signal — "they're reachable" |
| Email | `✉️ info@rmrpglobaltrade.com` | `mailto:` link, Inter 13px Medium, Gray-100 | Secondary contact option |

**Right-aligned (in order):**
| Element | Content | Behavior | Rationale |
|---------|---------|----------|-----------|
| Downloads | `📄 Downloads` | Link to `/downloads`, Inter 13px Medium | Easy access to brochures/certificates |
| Language | `🌐 EN ▼` | Dropdown: EN, ARعربي, ES Español, FR Français | Serves international buyers in their language |
| Request a Quote | `Request a Quote` | Gold-500 text, link to `/request-quote`, compact | High-visibility CTA even in utility bar |

**Scroll behavior:** Utility bar hides on scroll-down (translates -40px), reappears on scroll-up. This ensures maximum hero real estate while keeping it accessible.

### 2.3 Tier 2 — Primary Navigation

**Height:** 72px

**Layout:** Logo (left) | Nav links (center) | CTA (right)

#### Left: Logo

```
┌──────────────────┐
│  RMRP             │
│  GLOBAL TRADE     │  ← Two-line logo or SVG mark
│                   │     White on hero, Navy-900 on scroll
└──────────────────┘
```

**Logo properties:**
- Width: 140–180px (scalable)
- Height: 36px
- Link to: `/`
- Color variant: White (hero, transparent header) → Navy-900 (solid header on scroll)
- Transition: 300ms ease-out

#### Center: Navigation Links

| # | Label | Link | Dropdown | Visual Weight |
|---|-------|------|----------|---------------|
| 1 | Home | `/` | None | Default (Inter 14px Medium) |
| 2 | About | `/about` | Inline dropdown (4 items) | Default |
| 3 | **Products** | `/products` | **Mega menu** (3 columns) | **Emphasized** (Semibold, Gold-500 on hover) |
| 4 | Export Services | `/export-services` | Inline dropdown (5 items) | Default |
| 5 | Quality | `/quality` | Inline dropdown (5 items) | Default |
| 6 | Global Markets | `/global-markets` | Inline dropdown (3 items + regions) | Default |
| 7 | Contact | `/contact` | Inline dropdown (quick contact card) | Default |

**Nav link styling (desktop):**
- Font: Inter 14px Medium
- Color: White (hero) → Navy-900 (scroll) → Gold-500 (hover)
- Active state: Gold-500 underline (2px, centered, 20px wide)
- Gap between items: 32px
- Padding: 24px 0px (clickable height = full 72px header)
- Dropdown indicator: `▼` (8px SVG chevron, rotates 180° on open)

#### Right: Primary CTA

```
┌──────────────────────────┐
│    REQUEST A QUOTATION    │  ← Gold-500 bg, White text
└──────────────────────────┘     Inter Semibold 13px uppercase
                                 Padding: 10px 24px
                                 Radius: 8px
                                 Link: /request-quote
```

**CTA behavior:**
- Always visible in header (never hides)
- Style: Gold primary (consistent, doesn't change on scroll)
- On hero (transparent header): Secondary style (Navy-900 bg, Gold-500 border, Gold-500 text)
- On scroll (solid header): Primary style (Gold-500 bg, White text)
- Transition: 300ms ease-out between styles

### 2.4 Tier 3 — Sub-Navigation / Breadcrumbs

**Height:** 40px (inner pages only, hidden on home)

```
Home  >  Products  >  Aluminum Products
```

**Specifications:**
- Font: Inter 12px Regular
- Color: Gray-400 (links), Gray-600 (current page, non-clickable)
- Separator: `>` (chevron, 10px, Gray-300)
- Padding: 0 32px (matching container padding)
- Background: White or Gray-50 (matching page hero background)
- Schema: JSON-LD BreadcrumbList (SEO critical)

**Edge case:** On product detail pages, breadcrumb includes the product name:
```
Home  >  Products  >  Food & Agro  >  Jaggery & Jaggery Powder
```

---

## 3. Mobile Navigation Structure

### 3.1 Mobile Header (Always Visible)

```
┌─────────────────────────────────────────────────┐
│  [☰]  [LOGO]  [📞]  [🛒 Request Quote]          │
└─────────────────────────────────────────────────┘
```

| Position | Element | Behavior |
|----------|---------|----------|
| Left | Hamburger icon `☰` | Opens slide-out drawer |
| Center-left | Logo (compact) | Links to `/`, height: 28px |
| Right | Phone icon `📞` | `tel:` link (click-to-call) |
| Right | "Quote" button | Compact gold button, links to `/request-quote` |

**Height:** 64px (mobile, reduced from 72px)

### 3.2 Slide-Out Drawer

```
┌─────────────────────────────────────────────────┐
│  ✕ Close                                          │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  Home                                        │  │
│  ├─────────────────────────────────────────────┤  │
│  │  About Us                              ►    │  │  ← Expandable sub-menu
│  ├─────────────────────────────────────────────┤  │
│  │  Products                             ▼    │  │  ← Mega menu (accordion)
│  │  ├── Metals Division                       │  │
│  │  │   ├── Aluminum Ingots                   │  │
│  │  │   └── Aluminum Scrap                    │  │
│  │  ├── Food & Agro Division                  │  │
│  │  │   ├── Jaggery & Powder                  │  │
│  │  │   ├── Onion Powder & Flakes             │  │
│  │  │   ├── Garlic Powder & Flakes            │  │
│  │  │   ├── Banana Powder                     │  │
│  │  │   ├── Tomato Flakes                     │  │
│  │  │   └── Sugar                             │  │
│  │  └── Grains & Flour Division               │  │
│  │      ├── Millet (Bajra) Flour              │  │
│  │      ├── Jowar Flour                       │  │
│  │      ├── Wheat Flour                       │  │
│  │      └── Maize Flour                       │  │
│  ├─────────────────────────────────────────────┤  │
│  │  Export Services                       ►    │  │
│  ├─────────────────────────────────────────────┤  │
│  │  Quality Assurance                     ►    │  │
│  ├─────────────────────────────────────────────┤  │
│  │  Global Markets                        ►    │  │
│  ├─────────────────────────────────────────────┤  │
│  │  Contact Us                                │  │
│  ├─────────────────────────────────────────────┤  │
│  │                                              │  │
│  │  ─── UTILITY ───                            │  │
│  │  📞 +91-XXX-XXXXXXX                         │  │
│  │  ✉️ info@rmrpglobaltrade.com                │  │
│  │  📄 Downloads                               │  │
│  │  🌐 English  ▼  (language picker)           │  │
│  ├─────────────────────────────────────────────┤  │
│  │                                              │  │
│  │  ┌─────────────────────────────────────┐    │  │
│  │  │       REQUEST A QUOTATION          │    │  │  ← Sticky gold CTA
│  │  └─────────────────────────────────────┘    │  │
│  └─────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

**Drawer specifications:**
- Width: 85% of viewport (not full — keeps visual context)
- Background: White
- Animation: Slide-in from left, 350ms, ease-out
- Overlay: Navy-900 at 50% opacity, click to close
- First-level items: Inter 16px Medium, Navy-900, 48px height tap target
- Second-level items: Inter 14px Regular, Gray-700, 40px height
- Third-level products: Inter 13px Regular, Gray-500, 36px height
- Product division headers: Inter 12px Semibold, Gold-600, uppercase, 8px top padding
- Accordion animation: Height transition, 250ms
- Body scroll lock when open
- Focus trapped within drawer
- Close on Escape key

### 3.3 Mobile Sub-Navigation Behavior

| Pattern | Implementation |
|---------|---------------|
| Products | Accordion (expandable within drawer, 3 levels max) |
| About, Services, Quality, Markets | Slide-in second panel (replaces first panel) |
| Home, Contact | Direct link (no sub-items) |

**Why accordion for Products vs slide-in for others?**
Products has 3 divisions × 12 items. Accordion lets the user see all divisions at once and expand the one they need. Slide-in would bury divisions behind a second click. Other sections have 3–5 flat items — slide-in is cleaner.

---

## 4. Product Navigation Strategy

### 4.1 Desktop Mega Menu

This is the most complex and most important navigation element. It must serve two audiences simultaneously:
1. **Knows-what-they-want buyer:** Scans for their product, clicks, gone in 2 seconds
2. **Browser buyer:** Scans divisions to understand RMRP's breadth

```
┌───────────────────────────────────────────────────────────────────────────┐
│  PRODUCTS (mega menu — opens on hover or click)                           │
│                                                                           │
│  ┌──────────────────┬──────────────────────┬────────────────────────┐     │
│  │  METALS DIVISION │  FOOD & AGRO DIVISION│  GRAINS & FLOUR        │     │
│  │                   │                      │  DIVISION               │     │
│  │  ┌─────────────┐ │  ┌──────────────────┐│  ┌──────────────────┐  │     │
│  │  │ [Image]     │ │  │ [Image]          ││  │ [Image]          │  │     │
│  │  │ Aluminum    │ │  │ Jaggery &        ││  │ Millet (Bajra)  │  │     │
│  │  │ Ingots      │ │  │ Jaggery Powder   ││  │ Flour            │  │     │
│  │  │ 99.5%, 99.7%│ │  │ Solid, Powder,   ││  │ Gluten-free     │  │     │
│  │  │ 6-8kg bars  │ │  │ Cubes            ││  │ High protein     │  │     │
│  │  │ [View →]    │ │  │ [View →]         ││  │ [View →]         │  │     │
│  │  └─────────────┘ │  └──────────────────┘│  └──────────────────┘  │     │
│  │                   │                      │                        │     │
│  │  ┌─────────────┐ │  ┌──────────────────┐│  ┌──────────────────┐  │     │
│  │  │ [Image]     │ │  │ Onion Powder &   ││  │ Jowar Flour      │  │     │
│  │  │ Aluminum    │ │  │ Flakes           ││  │ Sorghum flour     │  │     │
│  │  │ Scrap       │ │  │ Dehydrated,      ││  │ Traditional      │  │     │
│  │  │ All ISRI    │ │  │ Pwd/Flakes/Grains││  │ grain             │  │     │
│  │  │ Grades      │ │  │ [View →]         ││  │ [View →]         │  │     │
│  │  │ [View →]    │ │  └──────────────────┘│  └──────────────────┘  │     │
│  │  └─────────────┘ │                      │                        │     │
│  │                   │  ┌──────────────────┐│  ┌──────────────────┐  │     │
│  │                   │  │ Garlic Powder &  ││  │ Wheat Flour      │  │     │
│  │                   │  │ Flakes           ││  │ Atta/Maida/Sooji │  │     │
│  │                   │  │ Dehydrated,      ││  │ Multiple grinds  │  │     │
│  │                   │  │ Pwd/Flakes/Grains││  │ [View →]         │  │     │
│  │                   │  │ [View →]         ││  └──────────────────┘  │     │
│  │                   │  └──────────────────┘│                        │     │
│  │                   │                      │  ┌──────────────────┐  │     │
│  │                   │  ┌──────────────────┐│  │ Maize Flour      │  │     │
│  │                   │  │ Banana Powder    ││  │ Corn flour       │  │     │
│  │                   │  │ Baby food,       ││  │ Fine grind       │  │     │
│  │                   │  │ Bakery, Beverage ││  │ [View →]         │  │     │
│  │                   │  │ [View →]         ││  └──────────────────┘  │     │
│  │                   │  └──────────────────┘│                        │     │
│  │                   │                      │                        │     │
│  │                   │  ┌──────────────────┐│                        │     │
│  │                   │  │ Tomato Flakes    ││                        │     │
│  │                   │  │ Soup/sauce grade ││                        │     │
│  │                   │  │ [View →]         ││                        │     │
│  │                   │  └──────────────────┘│                        │     │
│  │                   │                      │                        │     │
│  │                   │  ┌──────────────────┐│                        │     │
│  │                   │  │ Sugar            ││                        │     │
│  │                   │  │ ICUMSA 45, S-30, ││                        │     │
│  │                   │  │ M-30             ││                        │     │
│  │                   │  │ [View →]         ││                        │     │
│  │                   │  └──────────────────┘│                        │     │
│  ├───────────────────┴──────────────────────┴────────────────────────┤     │
│  │                                                                     │     │
│  │              [ View All Products → ]  |  [ Compare Grades → ]      │     │
│  │                                                                     │     │
│  └─────────────────────────────────────────────────────────────────────┘     │
└───────────────────────────────────────────────────────────────────────────┘
```

**Mega menu specifications:**
- Width: Full container width (1280px max, centered)
- Background: White
- Border-top: 2px solid Gold-500
- Shadow: shadow-lg
- Padding: 32px (outer), 24px (column padding)
- Column width: equal thirds (1fr each)
- Item cards: 140px height, image 60px, icon optional, product name + brief spec + "View →"
- Hover on item: background Gray-50, subtle
- Bottom bar: 2 CTAs ("View All Products" + "Compare Grades" if applicable)
- Trigger: Hover with 200ms delay OR click on "Products" nav link
- Close: Click outside, hover away 300ms delay, Escape key

**Each product card in mega menu:**
```
┌───────────────────────┐
│  [Small product image] │  ← 60×60px, rounded 4px
│                       │
│  Aluminum Ingots       │  ← Inter 14px Semibold, Navy-900
│  99.5%, 99.7% purity   │  ← Inter 12px Regular, Gray-500
│  [View →]              │  ← Gold-500, 12px, hover underline
└───────────────────────┘
```

### 4.2 Product Navigation Entry Points

| Entry Point | Method | User Intent |
|-------------|--------|-------------|
| Products nav link | Click/hover → mega menu | Exploring product range |
| Hero CTA "Explore Our Products" | Click → `/products` | High-intent product search |
| Product category on home | Card click → `/products/metals` | Specific category interest |
| Search (if implemented) | Type → product results | Known product, direct access |
| Related products on detail page | Card click → another product page | Cross-sell intent |
| Product recommendation in inquiry form | Dropdown selection | Multi-product inquiry |

### 4.3 Active State Behavior

| Location | Active Indicator | Example |
|----------|-----------------|---------|
| Primary nav link | Gold-500 underline (2px, centered) | On `/products/aluminum-ingots`, "Products" has underline |
| Mega menu item | Gold-500 left border (2px) + Gray-50 bg | Active product card highlighted |
| Product filter tabs | Gold-500 underline + Semibold font | "Metals" tab active in filter bar |
| Breadcrumb last item | Gray-600, non-clickable | "Aluminum Ingots" as last breadcrumb |
| Category nav (sidebar) | Gold-500 left border + background tint | Active category in products sidebar |

---

## 5. Dropdown / Mega Menu Recommendations

### 5.1 Dropdown Type by Section

| Section | Type | Columns | Max Items | Open Trigger |
|---------|------|---------|-----------|--------------|
| Products | Mega menu | 3 | 12 | Hover (200ms) or Click |
| About | Simple dropdown | 1 | 4 | Hover |
| Export Services | Simple dropdown | 1 | 5 | Hover |
| Quality | Simple dropdown | 1 | 5 | Hover |
| Global Markets | Simple dropdown | 1 | 6 + regions | Hover |
| Contact | Contact card dropdown | 1 | Quick contact card | Hover or Click |

### 5.2 Simple Dropdown Template (About, Services, Quality)

```
┌──────────────────────────────┐
│  About Us                    │
│                              │
│  ├── Company Overview        │  ← Inter 14px Regular, Navy-900
│  ├── Infrastructure          │     40px hit target
│  ├── Leadership Team         │     Hover: Gold-500 text, indent 4px
│  ├── Certifications          │
│  └── Why Choose RMRP         │
│                              │
└──────────────────────────────┘
```

**Specifications:**
- Width: auto (min 200px, max 280px)
- Padding: 8px 0px
- Item padding: 10px 20px
- Separator: optional (thin line between groups if needed)
- Arrow: tiny `▶` indicator on items with sub-pages (not on single-page sections)

### 5.3 Contact Dropdown (Special — Contact Card)

```
┌───────────────────────────────────┐
│  Get in Touch                      │
│                                   │
│  📞 +91-XXX-XXXXXXX               │  ← Clickable (tel:)
│  ✉️ info@rmrpglobaltrade.com      │  ← Clickable (mailto:)
│                                   │
│  ───                               │
│                                   │
│  🕐 Mon–Sat, 9:00 AM – 6:00 PM    │
│                                   │
│  ┌───────────────────────────┐    │
│  │   Send an Inquiry        │    │  ← Gold CTA → /contact
│  └───────────────────────────┘    │
│                                   │
│  [ Chat on WhatsApp → ]           │  ← Ghost link → WhatsApp
└───────────────────────────────────┘
```

This replaces a traditional link list with an actionable contact card. More useful for a B2B buyer than a list of sub-pages.

### 5.4 Global Markets Dropdown

```
┌─────────────────────────────────┐
│  Global Markets                  │
│                                 │
│  ├── Markets We Serve           │
│  │                               │
│  ├── By Region:                  │
│  │   ├── Middle East & GCC      │
│  │   ├── Southeast Asia         │
│  │   ├── Africa                 │
│  │   ├── Europe                 │
│  │   ├── South America          │
│  │   └── North America          │
│  │                               │
│  ├── Case Studies               │
│  └── Become a Trade Partner     │
└─────────────────────────────────┘
```

**Specifications:**
- Regions indented by 12px, grouped under "By Region:" label
- "By Region:" label: Inter 11px Semibold, Gold-500, uppercase, 8px padding top
- Region items: Inter 13px Regular, Gray-600

### 5.5 Dropdown Behavior Rules (All Types)

| Behavior | Rule |
|----------|------|
| Open trigger | Hover with 200ms debounce (prevents accidental open) OR Click |
| Close trigger | Hover away + 300ms delay (lets user move to sub-item) OR Click outside OR Escape |
| Multi-open | Only one dropdown open at a time (auto-close others) |
| Click on parent link (Products nav item) | First click opens dropdown; second click (while open) navigates to `/products` |
| Overlap handling | Dropdown appears BELOW header (not overlapping hero content) |
| Z-index | Header: 100, Dropdowns: 90 (below header, above content) |
| Accessibility | aria-expanded, aria-controls, role="menu", keyboard navigation (arrow keys, Enter, Escape) |

---

## 6. Sticky Header Behavior

### 6.1 State Machine

```
                ┌──────────────────────┐
                │  INITIAL (TOP)       │
                │  Transparent bg       │
                │  White text           │
                │  Secondary CTA        │
                └──────────┬───────────┘
                           │ scroll down > 100px
                           ▼
                ┌──────────────────────┐
                │  TRANSITIONING       │  ← 200–400px range
                │  backdrop-filter blur │     (duration: 300ms)
                │  bg opacity 0→1      │
                └──────────┬───────────┘
                           │ scroll > 400px
                           ▼
                ┌──────────────────────┐
                │  STICKY (SOLID)      │
                │  White bg            │
                │  Navy-900 text       │
                │  Shadow-sm           │
                │  Gold Primary CTA    │
                └──────────┬───────────┘
               ┌───────────┴───────────┐
               │ scroll-down           │ scroll-up
               ▼                       ▼
     ┌──────────────────┐  ┌──────────────────────┐
     │ STICKY (HIDDEN)  │  │ STICKY (VISIBLE)     │
     │ Header off-screen│  │ Header fixed          │
     │ transform: -72px │  │ transform: translateY(0) │
     │ Reappears on     │  │                       │
     │ scroll-up > 20px │  │                       │
     └──────────────────┘  └──────────────────────┘
```

### 6.2 Scroll States Detail

| State | Scroll Position | Background | Text Color | Logo | CTA Style | Shadow | Transition |
|-------|----------------|------------|------------|------|-----------|--------|------------|
| Initial (Hero) | 0–100px | Transparent | White | White mark | Secondary (Navy+Gold) | None | — |
| Transitioning | 100–400px | White ramp (opacity 0→1) via backdrop-filter | White → Navy | Crossfade | Secondary → Primary | None → sm | 300ms ease-out |
| Sticky Visible | 400px+ (scrolling up) | White, solid | Navy-900 | Navy mark | Primary (Gold) | shadow-sm | 300ms ease-out |
| Sticky Hidden | 400px+ (scrolling down fast) | White, solid (offscreen) | Navy-900 | Navy mark | Primary (Gold) | shadow-sm | 200ms ease-in |

### 6.3 Header Hide/Show Logic

```
const [prevScrollPos, setPrevScrollPos] = useState(0);
const [visible, setVisible] = useState(true);
const [atTop, setAtTop] = useState(true);

// On scroll:
const currentScrollPos = window.scrollY;

// Show/hide logic:
if (currentScrollPos > 400) {
  if (currentScrollPos > prevScrollPos + 20) {
    setVisible(false);     // Scrolling down fast → hide
  } else if (currentScrollPos < prevScrollPos - 20) {
    setVisible(true);      // Scrolling up → show
  }
} else {
  setVisible(true);        // Above 400px → always visible
}

// Transparent logic:
if (currentScrollPos < 100) {
  setAtTop(true);           // Fully transparent
} else if (currentScrollPos > 400) {
  setAtTop(false);          // Fully solid
}
// else: transitioning (CSS handles opacity interpolation)
```

### 6.4 Why Hide the Header on Scroll-Down?

On a premium B2B site, content is king. The header takes 112px (40px utility + 72px nav) — nearly 15% of a 768px laptop viewport. Hiding it on scroll-down gives the buyer maximum content area for reading product details, specs, and trust content. It reappears immediately on scroll-up (within 20px threshold) for navigation access.

---

## 7. CTA Placement Strategy

### 7.1 CTA in Navigation — Context Sensitivity

The "Request a Quotation" button in the header is the single most important CTA on the site. Its placement must balance prominence with non-aggression.

| Header State | CTA Style | Rationale |
|-------------|-----------|-----------|
| Transparent (hero) | Secondary (Navy-900 bg, Gold-500 border, Gold-500 text) | On hero, the gold primary CTA is in the hero section itself. The header CTA should not compete. |
| Solid (scrolled) | Primary (Gold-500 bg, White text) | Away from hero, the header CTA becomes the primary conversion point. Gold stands out against white header. |

### 7.2 Navigation CTA Sizing

| State | Size | Padding | Font |
|-------|------|---------|------|
| Desktop hero | Default | 10px 24px | Inter Semibold 13px uppercase |
| Desktop scrolled | Default | 10px 24px | Inter Semibold 13px uppercase |
| Mobile | Compact | 8px 16px | Inter Semibold 12px uppercase |

### 7.3 Secondary CTAs in Navigation

| CTA | Location | When Visible |
|-----|----------|-------------|
| "Request a Quote" | Utility bar, rightmost | Always |
| Phone number | Utility bar, left | Always |
| WhatsApp icon | Header right (next to CTA) | Mobile only |
| "Request a Quote" (compact) | Mobile header, rightmost | Always |

### 7.4 CTA Priority in Navigation

```
Visual Hierarchy in Navigation CTAs:

   MOST PROMINENT         LEAST PROMINENT
   ┌─────────────┐   ┌──────────┐   ┌──────────────┐
   │ Req. Quote  │   │ Phone    │   │ Downloads    │
   │ (Gold bg)   │ > │ (icon)   │ > │ (text link)  │
   └─────────────┘   └──────────┘   └──────────────┘

   TRANSACTIONAL          SUPPORT           INFORMATIONAL
```

---

## 8. Navigation User Experience

### 8.1 Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Move forward through nav items |
| Shift + Tab | Move backward |
| Enter / Space | Open dropdown, activate link |
| Escape | Close dropdown, return focus to parent |
| Arrow Down | Open dropdown, focus first item |
| Arrow Up | Focus previous item (or close if at top) |
| Arrow Left/Right | Move between primary nav items |

### 8.2 Focus Management

- Visible focus ring (Gold-400, 2px, offset 2px) on all keyboard-navigable elements
- Mega menu traps focus when open (Tab cycles within menu)
- Mobile drawer traps focus when open
- Skip-to-content link as first focusable element (hidden until focused)

### 8.3 Touch / Mobile UX

| Gesture | Action |
|---------|--------|
| Tap hamburger | Open drawer |
| Tap backdrop | Close drawer |
| Swipe right → left | Close drawer (optional) |
| Tap parent nav item (Products) | Expand accordion |
| Tap child item (Aluminum Ingots) | Navigate to product page |
| Tap sub-menu item (About → overview) | Slide second panel, then navigate on tap |

### 8.4 Navigation Loading States

Since this is a static site (SSG), all pages are pre-rendered. Navigation links trigger instant client-side navigation (Next.js Link component with prefetch). No loading states needed — pages load instantly or from prefetch cache.

**Edge case:** On first visit, prefetch `staticProps` for mega menu product data. The mega menu JSON is embedded in the page (inlined in header component, not fetched).

### 8.5 Error Prevention

| Scenario | Prevention |
|----------|-----------|
| Accidental hover open on mega menu | 200ms hover debounce |
| User on mobile with hover-only menu | Mega menu not available on mobile; accordion drawer used instead |
| Very long product names in nav | Truncate to 25 chars with ellipsis, full name in title attribute |
| Slow network (prefetch fails) | All links are standard `<a>` tags with href — Next.js Link degrades gracefully |
| Screen reader on mega menu | All items have aria-label, roles defined, and keyboard support |

---

## 9. Trust Elements in Header

The navigation itself must contribute to trust — not just direct users but also signal credibility.

### 9.1 Trust Elements in Utility Bar

| Element | Trust Signal | Why |
|---------|-------------|-----|
| Phone number | "Someone will answer" | Real companies publish phone numbers. Scammers hide them. |
| Email address | "Professional communication" | Domain email (not Gmail/Yahoo) signals legitimate business |
| Business hours | "We have an office" | Published hours = real operations, not a virtual desk |
| Language switcher | "We serve international clients" | Multi-language signals global readiness |

### 9.2 Trust Elements in Primary Nav

| Element | Trust Signal | Why |
|---------|-------------|-----|
| Quality Assurance nav item | "They have a quality system" | Dedicated QA nav item = quality is important enough for its own page |
| Certifications (in About dropdown) | "Third-party verified" | Access to certification info from any page |
| Global Markets nav item | "They export globally" | Dedicated markets page = real international activity |
| Full company name in logo | "They're transparent" | Logo includes full name, not just initials |
| "Request a Quote" not "Get Price" | "Professional, not transactional" | Language choice signals B2B professionalism |

### 9.3 Trust Elements in Mega Menu

| Element | Trust Signal | Why |
|---------|-------------|-----|
| Product images | "Real products" | Images (even small) prove physical inventory |
| Spec snippets (99.5%, ISRI grades) | "Technical expertise" | Specific numbers = domain knowledge |
| HS code mention | "Regulatory awareness" | Knows trade classification = legitimate exporter |

### 9.4 Trust Elements in Mobile Nav

| Element | Trust Signal |
|---------|-------------|
| Phone number with click-to-call | Immediate human access |
| Business hours | Real office operations |
| Downloads link | Published brochures/certificates |
| Language options | International readiness |

---

## 10. Future Scalability Considerations

### 10.1 Adding New Products

The mega menu is data-driven. Adding a new product requires:

1. Add product data to `data/products.json`
2. Add product image to `public/images/products/`
3. The mega menu component reads from `data/products.json` — auto-populated

**No navigation code changes needed.**

### 10.2 Adding New Market Regions

1. Add region data to `data/markets.json`
2. The Global Markets dropdown reads from this data — auto-populated

**No navigation code changes needed.**

### 10.3 Adding a New Top-Level Page

1. Create page in `src/app/(main)/[section]/page.tsx`
2. Add nav item to `src/lib/constants/navigation.ts`
3. Add breadcrumb mapping to route labels

**~5 lines of config change. No component changes.**

### 10.4 Multi-Language Expansion

The language switcher in the utility bar is pre-configured for:
- EN (English)
- AR (Arabic — for Middle East buyers)
- ES (Spanish — for South American buyers)
- FR (French — for African buyers)

**Implementation approach for future:**
- Each language gets a route group: `/(en)/`, `/(ar)/`, etc.
- Navigation labels pulled from locale files: `locales/en/navigation.json`, `locales/ar/navigation.json`
- Logo remains constant (brand mark, no text dependency)
- RTL support for Arabic (header flips)

### 10.5 Adding Search

**Future consideration:** A search bar (optional) would live in the header between nav links and CTA.

```
[Logo]   Home  About  Products ▼  ...  [🔍 Search products...]  [Req. Quote]
```

**Trigger:** Click on search icon → expands into full search input with overlay results.

**Not included in v1** because the product catalog is small (12 items) and navigation is sufficient. Search becomes necessary when:
- Products exceed 30+
- Blog/content grows beyond 50 articles
- Buyer feedback indicates navigation isn't finding products

### 10.6 E-Commerce or Buyer Portal

If RMRP evolves into a portal (order tracking, document download, repeat orders):

```
[Logo]   Home  Products  Services  ...  [🔍]  [Req. Quote]  [Login ▼]
                                                                    ├── Track Order
                                                                    ├── My Documents
                                                                    └── My Account
```

The navigation structure supports this with minimal changes:
- Add "Login" as a secondary CTA (outline style, right of "Request a Quote")
- Dropdown shows portal links
- Existing structure unchanged

### 10.7 Analytics & Optimization

| Metric | What It Measures | Navigation Optimization Trigger |
|--------|-----------------|--------------------------------|
| Nav item click rate | Which items attract most interest | Low click on "Quality" → rename or reposition |
| Mega menu hover rate | Engaging with product categories | Low hover → mega menu may not be visible enough |
| Mobile drawer open rate | Mobile nav utility | < 10% → consider bottom navigation |
| Header CTA click rate | Conversion intent signal | < 3% → test copy, color, or position |
| Search usage (if added) | Navigation failing to surface content | > 10% of users use search → navigation needs improvement |
| Bounce rate per landing page | Page relevance from navigation | High bounce from product pages → navigation may be misleading |

### 10.8 Navigation Component Architecture (Reference)

```
components/global/
├── Header.tsx              ← Primary container (scroll-aware)
│   ├── Logo.tsx             ← Responsive logo with color variants
│   ├── NavLinks.tsx         ← Desktop nav link list
│   ├── MegaMenu.tsx         ← Products mega menu (data-driven)
│   ├── SimpleDropdown.tsx   ← Reusable dropdown for About, Services, Quality, Markets
│   ├── ContactDropdown.tsx  ← Contact card dropdown
│   ├── CTAButton.tsx        ← "Request a Quote" with style variants
│   └── MobileMenuToggle.tsx ← Hamburger button
│
├── MobileNav.tsx            ← Mobile drawer (slide-out)
│   ├── MobileNavLink.tsx    ← Single nav link with optional sub-items
│   ├── MobileAccordion.tsx  ← Accordion for product categories
│   └── MobileContactBlock.tsx ← Utility info + CTA
│
├── TopBar.tsx               ← Utility bar (phone, email, lang, downloads)
├── Breadcrumbs.tsx          ← Auto-generated from route
└── StickyHeader.tsx         ← Scroll behavior wrapper
```

Each component reads from `src/lib/constants/navigation.ts` — no hardcoded nav data in components.

---

## 11. Navigation Summary Table

| Aspect | Desktop | Mobile |
|--------|---------|--------|
| **Structure** | 3-tier: Utility → Primary → Breadcrumbs | 2-tier: Compact header → Slide-out drawer |
| **Product access** | Mega menu (3-column, hover/click) | Accordion in drawer |
| **CTA visibility** | Always visible (right side of header) | Always visible (compact in header + sticky in drawer) |
| **Scroll behavior** | Hide on scroll-down, show on scroll-up, transparent→solid transition | Fixed header (always visible) |
| **Trust signals** | Phone, email, hours, quality nav item, global markets nav item | Phone, email, hours (in drawer) |
| **Max depth to product** | 2 clicks: Products → Product name | 2 taps: Hamburger → Product name |
| **Language support** | Utility bar dropdown (EN/AR/ES/FR) | Drawer footer picker |
| **Keyboard accessible** | Yes (full ARIA) | Yes (focus trap) |
| **Future-ready** | Data-driven mega menu; search bar slot; login slot; multi-language route groups | Same |

---

*End of Navigation System Architecture — v1.0*

*Ready for component implementation.*
