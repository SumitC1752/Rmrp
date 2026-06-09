export const IMAGES = {
  // ─── Home ───────────────────────────────────────────────
  hero: '/images/hero.jpg',

  // ─── About ──────────────────────────────────────────────
  founder: '/images/founder.jpg',
  aboutStory: '/images/about-story.jpg',

  // ─── Aluminum Products ──────────────────────────────────
  aluminumIngots: '/images/aluminum-ingots.jpg',
  aluminumScrap: '/images/aluminum-scrap.jpg',

  // ─── Processed Food Products ────────────────────────────
  jaggery: '/images/jaggery.jpg',
  jaggeryPowder: '/images/jaggery-powder.jpg',
  onionPowder: '/images/onion-powder.jpg',
  onionFlakes: '/images/onion-flakes.jpg',
  garlicPowder: '/images/garlic-powder.jpg',
  garlicFlakes: '/images/garlic-flakes.jpg',
  bananaPowder: '/images/banana-powder.jpg',
  tomatoFlakes: '/images/tomato-flakes.jpg',

  // ─── Agro Products ──────────────────────────────────────
  milletFlour: '/images/millet-flour.jpg',
  jowarFlour: '/images/jowar-flour.jpg',
  wheatFlour: '/images/wheat-flour.jpg',
  maizeFlour: '/images/maize-flour.jpg',
  sugar: '/images/sugar.jpg',

  // ─── Products detail slugs ──────────────────────────────
  onion: '/images/onion.jpg',
  garlic: '/images/garlic.jpg',

  // ─── Services & Quality ─────────────────────────────────
  exportLogistics: '/images/export-logistics.jpg',
  qualityAssurance: '/images/quality-assurance.jpg',

  // ─── Global Markets ─────────────────────────────────────
  globalMarkets: '/images/global-markets.jpg',
  worldMap: '/images/world-map.jpg',

  // ─── Contact ────────────────────────────────────────────
  contactBanner: '/images/contact-banner.jpg',
} as const;

export type ImageKey = keyof typeof IMAGES;
