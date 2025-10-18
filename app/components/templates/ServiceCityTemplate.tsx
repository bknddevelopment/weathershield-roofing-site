import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCityData {
  service: {
    name: string; // "Roof Replacement", "Metal Roofing", etc.
    slug: string; // "roof-replacement", "metal-roofing"
    icon: string; // emoji icon
    description: string; // short description
    benefits: string[]; // list of benefits
    materials?: string[]; // optional materials list
  };
  city: {
    name: string; // "Myrtle Beach", "North Myrtle Beach"
    slug: string; // "myrtle-beach", "north-myrtle-beach"
    state: string; // "SC"
    neighborhoods?: string[]; // optional neighborhoods
    uniqueChallenges?: string[]; // coastal challenges, etc.
  };
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
}

export function generateServiceCityMetadata(data: ServiceCityData): Metadata {
  return {
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: data.metadata.keywords,
    alternates: {
      canonical: `https://weathershieldroofers.com/services/${data.service.slug}/${data.city.slug}`,
    },
    openGraph: {
      title: data.metadata.title,
      description: data.metadata.description,
      url: `https://weathershieldroofers.com/services/${data.service.slug}/${data.city.slug}`,
      siteName: 'Weather Shield Roofing',
      images: [
        {
          url: 'https://weathershieldroofers.com/images/background/residential-roofing-gutter-siding-services.jpg',
          width: 1200,
          height: 630,
          alt: `${data.service.name} in ${data.city.name}, ${data.city.state}`,
        }
      ],
      locale: 'en_US',
      type: 'website',
    }
  };
}

export function generateServiceCitySchema(data: ServiceCityData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": data.service.name,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Weather Shield Roofing",
          "telephone": "+18438775539",
          "url": "https://weathershieldroofers.com",
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "73",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        "areaServed": {
          "@type": "City",
          "name": data.city.name,
          "containedIn": {
            "@type": "State",
            "name": "South Carolina"
          }
        },
        "description": data.metadata.description
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
            "name": "Services",
            "item": "https://weathershieldroofers.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": data.service.name,
            "item": `https://weathershieldroofers.com/services/${data.service.slug}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": `${data.city.name}, ${data.city.state}`,
            "item": `https://weathershieldroofers.com/services/${data.service.slug}/${data.city.slug}`
          }
        ]
      }
    ]
  };
}

export default function ServiceCityTemplate({ data }: { data: ServiceCityData }) {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceCitySchema(data))
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
                  {data.service.name} in {data.city.name}, {data.city.state}
                </h1>

                <p className="text-xl md:text-2xl text-blue-100">
                  Expert {data.service.name} Services • GAF Certified • 24/7 Emergency Response
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Free Estimate
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
                <h3 className="text-2xl font-bold mb-6 text-center">Schedule Free Inspection</h3>

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
                      <span>Response within 24 hours</span>
                    </div>
                  </div>

                  <Link
                    href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate"
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule Online
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
                    (843) 877-5539
                  </a>

                  <p className="text-xs text-gray-500 text-center">⚡ 24/7 Emergency Service Available</p>
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
                <div className="text-3xl font-bold text-blue-900">15+ Years</div>
                <div className="text-sm text-gray-600">Local Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">2,000+</div>
                <div className="text-sm text-gray-600">Homes Protected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">5.0 ⭐</div>
                <div className="text-sm text-gray-600">Perfect Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">24/7</div>
                <div className="text-sm text-gray-600">Emergency Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                  {data.service.icon} {data.service.name}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Professional {data.service.name} in {data.city.name}
                </h2>
                <p className="text-lg text-gray-600">
                  {data.service.description}
                </p>
                <div className="space-y-3">
                  {data.service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/background/residential-roofing-gutter-siding-services.jpg"
                    alt={`${data.service.name} in ${data.city.name}, ${data.city.state}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Weather Shield for {data.service.name}?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're the most trusted {data.service.name.toLowerCase()} contractor in {data.city.name}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '⭐',
                  title: '5.0★ Perfect Rating',
                  description: '73 verified Google reviews with perfect 5.0-star rating'
                },
                {
                  icon: '🏆',
                  title: 'GAF Certified',
                  description: 'Elite certification - only 3% of contractors qualify'
                },
                {
                  icon: '🛡️',
                  title: 'Lifetime Warranties',
                  description: 'Industry-leading warranties on materials and workmanship'
                },
                {
                  icon: '⚡',
                  title: '24/7 Emergency Service',
                  description: 'Real people answering phones at 3 AM - rapid response'
                },
                {
                  icon: '💰',
                  title: 'Flexible Financing',
                  description: '0% APR options available with approved credit'
                },
                {
                  icon: '🎓',
                  title: '15+ Years Local',
                  description: 'Serving {data.city.name} since 2010 with proven expertise'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Simple 5-Step Process
              </h2>
              <p className="text-xl text-gray-600">
                From free inspection to final walkthrough - we make it easy
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: '1', title: 'Free Inspection', description: 'Schedule online or call us directly' },
                { step: '2', title: 'Detailed Quote', description: 'Transparent pricing with all options' },
                { step: '3', title: 'Material Selection', description: 'Choose colors, styles, warranties' },
                { step: '4', title: 'Expert Installation', description: 'Factory-trained crews - no subs' },
                { step: '5', title: 'Final Walkthrough', description: 'Inspect together - 100% satisfaction' }
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

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started with {data.service.name}?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Weather Shield Roofing today for a free inspection and detailed estimate in {data.city.name}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Estimate
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

            <p className="text-sm text-blue-100 mt-8">
              ⚡ 24/7 Emergency Service • Licensed & Insured • Lifetime Warranties
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
