import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Charlotte Roofing Services | Weather Shield Roofing | Charlotte, NC',
  description: 'Professional roofing services in Charlotte, NC. Weather Shield Roofing offers comprehensive roofing solutions, siding, and gutter systems tailored to Charlotte residents and businesses. Call (843) 493-4963.',
  keywords: 'Charlotte roofing, roofing contractors Charlotte NC, Charlotte roof repair, Charlotte roof replacement, commercial roofing Charlotte, storm damage Charlotte, roofing companies Charlotte',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/charlotte-nc',
  },
  openGraph: {
    title: 'Charlotte, NC Roofing Services | Weather Shield Roofing',
    description: 'Leading roofing contractor in Charlotte, NC. Expert installation, repair, and storm damage restoration. Professional commercial and residential roofing services.',
    url: 'https://weathershieldroofers.com/locations/charlotte-nc',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/charlotte-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Charlotte, NC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function CharlottePage() {
  return (
    <LocationPageTemplate
      city="Charlotte"
      state="NC"
      zipCodes={['28201', '28202', '28203', '28204', '28205', '28206', '28207', '28208', '28209', '28210', '28211', '28212', '28213', '28214', '28215', '28216', '28217', '28226', '28227', '28244', '28262', '28269', '28270', '28273', '28277', '28278', '28280', '28281', '28282']}
      population="897,000+"
      description="In the bustling city of Charlotte, NC, we offer comprehensive roofing and exterior services tailored to the diverse needs of its residents and businesses. From innovative roofing solutions to durable siding and gutter systems, our team ensures quality and reliability in every project we undertake in this vibrant city."
      neighborhoods={[
        'Uptown Charlotte',
        'South End',
        'NoDa',
        'Plaza Midwood',
        'Dilworth',
        'Myers Park',
        'Elizabeth',
        'Ballantyne',
        'University City',
        'SouthPark',
        'Cotswold',
        'Madison Park',
        'Steele Creek',
        'Mint Hill',
        'Matthews'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Severe Thunderstorms',
          description: 'Charlotte experiences frequent thunderstorms requiring impact-resistant roofing materials'
        },
        {
          icon: null,
          title: 'Ice Storms',
          description: 'Winter ice storms demand proper insulation and ice dam prevention systems'
        },
        {
          icon: null,
          title: 'High Winds',
          description: 'Strong wind events require reinforced roofing systems and secure fastening'
        },
        {
          icon: null,
          title: 'Temperature Variations',
          description: 'Hot summers and cold winters need materials that handle thermal expansion'
        }
      ]}
      localStats={[
        { value: '24/7', label: 'Response Time' },
        { value: '500+', label: 'Charlotte Homes Protected' },
        { value: '10+ Years', label: 'Serving Charlotte' },
        { value: '4.9 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Concord', distance: '20 miles', href: '/locations/concord' },
        { name: 'Rock Hill', distance: '25 miles', href: '/locations/rock-hill' },
        { name: 'Gastonia', distance: '23 miles', href: '/locations/gastonia' },
        { name: 'Huntersville', distance: '14 miles', href: '/locations/huntersville' },
        { name: 'Fort Mill', distance: '20 miles', href: '/locations/fort-mill' },
        { name: 'Indian Trail', distance: '15 miles', href: '/locations/indian-trail' }
      ]}
      emergencyResponse="24/7"
      localTestimonials={[
        {
          name: 'Robert M.',
          review: 'Weather Shield Roofing provided excellent service for our home in Myers Park. They handled our historic home with care and the new roof looks fantastic while maintaining the architectural integrity. Professional team from start to finish!',
          rating: 5
        },
        {
          name: 'Sarah L.',
          review: 'After storm damage in South End, Weather Shield responded quickly and worked directly with our insurance. They made the entire process seamless and our new roof is better than ever. Highly recommend for Charlotte residents!',
          rating: 5
        },
        {
          name: 'James T.',
          review: 'Commercial property in Uptown needed urgent repairs. Weather Shield delivered on time and on budget with minimal disruption to our tenants. Their expertise in commercial roofing is unmatched in the Charlotte area.',
          rating: 5
        }
      ]}
    />
  );
}