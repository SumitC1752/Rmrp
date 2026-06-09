import { QualityHero, QualityCommitment, InspectionProcess, FoodQuality, AluminumQuality, PackagingExport, WhyQualityMatters, QualityCta } from '@/components/quality';
import { SchemaJsonLd } from '@/components/schema-jsonld';
import { webPageSchema } from '@/lib/schema';
import { createMetadata, pageSeo } from '@/lib/seo';

export const metadata = createMetadata(pageSeo.quality);

export default function QualityPage() {
  return (
    <>
      <SchemaJsonLd schema={webPageSchema('Quality Assurance | RMRP Global Trade', pageSeo.quality.description, [
        { name: 'Home', url: '/' },
        { name: 'Quality Assurance', url: '/quality' },
      ])} />
      <QualityHero />
      <QualityCommitment />
      <InspectionProcess />
      <FoodQuality />
      <AluminumQuality />
      <PackagingExport />
      <WhyQualityMatters />
      <QualityCta />
    </>
  );
}
