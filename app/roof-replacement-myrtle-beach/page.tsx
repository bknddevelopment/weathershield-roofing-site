import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roof Replacement Myrtle Beach SC | 5.0★ Rated | Free Estimates | (843) 877-5539',
  description: 'Expert roof replacement in Myrtle Beach, SC. All roofing materials: asphalt shingles, metal, tile, flat roofs. 5.0★ Google rating. Lifetime warranties available. Call (843) 877-5539.',
  openGraph: {
    title: 'Roof Replacement Myrtle Beach SC | 5.0★ Rated | Free Estimates',
    description: 'Expert roof replacement in Myrtle Beach, SC. All roofing materials: asphalt shingles, metal, tile, flat roofs. 5.0★ Google rating.',
    url: 'https://weathershieldroofers.com/roof-replacement-myrtle-beach',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RoofReplacementMyrtleBeachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/roof-installation.jpg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏆 Myrtle Beach's Top-Rated Roof Replacement Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Roof Replacement in Myrtle Beach, SC
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Complete Roof Replacement • All Materials • Lifetime Warranties • 5.0★ Perfect Rating
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-3xl">
              When your roof reaches the end of its lifespan, Weather Shield Roofing delivers expert replacement services with premium materials, superior craftsmanship, and comprehensive warranties. Our perfect 5.0-star Google rating reflects our commitment to quality installations that protect your home for decades.
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
                Get Free Estimate →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Replacement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Signs Your Myrtle Beach Roof Needs Replacement
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Knowing when to replace your roof saves money on repairs and prevents interior damage. Watch for these warning signs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-xl font-bold mb-3">Age Over 20-25 Years</h3>
              <p className="text-gray-700">
                Most asphalt shingle roofs last 20-25 years in coastal climates. If your roof is approaching this age, replacement is more cost-effective than ongoing repairs.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl mb-3">🏚️</div>
              <h3 className="text-xl font-bold mb-3">Widespread Shingle Damage</h3>
              <p className="text-gray-700">
                Curling, cracking, or missing shingles across large roof areas indicate material failure. Patchwork repairs won't restore structural integrity.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl mb-3">💧</div>
              <h3 className="text-xl font-bold mb-3">Multiple Leak Points</h3>
              <p className="text-gray-700">
                Leaks in multiple locations suggest underlayment deterioration. Replacing individual sections often leads to more leaks elsewhere.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Sagging or Structural Issues</h3>
              <p className="text-gray-700">
                Visible sagging indicates roof deck damage from moisture infiltration. Replacement includes new decking to restore structural integrity.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl mb-3">☀️</div>
              <h3 className="text-xl font-bold mb-3">Severe Granule Loss</h3>
              <p className="text-gray-700">
                Excessive granules in gutters and bare spots on shingles mean UV protection is gone. Exposed asphalt deteriorates rapidly.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-3">Increasing Repair Costs</h3>
              <p className="text-gray-700">
                When repair costs approach 30-50% of replacement costs, replacement becomes the smarter long-term investment with warranty protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roofing Materials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Roofing Materials We Install in Myrtle Beach
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Choose from premium roofing systems designed for coastal performance, longevity, and aesthetic appeal.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Asphalt Shingle Roofing</h3>
              <p className="text-gray-700 mb-4">
                Most popular choice for residential properties. Architectural shingles offer superior durability, wind resistance up to 130 mph, and lifetime warranty options. Available in dozens of colors and styles.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Lifespan: 25-30+ years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">GAF, CertainTeed, Owens Corning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Algae-resistant, Class 4 impact rated</span>
                </li>
              </ul>
              <Link href="/asphalt-shingles-myrtle-beach" className="text-teal-600 hover:text-teal-700 font-semibold">
                Learn More About Asphalt Shingles →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Metal Roofing Systems</h3>
              <p className="text-gray-700 mb-4">
                Premium choice for longevity and energy efficiency. Standing seam and metal shingle systems withstand hurricane-force winds up to 180 mph and reflect solar heat, reducing cooling costs by 25%.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Lifespan: 40-70 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Steel, aluminum, copper, zinc</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Energy Star rated, fire resistant</span>
                </li>
              </ul>
              <Link href="/metal-roofing-myrtle-beach" className="text-teal-600 hover:text-teal-700 font-semibold">
                Learn More About Metal Roofing →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Tile Roofing (Clay & Concrete)</h3>
              <p className="text-gray-700 mb-4">
                Mediterranean elegance with exceptional longevity. Clay and concrete tiles excel in coastal environments, offering superior fire resistance, wind performance, and iconic architectural character.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Lifespan: 50-100 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Mission, barrel, flat tile styles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Class A fire rated, hurricane resistant</span>
                </li>
              </ul>
              <Link href="/clay-tile-roofing-myrtle-beach" className="text-teal-600 hover:text-teal-700 font-semibold">
                Learn More About Tile Roofing →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Flat Roof Systems (TPO, EPDM)</h3>
              <p className="text-gray-700 mb-4">
                Modern commercial and low-slope residential solutions. TPO and EPDM membranes offer excellent waterproofing, UV resistance, and energy efficiency for flat or low-pitch roofs.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Lifespan: 20-30 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">TPO, EPDM, modified bitumen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Energy Star, ponding water resistant</span>
                </li>
              </ul>
              <Link href="/flat-roof-systems-myrtle-beach" className="text-teal-600 hover:text-teal-700 font-semibold">
                Learn More About Flat Roofing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Replacement Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Roof Replacement Process
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Free Inspection & Estimate</h3>
                <p className="text-gray-700">
                  Comprehensive roof inspection with photos and measurements. Detailed written estimate with material options, timeline, and warranty information. No pressure—we educate you on your options.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Material Selection & Scheduling</h3>
                <p className="text-gray-700">
                  Choose your roofing material, color, and warranty level. We order materials and schedule installation around weather and your timeline. Typical projects start within 1-3 weeks.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Property Protection & Tear-Off</h3>
                <p className="text-gray-700">
                  Protect landscaping, siding, and driveway with tarps. Complete removal of old roofing materials down to the deck. Inspect and repair any damaged decking discovered.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Installation of Underlayment & Materials</h3>
                <p className="text-gray-700">
                  Install high-quality synthetic underlayment, ice-and-water shield, and drip edge. Proper ventilation system. Install new roofing materials per manufacturer specifications for full warranty compliance.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Quality Inspection & Cleanup</h3>
                <p className="text-gray-700">
                  Final inspection ensures proper installation and aesthetics. Magnetic sweep removes nails from property. Complete debris removal and haul-away. Leave your property cleaner than we found it.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                6
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Warranty Registration & Final Walkthrough</h3>
                <p className="text-gray-700">
                  Register your manufacturer warranty and provide all warranty documentation. Conduct final walkthrough to ensure complete satisfaction. Explain maintenance recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Myrtle Beach Homeowners Choose Weather Shield for Roof Replacement
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="text-xl font-bold mb-2">Perfect 5.0★ Rating</h3>
              <p className="text-gray-700">
                73 verified Google reviews with perfect 5.0 stars. Our roof replacement customers consistently praise quality, professionalism, and value.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">🏖️</div>
              <h3 className="text-xl font-bold mb-2">Coastal Expertise</h3>
              <p className="text-gray-700">
                Deep understanding of Myrtle Beach's unique challenges: salt air, hurricanes, humidity, UV exposure. We specify materials proven in coastal conditions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Lifetime Warranty Options</h3>
              <p className="text-gray-700">
                Manufacturer warranties up to 50 years plus our workmanship warranty. Lifetime limited warranties available on premium architectural shingles.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-700">
                Fully licensed SC contractor with comprehensive liability and workers' comp insurance. Your property is protected throughout the project.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="text-xl font-bold mb-2">Premium Materials Only</h3>
              <p className="text-gray-700">
                Certified installer for GAF, CertainTeed, Owens Corning, Atlas. We use only top-tier materials with proven coastal performance records.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
              <p className="text-gray-700">
                Detailed written estimates with line-by-line breakdowns. No hidden fees. We explain every cost so you understand exactly what you're investing in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a New Roof? Get Your Free Estimate Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your free inspection and receive a detailed estimate with no obligation. Let's discuss your roofing goals.
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

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Roof Replacement FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                How long does a roof replacement take in Myrtle Beach?
              </h3>
              <p className="text-gray-700">
                Most residential roof replacements take 1-3 days depending on roof size, complexity, and weather. Simple ranch homes may be completed in one day, while larger or steeper roofs require 2-3 days. We work efficiently while maintaining quality standards and proper installation techniques.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                Should I repair or replace my roof?
              </h3>
              <p className="text-gray-700">
                Replace if your roof is over 20 years old, has widespread damage, multiple leak points, or if repair costs exceed 30% of replacement costs. Repair if damage is localized, the roof is relatively new, and the majority of the roofing system is in good condition. We'll provide honest recommendations during your free inspection.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                What's the best roofing material for coastal Myrtle Beach homes?
              </h3>
              <p className="text-gray-700">
                Architectural asphalt shingles with algae resistance and high wind ratings are the most popular choice, offering excellent value and performance. Metal roofing excels for longevity and hurricane resistance. Tile roofing provides ultimate durability and fire resistance. Your best choice depends on budget, home style, and priorities—we'll help you decide during your consultation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                Will you help with my insurance claim for roof replacement?
              </h3>
              <p className="text-gray-700">
                Yes. If your roof was damaged by storms or covered perils, we provide detailed documentation for insurance claims, meet with adjusters, and help ensure fair coverage. However, replacement due to normal wear and tear or lack of maintenance typically isn't covered by insurance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                Do I need to be home during roof replacement?
              </h3>
              <p className="text-gray-700">
                You don't need to be home during the work, but we recommend being available for the initial walkthrough and final inspection. We'll protect your property, work safely, and keep you updated on progress. Most homeowners leave for work and return to a completed roof.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                What warranties come with a new roof?
              </h3>
              <p className="text-gray-700">
                You receive two warranties: manufacturer's material warranty (25-50 years or lifetime depending on product) and our workmanship warranty covering installation. We register all warranties and provide complete documentation. Premium systems offer non-prorated warranties and transferable coverage for resale value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
