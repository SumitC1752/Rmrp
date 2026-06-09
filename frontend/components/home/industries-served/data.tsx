import type { Industry } from './types';

function SvgWrapper({ children }: { children: React.ReactNode }) {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const icons = {
  food: (
    <SvgWrapper>
      <path d="M18 8h1a4 4 0 010 8h-1" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <path d="M6 1v3" />
      <path d="M10 1v3" />
      <path d="M14 1v3" />
    </SvgWrapper>
  ),
  importers: (
    <SvgWrapper>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </SvgWrapper>
  ),
  exporters: (
    <SvgWrapper>
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <path d="M5 5l14 14" />
      <path d="M19 5l-14 14" />
    </SvgWrapper>
  ),
  distributors: (
    <SvgWrapper>
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h3l4 4v4h-2" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M9 12l2 2 4-4" />
    </SvgWrapper>
  ),
  industrial: (
    <SvgWrapper>
      <path d="M3 21V7l4-4 4 4v14" />
      <path d="M11 21V11h2v10" />
      <path d="M15 21V4l4-3 2 3v17" />
      <path d="M1 21h22" />
    </SvgWrapper>
  ),
  fmcg: (
    <SvgWrapper>
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 01-8 0" />
    </SvgWrapper>
  ),
  retail: (
    <SvgWrapper>
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 01-8 0" />
      <circle cx="12" cy="10" r="3" />
    </SvgWrapper>
  ),
  packaging: (
    <SvgWrapper>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M12 12l-8.3-4.8" />
      <path d="M12 12v10" />
      <path d="M12 12l8.3-4.8" />
    </SvgWrapper>
  ),
};

export const sectionBadge = 'Industries Served';
export const sectionHeading = 'Trusted Across Sectors';
export const sectionSubheading =
  'Our products and export services support a wide range of industries — from food manufacturers to industrial supply chains.';

export const industries: Industry[] = [
  {
    icon: icons.food,
    title: 'Food Processing Companies',
    description: 'Bulk ingredients and processed food products for manufacturers of packaged foods, snacks, beverages, and ready-to-eat products.',
  },
  {
    icon: icons.importers,
    title: 'Importers',
    description: 'Reliable product sourcing with consistent quality, competitive pricing, and full export documentation for hassle-free customs clearance.',
  },
  {
    icon: icons.exporters,
    title: 'Exporters',
    description: 'Partnerships for co-export and consolidated shipping, leveraging combined volumes for better freight rates and market access.',
  },
  {
    icon: icons.distributors,
    title: 'Wholesale Distributors',
    description: 'Large-volume supply arrangements with flexible delivery schedules, product mixing, and dedicated account management.',
  },
  {
    icon: icons.industrial,
    title: 'Industrial Manufacturers',
    description: 'Raw aluminum and agro-based inputs for construction, automotive, packaging, and industrial production lines.',
  },
  {
    icon: icons.fmcg,
    title: 'FMCG Companies',
    description: 'High-volume, consistent-quality food ingredients and packaging inputs for fast-moving consumer goods production.',
  },
  {
    icon: icons.retail,
    title: 'Retail Chains',
    description: 'Private labeling and retail-ready packaging for supermarket chains, hypermarkets, and specialty food retailers.',
  },
  {
    icon: icons.packaging,
    title: 'Packaging Companies',
    description: 'Aluminum scrap and food-grade packaging materials for companies manufacturing containers, foils, and wrappers.',
  },
];

export const ctaLabel = 'See How We Can Serve Your Industry';
export const ctaHref = '/contact';
