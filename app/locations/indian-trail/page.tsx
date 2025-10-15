import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Indian Trail Roofing Services | Weather Shield Roofing | Indian Trail, NC',
  description: 'Professional roofing services in Indian Trail, NC. Weather Shield Roofing provides expert roof installation, repair, and maintenance for Indian Trail residents. Call (843) 493-4963.',
  keywords: 'Indian Trail roofing, roofing contractors Indian Trail NC, Indian Trail roof repair, Indian Trail roof replacement, storm damage Indian Trail, roofing companies Indian Trail',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/indian-trail',
  },
  openGraph: {
    title: 'Indian Trail, NC Roofing Services | Weather Shield Roofing',
    description: 'Professional roofing contractor in Indian Trail, NC. Expert residential roofing installation, repair, and storm damage restoration services.',
    url: 'https://weathershieldroofers.com/locations/indian-trail',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/indian-trail-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Indian Trail, NC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function IndianTrailPage() {
  return (
    <LocationPageTemplate
      city="Indian Trail"
      state="NC"
      zipCodes={['28079', '28110']}
      population="42,490"
      description="Serving the growing community of Indian Trail, NC, we deliver comprehensive roofing services designed to protect your home from the region's diverse weather challenges. From established neighborhoods to new developments, our team provides reliable roofing solutions with the quality and expertise this thriving community deserves."
      neighborhoods={[
        'Downtown Indian Trail',
        'Unionville',
        'Crooked Creek',
        'Sun Valley',
        'Rolling Hills',
        'Chestnut Lake',
        'Amber Meadows',
        'Laurel Creek',
        'Pleasant Grove',
        'Stallings',
        'Wesley Chapel',
        'Hemby Bridge'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Thunderstorm Activity',
          description: 'Frequent severe thunderstorms require impact-resistant roofing materials'
        },
        {
          icon: null,
          title: 'High Winds',
          description: 'Storm systems bring high winds requiring properly secured roofing systems'
        },
        {
          icon: null,
          title: 'Hail Events',
          description: 'Spring and summer hail storms demand durable, impact-rated materials'
        },
        {
          icon: null,
          title: 'Winter Ice',
          description: 'Occasional ice storms require proper insulation and emergency repair readiness'
        }
      ]}
      localStats={[
        { value: '24/7', label: 'Response Time' },
        { value: '200+', label: 'Indian Trail Homes Protected' },
        { value: '10+ Years', label: 'Serving Indian Trail' },
        { value: '5.0 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Charlotte', distance: '15 miles', href: '/locations/charlotte-nc' },
        { name: 'Concord', distance: '18 miles', href: '/locations/concord' },
        { name: 'Fort Mill', distance: '12 miles', href: '/locations/fort-mill' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Elizabeth T.',
          review: 'Weather Shield replaced our roof in Sun Valley after hail damage. They handled the insurance claim process expertly and the installation was flawless. Their crew was professional and respectful of our property throughout.',
          rating: 5
        },
        {
          name: 'Brandon H.',
          review: 'After a severe storm in Crooked Creek, Weather Shield responded quickly for emergency repairs. They prevented further water damage and completed the full roof replacement efficiently. Great communication and quality work!',
          rating: 5
        },
        {
          name: 'Michelle D.',
          review: 'Our new construction home in Amber Meadows needed roofing, and Weather Shield delivered exceptional service. From material selection to final inspection, they made the process easy. Highly recommend for Indian Trail residents!',
          rating: 5
        }
      ]}
    />
  );
}
