import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Wilmington Roofing Services | Weather Shield Roofing | Wilmington, NC',
  description: 'Professional roofing services in Wilmington, NC. Weather Shield Roofing specializes in coastal roofing solutions for the Cape Fear region. Hurricane-resistant systems and salt-air protection. Call (843) 493-4963.',
  keywords: 'Wilmington roofing, roofing contractors Wilmington NC, Wilmington roof repair, coastal roofing, hurricane roofing Wilmington, storm damage Wilmington, roofing companies Wilmington',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/wilmington',
  },
  openGraph: {
    title: 'Wilmington, NC Roofing Services | Weather Shield Roofing',
    description: 'Expert coastal roofing contractor in Wilmington, NC. Specializing in hurricane-resistant systems and salt-air protection for Cape Fear area homes and businesses.',
    url: 'https://weathershieldroofers.com/locations/wilmington',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/wilmington-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Wilmington, NC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function WilmingtonPage() {
  return (
    <LocationPageTemplate
      city="Wilmington"
      state="NC"
      zipCodes={['28401', '28403', '28405', '28409', '28411', '28412']}
      population="115,933"
      description="In North Carolina's premier coastal city, we provide specialized roofing solutions designed for the unique challenges of the Cape Fear region. Our hurricane-resistant systems and salt-air protection ensure your Wilmington property is protected year-round. From historic downtown homes to modern beachfront properties, we deliver coastal roofing expertise backed by 10+ years of local experience."
      neighborhoods={[
        'Downtown Wilmington',
        'Wrightsville Beach',
        'Carolina Beach',
        'Landfall',
        'Mayfaire',
        'Ogden',
        'Forest Hills',
        'Wilmington Historic District',
        'Monkey Junction',
        'Porter\'s Neck',
        'Masonboro',
        'Figure Eight Island',
        'Kure Beach',
        'Castle Hayne',
        'Leland'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane Threats',
          description: 'Coastal location requires hurricane-rated roofing systems and impact-resistant materials'
        },
        {
          icon: null,
          title: 'Salt Air Corrosion',
          description: 'Ocean proximity demands corrosion-resistant materials and specialized coatings'
        },
        {
          icon: null,
          title: 'High Winds',
          description: 'Coastal wind patterns require reinforced installation and uplift-resistant systems'
        },
        {
          icon: null,
          title: 'Heavy Rainfall',
          description: 'Tropical weather systems need superior drainage and waterproofing'
        }
      ]}
      localStats={[
        { value: '24/7', label: 'Response Time' },
        { value: '500+', label: 'Coastal Homes Protected' },
        { value: '10+ Years', label: 'Serving Wilmington' },
        { value: '4.9 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Raleigh', distance: '130 miles', href: '/locations/raleigh' },
        { name: 'Charlotte', distance: '200 miles', href: '/locations/charlotte-nc' },
        { name: 'Myrtle Beach', distance: '70 miles', href: '/locations/myrtle-beach' }
      ]}
      emergencyResponse="24/7"
      localTestimonials={[
        {
          name: 'Thomas R.',
          review: 'After Hurricane Florence, Weather Shield was there immediately with emergency tarping and then expertly replaced our entire roof. They understand coastal construction and their hurricane-resistant system has performed flawlessly. Outstanding service for Wilmington homeowners!',
          rating: 5
        },
        {
          name: 'Michelle D.',
          review: 'Our historic downtown home needed specialized attention. Weather Shield balanced preservation requirements with modern coastal protection. The team was professional, knowledgeable, and delivered exceptional results.',
          rating: 5
        },
        {
          name: 'James P.',
          review: 'Commercial property near Wrightsville Beach required flat roof replacement with enhanced wind resistance. Weather Shield delivered superior workmanship and the roof has withstood multiple tropical systems. Their coastal commercial expertise is unmatched.',
          rating: 5
        }
      ]}
    />
  );
}
