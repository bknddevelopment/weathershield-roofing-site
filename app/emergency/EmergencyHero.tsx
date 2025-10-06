'use client'

import { useState, useEffect } from 'react'
import { Phone, AlertTriangle, Clock, Shield } from 'lucide-react'

export default function EmergencyHero() {
  const [timeString, setTimeString] = useState('')
  const [isUrgent, setIsUrgent] = useState(false)

  useEffect(() => {
    const updateTime = () => {
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
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-red-700 min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,.1) 10px,
            rgba(255,255,255,.1) 20px
          )`
        }} />
      </div>

      {/* Pulse animation overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Emergency Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-full px-6 py-3 mb-6 animate-bounce">
            <AlertTriangle className="w-6 h-6 text-yellow-300 animate-pulse" />
            <span className="text-white font-bold text-lg uppercase tracking-wide">
              Emergency Service Available NOW
            </span>
            <AlertTriangle className="w-6 h-6 text-yellow-300 animate-pulse" />
          </div>

          {/* Main Headline with Keywords */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            ROOF LEAK REPAIR TODAY
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 text-yellow-300">
              Emergency Roofer Available Now!
            </span>
          </h1>

          {/* Urgency Message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto border border-white/20">
            <p className="text-xl md:text-2xl text-white font-semibold mb-2">
              {isUrgent ? (
                <>🚨 After-Hours Emergency Service Active</>
              ) : (
                <>✅ Emergency Crews Standing By</>
              )}
            </p>
            <p className="text-lg text-white/90">
              Current Time: <span className="font-bold text-yellow-300">{timeString}</span> •
              Emergency Service: <span className="font-bold text-yellow-300">Available 24/7</span>
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Clock className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <p className="text-white font-bold">24 Hour Roof Repair</p>
              <p className="text-white/80 text-sm">Near Me • Available Now</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Shield className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <p className="text-white font-bold">Storm Damage Repair</p>
              <p className="text-white/80 text-sm">Same Day Service</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <AlertTriangle className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <p className="text-white font-bold">Emergency Roof Tarp</p>
              <p className="text-white/80 text-sm">Immediate Protection</p>
            </div>
          </div>

          {/* Primary CTA - Multiple Phone Numbers */}
          <div className="space-y-4">
            <div className="inline-block">
              <a
                href="tel:+18432938150"
                className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-5 rounded-lg font-black text-xl md:text-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse hover:animate-none"
                aria-label="Call emergency roof repair service now"
              >
                <Phone className="w-8 h-8 animate-bounce" />
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

          {/* Scroll Indicator */}
          <div className="mt-8 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile-optimized floating CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-r from-red-600 to-orange-600 p-4 border-t-2 border-yellow-400 shadow-2xl">
        <a
          href="tel:+18432938150"
          className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 py-4 rounded-lg font-bold text-lg"
          aria-label="Call emergency service now"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          TAP TO CALL EMERGENCY SERVICE
        </a>
      </div>
    </section>
  )
}