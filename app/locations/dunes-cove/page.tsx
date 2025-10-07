import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Dunes Cove Roofing | Luxury Waterfront Community | Weather Shield',
  description: 'Elite roofing for Dunes Cove luxury waterfront homes. Weather Shield provides premium roofing, architectural shingles, tile, metal roofing. Myrtle Beach SC. Intracoastal Waterway protection experts. 24/7 emergency response.',
  keywords: 'dunes cove roofing, luxury waterfront roofing, intracoastal waterway roofing, premium roofing myrtle beach, dunes cove sc, elite roofing services',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/dunes-cove',
  },
  openGraph: {
    title: 'Dunes Cove Roofing | Luxury Waterfront Roofing | Weather Shield',
    description: 'Elite roofing for Dunes Cove luxury waterfront homes. Intracoastal Waterway roofing experts.',
    url: 'https://weathershieldroofers.com/locations/dunes-cove',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/dunes-cove-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury Waterfront Roofing in Dunes Cove, Myrtle Beach SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function DunesCovePage() {
  return (
    <LocationPageTemplate
      city="Dunes Cove"
      state="SC"
      zipCodes={['29577', '29579']}
      population="900+"
      description="Weather Shield Roofing delivers premium protection for Dunes Cove's sought-after waterfront estates. Our mastery of luxury roofing materials and understanding of Intracoastal Waterway environmental challenges ensures your investment property receives the superior craftsmanship and performance it demands."
      neighborhoods={[
        'Waterfront Estates',
        'Marina Village',
        'Cove Pointe',
        'Intracoastal Manor',
        'Dockside Properties',
        'Harbor View',
        'Sunset Shores',
        'Bayfront Residences'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Intracoastal Waterway Exposure',
          description: 'Specialized roofing systems engineered for constant salt air and high humidity environments'
        },
        {
          icon: null,
          title: 'Waterfront Property Protection',
          description: 'Premium materials resistant to accelerated weathering from water proximity and reflection'
        },
        {
          icon: null,
          title: 'Hurricane-Resistant Luxury',
          description: 'High-wind rated systems that maintain architectural beauty while providing storm protection'
        },
        {
          icon: null,
          title: 'Premium Material Expertise',
          description: 'Expert installation of metal, tile, slate, and architectural shingle systems for waterfront homes'
        }
      ]}
      localStats={[
        { value: 'Rapid', label: 'Emergency Response' },
        { value: '$650K+', label: 'Avg. Waterfront Home Value' },
        { value: '50+ Years', label: 'Premium Warranties' },
        { value: '5.0 Stars', label: 'Waterfront Community Ratings' }
      ]}
      nearbyAreas={[
        { name: 'Myrtle Beach', distance: '3 miles', href: '/locations/myrtle-beach' },
        { name: 'Grande Dunes', distance: '2 miles', href: '/locations/grande-dunes' },
        { name: 'Murrells Inlet', distance: '5 miles', href: '/locations/murrells-inlet' },
        { name: 'Surfside Beach', distance: '4 miles', href: '/locations/surfside-beach' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Michael S.',
          review: 'Weather Shield installed a stunning metal roof on our Dunes Cove waterfront home. Their understanding of Intracoastal environmental challenges and expertise with premium materials resulted in a roof that\'s both beautiful and hurricane-rated.',
          rating: 5
        },
        {
          name: 'Jennifer L.',
          review: 'After Hurricane Matthew damaged our tile roof, Weather Shield responded immediately and restored it to perfection. Their knowledge of luxury waterfront properties and commitment to quality are exceptional.',
          rating: 5
        },
        {
          name: 'Andrew T.',
          review: 'We researched multiple high-end contractors before selecting Weather Shield for our architectural shingle system. Their portfolio of waterfront properties and superior craftsmanship made them the clear choice.',
          rating: 5
        }
      ]}
    />
  );
}
