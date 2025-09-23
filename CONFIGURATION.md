# WeatherShield Roofing - Configuration Guide

## 📁 Configuration Overview

This document details all configuration files and settings for the WeatherShield Roofing website. Understanding these configurations is essential for customization, deployment, and maintenance.

## ⚙️ Core Configuration Files

### 1. next.config.js
**Purpose**: Next.js framework configuration
**Location**: `/next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  // Static site generation
  output: 'export',

  // GitHub Pages path configuration
  basePath: isProd ? '/weathershield-roofing-site' : '',
  assetPrefix: isProd ? '/weathershield-roofing-site' : '',

  // Image optimization settings
  images: {
    unoptimized: true, // Required for static export
  },

  // URL structure
  trailingSlash: true, // Ensures proper routing on static hosts

  // React settings
  reactStrictMode: true, // Enables strict mode for better debugging

  // Build optimization
  swcMinify: true, // Use SWC for faster minification
}
```

**Key Settings Explained**:
- `output: 'export'`: Generates static HTML files for deployment
- `basePath`: URL prefix for GitHub Pages deployment
- `assetPrefix`: Ensures assets load from correct path
- `trailingSlash`: Prevents 404 errors on static hosting
- `reactStrictMode`: Helps identify potential problems

### 2. tailwind.config.ts
**Purpose**: Tailwind CSS framework configuration
**Location**: `/tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors (WCAG AA compliant)
        'weather-primary': '#008B8B',      // Teal - 4.52:1 contrast
        'weather-primary-dark': '#006666',  // Dark teal - 7.09:1 contrast
        'weather-secondary': '#2563EB',     // Blue - 4.54:1 contrast
        'weather-accent': '#6D28D9',        // Purple - 5.47:1 contrast

        // Status colors
        'weather-success': '#059669',       // Green - 4.54:1 contrast
        'weather-warning': '#D97706',       // Orange - 4.52:1 contrast
        'weather-danger': '#DC2626',        // Red - 4.53:1 contrast
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-oswald)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
```

**Customization Points**:
- `colors`: Brand color palette with accessibility in mind
- `fontFamily`: Typography system configuration
- `animation`: Custom animation utilities

### 3. tsconfig.json
**Purpose**: TypeScript compiler configuration
**Location**: `/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Important Settings**:
- `strict: true`: Enables all strict type checking options
- `paths`: Allows `@/` imports for cleaner code
- `incremental`: Speeds up subsequent builds

### 4. package.json
**Purpose**: Project dependencies and scripts
**Location**: `/package.json`

```json
{
  "name": "weather-shield-roofing",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",           // Development server
    "build": "next build",        // Production build
    "start": "next start",        // Production server
    "lint": "next lint"           // Code linting
  },
  "dependencies": {
    "next": "14.2.3",             // React framework
    "react": "^18",               // UI library
    "react-dom": "^18",           // React DOM
    "framer-motion": "^12.23.12", // Animations
    "lucide-react": "^0.378.0",   // Icons
    "web-vitals": "^5.1.0"        // Performance monitoring
  },
  "devDependencies": {
    "@types/node": "^20",         // Node.js types
    "@types/react": "^18",        // React types
    "@types/react-dom": "^18",    // React DOM types
    "autoprefixer": "^10.4.19",   // CSS vendor prefixes
    "eslint": "^8.57.1",          // Code linting
    "eslint-config-next": "^15.5.3", // Next.js ESLint config
    "postcss": "^8",              // CSS processing
    "tailwindcss": "^3.4.1",      // Utility CSS framework
    "typescript": "^5"            // TypeScript compiler
  }
}
```

### 5. .eslintrc.json
**Purpose**: ESLint linting rules
**Location**: `/.eslintrc.json`

```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off"
  }
}
```

### 6. postcss.config.js
**Purpose**: PostCSS configuration for CSS processing
**Location**: `/postcss.config.js`

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},    // Tailwind CSS processing
    autoprefixer: {},   // Automatic vendor prefixes
  },
}
```

## 🌐 GitHub Actions Configuration

### .github/workflows/deploy.yml
**Purpose**: Automated deployment to GitHub Pages
**Location**: `/.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]      # Triggers on push to main
  workflow_dispatch:        # Manual trigger option

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: 'npm'
      - run: npm ci
      - run: npm run build
        env:
          NODE_ENV: production
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

## 🎨 Theme & Design Configuration

### app/config/accessibility.ts
**Purpose**: Centralized accessibility configuration
**Location**: `/app/config/accessibility.ts`

```typescript
export const accessibilityConfig = {
  colors: {
    // WCAG AA compliant colors
    primary: '#008B8B',
    primaryDark: '#006666',
    secondary: '#2563EB',
    accent: '#6D28D9',

    // Contrast ratios
    minContrast: 4.5,      // WCAG AA for normal text
    minLargeTextContrast: 3, // WCAG AA for large text
  },

  focus: {
    color: '#D97706',       // Orange for visibility
    width: '3px',
    offset: '2px',
  },

  touch: {
    minSize: 44,            // Minimum touch target size (px)
  },

  animation: {
    respectMotionPreference: true,
  }
}
```

## 🔍 SEO Configuration

### Metadata Configuration (app/layout.tsx)
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://weathershieldroofers.com'),
  title: {
    default: 'WeatherShield Roofing - Professional Roofing Services in Myrtle Beach, SC',
    template: '%s | WeatherShield Roofing'
  },
  description: 'Professional roofing services in Myrtle Beach, SC...',
  keywords: ['roofing', 'myrtle beach', 'roof repair', ...],
  authors: [{ name: 'WeatherShield Roofing' }],
  creator: 'WeatherShield Roofing',
  publisher: 'WeatherShield Roofing',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://weathershieldroofers.com',
    siteName: 'WeatherShield Roofing',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'WeatherShield Roofing'
    }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'WeatherShield Roofing',
    description: 'Professional roofing services...',
    images: ['/images/twitter-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

### robots.txt Configuration
**Location**: `/public/robots.txt`

```txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://weathershieldroofers.com/sitemap.xml
```

## 🚀 Performance Configuration

### Service Worker Configuration
**Location**: `/public/sw.js`

```javascript
const CACHE_NAME = 'weathershield-v1.0.0';
const urlsToCache = [
  '/',
  '/styles/globals.css',
  '/images/logo.png',
  // Critical assets
];

// Cache strategies
const cacheStrategies = {
  cacheFirst: ['images', 'fonts'],
  networkFirst: ['api', 'dynamic'],
  staleWhileRevalidate: ['css', 'js'],
};
```

### Image Optimization Settings
```javascript
// LazyImage component configuration
const imageConfig = {
  lazy: true,
  quality: 85,
  formats: ['webp', 'avif'],
  sizes: {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
  },
  breakpoints: {
    mobile: 640,
    tablet: 768,
    desktop: 1024,
  }
}
```

## 🔐 Security Configuration

### Content Security Policy (CSP)
```javascript
// Add to next.config.js for CSP headers
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;"
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]
```

## 📝 Environment-Specific Configuration

### Development Environment
```bash
# .env.development (create if needed)
NODE_ENV=development
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=UA-XXXXXXXX-X
```

### Production Environment
```bash
# .env.production (create if needed)
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://weathershieldroofers.com
NEXT_PUBLIC_GA_ID=GA-XXXXXXXXX
```

## 🔄 Configuration Migration Guide

### Migrating to Custom Domain

1. **Update next.config.js**
```javascript
// Remove basePath and assetPrefix
const nextConfig = {
  output: 'export',
  // basePath: '', // Remove or comment out
  // assetPrefix: '', // Remove or comment out
  // ... rest of config
}
```

2. **Update metadata URLs**
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://yourcustomdomain.com'),
  // Update all URL references
}
```

3. **Update robots.txt**
```txt
Sitemap: https://yourcustomdomain.com/sitemap.xml
```

4. **Update JSON-LD data**
```typescript
// app/components/JsonLd.tsx
// Update all URL references to new domain
```

## 📊 Monitoring Configuration

### Google Analytics 4 Setup
```javascript
// Add to app/layout.tsx
<Script
  strategy="afterInteractive"
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
/>
<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
      });
    `,
  }}
/>
```

## 🎯 Configuration Best Practices

1. **Version Control**: Always commit configuration changes with descriptive messages
2. **Documentation**: Update this document when configuration changes
3. **Testing**: Test configuration changes locally before deployment
4. **Backup**: Keep backups of working configurations
5. **Environment Separation**: Use environment variables for sensitive data
6. **Validation**: Validate configuration files before deployment

## 📚 Additional Resources

- [Next.js Configuration](https://nextjs.org/docs/api-reference/next.config.js)
- [Tailwind Configuration](https://tailwindcss.com/docs/configuration)
- [TypeScript Configuration](https://www.typescriptlang.org/tsconfig)
- [GitHub Actions Configuration](https://docs.github.com/en/actions)

---

*Last Updated: September 22, 2025*
*Version: 1.0.0*

**Note**: Always test configuration changes in development before applying to production.