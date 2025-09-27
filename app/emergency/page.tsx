import type { Metadata } from 'next'
import EmergencyHero from './EmergencyHero'
import EmergencyServices from './EmergencyServices'
import EmergencyForm from './EmergencyForm'
import EmergencyCTA from './EmergencyCTA'
import EmergencySchema from './EmergencySchema'
import TrustIndicators from '../components/TrustIndicators'

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Today | 24 Hour Roofer Available Now | WeatherShield',
  description: 'URGENT: Roof leak repair today in Myrtle Beach. 24/7 emergency roofer available now. Storm damage repair same day. Call (843) 293-8150 for immediate response!',
  keywords: 'roof leak repair today, emergency roofer available now, 24 hour roof repair near me, storm damage repair same day, emergency roof tarp service, urgent roof repair myrtle beach, emergency roofing, immediate roof repair, 24/7 roofer, same day roof repair, emergency leak repair, storm damage contractor',
  alternates: {
    canonical: 'https://weathershieldroofers.com/emergency',
  },
  openGraph: {
    title: 'EMERGENCY Roof Repair Available NOW | 24/7 WeatherShield Response',
    description: 'Roof leak? Storm damage? We respond in 2 hours or less. 24/7 emergency roof repair in Myrtle Beach. Call NOW: (843) 293-8150',
    url: 'https://weathershieldroofers.com/emergency',
    type: 'website',
    images: [
      {
        url: '/images/emergency-roof-repair.jpg',
        width: 1200,
        height: 630,
        alt: 'Emergency Roof Repair Service Available 24/7',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🚨 EMERGENCY Roof Repair NOW - 24/7 Response',
    description: 'Roof leak or storm damage? Immediate response guaranteed. Call (843) 293-8150',
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

export default function EmergencyPage() {
  return (
    <>
      <EmergencySchema />

      {/* Critical Hero Section - Above the fold */}
      <EmergencyHero />

      {/* Trust Indicators - Build immediate confidence */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-4 border-y-2 border-red-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="font-bold text-gray-800">2-Hour Response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <span className="font-bold text-gray-800">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-bold text-gray-800">5.0 Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏠</span>
              <span className="font-bold text-gray-800">5000+ Emergencies Handled</span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <EmergencyServices />

      {/* Trust Indicators Section */}
      <TrustIndicators variant="emergency" />

      {/* Emergency Contact Form */}
      <EmergencyForm />

      {/* Final CTA Section */}
      <EmergencyCTA />

      {/* Emergency Keywords Footer for SEO */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-600">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              24/7 Emergency Roofing Services Throughout Myrtle Beach Area
            </h2>
            <p className="mb-2">
              Immediate response for: roof leak repair today • emergency roofer available now •
              24 hour roof repair near me • storm damage repair same day • emergency roof tarp service •
              urgent roof repair Myrtle Beach • hurricane damage • tornado damage • fallen tree removal
            </p>
            <p>
              Serving: Myrtle Beach, North Myrtle Beach, Surfside Beach, Garden City, Pawleys Island,
              Conway, Socastee, Carolina Forest, and all of Horry County
            </p>
          </div>
        </div>
      </section>
    </>
  )
}