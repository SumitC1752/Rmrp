export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDetail {
  slug: string;
  category: 'Processed Food' | 'Agro Products' | 'Aluminum Products';
  name: string;
  subtitle: string;
  heroHeading: string;
  heroSubheading: string;
  overview: { badge: string; heading: string; paragraphs: string[]; highlights: string[] };
  specs: ProductSpec[];
  applications: { title: string; description: string }[];
  qualityItems: string[];
  packagingItems: string[];
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
}
