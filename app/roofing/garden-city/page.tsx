import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Expert Roofing Services Garden City SC | Weather Shield Roofing - 5.0★ Rated',
  description: "Garden City's oceanfront roofing experts. Serving retiree community with specialized salt air solutions. Near Murrells Inlet & The Point. Call (843) 877-5539",
  keywords: 'roofing garden city sc, garden city roofing, murrells inlet roofing, oceanfront roofing garden city, roof replacement garden city',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roofing/garden-city',
  },
  openGraph: {
    title: "Expert Roofing Services Garden City SC | Weather Shield Roofing - 5.0★",
    description: "Oceanfront roofing for Garden City retiree community. GAF Certified • Salt Air Specialists • 24/7 Service",
    url: 'https://weathershieldroofers.com/roofing/garden-city',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/garden-city-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Oceanfront Roofing Services in Garden City, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function GardenCityRoofingPage() {
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
                "name": "Weather Shield Roofing - Garden City",
                "image": "https://weathershieldroofers.com/images/logo.png",
                "url": "https://weathershieldroofers.com/roofing/garden-city",
                "telephone": "+18438775539",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Serving Garden City",
                  "addressLocality": "Garden City",
                  "addressRegion": "SC",
                  "postalCode": "29576",
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
                  "name": "Garden City",
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
                  "name": "Garden City"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Oceanfront Roofing Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Salt Air Corrosion Solutions"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Historic Home Roofing"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Storm Damage Repair"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Condo Roofing Services"
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
                    "name": "How does Garden City's oceanfront location affect roofing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Garden City faces SEVERE salt air corrosion from direct oceanfront exposure. Salt spray from the Atlantic accelerates deterioration of metal fasteners, flashing, and roof components. The retiree community (median age 61.2) often has older housing stock requiring specialized care and materials designed for maximum coastal exposure."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What damage did Tropical Storm Debby cause in Garden City?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Tropical Storm Debby (August 2024) brought 15+ inches of rain and storm surge to Garden City. The oceanfront community experienced significant flooding, wind damage, and water intrusion. We responded to dozens of emergency calls and helped many retirees navigate insurance claims."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you work on older homes in Garden City's retiree community?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! Garden City has significant older housing stock (median age 61.2 community). We specialize in upgrading older roofing systems to modern standards while respecting original architecture. Many retirees appreciate our senior-friendly service and clear communication about their roofing investment."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you serve Inlet Pointe condos and The Point area?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! We serve all Garden City neighborhoods including Inlet Pointe luxury condos, The Point (unique sunrise/sunset spot), Garden City Beach Pier area, and all oceanfront properties. We work with HOAs and property managers, and understand condo roofing requirements."
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
                    "name": "Garden City Roofing",
                    "item": "https://weathershieldroofers.com/roofing/garden-city"
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
                  Garden City Oceanfront Roofing Experts
                </h1>

                <p className="text-xl md:text-2xl text-blue-100">
                  Serving Garden City & Murrells Inlet Since 2010 • Retiree Community Specialists • Salt Air Experts
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    <div>
                      <div className="font-bold text-lg">Oceanfront Exposure + Older Housing Stock</div>
                      <div className="text-blue-100 text-sm">Retiree community needs specialized care • 10-12 miles from Myrtle Beach</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Senior-Friendly Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Historic Home Experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Condo & HOA Approved</span>
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
                <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Inspection</h3>

                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>No-pressure consultation</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Clear, senior-friendly estimates</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Insurance claim assistance</span>
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
                <div className="text-3xl font-bold text-blue-900">11,304</div>
                <div className="text-sm text-gray-600">Garden City Residents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">61.2 Years</div>
                <div className="text-sm text-gray-600">Median Age (Retirees)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">10-12 Miles</div>
                <div className="text-sm text-gray-600">From Myrtle Beach</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">5.0 ⭐</div>
                <div className="text-sm text-gray-600">Perfect Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Garden City */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Why Garden City Homeowners Choose Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Understanding Garden City's Unique Roofing Needs
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Garden City is a unique oceanfront community where retirees (median age 61.2) have invested in beachfront living. Your roofing needs differ from typical coastal properties because many homes are older, and homeowners expect quality work from contractors they can trust.
                  </p>
                  <p>
                    <strong>SEVERE Salt Air Exposure:</strong> Located 10-12 miles south of Myrtle Beach with direct oceanfront exposure, Garden City faces maximum salt spray corrosion. Standard roofing materials deteriorate rapidly. Metal fasteners rust, flashing corrodes, and shingles age faster than inland properties.
                  </p>
                  <p>
                    <strong>Older Housing Stock Challenges:</strong> Many Garden City homes were built decades ago when roofing standards were less stringent. We specialize in upgrading older systems to modern codes while respecting the character of your neighborhood.
                  </p>
                  <p>
                    <strong>Adjacent to Murrells Inlet:</strong> Garden City borders Murrells Inlet and features unique landmarks like "The Point" (sunrise/sunset spot) and the historic Garden City Beach Pier. We understand your community's character and serve both oceanfront condos like Inlet Pointe and single-family homes throughout the area.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/background/residential-roofing-gutter-siding-services.jpg"
                    alt="Professional oceanfront roofing services in Garden City SC near Murrells Inlet"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">400+</div>
                  <div className="text-sm">Garden City<br/>Roofs Protected</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Garden City Climate Challenges */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Garden City Roofing Challenges
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the oceanfront conditions affecting your retiree community investment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">SEVERE Salt Air Corrosion</h3>
                <p className="text-gray-600 mb-4">Direct oceanfront location means constant salt spray exposure. Metal components corrode rapidly, requiring marine-grade materials.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    Stainless steel fasteners essential
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    Regular corrosion inspections
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🏚️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Older Housing Stock</h3>
                <p className="text-gray-600 mb-4">Mature retiree community means many homes were built with older roofing standards. Upgrades often needed.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Code compliance updates
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Ventilation improvements
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">⛈️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tropical Storm Debby (Aug 2024)</h3>
                <p className="text-gray-600 mb-4">15+ inches of rain and storm surge caused widespread damage. Many retirees needed emergency repairs and insurance help.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Emergency response available
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Insurance claim specialists
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">High Wind Exposure</h3>
                <p className="text-gray-600 mb-4">Oceanfront location means unobstructed wind during storms. Hurricane-force winds are a real threat every season.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    110+ MPH wind-rated materials
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Enhanced fastening systems
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Condo & HOA Properties</h3>
                <p className="text-gray-600 mb-4">Inlet Pointe luxury condos and HOA communities require specialized coordination and compliance with association rules.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    HOA-compliant materials
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Property manager coordination
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">👴</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Senior-Friendly Service</h3>
                <p className="text-gray-600 mb-4">Median age 61.2 means many homeowners are retirees who appreciate clear communication and no-pressure sales.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Clear, honest estimates
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Respectful, patient service
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
                Our Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete Roofing Services for Garden City
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized solutions for oceanfront properties and retiree community needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Oceanfront Roof Replacement',
                  description: 'Complete replacement with marine-grade materials designed for maximum salt air exposure.',
                  icon: '🏠',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'Historic Home Roofing',
                  description: 'Specialized service for older Garden City homes. Upgrade to modern standards respectfully.',
                  icon: '🏚️',
                  link: '/services/roof-repair'
                },
                {
                  title: 'Storm Damage Repair',
                  description: 'Post-Debby repairs and insurance claim assistance. We helped many retirees after Aug 2024 flooding.',
                  icon: '⛈️',
                  link: '/services/storm-damage'
                },
                {
                  title: 'Emergency Roofing',
                  description: 'True 24/7 emergency service for Garden City oceanfront properties. Rapid storm response.',
                  icon: '🚨',
                  link: '/emergency'
                },
                {
                  title: 'Condo Roofing Services',
                  description: 'Inlet Pointe condos and multi-family properties. HOA-compliant materials and coordination.',
                  icon: '🏢',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'Salt Air Prevention',
                  description: 'Specialized treatments and corrosion-resistant materials for direct ocean exposure.',
                  icon: '🛡️',
                  link: '/services/roof-maintenance'
                },
                {
                  title: 'Roof Inspections',
                  description: 'Comprehensive oceanfront inspections. Senior-friendly, no-pressure consultations.',
                  icon: '🔍',
                  link: '/services/roof-inspections'
                },
                {
                  title: 'Gutter Services',
                  description: 'Critical for coastal homes. Salt-resistant systems, installation, repair, guards.',
                  icon: '💧',
                  link: '/services/gutter-services'
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

        {/* Garden City Neighborhoods */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Serving All Garden City & Murrells Inlet Areas
              </h2>
              <p className="text-xl text-gray-600">
                From The Point to Inlet Pointe condos, we protect your oceanfront investment
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'The Point', link: '/locations/garden-city' },
                { name: 'Inlet Pointe Condos', link: '/locations/garden-city' },
                { name: 'Garden City Beach Pier', link: '/locations/garden-city' },
                { name: 'Oceanfront Homes', link: '/locations/garden-city' },
                { name: 'Atlantic Avenue', link: '/locations/garden-city' },
                { name: 'Waccamaw Drive', link: '/locations/garden-city' },
                { name: 'Garden City Connector', link: '/locations/garden-city' },
                { name: 'Beachwood Drive', link: '/locations/garden-city' },
                { name: 'Murrells Inlet Border', link: '/locations/garden-city' },
                { name: 'Sea View Loop', link: '/locations/garden-city' }
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
              <Link href="/locations/garden-city" className="text-blue-600 hover:text-blue-700 font-semibold">
                View Complete Garden City Service Map →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Garden City Roofing FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Answers to common questions from Garden City retirees and oceanfront homeowners
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'How does Garden City\'s oceanfront location affect roofing?',
                  answer: 'Garden City faces SEVERE salt air corrosion from direct oceanfront exposure. Salt spray from the Atlantic accelerates deterioration of metal fasteners, flashing, and roof components. The retiree community (median age 61.2) often has older housing stock requiring specialized care and materials designed for maximum coastal exposure.'
                },
                {
                  question: 'What damage did Tropical Storm Debby cause in Garden City?',
                  answer: 'Tropical Storm Debby (August 2024) brought 15+ inches of rain and storm surge to Garden City. The oceanfront community experienced significant flooding, wind damage, and water intrusion. We responded to dozens of emergency calls and helped many retirees navigate insurance claims.'
                },
                {
                  question: 'Do you work on older homes in Garden City\'s retiree community?',
                  answer: 'Absolutely! Garden City has significant older housing stock (median age 61.2 community). We specialize in upgrading older roofing systems to modern standards while respecting original architecture. Many retirees appreciate our senior-friendly service and clear communication about their roofing investment.'
                },
                {
                  question: 'Do you serve Inlet Pointe condos and The Point area?',
                  answer: 'Yes! We serve all Garden City neighborhoods including Inlet Pointe luxury condos, The Point (unique sunrise/sunset spot), Garden City Beach Pier area, and all oceanfront properties. We work with HOAs and property managers, and understand condo roofing requirements.'
                },
                {
                  question: 'How long does a roof last in Garden City oceanfront homes?',
                  answer: 'Oceanfront Garden City roofs last 20-25 years with proper marine-grade materials and maintenance, compared to 30-35 years inland. Salt air corrosion significantly reduces lifespan of standard materials. We recommend twice-yearly inspections to maximize your roof\'s life.'
                },
                {
                  question: 'Why should Garden City retirees choose Weather Shield Roofing?',
                  answer: 'We specialize in senior-friendly service with clear, no-pressure consultations. Many of our Garden City clients are retirees who appreciate honest estimates, respectful communication, and our willingness to explain every detail of their roofing investment. We understand you\'re on a fixed income and need solutions that last.'
                },
                {
                  question: 'Do you help with insurance claims for storm damage?',
                  answer: 'Yes! We specialize in oceanfront storm damage claims. We document everything with photos and drone footage, work directly with adjusters, and handle the entire claims process. We helped many Garden City retirees after Tropical Storm Debby\'s 15+ inches of rain and flooding.'
                },
                {
                  question: 'What\'s the difference between Garden City and Murrells Inlet roofing?',
                  answer: 'Garden City and Murrells Inlet border each other and share similar oceanfront challenges: severe salt air corrosion, high winds, and humidity. Both communities have older housing stock and retiree populations. We serve both areas and understand the unique characteristics of each neighborhood.'
                },
                {
                  question: 'Do HOAs in Garden City have special roofing requirements?',
                  answer: 'Yes, many Garden City HOAs require specific shingle colors, styles, or manufacturers. We work with all major HOAs including Inlet Pointe and know their requirements. We handle all HOA approval documentation and ensure compliance with association rules.'
                },
                {
                  question: 'How quickly can you respond to Garden City emergencies?',
                  answer: 'We provide rapid emergency response throughout the Garden City area. For oceanfront storm emergencies, we typically arrive within 1-2 hours. Call (843) 877-5539 anytime—real people answer 24/7, not an answering service. We understand emergencies are especially stressful for retirees.'
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
              Ready to Protect Your Garden City Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of Garden City retirees who trust Weather Shield Roofing for honest service, quality work, and oceanfront expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
                Call (843) 877-5539
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 items-center border-t border-white/20 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">Senior</div>
                <div className="text-sm text-blue-100">Friendly Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5.0★</div>
                <div className="text-sm text-blue-100">Perfect Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Oceanfront</div>
                <div className="text-sm text-blue-100">Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Emergency Service</div>
              </div>
            </div>

            <p className="text-sm text-blue-100 mt-8">
              ⚡ Serving Garden City, Murrells Inlet, The Point, Inlet Pointe, and all oceanfront communities • Licensed & insured
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
