#!/bin/bash

# SEO Fixes Script for WeatherShield Roofing
# This script contains all the necessary fixes for SEO issues identified in the audit

echo "Starting SEO fixes for WeatherShield Roofing..."

# Fix 1: Update metadataBase URL to match sitemap and robots.txt
echo "Fix 1: Updating metadataBase URL..."
cat << 'EOF'
In app/layout.tsx, change:
  metadataBase: new URL('https://weathershieldroofing.com'),
To:
  metadataBase: new URL('https://weathershieldroofers.com'),
EOF

# Fix 2: Add canonical URLs to all service pages
echo -e "\nFix 2: Add canonical URLs to service pages..."
cat << 'EOF'
For each service page, add to metadata:
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/[service-name]',
  },

Service pages to update:
- /app/services/commercial-roofing/page.tsx
- /app/services/emergency-roofing/page.tsx
- /app/services/gutter-services/page.tsx
- /app/services/roof-inspections/page.tsx
- /app/services/roof-maintenance/page.tsx
- /app/services/roof-repair/page.tsx
- /app/services/siding-installation/page.tsx
- /app/services/storm-damage/page.tsx
- /app/services/page.tsx
EOF

# Fix 3: Add canonical URLs to location pages
echo -e "\nFix 3: Add canonical URLs to location pages..."
cat << 'EOF'
For each location page, update metadata to include:
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/[city-name]',
  },

Location pages to update:
- /app/locations/conway/page.tsx
- /app/locations/georgetown/page.tsx
- /app/locations/florence/page.tsx
- /app/locations/north-myrtle-beach/page.tsx
- /app/locations/socastee/page.tsx
- /app/locations/aynor/page.tsx
- /app/locations/loris/page.tsx
- /app/locations/hemingway/page.tsx
EOF

# Fix 4: Create missing Myrtle Beach location page
echo -e "\nFix 4: Create Myrtle Beach location page..."
cat << 'EOF'
Create new file: /app/locations/myrtle-beach/page.tsx
This is the main service area and should be created to match sitemap.xml
EOF

# Fix 5: Add canonical URLs to other main pages
echo -e "\nFix 5: Add canonical URLs to main pages..."
cat << 'EOF'
Pages needing canonical URLs:
- /app/about/page.tsx - canonical: 'https://weathershieldroofers.com/about'
- /app/gallery/page.tsx - canonical: 'https://weathershieldroofers.com/gallery'
- /app/reviews/page.tsx - canonical: 'https://weathershieldroofers.com/reviews'
- /app/financing/page.tsx - canonical: 'https://weathershieldroofers.com/financing'
- /app/quote/page.tsx - canonical: 'https://weathershieldroofers.com/quote'
- /app/blog/page.tsx - canonical: 'https://weathershieldroofers.com/blog'
EOF

# Fix 6: Update Open Graph images to use absolute URLs
echo -e "\nFix 6: Update Open Graph images..."
cat << 'EOF'
In app/layout.tsx, update OpenGraph images to use absolute URLs:
  images: [
    {
      url: 'https://weathershieldroofers.com/images/logo/weather_shield_roofing_transparent.png',
      width: 1200,
      height: 630,
      alt: 'Weather Shield Roofing - Myrtle Beach, SC',
    },
  ],
EOF

# Fix 7: Optimize robots.txt
echo -e "\nFix 7: Optimize robots.txt..."
cat << 'EOF'
Remove crawl-delay for major search engines:
- Remove "Crawl-delay: 0" for Googlebot and Bingbot (they ignore it anyway)
EOF

echo -e "\nSEO fixes script completed. Please implement the changes above manually."