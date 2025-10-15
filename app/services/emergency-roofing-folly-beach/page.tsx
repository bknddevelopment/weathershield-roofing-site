import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Clock, Shield, AlertTriangle, Droplets, CloudRain } from 'lucide-react'

export const metadata: Metadata = {
  title: '24/7 Emergency Roof Repair Folly Beach SC | Hurricane Damage | WeatherShield',
  description: 'Emergency roof repair Folly Beach SC available 24/7. Hurricane damage, storm leaks, emergency tarping. Rapid response for barrier island properties. Call (843) 877-5539 NOW!',
  keywords: 'emergency roof repair Folly Beach, 24/7 roofing Folly Beach, hurricane roof damage Folly Beach, storm damage roofing, emergency tarping Folly Beach',
}

export default function EmergencyRoofingFollyBeachPage() {
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
                Emergency Service Available NOW
              </span>
              <AlertTriangle className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              24/7 EMERGENCY ROOF REPAIR
              <span className="block text-3xl md:text-5xl mt-2 text-yellow-300">
                Folly Beach, SC
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8">
              Hurricane Damage • Storm Leaks • Emergency Tarping<br />
              Barrier Island Roofing Specialists Available Now
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
                ⚡ Folly Beach Emergency Roofing • Licensed & Insured •
                <span className="text-yellow-300 font-bold"> Rapid Island Response</span>
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
              Folly Beach Emergency Roofing Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg text-white">
                    <Droplets className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Hurricane Roof Damage</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Folly Beach faces direct Atlantic hurricane exposure. We provide emergency roof repairs for wind damage, missing shingles, and storm-related leaks with materials rated for 140+ mph winds.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Missing shingles replacement</li>
                  <li>✓ Wind damage assessment</li>
                  <li>✓ Emergency waterproofing</li>
                  <li>✓ Structural stabilization</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg text-white">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Emergency Roof Tarping</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Professional emergency tarping for Folly Beach properties. Heavy-duty marine-grade tarps secured properly to prevent further water damage while permanent repairs are arranged.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Heavy-duty tarps</li>
                  <li>✓ Secure fastening</li>
                  <li>✓ Weather resistant</li>
                  <li>✓ Insurance approved</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg text-white">
                    <CloudRain className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Active Leak Repair</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Stop active roof leaks immediately. Our crews arrive with professional equipment to locate and seal leaks, protecting your beach home from water damage.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Leak detection</li>
                  <li>✓ Emergency patching</li>
                  <li>✓ Interior protection</li>
                  <li>✓ Permanent solutions</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg text-white">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Salt Air Damage</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Coastal properties face unique challenges. We repair salt air corrosion damage using marine-grade materials designed specifically for Folly Beach's harsh barrier island environment.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Corrosion repair</li>
                  <li>✓ Marine-grade materials</li>
                  <li>✓ Flashing replacement</li>
                  <li>✓ Long-term protection</li>
                </ul>
              </div>
            </div>

            {/* Why Choose WeatherShield */}
            <div className="bg-gradient-to-r from-weather-teal to-weather-blue rounded-xl p-8 text-white mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Why Folly Beach Homeowners Trust WeatherShield
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2">🏖️ Barrier Island Experts</h4>
                  <p className="text-sm text-white/90">
                    15+ years experience with Folly Beach properties and coastal roofing challenges.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">⚡ Rapid Response</h4>
                  <p className="text-sm text-white/90">
                    We understand island emergencies and respond quickly to protect your beach property.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">🛡️ Hurricane-Rated Materials</h4>
                  <p className="text-sm text-white/90">
                    All repairs use materials rated for 140+ mph winds and harsh salt air conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gray-900 rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Don't Wait - Roof Damage Gets Worse Every Hour
              </h3>
              <p className="text-lg mb-6">
                Protect your Folly Beach home from further damage.
                Call our emergency roofing team NOW!
              </p>
              <a
                href="tel:+18438775539"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                EMERGENCY HOTLINE: (843) 877-5539
              </a>
              <p className="mt-4 text-white/80 text-sm">
                24/7 Service • Licensed & Insured • Folly Beach Specialists
              </p>
            </div>

            {/* Location Link */}
            <div className="mt-8 text-center">
              <Link
                href="/locations/folly-beach"
                className="text-weather-teal hover:text-weather-blue font-semibold"
              >
                ← Learn more about our Folly Beach roofing services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
