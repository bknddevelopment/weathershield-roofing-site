import ServiceCityTemplate, { generateServiceCityMetadata } from '@/app/components/templates/ServiceCityTemplate';

const pageData = {
  service: {
    name: 'Storm Damage Repair',
    slug: 'storm-damage',
    icon: '⛈️',
    description: 'Expert storm damage roof repair in Myrtle Beach. Hurricane, wind, and hail damage specialists. We handle your insurance claim from documentation to final payment. Emergency tarping and immediate repairs available 24/7.',
    benefits: [
      '24/7 emergency storm damage response',
      'Complete insurance claim management',
      'Free storm damage inspections with drone technology',
      'Emergency tarping to prevent further damage',
      'Direct insurance company negotiations',
      'Detailed documentation with photos and reports',
      'Wind damage, hail damage, hurricane damage specialists',
      'Fast-track repairs to minimize home exposure'
    ],
    materials: [
      'Emergency tarp systems (immediate protection)',
      'Hurricane-rated replacement shingles',
      'Impact-resistant materials (hail protection)',
      'Premium waterproofing underlayment'
    ]
  },
  city: {
    name: 'Myrtle Beach',
    slug: 'myrtle-beach',
    state: 'SC',
    neighborhoods: [
      'All Myrtle Beach neighborhoods',
      'Carolina Forest',
      'Market Common',
      'Surfside Beach',
      'Garden City',
      'Murrells Inlet'
    ],
    uniqueChallenges: [
      'Hurricane season brings major storm damage annually',
      'High wind events from Atlantic weather systems',
      'Insurance companies often undervalue coastal storm claims',
      'Salt air corrosion complicates damage assessments',
      'Rapid response critical to prevent mold in humid climate'
    ]
  },
  metadata: {
    title: 'Storm Damage Roof Repair Myrtle Beach | Hurricane Damage | Insurance Claims',
    description: 'Emergency storm damage roof repair in Myrtle Beach. Hurricane, wind, hail specialists. We handle insurance claims. 24/7 response. Free inspection: (843) 877-5539',
    keywords: 'storm damage repair myrtle beach, hurricane roof damage, wind damage roof repair, hail damage roofing, insurance claim roofing myrtle beach'
  }
};

export const metadata = generateServiceCityMetadata(pageData);

export default function StormDamageMyrtleBeachPage() {
  return <ServiceCityTemplate data={pageData} />;
}
