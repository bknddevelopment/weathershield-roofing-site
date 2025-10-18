import { Metadata } from 'next';
import IssuePageTemplate from '../components/IssuePageTemplate';

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair & Insurance Claims | Myrtle Beach SC Roofing',
  description: 'Hail storm damage your roof? Weather Shield Roofing provides expert inspection, repair, and insurance claim assistance in Myrtle Beach. Free assessment (843) 877-5539.',
  openGraph: {
    title: 'Hail Damage Roof Repair & Insurance Claims | Myrtle Beach SC Roofing',
    description: 'Hail storm damage your roof? Weather Shield Roofing provides expert inspection, repair, and insurance claim assistance in Myrtle Beach.',
    url: 'https://charwinvanryckdegroot.github.io/weathershield-roofing-site/hail-damage-roof',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'article',
  },
};

export default function HailDamageRoofPage() {
  return (
    <IssuePageTemplate
      title="Hail Damage Roof Repair"
      description="Hailstorms can cause significant damage to your roof in just minutes, even if the hail seems small. While some damage is immediately visible, much of it is subtle and only detectable by trained professionals. Left unaddressed, hail damage compromises your roof's integrity, voids warranties, and leads to leaks and premature failure. Weather Shield Roofing specializes in identifying hail damage, working with insurance companies, and restoring your roof to full protection—often with minimal out-of-pocket costs through insurance claims."
      symptoms={[
        "Dented or bruised shingles with dark spots (bruising)",
        "Shingle granules missing or displaced in random patterns",
        "Cracked or split shingles from impact",
        "Dents on metal roof components (vents, flashing, gutters)",
        "Exposed fiberglass mat on asphalt shingles",
        "Cracked or broken skylights and plastic roof vents",
        "Damaged soffit, fascia, or siding from hail impact",
        "Granules accumulating in gutters immediately after storm"
      ]}
      causes={[
        {
          title: "Severe Thunderstorms",
          description: "Hail forms in strong thunderstorms when updrafts carry water droplets into extremely cold areas of the atmosphere, freezing them into ice balls."
        },
        {
          title: "Large Hail Size",
          description: "Hailstones larger than 1 inch (quarter-sized) can cause significant damage. Golf ball-sized hail (1.75 inches) or larger typically causes severe damage requiring replacement."
        },
        {
          title: "Wind Speed During Storm",
          description: "Hail driven by strong winds hits roofs at angles, causing more concentrated damage and penetrating shingle protection layers."
        },
        {
          title: "Roof Age and Condition",
          description: "Older, weathered shingles are more susceptible to hail damage as they've lost flexibility and protective granules over time."
        },
        {
          title: "Shingle Type and Quality",
          description: "Impact-resistant shingles (Class 4) resist hail better than standard 3-tab shingles. Quality materials perform better under impact stress."
        },
        {
          title: "Roof Slope",
          description: "Low-slope roofs receive more direct impact from falling hail compared to steep-pitched roofs where hail can glance off."
        }
      ]}
      solutions={[
        {
          title: "Professional Hail Inspection",
          description: "We conduct a comprehensive roof inspection, documenting all hail damage with photos and measurements for insurance purposes.",
          timeframe: "1-2 hours on-site"
        },
        {
          title: "Insurance Claim Assistance",
          description: "We provide detailed damage reports, meet with insurance adjusters, and help you navigate the claims process to maximize coverage.",
          timeframe: "Throughout claim process"
        },
        {
          title: "Emergency Tarping (if needed)",
          description: "For severe damage causing active leaks, we provide temporary protection while insurance claim is processed.",
          timeframe: "Within hours of contact"
        },
        {
          title: "Complete Roof Restoration",
          description: "Once claim is approved, we replace damaged shingles, repair flashing, and restore your roof to pre-storm condition—often upgrading to impact-resistant materials.",
          timeframe: "1-3 days for most homes"
        },
        {
          title: "Warranty Documentation",
          description: "We provide all necessary documentation to maintain manufacturer and workmanship warranties after repairs.",
          timeframe: "At project completion"
        }
      ]}
      prevention={[
        "Install Class 4 impact-resistant shingles (UL 2218 rated) that resist hail damage",
        "Maintain roof in good condition—well-maintained roofs withstand storms better",
        "Ensure adequate attic ventilation to prevent heat damage that weakens shingles",
        "Document roof condition with photos before storm season for insurance purposes",
        "Schedule post-storm inspections even if no visible damage is apparent",
        "Keep trees trimmed to prevent additional damage from falling branches during storms",
        "Verify your homeowners insurance includes full roof replacement coverage",
        "File insurance claims within policy time limits (typically 1 year from damage date)"
      ]}
      faqs={[
        {
          question: "How do I know if my roof has hail damage?",
          answer: "Hail damage isn't always obvious from the ground. Look for dented gutters, downspouts, or AC units—if these have damage, your roof likely does too. Professional inspection is crucial because subtle shingle bruising and granule loss aren't visible to untrained eyes but will cause future leaks."
        },
        {
          question: "Will my insurance cover hail damage roof repairs?",
          answer: "Most homeowners insurance policies cover sudden weather-related damage like hail. However, coverage depends on your policy terms, deductible, and whether damage is severe enough to warrant replacement. We work directly with insurance companies to document damage and advocate for proper coverage."
        },
        {
          question: "How long after a hailstorm can I file a claim?",
          answer: "Most insurance policies require claims within 1 year of the damage date, but filing sooner is better. Waiting allows damage to worsen, making it harder to prove it resulted from a specific storm. We recommend inspection and claim filing within weeks of a significant hail event."
        },
        {
          question: "Can hail damage be repaired, or does the whole roof need replacement?",
          answer: "It depends on the extent of damage. Widespread hail damage typically requires full roof replacement because affected shingles have compromised weather resistance. Limited damage to small sections may qualify for partial repairs, but insurance companies often prefer consistent appearance through full replacement."
        },
        {
          question: "What size hail causes roof damage?",
          answer: "Generally, hail 1 inch or larger (quarter-sized) can damage standard asphalt shingles. Golf ball-sized hail (1.75 inches) or larger typically causes severe damage. However, older roofs or high-wind conditions can sustain damage from smaller hail. Professional inspection is the only way to know for certain."
        },
        {
          question: "Do I have to pay for hail damage roof replacement?",
          answer: "If insurance approves your claim, you typically pay only your deductible. Weather Shield Roofing works with your insurance company to ensure proper coverage. We also offer financing options if needed. Never let cost prevent you from addressing hail damage—delayed repairs lead to more expensive problems."
        }
      ]}
      relatedIssues={[
        {
          title: "Missing or Damaged Shingles",
          href: "/missing-shingles",
          description: "Learn about wind and storm damage to shingles"
        },
        {
          title: "Roof Leaks",
          href: "/roof-leaks",
          description: "Understand how storm damage leads to leaks"
        },
        {
          title: "Roof Flashing Issues",
          href: "/roof-flashing-problems",
          description: "See how storms damage roof flashing"
        }
      ]}
      urgencyLevel="high"
      costFactors={[
        "Extent and severity of hail damage",
        "Roof size and complexity",
        "Type of roofing materials damaged",
        "Insurance deductible amount",
        "Need for emergency temporary repairs",
        "Choice of replacement materials (standard vs. impact-resistant)"
      ]}
    />
  );
}
