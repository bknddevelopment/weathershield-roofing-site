import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Award, DollarSign, Clock, Wind, CheckCircle, TrendingUp, Phone } from 'lucide-react'
import Section from '../../components/ui/Section'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'Roofing Shingle Types Guide 2025 | Best Roof Shingles Myrtle Beach',
  description: 'Complete guide to roofing shingle types: architectural vs 3-tab vs dimensional vs composite. Compare lifespans, costs, wind ratings, warranties. Expert recommendations for coastal homes.',
  keywords: 'composite shingles, dimensional shingles, best roof shingles, architectural shingles, 3-tab shingles, asphalt shingles, roof shingle types, shingle comparison',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roofing-guide/shingle-types',
  },
  openGraph: {
    title: 'Complete Guide to Roofing Shingle Types | 2025 Comparison',
    description: 'Expert comparison of architectural, dimensional, 3-tab, and composite shingles. Lifespan, cost, wind ratings, and warranty analysis for Myrtle Beach homes.',
    url: 'https://weathershieldroofers.com/roofing-guide/shingle-types',
    type: 'article',
  },
}

export default function ShingleTypesGuidePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Guide to Roofing Shingle Types
            </h1>
            <p className="text-xl mb-8">
              Expert comparison of architectural, dimensional, 3-tab, and composite shingles to help you make
              the best decision for your Myrtle Beach home. Compare lifespans, costs, wind ratings, and warranties.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Shingle Estimate
              </Link>
              <Link href="tel:843-877-5539" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                <Phone className="inline-block w-5 h-5 mr-2" />
                Call (843) 877-5539
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Shingle Types Quick Comparison</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="text-left p-4 font-bold">Shingle Type</th>
                  <th className="text-left p-4 font-bold">Lifespan</th>
                  <th className="text-left p-4 font-bold">Cost per Sq Ft</th>
                  <th className="text-left p-4 font-bold">Wind Rating</th>
                  <th className="text-left p-4 font-bold">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">3-Tab Shingles</td>
                  <td className="p-4">15-20 years</td>
                  <td className="p-4">$1.50-$3.00</td>
                  <td className="p-4">60-70 mph</td>
                  <td className="p-4">Budget projects, rentals</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 bg-green-50">
                  <td className="p-4 font-semibold">Architectural Shingles</td>
                  <td className="p-4">25-30 years</td>
                  <td className="p-4">$3.50-$5.50</td>
                  <td className="p-4">110-130 mph</td>
                  <td className="p-4">Most homes (best value)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Dimensional Shingles</td>
                  <td className="p-4">30-40 years</td>
                  <td className="p-4">$4.50-$6.50</td>
                  <td className="p-4">120-130 mph</td>
                  <td className="p-4">Premium homes</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Luxury/Designer Shingles</td>
                  <td className="p-4">40-50 years</td>
                  <td className="p-4">$6.00-$10.00</td>
                  <td className="p-4">130+ mph</td>
                  <td className="p-4">High-end homes</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">Impact-Resistant Shingles</td>
                  <td className="p-4">30-50 years</td>
                  <td className="p-4">$4.50-$8.00</td>
                  <td className="p-4">110-130 mph</td>
                  <td className="p-4">Hail/storm zones</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 text-center mt-4">
            *Prices include materials only. Add $2-4/sq ft for professional installation in Myrtle Beach.
          </p>
        </div>
      </Section>

      {/* Shingle Categories Overview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Understanding Shingle Categories</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              Asphalt roofing shingles dominate the residential roofing market, accounting for over 80% of homes in
              Myrtle Beach. Understanding the differences between shingle types helps you balance cost, performance,
              and aesthetics for your specific needs. All asphalt shingles share common components—fiberglass mat,
              asphalt coating, and ceramic granules—but vary significantly in thickness, layering, and engineering.
            </p>
          </div>

          {/* Architectural Shingles */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4 border-green-500">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Architectural Shingles (Laminate/Dimensional)</h3>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </span>
            </div>
            <p className="text-gray-700 mb-6">
              Architectural shingles are the gold standard for residential roofing, offering the best balance of
              performance, aesthetics, and value. They feature multiple layers of material laminated together,
              creating dimensional texture that mimics wood shake or slate appearance while providing superior
              durability and wind resistance.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-green-600 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Key Advantages
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 25-30 year lifespan (coastal climates)</li>
                  <li>• 110-130 mph wind resistance standard</li>
                  <li>• Enhanced curb appeal and depth</li>
                  <li>• Excellent value for performance</li>
                  <li>• Available in 40+ colors</li>
                  <li>• Class A fire rating</li>
                  <li>• Algae-resistant options standard</li>
                  <li>• Hides roof imperfections better</li>
                  <li>• Increases home resale value</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-600 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Cost & Specifications
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Material: $3.50-$5.50/sq ft</li>
                  <li>• Installed: $5.50-$9.50/sq ft</li>
                  <li>• Weight: 240-350 lbs/square</li>
                  <li>• Thickness: 3-4x thicker than 3-tab</li>
                  <li>• Warranty: 30-50 years (prorated)</li>
                  <li>• Wind warranty: Lifetime (with proper installation)</li>
                  <li>• 2,000 sq ft roof: $11,000-$19,000</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Weather Shield Recommendation
              </h4>
              <p className="text-gray-700">
                Architectural shingles are our top recommendation for 90% of Myrtle Beach homes. They provide
                exceptional hurricane resistance (when properly installed with 6-nail pattern), outstanding
                longevity for coastal environments, and beautiful aesthetics that increase property value.
                Choose impact-resistant architectural shingles (Class 4) for maximum protection and insurance
                discounts up to 20%.
              </p>
            </div>
          </div>

          {/* 3-Tab Shingles */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">3-Tab Shingles (Basic/Strip Shingles)</h3>
            <p className="text-gray-700 mb-6">
              3-tab shingles represent the most basic and economical asphalt shingle option. They feature a
              single-layer construction with three tabs creating a uniform, flat appearance. While popular in
              previous decades, they\'ve largely been replaced by architectural shingles for primary residences
              due to limited lifespan and lower wind resistance.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-green-600">Advantages</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lowest upfront cost</li>
                  <li>• Faster installation</li>
                  <li>• Adequate for basic needs</li>
                  <li>• Lightweight (easier on structure)</li>
                  <li>• Still widely available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-red-600">Limitations</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Only 15-20 year coastal lifespan</li>
                  <li>• Low wind resistance (60-70 mph)</li>
                  <li>• Flat, less attractive appearance</li>
                  <li>• Limited color selection</li>
                  <li>• More vulnerable to storm damage</li>
                  <li>• Lower resale value impact</li>
                  <li>• Higher long-term cost (frequent replacement)</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="text-center p-4 bg-gray-50 rounded">
                <p className="text-2xl font-bold text-gray-900">$1.50-$3.00</p>
                <p className="text-sm text-gray-600">Per sq ft (material)</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded">
                <p className="text-2xl font-bold text-gray-900">15-20 Years</p>
                <p className="text-sm text-gray-600">Coastal lifespan</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded">
                <p className="text-2xl font-bold text-gray-900">60-70 mph</p>
                <p className="text-sm text-gray-600">Wind resistance</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-700">
                <strong>Best Use Cases:</strong> Rental properties, budget-conscious projects, or temporary
                structures. Not recommended as primary option for owner-occupied homes in Myrtle Beach due to
                lower storm resistance and shorter lifespan. The small initial savings ($2,000-4,000) are often
                lost to more frequent replacement and higher storm damage risk.
              </p>
            </div>
          </div>

          {/* Dimensional/Premium Shingles */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dimensional & Luxury Shingles</h3>
            <p className="text-gray-700 mb-6">
              Dimensional and luxury shingles represent premium tiers above standard architectural shingles.
              They feature even thicker construction, more pronounced shadowing, enhanced granule technology,
              and designer aesthetics that replicate high-end materials like slate, cedar shake, or stone.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-lg mb-3">Dimensional Shingles</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 30-40 year lifespan</li>
                  <li>• Enhanced depth and shadow lines</li>
                  <li>• Superior granule adhesion</li>
                  <li>• $4.50-$6.50/sq ft material</li>
                  <li>• Popular brands: GAF Timberline HDZ, Owens Corning Duration</li>
                  <li>• StainGuard algae protection</li>
                  <li>• LayerLock technology</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3">Luxury/Designer Shingles</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 40-50 year lifespan</li>
                  <li>• Authentic slate/shake appearance</li>
                  <li>• Highest wind ratings (130+ mph)</li>
                  <li>• $6.00-$10.00/sq ft material</li>
                  <li>• Premium brands: GAF Grand Sequoia, CertainTeed Grand Manor</li>
                  <li>• Limited lifetime warranties</li>
                  <li>• Maximum curb appeal and resale value</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">When to Choose Premium Shingles</h4>
              <p className="text-gray-700">
                Premium shingles are worthwhile for luxury homes ($500K+), historic properties requiring authentic
                appearance, homes with highly visible roofs, or when maximizing resale value is priority. The
                enhanced aesthetics and extended warranties justify the 20-40% price premium over standard
                architectural shingles for high-end properties.
              </p>
            </div>
          </div>

          {/* Impact-Resistant Shingles */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact-Resistant Shingles (Class 4)</h3>
            <p className="text-gray-700 mb-6">
              Impact-resistant shingles feature modified asphalt formulations (often with SBS polymer or rubberized
              asphalt) that provide superior resistance to hail, flying debris, and storm damage. They earn Class 4
              rating (highest impact resistance) by withstanding 2-inch steel ball dropped from 20 feet—twice the
              standard for regular shingles.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-blue-600">Key Benefits</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Class 4 impact rating (highest available)</li>
                  <li>• Insurance discounts 10-30%</li>
                  <li>• Superior hail and debris resistance</li>
                  <li>• Enhanced flexibility (resists cracking)</li>
                  <li>• Better temperature performance</li>
                  <li>• Longer lifespan (30-50 years)</li>
                  <li>• Excellent for coastal hurricane zones</li>
                  <li>• Available in architectural style</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-600">Cost Considerations</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Material: $4.50-$8.00/sq ft</li>
                  <li>• 15-25% premium over standard architectural</li>
                  <li>• Insurance savings offset cost within 5-10 years</li>
                  <li>• Popular brands: GAF Timberline AS, Owens Corning SureNail</li>
                  <li>• Enhanced warranties included</li>
                  <li>• Lower lifetime cost due to fewer claims</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Recommended for Myrtle Beach
              </h4>
              <p className="text-gray-700">
                Impact-resistant shingles are highly recommended for coastal South Carolina. Hurricane debris
                (tree branches, roof tiles, siding) causes extensive damage to standard shingles. Class 4 shingles
                withstand these impacts far better, preventing leaks and costly repairs. The insurance premium
                savings (typically $200-500/year) combined with reduced storm damage makes them cost-effective
                despite higher upfront costs.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Wind Resistance Ratings */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Wind Resistance Ratings Explained</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              Wind resistance is critical for Myrtle Beach homes exposed to hurricanes and tropical storms.
              Shingles earn wind ratings through independent testing measuring pounds of force required to
              lift shingles from the roof. Proper installation (number of nails, sealing method, underlayment)
              is equally important as shingle quality for achieving rated performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="w-8 h-8 text-yellow-500" />
                <h3 className="text-xl font-bold">Class F (60-90 mph)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Basic 3-tab shingles typically achieve Class F ratings. Adequate for inland areas but
                insufficient for coastal hurricane zones like Myrtle Beach.
              </p>
              <p className="text-sm font-semibold text-yellow-600">Not Recommended for Coast</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-bold">Class G (90-120 mph)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Standard architectural shingles achieve Class G with proper 4-nail installation. Acceptable
                for most coastal homes when properly installed with quality underlayment.
              </p>
              <p className="text-sm font-semibold text-green-600">Minimum for Myrtle Beach</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-bold">Class H (120-150 mph)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Premium architectural and impact-resistant shingles with 6-nail pattern achieve Class H.
                Excellent for direct coastal exposure and maximum hurricane protection.
              </p>
              <p className="text-sm font-semibold text-blue-600">Recommended for Coast</p>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold mb-3">Installation Quality Matters More Than Shingle Rating</h3>
            <p className="text-gray-700">
              Even the highest-rated shingles will fail in moderate winds if improperly installed. Weather
              Shield Roofing uses enhanced installation specifications for coastal applications: 6-nail pattern
              (vs standard 4), high-wind starter strips, sealed valleys, and synthetic underlayment. These
              techniques can increase effective wind resistance by 20-40 mph over standard installation methods.
            </p>
          </div>
        </div>
      </Section>

      {/* Warranty Comparison */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Warranty Comparison by Manufacturer</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              Understanding roofing warranties is essential for protecting your investment. Manufacturer warranties
              cover material defects, while contractor workmanship warranties cover installation issues. Most
              warranties are prorated—full coverage for initial years, then declining coverage based on age.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">GAF (Most Popular)</h3>
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Timberline HDZ (Architectural)</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Lifetime limited warranty</li>
                    <li>• 25-year non-prorated period</li>
                    <li>• WindProven limited wind warranty (130 mph)</li>
                    <li>• 15-year algae resistance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">System Plus Warranty (Master Elite)</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 50-year non-prorated coverage</li>
                    <li>• Lifetime material warranty</li>
                    <li>• 25-year workmanship coverage</li>
                    <li>• Fully transferable</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Owens Corning</h3>
                <Award className="w-8 h-8 text-pink-500" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Duration Series (Architectural)</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Lifetime limited warranty</li>
                    <li>• 10-year SureNail technology warranty</li>
                    <li>• Limited wind resistance warranty (130 mph)</li>
                    <li>• 10-year algae resistance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Platinum Protection (Preferred Contractor)</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 50-year non-prorated period</li>
                    <li>• Lifetime warranty coverage</li>
                    <li>• 10-year workmanship warranty</li>
                    <li>• Transferable with registration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">CertainTeed</h3>
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Landmark Series (Architectural)</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Lifetime limited warranty</li>
                    <li>• 15-year StreakFighter algae warranty</li>
                    <li>• Limited wind warranty (110-130 mph)</li>
                    <li>• ClimateFlex technology</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">SureStart PLUS (SELECT ShingleMaster)</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 50-year non-prorated coverage</li>
                    <li>• Lifetime warranty</li>
                    <li>• 10-year workmanship warranty</li>
                    <li>• Triple lifetime coverage on labor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Weather Shield Lifetime Workmanship Warranty</h3>
            <p className="text-gray-700 mb-4">
              As a GAF Master Elite contractor, Weather Shield Roofing offers enhanced warranty options unavailable
              from standard contractors. Our lifetime workmanship warranty covers installation defects for as long
              as you own your home—far exceeding industry-standard 1-5 year workmanship warranties. This provides
              complete peace of mind knowing both materials and installation are protected long-term.
            </p>
            <Link
              href="/services/residential-roofing"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn About Our Warranties
              <TrendingUp className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Coastal Climate Recommendations */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Best Shingles for Myrtle Beach Coastal Climate</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Budget Choice</h3>
              <p className="text-lg font-semibold mb-2">Standard Architectural</p>
              <ul className="space-y-2 text-white/90">
                <li>• GAF Timberline HDZ</li>
                <li>• Owens Corning Duration</li>
                <li>• CertainTeed Landmark</li>
                <li>• 25-30 year lifespan</li>
                <li>• $5.50-$9.50/sq ft installed</li>
                <li>• 110-130 mph wind rating</li>
              </ul>
            </div>

            <div className="bg-green-500 p-6 rounded-lg transform scale-105 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Best Value (Recommended)</h3>
              <p className="text-lg font-semibold mb-2">Impact-Resistant Architectural</p>
              <ul className="space-y-2">
                <li>• GAF Timberline AS II</li>
                <li>• Owens Corning Duration Flex</li>
                <li>• CertainTeed NorthGate</li>
                <li>• 30-40 year lifespan</li>
                <li>• $6.50-$10.50/sq ft installed</li>
                <li>• Class 4 impact rating</li>
                <li>• Insurance discounts 10-30%</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Premium Choice</h3>
              <p className="text-lg font-semibold mb-2">Luxury Impact-Resistant</p>
              <ul className="space-y-2 text-white/90">
                <li>• GAF Grand Sequoia AS</li>
                <li>• CertainTeed Grand Manor</li>
                <li>• 40-50 year lifespan</li>
                <li>• $10.00-$15.00/sq ft installed</li>
                <li>• Maximum curb appeal</li>
                <li>• Lifetime limited warranties</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Weather Shield Expert Recommendation</h3>
            <p className="text-lg mb-4">
              For most Myrtle Beach homeowners, impact-resistant architectural shingles provide the best overall
              value. The 15-25% premium over standard architectural shingles ($1,500-3,000 on average home) is
              offset by insurance premium savings ($200-500/year) within 5-10 years. More importantly, they provide
              significantly better storm damage resistance—reducing risk of catastrophic failure during hurricanes
              and severe weather events common to our coastal region.
            </p>
            <p className="text-lg">
              We specifically recommend GAF Timberline AS II, Owens Corning Duration Flex, or CertainTeed
              NorthGate shingles installed with 6-nail high-wind pattern, synthetic underlayment, and sealed
              valleys for optimal coastal performance.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection />

      {/* Schema Markup - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Complete Guide to Roofing Shingle Types 2025',
            description: 'Expert comparison of architectural, dimensional, 3-tab, and composite shingles including lifespans, costs, wind ratings, and warranty analysis.',
            author: {
              '@type': 'Organization',
              name: 'Weather Shield Roofing',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Weather Shield Roofing',
              logo: {
                '@type': 'ImageObject',
                url: 'https://weathershieldroofers.com/logo.png',
              },
            },
            datePublished: '2025-01-15',
            dateModified: new Date().toISOString(),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://weathershieldroofers.com/roofing-guide/shingle-types',
            },
          }),
        }}
      />
    </main>
  )
}
