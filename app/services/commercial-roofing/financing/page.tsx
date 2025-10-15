import type { Metadata } from 'next';
import ServiceFinancingTemplate from '@/app/financing/services/ServiceFinancingTemplate';
import { getServiceDataBySlug } from '@/app/financing/services/serviceFinancingData';

const serviceData = getServiceDataBySlug('commercial-roofing');

if (!serviceData) {
  throw new Error('Commercial roofing financing data not found');
}

export const metadata: Metadata = {
  title: 'Commercial Roofing Financing Myrtle Beach | Business Financing | Flexible Terms',
  description: 'Finance your commercial roofing project. Business-friendly financing for TPO, EPDM, flat roofs. Preserve capital, maintain cash flow. 12-84 month terms available.',
  keywords: serviceData!.keywords.join(', '),
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/commercial-roofing/financing',
  },
  openGraph: {
    title: 'Commercial Roofing Financing | Business Payment Plans | Preserve Capital',
    description: 'Finance commercial roof installations and replacements. Flexible business terms. TPO, EPDM, metal systems. Maintain cash flow.',
    url: 'https://weathershieldroofers.com/services/commercial-roofing/financing',
    type: 'website',
    siteName: 'WeatherShield Roofing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Roofing Financing | Business Payment Plans',
    description: 'Finance your commercial roofing project with flexible business terms.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CommercialRoofingFinancingPage() {
  if (!serviceData) {
    throw new Error('Commercial roofing financing data not found');
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: 'Commercial Roofing Financing in Myrtle Beach, SC',
    description: 'Business-friendly financing options for commercial roofing projects including flexible terms and capital preservation',
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
        name: 'Extended Term Financing',
        description: '12-84 month financing terms for commercial roofing projects'
      },
      {
        '@type': 'Offer',
        name: 'Business Capital Preservation',
        description: 'Maintain business cash flow while upgrading commercial roofing systems'
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
