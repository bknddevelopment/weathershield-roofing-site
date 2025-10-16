import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '24/7 Emergency Roof Repair Myrtle Beach SC | Rapid Response | (843) 877-5539',
  description: '24/7 emergency roof repair in Myrtle Beach, SC. Storm damage, severe leaks, urgent repairs. Fast response times. Licensed & insured. Call (843) 877-5539 now.',
  openGraph: {
    title: '24/7 Emergency Roof Repair Myrtle Beach SC | Rapid Response',
    description: '24/7 emergency roof repair in Myrtle Beach, SC. Storm damage, severe leaks, urgent repairs. Fast response times.',
    url: 'https://weathershieldroofers.com/emergency-roof-repair-myrtle-beach',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EmergencyRoofRepairMyrtleBeachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Alert Hero */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-16">
        <div className="absolute inset-0 bg-[url('/images/storm-damage.jpg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
              🚨 24/7 EMERGENCY SERVICE AVAILABLE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Emergency Roof Repair in Myrtle Beach, SC
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-red-100 font-semibold">
              Rapid Response • Storm Damage • Severe Leaks • Tarping Service
            </p>
            <p className="text-xl mb-10 text-gray-200 max-w-3xl mx-auto">
              When roofing emergencies strike, Weather Shield Roofing responds fast. Our experienced crew is available 24/7 to handle storm damage, active leaks, fallen trees, structural issues, and any urgent roofing situation that threatens your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8438775539"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-red-700 px-10 py-5 rounded-lg text-2xl font-bold transition-colors shadow-2xl"
              >
                📞 CALL NOW: (843) 877-5539
              </a>
            </div>
            <p className="mt-6 text-red-100 text-lg">
              Available 24 hours a day, 7 days a week, 365 days a year
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Response Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What to Expect from Our Emergency Service
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Rapid Response</h3>
              <p className="text-gray-700">
                Our emergency team responds quickly to your call, typically arriving within hours during business hours. After-hours emergencies receive priority attention.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-3">Damage Control</h3>
              <p className="text-gray-700">
                We immediately secure your property with emergency tarping, temporary repairs, and water mitigation to prevent further damage.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-3">Complete Assessment</h3>
              <p className="text-gray-700">
                Thorough damage evaluation with photo documentation, detailed repair estimates, and insurance claim assistance if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Emergency Situations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Emergency Situations We Handle
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Don't wait when these urgent roofing problems occur—immediate action prevents expensive secondary damage.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border-l-4 border-red-500 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🌊</span>
                Active Roof Leaks
              </h3>
              <p className="text-gray-700 mb-3">
                Water actively dripping through your ceiling requires immediate attention to prevent interior damage, mold growth, and structural deterioration.
              </p>
              <p className="text-sm text-red-600 font-semibold">
                URGENT: Call immediately if water is entering your home
              </p>
            </div>

            <div className="bg-white border-l-4 border-red-500 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">⛈️</span>
                Storm & Hurricane Damage
              </h3>
              <p className="text-gray-700 mb-3">
                High winds, fallen trees, flying debris, and hail can cause severe roof damage during coastal storms. Emergency tarping protects exposed areas.
              </p>
              <p className="text-sm text-red-600 font-semibold">
                URGENT: Secure property within hours of storm passage
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-500 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🌳</span>
                Fallen Trees & Branches
              </h3>
              <p className="text-gray-700 mb-3">
                Trees or large branches penetrating your roof create immediate structural hazards and water infiltration points requiring urgent removal and repair.
              </p>
              <p className="text-sm text-orange-600 font-semibold">
                HIGH PRIORITY: Address within 24 hours
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-500 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">💨</span>
                Wind-Lifted or Missing Shingles
              </h3>
              <p className="text-gray-700 mb-3">
                Large sections of missing shingles expose underlayment to weather. Rapid replacement prevents water damage during the next rain.
              </p>
              <p className="text-sm text-orange-600 font-semibold">
                HIGH PRIORITY: Repair before next rainfall
              </p>
            </div>

            <div className="bg-white border-l-4 border-yellow-500 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                Structural Sagging or Collapse
              </h3>
              <p className="text-gray-700 mb-3">
                Visible sagging, bowing, or partial roof collapse indicates serious structural issues. Immediate professional assessment protects occupant safety.
              </p>
              <p className="text-sm text-yellow-600 font-semibold">
                SAFETY CONCERN: Evacuate area and call immediately
              </p>
            </div>

            <div className="bg-white border-l-4 border-yellow-500 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                Fire or Lightning Damage
              </h3>
              <p className="text-gray-700 mb-3">
                Fire damage or lightning strikes compromise roof integrity and waterproofing. Emergency tarping and assessment prevent further exposure.
              </p>
              <p className="text-sm text-yellow-600 font-semibold">
                IMMEDIATE: Secure property after fire department clears scene
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Emergency Response Process
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md flex gap-4">
              <div className="flex-shrink-0 bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Emergency Call Received</h3>
                <p className="text-gray-700">
                  Call (843) 877-5539 any time, day or night. Describe your emergency and location. Our dispatcher assesses urgency and dispatches the nearest available crew.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md flex gap-4">
              <div className="flex-shrink-0 bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rapid On-Site Response</h3>
                <p className="text-gray-700">
                  Our emergency team arrives equipped with tarps, safety equipment, and temporary repair materials. We assess the situation and immediately begin damage control.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md flex gap-4">
              <div className="flex-shrink-0 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Emergency Mitigation</h3>
                <p className="text-gray-700">
                  We install emergency tarps, perform temporary weatherproofing, remove hazards like fallen branches, and take immediate action to prevent further damage.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md flex gap-4">
              <div className="flex-shrink-0 bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Damage Documentation</h3>
                <p className="text-gray-700">
                  Comprehensive photo documentation, measurements, and detailed assessment report for your records and insurance claim if needed.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md flex gap-4">
              <div className="flex-shrink-0 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Permanent Repair Estimate</h3>
                <p className="text-gray-700">
                  Once emergency mitigation is complete, we provide a detailed estimate for permanent repairs. We work with your insurance company to ensure proper coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergencies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Myrtle Beach Trusts Us for Emergency Roofing
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="text-xl font-bold mb-2">True 24/7 Availability</h3>
              <p className="text-gray-600">
                Not an answering service—real emergency response team available around the clock, every day of the year.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-xl font-bold mb-2">5.0★ Perfect Rating</h3>
              <p className="text-gray-600">
                73 verified Google reviews with perfect 5.0-star rating. Our emergency customers praise our rapid response and professionalism.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-xl font-bold mb-2">Local Myrtle Beach Team</h3>
              <p className="text-gray-600">
                Locally owned and operated. Our crews live in Myrtle Beach—we respond faster because we're already in your community.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-bold mb-2">Fully Equipped</h3>
              <p className="text-gray-600">
                Emergency vehicles stocked with tarps, fasteners, temporary sealants, and tools to handle any urgent roofing situation.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-xl font-bold mb-2">Insurance Experience</h3>
              <p className="text-gray-600">
                Extensive experience with insurance claims. We document damage thoroughly and work directly with adjusters.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed SC contractor with comprehensive liability and workers' comp insurance protecting you during emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Wait—Emergency Roofing Help is One Call Away
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every minute counts during a roofing emergency. Our team is standing by 24/7 to protect your home or business.
          </p>
          <a
            href="tel:8438775539"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-red-700 px-12 py-6 rounded-lg text-2xl font-bold transition-colors shadow-2xl"
          >
            📞 EMERGENCY: (843) 877-5539
          </a>
          <p className="mt-6 text-lg">
            Available 24 hours • Rapid response • Licensed & insured
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Emergency Roofing FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                How quickly can you respond to a roofing emergency in Myrtle Beach?
              </h3>
              <p className="text-gray-700">
                Response times vary based on weather conditions, time of day, and crew availability. During business hours, we typically arrive within a few hours. After-hours emergencies receive priority dispatch, with crews responding as quickly as safety permits. During major storm events affecting the entire region, response may take longer, but we triage based on severity.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                What should I do while waiting for emergency roofing help?
              </h3>
              <p className="text-gray-700">
                If safe to do so: Place buckets under active leaks, move furniture and valuables away from water, take photos for insurance documentation, and turn off electricity in affected areas if water contacts outlets or fixtures. Do NOT attempt to climb on your roof, especially during storms or at night. Stay clear of sagging ceiling areas that could collapse.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Will insurance cover emergency roof repairs?
              </h3>
              <p className="text-gray-700">
                Most homeowners insurance policies cover sudden, accidental damage from storms, fallen trees, and other covered perils. Emergency tarping and temporary repairs to prevent further damage are typically covered. We provide detailed documentation and work with insurance companies regularly. However, gradual deterioration or lack of maintenance may not be covered—we can help you understand your specific situation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Do you charge extra for emergency service or after-hours calls?
              </h3>
              <p className="text-gray-700">
                Our pricing reflects the urgency and timing of emergency work. While we strive to keep costs reasonable, emergency response does involve premium labor rates for after-hours, weekend, and holiday service. We provide transparent pricing before work begins, and in many cases, insurance covers emergency mitigation costs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                What's included in emergency roof tarping service?
              </h3>
              <p className="text-gray-700">
                Emergency tarping includes heavy-duty waterproof tarps secured with proper fastening techniques to protect exposed roof areas. We cover damaged sections completely, secure edges and corners to prevent wind uplift, and ensure water runoff doesn't create new problems. Tarps are temporary protection until permanent repairs can be completed safely.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Can you perform emergency repairs during hurricanes or severe weather?
              </h3>
              <p className="text-gray-700">
                Safety is our top priority. We cannot send crews onto roofs during active severe weather, high winds, or when conditions pose unreasonable risk. However, we respond immediately when conditions are safe, often within hours of storm passage. We maintain communication throughout weather events and mobilize as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Related Roofing Services in Myrtle Beach
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/roof-leaks" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Roof Leak Repair</h3>
              <p className="text-gray-600 mb-3">Professional leak detection and permanent repair solutions</p>
              <span className="text-teal-600 font-semibold">Learn More →</span>
            </Link>
            <Link href="/services/storm-damage" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Storm Damage Repair</h3>
              <p className="text-gray-600 mb-3">Hurricane and severe weather damage restoration</p>
              <span className="text-teal-600 font-semibold">Learn More →</span>
            </Link>
            <Link href="/roofing-contractor-myrtle-beach" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">All Roofing Services</h3>
              <p className="text-gray-600 mb-3">Complete roofing contractor services in Myrtle Beach</p>
              <span className="text-teal-600 font-semibold">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
