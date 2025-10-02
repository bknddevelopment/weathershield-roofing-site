import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Huntersville Roofing Services | Weather Shield Roofing | Huntersville, NC',
  description: 'Professional roofing services in Huntersville, NC. Weather Shield Roofing offers expert roof installation, repair, and storm damage services for Huntersville homes. Call (843) 493-4963.',
  keywords: 'Huntersville roofing, roofing contractors Huntersville NC, Huntersville roof repair, Huntersville roof replacement, storm damage Huntersville, roofing companies Huntersville',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/huntersville',
  },
  openGraph: {
    title: 'Huntersville, NC Roofing Services | Weather Shield Roofing',
    description: 'Premier roofing contractor in Huntersville, NC. Professional residential and commercial roofing installation, repair, and maintenance services.',
    url: 'https://weathershieldroofers.com/locations/huntersville',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/huntersville-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Huntersville, NC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function HuntersvillePage() {
  return (
    <LocationPageTemplate
      city="Huntersville"
      state="NC"
      zipCodes={['28070', '28078']}
      population="61,376"
      description="In the vibrant lakeside community of Huntersville, NC, we provide premium roofing services designed to protect your investment from North Carolina's challenging weather. From waterfront properties to suburban neighborhoods, our experienced team delivers exceptional roofing solutions with attention to detail and quality craftsmanship."
      neighborhoods={[
        'Downtown Huntersville',
        'Birkdale Village',
        'Wynfield',
        'Skybrook',
        'Vermillion',
        'Gilead Ridge',
        'Peninsula',
        'Northcross',
        'Oak Ridge',
        'Antiquity',
        'Bradford',
        'Rosedale'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Lake Effect Weather',
          description: 'Proximity to Lake Norman creates unique moisture challenges requiring specialized waterproofing'
        },
        {
          icon: null,
          title: 'Severe Storms',
          description: 'Frequent thunderstorms and high winds demand impact-resistant materials'
        },
        {
          icon: null,
          title: 'Humidity Control',
          description: 'High humidity levels require proper ventilation and moisture management'
        },
        {
          icon: null,
          title: 'Winter Weather',
          description: 'Ice storms and freeze-thaw cycles need durable, flexible roofing systems'
        }
      ]}
      localStats={[
        { value: '1-2 Hours', label: 'Response Time' },
        { value: '400+', label: 'Huntersville Homes Protected' },
        { value: '10+ Years', label: 'Serving Huntersville' },
        { value: '4.9 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Charlotte', distance: '14 miles', href: '/locations/charlotte-nc' },
        { name: 'Concord', distance: '12 miles', href: '/locations/concord' },
        { name: 'Gastonia', distance: '30 miles', href: '/locations/gastonia' }
      ]}
      emergencyResponse="1-2 hours"
      localTestimonials={[
        {
          name: 'Andrew W.',
          review: 'Our lakefront home in Peninsula required special attention due to moisture concerns. Weather Shield designed a ventilation system that has kept our roof in perfect condition. Their expertise with waterfront properties is exceptional.',
          rating: 5
        },
        {
          name: 'Rachel N.',
          review: 'After severe storm damage near Birkdale Village, Weather Shield responded immediately. They coordinated with our insurance and completed the roof replacement quickly. The quality is outstanding and we feel secure knowing our home is protected.',
          rating: 5
        },
        {
          name: 'Christopher L.',
          review: 'Weather Shield installed a beautiful architectural shingle roof on our Wynfield home. The crew was professional, worked efficiently, and the attention to detail was impressive. Best roofing experience we\'ve had in Huntersville!',
          rating: 5
        }
      ]}
    />
  );
}
