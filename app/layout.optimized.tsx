import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

// Primary font for body text - only load necessary weights
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '600', '700'],
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
  adjustFontFallback: true,
})

// Heading font - only load necessary weights
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['600', '700', '800'],
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'Emergency Roofer Available NOW | WeatherShield Roofing Myrtle Beach 24/7',
  description: '🚨 ROOF LEAK? Call Now! Weather Shield Roofing - 24 hour roof repair near me. Emergency roofer available now for storm damage repair same day. Urgent roof repair Myrtle Beach with 2-hour response. Emergency roof tarp service today!',
  keywords: 'roof leak repair today, emergency roofer available now, 24 hour roof repair near me, storm damage repair same day, emergency roof tarp service, urgent roof repair myrtle beach',
  metadataBase: new URL('https://weathershieldroofers.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Emergency Roofer Available NOW | 24/7 Roof Leak Repair Today',
    description: '🚨 ROOF EMERGENCY? Call Weather Shield Roofing NOW! 24 hour roof repair near me with 2-hour response.',
    url: 'https://weathershieldroofers.com',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: '/images/logo/weather_shield_roofing_transparent.png',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing - Premier Roofing Contractors Myrtle Beach SC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Roofer Available NOW | 24 Hour Roof Repair Near Me',
    description: '🚨 ROOF LEAK EMERGENCY? Weather Shield Roofing responds in 2 hours!',
    images: ['/images/logo/weather_shield_roofing_transparent.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon-right.png',
    shortcut: '/favicon-right.png',
    apple: '/favicon-right.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#1e3a8a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Critical Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Preload only critical fonts */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2"
          crossOrigin="anonymous"
        />

        {/* Critical inline CSS for preventing layout shift */}
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
            margin: 0;
            padding: 0;
            min-height: 100vh;
          }
          .font-montserrat {
            font-family: var(--font-montserrat), system-ui, -apple-system, sans-serif;
          }
          /* Prevent CLS from header */
          header {
            height: 80px;
          }
          @media (max-width: 768px) {
            header {
              height: 64px;
            }
          }
          /* Critical animations */
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: .5; }
          }
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        ` }} />

        {/* Meta tags for performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="US-SC" />
        <meta name="geo.placename" content="Myrtle Beach" />
        <meta name="geo.position" content="33.6891;-78.8867" />

        {/* Optimized JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              "@id": "https://weathershieldroofers.com/#organization",
              "name": "Weather Shield Roofing",
              "description": "Emergency roofer available now! 24 hour roof repair near me in Myrtle Beach SC.",
              "image": "https://weathershieldroofers.com/images/logo/weather_shield_roofing_transparent.png",
              "url": "https://weathershieldroofers.com",
              "telephone": "+1-843-877-5539",
              "email": "roofing@weathershieldroofers.com",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "215 Ronnie Ct. Unit F",
                "addressLocality": "Myrtle Beach",
                "addressRegion": "SC",
                "postalCode": "29579",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.6891,
                "longitude": -78.8867
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59",
                  "name": "24/7 Emergency Service"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "327"
              }
            })
          }}
        />
      </head>
      <body className="font-inter antialiased">
        {/* Skip to Main Content Link */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main" aria-label="Main content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}