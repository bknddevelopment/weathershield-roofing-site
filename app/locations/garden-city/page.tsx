import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Waves, Home, CloudRain, Wind } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Garden City Roof Replacement | Weather Shield Roofing | Garden City, SC',
  description: 'Expert roofing in Garden City, SC. Beach community specialists for vacation rentals, permanent homes, and storm damage. 24/7 emergency service. Call (843) 877-5539.',
  keywords: 'garden city roof replacement, Garden City roofing, beach roofing garden city, vacation rental roofing, emergency roofer garden city, coastal roofing specialist',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/garden-city',
  },
  openGraph: {
    title: 'Garden City Roof Replacement | Weather Shield Roofing',
    description: 'Professional beach roofing services in Garden City, SC. Vacation rental specialists and emergency storm damage repairs.',
    url: 'https://weathershieldroofers.com/locations/garden-city',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/garden-city-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Garden City, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function GardenCityPage() {
  return (
    <LocationPageTemplate
      city="Garden City"
      state="SC"
      zipCodes={['29576', '29588']}
      population="10,500+"
      description="Garden City's trusted roofing experts specializing in beach community properties. From vacation rentals to permanent beach homes, we provide durable, storm-resistant roofing that protects your investment in this beautiful coastal community."
      neighborhoods={[
        'Garden City Beach',
        'Garden City Pier Area',
        'Atlantic Beach',
        'Garden City Village',
        'Inlet Point',
        'Drunken Jack',
        'Oyster Bay',
        'Garden City Estates'
      ]}
      weatherChallenges={[
        {
          icon: <Waves className="w-6 h-6" />,
          title: 'Beach Environment',
          description: 'Oceanfront location requires salt-resistant materials and enhanced wind protection'
        },
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Vacation Rental Demands',
          description: 'Quick turnaround and minimal disruption for rental property owners'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Storm Season Preparation',
          description: 'Seasonal property checks and hurricane-ready installation methods'
        },
        {
          icon: <Wind className="w-6 h-6" />,
          title: 'High Wind Exposure',
          description: 'Coastal position requires wind-rated shingles and reinforced fastening systems'
        }
      ]}
      localStats={[
        { value: '1 Hour', label: 'Emergency Response' },
        { value: '600+', label: 'Beach Homes Protected' },
        { value: '15+ Years', label: 'Beach Community Service' },
        { value: '5.0 Stars', label: 'Rental Owner Rating' }
      ]}
      nearbyAreas={[
        { name: 'Surfside Beach', distance: '3 miles', href: '/locations/surfside-beach' },
        { name: 'Murrells Inlet', distance: '5 miles', href: '/locations/murrells-inlet' },
        { name: 'Myrtle Beach', distance: '8 miles', href: '/locations/myrtle-beach' },
        { name: 'Pawleys Island', distance: '12 miles', href: '/locations/pawleys-island' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Karen B.',
          review: 'Our Garden City vacation rental needed a new roof between rental seasons. Weather Shield completed the job in three days with zero impact on bookings. Professional and efficient!',
          rating: 5
        },
        {
          name: 'David M.',
          review: 'Storm damage during peak rental season could have been a disaster. Weather Shield had emergency tarps up within an hour and completed permanent repairs in days. Saved our rental income!',
          rating: 5
        },
        {
          name: 'Patricia L.',
          review: 'Replaced the roof on our beach house with impact-resistant shingles. Quality work, fair pricing, and great communication throughout. The roof looks beautiful and we feel protected.',
          rating: 5
        }
      ]}
    />
  );
}