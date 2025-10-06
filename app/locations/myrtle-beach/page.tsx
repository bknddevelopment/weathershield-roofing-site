import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Weather Shield Roofing | #1 Roofing Companies Myrtle Beach SC | WeatherShield Roofing',
  description: 'Weather Shield Roofing - Leading roofing companies Myrtle Beach trusts for weather protection. WeatherShield roofing experts handle weather in Myrtle Beach. Top-rated roofing companies near me with 24/7 emergency service. Call (843) 493-4963.',
  keywords: 'weather shield roofing, weathershield roofing, roofing companies myrtle beach, roofing companies near me, weather myrtle beach, weather in myrtle beach, weather, myrtle beach roofing, roof repair myrtle beach, roof replacement myrtle beach, storm damage myrtle beach, weather protection myrtle beach',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/myrtle-beach',
  },
  openGraph: {
    title: 'Weather Shield Roofing Myrtle Beach | Top Roofing Companies Myrtle Beach | WeatherShield',
    description: 'Weather Shield Roofing - Premier roofing companies Myrtle Beach relies on. WeatherShield roofing protects against weather in Myrtle Beach. Leading roofing companies near me.',
    url: 'https://weathershieldroofers.com/locations/myrtle-beach',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/myrtle-beach-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Myrtle Beach, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function MyrtleBeachPage() {
  return (
    <LocationPageTemplate
      city="Myrtle Beach"
      state="SC"
      zipCodes={['29572', '29575', '29577', '29578', '29579', '29587', '29588']}
      population="38,000+"
      description="As a part of the Myrtle Beach community, Weather Shield Roofing is a leading provider of exceptional roofing services. Our expertise spans across residential and commercial projects, ensuring homes and businesses alike are equipped with the best in roofing, gutters, and siding installations, perfectly suited to the coastal environment."
      neighborhoods={[
        'Downtown Myrtle Beach',
        'Market Common',
        'Carolina Forest',
        'Grande Dunes',
        'Dunes Club',
        'Pine Lakes',
        'Myrtlewood',
        'Arcadian Shores',
        'Briarcliffe Acres',
        'Forest Dunes'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane & Weather Protection',
          description: 'Weather Shield Roofing provides hurricane-resistant systems for weather in Myrtle Beach'
        },
        {
          icon: null,
          title: 'Coastal Weather Damage',
          description: 'WeatherShield roofing experts use weather-resistant materials for Myrtle Beach conditions'
        },
        {
          icon: null,
          title: 'Weather & UV Protection',
          description: 'Weather Shield Roofing uses UV-resistant materials to protect against weather Myrtle Beach experiences'
        },
        {
          icon: null,
          title: 'Storm & Weather Defense',
          description: 'Leading roofing companies Myrtle Beach choose Weather Shield Roofing for superior weather protection'
        }
      ]}
      localStats={[
        { value: '< 1 Hour', label: 'Response Time' },
        { value: '2,000+', label: 'Homes Protected by Weather Shield Roofing' },
        { value: '15+ Years', label: 'WeatherShield Roofing in Myrtle Beach' },
        { value: '5.0 Stars', label: 'Top-Rated Roofing Companies Myrtle Beach' }
      ]}
      nearbyAreas={[
        { name: 'North Myrtle Beach', distance: '10 miles', href: '/locations/north-myrtle-beach' },
        { name: 'Socastee', distance: '5 miles', href: '/locations/socastee' },
        { name: 'Conway', distance: '15 miles', href: '/locations/conway' },
        { name: 'Georgetown', distance: '30 miles', href: '/locations/georgetown' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'John D.',
          review: 'Weather Shield Roofing responded immediately after weather damage from Hurricane Florence. Among all roofing companies Myrtle Beach has, WeatherShield roofing proved they are the best. Outstanding weather protection service!',
          rating: 5
        },
        {
          name: 'Lisa K.',
          review: 'Living near the ocean means constant weather in Myrtle Beach challenges our roof. Weather Shield Roofing installed weatherproof protection that beats all other roofing companies near me. WeatherShield roofing is highly recommended!',
          rating: 5
        },
        {
          name: 'Mike R.',
          review: 'Weather Shield Roofing is professional and prompt with fair pricing. They understand weather Myrtle Beach throws at us and use weatherproof materials. Best roofing companies Myrtle Beach has - WeatherShield roofing is #1!',
          rating: 5
        }
      ]}
    />
  );
}