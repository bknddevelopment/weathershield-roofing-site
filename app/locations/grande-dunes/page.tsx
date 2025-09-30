import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Building2, Waves, Home, CloudRain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Grande Dunes Roofing Service | Weather Shield Roofing | Myrtle Beach, SC',
  description: 'Luxury roofing services in Grande Dunes, Myrtle Beach. High-end residential, oceanfront estates, and custom home specialists. Call (843) 877-5539.',
  keywords: 'grande dunes roofing service, Grande Dunes roofer, luxury home roofing myrtle beach, oceanfront estate roofing, custom home roofing, premium roofing contractor',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/grande-dunes',
  },
  openGraph: {
    title: 'Grande Dunes Roofing Service | Weather Shield Roofing',
    description: 'Premium roofing for Grande Dunes luxury estates and oceanfront properties. Expert craftsmanship for high-end homes.',
    url: 'https://weathershieldroofers.com/locations/grande-dunes',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/grande-dunes-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Grande Dunes, Myrtle Beach',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function GrandeDunesPage() {
  return (
    <LocationPageTemplate
      city="Grande Dunes"
      state="SC"
      zipCodes={['29572', '29577']}
      population="3,500+"
      description="Grande Dunes' premier luxury roofing contractor specializing in oceanfront estates, golf course properties, and custom high-end homes. Our meticulous craftsmanship and premium materials ensure your luxury property receives the finest roofing service available."
      neighborhoods={[
        'Grande Dunes Oceanfront',
        'Grande Dunes Golf',
        'Grande Dunes Marina',
        'Palm Island',
        'Marina Inn',
        'Grande Shores',
        'Ocean Boulevard Estates',
        'Grande Dunes Preserve'
      ]}
      weatherChallenges={[
        {
          icon: <Building2 className="w-6 h-6" />,
          title: 'Luxury Property Standards',
          description: 'High-end homes require premium materials and expert craftsmanship'
        },
        {
          icon: <Waves className="w-6 h-6" />,
          title: 'Oceanfront Exposure',
          description: 'Salt air and direct ocean exposure demand specialized protection systems'
        },
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Architectural Complexity',
          description: 'Custom estates feature complex roof designs requiring advanced expertise'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Hurricane Protection',
          description: 'Luxury coastal properties need maximum wind resistance and storm preparation'
        }
      ]}
      localStats={[
        { value: '30 Min', label: 'Priority Response' },
        { value: '150+', label: 'Luxury Homes Serviced' },
        { value: '15+ Years', label: 'High-End Experience' },
        { value: '5.0 Stars', label: 'Luxury Home Rating' }
      ]}
      nearbyAreas={[
        { name: 'Myrtle Beach', distance: '3 miles', href: '/locations/myrtle-beach' },
        { name: 'North Myrtle Beach', distance: '8 miles', href: '/locations/north-myrtle-beach' },
        { name: 'Market Common', distance: '5 miles', href: '/locations/market-common' },
        { name: 'Carolina Forest', distance: '10 miles', href: '/locations/carolina-forest' }
      ]}
      emergencyResponse="30 minutes"
      localTestimonials={[
        {
          name: 'Richard H.',
          review: 'Our oceanfront estate required premium materials and expert installation. Weather Shield delivered exceptional craftsmanship with attention to every detail. The roof is beautiful and performs flawlessly.',
          rating: 5
        },
        {
          name: 'Elizabeth M.',
          review: 'After hurricane damage, Weather Shield responded immediately to protect our home. Their work with insurance and the architectural board was seamless. Premium service for premium properties.',
          rating: 5
        },
        {
          name: 'Dr. Thomas W.',
          review: 'Complete roof replacement on our golf course home. Weather Shield used top-tier materials and their crew was professional and respectful. The result exceeded our expectations.',
          rating: 5
        }
      ]}
    />
  );
}