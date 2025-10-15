import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Expert Roofing Services Simpsonville SC | Weather Shield Roofing - 5.0★ Five Forks Area',
  description: "Simpsonville's premier roofing contractor with 5.0★ rating. Expert roof replacement, repair & storm damage services. Greenville County suburb specialists. GAF Certified. Call (843) 877-5539",
  keywords: 'roofing simpsonville sc, simpsonville roofing contractor, roof replacement simpsonville, roof repair simpsonville sc, storm damage roofing simpsonville, five forks roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roofing/simpsonville',
  },
  openGraph: {
    title: "Expert Roofing Services Simpsonville SC | Weather Shield Roofing - 5.0★",
    description: "Simpsonville's premier roofing contractor. GAF Certified • 24/7 Emergency Service • Lifetime Warranties • Serving Greenville's Fastest-Growing Suburb",
    url: 'https://weathershieldroofers.com/roofing/simpsonville',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/simpsonville-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Roofing Services in Simpsonville, SC - Weather Shield Roofing',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function SimpsonvilleRoofingPage() {
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
                "name": "Weather Shield Roofing - Simpsonville",
                "image": "https://weathershieldroofers.com/images/logo.png",
                "url": "https://weathershieldroofers.com/roofing/simpsonville",
                "telephone": "+18438775539",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Simpsonville",
                  "addressRegion": "SC",
                  "postalCode": "29680",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 34.7370,
                  "longitude": -82.2543
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
                  "name": "Simpsonville",
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
                  "name": "Simpsonville"
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
                    "name": "How much does roof replacement cost in Simpsonville SC?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Roof replacement costs vary based on size, materials, and complexity. Contact Weather Shield Roofing at (843) 877-5539 for a free inspection and detailed quote. We offer flexible financing with 0% APR options available."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's the best roofing material for Simpsonville's Piedmont climate?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For Simpsonville's moderate Piedmont climate with four distinct seasons, we recommend GAF architectural shingles with superior durability or metal roofing with excellent energy efficiency. Both are ideal for Greenville County's fastest-growing suburb."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you handle insurance claims for storm damage?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Weather Shield Roofing specializes in insurance claims for storm damage. We handle the entire process from documentation to working directly with your insurance adjuster to maximize your coverage."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer 24/7 emergency roofing services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. Weather Shield Roofing provides true 24/7 emergency roofing service with rapid response. Call (843) 877-5539 anytime for emergency tarping, leak repair, or storm damage assessment."
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
                    "name": "Simpsonville Roofing",
                    "item": "https://weathershieldroofers.com/roofing/simpsonville"
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
                  Simpsonville's Premier Roofing Contractor
                </h1>

                <p className="text-xl md:text-2xl text-blue-100">
                  Expert Roofing Services for Greenville's Fastest-Growing Suburb • GAF Certified • 24/7 Emergency Response
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>GAF Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>BBB A+ Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Licensed & Insured</span>
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

                  <p className="text-xs text-gray-500 text-center">⚡ Emergency service available 24/7 • Licensed & insured</p>
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
                <div className="text-3xl font-bold text-blue-900">25K</div>
                <div className="text-sm text-gray-600">Simpsonville Residents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">Fastest</div>
                <div className="text-sm text-gray-600">Growing Greenville Suburb</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">15+ Years</div>
                <div className="text-sm text-gray-600">In South Carolina</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">5.0 ⭐</div>
                <div className="text-sm text-gray-600">Perfect Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Simpsonville Chooses Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Simpsonville Homeowners Choose Weather Shield
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protecting Greenville's fastest-growing family-oriented suburb with expert roofing services designed for Piedmont climate challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🏡',
                  title: 'Family Community Specialists',
                  description: 'Deep understanding of Simpsonville\'s family-oriented neighborhoods from Downtown to Five Forks, Jonesville to Fairview areas.'
                },
                {
                  icon: '🎓',
                  title: 'Excellent Schools Protection',
                  description: 'Trusted by Simpsonville families in top-rated school districts. Expertise in protecting newer suburban homes with quality warranties.'
                },
                {
                  icon: '🌡️',
                  title: 'Four-Season Roofing Systems',
                  description: 'Simpsonville\'s moderate four seasons require versatile roofing materials with excellent thermal performance and weather resistance.'
                },
                {
                  icon: '⛈️',
                  title: 'Storm Damage Experts',
                  description: 'Greenville County experiences severe thunderstorms and occasional hail. Wind-rated installations and rapid emergency response.'
                },
                {
                  icon: '🌳',
                  title: 'Heritage Park Community Trusted',
                  description: 'Serving Simpsonville\'s beautiful neighborhoods and green spaces. Expertise in preserving property values with quality roofing.'
                },
                {
                  icon: '✅',
                  title: '5.0★ Perfect Rating',
                  description: 'Only roofing company serving Simpsonville with perfect 5.0-star Google rating. 73 verified reviews from satisfied Upstate customers.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete Roofing Services for Simpsonville SC
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From emergency repairs to complete roof replacements, serving residential properties throughout Greater Simpsonville.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Roof Replacement',
                  description: 'Complete tear-off and installation with premium GAF materials. Family-friendly warranties for Simpsonville homes.',
                  icon: '🏠',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'Roof Repair',
                  description: 'Expert leak repair, storm damage, and emergency repairs with rapid Simpsonville response.',
                  icon: '🔧',
                  link: '/services/roof-repair'
                },
                {
                  title: 'Storm Damage Repair',
                  description: 'Thunderstorm and hail damage specialists. We handle insurance claims from start to finish.',
                  icon: '⛈️',
                  link: '/services/storm-damage'
                },
                {
                  title: 'Emergency Roofing',
                  description: 'True 24/7 emergency service for Simpsonville. Rapid response guaranteed.',
                  icon: '🚨',
                  link: '/emergency'
                },
                {
                  title: 'Residential Roofing',
                  description: 'Trusted by Simpsonville families. Architectural shingles, modern systems for suburban homes.',
                  icon: '🏘️',
                  link: '/services/residential-roofing'
                },
                {
                  title: 'Metal Roofing',
                  description: 'Energy-efficient metal systems perfect for Simpsonville\'s climate. Cool roof certified.',
                  icon: '⚡',
                  link: '/services/metal-roofing'
                },
                {
                  title: 'Roof Inspections',
                  description: 'Free estimates with drone technology. Pre-sale inspections for Simpsonville real estate.',
                  icon: '🔍',
                  link: '/services/roof-inspections'
                },
                {
                  title: 'Gutter Services',
                  description: 'Professional gutter systems. Essential for Simpsonville\'s Piedmont rainfall patterns.',
                  icon: '💧',
                  link: '/services/gutter-services'
                }
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
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

        {/* Simpsonville Climate Challenges */}
        <section className="py-16 md:py-24 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Understanding Simpsonville's Piedmont Climate
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Simpsonville's position in Greenville County creates unique roofing challenges requiring specialized knowledge and materials for four-season protection.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: 'Moderate Four Seasons',
                    description: 'Simpsonville experiences distinct spring, summer, fall, and winter seasons. We install versatile roofing systems that handle temperature variations excellently.'
                  },
                  {
                    title: 'Warm Summer Days',
                    description: 'Summers reach 90°F with moderate humidity. We install heat-resistant shingles with reflective technology and proper ventilation.'
                  },
                  {
                    title: 'Severe Thunderstorms',
                    description: 'Greenville County experiences intense storms with hail and high winds. Wind-rated installations up to 130 MPH for maximum family protection.'
                  },
                  {
                    title: 'Mild Winters',
                    description: 'Winters are generally mild with occasional cold snaps. We install impact-resistant materials that withstand rare ice events.'
                  },
                  {
                    title: 'Suburban Growth Considerations',
                    description: 'Newer homes in Simpsonville require modern roofing systems with extended warranties and excellent curb appeal for property values.'
                  }
                ].map((challenge, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                    <p className="text-blue-100">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Simpsonville Neighborhoods */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Serving All Simpsonville Neighborhoods
              </h2>
              <p className="text-xl text-gray-600">
                From downtown to Five Forks, we protect homes throughout Greater Simpsonville.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                'Downtown Simpsonville',
                'Five Forks',
                'Jonesville',
                'Fairview',
                'Mauldin Border Area',
                'Heritage Park',
                'Simpsonville Station',
                'Southeast Greenville',
                'Fountain Inn Border',
                'Greenville County Suburbs'
              ].map((neighborhood, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
                >
                  <span className="text-gray-900 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Simpsonville Roofing FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Answers to common roofing questions for Simpsonville homeowners
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'How much does roof replacement cost in Simpsonville SC?',
                  answer: 'Roof replacement costs vary based on size, materials, and complexity. Contact Weather Shield Roofing at (843) 877-5539 for a free inspection and detailed quote. We offer flexible financing with 0% APR options available.'
                },
                {
                  question: "What's the best roofing material for Simpsonville's climate?",
                  answer: "For Simpsonville's moderate Piedmont climate with four seasons, we recommend GAF architectural shingles with superior durability or metal roofing with excellent energy efficiency. Both offer great protection for Greenville County suburban homes."
                },
                {
                  question: 'How long does a roof last in Simpsonville SC?',
                  answer: "With proper installation and maintenance, architectural shingles last 25-30 years in Simpsonville, while metal roofs can last 50+ years. Regular inspections maximize your roof's lifespan in our moderate climate."
                },
                {
                  question: 'Do you handle insurance claims for storm damage?',
                  answer: "Yes! Weather Shield Roofing specializes in storm damage insurance claims. We handle the entire process including documentation, adjuster meetings, and claim maximization. Simpsonville's storm season keeps us busy helping families."
                },
                {
                  question: 'Are you licensed in Simpsonville and Greenville County?',
                  answer: 'Yes, Weather Shield Roofing is fully licensed, bonded, and insured in Simpsonville, Greenville County, and throughout South Carolina. We meet all state and local requirements.'
                },
                {
                  question: 'How do I prepare for Simpsonville storm season?',
                  answer: 'Schedule a free inspection before spring/summer storm season. We check for loose shingles, damaged flashing, and weak points. We can also install impact-resistant materials and upgrade to higher wind ratings.'
                }
              ].map((faq, index) => (
                <details key={index} className="bg-white rounded-lg p-6 group">
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
              Ready to Protect Your Simpsonville Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of Simpsonville families who chose quality, reliability, and peace of mind with Weather Shield Roofing.
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
                <div className="text-3xl font-bold">BBB A+</div>
                <div className="text-sm text-blue-100">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5.0★</div>
                <div className="text-sm text-blue-100">Google Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Emergency Service</div>
              </div>
            </div>

            <p className="text-sm text-blue-100 mt-8">
              ⚡ Emergency service available 24/7 • Licensed & insured • Serving Simpsonville & Greenville County
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
