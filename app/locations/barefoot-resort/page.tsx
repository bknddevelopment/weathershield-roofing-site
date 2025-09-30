import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';
import { Home, ClipboardCheck, Flag, CloudRain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Barefoot Resort Roof Contractor | Weather Shield Roofing | North Myrtle Beach, SC',
  description: 'Professional roofing at Barefoot Resort, North Myrtle Beach. Resort community specialists, vacation homes, and golf property roofing. Call (843) 877-5539.',
  keywords: 'barefoot resort roof contractor, Barefoot Resort roofing, resort roofing north myrtle beach, vacation home roofing, golf community roofing, emergency roofer barefoot',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/barefoot-resort',
  },
  openGraph: {
    title: 'Barefoot Resort Roof Contractor | Weather Shield Roofing',
    description: 'Expert roofing for Barefoot Resort homes and vacation properties. Golf community specialists with emergency services.',
    url: 'https://weathershieldroofers.com/locations/barefoot-resort',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/barefoot-resort-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services at Barefoot Resort, North Myrtle Beach',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function BarefootResortPage() {
  return (
    <LocationPageTemplate
      city="Barefoot Resort"
      state="SC"
      zipCodes={['29582', '29572']}
      population="5,000+"
      description="Barefoot Resort's trusted roofing contractor specializing in vacation properties, golf community homes, and resort residences. We understand the unique needs of resort communities and provide timely, quality service that protects your vacation investment."
      neighborhoods={[
        'Barefoot Resort Main',
        'Barefoot Landing Area',
        'Dye Course Homes',
        'Love Course Properties',
        'Fazio Course Estates',
        'Norman Course Homes',
        'Yacht Club Villas',
        'Marina District',
        'Resort Village'
      ]}
      weatherChallenges={[
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Vacation Rental Schedule',
          description: 'Quick turnaround needed to minimize impact on rental bookings'
        },
        {
          icon: <ClipboardCheck className="w-6 h-6" />,
          title: 'Resort Aesthetic Standards',
          description: 'Community guidelines require quality materials and professional appearance'
        },
        {
          icon: <Flag className="w-6 h-6" />,
          title: 'Golf Course Environment',
          description: 'Properties near courses need careful site management and cleanup'
        },
        {
          icon: <CloudRain className="w-6 h-6" />,
          title: 'Coastal Weather',
          description: 'Resort location requires storm-resistant systems and salt-air protection'
        }
      ]}
      localStats={[
        { value: '45 Min', label: 'Response Time' },
        { value: '400+', label: 'Resort Homes Serviced' },
        { value: '12+ Years', label: 'Resort Experience' },
        { value: '5.0 Stars', label: 'Property Owner Rating' }
      ]}
      nearbyAreas={[
        { name: 'North Myrtle Beach', distance: '3 miles', href: '/locations/north-myrtle-beach' },
        { name: 'Little River', distance: '5 miles', href: '/locations/little-river' },
        { name: 'Myrtle Beach', distance: '15 miles', href: '/locations/myrtle-beach' },
        { name: 'Briarcliffe Acres', distance: '8 miles', href: '/locations/briarcliffe-acres' }
      ]}
      emergencyResponse="45 minutes"
      localTestimonials={[
        {
          name: 'Property Manager Lisa D.',
          review: 'Weather Shield has become our go-to roofer for all our Barefoot vacation rentals. They work around our rental schedules and always deliver quality work on time. Perfect for property managers!',
          rating: 5
        },
        {
          name: 'Robert K.',
          review: 'Storm damage to our golf course home was handled professionally from start to finish. Emergency response was quick and the permanent repair was completed beautifully. Highly recommend!',
          rating: 5
        },
        {
          name: 'Nancy S.',
          review: 'Roof replacement on our Barefoot villa during the off-season. The crew was efficient, respectful of the resort environment, and the quality is excellent. Very pleased with the entire experience.',
          rating: 5
        }
      ]}
    />
  );
}