export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface MegaMenuItem {
  title: string;
  href: string;
  description: string;
  image?: string;
}

export interface MegaMenuSection {
  heading: string;
  items: MegaMenuItem[];
}
