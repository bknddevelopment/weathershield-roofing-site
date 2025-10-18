import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Roof Warranty Guide: What\'s Actually Covered | Myrtle Beach Roofing',
  description: 'Complete guide to understanding roof warranties. Learn what manufacturer and workmanship warranties actually cover. Avoid common warranty mistakes. Call (843) 877-5539.',
  keywords: 'roof warranty, roofing warranty guide, manufacturer warranty, workmanship warranty, roof warranty coverage, Myrtle Beach roofing warranty',
  openGraph: {
    title: 'Roof Warranty Guide: What\'s Actually Covered | Myrtle Beach',
    description: 'Complete guide to roof warranties. Learn what\'s covered, what voids warranties, and how to protect your investment.',
    url: 'https://weathershieldroofers.com/roof-warranty-guide',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'article',
    images: [{
      url: 'https://weathershieldroofers.com/images/warranty-guide-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Weather Shield Roofing - Comprehensive Warranty Guide',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Warranty Guide: What\'s Actually Covered',
    description: 'Learn what roof warranties actually cover and how to avoid voiding your coverage.',
    images: ['https://weathershieldroofers.com/images/warranty-guide-hero.jpg'],
  },
};

export default function RoofWarrantyGuidePage() {
  const warrantyTypes = [
    {
      type: 'Manufacturer Material Warranty',
      duration: '15-50+ years (depending on material)',
      covers: [
        'Manufacturing defects in roofing materials',
        'Premature deterioration of materials',
        'Granule loss beyond normal wear',
        'Shingle cracking or splitting from defects',
        'Delamination or separation',
      ],
      doesNotCover: [
        'Installation errors or workmanship',
        'Storm damage (wind, hail, debris)',
        'Improper ventilation causing premature failure',
        'Damage from foot traffic or maintenance',
        'Algae or mold growth',
        'Normal weathering and color fading',
      ],
      notes: 'Warranty may be pro-rated after initial period. Many warranties reduce coverage significantly after 10 years.',
    },
    {
      type: 'Contractor Workmanship Warranty',
      duration: '1-10 years (varies by contractor)',
      covers: [
        'Installation defects and errors',
        'Leaks from improper flashing',
        'Improper fastener placement',
        'Inadequate underlayment or ice barrier',
        'Poor valley installation',
        'Improper ventilation installation',
      ],
      doesNotCover: [
        'Material defects (covered by manufacturer)',
        'Storm damage or acts of nature',
        'Damage from other contractors',
        'Modifications to roof by homeowner',
        'Neglected maintenance',
      ],
      notes: 'Weather Shield offers industry-leading 10-year workmanship warranty. Many contractors only offer 1-2 years.',
    },
    {
      type: 'System Warranty (Enhanced)',
      duration: '25-50 years',
      covers: [
        'Both materials AND workmanship',
        'Complete roof system performance',
        'All components working together',
        'Often includes labor costs for repairs',
        'May cover tear-off of defective materials',
      ],
      doesNotCover: [
        'Storm damage',
        'Owner modifications',
        'Neglected maintenance',
        'Damage from other trades',
      ],
      notes: 'Only available when using manufacturer-certified contractors and approved components. Most comprehensive protection.',
    },
  ];

  const commonWarrantyMistakes = [
    {
      mistake: 'Not Registering the Warranty',
      consequence: 'Warranty may be void or reduced to shortest coverage period',
      solution: 'Register your warranty within 60 days of installation. Keep confirmation email. Most manufacturers require online registration.',
    },
    {
      mistake: 'Mixing Material Brands',
      consequence: 'System warranty is void; only basic material warranty applies',
      solution: 'Use all components (shingles, underlayment, vents, flashing) from same manufacturer if you want system warranty.',
    },
    {
      mistake: 'Not Maintaining Roof',
      consequence: 'Neglect voids all warranties - manufacturer and workmanship',
      solution: 'Annual inspections, clean gutters, remove debris, trim overhanging branches. Keep maintenance records.',
    },
    {
      mistake: 'DIY Repairs or Non-Certified Contractor',
      consequence: 'Voids warranty immediately; manufacturer refuses all future claims',
      solution: 'Only use manufacturer-certified contractors for repairs. Never attempt DIY repairs on warranty-covered roofs.',
    },
    {
      mistake: 'Installing Satellite Dishes or Solar Panels',
      consequence: 'Penetrations void warranty unless done by certified installer',
      solution: 'Get written approval from manufacturer before any roof penetrations. Use certified installers who maintain warranty.',
    },
    {
      mistake: 'Not Transferring Warranty When Selling',
      consequence: 'New homeowner loses warranty coverage',
      solution: 'Contact manufacturer for transfer process. Some warranties transfer automatically, others require fee ($50-$200).',
    },
  ];

  const warrantyComparison = [
    {
      material: 'Asphalt Shingles',
      manufacturerWarranty: '25-50 years',
      typicalCoverage: 'Prorated after 10 years',
      transferable: 'Yes (with restrictions)',
      notes: 'Most common. Read fine print - "limited lifetime" often means 40-50 years prorated.',
    },
    {
      material: 'Metal Roofing',
      manufacturerWarranty: '30-50 years',
      typicalCoverage: 'Paint: 30 years, Panel: 40+ years',
      transferable: 'Yes',
      notes: 'Separate warranties for paint finish vs structural integrity. Kynar finishes have best warranty.',
    },
    {
      material: 'Concrete/Clay Tile',
      manufacturerWarranty: '50 years to lifetime',
      typicalCoverage: 'Non-prorated or minimally prorated',
      transferable: 'Yes',
      notes: 'Best warranty coverage. Tile itself often has lifetime warranty. Underlayment warranty is separate.',
    },
    {
      material: 'Synthetic Roofing',
      manufacturerWarranty: '30-50 years',
      typicalCoverage: 'Varies by brand',
      transferable: 'Yes (usually)',
      notes: 'Newer material. Check brand reputation. Some warranties are better than others.',
    },
  ];

  const maintenanceRequirements = [
    {
      frequency: 'Twice Per Year (Spring & Fall)',
      tasks: [
        'Visual inspection from ground',
        'Clean gutters and downspouts',
        'Remove debris from roof surface',
        'Check for moss or algae growth',
        'Inspect flashing around chimneys/vents',
        'Look for lifted, cracked, or missing shingles',
      ],
    },
    {
      frequency: 'After Major Storms',
      tasks: [
        'Document any visible damage with photos',
        'Check attic for leaks or water stains',
        'Inspect for missing shingles or damage',
        'Look for dents from hail',
        'Check for debris impact damage',
        'Call professional if damage suspected',
      ],
    },
    {
      frequency: 'Annual Professional Inspection',
      tasks: [
        'Comprehensive roof inspection by certified contractor',
        'Check all penetrations and seals',
        'Inspect ventilation system',
        'Test moisture levels in attic',
        'Check fasteners and flashing',
        'Written report for warranty compliance',
      ],
    },
  ];

  const warrantyRedFlags = [
    {
      redFlag: 'Contractor Won\'t Provide Written Warranty',
      warning: 'If it\'s not in writing, it doesn\'t exist',
      action: 'Never hire a contractor who won\'t provide written warranty terms. Verbal promises are worthless.',
    },
    {
      redFlag: 'Warranty Seems Too Good to Be True',
      warning: '"Lifetime" or "100-year" warranties often have major limitations',
      action: 'Read the full warranty document. Look for pro-rating schedules and exclusions in fine print.',
    },
    {
      redFlag: 'Contractor Not Manufacturer-Certified',
      warning: 'Can\'t offer system warranty, may void material warranty',
      action: 'Verify contractor is certified with manufacturer. Ask for certification number and verify online.',
    },
    {
      redFlag: 'Contractor Doesn\'t Register Warranty for You',
      warning: 'You may forget, and warranty becomes void',
      action: 'Contractor should handle registration as part of service. Get confirmation they\'ve registered it.',
    },
    {
      redFlag: 'No Maintenance Requirements Explained',
      warning: 'You may unknowingly void warranty through neglect',
      action: 'Ask contractor for written maintenance requirements. Get annual inspection schedule.',
    },
  ];

  const claimProcess = [
    {
      step: '1',
      title: 'Identify the Problem',
      description: 'Notice defect, leak, or premature failure. Document with photos and notes about when it started.',
    },
    {
      step: '2',
      title: 'Review Warranty Terms',
      description: 'Check if issue is covered by manufacturer warranty (material defect) or workmanship warranty (installation).',
    },
    {
      step: '3',
      title: 'Contact the Right Party',
      description: 'Material defects: Contact manufacturer. Installation issues: Contact original contractor first.',
    },
    {
      step: '4',
      title: 'Schedule Inspection',
      description: 'Manufacturer or contractor sends inspector to verify defect and determine cause.',
    },
    {
      step: '5',
      title: 'Receive Decision',
      description: 'If approved, you\'ll receive authorization for repair/replacement. If denied, get written explanation.',
    },
    {
      step: '6',
      title: 'Complete Repairs',
      description: 'Use authorized contractor for repairs to maintain warranty. Keep all documentation.',
    },
  ];

  const faqs = [
    {
      question: 'Does my roof warranty cover storm damage?',
      answer: 'No. Manufacturer and workmanship warranties do NOT cover damage from wind, hail, falling debris, or other storm events. Storm damage is covered by your homeowners insurance, not your roof warranty. Warranties only cover defects in materials or installation.',
    },
    {
      question: 'What does "limited lifetime warranty" actually mean?',
      answer: 'For shingles, "limited lifetime" typically means 40-50 years of coverage with significant pro-rating after the first 10 years. For example, a 30-year shingle with "limited lifetime" warranty may only give you full replacement for the first 10 years, then pro-rate down to 10% coverage by year 30.',
    },
    {
      question: 'Can I transfer my roof warranty to a new homeowner?',
      answer: 'Most warranties are transferable, but with restrictions. Manufacturer warranties usually transfer once for a fee ($50-$200) within the first 10-20 years. Workmanship warranties may or may not transfer depending on contractor. Always confirm transfer process before selling your home.',
    },
    {
      question: 'Will pressure washing my roof void the warranty?',
      answer: 'Yes, pressure washing typically voids shingle warranties because it removes protective granules and can damage the shingle structure. Use low-pressure cleaning or manufacturer-approved cleaning methods only. Check warranty terms before any cleaning.',
    },
    {
      question: 'What if the contractor who installed my roof goes out of business?',
      answer: 'Your manufacturer material warranty remains valid regardless of contractor status. However, the workmanship warranty is only as good as the contractor\'s ability to honor it. This is why choosing established, reputable contractors with long track records is critical.',
    },
    {
      question: 'How do I prove I maintained my roof for warranty purposes?',
      answer: 'Keep dated photos, receipts from professional inspections, gutter cleaning invoices, and maintenance records. Annual professional inspection reports are best evidence. Store documentation digitally and physically. Lack of maintenance records can result in denied warranty claims.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/warranty-pattern.svg')] opacity-10"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-2xl">🛡️</span>
              <span className="font-semibold text-lg">Complete Warranty Guide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Roof Warranty Guide:<br />What's Actually Covered
            </h1>

            <p className="text-xl sm:text-2xl mb-8 text-purple-50 leading-relaxed max-w-3xl mx-auto">
              Don't let confusing warranty terms leave you unprotected. Learn what warranties actually cover and how to avoid voiding your coverage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:8438775539"
                className="group bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-purple-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
              >
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <div className="text-sm text-purple-500 font-normal">Questions? Call Us</div>
                  <div>(843) 877-5539</div>
                </div>
              </a>

              <Link
                href="/free-inspection"
                className="bg-purple-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Free Roof Inspection
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300 text-xl">✓</span>
                <span className="font-semibold">10-Year Workmanship Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">📋</span>
                <span className="font-semibold">Manufacturer Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-300 text-xl">🏆</span>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Warranties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Understanding Different Warranty Types
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Every roof has multiple warranties—here's what each one actually protects
            </p>

            <div className="space-y-8">
              {warrantyTypes.map((warranty, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-purple-500 hover:shadow-2xl transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{warranty.type}</h3>
                      <div className="text-purple-600 font-semibold text-lg">
                        Typical Duration: {warranty.duration}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-bold text-green-700 mb-4 text-lg flex items-center gap-2">
                        <span className="text-2xl">✓</span> What's Covered
                      </h4>
                      <ul className="space-y-2">
                        {warranty.covers.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-green-600 font-bold mt-0.5">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="font-bold text-red-700 mb-4 text-lg flex items-center gap-2">
                        <span className="text-2xl">✗</span> What's NOT Covered
                      </h4>
                      <ul className="space-y-2">
                        {warranty.doesNotCover.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-red-600 font-bold mt-0.5">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 mb-2">📌 Important Notes</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">{warranty.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Warranty Mistakes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              6 Warranty Mistakes That Cost Homeowners Thousands
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Avoid these common errors that void warranty coverage
            </p>

            <div className="space-y-6">
              {commonWarrantyMistakes.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-l-4 border-red-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                      ❌
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-red-600 mb-2">{item.mistake}</h3>
                      <p className="text-gray-700 mb-3">
                        <span className="font-semibold">Consequence:</span> {item.consequence}
                      </p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <p className="text-sm font-semibold text-green-900 mb-1">✓ How to Avoid:</p>
                        <p className="text-sm text-green-800">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Comparison by Material */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Warranty Coverage by Material Type
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Warranty terms vary significantly by roofing material
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Material</th>
                    <th className="px-6 py-4 text-left font-bold">Manufacturer Warranty</th>
                    <th className="px-6 py-4 text-left font-bold">Coverage Type</th>
                    <th className="px-6 py-4 text-left font-bold">Transferable?</th>
                  </tr>
                </thead>
                <tbody>
                  {warrantyComparison.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-purple-50 transition-colors`}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.material}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.manufacturerWarranty}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.typicalCoverage}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.transferable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 space-y-4">
              {warrantyComparison.map((item, index) => (
                <div key={index} className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="text-sm">
                    <span className="font-bold text-purple-900">{item.material}:</span>{' '}
                    <span className="text-purple-800">{item.notes}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Requirements */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Maintenance Required to Keep Warranty Valid
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Neglect voids all warranties—here's what you must do
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {maintenanceRequirements.map((requirement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="text-center mb-4">
                    <div className="inline-block bg-purple-100 p-4 rounded-full mb-3">
                      <span className="text-3xl">📅</span>
                    </div>
                    <h3 className="text-lg font-bold text-purple-600">{requirement.frequency}</h3>
                  </div>
                  <ul className="space-y-2">
                    {requirement.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚠️</span>
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">Proof of Maintenance Required</h4>
                  <p className="text-yellow-800">
                    If you file a warranty claim, manufacturers and contractors can request proof that you maintained
                    your roof properly. Keep dated photos, inspection reports, and receipts. No documentation = denied claim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Warranty Red Flags to Watch For
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Warning signs that a warranty may not be worth the paper it's printed on
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {warrantyRedFlags.map((flag, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border-2 border-red-200 hover:border-red-400 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">🚩</span>
                    <h3 className="text-lg font-bold text-red-600">{flag.redFlag}</h3>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm">
                    <span className="font-semibold">Warning:</span> {flag.warning}
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm font-semibold text-blue-900 mb-1">What to Do:</p>
                    <p className="text-sm text-blue-800">{flag.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Claim Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              How to File a Warranty Claim
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Step-by-step process for warranty claims
            </p>

            <div className="space-y-6">
              {claimProcess.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="tel:8438775539"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span className="text-2xl">📞</span>
                Need Warranty Help? Call (843) 877-5539
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Warranty FAQs
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Common questions about roof warranties
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-purple-400 transition-all"
                >
                  <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex justify-between items-center hover:bg-gray-100 transition-colors">
                    <span>{faq.question}</span>
                    <span className="text-2xl text-purple-600 group-open:rotate-180 transition-transform">
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
      <section className="py-20 bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Protect Your Investment with Proper Warranties
            </h2>
            <p className="text-xl sm:text-2xl mb-8 text-purple-50 leading-relaxed">
              Weather Shield offers industry-leading 10-year workmanship warranty and helps you maximize your manufacturer warranty protection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:8438775539"
                className="group bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-purple-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
              >
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <div className="text-sm text-purple-500 font-normal">Warranty Questions?</div>
                  <div>(843) 877-5539</div>
                </div>
              </a>

              <Link
                href="/free-inspection"
                className="bg-purple-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Free Inspection
              </Link>
            </div>

            <p className="text-purple-100 text-sm">
              Manufacturer Certified • 10-Year Workmanship Warranty • Myrtle Beach, SC
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
