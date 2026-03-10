import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import { defaultMetadata, siteInfo } from '@/lib/metadata';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['500', '600', '700', '800']
});
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = defaultMetadata;

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteInfo.name,
  url: siteInfo.siteUrl,
  telephone: siteInfo.phone,
  email: siteInfo.email,
  description: siteInfo.description
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteInfo.name,
  url: siteInfo.siteUrl,
  description: siteInfo.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetBrainsMono.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </body>
    </html>
  );
}
