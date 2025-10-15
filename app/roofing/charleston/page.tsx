import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Expert Roofing Services Charleston SC | Weather Shield Roofing - 5.0★ Rated',
  description: "Charleston's historic & coastal roofing experts. Hurricane Helene & Debby specialists. 158K residents, 206 historic properties. GAF Certified. Call (843) 877-5539",
  keywords: 'roofing charleston sc, charleston roofing contractor, historic home roofing charleston, hurricane damage charleston, roof replacement charleston',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roofing/charleston',
  },
  openGraph: {
    title: "Expert Roofing Services Charleston SC | Weather Shield Roofing - 5.0★",
    description: "Historic Charleston roofing specialists. Hurricane damage experts • Preservation-compliant • GAF Certified",
    url: 'https://weathershieldroofers.com/roofing/charleston',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/charleston-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Historic & Coastal Roofing Services in Charleston, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function CharlestonRoofingPage() {
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
                "name": "Weather Shield Roofing - Charleston",
                "image": "https://weathershieldroofers.com/images/logo.png",
                "url": "https://weathershieldroofers.com/roofing/charleston",
                "telephone": "+18438775539",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Serving Charleston",
                  "addressLocality": "Charleston",
                  "addressRegion": "SC",
                  "postalCode": "29401",
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
                  "name": "Charleston",
                  "containedIn": {
                    "@type": "State",
                    "name": "South Carolina"
                  }
                }
              },
              {
                "@type": "Service",
                "serviceType": "Historic & Coastal Roofing Services",
                "provider": {
                  "@id": "https://weathershieldroofers.com/#organization"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Charleston"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Charleston Roofing Services",
                  "itemListElement": [
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
                        "name": "Hurricane Damage Repair"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Preservation-Compliant Roofing"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Coastal Roofing Solutions"
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
                    "name": "Do you work on historic homes in Charleston's downtown districts?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! We specialize in Charleston's 206 National Register properties including South of Broad, French Quarter, Harleston Village, and Ansonborough. We understand preservation requirements, Board of Architectural Review (BAR) compliance, and work to maintain historic character while providing modern protection."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What damage did Hurricane Helene cause to Charleston roofs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Hurricane Helene (September 2024) brought tornadoes, strong winds, and flooding to Charleston. West Ashley and Isle of Palms experienced significant damage. We responded to hundreds of emergency calls and specialize in hurricane damage assessment and insurance claims for Charleston homeowners."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does Charleston's coastal location affect roofing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Charleston's coastal location creates variable salt air exposure depending on neighborhood. Waterfront properties face significant corrosion, while inland areas have less. Hurricane vulnerability is city-wide. We assess each property's specific exposure and recommend appropriate materials—from marine-grade for waterfront to standard coastal for inland."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you serve all Charleston neighborhoods including Mount Pleasant and Summerville?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! We serve greater Charleston metro (850,000+ residents) including downtown Charleston, West Ashley, James Island, Johns Island, Daniel Island, and surrounding areas. We also have dedicated services for Mount Pleasant and Summerville—each with unique roofing considerations."
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
                    "name": "Charleston Roofing",
                    "item": "https://weathershieldroofers.com/roofing/charleston"
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
                  Charleston's Historic & Coastal Roofing Experts
                </h1>

                <p className="text-xl md:text-2xl text-blue-100">
                  Protecting 158K Residents & 206 Historic Properties • Hurricane Specialists • GAF Certified
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <div>
                      <div className="font-bold text-lg">Historic Preservation + Hurricane Protection</div>
                      <div className="text-blue-100 text-sm">BAR-compliant roofing • Helene & Debby damage specialists • 100 miles from Myrtle Beach</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Historic Home Specialists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Hurricane Damage Experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>BAR Compliant</span>
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
                <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Charleston Inspection</h3>

                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Historic preservation expertise</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Hurricane damage assessment</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Insurance claim specialists</span>
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
                <div className="text-3xl font-bold text-blue-900">158,367</div>
                <div className="text-sm text-gray-600">City Residents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">850K+</div>
                <div className="text-sm text-gray-600">Metro Population</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">206</div>
                <div className="text-sm text-gray-600">Historic Properties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">5.0 ⭐</div>
                <div className="text-sm text-gray-600">Perfect Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Charleston */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Why Charleston Homeowners Choose Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Protecting Charleston's Historic & Growing Community
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Charleston (158,367 residents, 850,000+ metro) is a unique blend of historic preservation and rapid growth. Your roofing needs depend entirely on your location—from oceanfront properties to inland suburbs.
                  </p>
                  <p>
                    <strong>Historic District Expertise:</strong> Charleston has 206 National Register properties concentrated in South of Broad, French Quarter, Harleston Village, and Ansonborough. We understand Board of Architectural Review (BAR) requirements and work within preservation guidelines while providing modern protection.
                  </p>
                  <p>
                    <strong>Hurricane Vulnerability:</strong> Hurricane Helene (September 2024) brought tornadoes, strong winds, and flooding—especially to West Ashley and Isle of Palms. Tropical Storm Debby (August 2024) dropped 15+ inches of rain. Charleston faces hurricane threats every season, requiring wind-rated materials and emergency preparedness.
                  </p>
                  <p>
                    <strong>Variable Coastal Exposure:</strong> Salt air impact varies dramatically by neighborhood. Waterfront properties face significant corrosion, while inland areas experience less. We assess each property's specific exposure and recommend appropriate materials.
                  </p>
                  <p>
                    With median home prices at $630,000, Charleston homeowners expect quality work that protects both their investment and the city's architectural heritage.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/background/residential-roofing-gutter-siding-services.jpg"
                    alt="Professional historic and coastal roofing services in Charleston SC"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">1,200+</div>
                  <div className="text-sm">Charleston<br/>Homes Protected</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charleston Climate Challenges */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Charleston Roofing Challenges
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the unique conditions affecting your Charleston neighborhood
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-200">
                <div className="text-4xl mb-4">🌀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hurricane Vulnerability</h3>
                <p className="text-gray-600 mb-4">Hurricane Helene (Sep 2024): tornadoes, flooding in West Ashley/Isle of Palms. Debby (Aug 2024): 15+ inches rain. City-wide threat.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    Wind-rated materials essential
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    24/7 emergency response
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Historic Preservation Requirements</h3>
                <p className="text-gray-600 mb-4">206 National Register properties. BAR compliance required for South of Broad, French Quarter, Harleston Village, Ansonborough.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    BAR-compliant materials
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Preservation expertise
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Variable Salt Air Exposure</h3>
                <p className="text-gray-600 mb-4">Waterfront properties face significant corrosion. Inland neighborhoods experience less. Each location requires custom assessment.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Location-specific materials
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Corrosion assessments
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">High Property Values</h3>
                <p className="text-gray-600 mb-4">Median home price $630,000. Homeowners expect premium workmanship that protects significant investments.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Premium materials available
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Lifetime warranties
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Growth</h3>
                <p className="text-gray-600 mb-4">Charleston metro growing fast (850K+ population). New construction mixes with historic properties creating diverse roofing needs.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    New construction expertise
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Builder partnerships
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">☀️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hot Humid Summers</h3>
                <p className="text-gray-600 mb-4">High heat and humidity accelerate shingle aging. Proper ventilation critical for attic temperatures and roof lifespan.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    UV-resistant shingles
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Enhanced ventilation systems
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
                Our Charleston Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete Roofing Services for Charleston
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Historic preservation expertise meets modern hurricane protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Historic Home Roofing',
                  description: 'BAR-compliant roofing for Charleston\'s 206 National Register properties. Preservation meets protection.',
                  icon: '🏛️',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'Hurricane Damage Repair',
                  description: 'Helene & Debby damage specialists. Emergency response, insurance claims, complete restoration.',
                  icon: '🌀',
                  link: '/services/storm-damage'
                },
                {
                  title: 'Coastal Roof Replacement',
                  description: 'Complete replacement with materials appropriate for your neighborhood\'s salt air exposure.',
                  icon: '🏠',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'Emergency Roofing',
                  description: 'True 24/7 emergency service throughout Charleston metro. Storm damage rapid response.',
                  icon: '🚨',
                  link: '/emergency'
                },
                {
                  title: 'Roof Repair',
                  description: 'Expert leak repair and storm damage restoration. Rapid response to West Ashley, James Island, downtown.',
                  icon: '🔧',
                  link: '/services/roof-repair'
                },
                {
                  title: 'Waterfront Roofing',
                  description: 'Specialized service for harbor-front and riverfront properties. Marine-grade materials.',
                  icon: '🌊',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'Roof Inspections',
                  description: 'Comprehensive inspections with drone technology. Pre-hurricane season assessments.',
                  icon: '🔍',
                  link: '/services/roof-inspections'
                },
                {
                  title: 'Gutter Services',
                  description: 'Critical for Charleston\'s heavy rainfall. Installation, repair, guards for all neighborhoods.',
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

        {/* Charleston Neighborhoods */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Serving All Charleston Neighborhoods
              </h2>
              <p className="text-xl text-gray-600">
                From historic downtown to growing suburbs, we protect Charleston homes
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'South of Broad', link: '/locations/charleston' },
                { name: 'French Quarter', link: '/locations/charleston' },
                { name: 'Harleston Village', link: '/locations/charleston' },
                { name: 'Ansonborough', link: '/locations/charleston' },
                { name: 'West Ashley', link: '/locations/charleston' },
                { name: 'James Island', link: '/locations/charleston' },
                { name: 'Johns Island', link: '/locations/charleston' },
                { name: 'Daniel Island', link: '/locations/charleston' },
                { name: 'Isle of Palms', link: '/locations/charleston' },
                { name: 'Downtown Charleston', link: '/locations/charleston' }
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
              <Link href="/locations/charleston" className="text-blue-600 hover:text-blue-700 font-semibold">
                View Complete Charleston Service Map →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Charleston Roofing FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Answers to common questions from Charleston homeowners
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'Do you work on historic homes in Charleston\'s downtown districts?',
                  answer: 'Absolutely! We specialize in Charleston\'s 206 National Register properties including South of Broad, French Quarter, Harleston Village, and Ansonborough. We understand preservation requirements, Board of Architectural Review (BAR) compliance, and work to maintain historic character while providing modern protection.'
                },
                {
                  question: 'What damage did Hurricane Helene cause to Charleston roofs?',
                  answer: 'Hurricane Helene (September 2024) brought tornadoes, strong winds, and flooding to Charleston. West Ashley and Isle of Palms experienced significant damage. We responded to hundreds of emergency calls and specialize in hurricane damage assessment and insurance claims for Charleston homeowners.'
                },
                {
                  question: 'How does Charleston\'s coastal location affect roofing?',
                  answer: 'Charleston\'s coastal location creates variable salt air exposure depending on neighborhood. Waterfront properties face significant corrosion, while inland areas have less. Hurricane vulnerability is city-wide. We assess each property\'s specific exposure and recommend appropriate materials—from marine-grade for waterfront to standard coastal for inland.'
                },
                {
                  question: 'Do you serve all Charleston neighborhoods including Mount Pleasant and Summerville?',
                  answer: 'Yes! We serve greater Charleston metro (850,000+ residents) including downtown Charleston, West Ashley, James Island, Johns Island, Daniel Island, and surrounding areas. We also have dedicated services for Mount Pleasant and Summerville—each with unique roofing considerations.'
                },
                {
                  question: 'What are BAR requirements for historic district roofing?',
                  answer: 'The Board of Architectural Review (BAR) regulates changes to historic properties in Charleston. They typically require specific roofing materials, colors, and installation methods that match historic character. We handle all BAR documentation and ensure compliance while providing modern protection.'
                },
                {
                  question: 'How long does a roof last in Charleston?',
                  answer: 'Charleston roof lifespan varies by location: waterfront properties 20-25 years (salt air corrosion), inland properties 28-35 years (less exposure). Proper materials selection based on your specific location maximizes lifespan. Hurricane damage can impact any neighborhood.'
                },
                {
                  question: 'Do you help with hurricane damage insurance claims?',
                  answer: 'Yes! We specialize in hurricane damage claims throughout Charleston. We document all damage with photos and drone footage, work directly with insurance adjusters, and handle the entire claims process. We helped hundreds of Charleston homeowners after Helene and Debby.'
                },
                {
                  question: 'Should I inspect my roof before hurricane season?',
                  answer: 'Absolutely! We recommend pre-hurricane season inspections (May) for all Charleston properties. Small issues become major damage in hurricanes. We offer comprehensive inspections with drone technology to identify vulnerable areas before storms hit.'
                },
                {
                  question: 'What\'s the difference between roofing needs in downtown Charleston vs. suburbs?',
                  answer: 'Downtown Charleston often requires BAR compliance and preservation-appropriate materials. Suburbs have more flexibility but still face hurricane vulnerability. Waterfront properties (any location) need enhanced salt air protection. We customize solutions for each neighborhood\'s specific needs.'
                },
                {
                  question: 'Why are Charleston median home prices so high and what does that mean for roofing?',
                  answer: 'Charleston\'s median home price ($630,000) reflects strong demand, historic character, and coastal location. Homeowners expect premium workmanship that protects significant investments. We provide quality materials, expert installation, and comprehensive warranties appropriate for Charleston\'s high-value properties.'
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
              Ready to Protect Your Charleston Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join over 1,200 Charleston homeowners who trust Weather Shield Roofing for historic preservation expertise and hurricane protection.
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
                <div className="text-3xl font-bold">Historic</div>
                <div className="text-sm text-blue-100">Preservation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5.0★</div>
                <div className="text-sm text-blue-100">Perfect Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">BAR</div>
                <div className="text-sm text-blue-100">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Hurricane Response</div>
              </div>
            </div>

            <p className="text-sm text-blue-100 mt-8">
              ⚡ Serving all Charleston neighborhoods • Downtown • West Ashley • James Island • Johns Island • Daniel Island • Licensed & insured
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
