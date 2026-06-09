import type { Metadata } from 'next';
import { TermsContent } from '@/components/terms';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Terms & Conditions',
  description:
    'Terms & Conditions of RMRP Global Trade governing quotations, orders, payments, shipping, delivery, and business relationships for aluminum, processed food, and agro commodity exports.',
  ogTitle: 'Terms & Conditions | RMRP Global Trade',
  ogDescription:
    'RMRP Global Trade Terms & Conditions — governing all B2B trade transactions, pricing, shipping, payment terms, and international trade operations.',
  ogImage: '/og-default.svg',
  path: '/terms',
});

export default function TermsPage() {
  return <TermsContent />;
}
