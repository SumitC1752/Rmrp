import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

export const dynamic = 'force-static';

const disallowPaths = [
  '/api/',
  '/admin/',
  '/_next/',
  '/internal/',
  '/temp/',
  '/draft/',
  '/preview/',
  '/*.json$',
  '/*.map$',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowPaths,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
