import { Metadata } from 'next';
import FinancingPageClient from './FinancingPageClient';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Flexible Roof Financing Options | 0% APR Available | WeatherShield Roofing',
  description: 'Get approved for roof financing in Myrtle Beach with 0% APR options, $0 down payment, and all credit types accepted. Expert roofing contractors with flexible payment plans.',
  keywords: 'roof financing myrtle beach, roofing payment plans, 0% apr roof financing, bad credit roof financing, zero down payment roofing',
  openGraph: {
    title: 'Flexible Roof Financing Options - WeatherShield Roofing Myrtle Beach',
    description: '0% APR financing available. All credit types approved. $0 down payment options. Get your new roof today!',
    url: 'https://weathershieldroofers.com/financing',
    siteName: 'WeatherShield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/services/roof-financing.jpg',
        width: 1200,
        height: 630,
        alt: 'WeatherShield Roofing Financing Options',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flexible Roof Financing Options - WeatherShield Roofing',
    description: '0% APR financing available. All credit types approved. $0 down payment options.',
    images: ['https://weathershieldroofers.com/images/services/roof-financing.jpg'],
  },
  alternates: {
    canonical: 'https://weathershieldroofers.com/financing',
  },
};

export default function FinancingPage() {
  return (
    <>
      <StructuredData type="service" serviceName="Roof Financing" serviceDescription="Flexible roofing financing options with 0% APR, zero down payment, and approval for all credit types in Myrtle Beach, SC." />
      <FinancingPageClient />
    </>
  );
}
