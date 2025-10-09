'use client'

import { useState, useEffect } from 'react'
import { Phone, X, MessageCircle, Clock } from 'lucide-react'

export default function EmergencyContactBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000)

    // Check if user has minimized before
    const minimized = localStorage.getItem('emergencyBarMinimized')
    if (minimized === 'true') {
      setIsMinimized(true)
    }

    return () => clearTimeout(timer)
  }, [])

  const handleMinimize = () => {
    setIsMinimized(!isMinimized)
    localStorage.setItem('emergencyBarMinimized', (!isMinimized).toString())
  }

  if (!isVisible) return null

  return (
    <>
      {/* Desktop Floating Bar */}
      <div className={`
        hidden md:block fixed top-20 right-4 z-50
        transition-all duration-300 transform
        ${isMinimized ? 'translate-x-[calc(100%-3rem)]' : 'translate-x-0'}
      `}>
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg shadow-2xl border-2 border-yellow-400 overflow-hidden">
          {/* Toggle Button */}
          <button
            onClick={handleMinimize}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-red-600 text-white p-2 rounded-l-lg"
            aria-label={isMinimized ? 'Show emergency contact' : 'Hide emergency contact'}
          >
            {isMinimized ? '📞' : '→'}
          </button>

          {/* Main Content */}
          <div className={`${isMinimized ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            <div className="px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="animate-pulse">
                  <Phone className="w-8 h-8 text-yellow-300" />
                </div>
                <div className="text-white">
                  <p className="text-xs uppercase tracking-wide font-semibold">24/7 Emergency Line</p>
                  <a
                    href="tel:+18438775539"
                    className="text-2xl font-black hover:text-yellow-300 transition-colors"
                  >
                    (843) 877-5539
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-3 pt-3 border-t border-white/20 flex gap-3">
                <a
                  href="tel:+18438775539"
                  className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black px-3 py-2 rounded font-bold text-sm text-center transition-colors"
                >
                  Call Now
                </a>
                <a
                  href="/quote"
                  className="flex-1 bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded font-bold text-sm text-center transition-colors"
                >
                  Get Quote
                </a>
              </div>

              {/* Live Status */}
              <div className="mt-3 flex items-center gap-2 text-xs text-white/80">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Crews Available Now</span>
                <Clock className="w-3 h-3 ml-2" />
                <span>~47min response</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-orange-600 border-t-2 border-yellow-400 shadow-2xl">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-yellow-300 animate-pulse" />
              <div>
                <p className="text-xs text-white/90 uppercase tracking-wide">Emergency</p>
                <p className="text-white font-black text-lg">(843) 877-5539</p>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href="tel:+18438775539"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-sm animate-pulse"
                aria-label="Call emergency service"
              >
                TAP TO CALL
              </a>
              <a
                href="sms:+18438775539"
                className="bg-white/20 text-white p-2 rounded-lg"
                aria-label="Text emergency service"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Live Status */}
          <div className="mt-2 pt-2 border-t border-white/20 flex items-center justify-center gap-4 text-xs text-white/80">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Support</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Fast Response</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add spacing to prevent content overlap */}
      <div className="md:hidden h-20"></div>
    </>
  )
}