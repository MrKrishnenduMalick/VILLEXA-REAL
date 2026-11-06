import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://aureliaresidences.com'),
  title: 'AURELIA RESIDENCES | Luxury Living & Premium Architectural Sanctuaries',
  description:
    'Futuristic luxury real estate showcasing premier apartments, private villas, and bespoke skyline penthouses with international architectural craftsmanship.',
  keywords: [
    'Aurelia Residences',
    'Luxury Real Estate',
    'Private Villas',
    'Penthouses',
    'Luxury Living',
    'Architectural Masterpieces',
  ],
  authors: [{ name: 'Aurelia Residences Private Office' }],
  openGraph: {
    title: 'AURELIA RESIDENCES — Premium Residences for a Modern Lifestyle',
    description:
      'Explore visionary luxury living with panoramic skyline views, private waterfront villas, and bespoke penthouse sanctuaries.',
    url: 'https://aureliaresidences.com',
    siteName: 'Aurelia Residences',
    images: [
      {
        url: '/images/hero-cinematic.webp',
        width: 1200,
        height: 630,
        alt: 'Aurelia Residences Luxury Villa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#071225',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-midnight text-white min-h-screen flex flex-col selection:bg-gold-champagne/30">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
