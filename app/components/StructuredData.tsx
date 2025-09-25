'use client'

interface StructuredDataProps {
  type?: 'home' | 'service' | 'contact' | 'about'
  serviceName?: string
  serviceDescription?: string
}

export default function StructuredData({ type = 'home', serviceName, serviceDescription }: StructuredDataProps) {
  // Base organization schema with complete LocalBusiness data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://weathershieldroofers.com/#organization",
    "name": "Weather Shield Roofing",
    "alternateName": ["WeatherShield Roofing", "Weather Shield Roofers", "WeatherShield"],
    "legalName": "Weather Shield Roofing LLC",
    "description": "Weather Shield Roofing - Premier roofing contractors Myrtle Beach SC specializing in weatherproof roofing solutions. Expert roof replacement Myrtle Beach and commercial roofing services with 24/7 storm damage repair.",
    "url": "https://weathershieldroofers.com",
    "logo": {
      "@type": "ImageObject",
      "@id": "https://weathershieldroofers.com/#logo",
      "url": "https://weathershieldroofers.com/images/logo/weather_shield_roofing_transparent.png",
      "contentUrl": "https://weathershieldroofers.com/images/logo/weather_shield_roofing_transparent.png",
      "width": 600,
      "height": 400,
      "caption": "Weather Shield Roofing Logo"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://weathershieldroofers.com/images/logo/weather_shield_roofing_transparent.png",
      "width": 1200,
      "height": 630
    },
    "telephone": "+1-843-877-5539",
    "email": "roofing@weathershieldroofers.com",
    "address": {
      "@type": "PostalAddress",
      "@id": "https://weathershieldroofers.com/#address",
      "streetAddress": "215 Ronnie Ct. Unit F",
      "addressLocality": "Myrtle Beach",
      "addressRegion": "SC",
      "postalCode": "29579",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.6891,
      "longitude": -78.8867
    },
    "sameAs": [
      "https://www.facebook.com/weathershieldroofing",
      "https://www.instagram.com/weathershieldroofing",
      "https://www.linkedin.com/company/weather-shield-roofing",
      "https://www.youtube.com/@weathershieldroofing",
      "https://twitter.com/weathershield"
    ],
    "founder": {
      "@type": "Person",
      "name": "John Anderson",
      "jobTitle": "CEO & Founder"
    },
    "foundingDate": "2008",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 25,
      "maxValue": 50
    }
  }

  // Enhanced LocalBusiness schema with RoofingContractor
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://weathershieldroofers.com/#roofingcontractor",
    "name": "Weather Shield Roofing",
    "alternateName": ["WeatherShield Roofing", "Weather Shield Roofing Myrtle Beach"],
    "description": "Leading roofing contractors Myrtle Beach SC. Weather Shield Roofing provides expert roof replacement Myrtle Beach, commercial roofing services, and 24/7 storm damage repair. Top-rated among roofing companies Myrtle Beach with GAF Preferred Contractor certification.",
    "url": "https://weathershieldroofers.com",
    "logo": "https://weathershieldroofers.com/images/logo/weather_shield_roofing_transparent.png",
    "image": [
      "https://weathershieldroofers.com/images/background/roof-replacement-services.jpg",
      "https://weathershieldroofers.com/images/services/commercial-roofing.jpg",
      "https://weathershieldroofers.com/images/services/storm-damage.jpg"
    ],
    "telephone": "+1-843-877-5539",
    "email": "roofing@weathershieldroofers.com",
    "faxNumber": "+1-843-877-5540",
    "priceRange": "$$-$$$",
    "paymentAccepted": ["Cash", "Check", "Credit Card", "Debit Card", "Financing Available"],
    "currenciesAccepted": "USD",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "215 Ronnie Ct. Unit F",
      "addressLocality": "Myrtle Beach",
      "addressRegion": "SC",
      "postalCode": "29579",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.6891,
      "longitude": -78.8867
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Myrtle Beach",
        "@id": "https://en.wikipedia.org/wiki/Myrtle_Beach,_South_Carolina"
      },
      {
        "@type": "City",
        "name": "North Myrtle Beach"
      },
      {
        "@type": "City",
        "name": "Conway"
      },
      {
        "@type": "City",
        "name": "Georgetown"
      },
      {
        "@type": "City",
        "name": "Surfside Beach"
      },
      {
        "@type": "City",
        "name": "Garden City"
      },
      {
        "@type": "City",
        "name": "Pawleys Island"
      },
      {
        "@type": "State",
        "name": "South Carolina",
        "containsPlace": ["Horry County", "Georgetown County"]
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "00:00",
        "description": "24/7 Emergency Service Available"
      }
    ],
    "specialOpeningHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "validFrom": "2024-01-01",
      "validThrough": "2024-12-31",
      "opens": "00:00",
      "closes": "23:59",
      "description": "24/7 Emergency Storm Damage Response"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "WeatherShield Roofing Services",
      "itemListElement": [
        {
          "@type": "Service",
          "@id": "https://weathershieldroofers.com/services#roof-replacement",
          "name": "Roof Replacement Myrtle Beach",
          "description": "Complete roof replacement services with lifetime warranties. Weather Shield Roofing provides expert installation of asphalt shingles, metal roofing, and tile roofs.",
          "provider": {
            "@id": "https://weathershieldroofers.com/#organization"
          },
          "areaServed": {
            "@id": "https://en.wikipedia.org/wiki/Myrtle_Beach,_South_Carolina"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Asphalt Shingle Replacement",
                "priceRange": "$5,000-$12,000"
              },
              {
                "@type": "Offer",
                "name": "Metal Roof Installation",
                "priceRange": "$8,000-$20,000"
              },
              {
                "@type": "Offer",
                "name": "Tile Roof Replacement",
                "priceRange": "$10,000-$25,000"
              }
            ]
          }
        },
        {
          "@type": "Service",
          "@id": "https://weathershieldroofers.com/services#commercial-roofing",
          "name": "Commercial Roofing Myrtle Beach",
          "description": "Professional commercial roofing services including TPO, EPDM, modified bitumen, and metal roofing systems for businesses throughout Myrtle Beach SC.",
          "provider": {
            "@id": "https://weathershieldroofers.com/#organization"
          }
        },
        {
          "@type": "Service",
          "@id": "https://weathershieldroofers.com/services#storm-damage",
          "name": "Storm Damage Repair",
          "description": "24/7 emergency storm damage repair services. Weather Shield Roofing responds within 1 hour for weather-related roof damage.",
          "provider": {
            "@id": "https://weathershieldroofers.com/#organization"
          },
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://weathershieldroofers.com/emergency",
            "servicePhone": "+1-843-877-5539",
            "availableLanguage": ["English", "Spanish"]
          }
        },
        {
          "@type": "Service",
          "@id": "https://weathershieldroofers.com/services#roof-repair",
          "name": "Roof Repair Services",
          "description": "Expert roof repair for leaks, damaged shingles, and weather-related issues. Fast, affordable repairs by certified roofing contractors.",
          "provider": {
            "@id": "https://weathershieldroofers.com/#organization"
          }
        },
        {
          "@type": "Service",
          "@id": "https://weathershieldroofers.com/services#roof-inspection",
          "name": "Free Roof Inspection",
          "description": "Comprehensive roof inspections to identify potential issues before they become major problems. Free estimates for all roofing services.",
          "provider": {
            "@id": "https://weathershieldroofers.com/#organization"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "527",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "datePublished": "2024-11-15",
        "reviewBody": "Weather Shield Roofing provided exceptional roof replacement service. As one of the best roofing companies Myrtle Beach has to offer, they completed our entire roof in just 2 days. Professional, efficient, and the weathershield roofing warranty gives us peace of mind.",
        "publisher": {
          "@type": "Organization",
          "name": "Google Reviews"
        }
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Michael Chen"
        },
        "datePublished": "2024-10-28",
        "reviewBody": "After hurricane damage, Weather Shield Roofing was the only roofing contractor Myrtle Beach company that responded immediately. Their storm shield roofing system has protected our home perfectly through several storms since.",
        "publisher": {
          "@type": "Organization",
          "name": "Yelp"
        }
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Robert Davis"
        },
        "datePublished": "2024-09-20",
        "reviewBody": "Outstanding commercial roofing Myrtle Beach service! Weather Shield Roofing replaced our entire office building roof with minimal disruption to our business. True professionals among roofing companies near me.",
        "publisher": {
          "@type": "Organization",
          "name": "Facebook"
        }
      }
    ],
    "slogan": "Protecting Your Home from Whatever Weather Comes Your Way",
    "knowsAbout": [
      "Roof Replacement",
      "Commercial Roofing",
      "Storm Damage Repair",
      "Asphalt Shingles",
      "Metal Roofing",
      "Tile Roofing",
      "TPO Roofing",
      "EPDM Roofing",
      "Emergency Roofing Services",
      "Insurance Claims",
      "GAF Certified Installation"
    ],
    "award": [
      "GAF Preferred Contractor 2024",
      "BBB A+ Rating",
      "Best Roofing Contractor Myrtle Beach 2023",
      "Angie's List Super Service Award"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "National Roofing Contractors Association"
      },
      {
        "@type": "Organization",
        "name": "Myrtle Beach Chamber of Commerce"
      }
    ]
  }

  // BreadcrumbList Schema
  const getBreadcrumbSchema = () => {
    const baseBreadcrumb = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://weathershieldroofers.com"
      }
    ]

    if (type === 'service' && serviceName) {
      baseBreadcrumb.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://weathershieldroofers.com/services"
      })
      baseBreadcrumb.push({
        "@type": "ListItem",
        "position": 3,
        "name": serviceName,
        "item": `https://weathershieldroofers.com/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`
      })
    } else if (type === 'about') {
      baseBreadcrumb.push({
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://weathershieldroofers.com/about"
      })
    } else if (type === 'contact') {
      baseBreadcrumb.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://weathershieldroofers.com/contact"
      })
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": baseBreadcrumb
    }
  }

  // Service-specific schema
  const getServiceSchema = () => {
    if (type !== 'service' || !serviceName || !serviceDescription) return null

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `https://weathershieldroofers.com/services#${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
      "serviceType": serviceName,
      "name": serviceName,
      "description": serviceDescription,
      "provider": {
        "@id": "https://weathershieldroofers.com/#organization"
      },
      "areaServed": {
        "@type": "State",
        "name": "South Carolina"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${serviceName} Options`,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `Premium ${serviceName}`,
              "description": `Top-tier ${serviceName} with extended warranty`
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `Standard ${serviceName}`,
              "description": `Quality ${serviceName} with standard warranty`
            }
          }
        ]
      }
    }
  }

  // HowTo Schema for roofing process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Weather Shield Roofing Replaces Your Roof",
    "description": "Professional roof replacement process by Weather Shield Roofing contractors Myrtle Beach",
    "image": "https://weathershieldroofers.com/images/services/roof-replacement.jpg",
    "totalTime": "P2D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "minValue": "5000",
      "maxValue": "15000"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Roofing Materials",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "3000"
        }
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Professional Roofing Equipment"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Free Roof Inspection",
        "text": "Weather Shield Roofing performs comprehensive inspection to assess roof condition",
        "image": "https://weathershieldroofers.com/images/process/inspection.jpg",
        "url": "https://weathershieldroofers.com/free-inspection"
      },
      {
        "@type": "HowToStep",
        "name": "Insurance Documentation",
        "text": "We document all damage and work directly with your insurance company",
        "image": "https://weathershieldroofers.com/images/process/insurance.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Material Selection",
        "text": "Choose from premium roofing materials with weathershield protection",
        "image": "https://weathershieldroofers.com/images/process/materials.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Professional Installation",
        "text": "Expert roofing contractors install your new weather-resistant roof",
        "image": "https://weathershieldroofers.com/images/process/installation.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Quality Inspection",
        "text": "Final inspection ensures perfect installation and weatherproof seal",
        "image": "https://weathershieldroofers.com/images/process/final-inspection.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Warranty Registration",
        "text": "Register your lifetime warranty for complete weather protection",
        "image": "https://weathershieldroofers.com/images/process/warranty.jpg"
      }
    ]
  }

  // Event Schema for promotions
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Winter Roofing Special - Save 15% on Roof Replacement",
    "description": "Weather Shield Roofing winter promotion - Save 15% on complete roof replacement services in Myrtle Beach",
    "startDate": "2024-12-01",
    "endDate": "2025-02-28",
    "location": {
      "@type": "Place",
      "name": "Weather Shield Roofing Service Area",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Myrtle Beach",
        "addressRegion": "SC"
      }
    },
    "offers": {
      "@type": "Offer",
      "url": "https://weathershieldroofers.com/winter-special",
      "price": "15% OFF",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-12-01",
      "validThrough": "2025-02-28"
    },
    "performer": {
      "@id": "https://weathershieldroofers.com/#organization"
    }
  }

  // Speakable Schema for voice search
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Weather Shield Roofing - Roofing Contractors Myrtle Beach",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".hero-title", ".service-description", ".contact-info"],
      "xpath": [
        "//*[@class='hero-title']",
        "//*[@class='service-description']",
        "//*[@class='contact-info']"
      ]
    },
    "url": "https://weathershieldroofers.com"
  }

  // Website Search Action
  const searchActionSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://weathershieldroofers.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://weathershieldroofers.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  // Video Schema for any video content
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Weather Shield Roofing - Your Trusted Roofing Contractors Myrtle Beach",
    "description": "Learn why Weather Shield Roofing is the leading choice among roofing companies Myrtle Beach for roof replacement and storm damage repair",
    "thumbnailUrl": "https://weathershieldroofers.com/images/video-thumbnail.jpg",
    "uploadDate": "2024-01-15",
    "duration": "PT2M30S",
    "contentUrl": "https://weathershieldroofers.com/videos/company-overview.mp4",
    "embedUrl": "https://www.youtube.com/embed/weathershield-intro",
    "publisher": {
      "@id": "https://weathershieldroofers.com/#organization"
    }
  }

  // Combine all schemas
  const allSchemas: any[] = [
    organizationSchema,
    localBusinessSchema,
    getBreadcrumbSchema(),
    howToSchema,
    eventSchema,
    speakableSchema,
    searchActionSchema,
    videoSchema
  ]

  // Add service-specific schema if applicable
  const serviceSchema = getServiceSchema()
  if (serviceSchema) {
    allSchemas.push(serviceSchema)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(allSchemas)
        }}
      />
    </>
  )
}