import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Greensboro Roofing Services | Weather Shield Roofing | Greensboro, NC',
  description: 'Professional roofing services in Greensboro, NC. Weather Shield Roofing offers expert residential and commercial roofing solutions for the Triad area. Licensed roofers serving Greensboro since 2010. Call (843) 493-4963.',
  keywords: 'Greensboro roofing, roofing contractors Greensboro NC, Greensboro roof repair, Triad roofing, commercial roofing Greensboro, storm damage Greensboro, roofing companies Greensboro',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/greensboro',
  },
  openGraph: {
    title: 'Greensboro, NC Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing contractor in Greensboro, NC. Serving the Triad with expert roofing installation, repair, and maintenance. Professional commercial and residential roofing services.',
    url: 'https://weathershieldroofers.com/locations/greensboro',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/greensboro-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Greensboro, NC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function GreensboroPage() {
  return (
    <LocationPageTemplate
      city="Greensboro"
      state="NC"
      zipCodes={['27401', '27403', '27405', '27406', '27407', '27408', '27409', '27410', '27412', '27413', '27455', '27455']}
      population="299,035"
      description="In the Gate City and the heart of the Piedmont Triad, we deliver comprehensive roofing services for Greensboro's established neighborhoods and growing communities. Our experienced team understands the unique roofing challenges of the Triad region and provides solutions built to last through North Carolina's varied weather patterns."
      neighborhoods={[
        'Downtown Greensboro',
        'Westerwood',
        'Irving Park',
        'Fisher Park',
        'Adams Farm',
        'Lake Jeanette',
        'Starmount',
        'Lindley Park',
        'Friendly Hills',
        'Guilford College',
        'Latham Park',
        'Sunset Hills',
        'Lake Daniel',
        'Forest Oaks',
        'Sedgefield'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Hail Storms',
          description: 'Frequent severe weather events require impact-resistant shingles and materials'
        },
        {
          icon: null,
          title: 'Ice and Snow',
          description: 'Winter weather demands proper insulation and ice dam prevention'
        },
        {
          icon: null,
          title: 'High Winds',
          description: 'Triad wind patterns require reinforced roofing systems and secure installation'
        },
        {
          icon: null,
          title: 'Humidity',
          description: 'Piedmont humidity levels need proper ventilation and moisture-resistant materials'
        }
      ]}
      localStats={[
        { value: '2-3 Hours', label: 'Response Time' },
        { value: '600+', label: 'Triad Homes Protected' },
        { value: '10+ Years', label: 'Serving Greensboro' },
        { value: '4.9 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Raleigh', distance: '75 miles', href: '/locations/raleigh' },
        { name: 'Charlotte', distance: '90 miles', href: '/locations/charlotte-nc' },
        { name: 'Asheville', distance: '180 miles', href: '/locations/asheville' }
      ]}
      emergencyResponse="2-3 hours"
      localTestimonials={[
        {
          name: 'Patricia S.',
          review: 'After hail damage in Irving Park, Weather Shield provided excellent service from inspection to completion. They handled all the insurance paperwork and our new roof looks beautiful. The team was professional and respectful of our historic neighborhood.',
          rating: 5
        },
        {
          name: 'Mark L.',
          review: 'Our commercial building in downtown Greensboro needed a complete roof replacement. Weather Shield worked around our business schedule and delivered exceptional results. Their expertise in flat commercial roofing systems is impressive.',
          rating: 5
        },
        {
          name: 'Susan W.',
          review: 'Fantastic experience with Weather Shield! They re-roofed our home in Adams Farm and the attention to detail was outstanding. They cleaned up thoroughly each day and completed the project ahead of schedule. Highly recommend for Greensboro homeowners!',
          rating: 5
        }
      ]}
    />
  );
}
