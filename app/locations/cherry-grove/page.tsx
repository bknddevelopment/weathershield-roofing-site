import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Wind, Waves, Home, Waves as WavesIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cherry Grove Roofing | Weather Shield Roofing | Cherry Grove, SC',
  description: 'Expert roofing in Cherry Grove, North Myrtle Beach. Beach community specialists, pier area properties, and vacation home roofing. Call (843) 877-5539.',
  keywords: 'cherry grove roofing, Cherry Grove roofer, north myrtle beach roofing cherry grove, beach home roofing, vacation rental roofing cherry grove, emergency roofer cherry grove',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/cherry-grove',
  },
  openGraph: {
    title: 'Cherry Grove Roofing | Weather Shield Roofing',
    description: 'Professional beach roofing in Cherry Grove, North Myrtle Beach. Vacation home specialists with emergency services.',
    url: 'https://weathershieldroofers.com/locations/cherry-grove',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/cherry-grove-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Cherry Grove, North Myrtle Beach',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function CherryGrovePage() {
  return (
    <LocationPageTemplate
      city="Cherry Grove"
      state="SC"
      zipCodes={['29582']}
      population="3,500+"
      description="Cherry Grove's trusted beach roofing specialists serving the northernmost Grand Strand community. From the iconic pier area to ocean boulevard properties, we provide expert coastal roofing that withstands Cherry Grove's unique beachfront environment."
      neighborhoods={[
        'Cherry Grove Beach',
        'Cherry Grove Pier Area',
        'Ocean Boulevard',
        'Cherry Grove Inlet',
        'Tilghman Estates',
        'Cherry Grove Village',
        'Inlet Cove',
        'North End Properties'
      ]}
      weatherChallenges={[
        {
          icon: <Wind className="w-6 h-6" />,
          title: 'Northern Beach Position',
          description: 'Exposed location at North Myrtle Beach requires enhanced wind protection'
        },
        {
          icon: <Waves className="w-6 h-6" />,
          title: 'Inlet Environment',
          description: 'Proximity to Cherry Grove Inlet demands superior moisture and salt resistance'
        },
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Vacation Home Management',
          description: 'Rental property owners need quick, reliable service with minimal disruption'
        },
        {
          icon: <WavesIcon className="w-6 h-6" />,
          title: 'Beach Access Properties',
          description: 'Oceanfront and near-oceanfront homes need specialized coastal roofing systems'
        }
      ]}
      localStats={[
        { value: '45 Min', label: 'Response Time' },
        { value: '300+', label: 'Beach Homes Serviced' },
        { value: '12+ Years', label: 'Cherry Grove Service' },
        { value: '5.0 Stars', label: 'Beach Owner Rating' }
      ]}
      nearbyAreas={[
        { name: 'North Myrtle Beach', distance: '2 miles', href: '/locations/north-myrtle-beach' },
        { name: 'Little River', distance: '7 miles', href: '/locations/little-river' },
        { name: 'Barefoot Resort', distance: '5 miles', href: '/locations/barefoot-resort' },
        { name: 'Windy Hill', distance: '8 miles', href: '/locations/windy-hill' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Beach Rental Owner Mike S.',
          review: 'Weather Shield has serviced multiple Cherry Grove rentals for us. They work around bookings, communicate clearly, and always deliver quality work. Perfect for rental property managers!',
          rating: 5
        },
        {
          name: 'Barbara H.',
          review: 'Storm damage near the pier area was repaired within hours. Emergency response was fast and the permanent work was completed beautifully. Excellent beach roofing company!',
          rating: 5
        },
        {
          name: 'Kevin D.',
          review: 'Complete roof replacement on our Cherry Grove beach house. The crew handled beach access challenges professionally and the quality is outstanding. Highly recommended for coastal properties.',
          rating: 5
        }
      ]}
    />
  );
}