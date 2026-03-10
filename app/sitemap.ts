import type { MetadataRoute } from 'next';

import { absoluteUrl } from '@/lib/metadata';
import { serviceSlugs } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/services',
    '/about',
    '/contact',
    '/portal',
    '/work',
    '/insights',
    '/privacy',
    '/terms'
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route || '/'),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.7
    })),
    ...serviceSlugs.map((slug) => ({
      url: absoluteUrl(`/services/${slug}`),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }))
  ];
}
