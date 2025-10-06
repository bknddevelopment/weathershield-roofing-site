import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Charleston Roofing Services | Weather Shield Roofing | Charleston, SC',
  description: 'Expert roofing services in Charleston, SC. Weather Shield Roofing specializes in historic home restorations and modern roofing systems. Protecting Charleston properties with quality and integrity. Call (843) 493-4963.',
  keywords: 'Charleston roofing, roofing contractors Charleston SC, Charleston roof repair, historic roof restoration Charleston, commercial roofing Charleston, storm damage Charleston, roofing companies Charleston',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/charleston-sc',
  },
  openGraph: {
    title: 'Charleston, SC Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing contractor in Charleston, SC. Specializing in historic restorations and modern roofing systems. Professional commercial and residential services.',
    url: 'https://weathershieldroofers.com/locations/charleston-sc',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/charleston-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Charleston, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function CharlestonPage() {
  return (
    <LocationPageTemplate
      city="Charleston"
      state="SC"
      zipCodes={['29401', '29403', '29405', '29407', '29409', '29412', '29414', '29418', '29420', '29424', '29425', '29455', '29456', '29461', '29464', '29466', '29470', '29482', '29485', '29487', '29492']}
      population="150,000+"
      description="In the historic and culturally rich city of Charleston, SC, our services are designed to match the uniqueness of the area. From historic homes requiring delicate roofing restorations to modern buildings in need of durable roofing systems, our team offers the expertise to handle it all, ensuring that every property maintains its charm and integrity."
      neighborhoods={[
        'Downtown Charleston',
        'The Battery',
        'South of Broad',
        'French Quarter',
        'Mount Pleasant',
        'West Ashley',
        'James Island',
        'Johns Island',
        'Daniel Island',
        'North Charleston',
        'Summerville',
        'Isle of Palms',
        'Sullivans Island',
        'Folly Beach',
        'Kiawah Island'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane Threats',
          description: 'Charleston\'s coastal location requires hurricane-resistant roofing systems'
        },
        {
          icon: null,
          title: 'Salt Air Corrosion',
          description: 'Proximity to ocean demands materials resistant to salt damage'
        },
        {
          icon: null,
          title: 'Historic Preservation',
          description: 'Many properties require specialized techniques for historic preservation'
        },
        {
          icon: null,
          title: 'Heavy Rainfall',
          description: 'Frequent storms need superior drainage and waterproofing systems'
        }
      ]}
      localStats={[
        { value: '24/7', label: 'Response Time' },
        { value: '1,000+', label: 'Charleston Homes Protected' },
        { value: '12+ Years', label: 'Serving Charleston' },
        { value: '5.0 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Mount Pleasant', distance: '5 miles', href: '/locations/mount-pleasant' },
        { name: 'Summerville', distance: '25 miles', href: '/locations/summerville' },
        { name: 'Goose Creek', distance: '20 miles', href: '/locations/goose-creek' },
        { name: 'Hanahan', distance: '15 miles', href: '/locations/hanahan' },
        { name: 'Moncks Corner', distance: '30 miles', href: '/locations/moncks-corner' },
        { name: 'Walterboro', distance: '45 miles', href: '/locations/walterboro' }
      ]}
      emergencyResponse="24/7"
      localTestimonials={[
        {
          name: 'Elizabeth H.',
          review: 'Weather Shield Roofing restored our historic home in South of Broad with incredible attention to detail. They worked closely with the preservation society to ensure compliance while delivering a beautiful, weatherproof roof. Outstanding craftsmanship!',
          rating: 5
        },
        {
          name: 'Thomas W.',
          review: 'After Hurricane damage to our James Island property, Weather Shield was there within hours. They handled everything from emergency tarping to full replacement and insurance claims. True professionals who understand Charleston weather challenges.',
          rating: 5
        },
        {
          name: 'Amanda R.',
          review: 'Our downtown Charleston business needed a complete roof overhaul. Weather Shield minimized disruption, completed on schedule, and the quality is exceptional. They understand the unique needs of Charleston commercial properties.',
          rating: 5
        }
      ]}
    />
  );
}