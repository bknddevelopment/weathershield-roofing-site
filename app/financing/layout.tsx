import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Financing Myrtle Beach | Zero Down Payment | Bad Credit Welcome | WeatherShield',
  description: 'Affordable roof financing in Myrtle Beach SC. 0% APR available, zero down payment options, bad credit financing welcome. Quick approval in minutes. Payment plans for all credit types. Call (843) 877-5539.',
  keywords: 'roof financing myrtle beach, zero down roofing, no money down roof replacement, bad credit roof financing, roofing payment plans myrtle beach, roof financing with bad credit, affordable roof financing, 0 down payment roofing, roofing financing options, same day financing approval, guaranteed financing roof, all credit types welcome, roof loan bad credit, finance roof replacement, monthly payment plans roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/financing',
  },
  openGraph: {
    title: 'Roof Financing Myrtle Beach | 0% APR | Zero Down | Bad Credit OK',
    description: '100% financing available! Zero down payment options. Bad credit welcome. Quick approval. 0% APR plans available. Call (843) 877-5539 for instant approval.',
    url: 'https://weathershieldroofers.com/financing',
    type: 'website',
    siteName: 'WeatherShield Roofing',
    images: [
      {
        url: '/images/financing-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Affordable Roof Financing Options - Zero Down Payment Available',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Financing | 0% APR | Zero Down | Bad Credit Welcome',
    description: '100% financing available. Zero down options. All credit types approved. Quick decision in minutes.',
    images: ['/images/financing-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FinancingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
