import { Metadata } from 'next';
import IssuePageTemplate from '../components/IssuePageTemplate';

export const metadata: Metadata = {
  title: 'Missing or Damaged Shingles: Fast Replacement | Myrtle Beach Roofing',
  description: 'Missing shingles leave your Myrtle Beach home exposed to water damage. Weather Shield Roofing provides fast, professional shingle replacement. Call (843) 877-5539.',
  openGraph: {
    title: 'Missing or Damaged Shingles: Fast Replacement | Myrtle Beach Roofing',
    description: 'Missing shingles leave your Myrtle Beach home exposed to water damage. Weather Shield Roofing provides fast, professional shingle replacement.',
    url: 'https://charwinvanryckdegroot.github.io/weathershield-roofing-site/missing-shingles',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'article',
  },
};

export default function MissingShinglesPage() {
  return (
    <IssuePageTemplate
      title="Missing or Damaged Shingles"
      description="Missing or damaged shingles are more than just a cosmetic issue—they compromise your roof's ability to protect your home from water, wind, and weather. In Myrtle Beach's coastal climate with frequent storms and high winds, even a few missing shingles can quickly lead to leaks, structural damage, and costly repairs. Weather Shield Roofing specializes in fast, professional shingle replacement that matches your existing roof and restores full protection."
      symptoms={[
        "Visible gaps or bare spots on roof where shingles are missing",
        "Shingle granules accumulating in gutters or on ground",
        "Curled, cracked, or broken shingle edges",
        "Shingles found in yard after windstorms",
        "Dark streaks or discoloration on roof surface",
        "Exposed roof felt or underlayment visible from ground",
        "Lifted or loose shingles that flap in wind",
        "Water stains appearing on ceilings after rain"
      ]}
      causes={[
        {
          title: "High Winds and Storms",
          description: "Coastal storms and hurricanes can tear shingles off, especially if they were improperly installed or nearing the end of their lifespan."
        },
        {
          title: "Age and Weathering",
          description: "As shingles age, they become brittle and lose adhesive strength, making them more susceptible to wind damage and breakage."
        },
        {
          title: "Improper Installation",
          description: "Shingles that weren't nailed correctly, lack proper overlap, or were installed in wrong weather conditions are prone to failure."
        },
        {
          title: "Thermal Shock",
          description: "Rapid temperature changes cause shingles to expand and contract, weakening their structure and adhesive seal over time."
        },
        {
          title: "Poor Ventilation",
          description: "Inadequate attic ventilation causes excessive heat buildup, which accelerates shingle aging and can cause premature failure."
        },
        {
          title: "Falling Debris",
          description: "Tree branches, hail, or other falling objects can crack, puncture, or dislodge shingles, creating immediate vulnerabilities."
        }
      ]}
      solutions={[
        {
          title: "Comprehensive Roof Inspection",
          description: "We examine the entire roof to identify all missing, damaged, or compromised shingles, as well as underlying issues.",
          timeframe: "30-60 minutes on-site"
        },
        {
          title: "Shingle Matching",
          description: "We source replacement shingles that match your existing roof's color, style, and manufacturer for seamless integration.",
          timeframe: "1-2 business days for materials"
        },
        {
          title: "Professional Replacement",
          description: "Our certified roofers remove damaged shingles, inspect and repair underlayment if needed, and install new shingles with proper nailing and sealing.",
          timeframe: "Half day to full day"
        },
        {
          title: "Surrounding Area Check",
          description: "We inspect adjacent shingles and roof components to ensure no additional damage exists that could cause future problems.",
          timeframe: "Included in repair"
        },
        {
          title: "Quality Assurance",
          description: "After installation, we perform a final inspection to verify proper alignment, sealing, and weather resistance.",
          timeframe: "Before project completion"
        }
      ]}
      prevention={[
        "Schedule regular roof inspections, especially after major storms or high winds",
        "Replace aging roofs before widespread shingle failure occurs (typically 15-25 years)",
        "Ensure proper attic ventilation to prevent heat damage to shingles",
        "Trim overhanging tree branches that could fall and damage shingles",
        "Use high-quality shingles rated for high wind zones in coastal areas",
        "Hire certified roofing contractors for installations to ensure proper technique",
        "Address minor shingle damage immediately before it spreads or causes leaks",
        "Keep gutters clean to prevent water backup that can damage shingle edges"
      ]}
      faqs={[
        {
          question: "How many missing shingles does it take to cause a leak?",
          answer: "Even a single missing shingle can allow water infiltration, especially during heavy rain or wind-driven rain. The roof's underlayment provides temporary protection, but it's not designed to be a permanent barrier. Multiple missing shingles significantly increase leak risk and should be addressed immediately."
        },
        {
          question: "Can you replace just a few shingles, or do I need a whole new roof?",
          answer: "In most cases, if damage is localized and your roof is relatively young (under 15 years), we can replace individual shingles or small sections. However, if your roof is older and showing widespread damage, a full replacement may be more cost-effective long-term."
        },
        {
          question: "Will new shingles match my existing roof?",
          answer: "We work hard to match the color, style, and manufacturer of your existing shingles. However, slight color variations may occur due to weathering and UV exposure on older roofs. In most cases, the difference becomes less noticeable over time as new shingles weather."
        },
        {
          question: "How long do shingle repairs last?",
          answer: "When professionally installed, replacement shingles should last as long as the remaining shingles on your roof. We use the same high-quality materials and installation techniques as full roof replacements, ensuring durability and weather resistance."
        },
        {
          question: "Is shingle replacement covered by homeowners insurance?",
          answer: "If shingle damage resulted from a covered event like a storm, hurricane, or falling tree, most insurance policies will cover repairs. Gradual wear and tear due to age typically isn't covered. We can provide detailed documentation and photos to support your claim."
        },
        {
          question: "What happens if I ignore missing shingles?",
          answer: "Ignoring missing shingles exposes your roof deck to moisture, which can lead to wood rot, mold growth, structural damage, and expensive interior repairs. What starts as a simple shingle replacement can escalate into thousands of dollars in additional damage if left unaddressed."
        }
      ]}
      relatedIssues={[
        {
          title: "Roof Leaks",
          href: "/roof-leaks",
          description: "Understand how missing shingles lead to water infiltration"
        },
        {
          title: "Hail Damage Roof Repair",
          href: "/hail-damage-roof",
          description: "Learn about storm-related shingle damage"
        },
        {
          title: "Curling Shingles",
          href: "/curling-shingles",
          description: "Identify aging shingle problems before they fail"
        }
      ]}
      urgencyLevel="high"
      costFactors={[
        "Number of shingles requiring replacement",
        "Roof pitch and accessibility",
        "Type and quality of replacement shingles",
        "Extent of underlayment or deck damage",
        "Height and complexity of roof design",
        "Availability of matching shingle inventory"
      ]}
    />
  );
}
