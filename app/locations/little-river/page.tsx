import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Waves, Building2, Droplets, CloudRain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Little River Roofing Company | Weather Shield Roofing | Little River, SC',
  description: 'Professional roofing services in Little River, SC. Waterfront home specialists, commercial fishing industry roofing, and emergency storm repairs. Call (843) 877-5539.',
  keywords: 'little river roofing company, Little River roofer, waterfront roofing little river, commercial roofing little river, emergency roof repair little river, fishing village roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/little-river',
  },
  openGraph: {
    title: 'Little River Roofing Company | Weather Shield Roofing',
    description: 'Expert roofing for Little River homes and businesses. Waterfront properties, commercial fishing facilities, and residential roofing specialists.',
    url: 'https://weathershieldroofers.com/locations/little-river',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/little-river-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Little River, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function LittleRiverPage() {
  return (
    <LocationPageTemplate
      city="Little River"
      state="SC"
      zipCodes={['29566']}
      population="9,500+"
      description="Little River's premier roofing contractor serving waterfront homes, commercial fishing facilities, and residential properties. Our expertise in coastal and commercial roofing makes us the first choice for this unique waterfront community."
      neighborhoods={[
        'Little River Waterfront',
        'North Myrtle Beach (Little River)',
        'Compass Cove',
        'River Oaks',
        'Little River Neck',
        'Cedar Creek',
        'Glen Dornoch',
        'Tidewater Plantation'
      ]}
      weatherChallenges={[
        {
          icon: <Waves className="w-6 h-6" />,
          title: 'Waterfront Exposure',
          description: 'Properties along the Intracoastal Waterway need specialized water and wind resistance'
        },
        {
          icon: <Building2 className="w-6 h-6" />,
          title: 'Commercial Marine Use',
          description: 'Fishing industry buildings require durable, low-maintenance commercial roofing systems'
        },
        {
          icon: <Droplets className="w-6 h-6" />,
          title: 'High Humidity',
          description: 'Waterfront location demands superior ventilation and moisture management'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Hurricane Vulnerability',
          description: 'Northern Grand Strand position requires maximum storm preparation and wind-rated systems'
        }
      ]}
      localStats={[
        { value: '1 Hour', label: 'Response Time' },
        { value: '400+', label: 'Properties Serviced' },
        { value: '12+ Years', label: 'Waterfront Experience' },
        { value: '5.0 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'North Myrtle Beach', distance: '5 miles', href: '/locations/north-myrtle-beach' },
        { name: 'Myrtle Beach', distance: '15 miles', href: '/locations/myrtle-beach' },
        { name: 'Conway', distance: '18 miles', href: '/locations/conway' },
        { name: 'Socastee', distance: '20 miles', href: '/locations/socastee' }
      ]}
      emergencyResponse="1 hour"
      localTestimonials={[
        {
          name: 'Captain Mike D.',
          review: 'Weather Shield re-roofed our commercial fishing operation with a TPO system that handles the salt air and sun exposure perfectly. Great work on a challenging commercial project.',
          rating: 5
        },
        {
          name: 'Sandra W.',
          review: 'Our waterfront home needed emergency repairs after a storm. They were here within an hour and had us fully protected. The permanent repair was completed quickly and looks great.',
          rating: 5
        },
        {
          name: 'Tom R.',
          review: 'Replaced our entire roof at our Little River home. Professional crew, reasonable pricing, and quality workmanship. Very happy with the results and would use them again.',
          rating: 5
        }
      ]}
    />
  );
}