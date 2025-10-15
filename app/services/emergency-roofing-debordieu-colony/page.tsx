import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Clock, Shield, AlertTriangle, Home, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: '24/7 Emergency Roof Repair DeBordieu Colony SC | Private Oceanfront Estate Community | WeatherShield',
  description: 'Emergency roof repair DeBordieu Colony SC for luxury homes. Hurricane damage, storm leaks, premium material emergency repair. Oceanfront estate specialists. Call (843) 877-5539 NOW!',
  keywords: 'emergency roof repair DeBordieu Colony, luxury roofing Georgetown, premium emergency roofing, hurricane damage DeBordieu Colony, Georgetown emergency roofing',
}

export default function EmergencyRoofingDebordieuColonyPage() {
  return (
    <main className="min-h-screen">
      {/* Emergency Hero */}
      <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-red-700 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-full px-6 py-3 mb-6 animate-bounce">
              <AlertTriangle className="w-6 h-6 text-yellow-300 animate-pulse" />
              <span className="text-white font-bold text-lg uppercase tracking-wide">
                Luxury Property Emergency Service Available NOW
              </span>
              <AlertTriangle className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              24/7 EMERGENCY ROOF REPAIR
              <span className="block text-3xl md:text-5xl mt-2 text-yellow-300">
                DeBordieu Colony, SC
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8">
              Slate • Tile • Metal • Impact-Resistant Emergency Repairs<br />
              Private Oceanfront Estate Community Specialists Available Now
            </p>

            <div className="space-y-4">
              <a
                href="tel:+18438775539"
                className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-5 rounded-lg font-black text-xl md:text-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse hover:animate-none"
              >
                <Phone className="w-8 h-8" />
                CALL NOW: (843) 877-5539
              </a>
              <p className="text-white/90 text-sm">Tap to Call • Direct Emergency Line • Real Person Answers 24/7</p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/90 text-lg font-medium">
                ⚡ DeBordieu Colony Emergency Roofing • Licensed & Insured •
                <span className="text-yellow-300 font-bold"> Luxury Property Specialists</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              DeBordieu Colony Luxury Home Emergency Roofing
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg text-white">
                    <Home className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Premium Material Emergency Repair</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  DeBordieu Colony's exclusive oceanfront estates require specialized hurricane emergency care. We provide elite roofing repairs using luxury materials rated for extreme coastal exposure.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Premium material matching</li>
                  <li>✓ Expert installation</li>
                  <li>✓ Emergency waterproofing</li>
                  <li>✓ Architectural preservation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg text-white">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Luxury Emergency Tarping</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Protect your luxury property with premium emergency tarping. Professional-grade materials secured discreetly to prevent water damage while maintaining aesthetic standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Discreet protection</li>
                  <li>✓ Professional materials</li>
                  <li>✓ Minimal visual impact</li>
                  <li>✓ Insurance documentation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg text-white">
                    <Wrench className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Hurricane Damage Specialists</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  DeBordieu Colony homes require specialized hurricane damage repair. We restore premium systems to original condition using luxury materials rated for coastal storms.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Wind damage assessment</li>
                  <li>✓ Luxury restoration</li>
                  <li>✓ Structural evaluation</li>
                  <li>✓ Insurance coordination</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg text-white">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Rapid Elite Response</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We understand the value of DeBordieu Colony properties. Emergency crews respond rapidly with premium materials and expert craftsmanship to protect your investment.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Rapid deployment</li>
                  <li>✓ Expert crews</li>
                  <li>✓ Premium materials</li>
                  <li>✓ 24/7 availability</li>
                </ul>
              </div>
            </div>

            {/* Why Choose WeatherShield */}
            <div className="bg-gradient-to-r from-weather-teal to-weather-blue rounded-xl p-8 text-white mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Why DeBordieu Colony Homeowners Trust WeatherShield
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2">🏆 Luxury Home Specialists</h4>
                  <p className="text-sm text-white/90">
                    15+ years experience with DeBordieu Colony's premium properties and high-end roofing materials.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">⚡ Rapid Premium Response</h4>
                  <p className="text-sm text-white/90">
                    We understand luxury property values and respond quickly with expert crews and premium materials.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">🛡️ Architectural Preservation</h4>
                  <p className="text-sm text-white/90">
                    All repairs maintain aesthetic integrity using matching premium materials and expert craftsmanship.
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gray-900 rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Protect Your DeBordieu Colony Investment - Call NOW
              </h3>
              <p className="text-lg mb-6">
                Don't risk further damage to your luxury property.<br />
                Expert emergency roofing team standing by 24/7!
              </p>
              <a
                href="tel:+18438775539"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                EMERGENCY HOTLINE: (843) 877-5539
              </a>
              <p className="mt-4 text-white/80 text-sm">
                24/7 Service • Licensed & Insured • DeBordieu Colony Specialists
              </p>
            </div>

            {/* Location Link */}
            <div className="mt-8 text-center">
              <Link
                href="/locations/debordieu-colony"
                className="text-weather-teal hover:text-weather-blue font-semibold"
              >
                ← Learn more about our DeBordieu Colony roofing services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
