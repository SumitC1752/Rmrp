import type { FeaturedProduct } from './types';

export const sectionBadge = 'Featured Products';
export const sectionHeading = 'Most Requested Products';
export const sectionSubheading =
  'Our top-selling export products trusted by buyers across 25+ countries for consistent quality and competitive pricing.';

export const featuredProducts: FeaturedProduct[] = [
  {
    name: 'Aluminum Ingots',
    category: 'Aluminum Products',
    description:
      'High-purity aluminum ingots for industrial manufacturing, construction, and automotive applications. Available in custom grades and specifications.',
    href: '/products/aluminum-ingots',
  },
  {
    name: 'Aluminum Scrap',
    category: 'Aluminum Products',
    description:
      'Sorted and graded aluminum scrap for recycling and reprocessing industries. Consistent composition and reliable supply volumes.',
    href: '/products/aluminum-scrap',
  },
  {
    name: 'Jaggery & Jaggery Powder',
    category: 'Processed Food',
    description:
      'Natural, unrefined jaggery in block and powder form. Premium quality, hygienically processed, and export-grade packaging.',
    href: '/products/jaggery',
  },
  {
    name: 'Onion Powder & Flakes',
    category: 'Processed Food',
    description:
      'Dehydrated onion powder and flakes for food processing, seasoning blends, and industrial ingredient applications.',
    href: '/products/onion-powder',
  },
  {
    name: 'Garlic Powder & Flakes',
    category: 'Processed Food',
    description:
      'High-quality dehydrated garlic products with strong flavor retention, uniform particle size, and extended shelf life.',
    href: '/products/garlic-powder',
  },
  {
    name: 'Sugar (ICUMSA 45)',
    category: 'Agro Products',
    description:
      'Premium refined sugar meeting ICUMSA 45 standards for food and beverage manufacturers, confectionery, and industrial users.',
    href: '/products/sugar',
  },
];
