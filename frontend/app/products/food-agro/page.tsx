import { FoodAgroHero, ProductGrid, QualityPackaging, ExportCapability, IndustriesServed, FoodAgroCta } from '@/components/products/food-agro';
import { SchemaJsonLd } from '@/components/schema-jsonld';
import { webPageSchema } from '@/lib/schema';
import { createMetadata, pageSeo } from '@/lib/seo';

export const metadata = createMetadata(pageSeo.foodAgro);

export default function FoodAgroPage() {
  return (
    <>
      <SchemaJsonLd schema={webPageSchema('Food & Agro Products | RMRP Global Trade', pageSeo.foodAgro.description, [
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Food & Agro Products', url: '/products/food-agro' },
      ])} />
      <FoodAgroHero />
      <ProductGrid />
      <QualityPackaging />
      <ExportCapability />
      <IndustriesServed />
      <FoodAgroCta />
    </>
  );
}
