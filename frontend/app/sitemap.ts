import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';
import { getAllSlugs } from '@/lib/products-data';

export const dynamic = 'force-static';

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: ChangeFreq;
  priority: number;
};

const BASE = siteConfig.url;
const TODAY = new Date().toISOString().split('T')[0];

function entry(path: string, priority: number, freq: ChangeFreq): SitemapEntry {
  return {
    url: `${BASE}${path}`,
    lastModified: TODAY,
    changeFrequency: freq,
    priority,
  };
}

const staticRoutes: SitemapEntry[] = [
  entry('/', 1.0, 'weekly'),
  entry('/about', 0.8, 'monthly'),
  entry('/products', 0.9, 'weekly'),
  entry('/products/aluminum-ingots', 0.8, 'monthly'),
  entry('/products/food-agro', 0.8, 'monthly'),
  entry('/services', 0.7, 'monthly'),
  entry('/export-services', 0.7, 'monthly'),
  entry('/global-markets', 0.7, 'monthly'),
  entry('/quality', 0.7, 'monthly'),
  entry('/contact', 0.6, 'monthly'),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes: SitemapEntry[] = getAllSlugs().map((slug) => ({
    url: `${BASE}/products/${slug}`,
    lastModified: TODAY,
    changeFrequency: 'monthly' as ChangeFreq,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
