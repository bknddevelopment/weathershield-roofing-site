import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'How to Document Roof Damage for Insurance Claims | Myrtle Beach Roofing',
  description: 'Complete guide to documenting roof damage for insurance claims. Photos, measurements, and evidence needed for storm damage claims. Free inspection. Call (843) 877-5539.',
  keywords: 'document roof damage, insurance claim documentation, storm damage photos, roof damage evidence, insurance claim photos, Myrtle Beach',
  openGraph: {
    title: 'How to Document Roof Damage for Insurance Claims | Myrtle Beach',
    description: 'Learn exactly what evidence and documentation you need for a successful roof insurance claim after storm damage.',
    url: 'https://weathershieldroofers.com/insurance-claim-documentation',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'article',
    images: [{
      url: 'https://weathershieldroofers.com/images/claim-documentation-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Weather Shield Roofing - Claims Documentation Guide',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Document Roof Damage for Insurance Claims',
    description: 'Complete guide to documenting roof damage. Photos, measurements, and evidence needed for storm damage claims.',
    images: ['https://weathershieldroofers.com/images/claim-documentation-hero.jpg'],
  },
};

export default function InsuranceClaimDocumentationPage() {
  const documentationChecklist = [
    {
      category: 'Immediate Documentation (Day of Damage)',
      icon: '⚡',
      color: 'red',
      items: [
        'Take wide-angle photos of entire property from street',
        'Photograph damage from multiple angles',
        'Capture close-up photos of specific damage areas',
        'Take photos of interior damage (water stains, leaks)',
        'Record date/time stamps on all photos',
        'Document weather conditions if storm is passing',
        'Photograph any emergency repairs made',
        'Take video walkthrough of all damage',
      ],
    },
    {
      category: 'Detailed Evidence Collection',
      icon: '📸',
      color: 'blue',
      items: [
        'Photos of missing or damaged shingles',
        'Close-ups of hail dents or wind damage',
        'Damaged flashing, gutters, vents, skylights',
        'Broken or cracked roofing materials',
        'Debris on roof or property',
        'Fallen tree branches or impact damage',
        'Water intrusion in attic or ceilings',
        'Damaged insulation or decking',
      ],
    },
    {
      category: 'Professional Assessment',
      icon: '🔍',
      color: 'green',
      items: [
        'Schedule certified roof inspection',
        'Get written damage assessment report',
        'Obtain repair/replacement estimate',
        'Request thermal imaging (for water damage)',
        'Get moisture meter readings',
        'Obtain drone photography of roof',
        'Collect material samples if needed',
        'Document code violations or upgrades needed',
      ],
    },
    {
      category: 'Supporting Documentation',
      icon: '📋',
      color: 'purple',
      items: [
        'Copy of insurance policy and declarations',
        'Recent roof maintenance records',
        'Previous inspection reports',
        'Original roof installation documents',
        'Warranty information',
        'Storm date verification (NOAA weather data)',
        'Repair receipts for emergency work',
        'Communication log with insurance company',
      ],
    },
  ];

  const photoGuide = [
    {
      type: 'Overview Photos',
      description: 'Wide shots showing entire roof and property',
      tips: [
        'Shoot from ground level at four corners of property',
        'Include neighboring properties for context',
        'Capture entire roof if possible',
        'Show relation of damage to surroundings',
      ],
      examples: ['Full front of house', 'Back of house', 'Side elevations', 'Street view'],
    },
    {
      type: 'Medium Range Photos',
      description: 'Focus on damaged sections of roof',
      tips: [
        'Shoot from various angles',
        'Include reference points (chimney, vents)',
        'Show extent of damage area',
        'Capture multiple sections separately',
      ],
      examples: ['North roof section', 'South slope', 'Ridge damage', 'Valley areas'],
    },
    {
      type: 'Close-Up Detail Photos',
      description: 'Individual damage points with clear detail',
      tips: [
        'Get as close as safely possible',
        'Use macro mode for hail dents',
        'Place ruler or coin for scale',
        'Ensure photos are in focus',
      ],
      examples: ['Single damaged shingle', 'Hail dent detail', 'Crack in material', 'Missing granules'],
    },
    {
      type: 'Interior Damage Photos',
      description: 'Document water intrusion and secondary damage',
      tips: [
        'Photo all ceiling stains',
        'Capture attic moisture or mold',
        'Show damaged insulation',
        'Document buckets catching water',
      ],
      examples: ['Ceiling water stains', 'Attic dampness', 'Wall damage', 'Damaged belongings'],
    },
  ];

  const commonMistakes = [
    {
      mistake: 'Not Documenting Immediately',
      consequence: 'Evidence disappears (wind blows shingles away, rain washes away granules)',
      solution: 'Take photos within 24-48 hours of storm event, even if it\'s still raining. Use umbrella to protect camera.',
    },
    {
      mistake: 'Photos Too Far Away',
      consequence: 'Insurance adjuster can\'t see actual damage in photos',
      solution: 'Take multiple photos at different distances: wide, medium, and extreme close-ups of each damage area.',
    },
    {
      mistake: 'Poor Photo Quality',
      consequence: 'Blurry, dark, or unclear photos are dismissed as insufficient evidence',
      solution: 'Use good lighting (daytime), hold camera steady, ensure focus is sharp. Retake if blurry.',
    },
    {
      mistake: 'Missing Date/Time Stamps',
      consequence: 'Insurance company claims damage is old or pre-existing',
      solution: 'Enable timestamp on camera, or write date on paper in photos. Save original files with metadata.',
    },
    {
      mistake: 'No Professional Assessment',
      consequence: 'Homeowner estimates are dismissed; claim denied for lack of expert opinion',
      solution: 'Get certified roofer inspection report with detailed findings and repair estimate.',
    },
    {
      mistake: 'Delaying the Claim',
      consequence: 'Miss policy deadlines (often 1 year), claim automatically denied',
      solution: 'File claim within days/weeks of damage, not months later. Most policies require "prompt" reporting.',
    },
  ];

  const whatWeProvide = [
    {
      service: 'Professional Photography Package',
      description: 'Comprehensive photo documentation using professional equipment',
      includes: [
        'High-resolution photos from ground level',
        'Drone aerial photography of entire roof',
        'Close-up macro photos of damage details',
        'Before/after comparisons if available',
        'Organized photo gallery with annotations',
      ],
    },
    {
      service: 'Technical Inspection Report',
      description: 'Detailed written assessment by certified inspectors',
      includes: [
        'Damage type and severity classification',
        'Measurements and dimensions of affected areas',
        'Material condition assessment',
        'Code compliance issues noted',
        'Recommendations for repair vs replacement',
      ],
    },
    {
      service: 'Repair Estimate (Xactimate)',
      description: 'Industry-standard pricing used by insurance companies',
      includes: [
        'Line-by-line cost breakdown',
        'Material specifications and quantities',
        'Labor costs at local market rates',
        'Permits and code upgrade costs',
        'Total repair or replacement estimate',
      ],
    },
    {
      service: 'Supporting Evidence Package',
      description: 'Additional documentation to strengthen your claim',
      includes: [
        'Thermal imaging showing moisture intrusion',
        'Moisture meter readings and locations',
        'Material samples for lab analysis if needed',
        'Storm date verification from NOAA',
        'Compliance reports for building codes',
      ],
    },
  ];

  const timeline = [
    {
      timeframe: 'Within 24 Hours of Damage',
      actions: [
        'Document damage with photos/video',
        'Make emergency repairs to prevent further damage (tarp roof)',
        'Contact your insurance company to report claim',
        'Call Weather Shield for emergency inspection',
      ],
    },
    {
      timeframe: '1-3 Days After Damage',
      actions: [
        'Complete professional roof inspection',
        'Receive detailed damage assessment report',
        'Get repair estimate using Xactimate',
        'Submit documentation package to insurance',
      ],
    },
    {
      timeframe: '1-2 Weeks After Filing',
      actions: [
        'Insurance adjuster schedules site visit',
        'We attend adjuster meeting with you',
        'Point out all damage to adjuster',
        'Provide additional evidence as requested',
      ],
    },
    {
      timeframe: '2-4 Weeks After Inspection',
      actions: [
        'Receive claim decision from insurance',
        'Review settlement offer with us',
        'Negotiate if estimate is too low',
        'Accept settlement and schedule repairs',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Can I document the damage myself, or do I need a professional?',
      answer: 'You should do both. Take your own photos immediately to preserve evidence, but also get a professional inspection. Insurance companies give much more weight to certified contractor assessments with technical reports and professional photography.',
    },
    {
      question: 'How soon after a storm should I document damage?',
      answer: 'As soon as safely possible - ideally within 24-48 hours. Evidence can disappear quickly: wind removes more shingles, rain washes away granules, debris blows away. The sooner you document, the stronger your evidence.',
    },
    {
      question: 'What if I can\'t safely access my roof to take photos?',
      answer: 'Never climb on your roof if you\'re not trained - it\'s dangerous and could cause more damage. Call us for a professional inspection. We have safety equipment, drone photography, and insurance to document damage safely.',
    },
    {
      question: 'Should I make repairs before the insurance adjuster sees the damage?',
      answer: 'Only make emergency repairs to prevent further damage (like tarping). Document everything before and after emergency repairs. Don\'t make permanent repairs until the adjuster inspects and approves your claim.',
    },
    {
      question: 'How many photos should I take?',
      answer: 'Take as many as possible - you can\'t have too much evidence. Minimum 20-30 photos covering wide shots, medium range, and close-ups from multiple angles. Professional inspections often include 50-100+ photos.',
    },
    {
      question: 'What if the adjuster says there\'s no damage, but I know there is?',
      answer: 'Request a re-inspection and provide additional professional documentation. We can help advocate for you, pointing out damage the adjuster may have missed. You also have the right to hire an independent public adjuster.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/documentation-pattern.svg')] opacity-10"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-2xl">📋</span>
              <span className="font-semibold text-lg">Complete Documentation Guide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              How to Document Roof Damage<br />for Insurance Claims
            </h1>

            <p className="text-xl sm:text-2xl mb-8 text-blue-50 leading-relaxed max-w-3xl mx-auto">
              Get your claim approved with proper documentation. Learn exactly what evidence insurance adjusters need to see.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:8438775539"
                className="group bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
              >
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <div className="text-sm text-blue-500 font-normal">Get Professional Help</div>
                  <div>(843) 877-5539</div>
                </div>
              </a>

              <Link
                href="/free-inspection"
                className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Free Documentation Inspection
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300 text-xl">📸</span>
                <span className="font-semibold">Professional Photo Packages</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">🔍</span>
                <span className="font-semibold">Certified Inspections</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-300 text-xl">📊</span>
                <span className="font-semibold">Xactimate Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Checklist Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Complete Documentation Checklist
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Everything you need to document for a successful insurance claim
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {documentationChecklist.map((section, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-${section.color}-50 to-white p-6 rounded-xl border-2 border-${section.color}-200 hover:border-${section.color}-400 transition-all`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{section.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{section.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Professional Photo Documentation Guide
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Take the right photos at the right angles to prove your damage
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {photoGuide.map((guide, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{guide.type}</h3>
                  <p className="text-gray-600 mb-4 italic">{guide.description}</p>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Photography Tips:</h4>
                    <ul className="space-y-1">
                      {guide.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-bold text-blue-900 text-sm mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {guide.examples.map((example, exIndex) => (
                        <span
                          key={exIndex}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💡</span>
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">Pro Tip: The Rule of 3</h4>
                  <p className="text-yellow-800">
                    For every damaged area, take at least 3 photos: (1) Wide shot showing location on roof,
                    (2) Medium shot showing extent of damage, (3) Close-up showing detail. This gives adjusters
                    complete context and proof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              6 Documentation Mistakes That Get Claims Denied
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Avoid these common errors that lead to claim denials
            </p>

            <div className="space-y-6">
              {commonMistakes.map((item, index) => (
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
                        <span className="font-semibold">Why it matters:</span> {item.consequence}
                      </p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <p className="text-sm font-semibold text-green-900 mb-1">✓ The Fix:</p>
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

      {/* What We Provide Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Professional Documentation Package
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              What Weather Shield provides for your insurance claim
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {whatWeProvide.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">{item.service}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Includes:</h4>
                    <ul className="space-y-2">
                      {item.includes.map((include, incIndex) => (
                        <li key={incIndex} className="flex items-start gap-2 text-sm">
                          <span className="text-blue-600 font-bold mt-1">✓</span>
                          <span className="text-gray-700">{include}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="tel:8438775539"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span className="text-2xl">📋</span>
                Get Professional Documentation: (843) 877-5539
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Documentation Timeline
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              When to document what for your insurance claim
            </p>

            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.timeframe}</h3>
                      <ul className="space-y-2">
                        {phase.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start gap-2">
                            <span className="text-green-600 font-bold mt-1">✓</span>
                            <span className="text-gray-700">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-transparent"></div>
                  )}
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
              Documentation FAQs
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Common questions about documenting roof damage
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
      <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Don't Risk Your Claim with Poor Documentation
            </h2>
            <p className="text-xl sm:text-2xl mb-8 text-blue-50 leading-relaxed">
              Let our certified inspectors document your damage professionally. We know exactly what insurance adjusters need to see.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:8438775539"
                className="group bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
              >
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <div className="text-sm text-blue-500 font-normal">Get Expert Documentation</div>
                  <div>(843) 877-5539</div>
                </div>
              </a>

              <Link
                href="/roof-insurance-claims"
                className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn About Our Claims Process
              </Link>
            </div>

            <p className="text-blue-100 text-sm">
              Free Inspection & Documentation • Myrtle Beach, SC & Surrounding Areas
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
