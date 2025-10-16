import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Residential Roofing Myrtle Beach SC | Home Roofing Experts | (843) 877-5539',
  description: 'Expert residential roofing in Myrtle Beach, SC. New roofs, repairs, replacements for homes. 5.0★ Google rating. All materials. Lifetime warranties. Call (843) 877-5539.',
  openGraph: {
    title: 'Residential Roofing Myrtle Beach SC | Home Roofing Experts',
    description: 'Expert residential roofing in Myrtle Beach, SC. New roofs, repairs, replacements for homes. 5.0★ Google rating.',
    url: 'https://weathershieldroofers.com/residential-roofing-myrtle-beach',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ResidentialRoofingMyrtleBeachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/residential-home.jpg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏡 Myrtle Beach's Trusted Home Roofing Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Residential Roofing Services in Myrtle Beach, SC
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Protecting Myrtle Beach Homes Since 2008 • 5.0★ Perfect Rating • Licensed & Insured
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-3xl">
              Weather Shield Roofing specializes in residential roofing for Myrtle Beach homeowners. From single-family homes to townhouses and condos, we deliver expert installations, repairs, and maintenance with the craftsmanship and attention to detail your home deserves.
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
                Get Free Estimate →
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
              <div className="text-4xl font-bold text-blue-600 mb-2">2,000+</div>
              <div className="text-gray-600">Homes Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5.0★</div>
              <div className="text-gray-600">Perfect Google Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Complete Residential Roofing Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From new construction to repairs and maintenance, we handle every residential roofing need with expert precision.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3">New Roof Installation</h3>
              <p className="text-gray-700 mb-4">
                Complete new roofing systems for new construction, additions, and detached structures. Premium materials with manufacturer warranties up to lifetime coverage.
              </p>
              <Link href="/roof-replacement-myrtle-beach" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-3">Roof Replacement</h3>
              <p className="text-gray-700 mb-4">
                Full tear-off and replacement when your roof reaches end-of-life. All roofing materials available: asphalt shingles, metal, tile, slate.
              </p>
              <Link href="/roof-replacement-myrtle-beach" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-3">Roof Repairs</h3>
              <p className="text-gray-700 mb-4">
                Expert repair services for leaks, storm damage, missing shingles, flashing issues, and structural problems. Fast response and lasting solutions.
              </p>
              <Link href="/services/roof-repair" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">Roof Inspections</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive inspections with detailed reports. Pre-purchase inspections, annual maintenance checks, and post-storm assessments.
              </p>
              <Link href="/free-inspection" className="text-blue-600 hover:text-blue-700 font-semibold">
                Schedule Free Inspection →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⛈️</div>
              <h3 className="text-2xl font-bold mb-3">Storm Damage Restoration</h3>
              <p className="text-gray-700 mb-4">
                Hurricane and severe weather damage repair with insurance claim assistance. Emergency tarping and rapid response available 24/7.
              </p>
              <Link href="/services/storm-damage" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold mb-3">Maintenance & Prevention</h3>
              <p className="text-gray-700 mb-4">
                Preventive maintenance programs to extend roof lifespan. Gutter cleaning, debris removal, minor repairs, and annual checkups.
              </p>
              <Link href="/services/roof-maintenance" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Home Types We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            We Service All Residential Property Types
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-5xl mb-4">🏡</div>
              <h3 className="text-xl font-bold mb-3">Single-Family Homes</h3>
              <p className="text-gray-700">
                Ranch, colonial, Cape Cod, craftsman, and modern architectural styles. All roof pitches and complexities.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-5xl mb-4">🏘️</div>
              <h3 className="text-xl font-bold mb-3">Townhouses & Condos</h3>
              <p className="text-gray-700">
                Multi-unit residential properties and HOA communities. Experience with association requirements and approvals.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-5xl mb-4">🏖️</div>
              <h3 className="text-xl font-bold mb-3">Coastal & Beach Homes</h3>
              <p className="text-gray-700">
                Specialized expertise in coastal construction, salt air resistance, and hurricane-rated installations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3">New Construction</h3>
              <p className="text-gray-700">
                Complete roofing systems for new home builds. Work with builders and homeowners on material selection.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-5xl mb-4">🏚️</div>
              <h3 className="text-xl font-bold mb-3">Historic Homes</h3>
              <p className="text-gray-700">
                Restoration and preservation-appropriate roofing for historic properties. Traditional materials and methods.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">Investment Properties</h3>
              <p className="text-gray-700">
                Rental homes, vacation properties, and real estate portfolios. Value-focused solutions with strong warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Homeowners Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Myrtle Beach Homeowners Trust Weather Shield Roofing
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Homeowner-Focused Service</h3>
                <p className="text-gray-700">
                  We treat your home like our own. Clear communication, respectful crews, property protection, and thorough cleanup after every project.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Perfect 5.0★ Customer Rating</h3>
                <p className="text-gray-700">
                  73 verified Google reviews from satisfied homeowners. Our customers consistently praise our quality work, honest pricing, and professionalism.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Coastal Roofing Expertise</h3>
                <p className="text-gray-700">
                  15+ years protecting Myrtle Beach homes from salt air, hurricanes, humidity, and UV exposure. We know what works in our climate.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Warranties</h3>
                <p className="text-gray-700">
                  Manufacturer material warranties up to lifetime coverage plus our workmanship warranty. Peace of mind for your investment.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent, Honest Pricing</h3>
                <p className="text-gray-700">
                  Detailed written estimates with no hidden fees. We explain every line item so you understand exactly what you're paying for.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Premium Materials</h3>
                <p className="text-gray-700">
                  Certified installer for GAF, CertainTeed, Owens Corning, Atlas. We use only top-tier materials with proven performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Roofing Materials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Residential Roofing Materials for Myrtle Beach Homes
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Choose from a wide range of premium roofing materials designed for coastal performance and lasting beauty.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/asphalt-shingles-myrtle-beach" className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Asphalt Shingles</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Most popular choice. Architectural and 3-tab options. 25-30+ year lifespan.
              </p>
              <span className="text-blue-600 font-semibold text-sm">View Details →</span>
            </Link>

            <Link href="/metal-roofing-myrtle-beach" className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Metal Roofing</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Premium longevity. Standing seam and metal shingles. 40-70 year lifespan.
              </p>
              <span className="text-blue-600 font-semibold text-sm">View Details →</span>
            </Link>

            <Link href="/clay-tile-roofing-myrtle-beach" className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Tile Roofing</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Mediterranean elegance. Clay and concrete. 50-100 year lifespan.
              </p>
              <span className="text-blue-600 font-semibold text-sm">View Details →</span>
            </Link>

            <Link href="/slate-roofing-myrtle-beach" className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Slate Roofing</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Ultimate luxury. Natural stone. 75-150 year lifespan.
              </p>
              <span className="text-blue-600 font-semibold text-sm">View Details →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your Myrtle Beach Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your free roof inspection and get a detailed estimate. No pressure, just honest advice from local experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8438775539"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              📞 Call (843) 877-5539
            </a>
            <Link
              href="/free-inspection"
              className="inline-flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors border-2 border-white"
            >
              Schedule Free Inspection →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Residential Roofing FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                How much does a new residential roof cost in Myrtle Beach?
              </h3>
              <p className="text-gray-700">
                Residential roof replacement costs vary based on size, pitch, materials, and complexity. Contact us for a detailed free estimate tailored to your specific home. We provide transparent pricing with line-by-line breakdowns so you understand every cost.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Do you offer financing for residential roofing projects?
              </h3>
              <p className="text-gray-700">
                Yes, we offer flexible financing options to make roof replacement and repairs affordable. Ask about our financing programs during your free estimate appointment.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                How long does residential roof installation take?
              </h3>
              <p className="text-gray-700">
                Most residential roof replacements take 1-3 days depending on home size and complexity. Simple ranch homes may be completed in one day, while larger or steeper roofs require additional time. We work efficiently while maintaining quality standards.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                What roofing material is best for my home in Myrtle Beach?
              </h3>
              <p className="text-gray-700">
                The best material depends on your home's style, budget, and priorities. Asphalt shingles offer excellent value and performance. Metal roofing excels for longevity and hurricane resistance. Tile provides Mediterranean character and fire resistance. We'll help you choose during your free consultation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Do you work with HOA requirements and approvals?
              </h3>
              <p className="text-gray-700">
                Yes, we're experienced working within HOA communities and architectural guidelines. We help with HOA approval processes, provide required documentation, and ensure your roofing project complies with community standards.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Will you protect my landscaping and property during installation?
              </h3>
              <p className="text-gray-700">
                Absolutely. We protect landscaping, siding, driveways, and property with tarps and barriers. Our crews work carefully to minimize disruption. We perform magnetic sweeps to remove nails and leave your property cleaner than we found it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
