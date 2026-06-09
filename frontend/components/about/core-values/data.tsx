import type { CoreValue } from './types';

function SvgWrapper({ children }: { children: React.ReactNode }) {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export const sectionBadge = 'Core Values';
export const sectionHeading = 'What We Stand By';

export const coreValues: CoreValue[] = [
  {
    icon: (
      <SvgWrapper>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </SvgWrapper>
    ),
    title: 'Quality',
    description:
      'Every product meets defined quality standards through systematic inspection at sourcing, production, and pre-shipment stages.',
  },
  {
    icon: (
      <SvgWrapper>
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      </SvgWrapper>
    ),
    title: 'Integrity',
    description:
      'Honest communication, transparent pricing, and ethical business practices in every transaction, no matter the size.',
  },
  {
    icon: (
      <SvgWrapper>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </SvgWrapper>
    ),
    title: 'Reliability',
    description:
      'Consistent delivery performance with strict adherence to agreed timelines, specifications, and contractual terms.',
  },
  {
    icon: (
      <SvgWrapper>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </SvgWrapper>
    ),
    title: 'Customer Focus',
    description:
      'Buyer requirements drive our approach — from custom packaging to tailored logistics, we adapt to each client\'s needs.',
  },
  {
    icon: (
      <SvgWrapper>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </SvgWrapper>
    ),
    title: 'Global Reach',
    description:
      'Export network spanning 25+ countries with deep knowledge of international trade regulations, documentation, and logistics.',
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
    description:
      'We invest in relationships beyond individual orders — consistent engagement, shared growth, and mutual commercial success.',
  },
];
