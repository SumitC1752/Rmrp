export interface Strength {
  title: string;
  description: string;
}

export interface CompanyContent {
  badge: string;
  heading: string;
  paragraphs: string[];
  strengths: Strength[];
  cta: { label: string; href: string };
}
