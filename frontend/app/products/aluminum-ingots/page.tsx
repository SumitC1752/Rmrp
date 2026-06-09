import { AluminumHero, AluminumOverview, AluminumProducts, Applications, QualityPackaging, WhyChoose, AluminumCta } from '@/components/products/aluminum';
import { SchemaJsonLd } from '@/components/schema-jsonld';
import { webPageSchema } from '@/lib/schema';
import { createMetadata, pageSeo } from '@/lib/seo';

export const metadata = createMetadata(pageSeo.aluminum);

export default function AluminumIngotsPage() {
  return (
    <>
      <SchemaJsonLd schema={webPageSchema('Aluminum Products | RMRP Global Trade', pageSeo.aluminum.description, [
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Aluminum Ingots & Scrap', url: '/products/aluminum-ingots' },
      ])} />
      <AluminumHero />
      <AluminumOverview />
      <AluminumProducts />
      <Applications />
      <QualityPackaging />
      <WhyChoose />
      <AluminumCta />
    </>
  );
}
