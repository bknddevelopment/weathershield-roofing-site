'use client'

import { useState, useEffect, useRef } from 'react'

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  aspectRatio?: number // width/height ratio
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '100vw',
  quality = 75,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  aspectRatio
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Generate srcset for responsive images
  const generateSrcSet = (imageSrc: string) => {
    const widths = [640, 750, 828, 1080, 1200, 1920, 2048]
    const extension = imageSrc.substring(imageSrc.lastIndexOf('.'))
    const basePath = imageSrc.substring(0, imageSrc.lastIndexOf('.'))

    return widths
      .map(w => `${basePath}-${w}w${extension} ${w}w`)
      .join(', ')
  }

  // Generate WebP and AVIF sources
  const generateModernFormats = (imageSrc: string) => {
    const basePath = imageSrc.substring(0, imageSrc.lastIndexOf('.'))
    return {
      avif: `${basePath}.avif`,
      webp: `${basePath}.webp`,
      fallback: imageSrc
    }
  }

  useEffect(() => {
    if (priority || !containerRef.current) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const formats = generateModernFormats(src)
  const paddingBottom = aspectRatio ? `${(1 / aspectRatio) * 100}%` : undefined

  // Generate blur placeholder
  const defaultBlurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGZpbHRlciBpZD0iYSI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTIiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBmaWxsPSIjZGRkIi8+PC9zdmc+'

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        paddingBottom: paddingBottom,
        backgroundColor: '#f3f4f6'
      }}
    >
      {/* Blur placeholder */}
      {placeholder === 'blur' && !isLoaded && (
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(${blurDataURL || defaultBlurDataURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
            transform: 'scale(1.1)'
          }}
        />
      )}

      {/* Main image with modern formats */}
      {isInView && (
        <picture>
          {/* AVIF format (best compression) */}
          <source
            type="image/avif"
            srcSet={generateSrcSet(formats.avif)}
            sizes={sizes}
          />

          {/* WebP format (good compression, wide support) */}
          <source
            type="image/webp"
            srcSet={generateSrcSet(formats.webp)}
            sizes={sizes}
          />

          {/* Fallback to original format */}
          <img
            ref={imgRef}
            src={formats.fallback}
            srcSet={generateSrcSet(formats.fallback)}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            onLoad={handleLoad}
            className={`
              ${paddingBottom ? 'absolute inset-0 w-full h-full object-cover' : ''}
              transition-opacity duration-300
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              willChange: 'opacity'
            }}
          />
        </picture>
      )}

      {/* Loading skeleton */}
      {!isLoaded && !placeholder && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  )
}