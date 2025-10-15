// Service Worker for Weather Shield Roofing
const CACHE_VERSION = 'v1.0.0'
const STATIC_CACHE = `static-${CACHE_VERSION}`
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`
const IMAGE_CACHE = `images-${CACHE_VERSION}`

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/favicon-right.png',
]

// Cache strategies
const CACHE_STRATEGIES = {
  cacheFirst: [
    /\.(?:css|js)$/,
    /fonts\.(?:googleapis|gstatic)\.com/,
  ],
  networkFirst: [
    /^https?:\/\/[^\/]+\/$/,
    /\/api\//,
  ],
  cacheOnly: [
    /\.(?:woff2?|ttf|otf|eot)$/,
  ],
  staleWhileRevalidate: [
    /\.(?:png|jpg|jpeg|webp|avif|svg|gif|ico)$/,
  ],
}

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS.map(url => {
        // Handle GitHub Pages path
        const basePath = self.location.pathname.includes('/weathershield-roofing-site')
          ? '/weathershield-roofing-site'
          : ''
        return url === '/' ? basePath + '/' : basePath + url
      }))
    })
  )
  self.skipWaiting()
})

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName.startsWith('static-') ||
                   cacheName.startsWith('dynamic-') ||
                   cacheName.startsWith('images-')
          })
          .filter((cacheName) => {
            return cacheName !== STATIC_CACHE &&
                   cacheName !== DYNAMIC_CACHE &&
                   cacheName !== IMAGE_CACHE
          })
          .map((cacheName) => caches.delete(cacheName))
      )
    })
  )
  self.clients.claim()
})

// Fetch event - implement cache strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip chrome extensions
  if (url.protocol === 'chrome-extension:') return

  // Determine cache strategy
  const strategy = determineStrategy(url, request)

  switch (strategy) {
    case 'cacheFirst':
      event.respondWith(cacheFirst(request))
      break
    case 'networkFirst':
      event.respondWith(networkFirst(request))
      break
    case 'cacheOnly':
      event.respondWith(cacheOnly(request))
      break
    case 'staleWhileRevalidate':
      event.respondWith(staleWhileRevalidate(request))
      break
    default:
      event.respondWith(networkFirst(request))
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
  return 'networkFirst'
}

// Cache-first strategy
async function cacheFirst(request) {
  const cache = await caches.open(STATIC_CACHE)
  const cached = await cache.match(request)

  if (cached) {
    return cached
  }

  try {
    const response = await fetch(request)
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    return caches.match('/offline.html')
  }
}

// Network-first strategy
async function networkFirst(request) {
  const cache = await caches.open(DYNAMIC_CACHE)

  try {
    const response = await fetch(request)
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    const cached = await cache.match(request)
    if (cached) {
      return cached
    }
    return caches.match('/offline.html')
  }
}

// Cache-only strategy
async function cacheOnly(request) {
  const cache = await caches.open(STATIC_CACHE)
  const cached = await cache.match(request)

  if (cached) {
    return cached
  }

  // If not in cache, try to fetch and cache it
  try {
    const response = await fetch(request)
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    return new Response('Resource not available', { status: 404 })
  }
}

// Stale-while-revalidate strategy for images
async function staleWhileRevalidate(request) {
  const cache = await caches.open(IMAGE_CACHE)
  const cached = await cache.match(request)

  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  })

  return cached || fetchPromise
}

// Message handler for cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }

  if (event.data && event.data.type === 'CLEAN_CACHE') {
    caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        caches.delete(cacheName)
      })
    })
  }
})