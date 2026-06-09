import dynamic from 'next/dynamic';
import { Hero } from '@/components/home/hero';
import { SchemaJsonLd } from '@/components/schema-jsonld';
import { websiteSchema } from '@/lib/schema';
import { createMetadata, pageSeo } from '@/lib/seo';

const CompanyOverview = dynamic(() => import('@/components/home/company-overview').then((m) => ({ default: m.CompanyOverview })), { ssr: true });
const ProductCategories = dynamic(() => import('@/components/home/product-categories').then((m) => ({ default: m.ProductCategories })), { ssr: true });
const WhyChooseUs = dynamic(() => import('@/components/home/why-choose-us').then((m) => ({ default: m.WhyChooseUs })), { ssr: true });
const ExportProcess = dynamic(() => import('@/components/home/export-process').then((m) => ({ default: m.ExportProcess })), { ssr: true });
const GlobalReach = dynamic(() => import('@/components/home/global-reach').then((m) => ({ default: m.GlobalReach })), { ssr: true });
const IndustriesServed = dynamic(() => import('@/components/home/industries-served').then((m) => ({ default: m.IndustriesServed })), { ssr: true });
const ContactPreview = dynamic(() => import('@/components/home/contact-preview').then((m) => ({ default: m.ContactPreview })), { ssr: true });
const CtaSection = dynamic(() => import('@/components/home/cta-section').then((m) => ({ default: m.CtaSection })), { ssr: true });

export const metadata = createMetadata(pageSeo.home);

export default function Home() {
  return (
    <>
      <SchemaJsonLd schema={websiteSchema()} />
      <Hero />
      <CompanyOverview />
      <ProductCategories />
      <WhyChooseUs />
      <ExportProcess />
      <GlobalReach />
      <IndustriesServed />
      <ContactPreview />
      <CtaSection />
    </>
  );
}
