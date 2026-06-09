import { IMAGES } from '@/constants';
import type { FoodAgroContent } from './types';

export const pageContent: FoodAgroContent = {
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Food & Agro Products' },
    ],
    heading: 'Food & Agro Products',
    subheading:
      'Premium processed food ingredients and bulk agro commodities for global buyers — manufactured under hygienic conditions and sourced from trusted producers.',
  },
  categories: [
    {
      badge: 'Processed Food',
      heading: 'Processed Food Products',
      subheading: 'High-quality powdered, flaked, and granulated food products for food processing, FMCG, and retail industries worldwide.',
      products: [
        {
          name: 'Jaggery',
          category: 'Processed Food', description: 'Traditional unrefined cane sugar in solid block form. Rich mineral content, natural sweetness, and authentic flavor profile for food manufacturing and direct consumption.',
          origin: 'India', shelfLife: '24 months', packaging: '5 kg, 10 kg, 25 kg cartons', image: IMAGES.jaggery,
          keyAttributes: ['Natural & unrefined', 'Rich mineral content', 'Block form', 'Export-grade packaging'],
        },
        {
          name: 'Jaggery Powder', category: 'Processed Food',
          description: 'Free-flowing powdered jaggery with consistent granulation. Easy to handle, dissolve, and incorporate into industrial food processing and bakery applications.',
          origin: 'India', shelfLife: '24 months', packaging: '5 kg, 10 kg, 25 kg cartons', image: IMAGES.jaggeryPowder,
          keyAttributes: ['Free-flowing powder', 'Consistent granulation', 'Quick dissolution', 'Bulk supply ready'],
        },
        {
          name: 'Onion Powder', category: 'Processed Food',
          description: 'Dehydrated onion powder with strong aroma and flavor retention. Uniform particle size for seasoning blends, soup mixes, sauces, and marinades.',
          origin: 'India', shelfLife: '18 months', packaging: '10 kg, 20 kg, 25 kg multi-layer bags', image: IMAGES.onionPowder,
          keyAttributes: ['Strong flavor retention', 'Uniform particle size', 'Moisture < 6%', 'No artificial additives'],
        },
        {
          name: 'Onion Flakes', category: 'Processed Food',
          description: 'Dehydrated onion flakes in various granulations — kibbled, minced, and flaked. Ideal for rehydration in soups, stews, curries, and ready meals.',
          origin: 'India', shelfLife: '18 months', packaging: '10 kg, 20 kg, 25 kg multi-layer bags', image: IMAGES.onionFlakes,
          keyAttributes: ['Multiple granulations', 'Quick rehydration', 'Natural color retention', 'Custom sizing available'],
        },
        {
          name: 'Garlic Powder', category: 'Processed Food',
          description: 'Pure dehydrated garlic powder with high allicin retention. Fine mesh for uniform dispersion in dry seasonings, spice blends, and industrial food formulas.',
          origin: 'India', shelfLife: '18 months', packaging: '10 kg, 20 kg, 25 kg multi-layer bags', image: IMAGES.garlicPowder,
          keyAttributes: ['High allicin retention', 'Fine mesh 80–100', 'Pure no fillers', 'Microbiologically tested'],
        },
        {
          name: 'Garlic Flakes', category: 'Processed Food',
          description: 'Dehydrated garlic flakes and granules. Quick rehydration with retained flavor intensity. Used in processed meats, sauces, marinades, and dry soup mixes.',
          origin: 'India', shelfLife: '18 months', packaging: '10 kg, 20 kg, 25 kg multi-layer bags', image: IMAGES.garlicFlakes,
          keyAttributes: ['Quick rehydration', 'Intense flavor', 'Uniform cut size', 'Low microbial count'],
        },
        {
          name: 'Banana Powder', category: 'Processed Food',
          description: 'Spray-dried green banana powder rich in resistant starch and dietary fiber. Natural prebiotic for nutritional supplements, baby food, and gluten-free formulations.',
          origin: 'India', shelfLife: '24 months', packaging: '10 kg, 20 kg, 25 kg multi-layer bags with inner liner', image: IMAGES.bananaPowder,
          keyAttributes: ['Spray-dried', 'High resistant starch', 'Gluten-free', 'Clean label ingredient'],
        },
        {
          name: 'Tomato Flakes', category: 'Processed Food',
          description: 'Dehydrated tomato flakes with vibrant color and concentrated tomato flavor. Quick rehydration for soups, sauces, pizza toppings, and instant meals.',
          origin: 'India', shelfLife: '18 months', packaging: '10 kg, 15 kg, 20 kg multi-layer bags', image: IMAGES.tomatoFlakes,
          keyAttributes: ['Vibrant red color', 'Concentrated flavor', 'Quick rehydration', 'No preservatives'],
        },
      ],
    },
    {
      badge: 'Agro Products',
      heading: 'Agro Commodities & Flours',
      subheading: 'Bulk agricultural commodities and traditional grain flours sourced from trusted growing regions, processed to international standards.',
      products: [
        {
          name: 'Millet (Bajra) Flour', category: 'Agro Products',
          description: 'Stone-ground pearl millet flour with high fiber, protein, and mineral content. Gluten-free, traditional staple for roti, porridge, and health foods.',
          origin: 'India', shelfLife: '12 months', packaging: '5 kg, 10 kg, 25 kg multi-layer bags', image: IMAGES.milletFlour,
          keyAttributes: ['Stone-ground', 'High fiber & protein', 'Gluten-free', 'Traditional milling'],
        },
        {
          name: 'Jowar (Sorghum) Flour', category: 'Agro Products',
          description: 'Finely milled sorghum flour with mild flavor and excellent nutritional profile. Gluten-free alternative for baking, flatbreads, and gluten-free blends.',
          origin: 'India', shelfLife: '12 months', packaging: '5 kg, 10 kg, 25 kg multi-layer bags',
          keyAttributes: ['Fine milled texture', 'Mild flavor profile', 'Gluten-free', 'Versatile use'], image: IMAGES.jowarFlour,
        },
        {
          name: 'Wheat Flour', category: 'Agro Products',
          description: 'Premium wheat flour milled from high-protein Indian wheat. Consistent gluten development for commercial bakeries, chapati manufacturing, and pasta production.',
          origin: 'India', shelfLife: '12 months', packaging: '5 kg, 10 kg, 25 kg, 50 kg bags',
          keyAttributes: ['High protein content', 'Consistent gluten', 'Atta & maida grades', 'Bulk supply'], image: IMAGES.wheatFlour,
        },
        {
          name: 'Maize (Corn) Flour', category: 'Agro Products',
          description: 'Fine-ground maize flour with natural sweetness and golden color. Used in tortillas, snacks, breakfast cereals, thickening, and gluten-free baking.',
          origin: 'India', shelfLife: '12 months', packaging: '5 kg, 10 kg, 25 kg multi-layer bags',
          keyAttributes: ['Natural golden color', 'Fine grind', 'Gluten-free', 'Clean taste'], image: IMAGES.maizeFlour,
        },
        {
          name: 'Sugar (ICUMSA 45)', category: 'Agro Products',
          description: 'Premium refined white sugar meeting ICUMSA 45 standards. Bright white crystals with consistent granulation for FMCG, confectionery, beverage, and pharmaceutical applications.',
          origin: 'India', shelfLife: '36 months', packaging: '50 kg PP bags, 1 MT jumbo bags, bulk container liners',
          keyAttributes: ['ICUMSA 45 certified', 'Bright white crystals', 'Consistent granulation', 'Bulk vessel capable'], image: IMAGES.sugar,
        },
      ],
    },
  ],
  quality: {
    badge: 'Quality Assurance',
    heading: 'Stringent Quality Controls — Farm to Shipment',
    items: [
      'Raw material inspection at farm and supplier level before acceptance into processing',
      'In-process quality checks during dehydration, milling, and packaging operations',
      'Finished product analysis for moisture content, particle size, purity, and microbiological safety',
      'Metal detection and foreign matter removal at every packaging line',
      'Shelf-life testing under accelerated and real-time storage conditions',
      'Third-party lab testing and certification (SGS, Bureau Veritas) available on request',
      'Full batch traceability from farm origin to final shipment with retained samples',
      'HACCP and GMP aligned processing protocols across all facilities',
    ],
  },
  packaging: {
    badge: 'Packaging Options',
    heading: 'Flexible Export-Grade Packaging Solutions',
    items: [
      'Multi-layer paper bags with inner polyethylene liner for moisture and oxygen barrier',
      'Vacuum-sealed packaging for oxygen-sensitive products like banana powder',
      'Food-grade polypropylene bags with customized print and buyer branding',
      'Flexible pack sizes: 5 kg retail, 10 kg, 20 kg, 25 kg industrial, 1 MT jumbo bags',
      'Pallets shrink-wrapped and strapped for container loading and sea freight',
      'Fumigation certificate and phytosanitary certification provided as required',
      'Private labeling and retail-ready packaging for supermarket and distribution channels',
      'Custom pack sizes and blend formulations available for OEM buyers',
    ],
  },
  exportCapability: {
    badge: 'Export Capability',
    heading: 'Global Export Infrastructure & Expertise',
    description:
      'With years of experience in international food and commodity trade, we have the systems, partnerships, and regulatory knowledge to deliver your orders reliably from documentation to destination.',
    highlights: [
      'Container-load quantities (20–26 MT per 20-ft container depending on product density)',
      'LCL (Less than Container Load) options available for trial orders and smaller volumes',
      'Complete export documentation: Packing List, Commercial Invoice, COO, Health Certificate, Phytosanitary Certificate',
      'Flexible incoterms: FOB, CIF, CFR, EXW, DAP structured to buyer preference',
      'Established freight partnerships ensuring competitive sea and air freight rates',
      'Flexible payment terms: LC (Sight/Usance), TT, DP with negotiable structures',
      'Proven track record of smooth customs clearance across 25+ countries',
      'Dedicated export documentation team ensuring regulatory compliance for every destination',
    ],
  },
  industries: {
    badge: 'Industries Served',
    heading: 'Who We Supply',
    subheading: 'Our food and agro products serve a wide range of industries across global markets.',
    items: [
      { title: 'Food Processing Companies', description: 'Bulk ingredients for soup, sauce, seasoning, snack, and ready-meal manufacturers requiring consistent quality and reliable supply.' },
      { title: 'Bakery & Confectionery', description: 'Flours, sugars, and dehydrated ingredients for commercial bakeries, biscuit manufacturers, and confectionery producers worldwide.' },
      { title: 'Beverage Industry', description: 'Sugar and natural ingredients for soft drink, juice, and health beverage manufacturers requiring ICUMSA-certified raw materials.' },
      { title: 'FMCG & Retail Brands', description: 'Private-labeled and retail-ready packaged products for supermarket chains, distributors, and consumer brands.' },
      { title: 'Nutraceutical & Health Food', description: 'Nutritional ingredients including banana powder (resistant starch) and millet flours for supplement and health food companies.' },
      { title: 'Horeca & Food Service', description: 'Bulk dehydrated ingredients for hotels, restaurants, catering companies, and institutional food service operators.' },
      { title: 'Pharmaceutical & Industrial', description: 'Sugar and specialty flours for pharmaceutical excipient manufacturing and industrial food ingredient applications.' },
      { title: 'Export & Trading Companies', description: 'Reliable sourcing partner for co-packers, consolidators, and trading companies serving multiple international markets.' },
    ],
  },
};
