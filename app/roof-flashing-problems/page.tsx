import { Metadata } from 'next';
import IssuePageTemplate from '../components/IssuePageTemplate';

export const metadata: Metadata = {
  title: 'Roof Flashing Leaks & Repair | Chimney, Skylight, Vent Flashing | Myrtle Beach',
  description: 'Flashing failures cause 95% of roof leaks. Weather Shield Roofing expertly repairs chimney, skylight, and vent flashing in Myrtle Beach. Free inspection (843) 877-5539.',
  openGraph: {
    title: 'Roof Flashing Leaks & Repair | Chimney, Skylight, Vent Flashing | Myrtle Beach',
    description: 'Flashing failures cause 95% of roof leaks. Weather Shield Roofing expertly repairs chimney, skylight, and vent flashing in Myrtle Beach.',
    url: 'https://charwinvanryckdegroot.github.io/weathershield-roofing-site/roof-flashing-problems',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'article',
  },
};

export default function RoofFlashingProblemsPage() {
  return (
    <IssuePageTemplate
      title="Roof Flashing Issues & Leaks"
      description="Roof flashing is the thin metal material installed around roof penetrations (chimneys, skylights, vents, valleys) to create watertight seals. Despite its critical role in preventing leaks, flashing is often overlooked during maintenance—yet it's responsible for approximately 95% of all roof leaks. In Myrtle Beach's humid coastal environment with frequent storms, flashing deteriorates faster and requires professional attention. Weather Shield Roofing specializes in diagnosing and repairing all types of flashing failures to keep your home dry and protected."
      symptoms={[
        "Water stains on ceilings near chimneys or skylights",
        "Rust or corrosion visible on metal flashing",
        "Gaps or separation between flashing and roof surface",
        "Missing or bent flashing sections around roof penetrations",
        "Water pooling in roof valleys after rain",
        "Peeling caulk or sealant around flashing edges",
        "Leaks that worsen during wind-driven rain",
        "Visible daylight through gaps in flashing from attic"
      ]}
      causes={[
        {
          title: "Improper Installation",
          description: "Flashing that wasn't correctly integrated with shingles, improperly sealed, or installed in wrong sequence will fail prematurely."
        },
        {
          title: "Age and Corrosion",
          description: "Metal flashing deteriorates over time, especially in coastal environments where salt air accelerates rust and corrosion."
        },
        {
          title: "Thermal Expansion",
          description: "Metal expands and contracts with temperature changes, causing sealants to crack and fasteners to loosen over time."
        },
        {
          title: "Storm Damage",
          description: "High winds and flying debris can bend, dislodge, or tear flashing away from the roof surface."
        },
        {
          title: "Caulk Failure",
          description: "Sealants used around flashing dry out, crack, and lose adhesion, especially under UV exposure and extreme temperatures."
        },
        {
          title: "Poor Quality Materials",
          description: "Low-grade flashing materials corrode faster and fail sooner than professional-grade galvanized steel, copper, or aluminum."
        }
      ]}
      solutions={[
        {
          title: "Flashing Inspection & Diagnosis",
          description: "We inspect all flashing points including chimneys, skylights, vents, dormers, and valleys to identify failures and vulnerabilities.",
          timeframe: "Included in roof inspection"
        },
        {
          title: "Targeted Flashing Repair",
          description: "For minor issues, we re-seal, re-fasten, or replace small sections of flashing without disturbing surrounding roofing materials.",
          timeframe: "1-2 days"
        },
        {
          title: "Complete Flashing Replacement",
          description: "When flashing is extensively corroded or damaged, we remove old materials and install new professional-grade flashing with proper integration.",
          timeframe: "2-3 days depending on complexity"
        },
        {
          title: "Valley Flashing Restoration",
          description: "We specialize in valley flashing—a common failure point—using metal or ice-and-water shield for maximum protection.",
          timeframe: "1 day per valley"
        },
        {
          title: "Counter-Flashing Installation",
          description: "For chimneys and walls, we install proper step flashing and counter-flashing to create layered, redundant waterproofing.",
          timeframe: "1 day"
        }
      ]}
      prevention={[
        "Inspect flashing annually, especially after severe weather events",
        "Re-seal flashing caulk every 3-5 years before it cracks or fails",
        "Upgrade to high-quality materials (copper, galvanized steel) during roof replacement",
        "Ensure proper flashing installation during any roof work or chimney repairs",
        "Keep chimneys and skylights well-maintained to prevent flashing stress",
        "Address rust or corrosion immediately before it spreads",
        "Install ice-and-water shield in valleys and vulnerable areas",
        "Use certified roofing contractors who understand proper flashing techniques"
      ]}
      faqs={[
        {
          question: "What is roof flashing and why is it important?",
          answer: "Flashing is thin metal (aluminum, copper, or galvanized steel) installed at roof joints, valleys, and around penetrations like chimneys and skylights. It directs water away from vulnerable areas and creates watertight seals. Without proper flashing, even a new roof will leak."
        },
        {
          question: "How do I know if my flashing is the source of a leak?",
          answer: "Flashing leaks typically occur during or shortly after rain, especially around chimneys, skylights, or in valleys. Water stains near these areas, rust on visible flashing, or gaps between flashing and roofing materials are telltale signs. Professional inspection is needed to confirm."
        },
        {
          question: "Can flashing be repaired, or does it need complete replacement?",
          answer: "Minor flashing issues like loose fasteners or cracked sealant can often be repaired. However, corroded, bent, or improperly installed flashing should be completely replaced to ensure long-term waterproofing. We assess each situation individually."
        },
        {
          question: "How long does roof flashing last?",
          answer: "Quality flashing materials can last 20-30 years or more. However, in coastal areas like Myrtle Beach, salt air can accelerate corrosion. Copper flashing lasts longest (50+ years), while aluminum and galvanized steel typically last 20-30 years with proper maintenance."
        },
        {
          question: "What's the difference between step flashing and counter-flashing?",
          answer: "Step flashing consists of L-shaped pieces woven between shingles along chimneys or walls. Counter-flashing is installed on top of step flashing, embedded into masonry, creating a two-layer system that prevents water infiltration even if one layer fails."
        },
        {
          question: "How much does flashing repair cost?",
          answer: "Costs vary based on the type of flashing, accessibility, and extent of damage. Simple re-sealing may cost a few hundred dollars, while complete chimney flashing replacement could be more. We provide free inspections and transparent estimates before starting any work."
        }
      ]}
      relatedIssues={[
        {
          title: "Roof Leaks",
          href: "/roof-leaks",
          description: "Learn how flashing failures lead to water damage"
        },
        {
          title: "Water Stains & Ceiling Damage",
          href: "/water-stains-ceiling",
          description: "Understand interior damage from flashing leaks"
        },
        {
          title: "Missing or Damaged Shingles",
          href: "/missing-shingles",
          description: "See how shingle and flashing issues interact"
        }
      ]}
      urgencyLevel="high"
      costFactors={[
        "Type of flashing needing repair (chimney, skylight, valley, vent)",
        "Extent of corrosion or damage",
        "Material choice (aluminum, copper, galvanized steel)",
        "Roof pitch and accessibility",
        "Number of penetrations requiring attention",
        "Need for underlying roof deck repair"
      ]}
    />
  );
}
