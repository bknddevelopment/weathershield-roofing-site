import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Columbia Roofing Services | Weather Shield Roofing | Columbia, SC',
  description: 'Professional roofing services in Columbia, SC. Weather Shield Roofing offers expert residential and commercial roofing solutions for South Carolina\'s capital city. Licensed roofers serving Columbia since 2010. Call (843) 493-4963.',
  keywords: 'Columbia roofing, roofing contractors Columbia SC, Columbia roof repair, Columbia roof replacement, commercial roofing Columbia, storm damage Columbia, roofing companies Columbia',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/columbia',
  },
  openGraph: {
    title: 'Columbia, SC Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing contractor in Columbia, SC. Serving the Midlands with expert roofing installation, repair, and maintenance. Professional commercial and residential roofing services.',
    url: 'https://weathershieldroofers.com/locations/columbia',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/columbia-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Columbia, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function ColumbiaPage() {
  return (
    <LocationPageTemplate
      city="Columbia"
      state="SC"
      zipCodes={['29201', '29203', '29204', '29205', '29206', '29209', '29210', '29212', '29223', '29229']}
      population="137,300"
      description="In South Carolina's capital city and the heart of the Midlands, we deliver comprehensive roofing services for Columbia's established neighborhoods and growing communities. From historic downtown properties to modern suburban developments, our experienced team understands the unique roofing challenges of the Midlands region and provides durable solutions built for South Carolina's demanding climate."
      neighborhoods={[
        'Downtown Columbia',
        'The Vista',
        'Five Points',
        'Shandon',
        'Forest Acres',
        'Rosewood',
        'Eau Claire',
        'Olympia',
        'Heathwood',
        'Arcadia Lakes',
        'Irmo',
        'Lexington',
        'West Columbia',
        'Cayce',
        'St. Andrews'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Severe Heat',
          description: 'Midlands summer temperatures require heat-reflective and UV-resistant roofing materials'
        },
        {
          icon: null,
          title: 'Heavy Rainfall',
          description: 'Frequent storms and flash flooding need superior drainage and waterproofing'
        },
        {
          icon: null,
          title: 'High Humidity',
          description: 'SC climate demands proper ventilation and moisture-resistant systems'
        },
        {
          icon: null,
          title: 'Severe Thunderstorms',
          description: 'Spring and summer storms require impact-resistant materials and secure installation'
        }
      ]}
      localStats={[
        { value: '2-3 Hours', label: 'Response Time' },
        { value: '600+', label: 'Midlands Homes Protected' },
        { value: '10+ Years', label: 'Serving Columbia' },
        { value: '4.9 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Greenville', distance: '100 miles', href: '/locations/greenville' },
        { name: 'Charleston', distance: '115 miles', href: '/locations/charleston-sc' },
        { name: 'Charlotte', distance: '95 miles', href: '/locations/charlotte-nc' }
      ]}
      emergencyResponse="2-3 hours"
      localTestimonials={[
        {
          name: 'William H.',
          review: 'Weather Shield Roofing replaced our roof in Shandon after storm damage. They were professional, efficient, and the quality is outstanding. They handled all the insurance paperwork and kept us informed throughout the entire process. Excellent service for Columbia homeowners!',
          rating: 5
        },
        {
          name: 'Catherine L.',
          review: 'Our historic home in the Vista needed specialized attention. Weather Shield understood the importance of maintaining architectural character while modernizing our roofing system. The team was knowledgeable, respectful, and delivered exceptional results.',
          rating: 5
        },
        {
          name: 'Robert P.',
          review: 'Commercial property in downtown Columbia required urgent flat roof repairs. Weather Shield responded quickly and completed the work with minimal disruption to our business. Their expertise in commercial roofing systems is impressive and reliable.',
          rating: 5
        }
      ]}
    />
  );
}
