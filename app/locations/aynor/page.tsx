import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Roofing Services in Aynor, SC | Weather Shield Roofing',
  description: 'Professional roofing contractors serving Aynor, SC. Expert rural and residential roofing services. Storm damage repair specialists. Call (843) 493-4963.',
  keywords: 'Aynor roofing, roofing contractors Aynor SC, roof repair Aynor, rural roofing, farm building roofing Aynor',
  openGraph: {
    title: 'Aynor Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing services in Aynor, SC. Serving rural and residential properties with quality craftsmanship.',
    url: 'https://weathershieldroofers.com/locations/aynor',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: '/images/aynor-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Aynor, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function AynorPage() {
  return (
    <LocationPageTemplate
      city="Aynor"
      state="SC"
      zipCodes={['29511', '29544']}
      population="1,000+"
      description="Aynor's rural charm and agricultural heritage require roofing solutions that protect both residential homes and farm structures. We understand the unique needs of this tight-knit community and provide reliable, honest service."
      neighborhoods={[
        'Downtown Aynor',
        'Highway 501 Area',
        'Highway 319 Corridor',
        'Cool Springs',
        'Jordanville',
        'Galivants Ferry Area',
        'Rural Aynor',
        'Dog Bluff Road Area'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Agricultural Dust',
          description: 'Farm operations require roofs that resist dust accumulation'
        },
        {
          icon: null,
          title: 'Severe Storms',
          description: 'Open rural areas face strong winds and hail'
        },
        {
          icon: null,
          title: 'Temperature Variations',
          description: 'Rural settings experience wider temperature swings'
        }
      ]}
      localStats={[
        { value: '45-60 Min', label: 'Response Time' },
        { value: '150+', label: 'Properties Serviced' },
        { value: '10 Years', label: 'Serving Aynor' },
        { value: '5.0 Stars', label: 'Average Rating' }
      ]}
      nearbyAreas={[
        { name: 'Conway', distance: '12 miles', href: '/locations/conway' },
        { name: 'Loris', distance: '15 miles', href: '/locations/loris' },
        { name: 'Marion', distance: '20 miles', href: '/locations/marion' },
        { name: 'Mullins', distance: '25 miles', href: '/locations/mullins' }
      ]}
      emergencyResponse="45-60 minutes"
      localTestimonials={[
        {
          name: 'Tom B.',
          review: 'They roofed both our house and barn. Excellent work on both structures. They understand rural properties and agricultural buildings. Fair pricing too.',
          rating: 5
        },
        {
          name: 'Mary Ellen P.',
          review: 'Weather Shield came out quickly after storm damage. They are honest, professional, and do quality work. Perfect for our small town needs.',
          rating: 5
        }
      ]}
    />
  );
}