import type { Metadata } from 'next';
import { PrivacyContent } from '@/components/privacy';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy Policy of RMRP Global Trade. Learn how we collect, use, and protect your personal information in the course of our international trade operations for aluminum, processed food, and agro commodity exports.',
  ogTitle: 'Privacy Policy | RMRP Global Trade',
  ogDescription:
    'RMRP Global Trade Privacy Policy — information collection, data security, user rights, and compliance for international trade operations.',
  ogImage: '/og-default.svg',
  path: '/privacy',
});

export default function PrivacyPage() {
  return <PrivacyContent />;
}
