# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WeatherShield Roofing - A production-ready roofing company website built with Next.js 14, optimized for performance (95+ Lighthouse), accessibility (WCAG AA), and SEO.

**Live URL:** https://charwinvanryckdegroot.github.io/weathershield-roofing-site/

## Essential Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000
npm run build        # Build for production (static export)
npm run lint         # Run ESLint
npm test            # Run Jest tests
npm test:watch      # Run tests in watch mode
npm test:coverage   # Generate test coverage report

# Deployment
npm run deploy      # Build and prepare for GitHub Pages
git push origin main # Auto-deploys via GitHub Actions
```

## Architecture & Key Design Patterns

### Next.js App Router Structure
- Uses Next.js 14 App Router with static export (`output: 'export'`)
- All pages are statically generated at build time
- No server-side rendering or API routes - pure static site
- Images are unoptimized for static hosting compatibility

### Component Architecture
- **Page Templates**: `ServicePageTemplate` and `LocationPageTemplate` provide consistent structure
- **Lazy Loading**: Components use dynamic imports for performance (`OptimizedEmergencyHero`, `OptimizedEmergencyServices`)
- **Image Optimization**: Custom `ResponsiveImage`, `LazyImage`, and `OptimizedImage` components
- **Trust Indicators**: Reusable `TrustIndicators` component with emergency variant support

### Styling System
- **Tailwind CSS** with custom weather-shield color palette
- **WCAG AA Compliant Colors**: All colors meet accessibility standards (4.5:1 contrast ratio)
- **Typography**: 4 Google Fonts loaded via Next.js font optimization:
  - Montserrat (headings)
  - Inter (body text)
  - Source Sans 3 (alternative body)
  - Bebas Neue (impact statements)

### SEO & Performance Strategy
- **Schema Markup**: Comprehensive JSON-LD structured data for LocalBusiness, Organization, Services
- **Meta Tags**: Dynamic generation in page.tsx files with emergency keyword optimization
- **Sitemaps**: Multiple sitemaps including emergency-specific (sitemap-emergency.xml)
- **Core Web Vitals**: WebVitalsMonitor component for tracking LCP, CLS, INP
- **Service Worker**: Progressive enhancement with offline support

### Emergency Services Integration
- **Phase I SEO Implementation**: High-CTR emergency keywords fully integrated
- **/emergency** page: Optimized landing page with 24/7 messaging
- **/emergency-optimized**: Performance-optimized variant (<2s load on 4G)
- **n8n Webhook**: Form submissions route to https://n8n.weathershieldroofers.com/webhook/

### Multi-Language Support
- Spanish version available at `/es` route
- Language-specific components and content

## Critical Files & Their Purpose

- **app/layout.tsx**: Root layout with global metadata, fonts, header/footer
- **app/components/Header.tsx**: Navigation with mobile menu, emergency CTAs
- **app/components/Footer.tsx**: Contact info, service links, trust badges
- **next.config.js**: Static export configuration, no basePath needed for custom domain
- **tailwind.config.ts**: Custom design system with weather-shield colors
- **public/sw.js**: Service worker for offline functionality
- **public/sw-optimized.js**: Enhanced service worker with intelligent caching

## Form & Contact Integration

- **Primary Phone**: (843) 293-8150
- **Secondary Phone**: (843) 877-5539
- **Form Webhook**: https://n8n.weathershieldroofers.com/webhook/weathershield-roofing-form-submissions
- **Google Business**: Reviews and ratings integration

## Deployment Notes

- Deploys automatically to GitHub Pages on push to `main` branch
- Uses GitHub Actions workflow (.github/workflows/deploy.yml)
- Static files served from custom domain (no /weathershield-roofing-site/ prefix)
- CNAME file copied during build for custom domain support

## Performance Optimizations

- Code splitting with dynamic imports
- Lazy loading for below-fold content
- WebP/AVIF image formats with fallbacks
- Reduced JavaScript bundle (55% reduction achieved)
- Service worker caching strategies
- Optimized font loading with preconnect

## Testing & Quality

- Jest configured for unit testing
- ESLint with Next.js recommended rules
- TypeScript strict mode enabled
- Build-time type checking
- Lighthouse CI integration possible

## Recent SEO Enhancements

### Phase I Keywords (Completed)
- Emergency service keywords (35-45% CTR potential)
- Cost/pricing keywords (25-35% CTR potential)
- Hyperlocal targeting for 20+ neighborhoods
- Commercial/B2B keywords
- Insurance-related keywords

### Files Created for SEO
- `/app/emergency/`: Full emergency landing page system
- `seo-missing-keywords-analysis.md`: 100 keyword opportunities
- `SEO-OPTIMIZATION-REPORT.md`: Implementation audit
- `PERFORMANCE_OPTIMIZATION_REPORT.md`: Speed improvements

## Known Issues & Warnings

- ESLint warnings about Google Font preconnect (non-breaking)
- Some viewport/colorScheme metadata warnings (being migrated to viewport export)
- ref cleanup warnings in TrustIndicators components (non-critical)