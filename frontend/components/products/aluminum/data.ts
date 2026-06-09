import type { PageContent } from './types';

export const pageContent: PageContent = {
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Aluminum Ingots' },
    ],
    heading: 'Premium Aluminum Ingots',
    subheading:
      'High-purity aluminum ingots engineered for die casting, extrusion, alloying, and industrial manufacturing. Export-ready supply with consistent composition and full certification.',
  },
  overview: {
    badge: 'Product Overview',
    heading: 'High-Quality Aluminum Ingots for Global Industry',
    paragraphs: [
      'RMRP Global Trade supplies premium-grade aluminum ingots to industrial buyers, foundries, die-casting companies, and manufacturers across 25+ countries. Our ingots are produced under controlled conditions to ensure consistent chemical composition, minimal porosity, and superior surface finish.',
      'Available in primary (99.9%) and secondary (99.5%) grades, our aluminum ingots meet international standards including ASTM B179 and ISO 115. Each batch is spectrometrically analyzed and certified, guaranteeing the purity and consistency that industrial processes demand.',
    ],
    highlights: [
      'Consistent purity guaranteed — spectrometric analysis per batch',
      'Low gas content and reduced oxide inclusion for superior casting quality',
      'Custom alloy compositions available for OEM buyer specifications',
      'Export-ready packaging with full documentation for customs clearance',
      'Flexible volumes from container loads to bulk vessel shipments',
    ],
  },
  features: {
    badge: 'Key Features',
    heading: 'Engineered for Industrial Excellence',
    items: [
      {
        title: 'High Purity',
        description: 'Aluminum content from 99.5% to 99.9%, verified by spectrometric analysis. Low impurity levels ensure consistent metallurgical performance in downstream processes.',
      },
      {
        title: 'Excellent Strength',
        description: 'Superior mechanical properties suitable for structural, automotive, and industrial applications. Consistent tensile strength and hardness across every batch.',
      },
      {
        title: 'Corrosion Resistance',
        description: 'Natural oxide layer provides excellent corrosion resistance in diverse environments. Ideal for marine, chemical, and outdoor structural applications.',
      },
      {
        title: 'Consistent Quality',
        description: 'Every production batch undergoes chemical, dimensional, and surface quality inspection. Certificate of Analysis issued with every shipment.',
      },
      {
        title: 'Industrial Applications',
        description: 'Engineered for die casting, extrusion, sand casting, and alloying. Compatible with automated handling systems and precision manufacturing processes.',
      },
      {
        title: 'Export Grade Packaging',
        description: 'Steel-strapped bundles on pallets, moisture-protected for sea freight. Container-optimized loading with full export documentation.',
      },
    ],
  },
  specifications: {
    badge: 'Product Specifications',
    heading: 'Technical Specifications',
    specs: [
      { label: 'Product Type', value: 'Aluminum Ingots — Primary & Secondary' },
      { label: 'Grade', value: 'Primary 99.9% / Secondary 99.5%' },
      { label: 'Purity', value: '99.5% – 99.9% Aluminum' },
      { label: 'Packaging', value: 'Steel-strapped bundles on pallets, 6–25 kg per ingot' },
      { label: 'Supply Capacity', value: '500+ MT per month' },
      { label: 'Origin', value: 'India' },
    ],
  },
  applications: {
    badge: 'Applications',
    heading: 'Industries & Applications Served',
    items: [
      { title: 'Die Casting', description: 'High-pressure and gravity die casting for automotive components, housings, and precision parts requiring consistent melt quality and dimensional stability.' },
      { title: 'Automotive Industry', description: 'Engine blocks, cylinder heads, transmission housings, wheels, and structural body parts for passenger and commercial vehicles.' },
      { title: 'Foundries', description: 'Sand casting and investment casting feedstock for industrial machinery, pump housings, valve bodies, and general engineering castings.' },
      { title: 'Electrical Components', description: 'Bus bars, transformer windings, conductor alloys, heat sinks, and cable sheathing for power transmission and electrical systems.' },
      { title: 'Construction Industry', description: 'Extrusion billets for architectural profiles, window frames, curtain walls, roofing sheets, scaffolding, and structural sections.' },
      { title: 'Engineering Manufacturing', description: 'Machine frames, conveyor components, hydraulic systems, and equipment parts requiring lightweight strength and corrosion resistance.' },
    ],
  },
  quality: {
    badge: 'Quality Assurance',
    heading: 'Rigorous Quality Standards',
    items: [
      'Material Testing — Spectrometric chemical composition analysis performed on every production batch to verify purity and alloy specification',
      'Quality Inspection — Dimensional verification, weight check, and surface quality assessment conducted before loading and dispatch',
      'Consistent Standards — Production conforms to ASTM B179, ISO 115, and international aluminum grading specifications',
      'Export Compliance — Certificate of Analysis (COA) issued with every shipment; third-party inspection (SGS, Bureau Veritas, Intertek) available upon request',
    ],
  },
  packaging: {
    badge: 'Packaging & Logistics',
    heading: 'Export-Ready Packaging & Global Logistics',
    items: [
      'Export Packaging — Ingots bundled with steel strapping on wooden pallets for safe lifting, handling, and container loading',
      'Container Loading — Optimized loading for maximum container utilization; ~20 MT per 20-ft container',
      'Bulk Supply — Vessel shipments available for large-volume buyers with dedicated loading supervision',
      'Worldwide Shipping — Full documentation including Bill of Lading, Packing List, Commercial Invoice, COA, and Certificate of Origin; flexible incoterms (FOB, CIF, CFR, EXW)',
    ],
  },
  whyChoose: {
    badge: 'Why RMRP Global Trade',
    heading: 'Your Trusted Aluminum Ingot Partner',
    items: [
      {
        title: 'Reliable Supply Chain',
        description: 'Established relationships with primary producers and secondary smelters ensure consistent inventory and uninterrupted supply for regular buyers.',
      },
      {
        title: 'Competitive Pricing',
        description: 'Direct access to manufacturing sources and efficient logistics enable us to offer competitive pricing without compromising on quality or delivery timelines.',
      },
      {
        title: 'Export Experience',
        description: 'Years of experience in international trade with successful shipments to 25+ countries. Deep understanding of customs regulations, documentation, and compliance.',
      },
      {
        title: 'Bulk Order Capability',
        description: 'Capacity to handle large-volume orders with 500+ MT per month supply capability. Flexible contracting arrangements for regular buyers.',
      },
      {
        title: 'Timely Delivery',
        description: 'Proven track record of on-time shipments. Dedicated logistics team coordinates loading, shipping, and documentation to meet buyer deadlines.',
      },
    ],
  },
};
