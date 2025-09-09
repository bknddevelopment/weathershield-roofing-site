'use client'

interface StaticImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
  style?: React.CSSProperties
  loading?: 'lazy' | 'eager'
  fill?: boolean
  priority?: boolean
}

// This component uses a plain img tag with proper path handling for GitHub Pages
export default function StaticImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  style,
  loading = 'eager',
  fill = false,
  priority = false
}: StaticImageProps) {
  // Handle base path for GitHub Pages deployment
  // Check at build time AND runtime
  let imageSrc = src
  
  // Build-time path handling (for static export)
  const isProd = process.env.NODE_ENV === 'production'
  if (isProd && src.startsWith('/') && !src.startsWith('/weathershield-roofing-site')) {
    imageSrc = `/weathershield-roofing-site${src}`
  }
  
  // Runtime path handling (for client-side navigation)
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    if (src.startsWith('/') && !src.startsWith('/weathershield-roofing-site')) {
      imageSrc = `/weathershield-roofing-site${src}`
    }
  }
  
  // If fill is true, create a positioned image container
  if (fill) {
    return (
      <img
        src={imageSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full ${className}`}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          ...style
        }}
        loading={priority ? 'eager' : loading}
      />
    )
  }
  
  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={priority ? 'eager' : loading}
    />
  )
}