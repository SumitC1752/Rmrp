export interface ContactPreviewContent {
  badge: string;
  heading: string;
  subheading: string;
  items: ContactItem[];
  cta: { label: string; href: string };
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}
