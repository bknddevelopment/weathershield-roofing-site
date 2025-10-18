import ServiceCityTemplate, { generateServiceCityMetadata } from '@/app/components/templates/ServiceCityTemplate';

const pageData = {
  service: {
    name: 'Roof Replacement',
    slug: 'roof-replacement',
    icon: '🏠',
    description: 'Professional roof replacement services in North Myrtle Beach. Specializing in oceanfront properties with salt air protection and hurricane-resistant installation. GAF certified with lifetime warranties.',
    benefits: [
      'Oceanfront and beachfront roofing specialists',
      'Salt air resistant materials and fasteners',
      'Hurricane wind ratings exceeding 130 MPH',
      'Premium GAF architectural shingles',
      'Lifetime material and workmanship warranties',
      'Free drone roof inspections',
      'Insurance storm damage claim experts',
      'Flexible financing with 0% APR options'
    ],
    materials: [
      'GAF Timberline HDZ (most popular for North Myrtle Beach)',
      'Metal roofing systems (superior salt air resistance)',
      'Impact-resistant shingles (hail protection)',
      'Tile roofing (oceanfront luxury homes)'
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
      'Barefoot Resort',
      'Tidewater Plantation'
    ],
    uniqueChallenges: [
      'Direct oceanfront exposure requires premium salt-resistant materials',
      'Hurricane wind zones demand enhanced installation methods',
      'Salt spray accelerates corrosion - special fasteners required',
      'Barrier island moisture levels promote rapid algae growth',
      'Beach dune regulations affect replacement scheduling'
    ]
  },
  metadata: {
    title: 'Roof Replacement North Myrtle Beach SC | Oceanfront Specialists | 5.0★ Rated',
    description: 'North Myrtle Beach roof replacement experts. Oceanfront specialists with salt air protection, hurricane-resistant materials. GAF certified, 5.0★ rating. Free estimate: (843) 877-5539',
    keywords: 'roof replacement north myrtle beach, north myrtle beach roofing, oceanfront roof replacement, cherry grove roofing, ocean drive roofing contractor'
  }
};

export const metadata = generateServiceCityMetadata(pageData);

export default function RoofReplacementNorthMyrtleBeachPage() {
  return <ServiceCityTemplate data={pageData} />;
}
