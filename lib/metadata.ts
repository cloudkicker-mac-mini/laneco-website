import type { Metadata } from 'next';

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

const SITE_NAME = 'Lane & Company';
const SITE_URL = 'https://www.laneco.dev';
const DEFAULT_TITLE = 'Lane & Company | Custom Software, AI Integration, and Strategic Technology Leadership';
const DEFAULT_DESCRIPTION =
  'Lane & Company helps teams eliminate manual work with custom software, practical AI integration, and principal-led technology strategy.';

export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

export function getSiteOrigin(): string {
  return `${SITE_URL}${getBasePath()}`;
}

export function absoluteUrl(path = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${getSiteOrigin()}${normalized === '/' ? '' : normalized}`;
}

export function buildMetadata({ title, description, path = '/' }: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const image = absoluteUrl('/logo-white.png');

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} logo`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(getSiteOrigin()),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'custom software development',
    'AI integration',
    'fractional CTO',
    'web applications',
    'technology strategy'
  ],
  openGraph: {
    type: 'website',
    url: absoluteUrl('/'),
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: absoluteUrl('/logo-white.png'),
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} logo`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [absoluteUrl('/logo-white.png')]
  },
  icons: {
    icon: `${getBasePath()}/favicon.png`
  }
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/logo-white.png'),
    telephone: '+1-210-712-6129',
    email: 'hello@laneandcompany.com',
    areaServed: 'US',
    sameAs: []
  };
}

export function serviceSchema(params: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/')
    },
    serviceType: params.name,
    url: absoluteUrl(`/services/${params.slug}`)
  };
}

export const metadataDefaults = {
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
  defaultTitle: DEFAULT_TITLE,
  defaultDescription: DEFAULT_DESCRIPTION
};
