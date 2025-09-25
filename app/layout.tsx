import type { Metadata } from 'next'
import { Inter, Montserrat, Source_Sans_3, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

// Primary font for body text - clean readability
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
})

// Heading font - conveys strength and professionalism
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['500', '600', '700', '800', '900'],
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: true,
})

// Alternative body font option
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['400', '600', '700'],
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: true,
})

// Impact accent font for bold statements
const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
  weight: '400',
  preload: true,
  fallback: ['Impact', 'Arial Black', 'sans-serif'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'WeatherShield Roofing | #1 Roofing Contractors Myrtle Beach SC | Weather Shield',
  description: 'Weather Shield Roofing - Premier roofing contractors Myrtle Beach trusts. Expert roof replacement Myrtle Beach & commercial roofing services. WeatherShield roofing provides 24/7 emergency storm damage repair. Top-rated roofing companies Myrtle Beach SC with lifetime warranties.',
  keywords: 'weathershield roofing, weather shield roofing, roofing contractors myrtle beach, roofing companies myrtle beach, roof replacement myrtle beach, commercial roofing myrtle beach, roofing myrtle beach sc, roof repair myrtle beach, storm damage repair, emergency roofing service, residential roofing myrtle beach, roofing companies near me, myrtle beach roofing contractor',
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
    languages: {
      'en-US': '/',
      'es': '/es',
    },
  },
  openGraph: {
    title: 'WeatherShield Roofing | Top Roofing Contractors Myrtle Beach SC',
    description: 'Weather Shield Roofing - Leading roofing contractors Myrtle Beach. Professional roof replacement & commercial roofing services. 24/7 emergency storm damage repair. WeatherShield roofing experts serving Myrtle Beach SC.',
    url: 'https://weathershieldroofers.com',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: '/images/logo/weather_shield_roofing_transparent.png',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing - Premier Roofing Contractors Myrtle Beach SC',
      },
      {
        url: '/images/background/roof-replacement-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing - Roof Replacement Services Myrtle Beach',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'United States',
    phoneNumbers: ['+1-843-877-5539'],
    faxNumbers: ['+1-843-877-5540'],
    emails: ['roofing@weathershieldroofers.com'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weather Shield Roofing | Leading Roofing Companies Myrtle Beach | WeatherShield',
    description: 'Weather Shield Roofing - Premier roofing companies Myrtle Beach trusts. WeatherShield roofing experts protect homes from weather in Myrtle Beach. 24/7 emergency service.',
    images: [
      {
        url: '/images/logo/weather_shield_roofing_transparent.png',
        alt: 'Weather Shield Roofing Logo',
      },
    ],
    creator: '@weathershield',
    site: '@weathershield',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon-right.png',
    shortcut: '/favicon-right.png',
    apple: '/favicon-right.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon-right.png',
    },
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
  category: 'Roofing Services',
  classification: 'Business',
  referrer: 'no-referrer-when-downgrade',
  colorScheme: 'light',
  themeColor: '#1e3a8a',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  archives: ['https://weathershieldroofers.com/archive'],
  assets: ['https://weathershieldroofers.com/assets'],
  bookmarks: ['https://weathershieldroofers.com/services'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${sourceSans.variable} ${bebasNeue.variable}`}>
      <head>
        {/* Critical Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preload critical fonts - Montserrat for headers, Inter for body */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          crossOrigin="anonymous"
        />

        {/* Preload critical images */}
        <link
          rel="preload"
          as="image"
          href="/images/background/roof-replacement-services.jpg"
          type="image/jpeg"
        />

        {/* Prefetch other important resources */}
        <link
          rel="prefetch"
          href="/images/logo/weather_shield_roofing_transparent.png"
        />

        {/* Meta tags for performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Additional Meta Tags for SEO */}
        <meta name="geo.region" content="US-SC" />
        <meta name="geo.placename" content="Myrtle Beach" />
        <meta name="geo.position" content="33.6891;-78.8867" />
        <meta name="ICBM" content="33.6891, -78.8867" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Weather Shield Roofing" />
        <meta name="application-name" content="Weather Shield Roofing" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#1e3a8a" />

        {/* Dublin Core Metadata */}
        <meta name="DC.title" content="Weather Shield Roofing - Premier Roofing Contractors Myrtle Beach SC" />
        <meta name="DC.creator" content="Weather Shield Roofing LLC" />
        <meta name="DC.subject" content="Roofing Services, Roof Replacement, Commercial Roofing, Storm Damage Repair" />
        <meta name="DC.description" content="Leading roofing contractors Myrtle Beach SC. Weather Shield Roofing provides expert roof replacement and commercial roofing services." />
        <meta name="DC.publisher" content="Weather Shield Roofing LLC" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.language" content="en-US" />
        <meta name="DC.coverage" content="Myrtle Beach, South Carolina, United States" />
        <meta name="DC.rights" content="Copyright 2024 Weather Shield Roofing LLC. All rights reserved." />
      </head>
      <body className="font-inter antialiased">
        {/* Skip to Main Content Link for Keyboard Navigation */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "RoofingContractor",
                "@id": "https://weathershieldroofers.com/#organization",
                "name": "Weather Shield Roofing",
                "alternateName": "WeatherShield Roofing",
                "description": "Weather Shield Roofing - Premier roofing contractors Myrtle Beach SC. Expert roof replacement, commercial roofing, and storm damage repair services.",
                "image": "https://weathershieldroofers.com/images/logo/weather_shield_roofing_transparent.png",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://weathershieldroofers.com/images/logo/weather_shield_roofing_transparent.png",
                  "width": 600,
                  "height": 400
                },
                "url": "https://weathershieldroofers.com",
                "telephone": "+1-843-877-5539",
                "email": "roofing@weathershieldroofers.com",
                "priceRange": "$$",
                "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing Available"],
                "currenciesAccepted": "USD",
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
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Myrtle Beach",
                    "sameAs": "https://en.wikipedia.org/wiki/Myrtle_Beach,_South_Carolina"
                  },
                  {
                    "@type": "City",
                    "name": "Conway"
                  },
                  {
                    "@type": "City",
                    "name": "Georgetown"
                  },
                  {
                    "@type": "City",
                    "name": "North Myrtle Beach"
                  }
                ],
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "17:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "09:00",
                    "closes": "12:00"
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/weathershieldroofing",
                  "https://www.instagram.com/weathershieldroofing",
                  "https://www.linkedin.com/company/weather-shield-roofing",
                  "https://www.youtube.com/@weathershieldroofing"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Roofing Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Roof Replacement Myrtle Beach",
                        "description": "Complete roof replacement services with lifetime warranties"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Commercial Roofing Myrtle Beach",
                        "description": "Professional commercial roofing for businesses"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Storm Damage Repair",
                        "description": "24/7 emergency storm damage restoration"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Roof Repair Services",
                        "description": "Expert roof repair for all types of damage"
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "327",
                  "bestRating": "5"
                },
                "review": [
                  {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    },
                    "author": {
                      "@type": "Person",
                      "name": "John Smith"
                    },
                    "reviewBody": "Weather Shield Roofing provided excellent roof replacement service. Professional roofing contractors who completed the job on time and on budget."
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://weathershieldroofers.com/#localbusiness",
                "name": "Weather Shield Roofing Myrtle Beach",
                "description": "Leading roofing contractors Myrtle Beach SC specializing in roof replacement and commercial roofing services",
                "url": "https://weathershieldroofers.com",
                "telephone": "+1-843-877-5539",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "215 Ronnie Ct. Unit F",
                  "addressLocality": "Myrtle Beach",
                  "addressRegion": "SC",
                  "postalCode": "29579",
                  "addressCountry": "US"
                }
              }
            ])
          }}
        />
        <Header />
        <main id="main-content" role="main" aria-label="Main content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}