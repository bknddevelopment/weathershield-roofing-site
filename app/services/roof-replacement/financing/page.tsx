import type { Metadata } from 'next';
import ServiceFinancingTemplate from '@/app/financing/services/ServiceFinancingTemplate';
import { getServiceDataBySlug } from '@/app/financing/services/serviceFinancingData';

const serviceData = getServiceDataBySlug('roof-replacement');

if (!serviceData) {
  throw new Error('Roof replacement financing data not found');
}

export const metadata: Metadata = {
  title: 'Roof Replacement Financing Myrtle Beach | Zero Down | Bad Credit OK',
  description: 'Finance your complete roof replacement with zero down payment. Bad credit approved. 0% APR available. Protect your home now, pay monthly. Flexible payment plans.',
  keywords: serviceData!.keywords.join(', '),
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/roof-replacement/financing',
  },
  openGraph: {
    title: 'Roof Replacement Financing | Zero Down Payment | Bad Credit Welcome',
    description: 'Finance new roof installation with $0 down. All credit types approved. Complete tear-off and replacement. 12-60 month terms.',
    url: 'https://weathershieldroofers.com/services/roof-replacement/financing',
    type: 'website',
    siteName: 'WeatherShield Roofing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Replacement Financing | Zero Down | Bad Credit OK',
    description: 'Finance your roof replacement with flexible payment plans. 100% financing available.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RoofReplacementFinancingPage() {
  if (!serviceData) {
    throw new Error('Roof replacement financing data not found');
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: 'Roof Replacement Financing in Myrtle Beach, SC',
    description: 'Flexible financing options for complete roof replacement including zero down payment, bad credit approval, and 0% APR promotional plans',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://weathershieldroofers.com/#organization',
      name: 'WeatherShield Roofing',
      telephone: '(843) 877-5539',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Myrtle Beach',
        addressRegion: 'SC',
        addressCountry: 'US'
      },
      areaServed: {
        '@type': 'City',
        name: 'Myrtle Beach',
        '@id': 'https://en.wikipedia.org/wiki/Myrtle_Beach,_South_Carolina'
      }
    },
    offers: [
      {
        '@type': 'Offer',
        name: '0% APR Financing',
        description: '12-month interest-free financing for qualified applicants on roof replacement'
      },
      {
        '@type': 'Offer',
        name: 'Zero Down Payment',
        description: '100% financing available for roof replacement with no money down'
      }
    ]
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceData.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <ServiceFinancingTemplate data={serviceData} />
    </>
  );
}
