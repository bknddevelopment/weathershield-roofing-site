// Script to add canonical URLs to all pages
// Run this script to add missing canonical URLs and OpenGraph data

const fs = require('fs');
const path = require('path');

const pagesToUpdate = [
  // Service pages
  {
    file: 'app/services/emergency-roofing/page.tsx',
    canonical: 'https://weathershieldroofers.com/services/emergency-roofing',
    title: 'Emergency Roofing Services'
  },
  {
    file: 'app/services/gutter-services/page.tsx',
    canonical: 'https://weathershieldroofers.com/services/gutter-services',
    title: 'Gutter Services'
  },
  {
    file: 'app/services/roof-inspections/page.tsx',
    canonical: 'https://weathershieldroofers.com/services/roof-inspections',
    title: 'Roof Inspection Services'
  },
  {
    file: 'app/services/roof-maintenance/page.tsx',
    canonical: 'https://weathershieldroofers.com/services/roof-maintenance',
    title: 'Roof Maintenance Services'
  },
  {
    file: 'app/services/roof-repair/page.tsx',
    canonical: 'https://weathershieldroofers.com/services/roof-repair',
    title: 'Roof Repair Services'
  },
  {
    file: 'app/services/siding-installation/page.tsx',
    canonical: 'https://weathershieldroofers.com/services/siding-installation',
    title: 'Siding Installation Services'
  },
  {
    file: 'app/services/storm-damage/page.tsx',
    canonical: 'https://weathershieldroofers.com/services/storm-damage',
    title: 'Storm Damage Restoration'
  },
  {
    file: 'app/services/page.tsx',
    canonical: 'https://weathershieldroofers.com/services',
    title: 'All Services'
  },
  // Location pages
  {
    file: 'app/locations/conway/page.tsx',
    canonical: 'https://weathershieldroofers.com/locations/conway',
    title: 'Conway Roofing Services'
  },
  {
    file: 'app/locations/georgetown/page.tsx',
    canonical: 'https://weathershieldroofers.com/locations/georgetown',
    title: 'Georgetown Roofing Services'
  },
  {
    file: 'app/locations/florence/page.tsx',
    canonical: 'https://weathershieldroofers.com/locations/florence',
    title: 'Florence Roofing Services'
  },
  {
    file: 'app/locations/north-myrtle-beach/page.tsx',
    canonical: 'https://weathershieldroofers.com/locations/north-myrtle-beach',
    title: 'North Myrtle Beach Roofing Services'
  },
  {
    file: 'app/locations/socastee/page.tsx',
    canonical: 'https://weathershieldroofers.com/locations/socastee',
    title: 'Socastee Roofing Services'
  },
  {
    file: 'app/locations/aynor/page.tsx',
    canonical: 'https://weathershieldroofers.com/locations/aynor',
    title: 'Aynor Roofing Services'
  },
  {
    file: 'app/locations/loris/page.tsx',
    canonical: 'https://weathershieldroofers.com/locations/loris',
    title: 'Loris Roofing Services'
  },
  {
    file: 'app/locations/hemingway/page.tsx',
    canonical: 'https://weathershieldroofers.com/locations/hemingway',
    title: 'Hemingway Roofing Services'
  },
  // Main pages
  {
    file: 'app/about/page.tsx',
    canonical: 'https://weathershieldroofers.com/about',
    title: 'About Weather Shield Roofing'
  },
  {
    file: 'app/gallery/page.tsx',
    canonical: 'https://weathershieldroofers.com/gallery',
    title: 'Project Gallery'
  },
  {
    file: 'app/reviews/page.tsx',
    canonical: 'https://weathershieldroofers.com/reviews',
    title: 'Customer Reviews'
  },
  {
    file: 'app/financing/page.tsx',
    canonical: 'https://weathershieldroofers.com/financing',
    title: 'Financing Options'
  },
  {
    file: 'app/quote/page.tsx',
    canonical: 'https://weathershieldroofers.com/quote',
    title: 'Request a Quote'
  },
  {
    file: 'app/blog/page.tsx',
    canonical: 'https://weathershieldroofers.com/blog',
    title: 'Roofing Blog'
  }
];

// Template for adding canonical URLs to metadata
const metadataAddition = `  alternates: {
    canonical: '{{CANONICAL_URL}}',
  },
  openGraph: {
    title: '{{TITLE}} | Weather Shield Roofing',
    description: metadata.description || '',
    url: '{{CANONICAL_URL}}',
    type: 'website',
  },`;

console.log('Adding canonical URLs to pages...');
console.log('=====================================');

pagesToUpdate.forEach(page => {
  console.log(`\n📄 ${page.file}`);
  console.log(`   Canonical: ${page.canonical}`);
  console.log(`   Add to metadata object:`);
  console.log(metadataAddition.replace(/{{CANONICAL_URL}}/g, page.canonical).replace('{{TITLE}}', page.title));
});

console.log('\n=====================================');
console.log('✅ Manual update instructions generated!');
console.log('Please add the canonical URLs and OpenGraph data to each file\'s metadata export.');