import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Expert Roofing Services Mount Pleasant SC | Weather Shield Roofing - 5.0★',
  description: "Mount Pleasant's affluent waterfront roofing specialists. HIGH salt air exposure. Old Village, I'On, Park West, Dunes West. Premium materials. Call (843) 877-5539",
  keywords: 'roofing mount pleasant sc, mount pleasant roofing contractor, waterfront roofing mount pleasant, old village roofing, ion roofing, shem creek roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roofing/mount-pleasant',
  },
  openGraph: {
    title: "Expert Roofing Services Mount Pleasant SC | Weather Shield Roofing - 5.0★",
    description: "Premium waterfront roofing for Mount Pleasant. Salt air specialists • Luxury home experts • GAF Certified",
    url: 'https://weathershieldroofers.com/roofing/mount-pleasant',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/mount-pleasant-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Waterfront Roofing Services in Mount Pleasant, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function MountPleasantRoofingPage() {
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
                "name": "Weather Shield Roofing - Mount Pleasant",
                "image": "https://weathershieldroofers.com/images/logo.png",
                "url": "https://weathershieldroofers.com/roofing/mount-pleasant",
                "telephone": "+18438775539",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Serving Mount Pleasant",
                  "addressLocality": "Mount Pleasant",
                  "addressRegion": "SC",
                  "postalCode": "29464",
                  "addressCountry": "US"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "73",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "priceRange": "$$$",
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Mount Pleasant",
                  "containedIn": {
                    "@type": "State",
                    "name": "South Carolina"
                  }
                }
              },
              {
                "@type": "Service",
                "serviceType": "Premium Waterfront Roofing Services",
                "provider": {
                  "@id": "https://weathershieldroofers.com/#organization"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Mount Pleasant"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Premium Waterfront Roofing",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Luxury Home Roofing"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Waterfront Property Roofing"
                      }
                    },
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
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does Mount Pleasant's coastal location affect premium homes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Mount Pleasant experiences HIGH salt air exposure from coastal and waterfront locations. Properties in Old Village, along Shem Creek, and near the harbor face significant corrosion. Premium homes ($623K-$900K+) require marine-grade materials to protect substantial investments from accelerated deterioration."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you work on luxury communities like I'On, Park West, and Dunes West?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! We specialize in Mount Pleasant's premium neighborhoods including Old Village, I'On (upscale planned community), Park West, and Dunes West (exclusive riverside golf community). We understand HOA requirements, architectural standards, and provide the premium workmanship expected in these communities."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What damage did Hurricane Helene cause to Mount Pleasant roofs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Hurricane Helene (September 2024) brought tornadoes, strong winds, and flooding to Mount Pleasant, causing damage similar to Charleston's coastline. Tropical Storm Debby (August 2024) brought 15+ inches of rain. We responded rapidly to protect premium properties and specialize in luxury home insurance claims."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why do Mount Pleasant roofs cost more than other areas?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Mount Pleasant's affluent market (median income $121,364) and high property values demand premium materials and expert workmanship. Coastal exposure requires marine-grade components. Luxury home architectural complexity increases installation difficulty. HOA requirements often specify premium materials. You're protecting a $623K-$900K+ investment."
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
                    "name": "Mount Pleasant Roofing",
                    "item": "https://weathershieldroofers.com/roofing/mount-pleasant"
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
                  Mount Pleasant's Premium Waterfront Roofing Experts
                </h1>

                <p className="text-xl md:text-2xl text-blue-100">
                  Protecting 98K Affluent Residents • Old Village to Dunes West • Marine-Grade Excellence
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    <div>
                      <div className="font-bold text-lg">HIGH Salt Air Exposure + Luxury Homes</div>
                      <div className="text-blue-100 text-sm">Waterfront properties demand premium protection • 7-10 miles from Charleston</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Luxury Home Specialists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Marine-Grade Materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>HOA Approved</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate"
                    className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors shadow-lg"
                  >
                    Schedule Free Premium Inspection
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
                <h3 className="text-2xl font-bold mb-6 text-center">Premium Inspection & Estimate</h3>

                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Comprehensive waterfront assessment</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>Premium materials consultation</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>HOA-compliant solutions</span>
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

                  <p className="text-xs text-gray-500 text-center">⚡ Priority service for luxury properties</p>
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
                <div className="text-3xl font-bold text-blue-900">97,903</div>
                <div className="text-sm text-gray-600">Residents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">$121,364</div>
                <div className="text-sm text-gray-600">Median Income</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">$623K-$900K</div>
                <div className="text-sm text-gray-600">Median Home Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">5.0 ⭐</div>
                <div className="text-sm text-gray-600">Perfect Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Mount Pleasant */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Why Mount Pleasant Homeowners Choose Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Premium Roofing for Mount Pleasant's Waterfront Community
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Mount Pleasant (97,903 residents, median income $121,364) is Charleston's affluent waterfront community where luxury homes demand premium roofing solutions.
                  </p>
                  <p>
                    <strong>HIGH Salt Air Exposure:</strong> Located 7-10 miles from Charleston with coastal and waterfront properties throughout, Mount Pleasant faces significant salt air corrosion. Shem Creek waterfront, Old Village harbor-front, and Patriots Point area properties experience maximum exposure requiring marine-grade materials.
                  </p>
                  <p>
                    <strong>Luxury Home Market:</strong> With median home values ranging $623K-$900K+, Mount Pleasant homeowners expect—and deserve—premium workmanship. Neighborhoods like Old Village (historic charm), I'On (upscale planned community), Park West (family-friendly luxury), and Dunes West (exclusive riverside golf community) require contractors who understand high-end construction and HOA standards.
                  </p>
                  <p>
                    <strong>Recent Storm Impact:</strong> Hurricane Helene (September 2024) and Tropical Storm Debby (August 2024) caused significant damage to Mount Pleasant properties. Waterfront homes faced combined wind, rain, and storm surge challenges requiring specialized restoration expertise.
                  </p>
                  <p>
                    Mount Pleasant isn't just another coastal town—it's where Lowcountry luxury meets waterfront living. Your investment deserves roofing that matches the quality of your property.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/background/residential-roofing-gutter-siding-services.jpg"
                    alt="Professional luxury waterfront roofing services in Mount Pleasant SC"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">800+</div>
                  <div className="text-sm">Premium Homes<br/>Protected</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mount Pleasant Climate Challenges */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Mount Pleasant Waterfront Challenges
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the conditions affecting your premium coastal investment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">HIGH Salt Air Exposure</h3>
                <p className="text-gray-600 mb-4">Coastal location plus waterfront properties (Shem Creek, harbor, creeks) create significant salt spray exposure accelerating corrosion.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    Marine-grade fasteners required
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    Premium corrosion-resistant materials
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🏰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Home Complexity</h3>
                <p className="text-gray-600 mb-4">High-end homes feature complex architecture: multiple roof planes, dormers, custom details requiring expert installation.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Expert architectural roofing
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Custom detail work
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🌀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hurricane Helene & Debby Damage</h3>
                <p className="text-gray-600 mb-4">Helene (Sep 2024) & Debby (Aug 2024) caused significant wind, rain, and flooding damage to Mount Pleasant waterfront properties.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Hurricane damage specialists
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Premium insurance claims
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🏘️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">HOA Requirements</h3>
                <p className="text-gray-600 mb-4">Premium communities (I'On, Park West, Dunes West) have strict HOA requirements for materials, colors, architectural consistency.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Full HOA compliance
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Architectural committee approval
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">High Property Values</h3>
                <p className="text-gray-600 mb-4">$623K-$900K+ median values mean homeowners expect premium workmanship protecting substantial investments.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Premium materials standard
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Lifetime warranties available
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Historic Old Village</h3>
                <p className="text-gray-600 mb-4">Old Village historic district requires sensitive restoration maintaining character while providing modern protection.</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Historic preservation expertise
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Period-appropriate materials
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
                Our Premium Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete Roofing Services for Mount Pleasant
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Premium solutions for waterfront luxury homes and historic properties
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Luxury Home Roofing',
                  description: 'Complete replacement for high-end properties. Complex architecture, premium materials, expert craftsmanship.',
                  icon: '🏰',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'Waterfront Property Roofing',
                  description: 'Specialized service for Shem Creek, harbor-front, and creek-side homes. Marine-grade materials.',
                  icon: '🌊',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'Hurricane Damage Repair',
                  description: 'Helene & Debby damage restoration. Premium insurance claims for luxury properties.',
                  icon: '🌀',
                  link: '/services/storm-damage'
                },
                {
                  title: 'Emergency Roofing',
                  description: 'Priority 24/7 emergency service for Mount Pleasant premium homes. Rapid response guaranteed.',
                  icon: '🚨',
                  link: '/emergency'
                },
                {
                  title: 'Historic Old Village Roofing',
                  description: 'Sensitive restoration for Old Village historic district homes maintaining architectural character.',
                  icon: '🏛️',
                  link: '/services/roof-repair'
                },
                {
                  title: 'HOA-Compliant Roofing',
                  description: 'Full compliance with I\'On, Park West, Dunes West requirements. Architectural committee approvals.',
                  icon: '🏘️',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'Premium Roof Inspections',
                  description: 'Comprehensive luxury home inspections. Drone technology, waterfront corrosion assessment.',
                  icon: '🔍',
                  link: '/services/roof-inspections'
                },
                {
                  title: 'Gutter Services',
                  description: 'Premium gutter systems for high-end homes. Copper, seamless aluminum, custom solutions.',
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

        {/* Mount Pleasant Neighborhoods */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Serving All Mount Pleasant Neighborhoods
              </h2>
              <p className="text-xl text-gray-600">
                From historic Old Village to exclusive Dunes West, we protect Mount Pleasant's premium homes
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'Old Village', link: '/locations/mount-pleasant' },
                { name: 'I\'On', link: '/locations/mount-pleasant' },
                { name: 'Park West', link: '/locations/mount-pleasant' },
                { name: 'Dunes West', link: '/locations/mount-pleasant' },
                { name: 'Shem Creek', link: '/locations/mount-pleasant' },
                { name: 'Patriots Point', link: '/locations/mount-pleasant' },
                { name: 'Pitt Street Bridge Area', link: '/locations/mount-pleasant' },
                { name: 'Belle Hall', link: '/locations/mount-pleasant' },
                { name: 'Seaside Farms', link: '/locations/mount-pleasant' },
                { name: 'Rivertowne', link: '/locations/mount-pleasant' }
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
              <Link href="/locations/mount-pleasant" className="text-blue-600 hover:text-blue-700 font-semibold">
                View Complete Mount Pleasant Service Map →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Mount Pleasant Roofing FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Answers to common questions from Mount Pleasant luxury homeowners
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'How does Mount Pleasant\'s coastal location affect premium homes?',
                  answer: 'Mount Pleasant experiences HIGH salt air exposure from coastal and waterfront locations. Properties in Old Village, along Shem Creek, and near the harbor face significant corrosion. Premium homes ($623K-$900K+) require marine-grade materials to protect substantial investments from accelerated deterioration.'
                },
                {
                  question: 'Do you work on luxury communities like I\'On, Park West, and Dunes West?',
                  answer: 'Absolutely! We specialize in Mount Pleasant\'s premium neighborhoods including Old Village, I\'On (upscale planned community), Park West, and Dunes West (exclusive riverside golf community). We understand HOA requirements, architectural standards, and provide the premium workmanship expected in these communities.'
                },
                {
                  question: 'What damage did Hurricane Helene cause to Mount Pleasant roofs?',
                  answer: 'Hurricane Helene (September 2024) brought tornadoes, strong winds, and flooding to Mount Pleasant, causing damage similar to Charleston\'s coastline. Tropical Storm Debby (August 2024) brought 15+ inches of rain. We responded rapidly to protect premium properties and specialize in luxury home insurance claims.'
                },
                {
                  question: 'Why do Mount Pleasant roofs cost more than other areas?',
                  answer: 'Mount Pleasant\'s affluent market (median income $121,364) and high property values demand premium materials and expert workmanship. Coastal exposure requires marine-grade components. Luxury home architectural complexity increases installation difficulty. HOA requirements often specify premium materials. You\'re protecting a $623K-$900K+ investment.'
                },
                {
                  question: 'How long does a roof last on Mount Pleasant waterfront properties?',
                  answer: 'Mount Pleasant waterfront roofs last 22-28 years with proper marine-grade materials, compared to 30-35 years inland. Salt air exposure accelerates deterioration but is less severe than direct oceanfront. We use corrosion-resistant fasteners and premium materials to maximize lifespan in coastal conditions.'
                },
                {
                  question: 'Do you handle HOA approvals for I\'On and Park West?',
                  answer: 'Yes! We handle all HOA architectural committee submissions for I\'On, Park West, Dunes West, and other planned communities. We know material requirements, color restrictions, and approval processes. We ensure your roofing project complies with community standards and gets approved the first time.'
                },
                {
                  question: 'What makes Old Village roofing different from other neighborhoods?',
                  answer: 'Old Village is Mount Pleasant\'s historic district with homes dating back centuries. Many require preservation-sensitive approaches maintaining architectural character. Waterfront Old Village properties also face HIGH salt air exposure. We combine historic expertise with marine-grade coastal solutions.'
                },
                {
                  question: 'Do you serve Shem Creek waterfront restaurants and businesses?',
                  answer: 'Yes! We serve both residential and commercial waterfront properties along Shem Creek. Restaurant and marina buildings face extreme salt exposure and require specialized commercial roofing solutions. We understand the unique challenges of Shem Creek\'s waterfront environment.'
                },
                {
                  question: 'Should I get metal roofing for my Mount Pleasant waterfront home?',
                  answer: 'Metal roofing with marine-grade coatings is excellent for Mount Pleasant waterfront properties. It resists salt air corrosion better than asphalt shingles, lasts 35-40 years, and provides superior hurricane wind resistance. Many luxury homes choose metal for longevity and premium appearance.'
                },
                {
                  question: 'How do you protect my luxury home during roofing installation?',
                  answer: 'We treat your premium property with extra care: tarps protect landscaping, magnetic sweeps catch all nails, dumpsters placed on plywood to prevent driveway damage, crew supervision ensures quality, daily cleanup, and respectful communication throughout. Your $623K+ investment deserves meticulous attention.'
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
              Ready to Protect Your Mount Pleasant Luxury Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 800+ Mount Pleasant homeowners who trust Weather Shield Roofing for premium waterfront expertise and luxury home quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors shadow-lg"
              >
                Schedule Premium Inspection
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
                <div className="text-3xl font-bold">Luxury</div>
                <div className="text-sm text-blue-100">Home Specialists</div>
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
                <div className="text-3xl font-bold">HOA</div>
                <div className="text-sm text-blue-100">Approved</div>
              </div>
            </div>

            <p className="text-sm text-blue-100 mt-8">
              ⚡ Serving Old Village • I'On • Park West • Dunes West • Shem Creek • All Mount Pleasant waterfront communities • Licensed & insured
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
