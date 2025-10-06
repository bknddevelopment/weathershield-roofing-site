import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Building2, Waves, CloudRain, Droplets } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calabash NC Roofing | Weather Shield Roofing | Calabash, North Carolina',
  description: 'Professional roofing in Calabash, NC. Border community specialists serving coastal North Carolina. Seafood capital roofing experts. Call (843) 877-5539.',
  keywords: 'calabash nc roofing, Calabash roofer, north carolina roofing calabash, coastal roofing nc, waterfront roofing calabash, emergency roofer calabash nc',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/calabash-nc',
  },
  openGraph: {
    title: 'Calabash NC Roofing | Weather Shield Roofing',
    description: 'Expert roofing for Calabash, North Carolina homes and restaurants. Coastal specialists serving the Seafood Capital.',
    url: 'https://weathershieldroofers.com/locations/calabash-nc',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/calabash-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Calabash, North Carolina',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function CalabashPage() {
  return (
    <LocationPageTemplate
      city="Calabash"
      state="NC"
      zipCodes={['28467']}
      population="3,000+"
      description="Calabash's premier roofing contractor serving the famous Seafood Capital of the World. We specialize in both commercial restaurant roofing and residential coastal properties, understanding the unique challenges of this waterfront NC community."
      neighborhoods={[
        'Calabash Main',
        'Calabash Waterfront',
        'Restaurant Row',
        'Carolina Shores',
        'Beach Drive',
        'Sunset Harbor',
        'Calabash Landing',
        'River Road'
      ]}
      weatherChallenges={[
        {
          icon: <Building2 className="w-6 h-6" />,
          title: 'Restaurant District',
          description: 'Commercial kitchens require specialized ventilation and grease-resistant roofing systems'
        },
        {
          icon: <Waves className="w-6 h-6" />,
          title: 'Waterway Properties',
          description: 'Calabash River proximity demands superior moisture resistance and ventilation'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Coastal NC Weather',
          description: 'North Carolina coast faces hurricanes and nor\'easters requiring robust systems'
        },
        {
          icon: <Droplets className="w-6 h-6" />,
          title: 'Salt Air Environment',
          description: 'Coastal location requires corrosion-resistant materials and protective treatments'
        }
      ]}
      localStats={[
        { value: '45 Min', label: 'Response Time' },
        { value: '250+', label: 'Properties Serviced' },
        { value: '15+ Years', label: 'Border Service' },
        { value: '5.0 Stars', label: 'Restaurant Rating' }
      ]}
      nearbyAreas={[
        { name: 'Little River', distance: '10 miles', href: '/locations/little-river' },
        { name: 'Sunset Beach, NC', distance: '5 miles', href: '/locations/sunset-beach-nc' },
        { name: 'Ocean Isle Beach, NC', distance: '8 miles', href: '/locations/ocean-isle-nc' },
        { name: 'North Myrtle Beach', distance: '15 miles', href: '/locations/north-myrtle-beach' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Restaurant Owner Antonio M.',
          review: 'Weather Shield installed a commercial TPO roof on our Calabash seafood restaurant that handles kitchen exhaust perfectly. No leaks, great warranty, minimal disruption. Best commercial roofer in the area!',
          rating: 5
        },
        {
          name: 'Waterfront Home Owner Beth S.',
          review: 'Our Calabash River property needed hurricane repairs. Weather Shield responded quickly, worked with NC insurance requirements, and delivered beautiful results. Excellent coastal roofing!',
          rating: 5
        },
        {
          name: 'Jim R.',
          review: 'Complete roof replacement on our Carolina Shores home. Professional crew that understood North Carolina coastal standards. Quality work at a fair price!',
          rating: 5
        }
      ]}
    />
  );
}