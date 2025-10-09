import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamic import for client component functionality
const FreeInspectionForm = dynamic(() => import('../components/FreeInspectionForm'), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="h-96 bg-gray-100 animate-pulse rounded-2xl" />
      </div>
    </div>
  ),
  ssr: false
});

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Free Roof Inspection Myrtle Beach | $99 Value - No Obligation',
  description: 'Get a FREE comprehensive 21-point roof inspection in Myrtle Beach. Normally $99, now completely free. Includes detailed report with photos. Schedule today!',
  keywords: 'free roof inspection myrtle beach, $99 roof inspection special near me, roof inspection cost myrtle beach, free roofing estimate south carolina, no obligation roof inspection, emergency roof inspection myrtle beach, affordable roofing contractors myrtle beach, cheap roof repair near me',
  openGraph: {
    title: 'FREE Roof Inspection - $99 Value | WeatherShield Roofing',
    description: 'Limited time offer: Get a comprehensive 21-point roof inspection absolutely FREE. No obligation, no pressure.',
    url: 'https://weathershieldroofers.com/free-inspection',
    siteName: 'WeatherShield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/free-inspection-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Roof Inspection - WeatherShield Roofing'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FREE Roof Inspection - $99 Value | WeatherShield Roofing',
    description: 'Get a comprehensive 21-point roof inspection absolutely FREE in Myrtle Beach',
    images: ['https://weathershieldroofers.com/images/free-inspection-hero.jpg']
  },
  alternates: {
    canonical: 'https://weathershieldroofers.com/free-inspection'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

// Schema markup for the offer
const inspectionOfferSchema = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  '@id': 'https://weathershieldroofers.com/free-inspection#offer',
  name: 'Free 21-Point Roof Inspection',
  description: 'Comprehensive roof inspection with detailed report and photos. Normally $99, now completely free for a limited time.',
  url: 'https://weathershieldroofers.com/free-inspection',
  priceCurrency: 'USD',
  price: '0',
  priceValidUntil: '2025-12-31',
  availability: 'https://schema.org/InStock',
  seller: {
    '@type': 'RoofingContractor',
    name: 'WeatherShield Roofing',
    telephone: '+1-843-877-5539',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main St',
      addressLocality: 'Myrtle Beach',
      addressRegion: 'SC',
      postalCode: '29577',
      addressCountry: 'US'
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '543'
    }
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Myrtle Beach',
      '@id': 'https://www.wikidata.org/wiki/Q49233'
    },
    {
      '@type': 'City',
      name: 'North Myrtle Beach'
    },
    {
      '@type': 'City',
      name: 'Conway'
    },
    {
      '@type': 'City',
      name: 'Socastee'
    }
  ],
  validFrom: '2025-01-01',
  eligibleRegion: {
    '@type': 'Place',
    name: 'Myrtle Beach, SC and surrounding areas within 30 miles'
  },
  itemOffered: {
    '@type': 'Service',
    name: '21-Point Roof Inspection',
    description: 'Comprehensive roof inspection including shingles, flashing, gutters, ventilation, and structural assessment',
    provider: {
      '@type': 'RoofingContractor',
      name: 'WeatherShield Roofing'
    }
  }
};

// Service schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://weathershieldroofers.com/free-inspection#service',
  name: 'Professional Roof Inspection Service',
  serviceType: 'Roof Inspection',
  provider: {
    '@type': 'RoofingContractor',
    name: 'WeatherShield Roofing',
    '@id': 'https://weathershieldroofers.com/#organization'
  },
  description: '21-point comprehensive roof inspection with detailed photo documentation and repair recommendations',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  areaServed: {
    '@type': 'State',
    name: 'South Carolina'
  }
};

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the free roof inspection really free with no obligations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Our 21-point roof inspection is completely free with no obligations or hidden fees. We provide a detailed report whether you choose to work with us or not. This $99 value inspection is our way of serving the Myrtle Beach community.'
      }
    },
    {
      '@type': 'Question',
      name: 'What does the 21-point roof inspection include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our comprehensive inspection covers: shingle condition, flashing integrity, gutter system, ventilation, decking condition, chimney sealing, skylight assessment, and 14 other critical points. You receive a detailed report with photos and recommendations.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does the free roof inspection take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The inspection typically takes 30-45 minutes. Our certified inspector will thoroughly examine your roof, take photos, and provide you with a detailed report on-site or within 24 hours.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do I need to be home for the roof inspection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While not required, we recommend being present so our inspector can discuss findings with you immediately. If you cannot be present, we can perform the inspection and send you a detailed digital report with photos.'
      }
    },
    {
      '@type': 'Question',
      name: 'How soon can you schedule my free inspection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer same-day and next-day inspections for most areas in Myrtle Beach. Emergency inspections are available 24/7. Call (843) 877-5539 to schedule your free inspection today.'
      }
    }
  ]
};

export default function FreeInspectionPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(inspectionOfferSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Content */}
      <FreeInspectionForm />
    </>
  );
}