# RMRP Global Trade — Product Architecture System

**Products:** 15 total across 3 divisions | **Buyer Types:** Industrial (metals), Food Importers (processed), Distributors (agro)
**Key Challenge:** Unifying 15 diverse products under a single consistent experience while serving vastly different buyer information needs

---

## 1. Product Information Architecture

### 1.1 Product Hierarchy

```
PRODUCTS (/products)
│
├── METALS DIVISION (/products/metals)
│   ├── Aluminum Ingots        → /products/aluminum-ingots
│   └── Aluminum Scrap         → /products/aluminum-scrap
│
├── PROCESSED FOOD DIVISION (/products/food-agro)
│   ├── Jaggery                → /products/jaggery
│   │   └── Variants: Solid, Powder, Cubes
│   ├── Onion Powder & Flakes  → /products/onion
│   │   └── Variants: Powder, Flakes, Granules, Kibbled
│   ├── Garlic Powder & Flakes → /products/garlic
│   │   └── Variants: Powder, Flakes, Granules
│   ├── Banana Powder          → /products/banana-powder
│   ├── Tomato Flakes          → /products/tomato-flakes
│   └── Sugar                  → /products/sugar
│       └── Variants: ICUMSA 45, ICUMSA 150, S-30, M-30
│
└── AGRO / FLOUR DIVISION (/products/grains-flour)
    ├── Millet (Bajra) Flour   → /products/millet-flour
    ├── Jowar Flour            → /products/jowar-flour
    ├── Wheat Flour            → /products/wheat-flour
    │   └── Variants: Atta, Maida, Rawa/Sooji
    └── Maize Flour            → /products/maize-flour
```

### 1.2 Product Grouping Logic

The 15 products are grouped into 3 divisions based on **buyer behavior and information requirements**, not product characteristics alone:

| Division | Buyer Type | Primary Concern | Secondary Concern | Information Density |
|----------|-----------|-----------------|-------------------|---------------------|
| **Metals** | Industrial procurement managers | Specs (ISRI grades, alloy %) | Price (LME-linked) | High — technical data sheets |
| **Processed Food** | Food importers, processing companies | Certifications (FSSAI, HACCP, Halal) | Shelf life, packaging | High — food safety + specs |
| **Agro / Flour** | Distributors, wholesalers | Nutritional profile, origin | Packaging, MOQ | Medium — nutritional + origin |

### 1.3 Product Metadata Schema (All 15 Products)

Every product in the system is defined by this unified schema:

```typescript
interface Product {
  // Identity
  id: string;
  name: string;
  slug: string;
  division: 'metals' | 'food-agro' | 'grains-flour';
  category: string;
  hsCode: string;
  
  // Marketing
  tagline: string;           // 10-words max, e.g., "High-Purity Aluminum for Critical Applications"
  shortDescription: string;  // 25-words max, for cards and meta descriptions
  fullDescription: string;   // Rich text, 150-300 words
  
  // Technical
  specifications: SpecGroup[];  // Grouped specs (chemical, physical, microbiological)
  variants: Variant[];          // Product form variants (powder/flakes/granules)
  certifications: Badge[];      // Applicable certifications
  applications: Application[];  // Industry/use-case applications
  
  // Commercial
  packagingOptions: PackagingOption[];
  moq: string;                  // e.g., "20 MT (1x20 FCL)"
  leadTime: string;             // e.g., "10-14 days after PO confirmation"
  portOfLoading: string;        // e.g., "Mundra, Nhava Sheva, Kandla"
  incoterms: string[];          // e.g., ["FOB", "CIF", "CFR"]
  paymentTerms: string[];       // e.g., ["LC at sight", "TT (30/70)"]
  
  // Media
  images: ProductImage[];       // 3-5 images
  brochureUrl?: string;         // PDF spec sheet
  videoUrl?: string;            // Product video (optional)
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  schema: ProductSchema;        // JSON-LD product schema
  
  // Relationships
  relatedProducts: string[];    // IDs of related products
  substituteProducts: string[]; // IDs of substitute/alternative products
}
```

---

## 2. Category Hierarchy

### 2.1 Visual Hierarchy in Product Navigation

```
Level 1: DIVISION                  Level 2: CATEGORY            Level 3: PRODUCT
═══════════════════════════════    ═══════════════════════      ═══════════════════

METALS DIVISION                    Aluminum Products
┌─────────────────────────────┐    ┌──────────────────────┐    ┌──────────────────┐
│  Industrial Raw Materials   │    │  Smelting / Foundry   │    │  Ingots          │
│  For Foundries & Smelters   │    │  Raw Materials        │    │  Purity 99.5%+   │
└─────────────────────────────┘    └──────────────────────┘    └──────────────────┘
                                                                 ┌──────────────────┐
                                                                 │  Scrap           │
                                                                 │  All ISRI Grades │
                                                                 └──────────────────┘

PROCESSED FOOD DIVISION            Dehydrated & Processed      Individual Products
┌─────────────────────────────┐    ┌──────────────────────┐    ┌──────────────────┐
│  Food Industry Ingredients  │    │  Sweeteners          │    │  Jaggery         │
│  For Processors & Importers │    │                      │    │  Sugar           │
└─────────────────────────────┘    ├──────────────────────┤    ├──────────────────┤
                                   │  Dehydrated Veg      │    │  Onion           │
                                   │                      │    │  Garlic          │
                                   │                      │    │  Tomato Flakes   │
                                   ├──────────────────────┤    ├──────────────────┤
                                   │  Fruit Powders       │    │  Banana Powder   │
                                   └──────────────────────┘    └──────────────────┘

AGRO / FLOUR DIVISION              Milled Flours              Individual Products
┌─────────────────────────────┐    ┌──────────────────────┐    ┌──────────────────┐
│  Wholesale Food Commodities │    │  Gluten-Free Grains  │    │  Millet Flour    │
│  For Distributors & Packers │    │                      │    │  Jowar Flour     │
│                             │    ├──────────────────────┤    ├──────────────────┤
│                             │    │  Wheat & Maize       │    │  Wheat Flour     │
│                             │    │                      │    │  Maize Flour     │
│                             │    └──────────────────────┘    └──────────────────┘
```

### 2.2 Category Landing Page Content Strategy

Each division has a category landing page that serves as a **buyer gateway**:

| Landing Page | Buyer Question Answered | Key Content |
|-------------|------------------------|-------------|
| `/products/metals` | "Can they supply my foundry?" | Industry overview, key specs table, scrap vs ingots comparison, certifications, CTA |
| `/products/food-agro` | "Are their food products safe for import?" | Food safety certifications banner, processing standards, packaging options, sample CTA |
| `/products/grains-flour` | "Do they have the flour grades I need?" | Origin sourcing, milling process, nutritional highlights, bulk packaging, distributor CTA |

---

## 3. Product Page Strategy

### 3.1 Template Architecture

All 15 product pages share the same core template. Content within each section varies by division:

```
┌─────────────────────────────────────────────────────────────────┐
│  PRODUCT DETAIL PAGE (TEMPLATE)                                  │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │  BREADCRUMB: Home > Products > [Division] > [Product Name]   │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌───── SECTION 1: PRODUCT HERO ─────────────────────────────┐   │
│  │  [Image Gallery (3-5 images)]   |  Product Info Panel      │   │
│  │  (Left 55%)                      |  (Right 45%)            │   │
│  │                                  |                         │   │
│  │    ┌───┐  ┌───┐  ┌───┐         |  Product Name (H1)      │   │
│  │    │img│  │img│  │img│         |  Tagline                 │   │
│  │    │ 1 │  │ 2 │  │ 3 │         |  HS Code Badge           │   │
│  │    └───┘  └───┘  └───┘         |  Short Description       │   │
│  │                                  |                         │   │
│  │    [Active Image Display]       |  Key Specs Strip         │   │
│  │                                  |  (purity/grade/pack)    │   │
│  │                                  |                         │   │
│  │                                  |  Certification Badges   │   │
│  │                                  |                         │   │
│  │                                  |  MOQ / Lead Time Callout│   │
│  │                                  |                         │   │
│  │                                  |  ┌─────────────────┐   │   │
│  │                                  |  │ REQUEST QUOTE   │   │   │
│  │                                  |  └─────────────────┘   │   │
│  └──────────────────────────────────┴─────────────────────────┘   │
│                                                                   │
│  ┌───── SECTION 2: QUICK INQUIRY STRIP ───────────────────────┐   │
│  │  Mini form: "Get CIF/FOR Pricing"                          │   │
│  │  [Quantity] [Destination Port] [Email] [Submit]            │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───── SECTION 3: ABOUT THE PRODUCT ─────────────────────────┐   │
│  │  Full description (2-3 paragraphs)                          │   │
│  │  • What it is                                              │   │
│  │  • How it's produced/sourced                               │   │
│  │  • Why it's high quality                                   │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───── SECTION 4: SPECIFICATIONS ────────────────────────────┐   │
│  │  SpecificationsTable (grouped by category)                   │   │
│  │  • Chemical Composition                                     │   │
│  │  • Physical Properties                                      │   │
│  │  • Microbiological (food only)                              │   │
│  │  • Nutritional (flour only)                                 │   │
│  │  • Packaging Specifications                                 │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───── SECTION 5: APPLICATIONS ──────────────────────────────┐   │
│  │  Application cards: industry + use-case                     │   │
│  │  [Foundry] [Die Casting] [Automotive] ...                   │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───── SECTION 6: PACKAGING OPTIONS ─────────────────────────┐   │
│  │  PackagingOptions cards: type + weight + MOQ                 │   │
│  │  Custom packaging available note                             │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───── SECTION 7: SHIPPING & LOGISTICS ──────────────────────┐   │
│  │  Export information table:                                  │   │
│  │  Port of loading | Lead time | Incoterms | Payment terms    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───── SECTION 8: QUALITY ASSURANCE ─────────────────────────┐   │
│  │  Certifications + testing process (per product)              │   │
│  │  "Third-party inspection available" banner                   │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───── SECTION 9: RELATED PRODUCTS ──────────────────────────┐   │
│  │  ProductCard grid (3-4 related products from same division)  │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───── SECTION 10: EXPORT INQUIRY CTA ───────────────────────┐   │
│  │  Full CTA block: "Ready to Order [Product Name]?"            │   │
│  │  [Request a Quotation] [Request Sample] [Speak to Expert]    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───── FOOTER ───────────────────────────────────────────────┐   │
│  │  Standard site footer                                        │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Division-Specific Template Variations

#### Metals Product Pages (Aluminum Ingots, Aluminum Scrap)

| Section | Variation | Content |
|---------|-----------|---------|
| Hero | LME price reference strip | "Pricing linked to LME cash settlement + premium" |
| Specs | Heavy focus on composition | Chemical composition table (Fe%, Si%, Cu%, etc.), physical properties |
| Certifications | ISO 9001, mill test certificates | MTC (Mill Test Certificate) available with every shipment |
| Quality | Spectrometric analysis, third-party testing | OES spectrometer, SGS/Bureau Veritas option |
| CTA | WhatsApp preferred | "Scrap buyers: Get pricing via WhatsApp in 30 minutes" |

#### Processed Food Product Pages (Jaggery, Onion, Garlic, Banana, Tomato, Sugar)

| Section | Variation | Content |
|---------|-----------|---------|
| Hero | Food safety banner at top | "FSSAI Licensed | HACCP Certified | ISO 22000" |
| Specs | Microbiological + chemical | TPC, E.coli, Salmonella, Yeast & Mold, Heavy Metals |
| Certifications | Food-specific | FSSAI license, HACCP, ISO 22000, Halal, Non-GMO |
| Quality | Food safety process | HACCP plan, metal detection, micro lab testing |
| CTA | Sample request primary | "Request a Free Sample — Test Before You Order" |
| Packaging | Food-grade specific | Nitrogen-flushed, vacuum-packed, poly-lined cartons |

#### Agro / Flour Product Pages (Millet, Jowar, Wheat, Maize)

| Section | Variation | Content |
|---------|-----------|---------|
| Hero | Origin + nutritional focus | "Sourced from [Region], stone-milled daily" |
| Specs | Nutritional composition | Protein %, fiber %, carbohydrates, gluten status, energy |
| Certifications | Food safety + organic if available | FSSAI, ISO 22000, Organic (if applicable) |
| Applications | Food manufacturing | Bakery, Snacks, Baby Food, Traditional Cuisine |
| CTA | Bulk pricing inquiry | "Request Bulk Distributor Pricing" |

---

## 4. SEO URL Structure

### 4.1 URL Architecture

```
Category pages:
/products                                    → Master product listing
/products/metals                             → Metals division landing
/products/food-agro                          → Food & Agro division landing
/products/grains-flour                       → Grains & Flour division landing

Product pages:
/products/aluminum-ingots                    → Aluminum Ingots
/products/aluminum-scrap                     → Aluminum Scrap
/products/jaggery                            → Jaggery (covers solid + powder)
/products/onion                              → Onion Powder & Flakes
/products/garlic                             → Garlic Powder & Flakes
/products/banana-powder                      → Banana Powder
/products/tomato-flakes                      → Tomato Flakes
/products/sugar                              → Sugar
/products/millet-flour                       → Millet (Bajra) Flour
/products/jowar-flour                        → Jowar Flour
/products/wheat-flour                        → Wheat Flour
/products/maize-flour                        → Maize Flour
```

### 4.2 URL Naming Rules

| Rule | Example |
|------|---------|
| All lowercase | `/products/aluminum-ingots` |
| Hyphen-separated words | `/products/banana-powder` |
| Singular form (not plural) | `/products/onion` (not `onions`) |
| Shortest meaningful slug | `/products/jaggery` (not `jaggery-and-jaggery-powder`) |
| No product IDs | Avoid `/products/124` |
| No query parameters for main content | Avoid `/products?id=jaggery` |

### 4.3 URL Redirect Strategy for Variants

Each product page covers ALL variants of a product. Variants are handled via anchor links or tab navigation, NOT separate URLs:

| Product | Variants | URL | In-Page Navigation |
|---------|----------|-----|-------------------|
| Jaggery | Solid, Powder, Cubes | `/products/jaggery` | Tabs or accordion sections |
| Onion | Powder, Flakes, Granules, Kibbled | `/products/onion` | Tab navigation for variants |
| Garlic | Powder, Flakes, Granules | `/products/garlic` | Tab navigation for variants |
| Sugar | ICUMSA 45, 150, S-30, M-30 | `/products/sugar` | Spec table with grade filter |
| Wheat Flour | Atta, Maida, Rawa/Sooji | `/products/wheat-flour` | Variant cards at top |

This approach:
- Consolidates SEO authority to a single URL per product
- Prevents thin content on variant-only pages
- Makes cross-variant comparison easy for buyers
- Reduces site complexity

### 4.4 Canonical URLs

Every product page has:
```html
<link rel="canonical" href="https://rmrpglobaltrade.com/products/[slug]" />
```

No query parameters or tracking in canonical URLs. UTM parameters are ignored in canonical.

### 4.5 Hreflang Strategy (Future)

```html
<link rel="alternate" hreflang="en" href="https://rmrpglobaltrade.com/products/aluminum-ingots" />
<link rel="alternate" hreflang="ar" href="https://rmrpglobaltrade.com/ar/products/aluminum-ingots" />
<link rel="alternate" hreflang="es" href="https://rmrpglobaltrade.com/es/products/aluminum-ingots" />
<link rel="alternate" hreflang="fr" href="https://rmrpglobaltrade.com/fr/products/aluminum-ingots" />
<link rel="alternate" hreflang="x-default" href="https://rmrpglobaltrade.com/products/aluminum-ingots" />
```

---

## 5. Product Detail Page Blueprint

### 5.1 Section-by-Section Content Requirements

Below is the definitive content specification for each product page section.

---

#### SECTION 1: Product Hero (Above Fold)

**Purpose:** Immediate relevance + conversion trigger within 5 seconds

| Element | Metals | Processed Food | Agro/Flour |
|---------|--------|----------------|------------|
| Image gallery | 3-5 photos: ingots stacked, scrap yard, packaging, lab testing | 3-5 photos: product close-up, processing line, packaging, facility | 3-5 photos: grain sacks, flour mill, packaging, origin farm |
| H1 | "Aluminum Ingots — 99.5% & 99.7% Purity" | "Onion Powder & Flakes — Dehydrated, Food-Grade" | "Millet (Bajra) Flour — Gluten-Free, High Protein" |
| Tagline | "Premium-Grade Aluminum for Foundries & Smelters" | "Premium Dehydrated Vegetables for Food Processing & Distribution" | "Stone-Grown, Stone-Milled — Pure Millet Flour" |
| HS Code | `7601.10` (ingots) / `7602.00` (scrap) | Varies by product | Varies by product |
| Key specs | Purity %, weight, alloy | Moisture %, mesh size, SO2 | Protein %, fiber %, gluten status |
| Cert badges | ISO 9001 | FSSAI, HACCP, Halal, ISO 22000 | FSSAI, ISO 22000 |
| MOQ | 20 MT (1x20 FCL) | 10 MT (trial), 20 MT (bulk) | 20 MT (1x20 FCL) |
| Price indicator | "LME-linked pricing" | "Competitive FOB/CIF pricing" | "Competitive FOB/CIF pricing" |
| **Primary CTA** | "Get CIF Quote" → form or WhatsApp | "Request a Sample" → sample form | "Request Distributor Pricing" → form |

**Hero layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────┐  ┌────────────────────────────────┐  │
│  │                          │  │  H1: Product Name              │  │
│  │  Image Gallery           │  │  Tagline                       │  │
│  │  (55% width)             │  │                                │  │
│  │                          │  │  HS Code: 7601.10              │  │
│  │  [Main Image]            │  │                                │  │
│  │                          │  │  [99.5% Purity] [Grade A] [ISRI]│  │  ← Spec pills
│  │  [thumb] [thumb] [thumb] │  │                                │  │
│  │                          │  │  [ISO] [FSSAI] [HACCP]         │  │  ← Badges
│  └──────────────────────────┘  │                                │  │
│                                 │  MOQ: 20 MT  |  Lead: 14 days│  │
│                                 │                                │  │
│                                 │  ┌────────────────────────┐   │  │
│                                 │  │  GET CIF QUOTE /       │   │  │
│                                 │  │  REQUEST A SAMPLE      │   │  │
│                                 │  └────────────────────────┘   │  │
│                                 │                                │  │
│                                 │  [ Chat on WhatsApp → ]       │  │
│                                 └────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

**Image guidelines (all products):**
- Image 1: Hero product shot (isolated, professional lighting, 1200×900)
- Image 2: Product in packaging (bag/drum/container, 1200×900)
- Image 3: Bulk/lot view (pallet, container loading, 1200×900)
- Image 4: Processing/production (facility shot, 1200×900)
- Image 5 (optional): Application in use (foundry/food production)

---

#### SECTION 2: Quick Pricing Strip (Sticky/Visible)

**Purpose:** Capture ready-to-buy buyers without scrolling

**Layout:** Full-width strip below hero (background: Gray-50 or Navy-900)

```
┌─────────────────────────────────────────────────────────────────────┐
│  Get CIF/FOR Pricing for [Product Name]                             │
│  ┌──────────┐  ┌──────────────┐  ┌────────────────┐  ┌──────────┐  │
│  │ Quantity │  │ Destination  │  │ Your Email     │  │  GET     │  │
│  │ [input]  │  │ Port [input] │  │ [input]        │  │  PRICE   │  │
│  └──────────┘  └──────────────┘  └────────────────┘  └──────────┘  │
│  Response within 4 business hours  |  Third-party inspection avail  │
└─────────────────────────────────────────────────────────────────────┘
```

**Variation:** For food products, replace "Get Price" with "Request Sample" and add product form variant dropdown.

---

#### SECTION 3: About the Product

**Purpose:** Answer "What is this product, how is it made, and why is it high quality?"

**Content formula (applies to all products):**

```
Paragraph 1: WHAT IT IS
"Aluminum ingots are semi-finished aluminum products produced by casting 
molten aluminum into [shape]. At RMRP Global Trade, we supply primary-grade 
aluminum ingots with purity levels of 99.5% and 99.7%, suitable for..."

Paragraph 2: HOW IT'S PRODUCED
"Our ingots are sourced from [primary/secondary] smelters across India with 
rigorous supplier qualification. Each batch undergoes [spectrometric analysis] 
to verify chemical composition before shipment..."

Paragraph 3: WHY IT'S DIFFERENT
"What sets our [product] apart is [specific differentiator — e.g., consistent 
grade integrity, traceability, packaging standards]. Every shipment includes 
a Certificate of Analysis..."
```

---

#### SECTION 4: Specifications Table

**Purpose:** Provide the technical detail buyers need to make decisions

**Layout:** SpecificationsTable component with grouped rows

**Metals — Aluminum Ingots:**
```
┌───────────────────────────────────────┐
│  CHEMICAL COMPOSITION                  │
│  ───────────────────────────────────  │
│  Aluminum (Al)         |   99.5% min  │
│  Iron (Fe)             |   0.30% max  │
│  Silicon (Si)          |   0.25% max  │
│  Copper (Cu)           |   0.02% max  │
│  Magnesium (Mg)        |   0.02% max  │
│  Zinc (Zn)             |   0.05% max  │
│  Titanium (Ti)         |   0.02% max  │
├───────────────────────────────────────┤
│  PHYSICAL PROPERTIES                   │
│  ───────────────────────────────────  │
│  Weight per ingot      |   6-8 kg     │
│  Dimensions            |   [L×W×H]    │
│  Surface               |   Clean, no  │
│                        |   corrosion  │
├───────────────────────────────────────┤
│  GRADE OPTIONS                         │
│  ───────────────────────────────────  │
│  Grade 1              |   99.7% Al    │
│  Grade 2              |   99.5% Al    │
│  Custom alloys        |   Available   │
└───────────────────────────────────────┘
```

**Processed Food — Onion Powder:**
```
┌───────────────────────────────────────┐
│  CHEMICAL SPECIFICATIONS               │
│  ───────────────────────────────────  │
│  Moisture Content      |   5.0% max   │
│  SO₂ Content          |   < 100 ppm   │
│  Ash Content           |   5.0% max   │
│  Acid Insoluble Ash   |   0.5% max    │
│  Heavy Metals         |   EU Compliant│
├───────────────────────────────────────┤
│  MICROBIOLOGICAL SPECIFICATIONS        │
│  ───────────────────────────────────  │
│  Total Plate Count    |   < 10,000/g  │
│  E. Coli              |   Absent/25g  │
│  Salmonella           |   Absent/25g  │
│  Yeast & Mold         |   < 100/g     │
├───────────────────────────────────────┤
│  PHYSICAL SPECIFICATIONS               │
│  ───────────────────────────────────  │
│  Mesh Size (Powder)   |   80-100 mesh │
│  Flake Size (Flakes)  |   5-10 mm     │
│  Color                |   Cream/White │
│  Flavor               |   Characteris-│
│                       |   tic, Pungent│
└───────────────────────────────────────┘
```

**Agro/Flour — Millet Flour:**
```
┌───────────────────────────────────────┐
│  NUTRITIONAL INFORMATION (per 100g)    │
│  ───────────────────────────────────  │
│  Energy               |   378 kcal    │
│  Protein              |   11.0 g      │
│  Carbohydrates        |   72.9 g      │
│  Dietary Fiber        |   10.5 g      │
│  Fat                  |   4.2 g       │
│  Iron                 |   8.0 mg      │
│  Calcium              |   42 mg       │
├───────────────────────────────────────┤
│  PHYSICAL SPECIFICATIONS               │
│  ───────────────────────────────────  │
│  Grind Size           |   Fine Powder │
│  Mesh                 |   60-80 mesh  │
│  Color                |   Light Brown │
│  Moisture             |   10.0% max   │
│  Gluten Status        |   Gluten-Free │
├───────────────────────────────────────┤
│  SHELF LIFE                            │
│  ───────────────────────────────────  │
│  Ambient storage      |   12 months   │
│  Sealed packaging     |   from        │
│                       |   production  │
└───────────────────────────────────────┘
```

---

#### SECTION 5: Applications & Industries

**Purpose:** Help buyers envision how the product fits their operation

**Layout:** 3-4 application cards with icon + description

**Aluminum Ingots:**
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  🔧          │  │  🚗          │  │  🏗️          │  │  ⚡          │
│  Foundry     │  │  Automotive  │  │  Construction │  │  Electrical  │
│  & Casting   │  │  Components  │  │  & Building  │  │  Conductors  │
└──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘
```

**Onion Powder:**
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  🍜          │  │  🥫          │  │  🍖          │  │  🥗          │
│  Soups &     │  │  Sauces &    │  │  Seasonings  │  │  Snack Food  │
│  Broths      │  │  Dressings   │  │  & Rubs      │  │  Seasoning   │
└──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘
```

---

#### SECTION 6: Packaging Options

**Purpose:** Show buyers how the product is packed for export

**Layout:** PackagingOptions cards with type + weight + MOQ + image

**Aluminum Ingots:**
```
┌──────────────────────┐  ┌──────────────────────┐
│  BUNDLED ON PALLETS  │  │ CUSTOM PACKAGING      │
│  ──────────────────  │  │ ──────────────────    │
│  Weight: 6-8 kg/ingot│  │ Available on request  │
│  Bundle: ~1 MT       │  │ Buyer label accepted  │
│  Pallet: 20 bundles  │  │                      │
│  MOQ: 20 MT (1 FCL)  │  │ [Inquire →]          │
│  [View Specs →]      │  │                      │
└──────────────────────┘  └──────────────────────┘
```

**Onion Powder:**
```
┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
│  CARTON BOX          │  │  VACUUM POUCH         │  │  DRUM               │
│  ──────────────────  │  │  ──────────────────   │  │  ──────────────────  │
│  Weight: 10 kg/box   │  │  Weight: 500g/1kg/5kg │  │  Weight: 25 kg/drum │
│  Material: Kraft box │  │  Material: Alu-foil   │  │  MOQ: 20 MT         │
│  MOQ: 5 MT           │  │  MOQ: 2 MT            │  │                     │
│  Inner: Poly liner   │  │  Nitrogen flushed opt│  │  Food-grade, sealed │
└──────────────────────┘  └──────────────────────┘  └──────────────────────┘
```

---

#### SECTION 7: Shipping & Logistics

**Purpose:** Answer "How do I get this product to my country?"

**Layout:** Simple information table

```
┌─────────────────────────────────────────────────────────────────┐
│  EXPORT INFORMATION                                              │
│  ─────────────────────────────────────────────────────────────  │
│  Port of Loading     │  Mundra, Nhava Sheva, Kandla (India)     │
│  Lead Time           │  10-14 days after PO confirmation        │
│  Incoterms Offered   │  FOB, CIF, CFR, EXW, DAP                │
│  Container Type      │  20ft FCL (standard) / 40ft HQ (bulk)   │
│  Minimum Order       │  20 MT (1x20 FCL)                       │
│  Shipping Frequency  │  Weekly to Middle East, bi-weekly to    │
│                      │  Africa & SE Asia, monthly to Europe     │
│  Payment Terms       │  LC at sight, TT (30/70), DP            │
│  Documentation       │  B/L, COO, Packing List, Invoice,       │
│                      │  Phytosanitary (food), Health Cert, etc.│
└─────────────────────────────────────────────────────────────────┘
```

---

#### SECTION 8: Quality Assurance

**Purpose:** Convince buyers the product will meet their quality requirements

**Content per division:**

**Metals:**
- "Every batch undergoes spectrometric analysis (OES) for chemical composition"
- "Third-party inspection available: SGS, Bureau Veritas, Intertek"
- "Mill Test Certificate (MTC) included with every shipment"
- "ISO 9001:2015 certified quality management system"

**Processed Food:**
- "Produced in FSSAI-licensed, HACCP-certified facility"
- "Every batch tested for microbiological contaminants"
- "Metal detection and magnet separation on packaging line"
- "Full traceability: farm batch → production lot → shipment"
- "Third-party lab testing available upon request"

**Agro/Flour:**
- "Stone-milled from premium-grade grains"
- "Tested for moisture content, purity, and nutritional composition"
- "Packed in food-grade materials with moisture barrier"
- "Shelf-life verified per batch"

---

#### SECTION 9: Related Products

**Purpose:** Cross-sell and keep buyer on site

**Content:** 3-4 ProductCards from the same division, excluding current product

Cross-sell mapping:
```
Current Product        →  Related Products
──────────────────────────────────────────────────
Aluminum Ingots        →  Aluminum Scrap
Aluminum Scrap         →  Aluminum Ingots
Jaggery                →  Sugar, Banana Powder
Onion Powder/Flakes    →  Garlic Powder/Flakes, Tomato Flakes
Garlic Powder/Flakes   →  Onion Powder/Flakes, Banana Powder
Banana Powder          →  Tomato Flakes, Onion Powder
Tomato Flakes          →  Onion Powder, Garlic Powder/Flakes
Sugar                  →  Jaggery
Wheat Flour            →  Maize Flour, Millet Flour, Jowar Flour
Millet Flour           →  Jowar Flour, Maize Flour
Jowar Flour            →  Millet Flour, Maize Flour
Maize Flour            →  Wheat Flour, Millet Flour
```

---

#### SECTION 10: Export Inquiry CTA

**Purpose:** Final conversion opportunity

**Content:**
```
Heading: "Ready to Order [Product Name]?"
Subtext: "Our export team responds within 4 hours with CIF/FOR pricing, 
specifications, and delivery timeline."
Primary CTA: "Request a Quotation" → /request-quote with product pre-selected
Secondary CTA: "Request a Sample" → Sample form (food products only)
Tertiary CTA: "Speak to Our Team" → WhatsApp
Trust signal strip:
  ✓ Third-party inspection available
  ✓ LC, TT, DP payment terms accepted
  ✓ 10-14 day lead time from PO
```

---

## 6. Internal Linking Strategy

### 6.1 Product-to-Product Links (Cross-Sell)

| Source | Anchor Text | Target | Context |
|--------|-------------|--------|---------|
| Aluminum Ingots | "Also explore our Aluminum Scrap grades" | `/products/aluminum-scrap` | Related products section |
| Aluminum Scrap | "Pair with our premium Aluminum Ingots" | `/products/aluminum-ingots` | Related products section |
| Onion Powder | "Complete your seasoning line with Garlic Powder" | `/products/garlic` | Related products section |
| Jaggery | "Browse our Sugar grades for bulk buyers" | `/products/sugar` | Related products section |
| Wheat Flour | "Also available: Millet, Jowar, and Maize Flour" | `/products/grains-flour` | Related products section |

### 6.2 Category-to-Product Links

| Source | Anchor Text | Target |
|--------|-------------|--------|
| `/products/metals` | "Aluminum Ingots — 99.5% & 99.7%" | `/products/aluminum-ingots` |
| `/products/metals` | "Aluminum Scrap — All ISRI Grades" | `/products/aluminum-scrap` |
| `/products/food-agro` | 6 product cards, each linking to its detail page | Individual product URLs |
| `/products/grains-flour` | 4 product cards, each linking to its detail page | Individual product URLs |

### 6.3 Non-Product Pages → Product Links

| Source | Anchor Text / Pattern | Target |
|--------|----------------------|--------|
| Home (Featured Products) | ProductCards × 6 | 6 highest-priority product pages |
| Home (Product Categories) | "View Metals →", "View Food →", "View Grains →" | Category landing pages |
| About (Infrastructure) | "Our aluminum processing facility supports..." | `/products/aluminum-scrap` |
| About (Infrastructure) | "Our food-grade facility produces..." | `/products/food-agro` |
| Quality | "See our testing protocols for Aluminum" | `/products/aluminum-ingots` |
| Quality | "Food safety testing for our agro products" | `/products/onion` |
| Global Markets | Region → product exports (contextual) | Relevant product per region |
| Export Services → Documentation | "Phytosanitary Certificate for food imports" | `/products/food-agro` |
| Blog posts | Contextual inline links to relevant products | Varies |

### 6.4 Product Pages → Non-Product Pages

| Source | Anchor Text | Target |
|--------|-------------|--------|
| Product page | "View our Quality Assurance process" | `/quality` |
| Product page | "See our Export Services" | `/export-services` |
| Product page | "Download complete product catalog" | `/downloads` |
| Product page | "Learn about our certifications" | `/about/certifications` |
| Product page | "Check our shipping to your region" | `/global-markets` |

### 6.5 Anchor Text Diversity Rules

| Anchor Type | % of Links | Example |
|-------------|-----------|---------|
| Branded | 20% | "RMRP Global Trade's aluminum ingots" |
| Exact match | 20% | "aluminum ingots 99.5% purity" |
| Partial match | 30% | "premium aluminum ingots for foundries" |
| Generic | 15% | "view product specs", "learn more" |
| Long-tail | 15% | "buy aluminum ingots from India for your foundry" |

---

## 7. Inquiry Conversion Strategy

### 7.1 CTA Placement Map (Per Product Page)

| # | CTA | Section | Style | Pre-filled Data | Target Form |
|---|-----|---------|-------|-----------------|-------------|
| 1 | "Get CIF Quote" | Hero (above fold) | Gold primary | Product name pre-selected | `/request-quote` |
| 2 | "Chat on WhatsApp" | Hero sidebar | WhatsApp green | "Hi, I'm interested in [Product]" | WhatsApp API |
| 3 | "Get CIF/FOR Pricing" | Section 2 (sticky strip) | Gold primary (compact) | Product + Qty + Port + Email | Quick form inline |
| 4 | "Request a Sample" | Section 3+ (food only) | Gold outline | Product + variant selected | Sample form |
| 5 | "Get Distributor Pricing" | Section 3+ (flour only) | Gold primary | Product selected | Distributor form |
| 6 | "Download Spec Sheet" | Section 4 (specs) | Ghost/tertiary | Product, captures email | PDF download (gated) |
| 7 | "Inquire About This Product" | Section 10 (footer CTA) | Gold primary | Product pre-selected | `/request-quote` |
| 8 | "Speak to Our Team" | Section 10 (footer CTA) | White outline | — | WhatsApp |

### 7.2 Inquiry Form Pre-Fill Strategy

When a buyer clicks "Request Quote" from a product page, the form should arrive PRE-FILLED with context:

```
Form Field            Pre-filled Value
──────────────────────────────────────────────────
Product Interest      ✓ "Aluminum Ingots — 99.5%" (checked)
Quantity              [blank — prompt: "e.g., 50 MT"]
Destination Port      [blank — prompt: "e.g., Jebel Ali, UAE"]
Name                  [blank]
Email                 [blank]
Phone                 [blank]
Company               [blank]
Country               [blank]
Message               "Hello, I am interested in Aluminum Ingots (99.5%).
                       Please share CIF pricing to [destination].
                       Looking forward to your response."
```

The pre-filled message saves the buyer typing time and includes the key details the sales team needs.

### 7.3 WhatsApp Pre-Fill Strategy

```
Pre-filled message:
"Hi RMRP Global Trade! I'm interested in [Product Name] ([variant]).
Could you share:
1. CIF pricing to [destination]
2. Current lead time
3. Available packaging options
Thank you!"
```

### 7.4 Sample Request Flow (Food Products)

```
Step 1: Click "Request a Sample"
Step 2: Form appears (lightbox or inline)
   ├── Product: [pre-filled, read-only]
   ├── Product Variant: [dropdown: powder/flakes/granules]
   ├── Quantity: [dropdown: 500g / 1kg / 2kg]
   ├── Delivery Address: [text block]
   ├── Company Name: [text]
   ├── Email: [text, required]
   └── "We'll courier samples within 48 hours"
Step 3: Submit → Auto-reply with tracking
Step 4: Sales team follows up within 4 hours
```

---

## 8. Product Comparison Opportunities

### 8.1 Within-Category Comparison

| Comparison | Products | Page Location | Value to Buyer |
|-----------|----------|--------------|----------------|
| Ingots vs. Scrap | Aluminum | Category landing page | "Should I buy ingots or scrap for my application?" |
| Powder vs. Flakes | Onion, Garlic | Product page variants tab | "Which form works for my process?" |
| Jaggery vs. Sugar | Sweeteners | Category or blog | "Natural sweetener vs refined — cost/benefit" |
| Flour grades | Wheat (Atta/Maida/Sooji) | Product page | "Which grind for my application?" |
| ICUMSA grades | Sugar | Product page | "Which sugar grade is right for my market?" |

### 8.2 Comparison Implementation

In-page comparison (no separate page needed):
- **Tab navigation** on product pages showing variant specs side by side
- **"Compare Grades" button** on category pages showing a comparison table
- **Decision guide** text block: "Choose [Product A] if you need [benefit]. Choose [Product B] if you need [different benefit]."

---

## 9. Related Products Strategy

### 9.1 Algorithmic Rules

Related products are determined by these rules (in priority order):

1. **Same division + different product** (highest priority)
   - "Onion Powder → Garlic Powder" (both Food & Agro)
   
2. **Common buyer purchase pattern**
   - "Jaggery → Sugar" (both sweeteners, often bought together)
   - "Onion + Garlic + Tomato" (common seasoning bundle)

3. **Substitute/complement**
   - "Aluminum Ingots ↔ Aluminum Scrap" (substitutes for different applications)
   - "Wheat Flour ↔ Maize Flour" (substitutes for different recipes)

4. **Consolidation opportunity**
   - Any product → "Combine with other products for consolidated shipping"

### 9.2 Display Rules

| Context | Number of Related Products | Source |
|---------|---------------------------|--------|
| Product detail page | 3-4 cards | Same division + cross-sell mapping |
| Category landing page | 6 cards (all products) | Entire division |
| Cart/inquiry (if implemented) | 2-3 suggestions | Complementary products |
| Thank-you page (post-inquiry) | 2-3 suggestions | Same division |

---

## 10. Product Navigation Flow

### 10.1 Complete Buyer Journey (Product Path)

```
ENTRY POINT                      ACTION                          CONVERSION
══════════════════════════════════════════════════════════════════════════════════

Google: "aluminum scrap exporter"
  │
  ▼
/products/aluminum-scrap         → Reads specs, checks ISRI grades
  │                                ↓
  │                              → Checks certifications
  │                                ↓
  ├── Clicks "Get CIF Quote"     → /request-quote (aluminum scrap pre-filled)
  ├── Clicks WhatsApp            → WhatsApp with pre-filled message
  └── Scrolls to related products
       │
       ├── Clicks "Aluminum Ingots" → /products/aluminum-ingots
       └── Clicks "Combine for shipping" → /request-quote (multi-product)

──────────────────────────────────────────────────────────────────────────────────

Google: "onion powder supplier India"
  │
  ▼
/products/onion                 → Reads specs, checks micro limits
  │                                ↓
  │                              → Checks FSSAI, HACCP badges
  │                                ↓
  ├── Clicks "Request a Sample"  → Sample form (pre-filled onion powder)
  ├── Clicks "Request CIF Quote"  → /request-quote (onion powder pre-filled)
  ├── Clicks WhatsApp            → WhatsApp inquiry
  └── Navigates to Garlic Powder → /products/garlic (adds to inquiry)
       │
       └── Clicks "Request Quote for Multiple" → Multi-product inquiry

──────────────────────────────────────────────────────────────────────────────────

Direct: /products (from home page)
  │
  ▼
/products                       → Filters by category
  │                                ↓
  ├── Clicks "Metals"           → /products/metals
  │   ├── Clicks "Aluminum Ingots" → /products/aluminum-ingots
  │   └── Clicks "Aluminum Scrap"  → /products/aluminum-scrap
  │
  ├── Clicks "Food & Agro"      → /products/food-agro
  │   └── Clicks individual product → product detail page
  │
  └── Clicks "Grains & Flour"   → /products/grains-flour
      └── Clicks individual product → product detail page
```

### 10.2 Maximum Click Depth to Inquiry

| Starting Point | Path | Max Clicks to Inquiry |
|---------------|------|----------------------|
| Home page | Hero CTA "Explore Products" → Category → Product → CTA | 4 |
| Home page | Product category card → Product → CTA | 3 |
| Google | Product detail page → CTA | 1 |
| Google | Category page → Product → CTA | 2 |
| Products master | Filter → Product → CTA | 3 |
| Product page | Quick pricing strip submit | 0 (inline) |
| Product page | WhatsApp CTA | 0 (inline) |

---

## 11. Future Scalability Strategy

### 11.1 Adding a New Product

```
What changes:
1. Add product object to data/products.json  (~30 lines)
2. Add product images to public/images/products/  (3-5 images)
3. Add product to navigation mega menu  (auto-populated from data)
4. Add product to cross-sell mapping  (2 entries in constants)
5. Add product to related products lists  (auto from division)
6. Add product to inquiry form dropdown  (auto from data)
7. Generate product page  (dynamic route: /products/[slug])

What does NOT change:
- No new component files
- No new page files
- No new routes
- No navigation restructuring
- No form changes
```

**Effort:** ~30 minutes (content entry + image upload)

### 11.2 Adding a New Division

```
What changes:
1. Add division to products.json
2. Add division to mega menu (3 new columns or extend existing)
3. Create category landing page src/app/(main)/products/[division]/
4. Add division filter to ProductFilterBar
5. Add division to navigation constants
6. Add division to footer products column
7. Generate SEO metadata for new division

What does NOT change:
- Product detail template (same template, different data)
- Inquiry form (product dropdown auto-populates)
- Related products algorithm (works by division)
```

**Effort:** ~2-3 hours (landing page content, navigation config)

### 11.3 Adding Product Variants to an Existing Product

```
What changes:
1. Add variant data to product entry in products.json
2. Add variant tab/accordion content (auto-populated from data)
3. Add variant option to inquiry form (auto from data)
4. Add variant-specific images (optional)

What does NOT change:
- Product page template (variant tabs are built into template)
- URL structure (variants are in-page, not separate URLs)
- SEO (consolidated to single product URL)
```

**Effort:** ~15 minutes (data entry)

### 11.4 Product Data Migration (Future CMS)

If RMRP adopts a headless CMS later:

```
1. Extract products.json → CMS (Contentful/Strapi/Sanity)
2. Update lib/api/products.ts to fetch from CMS instead of JSON
3. All components, templates, and pages remain unchanged
4. Only the data access layer changes

Zero UI changes. Zero component changes.
```

---

## 12. Product Schema Recommendations

### 12.1 JSON-LD Schema per Product

Every product page must include the following structured data:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Aluminum Ingots — 99.5% Purity",
  "description": "Premium-grade aluminum ingots with 99.5% purity, suitable for foundry and casting applications. Available in 6-8 kg bars, packed in bundles of ~1 MT on pallets.",
  "sku": "AL-ING-995",
  "mpn": "AL-ING-995",
  "brand": {
    "@type": "Brand",
    "name": "RMRP Global Trade"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "RMRP Global Trade"
  },
  "category": "Metals > Aluminum > Ingots",
  "gtin": "[if applicable]",
  "image": [
    "https://rmrpglobaltrade.com/images/products/aluminum-ingots-1.jpg",
    "https://rmrpglobaltrade.com/images/products/aluminum-ingots-2.jpg"
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "[indicate LME-linked or 'Contact for pricing']",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "valueAddedTaxIncluded": false
    },
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "acceptedPaymentMethod": [
      "https://schema.org/LetterOfCredit",
      "https://schema.org/BankTransfer"
    ],
    "deliveryLeadTime": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 14,
      "unitCode": "DAY"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingOrigin": {
        "@type": "Country",
        "name": "India"
      }
    }
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Purity",
      "value": "99.5% minimum"
    },
    {
      "@type": "PropertyValue",
      "name": "Weight per Ingot",
      "value": "6-8 kg"
    },
    {
      "@type": "PropertyValue",
      "name": "Packaging",
      "value": "Bundled on pallets, ~1 MT per bundle"
    },
    {
      "@type": "PropertyValue",
      "name": "HS Code",
      "value": "7601.10"
    }
  ],
  "hasCertification": [
    {
      "@type": "Certification",
      "name": "ISO 9001:2015",
      "issuedBy": {
        "@type": "Organization",
        "name": "[Certifying Body]"
      }
    }
  ]
}
```

### 12.2 Schema Variations by Division

| Division | Required Schema Properties | Optional Properties |
|----------|--------------------------|-------------------|
| **Metals** | `additionalProperty`: purity, weight, dimensions, HS code | `material`: aluminum, `hasCertification`: ISO |
| **Processed Food** | `additionalProperty`: moisture, mesh size, shelf life, HS code | `hasCertification`: FSSAI, HACCP, Halal, ISO 22000, `suitableForDiet`: [if applicable] |
| **Agro/Flour** | `additionalProperty`: protein, fiber, gluten status, moisture, HS code | `nutrition`: NutritionalInformation, `suitableForDiet`: GlutenFree, Vegan |

### 12.3 Breadcrumb Schema (per product page)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rmrpglobaltrade.com/" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://rmrpglobaltrade.com/products" },
    { "@type": "ListItem", "position": 3, "name": "Food & Agro", "item": "https://rmrpglobaltrade.com/products/food-agro" },
    { "@type": "ListItem", "position": 4, "name": "Onion Powder & Flakes" }
  ]
}
```

### 12.4 Organization Schema (site-wide, on all pages)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RMRP Global Trade",
  "url": "https://rmrpglobaltrade.com",
  "logo": "https://rmrpglobaltrade.com/logo.png",
  "description": "Manufacturer, Trader & Exporter of Aluminum and Agro Commodities",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Address]",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "postalCode": "[Pin]",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXX-XXXXXXX",
    "contactType": "sales",
    "email": "info@rmrpglobaltrade.com",
    "availableLanguage": ["English", "Arabic", "Spanish", "French"]
  },
  "sameAs": [
    "https://linkedin.com/company/rmrpglobaltrade",
    "https://facebook.com/rmrpglobaltrade",
    "https://instagram.com/rmrpglobaltrade"
  ],
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 25,
    "maxValue": 100
  }
}
```

---

## Product Architecture Summary

| Aspect | Specification |
|--------|---------------|
| Total products | 15 (2 metals, 8 processed food, 4 agro, 1 sugar) |
| Divisions | 3 (Metals, Processed Food, Agro/Flour) |
| Product template | 1 unified template with 3 division-specific variations |
| Maximum click depth to product | 2 clicks from home, 1 click from search |
| CTA density per product page | 8 unique CTAs, 3 distinct form targets |
| Trust elements per product page | Certifications badges + specs table + quality process + third-party inspection offer |
| SEO URLs | 15 product URLs, no variant URLs |
| Internal links per product page | ~15 (related products, breadcrumb, quality link, services link, etc.) |
| Schema types per product page | Product + BreadcrumbList + Organization (site-wide) |
| Cross-sell connections | 13 defined product relationships |
| Effort to add new product | ~30 minutes (data entry + images) |
| Effort to add new division | ~2-3 hours (landing page + navigation config) |

---

*End of Product Architecture System — v1.0*

*Ready for UI design and component implementation.*
