import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Landmark, Waves, Home, CloudRain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Atlantic Beach SC Roofing | Weather Shield Roofing | Atlantic Beach, SC',
  description: 'Professional roofing in Atlantic Beach, SC. Historic beach community specialists. Coastal property experts with emergency service. Call (843) 877-5539.',
  keywords: 'atlantic beach sc roofing, Atlantic Beach roofer, historic beach roofing, coastal roofing atlantic beach, beach property roofing, emergency roofer atlantic beach',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/atlantic-beach-sc',
  },
  openGraph: {
    title: 'Atlantic Beach SC Roofing | Weather Shield Roofing',
    description: 'Expert roofing for Atlantic Beach, SC historic coastal community. Beach property specialists with emergency services.',
    url: 'https://weathershieldroofers.com/locations/atlantic-beach-sc',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/atlantic-beach-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Atlantic Beach, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function AtlanticBeachPage() {
  return (
    <LocationPageTemplate
      city="Atlantic Beach"
      state="SC"
      zipCodes={['29582', '29575']}
      population="500+"
      description="Atlantic Beach's dedicated roofing contractor serving this historic coastal community. Known as 'The Black Pearl,' Atlantic Beach has unique character and roofing needs that we understand and respect, providing quality coastal protection for this treasured beach town."
      neighborhoods={[
        'Atlantic Beach Main',
        'Ocean Boulevard (Atlantic Beach)',
        'Beach Drive',
        'Historic District',
        'Atlantic Beach Shores',
        'Coastal Properties',
        'Beach Cottages',
        'Waterfront Homes'
      ]}
      weatherChallenges={[
        {
          icon: <Landmark className="w-6 h-6" />,
          title: 'Historic Community Character',
          description: 'Preserve the unique heritage while providing modern storm protection'
        },
        {
          icon: <Waves className="w-6 h-6" />,
          title: 'Direct Ocean Exposure',
          description: 'Beachfront location requires maximum salt-air and wind resistance'
        },
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Beach Cottage Style',
          description: 'Maintain coastal charm with appropriate materials and installation methods'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Hurricane Vulnerability',
          description: 'Small barrier beach needs superior storm preparation and emergency response'
        }
      ]}
      localStats={[
        { value: '45 Min', label: 'Beach Response' },
        { value: '100+', label: 'Beach Properties Serviced' },
        { value: '15+ Years', label: 'Historic Beach Service' },
        { value: '5.0 Stars', label: 'Community Rating' }
      ]}
      nearbyAreas={[
        { name: 'North Myrtle Beach', distance: '2 miles', href: '/locations/north-myrtle-beach' },
        { name: 'Windy Hill', distance: '3 miles', href: '/locations/windy-hill' },
        { name: 'Cherry Grove', distance: '5 miles', href: '/locations/cherry-grove' },
        { name: 'Myrtle Beach', distance: '10 miles', href: '/locations/myrtle-beach' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Beach Property Owner Gloria H.',
          review: 'Weather Shield understands the special character of Atlantic Beach. They replaced our cottage roof with materials that look authentic but perform like modern systems. Perfect for our historic community!',
          rating: 5
        },
        {
          name: 'Marcus J.',
          review: 'Hurricane damage to our beachfront home was handled with care and speed. Weather Shield protected our property and completed beautiful repairs. They truly respect our community.',
          rating: 5
        },
        {
          name: 'Family Owner Denise W.',
          review: 'Our family beach house has been in Atlantic Beach for generations. Weather Shield gave it a roof that will protect it for generations more. Excellent coastal roofing!',
          rating: 5
        }
      ]}
    />
  );
}