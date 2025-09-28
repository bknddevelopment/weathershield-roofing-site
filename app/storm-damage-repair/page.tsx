import type { Metadata } from 'next'
import EmergencyPageTemplate from '../components/emergency/EmergencyPageTemplate'
import { CloudRain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Storm Damage Roofing Contractors Myrtle Beach | Hurricane Repair | WeatherShield',
  description: 'Storm damage roofing contractors Myrtle Beach SC - Hurricane & tropical storm damage repair experts. Same-day emergency response. Insurance specialists. Call (843) 293-8150!',
  keywords: 'storm damage roofing contractors myrtle beach sc, hurricane damage roof repair, tropical storm damage, wind damage repair, hail damage roofing, storm damage repair same day',
  alternates: {
    canonical: 'https://weathershieldroofers.com/storm-damage-repair',
  },
  openGraph: {
    title: 'Storm Damage Roofing Contractors Myrtle Beach - Emergency Response',
    description: 'Hurricane or storm damage? Expert roofing contractors ready NOW. Insurance approved repairs. Call: (843) 293-8150',
    url: 'https://weathershieldroofers.com/storm-damage-repair',
    type: 'website',
    images: [
      {
        url: '/images/storm-damage-repair.jpg',
        width: 1200,
        height: 630,
        alt: 'Storm Damage Roofing Repair Myrtle Beach',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🌪️ Storm Damage Roofing Contractors - Myrtle Beach',
    description: 'Hurricane & storm damage experts. Insurance approved. Call: (843) 293-8150',
    images: ['/images/storm-damage-repair.jpg'],
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
  keyword: 'storm damage roofing contractors myrtle beach sc',
  title: 'STORM DAMAGE ROOFING CONTRACTORS',
  subtitle: 'Hurricane & Tropical Storm Repair Experts',
  urgencyLevel: 'EMERGENCY' as const,
  urgencyColor: 'from-purple-600 to-indigo-600',
  description: 'Expert storm damage roofing contractors in Myrtle Beach, SC. Specializing in hurricane, tropical storm, and severe weather damage. Insurance claim assistance included.',
  features: [
    'Hurricane Damage',
    'Wind Damage',
    'Hail Damage',
    'Tree Impact',
    'Missing Shingles',
    'Structural Repair',
    'Insurance Claims',
    'FEMA Assistance'
  ],
  responseTime: 'Immediate',
  availabilityMessage: 'Storm Response Team Mobilized',
  ctaText: 'GET STORM HELP',
  secondaryCta: 'Start Insurance Claim',
  schemaType: 'storm-damage',
  localArea: [
    'Myrtle Beach',
    'North Myrtle Beach',
    'Surfside Beach',
    'Pawleys Island',
    'Garden City',
    'Murrells Inlet',
    'Conway',
    'Little River',
    'Cherry Grove',
    'Windy Hill'
  ],
  relatedServices: [
    'Hurricane Damage Assessment',
    'Tropical Storm Repair',
    'Wind Damage Restoration',
    'Emergency Board-Up Service',
    'Insurance Claim Documentation',
    'FEMA Damage Reports'
  ],
  trustPoints: [
    { icon: 'CloudRain', text: 'Storm Specialists' },
    { icon: 'Wind', text: 'Wind Certified' },
    { icon: 'Zap', text: 'Rapid Response' }
  ],
  faq: [
    {
      question: 'How quickly can you respond to storm damage in Myrtle Beach?',
      answer: 'Our storm damage response teams are on standby during severe weather events. We typically arrive within 1-2 hours of your call, even during active storms. We monitor weather patterns to pre-position crews for fastest response.'
    },
    {
      question: 'Do you work with insurance companies for storm damage claims?',
      answer: 'Yes! We are insurance claim specialists. We document all damage, provide detailed reports, work directly with adjusters, and ensure you receive full coverage for storm damage repairs. We handle the paperwork so you can focus on recovery.'
    },
    {
      question: 'What types of storm damage do you repair?',
      answer: 'We repair all storm-related roofing damage including hurricane damage, tropical storm damage, wind damage, hail damage, fallen trees, missing shingles, and structural damage. Our crews are certified for all types of weather-related repairs.'
    },
    {
      question: 'Can you provide temporary protection before permanent repairs?',
      answer: 'Absolutely. We provide emergency tarping and board-up services to immediately protect your property from further damage. This temporary protection is typically covered by insurance and prevents secondary damage while permanent repairs are scheduled.'
    },
    {
      question: 'Are you experienced with hurricane damage specific to coastal areas?',
      answer: 'Yes, our team specializes in coastal storm damage common to Myrtle Beach. We understand salt air corrosion, high wind damage patterns, and the unique challenges of hurricane damage repair in coastal South Carolina.'
    }
  ]
}

export default function StormDamageRepairPage() {
  return (
    <EmergencyPageTemplate config={pageConfig}>
      {/* Storm Damage Assessment Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Professional Storm Damage Assessment Process
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  step: '1',
                  title: 'Emergency Response',
                  description: 'Immediate arrival to secure property',
                  time: '1-2 Hours'
                },
                {
                  step: '2',
                  title: 'Damage Documentation',
                  description: 'Complete photo/video for insurance',
                  time: '30 Minutes'
                },
                {
                  step: '3',
                  title: 'Temporary Protection',
                  description: 'Tarping & weatherproofing',
                  time: 'Same Day'
                },
                {
                  step: '4',
                  title: 'Permanent Repair',
                  description: 'Full restoration to pre-storm condition',
                  time: '1-3 Days'
                }
              ].map((phase, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{phase.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{phase.description}</p>
                  <span className="text-xs font-semibold text-purple-600">{phase.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-purple-900 text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">
              ⚡ Active Storm Alert for Myrtle Beach Area
            </h3>
            <p className="text-center mb-6">
              Hurricane season runs June 1 - November 30. Our storm response teams are on
              high alert and ready to respond immediately to any weather emergency.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl mb-2">🌀</div>
                <p className="font-semibold">Hurricane Ready</p>
                <p className="text-sm text-white/80">Category 1-5 Response</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl mb-2">⛈️</div>
                <p className="font-semibold">Tropical Storms</p>
                <p className="text-sm text-white/80">Named Storm Coverage</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl mb-2">💨</div>
                <p className="font-semibold">High Winds</p>
                <p className="text-sm text-white/80">50+ MPH Wind Damage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Assistance Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Insurance Claim Assistance Included
          </h2>

          <div className="max-w-4xl mx-auto bg-green-50 border-2 border-green-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-900">We Handle:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Complete damage documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Direct adjuster communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Detailed repair estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Supplemental claim filing</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-green-900">You Get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Maximum claim coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>No out-of-pocket surprises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Fast claim approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Peace of mind</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                We work with all major insurance companies
              </p>
              <a
                href="tel:+18432938150"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <CloudRain className="w-6 h-6" />
                Start Your Claim: (843) 293-8150
              </a>
            </div>
          </div>
        </div>
      </section>
    </EmergencyPageTemplate>
  )
}