import { Metadata } from 'next';
import StormDamageAssessmentClient from './StormDamageAssessmentClient';

export const metadata: Metadata = {
  title: 'Free Storm Damage Assessment Myrtle Beach | Hurricane Roof Inspection | Insurance Claims Help',
  description: 'FREE storm damage roof assessment in Myrtle Beach. Expert hurricane damage inspection + insurance claim assistance. Document damage before filing. Call (843) 877-5539.',
  keywords: 'free storm damage assessment, hurricane roof damage inspection, storm damage roof repair myrtle beach, insurance claim roofing, wind damage assessment, hail damage roof inspection',
  alternates: {
    canonical: 'https://weathershieldroofers.com/free-storm-damage-assessment',
  },
  openGraph: {
    title: 'Free Storm Damage Assessment | Hurricane Specialists | Myrtle Beach',
    description: 'FREE professional storm damage assessment. Insurance claim experts document damage properly. No obligation.',
    url: 'https://weathershieldroofers.com/free-storm-damage-assessment',
    type: 'website',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/background/residential-roofing-gutter-siding-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Storm Damage Assessment - Weather Shield Roofing Myrtle Beach',
      }
    ],
  }
};

export default function StormDamageAssessmentPage() {
  return <StormDamageAssessmentClient />;
}
