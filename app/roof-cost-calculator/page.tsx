import { Metadata } from 'next';
import RoofCostCalculatorClient from './RoofCostCalculatorClient';

export const metadata: Metadata = {
  title: 'Roof Replacement Cost Calculator Myrtle Beach | Free Estimate Tool',
  description: 'Calculate your roof replacement cost in Myrtle Beach instantly. Free interactive tool estimates materials, labor, and total cost. Get accurate pricing for your home. Call (843) 877-5539.',
  keywords: 'roof replacement cost calculator, roofing cost estimator myrtle beach, roof cost calculator, how much does a new roof cost, roof replacement cost myrtle beach',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roof-cost-calculator',
  },
  openGraph: {
    title: 'Free Roof Cost Calculator | Myrtle Beach Roofing Estimates',
    description: 'Get instant roof replacement cost estimates for your Myrtle Beach home. Interactive calculator with accurate pricing.',
    url: 'https://weathershieldroofers.com/roof-cost-calculator',
    type: 'website',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/background/residential-roofing-gutter-siding-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Roof Cost Calculator - Weather Shield Roofing Myrtle Beach',
      }
    ],
  }
};

export default function RoofCostCalculatorPage() {
  return <RoofCostCalculatorClient />;
}
