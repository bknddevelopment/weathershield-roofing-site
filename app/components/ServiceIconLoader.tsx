'use client'

import * as Icons from 'lucide-react'

interface ServiceIconLoaderProps {
  iconName: string
  className?: string
}

export default function ServiceIconLoader({ iconName, className = "w-12 h-12" }: ServiceIconLoaderProps) {
  const Icon = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>

  if (!Icon) {
    return <div className={className} />
  }

  return <Icon className={className} />
}