import ServiceCityTemplate, { generateServiceCityMetadata } from '@/app/components/templates/ServiceCityTemplate';

const pageData = {
  service: {
    name: '24/7 Emergency Roofing',
    slug: 'emergency-roofing',
    icon: '🚨',
    description: 'True 24/7 emergency roofing service in Myrtle Beach. Real people answering phones at 3 AM - not an answering service. Rapid response for storm damage, leaks, and roofing emergencies. Emergency tarping and immediate repairs.',
    benefits: [
      'Real 24/7 service - not an answering service',
      'Rapid response within 60 minutes for emergencies',
      'Emergency tarping to prevent further damage',
      'Immediate leak repairs and temporary fixes',
      'Storm damage assessment and documentation',
      'Direct insurance company communication',
      'Professional emergency crews always on standby',
      'All emergency work warrantied'
    ]
  },
  city: {
    name: 'Myrtle Beach',
    slug: 'myrtle-beach',
    state: 'SC',
    neighborhoods: [
      'All Myrtle Beach areas',
      'North Myrtle Beach',
      'Surfside Beach',
      'Conway',
      'Carolina Forest',
      'Garden City'
    ],
    uniqueChallenges: [
      'Hurricane and tropical storm emergencies',
      'Severe thunderstorm sudden leak events',
      'High winds causing shingle blow-offs',
      'Flash flooding creating urgent drainage issues',
      'Tourist season increases demand for fast response'
    ]
  },
  metadata: {
    title: '24/7 Emergency Roofing Myrtle Beach | Rapid Response | Storm Damage',
    description: 'Emergency roofing Myrtle Beach - real 24/7 service. Rapid response for storm damage, leaks, urgent repairs. Not an answering service. Call (843) 877-5539 now.',
    keywords: '24/7 emergency roofing myrtle beach, emergency roof repair, urgent roof leak, storm damage emergency, after hours roofing'
  }
};

export const metadata = generateServiceCityMetadata(pageData);

export default function EmergencyRoofingMyrtleBeachPage() {
  return <ServiceCityTemplate data={pageData} />;
}
