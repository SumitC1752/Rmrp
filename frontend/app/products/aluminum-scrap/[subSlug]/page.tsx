import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getScrapProductBySlug, getAllScrapSlugs } from '@/lib/scrap-data';
import type { ScrapProduct } from '@/lib/scrap-data';
import type { ProductData } from '@/lib/products-data';
import { ProductHero, ProductOverview, ProductSpecs, ProductApplications, ProductQualityPackaging, ProductExportCapability, ProductCta } from '@/components/products/detail';
import { SchemaJsonLd } from '@/components/schema-jsonld';
import { breadcrumbSchema, productSchema } from '@/lib/schema';

type Props = {
  params: Promise<{ subSlug: string }>;
};

export function generateStaticParams() {
  return getAllScrapSlugs().map((subSlug) => ({ subSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const subSlug = (await params).subSlug;
  const product = getScrapProductBySlug(subSlug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
    },
  };
}

function toProductData(sp: ScrapProduct): ProductData {
  return {
    slug: sp.slug,
    name: sp.name,
    category: 'Aluminum Scrap',
    categoryHref: '/products/aluminum-scrap',
    heroSubheading: sp.heroSubheading,
    description: sp.description,
    image: sp.image,
    overviewParagraphs: sp.overviewParagraphs,
    overviewHighlights: sp.overviewHighlights,
    specs: sp.specs,
    applications: sp.applications,
    packagingItems: sp.packagingItems,
    qualityItems: sp.qualityItems,
    exportItems: sp.exportItems,
    metaTitle: sp.metaTitle,
    metaDescription: sp.metaDescription,
    ogTitle: sp.metaTitle,
    ogDescription: sp.metaDescription,
  };
}

export default async function ScrapSubCategoryPage({ params }: Props) {
  const subSlug = (await params).subSlug;
  const scrap = getScrapProductBySlug(subSlug);
  if (!scrap) notFound();

  const product = toProductData(scrap);

  return (
    <>
      <SchemaJsonLd schema={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Aluminum Scrap', url: '/products/aluminum-scrap' },
        { name: product.name, url: `/products/aluminum-scrap/${product.slug}` },
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
