export interface FoodAgroProduct {
  name: string;
  category: 'Processed Food' | 'Agro Products';
  description: string;
  origin: string;
  shelfLife: string;
  packaging: string;
  keyAttributes: string[];
  image: string;
}

export interface Industry {
  title: string;
  description: string;
}

export interface FoodAgroContent {
  hero: { breadcrumbs: { label: string; href?: string }[]; heading: string; subheading: string };
  categories: { badge: string; heading: string; subheading: string; products: FoodAgroProduct[] }[];
  quality: { badge: string; heading: string; items: string[] };
  packaging: { badge: string; heading: string; items: string[] };
  exportCapability: { badge: string; heading: string; description: string; highlights: string[] };
  industries: { badge: string; heading: string; subheading: string; items: Industry[] };
}
