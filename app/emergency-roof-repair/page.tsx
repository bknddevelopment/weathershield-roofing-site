import type { Metadata } from 'next'
import EmergencyPageTemplate from '../components/emergency/EmergencyPageTemplate'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Myrtle Beach | 24/7 Service | WeatherShield',
  description: 'Emergency roof repair Myrtle Beach - Available NOW! Rapid response guaranteed. Licensed & insured emergency roofers. Call (843) 877-5539 for immediate help!',
  keywords: 'emergency roof repair myrtle beach, emergency roofer myrtle beach, 24 hour roof repair myrtle beach, urgent roof repair myrtle beach, emergency roofing contractor myrtle beach',
  alternates: {
    canonical: 'https://weathershieldroofers.com/emergency-roof-repair',
  },
  openGraph: {
    title: 'Emergency Roof Repair Myrtle Beach - 24/7 Response Available NOW',
    description: 'Emergency roof leak? Storm damage? We respond quickly. Professional emergency roof repair in Myrtle Beach. Call NOW: (843) 877-5539',
    url: 'https://weathershieldroofers.com/emergency-roof-repair',
    type: 'website',
    images: [
      {
        url: '/images/emergency-roof-repair.jpg',
        width: 1200,
        height: 630,
        alt: 'Emergency Roof Repair Service Myrtle Beach',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🚨 Emergency Roof Repair Myrtle Beach - 24/7 Service',
    description: 'Immediate response for roof emergencies in Myrtle Beach. Call (843) 877-5539',
    images: ['/images/emergency-roof-repair.jpg'],
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
  keyword: 'emergency roof repair myrtle beach',
  title: 'EMERGENCY ROOF REPAIR MYRTLE BEACH',
  subtitle: '24/7 Service • 2-Hour Response Guaranteed',
  urgencyLevel: 'CRITICAL' as const,
  urgencyColor: 'from-red-500 to-red-600',
  description: 'Professional emergency roof repair in Myrtle Beach, SC. Our certified emergency response team is available 24/7 to protect your home from water damage.',
  features: [
    'Active Leak Repair',
    'Storm Damage Fix',
    'Emergency Tarping',
    'Water Extraction',
    'Structural Support',
    'Insurance Help',
    'Free Assessment',
    'No Call-Out Fees'
  ],
  responseTime: '2 Hours',
  availabilityMessage: '24/7 Emergency Service • Crews Standing By',
  ctaText: 'CALL EMERGENCY LINE',
  secondaryCta: 'Get Emergency Quote Online',
  schemaType: 'emergency-roof-repair',
  localArea: [
    'Myrtle Beach',
    'North Myrtle Beach',
    'Surfside Beach',
    'Garden City',
    'Conway',
    'Socastee',
    'Carolina Forest',
    'Little River',
    'Pawleys Island',
    'Murrells Inlet'
  ],
  relatedServices: [
    'Hurricane Damage Repair',
    'Emergency Tarp Installation',
    'Roof Leak Repair Today',
    'Storm Damage Assessment',
    'Insurance Claim Assistance',
    'Water Damage Prevention'
  ],
  trustPoints: [
    { icon: 'Shield', text: 'Licensed & Insured' },
    { icon: 'Clock', text: '5000+ Emergencies Handled' },
    { icon: 'DollarSign', text: 'No Hidden Fees' }
  ],
  faq: [
    {
      question: 'How fast can you respond to an emergency roof repair in Myrtle Beach?',
      answer: 'We provide rapid emergency response to your call in the Myrtle Beach area. Our emergency crews are strategically positioned throughout Horry County to ensure the fastest possible response. We dispatch immediately upon receiving your call.'
    },
    {
      question: 'What types of emergency roof repairs do you handle?',
      answer: 'We handle all emergency roof situations including active leaks, storm damage, fallen trees, missing shingles, hurricane damage, and any situation requiring immediate roof protection in Myrtle Beach and surrounding areas.'
    },
    {
      question: 'Do you charge extra for emergency roof repair services?',
      answer: 'We do not charge call-out fees or emergency service charges. You only pay for the actual work performed. We provide upfront pricing and help with insurance documentation for covered damages.'
    },
    {
      question: 'Are you available 24/7 for emergency roof repair?',
      answer: 'Yes, we provide 24/7 emergency roof repair services throughout Myrtle Beach. Our emergency hotline is always answered by a real person, never voicemail, ensuring you get help when you need it most.'
    },
    {
      question: 'Can you temporarily protect my roof until permanent repairs are made?',
      answer: 'Absolutely. We provide professional emergency tarping and temporary weatherproofing to immediately protect your home from further damage. This gives you time to schedule permanent repairs and work with insurance.'
    }
  ]
}

export default function EmergencyRoofRepairPage() {
  return (
    <EmergencyPageTemplate config={pageConfig}>
      {/* Additional Custom Content */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Why Choose WeatherShield for Emergency Roof Repair in Myrtle Beach?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Fastest Response Time</h3>
              <p className="text-gray-700">
                Our emergency crews are positioned throughout Myrtle Beach for the quickest possible response.
                Average arrival time: 47 minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-red-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Emergency Team</h3>
              <p className="text-gray-700">
                Certified emergency roof repair specialists with years of experience handling
                Myrtle Beach weather emergencies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-red-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Complete Solutions</h3>
              <p className="text-gray-700">
                From temporary protection to permanent repairs, we handle everything including
                insurance documentation and claims.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-red-50 rounded-xl p-8 border-2 border-red-200">
            <h3 className="text-2xl font-bold mb-4 text-center text-red-700">
              ⚠️ Don't Wait - Water Damage Worsens Every Minute!
            </h3>
            <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
              Every minute counts when you have a roof leak. Water can cause thousands of dollars
              in damage to your home's structure, insulation, and belongings. Call us NOW to prevent
              costly water damage.
            </p>
            <div className="text-center">
              <a
                href="tel:+18438775539"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                Get Emergency Help Now: (843) 877-5539
              </a>
            </div>
          </div>
        </div>
      </section>
    </EmergencyPageTemplate>
  )
}