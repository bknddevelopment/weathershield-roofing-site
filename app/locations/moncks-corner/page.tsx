import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Moncks Corner SC Roofing Services | Weather Shield Roofing',
  description: 'Professional roofing services in Moncks Corner, SC. Licensed roofers serving Moncks Corner with 24/7 emergency repairs, roof replacements, and storm damage restoration. Call (843) 877-5539.',
  keywords: 'Moncks Corner roofing, roofing contractors Moncks Corner SC, Moncks Corner roof repair, storm damage Moncks Corner, emergency roofing Moncks Corner, roofing companies Moncks Corner',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/moncks-corner',
  },
  openGraph: {
    title: 'Moncks Corner SC Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing contractor in Moncks Corner, SC. Expert residential and commercial roofing services with fast emergency response.',
    url: 'https://weathershieldroofers.com/locations/moncks-corner',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/moncks-corner-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Moncks Corner, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function MoncksCornerPage() {
  return (
    <LocationPageTemplate
      city="Moncks Corner"
      state="SC"
      zipCodes={['29461']}
      population="13,297"
      description="Serving Moncks Corner, SC, the gateway to Lake Moultrie and the heart of Berkeley County, we provide expert roofing services tailored to both residential and commercial needs. Our commitment to quality craftsmanship and customer satisfaction makes us the trusted choice for all your roofing requirements."
      neighborhoods={[
        'The Lakes',
        'Cypress Gardens',
        'Bonneau Beach',
        'Pimlico',
        'Lewisfield Plantation',
        'Whitesville',
        'Devon Forest',
        'Oakley',
        'Russellville',
        'Old Santee Canal'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Lake Effect Weather',
          description: 'Proximity to Lake Moultrie creates unique humidity and wind patterns'
        },
        {
          icon: null,
          title: 'Hurricane Exposure',
          description: 'Inland hurricane winds still require storm-resistant roofing'
        },
        {
          icon: null,
          title: 'Heavy Rainfall',
          description: 'Lowcountry drainage challenges demand superior waterproofing'
        },
        {
          icon: null,
          title: 'Rural Debris',
          description: 'Tree coverage and agricultural surroundings increase roof maintenance needs'
        }
      ]}
      localStats={[
        { value: '24/7', label: 'Response Time' },
        { value: '250+', label: 'Moncks Corner Homes Protected' },
        { value: '10+ Years', label: 'Serving Moncks Corner' },
        { value: '5.0 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Goose Creek', distance: '12 miles', href: '/locations/goose-creek' },
        { name: 'Summerville', distance: '20 miles', href: '/locations/summerville' },
        { name: 'Charleston', distance: '30 miles', href: '/locations/charleston-sc' },
        { name: 'Hanahan', distance: '18 miles', href: '/locations/hanahan' },
        { name: 'Mount Pleasant', distance: '25 miles', href: '/locations/mount-pleasant' }
      ]}
      emergencyResponse="24/7"
      localTestimonials={[
        {
          name: 'William T.',
          review: 'Our lakefront home in The Lakes needed specialized roofing due to constant moisture. Weather Shield installed a perfect system with excellent ventilation. No more mold issues!',
          rating: 5
        },
        {
          name: 'Deborah M.',
          review: 'After storm damage to our Moncks Corner property, Weather Shield provided emergency service and worked seamlessly with our insurance adjuster. Professional from start to finish!',
          rating: 5
        },
        {
          name: 'Charles R.',
          review: 'We own agricultural buildings in the Moncks Corner area. Weather Shield handles all our commercial roofing needs with expertise and fair pricing. Highly reliable team!',
          rating: 5
        }
      ]}
    />
  );
}
