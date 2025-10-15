'use client'

import { Tag, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function PromotionBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white py-3 px-4 relative animate-pulse">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 text-center">
          <Tag className="w-6 h-6 flex-shrink-0" />
          <p className="text-sm md:text-lg font-bold">
            <span className="text-yellow-300">LIMITED TIME OFFER:</span> Save $500 on Any Non-Insurance Roofing Project!
            <Link href="/quote" className="ml-3 underline hover:text-yellow-300 transition-colors">
              Get Free Quote →
            </Link>
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-colors"
            aria-label="Close promotion banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
