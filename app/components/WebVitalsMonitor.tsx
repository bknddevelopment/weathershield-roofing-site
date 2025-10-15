'use client'

import { useEffect } from 'react'

interface MetricData {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta?: number
  id: string
  navigationType?: string
}

const thresholds = {
  LCP: { good: 2500, poor: 4000 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 }
}

function getRating(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = thresholds[metric as keyof typeof thresholds]
  if (!threshold) return 'needs-improvement'

  if (value <= threshold.good) return 'good'
  if (value > threshold.poor) return 'poor'
  return 'needs-improvement'
}

export default function WebVitalsMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Only run in development or if explicitly enabled
    const isEnabled = process.env.NODE_ENV === 'development' ||
                     window.location.search.includes('debug=true')

    if (!isEnabled) return

    // Dynamically import web-vitals to avoid bundling in production
    import('web-vitals').then((webVitals) => {
      const logMetric = (metric: MetricData) => {
        const rating = getRating(metric.name, metric.value)
        const emoji = rating === 'good' ? '✅' : rating === 'poor' ? '❌' : '⚠️'

        // Log to console with color coding
        const color = rating === 'good' ? 'green' : rating === 'poor' ? 'red' : 'orange'
        console.log(
          `%c${emoji} ${metric.name}: ${metric.value.toFixed(2)}ms (${rating})`,
          `color: ${color}; font-weight: bold;`
        )

        // Send to analytics if available
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', metric.name, {
            value: Math.round(metric.value),
            metric_rating: rating,
            metric_delta: metric.delta,
            navigation_type: metric.navigationType
          })
        }

        // Store in sessionStorage for debugging
        const metrics = JSON.parse(sessionStorage.getItem('webVitals') || '{}')
        metrics[metric.name] = {
          value: metric.value,
          rating,
          timestamp: Date.now()
        }
        sessionStorage.setItem('webVitals', JSON.stringify(metrics))
      }

      // Observe all metrics
      webVitals.onLCP((metric) => logMetric({ ...metric, name: 'LCP' } as MetricData))
      webVitals.onCLS((metric) => logMetric({ ...metric, name: 'CLS' } as MetricData))
      webVitals.onFCP((metric) => logMetric({ ...metric, name: 'FCP' } as MetricData))
      webVitals.onTTFB((metric) => logMetric({ ...metric, name: 'TTFB' } as MetricData))
      webVitals.onINP((metric) => logMetric({ ...metric, name: 'INP' } as MetricData))

      // Log performance summary after page load
      window.addEventListener('load', () => {
        setTimeout(() => {
          const metrics = JSON.parse(sessionStorage.getItem('webVitals') || '{}')
          if (Object.keys(metrics).length > 0) {
            console.group('📊 Core Web Vitals Summary')
            Object.entries(metrics).forEach(([name, data]: [string, any]) => {
              const emoji = data.rating === 'good' ? '✅' : data.rating === 'poor' ? '❌' : '⚠️'
              console.log(`${emoji} ${name}: ${data.value.toFixed(2)}ms (${data.rating})`)
            })
            console.groupEnd()
          }
        }, 3000)
      })
    })

    // Performance Observer for additional metrics
    if ('PerformanceObserver' in window) {
      // Observe long tasks
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              console.warn(`⚠️ Long task detected: ${entry.duration.toFixed(2)}ms`)
            }
          }
        })
        longTaskObserver.observe({ entryTypes: ['longtask'] })
      } catch (e) {
        // Long task observer not supported
      }

      // Observe layout shifts
      try {
        const layoutShiftObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if ((entry as any).hadRecentInput) continue
            if ((entry as any).value > 0.01) {
              console.warn(`⚠️ Layout shift detected: ${(entry as any).value.toFixed(4)}`)
            }
          }
        })
        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] })
      } catch (e) {
        // Layout shift observer not supported
      }
    }

    // Log navigation timing
    if (window.performance && window.performance.timing) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const timing = window.performance.timing
          const navigation = {
            'DNS Lookup': timing.domainLookupEnd - timing.domainLookupStart,
            'TCP Connection': timing.connectEnd - timing.connectStart,
            'Request Time': timing.responseStart - timing.requestStart,
            'Response Time': timing.responseEnd - timing.responseStart,
            'DOM Processing': timing.domComplete - timing.domLoading,
            'Total Load Time': timing.loadEventEnd - timing.navigationStart
          }

          console.group('⏱️ Navigation Timing')
          Object.entries(navigation).forEach(([name, time]) => {
            const color = time < 100 ? 'green' : time < 500 ? 'orange' : 'red'
            console.log(`%c${name}: ${time}ms`, `color: ${color}`)
          })
          console.groupEnd()
        }, 0)
      })
    }

    // Monitor resource timing
    if (window.performance && window.performance.getEntriesByType) {
      window.addEventListener('load', () => {
        const resources = window.performance.getEntriesByType('resource')
        const slowResources = resources
          .filter((r: any) => r.duration > 500)
          .sort((a: any, b: any) => b.duration - a.duration)
          .slice(0, 5)

        if (slowResources.length > 0) {
          console.group('🐌 Slow Resources (>500ms)')
          slowResources.forEach((resource: any) => {
            const name = resource.name.split('/').pop() || resource.name
            console.log(`${name}: ${resource.duration.toFixed(2)}ms`)
          })
          console.groupEnd()
        }
      })
    }
  }, [])

  // No UI rendered - this is a monitoring component only
  return null
}

// Export a function to manually log metrics
export function logPerformanceMetric(name: string, value: number) {
  if (typeof window === 'undefined') return

  const rating = getRating(name, value)
  const emoji = rating === 'good' ? '✅' : rating === 'poor' ? '❌' : '⚠️'

  console.log(
    `%c${emoji} Custom Metric - ${name}: ${value.toFixed(2)}ms (${rating})`,
    `color: ${rating === 'good' ? 'green' : rating === 'poor' ? 'red' : 'orange'}; font-weight: bold;`
  )
}