import ServiceCityTemplate, { generateServiceCityMetadata } from '@/app/components/templates/ServiceCityTemplate';

const pageData = {
  service: {
    name: 'Roof Repair',
    slug: 'roof-repair',
    icon: '🔧',
    description: 'Fast, reliable roof repair services in Myrtle Beach. From minor leaks to storm damage, we fix it right the first time. 24/7 emergency repairs with rapid response. All work warrantied.',
    benefits: [
      'Rapid 24/7 emergency leak repairs',
      'Missing or damaged shingle replacement',
      'Flashing repairs around chimneys and vents',
      'Storm damage assessment and repairs',
      'Insurance claim documentation assistance',
      'Same-day service available for emergencies',
      'Workmanship warranty on all repairs',
      'Transparent pricing - no hidden fees'
    ],
    materials: [
      'Exact shingle color matching from major brands',
      'Premium leak barrier underlayment',
      'Corrosion-resistant flashing materials',
      'Emergency tarp systems for immediate protection'
    ]
  },
  city: {
    name: 'Myrtle Beach',
    slug: 'myrtle-beach',
    state: 'SC',
    neighborhoods: [
      'Downtown Myrtle Beach',
      'Market Common',
      'Carolina Forest',
      'Grande Dunes',
      'Forestbrook'
    ],
    uniqueChallenges: [
      'Frequent thunderstorms cause sudden leak emergencies',
      'Hurricane season creates spike in storm damage repairs',
      'Salt air corrosion requires complete flashing inspection',
      'Heat and humidity accelerate shingle aging and cracking',
      'Coastal wind uplift tests old adhesive strips'
    ]
  },
  metadata: {
    title: 'Roof Repair Myrtle Beach SC | 24/7 Emergency Service | Fast Leak Fixes',
    description: 'Emergency roof repair in Myrtle Beach. 24/7 rapid response for leaks, storm damage, missing shingles. 5.0★ rated. Insurance claims. Call (843) 877-5539 now.',
    keywords: 'roof repair myrtle beach, myrtle beach roof repair, emergency roof repair, roof leak repair myrtle beach, storm damage repair myrtle beach'
  }
};

export const metadata = generateServiceCityMetadata(pageData);

export default function RoofRepairMyrtleBeachPage() {
  return <ServiceCityTemplate data={pageData} />;
}
