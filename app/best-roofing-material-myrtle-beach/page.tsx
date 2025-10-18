import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Best Roofing Materials for Myrtle Beach, SC | Coastal Weather Guide',
  description: 'Expert guide to choosing the best roofing material for Myrtle Beach coastal climate. Compare hurricane resistance, salt air durability, and longevity. Call (843) 877-5539.',
  keywords: 'best roofing material myrtle beach, coastal roofing, hurricane resistant roofing, salt air roofing, myrtle beach roofing materials, asphalt vs metal roof',
  openGraph: {
    title: 'Best Roofing Materials for Myrtle Beach, SC | Coastal Weather Guide',
    description: 'Expert guide to choosing roofing materials that withstand Myrtle Beach hurricanes, salt air, and coastal weather.',
    url: 'https://weathershieldroofers.com/best-roofing-material-myrtle-beach',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'article',
    images: [{
      url: 'https://weathershieldroofers.com/images/roofing-materials-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Best Roofing Materials for Myrtle Beach Coastal Climate',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Roofing Materials for Myrtle Beach, SC',
    description: 'Expert guide to coastal roofing materials that withstand hurricanes and salt air.',
    images: ['https://weathershieldroofers.com/images/roofing-materials-hero.jpg'],
  },
};

export default function BestRoofingMaterialMyrtleBeachPage() {
  const coastalChallenges = [
    {
      challenge: 'Hurricane-Force Winds',
      impact: 'Winds up to 150+ mph can tear off shingles, lift metal panels, and damage underlayment',
      icon: '🌪️',
    },
    {
      challenge: 'Salt Air Corrosion',
      impact: 'Ocean salt accelerates deterioration of fasteners, metal components, and certain materials',
      icon: '🌊',
    },
    {
      challenge: 'High Humidity & Heat',
      impact: 'Year-round moisture promotes algae, mold, and accelerates shingle granule loss',
      icon: '☀️',
    },
    {
      challenge: 'UV Exposure',
      impact: 'Intense coastal sun breaks down roofing materials faster than inland climates',
      icon: '🔥',
    },
    {
      challenge: 'Heavy Rainfall',
      impact: 'High annual rainfall (54+ inches) tests waterproofing and drainage systems',
      icon: '🌧️',
    },
    {
      challenge: 'Hail Events',
      impact: 'Severe thunderstorms can produce hail that dents or cracks roofing materials',
      icon: '🧊',
    },
  ];

  const materials = [
    {
      material: 'Impact-Resistant Asphalt Shingles',
      rating: 'Excellent',
      ratingColor: 'green',
      lifespan: '25-30 years',
      hurricaneRating: 'Class 3-4 Impact Rating',
      saltResistance: 'Good (with proper coating)',
      bestFor: 'Budget-conscious homeowners wanting hurricane protection',
      pros: [
        'Class 4 impact resistance (highest rating)',
        'Lower cost than alternatives',
        'Insurance discounts available',
        'Proven hurricane performance',
        'Wide color selection',
        'Easier to repair if damaged',
      ],
      cons: [
        'Shorter lifespan than metal or tile',
        'Requires algae-resistant treatment for coastal humidity',
        'Can lift in extreme winds without proper installation',
        'Granule loss over time from UV',
      ],
      recommendation: 'Choose architectural shingles rated Class 4 impact with algae resistance. Look for high wind ratings (130+ mph). Excellent value for coastal homes.',
    },
    {
      material: 'Metal Roofing (Standing Seam)',
      rating: 'Superior',
      ratingColor: 'blue',
      lifespan: '40-70 years',
      hurricaneRating: 'Up to 180 mph wind resistance',
      saltResistance: 'Excellent (with Kynar coating)',
      bestFor: 'Long-term investment, maximum hurricane protection',
      pros: [
        'Exceptional wind resistance (concealed fasteners)',
        'Salt-resistant coatings available (Kynar 500)',
        'Longest lifespan of any roofing material',
        'Fire resistant (Class A)',
        'Energy efficient (reflects heat)',
        'Low maintenance requirements',
      ],
      cons: [
        'Higher upfront cost',
        'Requires specialized installation',
        'Can dent from large hail',
        'Noise during heavy rain (minor with proper insulation)',
      ],
      recommendation: 'Best overall choice for Myrtle Beach. Use marine-grade fasteners and Kynar 500 coating for salt air. Worth the investment for beachfront properties.',
    },
    {
      material: 'Concrete & Clay Tile',
      rating: 'Excellent',
      ratingColor: 'green',
      lifespan: '50-100 years',
      hurricaneRating: 'Excellent (when properly secured)',
      saltResistance: 'Superior',
      bestFor: 'Upscale homes, Mediterranean architecture',
      pros: [
        'Extremely durable in salt environment',
        'Unaffected by humidity or UV',
        'Fire resistant (Class A)',
        'Energy efficient (thermal mass)',
        'Beautiful Mediterranean aesthetic',
        'Lowest long-term maintenance',
      ],
      cons: [
        'Heaviest roofing material (requires structural support)',
        'Highest installation cost',
        'Individual tiles can crack from hail impact',
        'Requires experienced installer',
      ],
      recommendation: 'Premium option for coastal homes with proper structural support. Concrete tile performs better than clay in hurricanes. Ensure hurricane clips are used.',
    },
    {
      material: 'Synthetic (Composite) Roofing',
      rating: 'Very Good',
      ratingColor: 'yellow',
      lifespan: '30-50 years',
      hurricaneRating: 'Class 4 impact, high wind ratings',
      saltResistance: 'Excellent',
      bestFor: 'Homeowners wanting tile/slate look without weight',
      pros: [
        'Lighter than natural materials',
        'Salt and moisture resistant',
        'Class 4 impact rating',
        'Mimics slate or shake appearance',
        'Easier installation than tile',
        'Won\'t crack or break like natural materials',
      ],
      cons: [
        'Limited track record (newer material)',
        'Higher cost than asphalt',
        'Color fading over time',
        'Not all brands perform equally',
      ],
      recommendation: 'Good middle ground between asphalt and tile. Choose reputable brands like DaVinci or CertainTeed. Verify hurricane testing data.',
    },
    {
      material: 'Modified Bitumen (Flat/Low-Slope)',
      rating: 'Good',
      ratingColor: 'yellow',
      lifespan: '15-20 years',
      hurricaneRating: 'Good (if properly adhered)',
      saltResistance: 'Fair to Good',
      bestFor: 'Flat or low-slope commercial buildings',
      pros: [
        'Proven performance for flat roofs',
        'Multiple layers provide redundancy',
        'Good waterproofing',
        'Reflective coatings available',
        'Easier to repair than some alternatives',
      ],
      cons: [
        'Shorter lifespan than pitched roof materials',
        'Standing water can reduce lifespan',
        'Requires professional installation',
        'Vulnerable to ponding in heavy rain',
      ],
      recommendation: 'For flat commercial roofs, use torch-down or self-adhering systems. Ensure proper drainage design. Consider white TPO for energy savings.',
    },
  ];

  const comparisonTable = [
    {
      factor: 'Hurricane Resistance',
      asphalt: 'Very Good (Class 4)',
      metal: 'Excellent',
      tile: 'Excellent*',
      synthetic: 'Very Good',
    },
    {
      factor: 'Salt Air Durability',
      asphalt: 'Good',
      metal: 'Excellent**',
      tile: 'Excellent',
      synthetic: 'Excellent',
    },
    {
      factor: 'Lifespan (Coastal)',
      asphalt: '25-30 years',
      metal: '40-70 years',
      tile: '50-100 years',
      synthetic: '30-50 years',
    },
    {
      factor: 'Installation Cost',
      asphalt: 'Lowest',
      metal: 'High',
      tile: 'Highest',
      synthetic: 'Medium-High',
    },
    {
      factor: 'Insurance Discounts',
      asphalt: 'Yes (Class 4)',
      metal: 'Yes',
      tile: 'Yes',
      synthetic: 'Yes (Class 4)',
    },
    {
      factor: 'Energy Efficiency',
      asphalt: 'Fair',
      metal: 'Excellent',
      tile: 'Very Good',
      synthetic: 'Good',
    },
    {
      factor: 'Repair Difficulty',
      asphalt: 'Easy',
      metal: 'Moderate',
      tile: 'Moderate',
      synthetic: 'Moderate',
    },
    {
      factor: 'Weight',
      asphalt: 'Light',
      metal: 'Light',
      tile: 'Very Heavy',
      synthetic: 'Light-Medium',
    },
  ];

  const installationTips = [
    {
      tip: 'Use Hurricane-Rated Fasteners',
      description: 'Stainless steel or galvanized fasteners resist salt corrosion. Use 6 nails per shingle (not 4) in high-wind zones.',
    },
    {
      tip: 'Install Quality Underlayment',
      description: 'Use synthetic underlayment rated for high winds. Consider peel-and-stick in valleys and along eaves for extra water protection.',
    },
    {
      tip: 'Seal All Penetrations',
      description: 'Proper flashing around vents, chimneys, and skylights is critical. Use marine-grade sealants that won\'t break down in salt air.',
    },
    {
      tip: 'Upgrade Edge Details',
      description: 'Drip edge, starter strips, and eave protection prevent wind-driven rain. Metal drip edge should be stainless steel or coated.',
    },
    {
      tip: 'Consider Impact-Resistant Ridge Cap',
      description: 'Ridge caps are vulnerable to wind lift. Use high-profile ridge caps with extra fasteners.',
    },
    {
      tip: 'Proper Ventilation Design',
      description: 'Coastal humidity requires excellent attic ventilation. Use wind-resistant vents designed for coastal areas.',
    },
  ];

  const recommendations = [
    {
      scenario: 'Beachfront Property (Within 1 Mile of Ocean)',
      recommendation: 'Standing seam metal with marine-grade Kynar 500 coating',
      reason: 'Maximum salt resistance and hurricane protection. Worth the investment for direct coastal exposure.',
    },
    {
      scenario: 'Inland Myrtle Beach Home (1-5 Miles from Ocean)',
      recommendation: 'Class 4 impact-resistant architectural shingles or metal',
      reason: 'Good balance of protection and value. Still faces hurricanes but less salt exposure.',
    },
    {
      scenario: 'Historic or Mediterranean Style Home',
      recommendation: 'Concrete tile with hurricane clips',
      reason: 'Matches architectural style while providing excellent coastal performance.',
    },
    {
      scenario: 'Budget-Conscious Homeowner',
      recommendation: 'Class 4 impact architectural shingles (algae-resistant)',
      reason: 'Best value with good hurricane protection. Qualifies for insurance discounts.',
    },
    {
      scenario: 'Long-Term Investment Property',
      recommendation: 'Standing seam metal or concrete tile',
      reason: 'Lowest lifetime cost despite higher upfront. Minimal maintenance over decades.',
    },
    {
      scenario: 'Commercial Flat Roof',
      recommendation: 'TPO or modified bitumen with proper drainage',
      reason: 'Proven performance for low-slope commercial applications in coastal climates.',
    },
  ];

  const faqs = [
    {
      question: 'Do I need a special building permit for roofing in Myrtle Beach?',
      answer: 'Yes, all roofing work in Myrtle Beach requires a permit and must meet South Carolina building codes for high wind zones (140+ mph). Your contractor should handle the permit process and ensure compliance with wind uplift and impact resistance requirements.',
    },
    {
      question: 'Will hurricane-rated roofing lower my insurance premium?',
      answer: 'Yes, most insurance companies offer discounts for impact-resistant (Class 4) roofing and proper installation. Discounts typically range from 10-30% depending on your insurer and the specific materials used. Always request a re-quote after roof replacement.',
    },
    {
      question: 'How often should I replace my roof in Myrtle Beach?',
      answer: 'Asphalt shingles: 20-30 years, Metal: 40-70 years, Tile: 50+ years. However, coastal conditions can reduce these timespans. Annual inspections after hurricane season are recommended to catch damage early.',
    },
    {
      question: 'Is metal roofing noisy during rainstorms?',
      answer: 'Not with proper installation. Modern metal roofing with solid decking and adequate insulation is no noisier than asphalt shingles. The noise concern is mostly a myth from old barn roofs with no insulation.',
    },
    {
      question: 'Can any roofer install hurricane-rated materials?',
      answer: 'No - proper installation is critical for hurricane performance. Look for contractors certified by manufacturers and experienced with coastal installations. Ask for references from beachfront properties and verify they understand wind uplift requirements.',
    },
    {
      question: 'Should I replace my roof before hurricane season?',
      answer: 'If your roof is near the end of its lifespan, yes. Spring (March-May) is ideal timing - weather is mild, contractors are available, and you\'re protected before summer hurricane season. Don\'t wait for a storm to expose vulnerabilities.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-700 via-blue-600 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/coastal-pattern.svg')] opacity-10"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-2xl">🏖️</span>
              <span className="font-semibold text-lg">Coastal Climate Specialist</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Best Roofing Materials<br />for Myrtle Beach, SC
            </h1>

            <p className="text-xl sm:text-2xl mb-8 text-cyan-50 leading-relaxed max-w-3xl mx-auto">
              Not all roofing materials can handle coastal hurricanes, salt air, and intense humidity. Here's what actually works in Myrtle Beach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:8438775539"
                className="group bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
              >
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <div className="text-sm text-blue-500 font-normal">Get Expert Advice</div>
                  <div>(843) 877-5539</div>
                </div>
              </a>

              <Link
                href="/free-inspection"
                className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Free Roof Assessment
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300 text-xl">🌪️</span>
                <span className="font-semibold">Hurricane-Tested Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">🌊</span>
                <span className="font-semibold">Salt-Air Resistant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-300 text-xl">💰</span>
                <span className="font-semibold">Insurance Discounts Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Unique Challenges of Coastal Roofing
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Myrtle Beach roofs face extreme conditions that destroy standard materials
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {coastalChallenges.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.challenge}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.impact}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚠️</span>
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">Why Standard Roofing Fails in Myrtle Beach</h4>
                  <p className="text-yellow-800">
                    Materials and installation techniques designed for inland climates won't last on the coast.
                    Hurricane winds, salt corrosion, and extreme humidity require specialized materials and expert installation.
                    A "cheap" roof replacement will cost you more in the long run when it fails prematurely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Deep Dives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Roofing Materials: Coastal Performance Analysis
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Expert evaluation of each material's performance in Myrtle Beach's coastal climate
            </p>

            <div className="space-y-8">
              {materials.map((material, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all border-t-4 border-blue-500"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{material.material}</h3>
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold bg-${material.ratingColor}-100 text-${material.ratingColor}-700`}>
                          {material.rating} for Coastal Climate
                        </span>
                        <span className="text-gray-600">Lifespan: <strong>{material.lifespan}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="font-bold text-blue-900 mb-1">🌪️ Hurricane Rating</div>
                      <div className="text-blue-700">{material.hurricaneRating}</div>
                    </div>
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <div className="font-bold text-cyan-900 mb-1">🌊 Salt Resistance</div>
                      <div className="text-cyan-700">{material.saltResistance}</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="font-bold text-green-900 mb-1">👥 Best For</div>
                      <div className="text-green-700">{material.bestFor}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                        <span className="text-xl">✓</span> Advantages
                      </h4>
                      <ul className="space-y-2">
                        {material.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-green-600 font-bold mt-0.5">+</span>
                            <span className="text-gray-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                        <span className="text-xl">−</span> Disadvantages
                      </h4>
                      <ul className="space-y-2">
                        {material.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-red-600 font-bold mt-0.5">−</span>
                            <span className="text-gray-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 mb-2">💡 Our Recommendation</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">{material.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Side-by-Side Comparison
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Compare key factors for Myrtle Beach roofing
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Factor</th>
                    <th className="px-6 py-4 text-center font-bold">Asphalt</th>
                    <th className="px-6 py-4 text-center font-bold">Metal</th>
                    <th className="px-6 py-4 text-center font-bold">Tile</th>
                    <th className="px-6 py-4 text-center font-bold">Synthetic</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.factor}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">{row.asphalt}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">{row.metal}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">{row.tile}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">{row.synthetic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-sm text-gray-600 space-y-1">
              <p>* Tile requires proper hurricane clips and structural support</p>
              <p>** Metal requires marine-grade Kynar 500 coating for salt resistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Tips Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Critical Installation Details for Coastal Roofs
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Material selection is only half the battle—installation must be done right
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {installationTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{tip.tip}</h3>
                  <p className="text-gray-700 leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚫</span>
                <div>
                  <h4 className="font-bold text-red-900 mb-2">Warning: DIY Roofing in Coastal Areas</h4>
                  <p className="text-red-800">
                    Improper installation voids warranties and fails during hurricanes. Coastal roofing requires
                    specialized knowledge of wind uplift, salt air corrosion, and building codes. Always hire
                    certified professionals with coastal experience and proper insurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations by Scenario */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              What's Best for Your Situation?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our recommendations based on your specific needs
            </p>

            <div className="space-y-6">
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-l-4 border-blue-500"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{rec.scenario}</h3>
                  <div className="mb-3">
                    <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold text-sm">
                      Recommended: {rec.recommendation}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Why:</strong> {rec.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Roofing Material FAQs
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Common questions about coastal roofing materials
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-all"
                >
                  <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex justify-between items-center hover:bg-gray-100 transition-colors">
                    <span>{faq.question}</span>
                    <span className="text-2xl text-blue-600 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-700 via-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Choose the Right Material for Your Home?
            </h2>
            <p className="text-xl sm:text-2xl mb-8 text-cyan-50 leading-relaxed">
              Let our coastal roofing experts assess your home and recommend the best materials for your budget, architecture, and hurricane protection needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:8438775539"
                className="group bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
              >
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <div className="text-sm text-blue-500 font-normal">Talk to an Expert</div>
                  <div>(843) 877-5539</div>
                </div>
              </a>

              <Link
                href="/free-inspection"
                className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Free Material Assessment
              </Link>
            </div>

            <p className="text-blue-100 text-sm">
              15+ Years Coastal Experience • Certified Installation • Myrtle Beach, SC
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
