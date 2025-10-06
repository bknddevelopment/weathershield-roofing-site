import type { Metadata } from 'next'
import { Inter, Montserrat, Source_Sans_3, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import PromotionBanner from './components/PromotionBanner'

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
  title: 'Emergency Roofer Available NOW | WeatherShield Roofing Myrtle Beach 24/7',
  description: '🚨 ROOF LEAK? Call Now! Weather Shield Roofing - 24 hour roof repair near me. Emergency roofer available now for storm damage repair same day. Urgent roof repair Myrtle Beach available 24/7. Emergency roof tarp service today!',
  keywords: 'roof leak repair today, emergency roofer available now, 24 hour roof repair near me, storm damage repair same day, emergency roof tarp service, urgent roof repair myrtle beach, weathershield roofing, weather shield roofing, emergency roofing myrtle beach, 24/7 roof repair, immediate roof repair, emergency leak repair, same day roofing service, roofing contractors myrtle beach, emergency roofing service',
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
    title: 'Emergency Roofer Available NOW | 24/7 Roof Leak Repair Today',
    description: '🚨 ROOF EMERGENCY? Call Weather Shield Roofing NOW! 24 hour roof repair near me available immediately. Storm damage repair same day. Emergency roof tarp service. Urgent roof repair Myrtle Beach available 24/7/365.',
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
    title: 'Emergency Roofer Available NOW | 24 Hour Roof Repair Near Me',
    description: '🚨 ROOF LEAK EMERGENCY? Weather Shield Roofing responds quickly! 24/7 emergency roof repair, storm damage repair same day. Call NOW for urgent roof repair Myrtle Beach.',
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8XXWKT1X8X"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8XXWKT1X8X');
            `,
          }}
        />

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
                "description": "Emergency roofer available now! Weather Shield Roofing provides 24 hour roof repair near me in Myrtle Beach SC. Roof leak repair today, storm damage repair same day, emergency roof tarp service. Urgent roof repair available 24/7.",
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
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "00:00",
                    "closes": "23:59",
                    "name": "24/7 Emergency Service Available"
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
                        "name": "Emergency Roof Leak Repair Today",
                        "description": "24 hour roof repair near me - Emergency roofer available now 24/7",
                        "availableChannel": {
                          "@type": "ServiceChannel",
                          "serviceUrl": "https://weathershieldroofers.com/services/emergency-roofing",
                          "servicePhone": "+1-843-877-5539",
                          "availableLanguage": ["en", "es"]
                        },
                        "areaServed": "Myrtle Beach, SC",
                        "hoursAvailable": "24/7"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Storm Damage Repair Same Day",
                        "description": "Emergency roof tarp service and urgent storm damage repairs available today"
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
                "description": "Emergency roofer available now! 24 hour roof repair near me. Roof leak repair today, storm damage repair same day. Urgent roof repair Myrtle Beach with emergency roof tarp service.",
                "knowsAbout": ["Emergency Roof Repair", "Roof Leak Repair", "Storm Damage Repair", "24/7 Roofing Service", "Emergency Tarp Service"],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Emergency Roofing Services",
                  "itemListElement": [
                    {
                      "@type": "Service",
                      "name": "24 Hour Roof Repair Near Me",
                      "description": "Emergency roofer available now for urgent repairs"
                    },
                    {
                      "@type": "Service",
                      "name": "Roof Leak Repair Today",
                      "description": "Same day roof leak repair service"
                    },
                    {
                      "@type": "Service",
                      "name": "Emergency Roof Tarp Service",
                      "description": "Immediate roof tarping to prevent water damage"
                    }
                  ]
                },
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
        <PromotionBanner />
        <main id="main-content" role="main" aria-label="Main content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}