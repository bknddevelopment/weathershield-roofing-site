# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WeatherShield Roofing - A production-ready roofing company website built with Next.js 14, optimized for performance (95+ Lighthouse), accessibility (WCAG AA), and SEO.

**Live URL:** https://charwinvanryckdegroot.github.io/weathershield-roofing-site/

## Essential Commands

```bash
# Development
npm run dev          # Start dev server (usually localhost:3000, may use 3001+ if port busy)
npm run build        # Build for production (static export) - ALWAYS run before deployment
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
- Uses Next.js 14 App Router with **static export** (`output: 'export'`)
- All pages are **statically generated** at build time
- **No server-side rendering or API routes** - pure static site
- Images are unoptimized for static hosting compatibility
- **No basePath** needed - site deploys to custom domain (not /weathershield-roofing-site/)

### Component Architecture
- **Page Templates**: `ServicePageTemplate` and `LocationPageTemplate` provide consistent structure
- **Lazy Loading**: Components use `dynamic()` imports for performance
  - Example: `OptimizedEmergencyHero`, `OptimizedEmergencyServices`
- **Image Components**: Custom `ResponsiveImage`, `LazyImage`, and `OptimizedImage` wrappers
- **Trust Indicators**: Reusable `TrustIndicators` component with emergency variant support
- **Emergency Components**: Specialized components in `/app/components/emergency/` and `/app/emergency/`

### Styling System
- **Tailwind CSS** with custom weather-shield color palette (see `tailwind.config.ts`)
- **WCAG AA Compliant Colors**: All colors meet 4.5:1 contrast ratio
- **Typography**: 4 Google Fonts via Next.js font optimization:
  - Montserrat (headings)
  - Inter (body text)
  - Source Sans 3 (alternative body)
  - Bebas Neue (impact statements)
- **Mobile-First**: All components designed mobile-first with responsive breakpoints

### SEO & Performance Strategy
- **Schema Markup**: Comprehensive JSON-LD for LocalBusiness, Organization, Services
- **Meta Tags**: Dynamic generation in each page.tsx with emergency keyword optimization
- **Sitemaps**: Multiple sitemaps including `sitemap-emergency.xml`
- **Core Web Vitals**: `WebVitalsMonitor` component tracks LCP, CLS, INP
- **Service Workers**: Progressive enhancement (`sw.js` and `sw-optimized.js`)
- **Code Splitting**: Dynamic imports reduce initial bundle size

## Form & Contact Integration

- **Primary Phone**: **(843) 877-5539** - ALWAYS use this number across all pages
- **Form Webhook**: https://n8n.weathershieldroofers.com/webhook/weathershield-roofing-form-submissions
- **Real Working Forms**: Only `/quote` and `/free-inspection` connect to n8n webhook
- **Google Business**: Reviews and ratings integration

### CRITICAL: Business Rules (Must Follow)

1. **NO FAKE FORMS**: All forms MUST connect to the n8n webhook or be phone CTAs only
   - Never create forms that use `console.log()` or `alert()` instead of real submission
   - If a form doesn't submit to n8n, replace with phone CTA to (843) 877-5539

2. **NO PRICING INFORMATION**: Never display specific prices
   - ❌ Wrong: "$750 OFF", "$8,000-$15,000", "Starting at $5,000"
   - ✅ Correct: "Special Offer", "Competitive Pricing", "Contact for Quote"
   - Reason: Pricing creates legal liability if customers expect website prices

3. **NO RESPONSE TIME PROMISES**: Never promise specific response times
   - ❌ Wrong: "2-hour response guaranteed", "47-minute average", "same-day service"
   - ✅ Correct: "Rapid response", "24/7 availability", "Emergency service"
   - Reason: Overpromising creates service expectations that may not be met

4. **CONSISTENT PHONE NUMBER**: Always use **(843) 877-5539**
   - Check all: CTAs, headers, footers, emergency components, promotional banners
   - Never use (843) 293-8150 - this is an old/incorrect number

5. **CHARLESTON FOCUS**: Service area is Charleston, SC (not Myrtle Beach)
   - Update location references in metadata, schema, content
   - Target cities: Charleston, Mount Pleasant, Summerville, North Charleston, etc.

## Critical Files & Their Purpose

### Configuration
- **next.config.js**: Static export, security headers, CSP policy, images unoptimized
- **tailwind.config.ts**: Custom design system with weather-shield colors, accessibility
- **tsconfig.json**: TypeScript strict mode configuration

### Layout & Global
- **app/layout.tsx**: Root layout, global metadata, fonts, Header/Footer components
- **app/globals.css**: Global styles, Tailwind directives, custom CSS

### Components
- **app/components/Header.tsx**: Navigation, mobile menu, emergency CTAs
- **app/components/Footer.tsx**: Contact info, service links, trust badges
- **app/components/PromotionalBanner.tsx**: Top banner (currently "October Deal", NO pricing)
- **app/components/FreeInspectionForm.tsx**: Real form connecting to n8n webhook

### Emergency Pages (High Priority)
- **app/emergency/page.tsx**: Main emergency landing page
- **app/emergency/EmergencyHero.tsx**: Hero section with phone CTA
- **app/emergency/EmergencyServices.tsx**: Service grid
- **app/emergency/EmergencyCTA.tsx**: Call-to-action sections
- **app/components/emergency/**: Shared emergency components (LiveAvailability, EmergencyContactBar, EmergencySchema)

### Service Workers
- **public/sw.js**: Basic service worker for offline capability
- **public/sw-optimized.js**: Enhanced service worker with intelligent caching

## Pages Removed (Do Not Recreate)

- `/same-day-roof-repair-charleston` - We don't offer same-day service
- `/roof-replacement-cost-charleston` - Contained pricing information

## Deployment & CI/CD

- **GitHub Pages**: Automatic deployment on push to `main` branch
- **Workflow**: `.github/workflows/deploy.yml`
- **Build Output**: Static files in `/out` directory
- **CNAME**: Copied during build for custom domain support
- **No Jekyll**: `.nojekyll` file prevents GitHub Pages from running Jekyll

## Testing & Quality

- **Jest**: Unit testing framework configured
- **ESLint**: Next.js recommended rules + custom rules
- **TypeScript**: Strict mode enabled (`strict: true`)
- **Build Verification**: Always run `npm run build` before deployment

## Performance Targets

- **Lighthouse**: 95+ across all metrics
- **Bundle Size**: < 200KB gzipped
- **LCP**: < 2.5s
- **CLS**: < 0.1
- **First Load JS**: < 120KB for most pages

## Common Development Tasks

### Adding a New Page
1. Create in appropriate directory (`/app/[page-name]/page.tsx`)
2. Add metadata export with SEO-optimized title/description
3. Use correct phone number: (843) 877-5539
4. Add to sitemap if needed
5. Test build: `npm run build`

### Updating Contact Information
1. Search codebase for old phone numbers
2. Update in: Header, Footer, CTAs, emergency components, promotional banners
3. Verify in metadata and schema markup
4. Test all links: `href="tel:8438775539"`

### Removing/Replacing Fake Forms
1. Identify form with `console.log` or `alert` instead of n8n submission
2. Replace with phone CTA to (843) 877-5539
3. Or redirect to `/quote` page (real n8n form)
4. Remove unused form component and imports

## Known Non-Critical Warnings

- ESLint warnings about Google Font preconnect (Next.js handles this)
- Metadata viewport warnings (being migrated to viewport export)
- ref cleanup warnings in TrustIndicators (non-breaking)

## Before Every Deployment

1. ✅ Run `npm run build` - verify 0 errors
2. ✅ Check phone numbers are (843) 877-5539
3. ✅ Verify no pricing information displayed
4. ✅ Confirm no response time promises
5. ✅ Test forms submit to n8n or redirect to phone/quote
6. ✅ Review emergency pages for Charleston (not Myrtle Beach)
