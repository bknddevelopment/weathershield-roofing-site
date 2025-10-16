import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Roof Insurance Claims Assistance | Myrtle Beach Roofing | Weather Shield',
  description: 'Expert help with roof insurance claims in Myrtle Beach. We work directly with your insurance company to maximize your claim. Storm damage specialists. Call (843) 877-5539.',
  keywords: 'roof insurance claims, insurance roof claim, storm damage insurance, hail damage claim, hurricane damage claim, insurance adjuster, Myrtle Beach',
  openGraph: {
    title: 'Roof Insurance Claims Assistance | Myrtle Beach Roofing',
    description: 'Expert help with roof insurance claims. We work directly with your insurance company to maximize your claim for storm and wind damage.',
    url: 'https://weathershieldroofers.com/roof-insurance-claims',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'article',
    images: [{
      url: 'https://weathershieldroofers.com/images/insurance-claims-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Weather Shield Roofing - Insurance Claims Specialists',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Insurance Claims Assistance | Myrtle Beach',
    description: 'Expert help with roof insurance claims. We work with your insurance company to get your claim approved.',
    images: ['https://weathershieldroofers.com/images/insurance-claims-hero.jpg'],
  },
};

export default function RoofInsuranceClaimsPage() {
  const claimsProcess = [
    {
      step: '1',
      title: 'Emergency Contact',
      description: 'Call us immediately after damage occurs. We provide emergency tarping to prevent further damage and document the initial condition.',
      icon: '📞',
    },
    {
      step: '2',
      title: 'Free Inspection',
      description: 'Our certified inspectors assess all damage and create a comprehensive report with photos, measurements, and detailed notes.',
      icon: '🔍',
    },
    {
      step: '3',
      title: 'Documentation Package',
      description: 'We prepare a complete documentation package including photos, repair estimates, and technical reports for your insurance company.',
      icon: '📋',
    },
    {
      step: '4',
      title: 'Insurance Filing',
      description: 'We help you file your claim correctly, providing all necessary documentation and evidence to support your claim.',
      icon: '📤',
    },
    {
      step: '5',
      title: 'Adjuster Meeting',
      description: 'We meet with the insurance adjuster on-site, point out all damage, and advocate for a fair settlement on your behalf.',
      icon: '🤝',
    },
    {
      step: '6',
      title: 'Approval & Repair',
      description: 'Once your claim is approved, we schedule the work and complete repairs using materials that match or exceed your policy requirements.',
      icon: '✅',
    },
  ];

  const damageTypes = [
    {
      type: 'Hurricane & Wind Damage',
      description: 'High winds can tear off shingles, damage flashing, and compromise roof structure. Coastal storms are particularly destructive.',
      covered: true,
      evidence: 'Missing shingles, lifted edges, damaged flashing, torn underlayment',
    },
    {
      type: 'Hail Damage',
      description: 'Hail creates dents in shingles, granule loss, and cracked materials that may not be immediately visible.',
      covered: true,
      evidence: 'Bruising on shingles, granule loss, dents in metal, cracked shingles',
    },
    {
      type: 'Fallen Tree/Debris',
      description: 'Trees or large branches falling on your roof during storms cause immediate structural and surface damage.',
      covered: true,
      evidence: 'Punctures, broken rafters, crushed decking, missing shingles',
    },
    {
      type: 'Water Intrusion',
      description: 'Storm-driven rain can penetrate damaged areas, causing water stains, mold, and interior damage.',
      covered: true,
      evidence: 'Ceiling stains, attic moisture, damaged insulation, mold growth',
    },
    {
      type: 'Lightning Strike',
      description: 'Direct or nearby lightning strikes can damage roofing materials and create fire hazards.',
      covered: true,
      evidence: 'Burn marks, cracked materials, electrical damage, fire damage',
    },
    {
      type: 'Ice Dam Damage',
      description: 'While rare in Myrtle Beach, winter storms can cause ice dams that lift shingles and cause leaks.',
      covered: true,
      evidence: 'Lifted shingles, water stains along eaves, damaged gutters',
    },
  ];

  const commonDenials = [
    {
      reason: 'Wear and Tear',
      explanation: 'Insurance covers sudden storm damage, not gradual deterioration from age. Insurers often claim damage is pre-existing.',
      howWeHelp: 'We document the specific storm event and prove the damage is new and storm-related, not pre-existing deterioration.',
    },
    {
      reason: 'Lack of Maintenance',
      explanation: 'Insurers may claim you didn\'t maintain your roof properly, which caused or worsened the damage.',
      howWeHelp: 'We show evidence that proper maintenance was performed and the damage resulted from the covered event, not neglect.',
    },
    {
      reason: 'Insufficient Documentation',
      explanation: 'Claims are denied when homeowners don\'t provide enough evidence or detailed photos of the damage.',
      howWeHelp: 'We create comprehensive documentation packages with professional photos, measurements, and technical reports.',
    },
    {
      reason: 'Missed Deadlines',
      explanation: 'Insurance policies have strict deadlines for reporting damage and filing claims after a storm event.',
      howWeHelp: 'We help you act quickly to meet all deadlines and ensure your claim is filed properly and on time.',
    },
  ];

  const faqs = [
    {
      question: 'Will filing a claim raise my insurance rates?',
      answer: 'In South Carolina, insurers cannot raise your rates solely for filing a weather-related claim. However, multiple claims over several years may affect your rates. We help ensure you only file when necessary and the damage is significant enough to warrant a claim.',
    },
    {
      question: 'Should I pay my deductible upfront?',
      answer: 'Your deductible is typically subtracted from your claim payout by the insurance company. You don\'t pay us the deductible - you pay us the claim amount minus your deductible after the insurer issues payment. We never ask you to pay your deductible upfront.',
    },
    {
      question: 'How long does the claims process take?',
      answer: 'Most claims are resolved within 2-4 weeks if documentation is complete. However, after major storms affecting many homes, the process may take longer due to high adjuster workload. We stay on top of your claim to keep things moving.',
    },
    {
      question: 'What if my claim is denied?',
      answer: 'You have the right to appeal. We help you gather additional evidence, request a re-inspection, or work with a public adjuster if needed. Many initially denied claims are approved on appeal with proper documentation.',
    },
    {
      question: 'Do I have to use my insurance company\'s preferred contractor?',
      answer: 'No. You have the right to choose any licensed contractor. Insurance companies may have "preferred" contractors, but you\'re not required to use them. We work with all major insurance companies.',
    },
    {
      question: 'What if the insurance estimate is lower than your estimate?',
      answer: 'This is common. We provide detailed line-item estimates using Xactimate software (the same system insurers use) and meet with adjusters to negotiate fair pricing that covers all necessary repairs to code.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-orange-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/storm-damage-pattern.svg')] opacity-10"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-2xl">🛡️</span>
              <span className="font-semibold text-lg">Insurance Claims Specialists</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We Fight for Your<br />Roof Insurance Claim
            </h1>

            <p className="text-xl sm:text-2xl mb-8 text-red-50 leading-relaxed max-w-3xl mx-auto">
              Storm damage? Don't navigate insurance claims alone. We handle everything from documentation to adjuster meetings—maximizing your claim approval.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:8438775539"
                className="group bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
              >
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <div className="text-sm text-red-500 font-normal">Call Now</div>
                  <div>(843) 877-5539</div>
                </div>
              </a>

              <Link
                href="/free-inspection"
                className="bg-red-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Free Storm Damage Inspection
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300 text-xl">⭐</span>
                <span className="font-semibold">5.0★ Google Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">✓</span>
                <span className="font-semibold">Work with All Major Insurers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-300 text-xl">📋</span>
                <span className="font-semibold">Complete Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Why Homeowners Choose Us for Insurance Claims
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Navigating insurance claims is complex. We have the experience and relationships to get your claim approved.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Storm Damage Experts</h3>
                <p className="text-gray-700 leading-relaxed">
                  15+ years working with coastal storm damage. We know exactly what evidence insurance adjusters need to approve hurricane, wind, and hail claims.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Insurance Company Relationships</h3>
                <p className="text-gray-700 leading-relaxed">
                  We work with all major insurers including State Farm, Allstate, Nationwide, USAA, and more. Adjusters know and trust our documentation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
                <div className="text-5xl mb-4">📸</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Professional Documentation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Drone photography, thermal imaging, moisture meters, and detailed reports. We document every aspect of damage to support your claim.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl border-2 border-yellow-200 hover:border-yellow-400 transition-all">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">We Meet the Adjuster</h3>
                <p className="text-gray-700 leading-relaxed">
                  We attend the insurance adjuster inspection with you, pointing out all damage and ensuring nothing is missed or underestimated.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border-2 border-red-200 hover:border-red-400 transition-all">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Maximize Your Settlement</h3>
                <p className="text-gray-700 leading-relaxed">
                  Insurance companies often lowball initial estimates. We negotiate line-by-line using industry-standard pricing to get fair compensation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Fast Response Time</h3>
                <p className="text-gray-700 leading-relaxed">
                  Time is critical after storm damage. We respond quickly to document damage, provide emergency tarping, and start your claim process immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claims Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Our Insurance Claims Process
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We handle every step of your insurance claim from initial damage to final repair.
            </p>

            <div className="space-y-6">
              {claimsProcess.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-red-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{item.icon}</span>
                        <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
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
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span className="text-2xl">📞</span>
                Start Your Claim: (843) 877-5539
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Covered Damage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Types of Storm Damage We Document
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We specialize in documenting all types of weather-related roof damage for insurance claims.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {damageTypes.map((damage, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{damage.type}</h3>
                    {damage.covered && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Typically Covered
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {damage.description}
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Evidence We Document:</p>
                    <p className="text-sm text-blue-700">{damage.evidence}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Claim Denials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Common Reasons Claims Are Denied
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              And how we help you avoid these pitfalls
            </p>

            <div className="space-y-6">
              {commonDenials.map((denial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                      ⚠️
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-red-600 mb-2">{denial.reason}</h3>
                      <p className="text-gray-700 mb-3 leading-relaxed">{denial.explanation}</p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <p className="text-sm font-semibold text-green-900 mb-1">✓ How We Help:</p>
                        <p className="text-sm text-green-800">{denial.howWeHelp}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Insurance Claims FAQs
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Common questions about roof insurance claims
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-all"
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
      <section className="py-20 bg-gradient-to-br from-red-700 via-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Don't Let Your Insurance Company Deny Your Claim
            </h2>
            <p className="text-xl sm:text-2xl mb-8 text-red-50 leading-relaxed">
              Storm damage to your roof? We'll document everything, meet with the adjuster, and fight for the settlement you deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:8438775539"
                className="group bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
              >
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <div className="text-sm text-red-500 font-normal">Call Now for Help</div>
                  <div>(843) 877-5539</div>
                </div>
              </a>

              <Link
                href="/free-inspection"
                className="bg-red-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Free Storm Damage Inspection
              </Link>
            </div>

            <p className="text-red-100 text-sm">
              Available 24/7 for Storm Emergencies • Myrtle Beach, SC & Surrounding Areas
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
