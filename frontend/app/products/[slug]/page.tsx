import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getAllSlugs } from '@/lib/products-data';
import { ProductHero, ProductOverview, ProductSpecs, ProductApplications, ProductQualityPackaging, ProductExportCapability, ProductCta } from '@/components/products/detail';
import { SchemaJsonLd } from '@/components/schema-jsonld';
import { breadcrumbSchema, productSchema } from '@/lib/schema';
import { createProductMetadata } from '@/lib/seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };

  return createProductMetadata(product, `/products/${slug}`);
}

export default async function ProductDetailPage({ params }: Props) {
  const slug = (await params).slug;
  const product = getProductBySlug(slug);
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
