import type { ReachContent } from './types';

export const reachContent: ReachContent = {
  badge: 'Global Presence',
  heading: 'Serving Markets Across the World',
  subheading:
    'From the Middle East to North America and Europe, our export network delivers quality products to importers, distributors, and industrial buyers across 25+ countries.',
  groups: [
    {
      region: 'Middle East & GCC',
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'],
    },
    {
      region: 'North America',
      countries: ['USA', 'Canada', 'Mexico'],
    },
    {
      region: 'Europe & UK',
      countries: ['United Kingdom', 'Germany', 'Netherlands', 'Poland', 'Spain', 'Italy'],
    },
  ],
  stats: [
    { value: '25+', label: 'Export Markets' },
    { value: '15+', label: 'Years of Expertise' },
    { value: '500+', label: 'Shipments Delivered' },
  ],
  ctaLabel: 'View Global Markets',
  ctaHref: '/global-markets',
};
