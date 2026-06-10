import { IMAGES } from '@/constants';

export interface ScrapProduct {
  slug: string;
  name: string;
  heroSubheading: string;
  description: string;
  image: string;
  overviewParagraphs: string[];
  overviewHighlights: string[];
  specs: { label: string; value: string }[];
  applications: { title: string; description: string }[];
  packagingItems: string[];
  qualityItems: string[];
  exportItems: string[];
  metaTitle: string;
  metaDescription: string;
}

export const scrapProducts: ScrapProduct[] = [
  {
    slug: 'imported-6063',
    name: 'Imported 6063 Aluminum Scrap',
    heroSubheading: 'Clean imported 6063 alloy extrusion scrap for secondary smelters and extruders.',
    description: 'High-grade 6063 aluminum extrusion scrap sourced from international origins, sorted and processed for direct remelting.',
    image: IMAGES.scrapImported6063,
    overviewParagraphs: [
      'We supply clean, sorted 6063 aluminum extrusion scrap imported from global sources, ideal for secondary smelters and extrusion remelters. Our 6063 scrap is visually inspected and graded for purity, ensuring consistent alloy chemistry.',
      'Each batch is processed to remove ferrous and non-metallic contamination, making it ready for direct charging into melting furnaces.',
    ],
    overviewHighlights: ['Imported 6063 alloy scrap', 'Clean extrusion profiles, minimal contamination', 'Ideal for remelting into new billets', 'Consistent alloy composition per batch'],
    specs: [
      { label: 'Alloy', value: 'AA 6063' },
      { label: 'Form', value: 'Extrusion profiles, cut lengths' },
      { label: 'Purity', value: '≥ 98% aluminum content' },
      { label: 'Packaging', value: 'Baled or container-loaded loose' },
      { label: 'Loading', value: '20–22 MT per 20ft container' },
    ],
    applications: [
      { title: 'Billet Remelting', description: 'Clean 6063 extrusion scrap for remelting into new billets for architectural extrusion.' },
      { title: 'Secondary Smelting', description: 'Sorted scrap for secondary smelters producing specification-grade foundry alloys.' },
      { title: 'Profile Extrusion', description: 'Premium remelt stock for extruders requiring consistent 6063 chemistry profiles.' },
    ],
    qualityItems: [
      'Visual inspection for contamination removal',
      'Ferrous material removed before shipping',
      'Consistent alloy chemistry verification',
      'Moisture-free storage and handling',
      'Third-party weight certification available',
    ],
    packagingItems: [
      'Baled or container-loaded as per buyer preference',
      'Shrink-wrapped bundles for moisture protection',
      'Weight Certificate, Packing List, Certificate of Origin',
    ],
    exportItems: [
      'Container-load: 20–22 MT per 20ft container',
      'Bulk vessel loading available for large volumes',
      'Flexible payment terms: LC, TT',
      'Full documentation for customs clearance worldwide',
    ],
    metaTitle: 'Imported 6063 Aluminum Scrap | RMRP Global Trade',
    metaDescription: 'Clean imported 6063 aluminum extrusion scrap for remelting. Sorted, inspected, and container-ready. Export quality. Inquire for pricing and availability.',
  },
  {
    slug: 'soft-shiny-wire',
    name: 'Soft Shiny Aluminum Wire Scrap',
    heroSubheading: 'Bright, clean aluminum wire scrap for conductors and high-purity remelting applications.',
    description: 'Grade A soft shiny aluminum wire scrap, stripped and sorted for high conductivity remelting and cable manufacturing.',
    image: IMAGES.scrapSoftShinyWire,
    overviewParagraphs: [
      'Our soft shiny aluminum wire scrap consists of clean, stripped aluminum wire, free from steel cores, insulation, and other contaminants. This high-grade material yields excellent recovery rates and is suitable for producing electrical-grade aluminum.',
      'The wire is sorted by gauge, baled or bundled for efficient handling, and inspected to ensure it meets international scrap quality standards.',
    ],
    overviewHighlights: ['Grade A soft shiny wire, stripped clean', 'No steel core, insulation, or contamination', 'High recovery rate in remelting', 'Suitable for electrical-grade aluminum'],
    specs: [
      { label: 'Type', value: 'Soft Shiny Aluminum Wire' },
      { label: 'Form', value: 'Stripped, sorted by gauge' },
      { label: 'Purity', value: '≥ 99% aluminum content' },
      { label: 'Packaging', value: 'Bundled or baled' },
      { label: 'Loading', value: '18–20 MT per 20ft container' },
    ],
    applications: [
      { title: 'Cable Manufacturing', description: 'Remelted for producing electrical conductors and aluminum cable products.' },
      { title: 'High-Purity Remelting', description: 'Clean feedstock for applications requiring high-purity aluminum alloys.' },
      { title: 'Secondary Smelting', description: 'Premium scrap grade for secondary smelters targeting specification-grade output.' },
    ],
    qualityItems: [
      'Stripped clean — no insulation or steel cores',
      'Sorted by wire gauge for consistent quality',
      'Moisture content verified for net weight',
      'Visual and metal content inspection per batch',
    ],
    packagingItems: [
      'Bundled or baled for efficient handling',
      'Bale weight: 250–500 kg',
      'Weight Certificate, Packing List, Material Analysis',
    ],
    exportItems: [
      'Container-load: 18–20 MT per 20ft container',
      'Open-top containers for loose loading also available',
      'Flexible payment terms: LC, TT',
    ],
    metaTitle: 'Soft Shiny Aluminum Wire Scrap | RMRP Global Trade',
    metaDescription: 'Grade A soft shiny aluminum wire scrap, stripped and sorted. High recovery, suitable for electrical-grade remelting. Export quality. Inquire now.',
  },
  {
    slug: 'centring-6061',
    name: 'Centring 6061 Aluminum Scrap',
    heroSubheading: 'Machined 6061 aluminum centring scrap from automotive and aerospace production.',
    description: 'Clean 6061 aluminum centring scrap, machined and collected from precision manufacturing processes, ideal for remelting.',
    image: IMAGES.scrapCentring6061,
    overviewParagraphs: [
      'Our centring 6061 aluminum scrap is sourced from automotive and aerospace machining operations, where it is generated as centring waste from 6061 alloy billets and bars. The material is clean, sorted, and processed for efficient remelting.',
      'This alloy-guaranteed scrap provides consistent chemistry for secondary smelters and foundries requiring traceable 6061 feedstock.',
    ],
    overviewHighlights: ['Clean 6061 centring scrap from machining', 'Alloy-guaranteed, traceable source', 'Low contamination, high recovery', 'Sorted and processed for direct remelting'],
    specs: [
      { label: 'Alloy', value: 'AA 6061' },
      { label: 'Form', value: 'Centring slugs, machining waste' },
      { label: 'Purity', value: '≥ 97% aluminum content' },
      { label: 'Packaging', value: 'Bulk bags or container loading' },
      { label: 'Loading', value: '20–22 MT per 20ft container' },
    ],
    applications: [
      { title: 'Automotive Casting', description: 'Remelted for producing automotive-grade castings requiring 6061 chemistry.' },
      { title: 'Aerospace Recycling', description: 'Traceable 6061 scrap for aerospace recycling programs with certified origin.' },
      { title: 'Secondary Smelting', description: 'Consistent alloy scrap for smelters producing specification-grade 6061 alloys.' },
    ],
    qualityItems: [
      'Alloy-guaranteed 6061 with traceability',
      'Low contamination, machined clean surfaces',
      'Moisture-free storage',
      'Composition analysis available per batch',
    ],
    packagingItems: [
      'Bulk bags (jumbo bags) for easy handling',
      'Loose container loading for volume efficiency',
      'Weight Certificate, Composition Analysis, Packing List',
    ],
    exportItems: [
      'Container-load: 20–22 MT per 20ft container',
      'Bulk vessel loading for large volumes',
      'Full documentation for customs clearance',
    ],
    metaTitle: 'Centring 6061 Aluminum Scrap | RMRP Global Trade',
    metaDescription: 'Clean 6061 centring aluminum scrap from machining operations. Alloy-guaranteed, traceable source, high recovery. Export quality. Inquire for pricing.',
  },
  {
    slug: 'auto-parts-casting',
    name: 'Auto Parts Casting Scrap',
    heroSubheading: 'Cast aluminum automotive components scrap for foundries and secondary smelters.',
    description: 'Sorted aluminum scrap from automotive cast components — engine blocks, transmission housings, wheels, and more.',
    image: IMAGES.scrapAutoPartsCasting,
    overviewParagraphs: [
      'We supply aluminum scrap sourced from automotive cast components including engine blocks, transmission housings, wheels, and structural castings. The material is sorted by alloy family, cleaned, and processed for efficient recycling and remelting.',
      'Our auto parts casting scrap is ideal for foundries and secondary smelters producing automotive-grade aluminum alloys with controlled chemistry.',
    ],
    overviewHighlights: ['Automotive cast component scrap', 'Sorted by alloy family for chemistry control', 'Cleaned of ferrous inserts and contaminants', 'High metal recovery in remelting'],
    specs: [
      { label: 'Type', value: 'Auto Parts Casting Scrap' },
      { label: 'Form', value: 'Engine blocks, wheels, housings, cast components' },
      { label: 'Alloy', value: 'Mixed cast alloys (A356, A380, 319, etc.)' },
      { label: 'Packaging', value: 'Shredded or sheared, container loaded' },
      { label: 'Loading', value: '18–22 MT per 20ft container' },
    ],
    applications: [
      { title: 'Automotive Remelting', description: 'Scrap remelted for producing new automotive cast components with controlled chemistry.' },
      { title: 'Die Casting Alloy Production', description: 'Feedstock for secondary smelters producing A380, A356, and other die casting alloys.' },
      { title: 'Construction Castings', description: 'Remelted for general engineering castings in the building and infrastructure sectors.' },
    ],
    qualityItems: [
      'Ferrous materials removed before shipping',
      'Sorted by alloy family for chemistry consistency',
      'Drained and cleaned of fluids',
      'Third-party composition analysis available',
    ],
    packagingItems: [
      'Container loading — shredded or sheared',
      'Open-top containers for heavy scrap grades',
      'Weight Certificate, Packing List, Certificate of Origin',
    ],
    exportItems: [
      'Container-load: 18–22 MT per 20ft container',
      'Bulk vessel loading for large volumes',
      'Flexible payment terms: LC, TT',
    ],
    metaTitle: 'Auto Parts Casting Aluminum Scrap | RMRP Global Trade',
    metaDescription: 'Sorted aluminum scrap from automotive cast components. Engine blocks, wheels, housings. Sorted by alloy, cleaned, export-grade. Inquire for pricing.',
  },
  {
    slug: 'local-sections',
    name: 'Local Aluminum Sections Scrap',
    heroSubheading: 'Mixed aluminum section scrap from local fabrication and construction.',
    description: 'Mixed aluminum profile sections collected from fabrication workshops and construction sites, sorted for efficient recycling.',
    image: IMAGES.scrapLocalSections,
    overviewParagraphs: [
      'Our local aluminum sections scrap consists of mixed profiles, angles, channels, and tubes collected from fabrication workshops, construction sites, and dealership buy-back programs. The material is sorted, cut to manageable lengths, and processed for container loading.',
      'While heterogeneous in alloy, this scrap grade offers excellent value for smelters and foundries with flexible charge recipes.',
    ],
    overviewHighlights: ['Mixed section scrap from local sourcing', 'Profiles, channels, angles, tubes', 'Cut to length for container efficient loading', 'Good value for flexible charge recipes'],
    specs: [
      { label: 'Type', value: 'Mixed Aluminum Sections' },
      { label: 'Form', value: 'Profiles, channels, angles, tubes' },
      { label: 'Alloy', value: 'Mixed 6xxx series primarily' },
      { label: 'Packaging', value: 'Bundled or container loaded' },
      { label: 'Loading', value: '14–18 MT per 20ft container' },
    ],
    applications: [
      { title: 'Secondary Smelting', description: 'Feedstock for smelters with flexible alloy charge recipes and blending capabilities.' },
      { title: 'Foundry Remelting', description: 'General foundry feedstock for producing secondary casting alloys.' },
      { title: 'Deox Alloy Production', description: 'Remelted for deoxidizing agents in the steel industry.' },
    ],
    qualityItems: [
      'Ferrous contamination removed before shipping',
      'Sorted by visual alloy identification where possible',
      'Cut to manageable lengths for container loading',
      'Moisture content verified for net weight billing',
    ],
    packagingItems: [
      'Bundled by profile type or mixed container loading',
      'Cut to length for efficient container packing',
      'Weight Certificate, Packing List, Certificate of Origin',
    ],
    exportItems: [
      'Container-load: 14–18 MT per 20ft container',
      'Open-top containers available for long sections',
      'Flexible payment terms: LC, TT',
    ],
    metaTitle: 'Local Aluminum Sections Scrap | RMRP Global Trade',
    metaDescription: 'Mixed aluminum profile sections scrap from fabrication and construction. Sorted, cut to length, export-grade. Competitive pricing. Inquire today.',
  },
];

export function getScrapProductBySlug(slug: string): ScrapProduct | undefined {
  return scrapProducts.find((p) => p.slug === slug);
}

export function getAllScrapSlugs(): string[] {
  return scrapProducts.map((p) => p.slug);
}
