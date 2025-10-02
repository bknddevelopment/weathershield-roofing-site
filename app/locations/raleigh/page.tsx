import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Raleigh Roofing Services | Weather Shield Roofing | Raleigh, NC',
  description: 'Expert roofing services in Raleigh, NC. Weather Shield Roofing provides comprehensive residential and commercial roofing solutions for the Triangle area. Trusted by Raleigh homeowners since 2010. Call (843) 493-4963.',
  keywords: 'Raleigh roofing, roofing contractors Raleigh NC, Raleigh roof repair, Triangle roofing, commercial roofing Raleigh, storm damage Raleigh, roofing companies Raleigh',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/raleigh',
  },
  openGraph: {
    title: 'Raleigh, NC Roofing Services | Weather Shield Roofing',
    description: 'Professional roofing contractor in Raleigh, NC. Serving the Triangle area with expert installation, repair, and storm damage restoration. Commercial and residential roofing specialists.',
    url: 'https://weathershieldroofers.com/locations/raleigh',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/raleigh-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Raleigh, NC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RaleighPage() {
  return (
    <LocationPageTemplate
      city="Raleigh"
      state="NC"
      zipCodes={['27601', '27603', '27604', '27605', '27606', '27607', '27608', '27609', '27610', '27612', '27613', '27614', '27615', '27616', '27617']}
      population="467,665"
      description="In North Carolina's state capital and the heart of the Triangle, we provide comprehensive roofing services for Raleigh's diverse residential and commercial properties. From historic neighborhoods to modern developments, our team delivers quality roofing solutions backed by local expertise and industry-leading warranties."
      neighborhoods={[
        'Downtown Raleigh',
        'North Hills',
        'Brier Creek',
        'Cameron Village',
        'Five Points',
        'Glenwood South',
        'Oakwood',
        'Midtown',
        'Wade Avenue',
        'Falls of Neuse',
        'Crabtree Valley',
        'Lake Johnson',
        'Mordecai',
        'Boylan Heights',
        'Warehouse District'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Severe Thunderstorms',
          description: 'Spring and summer storms bring hail and high winds requiring impact-resistant materials'
        },
        {
          icon: null,
          title: 'Ice Storms',
          description: 'Winter ice accumulation demands proper insulation and ventilation systems'
        },
        {
          icon: null,
          title: 'Tropical Systems',
          description: 'Remnants of coastal hurricanes require hurricane-rated roofing systems'
        },
        {
          icon: null,
          title: 'Temperature Extremes',
          description: 'Hot, humid summers and occasional cold snaps need durable, flexible materials'
        }
      ]}
      localStats={[
        { value: '2-3 Hours', label: 'Response Time' },
        { value: '800+', label: 'Triangle Homes Protected' },
        { value: '10+ Years', label: 'Serving Raleigh' },
        { value: '4.9 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Greensboro', distance: '75 miles', href: '/locations/greensboro' },
        { name: 'Charlotte', distance: '165 miles', href: '/locations/charlotte-nc' },
        { name: 'Wilmington', distance: '130 miles', href: '/locations/wilmington' }
      ]}
      emergencyResponse="2-3 hours"
      localTestimonials={[
        {
          name: 'Michael T.',
          review: 'Weather Shield Roofing replaced our roof in North Hills after storm damage. They worked seamlessly with our insurance company and the quality is outstanding. The team was professional, clean, and finished on schedule. Highly recommend for Raleigh homeowners!',
          rating: 5
        },
        {
          name: 'Jennifer P.',
          review: 'Our historic home in Oakwood needed specialized attention. Weather Shield understood the importance of maintaining architectural integrity while modernizing our roofing system. Excellent craftsmanship and attention to detail!',
          rating: 5
        },
        {
          name: 'David K.',
          review: 'Commercial property in downtown Raleigh required urgent repairs during business hours. Weather Shield minimized disruption and completed the work efficiently. Their commercial roofing expertise in the Triangle area is top-notch.',
          rating: 5
        }
      ]}
    />
  );
}
