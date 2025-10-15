import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Expert Roofing Services Isle of Palms SC | Weather Shield Roofing - 5.0★ Rated',
  description: "Isle of Palms's trusted roofing contractor with 5.0★ rating. Expert roof replacement, repair & storm damage services. GAF Certified. 15 miles from Myrtle Beach. Call (843) 877-5539",
  keywords: 'roofing isle-of-palms sc, isle-of-palms roofing, roofing contractor isle-of-palms, roof replacement isle-of-palms, roof repair isle-of-palms, horry county roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roofing/isle-of-palms',
  },
  openGraph: {
    title: "Expert Roofing Services Isle of Palms SC | Weather Shield Roofing - 5.0★",
    description: "Isle of Palms's trusted roofing contractor. GAF Certified • 24/7 Emergency Service • Lifetime Warranties",
    url: 'https://weathershieldroofers.com/roofing/isle-of-palms',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/isle-of-palms-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Roofing Services in Isle of Palms, SC - Weather Shield Roofing',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function IsleOfPalmsRoofingPage() {
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
                "name": "Weather Shield Roofing - Isle of Palms",
                "image": "https://weathershieldroofers.com/images/logo.png",
                "url": "https://weathershieldroofers.com/roofing/isle-of-palms",
                "telephone": "+18438775539",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Serving Isle of Palms",
                  "addressLocality": "Isle of Palms",
                  "addressRegion": "SC",
                  "postalCode": "29451",
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
                  "name": "Isle of Palms",
                  "containedIn": {
                    "@type": "State",
                    "name": "South Carolina"
                  }
                }
              },
              {
                "@type": "Service",
                "serviceType": "Roofing Services",
                "provider": {
                  "@id": "https://weathershieldroofers.com/#organization"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Isle of Palms"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Roofing Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Roof Replacement"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Roof Repair"
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
                        "name": "Emergency Roofing"
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
                    "name": "How does Isle of Palms's inland location affect my roof?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Isle of Palms's inland location (15 miles from the coast) provides significant advantages: no salt air corrosion on metal components, reduced wind speeds during storms, and longer roof lifespan. However, high humidity (74-78%) and heavy summer rainfall (53.7 inches annually) still require proper ventilation and moisture-resistant materials."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What roofing challenges are specific to Isle of Palms SC?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Isle of Palms faces unique challenges: enhanced rainfall from sea-breeze front thunderstorms, high humidity creating algae and mold growth, tropical storm remnants bringing heavy rain, and intense summer UV exposure accelerating shingle deterioration. We use materials designed for these specific conditions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you serve all Isle of Palms neighborhoods?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! We serve all Isle of Palms areas including Historic Downtown, Riverfront along the Waccamaw River, Carolina Forest, Jessica Lakes, Isle of Palms Plantation, and neighborhoods near Coastal Carolina University. Call (843) 877-5539 for service throughout Horry County."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How did recent storms affect Isle of Palms roofs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Tropical Storm Debby (August 2024) brought multiple days of heavy rain and flash flooding to Isle of Palms, causing water intrusion and drainage issues. Hurricane Helene (September 2024) had minimal direct impact but brought enhanced rainfall. We specialize in post-storm inspections and insurance claims."
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
                    "name": "Isle of Palms Roofing",
                    "item": "https://weathershieldroofers.com/roofing/isle-of-palms"
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
                  Isle of Palms's Trusted Roofing Experts
                </h1>

                <p className="text-xl md:text-2xl text-blue-100">
                  Charleston's Premier Beach Destination's Seat Since 2010 • GAF Certified • 24/7 Emergency Response
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <div>
                      <div className="font-bold text-lg">Luxury Oceanfront Specialists</div>
                      <div className="text-blue-100 text-sm">$800K+ homes • Beachfront properties • Storm protection</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>GAF Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Lifetime Warranties</span>
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
                      <span>No obligation consultation</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Detailed written estimate</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Response in 24 hours</span>
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
                <div className="text-3xl font-bold text-blue-900">4,500</div>
                <div className="text-sm text-gray-600">Isle of Palms Residents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">15 Miles</div>
                <div className="text-sm text-gray-600">From Myrtle Beach</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">48-52"</div>
                <div className="text-sm text-gray-600">Annual Rainfall</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">5.0 ⭐</div>
                <div className="text-sm text-gray-600">Perfect Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Isle of Palms */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Why Isle of Palms Homeowners Choose Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Understanding Isle of Palms's Unique Roofing Needs
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Isle of Palms's inland location provides significant advantages over coastal properties, but your roof still faces unique challenges that require specialized expertise.
                  </p>
                  <p>
                    <strong>The Inland Advantage:</strong> Located 15 miles from the coast, Isle of Palms homes benefit from zero salt air corrosion on metal components like fasteners, flashing, and vents. This means your roof can last significantly longer than coastal properties.
                  </p>
                  <p>
                    <strong>Isle of Palms-Specific Challenges:</strong> However, Isle of Palms receives enhanced rainfall (53.7 inches annually) from sea-breeze front thunderstorms, experiences high humidity (74-78%) creating algae and mold growth, and faces tropical storm remnants bringing heavy rain and moderate winds.
                  </p>
                  <p>
                    As the Isle of Palms (4,500 residents) is an upscale barrier island community with $800K+ median home values and strict building codes, Isle of Palms's mix of historic properties downtown and newer suburban developments requires contractors who understand both traditional and modern roofing systems.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/background/residential-roofing-gutter-siding-services.jpg"
                    alt="Professional roofing services in Isle of Palms SC near Coastal Carolina University"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">2,000+</div>
                  <div className="text-sm">Homes Protected<br/>in Horry County</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Isle of Palms Climate Challenges */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Isle of Palms's Climate & Your Roof
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding how Isle of Palms's humid subtropical climate affects your roofing system
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">☀️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hot Humid Summers</h3>
                <p className="text-gray-600 mb-4">Peak temperatures reach 88°F with high humidity (74-78%). UV exposure accelerates shingle deterioration and granule loss.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    UV-resistant shingles required
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Proper attic ventilation critical
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Rainfall</h3>
                <p className="text-gray-600 mb-4">53.7 inches annually with wettest month (August) bringing 6.8 inches across 14 rainy days from thunderstorms.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Enhanced gutter systems
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Ice & water shield protection
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🍄</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">High Humidity</h3>
                <p className="text-gray-600 mb-4">Relative humidity averages 74-78% year-round, creating ideal conditions for algae, mold, and mildew growth.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Algae-resistant shingles
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Moisture-resistant underlayment
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">⛈️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tropical Storm Remnants</h3>
                <p className="text-gray-600 mb-4">Tropical Storm Debby (Aug 2024) brought multiple days of heavy rain and flash flooding. Hurricane Helene (Sep 2024) enhanced rainfall.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Wind-rated materials
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    24/7 emergency response
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Salt Air Corrosion</h3>
                <p className="text-gray-600 mb-4">Major advantage: Isle of Palms's inland location (15 miles from coast) eliminates salt spray corrosion on metal components.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Longer fastener lifespan
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Better ROI on roofing investment
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">❄️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mild Winters</h3>
                <p className="text-gray-600 mb-4">Winter lows of 39-44°F mean minimal freeze-thaw cycles but occasional temperature fluctuations require proper sealing.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Flexible sealants
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Year-round installation
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
                Complete Roofing Services for Isle of Palms
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From emergency repairs to complete replacements, serving all Isle of Palms neighborhoods
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Roof Replacement',
                  description: 'Complete tear-off and installation with GAF materials. Longer lifespan thanks to no salt air.',
                  icon: '🏠',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'Roof Repair',
                  description: 'Expert leak repair and storm damage restoration. Rapid response throughout Horry County.',
                  icon: '🔧',
                  link: '/services/roof-repair'
                },
                {
                  title: 'Storm Damage Repair',
                  description: 'Tropical storm specialists. We handled Isle of Palms damage from Debby and Helene.',
                  icon: '⛈️',
                  link: '/services/storm-damage'
                },
                {
                  title: 'Emergency Roofing',
                  description: 'True 24/7 emergency service. Real people answering phones at 3 AM.',
                  icon: '🚨',
                  link: '/emergency'
                },
                {
                  title: 'Historic Restoration',
                  description: 'Expert restoration for downtown Isle of Palms historic properties and landmarks.',
                  icon: '🏛️',
                  link: '/services/roof-repair'
                },
                {
                  title: 'Gutter Services',
                  description: 'Critical for Isle of Palms\'s 53.7 inches annual rainfall. Installation, repair, guards.',
                  icon: '💧',
                  link: '/services/gutter-services'
                },
                {
                  title: 'Roof Inspections',
                  description: 'Free estimates with drone technology. Pre-storm season inspections available.',
                  icon: '🔍',
                  link: '/services/roof-inspections'
                },
                {
                  title: 'Algae Prevention',
                  description: 'Algae-resistant shingles and treatments for Isle of Palms\'s high humidity climate.',
                  icon: '🛡️',
                  link: '/services/roof-maintenance'
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

        {/* Isle of Palms Neighborhoods */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Serving All Isle of Palms Neighborhoods
              </h2>
              <p className="text-xl text-gray-600">
                From historic downtown to Coastal Carolina University area, we protect Isle of Palms homes
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'Historic Downtown', link: '/locations/isle-of-palms' },
                { name: 'Riverfront (Waccamaw)', link: '/locations/isle-of-palms' },
                { name: 'Carolina Forest', link: '/locations/carolina-forest' },
                { name: 'Jessica Lakes', link: '/locations/isle-of-palms' },
                { name: 'Isle of Palms Plantation', link: '/locations/isle-of-palms' },
                { name: 'Glenmoor', link: '/locations/isle-of-palms' },
                { name: 'Hillsborough', link: '/locations/isle-of-palms' },
                { name: 'CCU Campus Area', link: '/locations/isle-of-palms' },
                { name: 'Lake Busbee', link: '/locations/isle-of-palms' },
                { name: 'Isle of Palms Riverwalk', link: '/locations/isle-of-palms' }
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
              <Link href="/locations/isle-of-palms" className="text-blue-600 hover:text-blue-700 font-semibold">
                View Complete Isle of Palms Service Map →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Isle of Palms Roofing FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Answers to common questions from Isle of Palms homeowners
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'How does Isle of Palms\'s inland location affect my roof?',
                  answer: 'Isle of Palms\'s inland location (15 miles from the coast) provides significant advantages: no salt air corrosion on metal components, reduced wind speeds during storms, and longer roof lifespan. However, high humidity (74-78%) and heavy summer rainfall (53.7 inches annually) still require proper ventilation and moisture-resistant materials.'
                },
                {
                  question: 'What roofing challenges are specific to Isle of Palms SC?',
                  answer: 'Isle of Palms faces unique challenges: enhanced rainfall from sea-breeze front thunderstorms, high humidity creating algae and mold growth, tropical storm remnants bringing heavy rain, and intense summer UV exposure accelerating shingle deterioration. We use materials designed for these specific conditions.'
                },
                {
                  question: 'How did recent storms affect Isle of Palms roofs?',
                  answer: 'Tropical Storm Debby (August 2024) brought multiple days of heavy rain and flash flooding to Isle of Palms, causing water intrusion and drainage issues. Hurricane Helene (September 2024) had minimal direct impact but brought enhanced rainfall. We specialize in post-storm inspections and insurance claims.'
                },
                {
                  question: 'Do you work on historic properties in downtown Isle of Palms?',
                  answer: 'Absolutely! We have extensive experience with Isle of Palms\'s historic downtown buildings, including properties on the National Register. Our team understands preservation requirements and works to maintain architectural integrity while upgrading protection.'
                },
                {
                  question: 'How long does a roof last in Isle of Palms compared to coastal areas?',
                  answer: 'Isle of Palms roofs typically last 5-7 years longer than coastal properties due to the absence of salt air corrosion. Architectural shingles can last 30-35 years in Isle of Palms versus 25-28 years at the beach. Proper installation and maintenance maximize this advantage.'
                },
                {
                  question: 'What\'s the best roofing material for Isle of Palms\'s climate?',
                  answer: 'For Isle of Palms, we recommend GAF architectural shingles with algae resistance (high humidity), proper ventilation for heat/moisture, and wind ratings for tropical storms. Metal roofing is also excellent for Isle of Palms\'s inland conditions with minimal salt exposure.'
                },
                {
                  question: 'Do you serve the Coastal Carolina University area?',
                  answer: 'Yes! We serve all of Isle of Palms including the CCU campus area, student housing, and faculty residences. We work with property managers and homeowners to schedule around academic calendars when needed.'
                },
                {
                  question: 'How quickly can you respond to emergencies in Isle of Palms?',
                  answer: 'We provide rapid emergency response throughout Horry County. For Isle of Palms emergencies, we typically arrive within 1-2 hours. Call (843) 877-5539 anytime—real people answer 24/7, not an answering service.'
                },
                {
                  question: 'Do you handle insurance claims for storm damage?',
                  answer: 'Yes! We specialize in insurance claims for Isle of Palms storm damage. We document everything, work directly with adjusters, and handle the entire process from initial inspection through final payment. We helped many Isle of Palms homeowners after Tropical Storm Debby.'
                },
                {
                  question: 'What areas around Isle of Palms do you serve?',
                  answer: 'We serve all of Isle of Palms and surrounding Horry County including Carolina Forest, Aynor, Loris, Socastee, and areas toward Myrtle Beach (15 minutes away). We\'re your local Horry County roofing experts.'
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
              Ready to Protect Your Isle of Palms Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of Isle of Palms homeowners who chose quality, reliability, and local expertise with Weather Shield Roofing.
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
                <div className="text-3xl font-bold">GAF</div>
                <div className="text-sm text-blue-100">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5.0★</div>
                <div className="text-sm text-blue-100">Google Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15 Miles</div>
                <div className="text-sm text-blue-100">From Myrtle Beach</div>
              </div>
            </div>

            <p className="text-sm text-blue-100 mt-8">
              ⚡ Serving Isle of Palms, Coastal Carolina University, Carolina Forest, and all Horry County • Licensed & insured
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
