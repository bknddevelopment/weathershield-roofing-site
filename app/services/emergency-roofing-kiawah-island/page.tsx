import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '24/7 Emergency Roof Repair Kiawah Island SC | WeatherShield Roofing',
  description: 'Emergency Roof Repair Kiawah Island SC. 24/7 storm damage, hurricane leaks, wind damage. Licensed roofing contractor. Call (843) 877-5539 now.',
  keywords: 'emergency roof repair Kiawah Island, 24/7 luxury roofing Kiawah, estate roof repair Kiawah Island SC',
}

export default function EmergencyRoofingKiawahIslandPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[url('/images/emergency-hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ 24/7 EMERGENCY SERVICE AVAILABLE
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            24/7 EMERGENCY ROOF REPAIR
            <span className="block text-3xl md:text-5xl mt-2 text-yellow-300">
              Kiawah Island, SC
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Hurricane Damage • Storm Leaks • Wind Damage • Emergency Tarping
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
            Kiawah Island Emergency Roofing Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-3">🌀 Hurricane Emergency Response</h3>
              <p className="text-gray-300">
                Kiawah's barrier island location demands immediate hurricane response. We protect multi-million dollar estates with 160+ mph wind-rated emergency repairs and premium materials.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-3">🏆 Luxury Estate Emergency Service</h3>
              <p className="text-gray-300">
                Your Kiawah estate deserves concierge-level emergency service. We provide immediate response with high-end materials and expert craftsmanship that maintains property values.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-3">💨 Atlantic Storm Damage Repair</h3>
              <p className="text-gray-300">
                Direct ocean exposure creates severe storm damage risks. Our emergency teams secure luxury homes with marine-grade tarping and comprehensive damage mitigation.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-3">🛡️ ARB-Compliant Emergency Repairs</h3>
              <p className="text-gray-300">
                Emergency repairs must meet Kiawah ARB standards. We navigate approval processes while providing urgent protection for your resort community property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Kiawah Island Roofing Experts
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Emergency Response</h3>
                <p className="text-gray-300">
                  Available around the clock for Kiawah roofing emergencies. We respond immediately to storm damage, leaks, and urgent repairs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Coastal Roofing Specialists</h3>
                <p className="text-gray-300">
                  Expertise in Charleston coastal construction, hurricane engineering, and salt air-resistant materials for Kiawah properties.
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
            ROOF EMERGENCY ON KIAWAH ISLAND?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8">
            Call WeatherShield Roofing now for immediate assistance
          </p>
          <a
            href="tel:8438775539"
            className="inline-block bg-white text-red-600 px-12 py-5 rounded-lg text-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            📞 (843) 877-5539
          </a>
          <p className="text-white mt-6 text-lg">
            Serving Ocean Course, Turtle Point, Osprey Point & all Kiawah communities
          </p>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Related Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/locations/kiawah-island" className="text-blue-400 hover:text-blue-300">
              Kiawah Island Roofing
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/services/emergency-roofing" className="text-blue-400 hover:text-blue-300">
              Emergency Roofing Services
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
