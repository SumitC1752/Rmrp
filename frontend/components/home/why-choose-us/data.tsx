import type { WhyChooseItem } from './types';

function SvgWrapper({ children }: { children: React.ReactNode }) {
  return (
    <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const icons = {
  manufacturing: (
    <SvgWrapper>
      <path d="M3 21V7l4-4 4 4v14" />
      <path d="M11 21V11h2v10" />
      <path d="M15 21V4l4-3 2 3v17" />
      <path d="M1 21h22" />
    </SvgWrapper>
  ),
  quality: (
    <SvgWrapper>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </SvgWrapper>
  ),
  pricing: (
    <SvgWrapper>
      <path d="M12 1v22" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </SvgWrapper>
  ),
  bulk: (
    <SvgWrapper>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </SvgWrapper>
  ),
  logistics: (
    <SvgWrapper>
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h3l4 4v4h-2" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
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
  partnership: (
    <SvgWrapper>
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M20 8v6" />
      <path d="M23 11h-6" />
    </SvgWrapper>
  ),
  delivery: (
    <SvgWrapper>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </SvgWrapper>
  ),
};

export const sectionBadge = 'Why RMRP Global Trade';
export const sectionHeading = 'Built for Reliability. Driven by Quality.';
export const sectionSubheading =
  'Every partnership is backed by years of export expertise, quality-controlled supply chains, and a commitment to delivering value at every stage.';

export const whyChooseUs: WhyChooseItem[] = [
  {
    icon: icons.manufacturing,
    title: 'Manufacturer & Direct Trader',
    description:
      'We control the supply chain from sourcing to shipping — no intermediaries, better pricing, and full accountability for every order.',
  },
  {
    icon: icons.quality,
    title: 'Export Quality Products',
    description:
      'Every product meets rigorous international standards through ISO-aligned quality checks at sourcing, production, and dispatch stages.',
  },
  {
    icon: icons.pricing,
    title: 'Competitive Pricing',
    description:
      'Direct access to manufacturers and bulk purchasing power lets us offer transparent, market-competitive pricing without compromising quality.',
  },
  {
    icon: icons.bulk,
    title: 'Bulk Supply Capability',
    description:
      'Infrastructure and capacity to handle large-volume orders — from container loads to multi-product consolidated shipments.',
  },
  {
    icon: icons.logistics,
    title: 'Reliable Logistics',
    description:
      'Established partnerships with freight forwarders and shipping lines ensure smooth cargo movement across air, sea, and land routes.',
  },
  {
    icon: icons.packaging,
    title: 'Custom Packaging',
    description:
      'Flexible packaging solutions tailored to buyer requirements — from industrial bulk packs to retail-ready consumer formats.',
  },
  {
    icon: icons.partnership,
    title: 'Long-Term Partnerships',
    description:
      'We invest in relationships beyond transactions — consistent quality, responsive communication, and mutual growth with every client.',
  },
  {
    icon: icons.delivery,
    title: 'Timely Delivery',
    description:
      'Strict adherence to shipment schedules with proactive tracking updates, minimizing delays and ensuring supply chain continuity.',
  },
];

export const ctaLabel = 'Start a Partnership';
export const ctaHref = '/contact';
