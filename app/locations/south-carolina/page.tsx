import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'South Carolina Roofing Services | Weather Shield Roofing | Statewide Coverage',
  description: 'Weather Shield Roofing serves all of South Carolina with excellence. From upstate to lowcountry, we deliver quality roofing, gutter, and siding services. Call (843) 493-4963.',
  keywords: 'South Carolina roofing, SC roofing contractors, roofing services South Carolina, SC roof repair, SC roof replacement, commercial roofing SC, storm damage South Carolina',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/south-carolina',
  },
  openGraph: {
    title: 'South Carolina Roofing Services | Weather Shield Roofing',
    description: 'Professional roofing services throughout South Carolina. From the upstate to the lowcountry, we deliver excellence in roofing, gutters, and siding.',
    url: 'https://weathershieldroofers.com/locations/south-carolina',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/south-carolina-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in South Carolina',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function SouthCarolinaPage() {
  return (
    <LocationPageTemplate
      city="South Carolina"
      state="Statewide"
      zipCodes={['29001-29945']} // Representative range for SC
      population="5.2 Million"
      description="Similarly, in South Carolina, our presence is marked by a strong commitment to delivering excellence in every project we undertake. From the upstate to the lowcountry, we cater to the diverse roofing needs of South Carolina's residents and businesses, ensuring quality and reliability at every step."
      neighborhoods={[
        'Charleston Metro',
        'Columbia',
        'Greenville',
        'Myrtle Beach',
        'Spartanburg',
        'Florence',
        'Rock Hill',
        'Mount Pleasant',
        'Summerville',
        'Hilton Head',
        'Aiken',
        'Anderson',
        'North Charleston',
        'Goose Creek',
        'Conway'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane & Tropical Storms',
          description: 'Coastal regions require hurricane-resistant roofing systems year-round'
        },
        {
          icon: null,
          title: 'Coastal Humidity',
          description: 'High humidity levels demand proper ventilation and moisture control'
        },
        {
          icon: null,
          title: 'Severe Weather',
          description: 'Thunderstorms, tornadoes, and hail require impact-resistant materials'
        },
        {
          icon: null,
          title: 'Temperature Extremes',
          description: 'Hot summers and variable winters need adaptable roofing solutions'
        }
      ]}
      localStats={[
        { value: '1-3 Hours', label: 'Average Response' },
        { value: '5,000+', label: 'SC Homes Protected' },
        { value: '15+ Years', label: 'Serving South Carolina' },
        { value: '5.0 Stars', label: 'Statewide Rating' }
      ]}
      nearbyAreas={[
        { name: 'Charleston', distance: 'Lowcountry', href: '/locations/charleston-sc' },
        { name: 'Myrtle Beach', distance: 'Grand Strand', href: '/locations/myrtle-beach' },
        { name: 'Florence', distance: 'Pee Dee Region', href: '/locations/florence' },
        { name: 'Columbia', distance: 'Midlands', href: '/locations/columbia' },
        { name: 'Greenville', distance: 'Upstate', href: '/locations/greenville' },
        { name: 'North Carolina', distance: 'Neighboring State', href: '/locations/north-carolina' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'William S.',
          review: 'Weather Shield Roofing has serviced multiple properties across South Carolina for our company. Their consistency, quality, and professionalism are unmatched. They understand the unique challenges of SC weather perfectly.',
          rating: 5
        },
        {
          name: 'Patricia G.',
          review: 'From our beach house in Myrtle Beach to our primary home in Columbia, Weather Shield has been our trusted roofing partner. They deliver exceptional service anywhere in South Carolina. Highly recommended statewide!',
          rating: 5
        },
        {
          name: 'Robert L.',
          review: 'After hurricane damage to our Charleston property, Weather Shield responded immediately. Their expertise in coastal roofing and insurance processes made recovery smooth. The best roofing company in South Carolina!',
          rating: 5
        }
      ]}
    />
  );
}