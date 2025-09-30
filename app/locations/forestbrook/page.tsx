import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Home, Trees, Building, CloudRain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Forestbrook Roofing | Weather Shield Roofing | Myrtle Beach, SC',
  description: 'Professional roofing in Forestbrook, Myrtle Beach. Established neighborhood specialists with residential and HOA experience. Emergency service. Call (843) 877-5539.',
  keywords: 'forestbrook roofing, Forestbrook roofer, myrtle beach roofing forestbrook, HOA roofing forestbrook, residential roofing forestbrook, emergency roofer forestbrook',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/forestbrook',
  },
  openGraph: {
    title: 'Forestbrook Roofing | Weather Shield Roofing',
    description: 'Expert roofing for Forestbrook, Myrtle Beach neighborhoods. Residential and HOA specialists with emergency services.',
    url: 'https://weathershieldroofers.com/locations/forestbrook',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/forestbrook-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Forestbrook, Myrtle Beach',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function ForestbrookPage() {
  return (
    <LocationPageTemplate
      city="Forestbrook"
      state="SC"
      zipCodes={['29579', '29588']}
      population="12,000+"
      description="Forestbrook's trusted roofing contractor serving this established Myrtle Beach community. From mature neighborhoods to newer developments, we provide quality residential roofing that protects your home and meets HOA standards in this popular area."
      neighborhoods={[
        'Forestbrook Main',
        'Forestbrook Landing',
        'Forestbrook Estates',
        'Parkview',
        'Woodland Greens',
        'Country Club Area',
        'Forestbrook Elementary Area',
        'Residential Communities'
      ]}
      weatherChallenges={[
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Established Community',
          description: 'Mature neighborhoods with specific aesthetic standards and HOA requirements'
        },
        {
          icon: <Trees className="w-6 h-6" />,
          title: 'Tree Canopy Coverage',
          description: 'Wooded properties need specialized debris management and moss prevention'
        },
        {
          icon: <Building className="w-6 h-6" />,
          title: 'Mixed Age Properties',
          description: 'From older homes to new builds requiring diverse roofing expertise'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Inland Tropical Weather',
          description: 'Heavy rainfall and humidity require proper ventilation and drainage systems'
        }
      ]}
      localStats={[
        { value: '30 Min', label: 'Response Time' },
        { value: '900+', label: 'Forestbrook Homes Serviced' },
        { value: '12+ Years', label: 'Neighborhood Service' },
        { value: '5.0 Stars', label: 'HOA Rating' }
      ]}
      nearbyAreas={[
        { name: 'Carolina Forest', distance: '3 miles', href: '/locations/carolina-forest' },
        { name: 'Myrtle Beach', distance: '5 miles', href: '/locations/myrtle-beach' },
        { name: 'Socastee', distance: '6 miles', href: '/locations/socastee' },
        { name: 'Conway', distance: '8 miles', href: '/locations/conway' }
      ]}
      emergencyResponse="30 minutes"
      localTestimonials={[
        {
          name: 'Homeowner Jennifer M.',
          review: 'Weather Shield replaced our Forestbrook home roof with beautiful architectural shingles that match our neighborhood perfectly. Professional work and great communication throughout!',
          rating: 5
        },
        {
          name: 'HOA Board Member David K.',
          review: 'We\'ve worked with Weather Shield on multiple Forestbrook properties. They understand our community standards and always deliver approved materials with quality installation.',
          rating: 5
        },
        {
          name: 'Tree Damage Victim Carol B.',
          review: 'Storm tree fell on our roof and Weather Shield responded in 30 minutes. Emergency protection saved our home and repairs were completed beautifully. Cannot thank them enough!',
          rating: 5
        }
      ]}
    />
  );
}