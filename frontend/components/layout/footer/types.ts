export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  hours: string;
  whatsapp: string;
}
