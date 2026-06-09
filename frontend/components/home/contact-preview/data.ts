import type { ContactPreviewContent } from './types';

export const contactContent: ContactPreviewContent = {
  badge: 'Get in Touch',
  heading: 'Let\'s Talk About Your Supply Needs',
  subheading:
    'Our trade desk is ready to assist with product inquiries, pricing, and export requirements.',
  items: [
    {
      label: 'Email',
      value: 'info@rmrpglobaltrade.com',
      href: 'mailto:info@rmrpglobaltrade.com',
    },
    {
      label: 'Phone',
      value: '+91-9922167039',
      href: 'tel:+919922167039',
    },
    {
      label: 'WhatsApp',
      value: 'Chat with our team',
      href: 'https://wa.me/919922167039',
    },
    {
      label: 'Office',
      value: 'Ahilyanagar, Maharashtra',
      href: '#',
    },
  ],
  cta: { label: 'Send an Inquiry', href: '/contact' },
};
