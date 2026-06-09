export interface StatItem {
  value: string;
  label: string;
}

export interface HeroContent {
  badge: string;
  headline: string[];
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: StatItem[];
  trustItems: string[];
}
