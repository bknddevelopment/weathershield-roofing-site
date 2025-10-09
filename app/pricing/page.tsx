import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import {
  DollarSign,
  Calculator,
  Shield,
  Award,
  TrendingDown,
  Clock,
  FileText,
  Phone,
  ChevronRight,
  Tag,
  Percent,
  Home
} from 'lucide-react';
import { specialOffers } from '../data/pricing';

// Dynamic imports for better performance
const RoofCostCalculator = dynamic(() => import('../components/RoofCostCalculator'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-2xl" />,
  ssr: false
});

const PricingTables = dynamic(() => import('../components/PricingTables'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-2xl" />,
  ssr: false
});

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Roof Replacement Cost Myrtle Beach 2025 | Free Calculator & Instant Quote',
  description: 'Calculate your exact roof replacement cost in Myrtle Beach. Compare prices for asphalt, metal, tile roofing. $99 inspection special. Financing available with 0% APR.',
  keywords: 'roof replacement cost myrtle beach 2025, roofing estimate calculator south carolina, cheap roof repair near me, metal roof cost per square foot 2025, asphalt shingle roof price myrtle beach, free roof inspection myrtle beach, affordable roofing contractors myrtle beach, roof financing options no credit check, insurance deductible roof replacement, $99 roof inspection special near me',
  openGraph: {
    title: 'Roof Cost Calculator - Get Instant Pricing | WeatherShield Roofing',
    description: 'Free instant roof replacement cost calculator for Myrtle Beach. Compare materials, get exact quotes, 0% financing available.',
    url: 'https://weathershieldroofing.com/pricing',
    siteName: 'WeatherShield Roofing',
    images: [
      {
        url: '/images/roof-cost-calculator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Roof Cost Calculator - WeatherShield Roofing'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  alternates: {
    canonical: 'https://weathershieldroofing.com/pricing'
  }
};

// JSON-LD Schema for pricing page
const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://weathershieldroofing.com/pricing#service',
  name: 'Roof Replacement Service',
  provider: {
    '@type': 'RoofingContractor',
    name: 'WeatherShield Roofing',
    telephone: '+1-843-877-5539',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Myrtle Beach',
      addressRegion: 'SC',
      postalCode: '29577'
    }
  },
  areaServed: {
    '@type': 'City',
    name: 'Myrtle Beach',
    '@id': 'https://www.wikidata.org/wiki/Q49233'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Roofing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Asphalt Shingle Roofing'
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '4.50',
          priceCurrency: 'USD',
          unitCode: 'FTK',
          unitText: 'per square foot',
          minPrice: '3.50',
          maxPrice: '8.00'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Metal Roofing'
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '10.00',
          priceCurrency: 'USD',
          unitCode: 'FTK',
          unitText: 'per square foot',
          minPrice: '5.50',
          maxPrice: '15.00'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Free Roof Inspection'
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '0',
          priceCurrency: 'USD'
        },
        availability: 'https://schema.org/InStock'
      }
    ]
  }
};

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a new roof cost in Myrtle Beach in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The average roof replacement cost in Myrtle Beach ranges from $7,000 to $25,000 for a typical 2,000 sq ft home. Asphalt shingles cost $3.50-$8.00 per square foot, while metal roofing ranges from $5.50-$15.00 per square foot installed.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer free roof inspections?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer completely free 21-point roof inspections (normally a $99 value) for all Myrtle Beach area residents. Our certified inspectors provide detailed reports with photos and recommendations.'
      }
    },
    {
      '@type': 'Question',
      name: 'What financing options are available for roof replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer flexible financing with options including 0% APR for 12 months, terms up to 60 months, and programs for all credit types. No credit check options are also available for qualified buyers.'
      }
    },
    {
      '@type': 'Question',
      name: 'How accurate is the online roof cost calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our calculator provides estimates within 10-15% of the final cost for most projects. It factors in roof size, material choice, complexity, and current 2025 Myrtle Beach pricing. For an exact quote, schedule a free inspection.'
      }
    }
  ]
};

export default function PricingPage() {
  const featuredOffers = specialOffers.filter(offer => offer.featured).slice(0, 4);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-weather-teal via-weather-blue to-weather-slate text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />

          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold">Myrtle Beach's #1 Rated Roofing Calculator</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Instant Roof Replacement
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Cost Calculator 2025
                </span>
              </h1>

              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Get accurate pricing in 60 seconds. Compare materials, see monthly payments,
                and save up to $500 with our spring specials.
              </p>

              {/* Value Props */}
              <div className="grid sm:grid-cols-4 gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <div className="font-bold">Save $500+</div>
                  <div className="text-sm text-white/80">Spring Special</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Percent className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  <div className="font-bold">0% APR</div>
                  <div className="text-sm text-white/80">12 Months</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Tag className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="font-bold">Free</div>
                  <div className="text-sm text-white/80">$99 Inspection</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <div className="font-bold">60 Sec</div>
                  <div className="text-sm text-white/80">Instant Quote</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#calculator"
                  className="bg-white text-weather-teal px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                >
                  Calculate My Cost Now →
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  (843) 877-5539
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers Banner */}
        <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-6 h-6" />
                <span className="font-bold text-lg">Limited Time Offers:</span>
              </div>
              {featuredOffers.slice(0, 3).map((offer) => (
                <div key={offer.id} className="flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  <span>{offer.title}: {offer.discount}</span>
                </div>
              ))}
              <a href="#offers" className="underline hover:no-underline">
                View All →
              </a>
            </div>
          </div>
        </section>

        {/* Cost Calculator Section */}
        <section id="calculator" className="py-16">
          <div className="container mx-auto px-4">
            <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-2xl" />}>
              <RoofCostCalculator />
            </Suspense>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-weather-teal">15,000+</div>
                  <div className="text-gray-600 mt-1">Roofs Installed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-weather-teal">4.8★</div>
                  <div className="text-gray-600 mt-1">Google Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-weather-teal">100%</div>
                  <div className="text-gray-600 mt-1">Price Match</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-weather-teal">A+</div>
                  <div className="text-gray-600 mt-1">BBB Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Comparison Tables */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-2xl" />}>
              <PricingTables />
            </Suspense>
          </div>
        </section>

        {/* Special Offers Section */}
        <section id="offers" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Current Specials & Promotions
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Save big on your roof replacement with these limited-time offers.
                  All promotions valid through 2025.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specialOffers.map((offer) => (
                  <div
                    key={offer.id}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                      offer.featured ? 'ring-2 ring-weather-teal' : ''
                    }`}
                  >
                    {offer.featured && (
                      <div className="bg-weather-teal text-white text-center py-2 text-sm font-bold">
                        FEATURED OFFER
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{offer.title}</h3>
                        <Tag className="w-5 h-5 text-weather-teal flex-shrink-0" />
                      </div>
                      <div className="text-3xl font-bold text-weather-teal mb-3">
                        {offer.discount}
                      </div>
                      <p className="text-gray-700 mb-4">{offer.description}</p>
                      {offer.code && (
                        <div className="bg-gray-100 rounded-lg px-4 py-2 mb-4 text-center">
                          <span className="text-sm text-gray-600">Promo Code: </span>
                          <span className="font-mono font-bold text-weather-teal">{offer.code}</span>
                        </div>
                      )}
                      <div className="text-xs text-gray-500 space-y-1">
                        <div className="font-semibold">Terms & Conditions:</div>
                        {offer.terms.slice(0, 2).map((term, idx) => (
                          <div key={idx}>• {term}</div>
                        ))}
                      </div>
                      <button className="w-full mt-4 bg-weather-teal text-white py-2 rounded-lg font-semibold hover:bg-weather-blue transition-colors">
                        Claim Offer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Price Match Guarantee */}
        <section className="py-16 bg-gradient-to-r from-weather-slate to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h2 className="text-3xl font-bold mb-4">
                100% Price Match Guarantee
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Found a lower price? We'll match it and beat it by 5%!
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left max-w-2xl mx-auto">
                <h3 className="font-bold mb-3">Our Price Match Promise:</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    Match any written quote from licensed contractors
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    Additional 5% discount on top of matched price
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    Same materials, warranty, and installation quality
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    No hidden fees or surprise charges
                  </li>
                </ul>
                <button className="w-full mt-6 bg-white text-weather-slate font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Submit Competitor Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Your Exact Price?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our certified inspectors provide free, no-obligation quotes with transparent pricing.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-weather-teal/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-8 h-8 text-weather-teal" />
                  </div>
                  <h3 className="font-bold mb-2">Free Inspection</h3>
                  <p className="text-sm text-gray-600">21-point inspection with detailed report</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-weather-teal/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calculator className="w-8 h-8 text-weather-teal" />
                  </div>
                  <h3 className="font-bold mb-2">Exact Quote</h3>
                  <p className="text-sm text-gray-600">No hidden fees, transparent pricing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-weather-teal/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Home className="w-8 h-8 text-weather-teal" />
                  </div>
                  <h3 className="font-bold mb-2">Fast Service</h3>
                  <p className="text-sm text-gray-600">Installation in as little as 1 day</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <button className="bg-weather-teal text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-weather-blue transition-all transform hover:scale-105 shadow-lg">
                  Schedule Free Inspection
                </button>
                <button className="border-2 border-weather-teal text-weather-teal px-8 py-4 rounded-lg font-bold text-lg hover:bg-weather-teal/5 transition-colors">
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  Call (843) 877-5539
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}