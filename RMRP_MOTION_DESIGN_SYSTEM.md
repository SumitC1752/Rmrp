# RMRP Global Trade — Motion Design System

**Brand Tone:** Premium · Corporate · Global · Trustworthy · Sophisticated
**Animation Philosophy:** "Invisible excellence" — motion should feel so natural and purposeful that users perceive the result (a premium, trustworthy brand) without noticing the mechanism.

---

## 1. Motion Design Principles

### Principle 1: Motion Must Serve Comprehension

Every animation must answer one of these questions for the user:
- "Where am I?" (spatial orientation)
- "What just happened?" (state change)
- "What should I do next?" (attention direction)
- "Is this trustworthy?" (quality signal through polish)

If an animation cannot answer one of these questions, remove it.

### Principle 2: Duration Reflects Brand Weight

Premium B2B brands move slowly. A luxury hotel door closes in 3 seconds, not 0.5. This principle applies to all motion:

| Context | Duration | Feeling |
|---------|----------|---------|
| Page transitions | 400-600ms | Deliberate, unhurried |
| Element reveals | 500-800ms | Emerging, not appearing |
| Hover effects | 200-300ms | Responsive, not aggressive |
| Counters | 1200-2000ms | Building, not rushing |
| State changes | 250-400ms | Immediate, not jarring |

### Principle 3: One Animation at a Time

A user's attention can follow exactly one motion at a time. Staggered reveals (children animating sequentially) are acceptable because the eye tracks the wave. But two simultaneous independent animations create cognitive load. Never animate a section header AND its content simultaneously — always header first, content after.

### Principle 4: Easing Communicates Material Quality

| Material Quality | Easing | Example |
|-----------------|--------|---------|
| Premium, heavy (gold, stone, solid) | Cubic-bezier(0.16, 1, 0.3, 1) | Hero reveals, section containers |
| Responsive, light (paper, fabric) | Cubic-bezier(0.33, 1, 0.68, 1) | Hover interactions, micro-interactions |
| Mechanical, precise (machinery) | Cubic-bezier(0.65, 0, 0.35, 1) | Progress bars, loading indicators |

This is one easing curve for the entire site. One duration range. One philosophy. Consistency IS premium.

### Principle 5: Static is a Design Choice

Areas of rest are essential. The footer is static. The trust strip (after counter) is static. Content sections between reveals are static. Motion should feel like punctuation, not prose.

---

## 2. Animation Philosophy

### 2.1 The "Elevator" Analogy

The RMRP website should feel like stepping into a luxury hotel elevator:
- Doors open (page load) — smooth, silent, immediately comfortable
- Floor buttons light up (interaction) — responsive, tactile, confident
- The ride (scroll) — steady, controlled, with a subtle sense of ascent
- Doors open (page transition) — seamless, you've arrived without noticing the movement

### 2.2 Motion Budget

Every page has a fixed "attention budget." If we use motion on the hero (20% of budget), the intro section (15%), the product cards (25%), and the map (20%), we have only 20% remaining for everything else. Distribution:

| Page Zone | Motion Budget | Reasoning |
|-----------|--------------|-----------|
| Hero (above fold) | 25% | Highest visibility, first impression |
| Product/category sections | 30% | Where buyers spend most time |
| Trust signals (stats, certs) | 15% | Need to confirm without distracting |
| Map & navigation | 15% | Orientation and wayfinding |
| CTA and conversion | 10% | Direct attention, don't distract |
| Footer and utility | 5% | Static or near-static |

### 2.3 Animation Voice

```
DESCRIPTORS:   Smooth   ·   Deliberate   ·   Polished   ·   Restrained
NOT DESCRIPTORS:    Bouncy   ·   Flashy   ·   Playful   ·   Energetic

If you would describe it as "satisfying" → keep it
If you would describe it as "cool" → remove it
```

---

## 3. Scroll Animation Strategy

### 3.1 Core Mechanism

Intersection Observer + Framer Motion's `useInView` + `motion.div` with variants.

No scroll-linked animations that depend on scroll position directly (no `useScroll` + `useTransform` for content elements — reserved only for the hero parallax background).

### 3.2 Scroll Reveal Parameters (Universal)

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| Threshold | 0.15 | Element must be 15% visible before triggering |
| Root margin | -50px | Slight delay before element enters viewport |
| Once | `true` | Animate once, never repeat (no re-triggering) |
| Initial state | `opacity: 0, y: 30` | Start invisible, 30px below final position |
| Animate state | `opacity: 1, y: 0` | End visible, at natural position |
| Duration | 0.6s | 600ms — deliberate but not slow |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` | Premium "heavy" curve |
| Stagger children | 100ms + 80ms per child | Wave-like sequential reveal |

### 3.3 Scroll Animation Mapping

| Element | Type | Initial State | Animate State | Duration | Stagger? |
|---------|------|--------------|---------------|----------|----------|
| Section container | Fade-in-up | y: 30, o: 0 | y: 0, o: 1 | 0.6s | No |
| Section header (overline) | Fade-in-up | y: 20, o: 0 | y: 0, o: 1 | 0.5s | No (first) |
| Section heading | Fade-in-up | y: 20, o: 0 | y: 0, o: 1 | 0.5s | 100ms after overline |
| Section subtitle | Fade-in | o: 0 | o: 1 | 0.4s | 250ms after heading |
| Card grid (products, team, features) | Stagger fade-in-up | y: 30, o: 0 | y: 0, o: 1 | 0.5s | 80ms per card |
| Stat numbers | Fade-in then counter | o: 0 → 1, then count | Count target | 1.5s | 100ms per stat |
| Cert badges | Fade-in-up | y: 15, o: 0 | y: 0, o: 1 | 0.4s | 50ms per badge |
| Process steps | Sequential fade-in-up | y: 25, o: 0 | y: 0, o: 1 | 0.5s | 200ms per step |
| Testimonial cards | Fade-in | o: 0 | o: 1 | 0.4s | 150ms per card |
| CTA blocks | Fade-in-up | y: 25, o: 0 | y: 0, o: 1 | 0.6s | No |
| Map regions | Sequential fill/scale | Scale: 0.95, o: 0 | Scale: 1, o: 1 | 0.5s | 200ms per region |
| Contact form fields | Stagger fade-in | y: 15, o: 0 | y: 0, o: 1 | 0.4s | 80ms per field |

### 3.4 Scroll Animation Hierarchy

```
When a section enters the viewport:

1. [0ms]     SECTION WRAPPER background color transition (300ms, if switching bg)
2. [100ms]   SECTION CONTAINER fades in-up (500ms)
3. [200ms]   OVERLINE fades in-up (400ms)
4. [400ms]   HEADING fades in-up (500ms)
5. [600ms]   SUBTITLE fades in (400ms)
6. [800ms]   CONTENT ELEMENTS stagger in (500ms each, staggered)

Total reveal window: ~1.5s per section
```

### 3.5 When NOT to Animate on Scroll

| Element | Reason for Static |
|---------|-------------------|
| Footer | No benefit — users don't re-read footers |
| Utility bar | Always visible — animation would be distracting |
| Breadcrumbs | Navigational context — must be immediately readable |
| Legal/utility pages | No brand value in animating legal text |
| Already-visible hero (page load) | Hero has its own load animation — don't re-trigger on scroll |

---

## 4. Hero Section Animation Strategy

### 4.1 Page Load Sequence (First Visit)

This is the most important animation sequence on the entire site. It sets the perceptual anchor for the entire brand experience.

```
T = 0ms       Page starts rendering
T = 50ms      Background image loads (static, no animation — must be instant)
T = 100ms     Header appears (static — no animation, immediate presence)
T = 200ms     Trade route lines begin drawing (stroke-dashoffset, 2s duration)
T = 400ms     Country pulse dots begin pulsing (opacity 0.6→1→0.6, 3s loop, staggered)
T = 600ms     Headline: "Global Trade, Trust Delivered." — TextReveal begins (word by word)
                Word 1: "Global"      [200ms]
                Word 2: "Trade,"      [+150ms]
                Word 3: "Trust"       [+150ms]
                Word 4: "Delivered."  [+150ms]
                Total headline reveal: ~800ms
T = 1200ms    Subheadline fades in (opacity 0→1, y: 15→0, 500ms)
T = 1500ms    Primary CTA "Request a Quotation" fades in-up (400ms)
T = 1600ms    Secondary CTA "Explore Our Products" fades in-up (400ms)
T = 1800ms    Stats strip slides up from below (y: 40→0, 500ms)
                Stats numbers begin counting (0 → target, 1.5s)
T = 2500ms    Hero animation complete — fully static and readable
```

**The most important thing: by T=600ms, the headline is visible. By T=1200ms, the value prop is readable. By T=2000ms, everything is on screen and understandable.** The first buyer scroll can happen at any time without interrupting the animation.

### 4.2 TextReveal Strategy

```
"Global Trade, Trust Delivered."

Animation: Each word fades in-up (y: 20→0) with a subtle stagger
Duration per word: 250ms
Stagger: 150ms between words
Easing: ease-out-expo

The period at the end appears simultaneously with "Delivered" — it doesn't animate separately.

Why word-by-word, not character-by-character?
Character reveals feel playful (good for fashion or entertainment).
Word reveals feel authoritative (right for B2B trade).
```

### 4.3 Background Parallax (Hero Only)

```
Element: World map background
Effect: Subtle parallax on scroll (speed: 0.15 — very slow)
Implementation: CSS transform: translateY(scrollY * 0.15)
Bounds: -50px max displacement (almost imperceptible)

Why include it if it's almost imperceptible?
It creates spatial depth. The map feels like a physical object behind 
the text, not a flat image. Users won't notice the movement, but they 
will feel the depth.
```

### 4.4 Hero Animation Behavior on Subsequent Visits

Same page visited via browser back button? The hero should NOT re-animate entirely. Only the counter stats should re-trigger if the user scrolled past them on the previous visit.

If using Next.js App Router, page transitions preserve component state. On direct navigation (new tab, refresh), the full sequence plays.

---

## 5. Product Section Animation Strategy

### 5.1 Product Category Cards (Home Page)

```
Trigger: Scroll reveal (Intersection Observer, threshold 0.15)

Each card:
  Initial:  opacity: 0, y: 40
  Animate:  opacity: 1, y: 0
  Duration: 0.6s per card
  Stagger:  120ms between cards (left to right)
  Easing:   ease-out-expo

Hover:
  Card:     translateY(-4px), shadow-md → shadow-xl, 300ms, ease-out
  Image:    scale(1.03), 400ms, ease-out
  Border:   Gray-200 → Gold-300, 300ms, ease-out

Why stagger left to right (not wave from center)?
B2B buyers read left-to-right. The leftmost card (Metals) is scanned
first. Staggering left-to-right matches the visual scanning pattern.
```

### 5.2 Product Filter Tabs (Product Listing Page)

```
State change: Switching categories

Behavior:
  1. Current cards fade out (opacity 0, 200ms)
  2. Active tab underline slides to new position (300ms, ease-out-expo)
  3. New cards fade in-up (opacity 0→1, y: 15→0, 400ms, stagger 60ms)

This is handled via AnimatePresence in Framer Motion.
No scale, no rotation, no flip. Just fade + slight vertical drift.
```

### 5.3 Product Detail Page

```
Image Gallery:
  - Main image crossfade on thumbnail click: 400ms, ease-out
  - Thumbnails: subtle border color change on hover (Gold-500), 200ms
  
Specifications Table:
  - No animation on appearance (instant — specs should be immediately scannable)
  - Row highlight on hover: background Gray-50 → Gray-100, 200ms

Packaging Options:
  - Cards fade in-up on scroll reveal, stagger 100ms
  - Hover: translateY(-2px), shadow lift, 250ms

Related Products:
  - Same animation as product category cards
  - Stagger 100ms per card
```

### 5.4 Product Page Animation Rule

**Critical content (specs, pricing, certifications) must be static.** Only decorative elements (images, cards, packaging options) animate. A buyer scanning for purity percentage should not wait for text to fade in.

---

## 6. Navigation Animation Strategy

### 6.1 Header Background Transition

```
State:    Transparent (top) → Solid (scrolled 200px+)
Duration: 300ms
Trigger:  Scroll position
Easing:   ease-out

Elements transitioning:
  Background: rgba(11,31,58,0) → rgba(255,255,255,1) via backdrop-filter blur
  Nav text:   rgba(255,255,255,1) → rgba(17,19,22,1) (White → Navy-900)
  Logo:       White logo → Navy-900 logo (image swap or SVG color transition)
  CTA:        Secondary (navy+gold outline) → Primary (gold solid)
  Shadow:     none → shadow-sm

The transition uses backdrop-filter: blur(8px) during the intermediate 
state to ensure readability during the scroll zone where background 
is partially transparent.
```

### 6.2 Mega Menu Open/Close

```
Open:
  Duration: 250ms
  Easing:   ease-out
  Content:  opacity 0→1, y: -8→0 (slight downward drift)
  Stagger:  50ms per column (left, center, right)

Close:
  Duration: 200ms
  Easing:   ease-in (slightly faster close)
  Content:  opacity 1→0, y: 0→-4

Why not scale from top?
Scale animations feel like app interfaces. Fade with slight translation
feels like a physical menu extending downward.
```

### 6.3 Dropdown Menus (About, Services, Markets)

```
Open:       opacity 0→1, y: -6→0, 200ms, ease-out
Close:      opacity 1→0, y: 0→-4, 150ms, ease-in
Items:      No stagger (small menus — instant display is better)
```

### 6.4 Mobile Nav Drawer

```
Open:
  - Backdrop: opacity 0→0.5, 300ms, ease-out
  - Drawer:   x: -100%→0, 350ms, ease-out-expo
  - Items:    stagger fade-in, 50ms per item, 100ms initial delay
  - CTA:      fade-in, 300ms, 400ms delay

Close:
  - Items:    instant fade-out (50ms)
  - Drawer:   x: 0→-100%, 300ms, ease-in
  - Backdrop: opacity 0.5→0, 300ms, ease-in (after drawer closes)

Why slide-in from left (not right)?
Left drawer is the mobile convention. Users expect it. Breaking 
convention for "delight" costs usability.
```

### 6.5 Breadcrumbs

No animation. Breadcrumbs are wayfinding — they must be instantly readable at all times.

---

## 7. CTA Animation Strategy

### 7.1 Button Hover States

```
Primary Button (Gold):
  Hover:    translateY(-2px), shadow-gold(0 4px 14px gold-25%), 250ms, ease-out
  Active:   translateY(0), shadow-none, 100ms, ease-out
  Focus:    ring(2px gold-400, offset 2px)

Secondary Button (Navy+Gold outline):
  Hover:    background Navy-900→Navy-800, text Gold-500→Gold-400, 
            border stays Gold-500, 250ms, ease-out
  Active:   background Navy-800→Navy-700, 100ms

Tertiary/Link Button:
  Hover:    text Gold-500, underline grows from left (width: 0→100%, 300ms)
  Active:   text Gold-600

Why translateY on hover?
It creates a tactile "lift" response. The button feels like a physical 
object responding to the user's pointer. This is the most universally 
understood hover signal.
```

### 7.2 Button Load State

```
On form submission:
  1. Button text fades out (100ms)
  2. Spinner fades in (100ms)
  3. Button remains at same width (prevent layout shift)
  4. Spinner rotates (CSS animation, 600ms per rotation, infinite)
  5. On success: spinner fades out, checkmark fades in (150ms)
  6. On error: spinner fades out, error text fades in (150ms)

The button should NOT change size during loading. Use a fixed-width 
approach or measure text width and lock it.
```

### 7.3 CTA Section Reveal

The final CTA section on each page should feel like a "destination":

```
Trigger: Scroll reveal
Animation:
  1. Background: Navy-900 color transition (300ms — no fade, just instant)
  2. Heading:    TextReveal, word-by-word, 600ms total
  3. Divider:    ScaleX(0→1), center origin, 400ms
  4. Subtext:    Fade-in, 400ms, 200ms delay
  5. Buttons:    Stagger fade-in-up, 300ms each, 100ms stagger
  6. Phone:      Fade-in, 300ms, 100ms after last button

The CTA section should feel like a "landing" — the scrolling journey 
reaches its natural conclusion.
```

---

## 8. Statistics Counter Strategy

### 8.1 Counter Implementation

```
Element:    Stats numbers (25+, 250K+, 12, 150+, 8+)
Trigger:    Scroll reveal (Intersection Observer, threshold 0.3)
Animation:  
  1. Number fades in (opacity 0→1, 400ms)
  2. Counter begins (0 → target value, 1.5s, ease-out-expo)
  3. Suffix (+ / K+ / etc.) appears with the final number (no animation)

Why counter from 0?
The human eye is drawn to movement. A counter animating from 0 to target 
holds attention and delivers the number with emphasis. If the number 
simply appeared, it would be processed as decoration, not data.

Why 1.5 seconds?
Fast enough to hold attention. Slow enough to register each digit. 
Any faster and the brain processes it as "change" rather than "growth."
```

### 8.2 Counter Variations

| Stat | Start | End | Duration | Suffix Behavior |
|------|-------|-----|----------|-----------------|
| Countries | 0 | 25 | 1.5s | "+" appears at end |
| MT Exported | 0 | 250000 | 2.0s | "+" appears, comma-separated |
| Products | 0 | 12 | 1.2s | No suffix |
| Clients | 0 | 150 | 1.5s | "+" appears at end |
| Years | 0 | 8 | 1.0s | "+" appears at end |

### 8.3 Counter Edge Cases

| Scenario | Behavior |
|----------|----------|
| User scrolls past quickly (< 1s viewport time) | Counter accelerates to complete in remaining time |
| User scrolls back up and re-enters | Counter does NOT re-trigger (once: true) |
| Reduced motion preference | Number displays immediately at final value (no animation) |
| Very large number (250,000) | Commas appear as digits animate (visual grouping) |

---

## 9. Global Reach Map Animation Strategy

### 9.1 Map Entry Animation

```
Trigger: Scroll reveal (threshold 0.15)

Sequence:
  1. [0ms]     Map background fades in (opacity 0→1, 600ms)
  2. [300ms]   Country regions highlight sequentially (left to right, 200ms per region)
                 Each region: fill Gold-500 with opacity 0.15→0.25
  3. [800ms]   Trade route lines draw from India outward (stroke-dashoffset, 1.5s per line)
                 Lines animate ONE AT A TIME, not simultaneously
                 Order: Middle East, Africa, SE Asia, Europe, Americas
  4. [1500ms]  Pulse dots appear on served countries (scale: 0→1, 400ms)
                 Dots begin pulsing (scale: 1→1.3→1, 3s loop, staggered)
  5. [2000ms]  Region labels fade in (opacity 0→1, 400ms, 100ms stagger)
  6. [2500ms]  Region stats (8 countries, 6 countries, etc.) counter in
  7. [3000ms]  "Explore All Markets" CTA fades in
```

### 9.2 Map Hover Interactions

```
Region hover (desktop only):
  1. Region fill: Gold-500, opacity 0.25→0.40, 300ms
  2. Tooltip: fade in (opacity 0→1, 200ms, y: 5→0)
  3. Pulse dot: scale(1→1.5), 300ms
  4. Route line to that region: stroke becomes brighter, 300ms

Why hover on regions?
B2B buyers self-identify by geography. Highlighting their region 
on hover creates a direct "they serve my market" connection.
```

### 9.3 Map Performance Consideration

The map is the most animation-intensive element on the site. On mobile, the map should render as a **static SVG with region fills** — no animations, no hover effects, no pulse dots. Trade route lines can remain as static dashed lines (no animation).

---

## 10. Page Transition Strategy

### 10.1 Client-Side Navigation (Next.js App Router)

```
Trigger: User clicks internal link (Next.js Link component)
Behavior:
  1. Current page content fades out (opacity 1→0, 200ms, ease-in)
  2. New page content fades in (opacity 0→1, 400ms, ease-out)
  3. Scroll position resets to top (instant, no animation)

Important: The HEADER and FOOTER do NOT animate during page transitions.
They remain static. Only the main content area between header and footer
transitions. This maintains orientation — the user always knows where
the navigation is.

Implementation: Layout.tsx wraps children in a motion.div with 
AnimatePresence and a key based on the route pathname.
```

### 10.2 Page Transition Duration

| Phase | Duration | Easing | Property |
|-------|----------|--------|----------|
| Exit (old page) | 200ms | ease-in | opacity 1→0 |
| Enter (new page) | 400ms | ease-out | opacity 0→1 |
| **Total** | **600ms** | — | — |

600ms is noticeable but not slow. It signals a deliberate transition without feeling sluggish.

### 10.3 Page Transition Edge Cases

| Scenario | Behavior |
|----------|----------|
| Browser back/forward | Same transition plays (maintains parity) |
| Same-page anchor link (#section) | No transition — instant scroll |
| External link | No transition (leaves site) |
| Form submission (thank-you page) | Transition plays normally |
| Slow network (static export) | All pages are pre-rendered; no loading delay |
| User clicks link before transition completes | Previous transition aborts; new one begins |

### 10.4 Why NOT Layout Animations

Some sites animate the entire layout (header + content + footer) as one block. We don't, because:
- The header serves as an orientation anchor
- The footer as a consistency anchor
- Only the content should feel "new" — the chrome is familiar

---

## 11. Hover Interaction Strategy

### 11.1 Hover Categories

| Category | Elements | Animation | Duration |
|----------|----------|-----------|----------|
| **Lift** | Cards, CTAs, stat blocks | translateY(-2 to -4px), shadow increase | 250ms |
| **Color shift** | Links, icons, filter tabs | Text/icon color to Gold-500 | 200ms |
| **Underline** | Text links, nav items | Width 0→100%, left origin | 300ms |
| **Scale** | Product images (within cards) | 1.0→1.03 | 400ms |
| **Background** | List items, nav dropdown items | Gray-50→Gray-100 | 200ms |
| **Border** | Cards, inputs | Gray-200→Gold-300/500 | 250ms |
| **Cursor** | All clickable elements | pointer | Instant |

### 11.2 Responsive Hover Strategy

On touch devices, hover states are DOUBLY important because there's no "hover" state — the first tap triggers hover, the second triggers action.

**For RMRP, we use the following approach:**
- Touch devices: First tap shows hover state. Second tap navigates.
- Desktop: Hover shows hover state. Click navigates.
- This is handled by detecting `hover: hover` media query and showing hover styles only when the device supports hover.

### 11.3 Elements with NO Hover Effects

| Element | Reason |
|---------|--------|
| Breadcrumb items | Wayfinding — hover would be noise |
| Footer links | Bottom of page — users who reach here are done |
| Legal links | No brand value in hover effects on privacy policy |
| Form labels | Not interactive |
| Static text (paragraphs) | Not clickable — hover on non-clickable is confusing |

---

## 12. Mobile Animation Strategy

### 12.1 Mobile-Specific Reductions

| Desktop Animation | Mobile Equivalent | Rationale |
|-------------------|-------------------|-----------|
| Parallax background | Static (no parallax) | Performance + motion sickness |
| Counter animation | Same (shorter duration: 1.0s) | Smaller screen = less scrolling patience |
| Mega menu (hover) | Accordion in drawer (tap) | No hover on touch |
| Map route animations | Static SVG | Performance + no benefit at small size |
| TextReveal (word-by-word) | Single fade-in | Reading on mobile is slower — don't delay content |
| Card hover (lift) | No hover (default shadow) | No hover on touch |
| Stagger (80ms per card) | Same stagger (60ms per card) | Faster pace on mobile |
| Page transition (600ms) | Same (600ms) | Consistency |
| Hero CTA stagger | No stagger — both appear together | Mobile users scan faster |

### 12.2 Touch Feedback

```
Button press (touch):
  - Slight scale reduction (1.0→0.97, 100ms)
  - Release scales back (0.97→1.0, 150ms)
  - This provides tactile confirmation of the tap

Card tap:
  - Slight opacity reduction (1.0→0.9, 100ms)
  - Release restores opacity (0.9→1.0, 150ms)

Link tap:
  - Background color flash (transparent→Gray-100→transparent, 200ms)
```

### 12.3 Mobile Performance Constraints

- Limit concurrent CSS animations to 10 max
- No `will-change` on more than 5 elements simultaneously
- All animations must achieve 60fps on mid-range devices (iPhone SE / Android equivalent)
- GPU-composited properties only: `opacity`, `transform`
- No `box-shadow` animations on mobile (use pre-computed shadow values)

---

## 13. Performance Considerations

### 13.1 Animation Budget

| Metric | Target | Enforcement |
|--------|--------|-------------|
| FPS during animations | 60fps (no drops below 30fps) | Chrome DevTools Performance tab |
| Total animation JS bundle | < 40KB gzipped | Dynamic import Framer Motion |
| Layout thrashing events | 0 | Use `transform` and `opacity` only |
| Long tasks during animation | < 50ms | requestAnimationFrame for scroll handlers |
| Style recalculation triggered by animation | 0 | No animated CSS properties that trigger layout |

### 13.2 Property Allowlist

| ✅ Allowed | ❌ Forbidden |
|-----------|-------------|
| `opacity` | `width` |
| `transform: translate()` | `height` |
| `transform: scale()` | `top`, `left`, `right`, `bottom` |
| `transform: rotate()` | `margin` |
| `filter: blur()` (sparingly) | `padding` |
| `color`, `background-color` | `box-shadow` (animate via opacity) |
| `border-color` | `border-width` |

### 13.3 Animation Library Allocation

| Library | Used For | Rationale |
|---------|----------|-----------|
| **Framer Motion** | Page transitions, scroll reveals, hover effects, layout animations, stagger children | Best React integration, declarative API, AnimatePresence, exit animations |
| **CSS Animations** | Spinner rotation, pulse dots on map, loading skeleton, simple opacity fades | Zero JS cost, GPU-accelerated, perfect for looping/repeating animations |
| **GSAP** | ❌ Not used | Unnecessary for this site's complexity. Framer Motion + CSS covers all use cases. GSAP would add bundle size for no benefit. |

### 13.4 Code-Splitting Framer Motion

Framer Motion should be dynamically imported only for client components that need it:

```
Eagerly loaded (critical path):
  - Reveal.tsx (used by every section)
  - Stagger.tsx (used by every grid)

Lazy loaded (non-critical):
  - ParallaxWrapper.tsx (hero only, below fold concern)
  - Counter.tsx (stats section, below fold)
  - TextReveal.tsx (hero only)
  - AnimatePresence (page transitions)
  - Carousel/slider animations
```

Target: Framer Motion should NOT appear in the initial JS bundle. It should be code-split to load only when the first animated section enters the viewport.

---

## 14. Accessibility Considerations

### 14.1 Reduced Motion Compliance

**Mandatory:** All animations must respect `prefers-reduced-motion: reduce`.

When reduced motion is detected:

| Animation | Fallback |
|-----------|----------|
| Fade-in-up | Element appears instantly (opacity: 1, y: 0) |
| TextReveal | Text appears instantly |
| Counter | Number displays at final value |
| Parallax | Disabled |
| Page transition | Instant (no fade) |
| Hover effects | Instant (no transition) |
| Stagger | All items appear simultaneously |
| Map route lines | Static lines |
| Pulse dots | Static dots (no pulse) |
| Loading spinner | Static icon or hidden |

**Implementation:**
```typescript
// In Framer Motion components:
const prefersReducedMotion = useReducedMotion();

const variants = {
  hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 30 },
  visible: { opacity: 1, y: 0 }
};
```

### 14.2 Vestibular and Cognitive Considerations

| Concern | Mitigation |
|---------|------------|
| Motion sickness from parallax | Disabled on mobile, minimal (0.15 speed) on desktop |
| Startle response from sudden motion | All entries have opacity 0→1 (never scale from 0 or sudden translations) |
| Cognitive overload from too many moving elements | One animation at a time per section; max 3 concurrent elements |
| Attention deficit from auto-playing carousels | Testimonials carousel pauses on hover/focus; no auto-play on reduced motion |

### 14.3 Animation Timing for Screen Readers

Screen readers do NOT announce animations. However, they do announce content changes. Important considerations:
- Content revealed by scroll-triggered animations must be in the DOM (not lazy-loaded after animation) so screen readers can access it immediately
- AnimatePresence removals should use `role="status"` or `aria-live="polite"` if the removed content is meaningful
- No content should be hidden behind an animation delay longer than 3 seconds (WCAG 2.2.1)

### 14.4 Persistent Animation Checklist

```
✅ All animations respect prefers-reduced-motion
✅ No content is gated behind animation completion (all content in DOM)
✅ No animation lasts longer than 3 seconds without user interaction
✅ No flashing or strobing effects (WCAG 2.3.1 compliant)
✅ No auto-playing animations that can't be paused (carousel pause on hover)
✅ All motion is non-essential (content is fully accessible without animations)
✅ Touch devices have appropriate tap feedback
✅ Focus states are visible during keyboard navigation
```

---

## Motion Design System Summary

### Animation Distribution by Page Zone

| Page Zone | Animation Intensity | Primary Technique | Total Duration |
|-----------|-------------------|-------------------|----------------|
| Hero (load) | Medium | Framer Motion + CSS | 2.5s sequence |
| Hero (parallax) | Minimal | CSS (transform) | Continuous |
| Trust strip | Medium | Framer Motion Counter | 1.5s |
| Company intro | Low-Medium | Framer Motion Reveal | 0.6s per element |
| Product cards | Medium | Framer Motion Stagger | 0.5s per card |
| Differentiators | Low | Framer Motion Reveal | 0.5s per card |
| Global map | Medium-High | Framer Motion + CSS | 3s sequence |
| Testimonials | Low | Framer Motion carousel | Auto-play 6s |
| Export process | Medium | Framer Motion Stagger | 0.5s per step |
| CTA sections | Medium | Framer Motion Reveal | 0.6s |
| Contact form | Low | Framer Motion Stagger | 0.4s per field |
| Footer | None | Static | — |
| Navigation | Low | CSS transitions | 0.2-0.3s |
| Page transitions | Medium | Framer Motion AnimatePresence | 0.6s total |

### Animation Library Usage

| Library | Where | Bundle Cost |
|---------|-------|-------------|
| **Framer Motion** | All scroll reveals, page transitions, hover effects, carousel, counters, stagger | ~35KB gzipped (lazy loaded) |
| **CSS Animations** | Spinner, pulse dots, skeleton loader, page load pre-animation | 0KB (browser native) |
| **GSAP** | Not used | — |

### Motion Budget Summary

```
Total distinct animation sequences: ~25
Animations that trigger on page load: 1 (hero)
Animations that trigger on scroll: ~20
Animations that trigger on hover: ~8
Animations that loop continuously: 2 (spinner, pulse dots)
Animation properties used: opacity, transform (translate, scale)
Pages that are completely static: Privacy, Terms, Cookies
```

---

*End of Motion Design System — v1.0*

*Ready for implementation with Framer Motion + CSS animations.*
