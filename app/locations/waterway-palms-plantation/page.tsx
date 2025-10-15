import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Waterway Palms Plantation Roofing | Intracoastal Community | Weather Shield',
  description: 'Premium roofing for Waterway Palms Plantation Intracoastal community. Weather Shield specializes in waterfront roofing, architectural shingles, tile, metal. Carolina Forest SC. Waterway protection experts. 24/7 emergency response.',
  keywords: 'waterway palms plantation roofing, intracoastal waterway roofing, carolina forest roofing, waterfront community roofing, waterway palms sc, luxury waterfront',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/waterway-palms-plantation',
  },
  openGraph: {
    title: 'Waterway Palms Plantation Roofing | Intracoastal Waterway Community | Weather Shield',
    description: 'Premium roofing for Waterway Palms Plantation Intracoastal community. Waterfront roofing experts.',
    url: 'https://weathershieldroofers.com/locations/waterway-palms-plantation',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/waterway-palms-plantation-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Intracoastal Waterway Roofing in Waterway Palms Plantation, Carolina Forest SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function WaterwayPalmsPlantationPage() {
  return (
    <LocationPageTemplate
      city="Waterway Palms Plantation"
      state="SC"
      zipCodes={['29579']}
      population="1,600+"
      description="Weather Shield Roofing delivers premium protection for Waterway Palms Plantation's prestigious Intracoastal Waterway community in Carolina Forest. Our expertise in waterfront roofing and understanding of unique environmental challenges ensures your luxury home receives the superior craftsmanship and storm resistance it demands."
      neighborhoods={[
        'Waterway Estates',
        'Intracoastal Manor',
        'Palmetto Point',
        'Waterfront Villas',
        'Marina Village',
        'Waterway Preserve',
        'Bayview Homes',
        'Plantation Pointe'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Intracoastal Waterway Exposure',
          description: 'Specialized roofing systems engineered for constant salt air, humidity, and water reflection'
        },
        {
          icon: null,
          title: 'Carolina Forest Microclimate',
          description: 'Premium materials resistant to inland humidity combined with coastal weather influences'
        },
        {
          icon: null,
          title: 'Waterfront Property Protection',
          description: 'Hurricane-resistant luxury systems designed for accelerated weathering from water proximity'
        },
        {
          icon: null,
          title: 'Premium Material Expertise',
          description: 'Expert installation of metal, tile, slate, and architectural shingle systems for waterfront estates'
        }
      ]}
      localStats={[
        { value: 'Rapid', label: 'Emergency Response' },
        { value: '$450K+', label: 'Avg. Waterfront Home Value' },
        { value: '50+ Years', label: 'Premium Warranties' },
        { value: '5.0 Stars', label: 'Waterway Community Ratings' }
      ]}
      nearbyAreas={[
        { name: 'Carolina Forest', distance: '1 mile', href: '/locations/carolina-forest' },
        { name: 'Myrtle Beach', distance: '5 miles', href: '/locations/myrtle-beach' },
        { name: 'Forestbrook', distance: '3 miles', href: '/locations/forestbrook' },
        { name: 'Socastee', distance: '4 miles', href: '/locations/socastee' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'David L.',
          review: 'Weather Shield installed a stunning metal roof on our Waterway Palms waterfront home. Their understanding of Intracoastal environmental challenges and expertise with premium materials resulted in superior performance and beauty.',
          rating: 5
        },
        {
          name: 'Carol Ann T.',
          review: 'After Hurricane Florence damaged our tile roof, Weather Shield responded immediately with emergency protection and completed permanent repairs flawlessly. Their waterfront roofing expertise is exceptional.',
          rating: 5
        },
        {
          name: 'Kenneth M.',
          review: 'We researched multiple luxury contractors before selecting Weather Shield for our architectural shingle system. Their portfolio of waterfront Intracoastal properties and meticulous craftsmanship made them the obvious choice.',
          rating: 5
        }
      ]}
    />
  );
}
