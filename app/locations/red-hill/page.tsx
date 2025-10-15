import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Home, Trees, CloudRain, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Red Hill SC Roofing | Weather Shield Roofing | Red Hill, SC',
  description: 'Professional roofing in Red Hill, SC. Rural and suburban residential specialists. Quality local service with emergency availability. Call (843) 877-5539.',
  keywords: 'red hill sc roofing, Red Hill roofer, rural roofing red hill, residential roofing red hill, emergency roofer red hill, roofing contractor red hill',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/red-hill',
  },
  openGraph: {
    title: 'Red Hill SC Roofing | Weather Shield Roofing',
    description: 'Expert roofing for Red Hill, SC homes and properties. Rural and suburban residential specialists.',
    url: 'https://weathershieldroofers.com/locations/red-hill',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/red-hill-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Red Hill, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RedHillPage() {
  return (
    <LocationPageTemplate
      city="Red Hill"
      state="SC"
      zipCodes={['29569', '29568']}
      population="5,000+"
      description="Red Hill's trusted local roofing contractor serving this growing Horry County community. We understand the transition from rural to suburban and provide quality roofing services for everything from farmhouses to modern subdivisions."
      neighborhoods={[
        'Red Hill Main',
        'Highway 905 Area',
        'Red Hill Crossroads',
        'Country Estates',
        'New Subdivisions',
        'Rural Properties',
        'Farmland Areas',
        'Growing Residential'
      ]}
      weatherChallenges={[
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Mixed Property Types',
          description: 'From older rural homes to new construction requiring diverse roofing expertise'
        },
        {
          icon: <Trees className="w-6 h-6" />,
          title: 'Tree Coverage',
          description: 'Wooded properties need moss prevention and debris management strategies'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Inland Tropical Weather',
          description: 'Heavy rainfall and wind from tropical systems require proper drainage'
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: 'Growing Community',
          description: 'New development brings demand for quality roofing contractors'
        }
      ]}
      localStats={[
        { value: '30 Min', label: 'Response Time' },
        { value: '300+', label: 'Properties Serviced' },
        { value: '10+ Years', label: 'Local Service' },
        { value: '5.0 Stars', label: 'Community Rating' }
      ]}
      nearbyAreas={[
        { name: 'Longs', distance: '5 miles', href: '/locations/longs' },
        { name: 'Loris', distance: '12 miles', href: '/locations/loris' },
        { name: 'Little River', distance: '10 miles', href: '/locations/little-river' },
        { name: 'Conway', distance: '18 miles', href: '/locations/conway' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Homeowner Mary T.',
          review: 'Our older Red Hill farmhouse needed a new roof. Weather Shield understood the challenges of rural properties and delivered quality work at a fair price. Great local company!',
          rating: 5
        },
        {
          name: 'John W.',
          review: 'Storm damage tree fell on our roof and Weather Shield was there rapidly. Emergency tarps saved our home and repairs were completed quickly. Highly recommend!',
          rating: 5
        },
        {
          name: 'New Home Owner Rachel P.',
          review: 'Our new Red Hill subdivision home needed additional roofing work. Weather Shield was professional, knowledgeable, and delivered excellent results. Very happy!',
          rating: 5
        }
      ]}
    />
  );
}