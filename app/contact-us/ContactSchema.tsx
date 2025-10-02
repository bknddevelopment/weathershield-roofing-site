export default function ContactSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://weathershieldroofers.com/#localbusiness",
    "name": "Weather Shield Roofing",
    "image": "https://weathershieldroofers.com/images/logo.png",
    "url": "https://weathershieldroofers.com",
    "telephone": "+1-843-293-8150",
    "email": "roofing@weathershieldroofers.com",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-843-293-8150",
      "contactType": "customer service",
      "contactOption": "TollFree",
      "areaServed": ["US-SC", "Myrtle Beach", "North Myrtle Beach", "Conway"],
      "availableLanguage": ["en", "es"]
    },
    "sameAs": [
      "https://www.facebook.com/weathershieldroofing",
      "https://www.instagram.com/weathershieldroofing"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Replacement",
            "description": "Complete roof replacement services for residential and commercial properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Repair",
            "description": "Professional roof repair services for all types of damage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Storm Damage Repair",
            "description": "24/7 emergency storm damage repair and restoration services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Inspection",
            "description": "Free comprehensive roof inspection and assessment"
          }
        }
      ]
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://weathershieldroofers.com/#organization",
    "name": "Weather Shield Roofing",
    "legalName": "Weather Shield Roofing LLC",
    "url": "https://weathershieldroofers.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://weathershieldroofers.com/images/logo.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-843-293-8150",
      "contactType": "customer service",
      "email": "roofing@weathershieldroofers.com",
      "areaServed": "US-SC",
      "availableLanguage": ["en", "es"],
      "contactOption": ["TollFree", "HearingImpairedSupported"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "215 Ronnie Ct. Unit F",
      "addressLocality": "Myrtle Beach",
      "addressRegion": "SC",
      "postalCode": "29579",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/weathershieldroofing",
      "https://www.instagram.com/weathershieldroofing"
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://weathershieldroofers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://weathershieldroofers.com/contact-us"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
