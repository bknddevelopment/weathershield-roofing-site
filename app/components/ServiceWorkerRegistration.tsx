'use client'

import { useEffect } from 'react'

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Register service worker after page load for better performance
      window.addEventListener('load', () => {
        const swPath = process.env.NODE_ENV === 'production'
          ? '/weathershield-roofing-site/sw.js'
          : '/sw.js'

        navigator.serviceWorker
          .register(swPath)
          .then((registration) => {
            console.log('Service Worker registered successfully:', registration.scope)

            // Check for updates periodically
            setInterval(() => {
              registration.update()
            }, 60000) // Check every minute

            // Handle updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New service worker available, prompt for update
                    if (confirm('New version available! Reload to update?')) {
                      newWorker.postMessage({ type: 'SKIP_WAITING' })
                      window.location.reload()
                    }
                  }
                })
              }
            })
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error)
          })
      })
    }
  }, [])

  return null
}