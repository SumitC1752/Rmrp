import type { WhyRmrpItem } from './types';

function SvgWrapper({ children }: { children: React.ReactNode }) {
  return (
    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export const sectionBadge = 'Why RMRP Global Trade';
export const sectionHeading = 'What Sets Us Apart';

export const whyRmrpItems: WhyRmrpItem[] = [
  {
    icon: (
      <SvgWrapper>
        <path d="M3 21V7l4-4 4 4v14" />
        <path d="M11 21V11h2v10" />
        <path d="M15 21V4l4-3 2 3v17" />
        <path d="M1 21h22" />
      </SvgWrapper>
    ),
    title: 'Manufacturer & Direct Trader',
    description: 'We control the supply chain from production to delivery — no intermediaries, fuller accountability, and better pricing for our buyers.',
  },
  {
    icon: (
      <SvgWrapper>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </SvgWrapper>
    ),
    title: 'Export Quality Products',
    description: 'Every shipment meets defined quality specifications through systematic checks at sourcing, production, and pre-loading stages.',
  },
  {
    icon: (
      <SvgWrapper>
        <path d="M12 1v22" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </SvgWrapper>
    ),
    title: 'Competitive Pricing',
    description: 'Direct manufacturer access and bulk purchasing power enable us to offer transparent, market-aligned pricing without quality compromises.',
  },
  {
    icon: (
      <SvgWrapper>
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h3l4 4v4h-2" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
      </SvgWrapper>
    ),
    title: 'Reliable Logistics',
    description: 'Established freight partnerships ensure smooth cargo movement across sea, air, and land with end-to-end tracking visibility.',
  },
  {
    icon: (
      <SvgWrapper>
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M12 12l-8.3-4.8" />
        <path d="M12 12v10" />
        <path d="M12 12l8.3-4.8" />
      </SvgWrapper>
    ),
    title: 'Custom Packaging',
    description: 'Flexible packaging formats tailored to buyer requirements — from industrial bulk packs to retail-ready branded formats.',
  },
  {
    icon: (
      <SvgWrapper>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </SvgWrapper>
    ),
    title: 'Bulk Supply Capability',
    description: 'Infrastructure and capacity to handle large-volume orders with consistent quality across every unit in every shipment.',
  },
  {
    icon: (
      <SvgWrapper>
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6" />
        <path d="M23 11h-6" />
      </SvgWrapper>
    ),
    title: 'Long-Term Partnerships',
    description: 'We build lasting commercial relationships through consistent quality, responsive communication, and mutual growth commitment.',
  },
];
