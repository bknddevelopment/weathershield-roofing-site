import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Roofing Myrtle Beach SC | Business Roofing Experts | (843) 877-5539',
  description: 'Expert commercial roofing in Myrtle Beach, SC. Flat roofs, TPO, EPDM, metal roofing for businesses. Licensed contractor. 5.0★ rated. Call (843) 877-5539.',
  openGraph: {
    title: 'Commercial Roofing Myrtle Beach SC | Business Roofing Experts',
    description: 'Expert commercial roofing in Myrtle Beach, SC. Flat roofs, TPO, EPDM, metal roofing for businesses. Licensed contractor.',
    url: 'https://weathershieldroofers.com/commercial-roofing-myrtle-beach',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'website',
  },
};

export default function CommercialRoofingMyrtleBeachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/commercial-building.jpg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏢 Trusted Commercial Roofing Contractor
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Commercial Roofing Services in Myrtle Beach, SC
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Protecting Myrtle Beach Businesses • Licensed & Insured • Minimal Downtime
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-3xl">
              Weather Shield Roofing delivers expert commercial roofing solutions for Myrtle Beach businesses. From retail stores and restaurants to office buildings and warehouses, we provide reliable installations, maintenance, and emergency repairs that keep your business protected and operational.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8438775539"
                className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                📞 Call (843) 877-5539
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Request Commercial Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Expertise */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Commercial Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5.0★</div>
              <div className="text-gray-600">Perfect Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Complete Commercial Roofing Solutions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From new construction to maintenance and emergency repairs, we handle all commercial roofing needs with minimal business disruption.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold mb-3">New Commercial Roofs</h3>
              <p className="text-gray-700 mb-4">
                Complete roofing systems for new construction, renovations, and additions. Work with contractors, architects, and building owners on specifications and timelines.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-3">Roof Replacement</h3>
              <p className="text-gray-700 mb-4">
                Full tear-off and replacement or roof-over installations. Scheduled during off-hours or phased to minimize business interruption.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-3">Commercial Repairs</h3>
              <p className="text-gray-700 mb-4">
                Leak repairs, membrane patching, flashing restoration, and structural repairs. Fast response to prevent business disruption and interior damage.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-3">Preventive Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Scheduled maintenance programs extend roof lifespan and prevent costly emergency repairs. Regular inspections, cleaning, and minor repairs.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-2xl font-bold mb-3">Emergency Services</h3>
              <p className="text-gray-700 mb-4">
                24/7 emergency response for storm damage, severe leaks, and urgent situations. Rapid temporary repairs protect your business and inventory.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">Roof Inspections</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive commercial roof inspections with detailed reports. Pre-purchase due diligence, annual assessments, and post-storm evaluations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Roofing Systems */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Commercial Roofing Systems We Install
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Premium commercial roofing materials designed for flat and low-slope applications with proven performance.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">TPO (Thermoplastic Polyolefin)</h3>
              <p className="text-gray-700 mb-4">
                Most popular commercial roofing membrane. Heat-welded seams create watertight installations. Energy-efficient white reflective surface reduces cooling costs. Excellent chemical and puncture resistance.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Lifespan: 20-30 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">ENERGY STAR® certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Recyclable, eco-friendly</span>
                </li>
              </ul>
              <Link href="/flat-roof-systems-myrtle-beach" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More About Flat Roofing →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">EPDM (Rubber Membrane)</h3>
              <p className="text-gray-700 mb-4">
                Proven durability for over 60 years. Synthetic rubber membrane handles temperature extremes and UV exposure. Cost-effective solution with excellent longevity and weather resistance.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Lifespan: 20-30+ years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Low maintenance required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Budget-friendly installation</span>
                </li>
              </ul>
              <Link href="/flat-roof-systems-myrtle-beach" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More About Flat Roofing →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Modified Bitumen</h3>
              <p className="text-gray-700 mb-4">
                Multi-layer system combining traditional built-up roofing with modern polymer technology. Excellent for foot traffic and rooftop equipment. Self-healing properties resist punctures.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Lifespan: 15-25 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Handles ponding water</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Withstands heavy foot traffic</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Commercial Metal Roofing</h3>
              <p className="text-gray-700 mb-4">
                Standing seam metal systems for commercial buildings. Superior longevity, fire resistance, and energy efficiency. Ideal for warehouses, retail centers, and industrial facilities.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Lifespan: 40-60 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Class A fire rating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Hurricane wind resistant</span>
                </li>
              </ul>
              <Link href="/metal-roofing-myrtle-beach" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More About Metal Roofing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Commercial Property Types We Serve
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🏬</div>
              <h3 className="font-bold text-lg">Retail Stores</h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="font-bold text-lg">Restaurants</h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="font-bold text-lg">Office Buildings</h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🏭</div>
              <h3 className="font-bold text-lg">Warehouses</h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🏪</div>
              <h3 className="font-bold text-lg">Strip Malls</h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🏨</div>
              <h3 className="font-bold text-lg">Hotels & Resorts</h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">⛪</div>
              <h3 className="font-bold text-lg">Churches</h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🏫</div>
              <h3 className="font-bold text-lg">Schools</h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="font-bold text-lg">Medical Facilities</h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🏘️</div>
              <h3 className="font-bold text-lg">Multi-Family</h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🏗️</div>
              <h3 className="font-bold text-lg">Industrial</h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-bold text-lg">Government</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Commercial */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Myrtle Beach Businesses Trust Weather Shield Roofing
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Minimal Business Disruption</h3>
                <p className="text-gray-700">
                  We schedule work during off-hours, weekends, or phased installations to keep your business operational. Safety protocols protect employees and customers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed & Fully Insured</h3>
                <p className="text-gray-700">
                  Comprehensive general liability and workers' compensation insurance protects your business. Licensed SC commercial roofing contractor with all credentials.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Commercial Expertise</h3>
                <p className="text-gray-700">
                  15+ years installing and maintaining commercial roofing systems. Deep understanding of building codes, OSHA requirements, and commercial specifications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Warranties</h3>
                <p className="text-gray-700">
                  Manufacturer system warranties up to 30 years plus our workmanship warranty. Written guarantees protect your roofing investment.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Maintenance Programs</h3>
                <p className="text-gray-700">
                  Preventive maintenance programs extend roof lifespan and prevent costly emergency repairs. Scheduled inspections and priority service.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Emergency Response</h3>
                <p className="text-gray-700">
                  Round-the-clock emergency service for urgent situations. Rapid response protects your business, inventory, and equipment from weather damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-slate-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protect Your Myrtle Beach Business with Expert Commercial Roofing
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your free commercial roof inspection and receive a detailed estimate with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8438775539"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              📞 Call (843) 877-5539
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors border-2 border-white"
            >
              Request Commercial Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Commercial Roofing FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                How long does commercial roof replacement take?
              </h3>
              <p className="text-gray-700">
                Timeline depends on roof size, complexity, and chosen system. Small commercial buildings may be completed in 3-5 days, while larger properties require 1-3 weeks. We phase work to minimize business disruption and can work during off-hours if needed.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                What's the best commercial roofing system for flat roofs in Myrtle Beach?
              </h3>
              <p className="text-gray-700">
                TPO is the most popular choice for its durability, energy efficiency, and proven coastal performance. EPDM offers excellent value for budget-conscious projects. Modified bitumen works well for roofs with heavy equipment or foot traffic. We'll recommend the best system based on your specific building, budget, and requirements during your free consultation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Do you offer maintenance programs for commercial roofs?
              </h3>
              <p className="text-gray-700">
                Yes. Our preventive maintenance programs include scheduled inspections, debris removal, minor repairs, and detailed reports. Regular maintenance extends roof lifespan by 30-50%, prevents emergency repairs, and maintains warranty compliance. Programs are customized to your building's needs and budget.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Will you work with our property management company or building owner?
              </h3>
              <p className="text-gray-700">
                Absolutely. We regularly work with property managers, building owners, contractors, and architects. We provide detailed documentation, coordinate with all stakeholders, and ensure compliance with specifications and timelines.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Can you repair our commercial roof without full replacement?
              </h3>
              <p className="text-gray-700">
                Often, yes. Many commercial roof leaks can be repaired with membrane patching, flashing restoration, or targeted section replacement. During your free inspection, we'll assess whether repair or replacement is the most cost-effective long-term solution and provide honest recommendations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Do you provide warranty coverage for commercial roofing?
              </h3>
              <p className="text-gray-700">
                Yes. Commercial roofing systems include manufacturer material warranties (typically 15-30 years depending on system) plus our workmanship warranty covering installation. We register all warranties and provide complete documentation for your records.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
