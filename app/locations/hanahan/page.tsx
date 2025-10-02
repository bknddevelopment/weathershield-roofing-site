import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Hanahan SC Roofing Services | Weather Shield Roofing',
  description: 'Professional roofing services in Hanahan, SC. Licensed roofers serving Hanahan with 24/7 emergency repairs, roof replacements, and storm damage restoration. Call (843) 877-5539.',
  keywords: 'Hanahan roofing, roofing contractors Hanahan SC, Hanahan roof repair, storm damage Hanahan, emergency roofing Hanahan, roofing companies Hanahan',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/hanahan',
  },
  openGraph: {
    title: 'Hanahan SC Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing contractor in Hanahan, SC. Expert residential and commercial roofing services with fast emergency response.',
    url: 'https://weathershieldroofers.com/locations/hanahan',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/hanahan-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Hanahan, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function HanahanPage() {
  return (
    <LocationPageTemplate
      city="Hanahan"
      state="SC"
      zipCodes={['29410', '29418']}
      population="26,838"
      description="Serving the Hanahan community with pride, we provide comprehensive roofing services designed to protect your home or business from the Lowcountry's challenging weather. From routine maintenance to complete roof replacements, our experienced team delivers quality workmanship and exceptional customer care."
      neighborhoods={[
        'Yeamans Hall',
        'Tanner Ford',
        'Eagle Landing',
        'Russelldale',
        'Northwoods',
        'Hanahan Village',
        'Myers Subdivision',
        'Marrington',
        'Lieben Park',
        'Foster Creek'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane Threats',
          description: 'Charleston area hurricanes require impact-resistant roofing systems'
        },
        {
          icon: null,
          title: 'Severe Storms',
          description: 'Frequent thunderstorms with high winds and heavy rain'
        },
        {
          icon: null,
          title: 'Humidity Damage',
          description: 'Constant moisture demands proper ventilation and moisture barriers'
        },
        {
          icon: null,
          title: 'Lowcountry Heat',
          description: 'Intense summer heat requires energy-efficient roofing materials'
        }
      ]}
      localStats={[
        { value: '1 Hour', label: 'Average Response Time' },
        { value: '300+', label: 'Hanahan Homes Protected' },
        { value: '10+ Years', label: 'Serving Hanahan' },
        { value: '5.0 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Goose Creek', distance: '8 miles', href: '/locations/goose-creek' },
        { name: 'Charleston', distance: '15 miles', href: '/locations/charleston-sc' },
        { name: 'Summerville', distance: '15 miles', href: '/locations/summerville' },
        { name: 'Mount Pleasant', distance: '12 miles', href: '/locations/mount-pleasant' },
        { name: 'Moncks Corner', distance: '18 miles', href: '/locations/moncks-corner' }
      ]}
      emergencyResponse="1 hour"
      localTestimonials={[
        {
          name: 'Carol B.',
          review: 'Weather Shield replaced our aging roof in Eagle Landing. The team was courteous, worked efficiently, and left our property immaculate. The new roof has already survived two storms perfectly!',
          rating: 5
        },
        {
          name: 'Steven P.',
          review: 'We had emergency roof damage during a severe thunderstorm. Weather Shield responded immediately and had temporary repairs done within hours. Permanent fix completed the next week. Outstanding!',
          rating: 5
        },
        {
          name: 'Karen J.',
          review: 'Our Hanahan home needed a complete reroof. Weather Shield provided multiple options, excellent pricing, and superior installation. Could not be happier with the results!',
          rating: 5
        }
      ]}
    />
  );
}
