import ServiceCityTemplate, { generateServiceCityMetadata } from '@/app/components/templates/ServiceCityTemplate';

const pageData = {
  service: {
    name: 'Roof Repair',
    slug: 'roof-repair',
    icon: '🔧',
    description: 'Fast, reliable roof repair in North Myrtle Beach. Oceanfront leak specialists with 24/7 emergency service. From minor repairs to storm damage - we fix it right the first time.',
    benefits: [
      '24/7 emergency roof leak repairs',
      'Oceanfront and beachfront specialists',
      'Missing shingle replacement - exact color matching',
      'Storm damage assessment and repairs',
      'Insurance claim documentation',
      'Same-day emergency service available',
      'All repairs warrantied',
      'Salt air corrosion inspections included'
    ]
  },
  city: {
    name: 'North Myrtle Beach',
    slug: 'north-myrtle-beach',
    state: 'SC',
    neighborhoods: [
      'Cherry Grove',
      'Ocean Drive',
      'Crescent Beach',
      'Windy Hill',
      'Barefoot Resort'
    ]
  },
  metadata: {
    title: 'Roof Repair North Myrtle Beach | 24/7 Emergency Service | Oceanfront Specialists',
    description: '24/7 roof repair in North Myrtle Beach. Oceanfront leak specialists, storm damage experts. Rapid response. 5.0★ rated. Call (843) 877-5539.',
    keywords: 'roof repair north myrtle beach, emergency roof repair, roof leak repair, oceanfront roofing, cherry grove roof repair'
  }
};

export const metadata = generateServiceCityMetadata(pageData);

export default function RoofRepairNorthMyrtleBeachPage() {
  return <ServiceCityTemplate data={pageData} />;
}
