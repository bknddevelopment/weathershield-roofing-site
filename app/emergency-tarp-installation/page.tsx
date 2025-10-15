import type { Metadata } from 'next'
import EmergencyPageTemplate from '../components/emergency/EmergencyPageTemplate'
import { Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emergency Tarp Installation Myrtle Beach | Same Day Service | WeatherShield',
  description: 'Emergency tarp installation Myrtle Beach - Immediate roof protection! Professional-grade tarping to prevent water damage. Available 24/7. Call (843) 877-5539 now!',
  keywords: 'emergency tarp installation myrtle beach, emergency roof tarping, roof tarp service, temporary roof repair, emergency weatherproofing, storm tarp installation',
  alternates: {
    canonical: 'https://weathershieldroofers.com/emergency-tarp-installation',
  },
  openGraph: {
    title: 'Emergency Tarp Installation Myrtle Beach - Immediate Protection',
    description: 'Professional emergency roof tarping to stop leaks and prevent damage. Same-day service. Call: (843) 877-5539',
    url: 'https://weathershieldroofers.com/emergency-tarp-installation',
    type: 'website',
    images: [
      {
        url: '/images/emergency-tarp-installation.jpg',
        width: 1200,
        height: 630,
        alt: 'Emergency Tarp Installation Service',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🛡️ Emergency Tarp Installation - Immediate Protection',
    description: 'Professional roof tarping service. Stop leaks now! Call: (843) 877-5539',
    images: ['/images/emergency-tarp-installation.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const pageConfig = {
  keyword: 'emergency tarp installation myrtle beach',
  title: 'EMERGENCY TARP INSTALLATION',
  subtitle: 'Immediate Roof Protection • Professional Grade',
  urgencyLevel: 'IMMEDIATE' as const,
  urgencyColor: 'from-green-600 to-teal-600',
  description: 'Professional emergency tarp installation in Myrtle Beach. Heavy-duty, wind-resistant tarping that provides immediate protection while you plan permanent repairs.',
  features: [
    'Heavy-Duty Tarps',
    'Wind Resistant',
    'Waterproof Seal',
    'Secure Fastening',
    'UV Protected',
    'Insurance Grade',
    'Storm Rated',
    'Quick Install'
  ],
  responseTime: '90 Minutes',
  availabilityMessage: 'Tarp Installation Crews Ready',
  ctaText: 'GET TARPED NOW',
  secondaryCta: 'Schedule Tarp Service',
  schemaType: 'emergency-tarp',
  localArea: [
    'Myrtle Beach',
    'Surfside Beach',
    'Garden City',
    'North Myrtle Beach',
    'Conway',
    'Pawleys Island',
    'Murrells Inlet',
    'Little River',
    'Socastee',
    'Red Hill'
  ],
  relatedServices: [
    'Storm Damage Tarping',
    'Hurricane Protection',
    'Temporary Weatherproofing',
    'Emergency Board-Up',
    'Leak Prevention Tarping',
    'Insurance-Approved Tarping'
  ],
  trustPoints: [
    { icon: 'Shield', text: 'Insurance Approved' },
    { icon: 'Umbrella', text: 'Weatherproof' },
    { icon: 'CheckCircle', text: 'Guaranteed Secure' }
  ],
  faq: [
    {
      question: 'How quickly can you install an emergency tarp in Myrtle Beach?',
      answer: 'We arrive rapidly for emergency tarp installation. Our crews carry professional-grade tarps and all necessary equipment, allowing us to protect your roof immediately upon arrival.'
    },
    {
      question: 'How long will an emergency roof tarp last?',
      answer: 'Our professional-grade emergency tarps are designed to last 30-90 days, giving you ample time to schedule permanent repairs. They\'re UV-resistant, waterproof, and rated for high winds common in coastal areas.'
    },
    {
      question: 'Is emergency tarp installation covered by insurance?',
      answer: 'Yes, most homeowner\'s insurance policies cover emergency tarping as a damage mitigation measure. We provide all documentation needed for your insurance claim and work directly with adjusters.'
    },
    {
      question: 'Can tarps withstand another storm?',
      answer: 'Our emergency tarps are hurricane-rated and properly secured to withstand winds up to 70 mph. We use professional installation methods including board battens and sealed edges to ensure maximum protection.'
    },
    {
      question: 'What is included in emergency tarp installation service?',
      answer: 'Our service includes damage assessment, professional-grade tarp material, secure installation with proper fastening, sealed edges to prevent water intrusion, and documentation for insurance. We also provide free follow-up inspections.'
    }
  ]
}

export default function EmergencyTarpInstallationPage() {
  return (
    <EmergencyPageTemplate config={pageConfig}>
      {/* Tarp Installation Process */}
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Professional Tarp Installation Process
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Assessment',
                  icon: '🔍',
                  description: 'Quick damage evaluation',
                  features: ['Identify damage extent', 'Measure area needed', 'Check structural integrity'],
                  time: '15 min'
                },
                {
                  title: 'Preparation',
                  icon: '🛠️',
                  description: 'Ready the roof surface',
                  features: ['Clear debris safely', 'Secure loose materials', 'Position tarp correctly'],
                  time: '20 min'
                },
                {
                  title: 'Installation',
                  icon: '🛡️',
                  description: 'Secure tarp professionally',
                  features: ['Apply heavy-duty tarp', 'Seal all edges', 'Test for water-tightness'],
                  time: '45 min'
                }
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-4xl mb-4 text-center">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-center text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-center mb-4">{step.description}</p>
                  <ul className="space-y-2 mb-4">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      ~{step.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Total Installation Time: Under 90 Minutes
              </h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Our experienced crews work quickly and efficiently to protect your home.
                Every minute counts when preventing water damage!
              </p>
              <a
                href="tel:+18438775539"
                className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Shield className="w-6 h-6" />
                Get Protected Now: (843) 877-5539
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tarp Quality & Features */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Professional-Grade Emergency Tarps
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Tarp Specifications:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">💪</span>
                      <span><strong>Material:</strong> 12-mil heavy-duty polyethylene</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🌊</span>
                      <span><strong>Waterproof:</strong> 100% water resistant</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">☀️</span>
                      <span><strong>UV Protection:</strong> Rated for 90+ days</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">💨</span>
                      <span><strong>Wind Rating:</strong> Up to 70 mph</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Installation Includes:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🔨</span>
                      <span><strong>Battens:</strong> 2x4 wood strips for security</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🔧</span>
                      <span><strong>Fasteners:</strong> Corrosion-resistant screws</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🎯</span>
                      <span><strong>Seal:</strong> Waterproof edge treatment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">📋</span>
                      <span><strong>Documentation:</strong> Photos for insurance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-blue-100 rounded-lg p-6 text-center">
                <p className="text-lg font-semibold text-blue-900 mb-2">
                  Insurance-Approved Installation Methods
                </p>
                <p className="text-blue-700">
                  Our installation meets all insurance requirements for emergency damage mitigation
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                Why Professional Installation Matters
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                      <th className="p-4 text-left">Feature</th>
                      <th className="p-4 text-center">DIY Tarp</th>
                      <th className="p-4 text-center">Professional Install</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Wind Resistance</td>
                      <td className="p-4 text-center text-red-600">❌ 20-30 mph</td>
                      <td className="p-4 text-center text-green-600">✅ 70+ mph</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Water Protection</td>
                      <td className="p-4 text-center text-red-600">❌ Partial</td>
                      <td className="p-4 text-center text-green-600">✅ 100%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Insurance Approved</td>
                      <td className="p-4 text-center text-red-600">❌ No</td>
                      <td className="p-4 text-center text-green-600">✅ Yes</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Longevity</td>
                      <td className="p-4 text-center text-red-600">❌ Days</td>
                      <td className="p-4 text-center text-green-600">✅ 30-90 days</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Warranty</td>
                      <td className="p-4 text-center text-red-600">❌ None</td>
                      <td className="p-4 text-center text-green-600">✅ Guaranteed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EmergencyPageTemplate>
  )
}