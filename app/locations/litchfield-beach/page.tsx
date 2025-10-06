import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Home, Waves, Home as HomeIcon, CloudRain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Litchfield Beach Roofing | Weather Shield Roofing | Litchfield Beach, SC',
  description: 'Professional roofing in Litchfield Beach, SC. Beach cottage specialists, oceanfront estates, and vacation rental roofing. Emergency service available. Call (843) 877-5539.',
  keywords: 'litchfield beach roofing, Litchfield Beach roofer, beach cottage roofing, oceanfront roofing litchfield, vacation rental roofing, emergency roofer litchfield',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/litchfield-beach',
  },
  openGraph: {
    title: 'Litchfield Beach Roofing | Weather Shield Roofing',
    description: 'Expert beach roofing services in Litchfield Beach. Cottage specialists and oceanfront property experts.',
    url: 'https://weathershieldroofers.com/locations/litchfield-beach',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/litchfield-beach-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Litchfield Beach, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function LitchfieldBeachPage() {
  return (
    <LocationPageTemplate
      city="Litchfield Beach"
      state="SC"
      zipCodes={['29585']}
      population="2,000+"
      description="Litchfield Beach's premier coastal roofing specialists serving beach cottages, oceanfront estates, and vacation properties. Our expertise in coastal construction and beach community roofing ensures your property is protected from salt air, storms, and intense UV exposure."
      neighborhoods={[
        'Litchfield Beach Main',
        'Litchfield by the Sea',
        'Litchfield Country Club',
        'Ocean Green',
        'Sea Marsh',
        'Oceanside Village',
        'Inlet Point',
        'Beach Walk'
      ]}
      weatherChallenges={[
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Beach Cottage Character',
          description: 'Preserve coastal charm while delivering modern storm protection'
        },
        {
          icon: <Waves className="w-6 h-6" />,
          title: 'Oceanfront Exposure',
          description: 'Direct ocean proximity requires maximum salt-air and wind resistance'
        },
        {
          icon: <HomeIcon className="w-6 h-6" />,
          title: 'Vacation Rental Needs',
          description: 'Quick turnaround and minimal disruption for rental property owners'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Hurricane Preparation',
          description: 'Coastal location demands storm-ready installation and emergency response'
        }
      ]}
      localStats={[
        { value: '1 Hour', label: 'Beach Response Time' },
        { value: '350+', label: 'Beach Properties Serviced' },
        { value: '15+ Years', label: 'Coastal Experience' },
        { value: '5.0 Stars', label: 'Beach Owner Rating' }
      ]}
      nearbyAreas={[
        { name: 'Pawleys Island', distance: '4 miles', href: '/locations/pawleys-island' },
        { name: 'Murrells Inlet', distance: '8 miles', href: '/locations/murrells-inlet' },
        { name: 'Georgetown', distance: '12 miles', href: '/locations/georgetown' },
        { name: 'Garden City', distance: '15 miles', href: '/locations/garden-city' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Beach Owner Susan M.',
          review: 'Our Litchfield beach cottage needed a new roof that maintained its coastal character. Weather Shield delivered a beautiful solution with modern storm protection. Perfect for beach properties!',
          rating: 5
        },
        {
          name: 'Frank R.',
          review: 'Hurricane damage to our oceanfront home was handled expertly. Emergency tarps within an hour, insurance coordination, and beautiful final result. Outstanding coastal roofing service!',
          rating: 5
        },
        {
          name: 'Jennifer W.',
          review: 'Our vacation rental roof was replaced between rental seasons with zero bookings lost. Weather Shield understands beach rental needs and delivers on time every time.',
          rating: 5
        }
      ]}
    />
  );
}