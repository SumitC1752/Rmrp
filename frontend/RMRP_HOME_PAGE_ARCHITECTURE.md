# RMRP Global Trade — Home Page Architecture

**Type:** Premium B2B Corporate Homepage | **Audience:** International Importers, Distributors, Industrial Buyers
**Platform:** Desktop-first (B2B), fully responsive | **Tone:** Professional, Global, Trustworthy

---

## 1. Visual Priority Map

```
Above the Fold (0–900px viewport)
═══════════════════════════════════════════════════════════════
│                                                             │
│  [TopBar — utility: phone | email | language | downloads]   │  ← 40px
│  ─── gold divider line (1px) ───────                        │
│  [Header — logo | nav | "Request a Quote" CTA]              │  ← 72px
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │   HERO SECTION (100vh - header)                     │    │
│  │                                                     │    │
│  │   "Global Trade, Trust Delivered"                   │    │  ← CRITICAL ZONE
│  │   Premium manufacturer, trader & exporter of        │    │
│  │   aluminum and agro commodities to 25+ countries    │    │
│  │                                                     │    │
│  │   ┌──────────────────┐  ┌─────────────────┐         │    │
│  │   │ Explore Our      │  │ Request a       │         │    │
│  │   │ Products   →     │  │ Quotation  →    │         │    │
│  │   └──────────────────┘  └─────────────────┘         │    │
│  │                                                     │    │
│  │   ┌─────────────────────────────────────────┐       │    │
│  │   │ 25+ Countries │ 250K+ MT │ 12 Products  │       │    │  ← stats strip
│  │   └─────────────────────────────────────────┘       │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
═══════════════════════════════════════════════════════════════
Below the Fold (scrolled)
```

### Visual Priority Rules

| Element | Visual Weight | Rationale |
|---------|--------------|-----------|
| Hero headline | Maximum (Poppins Bold, 4.5rem, White) | The single most important text on the site — must be read first |
| Primary CTA (gold) | High (Gold-500 bg, White text, shadow-gold) | The action we want most users to take |
| Secondary CTA (outline) | Medium-High (Navy-900 bg, Gold-500 text, gold border) | Alternative action for exploratory users |
| Background map | Low-Medium (dark overlay, muted) | Visual context — must not compete with text |
| Stats strip | Medium (Gold numbers, white labels) | Social proof — visible but secondary to headline |
| Logo | Medium (left, consistent) | Brand anchor |
| Nav links | Low-Medium (Inter Medium, white/light gray) | Navigation — should be accessible but not compete with hero |

---

## 2. Complete Section Sequence

| # | Section Name | Viewport Height | Animation Trigger | Bg Color |
|---|-------------|----------------|-------------------|----------|
| 0 | **TopBar** | 40px | Always visible on home, hides on scroll down, reappears on scroll up | Navy-900 |
| 0 | **Header** | 72px | Transparent on hero, solid white on scroll | Transparent → White |
| 1 | **Hero** | 100vh minus header | On load (staggered) | Navy-900 (image background) |
| 2 | **Trust Strip** | 100px | On scroll reveal (counter animation) | White |
| 3 | **Company Introduction** | ~550px | On scroll reveal (fade-in-up) | White |
| 4 | **Product Categories** | ~650px | On scroll reveal (stagger cards) | Gray-50 |
| 5 | **Differentiators (Why RMRP)** | ~550px | On scroll reveal (stagger cards) | White |
| 6 | **Global Reach Map** | ~550px | On scroll reveal (map + markers animate in) | Navy-900 |
| 7 | **Testimonials** | ~500px | On scroll reveal (carousel auto-plays) | White |
| 8 | **Export Process** | ~500px | On scroll reveal (steps animate sequentially) | Gray-50 |
| 9 | **Final CTA** | ~400px | On scroll reveal (fade-in-up) | Navy-900 |
| 10 | **Contact Preview** | ~400px | On scroll reveal | White |
| — | **Footer** | ~450px | Static (no animation) | Navy-900 |

---

## 3. Section-by-Section Architecture

### SECTION 0: TopBar

#### Why it exists

Utility bar that provides immediate access to contact information and language selection without cluttering the main navigation. In B2B export, having the phone number visible at all times signals accessibility. The language switcher signals international readiness.

#### Content

| Element | Value | Visual |
|---------|-------|--------|
| Phone icon + number | "+91-XXX-XXXXXXX" | Left-aligned, Inter 13px, Gray-100, clickable (tel:) |
| Email icon + address | "info@rmrpglobaltrade.com" | Left-aligned after phone, Gray-100, clickable (mailto:) |
| Downloads | "📄 Downloads" | Right-aligned, Gray-100, links to `/downloads` |
| Language | "🌐 EN ▼" | Right-aligned after downloads, Gray-100, dropdown with EN/AR/ES/FR |
| Request a Quote | "Request a Quote" | Right-aligned, Gold-500 text, links to `/request-quote` |

**Note:** On home page, TopBar has reduced prominence (smaller font, no background other than Navy-900). On scroll, it remains but collapses on scroll-down (reappears on scroll-up).

#### Action the user should take

- **Primary:** None (utility navigation)
- **Secondary:** Click phone to call, email to write, or downloads to access resources

---

### SECTION 0: Header

#### Why it exists

Primary navigation system. On the home page hero, the header must be transparent (overlaid on hero background) to maintain visual impact. On scroll, it becomes solid white for readability. This transition signals polish and professionalism.

#### Content (Transparent State — Home Hero)

| Position | Element | Styling |
|----------|---------|---------|
| Left | Logo (white version) | SVG logo in white/gold, height 36px |
| Center | Nav links: Home, About, Products ▼, Export Services, Quality, Global Markets, Contact | Inter 14px Medium, White, 38px gaps |
| Right | "Request a Quote" button | Secondary button style (navy bg with gold border, gold text), compact size |

#### Scroll Behavior

| Scroll Position | Header State | Background | Logo | Nav Text | CTA Button |
|----------------|-------------|------------|------|----------|------------|
| 0–100px | Transparent | None (visible hero) | White/gold | White | Navy+Gold outline |
| 100–200px | Transitioning | White (opacity ramps 0→1 via backdrop-filter) | — | — | — |
| 200px+ | Solid | White with `--shadow-sm` | Navy/gold | Navy-900 | Primary gold style (Gold-500 bg, white text) |

**Transition:** 300ms ease-out, driven by `useScrollPosition` hook.

#### Action the user should take

- Navigate to any primary section of the site
- Click "Request a Quote" to go directly to the inquiry flow
- Hover over Products to open the mega menu and browse by division

---

### SECTION 1: Hero

#### Why it exists

The hero is the most critical section on the entire website. B2B buyers decide within 5–8 seconds whether to stay or leave. The hero must answer three questions immediately:

1. **"What does this company do?"** → "Premium manufacturer, trader & exporter of aluminum and agro commodities"
2. **"Are they relevant to me?"** → "Exporting to 25+ countries worldwide"
3. **"Are they a serious company?"** → Visual quality, typography, stat callout

#### Content Strategy

**Background (Visual):**
- Full-viewport image/graphic: world map with illuminated trade routes originating from India
- Subtle animated elements: pulsing dots on served countries, slowly moving trade route lines (dashed gold lines animating along paths)
- Navy gradient overlay: `linear-gradient(135deg, rgba(11,31,58,0.95) 0%, rgba(11,31,58,0.70) 50%, rgba(11,31,58,0.30) 100%)`
- The overlay ensures text readability while keeping the map visible
- **Critical rule:** The map must be clearly a trade map (shipping routes, containers, ports) — not a generic world map. If using an image, it should show shipping containers or cargo ships at port composited with the map.

**Headline (Primary):**
```
"Global Trade, Trust Delivered."
```
- Poppins Bold, 4.5rem (72px), White, line-height 1.1
- TextReveal animation: character-by-character reveal, 800ms total, stagger 30ms per char
- The period at the end is deliberate — it makes the statement authoritative, not open-ended

**Subheadline (Secondary):**
```
"Premium manufacturer, trader & exporter of aluminum and agro commodities — 
serving foundries, food processors, and distributors across 25+ countries worldwide."
```
- Inter Regular, 1.25rem (20px), Gray-100, line-height 1.6
- Max-width: 650px
- Fade-in animation, 500ms, 300ms delay after headline

**Primary CTA:**
```
[ Request a Quotation → ]
```
- Gold-500 background, White text, Inter Semibold 14px uppercase, 0.04em tracking
- 14px/40px padding
- `--shadow-gold` on hover
- Links to `/request-quote`
- Animation: Fade-in, 400ms, 600ms delay

**Secondary CTA:**
```
[ Explore Our Products ]
```
- Transparent background, Gold-500 text, 1.5px Gold-500 border
- Same sizing as primary CTA
- Links to `/products`
- Animation: Fade-in, 400ms, 700ms delay (slightly after primary)

**Stats Callout (Bottom strip of hero):**
```
┌─────────────────────────────────────────────────────────────────┐
│  25+     │  250,000+  │  12        │  150+      │  8+         │
│  Countries│  MT Exported│  Products  │  Clients   │  Years      │
└─────────────────────────────────────────────────────────────────┘
```
- Overlaps the hero bottom edge (position: absolute, bottom: 0)
- Translucent white background with blur (glassmorphism)
- Numbers: Poppins Bold, 2rem, Gold-500
- Labels: Inter Medium, 0.75rem, Gray-600, uppercase, 0.05em tracking
- These stats remain visible here rather than in a separate section below, because they provide immediate social proof at the point of first impression

#### Trust Building Strategy

| Element | Trust Signal | Mechanism |
|---------|-------------|-----------|
| Country count (25+) | Scale/breadth | "They serve many markets — they're not a small local player" |
| Volume exported (250K+ MT) | Operational maturity | "They've moved real volume — they have logistics experience" |
| Product count (12) | Breadth | "They have what I need — and more" |
| Client count (150+) | Social proof | "Many others trust them" |
| Years in business (8+) | Stability | "They've survived and grown — they're not a fly-by-night" |
| World map visual | Global operations | "They're not a desk trader — they have real global reach" |
| Premium typography + layout | Professionalism | "They invest in quality presentation — likely invest in quality products" |

#### CTA Strategy

| CTA | Style | Target | Intent |
|-----|-------|--------|--------|
| "Request a Quotation" | Gold primary | Ready-to-buy buyers | High intent — they know what they want |
| "Explore Our Products" | Gold outline | Exploratory buyers | Medium intent — need to see offerings first |

**Psychology:** Two CTAs allow the buyer to self-select their intent level. Ready buyers are not forced to browse. Exploratory buyers are not pressured to commit. Both paths lead toward conversion.

#### Animation Opportunities

| Element | Animation | Duration | Delay |
|---------|-----------|----------|-------|
| Background parallax | Subtle translateY on scroll (speed: 0.3) | Continuous | — |
| Trade route lines | Stroke-dashoffset animation (lines "draw" on load) | 2s | 500ms |
| Pulsing country dots | Scale opacity pulse (1→1.2→1) | 3s loop | Staggered per dot |
| Headline | TextReveal (char-by-char fade-in-up) | 800ms | 200ms |
| Subheadline | Fade-in-up (Y: 20px → 0) | 500ms | 600ms |
| Primary CTA | Fade-in-up (Y: 15px → 0) | 400ms | 900ms |
| Secondary CTA | Fade-in-up (Y: 15px → 0) | 400ms | 1000ms |
| Stats strip | Fade-in-up (Y: 10px → 0) | 400ms | 1200ms |
| Stats numbers | Counter animation (0 → target value) | 1500ms | 1400ms |

#### Mobile Layout Strategy

| Element | Mobile Behavior |
|---------|----------------|
| Background | Static image (no parallax), reduced overlay (navy 80%) |
| Headline | 2.5rem (40px), max 4 words per line |
| Subheadline | 1rem (16px), full-width |
| CTAs | Stacked vertically, full-width, 16px gap |
| Stats strip | 2×2 grid (not single row), text align center |
| Stats card | Reduced padding, smaller numbers (1.5rem) |
| TopBar | Hidden on mobile (phone + email move to mobile nav) |
| Header | Standard mobile nav (hamburger) |

---

### SECTION 2: Trust Strip (Stats Bar)

#### Why it exists

Transition from the emotional/visual impact of the hero to the rational/content-driven sections below. The stats strip reinforces the hero's claims with specific, hard numbers. It serves as a "second hook" — if the hero didn't fully convert the user, the stats might.

This section also serves as a visual separator between the dark hero and the white content sections.

#### Content

**Layout:** Single horizontal row of 5 stat blocks (desktop), 3+2 grid (tablet), 2+2+1 grid (mobile).

Each stat block:
```
┌─────────────────┐
│      25+        │  ← Poppins Bold, 2.5rem, Gold-500
│   Countries     │  ← Inter Medium, 0.875rem, Navy-900, uppercase
└─────────────────┘
```

Stats data:
1. "25+" / "Countries Served"
2. "250,000+" / "Metric Tons Exported"
3. "12" / "Premium Products"
4. "150+" / "Global Clients"
5. "8+" / "Years of Excellence"

#### Trust Building Strategy

| Stat | What It Signals |
|------|-----------------|
| Countries | Market reach, experience with diverse regulations |
| Volume | Logistics capability, supplier network strength |
| Products | Breadth, one-stop-shop potential |
| Clients | Social proof, existing demand |
| Years | Stability, longevity, reliability |

#### CTA Strategy

**No direct CTA.** This section conditions trust. The action is indirect: "I should keep scrolling to learn more."

#### Animation Opportunities

| Element | Animation |
|---------|-----------|
| Each stat number | Counter animation (0 → target), 1.5s, ease-out-expo |
| Stat blocks | Staggered fade-in-up (100ms baseline + 80ms per block) |
| Gold-500 number color | Subtle shimmer effect on load (brief gradient sweep) |

**Trigger:** Intersection Observer at 20% visibility.

#### Mobile Layout Strategy

- 3 columns on first row, 2 columns on second row
- Numbers: 1.75rem on mobile
- Labels: 0.75rem
- Reduced gap between blocks
- Counter animation still executes (shorter distance to count, offset adjusted)

---

### SECTION 3: Company Introduction

#### Why it exists

After establishing scale (stats), the buyer asks "Who are they?" This section provides the narrative answer. It humanizes the company and tells the origin story. For B2B, a genuine company story with real imagery is a trust differentiator.

#### Content Strategy

**Layout:** SplitLayout (60/40 — content left, image right).

**Left Column (Content):**
```
Overline: "Welcome to RMRP Global Trade" (Gold-500, Inter 12px, uppercase, tracked)
Heading: "Your Trusted Partner in Global Commodity Trade" (Poppins Semibold, 2.25rem, Navy-900)
Body paragraph 1:
"Founded in [year], RMRP Global Trade has grown from a focused metal trading operation 
into a diversified manufacturer, trader, and exporter serving industries across 
two critical supply chains: aluminum commodities and processed food & agro products."

Body paragraph 2:
"Our dual-vertical model is rare in the export industry. We combine deep technical 
knowledge of aluminum grades and ISRI classifications with rigorous food safety 
management for agro products — all backed by a single, client-first service standard."

Key highlights (icon + text list):
   • ✓ "Manufacturer & trader — direct mill pricing + flexible sourcing"
   • ✓ "End-to-end export services — documentation, logistics, compliance"
   • ✓ "Third-party quality inspection available on every shipment"

Link: "Learn More About Our Story →" (links to /about)
```

**Right Column (Image):**
- Large image (16:9 aspect ratio, 600px height on desktop)
- **Critical:** Must be a real photo — company facility, warehouse, team, or production line
- If food-grade facility photo is available, use that (signals both verticals)
- Caption below: "Our processing and packaging facility in [city]"
- Radius: 12px (lg), shadow: shadow-md
- No stock photography under any circumstances

#### Trust Building Strategy

| Element | Trust Signal |
|---------|-------------|
| "Founded in [year]" | Longevity, experience |
| Real facility photo | Physical operations exist |
| Dual-vertical explanation | Honest about scope (not over-promising) |
| ISRI classification mention | Technical expertise in metals |
| Food safety management mention | Technical expertise in agro |
| "End-to-end services" | Full capability, reduced buyer risk |
| "Third-party inspection" | Confidence in quality |

#### CTA Strategy

- **Primary CTA:** "Learn More About Our Story →" (tertiary/ghost style, gold text, arrow) — links to `/about`
- **No hard conversion ask** — this section is about narrative, not direct response

#### Animation Opportunities

| Element | Animation |
|---------|-----------|
| Section container | Fade-in-up, 500ms |
| Overline | Fade-in, 300ms |
| Heading | Fade-in-up (Y: 15px → 0), 400ms, 100ms delay |
| Body text | Fade-in-up, 400ms, 200ms delay |
| Highlight list | Stagger fade-in, 100ms per item, 300ms delay |
| Image | Fade-in + slight scale (0.98→1), 600ms, 300ms delay |
| Link | Underline animation on hover |

#### Mobile Layout Strategy

- Image above content (not beside it) — content order: Image first, then text
- Smaller heading (1.75rem)
- Body text at 1rem
- Image full-width, reduced height (300px)
- Highlight list: icons smaller, tighter spacing

---

### SECTION 4: Product Categories

#### Why it exists

The buyer's core question is "Do they have what I need?" This section must answer that question with maximum clarity and minimum effort. The three-division structure (Metals, Food & Agro, Grains & Flour) lets the buyer visually scan and self-identify within seconds.

This is also the section that converts the "Explore Our Products" clicker from the hero.

#### Content Strategy

**Layout:** Three large cards in a row (desktop), stacked (mobile).

**Section Header:**
```
Overline: "Our Product Range"
Heading: "Premium Commodities for Global Industry"
Subtitle: "Three specialized divisions serving the world's most demanding supply chains"
```

**Card 1: Metals Division**
```
┌──────────────────────────────────────────────────┐
│  [Large product image — aluminum ingots stacked]  │
│  ┌────────────────────────────────────┐          │
│  │  Icon: Metal bar shape             │          │
│  │  Metals Division                   │          │
│  │  ─────────────────────             │          │
│  │  • Aluminum Ingots (99.5%, 99.7%) │          │
│  │  • Aluminum Scrap (All ISRI Grades)│          │
│  │                                    │          │
│  │  HS Code: 7601.10 / 7602.00       │          │
│  │                                    │          │
│  │  [ View Metals → ]                │          │
│  └────────────────────────────────────┘          │
└──────────────────────────────────────────────────┘
```

**Card 2: Food & Agro Division**
```
┌──────────────────────────────────────────────────┐
│  [Large product image — jaggery/onion/spices]     │
│  ┌────────────────────────────────────┐          │
│  │  Icon: Leaf/grain shape            │          │
│  │  Food & Agro Division              │          │
│  │  ─────────────────────             │          │
│  │  • Jaggery & Jaggery Powder       │          │
│  │  • Onion Powder & Flakes          │          │
│  │  • Garlic Powder & Flakes         │          │
│  │  • Banana Powder                  │          │
│  │  • Tomato Flakes                  │          │
│  │  • Sugar                          │          │
│  │                                    │          │
│  │  [ View Food Products → ]         │          │
│  └────────────────────────────────────┘          │
└──────────────────────────────────────────────────┘
```

**Card 3: Grains & Flour Division**
```
┌──────────────────────────────────────────────────┐
│  [Large product image — flour/grain sacks]        │
│  ┌────────────────────────────────────┐          │
│  │  Icon: Wheat/grain shape           │          │
│  │  Grains & Flour Division           │          │
│  │  ─────────────────────             │          │
│  │  • Millet (Bajra) Flour           │          │
│  │  • Jowar Sorghum Flour            │          │
│  │  • Wheat Flour (Atta/Maida/Sooji) │          │
│  │  • Maize Flour                     │          │
│  │                                    │          │
│  │  [ View Grains → ]                │          │
│  └────────────────────────────────────┘          │
└──────────────────────────────────────────────────┘
```

**Card Specifications:**
- Background: White
- Border: 1px Gray-200
- Radius: 12px (lg)
- Shadow: shadow-sm default, shadow-lg on hover
- Image at top: 200px height, object-fit cover, radius top corners only
- Icon: Gold-500, 40px (Phosphor icons bold)
- Heading: Poppins Semibold, 1.25rem, Navy-900
- Product list: Inter Regular, 0.9375rem, Gray-700, 8px gap between items
- CTA: Tertiary/ghost button (Navy-900 text → gold on hover, with → arrow)

**Below the three cards:**
```
[ View Our Complete Product Range → ]
```
Centered, ghost CTA, links to `/products`

#### Trust Building Strategy

| Element | Trust Signal |
|---------|-------------|
| HS Code on metals card | Specific, technical, regulatory-aware |
| "All ISRI Grades" | Comprehensive — not cherry-picking easy grades |
| Specific product names (not "spices" or "grains") | Transparency, genuine specialization |
| 6 products listed in Food | Breadth in this category |
| High-quality product images | Real products, real photography |

#### CTA Strategy

| CTA | Style | Target |
|-----|-------|--------|
| Card level "View Metals →" | Ghost/tertiary on card | Targeted — buyer interested in metals |
| Card level "View Food Products →" | Ghost/tertiary on card | Targeted — buyer interested in food |
| Card level "View Grains →" | Ghost/tertiary on card | Targeted — buyer interested in grains |
| Bottom "View Complete Range" | Ghost centered | Multi-interest or undecided |

**Conversion path:** Card CTA → `/products/metals` (or corresponding) → product detail page → inquiry

#### Animation Opportunities

| Element | Animation |
|---------|-----------|
| Section header | Fade-in-up, 500ms |
| Card 1 | Fade-in-up + stagger (100ms baseline) |
| Card 2 | Fade-in-up + stagger (180ms delay) |
| Card 3 | Fade-in-up + stagger (260ms delay) |
| Card hover | Lift (translateY -4px), shadow-lg, border Gold-300 |
| Card image on hover | Scale(1.03), 400ms ease-out |
| Bottom link | Fade-in, 400ms, 400ms delay after last card |
| Arrow on CTAs | TranslateX(4px) on hover |

#### Mobile Layout Strategy

- Cards stack vertically (full-width)
- Each card: image 150px height, content padding 20px
- Product lists: grid of 4+ items per card
- Reduced shadow (mobile hover doesn't exist; use default shadow-md instead)
- Bottom CTA full-width

---

### SECTION 5: Differentiators (Why RMRP)

#### Why it exists

At this point, the buyer knows "what" RMRP sells (products). Now they ask "**Why** should I buy from RMRP vs. any other Indian exporter?" This section pre-empts that question with specific, defensible differentiators.

In B2B, "why us" is the most important page section after the products themselves.

#### Content Strategy

**Layout:** 3-column grid (desktop), 2 columns (tablet), 1 column (mobile).

**Section Header:**
```
Overline: "Why RMRP Global Trade"
Heading: "Built Different. By Design."
Subtitle: "We don't just trade commodities — we engineer supply chains."
```

**Differentiator Cards (4 displayed, option to add/hide):**

**Card 1: "Manufacturer & Trader — Best of Both"**
```
Icon: Factory + Handshake (or gear icon)
Heading: "Manufacturer & Trader Hybrid"
Body: "We own processing facilities for select products while maintaining 
flexible trader partnerships for others. This means direct mill pricing 
without sacrificing product range."
```

**Card 2: "Two Verticals, One Standard"**
```
Icon: Two arrows converging
Heading: "Dual-Vertical Expertise"
Body: "From aluminum grades to food safety standards — our team brings 
deep technical knowledge across both metals and agro. Few exporters 
can match this scope without compromising expertise."
```

**Card 3: "Full Service, Not Just Supply"**
```
Icon: Checklist / document
Heading: "End-to-End Export Services"
Body: "Documentation, logistics, customs clearance, insurance — we manage 
everything from factory floor to your doorstep. You receive, we deliver."
```

**Card 4: "Quality You Can Verify"**
```
Icon: Shield / checkmark
Heading: "Rigorous Quality Assurance"
Body: "In-house testing + optional third-party inspection (SGS, Bureau Veritas) 
on every shipment. Full traceability with batch-level documentation."
```

**Card Specifications:**
- No background card — icon + text in a clean list format
- Icon: 44px, Gold-500 (Phosphor bold)
- Heading: Poppins Medium, 1.25rem, Navy-900
- Body: Inter Regular, 0.9375rem, Gray-600, max 3 lines
- No borders, no shadows — clean typographic layout

**Below cards: Stats callout (optional):**
```
"✓ 95% client retention rate  |  ✓ 99.2% on-time delivery rate  |  ✓ Zero compliance issues"
```
If verifiable data exists, include it here. If not, omit.

#### Trust Building Strategy

| Differentiator | Specific Claim (vs. Generic) |
|---------------|------------------------------|
| Manufacturer & Trader | Specific pricing benefit ("direct mill pricing") — not "best prices" |
| Dual-Vertical | Acknowledges the challenge ("few exporters match this scope") — honest, confident |
| End-to-End | Concrete benefit ("you receive, we deliver") — buyer-centric language |
| Rigorous QA | Named third-party agencies (SGS, Bureau Veritas) — verifiable |

#### CTA Strategy

- **Soft CTA:** "See How We Ensure Quality →" (below or beside the cards, ghost link to `/quality`)
- This section primarily builds trust. The CTA guides interested buyers to deeper proof.

#### Animation Opportunities

| Element | Animation |
|---------|-----------|
| Section header | Fade-in-up, 500ms |
| Each differentiator card | Fade-in-up, staggered 100ms |
| Icon | Subtle scale-in (0.8→1.0), 400ms, Gold-500 shimmer on reveal |
| Hover on cards | Icon color shift (Gold-500 → Gold-400) |
| Stats callout (if present) | Counter animation |

#### Mobile Layout Strategy

- Single column, full-width
- Left-aligned icons (not centered)
- Reduced gap between items (24px)
- Stats callout: stacked, each on its own line

---

### SECTION 6: Global Reach Map

#### Why it exists

After the buyer understands "what" and "why," they need to confirm "where." This section provides visual proof of global operations. A map with illuminated served regions is far more convincing than a text list of countries.

For a buyer in Nigeria or Dubai or Germany, seeing their region highlighted is a powerful trust moment.

#### Content Strategy

**Background:** Navy-900 full-width section.

**Section Header (White text):**
```
Overline: "Global Presence"
Heading: "Serving Industry Across 25+ Countries"
Subtitle: "From the Middle East to the Americas — our products power industries worldwide"
```

**Map Area:**
- Large interactive SVG/CSS world map centered on India (or with India offset to left)
- Served regions highlighted in Gold-500 with a subtle pulse animation
- Trade route lines from India to each region (dashed gold lines, animated stroke)
- Region name labels floating near each served area: "Middle East", "Africa", "Southeast Asia", "Europe", "South America", "North America"
- Each region label is clickable → navigates to `/global-markets/[region]`

**Below Map (Stats row):**
```
┌──────────┬────────────┬──────────┬───────────┬──────────┐
│  8       │  6         │  5       │  4        │  3       │
│  Middle  │  Africa    │  SE Asia │  Europe   │ Americas │
│  East    │            │          │           │          │
└──────────┴────────────┴──────────┴───────────┴──────────┘
```
- Column count per region
- Inter Medium, 14px, Gray-100
- Numbers: Poppins Bold, 24px, Gold-500

**Below Region Stats (Quick action):**
```
[ Explore All Markets → ]
```
Ghost CTA (white/gold), links to `/global-markets`

#### Trust Building Strategy

| Element | Trust Signal |
|---------|-------------|
| Highlighted regions on map | "They actually export there — not aspirational" |
| Specific country counts per region | Granular data, verifiable |
| Trade route animations | Active/logistics capability |
| Region name labels | Ready to browse by region |
| Navy background | Authority, depth, premium feel |

#### CTA Strategy

| CTA | Style | Target |
|-----|-------|--------|
| Region label click | Inline (gold text on hover) | Region-specific buyers |
| "Explore All Markets →" | Ghost (white/gold) | Exploratory |

#### Animation Opportunities

| Element | Animation |
|---------|-----------|
| Map regions | Sequential fade-in by region (left to right), 200ms per region |
| Trade routes | Stroke-dashoffset animation (lines "draw" from India outward) |
| Region pulse dots | Opacity pulse (0.4→1.0→0.4), 3s loop, staggered per region |
| Region stats | Counter animation on numbers |
| Section header | Fade-in-up, 500ms |
| Hover on region | Scale(1.05) on label, route line brightens |

**Performance note:** Map animation uses CSS animations + SVG, not canvas or WebGL. This keeps it performant and accessible.

#### Mobile Layout Strategy

- Map: simplified static SVG (no interactive hover), served regions in gold
- Region labels: positioned below the map as tappable buttons in a 3×2 grid
- Region stats: 3×2 grid (2 rows, 3 columns)
- No trade route animations on mobile (performance)
- "Explore All Markets" CTA: full-width button

---

### SECTION 7: Testimonials

#### Why it exists

Third-party validation is the most powerful trust signal in B2B. A testimonial from a real company (with logo, name, title) is more convincing than anything RMRP says about itself.

This section also provides a "social proof breather" between the dense Global Reach section and the process-oriented Export Process section.

#### Content Strategy

**Layout:** Carousel with 1 card visible center, partial adjacent cards on desktop (peek effect).

**Section Header:**
```
Overline: "Client Testimonials"
Heading: "Trusted by Industry Leaders Worldwide"
```

**Testimonial Card Design:**
```
┌─────────────────────────────────────────────────────┐
│                                                       │
│  ❝ (Decorative quote mark, Gold-200, 48px)           │
│                                                       │
│  "RMRP has been our trusted aluminum scrap supplier   │
│   for over three years. Their grade consistency and   │
│   on-time delivery have made them a key partner in    │
│   our supply chain."                                  │
│                                                       │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─                          │
│                                                       │
│  Mohammed Al Fahim                                    │
│  Procurement Director                                 │
│  Gulf Metals Trading, Dubai                           │
│                                                       │
│  [Company Logo - optional]                            │
└─────────────────────────────────────────────────────┘
```

**Testimonial Data (3–5 entries):**

1. **Metals buyer — Dubai** (as above)
2. **Food buyer — Nigeria:** "Their jaggery quality exceeded our expectations. The food safety documentation was complete and accurate — cleared Nigerian customs without issues."
3. **Multi-product buyer — UK:** "We consolidated onion flakes, garlic powder, and wheat flour in one container. RMRP managed the entire process seamlessly."
4. **Aluminum buyer — Turkey:** "Competitive pricing, consistent quality, and they honored the LC terms without exception. A professional counterpart."
5. **Distributor — Indonesia:** "RMRP's flexibility on MOQ allowed us to start with trial volumes and scale up. Now they're one of our top three suppliers."

**Card Specifications:**
- White background
- Left gold border accent (3px, Gold-500)
- Radius: 8px
- Padding: 32px
- Shadow: shadow-sm
- Quote mark: absolute positioned, opacity 0.15
- Attribution: 12px gap between name/title/company
- Company logo: optional, grayscale, max 120px wide

**Carousel Controls:**
- Dots navigation (below cards, Gold-500 active)
- Prev/Next arrows (subtle, Gold-500, circular)
- Auto-advance every 6 seconds, pause on hover
- Swipe on mobile

#### Trust Building Strategy

| Element | Trust Signal |
|---------|-------------|
| Full attribution (name + title + company) | "These are real people, not invented quotes" |
| Company logo (if available) | Visual recognition, proof of B2B relationship |
| Geographic diversity | "They serve multiple regions" |
| Vertical diversity | "Metals AND food buyers trust them" |
| Specific praise (not generic) | "Grade consistency" and "LC terms" are specific to each buyer's concerns |

#### CTA Strategy

- **No direct CTA** on testimonials themselves
- The carousel auto-plays — the action is indirect: "Other buyers like me trust them. I can too."

#### Animation Opportunities

| Element | Animation |
|---------|-----------|
| Carousel slide change | Slide left/right (X: -100% → 0), 400ms, ease-out-expo |
| Carousel dots | Gold fill transition on active dot |
| Quote mark | Subtle opacity pulse on slide change |
| Card entry | Fade-in + slight scale, 300ms |
| Hover on card | Shadow lift (shadow-sm → shadow-md) |

#### Mobile Layout Strategy

- Single card visible (no peek effect)
- Swipeable
- Dots below, larger touch targets
- Reduced padding (24px)
- Attribution text smaller (13px)
- No hover effects (touch devices)

---

### SECTION 8: Export Process

#### Why it exists

First-time international buyers face anxiety about the unknown: "What happens after I inquire? How long does it take? What do I need to do?" This section demystifies the process, reduces perceived risk, and sets expectations.

A clear process also signals professionalism — "this is a company with systems, not chaos."

#### Content Strategy

**Layout:** 4-step horizontal process (desktop), vertical stepper (mobile).

**Section Header:**
```
Overline: "How It Works"
Heading: "From Inquiry to Delivery — In 4 Simple Steps"
Subtitle: "Our export process is designed for clarity, speed, and peace of mind"
```

**Step Cards (Horizontal Flow):**

```
Step 1                    Step 2                    Step 3                    Step 4
┌────────────┐           ┌────────────┐           ┌────────────┐           ┌────────────┐
│  01        │  ───────→ │  02        │  ───────→ │  03        │  ───────→ │  04        │
│            │           │            │           │            │           │            │
│ [Icon]     │           │ [Icon]     │           │ [Icon]     │           │ [Icon]     │
│            │           │            │           │            │           │            │
│ Inquiry &  │           │ Quotation  │           │ Production │           │ Logistics  │
│ Consultation│          │ & Contract │           │ & Quality  │           │ & Delivery │
│            │           │            │           │ Check      │           │            │
│ ───────    │           │ ───────    │           │ ───────    │           │ ───────    │
│ Tell us    │           │ Receive    │           │ Your order │           │ Shipment   │
│ your needs.│           │ competitive│           │ is produced │          │ tracked &  │
│ We'll      │           │ pricing &  │           │ & inspected │           │ delivered  │
│ advise.    │           │ terms.     │           │ with QA.    │           │ to you.    │
│            │           │            │           │            │           │            │
│ Timeline:  │           │ Timeline:  │           │ Timeline:  │           │ Timeline:  │
│ 2-4 hours  │           │ 24 hours   │           │ 10-14 days │           │ Varies by  │
│            │           │            │           │            │           │ destination│
└────────────┘           └────────────┘           └────────────┘           └────────────┘
```

**Step Card Specifications:**
- Background: White
- Border: 1px Gray-200
- Radius: 12px
- Padding: 28px
- Step number: Poppins Bold, 48px, Gold-500, opacity 0.15 (positioned as watermark top-right)
- Icon: 36px, Navy-900 (or Gold-500)
- Heading: Poppins Medium, 1.125rem, Navy-900
- Body: Inter Regular, 0.875rem, Gray-600
- Timeline: Inter Semibold, 0.8125rem, Gold-600
- Connecting arrow between steps: Gold-300, animated pulse (subtle)

**Between Steps (Connecting Line):**
- Dashed line or dotted line, Gold-300, 24px wide
- Small arrow icon at midpoint
- On scroll reveal, connecting lines animate in after adjacent steps

**Below Steps (Timeline summary bar):**
```
┌─────────────────────────────────────────────────────────────┐
│  Typical end-to-end: 3–4 weeks from inquiry to delivery     │
│  ✓ Express options available for time-sensitive orders      │
└─────────────────────────────────────────────────────────────┘
```

#### Trust Building Strategy

| Element | Trust Signal |
|---------|-------------|
| Timeline per step | Transparency — buyer knows what to expect |
| "24 hours" response time | Speed and responsiveness |
| "Quality Check" step | Quality is part of the process, not optional |
| 4 simple steps | "This is straightforward — not complicated" |
| End-to-end timeline | "We can plan around this" |

#### CTA Strategy

| CTA | Style | Target |
|-----|-------|--------|
| "Start Your Export Inquiry →" (below timeline bar) | Gold primary | Ready buyers |

#### Animation Opportunities

| Element | Animation |
|---------|-----------|
| Steps | Sequential fade-in-up (left to right), 300ms per step |
| Connecting lines | Grow width animation (0 → full width) after adjacent steps |
| Icons | Subtle scale-in, 300ms |
| Timeline numbers | Counter (01, 02, 03, 04 appear one by one) |
| Hover on step | Lift (translateY -2px), shadow-lg |
| CTA | Fade-in, 400ms, after all steps |

#### Mobile Layout Strategy

- Vertical stepper (single column, left-aligned numbers)
- Connecting line: vertical between steps (dashed gold line, 32px tall)
- Step numbers: smaller (32px), positioned inline with heading
- Icons: smaller (28px)
- Timeline: inline with step content
- CTA: full-width

---

### SECTION 9: Final CTA

#### Why it exists

After consuming all the trust content (stats, story, products, differentiators, global reach, testimonials, process), the buyer is at their peak conversion intent. This section provides a final, compelling call to action with no distractions.

It's the "ask" after all the preparation.

#### Content Strategy

**Background:** Navy-900 (creates visual contrast from the previous white/gray sections).

**Layout:** Centered, single column.

```
┌────────────────────────────────────────────────────┐
│                                                      │
│  Heading:                                           │
│  "Ready to Start Your Global Trade Partnership?"    │
│  (Poppins Bold, 2.5rem, White, centered)            │
│                                                      │
│  Divider: Gold gradient line, 80px wide, centered   │
│                                                      │
│  Subtext:                                           │
│  "Whether you need aluminum for your foundry,        │
│   agro products for your distribution network, or    │
│   both — our export team is ready with competitive   │
│   pricing and a 4-hour response commitment."         │
│  (Inter Regular, 1.125rem, Gray-100, centered,      │
│   max-width: 600px, centered)                        │
│                                                      │
│  Spacer: 32px                                        │
│                                                      │
│  ┌──────────────────────┐  ┌──────────────────────┐  │
│  │  Request a Quotation  │  │  Speak to Our Team   │  │
│  └──────────────────────┘  └──────────────────────┘  │
│  (Gold primary)            (White outline)            │
│                                                      │
│  Spacer: 24px                                        │
│                                                      │
│  "Call us directly: +91-XXX-XXXXXXX"                 │
│  (Inter 14px, Gold-400, clickable)                   │
│                                                      │
└────────────────────────────────────────────────────┘
```

**CTA Button Details:**

| CTA | Style | Target | Action |
|-----|-------|--------|--------|
| "Request a Quotation" | Gold-500 bg, White text, shadow-gold on hover | `/request-quote` | Formal inquiry |
| "Speak to Our Team" | Transparent, White text, 1.5px White border | WhatsApp or phone | Informal/inmediate |

#### Trust Building Strategy

| Element | Trust Signal |
|---------|-------------|
| "4-hour response commitment" | Reliability, speed |
| Phone number | Accessibility, human contact |
| Both metals AND agro mentioned | Inclusive — "we handle both" |
| "Competitive pricing" | Value (not necessarily cheapest) |

#### CTA Strategy

| CTA | Purpose | Psychology |
|-----|---------|------------|
| "Request a Quotation" | Primary conversion | Formal, professional, low-risk |
| "Speak to Our Team" | Secondary conversion | Personal, immediate |
| Phone number | Tertiary conversion | Ultimate trust — talk to a human |

**Placement:** This is the LAST section before footer. No distractions, no links, no additional content.

#### Animation Opportunities

| Element | Animation |
|---------|-----------|
| Section container | Fade-in-up, 500ms |
| Heading | TextReveal (word by word), 600ms |
| Divider line | Scale-x (0→1), 400ms, center origin |
| Subtext | Fade-in, 400ms, 200ms delay |
| Primary CTA | Fade-in-up, 400ms, 400ms delay |
| Secondary CTA | Fade-in-up, 400ms, 500ms delay |
| Phone number | Fade-in, 300ms, 600ms delay |
| Hover on CTAs | Standard button hover (lift + shadow) |

#### Mobile Layout Strategy

- Heading: 1.75rem
- Subtext: 1rem, full-width (no max-width constraint)
- CTAs: stacked, full-width, 16px gap
- Phone number: larger tap target, tel: link

---

### SECTION 10: Contact Preview

#### Why it exists

Some buyers reach the bottom of the page and want to contact without navigating away. This section provides a lightweight contact form (not the full ContactForm — a QuickInquiryForm) plus contact details, all without leaving the home page.

It captures the "I'm ready but I don't want to click another page" buyer.

#### Content Strategy

**Layout:** Two columns (desktop) — form left, contact info right. Stacked on mobile.

**Section Header:**
```
Overline: "Get in Touch"
Heading: "We're Here to Help"
```

**Left Column (QuickInquiryForm):**

```
┌───────────────────────────────────────────┐
│  Quick Inquiry Form                        │
│                                           │
│  Product of Interest:                     │
│  [Dropdown: All 12 products + "Multiple"] │
│                                           │
│  Quantity Required:                       │
│  [Text input: "e.g., 25 MT, 1 FCL, etc."]│
│                                           │
│  Destination Port:                        │
│  [Text input: "e.g., Jebel Ali, UAE"]     │
│                                           │
│  Your Email:                              │
│  [Email input]                            │
│                                           │
│  WhatsApp Number:                          │
│  [Phone input with country code]          │
│                                           │
│  ┌──────────────────────────────────┐     │
│  │    Submit Quick Inquiry          │     │
│  └──────────────────────────────────┘     │
│                                           │
│  "We respond within 4 hours"              │
└───────────────────────────────────────────┘
```

**Form details:**
- 5 fields only — minimal friction
- "Product of Interest" dropdown pre-fills the inquiry routing
- "Submit Quick Inquiry" = gold primary button
- Success: form replaced with "Thank you! We'll be in touch within 4 hours."
- Honeypot + reCAPTCHA v3

**Right Column (ContactInfo):**
```
┌───────────────────────────────────┐
│  Contact Information               │
│                                   │
│  📍 [Address]                     │
│  📞 +91-XXX-XXXXXXX               │
│  ✉️ info@rmrpglobaltrade.com      │
│  🕐 Mon–Sat, 9:00 AM – 6:00 PM    │
│                                   │
│  ─────                             │
│                                   │
│  [ Chat on WhatsApp → ]           │
│  (Gold CTA outline, full-width)   │
│                                   │
│  [ View Full Contact Page → ]     │
│  (Ghost link)                     │
│                                   │
│  ─────                             │
│                                   │
│  "Prefer email? We'll respond     │
│   within 4 business hours."        │
└───────────────────────────────────┘
```

#### Trust Building Strategy

| Element | Trust Signal |
|---------|-------------|
| "4 hours" response commitment | Speed, reliability |
| Physical address | Not a virtual-only business |
| Business hours | Real office, real schedule |
| WhatsApp availability | Immediate, low-friction channel |

#### CTA Strategy

| CTA | Location | Style |
|-----|----------|-------|
| "Submit Quick Inquiry" | Form submit | Gold primary |
| "Chat on WhatsApp →" | Contact info panel | Gold outline |
| "View Full Contact Page →" | Contact info panel | Ghost link |

#### Animation Opportunities

| Element | Animation |
|---------|-----------|
| Section | Fade-in-up, 400ms |
| Form fields | Staggered fade-in, 80ms per field |
| Submit button | Brief pulse on form focus |
| Form submission | Loading spinner → success message fade-in (300ms) |
| Contact info icons | Subtle scale-in, 300ms |

#### Mobile Layout Strategy

- Form and contact info stacked (form on top)
- Form fields: full-width, larger touch targets (48px height)
- WhatsApp CTA: prominent full-width button
- Contact info: compact, left-aligned icons
- "View Full Contact Page": below contact info

---

## 4. Complete Animation Schedule

```
Page Load (T=0):
├── T=0ms      → TopBar (static, no animation)
├── T=0ms      → Header (static, transparent state)
├── T=200ms    → Hero headline (TextReveal begins, 800ms total)
├── T=600ms    → Hero subheadline (fade-in-up, 500ms)
├── T=900ms    → Hero primary CTA (fade-in-up, 400ms)
├── T=1000ms   → Hero secondary CTA (fade-in-up, 400ms)
├── T=1200ms   → Hero stats strip (fade-in-up, 400ms)
│                 → Counter animation begins (1500ms)

Scroll-Triggered (via IntersectionObserver):
├── Trust Strip        → Counter animation on enter
├── Company Intro      → Fade-in-up sequence (500ms total)
├── Product Categories → Staggered card reveal (3 × 500ms)
├── Differentiators    → Staggered card reveal (4 × 400ms)
├── Global Reach       → Map region reveal + route animation (2s total)
├── Testimonials       → Carousel auto-start (first slide fade-in)
├── Export Process     → Sequential step reveal (4 × 300ms)
├── Final CTA          → Fade-in-up sequence (800ms total)
└── Contact Preview    → Form field stagger (5 × 80ms)

Reduced Motion Preference:
├── All scroll-triggered animations → opacity-only (0→1), no translation
├── Hero TextReveal → single fade-in (no characters)
├── Counter → static display (no animation)
├── Map routes → static (no stroke animation)
├── Carousel → no auto-play
└── Parallax → disabled
```

---

## 5. Page Load Performance Budget

| Metric | Target | Strategy |
|--------|--------|----------|
| First Contentful Paint (FCP) | < 1.5s | Static export, optimized images, preload hero image |
| Largest Contentful Paint (LCP) | < 2.5s | Hero image as WebP, priority fetch, explicit width/height |
| Time to Interactive (TTI) | < 3.0s | Minimal JavaScript, code-split Framer Motion, lazy-load below-fold |
| Total Bundle Size (JS) | < 150KB | `next/image` for all images, dynamic imports for heavy components (map, carousel) |

**Code-splitting strategy:**
- `global/Header.tsx` — eagerly loaded (above fold)
- `global/Footer.tsx` — lazy loaded
- `animation/Reveal.tsx` — eagerly loaded (used everywhere)
- `animation/Counter.tsx` — lazy loaded (below fold)
- `animation/ParallaxWrapper.tsx` — lazy loaded (hero only)
- `shared/TestimonialsCarousel.tsx` — lazy loaded
- `contact/QuickInquiryForm.tsx` — lazy loaded (bottom of page)
- Framer Motion — dynamic import for client components only

---

## 6. Complete Home Page Content Inventory

| Section | Text Elements | Image Elements | Interactive Elements |
|---------|--------------|----------------|---------------------|
| TopBar | Phone, Email, Downloads label, Language | — | Clickable phone/email, language dropdown, downloads link |
| Header | Logo text, 7 nav links, "Request a Quote" | Logo SVG | Nav links, mega menu, CTA button, hamburger (mobile) |
| Hero | Headline, subheadline, 2 CTA labels, 5 stat labels | World map background (full-viewport) | 2 CTA buttons, scroll indicator (optional) |
| Trust Strip | 5 stat labels, 5 stat numbers | — | None (display only) |
| Company Intro | Overline, heading, 2 paragraphs, 3 bullet points, link label | 1 facility/team photo (16:9) | "Learn More" link |
| Product Categories | Overline, heading, subtitle, 3 division headings, 12 product names, 3 CTA labels | 3 product images (16:9) | 3 card CTAs, 1 bottom CTA |
| Differentiators | Overline, heading, subtitle, 4 card headings, 4 card bodies | 4 icons (Phosphor SVG) | None (display only) |
| Global Reach | Overline, heading, subtitle, 6 region labels, 6 region counts | World map SVG, trade route lines | 6 region clickable labels, "Explore All Markets" CTA |
| Testimonials | Heading, 3–5 quote texts, 3–5 attributions, 3–5 company names | 3–5 company logos (optional) | Carousel prev/next, dots, swipe |
| Export Process | Overline, heading, subtitle, 4 step headings, 4 step bodies, 4 timelines | 4 step icons (Phosphor SVG) | "Start Export Inquiry" CTA |
| Final CTA | Heading, subtext, 2 CTA labels, phone number | — | 2 CTA buttons, phone link |
| Contact Preview | Overline, heading, 5 form labels, address, phone, email, hours | — | Form fields, submit button, WhatsApp CTA, "View Contact" link |

**Total content elements:**
- Text nodes: ~85
- Images: 7 (1 hero, 1 facility, 3 product, 3–5 logos) + SVG icons
- Interactive elements: ~20 (CTAs, links, form fields, carousel controls)

---

## 7. Key Measurements for Success

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Bounce rate | < 45% | Analytics (GA4) |
| Scroll depth (75%+) | > 50% of visitors | Analytics scroll tracking |
| Hero CTA click rate | > 8% of unique visitors | Event tracking on both CTAs |
| Product category click | > 15% of unique visitors | Event tracking on 3 cards + bottom link |
| Testimonial carousel interaction | > 10% of visitors | Carousel slide change events |
| Export Process CTA click | > 5% of visitors | Event tracking on "Start Export Inquiry" |
| Final CTA click | > 6% of visitors | Event tracking on both CTAs |
| QuickInquiryForm submits | > 3% of visitors | Form submission event |
| WhatsApp button clicks | > 5% of visitors | WhatsApp click event |
| Overall inquiry conversion | > 5% of unique visitors | Combined form + WhatsApp + phone |

---

*End of Home Page Architecture — v1.0*

*Ready for UI design phase.*
