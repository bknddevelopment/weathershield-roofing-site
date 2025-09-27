'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import dynamic from 'next/dynamic'

// Lazy load heavy icons
const Phone = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Phone })), {
  ssr: true,
  loading: () => <span className="w-8 h-8 bg-gray-300 rounded animate-pulse" />
})

const AlertTriangle = dynamic(() => import('lucide-react').then(mod => ({ default: mod.AlertTriangle })), {
  ssr: true,
  loading: () => <span className="w-6 h-6 bg-gray-300 rounded animate-pulse" />
})

const Clock = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Clock })), {
  ssr: true
})

const Shield = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Shield })), {
  ssr: true
})

export default function OptimizedEmergencyHero() {
  const [timeString, setTimeString] = useState('')
  const [isUrgent, setIsUrgent] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const now = new Date()
    const hours = now.getHours()
    const isAfterHours = hours < 7 || hours >= 17
    const isWeekend = now.getDay() === 0 || now.getDay() === 6

    setIsUrgent(isAfterHours || isWeekend)
    setTimeString(now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }))

    // Update time less frequently - every 60 seconds instead of every second
    const interval = setInterval(() => {
      const currentTime = new Date()
      setTimeString(currentTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }))
    }, 60000) // Update every minute instead of every second

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-red-700 min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Simplified background pattern - remove animation for better performance */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,.1) 10px,
            rgba(255,255,255,.1) 20px
          )`,
          willChange: 'auto'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Emergency Badge - Remove constant animation, use hover only */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-full px-6 py-3 mb-6 hover:scale-105 transition-transform">
            <Suspense fallback={<span className="w-6 h-6 bg-yellow-300 rounded" />}>
              <AlertTriangle className="w-6 h-6 text-yellow-300" />
            </Suspense>
            <span className="text-white font-bold text-lg uppercase tracking-wide">
              Emergency Service Available NOW
            </span>
            <Suspense fallback={<span className="w-6 h-6 bg-yellow-300 rounded" />}>
              <AlertTriangle className="w-6 h-6 text-yellow-300" />
            </Suspense>
          </div>

          {/* Main Headline with Keywords */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            ROOF LEAK REPAIR TODAY
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 text-yellow-300">
              Emergency Roofer Available Now!
            </span>
          </h1>

          {/* Urgency Message - Only show time on client */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto border border-white/20">
            <p className="text-xl md:text-2xl text-white font-semibold mb-2">
              {isUrgent ? (
                <>🚨 After-Hours Emergency Service Active</>
              ) : (
                <>✅ Emergency Crews Standing By</>
              )}
            </p>
            <p className="text-lg text-white/90">
              {isClient && timeString && (
                <>Current Time: <span className="font-bold text-yellow-300">{timeString}</span> • </>
              )}
              Response Time: <span className="font-bold text-yellow-300">2 Hours or Less</span>
            </p>
          </div>

          {/* Key Benefits - Lazy load icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Suspense fallback={<div className="w-8 h-8 bg-yellow-300 rounded mx-auto mb-2" />}>
                <Clock className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              </Suspense>
              <p className="text-white font-bold">24 Hour Roof Repair</p>
              <p className="text-white/80 text-sm">Near Me • Available Now</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Suspense fallback={<div className="w-8 h-8 bg-yellow-300 rounded mx-auto mb-2" />}>
                <Shield className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              </Suspense>
              <p className="text-white font-bold">Storm Damage Repair</p>
              <p className="text-white/80 text-sm">Same Day Service</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Suspense fallback={<div className="w-8 h-8 bg-yellow-300 rounded mx-auto mb-2" />}>
                <AlertTriangle className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              </Suspense>
              <p className="text-white font-bold">Emergency Roof Tarp</p>
              <p className="text-white/80 text-sm">Immediate Protection</p>
            </div>
          </div>

          {/* Primary CTA - Optimized animations */}
          <div className="space-y-4">
            <div className="inline-block">
              <a
                href="tel:+18432938150"
                className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-5 rounded-lg font-black text-xl md:text-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl"
                aria-label="Call emergency roof repair service now"
              >
                <Suspense fallback={<span className="w-8 h-8 bg-black/20 rounded" />}>
                  <Phone className="w-8 h-8" />
                </Suspense>
                CALL NOW: (843) 293-8150
              </a>
              <p className="text-white/90 text-sm mt-2">Tap to Call • Direct Emergency Line</p>
            </div>

            {/* Secondary phone number */}
            <div className="text-white">
              <p className="text-lg">Alternative Number:
                <a
                  href="tel:+18438775539"
                  className="font-bold text-yellow-300 hover:text-yellow-200 ml-2 underline"
                  aria-label="Alternative emergency number"
                >
                  (843) 877-5539
                </a>
              </p>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/90 text-lg font-medium">
              ⚡ Urgent Roof Repair Myrtle Beach • Licensed & Insured •
              <span className="text-yellow-300 font-bold"> No Call-Out Fees</span>
            </p>
            <p className="text-white/80 mt-2">
              Serving all of Horry County with immediate emergency response
            </p>
          </div>
        </div>
      </div>

      {/* Mobile-optimized floating CTA - Use intersection observer to show only when hero is not visible */}
      {isClient && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-r from-red-600 to-orange-600 p-4 border-t-2 border-yellow-400 shadow-2xl">
          <a
            href="tel:+18432938150"
            className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 py-4 rounded-lg font-bold text-lg"
            aria-label="Call emergency service now"
          >
            <Suspense fallback={<span className="w-6 h-6 bg-black/20 rounded" />}>
              <Phone className="w-6 h-6" />
            </Suspense>
            TAP TO CALL EMERGENCY SERVICE
          </a>
        </div>
      )}
    </section>
  )
}