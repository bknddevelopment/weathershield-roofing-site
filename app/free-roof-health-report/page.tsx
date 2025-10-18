import { Metadata } from 'next';
import RoofHealthReportClient from './RoofHealthReportClient';

export const metadata: Metadata = {
  title: 'Free Roof Health Report Myrtle Beach | Comprehensive Roof Analysis | No Obligation',
  description: 'Get a FREE comprehensive roof health report in Myrtle Beach. Detailed condition analysis, lifespan estimate, maintenance recommendations. GAF certified inspectors. Call (843) 877-5539.',
  keywords: 'free roof health report, roof condition report myrtle beach, roof lifespan estimate, roof maintenance plan, professional roof assessment myrtle beach',
  alternates: {
    canonical: 'https://weathershieldroofers.com/free-roof-health-report',
  },
  openGraph: {
    title: 'Free Comprehensive Roof Health Report | Myrtle Beach | Weather Shield Roofing',
    description: 'FREE detailed roof health analysis with photos, condition scoring, lifespan estimate, and maintenance roadmap.',
    url: 'https://weathershieldroofers.com/free-roof-health-report',
    type: 'website',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/background/residential-roofing-gutter-siding-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Roof Health Report - Weather Shield Roofing Myrtle Beach',
      }
    ],
  }
};

export default function RoofHealthReportPage() {
  return <RoofHealthReportClient />;
}
