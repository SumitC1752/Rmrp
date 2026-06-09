# RMRP Global Trade — Page Blueprints & Wireframe Architecture

**Reference:** Business Analysis v1.0 · IA v1.0 · User Journeys v1.0 · Design System v1.0 · Component Architecture v1.0
**Focus:** Premium B2B export conversion optimization | **Audience:** International importers, distributors, industrial buyers

---

## 1. HOME PAGE

### 1.1 Page Objective

Serve as a **digital reception desk** — establish immediate credibility, communicate dual-vertical competency (metals + agro), and guide visitors to their relevant product section or inquiry pathway within 10–15 seconds.

**Primary conversion:** Click-through to product category or "Request a Quote"
**Secondary conversion:** WhatsApp engagement or corporate profile download
**Tertiary conversion:** Scroll depth into key trust content

### 1.2 Section Hierarchy & Order

| # | Section | Vertical Space | Priority |
|---|---------|---------------|----------|
| 1 | **Hero Section** | 100vh | Critical |
| 2 | **Stats Bar** | 120px | Critical |
| 3 | **Company Introduction** | 500px | High |
| 4 | **Product Categories** | 600px | Critical |
| 5 | **Why Choose Us** | 550px | High |
| 6 | **Industries We Serve** | 500px | Medium |
| 7 | **Global Trade Network** | 500px | High |
| 8 | **Testimonials** | 450px | Medium |
| 9 | **Export Process** | 500px | Medium |
| 10 | **Call to Action** | 400px | High |
| 11 | **Contact Preview** | 400px | Low |

### 1.3 Section Details

#### Section 1: Hero

**Content:**
- Full-viewport background: world map graphic with trade route lines (subtle parallax)
- Overlay gradient (navy 95% → 70% → 30%)
- Headline: "Global Trade, Trust Delivered" — TextReveal animation
- Subheadline: "Premium manufacturer, trader & exporter of aluminum and agro commodities to 25+ countries worldwide"
- Two CTAs: "Explore Our Products" (secondary) | "Request a Quotation" (primary, gold)
- Floating stat overlay bottom-left: "25+ Countries | 250,000+ MT Exported | 150+ Global Clients"

**User psychology:**
- A B2B buyer's first 5 seconds determine whether they stay or bounce. The hero must answer "Is this company relevant to what I need?" instantly.
- The dual value prop ("aluminum and agro") signals breadth. The country count signals global reach.
- Two CTAs give choice: exploratory buyers click "Explore Products", ready buyers click "Request a Quotation"

**Trust building:** World map visual implies global operations. Country + volume stats provide immediate scale proof.

**Conversion element:** Primary CTA (gold button) above fold. No form — just a click to the next step.

**Mobile:** Headline is shorter ("Global Trade, Trust Delivered"). CTAs stack full-width. Background image simplified (reduced parallax, static).

**SEO:** H1 contains primary keyword phrase. Meta description includes "aluminum exporter" and "agro commodities exporter India".

#### Section 2: Stats Bar

**Content:** 4 stat counters animated on scroll: Years in Business | Countries Served | Products | Global Clients

**Psychology:** Social proof through numbers. B2B buyers compare suppliers by scale. Stats answer "How big are they?" before the buyer scrolls further.

**Trust building:** Hard numbers are verifiable. The counts become a mental anchor the rest of the site reinforces.

**Conversion element:** None directly — this section conditions the buyer to trust claims.

**Mobile:** 2×2 grid instead of single row. Numbers still animate.

#### Section 3: Company Introduction

**Content:** Two-column SplitLayout. Left: "Your Trusted Partner in Global Trade" — 3–4 sentence company description covering founding purpose, dual verticals, and commitment to quality. Right: Large image of facility/yard/warehouse (real photo, not stock).

**Psychology:** After seeing scale (stats), the buyer asks "Who are they?" This section gives the narrative answer. The real facility image is critical — it separates professional traders from desk-only brokers.

**Trust building:** Real facility photography. Specific claims (not "we are the best" but "we operate processing facilities in [location] and partner with mills across India").

**Conversion element:** "Learn More About Us" link → `/about`

#### Section 4: Product Categories

**Content:** Three large category cards (Metals | Food & Agro | Grains & Flour). Each card: category icon, product count, representative image, key product list (3–4 items), "View Products" CTA.

**Psychology:** Buyers who landed on the home page need to self-identify their category of interest. Clear categorization prevents frustration. The product names within each card help the buyer confirm "yes, they have what I need."

**Trust building:** Specific product names listed (not "various products" but "Aluminum Ingots, Aluminum Scrap" etc.) signals genuine specialization.

**Conversion element:** Each card links to `/products/[category]` — the next step in the journey. No form on home page — let them explore first.

**Mobile:** Cards stack vertically. Full-width images.

#### Section 5: Why Choose Us

**Content:** 3–4 differentiator cards: "Manufacturer & Trader Hybrid" | "Dual-Vertical Expertise" | "End-to-End Export Services" | "Rigorous Quality Control". Each: icon + heading + 2-line explanation. Right column or below: a stats callout or certification badges.

**Psychology:** The buyer is now comparing. "Why should I choose RMRP over the 20 other Indian exporters?" This section pre-empts that question with specific, defensible differentiators.

**Trust building:** Differentiators must be specific. "Manufacturer & Trader Hybrid" is specific. "End-to-End Export Services" lists actual services (documentation, logistics, customs).

**Conversion element:** Soft CTA: "See How We Export →" linking to `/export-services`

#### Section 6: Industries We Serve

**Content:** Logo grid or card grid of industries: Foundries & Die-Cast Plants | Food Processing | Distribution & Wholesale | Construction & Infrastructure | Automotive Manufacturing | Pharmaceuticals & Nutraceuticals. Each with a 1-line description of how RMRP serves them.

**Psychology:** Buyers think "What's in it for my industry?" Seeing their own industry listed creates immediate relevance and reduces cognitive distance.

**Trust building:** Industry names are recognizable and specific. A buyer from a foundry sees "Foundries & Die-Cast Plants" and thinks "these people understand my business."

#### Section 7: Global Trade Network

**Content:** Interactive world map with served countries highlighted. Trade route lines animating from India to key regions (Middle East, SE Asia, Africa, Europe, Americas). Below: 3–4 region cards with export highlights.

**Psychology:** Visual proof of global operations. Buyers want to know "Do they ship to my country?" A map makes this answer immediate. Trade route animations convey active, ongoing business — not aspirational claims.

**Trust building:** If the buyer's country is highlighted, trust jumps significantly. If not, they may still inquire (the map implies willingness to expand).

**Conversion element:** Click on a region → navigate to `/global-markets/[region]`. Or "Explore All Markets" CTA → `/global-markets`.

#### Section 8: Testimonials

**Content:** Carousel of 3–5 testimonials from verifiable companies (logo + name + title + company). Ideally includes at least one from each vertical (metals buyer + food buyer).

**Psychology:** Third-party validation is the strongest trust signal. A testimonial from a known company in the buyer's industry can be the deciding factor.

**Trust building:** Company logos (even small ones) add credibility. Full attribution (name + title + company) signals the testimonial is real.

#### Section 9: Export Process

**Content:** 4-step horizontal process flow: "1. Inquiry & Consultation → 2. Quotation & Contract → 3. Production & Quality Check → 4. Logistics & Delivery". Each step: icon + heading + 1-line description.

**Psychology:** First-time buyers are anxious about the process. Showing a clear, professional process reduces perceived risk. "I know exactly what will happen."

**Trust building:** The process implies experience and systems. "Quality Check" step signals quality commitment. "Contract" step signals professional terms (LC, documentation).

**Conversion element:** "Start Your Export Inquiry" CTA → `/request-quote`

#### Section 10: Call to Action (Final)

**Content:** Navy background. Heading: "Ready to Start Your Global Trade Partnership?" Subtext: "Whether you need aluminum for your foundry or agro products for your distribution network, our export team is ready to serve you." Two CTAs: "Request a Quotation" (gold) | "Speak to Our Team" (outline, links to WhatsApp)

**Psychology:** After consuming all the trust content, the buyer is either ready to inquire or needs a final nudge. This section removes all friction from the decision.

**Conversion element:** Two CTAs — one formal (quote request form) and one informal (WhatsApp). Buyers choose their comfort level.

**Mobile:** CTAs stack. WhatsApp button is prominent (mobile users prefer chat).

#### Section 11: Contact Preview

**Content:** Minimal contact block: email, phone, address, business hours. QuickInquiryForm embedded (product dropdown + email + submit).

**Psychology:** Some buyers skip the journey and go straight to contact. This section catches them at the bottom of the page.

**Conversion element:** QuickInquiryForm — minimal fields, low friction.

### 1.4 Conversion Paths from Home Page

```
Home Page
│
├── Hero CTA "Request a Quotation"    → /request-quote
├── Hero CTA "Explore Our Products"   → /products
├── Product Category Cards            → /products/[category]
├── "Learn More About Us"             → /about
├── "See How We Export"               → /export-services
├── Regional Map Click                → /global-markets/[region]
├── "Start Your Export Inquiry"       → /request-quote
├── "Speak to Our Team"               → WhatsApp (sticky or CTA click)
├── QuickInquiryForm                  → Inline submit → thank-you
├── WhatsApp sticky button            → WhatsApp (any page)
└── Corporate Profile Download        → /downloads (footer or CTA link)
```

### 1.5 Mobile Considerations

- Single-column everything. No side-by-side text + image on mobile.
- Hero: shorter headline, stacked CTAs, reduced motion (parallax disabled).
- Product categories: full-width cards with images.
- Stats: 2×2 grid, numbers still animate.
- Export process: vertical stepper instead of horizontal flow.
- Sticky WhatsApp button prominent.
- Hamburger nav always accessible.
- Stats counter animation triggers earlier (mobile viewport is smaller, scroll depth is shorter).

### 1.6 SEO Considerations

| Element | Strategy |
|---------|----------|
| H1 | "Global Trade, Trust Delivered — RMRP Global Trade" |
| Title | "RMRP Global Trade — Premium Aluminum & Agro Commodities Exporter" |
| Meta Description | "RMRP Global Trade is a trusted manufacturer, trader & exporter of aluminum ingots, scrap, jaggery, onion powder, garlic powder, and agro commodities. Exporting to 25+ countries. Request a quote." |
| Schema | Organization + WebSite + BreadcrumbList |
| Canonical | https://rmrpglobaltrade.com/ |
| Open Graph | Full OG tags with hero image, 1200×630 |

---

## 2. ABOUT US

### 2.1 Page Objective

Serve as the **company's credibility dossier** — answer the question "Is RMRP a legitimate, well-established company I can trust with my business?" through specific, verifiable evidence of operations, infrastructure, team, and track record.

**Primary conversion:** "Request a Quotation" or "Download Corporate Profile"
**Secondary conversion:** Click-through to product or certification pages

### 2.2 Section Hierarchy & Order

| # | Section | Vertical Space | Priority |
|---|---------|---------------|----------|
| 1 | **Hero Banner** | 400px | Critical |
| 2 | **Company Overview** | 500px | Critical |
| 3 | **Mission, Vision & Values** | 400px | Medium |
| 4 | **Company Timeline** | 500px | Medium |
| 5 | **Leadership Team** | 500px | High |
| 6 | **Our Infrastructure** | 550px | Critical |
| 7 | **Certifications & Memberships** | 450px | Critical |
| 8 | **Why Choose RMRP** | 450px | High |
| 9 | **Call to Action** | 350px | High |

### 2.3 Section Details

#### Section 1: Hero Banner

**Content:** Navy gradient background. Overline: "About RMRP Global Trade". H1: "Engineering Global Supply Chains Since [Year]". Subtitle: "From our headquarters in [city], we bridge premium Indian commodities with global demand — delivering quality, reliability, and partnership to importers across 25+ countries." Small stat row: Years | Products | Countries | Export Volume.

**Psychology:** The hero immediately establishes time-in-business (longevity = stability = trust). The "Engineering" verb implies process and professionalism, not opportunism.

**Trust building:** The opening sentence phrases in terms of value to the buyer ("bridging Indian commodities with global demand", "delivering quality, reliability, and partnership").

#### Section 2: Company Overview

**Content:** SplitLayout. Left: 2–3 paragraphs covering company founding story, core business (manufacturer + trader + exporter), dual vertical focus, and geographic scope. Right: large facility photo or team photo (real, not stock).

**Psychology:** Buyers want to know the company's origin story. "Who started this? Why? What's their background?" A genuine founding story builds emotional trust that complements the factual trust from stats and certifications.

**Trust building:** Specificity: "Founded in [year] by [founder name], who brought [X] years of experience in [industry]." Not a generic "we are a leading company."

#### Section 3: Mission, Vision & Values

**Content:** Three-column layout. Mission: "To be the most reliable bridge between Indian commodity producers and global industrial buyers." Vision: [aspirational but grounded]. Values: Integrity | Quality | Partnership | Innovation — each with a 1-sentence explanation.

**Psychology:** Mission/vision pages are typically ignored, but B2B buyers do scan them to assess alignment. Values like "Integrity" and "Quality" must be followed by specific behavioral commitments, not platitudes.

**Trust building:** Values should be operationalized. "Integrity: We deliver exactly what we quote — grade, quantity, and timeline." This turns a platitude into a promise.

#### Section 4: Company Timeline

**Content:** Horizontal vertical timeline (desktop: horizontal scrolling or staggered, mobile: vertical). 4–6 milestones: Founding → First Export → Expanded to [region] → Food Division Launch → Volume Milestone → Latest Certification.

**Psychology:** A timeline proves the company has a history of growth and achievement. It answers "Have they been growing or stagnating?" Growth implies capability and investment.

**Trust building:** Milestones should be specific. "2021: Exported 50,000 MT of aluminum products" rather than "Expanded operations."

#### Section 5: Leadership Team

**Content:** Grid of team member cards. Each: professional headshot, name, title, brief bio (background, expertise), LinkedIn link (optional).

**Psychology:** B2B buyers buy from people, not companies. Seeing real leaders with real backgrounds humanizes the business. A buyer who sees "10 years in international trade at [known company]" on a profile feels reassured.

**Trust building:** Professional headshots (consistent style, professional setting). Bios include relevant experience. Avoid generic "X leads our team." Include specific background: "Previously headed exports at Y company, managing $X in annual trade volume."

**Conversion element:** "Speak to Our Export Team" → `/contact`

#### Section 6: Our Infrastructure

**Content:** Gallery of 3–4 facility images (processing plant, warehouse/storage yard, quality lab, packaging line). Each with a caption. Below: text sections for Manufacturing, Warehousing, and Lab.

**Psychology:** This is one of the most critical trust sections. A company that shows real facilities is immediately separated from the thousands of broker-only exporters. Buyers want to know "Do they actually have facilities, or are they a middleman?"

**Trust building:** Real photos (not stock). If the company has a processing plant for aluminum or a food-grade warehouse, SHOW IT. For food products, showing the packaging line and storage conditions is essential.

#### Section 7: Certifications & Memberships

**Content:** BadgeGrid showing all certifications: ISO 9001, ISO 22000 (food safety), FSSAI license, HACCP, Halal, FIEO membership, MSME registration, Trade Chamber memberships. Each badge clickable → shows details or opens certificate PDF.

**Psychology:** Certifications are a B2B buyer's shortcut to trust. They say "a third party has verified our systems." For food importers, FSSAI + HACCP + Halal are mandatory checks. For metal buyers, ISO 9001 is table stakes.

**Trust building:** Certificate PDFs should be downloadable. A buyer's compliance team will want to file these. "Download Certificate" on each badge.

**Conversion element:** "View All Certifications" → `/quality/certifications` or download.

#### Section 8: Why Choose RMRP

**Content:** 4–6 differentiator cards (compact). Same as home but with more detail — each card has 3 bullet points instead of 1 line.

**Psychology:** By this point, the buyer has consumed enough information to form an opinion. This section summarizes why they should proceed. It's a re-engagement point before the CTA.

#### Section 9: Call to Action

**Content:** Gold or Navy CTA block. Heading: "Ready to Partner with RMRP?" Subtext: "Download our corporate profile for a comprehensive overview of our capabilities, or speak directly with our export team." Two CTAs: "Download Corporate Profile" (primary) | "Contact Our Team" (secondary).

**Psychology:** Two pathways: self-serve (download PDF to evaluate offline/share with stakeholders) or direct contact. The download is lower friction than a contact form.

**Conversion element:** Download PDF (captures email) or Contact form.

### 2.4 Mobile Considerations

- Timeline: vertical only, single column.
- Team grid: 2 columns on tablet, 1 on mobile.
- Infrastructure gallery: swipeable.
- Stack all split-layout sections.

### 2.5 SEO Considerations

| Element | Strategy |
|---------|----------|
| H1 | "About RMRP Global Trade — Manufacturer, Trader & Exporter" |
| Title | "About Us — RMRP Global Trade | Premium Commodity Exporter India" |
| Meta Description | "Learn about RMRP Global Trade, a trusted Indian manufacturer and exporter of aluminum ingots, aluminum scrap, jaggery, onion powder, garlic powder, and agro commodities. ISO certified. Exporting to 25+ countries." |
| Schema | Organization (with founding date, founder, address, contact) |

---

## 3. PRODUCTS (Master Listing)

### 3.1 Page Objective

Serve as the **product discovery hub** — help international buyers quickly find their product of interest across three divisions and navigate to the relevant detail page or submit a multi-product inquiry.

**Primary conversion:** Click-through to a product detail page
**Secondary conversion:** Multi-product RFQ submission

### 3.2 Section Hierarchy & Order

| # | Section | Vertical Space | Priority |
|---|---------|---------------|----------|
| 1 | **Hero Banner** | 350px | Critical |
| 2 | **Category Tabs** | 80px | Critical |
| 3 | **Product Grid** | Dynamic | Critical |
| 4 | **Custom Manufacturing Note** | 300px | Low |
| 5 | **Bulk Inquiry CTA** | 350px | High |

### 3.3 Section Details

#### Section 1: Hero Banner

**Content:** Compact hero (shorter than home). Overline: "Our Product Range". H1: "Premium Commodities for Global Industry". Subtitle: "From aluminum to agro — explore our complete catalog of export-grade products, backed by rigorous quality control and reliable global logistics."

**Psychology:** The buyer needs to quickly understand the breadth of products. The hero sets the context and confirms they are in the right place.

#### Section 2: Category Tabs (Filter Bar)

**Content:** Horizontal filter tabs: "All Products" (default active) | "Metals Division" | "Food & Agro Division" | "Grains & Flour Division". Clicking a tab filters the grid below. Active tab gets a gold underline/indicator.

**Psychology:** The buyer self-identifies their category within seconds. Tab switching is instant (no page reload, client-side filtering). This feels fast and professional.

**Conversion element:** The tabs themselves are navigation — they guide the buyer deeper.

#### Section 3: Product Grid

**Content:** Responsive grid (4 cols desktop, 2 tablet, 1 mobile) of ProductCards. Each card: category tag, product image, product name, brief description, key spec badges (purity/grade/packaging), "Request Quote" CTA. Stagger reveal animation on scroll.

**Psychology:** Cards with key specs visible at a glance let the buyer scan quickly. The "Request Quote" button on every card means a ready buyer can convert without visiting the detail page.

**Trust building:** Spec badges (e.g., "99.5% Purity", "Grade A", "25kg Bags") provide immediate technical credibility.

**Conversion element:** Card click → detail page. "Request Quote" on card → `/request-quote` with product pre-selected.

#### Section 4: Custom Manufacturing Note

**Content:** Simple text block: "Need a specific grade, packaging, or volume not listed? We offer custom sourcing and manufacturing solutions for bulk buyers. Contact our export team for tailored options."

**Psychology:** Buyers who didn't find exactly what they need need an escape hatch. This prevents bounce and captures the inquiry anyway.

#### Section 5: Bulk Inquiry CTA

**Content:** Navy background. "Looking for Bulk Volumes or Multiple Products?" + "Submit a consolidated inquiry for better pricing and streamlined logistics." + "Submit Bulk Inquiry" CTA → `/request-quote`

**Psychology:** The "consolidated = better pricing" angle incentivizes multi-product buyers to engage.

### 3.4 Mobile Considerations

- Filter tabs: horizontal scroll rather than wrapping.
- Product grid: single column, cards full-width.
- Bulk CTA spans full width.

### 3.5 SEO Considerations

| Element | Strategy |
|---------|----------|
| H1 | "Our Products — RMRP Global Trade" |
| Title | "Products — RMRP Global Trade | Aluminum, Food & Agro Commodities" |
| Meta Description | "Explore RMRP Global Trade's complete product range: aluminum ingots, aluminum scrap, jaggery, onion powder, garlic powder, banana powder, tomato flakes, sugar, and grain flours. Export-grade quality. Request a quote." |
| Schema | ItemList (product list structured data) |

---

## 4. ALUMINUM PRODUCTS (Category Page)

### 4.1 Page Objective

Establish RMRP as a **credible aluminum commodity supplier** — demonstrate deep knowledge of scrap grades, ISRI classifications, ingot specifications, and industrial applications. Convert buyers looking for secondary aluminum raw materials.

**Primary conversion:** Product detail page click-through or direct "Get CIF Quote"
**Secondary conversion:** WhatsApp inquiry (preferred channel for scrap buyers)

### 4.2 Section Hierarchy & Order

| # | Section | Vertical Space | Priority |
|---|---------|---------------|----------|
| 1 | **Category Hero** | 400px | Critical |
| 2 | **Product Cards (Ingots + Scrap)** | 600px | Critical |
| 3 | **Grade Guide / Spec Overview** | 500px | High |
| 4 | **Aluminum Applications** | 400px | Medium |
| 5 | **Packaging & Shipping** | 350px | Medium |
| 6 | **Quality Control** | 350px | High |
| 7 | **CTA: Scrap-Specific** | 350px | High |

### 4.3 Section Details

#### Section 1: Category Hero

**Content:** Image background (aluminum ingots stacked or scrap yard). Overline: "Metals Division". H1: "Premium Aluminum Products for Global Foundries & Smelters". Subtitle: "Supplier of prime aluminum ingots and all grades of aluminum scrap — ISRI classified, quality tested, and delivered to specifications."

**Psychology:** Metal buyers are technical and time-sensitive. The hero must immediately signal "they speak our language." Mentioning ISRI classifications and specific applications signals domain expertise.

**Trust building:** Industry terminology (ISRI, foundries, smelters) signals this isn't a generalist.

#### Section 2: Product Cards

**Content:** Two large ProductCards (Ingots | Scrap). Each card: hero product image, product name, HS code, key specs preview, "View Details" CTA.

**Psychology:** Only 2 products in this category. Each card gets more space and detail, allowing the buyer to make an informed choice between ingots and scrap.

#### Section 3: Grade Guide / Spec Overview

**Content:** Two tables or accordion sections:
- **Aluminum Ingots:** Purity (99.5%, 99.7%), weight (6–8 kg bars), alloy options, packaging
- **Aluminum Scrap:** ISRI grades listed (Tense, Zorba, Taint/Tabor, Talk, Telic, etc.) with typical composition ranges, contamination tolerance, packaging options (loose, baled, shredded)

**Psychology:** This section is the differentiator. A company that publishes detailed ISRI grade specifications is a company that knows its product. Technical buyers will compare this table against their requirements. If the specs match their needs, they proceed.

**Trust building:** Specific composition ranges (% Cu, % Fe, % Zn) rather than generic "high quality." This level of detail signals genuine operational knowledge.

**Conversion element:** "Download Aluminum Grade Guide" (lead magnet PDF) + "Request CIF Quote" per product.

#### Section 4: Aluminum Applications

**Content:** Grid of application cards: Automotive | Aerospace | Construction | Electrical | Packaging. Each with brief description of how RMRP's aluminum products serve that industry.

**Psychology:** Buyers may not know all the applications. Seeing their downstream industry listed creates relevance. It also positions RMRP as a supplier who understands end-use requirements.

#### Section 5: Packaging & Shipping

**Content:** Specs: ingots strapped in bundles on pallets, scrap loose in containers or baled. Container loading details: 20-ton FCL per container, loading at Mundra/Nhava Sheva. Lead times: 2–3 weeks from PO.

**Psychology:** Shipping logistics is a major concern for industrial buyers. Clear, upfront information about packing and loading reduces friction and pre-empts common questions.

**Trust building:** Specific port names, container weights, and lead times signal real operational capability.

#### Section 6: Quality Control

**Content:** Brief section: "Every shipment undergoes: chemical composition analysis via [spectrometer type], physical inspection, weight verification, and third-party testing upon request (SGS/Bureau Veritas)." BadgeGrid of relevant certifications (ISO 9001, etc.).

**Psychology:** Metal buyers have been burned by quality variance. Showing QC process + third-party option directly addresses their #1 fear.

**Trust building:** The offer of third-party inspection (SGS/BV) is a powerful trust signal — it says "we're confident enough in our quality to let an independent inspector verify."

#### Section 7: CTA

**Content:** "Source Your Aluminum with Confidence" + "Our metals team responds within 2 hours with CIF pricing, specifications, and availability." + "Get a Quote for Aluminum" (gold CTA) | "Chat on WhatsApp" (outline).

### 4.4 Mobile Considerations

- Spec tables convert to stacked layout (label: value).
- Grade accordion expanded by default on first item.
- Image gallery swipeable.

### 4.5 SEO Considerations

| Element | Strategy |
|---------|----------|
| H1 | "Aluminum Products — Ingots & Scrap | RMRP Global Trade" |
| Title | "Aluminum Ingots & Scrap Exporter — RMRP Global Trade" |
| Meta Description | "RMRP Global Trade exports premium aluminum ingots (99.5%, 99.7%) and all grades of aluminum scrap (ISRI: Tense, Zorba, Taint/Tabor). Quality tested, competitive pricing, global delivery. Request a CIF quote." |
| Keywords | aluminium ingots exporter india, aluminium scrap supplier, ISRI scrap, secondary aluminium, foundry raw materials |

---

## 5. FOOD & AGRO PRODUCTS (Category Page)

### 5.1 Page Objective

Position RMRP as a **trusted food commodity exporter** — demonstrate food safety compliance, processing capability, packaging standards, and traceability. Convert international food importers and processing companies.

**Primary conversion:** Product detail click-through or sample request
**Secondary conversion:** Spec sheet download or RFQ

### 5.2 Section Hierarchy & Order

| # | Section | Vertical Space | Priority |
|---|---------|---------------|----------|
| 1 | **Category Hero** | 400px | Critical |
| 2 | **Food Safety & Certifications Banner** | 200px | Critical |
| 3 | **Product Grid** | Dynamic | Critical |
| 4 | **Processing & Sourcing** | 450px | High |
| 5 | **Packaging Standards** | 350px | High |
| 6 | **Quality Control for Food** | 400px | High |
| 7 | **Sample Request CTA** | 350px | Critical |

### 5.3 Section Details

#### Section 1: Category Hero

**Content:** Image background (food processing facility or bulk packaging). Overline: "Food & Agro Division". H1: "Processed Food Commodities — From Indian Farms to Global Tables". Subtitle: "Premium-grade dehydrated vegetables, flours, jaggery, and sugar — processed in FSMS-certified facilities and packed for export."

**Psychology:** Food buyers care about safety first, quality second, price third. The hero immediately addresses safety (FSMS-certified) and quality (premium-grade).

#### Section 2: Food Safety & Certifications Banner

**Content:** Full-width banner with certification badges: FSSAI, HACCP, ISO 22000, Halal, Non-GMO, Organic (whichever apply). Text: "Every food product is processed, packed, and tested in compliance with international food safety standards."

**Psychology:** This banner is placed HIGH on the page — before even the products — because food safety is the #1 filter for food importers. If a buyer doesn't see food safety certification in the first scroll, they may leave.

**Trust building:** Badges with short explanation. "FSSAI Licensed" | "HACCP Certified Facility" | "ISO 22000:2018 Food Safety Management".

#### Section 3: Product Grid

**Content:** 6 ProductCards (Jaggery, Onion Powder/Flakes, Garlic Powder/Flakes, Banana Powder, Tomato Flakes, Sugar). Each card: product image, name, form/packaging variants, key specifications, "View Details" + "Request Sample" CTAs.

**Psychology:** Food buyers often source multiple products. Seeing 6 products in one category signals breadth and the potential for consolidated sourcing.

**Conversion element:** "Request Sample" on each card — low-friction entry point.

#### Section 4: Processing & Sourcing

**Content:** SplitLayout. Left: text describing sourcing network (partner farms, contract farming relationships), processing facilities (cleaning, drying, grinding, packing), and supply chain. Right: photo of processing facility.

**Psychology:** Food buyers care about traceability. "Where does the onion come from? How is it processed?" This section answers those questions before they ask.

**Trust building:** Specific details: "Our onions are sourced from the Maharashtra and Karnataka growing regions. Processing includes mechanical washing, hot-air drying at 60°C, metal detection, and manual inspection."

#### Section 5: Packaging Standards

**Content:** Grid of packaging types per product category: vacuum-packed, nitrogen-flushed, poly-lined cartons, jute bags, food-grade drums. Each: image + description + typical weight.

**Psychology:** Packaging quality directly impacts product quality during transit. A buyer who sees "nitrogen-flushed" knows the supplier understands shelf-life preservation.

#### Section 6: Quality Control for Food

**Content:** Process flow: Incoming Raw Material Inspection → Pre-cleaning → Processing → Metal Detection → Microbiological Testing → Packing → Final QC. Each step: icon + 1-line description.

**Psychology:** Food buyers need to audit supplier quality systems. This process overview gives them enough confidence to proceed without requesting a full audit upfront.

**Trust building:** Mention of "microbiological testing" and "metal detection" specifically addresses the two biggest food import risks: contamination and foreign matter.

#### Section 7: Sample Request CTA

**Content:** Gold CTA block. "Test Our Quality Before You Commit" + "Request free samples of any food product. We'll courier samples with full specifications and certificates." + "Request a Sample" (gold CTA).

**Psychology:** Samples are the standard B2B food buyer funnel. Making it easy to request samples is the highest-conversion action on this page.

**Conversion element:** Sample request → form with product, quantity, delivery address, company details.

### 5.4 Mobile Considerations

- Certification badges banner collapses to horizontal scroll.
- Product cards stack vertically.
- Process flow: vertical stepper.

### 5.5 SEO Considerations

| Element | Strategy |
|---------|----------|
| H1 | "Food & Agro Products — RMRP Global Trade" |
| Title | "Food & Agro Commodities Exporter — Jaggery, Onion, Garlic, Spices, Flours | RMRP" |
| Meta Description | "Export-quality jaggery, onion powder, garlic flakes, banana powder, tomato flakes, sugar, and grain flours from RMRP Global Trade. FSSAI, HACCP & ISO certified. Request samples." |

---

## 6. EXPORT SERVICES

### 6.1 Page Objective

Demonstrate **end-to-end export capability** — convince buyers that RMRP handles all logistics, documentation, and compliance, reducing buyer risk and effort. Position RMRP as a full-service export partner, not just a product supplier.

**Primary conversion:** "Start Your Export Inquiry" or freight quote request
**Secondary conversion:** Download export process PDF

### 6.2 Section Hierarchy & Order

| # | Section | Vertical Space | Priority |
|---|---------|---------------|----------|
| 1 | **Hero Banner** | 350px | Critical |
| 2 | **Our Export Process (Step-by-Step)** | 600px | Critical |
| 3 | **Shipping & Logistics** | 450px | High |
| 4 | **Documentation & Compliance** | 450px | High |
| 5 | **Incoterms Explained** | 400px | Medium |
| 6 | **Payment Terms & Trade Finance** | 400px | Critical |
| 7 | **Ports & Destinations** | 400px | High |
| 8 | **Case Studies / Shipment Highlights** | 450px | Medium |
| 9 | **CTA: Freight Quote** | 350px | High |

### 6.3 Section Details

#### Section 1: Hero Banner

**Content:** Image background (container ship or port). Overline: "Export Services". H1: "End-to-End Export Solutions — From Factory Floor to Your Doorstep". Subtitle: "We manage every aspect of your international purchase: sourcing, quality control, documentation, logistics, and delivery."

**Psychology:** The hero promises "we handle everything." For a buyer evaluating multiple suppliers, this reduces perceived effort and risk.

#### Section 2: Our Export Process

**Content:** Horizontal 6-step process (vertical on mobile): "1. Inquiry & Consultation → 2. Quotation & Contract → 3. Sourcing & Production → 4. Quality Inspection → 5. Documentation & Customs → 6. Shipping & Delivery". Each step: icon, heading, 2-3 sentence description. Timeline estimates per step.

**Psychology:** A defined process signals professionalism and predictability. Buyers want to know "what will happen and when." Reducing uncertainty reduces anxiety.

**Trust building:** Timeline estimates ("Step 1–2: 24 hours", "Step 3–4: 10–14 days", "Step 5–6: depends on destination") show real operational knowledge.

#### Section 3: Shipping & Logistics

**Content:** Three cards: Ocean Freight (FCL, LCL, breakbulk) | Air Freight (urgent samples, small consignments) | Multi-modal (door-to-door, warehousing). Each: icon, description, typical transit times to key regions.

**Psychology:** Buyers want to know "can they ship to my port?" Listing specific capabilities with transit times answers this.

**Trust building:** Specific transit times ("Mundra → Jebel Ali: 8–12 days", "Mundra → Rotterdam: 22–28 days") show real shipping volume, not theoretical capability.

#### Section 4: Documentation & Compliance

**Content:** Accordion list of documents provided: Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, Phytosanitary Certificate, Health Certificate, Fumigation Certificate, Certificate of Analysis, Weight Certificate, GSP Certificate, Insurance Certificate. Each expandable with a brief explanation.

**Psychology:** Importers have been burned by missing documentation causing customs delays. A comprehensive documentation list signals "we won't leave you stranded at customs."

**Trust building:** Including non-obvious documents (GSP Certificate for tariff preference, Fumigation for wooden packaging) signals deep export knowledge.

#### Section 5: Incoterms Explained

**Content:** Simple table or cards: EXW, FOB, CIF, CFR, DAP, DDP. Each: Incoterm name, what buyer pays, what seller pays, risk transfer point. CIF and FOB highlighted as "recommended for first-time buyers."

**Psychology:** Incoterms can be confusing for less experienced importers. Explaining them clearly positions RMRP as an educator and partner, not just a supplier.

**Trust building:** Recommending FOB/CIF for first-time buyers signals honesty — not pushing the most expensive term.

#### Section 6: Payment Terms & Trade Finance

**Content:** Cards: Letter of Credit (LC at sight, LC usance) | Telegraphic Transfer (TT, % advance + balance against documents) | Documents Against Payment (DP). Each: how it works, typical split, risk level, best for. Clear statement: "We welcome LC-backed transactions with our partner banks."

**Psychology:** Payment terms are a top-3 concern for international buyers. Fear of losing money to an unknown supplier is real. Clear, transparent payment options directly address this fear.

**Trust building:** Mentioning partner banks by name (if comfortable) adds significant credibility. Offering LC (especially confirmed LC) signals financial stability.

**Conversion element:** The combination of clear Incoterms + clear payment terms is often the deciding factor for a first-time buyer.

#### Section 7: Ports & Destinations

**Content:** Visual map or list of served ports by region: Middle East (Jebel Ali, Dammam, Sohar), SE Asia (Singapore, Jakarta, Port Klang), Africa (Mombasa, Lagos, Durban, Tema), Europe (Rotterdam, Hamburg, Barcelona, Felixstowe), Americas (Houston, Santos, Buenaventura). Plus "Ask us about non-listed destinations."

**Psychology:** A buyer who sees their port on the list feels "they already ship here — they know the route." This is a high-trust signal.

#### Section 8: Shipment Highlights / Case Studies

**Content:** 2–3 mini case studies: "20,000 MT aluminum scrap to Turkey — delivered on schedule" | "Consolidated food container to Dubai — 6 products, 1 shipment" | "Sample-to-volume: How we converted a sample request into a 500 MT annual contract." Each: headline, challenge, solution, result.

**Psychology:** Case studies are social proof applied to services. They show RMRP has done this before, successfully.

#### Section 9: CTA

**Content:** "Ready to Ship? Let's Talk Logistics." + "Get a freight quote for your cargo, or discuss your import requirements with our export team." + "Request a Freight Quote" | "Contact Export Team"

### 6.4 Mobile Considerations

- Process steps: vertical stepper.
- Ports list: searchable/filterable or expandable by region.
- Payment terms: stacked cards.

### 6.5 SEO Considerations

| Element | Strategy |
|---------|----------|
| H1 | "Export Services — RMRP Global Trade" |
| Title | "Export Services — Documentation, Logistics & Shipping | RMRP Global Trade" |
| Meta Description | "RMRP Global Trade provides end-to-end export services: sourcing, quality control, documentation (COO, phytosanitary, B/L), logistics (FCL/LCL), and delivery. Serving 25+ countries. Request a freight quote." |

---

## 7. QUALITY ASSURANCE

### 7.1 Page Objective

Function as **the definitive proof of quality systems** — provide enough detail for a buyer's QA/QC team to approve RMRP as a qualified supplier without requiring a full audit. This page is often shared internally within buying organizations.

**Primary conversion:** Certificate download or RFQ
**Secondary conversion:** Quality report download

### 7.2 Section Hierarchy & Order

| # | Section | Vertical Space | Priority |
|---|---------|---------------|----------|
| 1 | **Hero Banner** | 350px | Critical |
| 2 | **Quality Policy** | 300px | High |
| 3 | **Quality Control Process** | 550px | Critical |
| 4 | **Laboratory & Testing** | 450px | Critical |
| 5 | **Certifications & Standards** | 450px | Critical |
| 6 | **Product Traceability** | 350px | Medium |
| 7 | **Quality Reports / COA** | 300px | High |
| 8 | **Third-Party Inspection** | 300px | High |
| 9 | **CTA** | 350px | High |

### 7.3 Section Details

#### Section 1: Hero Banner

**Content:** Image background (lab technician or quality testing). Overline: "Quality Assurance". H1: "Quality That Meets Global Standards". Subtitle: "From raw material inspection to final product testing — every shipment meets international quality standards before it leaves our facility."

**Psychology:** Quality is a hygiene factor for B2B buyers. They will not proceed if quality is uncertain. The hero asserts "quality is built into our process."

#### Section 2: Quality Policy

**Content:** 2–3 paragraphs: "Our quality policy is built on three pillars: Supplier Verification, In-Process Quality Control, and Third-Party Validation." Each pillar: 1-sentence explanation.

**Psychology:** A written quality policy signals a formal quality management system (likely ISO certified). Formal systems = predictable quality.

#### Section 3: Quality Control Process

**Content:** Three-column process: "Incoming Raw Material Inspection" → "In-Process QC" → "Final Product Testing". Each column: icon, heading, 3–4 bullet points of specific checks performed. Visual timeline connecting them.

**Psychology:** A detailed QC process answers the question "How do they ensure quality?" with specifics, not generalities. Specificity builds trust.

**Trust building:** Bullet points should be technical: "Spectrometric analysis for chemical composition (aluminum)" / "Moisture content analysis via halogen moisture analyzer (food)" / "Metal detection and magnet separation (all products)".

#### Section 4: Laboratory & Testing

**Content:** Grid of testing capabilities with equipment photos. For metals: Spectrometer (OES), Tensile Testing, Hardness Testing. For food: Moisture Analyzer, Microbiological Lab (TPC, E. coli, Salmonella), Heavy Metal Testing (AAS/ICP), Pesticide Residue Analysis.

**Psychology:** A buyer's QA team will scrutinize this section. Listing specific testing equipment and methods signals a real laboratory, not a checkbox exercise.

**Trust building:** Photos of actual lab equipment are powerful. If third-party lab partners are used (SGS, Eurofins, Intertek), name them.

#### Section 5: Certifications & Standards

**Content:** BadgeGrid of ALL certifications with expandable details. For each: certifying body, scope, certificate number, validity date, "Download Certificate" link. Also list international standards complied with: ASTM B179 (aluminum ingots), ISRI (scrap), EU 396/2005 (pesticide residues), FDA (food contact), etc.

**Psychology:** This is the page a buyer's compliance team will screenshot and file. Making certificates downloadable and showing specific standards (e.g., "ASTM B179") signals deep quality knowledge.

**Trust building:** Certificate number and validity date prove the certification is current. Many suppliers show expired or fake certs. This transparency is rare and valuable.

#### Section 6: Product Traceability

**Content:** Description of traceability system: batch numbering system, farm-to-factory traceability for food products, lot-level tracking from production to shipment. "Every shipment can be traced back to its production batch."

**Psychology:** Traceability is a growing requirement, especially in food and regulated industries. A traceability system implies mature quality management.

#### Section 7: Quality Reports / COA

**Content:** "Download Sample Certificate of Analysis" buttons — one for metals, one for food. Also: "Request a COA for any shipment — included with every delivery at no extra cost."

**Psychology:** Providing COAs by default (without being asked) is a differentiator. It signals "we have nothing to hide." For food buyers, a COA with every shipment is often a requirement.

**Conversion element:** COA download → captures email (gated).

#### Section 8: Third-Party Inspection

**Content:** "We welcome third-party inspection." + Explanation: "Before every shipment, you may appoint an independent inspection agency (SGS, Bureau Veritas, Intertek, or your preferred partner) to inspect and test the goods at our facility. Inspection reports are shared before loading."

**Psychology:** This is one of the strongest trust statements a supplier can make. It says "our quality will pass any independent test." The offer (not just "available on request" but "we welcome it") removes all doubt.

#### Section 9: CTA

**Content:** "Quality You Can Verify. Partnership You Can Trust." + "Download our quality dossier or request a quote with full quality specifications." + "Download Quality Documents" | "Request a Quote"

### 7.4 Mobile Considerations

- QC process: vertical timeline.
- Certification badges: horizontal scroll.
- Lab equipment: card grid.

### 7.5 SEO Considerations

| Element | Strategy |
|---------|----------|
| H1 | "Quality Assurance — RMRP Global Trade" |
| Title | "Quality Assurance — ISO, HACCP & FSSAI Certified Exporter | RMRP Global Trade" |
| Meta Description | "RMRP Global Trade's quality assurance: ISO 9001, ISO 22000, HACCP & FSSAI certified. Spectrometric analysis, microbiological testing, pesticide residue testing, and third-party inspection available for every shipment." |

---

## 8. GLOBAL MARKETS

### 8.1 Page Objective

Demonstrate **proven global reach** — show potential buyers that RMRP already exports to their region, understands regional compliance requirements, and has established logistics routes. This page reduces geographic uncertainty and regional risk perception.

**Primary conversion:** Region profile click-through or trade partner inquiry
**Secondary conversion:** Case study engagement or contact form

### 8.2 Section Hierarchy & Order

| # | Section | Vertical Space | Priority |
|---|---------|---------------|----------|
| 1 | **Hero Banner** | 350px | Critical |
| 2 | **Interactive World Map** | 500px | Critical |
| 3 | **Region Profiles** | Dynamic | Critical |
| 4 | **Trade Routes & Logistics** | 400px | Medium |
| 5 | **Case Studies** | 500px | High |
| 6 | **Trade Partners Network** | 400px | Medium |
| 7 | **CTA: Become a Trade Partner** | 350px | High |

### 8.3 Section Details

#### Section 1: Hero Banner

**Content:** World map background (semi-transparent). Overline: "Global Markets". H1: "Serving Industry Across 25+ Countries". Subtitle: "From the Middle East to the Americas, our products power industries worldwide. Explore our regional presence and trade capabilities."

**Psychology:** The hero immediately answers the question "Where do they export?" A buyer from Turkey scans the map for Turkey. If they see it, they stay.

#### Section 2: Interactive World Map

**Content:** SVG/CSS world map with served countries highlighted in gold. Hover/click on a region → highlights and shows tooltip with key stats: "Middle East: 8 countries served, primary products: aluminum ingots, jaggery, sugar, key ports: Jebel Ali, Dammam, Sohor." Below map: quick stat row: "8 Countries in Middle East | 6 in Africa | 5 in SE Asia | 4 in Europe | 3 in Americas"

**Psychology:** Interactive maps engage users and let them self-select their region. The act of clicking their region creates ownership in the journey.

**Trust building:** If their country is highlighted, trust is immediate. The tooltip shows specific products and ports — proving real trade activity, not aspirational claims.

**Conversion element:** Clicking a region → scrolls to or navigates to region profile section below.

#### Section 3: Region Profiles

**Content:** For each of 6 regions, a section card with: region name, flag icon, products exported to that region, compliance notes specific to the region ("EU requires REACH registration for aluminum" / "GCC requires Halal certification for food"), key ports, typical transit time from India, "View Region Profile" CTA.

**Psychology:** Importers face unique regulatory hurdles per region. Showing awareness of their region's specific requirements signals expertise and reduces fear of compliance issues.

**Trust building:** Region-specific details (e.g., "GCC requires Halal certification for food products") can only be written by someone who actually exports there.

#### Section 4: Trade Routes & Logistics

**Content:** Animated trade route visualization or static map with arrowed lines from India to each region. Below: table of routes showing origin port → destination port, average transit time, shipping frequency.

**Psychology:** Trade routes prove active logistics operations. A buyer in Lagos sees "Mundra → Apapa (Lagos): 18–22 days, weekly sailings" and thinks "they know this route."

#### Section 5: Case Studies

**Content:** 3 case study cards: one from each major region. Mix of metals and food. Each: buyer industry, challenge, solution, results, testimonial quote if available.

**Psychology:** Case studies are the most convincing form of social proof for global trade. A case study from the buyer's own region or industry is extremely persuasive.

**Trust building:** Specifics: tonnage, timeline, product grade, outcome. "Supplied 500 MT of Tense aluminum scrap to a Turkish foundry, reducing their raw material cost by 8% through optimized logistics."

#### Section 6: Trade Partners Network

**Content:** "Our distribution partners include:" — grid of partner logos (if any). Text: "Looking for regional representation? We partner with local distributors and agents to serve markets better."

**Psychology:** Partner logos add credibility. Also opens the door for distributors reading this page to inquire about partnership.

#### Section 7: CTA

**Content:** "Wherever You Are, We Deliver." + "Contact our export team to discuss your region's requirements." + "Inquire About Your Region" | "Become a Trade Partner"

### 8.4 Mobile Considerations

- Interactive map: simplified to static image with clickable region list below.
- Region profiles: expandable accordion or full-width cards.
- Case studies: single column, full-width.

### 8.5 SEO Considerations

| Element | Strategy |
|---------|----------|
| H1 | "Global Markets — RMRP Global Trade" |
| Title | "Global Markets — RMRP Global Trade | Exporting to 25+ Countries" |
| Meta Description | "RMRP Global Trade exports aluminum and agro commodities to the Middle East, Africa, Southeast Asia, Europe, and the Americas. Explore our global presence and regional compliance expertise." |

---

## 9. CONTACT US

### 9.1 Page Objective

Serve as the **primary conversion point** — capture qualified B2B inquiries with minimal friction while providing all contact information a buyer needs to reach the right person. This page must balance comprehensiveness with speed.

**Primary conversion:** Inquiry form submission
**Secondary conversion:** WhatsApp click-to-chat or phone call
**Tertiary conversion:** Email click or map direction click

### 9.2 Section Hierarchy & Order

| # | Section | Vertical Space | Priority |
|---|---------|---------------|----------|
| 1 | **Hero Banner** | 300px | Medium |
| 2 | **Inquiry Form + Contact Info** | 700px | Critical |
| 3 | **Product Inquiry Quick Links** | 300px | High |
| 4 | **Map & Office Location** | 400px | Medium |
| 5 | **FAQ Section** | 500px | Low |
| 6 | **Final CTA** | 300px | Medium |

### 9.3 Section Details

#### Section 1: Hero Banner

**Content:** Compact hero. Overline: "Contact Us". H1: "Let's Start a Conversation". Subtitle: "Whether you need a quote, samples, or partnership information — our export team is ready to respond within 4 hours."

**Psychology:** The "4 hours" response commitment sets expectations and signals responsiveness. In B2B export, response time is a key satisfaction driver.

#### Section 2: Inquiry Form + Contact Info

**Content:** SplitLayout. Left (60%): ContactForm — fields: Full Name, Email, Phone/WhatsApp, Company Name, Country, Product Interest (multi-select from 12 products), Message (with suggested prompt: "Tell us about your requirements — quantity, destination, timeline"). Submit button: "Submit Inquiry" (gold, full-width on mobile).

Right (40%): ContactInfo — Address (with map link), Phone (+91-XXX with click-to-call), Email (info@... with mailto), Business Hours (Mon–Sat, 9–6 IST). Below: WhatsApp CTA button (prominent, "Chat on WhatsApp — Typically responds in 30 min" with green/gold styling).

**Psychology:** The form is the primary action, placed prominently. Contact info is secondary but visible without scrolling. WhatsApp number is prominent for users who prefer instant messaging.

**Trust building:** Physical address (verifiable on Google Maps), business hours (shows they have a real office and working schedule), response time commitments.

**Conversion element:** The form is B2B-optimized — not too many fields (7), product interest dropdown helps route the inquiry to the right team, message field guides content with suggested prompt.

**Form optimization details:**
- Fields: Name (required) | Email (required, validated) | Phone (required, allows international format) | Company (required) | Country (dropdown, required) | Product Interest (multi-select checkboxes, all 12 products listed in 3 groups) | Message (optional but encouraged with placeholder prompt)
- ReCAPTCHA v3 (invisible, no user interaction)
- Honeypot field (hidden, bot protection)
- Auto-response: "Thank you — we have received your inquiry and will respond within 4 business hours"
- Notification: Email sent to sales team + WhatsApp notification
- CRM logging: Each submission logged with product interest (for segmentation)

#### Section 3: Product Inquiry Quick Links

**Content:** Row of 3–4 shortcut cards: "Need Aluminum?" → links to `/products/aluminum-ingots` | "Need Food Products?" → `/products/food-agro` | "Need a Freight Quote?" → `/export-services` | "Request a Sample" → WhatsApp or product page.

**Psychology:** Some users may not be ready to fill a form. These shortcut cards offer alternative paths to the information they need, potentially warming them up before they return to the form.

#### Section 4: Map & Office Location

**Content:** MapEmbed showing company location (Google Maps embed, lazy-loaded). Address text below. "Visit Our Office" — office exterior photo (optional).

**Psychology:** A real map location proves the business has a physical presence. Many fraudulent exporters hide their address. A verified location on Google Maps is a trust signal.

#### Section 5: FAQ Section

**Content:** FAQAccordion with categories: Orders & Quotes | Shipping & Delivery | Quality & Samples | Payment Terms. 3–5 questions per category.

**Psychology:** Frequently asked questions pre-empt common objections and reduce barrier to form submission. A buyer who reads "Can I get a sample before ordering?" and sees "Yes — we offer free samples for qualified buyers" is more likely to inquire.

**Conversion element:** Each FAQ answer should include a soft CTA where relevant: "Request a sample here →" or "Get a quote for your destination →"

#### Section 6: Final CTA

**Content:** Minimal. "Response time: Within 4 business hours. Quality assurance: Third-party inspection available. Payment terms: LC, TT, DP available." + "Call us directly: +91-XXX-XXXXXXX"

**Psychology:** Recap of key trust signals as the user leaves the page — reinforcement before they decide whether to submit.

### 9.4 Mobile Considerations

- Form and contact info: stacked (form on top, contact below).
- Product shortcut cards: horizontal scroll or 2×2 grid.
- Map: full-width, lazy-loaded.
- Sticky WhatsApp button extra prominent on mobile.
- Phone number click-to-call (tel: link).
- Keyboard-friendly form (proper input types, auto-focus on first field).

### 9.5 SEO Considerations

| Element | Strategy |
|---------|----------|
| H1 | "Contact RMRP Global Trade — Get a Quote" |
| Title | "Contact Us — RMRP Global Trade | Export Inquiry" |
| Meta Description | "Contact RMRP Global Trade for aluminum and agro commodity exports. Request a quote, samples, or partnership information. Our export team responds within 4 hours. Based in [city], India." |
| Schema | ContactPoint (with phone, email, hours, areaServed: World) + LocalBusiness (with address, geo coordinates) |

---

## Conversion Optimization Notes (Cross-Page)

### CTA Density

| Page | Number of CTAs | Primary CTA | Secondary CTA |
|------|---------------|-------------|---------------|
| Home | 8 | "Request a Quotation" (hero) | "Explore Our Products" |
| About | 4 | "Download Corporate Profile" | "Contact Our Team" |
| Products | 4 | Product card clicks | "Submit Bulk Inquiry" |
| Aluminum | 5 | "Get CIF Quote" | "Chat on WhatsApp" |
| Food & Agro | 5 | "Request a Sample" | "View Details" |
| Export Services | 4 | "Request a Freight Quote" | "Contact Export Team" |
| Quality | 4 | "Download Quality Documents" | "Request a Quote" |
| Global Markets | 4 | Region profile clicks | "Inquire About Your Region" |
| Contact | 3 | "Submit Inquiry" (form) | "Chat on WhatsApp" |

### Information Flow Pattern (Universal)

```
1. ATTENTION   → Hero (relevance signal)
2. CREDIBILITY → Stats / Certifications / Timeline
3. CAPABILITY  → Products / Services / Infrastructure
4. TRUST       → Testimonials / Case Studies / QC / Third-Party Inspection
5. CONVERSION  → CTA (form / WhatsApp / download)
```

### Psychological Triggers Per Page Section

| Section Type | Primary Trigger | Secondary Trigger |
|-------------|----------------|-------------------|
| Hero | Relevance ("we have what you need") | Authority (global reach, years in business) |
| Stats | Social proof ("others trust them") | Scale ("they're big enough") |
| Products | Specificity ("exactly what I need") | Breadth ("they have multiple options") |
| Quality | Risk reduction ("they test everything") | Transparency ("they share their process") |
| Testimonials | Social proof ("a company like me trusts them") | Specificity (named individuals) |
| Process | Predictability ("I know what will happen") | Professionalism ("they have a system") |
| CTA | Urgency/Friction removal | Low barrier to entry (sample/WhatsApp) |

---

*End of Page Blueprints & Wireframe Architecture — v1.0*

*Ready for UI design and component implementation.*
