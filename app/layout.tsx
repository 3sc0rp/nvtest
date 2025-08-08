import type { Metadata } from 'next';
import { Marcellus, Inter, Noto_Naskh_Arabic } from 'next/font/google';
import './globals.css';
import { LangProvider } from '@/providers/LangProvider';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marcellus',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-naskh',
});

export const metadata: Metadata = {
  title: 'Nature Village - A Taste of Kurdistan',
  description: 'Experience authentic Kurdish cuisine at Nature Village. Traditional dishes, warm hospitality, and the flavors of Kurdistan in every bite.',
  keywords: 'Kurdish restaurant, Middle Eastern food, kebab, dolma, falafel, authentic cuisine',
  authors: [{ name: 'Nature Village Restaurant' }],
  creator: 'Nature Village Restaurant',
  publisher: 'Nature Village Restaurant',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://naturevillage.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nature Village - A Taste of Kurdistan',
    description: 'Experience authentic Kurdish cuisine at Nature Village. Traditional dishes, warm hospitality, and the flavors of Kurdistan in every bite.',
    url: 'https://naturevillage.com',
    siteName: 'Nature Village',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nature Village Kurdish Restaurant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nature Village - A Taste of Kurdistan',
    description: 'Experience authentic Kurdish cuisine at Nature Village.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#b5543a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Nature Village",
              "description": "Authentic Kurdish restaurant serving traditional dishes",
              "url": "https://naturevillage.com",
              "telephone": "+1-555-0123",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Kurdish Street",
                "addressLocality": "City",
                "addressRegion": "State",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.7128,
                "longitude": -74.0060
              },
              "openingHours": [
                "Mo-Su 11:00-22:00"
              ],
              "servesCuisine": ["Kurdish", "Middle Eastern"],
              "priceRange": "$$",
              "image": "https://naturevillage.com/images/restaurant.jpg",
              "menu": "https://naturevillage.com/menu",
              "hasMenu": {
                "@type": "Menu",
                "url": "https://naturevillage.com/menu"
              }
            })
          }}
        />
      </head>
      <body className={`${marcellus.variable} ${inter.variable} ${notoNaskh.variable}`}>
        <LangProvider>
          <div className="min-h-screen flex flex-col">
            <Nav />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
