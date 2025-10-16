import { Metadata } from 'next';
import IssuePageTemplate from '../components/IssuePageTemplate';

export const metadata: Metadata = {
  title: 'Sagging Roof Emergency Repair | Structural Roofing Issues | Myrtle Beach SC',
  description: 'Sagging roof? This is a structural emergency. Weather Shield Roofing provides immediate assessment and expert repair in Myrtle Beach. Call now (843) 877-5539.',
  openGraph: {
    title: 'Sagging Roof Emergency Repair | Structural Roofing Issues | Myrtle Beach SC',
    description: 'Sagging roof? This is a structural emergency. Weather Shield Roofing provides immediate assessment and expert repair in Myrtle Beach.',
    url: 'https://charwinvanryckdegroot.github.io/weathershield-roofing-site/sagging-roof',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'article',
  },
};

export default function SaggingRoofPage() {
  return (
    <IssuePageTemplate
      title="Sagging Roof - Structural Emergency"
      description="A sagging roof is a serious structural emergency that requires immediate professional attention. Unlike cosmetic issues, sagging indicates compromised structural integrity—whether from water damage, inadequate support, overloading, or foundation problems. In extreme cases, a sagging roof can collapse, posing life-threatening danger and causing catastrophic property damage. If you notice sagging, drooping, or dipping anywhere on your roof, contact Weather Shield Roofing immediately for emergency assessment and stabilization."
      symptoms={[
        "Visible sag, dip, or depression in roof ridge or surface",
        "Uneven roofline visible from street or yard",
        "Doors or windows sticking or not closing properly",
        "Cracks in interior walls or ceilings (especially near corners)",
        "Bowing or sagging ceiling rafters visible from attic",
        "Popping or cracking sounds from attic or ceiling",
        "Water pooling in sagging areas after rain",
        "Leaning or tilting chimney"
      ]}
      causes={[
        {
          title: "Water Damage & Rot",
          description: "Prolonged exposure to leaks causes roof decking, rafters, and support beams to rot and lose structural strength, leading to sagging."
        },
        {
          title: "Excessive Roof Weight",
          description: "Multiple layers of old shingles, heavy snow/ice accumulation, or improper material choices can overload the roof structure."
        },
        {
          title: "Undersized or Damaged Rafters",
          description: "Rafters that are too small for the span, improperly spaced, or damaged by termites/rot cannot adequately support the roof."
        },
        {
          title: "Foundation Settlement",
          description: "Shifting or settling foundations cause walls to shift, transferring stress to the roof structure and creating sags."
        },
        {
          title: "Poor Original Construction",
          description: "Inadequate bracing, improper rafter spacing, or substandard framing can cause premature structural failure."
        },
        {
          title: "Termite or Pest Damage",
          description: "Wood-destroying insects compromise the structural integrity of rafters, joists, and decking, leading to sagging."
        }
      ]}
      solutions={[
        {
          title: "Emergency Structural Assessment",
          description: "Our team immediately evaluates the severity of sagging, identifies causes, and determines if the building is safe to occupy.",
          timeframe: "Within hours - emergency response"
        },
        {
          title: "Temporary Stabilization",
          description: "If necessary, we install emergency bracing and supports to prevent further movement or collapse while permanent repairs are planned.",
          timeframe: "Same day or next day"
        },
        {
          title: "Rafter & Joist Reinforcement",
          description: "We sister new lumber alongside damaged rafters, install additional support beams, or replace compromised structural members.",
          timeframe: "3-7 days depending on extent"
        },
        {
          title: "Roof Deck Replacement",
          description: "Rotted or damaged decking is removed and replaced with new plywood or OSB sheathing to restore structural integrity.",
          timeframe: "2-5 days"
        },
        {
          title: "Complete Roof Reconstruction",
          description: "In severe cases, we may need to rebuild the entire roof structure to modern building codes with proper engineering.",
          timeframe: "1-2 weeks"
        }
      ]}
      prevention={[
        "Address roof leaks immediately before water damage compromises structure",
        "Ensure proper attic ventilation to prevent moisture-related wood rot",
        "Remove old roofing layers before installing new materials (never exceed 2 layers)",
        "Schedule regular professional inspections to catch structural issues early",
        "Clear heavy snow accumulation from roof during winter storms",
        "Treat for termites and wood-destroying pests regularly",
        "Ensure gutters function properly to prevent water infiltration",
        "Verify new construction meets local building codes with proper rafter sizing and spacing"
      ]}
      faqs={[
        {
          question: "Is a sagging roof dangerous? Should I evacuate my home?",
          answer: "Yes, a sagging roof is potentially dangerous and should be treated as an emergency. Severe sagging can lead to roof collapse. If you notice sudden sagging, large cracks in walls/ceilings, or hear cracking sounds, evacuate immediately and call professionals. Minor sagging may be stable but still requires urgent professional assessment."
        },
        {
          question: "Can a sagging roof be repaired, or does it need complete replacement?",
          answer: "It depends on the cause and severity. Minor sagging from a few damaged rafters can often be repaired by sistering new lumber alongside damaged members. Widespread rot, structural inadequacy, or severe damage typically requires more extensive reconstruction. Professional assessment is essential."
        },
        {
          question: "How much does sagging roof repair cost?",
          answer: "Costs vary widely based on severity. Simple rafter reinforcement may cost a few thousand dollars, while complete roof structure reconstruction can reach $15,000-$50,000+ depending on size and complexity. Insurance may cover costs if damage resulted from a covered event. We provide free emergency assessments and detailed estimates."
        },
        {
          question: "Will homeowners insurance cover sagging roof repairs?",
          answer: "It depends on the cause. Sudden damage from storms, falling trees, or covered events is typically covered. Gradual sagging from age, poor maintenance, or original construction defects usually isn't. However, if sagging resulted from an undetected leak, you may have coverage. We help document damage for insurance claims."
        },
        {
          question: "How quickly does a sagging roof need to be fixed?",
          answer: "Immediately. Even if the sag appears minor, the underlying structural damage is worsening daily. Water continues to penetrate, wood continues to rot, and stress on remaining supports increases. What starts as a manageable repair can quickly become a catastrophic collapse if ignored."
        },
        {
          question: "Can I temporarily fix a sagging roof myself?",
          answer: "No. Sagging roofs involve serious structural issues that require professional engineering assessment and repair. DIY attempts can be dangerous, make the problem worse, and void insurance coverage. Call Weather Shield Roofing immediately for emergency response—we're available 24/7."
        }
      ]}
      relatedIssues={[
        {
          title: "Roof Leaks",
          href: "/roof-leaks",
          description: "Learn how leaks cause structural damage and sagging"
        },
        {
          title: "Water Stains & Ceiling Damage",
          href: "/water-stains-ceiling",
          description: "Identify interior signs of water damage"
        },
        {
          title: "Curling Shingles",
          href: "/curling-shingles",
          description: "Understand roof deterioration warning signs"
        }
      ]}
      urgencyLevel="emergency"
      costFactors={[
        "Severity and extent of structural damage",
        "Number of rafters/joists requiring repair or replacement",
        "Extent of roof deck damage",
        "Need for complete roof reconstruction",
        "Accessibility and roof complexity",
        "Hidden damage discovered during repair"
      ]}
    />
  );
}
