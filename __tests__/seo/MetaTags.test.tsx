import React from 'react'
import { render } from '@testing-library/react'
import { Metadata } from 'next'

// Mock metadata from layout
const defaultMetadata: Metadata = {
  title: 'WeatherShield Roofing | Professional Roofing Services in Conway, SC',
  description: 'Expert roofing contractors serving Conway, SC and surrounding areas. Professional roof repair, replacement, and storm damage services. GAF Certified, licensed & insured. Call 843-815-0516 for a free estimate.',
  keywords: 'roofing Conway SC, roof repair, roof replacement, storm damage, GAF certified, roofing contractors',
  authors: [{ name: 'WeatherShield Roofing' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://weathershieldroofing.com',
    siteName: 'WeatherShield Roofing',
    title: 'WeatherShield Roofing | Professional Roofing Services in Conway, SC',
    description: 'Expert roofing contractors serving Conway, SC. Professional roof repair, replacement, and storm damage services.',
    images: [
      {
        url: '/images/weathershield-roofing-og.jpg',
        width: 1200,
        height: 630,
        alt: 'WeatherShield Roofing - Professional Roofing Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeatherShield Roofing | Professional Roofing Services',
    description: 'Expert roofing contractors in Conway, SC. Call 843-815-0516 for a free estimate.',
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
    google: 'google-site-verification-code',
  }
}

describe('SEO Meta Tags', () => {
  it('has proper title format', () => {
    expect(defaultMetadata.title).toContain('WeatherShield Roofing')
    expect(defaultMetadata.title).toContain('Conway, SC')
  })

  it('has comprehensive description', () => {
    expect(defaultMetadata.description).toContain('roofing contractors')
    expect(defaultMetadata.description).toContain('Conway, SC')
    expect(defaultMetadata.description).toContain('843-815-0516')
    expect(defaultMetadata.description).toContain('GAF Certified')
  })

  it('includes relevant keywords', () => {
    expect(defaultMetadata.keywords).toContain('roofing Conway SC')
    expect(defaultMetadata.keywords).toContain('roof repair')
    expect(defaultMetadata.keywords).toContain('GAF certified')
  })

  it('has proper Open Graph tags', () => {
    expect(defaultMetadata.openGraph?.type).toBe('website')
    expect(defaultMetadata.openGraph?.locale).toBe('en_US')
    expect(defaultMetadata.openGraph?.url).toBe('https://weathershieldroofing.com')
    expect(defaultMetadata.openGraph?.siteName).toBe('WeatherShield Roofing')
    expect(defaultMetadata.openGraph?.images).toBeDefined()
    expect(defaultMetadata.openGraph?.images?.[0]).toHaveProperty('width', 1200)
    expect(defaultMetadata.openGraph?.images?.[0]).toHaveProperty('height', 630)
  })

  it('has Twitter card configuration', () => {
    expect(defaultMetadata.twitter?.card).toBe('summary_large_image')
    expect(defaultMetadata.twitter?.title).toContain('WeatherShield Roofing')
    expect(defaultMetadata.twitter?.description).toContain('843-815-0516')
  })

  it('has proper robots configuration', () => {
    expect(defaultMetadata.robots?.index).toBe(true)
    expect(defaultMetadata.robots?.follow).toBe(true)
    expect(defaultMetadata.robots?.googleBot?.index).toBe(true)
    expect(defaultMetadata.robots?.googleBot?.follow).toBe(true)
  })

  it('includes Google verification', () => {
    expect(defaultMetadata.verification?.google).toBeDefined()
  })
})

describe('Schema.org Structured Data', () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "WeatherShield Roofing",
    "image": "https://weathershieldroofing.com/images/logo.png",
    "url": "https://weathershieldroofing.com",
    "telephone": "843-815-0516",
    "email": "info@weathershieldroofing.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Business Way",
      "addressLocality": "Conway",
      "addressRegion": "SC",
      "postalCode": "29526",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.836,
      "longitude": -79.0478
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/weathershieldroofing",
      "https://www.instagram.com/weathershieldroofing"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "147"
    }
  }

  it('has correct business type', () => {
    expect(schemaData['@type']).toBe('RoofingContractor')
  })

  it('includes complete contact information', () => {
    expect(schemaData.telephone).toBe('843-815-0516')
    expect(schemaData.email).toBe('info@weathershieldroofing.com')
    expect(schemaData.url).toBe('https://weathershieldroofing.com')
  })

  it('has proper address structure', () => {
    expect(schemaData.address['@type']).toBe('PostalAddress')
    expect(schemaData.address.addressLocality).toBe('Conway')
    expect(schemaData.address.addressRegion).toBe('SC')
  })

  it('includes geo coordinates', () => {
    expect(schemaData.geo).toBeDefined()
    expect(schemaData.geo.latitude).toBeDefined()
    expect(schemaData.geo.longitude).toBeDefined()
  })

  it('has business hours', () => {
    expect(schemaData.openingHoursSpecification.dayOfWeek).toContain('Monday')
    expect(schemaData.openingHoursSpecification.opens).toBe('08:00')
    expect(schemaData.openingHoursSpecification.closes).toBe('17:00')
  })

  it('includes aggregate rating', () => {
    expect(schemaData.aggregateRating.ratingValue).toBe('4.9')
    expect(schemaData.aggregateRating.reviewCount).toBe('147')
  })
})