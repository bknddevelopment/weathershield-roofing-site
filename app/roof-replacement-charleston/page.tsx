import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '#1 Roof Replacement Charleston SC 2025 | Top-Rated Roofer',
  description: 'Professional roof replacement services in Charleston, SC. Licensed, insured, 5-star rated. Free inspection and quote. Expert installation with lifetime warranties. Call (843) 877-5539 today!',
  keywords: 'roof replacement charleston sc, new roof charleston, roofing company charleston, professional roofer charleston, roof installation charleston',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roof-replacement-charleston',
  },
  openGraph: {
    title: '#1 Roof Replacement Charleston SC | Professional Installation',
    description: 'Top-rated roof replacement services in Charleston. Expert installation, lifetime warranties, free inspections. Licensed & insured.',
    url: 'https://weathershieldroofers.com/roof-replacement-charleston',
    type: 'website',
  },
}

export default function RoofReplacementCharlestonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Replacement",
            "provider": {
              "@type": "RoofingContractor",
              "name": "WeatherShield Roofing",
              "telephone": "+1-843-877-5539",
              "url": "https://weathershieldroofers.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "Charleston",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "SC",
                "addressCountry": "US"
              }
            }
          })
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/background/roof-texture.jpg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full font-bold mb-6">
                Charleston's Top-Rated Roofing Company
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Expert Roof Replacement<br />Charleston, SC
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Professional installation. Lifetime warranties. Licensed & insured.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:8438775539"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl"
                >
                  📞 Call (843) 877-5539
                </Link>
                <Link
                  href="/quote"
                  className="bg-white hover:bg-gray-100 text-blue-900 px-10 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
              <div className="flex items-center gap-3">
                <span className="text-4xl">⭐</span>
                <div className="text-left">
                  <p className="font-bold text-xl">5.0 Rating</p>
                  <p className="text-sm text-gray-400">100+ Google Reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-4xl">🛡️</span>
                <div className="text-left">
                  <p className="font-bold text-xl">Licensed & Insured</p>
                  <p className="text-sm text-gray-400">Fully certified</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-4xl">✓</span>
                <div className="text-left">
                  <p className="font-bold text-xl">Lifetime Warranties</p>
                  <p className="text-sm text-gray-400">On workmanship</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-4xl">🏠</span>
                <div className="text-left">
                  <p className="font-bold text-xl">1000+ Roofs</p>
                  <p className="text-sm text-gray-400">Installed in Charleston</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Replace Your Roof */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                When You Need a New Roof in Charleston
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border-2 border-red-300 shadow-lg">
                  <div className="text-5xl mb-4">⚠️</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Age of Roof</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Most asphalt shingle roofs last 20-30 years. If your roof is approaching or past this age, it's time to consider replacement.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border-2 border-orange-300 shadow-lg">
                  <div className="text-5xl mb-4">💧</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Water Leaks</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Recurring leaks or water stains on ceilings indicate serious roof damage that often requires full replacement.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl border-2 border-yellow-300 shadow-lg">
                  <div className="text-5xl mb-4">🌪️</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Storm Damage</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Charleston's coastal storms can cause extensive damage requiring full roof replacement, often covered by insurance.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-2 border-green-300 shadow-lg">
                  <div className="text-5xl mb-4">📉</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Missing Shingles</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Widespread missing or damaged shingles across your roof signal it's time for a complete replacement.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-300 shadow-lg">
                  <div className="text-5xl mb-4">🏚️</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Sagging Roof</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Visible sagging indicates structural damage and requires immediate professional assessment and likely replacement.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-300 shadow-lg">
                  <div className="text-5xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Energy Bills Rising</h3>
                  <p className="text-gray-700 leading-relaxed">
                    An aging or damaged roof loses efficiency, causing heating and cooling costs to increase significantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                Our Professional Installation Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">1</div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Free Inspection</h3>
                  <p className="text-gray-700">Comprehensive roof assessment with detailed documentation and photos.</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">2</div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Material Selection</h3>
                  <p className="text-gray-700">Choose from premium roofing materials that match your style and budget.</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">3</div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Expert Installation</h3>
                  <p className="text-gray-700">Professional crew completes installation with minimal disruption to your home.</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">4</div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Final Inspection</h3>
                  <p className="text-gray-700">Thorough quality check and complete cleanup. Your satisfaction guaranteed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Material Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                Premium Roofing Materials
              </h2>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border-l-4 border-blue-600 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Architectural Shingles</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our most popular choice for Charleston homes. Dimensional appearance, excellent durability, and outstanding warranties. Perfect for coastal climate.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> 30-50 year lifespan</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Wind resistance up to 130 mph</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Wide variety of colors</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Enhanced curb appeal</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl border-l-4 border-gray-600 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Metal Roofing</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Exceptional longevity and energy efficiency. Ideal for Charleston's climate with superior hurricane resistance and modern aesthetic.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-gray-600">✓</span> 50+ year lifespan</li>
                    <li className="flex items-start gap-2"><span className="text-gray-600">✓</span> Energy-efficient (reflects heat)</li>
                    <li className="flex items-start gap-2"><span className="text-gray-600">✓</span> Fire resistant</li>
                    <li className="flex items-start gap-2"><span className="text-gray-600">✓</span> Low maintenance</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl border-l-4 border-green-600 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-green-900">Impact-Resistant Shingles</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Designed to withstand Charleston's coastal storms and hail. May qualify for insurance discounts.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-green-600">✓</span> Class 4 impact rating</li>
                    <li className="flex items-start gap-2"><span className="text-green-600">✓</span> Insurance premium savings</li>
                    <li className="flex items-start gap-2"><span className="text-green-600">✓</span> Enhanced storm protection</li>
                    <li className="flex items-start gap-2"><span className="text-green-600">✓</span> Lifetime warranties available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">
                Why Charleston Homeowners Choose WeatherShield
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <span className="text-4xl">🏆</span>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Top-Rated in Charleston</h3>
                    <p className="text-blue-100 leading-relaxed">5-star rated on Google with 100+ verified reviews from satisfied Charleston homeowners.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <span className="text-4xl">👷</span>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Expert Local Team</h3>
                    <p className="text-blue-100 leading-relaxed">Charleston-based professionals who understand our coastal climate and building codes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <span className="text-4xl">🛡️</span>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Lifetime Warranties</h3>
                    <p className="text-blue-100 leading-relaxed">Comprehensive workmanship warranty plus manufacturer warranties on all materials.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <span className="text-4xl">💰</span>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Financing Available</h3>
                    <p className="text-blue-100 leading-relaxed">Flexible payment options to fit your budget. Ask about our current promotions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for a New Roof?
            </h2>
            <p className="text-2xl mb-8 text-orange-100">
              Get your free inspection and quote today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:8438775539"
                className="inline-block bg-white text-orange-600 hover:bg-gray-100 px-12 py-6 rounded-xl font-bold text-2xl transition-all transform hover:scale-105 shadow-2xl"
              >
                📞 Call (843) 877-5539
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-12 py-6 rounded-xl font-bold text-2xl transition-all transform hover:scale-105 shadow-2xl"
              >
                Get Free Quote Online
              </Link>
            </div>
            <p className="mt-6 text-lg text-orange-100">
              Licensed & Insured • 5-Star Rated • Lifetime Warranties
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
