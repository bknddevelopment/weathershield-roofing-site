import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Roofing Services in Conway, SC | Weather Shield Roofing',
  description: 'Professional roofing contractors serving Conway, SC. Expert installation, repair, and storm damage restoration. 24/7 emergency service available. Call (843) 493-4963.',
  keywords: 'Conway roofing, roofing contractors Conway SC, roof repair Conway, roof replacement Conway, storm damage Conway',
  openGraph: {
    title: 'Conway Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing services in Conway, SC. Professional installation, repairs, and storm damage restoration.',
    url: 'https://weathershieldroofers.com/locations/conway',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: '/images/conway-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Conway, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function ConwayPage() {
  return (
    <LocationPageTemplate
      city="Conway"
      state="SC"
      zipCodes={['29526', '29527', '29528']}
      population="24,000+"
      description="As the county seat of Horry County, Conway is a historic city experiencing rapid growth. Our roofing services protect homes from the Waccamaw River area to Highway 501, ensuring quality protection for this charming riverside community."
      neighborhoods={[
        'Downtown Conway',
        'Conway Medical Center Area',
        'Coastal Carolina University Area',
        'Highway 501 Corridor',
        'Waccamaw River District',
        'Kingston Community',
        'Homewood',
        'Rivertown'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'River Flooding',
          description: 'Proximity to Waccamaw River requires superior water protection'
        },
        {
          icon: null,
          title: 'Hurricane Impact',
          description: 'Inland location still faces significant hurricane winds and rain'
        },
        {
          icon: null,
          title: 'High Humidity',
          description: 'Year-round humidity demands proper ventilation and moisture control'
        }
      ]}
      localStats={[
        { value: '1-2 Hours', label: 'Response Time' },
        { value: '500+', label: 'Conway Homes Serviced' },
        { value: '15 Years', label: 'Serving Conway' },
        { value: '5.0 Stars', label: 'Average Rating' }
      ]}
      nearbyAreas={[
        { name: 'Myrtle Beach', distance: '15 miles', href: '/locations/myrtle-beach' },
        { name: 'Aynor', distance: '12 miles', href: '/locations/aynor' },
        { name: 'Loris', distance: '20 miles', href: '/locations/loris' },
        { name: 'Socastee', distance: '10 miles', href: '/locations/socastee' }
      ]}
      emergencyResponse="1-2 hours"
      localTestimonials={[
        {
          name: 'Sarah M.',
          review: 'Weather Shield replaced our roof after hurricane damage. They worked directly with our insurance and completed everything quickly. Highly recommend for Conway residents!',
          rating: 5
        },
        {
          name: 'Robert T.',
          review: 'Professional team, fair pricing, and excellent work. They understand the specific challenges of roofing near the river. Very satisfied with our new roof.',
          rating: 5
        }
      ]}
    />
  );
}