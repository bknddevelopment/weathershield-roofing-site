import type { Metadata } from 'next'
import EmergencyPageTemplate from '../components/emergency/EmergencyPageTemplate'

export const metadata: Metadata = {
  title: '24 Hour Roofing Service Near Me | Emergency Roofer | WeatherShield',
  description: '24 hour roofing service near me - Available NOW! Round-the-clock emergency roof repair. Weekend & holiday service. Call (843) 877-5539 anytime, day or night!',
  keywords: '24 hour roofing service near me, 24 hour roof repair, 24/7 roofer, emergency roofer near me, all night roofing service, weekend roof repair, after hours roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/24-hour-roofing',
  },
  openGraph: {
    title: '24 Hour Roofing Service Near Me - Always Available',
    description: 'Need a roofer at 3am? We are here! 24 hour roofing service with immediate response. Call NOW: (843) 877-5539',
    url: 'https://weathershieldroofers.com/24-hour-roofing',
    type: 'website',
    images: [
      {
        url: '/images/24-hour-roofing-service.jpg',
        width: 1200,
        height: 630,
        alt: '24 Hour Roofing Service Available',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🕐 24 Hour Roofing Service - Always Open',
    description: 'Emergency roof repair available 24/7. Call anytime: (843) 877-5539',
    images: ['/images/24-hour-roofing-service.jpg'],
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
  keyword: '24 hour roofing service near me',
  title: '24 HOUR ROOFING SERVICE NEAR ME',
  subtitle: 'Always Available • Nights, Weekends & Holidays',
  urgencyLevel: 'URGENT' as const,
  urgencyColor: 'from-blue-600 to-purple-600',
  description: 'Round-the-clock roofing service when you need it most. Our 24-hour emergency teams are always ready to respond, no matter the time or day.',
  features: [
    'Night Service',
    'Weekend Availability',
    'Holiday Coverage',
    'After-Hours Repair',
    'Early Morning',
    'Late Night',
    'Always Staffed',
    'No Voicemail'
  ],
  responseTime: '24/7',
  availabilityMessage: 'Dispatchers Online Now • Real Person Answers',
  ctaText: 'CALL 24-HOUR HOTLINE',
  secondaryCta: 'Schedule Emergency Visit',
  schemaType: '24-hour-roofing',
  localArea: [
    'Myrtle Beach',
    'North Myrtle Beach',
    'Surfside Beach',
    'Garden City Beach',
    'Conway',
    'Carolina Forest',
    'Socastee',
    'Little River',
    'Loris',
    'Aynor'
  ],
  relatedServices: [
    'Night-Time Roof Repair',
    'Weekend Emergency Service',
    'Holiday Roofing Coverage',
    'After-Hours Leak Repair',
    'Overnight Tarping Service',
    '3AM Emergency Response'
  ],
  trustPoints: [
    { icon: 'Clock', text: 'Never Closed' },
    { icon: 'Phone', text: 'Real Person 24/7' },
    { icon: 'Shield', text: 'Always Protected' }
  ],
  faq: [
    {
      question: 'Are you really available 24 hours for roofing service?',
      answer: 'Yes! We maintain fully staffed emergency crews 24 hours a day, 7 days a week, 365 days a year. Whether it is 3am on Christmas morning or midnight on a weekend, we are here to help.'
    },
    {
      question: 'Do you charge more for 24 hour emergency roofing service?',
      answer: 'We do not charge additional fees for night, weekend, or holiday service. Our pricing remains consistent regardless of when you need us. You only pay for the actual work performed.'
    },
    {
      question: 'How do I reach your 24 hour roofing service?',
      answer: 'Simply call (843) 877-5539 anytime. Our emergency hotline is answered by a real person 24/7, never an answering service or voicemail. We dispatch crews immediately upon receiving your call.'
    },
    {
      question: 'What areas does your 24 hour roofing service cover?',
      answer: 'We provide 24-hour roofing service throughout Myrtle Beach and all of Horry County. Our emergency crews are positioned strategically to reach any location quickly, day or night.'
    },
    {
      question: 'Can you handle any type of roofing emergency 24 hours a day?',
      answer: 'Absolutely. Our 24-hour crews are equipped to handle any roofing emergency including severe leaks, storm damage, fallen trees, and structural emergencies. We arrive fully equipped for immediate repairs.'
    }
  ]
}

export default function TwentyFourHourRoofingPage() {
  return (
    <EmergencyPageTemplate config={pageConfig}>
      {/* Custom Time-Based Content */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            24-Hour Coverage Timeline
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { time: '12 AM - 6 AM', label: 'Overnight Crew', icon: '🌙' },
                { time: '6 AM - 12 PM', label: 'Morning Team', icon: '🌅' },
                { time: '12 PM - 6 PM', label: 'Day Shift', icon: '☀️' },
                { time: '6 PM - 12 AM', label: 'Evening Squad', icon: '🌆' }
              ].map((shift, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-3xl mb-2">{shift.icon}</div>
                  <div className="font-bold text-lg">{shift.time}</div>
                  <div className="text-sm text-white/80">{shift.label}</div>
                  <div className="mt-2 text-green-400 font-semibold">✓ Available</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-center">Weekend & Holiday Availability</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Weekends:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> Saturday - Full Coverage
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> Sunday - Full Coverage
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Major Holidays:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> All Federal Holidays
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> Christmas & New Year
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Our 24-Hour Service Statistics
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="text-4xl font-black text-blue-600 mb-2">8,760</div>
              <div className="text-gray-600">Hours Open Per Year</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="text-4xl font-black text-purple-600 mb-2">47min</div>
              <div className="text-gray-600">Avg Response Time</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="text-4xl font-black text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Calls Answered &lt; 30s</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="text-4xl font-black text-orange-600 mb-2">5000+</div>
              <div className="text-gray-600">Night Calls Handled</div>
            </div>
          </div>
        </div>
      </section>
    </EmergencyPageTemplate>
  )
}