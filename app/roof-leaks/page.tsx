import { Metadata } from 'next';
import IssuePageTemplate from '../components/IssuePageTemplate';

export const metadata: Metadata = {
  title: 'Roof Leaks: Signs, Causes & Professional Repair | Myrtle Beach SC',
  description: 'Experiencing a roof leak in Myrtle Beach? Learn the warning signs, common causes, and how Weather Shield Roofing fixes leaks fast. Free inspection available 24/7.',
  openGraph: {
    title: 'Roof Leaks: Signs, Causes & Professional Repair | Myrtle Beach SC',
    description: 'Experiencing a roof leak in Myrtle Beach? Learn the warning signs, common causes, and how Weather Shield Roofing fixes leaks fast. Free inspection available 24/7.',
    url: 'https://charwinvanryckdegroot.github.io/weathershield-roofing-site/roof-leaks',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Leaks: Signs, Causes & Professional Repair | Myrtle Beach SC',
    description: 'Experiencing a roof leak in Myrtle Beach? Learn the warning signs, common causes, and how Weather Shield Roofing fixes leaks fast.',
  },
};

export default function RoofLeaksPage() {
  return (
    <IssuePageTemplate
      title="Roof Leaks"
      description="Roof leaks are one of the most common and urgent roofing problems homeowners face in Myrtle Beach. Whether caused by storm damage, aging materials, or poor installation, even small leaks can lead to significant water damage, mold growth, and structural issues if left unaddressed. Our expert team at Weather Shield Roofing specializes in quickly identifying the source of leaks and providing lasting repairs that protect your home and your investment."
      symptoms={[
        "Water stains on ceilings or walls (brown or yellow discoloration)",
        "Dripping water or moisture in attic during or after rain",
        "Musty odors indicating hidden mold or mildew",
        "Peeling paint or wallpaper near ceiling areas",
        "Visible water pooling on floor after storms",
        "Sagging or bulging areas in ceiling drywall",
        "Active dripping from light fixtures or vents",
        "Damaged or missing shingles visible from ground"
      ]}
      causes={[
        {
          title: "Damaged or Missing Shingles",
          description: "High winds, storms, and age can cause shingles to crack, curl, or blow off entirely, exposing the underlayment to water infiltration."
        },
        {
          title: "Flashing Failures",
          description: "Flashing around chimneys, skylights, vents, and roof valleys can deteriorate, separate, or be improperly installed, creating entry points for water."
        },
        {
          title: "Clogged Gutters",
          description: "When gutters are blocked with debris, water backs up under shingles and seeps into the roof deck, causing leaks and rot."
        },
        {
          title: "Ice Dams (Winter)",
          description: "In colder months, ice dams form at roof edges, preventing proper drainage and forcing water under shingles."
        },
        {
          title: "Aging Roof Materials",
          description: "Roofs have a limited lifespan. As materials age and deteriorate, they become more susceptible to leaks and water damage."
        },
        {
          title: "Poor Installation or Repairs",
          description: "Incorrectly installed roofing materials or previous DIY repairs can create vulnerabilities that lead to leaks."
        }
      ]}
      solutions={[
        {
          title: "Emergency Leak Assessment",
          description: "We perform a thorough inspection to identify the exact source of the leak, checking shingles, flashing, valleys, and penetrations.",
          timeframe: "Same day response available"
        },
        {
          title: "Temporary Leak Mitigation",
          description: "If immediate repair isn't possible due to weather, we apply emergency tarping or sealants to prevent further water intrusion.",
          timeframe: "Within hours of contact"
        },
        {
          title: "Precision Leak Repair",
          description: "We replace damaged shingles, re-seal flashing, repair underlayment, and address any structural damage to the roof deck.",
          timeframe: "1-3 days depending on extent"
        },
        {
          title: "Interior Damage Assessment",
          description: "We inspect attic spaces and ceilings for hidden water damage, mold, or compromised insulation that may need attention.",
          timeframe: "Included in initial inspection"
        },
        {
          title: "Preventive Recommendations",
          description: "After repairs, we provide guidance on maintenance, gutter care, and potential upgrades to prevent future leaks.",
          timeframe: "Provided at completion"
        }
      ]}
      prevention={[
        "Schedule annual professional roof inspections, especially after severe weather",
        "Keep gutters and downspouts clean and free of debris year-round",
        "Trim overhanging tree branches that can damage shingles during storms",
        "Replace damaged or missing shingles immediately before water infiltration occurs",
        "Ensure proper attic ventilation to prevent moisture buildup and ice dams",
        "Check flashing around chimneys, vents, and skylights regularly for gaps or deterioration",
        "Avoid walking on your roof, as this can damage shingles and create vulnerabilities",
        "Address small issues early before they escalate into major leaks or structural damage"
      ]}
      faqs={[
        {
          question: "How quickly can you respond to a roof leak emergency?",
          answer: "We offer 24/7 emergency service for active roof leaks. In most cases, we can have a technician on-site within hours to assess the damage and provide temporary protection. Permanent repairs are typically completed within 1-3 business days depending on weather and the extent of damage."
        },
        {
          question: "Can a small roof leak turn into a big problem?",
          answer: "Absolutely. Even minor leaks can cause extensive damage over time, including rotted roof decking, mold growth, damaged insulation, compromised structural integrity, and costly interior repairs. It's always best to address leaks immediately, no matter how small they appear."
        },
        {
          question: "How do you find the source of a roof leak?",
          answer: "Roof leaks can be tricky because water often travels along rafters or decking before dripping into your home. Our experienced technicians use a combination of visual inspection, water testing, moisture meters, and attic examination to trace the leak back to its exact entry point on the roof."
        },
        {
          question: "Will insurance cover roof leak repairs?",
          answer: "It depends on the cause. Most homeowners insurance policies cover sudden, accidental damage like storm-related leaks. However, leaks due to poor maintenance or gradual wear may not be covered. We can provide detailed documentation and photos to help with your insurance claim."
        },
        {
          question: "How much does roof leak repair cost in Myrtle Beach?",
          answer: "Repair costs vary based on the leak's location, extent of damage, and materials needed. Minor repairs may cost a few hundred dollars, while extensive damage requiring deck replacement can be more. We provide free inspections and transparent estimates before any work begins."
        },
        {
          question: "Can I temporarily fix a roof leak myself?",
          answer: "While temporary measures like placing a tarp or bucket can minimize immediate damage, we strongly recommend calling professionals. DIY roof work can be dangerous, may void warranties, and could make the problem worse if done incorrectly. We offer rapid response for emergency situations."
        }
      ]}
      relatedIssues={[
        {
          title: "Missing or Damaged Shingles",
          href: "/missing-shingles",
          description: "Learn about shingle damage and professional replacement"
        },
        {
          title: "Roof Flashing Issues",
          href: "/roof-flashing-problems",
          description: "Understand flashing failures and repair solutions"
        },
        {
          title: "Water Stains & Ceiling Damage",
          href: "/water-stains-ceiling",
          description: "Discover how to address interior water damage"
        }
      ]}
      urgencyLevel="emergency"
      costFactors={[
        "Size and location of the leak",
        "Extent of roof deck or structural damage",
        "Type of roofing material requiring repair",
        "Need for interior damage restoration",
        "Accessibility and roof pitch",
        "Emergency vs. scheduled repair timing"
      ]}
    />
  );
}
