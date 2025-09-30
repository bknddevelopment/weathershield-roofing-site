import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Building2, Home, ClipboardCheck, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Market Common Roof Repair | Weather Shield Roofing | Myrtle Beach, SC',
  description: 'Professional roofing at The Market Common, Myrtle Beach. Commercial retail roofing, residential townhomes, and mixed-use properties. Call (843) 877-5539.',
  keywords: 'market common roof repair, Market Common roofing, commercial roofing market common, townhome roofing myrtle beach, mixed-use roofing, emergency roofer market common',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/market-common',
  },
  openGraph: {
    title: 'Market Common Roof Repair | Weather Shield Roofing',
    description: 'Expert commercial and residential roofing at The Market Common. Retail, townhomes, and mixed-use property specialists.',
    url: 'https://weathershieldroofers.com/locations/market-common',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/market-common-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services at The Market Common, Myrtle Beach',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function MarketCommonPage() {
  return (
    <LocationPageTemplate
      city="The Market Common"
      state="SC"
      zipCodes={['29577', '29572']}
      population="8,000+"
      description="The Market Common's trusted roofing contractor specializing in urban mixed-use properties, retail businesses, and modern residential townhomes. Our experience with both commercial and residential roofing makes us the preferred choice for this vibrant community."
      neighborhoods={[
        'Market Common Village',
        'Market Common Residential',
        'Grand Park',
        'Valor Park',
        'Crabtree Memorial Gym Area',
        'Farrow Parkway',
        'Howard Avenue District',
        'Market Common Lofts'
      ]}
      weatherChallenges={[
        {
          icon: <Building2 className="w-6 h-6" />,
          title: 'Mixed-Use Complexity',
          description: 'Commercial and residential properties require diverse roofing expertise'
        },
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Urban Aesthetics',
          description: 'Modern development demands architecturally pleasing roofing solutions'
        },
        {
          icon: <ClipboardCheck className="w-6 h-6" />,
          title: 'Minimal Disruption',
          description: 'Retail and residential proximity requires careful scheduling and site management'
        },
        {
          icon: <FileCheck className="w-6 h-6" />,
          title: 'HOA Standards',
          description: 'Community guidelines require approved contractors and materials'
        }
      ]}
      localStats={[
        { value: '30 Min', label: 'Response Time' },
        { value: '200+', label: 'Properties Serviced' },
        { value: '8+ Years', label: 'Market Common Service' },
        { value: '5.0 Stars', label: 'Business Rating' }
      ]}
      nearbyAreas={[
        { name: 'Myrtle Beach', distance: '2 miles', href: '/locations/myrtle-beach' },
        { name: 'Carolina Forest', distance: '5 miles', href: '/locations/carolina-forest' },
        { name: 'Socastee', distance: '8 miles', href: '/locations/socastee' },
        { name: 'Surfside Beach', distance: '10 miles', href: '/locations/surfside-beach' }
      ]}
      emergencyResponse="30 minutes"
      localTestimonials={[
        {
          name: 'Retail Manager Sarah K.',
          review: 'Weather Shield re-roofed our Market Common retail location with zero business disruption. They worked around our hours, kept everything clean, and delivered quality work. Perfect for commercial properties.',
          rating: 5
        },
        {
          name: 'David L.',
          review: 'Our townhome needed a new roof and Weather Shield made the process seamless. They coordinated with the HOA, got all approvals, and completed the work quickly. Very professional team.',
          rating: 5
        },
        {
          name: 'Emma R.',
          review: 'Emergency leak during a storm could have damaged our shop. Weather Shield was on-site in 30 minutes with tarps and completed permanent repairs the next day. Outstanding emergency response!',
          rating: 5
        }
      ]}
    />
  );
}