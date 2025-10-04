import type { Metadata } from 'next';
import ServiceFinancingTemplate from '@/app/financing/services/ServiceFinancingTemplate';
import { getServiceDataBySlug } from '@/app/financing/services/serviceFinancingData';

const serviceData = getServiceDataBySlug('roof-repair');

if (!serviceData) {
  throw new Error('Roof repair financing data not found');
}

export const metadata: Metadata = {
  title: 'Roof Repair Financing Myrtle Beach | Emergency Leak Repair Loans | Bad Credit OK',
  description: 'Finance urgent roof repairs and leak fixes. Zero down payment. Bad credit approved. Stop leaks now, prevent damage. Emergency repair financing available 24/7.',
  keywords: serviceData!.keywords.join(', '),
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/roof-repair/financing',
  },
  openGraph: {
    title: 'Roof Repair Financing | Emergency Leak Repair Loans | Bad Credit Welcome',
    description: 'Finance roof repairs with $0 down. All credit types approved. Emergency leak repairs, storm damage, flashing repairs. Same-day approval.',
    url: 'https://weathershieldroofers.com/services/roof-repair/financing',
    type: 'website',
    siteName: 'WeatherShield Roofing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Repair Financing | Emergency Leak Repair Loans',
    description: 'Finance urgent roof repairs with flexible payment plans. Same-day approval available.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RoofRepairFinancingPage() {
  if (!serviceData) {
    throw new Error('Roof repair financing data not found');
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: 'Roof Repair Financing in Myrtle Beach, SC',
    description: 'Flexible financing options for urgent roof repairs including zero down payment, bad credit approval, and emergency same-day approval',
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
        name: 'Emergency Repair Financing',
        description: 'Same-day approval for emergency roof repair financing'
      },
      {
        '@type': 'Offer',
        name: 'Zero Down Payment',
        description: '100% financing available for roof repairs with no money down'
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
