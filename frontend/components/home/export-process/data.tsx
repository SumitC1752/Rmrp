import type { ProcessStep } from './types';

function SvgWrapper({ children }: { children: React.ReactNode }) {
  return (
    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const icons = {
  inquiry: (
    <SvgWrapper>
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </SvgWrapper>
  ),
  analysis: (
    <SvgWrapper>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </SvgWrapper>
  ),
  pricing: (
    <SvgWrapper>
      <path d="M12 1v22" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </SvgWrapper>
  ),
  production: (
    <SvgWrapper>
      <path d="M8 2v4h8V2" />
      <rect x="4" y="6" width="16" height="16" rx="2" />
      <path d="M12 2v10" />
      <path d="M9 12l3 3 3-3" />
    </SvgWrapper>
  ),
  inspection: (
    <SvgWrapper>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M9 12l2 2 4-4" />
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
  logistics: (
    <SvgWrapper>
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h3l4 4v4h-2" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
    </SvgWrapper>
  ),
  delivery: (
    <SvgWrapper>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </SvgWrapper>
  ),
};

export const sectionBadge = 'Export Process';
export const sectionHeading = 'How We Deliver';
export const sectionSubheading =
  'A structured 8-step process from inquiry to delivery — ensuring every shipment meets quality standards, regulatory requirements, and buyer expectations.';

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: icons.inquiry,
    title: 'Inquiry Received',
    description:
      'Buyer submits product requirements via website, email, or B2B platform. Our trade desk acknowledges within 2–4 hours.',
  },
  {
    step: 2,
    icon: icons.analysis,
    title: 'Requirement Analysis',
    description:
      'We review specifications, quality expectations, destination country regulations, packaging needs, and delivery timeline.',
  },
  {
    step: 3,
    icon: icons.pricing,
    title: 'Quotation & Pricing',
    description:
      'A detailed commercial proposal is prepared including product price, incoterms, payment terms, and estimated shipping costs.',
  },
  {
    step: 4,
    icon: icons.production,
    title: 'Production / Sourcing',
    description:
      'Upon confirmation, we begin manufacturing or sourcing from trusted partners with real-time production monitoring.',
  },
  {
    step: 5,
    icon: icons.inspection,
    title: 'Quality Inspection',
    description:
      'Multi-stage inspection covering raw materials, in-process checks, and pre-shipment testing against agreed specifications.',
  },
  {
    step: 6,
    icon: icons.packaging,
    title: 'Packaging',
    description:
      'Products are packed according to buyer requirements — export-grade packaging for industrial, retail, or bulk formats.',
  },
  {
    step: 7,
    icon: icons.logistics,
    title: 'Global Logistics',
    description:
      'We coordinate freight booking, export documentation, customs clearance, and cargo tracking across sea, air, or land routes.',
  },
  {
    step: 8,
    icon: icons.delivery,
    title: 'Delivery',
    description:
      'Final handover at agreed destination. Post-delivery support includes documentation handover and feedback collection.',
  },
];
