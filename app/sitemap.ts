import type { MetadataRoute } from 'next';
import { services } from '@/lib/services';

const siteUrl = 'https://cloudkicker.github.io/laneco-website';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/services',
    '/about',
    '/contact',
    '/portal',
    '/work',
    '/insights',
    '/privacy',
    '/terms'
  ].map((path) => ({
    url: `${siteUrl}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.7
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  return [...staticRoutes, ...serviceRoutes];
}
