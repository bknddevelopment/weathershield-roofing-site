'use client'

import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

interface CountdownTimerProps {
  targetTime: string // e.g., "2 Hours", "60 Minutes", "30 Minutes"
  message?: string
  showSeconds?: boolean
}

export default function CountdownTimer({ targetTime, message = "Response Time", showSeconds = true }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState('')
  const [isUrgent, setIsUrgent] = useState(false)

  useEffect(() => {
    // Parse target time to minutes
    let targetMinutes = 120 // Default 2 hours
    if (targetTime.includes('Hour')) {
      const hours = parseInt(targetTime.match(/\d+/)?.[0] || '2')
      targetMinutes = hours * 60
    } else if (targetTime.includes('Minute')) {
      targetMinutes = parseInt(targetTime.match(/\d+/)?.[0] || '60')
    }

    const updateTimer = () => {
      const now = new Date()
      const target = new Date(now.getTime() + targetMinutes * 60000)
      const diff = target.getTime() - now.getTime()

      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)

        let display = ''
        if (hours > 0) {
          display = `${hours}h ${minutes}m`
          if (showSeconds) display += ` ${seconds}s`
        } else if (minutes > 0) {
          display = `${minutes}m`
          if (showSeconds) display += ` ${seconds}s`
        } else {
          display = `${seconds}s`
        }

        setTimeLeft(display)
        setIsUrgent(minutes < 30)
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [targetTime, showSeconds])

  return (
    <div className={`inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 mb-6 border-2 ${
      isUrgent ? 'border-yellow-400 animate-pulse' : 'border-white/40'
    }`}>
      <Clock className={`w-6 h-6 ${isUrgent ? 'text-yellow-300' : 'text-white'}`} />
      <div className="text-left">
        <p className="text-sm text-white/80 uppercase tracking-wide">{message}</p>
        <p className={`text-2xl font-bold ${isUrgent ? 'text-yellow-300' : 'text-white'}`}>
          {timeLeft || targetTime}
        </p>
      </div>
    </div>
  )
}