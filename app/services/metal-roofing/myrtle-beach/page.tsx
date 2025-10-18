import ServiceCityTemplate, { generateServiceCityMetadata } from '@/app/components/templates/ServiceCityTemplate';

const pageData = {
  service: {
    name: 'Metal Roofing Installation',
    slug: 'metal-roofing',
    icon: '⚡',
    description: 'Premium metal roofing installation in Myrtle Beach. Standing seam and corrugated metal systems perfect for coastal properties. Superior hurricane resistance, energy efficiency, and 50+ year lifespan.',
    benefits: [
      'Maximum hurricane wind resistance - 140+ MPH ratings',
      'Energy efficient - reflects heat, reduces cooling costs 20-30%',
      'Exceptional lifespan - 50-70 years with minimal maintenance',
      'Superior salt air corrosion resistance',
      'Environmentally friendly - 100% recyclable',
      'Fire resistant - Class A fire rating',
      'Lightweight - minimal structural load',
      'Lifetime warranty options available'
    ],
    materials: [
      'Standing Seam Metal Roofing (most popular)',
      'Corrugated Metal Panels',
      'Stone-Coated Steel Shingles',
      'Aluminum Roofing (best for oceanfront)',
      'Copper Roofing (luxury properties)'
    ]
  },
  city: {
    name: 'Myrtle Beach',
    slug: 'myrtle-beach',
    state: 'SC',
    neighborhoods: [
      'Grande Dunes',
      'DeBordieu Colony',
      'Wachesaw Plantation',
      'Dunes Club',
      'Litchfield Country Club'
    ],
    uniqueChallenges: [
      'Salt air requires premium coating systems',
      'Hurricane zones demand concealed fastener systems',
      'High temperatures require thermal expansion allowances',
      'Coastal moisture needs proper ventilation design',
      'HOA architectural guidelines in luxury communities'
    ]
  },
  metadata: {
    title: 'Metal Roofing Myrtle Beach SC | Standing Seam | Hurricane Resistant | Energy Efficient',
    description: 'Premium metal roofing installation in Myrtle Beach. Standing seam, corrugated panels. 50+ year lifespan, hurricane rated, energy efficient. GAF certified. Call (843) 877-5539.',
    keywords: 'metal roofing myrtle beach, standing seam metal roof, metal roof installation myrtle beach, aluminum roofing myrtle beach, hurricane resistant roofing'
  }
};

export const metadata = generateServiceCityMetadata(pageData);

export default function MetalRoofingMyrtleBeachPage() {
  return <ServiceCityTemplate data={pageData} />;
}
