import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roof Replacement vs Repair: Which is Right for You? | Myrtle Beach SC',
  description: 'Should you repair or replace your roof? Expert guide comparing costs, benefits, and decision factors. Free inspection to determine the best option. Call (843) 877-5539.',
  openGraph: {
    title: 'Roof Replacement vs Repair: Which is Right for You? | Myrtle Beach SC',
    description: 'Should you repair or replace your roof? Expert guide comparing costs, benefits, and decision factors.',
    url: 'https://weathershieldroofers.com/roof-replacement-vs-repair',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'article',
  },
};

export default function RoofReplacementVsRepairPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💡 Expert Decision Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Roof Replacement vs Repair: Making the Right Choice
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Save Money with the Right Decision • Expert Analysis • Free Inspection
            </p>
            <p className="text-lg mb-8 text-gray-300">
              One of the most important roofing decisions you'll make: should you repair your existing roof or invest in complete replacement? This guide helps Myrtle Beach homeowners understand the factors, costs, and long-term implications of each option.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8438775539"
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                📞 Call (843) 877-5539
              </a>
              <Link
                href="/free-inspection"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Free Expert Assessment →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Decision Tool */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quick Decision Framework
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🔧</div>
                <h3 className="text-2xl font-bold text-green-900">Consider Repair When:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <span>Roof is less than 15 years old</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <span>Damage is localized to one area</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <span>Only 10-20% of roof needs work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <span>No leaks in multiple locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <span>Budget is currently limited</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <span>Repair costs under 30% of replacement</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🏠</div>
                <h3 className="text-2xl font-bold text-blue-900">Consider Replacement When:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Roof is 20+ years old</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Widespread shingle deterioration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Multiple leaks in different areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Visible sagging or structural issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Planning to sell home soon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Repair costs exceed 40% of replacement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Complete Comparison: Repair vs Replacement
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Factor</th>
                    <th className="px-6 py-4 text-left font-bold text-green-700">Roof Repair</th>
                    <th className="px-6 py-4 text-left font-bold text-blue-700">Roof Replacement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Upfront Cost</td>
                    <td className="px-6 py-4">Lower - Address specific issues only</td>
                    <td className="px-6 py-4">Higher - Complete system installation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Long-Term Value</td>
                    <td className="px-6 py-4">Temporary fix - May need more repairs soon</td>
                    <td className="px-6 py-4">Best value - 20-50 years of protection</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Timeline</td>
                    <td className="px-6 py-4">1 day typical</td>
                    <td className="px-6 py-4">1-3 days for most homes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Warranty</td>
                    <td className="px-6 py-4">Limited - Workmanship only, short duration</td>
                    <td className="px-6 py-4">Comprehensive - 25-50 years material + workmanship</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Home Value</td>
                    <td className="px-6 py-4">Minimal impact on resale value</td>
                    <td className="px-6 py-4">Increases value, strong selling point</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Energy Efficiency</td>
                    <td className="px-6 py-4">No improvement unless adding ventilation</td>
                    <td className="px-6 py-4">Modern materials reduce cooling costs 10-25%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Insurance Claims</td>
                    <td className="px-6 py-4">May be covered for storm damage</td>
                    <td className="px-6 py-4">Usually covered if storm-related</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Peace of Mind</td>
                    <td className="px-6 py-4">Temporary - Worry about next problem</td>
                    <td className="px-6 py-4">Complete - Decades of worry-free protection</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Understanding the True Cost Difference
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            While replacement costs more upfront, it often provides better long-term value when considering the full picture.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Repair Scenario</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Initial repair</span>
                  <span className="font-semibold">Base cost</span>
                </div>
                <div className="flex justify-between">
                  <span>2nd repair (1-2 years)</span>
                  <span className="font-semibold">+Cost</span>
                </div>
                <div className="flex justify-between">
                  <span>3rd repair (2-3 years)</span>
                  <span className="font-semibold">+Cost</span>
                </div>
                <div className="flex justify-between">
                  <span>Replacement (5 years)</span>
                  <span className="font-semibold">+Full cost</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg">
                  <span className="font-bold">Total over 5 years:</span>
                  <span className="font-bold text-red-600">Higher Total</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Multiple repairs add up. Eventually replacement becomes necessary anyway.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border-2 border-teal-500">
              <div className="text-center mb-4">
                <div className="inline-block bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  BEST VALUE
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Replacement Scenario</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Complete replacement</span>
                  <span className="font-semibold">One-time cost</span>
                </div>
                <div className="flex justify-between">
                  <span>Years 1-25</span>
                  <span className="font-semibold text-green-600">$0 repairs</span>
                </div>
                <div className="flex justify-between">
                  <span>Warranty coverage</span>
                  <span className="font-semibold text-green-600">25-50 years</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual maintenance</span>
                  <span className="font-semibold">Minimal</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg">
                  <span className="font-bold">Total over 5 years:</span>
                  <span className="font-bold text-green-600">Lower Total</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                One investment provides decades of protection with comprehensive warranty.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Hidden Costs</h3>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <p className="font-semibold mb-1">Emergency Repairs</p>
                  <p className="text-sm text-gray-600">Aging roofs have more urgent issues requiring premium pricing</p>
                </div>
                <div className="border-b pb-3">
                  <p className="font-semibold mb-1">Interior Damage</p>
                  <p className="text-sm text-gray-600">Delayed replacement leads to ceiling, insulation, and mold damage</p>
                </div>
                <div className="border-b pb-3">
                  <p className="font-semibold mb-1">Energy Costs</p>
                  <p className="text-sm text-gray-600">Old roofs lack modern efficiency - higher AC bills</p>
                </div>
                <div className="pb-3">
                  <p className="font-semibold mb-1">Resale Discount</p>
                  <p className="text-sm text-gray-600">Old roofs reduce home value and buyer appeal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Factors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Decision Factors for Myrtle Beach Homeowners
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">✅ Choose Repair If:</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Roof Age Under 15 Years</p>
                  <p className="text-gray-700">Modern roofing materials should last 20-30 years. If your roof is relatively new, repair is often appropriate.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">2. Isolated Damage</p>
                  <p className="text-gray-700">Storm damage or fallen branches affecting one section can be repaired effectively without full replacement.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">3. Budget Constraints</p>
                  <p className="text-gray-700">If immediate replacement isn't financially feasible and damage is minor, strategic repair buys time.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">4. Short-Term Ownership</p>
                  <p className="text-gray-700">Selling within 1-2 years? Repair may be sufficient if roof passes inspection.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">🏠 Choose Replacement If:</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Roof Age 20+ Years</p>
                  <p className="text-gray-700">Coastal exposure accelerates aging. After 20 years, replacement provides better value than ongoing repairs.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">2. Multiple Problem Areas</p>
                  <p className="text-gray-700">Leaks in different locations or widespread shingle damage indicates systemic failure requiring replacement.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">3. Frequent Repairs</p>
                  <p className="text-gray-700">If you've repaired your roof 2-3 times in recent years, replacement ends the cycle.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">4. Energy Concerns</p>
                  <p className="text-gray-700">Modern roofing materials significantly reduce cooling costs - worthwhile investment in hot Myrtle Beach climate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Expert Guidance on Your Roof Decision
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Free inspection and honest assessment. We'll help you make the right choice for your home and budget.
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
              Schedule Free Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                How do I know if my roof needs repair or replacement?
              </h3>
              <p className="text-gray-700">
                Schedule a professional inspection. We'll assess roof age, extent of damage, structural integrity, and remaining lifespan. Our honest evaluation includes repair costs vs. replacement costs, helping you make an informed decision. Most homeowners are surprised to learn replacement often costs less long-term than repeated repairs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Can I just repair part of my roof instead of replacing it all?
              </h3>
              <p className="text-gray-700">
                Yes, if damage is truly isolated and your roof is relatively young. However, partial repairs on older roofs often lead to aesthetic mismatches (new shingles don't match weathered ones) and don't address underlying issues. If more than 30% of your roof needs work, full replacement is typically more cost-effective.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                How much does roof replacement cost compared to repair?
              </h3>
              <p className="text-gray-700">
                Repairs can range from several hundred dollars for minor fixes to thousands for extensive damage. Replacement is a larger upfront investment but includes decades of warranty coverage and no repair costs. When you factor in avoided future repairs, energy savings, and increased home value, replacement often provides better return on investment. We provide transparent estimates for both options.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Will insurance cover roof replacement or just repairs?
              </h3>
              <p className="text-gray-700">
                Insurance coverage depends on the cause and your policy. Storm damage, hail, fallen trees, and sudden events are typically covered - replacement or repair. Gradual wear, poor maintenance, and age-related deterioration usually aren't covered. We help document damage and work with adjusters to maximize your claim whether repair or replacement is needed.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                How long does roof replacement take vs. repair?
              </h3>
              <p className="text-gray-700">
                Most repairs take 1 day. Complete roof replacement typically takes 1-3 days depending on size and complexity. While replacement takes slightly longer, it's a one-time project providing 20-50 years of protection. Choosing repair often means multiple disruptions over the years as additional problems emerge.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Should I replace my roof before selling my home?
              </h3>
              <p className="text-gray-700">
                If your roof is over 15 years old or has visible issues, replacement before listing typically provides strong ROI. New roofs eliminate buyer concerns, prevent negotiation discounts, help homes pass inspections, and make properties more attractive. Homes with new roofs sell faster and for higher prices. If selling within months, strategic repairs may suffice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
