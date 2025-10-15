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
  // For custom domain deployment, use paths as-is without any prefix
  // The site is deployed to weathershieldroofing.com, not a GitHub Pages subdirectory
  let imageSrc = src
  
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