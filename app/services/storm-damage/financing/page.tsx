import type { Metadata } from 'next';
import ServiceFinancingTemplate from '@/app/financing/services/ServiceFinancingTemplate';
import { getServiceDataBySlug } from '@/app/financing/services/serviceFinancingData';

const serviceData = getServiceDataBySlug('storm-damage');

if (!serviceData) {
  throw new Error('Storm damage financing data not found');
}

export const metadata: Metadata = {
  title: 'Storm Damage Roof Financing Myrtle Beach | Hurricane Repair Loans | Finance Deductible',
  description: 'Finance storm damage roof repairs. Cover your insurance deductible. Hurricane, wind, hail damage financing. Bad credit OK. Emergency approval. Start repairs immediately.',
  keywords: serviceData!.keywords.join(', '),
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/storm-damage/financing',
  },
  openGraph: {
    title: 'Storm Damage Financing | Finance Insurance Deductible | Emergency Approval',
    description: 'Finance hurricane and storm damage repairs. Cover deductible with $0 down. Bad credit approved. Start repairs before insurance settlement.',
    url: 'https://weathershieldroofers.com/services/storm-damage/financing',
    type: 'website',
    siteName: 'WeatherShield Roofing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Storm Damage Financing | Finance Insurance Deductible',
    description: 'Finance storm damage repairs with flexible payment plans. Emergency approval available.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function StormDamageFinancingPage() {
  if (!serviceData) {
    throw new Error('Storm damage financing data not found');
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: 'Storm Damage Roof Financing in Myrtle Beach, SC',
    description: 'Emergency financing for storm damage roof repairs including insurance deductible financing and hurricane damage restoration',
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
        name: 'Insurance Deductible Financing',
        description: 'Finance your insurance deductible to begin storm damage repairs immediately'
      },
      {
        '@type': 'Offer',
        name: 'Emergency Storm Financing',
        description: 'Same-day approval for emergency storm damage repair financing'
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
