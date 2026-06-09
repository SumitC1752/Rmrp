import type { ProductCategory } from './types';

export const sectionBadge = 'Product Portfolio';
export const sectionHeading = 'Premium Products for Global Markets';
export const sectionSubheading =
  'Across aluminum, processed food, and agro commodities, we deliver consistent quality that meets international standards and buyer specifications.';

export const categories: ProductCategory[] = [
  {
    title: 'Aluminum Products',
    description:
      'High-grade aluminum ingots and scrap for industrial manufacturing, construction, and automotive supply chains worldwide.',
    productCount: '4 Product Lines',
    keyProducts: ['Aluminum Ingots', 'Aluminum Scrap', 'Custom Grades'],
    href: '/products/aluminum-ingots',
  },
  {
    title: 'Processed Food Products',
    description:
      'Premium quality powdered, flaked, and granulated food products manufactured under hygienic conditions for global buyers.',
    productCount: '6 Product Lines',
    keyProducts: ['Jaggery Powder', 'Onion Powder', 'Garlic Powder', 'Banana Powder', 'Tomato Flakes'],
    href: '/products/jaggery',
  },
  {
    title: 'Agro Products',
    description:
      'Bulk agricultural commodities and processed flours sourced from trusted producers, meeting international quality standards.',
    productCount: '3 Product Lines',
    keyProducts: ['Sugar', 'Millet (Bajra) Flour', 'Wheat Flour'],
    href: '/products/sugar',
  },
];

export const ctaLabel = 'View Full Catalog';
export const ctaHref = '/products';
