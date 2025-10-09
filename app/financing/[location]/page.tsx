import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocationSlugs, type LocationData } from '@/app/lib/location-data';
import LocationHero from './components/LocationHero';
import LocationTrustSignals from './components/LocationTrustSignals';
import LocationFAQs from './components/LocationFAQs';
import LocationBenefits from './components/LocationBenefits';

// Generate static params for all locations
export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((slug) => ({
    location: slug,
  }));
}

// Generate metadata for each location
export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const locationData = getLocationBySlug(params.location);

  if (!locationData) {
    return {
      title: 'Location Not Found | WeatherShield Roofing',
    };
  }

  const { cityName, fullName, metaDescription, stats } = locationData;

  return {
    title: `Roof Financing ${cityName} SC | 0% APR | Zero Down | Bad Credit OK | WeatherShield`,
    description: metaDescription,
    keywords: `roof financing ${cityName}, zero down roofing ${cityName}, no money down roof ${cityName}, bad credit roof financing ${cityName}, roofing payment plans ${cityName}, roof financing with bad credit ${cityName}, affordable roof financing ${cityName}, 0 down payment roofing ${cityName}, ${cityName} roofing financing, same day approval ${cityName}, roof loan bad credit ${cityName}, finance roof replacement ${cityName}`,
    alternates: {
      canonical: `https://weathershieldroofers.com/financing/${params.location}`,
    },
    openGraph: {
      title: `${cityName} Roof Financing | 0% APR | Zero Down | Bad Credit Welcome`,
      description: `${cityName} roof financing with ${stats.approvalRate}% approval rate. Zero down payment, bad credit OK. ${stats.projectsCompleted}+ projects financed. Flexible payment plans available. Call (843) 877-5539.`,
      url: `https://weathershieldroofers.com/financing/${params.location}`,
      type: 'website',
      siteName: 'WeatherShield Roofing',
      images: [
        {
          url: '/images/financing-hero.jpg',
          width: 1200,
          height: 630,
          alt: `${cityName} Roof Financing - Zero Down Payment Available`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cityName} Roof Financing | 0% APR | Zero Down`,
      description: `${stats.approvalRate}% approval rate. Bad credit welcome. ${stats.projectsCompleted}+ ${cityName} projects financed.`,
      images: ['/images/financing-hero.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LocationFinancingPage({ params }: { params: { location: string } }) {
  const locationData = getLocationBySlug(params.location);

  if (!locationData) {
    notFound();
  }

  const { cityName, fullName, stats, faqs, neighborhoods, coordinates } = locationData;

  // JSON-LD structured data for local business
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: `Roof Financing in ${cityName}, SC`,
    description: `Flexible roof financing options for ${cityName} homeowners including zero down payment, bad credit approval, and 0% APR plans`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://weathershieldroofers.com/#organization',
      name: 'WeatherShield Roofing',
      telephone: '(843) 877-5539',
      address: {
        '@type': 'PostalAddress',
        addressLocality: cityName,
        addressRegion: 'SC',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: coordinates.lat,
        longitude: coordinates.lng
      },
      areaServed: {
        '@type': 'City',
        name: cityName,
        '@id': `https://en.wikipedia.org/wiki/${cityName.replace(' ', '_')},_South_Carolina`
      }
    },
    offers: [
      {
        '@type': 'Offer',
        name: '0% APR Financing',
        description: '12-month interest-free financing for qualified applicants',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '0',
          priceCurrency: 'USD'
        }
      },
      {
        '@type': 'Offer',
        name: 'Zero Down Payment',
        description: '100% financing available with no money down',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: stats.projectsCompleted,
      bestRating: '5'
    }
  };

  // FAQ structured data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Location-specific Hero */}
        <LocationHero cityName={cityName} fullName={fullName} stats={stats} />

        {/* Location-specific Trust Signals */}
        <LocationTrustSignals cityName={cityName} stats={stats} neighborhoods={neighborhoods} />

        {/* Payment Calculator - Removed per pricing policy */}

        {/* Financing Benefits */}
        <LocationBenefits cityName={cityName} />

        {/* Location-specific FAQs */}
        <LocationFAQs cityName={cityName} faqs={faqs} />

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-weather-teal to-weather-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Finance Your {cityName} Roof?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join {stats.projectsCompleted}+ {cityName} homeowners who trusted us with their roof financing.
              Get approved in {stats.averageApprovalTime} with our {stats.approvalRate}% approval rate!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:8438775539"
                className="bg-white text-weather-teal px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Call (843) 877-5539
              </a>
              <a
                href="tel:8438775539"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
              >
                Call (843) 877-5539
              </a>
            </div>
            <p className="mt-6 text-sm opacity-90">
              Serving {cityName} and surrounding areas | Licensed & Insured | Free Estimates
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
