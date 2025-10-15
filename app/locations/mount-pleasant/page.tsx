import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Mount Pleasant SC Roofing Services | Weather Shield Roofing',
  description: 'Professional roofing services in Mount Pleasant, SC. Expert coastal roofing specialists serving Mount Pleasant with 24/7 emergency repairs, roof replacements, and salt-resistant materials. Call (843) 877-5539.',
  keywords: 'Mount Pleasant roofing, roofing contractors Mount Pleasant SC, Mount Pleasant roof repair, coastal roofing Mount Pleasant, storm damage Mount Pleasant, roofing companies Mount Pleasant',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/mount-pleasant',
  },
  openGraph: {
    title: 'Mount Pleasant SC Roofing Services | Weather Shield Roofing',
    description: 'Trusted coastal roofing contractor in Mount Pleasant, SC. Specializing in hurricane-resistant and salt-resistant roofing systems.',
    url: 'https://weathershieldroofers.com/locations/mount-pleasant',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/mount-pleasant-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Mount Pleasant, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function MountPleasantPage() {
  return (
    <LocationPageTemplate
      city="Mount Pleasant"
      state="SC"
      zipCodes={['29464', '29466', '29429']}
      population="91,684"
      description="Serving Mount Pleasant, SC, one of the fastest-growing communities in the Charleston area, we specialize in coastal roofing solutions that withstand salt air, hurricanes, and intense UV exposure. Our expertise in both residential and commercial roofing ensures your property remains protected year-round."
      neighborhoods={[
        'Old Village',
        'I\'On',
        'Park West',
        'Dunes West',
        'Rivertowne',
        'Belle Hall',
        'Phillips Park',
        'Seaside Farms',
        'Carolina Park',
        'Groves'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Salt Air Corrosion',
          description: 'Coastal location demands salt-resistant materials and specialized coatings'
        },
        {
          icon: null,
          title: 'Hurricane Exposure',
          description: 'Direct exposure to Atlantic hurricanes requires impact-resistant systems'
        },
        {
          icon: null,
          title: 'Intense UV Radiation',
          description: 'Year-round sun exposure accelerates material degradation'
        },
        {
          icon: null,
          title: 'Storm Surge Risk',
          description: 'Low-lying coastal areas need elevated attention to water intrusion'
        }
      ]}
      localStats={[
        { value: '1 Hour', label: 'Average Response Time' },
        { value: '800+', label: 'Mount Pleasant Homes Protected' },
        { value: '12+ Years', label: 'Serving Mount Pleasant' },
        { value: '5.0 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Charleston', distance: '5 miles', href: '/locations/charleston-sc' },
        { name: 'Summerville', distance: '30 miles', href: '/locations/summerville' },
        { name: 'Hanahan', distance: '12 miles', href: '/locations/hanahan' },
        { name: 'Goose Creek', distance: '18 miles', href: '/locations/goose-creek' },
        { name: 'Moncks Corner', distance: '25 miles', href: '/locations/moncks-corner' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Michelle R.',
          review: 'Our I\'On home needed a complete roof replacement due to salt damage. Weather Shield used premium salt-resistant materials and the craftsmanship was impeccable. Worth every penny!',
          rating: 5
        },
        {
          name: 'Robert K.',
          review: 'After Hurricane damage to our Park West property, Weather Shield handled everything from emergency tarping to working with our insurance company. True professionals who understand coastal challenges.',
          rating: 5
        },
        {
          name: 'Linda T.',
          review: 'We own commercial properties in Carolina Park and have used Weather Shield for years. Their maintenance programs keep our roofs in perfect condition and prevent costly emergency repairs.',
          rating: 5
        }
      ]}
    />
  );
}
