import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Fort Mill Roofing Services | Weather Shield Roofing | Fort Mill, SC',
  description: 'Professional roofing services in Fort Mill, SC. Weather Shield Roofing provides expert roof installation, repair, and maintenance for Fort Mill homes and businesses. Call (843) 493-4963.',
  keywords: 'Fort Mill roofing, roofing contractors Fort Mill SC, Fort Mill roof repair, Fort Mill roof replacement, commercial roofing Fort Mill, storm damage Fort Mill',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/fort-mill',
  },
  openGraph: {
    title: 'Fort Mill, SC Roofing Services | Weather Shield Roofing',
    description: 'Premier roofing contractor in Fort Mill, SC. Expert residential and commercial roofing installation, repair, and storm damage restoration.',
    url: 'https://weathershieldroofers.com/locations/fort-mill',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/fort-mill-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Fort Mill, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function FortMillPage() {
  return (
    <LocationPageTemplate
      city="Fort Mill"
      state="SC"
      zipCodes={['29707', '29708', '29715', '29716']}
      population="22,284"
      description="Serving the dynamic community of Fort Mill, SC, we deliver premium roofing services designed to protect your home or business from the Carolinas' challenging weather. From established neighborhoods to new developments near Charlotte, our team provides exceptional roofing solutions with professional expertise and quality craftsmanship."
      neighborhoods={[
        'Downtown Fort Mill',
        'Baxter Village',
        'Springfield',
        'Waterford',
        'Gold Hill Plantation',
        'Kingsley',
        'Tega Cay',
        'Stonecrest',
        'Lake Wylie',
        'Regent Park',
        'Garden Valley',
        'Park Place'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Severe Weather',
          description: 'Location between Charlotte and Rock Hill brings diverse storm systems requiring robust roofing'
        },
        {
          icon: null,
          title: 'High Winds',
          description: 'Thunderstorms and weather fronts create high wind events needing secure installations'
        },
        {
          icon: null,
          title: 'Heavy Precipitation',
          description: 'Significant rainfall requires proper drainage systems and waterproofing'
        },
        {
          icon: null,
          title: 'Temperature Swings',
          description: 'Seasonal temperature variations demand flexible, durable roofing materials'
        }
      ]}
      localStats={[
        { value: '24/7', label: 'Response Time' },
        { value: '300+', label: 'Fort Mill Homes Protected' },
        { value: '10+ Years', label: 'Serving Fort Mill' },
        { value: '4.9 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Rock Hill', distance: '8 miles', href: '/locations/rock-hill' },
        { name: 'Charlotte', distance: '20 miles', href: '/locations/charlotte-nc' },
        { name: 'Indian Trail', distance: '12 miles', href: '/locations/indian-trail' }
      ]}
      emergencyResponse="24/7"
      localTestimonials={[
        {
          name: 'Jessica M.',
          review: 'Weather Shield installed a beautiful roof on our home in Baxter Village. The team was professional, efficient, and the quality is exceptional. They took time to explain every step and the final result exceeded our expectations.',
          rating: 5
        },
        {
          name: 'Robert S.',
          review: 'After storm damage in Springfield, Weather Shield provided emergency tarping service within hours. Their quick response prevented water damage and they completed the full replacement ahead of schedule. Outstanding service!',
          rating: 5
        },
        {
          name: 'Amanda L.',
          review: 'Our commercial property near I-77 needed roof repairs, and Weather Shield delivered professional service from estimate to completion. They worked around our business hours and the quality is top-notch. Highly recommend for Fort Mill businesses!',
          rating: 5
        }
      ]}
    />
  );
}
