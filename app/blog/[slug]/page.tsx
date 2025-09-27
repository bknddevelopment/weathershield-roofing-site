import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';
import type { Metadata } from 'next';

// Blog post data with full content
const blogPostsData: Record<string, {
  id: number;
  title: string;
  metaDescription: string;
  author: string;
  authorBio: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  featured: boolean;
  content: {
    intro: string;
    sections: Array<{
      id: string;
      title: string;
      content: string;
    }>;
    warningSignsData?: Array<{
      title: string;
      description: string;
      impact: string;
    }>;
    maintenanceCalendar?: Array<{
      season: string;
      tasks: string[];
      critical: boolean;
    }>;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
}> = {
  'importance-regular-roof-maintenance': {
    id: 6,
    title: "Save Thousands: Why Your Roof Maintenance Can't Wait Another Day",
    metaDescription: '80% of roofs fail early, costing homeowners thousands. Discover how annual maintenance adds 10+ years to your roof. Free inspection available.',
    author: 'David Karimi',
    authorBio: 'David Karimi is Weather Shield Roofing\'s Lead Roofing Specialist with over 15 years of experience in the Myrtle Beach area. As a GAF-certified professional, David has inspected over 3,000 roofs and helped countless homeowners protect their investments through proper maintenance.',
    authorRole: 'Lead Roofing Specialist',
    date: 'September 27, 2025',
    readTime: '12 min',
    category: 'Roof Maintenance',
    image: '/images/background/roof-replacement-services.jpg',
    tags: ['Maintenance', 'Prevention', 'Cost Savings', 'Roof Care', 'Home Protection'],
    featured: true,
    content: {
      intro: `Every year, American homeowners spend <strong>$31 billion</strong> on roof damage that could have been prevented. Even worse? <strong>80% of roofs fail prematurely</strong> – not because of poor materials or installation, but because of neglected maintenance. Don't become another statistic.`,
      sections: [
        {
          id: 'hidden-cost',
          title: 'The Hidden Cost of Neglect: What You\'re Really Risking',
          content: `
            <p class="text-lg mb-6">Last month, we helped the Martinez family in Conway avoid a complete <a href="/services/roof-replacement" class="text-weather-primary font-semibold underline hover:text-weather-primary-dark">roof replacement</a> that would have cost them <strong>$15,000</strong>. Their secret? They called us for a <a href="/services/roof-inspections" class="text-weather-primary font-semibold underline hover:text-weather-primary-dark">routine inspection</a> that caught a small issue before it became a disaster. This isn't luck – it's the power of proactive maintenance.</p>

            <p class="text-lg mb-6">If you're reading this, you're already ahead of the <strong>61% of homeowners</strong> who can't afford <a href="/services/emergency-roofing" class="text-weather-primary font-semibold underline hover:text-weather-primary-dark">emergency roof repairs</a>. Let's make sure you stay that way.</p>

            <div class="bg-amber-50 border-l-4 border-weather-warning p-6 rounded-lg mt-8">
              <h4 class="font-bold text-weather-dark mb-2 flex items-center gap-2">
                Insurance Reality Check
              </h4>
              <p class="text-gray-800">
                Did you know that most insurance companies can deny your claim if they find evidence of "deferred maintenance"? Regular documented <a href="/services/roof-inspections" class="text-weather-primary font-semibold underline hover:text-weather-primary-dark">inspections</a> protect both your roof AND your coverage. Without maintenance records, even <a href="/services/storm-damage" class="text-weather-primary font-semibold underline hover:text-weather-primary-dark">storm damage</a> claims may be denied.
              </p>
            </div>
          `
        },
        {
          id: 'warning-signs',
          title: '5 Warning Signs You\'re Already Behind on Maintenance',
          content: `
            <p class="text-lg mb-6">Walk outside right now and look at your roof. If you see any of these signs, your roof is screaming for help:</p>
          `
        },
        {
          id: 'seasonal-maintenance',
          title: 'Your Year-Round Roof Maintenance Calendar',
          content: `
            <p class="text-lg mb-6">Coastal South Carolina's unique climate demands a strategic maintenance approach. Here's your month-by-month guide to protecting your investment:</p>
          `
        },
        {
          id: 'roi-maintenance',
          title: 'The ROI of Regular Maintenance: Real Numbers',
          content: `
            <div class="bg-weather-success/10 p-6 rounded-lg mb-8 border-2 border-weather-success">
              <h4 class="text-xl font-bold text-weather-dark mb-4">The Math is Simple:</h4>
              <ul class="space-y-3 text-gray-800">
                <li class="flex items-start gap-3">
                  <span class="text-weather-success mt-1 font-bold">✓</span>
                  <span><strong>Annual Maintenance Cost:</strong> $300-500</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-weather-success mt-1 font-bold">✓</span>
                  <span><strong>Average Emergency Repair:</strong> $3,000-7,000</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-weather-success mt-1 font-bold">✓</span>
                  <span><strong>Early Roof Replacement:</strong> $10,000-25,000</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-weather-success mt-1 font-bold">✓</span>
                  <span><strong>Extended Roof Life:</strong> 10-15 additional years</span>
                </li>
              </ul>
              <p class="mt-4 text-weather-dark font-bold">
                Every $1 spent on maintenance saves $5 in repairs. That's a 500% return on investment.
              </p>
            </div>
          `
        },
        {
          id: 'professional-vs-diy',
          title: 'Professional vs. DIY: Why Expertise Matters',
          content: `
            <p class="text-lg mb-6">While some maintenance tasks can be done yourself, <a href="/services/roof-inspections" class="text-weather-primary font-semibold underline hover:text-weather-primary-dark">professional inspections</a> catch what untrained eyes miss:</p>

            <div class="grid md:grid-cols-2 gap-6 my-8">
              <div class="bg-weather-danger/10 p-6 rounded-lg border border-weather-danger">
                <h4 class="font-bold text-weather-dark mb-4">DIY Limitations</h4>
                <ul class="space-y-2 text-gray-800">
                  <li>• Can't safely access all areas</li>
                  <li>• May miss hidden damage</li>
                  <li>• No warranty documentation</li>
                  <li>• Risk of causing damage</li>
                  <li>• No insurance claim support</li>
                </ul>
              </div>
              <div class="bg-weather-success/10 p-6 rounded-lg border border-weather-success">
                <h4 class="font-bold text-weather-dark mb-4">Professional Benefits</h4>
                <ul class="space-y-2 text-gray-800">
                  <li>• Complete 25-point inspection</li>
                  <li>• Infrared moisture detection</li>
                  <li>• Warranty compliance</li>
                  <li>• Insurance documentation</li>
                  <li>• Expert repair recommendations</li>
                </ul>
              </div>
            </div>
          `
        }
      ],
      warningSignsData: [
        {
          title: 'The Shingle Shuffle',
          description: 'Shingles that look like they\'re doing the wave – curling at edges, cupping in the middle, or lifting.',
          impact: 'Your shingles are aging faster than they should. Without intervention, you\'re looking at water infiltration within 6-12 months.'
        },
        {
          title: 'The Gutter Graveyard',
          description: 'Check your gutters for what looks like coarse, black sand. Those are granules from your shingles.',
          impact: 'Your shingles are breaking down. Those granules are your roof\'s sunscreen. Without them, UV rays will destroy what\'s left in record time.'
        },
        {
          title: 'The Green Monster',
          description: 'Dark streaks, green patches, or anything that looks like your roof is growing a beard.',
          impact: 'Moisture is trapped where it shouldn\'t be. In our humid Myrtle Beach climate, this spreads fast and eats through roofing materials.'
        },
        {
          title: 'The Flashlight Test',
          description: 'Go to your attic with a flashlight during the day. See light coming through? That\'s trouble.',
          impact: 'If light can get in, so can water. You\'re one rainstorm away from serious interior damage.'
        },
        {
          title: 'The Energy Bill Spike',
          description: 'Your cooling costs jumped 20% or more without explanation.',
          impact: 'Poor roof ventilation or damaged insulation is forcing your AC to work overtime. You\'re losing money every single day.'
        }
      ],
      maintenanceCalendar: [
        {
          season: 'Spring (March - May)',
          tasks: [
            'Pre-<a href="/services/storm-damage" class="text-weather-teal underline hover:text-weather-teal-dark">hurricane season</a> inspection',
            'Clean <a href="/services/gutter-installation" class="text-weather-teal underline hover:text-weather-teal-dark">gutters and downspouts</a>',
            'Trim overhanging branches',
            'Check and reseal <a href="/services/roof-repair" class="text-weather-teal underline hover:text-weather-teal-dark">flashings</a>',
            'Document roof condition for insurance'
          ],
          critical: true
        },
        {
          season: 'Summer (June - August)',
          tasks: [
            'Monitor for heat damage',
            'Check <a href="/services/roof-ventilation" class="text-weather-teal underline hover:text-weather-teal-dark">attic ventilation</a>',
            'Inspect for UV degradation',
            'Clear debris from valleys',
            'Apply <a href="/services/roof-repair" class="text-weather-teal underline hover:text-weather-teal-dark">protective treatments</a>'
          ],
          critical: false
        },
        {
          season: 'Fall (September - November)',
          tasks: [
            'Post-<a href="/services/storm-damage" class="text-weather-teal underline hover:text-weather-teal-dark">hurricane</a> assessment',
            'Remove leaves and debris',
            'Inspect and clean <a href="/services/gutter-installation" class="text-weather-teal underline hover:text-weather-teal-dark">gutters</a>',
            'Check for loose or damaged <a href="/services/roof-repair" class="text-weather-teal underline hover:text-weather-teal-dark">shingles</a>',
            'Prepare for winter weather'
          ],
          critical: true
        },
        {
          season: 'Winter (December - February)',
          tasks: [
            'Check for ice dam formation',
            'Monitor for moisture buildup',
            'Inspect attic insulation',
            'Document any storm damage',
            'Schedule spring maintenance'
          ],
          critical: false
        }
      ],
      faqs: [
        {
          question: 'How often should I have my roof professionally inspected?',
          answer: 'In Myrtle Beach\'s coastal environment, we recommend twice yearly – once before hurricane season (May) and once after (November). Interior inspections should happen quarterly. Most insurance companies require annual documentation.'
        },
        {
          question: 'What voids my roof warranty?',
          answer: 'Common warranty killers include: walking on the roof yourself, using non-certified contractors, skipping required maintenance, improper ventilation, and satellite dish installation without professional help. Always check your specific warranty terms.'
        },
        {
          question: 'Can regular maintenance really add 10+ years to my roof?',
          answer: 'Absolutely. The National Roofing Contractors Association confirms that proper maintenance can double a roof\'s lifespan. We\'ve seen well-maintained roofs last 30+ years when the average neglected roof fails at 12-15 years.'
        },
        {
          question: 'What\'s included in a professional roof maintenance service?',
          answer: 'Our comprehensive service includes: complete visual inspection, gutter cleaning, debris removal, minor repairs (loose shingles, small sealing), flashing check, ventilation assessment, detailed report with photos, and warranty documentation.'
        },
        {
          question: 'How much does emergency roof repair typically cost?',
          answer: 'Emergency repairs cost 2-3 times more than planned maintenance. While specific prices vary, emergency repairs often cost $3,000-$7,000 due to urgency, overtime labor, and secondary damage. Prevention through maintenance saves thousands.'
        },
        {
          question: 'Will my insurance cover roof damage?',
          answer: 'Most policies cover sudden damage (storms, fallen trees) but NOT gradual deterioration from lack of maintenance. Insurance companies can request maintenance records. Without them, even storm damage claims may be denied. Our maintenance documentation protects your coverage.'
        },
        {
          question: 'What are the most common roofing problems in Myrtle Beach?',
          answer: 'Our coastal climate creates unique challenges: salt air corrosion, high humidity causing mold/algae growth, hurricane wind damage, intense UV degradation, and rapid temperature changes. Regular maintenance addresses all these issues.'
        },
        {
          question: 'How do I know if my roof has storm damage?',
          answer: 'Look for missing or torn shingles, dents from hail, exposed nail heads, granule loss, damaged flashing, and interior water stains. However, some damage isn\'t visible from the ground. Professional inspection after storms is crucial.'
        }
      ]
    }
  }
};

// Related posts data
const relatedPosts = [
  {
    title: 'Hurricane Season Prep: Protecting Your Roof from Storm Damage',
    excerpt: 'Learn essential steps to prepare your roof for hurricane season.',
    slug: 'hurricane-season-roof-preparation',
    readTime: '5 min',
    image: '/images/background/residential-roofing-gutter-siding-services.jpg'
  },
  {
    title: 'Signs You Need a New Roof: A Homeowner\'s Guide',
    excerpt: 'Discover the key warning signs that indicate it\'s time to replace your roof.',
    slug: 'signs-you-need-new-roof',
    readTime: '7 min',
    image: '/images/background/roof-replacement-services.jpg'
  },
  {
    title: 'Understanding Your Roof Warranty: What\'s Really Covered?',
    excerpt: 'Navigate the complexities of roofing warranties and learn what\'s covered.',
    slug: 'understanding-roof-warranty',
    readTime: '6 min',
    image: '/images/background/home-exterior-improvement-services.jpg'
  }
];

export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPostsData[params.slug];

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `https://weathershieldroofers.com/blog/${params.slug}`;
  const siteUrl = 'https://weathershieldroofers.com';

  return {
    title: `${post.title} | Weather Shield Roofing`,
    description: post.metaDescription,
    keywords: 'roof maintenance importance, prevent roof damage, extend roof life, roof inspection checklist, Myrtle Beach roof maintenance, South Carolina roofing, annual roof inspection, roof maintenance cost, professional roof inspection, roof warranty protection, storm damage prevention, roof lifespan, emergency roof repair costs, roof maintenance schedule',
    authors: [{ name: post.author, url: siteUrl }],
    creator: post.author,
    publisher: 'Weather Shield Roofing',
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${post.title} | Weather Shield Roofing`,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      url: canonicalUrl,
      siteName: 'Weather Shield Roofing',
      images: [
        {
          url: `${siteUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: `${post.title} - Weather Shield Roofing Expert Guide`,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@weathershieldroofing',
      creator: '@weathershieldroofing',
      title: post.title,
      description: post.metaDescription,
      images: [`${siteUrl}${post.image}`],
    },
    other: {
      'article:section': post.category,
      'article:tag': post.tags.join(', '),
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPostsData[params.slug];

  if (!post) {
    notFound();
  }

  // Generate structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // Article Schema
      {
        '@type': 'Article',
        '@id': `https://weathershieldroofers.com/blog/${params.slug}#article`,
        headline: post.title,
        description: post.metaDescription,
        image: `https://weathershieldroofers.com${post.image}`,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          '@type': 'Person',
          '@id': `https://weathershieldroofers.com#author-${post.author.toLowerCase().replace(' ', '-')}`,
          name: post.author,
          description: post.authorBio,
          jobTitle: post.authorRole,
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://weathershieldroofers.com#organization',
          name: 'Weather Shield Roofing',
          logo: {
            '@type': 'ImageObject',
            url: 'https://weathershieldroofers.com/images/logo/weather_shield_roofing_transparent.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://weathershieldroofers.com/blog/${params.slug}`,
        },
        wordCount: 2500,
        keywords: post.tags.join(', '),
        articleSection: post.category,
      },
      // HowTo Schema for maintenance steps
      {
        '@type': 'HowTo',
        '@id': `https://weathershieldroofers.com/blog/${params.slug}#howto`,
        name: 'How to Maintain Your Roof and Extend Its Life',
        description: 'Step-by-step guide to proper roof maintenance that can add 10+ years to your roof\'s lifespan.',
        image: `https://weathershieldroofers.com${post.image}`,
        totalTime: 'P1Y',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'USD',
          minValue: '300',
          maxValue: '500',
        },
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Professional roof inspection',
          },
          {
            '@type': 'HowToSupply',
            name: 'Gutter cleaning equipment',
          },
        ],
        step: [
          {
            '@type': 'HowToStep',
            name: 'Schedule bi-annual professional inspections',
            text: 'Have your roof professionally inspected twice yearly - once before hurricane season (May) and once after (November).',
          },
          {
            '@type': 'HowToStep',
            name: 'Clean gutters and downspouts regularly',
            text: 'Remove leaves and debris from gutters quarterly to prevent water damage and ice dams.',
          },
          {
            '@type': 'HowToStep',
            name: 'Trim overhanging branches',
            text: 'Keep tree branches at least 6 feet away from your roof to prevent damage and debris buildup.',
          },
          {
            '@type': 'HowToStep',
            name: 'Check and reseal flashings',
            text: 'Inspect roof flashings annually and reseal any gaps or cracks to prevent water infiltration.',
          },
          {
            '@type': 'HowToStep',
            name: 'Document roof condition',
            text: 'Take photos and keep maintenance records for insurance claims and warranty protection.',
          },
        ],
      },
      // FAQ Schema
      {
        '@type': 'FAQPage',
        '@id': `https://weathershieldroofers.com/blog/${params.slug}#faq`,
        mainEntity: post.content.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      // Organization Schema
      {
        '@type': 'RoofingContractor',
        '@id': 'https://weathershieldroofers.com#organization',
        name: 'Weather Shield Roofing',
        alternateName: 'WeatherShield Roofing',
        url: 'https://weathershieldroofers.com',
        logo: 'https://weathershieldroofers.com/images/logo/weather_shield_roofing_transparent.png',
        description: 'Premier roofing contractor serving Myrtle Beach and surrounding areas with professional roof repair, replacement, and maintenance services.',
        telephone: '+1-843-293-8150',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Myrtle Beach',
          addressLocality: 'Myrtle Beach',
          addressRegion: 'SC',
          postalCode: '29577',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.6891,
          longitude: -78.8867,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '16:00',
          },
        ],
        sameAs: [
          'https://www.facebook.com/weathershieldroofing',
          'https://twitter.com/weathershieldroofing',
          'https://www.linkedin.com/company/weathershieldroofing',
          'https://www.youtube.com/@weathershieldroofing',
        ],
        review: {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          author: {
            '@type': 'Organization',
            name: 'Google Reviews',
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '250',
        },
      },
      // BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `https://weathershieldroofers.com/blog/${params.slug}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://weathershieldroofers.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://weathershieldroofers.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://weathershieldroofers.com/blog/${params.slug}`,
          },
        ],
      },
      // Speakable Schema for voice search
      {
        '@type': 'WebPage',
        '@id': `https://weathershieldroofers.com/blog/${params.slug}`,
        url: `https://weathershieldroofers.com/blog/${params.slug}`,
        name: post.title,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', '.intro', '.faq-question', '.faq-answer'],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BlogPostClient post={post} relatedPosts={relatedPosts} slug={params.slug} />
    </>
  );
}