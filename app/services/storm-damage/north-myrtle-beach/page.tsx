import ServiceCityTemplate, { generateServiceCityMetadata } from '@/app/components/templates/ServiceCityTemplate';

const pageData = {
  service: {
    name: 'Storm Damage Repair',
    slug: 'storm-damage',
    icon: '⛈️',
    description: 'Hurricane and storm damage roof repair specialists in North Myrtle Beach. Expert insurance claim management from documentation to final payment. 24/7 emergency response for oceanfront properties.',
    benefits: [
      'Hurricane and tropical storm damage specialists',
      'Complete insurance claim management',
      'Free storm damage inspections',
      'Emergency tarping - immediate protection',
      'Direct insurance adjuster negotiations',
      'Oceanfront property expertise',
      'Wind damage, hail damage, water intrusion repairs',
      'Fast-track repairs to prevent mold in coastal climate'
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
      'Atlantic Beach'
    ]
  },
  metadata: {
    title: 'Storm Damage Roof Repair North Myrtle Beach | Hurricane Specialists | Insurance Claims',
    description: 'Storm damage roof repair in North Myrtle Beach. Hurricane specialists handling insurance claims. 24/7 emergency response. Oceanfront experts. Call (843) 877-5539.',
    keywords: 'storm damage repair north myrtle beach, hurricane roof damage, wind damage repair, oceanfront storm damage, insurance claim roofing'
  }
};

export const metadata = generateServiceCityMetadata(pageData);

export default function StormDamageNorthMyrtleBeachPage() {
  return <ServiceCityTemplate data={pageData} />;
}
