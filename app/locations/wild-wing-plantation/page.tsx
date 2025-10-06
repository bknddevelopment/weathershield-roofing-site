import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { FileCheck, Flag, Trees, CloudRain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wild Wing Plantation Roofer | Weather Shield Roofing | Conway, SC',
  description: 'Professional roofing at Wild Wing Plantation, Conway. Golf community specialists, residential roofing, and HOA-approved contractor. Call (843) 877-5539.',
  keywords: 'wild wing plantation roofer, Wild Wing roofing, golf community roofing conway, HOA roofing wild wing, residential roofing plantation, emergency roofer wild wing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/wild-wing-plantation',
  },
  openGraph: {
    title: 'Wild Wing Plantation Roofer | Weather Shield Roofing',
    description: 'Expert roofing for Wild Wing Plantation golf community. HOA-approved contractor with quality residential services.',
    url: 'https://weathershieldroofers.com/locations/wild-wing-plantation',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/wild-wing-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services at Wild Wing Plantation, Conway',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function WildWingPlantationPage() {
  return (
    <LocationPageTemplate
      city="Wild Wing Plantation"
      state="SC"
      zipCodes={['29526', '29577']}
      population="4,000+"
      description="Wild Wing Plantation's premier roofing contractor serving this prestigious golf community with HOA-approved roofing services. Our experience with planned golf communities ensures compliance with community standards while delivering exceptional quality and service."
      neighborhoods={[
        'Wild Wing Plantation Main',
        'Avocet Course Homes',
        'Wood Stork Course',
        'Falcon Course Properties',
        'Hummingbird Course',
        'Lake Houses',
        'Clubhouse District',
        'Plantation Drive'
      ]}
      weatherChallenges={[
        {
          icon: <FileCheck className="w-6 h-6" />,
          title: 'HOA Compliance',
          description: 'Strict community guidelines require approved contractors and materials'
        },
        {
          icon: <Flag className="w-6 h-6" />,
          title: 'Golf Course Aesthetics',
          description: 'Properties near courses demand quality appearance and professional workmanship'
        },
        {
          icon: <Trees className="w-6 h-6" />,
          title: 'Mature Tree Canopy',
          description: 'Established landscaping requires specialized debris management and moss prevention'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Inland Storm Protection',
          description: 'Conway area faces tropical weather requiring proper drainage and wind resistance'
        }
      ]}
      localStats={[
        { value: '30 Min', label: 'Response Time' },
        { value: '250+', label: 'Plantation Homes Serviced' },
        { value: '10+ Years', label: 'Golf Community Service' },
        { value: '5.0 Stars', label: 'HOA Rating' }
      ]}
      nearbyAreas={[
        { name: 'Conway', distance: '5 miles', href: '/locations/conway' },
        { name: 'Carolina Forest', distance: '8 miles', href: '/locations/carolina-forest' },
        { name: 'Socastee', distance: '10 miles', href: '/locations/socastee' },
        { name: 'Myrtle Beach', distance: '15 miles', href: '/locations/myrtle-beach' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'HOA Board Member Patricia R.',
          review: 'Weather Shield has worked on multiple homes in Wild Wing with consistent quality. They understand our architectural guidelines and always deliver approved materials and professional installation.',
          rating: 5
        },
        {
          name: 'James B.',
          review: 'Our roof on the Avocet course needed replacement after storm damage. Weather Shield coordinated everything with insurance and the HOA. Professional service and beautiful results.',
          rating: 5
        },
        {
          name: 'Carol T.',
          review: 'Complete roof replacement with zero issues. The crew was respectful of our golf course community, kept the site immaculate, and the quality is outstanding. Very happy with Weather Shield!',
          rating: 5
        }
      ]}
    />
  );
}