import type { Metadata } from 'next';
import { getProductBySlug } from '@/lib/products-data';
import { ProductHero, ProductOverview, ProductSpecs, ProductApplications, ProductQualityPackaging, ProductExportCapability, ProductCta } from '@/components/products/detail';
import { SchemaJsonLd } from '@/components/schema-jsonld';
import { breadcrumbSchema, productSchema } from '@/lib/schema';
import { createProductMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

const SLUG = 'aluminum-scrap';

export async function generateMetadata(): Promise<Metadata> {
  const product = getProductBySlug(SLUG);
  if (!product) return { title: 'Product Not Found' };
  return createProductMetadata(product, `/products/${SLUG}`);
}

export default function AluminumScrapPage() {
  const product = getProductBySlug(SLUG);
  if (!product) notFound();

  return (
    <>
      <SchemaJsonLd schema={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: product.name, url: `/products/${product.slug}` },
      ])} />
      <SchemaJsonLd schema={productSchema({
        name: product.name,
        description: product.description,
        category: product.category,
      })} />
      <ProductHero product={product} />
      <ProductOverview product={product} />
      <ProductSpecs product={product} />
      <ProductApplications product={product} />
      <ProductQualityPackaging product={product} />
      <ProductExportCapability product={product} />
      <ProductCta product={product} />
    </>
  );
}
