import type { Metadata } from 'next';
import ServiceFinancingTemplate from '@/app/financing/services/ServiceFinancingTemplate';
import { getServiceDataBySlug } from '@/app/financing/services/serviceFinancingData';

const serviceData = getServiceDataBySlug('metal-roofing');

if (!serviceData) {
  throw new Error('Metal roofing financing data not found');
}

export const metadata: Metadata = {
  title: 'Metal Roofing Financing Myrtle Beach | Zero Down | Bad Credit OK | 0% APR',
  description: 'Finance your metal roof installation with zero down payment. Bad credit approved. 0% APR available. 50-70 year lifespan, 140+ mph wind resistance. Flexible payment plans.',
  keywords: serviceData!.keywords.join(', '),
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/metal-roofing/financing',
  },
  openGraph: {
    title: 'Metal Roofing Financing | Zero Down Payment | Bad Credit Welcome',
    description: 'Finance premium metal roofing with $0 down. All credit types approved. Standing seam, metal shingles, corrugated panels. 12-60 month terms.',
    url: 'https://weathershieldroofers.com/services/metal-roofing/financing',
    type: 'website',
    siteName: 'WeatherShield Roofing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metal Roofing Financing | Zero Down | Bad Credit OK',
    description: 'Finance your metal roof with flexible payment plans. 100% financing available.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MetalRoofingFinancingPage() {
  if (!serviceData) {
    throw new Error('Metal roofing financing data not found');
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: 'Metal Roofing Financing in Myrtle Beach, SC',
    description: 'Flexible financing options for metal roof installation including zero down payment, bad credit approval, and 0% APR promotional plans',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://weathershieldroofers.com/#organization',
      name: 'WeatherShield Roofing',
      telephone: '(843) 293-8150',
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
        description: '12-month interest-free financing for qualified applicants on metal roofing installations'
      },
      {
        '@type': 'Offer',
        name: 'Zero Down Payment',
        description: '100% financing available for metal roofs with no money down'
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
