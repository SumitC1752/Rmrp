import type { Metadata } from 'next';
import type { ProductData } from './products-data';

export const siteConfig = {
  name: 'RMRP Global Trade',
  tagline: 'Premium Aluminum & Agro Commodities Exporter',
  description:
    'RMRP Global Trade is a trusted manufacturer, trader & exporter of aluminum ingots, aluminum scrap, jaggery, onion powder, garlic powder, and agro commodities. Exporting to 25+ countries. ISO certified.',
  url: 'https://www.rmrpglobaltrade.com',
  locale: 'en_IN',
  localeAlt: 'en',
  logo: '/logo.svg',
  ogImage: '/og-image.svg',
  twitterHandle: '@rmrpglobaltrade',
  email: 'info@rmrpglobaltrade.com',
  phone: '+91-9922167039',
  address: 'Ahilyanagar, Maharashtra',
  keywords: [
    'aluminum exporter',
    'aluminum ingots',
    'aluminum scrap',
    'jaggery powder',
    'onion powder',
    'garlic powder',
    'banana powder',
    'tomato flakes',
    'sugar exporter',
    'millet flour',
    'wheat flour',
    'agro commodities',
    'B2B export India',
    'bulk food supplier',
    'industrial raw materials',
  ],
} as const;

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: { '@type': 'PostalAddress', addressLocality: siteConfig.address },
  sameAs: [
    'https://www.facebook.com/share/12JrkiMRaAn/',
    'https://x.com/RMRPGLOBALTRADE',
    'https://www.linkedin.com/company/rmrp-global-trade/',
    'https://www.instagram.com/rmrpglobaltrade5994?igsh=MWdpamZiNXk5dnYwOA==',
  ],
} as const;

export const productKeywords = [
  'aluminum ingots exporter',
  'aluminum scrap supplier',
  'jaggery powder manufacturer',
  'onion powder exporter India',
  'garlic powder supplier',
  'banana powder manufacturer',
  'tomato flakes exporter',
  'sugar exporter India',
  'millet flour supplier',
  'wheat flour exporter',
  'bulk food commodities',
  'agro commodities India',
  'aluminum commodities',
  'industrial raw materials',
  'B2B export India',
] as const;

type PageSeoConfig = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: readonly string[];
  path: string;
  noindex?: boolean;
};

const ogImageDimensions = { width: 1200, height: 630 } as const;

function resolveOgImage(path: string) {
  return [{ url: path, ...ogImageDimensions }];
}

export const pageSeo = {
  home: {
    title: 'Home',
    description:
      'RMRP Global Trade is a premier manufacturer, trader, and exporter of aluminum ingots, aluminum scrap, jaggery, onion powder, garlic powder, and premium agro commodities. Trusted B2B partner serving 25+ countries worldwide.',
    ogTitle: `${siteConfig.name} — ${siteConfig.tagline}`,
    ogDescription:
      'Trusted B2B exporter of aluminum ingots, aluminum scrap, processed food products, and agro commodities. ISO-certified quality, serving 25+ countries.',
    ogImage: '/og-home.svg',
    path: '/',
  },
  about: {
    title: 'About Us',
    description:
      'RMRP Global Trade is a trusted manufacturer, trader, and exporter of aluminum ingots, aluminum scrap, jaggery, onion powder, garlic powder, and agro commodities. Serving 25+ countries with export-quality products.',
    ogTitle: 'About Us | RMRP Global Trade',
    ogDescription:
      'Learn about RMRP Global Trade — a trusted manufacturer, trader, and exporter of premium aluminum products and processed food & agro commodities.',
    ogImage: '/og-about.svg',
    path: '/about',
  },
  contact: {
    title: 'Contact Us',
    description:
      'Contact RMRP Global Trade — email, phone, WhatsApp, or inquiry form. Our trade desk responds within 24 hours with pricing, specifications, and logistics for aluminum, processed food, and agro commodity exports.',
    ogTitle: 'Contact Us | RMRP Global Trade',
    ogDescription:
      'Get in touch with RMRP Global Trade for product inquiries, pricing, and export requirements. We respond within 24 hours.',
    ogImage: '/og-contact.svg',
    path: '/contact',
  },
  products: {
    title: 'Products',
    description:
      "Explore RMRP Global Trade's complete product portfolio — aluminum ingots, aluminum scrap, jaggery powder, onion powder, garlic powder, banana powder, tomato flakes, sugar, millet flour, and wheat flour. Premium export quality.",
    ogTitle: 'Products | RMRP Global Trade',
    ogDescription:
      'Browse our full range of aluminum commodities, processed food products, and agro commodities available for global export.',
    ogImage: '/og-products.svg',
    path: '/products',
  },
  aluminum: {
    title: 'Aluminum Ingots & Scrap',
    description:
      'Premium-grade aluminum ingots (99.5%–99.9% purity) and all grades of aluminum scrap — Zorba, Twitch, 6061/6063 extrusions, Litho sheets, UBC, turnings, and more. Export quality with full documentation.',
    ogTitle: 'Aluminum Products | RMRP Global Trade',
    ogDescription:
      'High-purity aluminum ingots and all grades of sorted aluminum scrap for global industrial buyers. ASTM/ISO standards, flexible volumes, export-ready packaging.',
    ogImage: '/og-aluminum.svg',
    path: '/products/aluminum-ingots',
  },
  foodAgro: {
    title: 'Food & Agro Products',
    description:
      "Browse RMRP Global Trade's full range of processed food products and agro commodities — jaggery, onion powder, garlic powder, banana powder, tomato flakes, millet flour, wheat flour, maize flour, sugar, and more. Export quality with full documentation.",
    ogTitle: 'Food & Agro Products | RMRP Global Trade',
    ogDescription:
      'Premium processed food ingredients and bulk agro commodities for global buyers — jaggery, dehydrated vegetables, grain flours, and refined sugar.',
    ogImage: '/og-food-agro.svg',
    path: '/products/food-agro',
  },
  services: {
    title: 'Export Services',
    description:
      'End-to-end export services from RMRP Global Trade — bulk supply, OEM manufacturing, private labeling, export documentation, global logistics, and custom packaging for aluminum and agro commodities.',
    ogTitle: 'Export Services | RMRP Global Trade',
    ogDescription:
      'Comprehensive B2B export services — from product sourcing and manufacturing to logistics and customs documentation. Your single-source trade partner.',
    ogImage: '/og-services.svg',
    path: '/services',
  },
  exportServices: {
    title: 'Export Services',
    description:
      'End-to-end export services from RMRP Global Trade — complete logistics, documentation, incoterms, and payment solutions for global buyers of aluminum, processed food, and agro commodities.',
    ogTitle: 'Export Services | RMRP Global Trade',
    ogDescription:
      'Comprehensive B2B export services — from product sourcing and manufacturing to logistics and customs documentation. Your single-source trade partner.',
    ogImage: '/og-services.svg',
    path: '/export-services',
  },
  globalMarkets: {
    title: 'Global Markets',
    description:
      'RMRP Global Trade exports aluminum, processed food, and agro commodities to 25+ countries across the Middle East, North America, Europe, and Asia. Reliable logistics from India to global ports.',
    ogTitle: 'Global Markets | RMRP Global Trade',
    ogDescription:
      'Export network spanning four continents — supplying premium commodities to the Middle East, North America, Europe, and Asia with reliable logistics and local market expertise.',
    ogImage: '/og-global.svg',
    path: '/global-markets',
  },
  requestQuote: {
    title: 'Request a Quote',
    description:
      'Request a competitive quote from RMRP Global Trade for aluminum ingots, aluminum scrap, jaggery, onion powder, garlic powder, and premium agro commodities. We respond within 24 hours with pricing, specifications, and logistics options.',
    ogTitle: 'Request a Quote | RMRP Global Trade',
    ogDescription:
      'Submit your requirements and receive a detailed quote within 24 hours — pricing, specifications, and logistics for aluminum, processed food, and agro commodity exports.',
    ogImage: '/og-quote.svg',
    path: '/request-quote',
  },
  quality: {
    title: 'Quality Assurance',
    description:
      "RMRP Global Trade's comprehensive quality assurance program — five-stage inspection process, food safety standards (HACCP, GMP), aluminum grade verification, export-grade packaging, and full regulatory compliance for international shipments.",
    ogTitle: 'Quality Assurance | RMRP Global Trade',
    ogDescription:
      'Rigorous quality control across every aluminum, processed food, and agro commodity shipment — from raw material verification through production, packaging, and dispatch.',
    ogImage: '/og-quality.svg',
    path: '/quality',
  },
} as const satisfies Record<string, PageSeoConfig>;

export function createMetadata(page: PageSeoConfig): Metadata {
  const canonicalUrl = `${siteConfig.url}${page.path}`;
  const ogImagePath = page.ogImage ?? siteConfig.ogImage;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords ? [...page.keywords] : undefined,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: page.ogTitle ?? `${page.title} | ${siteConfig.name}`,
      description: page.ogDescription ?? page.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.localeAlt,
      type: 'website',
      images: resolveOgImage(ogImagePath),
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      title: page.ogTitle ?? `${page.title} | ${siteConfig.name}`,
      description: page.ogDescription ?? page.description,
      images: [ogImagePath],
    },
    robots: page.noindex ? { index: false, follow: false } : undefined,
  };
}

export function createProductMetadata(product: ProductData, path: string): Metadata {
  const canonicalUrl = `${siteConfig.url}${path}`;
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: product.ogTitle,
      description: product.ogDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.localeAlt,
      type: 'website',
      images: resolveOgImage('/og-default.svg'),
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      title: product.ogTitle,
      description: product.ogDescription,
      images: ['/og-default.svg'],
    },
  };
}
