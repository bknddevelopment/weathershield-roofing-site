import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'North Carolina Roofing Services | Weather Shield Roofing | Statewide Coverage',
  description: 'Weather Shield Roofing serves all of North Carolina with professional roofing, gutter, and siding services. Quality materials and skilled professionals across the Tar Heel State. Call (843) 493-4963.',
  keywords: 'North Carolina roofing, NC roofing contractors, roofing services North Carolina, NC roof repair, NC roof replacement, commercial roofing NC, storm damage North Carolina',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/north-carolina',
  },
  openGraph: {
    title: 'North Carolina Roofing Services | Weather Shield Roofing',
    description: 'Professional roofing services throughout North Carolina. Expert installation, repair, and storm damage restoration. Serving residential and commercial clients statewide.',
    url: 'https://weathershieldroofers.com/locations/north-carolina',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/north-carolina-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in North Carolina',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function NorthCarolinaPage() {
  return (
    <LocationPageTemplate
      city="North Carolina"
      state="Statewide"
      zipCodes={['28201-28909']} // Representative range for NC
      population="10.5 Million"
      description="Across the state of North Carolina, we are proud to extend our services to a wide range of clients. Our commitment to using high-quality materials and employing skilled professionals makes us the preferred choice for roofing, gutter, and siding projects across the Tar Heel State."
      neighborhoods={[
        'Charlotte Metro',
        'Raleigh-Durham',
        'Greensboro',
        'Winston-Salem',
        'Asheville',
        'Wilmington',
        'Fayetteville',
        'Cary',
        'High Point',
        'Concord',
        'Gastonia',
        'Jacksonville',
        'Chapel Hill',
        'Rocky Mount',
        'Hickory'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane Season',
          description: 'Coastal and inland areas face hurricane threats requiring robust roofing systems'
        },
        {
          icon: null,
          title: 'Mountain Weather',
          description: 'Western NC experiences snow, ice, and extreme temperature variations'
        },
        {
          icon: null,
          title: 'Severe Thunderstorms',
          description: 'Frequent storms with hail and high winds demand impact-resistant materials'
        },
        {
          icon: null,
          title: 'Seasonal Extremes',
          description: 'Hot, humid summers and cold winters require versatile roofing solutions'
        }
      ]}
      localStats={[
        { value: '2-4 Hours', label: 'Average Response' },
        { value: '2,000+', label: 'NC Homes Protected' },
        { value: '15+ Years', label: 'Serving North Carolina' },
        { value: '4.9 Stars', label: 'Statewide Rating' }
      ]}
      nearbyAreas={[
        { name: 'Charlotte', distance: 'Central NC', href: '/locations/charlotte-nc' },
        { name: 'Raleigh', distance: 'Central NC', href: '/locations/raleigh' },
        { name: 'Greensboro', distance: 'Central NC', href: '/locations/greensboro' },
        { name: 'Wilmington', distance: 'Coastal NC', href: '/locations/wilmington' },
        { name: 'Asheville', distance: 'Western NC', href: '/locations/asheville' },
        { name: 'South Carolina', distance: 'Neighboring State', href: '/locations/south-carolina' }
      ]}
      emergencyResponse="2-4 hours depending on location"
      localTestimonials={[
        {
          name: 'David K.',
          review: 'Weather Shield Roofing handled our Charlotte commercial property with exceptional professionalism. They coordinated multiple buildings, stayed on schedule, and delivered outstanding quality. Best roofing company in North Carolina!',
          rating: 5
        },
        {
          name: 'Jennifer M.',
          review: 'From initial consultation to final inspection, Weather Shield exceeded expectations. Their knowledge of NC building codes and weather patterns resulted in a perfect roofing solution for our unique needs. Highly recommended across the state!',
          rating: 5
        },
        {
          name: 'Michael P.',
          review: 'After extensive storm damage, Weather Shield provided immediate emergency service and complete restoration. They handled insurance claims expertly and restored our home better than before. True North Carolina roofing professionals!',
          rating: 5
        }
      ]}
    />
  );
}