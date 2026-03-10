import type { Metadata } from 'next';

const siteName = 'Lane & Company';
const siteDescription =
  'Lane & Company builds custom software, AI automation, and strategic technology systems for organizations that need measurable results.';
const siteUrl = 'https://cloudkicker.github.io/laneco-website';

const absoluteUrl = (path: string): string => {
  const normalizedPath = path === '/' ? '' : path;
  return `${siteUrl}${normalizedPath}`;
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: [
    'custom software development',
    'ai consulting',
    'fractional cto',
    'web application development',
    'mobile app development',
    'cloud infrastructure',
    'data analytics'
  ],
  openGraph: {
    type: 'website',
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  }
};

export const createPageMetadata = ({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata => {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      siteName
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
};

export const siteInfo = {
  name: siteName,
  description: siteDescription,
  siteUrl,
  phone: '+1 (318) 555-0199',
  email: 'hello@laneandcompany.com'
};
