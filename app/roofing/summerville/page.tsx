import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Expert Roofing Services Summerville SC | Weather Shield Roofing - 5.0★ Rated',
  description: "Summerville's inland roofing experts. NO SALT AIR advantage! Flowertown in the Pines. Longer roof lifespan. Carnes Crossroads, Nexton, Six Oaks. Call (843) 877-5539",
  keywords: 'roofing summerville sc, summerville roofing contractor, inland roofing summerville, carnes crossroads roofing, nexton roofing, flowertown roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roofing/summerville',
  },
  openGraph: {
    title: "Expert Roofing Services Summerville SC | Weather Shield Roofing - 5.0★",
    description: "Inland roofing for Summerville. NO salt air corrosion • Longer roof lifespan • GAF Certified",
    url: 'https://weathershieldroofers.com/roofing/summerville',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/summerville-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Inland Roofing Services in Summerville, SC - Flowertown in the Pines',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function SummervilleRoofingPage() {
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
                "name": "Weather Shield Roofing - Summerville",
                "image": "https://weathershieldroofers.com/images/logo.png",
                "url": "https://weathershieldroofers.com/roofing/summerville",
                "telephone": "+18438775539",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Serving Summerville",
                  "addressLocality": "Summerville",
                  "addressRegion": "SC",
                  "postalCode": "29483",
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
                  "name": "Summerville",
                  "containedIn": {
                    "@type": "State",
                    "name": "South Carolina"
                  }
                }
              },
              {
                "@type": "Service",
                "serviceType": "Inland Roofing Services",
                "provider": {
                  "@id": "https://weathershieldroofers.com/#organization"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Summerville"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Inland Roofing Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Residential Roof Replacement"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "New Construction Roofing"
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
                        "name": "Tree Damage Repair"
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
                    "name": "How does Summerville's inland location benefit my roof?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Summerville's inland location (24-26 miles NW of Charleston) provides MAJOR advantages: NO salt air corrosion on metal fasteners/flashing/vents, reduced wind speeds during storms, and significantly longer roof lifespan (30-35 years vs. 20-25 coastal). Your roof will last 5-10 years longer than coastal properties."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What challenges do Summerville roofs face?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Summerville faces high humidity (but less than coast), heavy rainfall from tropical storm remnants, pine trees (sap and falling branches), and hot summers. However, these challenges are FAR less severe than salt air corrosion. Hurricane Helene (Sep 2024) brought heavy rain/moderate winds but MUCH less impact than the coast."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you serve new developments like Carnes Crossroads and Nexton?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! We specialize in Summerville's growing communities including Carnes Crossroads, Nexton, Six Oaks, Hewing Farms, and all new construction neighborhoods. We work with builders and provide new homeowner roofing services throughout Flowertown."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Summerville more affordable than Charleston and Mount Pleasant for roofing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Summerville roofs typically cost less because: no marine-grade materials needed (no salt air), simpler inland construction, and more competitive market. Plus your roof will last LONGER than coastal properties, providing better long-term value. You get more years of protection for less initial cost."
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
                    "name": "Summerville Roofing",
                    "item": "https://weathershieldroofers.com/roofing/summerville"
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
                  Summerville's Trusted Inland Roofing Experts
                </h1>

                <p className="text-xl md:text-2xl text-blue-100">
                  Serving "Flowertown in the Pines" Since 2010 • NO Salt Air Advantage • 52K Residents
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <div>
                      <div className="font-bold text-lg">MAJOR Inland Location Advantage</div>
                      <div className="text-blue-100 text-sm">NO salt air corrosion • Longer roof lifespan • 24-26 miles NW of Charleston</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>30-35 Year Roof Lifespan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>New Construction Specialists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Better Long-Term Value</span>
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
                <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Summerville Inspection</h3>

                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>No-pressure consultation</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Longer lifespan estimates</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Better value than coastal</span>
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
                <div className="text-3xl font-bold text-blue-900">52,406</div>
                <div className="text-sm text-gray-600">Summerville Residents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">24-26 Miles</div>
                <div className="text-sm text-gray-600">NW of Charleston</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">NO</div>
                <div className="text-sm text-gray-600">Salt Air Corrosion</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">5.0 ⭐</div>
                <div className="text-sm text-gray-600">Perfect Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Summerville */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Why Summerville Homeowners Choose Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Understanding "Flowertown's" Roofing Advantages
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Summerville (52,406 residents) is known as "Flowertown in the Pines" for its natural beauty and inland charm. Located 24-26 miles northwest of Charleston and ~110 miles from Myrtle Beach, your roofing needs are fundamentally different from coastal properties.
                  </p>
                  <p>
                    <strong>MAJOR Inland Advantage - NO Salt Air:</strong> This is huge. Summerville's inland location means ZERO salt air corrosion on metal fasteners, flashing, and vents. Your roof will last 5-10 years longer than coastal properties. Standard galvanized fasteners work perfectly here—no expensive marine-grade materials needed.
                  </p>
                  <p>
                    <strong>What Summerville Roofs DO Face:</strong> High humidity (but less than coast), heavy rainfall from tropical storm remnants, pine trees dropping sap and branches, and hot summers. Hurricane Helene (September 2024) brought heavy rain and moderate winds but MUCH less impact than Charleston's coast.
                  </p>
                  <p>
                    <strong>Growing Community:</strong> Summerville is booming with new developments like Carnes Crossroads, Nexton, Six Oaks, and Hewing Farms. More affordable than Charleston/Mount Pleasant, families are choosing Summerville for quality of life and better value—including better roofing value.
                  </p>
                  <p>
                    Bottom line: Summerville roofs cost less initially, last longer, and provide better ROI than coastal properties. You're getting the best of both worlds.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/background/residential-roofing-gutter-siding-services.jpg"
                    alt="Professional inland roofing services in Summerville SC - Flowertown in the Pines"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">600+</div>
                  <div className="text-sm">Summerville<br/>Homes Protected</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summerville Climate Challenges */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Summerville Roofing Considerations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding your inland advantages and what to watch for
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">NO Salt Air Corrosion</h3>
                <p className="text-gray-600 mb-4">MAJOR ADVANTAGE: 24-26 miles inland means zero salt spray. Standard materials last 5-10 years longer than coast.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    30-35 year roof lifespan
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Better long-term ROI
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Rainfall</h3>
                <p className="text-gray-600 mb-4">Tropical storm remnants bring heavy rain. Proper drainage and water management critical for Summerville homes.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Quality gutter systems
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Proper flashing installations
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🌲</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pine Trees</h3>
                <p className="text-gray-600 mb-4">"Flowertown in the Pines" means pine sap, needles, and falling branches. Regular maintenance prevents damage.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Regular roof cleaning
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Tree damage repair specialists
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">⛈️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hurricane Helene (Sep 2024)</h3>
                <p className="text-gray-600 mb-4">Heavy rain and moderate winds but MUCH less impact than Charleston coast. Inland location provides protection.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Reduced wind speeds inland
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Storm damage repair available
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🏘️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">New Construction Boom</h3>
                <p className="text-gray-600 mb-4">Carnes Crossroads, Nexton, Six Oaks, Hewing Farms. Rapid growth means many new roofs and builder partnerships.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    New construction specialists
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
                <p className="text-gray-600 mb-4">High heat and humidity but less than coast. Proper ventilation extends roof life and reduces energy costs.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Proper attic ventilation
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Energy-efficient options
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
                Our Summerville Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete Roofing Services for Summerville
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Inland roofing solutions with better lifespan and value
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Residential Roof Replacement',
                  description: 'Complete replacement with standard materials that last 30-35 years inland. Better value than coastal.',
                  icon: '🏠',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'New Construction Roofing',
                  description: 'Serving Carnes Crossroads, Nexton, Six Oaks, Hewing Farms. Builder partnerships and warranties.',
                  icon: '🏗️',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'Storm Damage Repair',
                  description: 'Hurricane Helene damage repair. Less severe than coast but still requires expert restoration.',
                  icon: '⛈️',
                  link: '/services/storm-damage'
                },
                {
                  title: 'Emergency Roofing',
                  description: 'True 24/7 emergency service throughout Summerville and surrounding Dorchester County.',
                  icon: '🚨',
                  link: '/emergency'
                },
                {
                  title: 'Tree Damage Repair',
                  description: 'Pine tree specialists. Falling branches and sap damage repair for Flowertown properties.',
                  icon: '🌲',
                  link: '/services/storm-damage'
                },
                {
                  title: 'Roof Repair',
                  description: 'Expert leak repair and maintenance. Keep your inland roof lasting its full 30-35 years.',
                  icon: '🔧',
                  link: '/services/roof-repair'
                },
                {
                  title: 'Roof Inspections',
                  description: 'Comprehensive inspections with drone technology. Pre-purchase inspections for new homes.',
                  icon: '🔍',
                  link: '/services/roof-inspections'
                },
                {
                  title: 'Gutter Services',
                  description: 'Critical for heavy Summerville rainfall. Installation, repair, guards, pine needle prevention.',
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

        {/* Summerville Neighborhoods */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Serving All Summerville Neighborhoods
              </h2>
              <p className="text-xl text-gray-600">
                From new developments to established communities, we protect Flowertown homes
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'Carnes Crossroads', link: '/locations/summerville' },
                { name: 'Nexton', link: '/locations/summerville' },
                { name: 'Six Oaks', link: '/locations/summerville' },
                { name: 'Hewing Farms', link: '/locations/summerville' },
                { name: 'Historic Downtown', link: '/locations/summerville' },
                { name: 'Azalea Square', link: '/locations/summerville' },
                { name: 'Newington Plantation', link: '/locations/summerville' },
                { name: 'Brighton Park', link: '/locations/summerville' },
                { name: 'Del Webb Nexton', link: '/locations/summerville' },
                { name: 'Summers Corner', link: '/locations/summerville' }
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
              <Link href="/locations/summerville" className="text-blue-600 hover:text-blue-700 font-semibold">
                View Complete Summerville Service Map →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Summerville Roofing FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Answers to common questions from Summerville homeowners
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'How does Summerville\'s inland location benefit my roof?',
                  answer: 'Summerville\'s inland location (24-26 miles NW of Charleston) provides MAJOR advantages: NO salt air corrosion on metal fasteners/flashing/vents, reduced wind speeds during storms, and significantly longer roof lifespan (30-35 years vs. 20-25 coastal). Your roof will last 5-10 years longer than coastal properties.'
                },
                {
                  question: 'What challenges do Summerville roofs face?',
                  answer: 'Summerville faces high humidity (but less than coast), heavy rainfall from tropical storm remnants, pine trees (sap and falling branches), and hot summers. However, these challenges are FAR less severe than salt air corrosion. Hurricane Helene (Sep 2024) brought heavy rain/moderate winds but MUCH less impact than the coast.'
                },
                {
                  question: 'Do you serve new developments like Carnes Crossroads and Nexton?',
                  answer: 'Absolutely! We specialize in Summerville\'s growing communities including Carnes Crossroads, Nexton, Six Oaks, Hewing Farms, and all new construction neighborhoods. We work with builders and provide new homeowner roofing services throughout Flowertown.'
                },
                {
                  question: 'Is Summerville more affordable than Charleston and Mount Pleasant for roofing?',
                  answer: 'Yes! Summerville roofs typically cost less because: no marine-grade materials needed (no salt air), simpler inland construction, and more competitive market. Plus your roof will last LONGER than coastal properties, providing better long-term value. You get more years of protection for less initial cost.'
                },
                {
                  question: 'How long will my Summerville roof last?',
                  answer: 'Summerville roofs last 30-35 years with proper materials and maintenance—significantly longer than coastal properties (20-25 years). The absence of salt air corrosion means fasteners, flashing, and materials maintain integrity much longer. This is one of Summerville\'s biggest roofing advantages.'
                },
                {
                  question: 'Do I need special materials for Summerville\'s inland location?',
                  answer: 'No! That\'s the beauty of Summerville. Standard GAF architectural shingles, regular galvanized fasteners, and standard flashing work perfectly. No marine-grade materials needed. This saves money upfront while still providing excellent 30-35 year lifespan.'
                },
                {
                  question: 'What should I do about pine trees on my property?',
                  answer: 'Pine trees are part of Summerville\'s charm but require attention. We recommend: regular roof cleaning to remove needles/sap, trimming branches 10+ feet from your roof, annual inspections after storm season, and gutter guards to prevent needle clogs. We handle pine tree damage repairs quickly.'
                },
                {
                  question: 'How did Hurricane Helene affect Summerville compared to the coast?',
                  answer: 'Hurricane Helene (September 2024) brought heavy rain and moderate winds to Summerville but FAR less damage than Charleston\'s coast. Inland location provides natural wind reduction. Most Summerville damage was from heavy rainfall and fallen tree branches, not structural wind damage or storm surge.'
                },
                {
                  question: 'Do you work with Summerville builders for new construction?',
                  answer: 'Yes! We partner with builders throughout Summerville including Carnes Crossroads, Nexton, and other developments. We provide new construction roofing, builder warranties, and work within construction schedules. Many new homeowners choose us for their first roof replacement after builder warranties expire.'
                },
                {
                  question: 'Why is Summerville called "Flowertown in the Pines"?',
                  answer: 'Summerville earned this nickname from its famous azaleas and pine trees. For roofing, this means beautiful surroundings but also pine needle buildup and tree-related maintenance. We understand Flowertown\'s unique environment and provide services tailored to Summerville\'s piney, inland conditions.'
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
              Ready to Protect Your Summerville Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 600+ Summerville homeowners enjoying longer-lasting roofs and better value with Weather Shield Roofing.
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
                <div className="text-3xl font-bold">NO</div>
                <div className="text-sm text-blue-100">Salt Air Corrosion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5.0★</div>
                <div className="text-sm text-blue-100">Perfect Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">30-35 Years</div>
                <div className="text-sm text-blue-100">Roof Lifespan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Better</div>
                <div className="text-sm text-blue-100">Value</div>
              </div>
            </div>

            <p className="text-sm text-blue-100 mt-8">
              ⚡ Serving all Summerville • Carnes Crossroads • Nexton • Six Oaks • Hewing Farms • Flowertown in the Pines • Licensed & insured
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
