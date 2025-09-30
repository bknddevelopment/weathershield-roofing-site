import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Landmark, CloudRain, Waves, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pawleys Island Roofing Services | Weather Shield Roofing | Pawleys Island, SC',
  description: 'Expert roofing services in Pawleys Island, SC. Historic home roofing, beach cottage repairs, and luxury coastal properties. 24/7 emergency service. Call (843) 877-5539.',
  keywords: 'roof repair pawleys island, Pawleys Island roofing contractor, historic home roofing pawleys island, beach cottage roof repair, luxury coastal roofing, emergency roofer pawleys island',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/pawleys-island',
  },
  openGraph: {
    title: 'Pawleys Island Roofing Services | Weather Shield Roofing',
    description: 'Specialized roofing for Pawleys Island historic homes and luxury coastal properties. Expert storm damage restoration and beach cottage repairs.',
    url: 'https://weathershieldroofers.com/locations/pawleys-island',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/pawleys-island-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Pawleys Island, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function PawleysIslandPage() {
  return (
    <LocationPageTemplate
      city="Pawleys Island"
      state="SC"
      zipCodes={['29585']}
      population="1,200+"
      description="Pawleys Island's trusted roofing specialists for historic cottages and luxury coastal estates. We understand the unique architectural character of Pawleys Island and provide roofing solutions that preserve historic charm while delivering modern storm protection."
      neighborhoods={[
        'Historic Pawleys Island',
        'Pawleys Plantation',
        'Litchfield by the Sea',
        'Tradition Club',
        'Prince George',
        'True Blue',
        'DeBordieu Colony',
        'Willbrook Plantation'
      ]}
      weatherChallenges={[
        {
          icon: <Landmark className="w-6 h-6" />,
          title: 'Historic Preservation',
          description: 'Many properties require specialized techniques to maintain historic integrity'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Coastal Hurricanes',
          description: 'Island location requires maximum wind resistance and storm-rated materials'
        },
        {
          icon: <Waves className="w-6 h-6" />,
          title: 'Salt Air Degradation',
          description: 'Ocean proximity demands corrosion-resistant materials and protective treatments'
        },
        {
          icon: <Building2 className="w-6 h-6" />,
          title: 'Luxury Home Standards',
          description: 'High-end properties require premium materials and meticulous craftsmanship'
        }
      ]}
      localStats={[
        { value: '45 Min', label: 'Island Response Time' },
        { value: '300+', label: 'Island Homes Serviced' },
        { value: '20+ Years', label: 'Historic Home Experience' },
        { value: '5.0 Stars', label: 'Luxury Home Rating' }
      ]}
      nearbyAreas={[
        { name: 'Murrells Inlet', distance: '4 miles', href: '/locations/murrells-inlet' },
        { name: 'Garden City', distance: '8 miles', href: '/locations/garden-city' },
        { name: 'Surfside Beach', distance: '12 miles', href: '/locations/surfside-beach' },
        { name: 'Myrtle Beach', distance: '18 miles', href: '/locations/myrtle-beach' }
      ]}
      emergencyResponse="45 minutes"
      localTestimonials={[
        {
          name: 'Margaret S.',
          review: 'Our historic Pawleys cottage needed a roof replacement that matched the original cedar shake appearance. Weather Shield delivered a beautiful modern solution that looks authentic and performs flawlessly.',
          rating: 5
        },
        {
          name: 'William T.',
          review: 'Storm damage to our DeBordieu home was handled with professionalism and speed. They worked directly with our insurance and the architectural review board. Exceptional service for luxury properties.',
          rating: 5
        },
        {
          name: 'Catherine B.',
          review: 'Emergency tarp service during hurricane season saved our vacation rental from major damage. Weather Shield was on-site within an hour and completed permanent repairs quickly. Highly recommended!',
          rating: 5
        }
      ]}
    />
  );
}