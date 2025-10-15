'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface LazyYouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export default function LazyYouTubeEmbed({
  videoId,
  title,
  className = ''
}: LazyYouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Intersection Observer to detect when component is in viewport
  useEffect(() => {
    const currentContainer = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.1
      }
    );

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  const handleLoadVideo = useCallback(() => {
    if (!isLoaded) {
      setIsLoaded(true);
      // Track engagement event if analytics is available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'video_play_attempt', {
          video_title: title,
          video_id: videoId
        });
      }
    }
  }, [isLoaded, title, videoId]);

  // Handle iframe load errors
  const handleIframeError = () => {
    setHasError(true);
    console.error(`Failed to load YouTube video: ${videoId}`);
  };

  // Generate YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackThumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (hasError) {
    return (
      <div
        ref={containerRef}
        className={`relative w-full bg-gray-100 rounded-xl overflow-hidden shadow-lg ${className}`}
        style={{ aspectRatio: '16/9' }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <svg
            className="w-16 h-16 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <p className="text-gray-600 mb-4">Unable to load video</p>
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            aria-label={`Watch ${title} on YouTube`}
          >
            Watch on YouTube
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full bg-gray-900 rounded-xl overflow-hidden shadow-xl group ${className}`}
      style={{ aspectRatio: '16/9' }}
    >
      {!isLoaded ? (
        <>
          {/* Thumbnail with lazy loading */}
          <div className="absolute inset-0">
            <Image
              src={thumbnailUrl}
              alt={`${title} video thumbnail`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              loading="lazy"
              onError={(e) => {
                // Fallback to lower quality thumbnail if maxres fails
                (e.target as HTMLImageElement).src = fallbackThumbnailUrl;
              }}
            />
            {/* Dark overlay for better play button visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity group-hover:bg-opacity-40" />
          </div>

          {/* Play button */}
          <button
            onClick={handleLoadVideo}
            className="absolute inset-0 flex items-center justify-center cursor-pointer z-10 group"
            aria-label={`Play ${title} video`}
            type="button"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute inset-0 bg-red-600 rounded-full opacity-80 group-hover:opacity-100 transition-all transform group-hover:scale-110"
                   style={{ width: '80px', height: '80px' }} />

              {/* Play icon */}
              <svg
                className="relative w-20 h-20 text-white transform transition-transform group-hover:scale-110"
                viewBox="0 0 80 80"
                fill="currentColor"
                aria-hidden="true"
              >
                <circle cx="40" cy="40" r="40" className="text-red-600" />
                <polygon
                  points="32,24 32,56 56,40"
                  className="text-white"
                  style={{ transformOrigin: 'center' }}
                />
              </svg>
            </div>

            {/* Loading indicator (shows when visible but not clicked) */}
            {isVisible && (
              <div className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-lg">
                Click to play
              </div>
            )}
          </button>

          {/* YouTube branding */}
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 px-2 py-1 rounded flex items-center space-x-1">
            <svg className="w-6 h-4" viewBox="0 0 28 20" fill="none" aria-hidden="true">
              <path d="M27.4 3.2C27.1 2.1 26.2 1.2 25.1 0.9C22.9 0.3 14 0.3 14 0.3C14 0.3 5.1 0.3 2.9 0.9C1.8 1.2 0.9 2.1 0.6 3.2C0 5.4 0 10 0 10C0 10 0 14.6 0.6 16.8C0.9 17.9 1.8 18.8 2.9 19.1C5.1 19.7 14 19.7 14 19.7C14 19.7 22.9 19.7 25.1 19.1C26.2 18.8 27.1 17.9 27.4 16.8C28 14.6 28 10 28 10C28 10 28 5.4 27.4 3.2Z" fill="#FF0000"/>
              <path d="M11.2 14.3L18.5 10L11.2 5.7V14.3Z" fill="white"/>
            </svg>
            <span className="text-white text-xs font-medium">YouTube</span>
          </div>
        </>
      ) : (
        <>
          {/* Loading state while iframe loads */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mb-4"></div>
              <p className="text-white text-sm">Loading video...</p>
            </div>
          </div>

          {/* YouTube iframe */}
          <iframe
            ref={iframeRef}
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            onLoad={() => {
              // Hide loading state when iframe loads
              const loadingElement = containerRef.current?.querySelector('.animate-spin')?.parentElement?.parentElement;
              if (loadingElement) {
                (loadingElement as HTMLElement).style.display = 'none';
              }
            }}
            onError={handleIframeError}
          />
        </>
      )}
    </div>
  );
}