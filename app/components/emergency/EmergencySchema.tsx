interface EmergencySchemaProps {
  serviceName: string
  description: string
  keywords: string[]
  localAreas: string[]
  schemaType: string
  faq?: Array<{
    question: string
    answer: string
  }>
  responseTime?: string
  availability?: string
  rating?: {
    value: string
    count: string
  }
}

export default function EmergencySchema({
  serviceName,
  description,
  keywords,
  localAreas,
  schemaType,
  faq = [],
  responseTime = 'rapid',
  availability = '24/7',
  rating = { value: '5.0', count: '127' }
}: EmergencySchemaProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EmergencyService',
        '@id': `https://weathershieldroofers.com/emergency/${schemaType}#service`,
        name: serviceName,
        description: description,
        provider: {
          '@type': 'RoofingContractor',
          '@id': 'https://weathershieldroofers.com/#organization',
          name: 'WeatherShield Roofing',
          telephone: '+18432938150',
          alternateTelephone: '+18438775539',
          url: 'https://weathershieldroofers.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Serving All Areas',
            addressLocality: 'Myrtle Beach',
            addressRegion: 'SC',
            postalCode: '29572',
            addressCountry: 'US'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '33.6891',
            longitude: '-78.8867'
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
              ],
              opens: '00:00',
              closes: '23:59'
            }
          ],
          priceRange: '$$',
          sameAs: [
            'https://www.facebook.com/weathershieldroofing',
            'https://www.instagram.com/weathershieldroofing',
            'https://www.youtube.com/weathershieldroofing'
          ]
        },
        areaServed: localAreas.map(area => ({
          '@type': 'City',
          name: area
        })),
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceType: 'Emergency',
          servicePhone: '+18432938150',
          serviceUrl: `https://weathershieldroofers.com/emergency/${schemaType}`,
          availableLanguage: ['en', 'es'],
          processingTime: {
            '@type': 'Duration',
            value: 'PT1H'
          }
        },
        serviceType: keywords,
        offers: {
          '@type': 'Offer',
          name: serviceName,
          description: `${availability} ${serviceName} with rapid response`,
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          validFrom: new Date().toISOString(),
          priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: rating.value,
          reviewCount: rating.count,
          bestRating: '5',
          worstRating: '1'
        }
      },
      ...(faq.length > 0 ? [{
        '@type': 'FAQPage',
        mainEntity: faq.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      }] : []),
      {
        '@type': 'WebPage',
        '@id': `https://weathershieldroofers.com/emergency/${schemaType}`,
        url: `https://weathershieldroofers.com/emergency/${schemaType}`,
        name: serviceName,
        description: description,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': 'https://weathershieldroofers.com',
                name: 'Home'
              }
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@id': 'https://weathershieldroofers.com/emergency',
                name: 'Emergency Services'
              }
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@id': `https://weathershieldroofers.com/emergency/${schemaType}`,
                name: serviceName
              }
            }
          ]
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.emergency-phone', '.emergency-cta']
        },
        potentialAction: {
          '@type': 'CallAction',
          target: 'tel:+18432938150',
          name: 'Call Emergency Service'
        }
      },
      {
        '@type': 'LocalBusiness',
        '@id': `https://weathershieldroofers.com/#emergency-${schemaType}`,
        name: `WeatherShield ${serviceName}`,
        image: 'https://weathershieldroofers.com/images/emergency-roof-repair.jpg',
        telephone: '+18432938150',
        url: `https://weathershieldroofers.com/emergency/${schemaType}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Mobile Service',
          addressLocality: localAreas[0] || 'Myrtle Beach',
          addressRegion: 'SC',
          postalCode: '29572',
          addressCountry: 'US'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: rating.value,
          reviewCount: rating.count
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: serviceName,
          itemListElement: keywords.map(keyword => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: keyword,
              description: `Professional ${keyword.toLowerCase()} service available ${availability}`
            }
          }))
        },
        knowsAbout: keywords,
        actionableFeedbackPolicy: 'https://weathershieldroofers.com/reviews',
        slogan: `Rapid Response • ${availability} Emergency Service`,
        paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Insurance'],
        currenciesAccepted: 'USD'
      },
      {
        '@type': 'Service',
        serviceType: serviceName,
        provider: {
          '@type': 'Organization',
          name: 'WeatherShield Roofing'
        },
        areaServed: {
          '@type': 'State',
          name: 'South Carolina'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${serviceName} Options`,
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Emergency Assessment',
                description: 'Free damage assessment and quote'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Temporary Protection',
                description: 'Emergency tarping and weatherproofing'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Permanent Repair',
                description: 'Complete repair or replacement'
              }
            }
          ]
        },
        audience: {
          '@type': 'Audience',
          audienceType: 'Homeowners and Property Managers',
          geographicArea: {
            '@type': 'City',
            name: localAreas.join(', ')
          }
        },
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceType: 'Emergency',
          serviceUrl: `https://weathershieldroofers.com/emergency/${schemaType}`,
          servicePhone: '+18432938150',
          availableLanguage: 'English'
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}