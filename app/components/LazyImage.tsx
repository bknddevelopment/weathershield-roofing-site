'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  style?: React.CSSProperties
  fill?: boolean
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="20%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default function LazyImage({
  src,
  alt,
  width = 700,
  height = 475,
  priority = false,
  className = '',
  style,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  placeholder = 'blur',
  blurDataURL
}: LazyImageProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  // Generate placeholder blur data URL
  const placeholderDataURL = blurDataURL || `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`

  useEffect(() => {
    if (priority || !imgRef.current) {
      setIsIntersecting(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    )

    observer.observe(imgRef.current)

    return () => {
      observer.disconnect()
    }
  }, [priority])

  // Handle image path for GitHub Pages
  const imageSrc = (() => {
    if (typeof window !== 'undefined') {
      const isGitHubPages = window.location.hostname.includes('github.io')
      const isProduction = process.env.NODE_ENV === 'production'

      if ((isGitHubPages || isProduction) && src.startsWith('/') && !src.startsWith('/weathershield-roofing-site')) {
        return `/weathershield-roofing-site${src}`
      }
    }
    return src
  })()

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        ...style,
        ...(fill ? {} : { width, height })
      }}
    >
      {(isIntersecting || priority) ? (
        <>
          {!hasLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
          )}
          <Image
            src={imageSrc}
            alt={alt}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            priority={priority}
            className={`${className} ${hasLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            style={style}
            fill={fill}
            sizes={sizes}
            quality={quality}
            placeholder={placeholder}
            blurDataURL={placeholderDataURL}
            onLoad={() => setHasLoaded(true)}
            unoptimized={process.env.NODE_ENV === 'production'}
            loading={priority ? 'eager' : 'lazy'}
          />
        </>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
      )}
    </div>
  )
}