import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Asheville Roofing Services | Weather Shield Roofing | Asheville, NC',
  description: 'Expert roofing services in Asheville, NC. Weather Shield Roofing specializes in mountain climate roofing solutions for Western North Carolina. Serving Asheville and the Blue Ridge Mountains since 2010. Call (843) 493-4963.',
  keywords: 'Asheville roofing, roofing contractors Asheville NC, Asheville roof repair, mountain roofing, commercial roofing Asheville, storm damage Asheville, roofing companies Asheville',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/asheville',
  },
  openGraph: {
    title: 'Asheville, NC Roofing Services | Weather Shield Roofing',
    description: 'Professional roofing contractor in Asheville, NC. Mountain climate specialists providing expert installation, repair, and maintenance for Western North Carolina homes and businesses.',
    url: 'https://weathershieldroofers.com/locations/asheville',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/asheville-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Asheville, NC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function AshevillePage() {
  return (
    <LocationPageTemplate
      city="Asheville"
      state="NC"
      zipCodes={['28801', '28803', '28804', '28805', '28806']}
      population="94,589"
      description="In the heart of the Blue Ridge Mountains, we provide specialized roofing services designed for Asheville's unique mountain climate. From historic Victorian homes downtown to modern mountain retreats, our team brings expertise in steep-slope roofing, snow load considerations, and weather-resistant systems built for Western North Carolina's demanding conditions."
      neighborhoods={[
        'Downtown Asheville',
        'West Asheville',
        'North Asheville',
        'East Asheville',
        'Biltmore Forest',
        'Kenilworth',
        'Montford',
        'River Arts District',
        'Oakley',
        'South Asheville',
        'Biltmore Village',
        'Haw Creek',
        'Leicester',
        'Weaverville',
        'Black Mountain'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Heavy Snowfall',
          description: 'Mountain winters require roofing systems designed for significant snow loads'
        },
        {
          icon: null,
          title: 'Ice Dams',
          description: 'Freeze-thaw cycles demand superior insulation and ventilation systems'
        },
        {
          icon: null,
          title: 'Steep Slopes',
          description: 'Mountain terrain requires specialized installation techniques for pitched roofs'
        },
        {
          icon: null,
          title: 'Temperature Extremes',
          description: 'Wide temperature variations need flexible, durable roofing materials'
        }
      ]}
      localStats={[
        { value: '3-4 Hours', label: 'Response Time' },
        { value: '400+', label: 'Mountain Homes Protected' },
        { value: '10+ Years', label: 'Serving Asheville' },
        { value: '4.9 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Greensboro', distance: '180 miles', href: '/locations/greensboro' },
        { name: 'Charlotte', distance: '125 miles', href: '/locations/charlotte-nc' },
        { name: 'Raleigh', distance: '250 miles', href: '/locations/raleigh' }
      ]}
      emergencyResponse="same day"
      localTestimonials={[
        {
          name: 'Laura M.',
          review: 'Weather Shield Roofing expertly handled our steep-pitched roof in Montford. They understand the unique challenges of Asheville\'s historic homes and mountain weather. The craftsmanship is exceptional and they were incredibly professional throughout the entire project.',
          rating: 5
        },
        {
          name: 'Christopher B.',
          review: 'Our mountain home needed a complete roof replacement after ice dam damage. Weather Shield installed a superior ventilation system and the results have been perfect through two winters. They really understand mountain climate roofing!',
          rating: 5
        },
        {
          name: 'Rebecca H.',
          review: 'Commercial property in the River Arts District required specialized flat roof work. Weather Shield delivered excellent results on time and within budget. Their expertise with both commercial and mountain residential roofing is impressive.',
          rating: 5
        }
      ]}
    />
  );
}
