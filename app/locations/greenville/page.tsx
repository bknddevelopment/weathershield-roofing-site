import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Greenville Roofing Services | Weather Shield Roofing | Greenville, SC',
  description: 'Expert roofing services in Greenville, SC. Weather Shield Roofing provides comprehensive residential and commercial roofing solutions for the Upstate. Licensed roofers serving Greenville since 2010. Call (843) 493-4963.',
  keywords: 'Greenville roofing, roofing contractors Greenville SC, Greenville roof repair, Upstate roofing, commercial roofing Greenville, storm damage Greenville, roofing companies Greenville',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/greenville',
  },
  openGraph: {
    title: 'Greenville, SC Roofing Services | Weather Shield Roofing',
    description: 'Professional roofing contractor in Greenville, SC. Serving the Upstate with expert roofing installation, repair, and maintenance. Commercial and residential roofing specialists.',
    url: 'https://weathershieldroofers.com/locations/greenville',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/greenville-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Greenville, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function GreenvillePage() {
  return (
    <LocationPageTemplate
      city="Greenville"
      state="SC"
      zipCodes={['29601', '29605', '29607', '29609', '29615', '29650', '29651']}
      population="70,720"
      description="In South Carolina's thriving Upstate hub, we provide comprehensive roofing services for Greenville's diverse residential and commercial properties. From downtown historic buildings to modern suburban developments, our team delivers quality roofing solutions backed by local expertise and a commitment to protecting your investment through all seasons."
      neighborhoods={[
        'Downtown Greenville',
        'North Main',
        'West End',
        'Augusta Road',
        'Overbrook',
        'Cleveland Park',
        'Verdae',
        'Pelham',
        'Paris Mountain',
        'Pleasant Valley',
        'Wade Hampton',
        'Five Forks',
        'Simpsonville',
        'Mauldin',
        'Taylors'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Severe Thunderstorms',
          description: 'Upstate weather brings frequent storms requiring impact-resistant roofing systems'
        },
        {
          icon: null,
          title: 'Hail Damage',
          description: 'Spring and summer hail events demand durable, Class 4 impact-rated materials'
        },
        {
          icon: null,
          title: 'High Humidity',
          description: 'Upstate climate requires proper ventilation and moisture-resistant systems'
        },
        {
          icon: null,
          title: 'Temperature Swings',
          description: 'Variable weather patterns need flexible roofing materials that handle expansion'
        }
      ]}
      localStats={[
        { value: '1-2 Hours', label: 'Response Time' },
        { value: '700+', label: 'Upstate Homes Protected' },
        { value: '10+ Years', label: 'Serving Greenville' },
        { value: '4.9 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Columbia', distance: '100 miles', href: '/locations/columbia' },
        { name: 'Charleston', distance: '210 miles', href: '/locations/charleston-sc' },
        { name: 'Charlotte', distance: '100 miles', href: '/locations/charlotte-nc' }
      ]}
      emergencyResponse="1-2 hours"
      localTestimonials={[
        {
          name: 'Karen S.',
          review: 'Weather Shield Roofing replaced our roof in Augusta Road after hail damage. They worked directly with our insurance company and made the process seamless. The quality of workmanship is outstanding and the team was professional every step of the way!',
          rating: 5
        },
        {
          name: 'Richard M.',
          review: 'Our commercial building downtown needed a complete flat roof replacement. Weather Shield minimized business disruption and delivered exceptional results on time and within budget. Their commercial roofing expertise in the Upstate is top-notch.',
          rating: 5
        },
        {
          name: 'Amanda T.',
          review: 'Fantastic experience with Weather Shield! They re-roofed our home in Verdae with incredible attention to detail. The crew was respectful, clean, and completed the project ahead of schedule. Highly recommend for Greenville homeowners!',
          rating: 5
        }
      ]}
    />
  );
}
