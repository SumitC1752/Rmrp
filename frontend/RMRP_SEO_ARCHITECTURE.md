# RMRP Global Trade — SEO Architecture

**Site Type:** Static Corporate B2B | **Pages:** 55+ | **Primary Traffic Drivers:** Product pages (15)
**Target Regions:** Global (Middle East, Africa, SE Asia, Europe, Americas)
**Keyword Focus:** Export commodities, B2B supplier terms, manufacturer-exporter queries

---

## 1. URL Structure

### 1.1 Architecture Rules

| Rule | Specification | Example |
|------|--------------|---------|
| Case | Lowercase only | `/products/aluminum-ingots` |
| Separator | Hyphens (not underscores) | `/products/banana-powder` |
| Depth | Max 3 levels from root | `/products/food-agro` (2 levels) |
| Extensions | None (clean URLs) | `/products/jaggery` (not `.html` or `.php`) |
| Trailing slash | None (except root) | `/products/onion` (not `/products/onion/`) |
| Dynamic params | None for main content | No `?id=123` or `?category=metals` |
| Pagination | Page-2, page-3 (if needed) | `/blog/page-2` |

### 1.2 Full URL Map

```
HOME
/                                                  → Home page

ABOUT
/about                                             → About overview
/about/infrastructure                              → Facilities
/about/leadership                                  → Team
/about/certifications                              → Certifications
/about/csr                                         → CSR

PRODUCTS
/products                                           → Master product listing
/products/metals                                   → Metals category
/products/food-agro                                → Food & Agro category
/products/grains-flour                             → Grains & Flour category

PRODUCT DETAILS (15)
/products/aluminum-ingots                          → Aluminum Ingots
/products/aluminum-scrap                           → Aluminum Scrap
/products/jaggery                                  → Jaggery & Jaggery Powder
/products/onion                                    → Onion Powder & Flakes
/products/garlic                                   → Garlic Powder & Flakes
/products/banana-powder                            → Banana Powder
/products/tomato-flakes                            → Tomato Flakes
/products/sugar                                    → Sugar
/products/millet-flour                             → Millet (Bajra) Flour
/products/jowar-flour                              → Jowar Flour
/products/wheat-flour                              → Wheat Flour (Atta/Maida/Sooji)
/products/maize-flour                              → Maize Flour

SERVICES
/export-services                                   → Export Services overview
/export-services/process                           → Export process
/export-services/logistics                         → Shipping & logistics
/export-services/documentation                     → Export documentation
/export-services/incoterms                         → Incoterms explained
/export-services/payment                           → Payment terms

QUALITY
/quality                                           → Quality overview
/quality/policy                                    → Quality policy
/quality/process                                   → QC process
/quality/certifications                            → Certifications
/quality/laboratory                                → Lab & testing
/quality/reports                                   → Quality reports

GLOBAL MARKETS
/global-markets                                    → Markets overview
/global-markets/middle-east                        → Middle East & GCC
/global-markets/southeast-asia                     → SE Asia
/global-markets/africa                             → Africa
/global-markets/europe                             → Europe
/global-markets/south-america                      → South America
/global-markets/north-america                      → North America
/global-markets/case-studies                       → Case studies

CONTACT
/contact                                           → Contact page
/contact/thank-you                                 → Thank you page

UTILITY
/request-quote                                     → Quote request form
/request-quote/thank-you                           → Thank you page
/downloads                                         → Downloads center
/blog                                              → Blog listing
/blog/[slug]                                       → Blog post
/faq                                               → FAQ page
/privacy                                           → Privacy policy
/terms                                             → Terms of use
/cookies                                           → Cookie policy
/sitemap                                           → HTML sitemap
```

### 1.3 URL Consolidation Rules

| Scenario | Rule | Example |
|----------|------|---------|
| Variants (powder/flakes) | Single URL with in-page tabs | `/products/onion` covers powder + flakes + granules |
| Multiple grades | Single URL with grade filter | `/products/sugar` covers all ICUMSA grades |
| Seasonal products | Same URL, update content | No date-based URLs for products |
| Blog posts | `/blog/[slug]` | `/blog/aluminum-market-outlook-2026` |
| Thank-you pages | Index: NO | `/contact/thank-you` → noindex |

### 1.4 URL Redirect Map (Future-Proofing)

```
/products/metals                        → 301 (if renamed)
/products/food-and-agro                 → 301 → /products/food-agro (if accessed via old URL)
/products/aluminium-ingots              → 301 → /products/aluminum-ingots (UK spelling)
```

---

## 2. Metadata Strategy

### 2.1 Title Tag Formula

#### Home Page
```
Primary Keyword | Secondary Keyword | Brand
────────────────────────────────────────────────
Aluminum & Agro Commodities Exporter | RMRP Global Trade
```

#### Category Pages
```
Category Keyword | Location Modifier | Brand
────────────────────────────────────────────────
Aluminum Products Exporter India | Aluminum Ingots & Scrap | RMRP Global Trade
```

#### Product Pages
```
Primary Keyword | Key Spec Modifier | Brand
────────────────────────────────────────────────
Aluminum Ingots 99.5% Exporter | High-Purity Ingots Supplier India | RMRP Global Trade
Onion Powder & Flakes Exporter | Dehydrated Onion Supplier India | RMRP Global Trade
```

#### Content Pages
```
Page-Specific Keyword | Brand
────────────────────────────────────────────────
Aluminum Scrap ISRI Grades Guide | RMRP Global Trade
Export Documentation Guide for Indian Commodities | RMRP Global Trade
```

### 2.2 Title Tag Rules

| Rule | Specification |
|------|--------------|
| Length | 50-60 characters (desktop: 600px max) |
| Primary keyword | First 30 characters |
| Brand position | End of title (separated by `|`) |
| Separator | `|` (pipe with spaces) |
| Stop words | Minimize (a, an, the, for, and, of) |
| Uniqueness | Every page has a unique title |
| Duplication | Zero duplicate titles across 55+ pages |

### 2.3 Title Tag Map (Key Pages)

| Page | Title Tag | Length |
|------|-----------|--------|
| Home | Aluminum & Agro Commodities Exporter India | RMRP Global Trade | 57 chars |
| About | About RMRP Global Trade — Aluminum & Food Exporter India | 59 chars |
| Products | Aluminum, Food & Agro Products Exporter India | RMRP Global Trade | 58 chars |
| Metals | Aluminum Ingots & Scrap Exporter India | RMRP Global Trade | 57 chars |
| Food & Agro | Dehydrated Vegetables & Food Products Exporter India | RMRP | 59 chars |
| Grains & Flour | Millet, Wheat & Grain Flour Exporter India | RMRP Global Trade | 59 chars |
| Aluminum Ingots | Aluminum Ingots 99.5% Exporter India | RMRP Global Trade | 58 chars |
| Aluminum Scrap | Aluminum Scrap ISRI Grades Exporter India | RMRP Global Trade | 60 chars |
| Jaggery | Jaggery & Jaggery Powder Exporter India | RMRP Global Trade | 59 chars |
| Onion | Onion Powder & Flakes Exporter India | RMRP Global Trade | 58 chars |
| Garlic | Garlic Powder & Flakes Exporter India | RMRP Global Trade | 59 chars |
| Banana Powder | Banana Powder Exporter India | RMRP Global Trade | 54 chars |
| Tomato Flakes | Tomato Flakes Exporter India | RMRP Global Trade | 54 chars |
| Sugar | Sugar (ICUMSA 45) Exporter India | RMRP Global Trade | 57 chars |
| Millet Flour | Millet (Bajra) Flour Exporter India | RMRP Global Trade | 58 chars |
| Jowar Flour | Jowar Flour Exporter India | RMRP Global Trade | 52 chars |
| Wheat Flour | Wheat Flour (Atta, Maida, Sooji) Exporter India | RMRP | 60 chars |
| Maize Flour | Maize Flour Exporter India | RMRP Global Trade | 52 chars |
| Export Services | Export Services — Logistics & Documentation | RMRP Global Trade | 60 chars |
| Quality | Quality Assurance — ISO & HACCP Certified Exporter | RMRP | 60 chars |
| Global Markets | Global Markets — Exporting to 25+ Countries | RMRP | 57 chars |
| Contact | Contact RMRP Global Trade — Get a Quote | 51 chars |

### 2.4 Meta Description Formula

```
[Action verb] [product/service] from [brand], a trusted [role] in [location]. 
[Key benefit 1], [key benefit 2], and [key benefit 3]. [Call to action].
```

**Example (Aluminum Ingots):**
```html
Source premium aluminum ingots (99.5%, 99.7%) from RMRP Global Trade, 
a trusted manufacturer and exporter in India. ISO 9001 certified. 
LME-linked pricing, global delivery, third-party inspection available. 
Request a CIF quote.
```

### 2.5 Meta Description Rules

| Rule | Specification |
|------|--------------|
| Length | 150-160 characters |
| Primary keyword | Within first 110 characters |
| Call to action | Last 20-30 characters |
| Unique per page | No duplicate descriptions |
| Includes | Location (India), certification, key differentiator |

### 2.6 Meta Robots

| Page Type | Index | Follow | Notes |
|-----------|-------|--------|-------|
| All main pages | YES | YES | Default |
| Thank-you pages | NO | NO | `noindex, nofollow` |
| Filtered product views | NO | NO | `noindex, nofollow` (client-side filters) |
| Privacy, Terms, Cookies | YES | NO | `index, nofollow` |
| Blog tag/category pages | NO | YES | `noindex, follow` |

---

## 3. Open Graph Strategy

### 3.1 Default OG Tags (Site-Wide)

```html
<meta property="og:site_name" content="RMRP Global Trade" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_IN" />
<meta property="og:image" content="https://rmrpglobaltrade.com/images/og/default.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/jpeg" />
```

### 3.2 Per-Page OG Tags

| Page | og:title | og:description | og:url | og:image |
|------|----------|---------------|--------|----------|
| Home | Same as `<title>` | Same as meta description | `https://rmrpglobaltrade.com/` | Hero image |
| Product | Product name + spec | Product description | Product URL | Primary product image |
| About | Page title | Page description | About URL | Facility/team image |
| Contact | Page title | Page description | Contact URL | Office/map image |
| Blog | Blog title | Blog excerpt | Blog URL | Blog featured image |

### 3.3 Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@rmrpglobaltrade" />
<meta name="twitter:title" content="[Same as og:title]" />
<meta name="twitter:description" content="[Same as og:description]" />
<meta name="twitter:image" content="[Same as og:image]" />
```

---

## 4. Sitemap Strategy

### 4.1 XML Sitemap

Generated dynamically via `src/app/sitemap.ts` (Next.js App Router).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- HIGH PRIORITY — Home, Categories, Key Products -->
  <url>
    <loc>https://rmrpglobaltrade.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://rmrpglobaltrade.com/products</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://rmrpglobaltrade.com/products/aluminum-ingots</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://rmrpglobaltrade.com/products/aluminum-ingots" />
  </url>
  
  <!-- MEDIUM PRIORITY — Sub-pages, Services, Quality -->
  <url>
    <loc>https://rmrpglobaltrade.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://rmrpglobaltrade.com/export-services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- LOW PRIORITY — Utility Pages -->
  <url>
    <loc>https://rmrpglobaltrade.com/faq</loc>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>https://rmrpglobaltrade.com/privacy</loc>
    <changefreq>yearly</changefreq>
    <priority>0.2</priority>
  </url>
  
</urlset>
```

### 4.2 Sitemap Priority Matrix

| Priority | Pages | Changefreq | Count |
|----------|-------|------------|-------|
| 1.0 | Home | weekly | 1 |
| 0.9 | Category landings | weekly | 3 |
| 0.8 | Product detail pages | monthly | 15 |
| 0.7 | About, Contact, Services main | monthly | 4 |
| 0.6 | Services sub-pages, Quality sub-pages | monthly | 18 |
| 0.5 | Global Markets, Case Studies, Blog | weekly | 10+ |
| 0.4 | FAQ, Downloads | monthly | 2 |
| 0.3 | Blog posts | monthly | Growing |
| 0.2 | Privacy, Terms, Cookies | yearly | 3 |

### 4.3 Sitemap Exclusion List

| Page | Reason |
|------|--------|
| `/contact/thank-you` | No value — post-submission page |
| `/request-quote/thank-you` | No value — post-submission page |
| Admin/login pages | N/A (no admin on static site) |
| Filtered/sorted product views | Client-side, no canonical value |
| `/404` | Not a real page |

### 4.4 HTML Sitemap

A user-facing HTML sitemap at `/sitemap` provides a text-based index of all pages grouped by section. This serves both users (quick access) and crawlers (additional internal linking).

### 4.5 Image Sitemap

```xml
<url>
  <loc>https://rmrpglobaltrade.com/products/aluminum-ingots</loc>
  <xhtml:image:image>
    <image:loc>https://rmrpglobaltrade.com/images/products/aluminum-ingots-1.jpg</image:loc>
    <image:caption>Premium aluminum ingots 99.5% purity stacked for export</image:caption>
    <image:title>Aluminum Ingots 99.5% - RMRP Global Trade</image:title>
  </xhtml:image:image>
</url>
```

Every product page with 3-5 images gets image sitemap entries. This helps products appear in Google Image Search — a significant traffic source for commodity buyers searching visually.

---

## 5. Robots Strategy

### 5.1 robots.txt

```
User-agent: *
Allow: /
Allow: /products/
Allow: /about/
Allow: /export-services/
Allow: /quality/
Allow: /global-markets/
Allow: /contact/
Allow: /blog/
Allow: /downloads/

Disallow: /contact/thank-you
Disallow: /request-quote/thank-you
Disallow: /*?*  (block all query parameter URLs)

Sitemap: https://rmrpglobaltrade.com/sitemap.xml
```

### 5.2 Crawl Budget Allocation

| Crawl Priority | Pages | Allow/Disallow |
|---------------|-------|---------------|
| Highest | Home, Products, Categories | Allow — full crawl frequency |
| High | Product details (15), About, Services | Allow — standard crawl |
| Medium | Quality, Markets, Blog | Allow — lower frequency |
| Low | Thank-you, filtered views | Disallow — zero budget |
| None | 404, error pages | Disallow via robots.txt + noindex |

### 5.3 Crawl Delay (If Needed)

```
Crawl-Delay: 5
```

Not applied by default. Only implement if site performance data shows crawl-related load issues. For a static site, this is unlikely.

---

## 6. Product SEO Strategy

### 6.1 Keyword Architecture

Product pages target a **keyword cluster** model:

```
HEAD TERM (High volume, high competition)
  "aluminum ingots exporter india"

MID TERMS (Medium volume, medium competition)
  "aluminum ingots 99.5% purity supplier"
  "aluminum ingots CIF price Dubai"

LONG TAIL (Low volume, high conversion)
  "buy aluminum ingots for foundry in UAE"
  "aluminum ingots 99.7% grade manufacturer India"
  "aluminum ingots 6-8 kg pallet export"
```

Each product page targets:
- 1 head term (primary)
- 3-5 mid terms (secondary, in headings and body)
- 5+ long tail terms (natural inclusion in content)

### 6.2 Product Page Keyword Map

| Product | Primary Keyword | Secondary Keywords |
|---------|----------------|-------------------|
| Aluminum Ingots | aluminum ingots exporter India | 99.5% aluminum ingots supplier, aluminum ingots CIF, foundry grade aluminum ingots |
| Aluminum Scrap | aluminum scrap exporter India | ISRI scrap supplier, aluminum scrap Tense Zorba, secondary aluminum exporter |
| Jaggery | jaggery exporter India | organic jaggery powder, jaggery cubes wholesale, Indian jaggery supplier |
| Onion Powder | dehydrated onion powder exporter | onion flakes supplier India, onion powder for food processing |
| Garlic Powder | garlic powder exporter India | dehydrated garlic flakes, garlic granules wholesale |
| Banana Powder | banana powder exporter India | banana powder for baby food, natural banana powder bulk |
| Tomato Flakes | tomato flakes exporter India | dehydrated tomato flakes, tomato powder for soup manufacturing |
| Sugar | sugar exporter India | ICUMSA 45 sugar supplier, Indian sugar wholesale, S-30 sugar exporter |
| Millet Flour | millet flour exporter India | bajra flour wholesale, gluten-free millet flour bulk |
| Jowar Flour | jowar flour exporter India | sorghum flour supplier, jowar flour for gluten-free |
| Wheat Flour | wheat flour exporter India | atta exporter, maida supplier, sooji rawa wholesale |
| Maize Flour | maize flour exporter India | corn flour bulk, makki ka atta exporter |

### 6.3 Product Page On-Page SEO Checklist

| Element | Requirement | Status |
|---------|-------------|--------|
| URL | `/products/[product-slug]` | ✅ |
| H1 | Product name + primary spec | ✅ |
| Title | Primary keyword + "Exporter India" + Brand | ✅ |
| Meta description | Benefit-driven, includes CTA | ✅ |
| H2 | "Specifications", "Applications", "Packaging", "Shipping" | ✅ |
| Product images | Descriptive alt text with keywords | ✅ |
| Schema | Product schema with offers + properties | ✅ |
| Breadcrumb | BreadcrumbList schema | ✅ |
| Internal links | To related products + quality + services | ✅ |
| FAQ | FAQ schema on product FAQ if present | ✅ |
| Downloadable spec | PDF spec sheet (indexable) | ✅ |

### 6.4 Product Image SEO

| Requirement | Specification |
|-------------|--------------|
| File naming | `aluminum-ingots-99-5-purity-stacked.jpg` (descriptive, hyphenated) |
| Alt text | "Aluminum ingots 99.5% purity stacked for export — RMRP Global Trade" |
| Format | WebP (primary) + JPEG fallback |
| Compression | 80% quality (balance size vs quality) |
| Dimensions | 1200×900 (main), 600×450 (thumbnails) |
| Lazy loading | `loading="lazy"` on all below-fold images |
| Next.js Image | `next/image` with explicit width, height, priority on hero image |

---

## 7. Internal Linking Strategy

### 7.1 Internal Link Types

| Type | Description | SEO Value | Example |
|------|-------------|-----------|---------|
| **Navigation** | Primary nav links | High | Products → Aluminum Ingots |
| **Breadcrumbs** | Path-based links | High | Home > Products > Aluminum Ingots |
| **Content** | Contextual links in body text | High | "Our aluminum ingots meet..." |
| **Cross-sell** | Related products | Medium | "Also explore our aluminum scrap grades" |
| **CTA** | Call-to-action links | Medium | "Request a Quote" → /request-quote |
| **Footer** | Global footer links | Low-Medium | Products column in footer |
| **Sidebar** | Sub-navigation | Medium | Category filters, section nav |

### 7.2 Internal Link Distribution

```
RECOMMENDED INTERNAL LINKS PER PAGE

Product Detail Page (~15 internal links):
  - Breadcrumb (3 links: Home, Products, Category)
  - Navigation mega menu (available but not counted)
  - Related products (3-4 cards)
  - Quality link (1)
  - Export services link (1)
  - Certification links (1-2)
  - CTA button (1-2)
  - Footer (5-6)
  Total: ~15-20 internal links

Home Page (~25 internal links):
  - Featured products (6)
  - Category cards (3)
  - About link (1)
  - Services link (1)
  - Quality link (1)
  - Markets link (1)
  - Contact link (1)
  - Footer (10+)
  Total: ~25-30 internal links
```

### 7.3 Anchor Text Diversity

| Type | % of Links | Example |
|------|-----------|---------|
| Exact match | 15% | "aluminum ingots exporter" |
| Partial match | 30% | "premium aluminum ingots from India" |
| Branded | 20% | "RMRP Global Trade's aluminum scrap" |
| Generic | 20% | "view specifications", "learn more", "click here" |
| Long tail | 15% | "buy high-purity aluminum ingots for foundry" |

### 7.4 Link Juice Distribution

```
HOME PAGE
  (highest authority — link juice distributes to all sections)
  │
  ├── Products (link juice: 30% of home's value)
  │   ├── Metals (link juice: 40% of products' value)
  │   │   ├── Aluminum Ingots (link juice: 50%)
  │   │   └── Aluminum Scrap (link juice: 50%)
  │   ├── Food & Agro (link juice: 40%)
  │   │   └── 6 product pages (link juice: equal share)
  │   └── Grains & Flour (link juice: 20%)
  │       └── 4 product pages (link juice: equal share)
  │
  ├── About (link juice: 15%)
  ├── Export Services (link juice: 15%)
  ├── Quality (link juice: 15%)
  ├── Global Markets (link juice: 15%)
  └── Contact (link juice: 10%)
```

### 7.5 Orphan Page Prevention

| Rule | Check |
|------|-------|
| Every page linked from at least 2 other pages | Automated crawl check |
| No page more than 3 clicks from home | Manual check |
| Every product linked from category AND at least 1 content page | Content audit |
| Blog posts linked from blog listing AND relevant product/service | Template check |
| All footer links point to existing pages | 404 crawl check |

---

## 8. Schema Markup Recommendations

### 8.1 Schema Types Required

| Schema Type | Pages | Purpose |
|-------------|-------|---------|
| **Organization** | All pages | Company identity, contact, social, logo |
| **WebSite** | All pages | Site name, search (future), URL |
| **BreadcrumbList** | All inner pages | Navigation path for rich snippets |
| **Product** | All 15 product pages | Product details, offers, reviews (future) |
| **FAQPage** | FAQ page + product FAQs | Rich result in search |
| **LocalBusiness** | Contact page | Address, hours, phone for local SEO |
| **Article** | Blog posts | Blog content for rich snippets |
| **ItemList** | Category pages | Product lists within categories |

### 8.2 Organization Schema (Every Page)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://rmrpglobaltrade.com/#organization",
  "name": "RMRP Global Trade",
  "alternateName": "RMRP Global Trading Company",
  "url": "https://rmrpglobaltrade.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://rmrpglobaltrade.com/images/logo.png",
    "width": 180,
    "height": 60
  },
  "description": "Manufacturer, Trader & Exporter of Aluminum and Agro Commodities from India",
  "foundingDate": "2018",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-XXX-XXXXXXX",
      "contactType": "sales",
      "email": "info@rmrpglobaltrade.com",
      "availableLanguage": ["English", "Arabic", "Spanish", "French"]
    }
  ],
  "sameAs": [
    "https://linkedin.com/company/rmrpglobaltrade",
    "https://facebook.com/rmrpglobaltrade"
  ],
  "knowsAbout": [
    "Aluminum Ingots",
    "Aluminum Scrap",
    "Jaggery",
    "Dehydrated Vegetables",
    "Grain Flours",
    "Sugar",
    "International Trade",
    "Export Documentation"
  ]
}
```

### 8.3 Product Schema (Every Product Page)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://rmrpglobaltrade.com/products/aluminum-ingots#product",
  "name": "Aluminum Ingots — 99.5% & 99.7% Purity",
  "description": "Premium-grade aluminum ingots for foundry, die casting, and smelting applications. 6-8 kg bars, high-purity, export-grade quality.",
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
  "image": [
    "https://rmrpglobaltrade.com/images/products/aluminum-ingots-1.jpg",
    "https://rmrpglobaltrade.com/images/products/aluminum-ingots-2.jpg"
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "[Contact for pricing]",
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
      },
      "shippingDestination": {
        "@type": "Country",
        "name": "[Worldwide]"
      }
    }
  },
  "additionalProperty": [
    {"@type": "PropertyValue", "name": "Purity", "value": "99.5% minimum"},
    {"@type": "PropertyValue", "name": "Ingot Weight", "value": "6-8 kg"},
    {"@type": "PropertyValue", "name": "Packaging", "value": "Bundled on pallets"},
    {"@type": "PropertyValue", "name": "HS Code", "value": "7601.10"},
    {"@type": "PropertyValue", "name": "Inspection", "value": "SGS/Bureau Veritas available"}
  ],
  "hasCertification": {
    "@type": "Certification",
    "name": "ISO 9001:2015",
    "issuedBy": {"@type": "Organization", "name": "[Certifying Body]"}
  }
}
```

### 8.4 FAQ Schema (FAQ Page + Inline Product FAQs)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the minimum order quantity for aluminum ingots?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our standard MOQ for aluminum ingots is 20 MT (1x20ft FCL). Trial orders of 5-10 MT may be accommodated for first-time buyers."
      }
    },
    {
      "@type": "Question",
      "name": "What payment terms do you accept for international orders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept Letter of Credit (LC at sight, LC usance), Telegraphic Transfer (TT with 30/70 split), and Documents Against Payment (DP). Terms are negotiable based on order volume and buyer history."
      }
    }
  ]
}
```

### 8.5 Breadcrumb Schema (All Inner Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://rmrpglobaltrade.com/"},
    {"@type": "ListItem", "position": 2, "name": "Products", "item": "https://rmrpglobaltrade.com/products"},
    {"@type": "ListItem", "position": 3, "name": "Food & Agro", "item": "https://rmrpglobaltrade.com/products/food-agro"},
    {"@type": "ListItem", "position": 4, "name": "Onion Powder & Flakes"}
  ]
}
```

### 8.6 WebSite Schema (All Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://rmrpglobaltrade.com/#website",
  "url": "https://rmrpglobaltrade.com",
  "name": "RMRP Global Trade",
  "description": "Manufacturer, Trader & Exporter of Aluminum and Agro Commodities",
  "publisher": {"@id": "https://rmrpglobaltrade.com/#organization"},
  "inLanguage": "en",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://rmrpglobaltrade.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## 9. International SEO Considerations

### 9.1 Hreflang Strategy

Current phase (English only):
- Single language — no hreflang tags needed
- `x-default` points to English site

Future phase (multi-language):
```html
<link rel="alternate" hreflang="en" href="https://rmrpglobaltrade.com/products/aluminum-ingots" />
<link rel="alternate" hreflang="ar" href="https://rmrpglobaltrade.com/ar/products/aluminum-ingots" />
<link rel="alternate" hreflang="es" href="https://rmrpglobaltrade.com/es/products/aluminum-ingots" />
<link rel="alternate" hreflang="fr" href="https://rmrpglobaltrade.com/fr/products/aluminum-ingots" />
<link rel="alternate" hreflang="x-default" href="https://rmrpglobaltrade.com/products/aluminum-ingots" />
```

### 9.2 Geo-Targeting Strategy

| Region | Strategy | Current Status |
|--------|----------|---------------|
| Global (default) | English content, no geo-targeting | Active |
| Middle East & GCC | Arabic landing page for key products | Future |
| South America | Spanish landing page for key products | Future |
| Africa (Francophone) | French landing page for key products | Future |

Since this is a static site, geo-targeting is handled via:
1. **Google Search Console** — Set country target to "India" (home market) + international targeting for all other countries
2. **Hreflang tags** — When multi-language is implemented
3. **Country-specific content** — Global Markets region pages provide country/region-specific content without separate country URLs

### 9.3 Language-Specific Considerations

| Language | Current | Future |
|----------|---------|--------|
| English (EN) | Production | Maintain |
| Arabic (AR) | Not implemented | `/ar/` route group — RTL layout |
| Spanish (ES) | Not implemented | `/es/` route group |
| French (FR) | Not implemented | `/fr/` route group |

### 9.4 international SEO without Multi-Language

Until multi-language is implemented:
- Use **clear English** with simple sentence structures (not idiomatic)
- Avoid region-specific slang or cultural references
- Include country/region names in product pages ("export to UAE", "CIF Jebel Ali", "FOB Mundra")
- Global Markets pages provide country-specific compliance content
- Language switcher is present but points to English-only content initially

---

## 10. Inquiry Conversion SEO Opportunities

### 10.1 Search Features to Target

| Search Feature | Relevance | Pages to Optimize | Implementation |
|---------------|-----------|------------------|----------------|
| **Product Rich Results** | High | 15 product pages | Product schema + images + offers |
| **FAQ Rich Results** | Medium | FAQ page, product pages | FAQPage schema |
| **Breadcrumb Rich Results** | High | All inner pages | BreadcrumbList schema |
| **Site Links** | High | Home page | Clean site structure, clear navigation |
| **Google Image Search** | Medium-High | Product pages | Optimized images, image sitemap |
| **People Also Ask** | Medium | FAQ, blog | Question-based content |
| **Knowledge Panel** | Low-Medium | Organization schema | Complete Organization schema |

### 10.2 Keyword Opportunity Map

| Intent | Keyword Examples | Page Target | Conversion Potential |
|--------|-----------------|-------------|---------------------|
| **Commercial investigation** | "aluminum ingots supplier India", "onion powder exporter" | Product pages | High |
| **Transactional** | "buy aluminum scrap online", "jaggery price CIF Dubai" | Product + Quick Quote | Very High |
| **Informational** | "ISRI scrap grades explained", "aluminum ingot purity levels" | Blog/Content | Medium |
| **Navigational** | "RMRP Global Trade", "RMRP aluminum scrap" | Home, Product | High |
| **Comparison** | "aluminum ingot vs scrap price", "Indian jaggery vs sugar" | Comparison tables | Medium |
| **Geographic** | "aluminum exporter Mundra", "Indian sugar supplier Turkey" | Product + Markets | High |

### 10.3 Conversion-Focused Content Types

| Content Type | SEO Value | Conversion Value | Pages |
|-------------|-----------|-----------------|-------|
| **Product pages** | High (primary traffic) | High (direct inquiry) | 15 |
| **Category pages** | High (broad terms) | Medium (gateway to products) | 3 |
| **Product spec sheets** | Medium (PDF indexable) | High (lead magnet) | 12-15 PDFs |
| **Buyer's guides** | High (long-tail info queries) | High (lead capture) | Future blog |
| **Market profiles** | Medium (regional queries) | Medium (partner inquiry) | 6 |
| **FAQ pages** | Medium (question queries) | Medium (answer + convert) | 1 + inline |
| **Case studies** | Medium (solution queries) | Very High (social proof) | 3-5 |
| **Export guides** | High (how-to queries) | Medium (authority building) | Future blog |

### 10.4 Lead Generation via SEO

| Channel | Strategy | Conversion Point |
|---------|----------|-----------------|
| Organic product search | Optimize product pages → CTA → quote request | "Request CIF Quote" on every product page |
| Informational blog | Guide content → CTAs at bottom → download | "Download Aluminum Grade Guide" (email capture) |
| FAQ search | FAQ schema → featured snippet → site visit → inquiry | "Still have questions? Contact our export team" |
| Image search | Optimized product images → image click → product page → CTA | Product page inquiry path |
| "vs" / comparison | Comparison content → "contact us for pricing" | Comparison → RFQ |

### 10.5 Click-Through Rate Optimization

| Element | Optimization | Expected CTR Improvement |
|---------|-------------|-------------------------|
| Title tag | Brand at end, keyword in first 30 chars | +15% |
| Meta description | Include CTA + benefit + differentiator | +10% |
| URL | Clean, keyword-rich, short | +5% |
| Schema | Product rich results (price, availability) | +20% |
| Site links | Clear navigation structure | +10% |
| FAQ schema | Expandable results in SERP | +15% |

### 10.6 B2B Search Intent Funnel

```
AWARENESS                    CONSIDERATION                 DECISION
(aluminum scrap price)       (aluminum scrap supplier)     (aluminum scrap CIF Turkey)
        │                            │                            │
        ▼                            ▼                            ▼
   Blog / Guide              Category / Product Page        Product Page + Quote
   "Aluminum Scrap           "Aluminum Products"            "Aluminum Scrap ISRI"
   Price Trends 2026"        /metals                        /aluminum-scrap
        │                            │                            │
        ▼                            ▼                            ▼
   DOWNLOAD                   VIEW SPECS                   REQUEST CIF QUOTE
   "Market Report PDF"        "Specifications Table"       "Get CIF Quote" form
   (email capture)            (no conversion yet)           (lead generated)
```

### 10.7 SEO Performance KPIs

| Metric | Target (6 months) | Target (12 months) |
|--------|-------------------|--------------------|
| Organic traffic (monthly) | 5,000 sessions | 15,000 sessions |
| Product page organic traffic | 60% of total organic | 65% of total organic |
| Keyword rankings (top 10) | 50 keywords | 150 keywords |
| Featured snippets | 3 | 10 |
| Inquiry conversion rate (organic) | 3% | 5% |
| Organic lead volume (monthly) | 150 | 750 |
| Bounce rate (organic) | < 50% | < 40% |
| Average session duration | > 2:30 | > 3:00 |
| Pages per session | > 3.0 | > 4.0 |

### 10.8 Technical SEO Checklist

| Category | Item | Priority | Status |
|----------|------|----------|--------|
| Crawling | robots.txt correctly configured | Critical | ✅ |
| Crawling | XML sitemap submitted to GSC | Critical | ✅ |
| Crawling | No 4XX/5XX errors on indexed pages | Critical | ✅ |
| Indexing | Canonical URLs on all pages | Critical | ✅ |
| Indexing | No duplicate content | Critical | ✅ |
| Indexing | Self-referencing canonicals | High | ✅ |
| Rendering | Static export — fully pre-rendered | Critical | ✅ |
| Speed | LCP < 2.5s | High | ✅ |
| Speed | FID < 100ms | High | ✅ |
| Speed | CLS < 0.1 | High | ✅ |
| Mobile | Mobile-friendly test pass | Critical | ✅ |
| Mobile | Responsive design | Critical | ✅ |
| Schema | JSON-LD on all pages | High | ✅ |
| Security | HTTPS enforced | Critical | ✅ |
| Security | No mixed content | Critical | ✅ |
| Images | WebP format, alt text, optimized | High | ✅ |
| Links | No broken internal links | Critical | ✅ |
| Links | Orphan page audit | Medium | ✅ |

---

*End of SEO Architecture — v1.0*

*Ready for implementation alongside component development.*
