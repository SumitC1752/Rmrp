import { IMAGES } from '@/constants';
import type { ProductCategory } from './types';

export const sectionHeading = 'Browse by Category';
export const sectionSubheading = 'Three specialized product divisions serving diverse global industries.';

export const categories: ProductCategory[] = [
  {
    title: 'Aluminum Products',
    description:
      'High-grade aluminum ingots and scrap for industrial manufacturing, construction, and automotive supply chains. Custom grades available for specific buyer requirements.',
    productCount: '4 Product Lines',
    href: '/products/aluminum-ingots',
    image: IMAGES.aluminumIngots,
  },
  {
    title: 'Processed Food Products',
    description:
      'Premium-quality powdered, flaked, and granulated food products including jaggery, onion, garlic, banana, and tomato — manufactured under hygienic conditions for global buyers.',
    productCount: '6 Product Lines',
    href: '/products/jaggery',
    image: IMAGES.jaggery,
  },
  {
    title: 'Agro Products',
    description:
      'Bulk agricultural commodities and processed flours — sugar, millet (bajra) flour, and wheat flour — sourced from trusted producers and meeting international quality standards.',
    productCount: '3 Product Lines',
    href: '/products/sugar',
    image: IMAGES.sugar,
  },
];

export const ctaLabel = 'Request a Quote';
export const ctaHref = '/contact';
