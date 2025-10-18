import ServiceCityTemplate, { generateServiceCityMetadata } from '@/app/components/templates/ServiceCityTemplate';

const pageData = {
  service: {
    name: 'Roof Replacement',
    slug: 'roof-replacement',
    icon: '🏠',
    description: 'Coastal roof replacement specialists in Surfside Beach. Expert installation with salt air protection, hurricane-resistant materials, and premium GAF warranties. Serving oceanfront and inland properties.',
    benefits: [
      'Coastal roofing specialists - salt air protection',
      'Hurricane-rated materials exceeding 130 MPH',
      'Premium GAF architectural shingles',
      'Complete tear-off and deck inspection',
      '50-year material warranties',
      'Lifetime workmanship guarantee',
      'Free drone roof inspections',
      'Flexible 0% APR financing options'
    ]
  },
  city: {
    name: 'Surfside Beach',
    slug: 'surfside-beach',
    state: 'SC',
    neighborhoods: [
      'Oceanfront Surfside',
      'Garden City',
      'Inlet Harbour',
      'Deerfield Plantation',
      'Highway 17 corridor'
    ],
    uniqueChallenges: [
      'Direct beach exposure requires enhanced salt protection',
      'Small-town atmosphere with vacation rental properties',
      'Hurricane evacuation zone requires rapid pre-storm service',
      'Mix of year-round and seasonal residents',
      'Oceanfront properties need premium corrosion-resistant materials'
    ]
  },
  metadata: {
    title: 'Roof Replacement Surfside Beach SC | Coastal Specialists | Hurricane Rated',
    description: 'Surfside Beach roof replacement experts. Oceanfront specialists with salt air protection, hurricane-resistant materials. 5.0★ rated. Call (843) 877-5539.',
    keywords: 'roof replacement surfside beach, surfside beach roofing, oceanfront roofing surfside, garden city roofing contractor'
  }
};

export const metadata = generateServiceCityMetadata(pageData);

export default function RoofReplacementSurfsideBeachPage() {
  return <ServiceCityTemplate data={pageData} />;
}
