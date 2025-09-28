import type { Metadata } from 'next'
import EmergencyPageTemplate from '../components/emergency/EmergencyPageTemplate'
import { Droplets } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Urgent Roof Leak Repair Today | Same Day Service | WeatherShield',
  description: 'Roof leak repair today - URGENT response available! Stop water damage NOW with same-day emergency repair service. Call (843) 293-8150 for immediate assistance!',
  keywords: 'roof leak repair today, urgent roof leak repair, same day roof repair, emergency leak repair, immediate roof repair, roof leak fix today, water leak emergency, ceiling leak repair today',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roof-leak-repair-today',
  },
  openGraph: {
    title: 'URGENT: Roof Leak Repair Today - Stop Water Damage NOW',
    description: 'Active roof leak? We stop it TODAY! Same-day emergency repair service. Call NOW: (843) 293-8150',
    url: 'https://weathershieldroofers.com/roof-leak-repair-today',
    type: 'website',
    images: [
      {
        url: '/images/roof-leak-repair.jpg',
        width: 1200,
        height: 630,
        alt: 'Urgent Roof Leak Repair Service',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '💧 URGENT: Roof Leak Repair TODAY',
    description: 'Stop water damage NOW! Same-day emergency leak repair. Call: (843) 293-8150',
    images: ['/images/roof-leak-repair.jpg'],
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
  keyword: 'roof leak repair today',
  title: 'ROOF LEAK REPAIR TODAY',
  subtitle: 'Stop Water Damage NOW • Same Day Service',
  urgencyLevel: 'CRITICAL' as const,
  urgencyColor: 'from-blue-600 to-cyan-600',
  description: 'Active roof leak causing damage? We will stop it TODAY! Our emergency leak repair specialists arrive fast with everything needed to protect your home.',
  features: [
    'Active Leak Stop',
    'Ceiling Protection',
    'Water Extraction',
    'Damage Prevention',
    'Mold Prevention',
    'Interior Safeguard',
    'Quick Dry Out',
    'Insurance Docs'
  ],
  responseTime: 'Same Day',
  availabilityMessage: 'Emergency Leak Specialists Available NOW',
  ctaText: 'STOP LEAK NOW',
  secondaryCta: 'Send Leak Photos for Quote',
  schemaType: 'roof-leak-repair',
  localArea: [
    'Myrtle Beach',
    'Surfside Beach',
    'North Myrtle Beach',
    'Conway',
    'Garden City',
    'Pawleys Island',
    'Little River',
    'Carolina Forest',
    'Market Common',
    'Grand Dunes'
  ],
  relatedServices: [
    'Ceiling Water Damage Repair',
    'Emergency Water Extraction',
    'Attic Leak Repair',
    'Skylight Leak Fix',
    'Chimney Leak Repair',
    'Valley Leak Repair'
  ],
  trustPoints: [
    { icon: 'Droplets', text: 'Leak Experts' },
    { icon: 'AlertTriangle', text: 'Damage Prevention' },
    { icon: 'Home', text: 'Home Protection' }
  ],
  faq: [
    {
      question: 'Can you really repair my roof leak today?',
      answer: 'Yes! We prioritize active leaks as critical emergencies. Our teams arrive equipped to stop leaks immediately and perform same-day repairs. We understand that every minute counts when water is entering your home.'
    },
    {
      question: 'What should I do while waiting for roof leak repair?',
      answer: 'Place buckets or containers to catch water, move valuables away from the leak area, and if safe, place a tarp in your attic under the leak. Turn off electricity to affected areas if water is near electrical fixtures. We\'ll guide you over the phone.'
    },
    {
      question: 'How much does emergency roof leak repair cost today?',
      answer: 'Emergency leak repairs typically range from $200-$1,500 depending on severity and location. We provide upfront pricing before starting work. Many homeowners insurance policies cover sudden leak damage - we help with documentation.'
    },
    {
      question: 'Can you stop a roof leak during rain?',
      answer: 'Yes, we can perform emergency leak stops even during active rain. We use specialized techniques and materials designed for wet conditions to immediately protect your home from further water damage.'
    },
    {
      question: 'What causes urgent roof leaks that need repair today?',
      answer: 'Common causes include storm damage, missing shingles, failed flashing, ice dams, clogged gutters, and aging roofing materials. Whatever the cause, we diagnose and repair it quickly to prevent interior damage.'
    }
  ]
}

export default function RoofLeakRepairTodayPage() {
  return (
    <EmergencyPageTemplate config={pageConfig}>
      {/* Water Damage Prevention Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Every Minute Counts - Water Damage Multiplies Fast!
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-900">Within 1 Hour:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>Drywall begins absorbing water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>Furniture finishes start to bleed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>Ceiling materials begin to sag</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-red-900">Within 24 Hours:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">🚨</span>
                    <span>Mold and mildew start growing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">🚨</span>
                    <span>Structural damage accelerates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">🚨</span>
                    <span>Repair costs increase 40%+</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-6 text-white text-center">
              <p className="text-xl font-bold mb-4">
                Don't Let Water Damage Spread - We Stop Leaks in Under 2 Hours!
              </p>
              <a
                href="tel:+18432938150"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Droplets className="w-6 h-6" />
                Stop Your Leak NOW: (843) 293-8150
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leak Location Guide */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Common Leak Locations We Fix Today
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Roof Valleys',
                description: 'Where two roof planes meet - #1 leak source',
                urgency: 'HIGH'
              },
              {
                title: 'Around Chimneys',
                description: 'Failed flashing causes major leaks',
                urgency: 'HIGH'
              },
              {
                title: 'Skylights',
                description: 'Seal failures lead to interior damage',
                urgency: 'MEDIUM'
              },
              {
                title: 'Vent Pipes',
                description: 'Rubber boots crack and allow water in',
                urgency: 'MEDIUM'
              },
              {
                title: 'Missing Shingles',
                description: 'Direct path for water intrusion',
                urgency: 'HIGH'
              },
              {
                title: 'Gutters/Edges',
                description: 'Ice dams and overflow issues',
                urgency: 'MEDIUM'
              }
            ].map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{location.title}</h3>
                <p className="text-gray-600 mb-3">{location.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-semibold ${
                    location.urgency === 'HIGH' ? 'text-red-600' : 'text-orange-600'
                  }`}>
                    {location.urgency} PRIORITY
                  </span>
                  <a
                    href="tel:+18432938150"
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Fix Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </EmergencyPageTemplate>
  )
}