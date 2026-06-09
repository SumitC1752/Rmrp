import { ProductsHero } from '@/components/products/hero';
import { CategoryGrid } from '@/components/products/category-grid';
import { FeaturedProducts } from '@/components/products/featured';
import ProductsCta from '@/components/products/cta';
import { SchemaJsonLd } from '@/components/schema-jsonld';
import { webPageSchema } from '@/lib/schema';
import { createMetadata, pageSeo } from '@/lib/seo';

export const metadata = createMetadata(pageSeo.products);

export default function ProductsPage() {
  return (
    <>
      <SchemaJsonLd schema={webPageSchema('Products | RMRP Global Trade', pageSeo.products.description, [
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
      ])} />
      <ProductsHero />
      <CategoryGrid />
      <FeaturedProducts />
      <ProductsCta />
    </>
  );
}
