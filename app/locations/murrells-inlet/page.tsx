import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Waves, Building2, Droplets, CloudRain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Murrells Inlet Roofer | Weather Shield Roofing | Murrells Inlet, SC',
  description: 'Professional roofing in Murrells Inlet, SC. Marshwalk business roofing, waterfront homes, and residential specialists. Emergency service available. Call (843) 877-5539.',
  keywords: 'murrels inlet roofer, Murrells Inlet roofing, Marshwalk commercial roofing, waterfront home roofing murrells inlet, emergency roofer murrells inlet, inlet roofing specialist',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/murrells-inlet',
  },
  openGraph: {
    title: 'Murrells Inlet Roofer | Weather Shield Roofing',
    description: 'Expert roofing for Murrells Inlet homes and Marshwalk businesses. Waterfront specialists with emergency storm damage services.',
    url: 'https://weathershieldroofers.com/locations/murrells-inlet',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/murrells-inlet-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Murrells Inlet, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function MurrellsInletPage() {
  return (
    <LocationPageTemplate
      city="Murrells Inlet"
      state="SC"
      zipCodes={['29576']}
      population="9,000+"
      description="Murrells Inlet's premier roofing contractor serving the famous Marshwalk restaurants, waterfront homes, and residential communities. Our expertise in both commercial and coastal residential roofing makes us the trusted choice for this unique inlet community."
      neighborhoods={[
        'Murrells Inlet Waterfront',
        'Marshwalk District',
        'Inlet Square Mall Area',
        'Huntington Beach',
        'Wachesaw Plantation',
        'Inlet Harbour',
        'Eagle Nest',
        'Blackmoor',
        'Prince Creek'
      ]}
      weatherChallenges={[
        {
          icon: <Waves className="w-6 h-6" />,
          title: 'Waterfront Properties',
          description: 'Inlet and marsh proximity requires superior moisture resistance and ventilation'
        },
        {
          icon: <Building2 className="w-6 h-6" />,
          title: 'Commercial Restaurant Roofing',
          description: 'Marshwalk businesses need durable, low-maintenance commercial systems'
        },
        {
          icon: <Droplets className="w-6 h-6" />,
          title: 'Salt Marsh Environment',
          description: 'Corrosive marsh air demands specialized protective coatings and materials'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Hurricane Exposure',
          description: 'Coastal inlet position requires wind-resistant installation and storm preparation'
        }
      ]}
      localStats={[
        { value: '45 Min', label: 'Response Time' },
        { value: '550+', label: 'Properties Serviced' },
        { value: '18+ Years', label: 'Inlet Experience' },
        { value: '5.0 Stars', label: 'Business Rating' }
      ]}
      nearbyAreas={[
        { name: 'Garden City', distance: '5 miles', href: '/locations/garden-city' },
        { name: 'Pawleys Island', distance: '8 miles', href: '/locations/pawleys-island' },
        { name: 'Surfside Beach', distance: '10 miles', href: '/locations/surfside-beach' },
        { name: 'Georgetown', distance: '15 miles', href: '/locations/georgetown' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Restaurant Owner Chris M.',
          review: 'Weather Shield re-roofed our Marshwalk restaurant with a TPO system that handles kitchen exhaust, salt air, and coastal weather perfectly. Zero leaks in two years and minimal business disruption.',
          rating: 5
        },
        {
          name: 'Jennifer R.',
          review: 'Our waterfront home on Wachesaw needed emergency repairs after a hurricane. They responded within an hour with tarps and completed full replacement ahead of schedule. Exceptional service!',
          rating: 5
        },
        {
          name: 'Mark T.',
          review: 'Complete roof replacement on our Prince Creek home. Professional team, quality materials, and great communication. The roof looks fantastic and we have total confidence in the workmanship.',
          rating: 5
        }
      ]}
    />
  );
}