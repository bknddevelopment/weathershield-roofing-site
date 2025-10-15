// Optimized Service Worker for Weather Shield Roofing
const CACHE_VERSION = 'v2.0.0'
const STATIC_CACHE = `static-${CACHE_VERSION}`
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`
const IMAGE_CACHE = `images-${CACHE_VERSION}`

// Critical assets to cache immediately
const CRITICAL_ASSETS = [
  '/',
  '/emergency/',
  '/manifest.json',
  '/favicon-right.png',
]

// Runtime caching strategies
const CACHE_STRATEGIES = {
  // Network first for HTML pages (always get fresh content)
  networkFirst: [
    /\/$/,
    /\.html$/,
    /\/emergency\/?$/,
  ],
  // Cache first for static assets
  cacheFirst: [
    /\.(?:css|js)$/,
    /fonts\.(?:googleapis|gstatic)\.com/,
    /\/_next\/static\//,
  ],
  // Stale while revalidate for images
  staleWhileRevalidate: [
    /\.(?:png|jpg|jpeg|webp|avif|svg|gif|ico)$/,
    /\/images\//,
  ],
}

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      // Only cache critical assets during install
      return cache.addAll(CRITICAL_ASSETS.map(url => {
        const basePath = self.location.pathname.includes('/weathershield-roofing-site')
          ? '/weathershield-roofing-site'
          : ''
        return url === '/' ? basePath + '/' : basePath + url
      }))
    })
  )
  // Skip waiting to activate immediately
  self.skipWaiting()
})

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            // Delete old version caches
            return (cacheName.startsWith('static-') ||
                   cacheName.startsWith('dynamic-') ||
                   cacheName.startsWith('images-')) &&
                   cacheName !== STATIC_CACHE &&
                   cacheName !== DYNAMIC_CACHE &&
                   cacheName !== IMAGE_CACHE
          })
          .map((cacheName) => caches.delete(cacheName))
      )
    })
  )
  // Take control of all clients immediately
  self.clients.claim()
})

// Fetch event - implement cache strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip chrome extensions and dev server
  if (url.protocol === 'chrome-extension:' || url.hostname === 'localhost') return

  // Skip admin and API routes
  if (url.pathname.includes('/api/') || url.pathname.includes('/admin')) return

  // Determine cache strategy
  const strategy = determineStrategy(url, request)

  if (strategy === 'networkFirst') {
    event.respondWith(networkFirst(request))
  } else if (strategy === 'cacheFirst') {
    event.respondWith(cacheFirst(request))
  } else if (strategy === 'staleWhileRevalidate') {
    event.respondWith(staleWhileRevalidate(request))
  }
})

// Determine which caching strategy to use
function determineStrategy(url, request) {
  for (const [strategy, patterns] of Object.entries(CACHE_STRATEGIES)) {
    for (const pattern of patterns) {
      if (pattern.test(url.href) || pattern.test(url.pathname)) {
        return strategy
      }
    }
  }
  // Default to network first for unknown resources
  return 'networkFirst'
}

// Network-first strategy (for HTML)
async function networkFirst(request) {
  const cache = await caches.open(DYNAMIC_CACHE)

  try {
    const networkResponse = await fetch(request, {
      // Add timeout for slow networks
      signal: AbortSignal.timeout(5000)
    })

    if (networkResponse.ok) {
      // Clone response before caching
      cache.put(request, networkResponse.clone())
    }

    return networkResponse
  } catch (error) {
    // Fall back to cache if network fails
    const cachedResponse = await cache.match(request)

    if (cachedResponse) {
      return cachedResponse
    }

    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      const offlinePage = await cache.match('/')
      if (offlinePage) return offlinePage
    }

    // Return a basic error response
    return new Response('Network error occurred', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' }
    })
  }
}

// Cache-first strategy (for static assets)
async function cacheFirst(request) {
  const cache = await caches.open(STATIC_CACHE)
  const cached = await cache.match(request)

  if (cached) {
    // Return from cache immediately
    return cached
  }

  try {
    const networkResponse = await fetch(request)

    if (networkResponse.ok) {
      // Cache successful responses
      cache.put(request, networkResponse.clone())
    }

    return networkResponse
  } catch (error) {
    // Return a placeholder for failed requests
    return new Response('Resource not available', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    })
  }
}

// Stale-while-revalidate strategy (for images)
async function staleWhileRevalidate(request) {
  const cache = await caches.open(IMAGE_CACHE)
  const cached = await cache.match(request)

  // Fetch in background to update cache
  const fetchPromise = fetch(request)
    .then(response => {
      if (response.ok) {
        cache.put(request, response.clone())
      }
      return response
    })
    .catch(() => {
      // If fetch fails, return cached or placeholder
      return cached || new Response('', { status: 404 })
    })

  // Return cached immediately if available, otherwise wait for network
  return cached || fetchPromise
}

// Message handler for cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }

  if (event.data && event.data.type === 'CLEAN_CACHE') {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        )
      })
    )
  }

  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE).then(cache => {
        return cache.addAll(event.data.urls)
      })
    )
  }
})

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'emergency-form-sync') {
    event.waitUntil(syncEmergencyForms())
  }
})

async function syncEmergencyForms() {
  // Implement form sync logic here
  console.log('Syncing emergency forms...')
}