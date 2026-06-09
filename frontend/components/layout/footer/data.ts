import { socialLinks } from '@/constants';
import type { FooterSection, ContactInfo } from './types';

export const companyDescription =
  'RMRP Global Trade is a trusted manufacturer, trader, and exporter of premium-grade aluminum commodities and processed food & agro products. Serving importers, distributors, and industrial buyers across 25+ countries with quality-assured supply chains and end-to-end export services.';

export const quickLinks: FooterSection = {
  title: 'Quick Links',
  links: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Export Services', href: '/export-services' },
    { label: 'Quality Assurance', href: '/quality' },
    { label: 'Global Markets', href: '/global-markets' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

export const productCategories: FooterSection = {
  title: 'Products',
  links: [
    { label: 'Aluminum Ingots', href: '/products/aluminum-ingots' },
    { label: 'Aluminum Scrap', href: '/products/aluminum-scrap' },
    { label: 'Jaggery & Jaggery Powder', href: '/products/jaggery' },
    { label: 'Onion Powder', href: '/products/onion-powder' },
    { label: 'Onion Flakes', href: '/products/onion-flakes' },
    { label: 'Garlic Powder', href: '/products/garlic-powder' },
    { label: 'Garlic Flakes', href: '/products/garlic-flakes' },
    { label: 'Banana Powder', href: '/products/banana-powder' },
    { label: 'Tomato Flakes', href: '/products/tomato-flakes' },
    { label: 'Sugar', href: '/products/sugar' },
    { label: 'Millet (Bajra) Flour', href: '/products/millet-flour' },
    { label: 'Wheat Flour', href: '/products/wheat-flour' },
  ],
};

export const exportServices: FooterSection = {
  title: 'Export Services',
  links: [
    { label: 'Bulk Supply', href: '/export-services' },
    { label: 'Export Documentation', href: '/export-services/documentation' },
    { label: 'Global Logistics', href: '/export-services/logistics' },
    { label: 'Payment Terms', href: '/export-services/payment' },
    { label: 'Incoterms', href: '/export-services/incoterms' },
    { label: 'Quality Control', href: '/quality/process' },
  ],
};

export const contactInfo: ContactInfo = {
  email: 'info@rmrpglobaltrade.com',
  phone: '+91-9922167039',
  address: 'Ahilyanagar, Maharashtra',
  hours: 'Mon – Sat, 9:00 AM – 6:00 PM IST',
  whatsapp: '+91-9922167039',
};

export const socialSection = {
  title: 'Follow Us',
  links: socialLinks,
};
