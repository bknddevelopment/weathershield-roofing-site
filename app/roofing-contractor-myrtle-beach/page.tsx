import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Roofing Contractor Myrtle Beach SC | 5.0★ Rated | Weather Shield Roofing',
  description: 'Top-rated roofing contractor in Myrtle Beach, SC. 5.0★ Google rating with 73 reviews. Expert roof repair, replacement, and emergency services. Free inspections. Call (843) 877-5539.',
  openGraph: {
    title: 'Roofing Contractor Myrtle Beach SC | 5.0★ Rated | Weather Shield Roofing',
    description: 'Top-rated roofing contractor in Myrtle Beach, SC. 5.0★ Google rating with 73 reviews. Expert roof repair, replacement, and emergency services.',
    url: 'https://weathershieldroofers.com/roofing-contractor-myrtle-beach',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Contractor Myrtle Beach SC | 5.0★ Rated | Weather Shield Roofing',
    description: 'Top-rated roofing contractor in Myrtle Beach, SC. 5.0★ Google rating with 73 reviews. Expert roof repair, replacement, and emergency services.',
  },
};

export default function RoofingContractorMyrtleBeachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/roof-texture.jpg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏆 Myrtle Beach's #1 Rated Roofing Contractor
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Roofing Contractor in Myrtle Beach, SC
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              5.0★ Google Rating • 73 Reviews • Licensed & Insured • Free Inspections
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Weather Shield Roofing is Myrtle Beach's most trusted roofing contractor, specializing in roof repair, replacement, emergency services, and storm damage restoration. Our perfect 5.0-star rating reflects our commitment to quality craftsmanship, honest communication, and complete customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8438775539"
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                📞 Call (843) 877-5539
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">5.0★</div>
              <div className="text-gray-600">Perfect Google Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">73+</div>
              <div className="text-gray-600">Verified Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Complete Roofing Services in Myrtle Beach
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From minor repairs to complete replacements, we handle every roofing need with expert precision and honest pricing.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Roof Replacement */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3">Roof Replacement</h3>
              <p className="text-gray-600 mb-4">
                Complete roof replacement with premium materials. Asphalt shingles, metal roofing, tile, and flat roof systems. Lifetime warranty options available.
              </p>
              <Link href="/roof-replacement-myrtle-beach" className="text-teal-600 hover:text-teal-700 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* Roof Repair */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-3">Roof Repair</h3>
              <p className="text-gray-600 mb-4">
                Expert repair services for leaks, missing shingles, flashing issues, and storm damage. Fast response times and lasting solutions.
              </p>
              <Link href="/services/roof-repair" className="text-teal-600 hover:text-teal-700 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* Emergency Services */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-2xl font-bold mb-3">Emergency Repairs</h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency roofing service for storm damage, severe leaks, and urgent situations. Rapid response to protect your home.
              </p>
              <Link href="/emergency-roof-repair-myrtle-beach" className="text-teal-600 hover:text-teal-700 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* Storm Damage */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⛈️</div>
              <h3 className="text-2xl font-bold mb-3">Storm Damage Repair</h3>
              <p className="text-gray-600 mb-4">
                Hurricane and storm damage restoration with insurance claim assistance. We handle documentation and work directly with adjusters.
              </p>
              <Link href="/services/storm-damage" className="text-teal-600 hover:text-teal-700 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* Roof Inspections */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">Free Roof Inspections</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive roof inspections with detailed reports. Identify issues early before they become costly problems.
              </p>
              <Link href="/free-inspection" className="text-teal-600 hover:text-teal-700 font-semibold">
                Schedule Free Inspection →
              </Link>
            </div>

            {/* Residential & Commercial */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-3">Residential & Commercial</h3>
              <p className="text-gray-600 mb-4">
                Expert roofing services for homes, businesses, and multi-family properties. Licensed for all project sizes.
              </p>
              <Link href="/residential-roofing-myrtle-beach" className="text-teal-600 hover:text-teal-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Weather Shield */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Myrtle Beach Homeowners Choose Weather Shield Roofing
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Perfect 5.0★ Rating</h3>
                <p className="text-gray-600">
                  73 verified Google reviews with a perfect 5.0-star rating. Our customers consistently praise our quality work, honest pricing, and professional service.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Fully licensed South Carolina roofing contractor with comprehensive liability and workers' compensation insurance protecting you and your property.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Local Coastal Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of Myrtle Beach's coastal climate challenges: salt air corrosion, hurricane-force winds, humidity, and UV exposure.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Warranties</h3>
                <p className="text-gray-600">
                  Manufacturer warranties up to 50 years plus our workmanship warranty. We stand behind every installation with written guarantees.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  Detailed written estimates with no hidden fees. We explain every line item so you know exactly what you're paying for.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Premium Materials</h3>
                <p className="text-gray-600">
                  GAF, CertainTeed, Owens Corning, and Atlas certified contractor. Access to the industry's best roofing materials and longest warranties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Proudly Serving Myrtle Beach & Surrounding Areas
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Weather Shield Roofing provides expert roofing services throughout the Grand Strand and Horry County.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Primary Service Area</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Myrtle Beach</li>
                <li>North Myrtle Beach</li>
                <li>Surfside Beach</li>
                <li>Murrells Inlet</li>
                <li>Conway</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Extended Coverage</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Garden City</li>
                <li>Pawleys Island</li>
                <li>Litchfield Beach</li>
                <li>Little River</li>
                <li>Socastee</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Greater Horry County</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Aynor</li>
                <li>Loris</li>
                <li>Georgetown (North)</li>
                <li>Marion County (East)</li>
                <li>Brunswick County (South)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work with Myrtle Beach's Top-Rated Roofer?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free roof inspection and detailed estimate. No pressure, just honest advice from local roofing experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8438775539"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-teal-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              📞 Call (843) 877-5539
            </a>
            <Link
              href="/free-inspection"
              className="inline-flex items-center justify-center bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors border-2 border-white"
            >
              Schedule Free Inspection →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                What makes Weather Shield Roofing the best contractor in Myrtle Beach?
              </h3>
              <p className="text-gray-700">
                Our perfect 5.0-star Google rating with 73 verified reviews speaks for itself. We combine expert craftsmanship, premium materials, honest pricing, and exceptional customer service. We're locally owned, fully insured, and specialize in coastal roofing challenges unique to Myrtle Beach.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                Do you offer free roof inspections in Myrtle Beach?
              </h3>
              <p className="text-gray-700">
                Yes! We provide completely free, no-obligation roof inspections with detailed reports. Our inspections identify current issues, potential problems, and remaining roof lifespan. There's never any pressure to move forward—we simply give you the information you need to make informed decisions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                How quickly can you respond to roofing emergencies?
              </h3>
              <p className="text-gray-700">
                We offer 24/7 emergency roofing services for urgent situations like severe leaks, storm damage, or structural issues. During business hours, we typically respond within hours. After-hours emergency calls receive rapid attention to minimize damage to your home.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                What roofing materials do you install in Myrtle Beach?
              </h3>
              <p className="text-gray-700">
                We install all major roofing systems: architectural and 3-tab asphalt shingles, standing seam metal roofing, clay and concrete tile, slate roofing, TPO and EPDM flat roof systems, and modified bitumen. We're certified installers for GAF, CertainTeed, Owens Corning, and Atlas.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                Do you help with insurance claims for storm damage?
              </h3>
              <p className="text-gray-700">
                Absolutely. We have extensive experience working with insurance companies on storm damage claims. We provide detailed documentation, meet with adjusters, and help ensure you receive fair coverage for necessary repairs or replacement.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                Are you licensed and insured in South Carolina?
              </h3>
              <p className="text-gray-700">
                Yes. Weather Shield Roofing is a fully licensed South Carolina roofing contractor with comprehensive general liability insurance and workers' compensation coverage. Our credentials protect you and your property throughout every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
