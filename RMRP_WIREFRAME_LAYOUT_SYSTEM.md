# RMRP Global Trade — Wireframe & Layout System

**Viewports:** Desktop (1280px+), Tablet (768-1279px), Mobile (320-767px)
**Grid:** 12-column fluid | **Container:** 1280px max | **Spacing Base:** 4px

---

## 1. Desktop Layout Strategy

### 1.1 Layout Canvas

```
┌─────────────────────────────────────────────────────────────────────┐
│  TOPBAR (40px) — fixed, hides on scroll-down                       │
│  ┌─────────────┬──────────────────────────────────┬──────────────┐ │
│  │ 📞+91 XXX   │                                  │ Downloads EN │ │
│  └─────────────┴──────────────────────────────────┴──────────────┘ │
│  ── 1px gold divider ─────────────────────────────────────────────  │
│  HEADER (72px) — sticky, transparent→solid on scroll                │
│  ┌──────┬──────────────────────────────────────────┬─────────────┐ │
│  │ LOGO │ Home About Products ▼ Svc Quality Markets│ REQ. QUOTE  │ │
│  └──────┴──────────────────────────────────────────┴─────────────┘ │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  MAIN CONTENT (variable height)                                 │ │
│  │                                                                  │ │
│  │  ┌─ Container: max 1280px, centered, padding 0 32px ────────┐ │ │
│  │  │                                                            │ │ │
│  │  │  Sections stack vertically, separated by background color  │ │ │
│  │  │  or spacing                                                │ │ │
│  │  │                                                            │ │ │
│  │  └────────────────────────────────────────────────────────────┘ │ │
│  │                                                                  │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  FOOTER (~450px)                                                │ │
│  │  4-column grid + bottom bar                                     │ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.2 Desktop Breakpoint Behavior

| Breakpoint | Container Width | Padding | Grid Columns | Behavior |
|------------|----------------|---------|-------------|----------|
| 1440px+ | 1280px (centered) | 32px sides | 12 | Max-width constrained |
| 1280-1439px | 100% - 64px | 32px sides | 12 | Full width within padding |
| 1024-1279px | 100% - 48px | 24px sides | 12 | Slightly tighter padding |
| 768-1023px | 100% - 32px | 16px sides | 12→6 | Collapsing columns |

### 1.3 Desktop Layout Rules

| Rule | Specification |
|------|--------------|
| Content width | 1280px max, centered with auto margins |
| Side padding | 32px (both sides) |
| Vertical section spacing | 96px (py-24) |
| Grid gap | 32px (g-8) |
| Two-column splits | 50/50 or 60/40 or 70/30 depending on content |
| Three-column grids | Equal (1fr 1fr 1fr) |
| Four-column grids | Equal (1fr 1fr 1fr 1fr) |
| Text max-width (readable) | 720px (centered) |
| Form max-width | 640px |
| Card min-width | 280px |

---

## 2. Tablet Layout Strategy

### 2.1 Layout Canvas (768-1023px)

```
┌────────────────────────────────────────────┐
│  HEADER (64px, compact)                     │
│  ┌──┬──────────────────────────────┬──────┐ │
│  │☰│ LOGO                         │📞│QUOTE│ │
│  └──┴──────────────────────────────┴──────┘ │
│                                              │
│  ┌─ Container: 100% - 32px, centered ─────┐ │
│  │                                          │ │
│  │  Sections maintain same order as desktop │ │
│  │  Two-column → single column or 2-col    │ │
│  │  with wider cards                        │ │
│  │                                          │ │
│  └──────────────────────────────────────────┘ │
│                                              │
│  FOOTER (2-column + bottom bar)               │
└──────────────────────────────────────────────┘
```

### 2.2 Tablet Layout Rules

| Rule | Change from Desktop |
|------|-------------------|
| Side padding | 16px (reduced) |
| Section spacing | 80px (py-20) |
| Grid columns | 12→6 (auto-wrap) |
| 3-column grids | 3→2 (wraps third item to next row) |
| 4-column grids | 4→2 (2 rows of 2) |
| 2-column splits | 2→1 (stacked, image first or last based on content) |
| Card min-width | 240px (smaller cards) |
| Header height | 64px (reduced) |

### 2.3 Tablet Adaptation by Pattern

| Pattern | Desktop | Tablet |
|---------|---------|--------|
| Text + Image (50/50) | Side by side | Stacked (image above text) |
| 4 product cards | 4-column row | 2-column × 2 rows |
| 3 feature cards | 3-column row | 2-column + 1 below (or all stack) |
| 6 blog cards | 3×2 grid | 2×3 grid |
| Stats bar (5 stats) | Single row | 3+2 split rows |
| Hero section | Full layout | Reduced headline + stacked CTAs |
| Process steps (4) | Horizontal row | 2×2 grid |

---

## 3. Mobile Layout Strategy

### 3.1 Layout Canvas (320-767px)

```
┌──────────────────────┐
│ HEADER (60px)         │
│ ┌──┬──────┬─────────┐│
│ │☰│ LOGO │ 📞 REQ. ││
│ └──┴──────┴─────────┘│
│                       │
│ ┌─ Container: 100% ─┐│
│ │ (16px padding)    ││
│ │                    ││
│ │ ALL SECTIONS       ││
│ │ STACKED VERTICALLY ││
│ │                    ││
│ │ Single column.     ││
│ │ No side-by-side.   ││
│ │                    ││
│ └────────────────────┘│
│                       │
│ FOOTER (single col)    │
└──────────────────────┘
```

### 3.2 Mobile Layout Rules

| Rule | Specification |
|------|--------------|
| Side padding | 16px |
| Section spacing | 64px (py-16) |
| Grid | Single column (12→1) |
| All multi-column layouts | Stacked |
| Card width | Full width (100%) |
| Hero headline | 2.25rem max (36px) |
| Hero subtext | 1rem (16px) |
| Button width | Full width (100%) |
| Button group | Stacked, 12px gap |
| Sticky elements | WhatsApp button (bottom-right) |
| Form fields | Full width, 48px height (touch target) |
| Images | Full width, aspect ratio preserved |

### 3.3 Mobile Adaptation by Pattern

| Desktop Pattern | Mobile Adaptation |
|----------------|-------------------|
| Side-by-side text + image | Stacked (image above text) |
| 3-column feature grid | Single column (1 per row) |
| 4-column product grid | Single column, full-width cards |
| Horizontal process flow | Vertical stepper |
| Horizontal stats bar | 2-3 per row or stacked |
| Multi-column footer | Single column, accordion sections |
| Horizontal testimonials | Single card, swipeable |
| Mega menu | Accordion drawer |
| Table (specs) | Stacked rows (label: value) |

### 3.4 Touch Target Requirements

| Element | Minimum Size | Notes |
|---------|-------------|-------|
| Buttons | 48px height | Full-width on mobile |
| Links in nav | 44px height | Tap target |
| Form inputs | 48px height | Comfortable tap |
| Dropdown selects | 48px height | Native picker preferred |
| Checkboxes/Radios | 44×44px | Extended tap area |
| Cards (clickable) | Full width | Entire card is tappable |
| Accordion headers | 48px height | |

---

## 4. Grid System Usage

### 4.1 Grid Foundation

```css
/* CSS Grid Properties */
--grid-columns: 12;
--grid-gap: 2rem;       /* 32px desktop */
--grid-gap-tablet: 1.5rem;  /* 24px */
--grid-gap-mobile: 1rem;    /* 16px */
--container-max: 1280px;
--container-padding: 2rem;   /* 32px */
--container-padding-mobile: 1rem;  /* 16px */
```

### 4.2 Grid Usage by Component

| Component | Desktop Columns | Tablet Columns | Mobile |
|-----------|----------------|----------------|--------|
| Product Card Grid | 4 (3+3+3+3) | 2 (6+6) | 1 (12) |
| Feature/Differentiator Grid | 3 (4+4+4) | 2 (6+6, third wraps) | 1 (12) |
| Team Grid | 4 (3+3+3+3) | 2 (6+6) | 1 (12) |
| Certification Badges | Auto-fill, min 150px | Auto-fill, min 120px | Auto-fill, min 100px |
| Testimonials | 2 (6+6) or carousel | 1 (12) | 1 (12) |
| Split Layout (text/image) | 6+6 or 5+7 | 1 (12, stacked) | 1 (12, stacked) |
| Stats Bar | 5 equal (span 2+2+2+3+3 or 5×auto) | 3+2 | 2+2+1 or 3+2 |
| Footer Columns | 4 (3+3+3+3) | 2 (6+6) | 1 (12) |
| Process Steps | 4 (3+3+3+3) | 2 (6+6) | 1 (12, vertical) |
| Application Cards | 4 (3+3+3+3) | 2 (6+6) | 1 (12) |
| Blog Listing | 3 (4+4+4) | 2 (6+6) | 1 (12) |
| Blog Sidebar | 8 + 4 | 12 (sidebar below) | 12 (sidebar below) |

### 4.3 Grid Nesting Rules

| Rule | Example |
|------|---------|
| Grid nesting max 2 levels deep | Section > Grid > Card (stop) |
| Nested grids use same gap as parent | Consistency |
| No grid within grid within grid | Prevents layout complexity |
| Sidebar layouts use 8+4, sidebar collapses below on tablet | Blog, product categories |

### 4.4 Grid Edge Cases

| Situation | Handling |
|-----------|----------|
| 5 items in a 4-column grid | 4 + 1 (second row, centered or left-aligned) |
| 7 items in a 3-column grid | 3 + 3 + 1 (third row, centered) |
| Single item in a multi-column grid | Center it (max-width 720px for text, 480px for forms) |
| Items of varying height | Use `align-items: stretch` (equal height) or `start` (top-aligned) |

---

## 5. Content Width Rules

### 5.1 Width Categories

| Category | Width | When Used | Example |
|----------|-------|-----------|---------|
| **Full** | Edge to edge (100vw) | Hero backgrounds, map sections, color transitions | Home hero, global map |
| **Container** | Max 1280px (centered) | All content sections | Product grids, text sections |
| **Narrow** | Max 800px (centered) | Text-heavy content, forms | About story, FAQ, contact form |
| **Extra Narrow** | Max 640px (centered) | Single-focus CTAs, thank-you pages | Hero subtext, CTA blocks |

### 5.2 Width Application Per Section

| Section Type | Width | Rationale |
|-------------|-------|-----------|
| Hero | Full (bg) + Container (content) | Background spans full width, content constrained |
| Stats bar | Container (bg may be full or container) | Numbers need to be readable, not stretched |
| Company intro | Container | Standard content section |
| Product cards | Container | Grid needs containment |
| Differentiators | Container | Text-based, comfortable width |
| Global map | Full + Container overlay | Map needs full width, labels need containment |
| Testimonials | Container | Card-based, contained |
| Export process | Container | Step cards need containment |
| CTA section | Full (bg) + Narrow (content) | Focused conversion, narrow keeps attention |
| Contact preview | Container | Form + info side by side |
| Footer | Full (bg) + Container (content) | Full-width bg, constrained links |

### 5.3 Text Width Management

| Text Type | Max Width | Alignment | Behavior |
|-----------|-----------|-----------|----------|
| Section heading | Container (unrestricted) | Centered or left | Full width available |
| Section subtitle | 650px (centered sections) | Centered | Wrapped text, readable line length |
| Body paragraphs | 720px | Left (in multi-col) or centered | Optimal readability (65-75 chars/line) |
| Hero headline | 800px | Centered or left | Big, impactful, moderate width |
| Hero subtext | 600px | Centered | Supporting text, narrower |
| CTA heading | 700px | Centered | Focused call to action |
| Stats numbers | 200px per stat | Centered within stat block | Self-contained |

---

## 6. Section Spacing Rules

### 6.1 Section Vertical Rhythm

```
DESKTOP SPACING (1280px+)
┌────────────────────────────────────────────┐
│                                            │
│  Section 1 (e.g., Hero)                    │
│                                            │
│  ── 96px (py-24) ──                       │  ← Gap between sections
│                                            │
│  Section 2 (e.g., Stats)                   │
│                                            │
│  ── 96px (py-24) ──                       │
│                                            │
│  Section 3 (e.g., Products)                │
│                                            │
│  ── 96px (py-24) ──                       │
│                                            │
│  ...continues for all sections             │
│                                            │
└────────────────────────────────────────────┘

TABLET SPACING (768-1023px)
┌────────────────────────────────────────────┐
│                                            │
│  Section                                   │
│                                            │
│  ── 80px (py-20) ──                       │
│                                            │
└────────────────────────────────────────────┘

MOBILE SPACING (320-767px)
┌────────────────────────────────────────────┐
│                                            │
│  Section                                   │
│                                            │
│  ── 64px (py-16) ──                       │
│                                            │
└────────────────────────────────────────────┘
```

### 6.2 Section Spacing by Type

| Section Type | Desktop (py) | Tablet (py) | Mobile (py) | Notes |
|-------------|-------------|-------------|-------------|-------|
| Hero (full viewport) | 100vh - header | 100vh - header | 100vh - header | Hero uses viewport, not padding |
| Stats bar | py-12 | py-10 | py-8 | Compact section |
| Content (standard) | py-24 | py-20 | py-16 | Most sections |
| Content (light) | py-16 | py-14 | py-12 | After a dense section |
| CTA block | py-20 | py-16 | py-12 | Before footer |
| Footer | py-16 (content) + py-8 (bar) | py-12 + py-6 | py-10 + py-4 | — |

### 6.3 Within-Section Spacing

| Element Pair | Gap | Notes |
|-------------|-----|-------|
| Overline → Heading | 12px (space-3) | Tight connection |
| Heading → Subtitle | 16px (space-4) | Moderate |
| Subtitle → Content | 48px (space-12) | Clear separation |
| Card → Card (grid) | 32px (space-8) | Grid gap |
| Section header → First content row | 48px (space-12) | — |
| Image gallery → Text below | 24px (space-6) | — |
| Icon → Heading (feature card) | 16px (space-4) | — |
| Heading → Description (card) | 12px (space-3) | — |
| Card content → CTA button | 24px (space-6) | — |
| Form field → Next field | 24px (space-6) | — |
| Paragraph → Next paragraph | 20px (space-5) | Comfortable reading |
| Bullet point → Next bullet | 12px (space-3) | — |
| CTA buttons (two) | 16px (space-4) | Between primary + secondary |

### 6.4 Background Color Transition Strategy

| Transition | Method | Example |
|-----------|--------|---------|
| White → Gray-50 | No effect (just color change) | Product cards → Differentiators |
| Gray-50 → White | No effect (just color change) | Differentiators → Global map |
| White → Navy-900 | Abrupt (premium feel) | Content → CTA section |
| Navy-900 → White | Abrupt (premium feel) | CTA section → Contact preview |
| Any → Image | Image has no background color | Any → Hero or Map |

**Design decision:** No gradient or animated background transitions between sections. Color transitions are instant and deliberate. This aligns with the "premium, unhurried" brand feel.

---

## 7. Card Layout Rules

### 7.1 Card Anatomy (Universal Template)

```
┌──────────────────────────────────────┐
│                                      │
│  ┌────────────────────────────────┐  │
│  │  IMAGE (16:9 or 4:3)           │  │  ← Top, radius-lg top corners
│  │  [object-fit: cover]           │  │
│  └────────────────────────────────┘  │
│                                      │
│  ── 20px padding ──                 │
│                                      │
│  Category Tag (optional)             │  ← Small, uppercase, tracked
│  Heading / Product Name               │  ← Poppins Medium/Semibold
│  Description (1-2 lines)             │  ← Inter Regular, Gray-600
│                                      │
│  Key specs / badges (optional)       │  ← Inline pills or rows
│                                      │
│  ┌────────────────────────────────┐  │
│  │  CTA BUTTON (optional)         │  │  ← Bottom of card
│  └────────────────────────────────┘  │
│                                      │
└──────────────────────────────────────┘
```

### 7.2 Card Types and Specifications

| Card Type | Width | Height | Image Ratio | Padding | Shadow | Hover Effect | CTA |
|-----------|-------|--------|-------------|---------|--------|-------------|-----|
| **Product Card** | 1/4 grid (desktop) | Auto | 16:9 | 24px | sm → lg | lift + image scale | "Request Quote" |
| **Feature Card** | 1/3 grid | Auto | Icon (no image) | 28px | none | color shift | Optional |
| **Team Card** | 1/4 grid | Auto | 4:3 (portrait) | 20px | sm → md | lift | Optional |
| **Testimonial Card** | 1/2 grid or carousel | Auto | No image | 32px | sm | none | None |
| **Certification Card** | Auto-fill | 120px | Icon or badge | 16px | none | subtle glow | None |
| **Application Card** | 1/4 grid | 160px | Icon (40px) | 24px | none | icon color shift | None |
| **Process Step Card** | 1/4 grid | Auto | Icon (48px) | 28px | sm | lift | None |
| **Blog Card** | 1/3 grid | Auto | 16:9 | 24px | sm → md | lift | "Read More" |
| **Packaging Card** | Auto | Auto | Icon or image | 20px | sm | lift | "View Specs" |

### 7.3 Card Layout Rules

| Rule | Specification |
|------|--------------|
| Equal height within same row | Use `display: grid` with `align-items: stretch` |
| Image always at top | Consistent visual entry point |
| CTA aligned to bottom of card | Flexbox with `margin-top: auto` on CTA |
| Padding consistent within card type | All product cards: 24px padding |
| Border-radius consistent | Cards: 12px (lg), images: 12px top only |
| No card within a card | Prevents visual confusion |
| Max 2 CTA buttons per card | One primary, one text link |

### 7.4 Card Grid Behavior

| Number of Cards | Desktop | Tablet | Mobile |
|----------------|---------|--------|--------|
| 1 | 1 col, centered | 1 col | 1 col |
| 2 | 2 col (6+6) | 2 col (6+6) | 1 col (stacked) |
| 3 | 3 col (4+4+4) | 2+1 (6+6, third centered) | 1 col |
| 4 | 4 col (3+3+3+3) | 2+2 (6+6) | 1 col |
| 5 | 4+1 (last centered) | 2+2+1 | 1 col |
| 6 | 3+3 or 4+2 | 2+2+2 | 1 col |

---

## 8. CTA Placement Rules

### 8.1 CTA Location Hierarchy

| Priority Position | Page Location | Device | CTA Type |
|-----------------|--------------|--------|----------|
| **P0** | Sticky floating | All pages, all devices | WhatsApp button |
| **P1** | Hero section | Home, category pages | Gold primary button |
| **P2** | Header (persistent) | All pages | Gold primary button |
| **P3** | Product detail (above fold) | Product pages | Gold primary + Sample button |
| **P4** | Quick pricing strip (below hero) | Product pages | Compact form + submit |
| **P5** | Within section content | All pages | Gold outline or ghost link |
| **P6** | End of section CTA block | All pages | Gold primary + secondary |
| **P7** | Bottom of page (before footer) | All pages | Gold primary + WhatsApp |
| **P8** | Footer | All pages | Ghost link or outline |
| **P9** | Thank-you page | Post-conversion | Secondary actions (download, explore) |

### 8.2 CTA Density by Page

| Page | CTAs Above Fold | Total CTAs | Primary CTA | Secondary CTA |
|------|----------------|------------|-------------|---------------|
| Home | 3 (hero 2 + header 1) | 8 | "Request a Quotation" | "Explore Our Products" |
| About | 1 (header) | 4 | "Download Corporate Profile" | "Contact Our Team" |
| Products | 2 (header + filter CTA) | 5 | Product card clicks | "Submit Bulk Inquiry" |
| Aluminum | 2 (header + hero) | 6 | "Get CIF Quote" | "Chat on WhatsApp" |
| Food & Agro | 2 (header + hero) | 6 | "Request a Sample" | "Get CIF Quote" |
| Export Services | 1 (header) | 4 | "Request a Freight Quote" | "Speak to Export Team" |
| Quality | 1 (header) | 4 | "Download Quality Documents" | "Request a Quote" |
| Global Markets | 1 (header) | 4 | Region profile clicks | "Become a Trade Partner" |
| Contact | 2 (header + form) | 4 | Form submit + WhatsApp | "Chat on WhatsApp" |

### 8.3 CTA Visual Weight Rules

| CTA Priority | Background | Text | Border | Shadow | Hover |
|-------------|------------|------|--------|--------|-------|
| **Primary** | Gold-500 | White, Semibold | None | shadow-gold (hover) | translateY(-2px) |
| **Secondary** | Navy-900 | Gold-500, Semibold | 1.5px Gold-500 | None | opacity shift |
| **Tertiary** | Transparent | Navy-900 or Gold-500 | None | None | underline or gold text |
| **WhatsApp** | #25D366 | White | None | shadow | slight scale |

### 8.4 CTA Stacking Rules

| Scenario | Desktop | Mobile |
|----------|---------|--------|
| Two CTAs side by side | Both same height, 16px gap | Stacked full-width, 12px gap |
| Three CTAs | Primary + Secondary + Ghost | Stacked, primary full-width, others below |
| CTA + phone number | CTA side, phone below | CTA full-width, phone below |
| Form + submit | Inline or form-based | Full-width submit |

---

## 9. Visual Hierarchy Rules

### 9.1 Hierarchy Drivers

| Factor | How It's Used | Example |
|--------|--------------|---------|
| **Size** | Largest elements get attention first | Hero headline > section heading > body text |
| **Color** | Gold draws the eye on navy/white | Gold CTAs, gold stat numbers, gold accents |
| **Position** | Top/left scanned before bottom/right | Hero position, left-aligned images |
| **Whitespace** | More space around = more importance | Hero spacing, CTA breathing room |
| **Motion** | Animated elements attract attention | Counter animations, text reveal, hover effects |
| **Contrast** | High contrast = high importance | White text on navy, gold on white |

### 9.2 Visual Priority Per Page

**Home Page:**
```
1. Hero headline (largest text on site, highest contrast)
2. Primary CTA (Gold-500 button)
3. Stats numbers (Gold-500, animated)
4. Product category cards (large images, clear hierarchy)
5. Secondary CTA (Gold outline button)
6. Section headings (Poppins Semibold)
7. Product names (within cards)
8. Body text (Inter Regular)
```

**Product Page:**
```
1. Product name (H1, largest)
2. Key specification strip (pills/badges)
3. Primary CTA "Get CIF Quote" (Gold button)
4. Product image (large, high quality)
5. Certifications badges
6. Specs table (technical buyers scan this immediately)
7. Body content
8. Related products (lowest priority on page)
```

### 9.3 Typographic Hierarchy Per Section

| Section | Hierarchy |
|---------|-----------|
| Hero | H1 (6xl) → Subtitle (xl) → CTAs → Stats (2xl numbers) |
| Section header | Overline (xs, uppercase) → H2 (4xl) → Subtitle (lg) |
| Product card | Category tag (xs) → Product name (xl) → Description (sm) → Specs (xs) |
| Feature card | Icon → Heading (xl) → Description (base) |
| Testimonial | Quote (lg) → Attribution name (base) → Title (sm) → Company (sm) |
| Process step | Step number → Icon → Heading (lg) → Description (sm) → Timeline (xs) |
| Stats block | Number (5xl, Gold) → Label (sm, uppercase) |
| Form | Label (sm, Medium) → Input → Error msg (xs) |
| Footer | Column heading (sm, Semibold) → Links (sm, Regular) |

### 9.4 Color in Hierarchy

| Color | Meaning | Used For |
|-------|---------|----------|
| Gold-500 | Action, accent, value | CTAs, stat numbers, decorative lines, hover states |
| Navy-900 | Authority, stability, brand | Headings, primary backgrounds, footer |
| White | Clean, open, premium | Page backgrounds, card backgrounds, text on navy |
| Gray-50 | Subdued, secondary | Alternate section backgrounds |
| Gray-700 | Readable body | Primary body text on light backgrounds |
| Gray-100 | Soft text on dark | Body text on navy backgrounds |
| Gray-400 | Lowest emphasis | Meta data, captions, placeholders |

---

## 10. Content Density Guidelines

### 10.1 Density Rules by Page Type

| Page Type | Density | Rationale | Max Words per Section |
|-----------|---------|-----------|----------------------|
| Home | Low (spacious) | First impression, needs room to breathe | 30-50 per text block |
| About | Medium | Storytelling needs some density | 80-120 per paragraph |
| Product detail | Medium-High | Technical specs require density | Specs: dense, Description: 100-150 |
| Category pages | Medium | Gateway to products, not final destination | 50-80 per category |
| Services | Medium | Process explanations need moderate text | 60-100 per step |
| Quality | Medium | Technical but readable | 50-80 per section |
| Global Markets | Medium | Region profiles need moderate text | 60-100 per region |
| Contact | Low | Form-focused, minimal text | 10-20 per label/instruction |
| Blog | High | Content is the product | 500-1500 per article |

### 10.2 Line Length Control

| Device | Max Characters Per Line | Method |
|--------|------------------------|--------|
| Desktop (text sections) | 75 | Max-width: 720px |
| Desktop (grid sections) | 55 per card | Card width constraint |
| Tablet | 65 | Reduced container width |
| Mobile | 45 | 16px padding, 100% width |

### 10.3 Paragraph Density

| Context | Max Lines | Max Words | Notes |
|---------|-----------|-----------|-------|
| Hero subtext | 3 | 30 | Brief, impactful |
| Body paragraph | 5 | 100 | Readable chunk |
| Card description | 3 | 40 | Scannable |
| Feature description | 3 | 35 | Icon + short text |
| Testimonial quote | 6 | 80 | Full thought |
| Process step | 3 | 35 | Clear action |
| Section subtitle | 2 | 25 | Supplementary |

### 10.4 White Space Ratio

| Page | Content % | White Space % | Feeling |
|------|-----------|--------------|---------|
| Home | 40% | 60% | Premium, luxurious |
| About | 50% | 50% | Comfortable, readable |
| Product detail | 55% | 45% | Informative, professional |
| Category pages | 45% | 55% | Visual, scannable |
| Services | 50% | 50% | Balanced |
| Quality | 50% | 50% | Balanced |
| Markets | 45% | 55% | Visual (map-focused) |
| Contact | 40% | 60% | Focused on form |
| Blog | 65% | 35% | Content-heavy |

---

## 11. Page-by-Page Layout Specifications

### 11.1 HOME PAGE

**Layout Structure:**

```
Full-width bg (world map)    
┌──────────────────────────────────────────────────────────┐
│  HERO (100vh - header)                                   │
│  ┌─ Container (1280px), content centered ──────────┐    │
│  │  Headline: 6xl, Poppins Bold, White, centered    │    │
│  │  Subtitle: xl, Inter, Gray-100, centered, 600px  │    │
│  │  CTAs: side by side, centered, 16px gap          │    │
│  │  Stats strip: 5 stats, single row, bottom        │    │
│  └──────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  STATS BAR (100px)                                       │
│  5 stat blocks, single row, centered                     │
│  Content at top: numbers above, labels below             │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  COMPANY INTRO (550px)                                   │
│  SplitLayout: 6+6 (text left, image right)               │
│  Text: left-aligned within column                        │
│  Image: 16:9, 600px height max, radius-lg                │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  PRODUCT CATEGORIES (650px)                              │
│  Section header centered (overline + heading + subtitle) │
│  3 cards (4+4+4), images at top, CTAs at bottom          │
│  Bottom CTA: centered, below cards                       │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  DIFFERENTIATORS (550px)                                  │
│  Section header centered                                  │
│  4 cards (3+3+3+3), icon + heading + description          │
│  No borders, clean typographic layout                     │
└──────────────────────────────────────────────────────────┘

Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  GLOBAL REACH MAP (550px)                                │
│  Section header centered (white text)                    │
│  World map SVG centered                                  │
│  Region stats row below map                              │
│  "Explore All Markets" CTA centered                      │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  TESTIMONIALS (500px)                                     │
│  Section header centered                                  │
│  Carousel: 1 card visible, partial peeks on sides        │
│  Dots + arrows for navigation                            │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  EXPORT PROCESS (500px)                                   │
│  Section header centered                                  │
│  4 steps (3+3+3+3), horizontal flow, connecting arrows   │
│  Timeline summary bar below                               │
│  "Start Your Export Inquiry" CTA centered                 │
└──────────────────────────────────────────────────────────┘

Navy-900 bg (full width)
┌─ Narrow Container (800px) ──────────────────────────────┐
│  FINAL CTA (400px)                                       │
│  Heading centered, gold divider, subtext, CTAs stacked   │
│  Phone number below CTAs                                 │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  CONTACT PREVIEW (400px)                                  │
│  Section header centered                                  │
│  SplitLayout: 7+5 (form left, contact info right)        │
└──────────────────────────────────────────────────────────┘

**CTA Locations on Home:**
1. Hero: "Request a Quotation" (Gold primary) + "Explore Our Products" (Gold outline)
2. Product categories: Per-card CTAs + bottom "View Complete Range"
3. Global map: "Explore All Markets" (ghost)
4. Export process: "Start Your Export Inquiry" (Gold primary)
5. Final CTA: "Request a Quotation" (Gold primary) + "Speak to Our Team" (White outline)
6. Contact preview: "Submit Quick Inquiry" (Gold primary) + "Chat on WhatsApp" (Gold outline)

**Mobile Adaptations:**
- Hero: Headline 2.5rem, CTAs stacked, stats 2×2 grid
- Company intro: Image above text
- Product categories: Stacked cards, full-width
- Differentiators: Single column
- Global map: Simplified static map, region buttons below
- Testimonials: Single card, swipeable
- Export process: Vertical stepper
- Final CTA: Full-width buttons, stacked
- Contact preview: Form above contact info

---

### 11.2 ABOUT US PAGE

**Layout Structure:**

```
Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  HERO BANNER (350px)                                     │
│  Content centered: Overline (gold) → H1 → Subtitle      │
│  Small stats row below subtitle                          │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  COMPANY OVERVIEW (500px)                                │
│  SplitLayout: 6+6 (text left, facility image right)      │
│  2-3 paragraphs, left-aligned                            │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Narrow Container (800px) ──────────────────────────────┐
│  MISSION, VISION & VALUES (350px)                        │
│  3 columns (4+4+4), centered headings, body text below   │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  COMPANY TIMELINE (450px)                                 │
│  Horizontal timeline (desktop), vertical (mobile)         │
│  5-6 milestones with year + description                   │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  LEADERSHIP TEAM (500px)                                  │
│  Section header centered                                  │
│  4 cards (3+3+3+3) — headshot, name, title, bio          │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  INFRASTRUCTURE (500px)                                   │
│  Image gallery (3-4 images, 2×2 grid)                    │
│  Text section below: Manufacturing, Warehouse, Lab        │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  CERTIFICATIONS (400px)                                   │
│  BadgeGrid: auto-fill, min 150px badges                   │
│  "Download All Certificates" CTA below                    │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  WHY CHOOSE RMRP (400px)                                  │
│  4 differentiator cards (3+3+3+3)                         │
│  "Contact Our Team" CTA at bottom                         │
└──────────────────────────────────────────────────────────┘

Navy-900 bg (full width)
┌─ Narrow Container (800px) ──────────────────────────────┐
│  CTA (350px)                                              │
│  "Download Corporate Profile" + "Contact Our Team"        │
└──────────────────────────────────────────────────────────┘

**CTA Locations on About:**
1. Certifications: "Download All Certificates" (ghost)
2. Why Choose: "Contact Our Team" (Gold outline)
3. Final CTA: "Download Corporate Profile" (Gold primary) + "Contact Our Team" (White outline)

---

### 11.3 PRODUCTS (Master Listing)

**Layout Structure:**

```
Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  HERO BANNER (300px)                                      │
│  Overline + H1 + Subtitle, centered                      │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  PRODUCTS CONTENT (dynamic height)                        │
│                                                           │
│  Category Filter Bar:                                     │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  [All] [Metals] [Food & Agro] [Grains & Flour]     │  │  ← Horizontal tabs, centered
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
│  Product Grid: 4 columns (3+3+3+3)                       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                    │
│  │Card1 │ │Card2 │ │Card3 │ │Card4 │                    │
│  └──────┘ └──────┘ └──────┘ └──────┘                    │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                    │
│  │Card5 │ │Card6 │ │Card7 │ │Card8 │                    │
│  └──────┘ └──────┘ └──────┘ └──────┘                    │
│                                                           │
│  (grid adapts to filtered results)                        │
│                                                           │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  BULK INQUIRY CTA (350px)                                 │
│  Centered: heading + subtext + "Submit Bulk Inquiry"      │
└──────────────────────────────────────────────────────────┘

**CTA Locations on Products:**
1. Each product card: "Request Quote" (Gold button on card)
2. Bulk inquiry section: "Submit Bulk Inquiry" (Gold primary)

---

### 11.4 ALUMINUM PRODUCTS (Category Page)

**Layout Structure:**

```
Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  CATEGORY HERO (350px)                                    │
│  SplitLayout: 6+6 (text left, image right)                │
│  Text: Overline → H1 → Subtitle → Key spec highlights    │
│  Image: Large aluminum product photo                      │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  PRODUCT CARDS (500px)                                    │
│  2 large cards (6+6): Aluminum Ingots + Aluminum Scrap    │
│  Each: large image, spec preview, "View Details" CTA      │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  GRADE GUIDE / SPEC OVERVIEW (500px)                      │
│  Two accordion sections or tables: Ingots + Scrap         │
│  Left-aligned text, full-width tables                     │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  APPLICATIONS (350px)                                     │
│  4 application cards (3+3+3+3)                            │
│  Icon + industry name + description                       │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  PACKAGING & SHIPPING (350px)                             │
│  2-3 packaging cards + shipping info table                │
└──────────────────────────────────────────────────────────┘

Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  CTA (350px)                                              │
│  "Get a Quote for Aluminum" + "Chat on WhatsApp"          │
└──────────────────────────────────────────────────────────┘

---

### 11.5 FOOD & AGRO PRODUCTS (Category Page)

**Layout Structure:**

```
Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  CATEGORY HERO (350px)                                    │
│  SplitLayout: 6+6 (text left, image right)                │
└──────────────────────────────────────────────────────────┘

White bg (full width)
┌─ Full Width (no container) ─────────────────────────────┐
│  FOOD SAFETY BANNER (150px)                               │
│  Cert badges + "FSSAI | HACCP | ISO 22000 | Halal"       │
│  Full-width background: Gold-50 tint                      │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  PRODUCT GRID (dynamic)                                   │
│  3 columns (4+4+4) — 6 products = 2 rows of 3            │
│  Each card: image, name, key spec, "View Details" +       │
│  "Request Sample" CTAs                                    │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  PROCESSING & SOURCING (450px)                            │
│  SplitLayout: 6+6 (text left, facility image right)       │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  PACKAGING STANDARDS (350px)                              │
│  3-4 packaging type cards (3+3+3+3)                       │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  QUALITY CONTROL (350px)                                  │
│  3-step process: Incoming → Processing → Final QC         │
└──────────────────────────────────────────────────────────┘

Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  SAMPLE CTA (350px)                                       │
│  "Request a Free Sample" (Gold primary, prominent)        │
└──────────────────────────────────────────────────────────┘

---

### 11.6 EXPORT SERVICES

**Layout Structure:**

```
Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  HERO BANNER (350px) — centered text + CTA               │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  EXPORT PROCESS (600px)                                   │
│  6-step horizontal flow (2+2+2 per row or 6-col grid)     │
│  Each: icon + step name + description + timeline          │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  SHIPPING & LOGISTICS (450px)                             │
│  3 cards (4+4+4): Ocean, Air, Multi-modal                │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  DOCUMENTATION & COMPLIANCE (400px)                       │
│  Accordion list: each document expandable                 │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  INCOTERMS (350px)                                        │
│  Table or card grid: EXW, FOB, CIF, CFR, DAP, DDP        │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  PAYMENT TERMS (350px)                                    │
│  3 cards (4+4+4): LC, TT, DP                              │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  PORTS & DESTINATIONS (350px)                             │
│  Map or region list with port names                       │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  CASE STUDIES (400px)                                     │
│  2-3 case study cards (6+6 or 4+4+4)                     │
└──────────────────────────────────────────────────────────┘

Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  CTA (350px) — "Request a Freight Quote"                  │
└──────────────────────────────────────────────────────────┘

---

### 11.7 QUALITY ASSURANCE

**Layout Structure:**

```
Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  HERO BANNER (350px) — centered                           │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Narrow Container (800px) ──────────────────────────────┐
│  QUALITY POLICY (300px) — centered text                   │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  QUALITY CONTROL PROCESS (500px)                          │
│  3-column process (4+4+4): Inspection → In-Process → Test│
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  LABORATORY & TESTING (450px)                             │
│  Image gallery + testing capabilities grid                │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  CERTIFICATIONS (400px)                                   │
│  BadgeGrid with expandable details + download links       │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  TRACEABILITY (300px) — centered text                     │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  QUALITY REPORTS (300px)                                  │
│  Download CTA: "Sample COA" for metals + for food         │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  THIRD-PARTY INSPECTION (300px) — centered                │
│  "We welcome SGS, Bureau Veritas, Intertek inspection"    │
└──────────────────────────────────────────────────────────┘

Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  CTA (350px) — "Download Quality Documents" + "Request"   │
└──────────────────────────────────────────────────────────┘

---

### 11.8 GLOBAL MARKETS

**Layout Structure:**

```
Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  HERO BANNER (350px) — centered, world map bg             │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  INTERACTIVE WORLD MAP (500px)                            │
│  Full-width container, centered map                       │
│  Region stats row below map                               │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  REGION PROFILES (dynamic)                                │
│  3+3 grid of region cards (6+6 per row, 2 rows)          │
│  Each: region name, flag, products, key ports, CTA        │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  TRADE ROUTES (350px) — map or route table                │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  CASE STUDIES (450px)                                     │
│  3 cards (4+4+4): one per major region                    │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  TRADE PARTNERS (350px)                                   │
│  Partner logos (if available) + "Become a Partner" CTA    │
└──────────────────────────────────────────────────────────┘

Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  CTA (350px) — "Inquire About Your Region" + "Partner"    │
└──────────────────────────────────────────────────────────┘

---

### 11.9 CONTACT US

**Layout Structure:**

```
Navy-900 bg (full width)
┌─ Container (1280px) ────────────────────────────────────┐
│  HERO BANNER (300px) — centered, compact                  │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  CONTACT CONTENT (700px)                                  │
│  SplitLayout: 7+5 (form left, contact info right)         │
│                                                           │
│  Left (7 cols): ContactForm                               │
│    - 7 fields: Name, Email, Phone, Company, Country,      │
│      Product Interest (multi-select), Message             │
│    - Full-width fields, stacked vertically                │
│    - Submit button: full-width, Gold primary              │
│                                                           │
│  Right (5 cols): ContactInfo                              │
│    - Address (with map link)                              │
│    - Phone (clickable)                                    │
│    - Email (clickable)                                    │
│    - Business hours                                       │
│    - WhatsApp CTA button (prominent)                      │
│    - "Chat on WhatsApp" with response time note           │
│                                                           │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (1280px) ────────────────────────────────────┐
│  PRODUCT INQUIRY QUICK LINKS (250px)                      │
│  4 shortcut cards (3+3+3+3): Need Aluminum? Need Food?    │
│  Need a Quote? Request a Sample?                          │
└──────────────────────────────────────────────────────────┘

White bg
┌─ Container (1280px) ────────────────────────────────────┐
│  MAP & LOCATION (400px)                                   │
│  MapEmbed (lazy-loaded), address text below               │
└──────────────────────────────────────────────────────────┘

Gray-50 bg
┌─ Container (800px narrow) ──────────────────────────────┐
│  FAQ (500px)                                              │
│  Category accordion: Orders, Shipping, Quality, Payment   │
│  3-5 questions per category                               │
└──────────────────────────────────────────────────────────┘

Navy-900 bg (full width)
┌─ Narrow Container (640px) ──────────────────────────────┐
│  FINAL CTA (250px)                                        │
│  Response time note + payment terms recap + phone number  │
└──────────────────────────────────────────────────────────┘

**CTA Locations on Contact:**
1. Form submit: "Submit Inquiry" (Gold primary, full-width)
2. Sidebar: "Chat on WhatsApp" (Green/gold CTA)
3. Quick links: 4 cards with individual destinations
4. Final CTA: Phone number + trust recap

---

## Layout System Summary

| Aspect | Desktop | Tablet | Mobile |
|--------|---------|--------|--------|
| Container | 1280px max | 100% - 32px | 100% - 32px |
| Grid | 12 columns | 6 columns (auto-wrap) | 1 column |
| Gap | 32px | 24px | 16px |
| Section spacing | 96px (py-24) | 80px (py-20) | 64px (py-16) |
| Side padding | 32px | 16px | 16px |
| Card columns | 4 | 2 | 1 |
| Text max-width | 720px | 100% | 100% |
| Form max-width | 640px | 480px | 100% |
| Hero headline | 4.5rem (72px) | 3rem (48px) | 2.25rem (36px) |
| Header height | 72px | 64px | 60px |
| CTA sizing | Inline | Inline or full | Full-width |
| Image behavior | Side by side | Side by side or stack | Stacked |

---

*End of Wireframe & Layout System — v1.0*

*Ready for UI design and visual mockup phase.*
