import type { LucideIcon } from 'lucide-react';
import { X } from 'lucide-react';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  hoverColor: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/12JrkiMRaAn/',
    icon: FacebookIcon,
    color: 'text-[#1877F2]',
    hoverColor: 'hover:text-[#1877F2]',
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/RMRPGLOBALTRADE',
    icon: X,
    color: 'text-white',
    hoverColor: 'hover:text-white',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/rmrp-global-trade/',
    icon: LinkedInIcon,
    color: 'text-[#0A66C2]',
    hoverColor: 'hover:text-[#0A66C2]',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rmrpglobaltrade5994?igsh=MWdpamZiNXk5dnYwOA==',
    icon: InstagramIcon,
    color: 'text-[#E4405F]',
    hoverColor: 'hover:text-[#E4405F]',
  },
];

export const socialHandles = {
  facebook: 'https://www.facebook.com/share/12JrkiMRaAn/',
  twitter: 'https://x.com/RMRPGLOBALTRADE',
  linkedin: 'https://www.linkedin.com/company/rmrp-global-trade/',
  instagram: 'https://www.instagram.com/rmrpglobaltrade5994?igsh=MWdpamZiNXk5dnYwOA==',
};
