import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Expert Roofing Services Surfside Beach SC | Weather Shield Roofing - 5.0★ Rated',
  description: "Surfside Beach's oceanfront roofing specialists. Expert in extreme salt air corrosion, storm damage repair. 5.0★ rated. Serving 'The Family Beach' since 2010. Call (843) 877-5539",
  keywords: 'roofing surfside beach sc, surfside beach roofing, oceanfront roofing, salt air roofing, roof replacement surfside beach, storm damage surfside beach',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roofing/surfside-beach',
  },
  openGraph: {
    title: "Expert Roofing Services Surfside Beach SC | Weather Shield Roofing - 5.0★",
    description: "Oceanfront roofing specialists. GAF Certified • Salt Air Experts • 24/7 Emergency Service",
    url: 'https://weathershieldroofers.com/roofing/surfside-beach',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/surfside-beach-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Oceanfront Roofing Services in Surfside Beach, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function SurfsideBeachRoofingPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://weathershieldroofers.com/#organization",
                "name": "Weather Shield Roofing - Surfside Beach",
                "image": "https://weathershieldroofers.com/images/logo.png",
                "url": "https://weathershieldroofers.com/roofing/surfside-beach",
                "telephone": "+18438775539",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Serving Surfside Beach",
                  "addressLocality": "Surfside Beach",
                  "addressRegion": "SC",
                  "postalCode": "29575",
                  "addressCountry": "US"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "73",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "priceRange": "$$",
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Surfside Beach",
                  "containedIn": {
                    "@type": "State",
                    "name": "South Carolina"
                  }
                }
              },
              {
                "@type": "Service",
                "serviceType": "Oceanfront Roofing Services",
                "provider": {
                  "@id": "https://weathershieldroofers.com/#organization"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Surfside Beach"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Oceanfront Roofing Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Salt Air Corrosion Prevention"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Hurricane Damage Repair"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Oceanfront Roof Replacement"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Emergency Storm Response"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does Surfside Beach's oceanfront location affect my roof?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Surfside Beach experiences SEVERE salt air corrosion from direct ocean exposure. Salt spray accelerates rusting of metal fasteners, flashing, and vents. Combined with extreme humidity (75-90%) and high winds, oceanfront roofs require specialized corrosion-resistant materials and more frequent inspections than inland properties."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What storm damage did Tropical Storm Debby cause in Surfside Beach?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Tropical Storm Debby (August 2024) brought 22+ inches of rain and spawned tornadoes in Surfside Beach. The storm caused widespread roof damage from extreme rainfall, tornado-force winds, and storm surge. We helped dozens of oceanfront homeowners with emergency repairs and insurance claims."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do oceanfront roofs in Surfside Beach need special materials?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. Surfside Beach oceanfront properties require stainless steel or hot-dipped galvanized fasteners, marine-grade flashing, high wind-rated shingles (110+ mph), and enhanced waterproofing. We use GAF materials specifically designed for maximum salt air exposure and coastal conditions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does a roof last in Surfside Beach oceanfront properties?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Oceanfront Surfside Beach roofs last 20-25 years with proper materials and maintenance, compared to 30-35 years inland. Salt air corrosion significantly reduces lifespan of standard materials. Metal roofing with marine-grade coatings can extend this to 35-40 years."
                    }
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://weathershieldroofers.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Roofing Services",
                    "item": "https://weathershieldroofers.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Surfside Beach Roofing",
                    "item": "https://weathershieldroofers.com/roofing/surfside-beach"
                  }
                ]
              }
            ]
          })
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/images/background/residential-roofing-gutter-siding-services.jpg')] bg-cover bg-center opacity-20"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm font-semibold">5.0 Google Rating • 73 Reviews</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Surfside Beach Oceanfront Roofing Specialists
                </h1>

                <p className="text-xl md:text-2xl text-blue-100">
                  The Family Beach's Trusted Roofers Since 2010 • Salt Air Experts • Storm Damage Specialists
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    <div>
                      <div className="font-bold text-lg">EXTREME Salt Air Exposure</div>
                      <div className="text-blue-100 text-sm">Direct ocean roofs require specialized materials • 5-6 miles from Myrtle Beach</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Oceanfront Specialists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Marine-Grade Materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>110+ MPH Wind Rating</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate"
                    className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors shadow-lg"
                  >
                    Schedule Free Inspection
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </Link>
                  <a
                    href="tel:+18438775539"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                    (843) 877-5539
                  </a>
                </div>
              </div>

              {/* Right Column - CTA Card */}
              <div className="bg-white rounded-xl shadow-2xl p-8 text-gray-900">
                <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Oceanfront Inspection</h3>

                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Salt air corrosion assessment</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Detailed oceanfront estimate</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Rapid storm damage response</span>
                    </div>
                  </div>

                  <Link
                    href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate"
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors text-center"
                  >
                    Schedule Inspection Online
                  </Link>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">or call now</span>
                    </div>
                  </div>

                  <a
                    href="tel:+18438775539"
                    className="block w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition-colors text-center"
                  >
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                      (843) 877-5539
                    </div>
                  </a>

                  <p className="text-xs text-gray-500 text-center">⚡ Emergency service available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Bar */}
        <section className="bg-gray-50 border-y border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-900">4,429</div>
                <div className="text-sm text-gray-600">Beach Residents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">5-6 Miles</div>
                <div className="text-sm text-gray-600">South of Myrtle Beach</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">$501K</div>
                <div className="text-sm text-gray-600">Median Home Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">5.0 ⭐</div>
                <div className="text-sm text-gray-600">Perfect Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Surfside Beach */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Why Surfside Beach Homeowners Choose Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Protecting "The Family Beach" Since 2010
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Surfside Beach's direct oceanfront location creates the most extreme roofing environment in South Carolina. Your roof faces challenges that inland properties never experience.
                  </p>
                  <p>
                    <strong>SEVERE Salt Air Corrosion:</strong> Direct ocean exposure means salt spray hits your roof daily. Standard metal fasteners rust within 5-7 years. Metal flashing corrodes. Vents deteriorate. We see this every day on oceanfront homes that used inferior materials.
                  </p>
                  <p>
                    <strong>The Surfside Beach Reality:</strong> You face maximum salt exposure, extreme humidity (75-90%), high winds (110+ mph storms), and intense UV from ocean reflection. Your roof takes a beating that requires specialized oceanfront expertise.
                  </p>
                  <p>
                    Known as "The Family Beach," Surfside Beach is a close-knit community of 4,429 residents (median age 55.4) with median home values of $501,164. Many are retirees who've invested in oceanfront property. We understand you need roofing that protects your investment and provides peace of mind.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/background/residential-roofing-gutter-siding-services.jpg"
                    alt="Professional oceanfront roofing services in Surfside Beach SC"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">350+</div>
                  <div className="text-sm">Oceanfront Roofs<br/>Protected</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Surfside Beach Climate Challenges */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Surfside Beach Oceanfront Challenges
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the extreme conditions your oceanfront roof faces daily
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">SEVERE Salt Air Corrosion</h3>
                <p className="text-gray-600 mb-4">Direct ocean exposure means maximum salt spray. Standard fasteners rust within 5-7 years. Metal components corrode rapidly.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    Stainless steel fasteners mandatory
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    Marine-grade flashing required
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Extreme High Winds</h3>
                <p className="text-gray-600 mb-4">Oceanfront properties face unobstructed wind exposure. Tropical storms bring 110+ mph gusts. No windbreak from land.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    110+ MPH wind-rated shingles
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Enhanced fastener patterns
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Extreme Humidity</h3>
                <p className="text-gray-600 mb-4">Humidity ranges 75-90% year-round. Creates ideal conditions for algae, mold, and accelerated deterioration.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Premium algae-resistant shingles
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Maximum ventilation systems
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">⛈️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tropical Storm Debby (Aug 2024)</h3>
                <p className="text-gray-600 mb-4">22+ inches of rain, spawned tornadoes, storm surge. Caused widespread roof damage across oceanfront Surfside Beach properties.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Post-storm inspection specialists
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Insurance claim assistance
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">☀️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Intense UV Exposure</h3>
                <p className="text-gray-600 mb-4">Direct sun plus UV reflection from ocean water creates double UV exposure. Accelerates shingle aging and granule loss.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    UV-resistant shingles required
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Reflective roof coatings available
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🌡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Retiree Community Considerations</h3>
                <p className="text-gray-600 mb-4">Median age 55.4 years. Many homeowners are retirees on fixed incomes who need long-lasting, low-maintenance solutions.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Lifetime warranty options
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Senior-friendly service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Oceanfront Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete Roofing Services for Surfside Beach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized oceanfront roofing solutions for direct ocean exposure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Oceanfront Roof Replacement',
                  description: 'Complete replacement with marine-grade materials. Stainless steel fasteners, high wind rating, salt-resistant.',
                  icon: '🏠',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'Salt Air Corrosion Prevention',
                  description: 'Specialized treatments and materials to prevent premature deterioration from ocean exposure.',
                  icon: '🛡️',
                  link: '/services/roof-maintenance'
                },
                {
                  title: 'Hurricane Damage Repair',
                  description: 'Emergency storm response and complete restoration. Tropical Storm Debby specialists.',
                  icon: '⛈️',
                  link: '/services/storm-damage'
                },
                {
                  title: 'Emergency Roofing',
                  description: 'True 24/7 emergency service for oceanfront properties. Rapid response to storm damage.',
                  icon: '🚨',
                  link: '/emergency'
                },
                {
                  title: 'Wind Damage Repair',
                  description: '110+ MPH wind damage specialists. Shingle replacement, structural repairs, insurance claims.',
                  icon: '💨',
                  link: '/services/storm-damage'
                },
                {
                  title: 'Gutter Services',
                  description: 'Salt-resistant gutter systems critical for oceanfront homes. Installation, repair, guards.',
                  icon: '💧',
                  link: '/services/gutter-services'
                },
                {
                  title: 'Roof Inspections',
                  description: 'Comprehensive oceanfront inspections. Drone technology, salt air corrosion assessment.',
                  icon: '🔍',
                  link: '/services/roof-inspections'
                },
                {
                  title: 'Metal Roofing',
                  description: 'Premium metal roofs with marine-grade coatings. 35-40 year oceanfront lifespan.',
                  icon: '🔩',
                  link: '/services/roof-replacement'
                }
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group border border-gray-200"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="text-blue-600 font-semibold text-sm flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Surfside Beach Neighborhoods */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Serving All Surfside Beach Neighborhoods
              </h2>
              <p className="text-xl text-gray-600">
                From oceanfront condos to Prestwick golf community, we protect your investment
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'Prestwick Country Club', link: '/locations/surfside-beach' },
                { name: 'Long Bay Estates', link: '/locations/surfside-beach' },
                { name: 'Surfside Beach Club', link: '/locations/surfside-beach' },
                { name: 'Deerfield Plantation', link: '/locations/surfside-beach' },
                { name: 'Oceanfront Homes', link: '/locations/surfside-beach' },
                { name: 'Beachside Condos', link: '/locations/surfside-beach' },
                { name: 'Atlantic Avenue', link: '/locations/surfside-beach' },
                { name: 'Oak Street Area', link: '/locations/surfside-beach' },
                { name: 'Surf Club Estates', link: '/locations/surfside-beach' },
                { name: 'Magnolia Park', link: '/locations/surfside-beach' }
              ].map((neighborhood, index) => (
                <Link
                  key={index}
                  href={neighborhood.link}
                  className="bg-white hover:bg-blue-50 border border-gray-200 rounded-lg p-4 text-center transition-colors"
                >
                  <span className="text-gray-900 font-medium">{neighborhood.name}</span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/locations/surfside-beach" className="text-blue-600 hover:text-blue-700 font-semibold">
                View Complete Surfside Beach Service Map →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Surfside Beach Roofing FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Answers to common questions from oceanfront homeowners
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'How does Surfside Beach\'s oceanfront location affect my roof?',
                  answer: 'Surfside Beach experiences SEVERE salt air corrosion from direct ocean exposure. Salt spray accelerates rusting of metal fasteners, flashing, and vents. Combined with extreme humidity (75-90%) and high winds, oceanfront roofs require specialized corrosion-resistant materials and more frequent inspections than inland properties.'
                },
                {
                  question: 'What storm damage did Tropical Storm Debby cause in Surfside Beach?',
                  answer: 'Tropical Storm Debby (August 2024) brought 22+ inches of rain and spawned tornadoes in Surfside Beach. The storm caused widespread roof damage from extreme rainfall, tornado-force winds, and storm surge. We helped dozens of oceanfront homeowners with emergency repairs and insurance claims.'
                },
                {
                  question: 'Do oceanfront roofs in Surfside Beach need special materials?',
                  answer: 'Absolutely. Surfside Beach oceanfront properties require stainless steel or hot-dipped galvanized fasteners, marine-grade flashing, high wind-rated shingles (110+ mph), and enhanced waterproofing. We use GAF materials specifically designed for maximum salt air exposure and coastal conditions.'
                },
                {
                  question: 'How long does a roof last in Surfside Beach oceanfront properties?',
                  answer: 'Oceanfront Surfside Beach roofs last 20-25 years with proper materials and maintenance, compared to 30-35 years inland. Salt air corrosion significantly reduces lifespan of standard materials. Metal roofing with marine-grade coatings can extend this to 35-40 years.'
                },
                {
                  question: 'Why do metal fasteners rust so quickly at the beach?',
                  answer: 'Salt spray contains sodium chloride (salt) which is highly corrosive to metal. Standard galvanized fasteners rust within 5-7 years at the oceanfront. Rusted fasteners lose holding power, causing shingles to lift in wind. We use stainless steel fasteners that resist corrosion for 30+ years.'
                },
                {
                  question: 'Should I get a metal roof for my Surfside Beach home?',
                  answer: 'Metal roofs with marine-grade coatings are excellent for oceanfront Surfside Beach homes. They resist salt air corrosion better than asphalt shingles, last 35-40 years, and provide superior wind resistance. They cost more upfront but offer better long-term value at the beach.'
                },
                {
                  question: 'How often should I inspect my oceanfront roof?',
                  answer: 'Oceanfront Surfside Beach roofs should be inspected twice yearly—once before hurricane season (May) and once after (November). We also recommend inspections after major storms. Salt air corrosion progresses quickly, so early detection prevents major damage.'
                },
                {
                  question: 'Do you serve Prestwick Country Club and Deerfield Plantation?',
                  answer: 'Yes! We serve all Surfside Beach neighborhoods including Prestwick Country Club, Long Bay Estates, Deerfield Plantation, Surfside Beach Club, and all oceanfront properties. We understand HOA requirements and work with property managers.'
                },
                {
                  question: 'Can you help with insurance claims for storm damage?',
                  answer: 'Absolutely! We specialize in oceanfront storm damage claims. We document all damage with photos and drone footage, work directly with insurance adjusters, and handle the entire claims process. We helped many Surfside Beach homeowners after Tropical Storm Debby brought 22+ inches of rain.'
                },
                {
                  question: 'Why does algae grow so fast on Surfside Beach roofs?',
                  answer: 'Extreme humidity (75-90%), salt air, and ocean spray create ideal conditions for algae growth. Black streaks appear within 2-3 years on non-resistant shingles. We install GAF shingles with StainGuard algae protection and offer algae treatment services for existing roofs.'
                }
              ].map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-lg p-6 group">
                  <summary className="text-lg font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                    {faq.question}
                    <svg className="w-6 h-6 text-blue-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Protect Your Surfside Beach Oceanfront Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of "Family Beach" homeowners who trust Weather Shield Roofing for oceanfront expertise and marine-grade quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors shadow-lg"
              >
                Schedule Free Oceanfront Inspection
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </Link>
              <a
                href="tel:+18438775539"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                Call (843) 877-5539
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 items-center border-t border-white/20 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">Oceanfront</div>
                <div className="text-sm text-blue-100">Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5.0★</div>
                <div className="text-sm text-blue-100">Perfect Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Marine-Grade</div>
                <div className="text-sm text-blue-100">Materials</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Storm Response</div>
              </div>
            </div>

            <p className="text-sm text-blue-100 mt-8">
              ⚡ Serving Surfside Beach, Prestwick, Long Bay Estates, and all oceanfront communities • Licensed & insured
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
