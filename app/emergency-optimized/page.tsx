import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Critical above-the-fold component loaded immediately
import OptimizedEmergencyHero from '../components/OptimizedEmergencyHero'

// Lazy load below-fold components
const EmergencyServices = dynamic(() => import('../components/OptimizedEmergencyServices'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true
})

const TrustIndicators = dynamic(() => import('../components/TrustIndicators'), {
  loading: () => <div className="h-64 bg-gray-800 animate-pulse" />,
  ssr: true
})

const EmergencyForm = dynamic(() => import('../emergency/EmergencyForm'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: false // Form doesn't need SSR
})

const EmergencyCTA = dynamic(() => import('../emergency/EmergencyCTA'), {
  loading: () => <div className="h-48 bg-blue-50 animate-pulse" />,
  ssr: true
})

const EmergencySchema = dynamic(() => import('../components/emergency/EmergencySchema'), {
  ssr: true
})

const LiveAvailability = dynamic(() => import('../components/emergency/LiveAvailability'), {
  loading: () => <div className="h-24 bg-gray-900 animate-pulse" />,
  ssr: false
})

const EmergencyContactBar = dynamic(() => import('../components/emergency/EmergencyContactBar'), {
  ssr: false
})

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Today | 24 Hour Roofer Available Now | WeatherShield',
  description: 'URGENT: Roof leak repair today in Myrtle Beach. 24/7 emergency roofer available now. Storm damage repair same day. Hurricane damage experts. Call (843) 877-5539 for immediate response!',
  keywords: 'roof leak repair today, emergency roofer available now, 24 hour roofing service near me, storm damage repair same day, emergency roof tarp service, urgent roof repair myrtle beach, hurricane damage roof repair myrtle beach, emergency roof repair myrtle beach, same day roof repair near me, weekend roofing service myrtle beach, immediate roof inspection after storm, storm damage roofing contractors myrtle beach sc, emergency roofing, immediate roof repair, 24/7 roofer, emergency leak repair',
  alternates: {
    canonical: 'https://weathershieldroofers.com/emergency',
  },
  openGraph: {
    title: 'EMERGENCY Roof Repair Available NOW | 24/7 WeatherShield Response',
    description: 'Roof leak? Storm damage? We respond rapidly. 24/7 emergency roof repair in Myrtle Beach. Call NOW: (843) 877-5539',
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
    description: 'Roof leak or storm damage? Immediate response guaranteed. Call (843) 877-5539',
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

// Inline critical CSS for above-fold content
const criticalCSS = `
  .emergency-hero {
    min-height: 600px;
    background: linear-gradient(135deg, #dc2626 0%, #ea580c 50%, #dc2626 100%);
  }
  @media (min-width: 768px) {
    .emergency-hero { min-height: 700px; }
  }
`

export default function OptimizedEmergencyPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />

      <Suspense fallback={null}>
        <EmergencySchema
          serviceName="24/7 Emergency Roof Repair - Optimized Response"
          description="Lightning-fast emergency roof repair in Myrtle Beach. Optimized for immediate mobile response. Hurricane damage, storm damage, and roof leak specialists."
          keywords={[
            'emergency roof repair myrtle beach',
            '24 hour roofing service near me',
            'roof leak repair today',
            'hurricane damage roof repair',
            'storm damage roofing contractors',
            'emergency tarp installation',
            'same day roof repair',
            'weekend roofing service'
          ]}
          localAreas={[
            'Myrtle Beach',
            'North Myrtle Beach',
            'Surfside Beach',
            'Garden City',
            'Conway',
            'Carolina Forest'
          ]}
          schemaType="emergency-optimized"
          responseTime="rapid"
          availability="24/7"
        />
      </Suspense>

      {/* Emergency Contact Bar */}
      <Suspense fallback={null}>
        <EmergencyContactBar />
      </Suspense>

      {/* Critical Hero Section - Above the fold - Loaded immediately */}
      <OptimizedEmergencyHero />

      {/* Live Availability Status */}
      <Suspense fallback={<div className="h-24 bg-gray-900 animate-pulse" />}>
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-4">
          <div className="container mx-auto px-4">
            <LiveAvailability
              message="Optimized response teams ready"
              showCrewCount={true}
            />
          </div>
        </section>
      </Suspense>

      {/* Trust Indicators Banner - Above the fold but lightweight */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-4 border-y-2 border-red-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">⚡</span>
              <span className="font-bold text-gray-800">Rapid Response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">🛡️</span>
              <span className="font-bold text-gray-800">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">⭐</span>
              <span className="font-bold text-gray-800">5.0 Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">🏠</span>
              <span className="font-bold text-gray-800">5000+ Emergencies Handled</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lazy loaded sections - Below the fold */}
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <EmergencyServices />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse" />}>
        <TrustIndicators variant="emergency" />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <EmergencyForm />
      </Suspense>

      <Suspense fallback={<div className="h-48 bg-blue-50 animate-pulse" />}>
        <EmergencyCTA />
      </Suspense>

      {/* Emergency Keywords Footer for SEO - Lightweight */}
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