import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Home, Waves, Home as HomeIcon, CloudRain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Crescent Beach Roofing | Weather Shield Roofing | North Myrtle Beach, SC',
  description: 'Expert roofing in Crescent Beach, North Myrtle Beach. Beach community specialists, vacation homes, and residential properties. Call (843) 877-5539.',
  keywords: 'crescent beach roofing, Crescent Beach roofer, north myrtle beach roofing crescent, beach home roofing, vacation property roofing, emergency roofer crescent beach',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/crescent-beach',
  },
  openGraph: {
    title: 'Crescent Beach Roofing | Weather Shield Roofing',
    description: 'Professional roofing for Crescent Beach, North Myrtle Beach. Beach home specialists with emergency services.',
    url: 'https://weathershieldroofers.com/locations/crescent-beach',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/crescent-beach-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Crescent Beach, North Myrtle Beach',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function CrescentBeachPage() {
  return (
    <LocationPageTemplate
      city="Crescent Beach"
      state="SC"
      zipCodes={['29582']}
      population="3,000+"
      description="Crescent Beach's premier coastal roofing contractor serving this family-friendly section of North Myrtle Beach. From Ocean Boulevard properties to near-beach neighborhoods, we provide expert coastal roofing designed for the unique challenges of Crescent Beach's beachfront environment."
      neighborhoods={[
        'Crescent Beach Main',
        'Ocean Boulevard (Crescent)',
        'Crescent Shores',
        'Sea Mist Resort Area',
        'Crescent Sands',
        'Beach Colony',
        'Near Beach Residential',
        'Second Row Properties'
      ]}
      weatherChallenges={[
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Family Beach Community',
          description: 'Residential and vacation rental mix requires flexible scheduling and quality work'
        },
        {
          icon: <Waves className="w-6 h-6" />,
          title: 'Ocean Exposure',
          description: 'Beachfront location demands salt-resistant materials and wind-rated systems'
        },
        {
          icon: <HomeIcon className="w-6 h-6" />,
          title: 'Vacation Rental Market',
          description: 'Rental property owners need quick turnaround with minimal booking impact'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Coastal Storms',
          description: 'Hurricane-prone area requires storm preparation and fast emergency response'
        }
      ]}
      localStats={[
        { value: '30 Min', label: 'Response Time' },
        { value: '400+', label: 'Beach Homes Serviced' },
        { value: '15+ Years', label: 'Crescent Beach Service' },
        { value: '5.0 Stars', label: 'Property Owner Rating' }
      ]}
      nearbyAreas={[
        { name: 'North Myrtle Beach', distance: '1 mile', href: '/locations/north-myrtle-beach' },
        { name: 'Windy Hill', distance: '2 miles', href: '/locations/windy-hill' },
        { name: 'Cherry Grove', distance: '4 miles', href: '/locations/cherry-grove' },
        { name: 'Atlantic Beach', distance: '3 miles', href: '/locations/atlantic-beach-sc' }
      ]}
      emergencyResponse="30 minutes"
      localTestimonials={[
        {
          name: 'Vacation Rental Owner Paula D.',
          review: 'Weather Shield has handled multiple properties for us in Crescent Beach. They work around our rental schedules and always deliver quality results. Best beach roofing contractor!',
          rating: 5
        },
        {
          name: 'Beach Home Owner Michael R.',
          review: 'Storm damage during summer season was a nightmare until Weather Shield arrived. Emergency response in 30 minutes and full repair completed in days. Outstanding service!',
          rating: 5
        },
        {
          name: 'Condo Owner Susan L.',
          review: 'Our Crescent Beach condo needed a new roof. Weather Shield coordinated with the HOA perfectly and delivered beautiful, storm-resistant results. Very professional team!',
          rating: 5
        }
      ]}
    />
  );
}