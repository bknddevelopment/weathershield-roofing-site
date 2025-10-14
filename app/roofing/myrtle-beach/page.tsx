import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Expert Roofing Services Myrtle Beach SC | Weather Shield Roofing - 5.0★ Rated',
  description: "Myrtle Beach's #1 roofing contractor with 5.0★ rating. Expert roof replacement, repair & storm damage services. GAF Certified. 24/7 emergency service. Call (843) 877-5539",
  keywords: 'roofing myrtle beach, myrtle beach roofing, roofing contractor myrtle beach sc, roof replacement myrtle beach, roof repair myrtle beach, storm damage roofing myrtle beach',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roofing/myrtle-beach',
  },
  openGraph: {
    title: "Expert Roofing Services Myrtle Beach SC | Weather Shield Roofing - 5.0★",
    description: "Myrtle Beach's #1 roofing contractor. GAF Certified • 24/7 Emergency Service • Lifetime Warranties",
    url: 'https://weathershieldroofers.com/roofing/myrtle-beach',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/myrtle-beach-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Roofing Services in Myrtle Beach, SC - Weather Shield Roofing',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function MyrtleBeachRoofingPage() {
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
                "name": "Weather Shield Roofing - Myrtle Beach",
                "image": "https://weathershieldroofers.com/images/logo.png",
                "url": "https://weathershieldroofers.com/roofing/myrtle-beach",
                "telephone": "+18438775539",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "215 Ronnie Ct. Unit F",
                  "addressLocality": "Myrtle Beach",
                  "addressRegion": "SC",
                  "postalCode": "29579",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 33.6891,
                  "longitude": -78.8867
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
                  "name": "Myrtle Beach",
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
                  "name": "Myrtle Beach"
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
                    "name": "How much does roof replacement cost in Myrtle Beach?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Roof replacement costs vary based on size, materials, and complexity. Contact Weather Shield Roofing at (843) 877-5539 for a free inspection and detailed quote. We offer flexible financing with 0% APR options available."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's the best roofing material for Myrtle Beach's coastal climate?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For Myrtle Beach's coastal climate, we recommend GAF architectural shingles or metal roofing. Both offer excellent hurricane wind resistance, salt air protection, and UV resistance. Our team can help you choose the best material for your specific needs and budget."
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
                      "text": "Absolutely. Weather Shield Roofing provides true 24/7 emergency roofing service with real people answering phones at 3 AM. Call (843) 877-5539 anytime for emergency tarping, leak repair, or storm damage assessment."
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
                    "name": "Myrtle Beach Roofing",
                    "item": "https://weathershieldroofers.com/roofing/myrtle-beach"
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
                  Myrtle Beach's #1 Rated Roofing Contractor
                </h1>

                <p className="text-xl md:text-2xl text-blue-100">
                  Expert Roofing Services Since 2010 • GAF Certified • 24/7 Emergency Response
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
                <div className="text-3xl font-bold text-blue-900">2,000+</div>
                <div className="text-sm text-gray-600">Homes Protected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">&lt; 1 Hour</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">15+ Years</div>
                <div className="text-sm text-gray-600">In Myrtle Beach</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">5.0 ⭐</div>
                <div className="text-sm text-gray-600">Perfect Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                  About Weather Shield Roofing
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Myrtle Beach's Trusted Roofing Partner Since 2010
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    For over 15 years, Weather Shield Roofing has been protecting homes and businesses throughout Myrtle Beach and the Carolina Coast with expert craftsmanship and exceptional service.
                  </p>
                  <p>
                    As a locally-owned and operated company, we understand the unique challenges that Myrtle Beach's coastal climate presents. From hurricane season to intense summer heat, humidity, and salt air exposure, your roof faces constant stress.
                  </p>
                  <p>
                    That's why we use only premium, weather-resistant materials and proven installation techniques designed specifically for our Carolina Coast climate. Every member of our team is GAF-certified and trained to deliver exceptional results.
                  </p>
                  <p>
                    We're proud to offer industry-leading warranties and stand behind every roof we install. When you choose Weather Shield Roofing, you're choosing a partner who will protect your home for decades to come.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/background/residential-roofing-gutter-siding-services.jpg"
                    alt="Weather Shield Roofing professional team in Myrtle Beach"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm">Years Serving<br/>Myrtle Beach</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete Roofing Services for Myrtle Beach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From emergency repairs to complete roof replacements, we provide expert solutions for residential and commercial properties.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Roof Replacement',
                  description: 'Complete tear-off and installation with premium GAF materials and lifetime warranties.',
                  icon: '🏠',
                  link: '/services/roof-replacement'
                },
                {
                  title: 'Roof Repair',
                  description: 'Expert leak repair, shingle replacement, and emergency repairs with rapid response.',
                  icon: '🔧',
                  link: '/services/roof-repair'
                },
                {
                  title: 'Storm Damage Repair',
                  description: 'Hurricane and wind damage specialists. We handle insurance claims from start to finish.',
                  icon: '⛈️',
                  link: '/services/storm-damage'
                },
                {
                  title: 'Emergency Roofing',
                  description: 'True 24/7 emergency service with real people answering phones at 3 AM.',
                  icon: '🚨',
                  link: '/emergency'
                },
                {
                  title: 'Commercial Roofing',
                  description: 'Flat roofs, TPO, EPDM systems for businesses throughout Myrtle Beach.',
                  icon: '🏢',
                  link: '/services/commercial-roofing'
                },
                {
                  title: 'Gutter Services',
                  description: 'Professional gutter installation, repair, guards, and maintenance plans.',
                  icon: '💧',
                  link: '/services/gutter-services'
                },
                {
                  title: 'Roof Inspections',
                  description: 'Free estimates with drone technology and detailed reporting.',
                  icon: '🔍',
                  link: '/services/roof-inspections'
                },
                {
                  title: 'Metal Roofing',
                  description: 'Hurricane-resistant metal roofing systems perfect for coastal properties.',
                  icon: '⚡',
                  link: '/services/metal-roofing'
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

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Myrtle Beach Homeowners Choose Weather Shield
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We don't just install roofs—we protect families, preserve investments, and deliver peace of mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '⭐',
                  title: '5.0★ Perfect Rating',
                  description: 'Only roofing company in Myrtle Beach with a perfect 5.0-star rating on Google (73 reviews).'
                },
                {
                  icon: '🏆',
                  title: 'GAF Certified Contractor',
                  description: 'Elite certification from North America\'s largest roofing manufacturer. Only 3% of contractors qualify.'
                },
                {
                  icon: '🏖️',
                  title: 'Coastal Roofing Specialists',
                  description: 'Deep understanding of salt air, humidity, hurricanes, and UV exposure unique to Myrtle Beach.'
                },
                {
                  icon: '⚡',
                  title: '24/7 Emergency Service',
                  description: 'Real people answering phones at 3 AM. Not an answering service. Rapid response guaranteed.'
                },
                {
                  icon: '🛡️',
                  title: 'Lifetime Warranties',
                  description: 'Industry-leading warranties on both materials and workmanship. Your roof protected for decades.'
                },
                {
                  icon: '💰',
                  title: 'Flexible Financing',
                  description: '0% APR options available. Affordable monthly payments. Approval in minutes.'
                },
                {
                  icon: '🎓',
                  title: '15+ Years Experience',
                  description: 'Serving Myrtle Beach since 2010. Over 2,000 satisfied customers and counting.'
                },
                {
                  icon: '✅',
                  title: 'BBB A+ Rating',
                  description: 'Accredited since 2023 with zero unresolved complaints. Commitment to customer satisfaction.'
                },
                {
                  icon: '📋',
                  title: 'Insurance Specialists',
                  description: 'We handle the entire claims process. Maximize your coverage. Zero stress for you.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Premium Materials
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Built for Myrtle Beach's Coastal Climate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We only use premium materials designed to withstand hurricanes, salt air, and intense UV exposure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Architectural Shingles',
                  description: 'GAF Timberline HDZ - Most popular choice. Hurricane wind ratings up to 130 MPH.',
                  features: ['50-Year Warranty', 'Hurricane Resistant', 'Salt Air Protection']
                },
                {
                  title: 'Metal Roofing',
                  description: 'Standing seam and corrugated panels. Maximum wind resistance and energy efficiency.',
                  features: ['Lifetime Durability', 'Energy Efficient', 'Low Maintenance']
                },
                {
                  title: 'Flat Roofing',
                  description: 'TPO and EPDM systems for commercial properties. UV and ozone resistant.',
                  features: ['Commercial Grade', 'UV Resistant', '20-Year Warranty']
                },
                {
                  title: 'Tile Roofing',
                  description: 'Mediterranean elegance with exceptional longevity and fire resistance.',
                  features: ['50+ Year Life', 'Fire Resistant', 'Hurricane Rated']
                }
              ].map((material, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{material.title}</h3>
                  <p className="text-gray-600 mb-4">{material.description}</p>
                  <ul className="space-y-2">
                    {material.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Simple 5-Step Process
              </h2>
              <p className="text-xl text-gray-600">
                From free inspection to final walkthrough, we make roofing easy.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: '1', title: 'Free Inspection', description: 'Schedule online or call. No obligation.' },
                { step: '2', title: 'Detailed Estimate', description: 'Transparent pricing. All options explained.' },
                { step: '3', title: 'Material Selection', description: 'Choose colors, styles, and warranties.' },
                { step: '4', title: 'Expert Installation', description: 'Factory-trained crews. No subcontractors.' },
                { step: '5', title: 'Final Walkthrough', description: 'Inspect together. Magnetic nail sweep.' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Serving All Myrtle Beach Neighborhoods
              </h2>
              <p className="text-xl text-gray-600">
                From downtown to luxury communities, we protect homes throughout Myrtle Beach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'Downtown Myrtle Beach', link: '/locations/myrtle-beach' },
                { name: 'Market Common', link: '/locations/market-common' },
                { name: 'Carolina Forest', link: '/locations/carolina-forest' },
                { name: 'Grande Dunes', link: '/locations/grande-dunes' },
                { name: 'Pine Lakes', link: '/locations/pine-lakes' },
                { name: 'Arcadian Shores', link: '/locations/myrtle-beach' },
                { name: 'Briarcliffe Acres', link: '/locations/briarcliffe-acres' },
                { name: 'Forestbrook', link: '/locations/forestbrook' },
                { name: 'DeBordieu Colony', link: '/locations/debordieu-colony' },
                { name: 'Wachesaw Plantation', link: '/locations/wachesaw-plantation' }
              ].map((neighborhood, index) => (
                <Link
                  key={index}
                  href={neighborhood.link}
                  className="bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-lg p-4 text-center transition-colors"
                >
                  <span className="text-gray-900 font-medium">{neighborhood.name}</span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/locations" className="text-blue-600 hover:text-blue-700 font-semibold">
                View All Service Areas →
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Customer Reviews
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Myrtle Beach Homeowners Say
              </h2>
              <p className="text-xl text-gray-600">
                5.0★ rating from 73 verified Google reviews
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'John D.',
                  location: 'Market Common, Myrtle Beach',
                  review: 'Weather Shield responded immediately after hurricane damage. Outstanding service from start to finish. They handled everything with our insurance company and our new roof looks amazing!',
                  rating: 5
                },
                {
                  name: 'Lisa K.',
                  location: 'Carolina Forest, Myrtle Beach',
                  review: 'Living near the ocean means constant challenges for our roof. Weather Shield installed a hurricane-resistant system that has performed perfectly. Best roofing company in Myrtle Beach!',
                  rating: 5
                },
                {
                  name: 'Mike R.',
                  location: 'Grande Dunes, Myrtle Beach',
                  review: 'Professional, punctual, and fair pricing. The crew was respectful of our property and cleanup was immaculate. The 50-year warranty gives us complete peace of mind.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="https://www.google.com/search?q=weather+shield+roofing+myrtle+beach" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold">
                Read All 73 Five-Star Reviews on Google →
              </a>
            </div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 md:py-24 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Understanding Myrtle Beach's Unique Roofing Challenges
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Myrtle Beach's coastal climate presents unique challenges that require specialized knowledge and materials.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: 'Hurricane Season (June-November)',
                    description: 'We install roofs with wind ratings up to 130 MPH and offer emergency tarping services.'
                  },
                  {
                    title: 'Salt Air Corrosion',
                    description: 'Coastal salt air accelerates deterioration. We use corrosion-resistant materials and fasteners.'
                  },
                  {
                    title: 'High Humidity & Mold',
                    description: 'Proper ventilation and mold-resistant materials prevent moisture damage and growth.'
                  },
                  {
                    title: 'Intense UV Exposure',
                    description: 'Coastal sun is more intense. We use UV-resistant shingles with advanced granule technology.'
                  },
                  {
                    title: 'Wind Uplift Requirements',
                    description: 'Coastal properties require enhanced wind uplift ratings for insurance compliance.'
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

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Answers to common questions about roofing in Myrtle Beach
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'How much does roof replacement cost in Myrtle Beach?',
                  answer: 'Roof replacement costs vary based on size, materials, and complexity. Contact Weather Shield Roofing at (843) 877-5539 for a free inspection and detailed quote. We offer flexible financing with 0% APR options available.'
                },
                {
                  question: "What's the best roofing material for Myrtle Beach's coastal climate?",
                  answer: "For Myrtle Beach's coastal climate, we recommend GAF architectural shingles or metal roofing. Both offer excellent hurricane wind resistance, salt air protection, and UV resistance. Our team can help you choose the best material for your specific needs and budget."
                },
                {
                  question: 'How long does a roof last in Myrtle Beach?',
                  answer: 'With proper installation and maintenance, architectural shingles typically last 25-30 years in Myrtle Beach, while metal roofs can last 50+ years. Coastal conditions require regular inspections to maximize lifespan.'
                },
                {
                  question: 'Do you handle insurance claims for storm damage?',
                  answer: "Yes! Weather Shield Roofing specializes in insurance claims for storm damage. We handle the entire process from documentation to working directly with your insurance adjuster to maximize your coverage."
                },
                {
                  question: "What's your warranty coverage?",
                  answer: "We offer industry-leading warranties including GAF Lifetime Limited Warranties on materials and up to 50-year workmanship warranties. As a GAF Certified Contractor, we provide enhanced warranty options that standard contractors cannot offer."
                },
                {
                  question: 'How long does roof replacement take?',
                  answer: 'Most residential roof replacements take 1-3 days depending on size and complexity. We work efficiently while maintaining the highest quality standards. Weather permitting, your new roof will be completed quickly.'
                },
                {
                  question: 'Do you offer 24/7 emergency roofing services?',
                  answer: 'Absolutely. Weather Shield Roofing provides true 24/7 emergency roofing service with real people answering phones at 3 AM. Call (843) 877-5539 anytime for emergency tarping, leak repair, or storm damage assessment.'
                },
                {
                  question: 'Are you licensed and insured in South Carolina?',
                  answer: 'Yes, Weather Shield Roofing is fully licensed, bonded, and insured in South Carolina. We carry comprehensive liability insurance and workers compensation to protect you and our team.'
                },
                {
                  question: "What's the difference between repair and replacement?",
                  answer: 'Repairs address localized damage and typically involve replacing damaged shingles or fixing leaks. Replacement involves removing the entire roof system and installing a new one. Our free inspection will determine which option is best for your situation.'
                },
                {
                  question: 'How do I prepare for hurricane season?',
                  answer: 'Schedule a free roof inspection before hurricane season (June-November). We check for loose shingles, damaged flashing, and weak points. We can also install hurricane straps and upgrade to impact-resistant materials.'
                },
                {
                  question: 'Do you offer financing?',
                  answer: 'Yes! We offer flexible financing options including 0% APR plans with approved credit. Applications are quick and easy with decisions in minutes. Multiple payment plans are available to fit any budget.'
                },
                {
                  question: 'What areas of Myrtle Beach do you serve?',
                  answer: 'We serve all of Myrtle Beach and surrounding areas including North Myrtle Beach, Conway, Surfside Beach, Garden City, Pawleys Island, and luxury communities like Grande Dunes, DeBordieu Colony, and Wachesaw Plantation.'
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

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Protect Your Myrtle Beach Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 2,000+ Myrtle Beach homeowners who chose quality, reliability, and peace of mind with Weather Shield Roofing.
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
              ⚡ Emergency service available 24/7 • Licensed & insured • Lifetime warranties
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
