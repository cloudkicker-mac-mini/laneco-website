import type { ReactNode } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';

import { Footer } from '@/components/layout/Footer';
import { Navigation } from '@/components/layout/Navigation';
import { defaultMetadata } from '@/lib/metadata';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
});

export const metadata = defaultMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-black font-body text-white antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
