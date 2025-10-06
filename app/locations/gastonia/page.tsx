import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Gastonia Roofing Services | Weather Shield Roofing | Gastonia, NC',
  description: 'Professional roofing services in Gastonia, NC. Weather Shield Roofing provides expert roof installation, repair, and maintenance for Gastonia homes and businesses. Call (843) 493-4963.',
  keywords: 'Gastonia roofing, roofing contractors Gastonia NC, Gastonia roof repair, Gastonia roof replacement, commercial roofing Gastonia, storm damage Gastonia',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/gastonia',
  },
  openGraph: {
    title: 'Gastonia, NC Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing contractor in Gastonia, NC. Expert residential and commercial roofing installation, repair, and storm damage restoration services.',
    url: 'https://weathershieldroofers.com/locations/gastonia',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/gastonia-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Gastonia, NC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function GastoniaPage() {
  return (
    <LocationPageTemplate
      city="Gastonia"
      state="NC"
      zipCodes={['28052', '28053', '28054', '28055', '28056']}
      population="80,411"
      description="Serving the historic city of Gastonia, NC, we deliver comprehensive roofing services designed to protect your home or business from the region's diverse weather patterns. From traditional residential homes to commercial facilities, our experienced team provides reliable roofing solutions backed by quality workmanship and local expertise."
      neighborhoods={[
        'Downtown Gastonia',
        'Franklin Urban Sports',
        'Highland',
        'Cramerton',
        'Lowell',
        'Ranlo',
        'McAdenville',
        'Belmont',
        'Mount Holly',
        'Stanley',
        'Dallas',
        'South Gastonia'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Heavy Rainfall',
          description: 'High annual rainfall requires proper drainage systems and waterproofing'
        },
        {
          icon: null,
          title: 'Temperature Extremes',
          description: 'Hot summers and cold winters demand versatile roofing materials'
        },
        {
          icon: null,
          title: 'Wind Damage',
          description: 'Periodic high winds from storm systems require reinforced installations'
        },
        {
          icon: null,
          title: 'Ice and Snow',
          description: 'Winter weather events need proper insulation and ice dam prevention'
        }
      ]}
      localStats={[
        { value: '24/7', label: 'Response Time' },
        { value: '250+', label: 'Gastonia Homes Protected' },
        { value: '10+ Years', label: 'Serving Gastonia' },
        { value: '4.8 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Charlotte', distance: '23 miles', href: '/locations/charlotte-nc' },
        { name: 'Huntersville', distance: '30 miles', href: '/locations/huntersville' },
        { name: 'Rock Hill', distance: '35 miles', href: '/locations/rock-hill' }
      ]}
      emergencyResponse="24/7"
      localTestimonials={[
        {
          name: 'Patricia S.',
          review: 'Our commercial property in downtown Gastonia needed a complete roof replacement. Weather Shield completed the project on schedule with minimal disruption to our business. Professional service from estimate to final inspection.',
          rating: 5
        },
        {
          name: 'Thomas B.',
          review: 'After wind damage in Highland, Weather Shield provided a thorough inspection and honest assessment. Their repair work was excellent and reasonably priced. They stand behind their work!',
          rating: 5
        },
        {
          name: 'Linda M.',
          review: 'Weather Shield installed a beautiful new roof on our home in Cramerton. The crew was respectful, cleaned up thoroughly each day, and the final result exceeded our expectations. Highly recommend for Gastonia area homeowners.',
          rating: 5
        }
      ]}
    />
  );
}
