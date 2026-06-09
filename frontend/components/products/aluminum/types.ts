export interface PageContent {
  hero: {
    breadcrumbs: { label: string; href?: string }[];
    heading: string;
    subheading: string;
  };
  overview: {
    badge: string;
    heading: string;
    paragraphs: string[];
    highlights: string[];
  };
  features: {
    badge: string;
    heading: string;
    items: { title: string; description: string }[];
  };
  specifications: {
    badge: string;
    heading: string;
    specs: { label: string; value: string }[];
  };
  applications: {
    badge: string;
    heading: string;
    items: { title: string; description: string }[];
  };
  quality: {
    badge: string;
    heading: string;
    items: string[];
  };
  packaging: {
    badge: string;
    heading: string;
    items: string[];
  };
  whyChoose: {
    badge: string;
    heading: string;
    items: { title: string; description: string }[];
  };
}
