import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { CloudRain, TrendingUp, Home, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Longs SC Roofing | Weather Shield Roofing | Longs, SC',
  description: 'Professional roofing in Longs, SC. Residential and commercial roofing specialists. Growing community experts with emergency service. Call (843) 877-5539.',
  keywords: 'longs sc roofing, Longs roofer, residential roofing longs sc, commercial roofing longs, emergency roofer longs, roofing contractor longs',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/longs',
  },
  openGraph: {
    title: 'Longs SC Roofing | Weather Shield Roofing',
    description: 'Expert roofing for Longs, SC homes and businesses. Residential and commercial specialists with emergency services.',
    url: 'https://weathershieldroofers.com/locations/longs',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/longs-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Longs, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function LongsPage() {
  return (
    <LocationPageTemplate
      city="Longs"
      state="SC"
      zipCodes={['29568']}
      population="14,000+"
      description="Longs' trusted roofing contractor serving this rapidly growing Horry County community. From established neighborhoods to new developments, we provide quality residential and commercial roofing services that protect your investment in this expanding area."
      neighborhoods={[
        'Longs Main',
        'Highway 9 Corridor',
        'Highway 905 Area',
        'Green Sea',
        'Sweet Home',
        'Red Bluff',
        'Northwest Longs',
        'Longs Plantation',
        'New Developments'
      ]}
      weatherChallenges={[
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Inland Storm Systems',
          description: 'Tropical weather brings heavy rain and wind requiring proper drainage and ventilation'
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: 'Rapid Development',
          description: 'Growing community needs experienced contractors for new construction and renovations'
        },
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Rural to Suburban Mix',
          description: 'Diverse property types from older homes to modern subdivisions require varied expertise'
        },
        {
          icon: <Building className="w-6 h-6" />,
          title: 'Agricultural to Residential',
          description: 'Converting farmland developments need proper roofing systems for new construction'
        }
      ]}
      localStats={[
        { value: '30 Min', label: 'Response Time' },
        { value: '800+', label: 'Properties Serviced' },
        { value: '12+ Years', label: 'Longs Area Service' },
        { value: '5.0 Stars', label: 'Community Rating' }
      ]}
      nearbyAreas={[
        { name: 'Little River', distance: '8 miles', href: '/locations/little-river' },
        { name: 'North Myrtle Beach', distance: '12 miles', href: '/locations/north-myrtle-beach' },
        { name: 'Loris', distance: '10 miles', href: '/locations/loris' },
        { name: 'Conway', distance: '15 miles', href: '/locations/conway' }
      ]}
      emergencyResponse="30 minutes"
      localTestimonials={[
        {
          name: 'Homeowner Sarah B.',
          review: 'Weather Shield replaced our older Longs home roof with modern materials that handle the weather perfectly. Professional team, fair pricing, and quality work. Highly recommend to Longs neighbors!',
          rating: 5
        },
        {
          name: 'Business Owner Jack M.',
          review: 'Our Highway 9 business needed a complete roof overhaul. Weather Shield delivered commercial-quality work with minimal disruption. Great local roofing company!',
          rating: 5
        },
        {
          name: 'New Home Owner Kelly R.',
          review: 'Storm damage on our new construction home was stressful but Weather Shield made it easy. Fast response, insurance coordination, and beautiful repair. Excellent service!',
          rating: 5
        }
      ]}
    />
  );
}