import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { FileCheck, Building, CloudRain, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Carolina Forest Roofing | Weather Shield Roofing | Carolina Forest, SC',
  description: 'Professional roofing in Carolina Forest, SC. New home roofing, HOA-approved contractors, and emergency repairs for this growing community. Call (843) 877-5539.',
  keywords: 'carolina forest roofing, Carolina Forest roofer, HOA roofing carolina forest, new home roofing, residential roofing carolina forest, emergency roofer carolina forest',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/carolina-forest',
  },
  openGraph: {
    title: 'Carolina Forest Roofing | Weather Shield Roofing',
    description: 'Expert roofing for Carolina Forest homes and subdivisions. HOA-approved contractor with emergency services.',
    url: 'https://weathershieldroofers.com/locations/carolina-forest',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/carolina-forest-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Carolina Forest, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function CarolinaForestPage() {
  return (
    <LocationPageTemplate
      city="Carolina Forest"
      state="SC"
      zipCodes={['29579', '29577']}
      population="25,000+"
      description="Carolina Forest's premier roofing contractor serving this rapidly growing community with new construction, replacement, and repair services. We work closely with HOAs and understand the unique needs of modern planned communities."
      neighborhoods={[
        'Carolina Forest Main',
        'The Farm',
        'Forestbrook',
        'Avalon',
        'Carolina Bays',
        'River Oaks',
        'Waterway Palms',
        'Plantation Lakes',
        'Grande Dunes',
        'Waterbridge'
      ]}
      weatherChallenges={[
        {
          icon: <FileCheck className="w-6 h-6" />,
          title: 'HOA Requirements',
          description: 'Multiple HOA communities require approved contractors and specific materials'
        },
        {
          icon: <Building className="w-6 h-6" />,
          title: 'New Construction Standards',
          description: 'Growing community needs experienced contractors for new home roofing'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Storm Protection',
          description: 'Inland location still faces hurricane threats requiring proper preparation'
        },
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Modern Aesthetics',
          description: 'Contemporary neighborhoods demand high-quality appearance and materials'
        }
      ]}
      localStats={[
        { value: '45 Min', label: 'Response Time' },
        { value: '1,200+', label: 'Homes Serviced' },
        { value: '10+ Years', label: 'Community Service' },
        { value: '5.0 Stars', label: 'HOA Rating' }
      ]}
      nearbyAreas={[
        { name: 'Myrtle Beach', distance: '10 miles', href: '/locations/myrtle-beach' },
        { name: 'Socastee', distance: '5 miles', href: '/locations/socastee' },
        { name: 'Conway', distance: '8 miles', href: '/locations/conway' },
        { name: 'The Market Common', distance: '12 miles', href: '/locations/market-common' }
      ]}
      emergencyResponse="45 minutes"
      localTestimonials={[
        {
          name: 'Michael B.',
          review: 'Weather Shield handled our Carolina Forest HOA roofing project with complete professionalism. They coordinated with the architectural review board and completed 15 homes on schedule. Highly recommended for HOA work.',
          rating: 5
        },
        {
          name: 'Ashley T.',
          review: 'Storm damage to our new home in The Farm was stressful, but Weather Shield made it easy. They worked directly with insurance and had us fully repaired quickly. Excellent customer service!',
          rating: 5
        },
        {
          name: 'John D.',
          review: 'Complete roof replacement on our Forestbrook home. The crew was professional, the site was kept clean, and the quality is outstanding. Fair pricing and great warranty too.',
          rating: 5
        }
      ]}
    />
  );
}