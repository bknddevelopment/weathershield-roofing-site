import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Building2, Wind, Home, ClipboardCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Windy Hill Roofing | Weather Shield Roofing | North Myrtle Beach, SC',
  description: 'Expert roofing in Windy Hill, North Myrtle Beach. Beach resort area specialists, condos, and residential properties. 24/7 emergency service. Call (843) 877-5539.',
  keywords: 'windy hill roofing, Windy Hill roofer, north myrtle beach roofing windy hill, beach resort roofing, condo roofing windy hill, emergency roofer windy hill',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/windy-hill',
  },
  openGraph: {
    title: 'Windy Hill Roofing | Weather Shield Roofing',
    description: 'Professional roofing for Windy Hill beach resort area. Condo and residential specialists with emergency services.',
    url: 'https://weathershieldroofers.com/locations/windy-hill',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/windy-hill-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Windy Hill, North Myrtle Beach',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function WindyHillPage() {
  return (
    <LocationPageTemplate
      city="Windy Hill"
      state="SC"
      zipCodes={['29582', '29577']}
      population="4,000+"
      description="Windy Hill's trusted beach roofing contractor serving this popular resort area with commercial, multi-family, and residential roofing expertise. From oceanfront condos to beach houses, we provide coastal roofing solutions built for North Myrtle Beach's challenging beachfront environment."
      neighborhoods={[
        'Windy Hill Beach',
        'Windy Hill Section',
        'Ocean Boulevard (Windy Hill)',
        'Windy Hill Dunes',
        'Atlantic Sands',
        'Long Bay Resort Area',
        'Plantation Resort',
        'Beach Cove Resort Area'
      ]}
      weatherChallenges={[
        {
          icon: <Building2 className="w-6 h-6" />,
          title: 'Resort Area Demands',
          description: 'High-rise condos and resort properties require specialized commercial expertise'
        },
        {
          icon: <Wind className="w-6 h-6" />,
          title: 'High Wind Exposure',
          description: 'True to its name, Windy Hill faces intense coastal winds requiring reinforced systems'
        },
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Multi-Family Properties',
          description: 'Condo associations and HOAs need coordinated scheduling and quality assurance'
        },
        {
          icon: <ClipboardCheck className="w-6 h-6" />,
          title: 'Beach Resort Standards',
          description: 'Tourism-focused area demands attractive, durable roofing that performs year-round'
        }
      ]}
      localStats={[
        { value: '30 Min', label: 'Response Time' },
        { value: '500+', label: 'Properties Serviced' },
        { value: '15+ Years', label: 'Resort Area Service' },
        { value: '5.0 Stars', label: 'HOA Rating' }
      ]}
      nearbyAreas={[
        { name: 'North Myrtle Beach', distance: '2 miles', href: '/locations/north-myrtle-beach' },
        { name: 'Cherry Grove', distance: '5 miles', href: '/locations/cherry-grove' },
        { name: 'Barefoot Resort', distance: '3 miles', href: '/locations/barefoot-resort' },
        { name: 'Briarcliffe Acres', distance: '6 miles', href: '/locations/briarcliffe-acres' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Condo Association President Maria G.',
          review: 'Weather Shield completed our 48-unit condo roof replacement with minimal disruption to residents. Professional coordination, quality work, and completed on schedule. Excellent for HOA projects!',
          rating: 5
        },
        {
          name: 'Beach House Owner Tom K.',
          review: 'Storm damage during peak season was handled expertly. Emergency response rapidly and permanent repairs completed quickly. They truly understand beach area emergencies!',
          rating: 5
        },
        {
          name: 'Resort Manager Diana L.',
          review: 'Our Windy Hill resort property needed extensive roof work. Weather Shield delivered commercial-grade quality with attention to our guest experience. Outstanding resort roofing contractor!',
          rating: 5
        }
      ]}
    />
  );
}