'use client'

import { useState, useEffect } from 'react'
import { Users, CheckCircle } from 'lucide-react'

interface LiveAvailabilityProps {
  message?: string
  showCrewCount?: boolean
}

export default function LiveAvailability({
  message = "Emergency crews standing by",
  showCrewCount = true
}: LiveAvailabilityProps) {
  const [currentTime, setCurrentTime] = useState('')
  const [isAfterHours, setIsAfterHours] = useState(false)
  const [crewCount, setCrewCount] = useState(0)
  const [pulseColor, setPulseColor] = useState('bg-green-500')

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date()
      const hours = now.getHours()
      const day = now.getDay()

      // Check if after hours or weekend
      const afterHours = hours < 7 || hours >= 17
      const weekend = day === 0 || day === 6
      setIsAfterHours(afterHours || weekend)

      // Simulate crew availability (more during peak times)
      let crews = 3
      if (afterHours || weekend) {
        crews = 5 // More crews during emergency hours
        setPulseColor('bg-yellow-500')
      } else {
        crews = 4
        setPulseColor('bg-green-500')
      }
      setCrewCount(crews)

      // Format current time
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }))
    }

    updateStatus()
    const interval = setInterval(updateStatus, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 max-w-2xl mx-auto border border-white/20">
      <div className="flex items-center justify-center gap-4">
        <div className="relative">
          <div className={`absolute inset-0 ${pulseColor} rounded-full animate-ping opacity-75`}></div>
          <div className={`relative ${pulseColor} rounded-full w-3 h-3`}></div>
        </div>

        <div className="text-white">
          <p className="text-lg font-semibold">
            {isAfterHours ? '🚨 After-Hours Service Active' : '✅ Regular Hours Service'}
          </p>
          <p className="text-sm text-white/80">
            {currentTime} • {message}
          </p>
        </div>

        {showCrewCount && (
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
            <Users className="w-5 h-5 text-yellow-300" />
            <div>
              <p className="text-xs text-white/70">Available</p>
              <p className="text-lg font-bold text-white">{crewCount} Crews</p>
            </div>
          </div>
        )}
      </div>

      {/* Real-time status updates */}
      <div className="mt-3 pt-3 border-t border-white/10">
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-1 text-white/80">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Dispatchers Online</span>
          </div>
          <div className="flex items-center gap-1 text-white/80">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>GPS Tracking Active</span>
          </div>
          <div className="flex items-center gap-1 text-white/80">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Materials Stocked</span>
          </div>
        </div>
      </div>
    </div>
  )
}