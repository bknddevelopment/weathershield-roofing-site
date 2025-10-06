'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Make banner sticky after scrolling 100px
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`${
        isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : 'relative'
      } transition-all duration-300`}
    >
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-2xl animate-pulse">🎃</span>
            <div className="flex-1">
              <p className="font-bold text-lg md:text-xl">
                October Deal – Limited Time!
              </p>
              <p className="text-sm md:text-base text-orange-100">
                Special Offer on Roof Replacement + Free Inspection
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="tel:8438775539"
              className="bg-white text-orange-600 hover:bg-gray-100 px-4 md:px-6 py-2 rounded-lg font-bold text-sm md:text-base transition-colors whitespace-nowrap"
            >
              Call (843) 877-5539
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-orange-200 text-2xl leading-none p-1"
              aria-label="Close banner"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
