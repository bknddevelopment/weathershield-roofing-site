'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    webVitals?: {
      LCP?: number
      FID?: number
      CLS?: number
      FCP?: number
      TTFB?: number
      INP?: number
    }
    gtag?: (...args: any[]) => void
  }
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Initialize web vitals object
    window.webVitals = {}

    // Helper function to send metrics to analytics
    const sendToAnalytics = (metric: any) => {
      const { name, value, id } = metric

      // Store in window object for debugging
      if (window.webVitals) {
        window.webVitals[name as keyof typeof window.webVitals] = value
      }

      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${name}:`, value.toFixed(2), 'ms')

        // Performance warnings
        if (name === 'LCP' && value > 2500) {
          console.warn('[Performance] LCP is above 2.5s threshold')
        }
        if (name === 'FID' && value > 100) {
          console.warn('[Performance] FID is above 100ms threshold')
        }
        if (name === 'CLS' && value > 0.1) {
          console.warn('[Performance] CLS is above 0.1 threshold')
        }
        if (name === 'FCP' && value > 1800) {
          console.warn('[Performance] FCP is above 1.8s threshold')
        }
        if (name === 'TTFB' && value > 800) {
          console.warn('[Performance] TTFB is above 800ms threshold')
        }
      }

      // Send to analytics in production
      if (typeof window.gtag !== 'undefined' && window.gtag) {
        window.gtag('event', name, {
          value: Math.round(name === 'CLS' ? value * 1000 : value),
          metric_id: id,
          metric_value: value,
          metric_delta: value,
        })
      }
    }

    // Dynamically import web-vitals to reduce initial bundle size
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS(sendToAnalytics)
      onFCP(sendToAnalytics)
      onLCP(sendToAnalytics)
      onTTFB(sendToAnalytics)
      onINP(sendToAnalytics)
    })

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              if (process.env.NODE_ENV === 'development') {
                console.warn('[Performance] Long task detected:', entry.duration.toFixed(2), 'ms')
              }
            }
          }
        })
        observer.observe({ entryTypes: ['longtask'] })

        return () => observer.disconnect()
      } catch (e) {
        // PerformanceObserver not supported
      }
    }
  }, [])

  // Performance debugging overlay in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50 hidden lg:block">
        <div className="text-yellow-400 mb-2">Web Vitals</div>
        <div id="web-vitals-display" className="space-y-1">
          <div>LCP: <span id="lcp-value">-</span></div>
          <div>FID: <span id="fid-value">-</span></div>
          <div>CLS: <span id="cls-value">-</span></div>
          <div>FCP: <span id="fcp-value">-</span></div>
          <div>TTFB: <span id="ttfb-value">-</span></div>
        </div>
        <script dangerouslySetInnerHTML={{
          __html: `
            setInterval(() => {
              if (window.webVitals) {
                document.getElementById('lcp-value').textContent = window.webVitals.LCP ? window.webVitals.LCP.toFixed(0) + 'ms' : '-';
                document.getElementById('fid-value').textContent = window.webVitals.FID ? window.webVitals.FID.toFixed(0) + 'ms' : '-';
                document.getElementById('cls-value').textContent = window.webVitals.CLS ? window.webVitals.CLS.toFixed(3) : '-';
                document.getElementById('fcp-value').textContent = window.webVitals.FCP ? window.webVitals.FCP.toFixed(0) + 'ms' : '-';
                document.getElementById('ttfb-value').textContent = window.webVitals.TTFB ? window.webVitals.TTFB.toFixed(0) + 'ms' : '-';
              }
            }, 1000);
          `
        }} />
      </div>
    )
  }

  return null
}