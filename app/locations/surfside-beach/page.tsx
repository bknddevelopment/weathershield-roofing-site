import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Waves, Wind, Sun, Droplets } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Surfside Beach Roofing Contractor | Weather Shield Roofing | Surfside Beach, SC',
  description: 'Professional roofing services in Surfside Beach, SC. Emergency roof repair, replacement, and storm damage restoration. Licensed & insured coastal roofing experts. Call (843) 877-5539.',
  keywords: 'roofing contractor surfside beach, Surfside Beach roofing, coastal roof repair surfside beach, emergency roofer surfside beach, storm damage repair surfside beach, beach house roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/surfside-beach',
  },
  openGraph: {
    title: 'Surfside Beach Roofing Contractor | Weather Shield Roofing',
    description: 'Expert coastal roofing services in Surfside Beach, SC. Emergency repairs, storm damage restoration, and beach house roofing specialists.',
    url: 'https://weathershieldroofers.com/locations/surfside-beach',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/surfside-beach-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Surfside Beach, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function SurfsideBeachPage() {
  return (
    <LocationPageTemplate
      city="Surfside Beach"
      state="SC"
      zipCodes={['29575', '29576']}
      population="4,500+"
      description="Surfside Beach's premier coastal roofing specialists, protecting beach homes and properties with hurricane-resistant systems and salt-air resistant materials. Our expertise in coastal construction ensures your roof withstands the unique challenges of oceanfront living."
      neighborhoods={[
        'Surfside Beach Gardens',
        'Floral Beach',
        'Ocean Lakes',
        'Inlet Harbour',
        'Lakeside at Surfside',
        'Melody Park',
        'Surfside Shores',
        'Waterway Landing'
      ]}
      weatherChallenges={[
        {
          icon: <Waves className="w-6 h-6" />,
          title: 'Salt Air Corrosion',
          description: 'Proximity to ocean requires specialized salt-resistant roofing materials and protective coatings'
        },
        {
          icon: <Wind className="w-6 h-6" />,
          title: 'Hurricane Force Winds',
          description: 'Coastal location demands wind-rated shingles and reinforced installation methods'
        },
        {
          icon: <Sun className="w-6 h-6" />,
          title: 'Intense UV Exposure',
          description: 'Beach properties require fade-resistant and heat-reflective roofing systems'
        },
        {
          icon: <Droplets className="w-6 h-6" />,
          title: 'Heavy Moisture',
          description: 'High humidity and frequent storms need superior waterproofing and ventilation'
        }
      ]}
      localStats={[
        { value: '1 Hour', label: 'Emergency Response' },
        { value: '500+', label: 'Beach Homes Protected' },
        { value: '15+ Years', label: 'Coastal Experience' },
        { value: '5.0 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Myrtle Beach', distance: '5 miles', href: '/locations/myrtle-beach' },
        { name: 'Garden City', distance: '3 miles', href: '/locations/garden-city' },
        { name: 'Pawleys Island', distance: '15 miles', href: '/locations/pawleys-island' },
        { name: 'Murrells Inlet', distance: '10 miles', href: '/locations/murrells-inlet' }
      ]}
      emergencyResponse="1 hour"
      localTestimonials={[
        {
          name: 'Robert M.',
          review: 'After Hurricane damage to our beachfront home, Weather Shield responded within an hour. They installed a temporary tarp and completed full replacement in days. Their coastal roofing expertise is unmatched!',
          rating: 5
        },
        {
          name: 'Linda K.',
          review: 'We needed a salt-resistant roof for our Surfside vacation rental. Weather Shield recommended the perfect materials and the installation was flawless. No issues in three years of coastal weather.',
          rating: 5
        },
        {
          name: 'James P.',
          review: 'Emergency leak during a storm and they were at our house in under an hour. Professional, fast, and reasonably priced. Highly recommend for any Surfside Beach roofing needs.',
          rating: 5
        }
      ]}
    />
  );
}