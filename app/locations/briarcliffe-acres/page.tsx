import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Waves, Home, ClipboardCheck, CloudRain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Briarcliffe Acres Roofing | Weather Shield Roofing | Myrtle Beach, SC',
  description: 'Professional roofing in Briarcliffe Acres, Myrtle Beach. Oceanfront and near-beach property specialists. Emergency service available. Call (843) 877-5539.',
  keywords: 'briarcliffe acres roofing, Briarcliffe roofer, oceanfront roofing myrtle beach, near beach roofing, residential roofing briarcliffe, emergency roofer briarcliffe',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/briarcliffe-acres',
  },
  openGraph: {
    title: 'Briarcliffe Acres Roofing | Weather Shield Roofing',
    description: 'Expert roofing for Briarcliffe Acres oceanfront and near-beach properties. Emergency and residential specialists.',
    url: 'https://weathershieldroofers.com/locations/briarcliffe-acres',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/briarcliffe-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Briarcliffe Acres, Myrtle Beach',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function BriarcliffeAcresPage() {
  return (
    <LocationPageTemplate
      city="Briarcliffe Acres"
      state="SC"
      zipCodes={['29572', '29577']}
      population="2,000+"
      description="Briarcliffe Acres' premier coastal roofing contractor serving this oceanfront and near-beach community. Our expertise in coastal construction ensures your property receives superior storm protection while maintaining the aesthetic appeal expected in this desirable beach neighborhood."
      neighborhoods={[
        'Briarcliffe Acres Main',
        'Ocean Boulevard (Briarcliffe)',
        'Shore Drive',
        'Briarcliffe West',
        'Near Beach Residential',
        'Waterway Access',
        'North End Briarcliffe',
        'Coastal Communities'
      ]}
      weatherChallenges={[
        {
          icon: <Waves className="w-6 h-6" />,
          title: 'Oceanfront Properties',
          description: 'Direct ocean exposure requires maximum wind and salt-air resistance'
        },
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Established Community',
          description: 'Mature neighborhood with specific aesthetic and quality expectations'
        },
        {
          icon: <ClipboardCheck className="w-6 h-6" />,
          title: 'Beach Access Challenges',
          description: 'Near-ocean properties need specialized materials transport and site management'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Coastal Storms',
          description: 'Hurricane-prone location demands storm-rated systems and quick emergency response'
        }
      ]}
      localStats={[
        { value: '30 Min', label: 'Response Time' },
        { value: '200+', label: 'Properties Serviced' },
        { value: '15+ Years', label: 'Oceanfront Experience' },
        { value: '5.0 Stars', label: 'Property Owner Rating' }
      ]}
      nearbyAreas={[
        { name: 'Myrtle Beach', distance: '3 miles', href: '/locations/myrtle-beach' },
        { name: 'North Myrtle Beach', distance: '5 miles', href: '/locations/north-myrtle-beach' },
        { name: 'Grande Dunes', distance: '2 miles', href: '/locations/grande-dunes' },
        { name: 'Barefoot Resort', distance: '8 miles', href: '/locations/barefoot-resort' }
      ]}
      emergencyResponse="30 minutes"
      localTestimonials={[
        {
          name: 'Oceanfront Owner Charles R.',
          review: 'Our Briarcliffe oceanfront home needed a roof that could handle extreme coastal conditions. Weather Shield installed a premium system with exceptional wind ratings. Three years later, perfect performance!',
          rating: 5
        },
        {
          name: 'Linda P.',
          review: 'Emergency storm damage was handled with incredible speed. Tarps within 30 minutes, full assessment the next day, and complete repair within a week. Outstanding emergency service!',
          rating: 5
        },
        {
          name: 'Steven M.',
          review: 'Complete roof replacement with careful attention to our neighborhood standards. Professional crew, quality materials, and beautiful results. Very happy with Weather Shield!',
          rating: 5
        }
      ]}
    />
  );
}