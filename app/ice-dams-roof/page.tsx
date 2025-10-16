import { Metadata } from 'next';
import IssuePageTemplate from '../components/IssuePageTemplate';

export const metadata: Metadata = {
  title: 'Ice Dam Prevention & Removal | Roof Ice Damage Repair | Myrtle Beach SC',
  description: 'Ice dams causing roof leaks? Weather Shield Roofing provides safe removal, prevention solutions, and damage repair in Myrtle Beach. Call (843) 877-5539.',
  openGraph: {
    title: 'Ice Dam Prevention & Removal | Roof Ice Damage Repair | Myrtle Beach SC',
    description: 'Ice dams causing roof leaks? Weather Shield Roofing provides safe removal, prevention solutions, and damage repair.',
    url: 'https://charwinvanryckdegroot.github.io/weathershield-roofing-site/ice-dams-roof',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'article',
  },
};

export default function IceDamsRoofPage() {
  return (
    <IssuePageTemplate
      title="Ice Dams: Prevention & Repair"
      description="Ice dams form when heat from your attic melts snow on the roof, which then refreezes at the colder roof edges, creating ice barriers. These barriers trap melting snow, forcing water under shingles and into your home. While less common in Myrtle Beach's coastal climate, occasional winter storms with snow and freezing temperatures can cause ice dam formation, especially on poorly ventilated or insulated roofs. Weather Shield Roofing provides safe ice dam removal, damage repair, and long-term prevention solutions."
      symptoms={[
        "Icicles hanging from roof eaves or gutters",
        "Ice buildup along roof edges and in gutters",
        "Water stains on ceilings or exterior walls",
        "Peeling paint or water damage below roof eaves",
        "Sagging gutters from ice weight",
        "Water dripping from soffits or fascia",
        "Ice extending up roof beyond gutter line",
        "Interior leaks during winter freeze/thaw cycles"
      ]}
      causes={[
        {
          title: "Poor Attic Insulation",
          description: "Inadequate insulation allows warm air to escape into the attic, heating the roof deck and melting snow unevenly."
        },
        {
          title: "Insufficient Ventilation",
          description: "Without proper airflow, attic heat accumulates against the roof deck, creating warm and cold zones that promote ice dam formation."
        },
        {
          title: "Heat Loss from Living Spaces",
          description: "Air leaks from recessed lights, attic hatches, or ductwork allow warm air into the attic, heating the roof from below."
        },
        {
          title: "Complex Roof Design",
          description: "Multiple roof planes, valleys, and dormers create areas where snow accumulates and ice dams are more likely to form."
        },
        {
          title: "Clogged Gutters",
          description: "Debris-filled gutters prevent proper drainage and create ice buildup that backs up under shingles."
        },
        {
          title: "Freeze-Thaw Cycles",
          description: "Repeated melting during daytime and refreezing at night exacerbates ice dam growth and water infiltration."
        }
      ]}
      solutions={[
        {
          title: "Safe Ice Dam Removal",
          description: "We use professional steaming equipment to safely melt ice dams without damaging shingles—never chisels or salt that harm roofing materials.",
          timeframe: "2-4 hours per location"
        },
        {
          title: "Emergency Leak Mitigation",
          description: "If ice dams have caused active leaks, we provide temporary protection and interior damage assessment.",
          timeframe: "Same day response available"
        },
        {
          title: "Attic Insulation Upgrade",
          description: "We install or upgrade insulation to R-38 or higher to prevent heat loss and maintain consistent roof temperatures.",
          timeframe: "1-2 days"
        },
        {
          title: "Ventilation System Installation",
          description: "We add ridge vents, soffit vents, or baffles to create proper airflow and keep the roof deck at outdoor temperatures.",
          timeframe: "1-2 days"
        },
        {
          title: "Ice-and-Water Shield Installation",
          description: "During roof replacement, we install waterproof membrane along eaves and valleys to prevent water infiltration if ice dams form.",
          timeframe: "Included in roof replacement"
        }
      ]}
      prevention={[
        "Ensure attic insulation meets or exceeds R-38 in South Carolina",
        "Install proper ridge and soffit ventilation for continuous airflow",
        "Seal all attic air leaks (recessed lights, hatches, ductwork, penetrations)",
        "Keep gutters clean and free of debris before winter weather",
        "Install heat cables along eaves if ice dams are recurring problem",
        "Remove snow from roof edges after heavy snowfall (hire professionals—DIY is dangerous)",
        "Verify attic temperature stays within 10°F of outdoor temperature in winter",
        "Install ice-and-water shield during roof replacement for extra protection"
      ]}
      faqs={[
        {
          question: "Are ice dams really a problem in Myrtle Beach?",
          answer: "While less common than in northern climates, Myrtle Beach does experience occasional winter storms with snow and freezing temperatures. Homes with poor insulation or ventilation can develop ice dams during these events, causing significant water damage. Prevention is key, especially for older homes."
        },
        {
          question: "Can I remove ice dams myself?",
          answer: "We strongly advise against DIY ice dam removal. Climbing on icy roofs is extremely dangerous, and using chisels, hammers, or roof salt can severely damage shingles. Professional steaming equipment safely melts ice without harm. Call Weather Shield Roofing for safe, effective removal."
        },
        {
          question: "How do I prevent ice dams from forming?",
          answer: "The most effective prevention is proper attic insulation (R-38+) and ventilation. This keeps your roof deck at outdoor temperatures, preventing uneven melting. Additionally, seal attic air leaks and keep gutters clean. For homes with recurring ice dams, heat cables along eaves can provide extra protection."
        },
        {
          question: "Will better gutters prevent ice dams?",
          answer: "No. Ice dams aren't caused by gutters—they form on the roof itself due to heat loss. While gutter guards can prevent debris buildup, they won't stop ice dam formation. The solution is improving attic insulation and ventilation, not gutter systems."
        },
        {
          question: "Does homeowners insurance cover ice dam damage?",
          answer: "Most policies cover interior water damage caused by ice dams as a covered peril. However, the cost of ice dam removal itself may not be covered, and preventive work like insulation upgrades is typically not covered. Check your specific policy or call us for assistance with claims."
        },
        {
          question: "How much does ice dam removal cost?",
          answer: "Professional steaming services typically cost several hundred to over a thousand dollars depending on severity and roof size. However, the cost of NOT removing ice dams—interior water damage, mold, structural repairs—can reach tens of thousands. We provide free assessments and transparent pricing."
        }
      ]}
      relatedIssues={[
        {
          title: "Roof Leaks",
          href: "/roof-leaks",
          description: "Learn how ice dams cause water infiltration"
        },
        {
          title: "Water Stains & Ceiling Damage",
          href: "/water-stains-ceiling",
          description: "Address interior damage from ice dam leaks"
        },
        {
          title: "Curling Shingles",
          href: "/curling-shingles",
          description: "Understand ventilation-related roof problems"
        }
      ]}
      urgencyLevel="high"
      costFactors={[
        "Severity and extent of ice dam formation",
        "Accessibility and roof pitch",
        "Interior damage requiring repair",
        "Need for insulation or ventilation upgrades",
        "Roof size and complexity",
        "Emergency vs. scheduled service timing"
      ]}
    />
  );
}
