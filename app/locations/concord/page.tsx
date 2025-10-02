import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Concord Roofing Services | Weather Shield Roofing | Concord, NC',
  description: 'Professional roofing services in Concord, NC. Weather Shield Roofing offers expert roof installation, repair, and storm damage restoration for Concord residents. Call (843) 493-4963.',
  keywords: 'Concord roofing, roofing contractors Concord NC, Concord roof repair, Concord roof replacement, storm damage Concord, roofing companies Concord',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/concord',
  },
  openGraph: {
    title: 'Concord, NC Roofing Services | Weather Shield Roofing',
    description: 'Expert roofing contractor in Concord, NC. Professional installation, repair, and storm damage restoration for residential and commercial properties.',
    url: 'https://weathershieldroofers.com/locations/concord',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/concord-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Concord, NC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function ConcordPage() {
  return (
    <LocationPageTemplate
      city="Concord"
      state="NC"
      zipCodes={['28025', '28026', '28027', '28075']}
      population="105,138"
      description="In the rapidly growing city of Concord, NC, we provide comprehensive roofing solutions tailored to protect homes and businesses from North Carolina's challenging weather. From modern residential developments to historic properties, our team delivers quality roofing services with the expertise this thriving community deserves."
      neighborhoods={[
        'Downtown Concord',
        'Concord Mills',
        'Afton Village',
        'Robbins Park',
        'Highland Creek',
        'Christenbury',
        'Weddington',
        'Penninger Circle',
        'Windfield',
        'Riverbend',
        'Logan',
        'Flowe Store'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Severe Thunderstorms',
          description: 'Hot, humid summers bring intense thunderstorms requiring impact-resistant roofing materials'
        },
        {
          icon: null,
          title: 'Winter Ice Storms',
          description: 'Periodic ice storms demand proper insulation and emergency repair services'
        },
        {
          icon: null,
          title: 'High Wind Events',
          description: 'Coastal storm systems bring high winds requiring reinforced roofing systems'
        },
        {
          icon: null,
          title: 'Hail Damage',
          description: 'Spring and summer hail storms require durable, impact-rated shingles'
        }
      ]}
      localStats={[
        { value: '2 Hours', label: 'Response Time' },
        { value: '300+', label: 'Concord Homes Protected' },
        { value: '10+ Years', label: 'Serving Concord' },
        { value: '4.9 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Charlotte', distance: '20 miles', href: '/locations/charlotte-nc' },
        { name: 'Huntersville', distance: '12 miles', href: '/locations/huntersville' },
        { name: 'Indian Trail', distance: '18 miles', href: '/locations/indian-trail' }
      ]}
      emergencyResponse="2 hours"
      localTestimonials={[
        {
          name: 'Michael R.',
          review: 'Weather Shield Roofing replaced our roof in Highland Creek after hail damage. They worked seamlessly with our insurance and the quality of their work exceeded expectations. Professional crew and excellent communication throughout.',
          rating: 5
        },
        {
          name: 'Jennifer K.',
          review: 'After a severe thunderstorm damaged our roof near Concord Mills, Weather Shield responded within hours. Their emergency repair service saved us from water damage and they completed the full replacement quickly. Highly recommend!',
          rating: 5
        },
        {
          name: 'David P.',
          review: 'Our historic home in downtown Concord needed careful attention, and Weather Shield delivered. They maintained the architectural integrity while upgrading to modern, weather-resistant materials. Outstanding craftsmanship!',
          rating: 5
        }
      ]}
    />
  );
}
