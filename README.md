# WeatherShield Roofing Website

[![WCAG 2.1 AA Compliant](https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-green)](./ACCESSIBILITY_REPORT.md)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-95%2B-brightgreen)](./PERFORMANCE_OPTIMIZATIONS.md)

Professional, production-ready roofing company website for WeatherShield in Myrtle Beach, SC. Built with Next.js 14, fully optimized for performance, accessibility, and SEO.

## 🚀 Production Status

**Version:** 1.0.0
**Status:** Production Ready
**Repository:** [https://github.com/BKND-Development/WeatherShieldRoofing](https://github.com/BKND-Development/WeatherShieldRoofing)
**Last Updated:** October 2025

## ✨ Features

### Core Functionality
- 🏠 **8 Specialized Service Pages** - Comprehensive roofing services coverage
- 📍 **8 Location Pages** - Local SEO optimized for Myrtle Beach area
- 🎨 **Accessible Design System** - WCAG AA compliant color scheme
- 📱 **Fully Responsive** - Mobile-first, tested on all devices
- ⚡ **Optimized Performance** - 95+ Lighthouse score, <2s load time
- 🔍 **Advanced SEO** - Schema markup, meta tags, sitemap, robots.txt
- ♿ **Full Accessibility** - WCAG 2.1 AA compliant
- 🚨 **Emergency CTAs** - 24/7 contact widget, prominent emergency services
- 💳 **Trust Indicators** - Payment options, review platforms integration
- 🎯 **Core Web Vitals** - Optimized LCP, FID, and CLS metrics

### Production Features
- ✅ Static site generation for optimal performance
- ✅ GitHub Pages deployment with CI/CD
- ✅ Service Worker for offline capability
- ✅ Image optimization with lazy loading
- ✅ Code splitting and dynamic imports
- ✅ Comprehensive error handling
- ✅ Performance monitoring integration
- ✅ Security headers configured
- ✅ Canonical URLs and Open Graph tags
- ✅ Mobile-optimized touch targets

## Pages Structure

### Service Pages
- Residential Roofing
- Commercial Roofing
- Roof Repair
- Roof Replacement
- Emergency Services
- Storm Damage Repair
- Roof Inspections
- Gutter Services

### Location Pages
- Myrtle Beach
- North Myrtle Beach
- Conway
- Surfside Beach
- Garden City
- Pawleys Island
- Carolina Forest
- Socastee

### Main Pages
- Home
- Services
- Locations
- About
- Contact
- Gallery
- Financing
- Reviews

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended: 20.x)
- npm 9+
- Git

### Installation

1. **Clone the repository**
```bash
git clone git@github.com:BKND-Development/WeatherShieldRoofing.git
cd WeatherShieldRoofing
```

2. **Install dependencies**
```bash
npm ci  # Use ci for exact dependency versions
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deployment

### Local Build
```bash
# Build for production
npm run build

# Test production build locally
npx serve out -l 3000
```

### Deployment

The site can be deployed to any static hosting provider.

```bash
# Deploy to production
git add .
git commit -m "Your commit message"
git push origin main
```

### Manual Deployment

For manual deployment to other platforms:

```bash
# Build static site
npm run build

# Output directory: ./out
# Upload contents of ./out to your hosting provider
```

## 🛠 Technology Stack

### Core Technologies
- **Framework**: Next.js 14.2.3 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React
- **Animations**: Framer Motion 12.x
- **Performance**: Web Vitals monitoring

### Build & Deployment
- **Build Tool**: Next.js with SWC
- **Static Generation**: Next.js Export
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages
- **CDN**: GitHub Pages CDN

### Development Tools
- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript strict mode
- **Package Manager**: npm
- **Version Control**: Git

## 📁 Project Structure

```
weathershield-roofing-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
├── app/
│   ├── components/             # Reusable UI components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── HeroSection.tsx     # Homepage hero
│   │   ├── LazyImage.tsx       # Optimized image loading
│   │   ├── JsonLd.tsx          # SEO structured data
│   │   └── PerformanceMonitor.tsx # Web Vitals tracking
│   ├── config/
│   │   └── accessibility.ts    # WCAG color configuration
│   ├── services/               # Service pages (8 routes)
│   │   ├── residential-roofing/
│   │   ├── commercial-roofing/
│   │   ├── roof-repair/
│   │   ├── roof-replacement/
│   │   ├── emergency-services/
│   │   ├── storm-damage-repair/
│   │   ├── roof-inspections/
│   │   └── gutter-services/
│   ├── locations/              # Location pages (8 routes)
│   │   ├── myrtle-beach/
│   │   ├── north-myrtle-beach/
│   │   ├── conway/
│   │   ├── surfside-beach/
│   │   ├── garden-city/
│   │   ├── pawleys-island/
│   │   ├── carolina-forest/
│   │   └── socastee/
│   ├── lib/                    # Shared utilities
│   ├── utils/                  # Helper functions
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Homepage
├── public/
│   ├── images/                 # Static images
│   ├── sw.js                   # Service Worker
│   ├── robots.txt              # SEO robots file
│   └── sitemap.xml             # XML sitemap
├── scripts/                    # Build and utility scripts
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🌍 Environment Variables

No environment variables are required for basic operation. The site uses the following configuration:

```javascript
// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  basePath: isProd ? '/weathershield-roofing-site' : '',
  assetPrefix: isProd ? '/weathershield-roofing-site' : '',
  // ... other config
}
```

## 🎯 Performance Metrics

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 98+
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals
- **LCP**: < 2.5s (Good)
- **FID**: < 100ms (Good)
- **CLS**: < 0.1 (Good)

### Page Load Performance
- **First Contentful Paint**: < 1.8s
- **Time to Interactive**: < 3.8s
- **Speed Index**: < 3.4s
- **Total Bundle Size**: < 200KB (gzipped)

See [PERFORMANCE_OPTIMIZATIONS.md](./PERFORMANCE_OPTIMIZATIONS.md) for detailed optimization information.

## ♿ Accessibility

**WCAG 2.1 Level AA Compliant**

- ✅ Color contrast ratios meet AA standards
- ✅ Keyboard navigation fully supported
- ✅ Screen reader compatible
- ✅ ARIA landmarks and labels
- ✅ Focus indicators visible
- ✅ Mobile touch targets optimized

See [ACCESSIBILITY_REPORT.md](./ACCESSIBILITY_REPORT.md) for full compliance details.

## 🔍 SEO Features

- ✅ Canonical URLs on all pages
- ✅ Open Graph and Twitter Card meta tags
- ✅ JSON-LD structured data (LocalBusiness, Organization)
- ✅ XML sitemap generation
- ✅ Optimized robots.txt
- ✅ Meta descriptions and titles
- ✅ Schema markup for services and locations
- ✅ Mobile-friendly responsive design

See [SEO_AUDIT_REPORT.md](./SEO_AUDIT_REPORT.md) for SEO implementation details.

## 🔧 Maintenance

### Regular Tasks

#### Weekly
- Monitor GitHub Actions for deployment status
- Check Lighthouse scores
- Review Core Web Vitals

#### Monthly
- Update dependencies: `npm update`
- Run security audit: `npm audit`
- Review accessibility compliance
- Update content as needed

#### Quarterly
- Full SEO audit
- Performance benchmark testing
- Cross-browser compatibility testing
- Mobile device testing

### Updating Content

1. **Service Pages**: Edit files in `/app/services/[service-name]/page.tsx`
2. **Location Pages**: Edit files in `/app/locations/[location-name]/page.tsx`
3. **Contact Info**: Update in `/app/layout.tsx` and component files
4. **Images**: Add to `/public/images/` and update references

## 🐛 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm ci
npm run build
```

#### Images Not Loading
- Ensure images are in `/public/images/`
- Use correct path: `/images/filename.jpg`
- Check image optimization in `next.config.js`

#### Deploy Not Triggering
- Verify GitHub Actions is enabled
- Check workflow status at Actions tab
- Ensure pushing to `main` branch

#### Style Issues
```bash
# Rebuild Tailwind CSS
npm run build
# Clear browser cache
```

## 📞 Contact Information

**WeatherShield Roofing**
- **Phone**: (843) 493-4963
- **Email**: roofing@weathershieldroofers.com
- **Address**: 123 Business Park Dr, Myrtle Beach, SC 29577
- **Website**: [weathershieldroofers.com](https://weathershieldroofers.com)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

© 2025 WeatherShield Roofing. All rights reserved.

This is proprietary software. Unauthorized copying, modification, or distribution is prohibited.
