import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingPhoneButton from './components/FloatingPhoneButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'Weather Shield Roofing | Top Roofing Companies Myrtle Beach SC | WeatherShield Roofing',
  description: 'Weather Shield Roofing - Leading roofing companies Myrtle Beach trusts for weather protection. Expert roof repair, replacement & storm damage restoration. WeatherShield Roofing provides 24/7 emergency service for weather in Myrtle Beach. Licensed & insured roofing companies near me.',
  keywords: 'weather shield roofing, weathershield roofing, roofing companies myrtle beach, roofing companies near me, weather myrtle beach, weather in myrtle beach, weather, roof repair myrtle beach, roof replacement, storm damage, emergency roof repair, commercial roofing, residential roofing, myrtle beach weather protection',
  authors: [{ name: 'Weather Shield Roofing' }],
  creator: 'Weather Shield Roofing',
  publisher: 'Weather Shield Roofing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://weathershieldroofers.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Weather Shield Roofing | #1 Roofing Companies Myrtle Beach | WeatherShield Roofing',
    description: 'Weather Shield Roofing - Top-rated roofing companies Myrtle Beach relies on for weather protection. Expert weathershield roofing solutions for weather in Myrtle Beach. 24/7 emergency service by trusted roofing companies near me.',
    url: 'https://weathershieldroofers.com',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: process.env.NODE_ENV === 'production' ? '/weathershield-roofing-site/images/logo/weather_shield_roofing_transparent.png' : '/images/logo/weather_shield_roofing_transparent.png',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing - Myrtle Beach, SC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weather Shield Roofing | Leading Roofing Companies Myrtle Beach | WeatherShield',
    description: 'Weather Shield Roofing - Premier roofing companies Myrtle Beach trusts. WeatherShield roofing experts protect homes from weather in Myrtle Beach. 24/7 emergency service.',
    images: [process.env.NODE_ENV === 'production' ? '/weathershield-roofing-site/images/logo/weather_shield_roofing_transparent.png' : '/images/logo/weather_shield_roofing_transparent.png'],
    creator: '@weathershield',
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
  icons: {
    icon: process.env.NODE_ENV === 'production' ? '/weathershield-roofing-site/favicon-right.png' : '/favicon-right.png',
    shortcut: process.env.NODE_ENV === 'production' ? '/weathershield-roofing-site/favicon-right.png' : '/favicon-right.png',
    apple: process.env.NODE_ENV === 'production' ? '/weathershield-roofing-site/favicon-right.png' : '/favicon-right.png',
  },
  manifest: process.env.NODE_ENV === 'production' ? '/weathershield-roofing-site/manifest.json' : '/manifest.json',
  verification: {
    google: 'google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        {/* Critical Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUZiZQ.woff2"
          crossOrigin="anonymous"
        />

        {/* Preload critical images */}
        <link
          rel="preload"
          as="image"
          href={process.env.NODE_ENV === 'production'
            ? '/weathershield-roofing-site/images/background/roof-replacement-services.jpg'
            : '/images/background/roof-replacement-services.jpg'
          }
          type="image/jpeg"
        />

        {/* Prefetch other important resources */}
        <link
          rel="prefetch"
          href={process.env.NODE_ENV === 'production'
            ? '/weathershield-roofing-site/images/logo/weather_shield_roofing_transparent.png'
            : '/images/logo/weather_shield_roofing_transparent.png'
          }
        />

        {/* Meta tags for performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>
      <body className="font-sans antialiased">
        {/* Skip to Main Content Link for Keyboard Navigation */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              "name": "Weather Shield Roofing",
              "image": "https://weathershieldroofers.com/images/logo/weather_shield_roofing_transparent.png",
              "url": "https://weathershieldroofers.com",
              "telephone": "+1-843-493-4963",
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
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "Closed",
                  "closes": "Closed"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/weathershieldroofing",
                "https://www.instagram.com/weathershieldroofing",
                "https://www.linkedin.com/company/weather-shield-roofing"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Roofing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Roof Repair"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Roof Replacement"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Storm Damage Restoration"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Roof Repair"
                    }
                  }
                ]
              }
            })
          }}
        />
        <Header />
        <main id="main-content" role="main" aria-label="Main content">
          {children}
        </main>
        <Footer />
        <FloatingPhoneButton />
      </body>
    </html>
  )
}