export default function EmergencySchema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EmergencyService',
        '@id': 'https://weathershieldroofers.com/emergency#service',
        name: 'WeatherShield 24/7 Emergency Roof Repair',
        description: 'Immediate emergency roof repair service in Myrtle Beach. Available 24/7 for roof leaks, storm damage, and urgent repairs with 2-hour guaranteed response time.',
        provider: {
          '@type': 'RoofingContractor',
          '@id': 'https://weathershieldroofers.com/#organization',
          name: 'WeatherShield Roofing',
          telephone: '+18432938150',
          url: 'https://weathershieldroofers.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Myrtle Beach',
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
          priceRange: '$$'
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Myrtle Beach',
            '@id': 'https://weathershieldroofers.com/locations/myrtle-beach'
          },
          {
            '@type': 'City',
            name: 'North Myrtle Beach'
          },
          {
            '@type': 'City',
            name: 'Surfside Beach'
          },
          {
            '@type': 'City',
            name: 'Conway'
          },
          {
            '@type': 'City',
            name: 'Garden City'
          }
        ],
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceType: 'Emergency',
          servicePhone: '+18432938150',
          serviceUrl: 'https://weathershieldroofers.com/emergency',
          availableLanguage: ['en', 'es']
        },
        serviceType: [
          'Roof Leak Repair',
          'Storm Damage Repair',
          'Emergency Tarping',
          'Hurricane Damage',
          'Fallen Tree Removal',
          'Emergency Weatherproofing'
        ],
        offers: {
          '@type': 'Offer',
          name: 'Emergency Roof Repair Service',
          description: 'No call-out fees for emergency service. Free damage assessment.',
          price: '0',
          priceCurrency: 'USD'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How quickly can you respond to a roof emergency?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We guarantee response within 2 hours of your call, 24/7/365. Our emergency crews are strategically located throughout Myrtle Beach to ensure rapid response. Most calls receive on-site assistance within 60-90 minutes.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you charge extra for emergency roof repair?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "We don't charge emergency service fees or call-out charges. You pay only for the actual work performed. Many emergency repairs are covered by homeowner's insurance, and we help with documentation."
            }
          },
          {
            '@type': 'Question',
            name: 'What types of roof emergencies do you handle?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We handle all types of roofing emergencies including active leaks, storm damage, fallen trees, missing shingles, hurricane damage, and any situation requiring immediate roof protection.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are you available 24 hours for roof repair near me?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we provide 24-hour roof repair services throughout Myrtle Beach and surrounding areas. Our emergency hotline is always answered by a real person, never voicemail.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can you provide same day storm damage repair?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we provide same-day storm damage repair services. Our emergency crews arrive equipped with professional tarps and materials to immediately protect your home from further damage.'
            }
          }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://weathershieldroofers.com/emergency',
        url: 'https://weathershieldroofers.com/emergency',
        name: 'Emergency Roof Repair Today | 24 Hour Roofer Available Now',
        description: 'URGENT: Roof leak repair today in Myrtle Beach. 24/7 emergency roofer available now. Storm damage repair same day.',
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
                name: 'Emergency Service'
              }
            }
          ]
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.emergency-phone']
        }
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://weathershieldroofers.com/#emergency-business',
        name: 'WeatherShield Emergency Roofing',
        image: 'https://weathershieldroofers.com/images/emergency-roof-repair.jpg',
        telephone: '+18432938150',
        url: 'https://weathershieldroofers.com/emergency',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Serving All of Myrtle Beach',
          addressLocality: 'Myrtle Beach',
          addressRegion: 'SC',
          postalCode: '29572',
          addressCountry: 'US'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            author: {
              '@type': 'Person',
              name: 'Sarah M.'
            },
            reviewBody: 'Called at 2am with a major leak during a storm. They arrived within an hour and saved our home from serious water damage!'
          },
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            author: {
              '@type': 'Person',
              name: 'John D.'
            },
            reviewBody: 'Tree fell on our roof during hurricane. Emergency crew responded immediately and tarped everything professionally. Excellent service!'
          }
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Emergency Roofing Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Emergency Roof Leak Repair',
                description: 'Immediate repair of active roof leaks'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Storm Damage Emergency Service',
                description: 'Same-day storm damage assessment and repair'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Emergency Roof Tarping',
                description: 'Professional tarping to prevent water damage'
              }
            }
          ]
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