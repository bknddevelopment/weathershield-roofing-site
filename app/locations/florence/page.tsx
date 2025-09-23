import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Roofing Services in Florence, SC | Weather Shield Roofing',
  description: 'Professional roofing contractors serving Florence, SC. Expert installation, repair, and commercial roofing services. Free estimates. Call (843) 493-4963.',
  keywords: 'Florence roofing, roofing contractors Florence SC, roof repair Florence, commercial roofing Florence, storm damage Florence',
  openGraph: {
    title: 'Florence Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing services in Florence, SC. Residential and commercial roofing experts.',
    url: 'https://weathershieldroofers.com/locations/florence',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: '/images/florence-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Florence, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function FlorencePage() {
  return (
    <LocationPageTemplate
      city="Florence"
      state="SC"
      zipCodes={['29501', '29502', '29503', '29504', '29505', '29506']}
      population="38,000+"
      description="Florence, SC, is another key area where we deliver our comprehensive roofing, gutter, and siding services. Understanding the needs of this community allows us to provide tailored solutions that meet the specific requirements of Florence residents and businesses, ensuring satisfaction and long-lasting results."
      neighborhoods={[
        'Downtown Florence',
        'West Florence',
        'South Florence',
        'Cherokee Road Area',
        'Timmonsville Road',
        'Hoffmeyer Road Area',
        'Pine Forest',
        'Country Club Area'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Severe Thunderstorms',
          description: 'Frequent storms require impact-resistant roofing materials'
        },
        {
          icon: null,
          title: 'Temperature Extremes',
          description: 'Hot summers and cold winters demand versatile roofing systems'
        },
        {
          icon: null,
          title: 'Tornado Risk',
          description: 'Enhanced fastening systems for increased wind resistance'
        }
      ]}
      localStats={[
        { value: '3-4 Hours', label: 'Response Time' },
        { value: '300+', label: 'Florence Homes Serviced' },
        { value: '8 Years', label: 'Serving Florence' },
        { value: '4.9 Stars', label: 'Average Rating' }
      ]}
      nearbyAreas={[
        { name: 'Darlington', distance: '10 miles', href: '/locations/darlington' },
        { name: 'Hartsville', distance: '25 miles', href: '/locations/hartsville' },
        { name: 'Marion', distance: '30 miles', href: '/locations/marion' },
        { name: 'Dillon', distance: '35 miles', href: '/locations/dillon' }
      ]}
      emergencyResponse="3-4 hours"
      localTestimonials={[
        {
          name: 'Michael D.',
          review: 'Weather Shield handled our commercial building roof replacement professionally. Minimal disruption to our business operations. Excellent communication throughout.',
          rating: 5
        },
        {
          name: 'Jennifer K.',
          review: 'After tornado damage, they responded quickly and worked with our insurance. New roof looks great and provides better protection. Highly recommend!',
          rating: 5
        }
      ]}
    />
  );
}