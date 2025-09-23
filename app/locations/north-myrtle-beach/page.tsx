import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Roofing Services in North Myrtle Beach, SC | Weather Shield Roofing',
  description: 'Premier roofing contractors in North Myrtle Beach. Specializing in coastal roofing, storm damage repair, and luxury home installations. Call (843) 493-4963.',
  keywords: 'North Myrtle Beach roofing, roofing contractors North Myrtle Beach SC, coastal roofing, beach house roofing, storm damage North Myrtle Beach',
  openGraph: {
    title: 'North Myrtle Beach Roofing Services | Weather Shield Roofing',
    description: 'Expert coastal roofing services in North Myrtle Beach, SC. Protecting beachfront properties since 2008.',
    url: 'https://weathershieldroofers.com/locations/north-myrtle-beach',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: '/images/north-myrtle-beach-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in North Myrtle Beach, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function NorthMyrtleBeachPage() {
  return (
    <LocationPageTemplate
      city="North Myrtle Beach"
      state="SC"
      zipCodes={['29582', '29597', '29566']}
      population="18,000+"
      description="North Myrtle Beach's oceanfront properties and luxury homes require specialized coastal roofing expertise. We protect your investment with premium materials and techniques designed to withstand salt air, high winds, and severe weather."
      neighborhoods={[
        'Cherry Grove',
        'Ocean Drive',
        'Crescent Beach',
        'Windy Hill',
        'Atlantic Beach',
        'Tilghman Beach',
        'Barefoot Resort',
        'Sea Mountain'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane Force Winds',
          description: 'Direct coastal exposure requires maximum wind-rated installations'
        },
        {
          icon: null,
          title: 'Salt Spray Corrosion',
          description: 'Constant salt exposure demands specialized materials and coatings'
        },
        {
          icon: null,
          title: 'Storm Surge Risk',
          description: 'Elevated structures need reinforced roofing systems'
        }
      ]}
      localStats={[
        { value: '30-60 Min', label: 'Response Time' },
        { value: '800+', label: 'Beach Homes Serviced' },
        { value: '15 Years', label: 'Coastal Experience' },
        { value: '5.0 Stars', label: 'Average Rating' }
      ]}
      nearbyAreas={[
        { name: 'Myrtle Beach', distance: '10 miles', href: '/locations/myrtle-beach' },
        { name: 'Little River', distance: '5 miles', href: '/locations/little-river' },
        { name: 'Loris', distance: '15 miles', href: '/locations/loris' },
        { name: 'Conway', distance: '20 miles', href: '/locations/conway' }
      ]}
      emergencyResponse="30-60 minutes"
      localTestimonials={[
        {
          name: 'David R.',
          review: 'Our beach house needed a complete roof replacement. Weather Shield used top-grade materials perfect for coastal conditions. Outstanding work and warranty.',
          rating: 5
        },
        {
          name: 'Linda S.',
          review: 'After Hurricane Ian, they were here within hours. Professional emergency repairs saved our home from further damage. Cannot recommend highly enough!',
          rating: 5
        }
      ]}
    />
  );
}