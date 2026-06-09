export interface CountryGroup {
  region: string;
  countries: string[];
}

export interface ReachStat {
  value: string;
  label: string;
}

export interface ReachContent {
  badge: string;
  heading: string;
  subheading: string;
  groups: CountryGroup[];
  stats: ReachStat[];
  ctaLabel: string;
  ctaHref: string;
}
