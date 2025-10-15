import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '24/7 Roof Replacement Mount Pleasant SC | WeatherShield Roofing',
  description: 'Roof Replacement Mount Pleasant SC. New roofs, hurricane-resistant systems, premium materials. Licensed roofing contractor. Call (843) 877-5539 now.',
  keywords: 'roof replacement Mount Pleasant, new roof Mount Pleasant SC, residential roofing Mount Pleasant',
}

export default function RoofReplacementMountPleasantPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[url('/images/emergency-hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ PREMIUM ROOF REPLACEMENT
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            ROOF REPLACEMENT
            <span className="block text-3xl md:text-5xl mt-2 text-yellow-300">
              Mount Pleasant, SC
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Hurricane-Resistant Systems • Premium Materials • Expert Installation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8438775539"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              📞 CALL NOW: (843) 877-5539
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Mount Pleasant Roof Replacement Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-3">🌀 Coastal Hurricane Protection</h3>
              <p className="text-gray-300">
                Complete roof replacements with advanced wind ratings, hurricane engineering, and comprehensive waterproofing for Mount Pleasant's coastal location.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-3">🏘️ Community-Specific Solutions</h3>
              <p className="text-gray-300">
                From historic Old Village to modern Park West, we deliver roof replacements that match neighborhood character with materials and styles that enhance property values.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-3">💨 Storm-Resistant Systems</h3>
              <p className="text-gray-300">
                Wind-rated shingles with Class 4 hail protection, enhanced fastening systems, and comprehensive warranties engineered for Lowcountry severe weather.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-3">🏡 Complete Roof Restoration</h3>
              <p className="text-gray-300">
                Full roof replacement services including deck inspection, ventilation upgrades, gutter integration, and energy-efficient materials for Mount Pleasant homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Mount Pleasant Roofing Experts
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Complete Roof Replacement</h3>
                <p className="text-gray-300">
                  Full roof replacement services for Mount Pleasant homes with premium materials, expert installation, and comprehensive warranties.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Coastal Roofing Specialists</h3>
                <p className="text-gray-300">
                  Expertise in Charleston coastal construction, hurricane engineering, and salt air-resistant materials for Mount Pleasant properties.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Insurance Claim Assistance</h3>
                <p className="text-gray-300">
                  We document damage, work directly with your insurance company, and ensure you receive fair compensation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Licensed & Insured</h3>
                <p className="text-gray-300">
                  Fully licensed South Carolina roofing contractor with comprehensive insurance coverage for your protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            NEED A NEW ROOF ON MOUNT PLEASANT?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8">
            Call WeatherShield Roofing now for a free consultation
          </p>
          <a
            href="tel:8438775539"
            className="inline-block bg-white text-red-600 px-12 py-5 rounded-lg text-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            📞 (843) 877-5539
          </a>
          <p className="text-white mt-6 text-lg">
            Serving Old Village, Park West, Belle Hall, Dunes West, Carolina Park & all Mount Pleasant areas
          </p>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Related Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/locations/mount-pleasant" className="text-blue-400 hover:text-blue-300">
              Mount Pleasant Roofing
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/services/roof-replacement" className="text-blue-400 hover:text-blue-300">
              Roof Replacement Services
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/services/storm-damage" className="text-blue-400 hover:text-blue-300">
              Storm Damage Repair
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
