import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Rock Hill Roofing Services | Weather Shield Roofing | Rock Hill, SC',
  description: 'Professional roofing services in Rock Hill, SC. Weather Shield Roofing offers expert roof installation, repair, and commercial roofing for Rock Hill homes and businesses. Call (843) 493-4963.',
  keywords: 'Rock Hill roofing, roofing contractors Rock Hill SC, Rock Hill roof repair, Rock Hill roof replacement, commercial roofing Rock Hill, storm damage Rock Hill',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/rock-hill',
  },
  openGraph: {
    title: 'Rock Hill, SC Roofing Services | Weather Shield Roofing',
    description: 'Leading roofing contractor in Rock Hill, SC. Professional residential and commercial roofing installation, repair, and maintenance services.',
    url: 'https://weathershieldroofers.com/locations/rock-hill',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/rock-hill-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Rock Hill, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RockHillPage() {
  return (
    <LocationPageTemplate
      city="Rock Hill"
      state="SC"
      zipCodes={['29730', '29731', '29732', '29733']}
      population="75,048"
      description="In the thriving city of Rock Hill, SC, we provide comprehensive roofing services designed to protect homes and businesses from South Carolina's demanding weather conditions. From historic downtown properties to modern residential developments, our experienced team delivers quality roofing solutions with local expertise and professional craftsmanship."
      neighborhoods={[
        'Downtown Rock Hill',
        'Oakland',
        'Manchester Village',
        'Riverwalk',
        'Mt. Gallant',
        'Ebenezer',
        'India Hook',
        'Fewell Park',
        'Stoneyfork',
        'Pleasant Knoll',
        'Rosewood',
        'Cotton Belt'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Severe Thunderstorms',
          description: 'Frequent summer thunderstorms require impact-resistant roofing materials'
        },
        {
          icon: null,
          title: 'High Winds',
          description: 'Storm systems bring damaging winds requiring reinforced installations'
        },
        {
          icon: null,
          title: 'Heavy Rainfall',
          description: 'High precipitation levels demand proper drainage and waterproofing systems'
        },
        {
          icon: null,
          title: 'Hail Damage',
          description: 'Periodic hail storms require durable, impact-rated shingles'
        }
      ]}
      localStats={[
        { value: '24/7', label: 'Response Time' },
        { value: '350+', label: 'Rock Hill Homes Protected' },
        { value: '10+ Years', label: 'Serving Rock Hill' },
        { value: '4.9 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Charlotte', distance: '25 miles', href: '/locations/charlotte-nc' },
        { name: 'Fort Mill', distance: '8 miles', href: '/locations/fort-mill' },
        { name: 'Indian Trail', distance: '20 miles', href: '/locations/indian-trail' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'William K.',
          review: 'Weather Shield replaced the roof on our historic home in downtown Rock Hill. They were meticulous in preserving the architectural details while upgrading to modern materials. Exceptional craftsmanship and professionalism.',
          rating: 5
        },
        {
          name: 'Susan G.',
          review: 'Our commercial building in Oakland needed urgent repairs after storm damage. Weather Shield responded immediately and completed the work with minimal business disruption. Their commercial roofing expertise is top-notch!',
          rating: 5
        },
        {
          name: 'Mark D.',
          review: 'After hail damage in Riverwalk, Weather Shield handled everything from insurance coordination to installation. The entire process was seamless and the quality of their work is outstanding. Best roofers in Rock Hill!',
          rating: 5
        }
      ]}
    />
  );
}
