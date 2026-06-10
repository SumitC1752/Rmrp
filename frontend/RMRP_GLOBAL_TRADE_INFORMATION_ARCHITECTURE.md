# RMRP Global Trade — Information Architecture Document

## Website: Next.js 15 | B2B Corporate | Manufacturer, Trader & Exporter

---

# 1. COMPLETE SITEMAP TREE

```
┌── HOME (/) ─────────────────────────────────────────────────────┐
│   ├── Hero Section (Value Prop: "Global Trade, Trust Delivered") │
│   ├── Quick Stats (Years, Countries Served, Products, Clients)   │
│   ├── Featured Products (Grid of 6, linked to /products)         │
│   ├── Why RMRP (3-column differentiators)                        │
│   ├── Global Reach Map (Interactive map of served countries)     │
│   ├── Testimonials Carousel                                      │
│   ├── Recent Shipments / News Ticker                             │
│   └── CTA: Request a Quote                                       │
└──────────────────────────────────────────────────────────────────┘

┌── ABOUT US (/about) ─────────────────────────────────────────────┐
│   ├── Company Overview                                           │
│   │   ├── Mission, Vision & Values                               │
│   │   ├── Company Timeline / History                             │
│   │   └── Leadership Team                                        │
│   ├── Our Infrastructure                                         │
│   │   ├── Manufacturing Facilities                               │
│   │   ├── Warehousing & Storage                                  │
│   │   └── Quality Testing Labs                                   │
│   ├── Certifications & Memberships                               │
│   ├── CSR / Sustainability Initiatives                           │
│   └── Why Choose RMRP (Differentiators Page)                     │
└──────────────────────────────────────────────────────────────────┘

┌── PRODUCTS (/products) ──────────────────────────────────────────┐
│   ├── [Master Product Grid with Filters by Category]             │
│   │                                                              │
│   ├── METALS DIVISION (/products/metals)                         │
│   │   ├── Aluminum Ingots (/products/aluminum-ingots)            │
│   │   │   ├── Product Specifications Table                       │
│   │   │   ├── Grades Available                                   │
│   │   │   ├── Packaging & Shipping                               │
│   │   │   └── Inquiry Form                                       │
│   │   └── Aluminum Scrap (/products/aluminum-scrap)              │
│   │       ├── Types & Grades                                     │
│   │       ├── Specifications Table                               │
│   │       ├── Packaging & Shipping                               │
│   │       └── Inquiry Form                                       │
│   │                                                              │
│   ├── FOOD & AGRO DIVISION (/products/food-agro)                 │
│   │   ├── Jaggery & Jaggery Powder (/products/jaggery)           │
│   │   │   ├── Types (Solid, Powder, Cubes)                       │
│   │   │   ├── Specifications & Purity                            │
│   │   │   ├── Packaging Options                                  │
│   │   │   └── Inquiry Form                                       │
│   │   ├── Onion Powder & Flakes (/products/onion)                │
│   │   │   ├── Product Variants (Powder, Flakes, Granules)        │
│   │   │   ├── Specifications                                     │
│   │   │   ├── Packaging Options                                  │
│   │   │   └── Inquiry Form                                       │
│   │   ├── Garlic Powder & Flakes (/products/garlic)              │
│   │   │   ├── Product Variants (Powder, Flakes, Granules)        │
│   │   │   ├── Specifications                                     │
│   │   │   ├── Packaging Options                                  │
│   │   │   └── Inquiry Form                                       │
│   │   ├── Banana Powder (/products/banana-powder)                │
│   │   │   ├── Specifications                                     │
│   │   │   ├── Applications (Baby food, Bakery, Beverages)        │
│   │   │   ├── Packaging Options                                  │
│   │   │   └── Inquiry Form                                       │
│   │   ├── Tomato Flakes (/products/tomato-flakes)                │
│   │   │   ├── Specifications                                     │
│   │   │   ├── Applications                                       │
│   │   │   ├── Packaging Options                                  │
│   │   │   └── Inquiry Form                                       │
│   │   └── Sugar (/products/sugar)                                │
│   │       ├── Grades (S-30, M-30, ICUMSA Categories)             │
│   │       ├── Specifications                                     │
│   │       ├── Packaging Options                                  │
│   │       └── Inquiry Form                                       │
│   │                                                              │
│   └── GRAINS & FLOUR DIVISION (/products/grains-flour)           │
│       ├── Millet (Bajra) Flour (/products/millet-flour)          │
│       │   ├── Specifications                                     │
│       │   ├── Nutritional Info                                   │
│       │   ├── Packaging Options                                  │
│       │   └── Inquiry Form                                       │
│       ├── Jowar Flour (/products/jowar-flour)                    │
│       │   ├── Specifications                                     │
│       │   ├── Nutritional Info                                   │
│       │   ├── Packaging Options                                  │
│       │   └── Inquiry Form                                       │
│       ├── Wheat Flour (/products/wheat-flour)                    │
│       │   ├── Specifications                                     │
│       │   ├── Grades (Atta, Maida, Rawa/Sooji)                   │
│       │   ├── Nutritional Info                                   │
│       │   ├── Packaging Options                                  │
│       │   └── Inquiry Form                                       │
│       └── Maize Flour (/products/maize-flour)                    │
│           ├── Specifications                                     │
│           ├── Nutritional Info                                   │
│           ├── Packaging Options                                  │
│           └── Inquiry Form                                       │
└──────────────────────────────────────────────────────────────────┘

┌── EXPORT SERVICES (/export-services) ────────────────────────────┐
│   ├── Our Export Process (Step-by-Step)                          │
│   ├── Shipping & Logistics                                       │
│   │   ├── Ocean Freight                                          │
│   │   ├── Air Freight                                            │
│   │   └── Multi-modal Transport                                  │
│   ├── Documentation & Compliance                                 │
│   │   ├── Export Documentation                                   │
│   │   ├── Customs Clearance                                      │
│   │   └── Regulatory Compliance                                  │
│   ├── Incoterms Explained                                        │
│   ├── Payment Terms & Trade Finance                              │
│   ├── Ports & Destinations Served                                │
│   └── Request a Freight Quote                                    │
└──────────────────────────────────────────────────────────────────┘

┌── QUALITY ASSURANCE (/quality) ──────────────────────────────────┐
│   ├── Quality Policy                                              │
│   ├── Quality Control Process                                    │
│   │   ├── Incoming Raw Material Inspection                       │
│   │   ├── In-Process Quality Checks                              │
│   │   └── Final Product Testing                                  │
│   ├── Laboratory & Testing Capabilities                          │
│   ├── Certifications & Standards                                 │
│   │   ├── ISO Certifications                                     │
│   │   ├── FSSAI / Food Safety                                    │
│   │   ├── BIS / IS Standards                                     │
│   │   └── International Standards (ASTM, EU, etc.)               │
│   ├── Product Traceability                                       │
│   └── Quality Reports / COA Downloads                            │
└──────────────────────────────────────────────────────────────────┘

┌── GLOBAL MARKETS (/global-markets) ──────────────────────────────┐
│   ├── Markets We Serve (Interactive Map)                         │
│   ├── Market Profiles                                            │
│   │   ├── Middle East & GCC                                      │
│   │   ├── Southeast Asia                                         │
│   │   ├── Africa                                                 │
│   │   ├── Europe                                                 │
│   │   ├── South America                                          │
│   │   └── North America                                          │
│   ├── Country-Specific Compliance Guides                         │
│   ├── Trade Partners Network                                     │
│   ├── Case Studies / Success Stories                             │
│   └── Become a Trade Partner                                     │
└──────────────────────────────────────────────────────────────────┘

┌── CONTACT US (/contact) ─────────────────────────────────────────┐
│   ├── General Inquiry Form                                       │
│   ├── Product Inquiry Form                                       │
│   ├── Export Partnership Inquiry                                 │
│   ├── Office Locations / Addresses                               │
│   ├── Phone / Email / WhatsApp Links                             │
│   └── FAQ                                                        │
└──────────────────────────────────────────────────────────────────┘

┌── UTILITY PAGES ─────────────────────────────────────────────────┐
│   ├── Request a Quote (/request-quote)                           │
│   ├── Downloads (/downloads)                                     │
│   │   ├── Product Brochures (PDF)                                │
│   │   ├── Company Profile (PDF)                                  │
│   │   └── Certificates (PDF)                                     │
│   ├── Blog / News (/blog)                                        │
│   │   ├── Industry Insights                                      │
│   │   ├── Company News                                           │
│   │   └── Export Guides                                          │
│   ├── Privacy Policy (/privacy)                                  │
│   ├── Terms of Use (/terms)                                      │
│   ├── Cookie Policy (/cookies)                                   │
│   ├── Sitemap (XML & HTML) (/sitemap.xml, /sitemap)              │
│   └── 404 Page (/404)                                            │
└──────────────────────────────────────────────────────────────────┘
```

---

# 2. NAVIGATION STRUCTURE

## 2.1 Primary Navigation (Top Header — Persistent)

| # | Label | Route | Notes |
|---|-------|-------|-------|
| 1 | Home | `/` | — |
| 2 | About Us | `/about` | Dropdown: Overview, Infrastructure, Certifications, Why Choose Us |
| 3 | Products | `/products` | Mega Menu — see Section 2.1a below |
| 4 | Export Services | `/export-services` | Dropdown: Process, Logistics, Documentation, Incoterms, Payment |
| 5 | Quality Assurance | `/quality` | Dropdown: Policy, Process, Certifications, Lab, Reports |
| 6 | Global Markets | `/global-markets` | Dropdown: Regions, Case Studies, Partner Network |
| 7 | Contact Us | `/contact` | — |

### 2.1a Products Mega Menu Structure

```
PRODUCTS (Mega Menu)
├── Metals Division
│   ├── Aluminum Ingots
│   └── Aluminum Scrap (All Types & Grades)
├── Food & Agro Division
│   ├── Jaggery & Jaggery Powder
│   ├── Onion Powder & Onion Flakes
│   ├── Garlic Powder & Garlic Flakes
│   ├── Banana Powder
│   ├── Tomato Flakes
│   └── Sugar
└── Grains & Flour Division
    ├── Millet (Bajra) Flour
    ├── Jowar Flour
    ├── Wheat Flour
    └── Maize Flour
```

## 2.2 Secondary Navigation (Below Hero / Sub-page Tabs)

- Breadcrumbs on all inner pages (e.g., `Home > Products > Aluminum Ingots`)
- Sub-navigation tabs on Products listing page: `All | Metals | Food & Agro | Grains & Flour`
- Sub-navigation on About Us: `Overview | Infrastructure | Certifications | CSR | Why Choose Us`
- Sub-navigation on Export Services: `Process | Logistics | Documentation | Incoterms | Payment`

## 2.3 Utility Navigation (Top Bar — Right Corner)

| Label | Route | Icon |
|-------|-------|------|
| 📞 +91-XXXXXXXXXX | (Phone link) | Phone |
| ✉️ info@rmrpglobaltrade.com | (Email link) | Email |
| Request a Quote | `/request-quote` | Clipboard |
| 📄 Downloads | `/downloads` | Download |
| 🌐 Language Switcher | (EN / AR / ES / FR) | Globe |

## 2.4 Mobile Navigation

- Hamburger menu (slide-out drawer)
- Products as accordion expandable with three divisions
- All primary links as top-level items
- Utility links at bottom of drawer
- "Request a Quote" as sticky CTA button

---

# 3. PRODUCT HIERARCHY

## 3.1 Catalog Architecture

```
/products  (Master Listing — All Products with Category Filters)
│
├── /products/metals  (Category Landing)
│   ├── /products/aluminum-ingots  (Product Detail)
│   └── /products/aluminum-scrap  (Product Detail)
│
├── /products/food-agro  (Category Landing)
│   ├── /products/jaggery  (Product Detail)
│   ├── /products/onion  (Product Detail)
│   ├── /products/garlic  (Product Detail)
│   ├── /products/banana-powder  (Product Detail)
│   ├── /products/tomato-flakes  (Product Detail)
│   └── /products/sugar  (Product Detail)
│
└── /products/grains-flour  (Category Landing)
    ├── /products/millet-flour  (Product Detail)
    ├── /products/jowar-flour  (Product Detail)
    ├── /products/wheat-flour  (Product Detail)
    └── /products/maize-flour  (Product Detail)
```

## 3.2 Product Detail Page Template (Every Product Page)

```
┌─────────────────────────────────────────────────┐
│  Breadcrumb: Home > Products > [Product Name]    │
├─────────────────────────────────────────────────┤
│  HERO: Product Image Gallery (3-5 images)        │
│  └── Product Title, Tagline, HS Code (if metals)│
├─────────────────────────────────────────────────┤
│  Key Specifications Table                        │
│  └── Purity / Grade / Mesh / Origin / etc.      │
├─────────────────────────────────────────────────┤
│  Product Description                             │
│  └── Applications & Industries Served           │
├─────────────────────────────────────────────────┤
│  Packaging Options                               │
│  └── Customizable: Weight, Type, Labeling       │
├─────────────────────────────────────────────────┤
│  Quality Certifications (Badges)                 │
├─────────────────────────────────────────────────┤
│  Shipping Information (MOQ, Lead Time, Port)     │
├─────────────────────────────────────────────────┤
│  CTA: Request Quote / Get Sample / Download Spec │
├─────────────────────────────────────────────────┤
│  Related Products (Grid of 3-4 from same div)    │
└─────────────────────────────────────────────────┘
```

## 3.3 Product Metadata Structure (For Database / CMS)

```
Product {
  id: string
  name: string
  slug: string
  division: "metals" | "food-agro" | "grains-flour"
  category: string
  hscode: string
  shortDescription: string
  fullDescription: string (rich text)
  specifications: [{ label: string, value: string }]
  applications: string[]
  certifications: string[]
  packagingOptions: [{ type: string, weight: string, moq: string }]
  shipping: { port: string, leadTime: string, moq: string }
  images: string[]
  brochureUrl: string (PDF)
  metaTitle: string
  metaDescription: string
  canonical: string
}
```

---

# 4. PAGE RELATIONSHIPS & CROSS-LINKING MAP

## 4.1 Internal Linking Strategy

| Source Page | Links To | Context / Anchor |
|------------|----------|-----------------|
| Home | `/products` | "View All Products" CTA in Featured Products section |
| Home | `/about` | "Learn About RMRP" in Why RMRP section |
| Home | `/quality` | "Our Quality Standards" badge section |
| Home | `/contact` | "Get in Touch" CTA |
| Home | Featured product pages | "Explore [Product]" cards |
| Home | `/global-markets` | "Markets We Serve" map section |
| Home | `/request-quote` | "Request a Quote" hero CTA |
| About Us | `/products` | "Explore Our Product Range" after company overview |
| About Us | `/quality` | "View Certifications" link in infrastructure section |
| About Us | `/contact` | "Contact Our Team" CTA |
| About Us | Individual product pages | "We specialize in [Product]" inline links |
| Products (Master) | All product detail pages | Product cards |
| Products (Master) | `/products/metals` | Category filter / link |
| Products (Master) | `/products/food-agro` | Category filter / link |
| Products (Master) | `/products/grains-flour` | Category filter / link |
| Products (Master) | `/request-quote` | "Bulk Inquiry" CTA |
| Metals Category | `/products/aluminum-ingots` | Product card |
| Metals Category | `/products/aluminum-scrap` | Product card |
| Food & Agro Category | All food product pages | Product cards |
| Grains & Flour Category | All grain product pages | Product cards |
| Each Product Page | `/products/[same-division]` | "View All [Division] Products" |
| Each Product Page | Related products | "You May Also Like" cards |
| Each Product Page | `/request-quote` | "Request Price & Availability" |
| Each Product Page | `/downloads` | "Download Specification Sheet" |
| Each Product Page | `/quality` | "Quality Tested — View Report" |
| Export Services | `/contact` | "Start Your Export Inquiry" |
| Export Services | `/products` | Link to specific products per division |
| Export Services | `/request-quote` | "Get a Freight Quote" |
| Quality Assurance | `/products` | "Explore Certified Products" |
| Quality Assurance | `/downloads` | "Download Certificates" |
| Global Markets | `/products` | "Products Exported to [Region]" |
| Global Markets | `/export-services` | "Our Export Capabilities" |
| Global Markets | `/contact` | "Become a Trade Partner" CTA |
| Global Markets | Individual product pages | Region-specific product highlights |
| Contact Us | `/request-quote` | "For Bulk Orders →" |
| Blog Posts | Relevant product, service, or market pages | Contextual in-text links |
| 404 Page | `/` | "Return to Home" CTA |
| Footer | All primary pages, utility pages | Full link grid |

## 4.2 Cross-Sell Mapping (Product → Product)

| Current Product | Suggested Related Products |
|----------------|--------------------------|
| Aluminum Ingots | Aluminum Scrap |
| Onion Powder | Garlic Powder, Tomato Flakes |
| Garlic Powder | Onion Powder, Banana Powder |
| Jaggery Powder | Sugar |
| Wheat Flour | Maize Flour, Millet Flour, Jowar Flour |
| Millet Flour | Jowar Flour, Maize Flour |
| Banana Powder | Tomato Flakes, Onion Powder |
| Sugar | Jaggery Powder |

---

# 5. FOOTER STRUCTURE

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ RMRP GLOBAL TRADE FOOTER                                                     │
├──────────────────────┬──────────────────┬───────────────────┬────────────────┤
│ ABOUT THE COMPANY   │ PRODUCTS         │ QUICK LINKS       │ CONTACT        │
│                      │ (Metals)          │                   │                │
│ RMRP Global Trade is │ • Aluminum Ingots│ • Home            │ 📞 +91-XXXXXXXX │
│ a trusted Manufacturer│ • Aluminum Scrap │ • About Us        │ ✉️ info@...    │
│ Trader & Exporter    │                   │ • Export Services │ 📍 [Address]   │
│ of premium metals &  │ (Food & Agro)    │ • Quality         │                │
│ agro products.       │ • Jaggery        │ • Global Markets  │ 🕐 Mon–Sat     │
│ ISO [XX] Certified.  │ • Onion Pwd/Flake│ • Contact Us      │ 9:00–18:00     │
│                      │ • Garlic Pwd/Flake│ • Blog            │                │
│ [Read More →]        │ • Banana Powder   │ • Downloads       │                │
│                      │ • Tomato Flakes   │ • FAQ             │                │
│                      │ • Sugar           │ • Sitemap         │                │
│                      │                   │                   │                │
│                      │ (Grains & Flour) │ FOLLOW US         │                │
│                      │ • Millet Flour    │ [LinkedIn]        │                │
│                      │ • Jowar Flour     │ [YouTube]         │                │
│                      │ • Wheat Flour     │ [Facebook]        │                │
│                      │ • Maize Flour     │ [Instagram]       │                │
├──────────────────────┴──────────────────┴───────────────────┴────────────────┤
│ © 2025 RMRP Global Trade. All Rights Reserved.                              │
│ Privacy Policy  |  Terms of Use  |  Cookie Policy                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 5.1 Footer Bottom Bar

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ © 2026 RMRP Global Trade. All Rights Reserved.                              │
│ Privacy Policy (/privacy)  |  Terms of Use (/terms)  |  Cookie Policy        │
│ (/cookies)  |  Sitemap (/sitemap)                                            │
│                                                                              │
│ "Empowering Global Trade Through Quality & Trust"                            │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# 6. CONTENT TYPES & TEMPLATES

## 6.1 Page Templates

| Template | Used For | Fields |
|----------|----------|--------|
| Home | `/` | Hero slides, stats bar, featured products grid, CTA sections, testimonials |
| Standard Content | About, Quality, Export Services | Rich text editor, image blocks, accordion, CTA |
| Product Category | `/products`, `/products/metals`, etc. | Grid of product cards, filter bar, intro text |
| Product Detail | All product pages | Image gallery, specs table, description, packaging, CTA |
| Market Profile | `/global-markets/[region]` | Map, market data, exported products grid, compliance notes |
| Contact | `/contact` | Form builder, address cards, map embed |
| Blog Listing | `/blog` | Article cards with pagination |
| Blog Article | `/blog/[slug]` | Rich text, sidebar (related products, CTA) |
| Download Center | `/downloads` | Download item cards (PDF) |
| FAQ | `/faq` | Accordion list grouped by category |
| Request Quote | `/request-quote` | Multi-step form (product selection, quantity, shipping) |

## 6.2 Modular Components (Reusable)

- **CTA Block** — Headline + Subtext + Button (used across pages)
- **Stats Bar** — Number + Label (years, countries, products, clients)
- **Product Card** — Image + Title + Brief + Button
- **Specs Table** — Key-value rows (used on all product pages)
- **Packaging Options** — Card grid for each package variant
- **Accordion / FAQ** — Expandable content sections
- **Contact Form** — Name, Email, Phone, Company, Product Interest, Message
- **Download Item** — File icon + Title + Format + Size + Download Button
- **Breadcrumbs** — Auto-generated from route
- **Testimonials Carousel** — Quote + Name + Company + Logo
- **Interactive Map** — Clickable regions → market profile
- **Badge Grid** — Certification / standard badges

---

# 7. URL SLUG ARCHITECTURE

## 7.1 Naming Convention

```
Format:  lowercase-kebab-case, no trailing slashes except root

Products:
/products                                          (Master listing)
/products/metals                                   (Category)
/products/aluminum-ingots                          (Product)
/products/aluminum-scrap                           (Product)
/products/food-agro                                (Category)
/products/jaggery                                  (Product)
/products/onion                                    (Product)
/products/garlic                                   (Product)
/products/banana-powder                            (Product)
/products/tomato-flakes                            (Product)
/products/sugar                                    (Product)
/products/grains-flour                             (Category)
/products/millet-flour                             (Product)
/products/jowar-flour                              (Product)
/products/wheat-flour                              (Product)
/products/maize-flour                              (Product)

About:
/about
/about/infrastructure
/about/leadership
/about/certifications
/about/csr

Quality:
/quality
/quality/policy
/quality/process
/quality/certifications
/quality/laboratory
/quality/reports

Export Services:
/export-services
/export-services/process
/export-services/logistics
/export-services/documentation
/export-services/incoterms
/export-services/payment

Global Markets:
/global-markets
/global-markets/middle-east
/global-markets/southeast-asia
/global-markets/africa
/global-markets/europe
/global-markets/south-america
/global-markets/north-america
/global-markets/case-studies

Utility:
/request-quote
/downloads
/blog
/blog/[slug]
/faq
/privacy
/terms
/cookies
/sitemap
/sitemap.xml
```

---

# 8. SITE STRUCTURE SUMMARY

| Metric | Count |
|--------|-------|
| Primary Navigation Items | 7 |
| Product Divisions | 3 |
| Total Product Pages | 12 |
| Total Market Region Pages | 6 |
| Export Services Sub-pages | 5 |
| Quality Sub-pages | 5 |
| About Sub-pages | 4 |
| Utility Pages | 9 |
| **Total Pages (approx)** | **~55+** |
| Reusable Components | 12 |
| Page Templates | 10 |

---

# 9. NEXT.JS 15 ROUTE STRUCTURE

```
src/
├── app/
│   ├── page.tsx                          (Home)
│   ├── layout.tsx                        (Root layout)
│   ├── not-found.tsx                     (404)
│   │
│   ├── about/
│   │   ├── page.tsx
│   │   ├── infrastructure/page.tsx
│   │   ├── leadership/page.tsx
│   │   ├── certifications/page.tsx
│   │   └── csr/page.tsx
│   │
│   ├── products/
│   │   ├── page.tsx                      (Master listing)
│   │   ├── metals/page.tsx
│   │   ├── food-agro/page.tsx
│   │   ├── grains-flour/page.tsx
│   │   ├── [slug]/page.tsx              (Dynamic product detail)
│   │   └── layout.tsx                   (Products section layout)
│   │
│   ├── export-services/
│   │   ├── page.tsx
│   │   ├── process/page.tsx
│   │   ├── logistics/page.tsx
│   │   ├── documentation/page.tsx
│   │   ├── incoterms/page.tsx
│   │   └── payment/page.tsx
│   │
│   ├── quality/
│   │   ├── page.tsx
│   │   ├── policy/page.tsx
│   │   ├── process/page.tsx
│   │   ├── certifications/page.tsx
│   │   ├── laboratory/page.tsx
│   │   └── reports/page.tsx
│   │
│   ├── global-markets/
│   │   ├── page.tsx
│   │   ├── [region]/page.tsx            (Dynamic region profile)
│   │   └── case-studies/page.tsx
│   │
│   ├── contact/
│   │   ├── page.tsx
│   │   └── thank-you/page.tsx           (Post-submission)
│   │
│   ├── request-quote/
│   │   ├── page.tsx
│   │   └── thank-you/page.tsx
│   │
│   ├── downloads/
│   │   └── page.tsx
│   │
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   │
│   ├── faq/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── cookies/page.tsx
│   ├── sitemap/page.tsx
│   └── sitemap.ts                       (XML sitemap generation)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── MegaMenu.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Footer.tsx
│   │   ├── Breadcrumbs.tsx
│   │   └── TopBar.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── WhyRMRP.tsx
│   │   ├── GlobalReachMap.tsx
│   │   └── TestimonialsCarousel.tsx
│   ├── products/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductFilterBar.tsx
│   │   ├── SpecsTable.tsx
│   │   ├── PackagingOptions.tsx
│   │   ├── ImageGallery.tsx
│   │   └── CategoryNav.tsx
│   ├── ui/
│   │   ├── CTA.tsx
│   │   ├── Accordion.tsx
│   │   ├── ContactForm.tsx
│   │   ├── DownloadItem.tsx
│   │   ├── BadgeGrid.tsx
│   │   └── Map.tsx
│   └── shared/
│       ├── SectionHeader.tsx
│       ├── Button.tsx
│       └── Container.tsx
│
├── lib/
│   ├── products.ts                      (Data fetching, products API)
│   ├── constants.ts                     (Site-wide constants)
│   └── utils.ts
│
├── data/
│   ├── products.json                    (All product data)
│   └── testimonials.json
│
└── styles/
    ├── globals.css
    └── ...
```

---

*End of Information Architecture Document — v1.0*
