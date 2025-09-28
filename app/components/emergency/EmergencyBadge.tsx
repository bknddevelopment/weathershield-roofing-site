'use client'

import { AlertTriangle, Zap, Shield, AlertCircle } from 'lucide-react'

interface EmergencyBadgeProps {
  text: string
  urgencyLevel?: 'CRITICAL' | 'URGENT' | 'IMMEDIATE' | 'EMERGENCY'
  animate?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function EmergencyBadge({
  text,
  urgencyLevel = 'URGENT',
  animate = true,
  size = 'md'
}: EmergencyBadgeProps) {
  const getIcon = () => {
    switch (urgencyLevel) {
      case 'CRITICAL':
        return <AlertTriangle className={`${sizeClasses.icon} text-red-300`} />
      case 'URGENT':
        return <Zap className={`${sizeClasses.icon} text-yellow-300`} />
      case 'IMMEDIATE':
        return <AlertCircle className={`${sizeClasses.icon} text-orange-300`} />
      case 'EMERGENCY':
      default:
        return <Shield className={`${sizeClasses.icon} text-yellow-300`} />
    }
  }

  const getColorClasses = () => {
    switch (urgencyLevel) {
      case 'CRITICAL':
        return 'from-red-500 to-red-600 border-red-400'
      case 'URGENT':
        return 'from-orange-500 to-orange-600 border-orange-400'
      case 'IMMEDIATE':
        return 'from-yellow-500 to-amber-600 border-yellow-400'
      case 'EMERGENCY':
      default:
        return 'from-red-500 to-orange-600 border-yellow-400'
    }
  }

  const sizeClasses = {
    sm: {
      container: 'px-4 py-2 text-sm',
      icon: 'w-4 h-4'
    },
    md: {
      container: 'px-6 py-3 text-lg',
      icon: 'w-6 h-6'
    },
    lg: {
      container: 'px-8 py-4 text-xl',
      icon: 'w-8 h-8'
    }
  }[size]

  const animationClasses = animate
    ? urgencyLevel === 'CRITICAL'
      ? 'animate-pulse'
      : 'animate-bounce'
    : ''

  return (
    <div className={`inline-flex items-center gap-2 mb-6 ${animationClasses}`}>
      <div
        className={`
          inline-flex items-center gap-2
          bg-gradient-to-r ${getColorClasses()}
          backdrop-blur-md border-2
          rounded-full ${sizeClasses.container}
          shadow-2xl relative overflow-hidden
        `}
      >
        {/* Shimmer effect */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
            animation: 'shimmer 2s infinite'
          }}
        />

        {/* Badge content */}
        <div className="relative flex items-center gap-2">
          {getIcon()}
          <span className="text-white font-black uppercase tracking-wide">
            {text}
          </span>
          {getIcon()}
        </div>
      </div>
    </div>
  )
}