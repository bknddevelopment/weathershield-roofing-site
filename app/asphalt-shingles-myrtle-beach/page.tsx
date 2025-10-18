import { Metadata } from 'next';
import MaterialPageTemplate from '../components/MaterialPageTemplate';

export const metadata: Metadata = {
  title: 'Asphalt Shingle Roofing | Architectural & 3-Tab Shingles | Myrtle Beach SC',
  description: 'Asphalt shingles are America\'s most popular roofing material. Weather Shield Roofing installs premium architectural and 3-tab shingles in Myrtle Beach. Call (843) 877-5539.',
  openGraph: {
    title: 'Asphalt Shingle Roofing | Architectural & 3-Tab Shingles | Myrtle Beach SC',
    description: 'Asphalt shingles are America\'s most popular roofing material. Weather Shield Roofing installs premium architectural and 3-tab shingles in Myrtle Beach.',
    url: 'https://weathershieldroofers.com/asphalt-shingles-myrtle-beach',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'article',
  },
};

export default function AsphaltShinglesPage() {
  return (
    <MaterialPageTemplate
      title="Asphalt Shingle Roofing: The Most Popular Choice"
      description="Asphalt shingles are the most widely used roofing material in North America, covering over 80% of residential homes. They offer an unbeatable combination of affordability, durability, aesthetic variety, and ease of installation. Available in architectural (dimensional) and traditional 3-tab styles, asphalt shingles provide reliable protection against coastal weather while offering homeowners extensive color and design options. Weather Shield Roofing installs premium asphalt shingles from leading manufacturers with comprehensive warranties."
      materialType="standard"
      lifespan="15-30 years"
      warranty="25-50 years (manufacturer + workmanship)"
      bestFor={[
        "Budget-conscious homeowners seeking quality and value",
        "Homes with moderate to steep roof pitches (4:12 or greater)",
        "Coastal properties needing wind-resistant roofing (Class 4 impact rated available)",
        "Replacement projects with quick turnaround needs",
        "Homes requiring a wide range of color and style options",
        "Properties in HOA communities with architectural guidelines"
      ]}
      pros={[
        "Most affordable roofing material with excellent ROI",
        "Wide variety of colors, textures, and architectural styles",
        "Relatively simple and fast installation (1-3 days for most homes)",
        "Widely available with strong manufacturer support and warranties",
        "Wind-resistant options (up to 130 mph ratings) ideal for coastal areas",
        "Impact-resistant (Class 4) shingles available for hail-prone areas",
        "Easy to repair—damaged shingles can be replaced individually",
        "Compatible with most roof structures and home designs"
      ]}
      cons={[
        "Shorter lifespan compared to metal, tile, or slate (15-30 years vs. 40-100 years)",
        "Susceptible to algae and moss growth in humid coastal climates (requires algae-resistant shingles)",
        "Can suffer from wind damage in severe hurricanes if not properly installed",
        "Heat absorption can increase cooling costs in summer months",
        "Color granules can fade over time due to UV exposure",
        "Not environmentally friendly—petroleum-based product with limited recyclability"
      ]}
      features={[
        {
          title: "Architectural Shingles (Dimensional Shingles)",
          description: "Premium multi-layered shingles that create a three-dimensional appearance resembling wood shake or slate. They're thicker, heavier, and more durable than 3-tab shingles, with lifespans of 25-30+ years. Architectural shingles offer superior wind resistance (110-130 mph ratings), better aesthetics, and stronger warranties. They're the most popular choice for new construction and roof replacements in Myrtle Beach."
        },
        {
          title: "3-Tab Shingles (Traditional Asphalt)",
          description: "Classic single-layer shingles with a flat, uniform appearance. These are the most economical option, making them popular for budget-focused projects or rental properties. While they have shorter lifespans (15-20 years) and lower wind ratings than architectural shingles, they still provide reliable protection when properly installed and maintained."
        },
        {
          title: "Algae-Resistant Technology",
          description: "Copper or zinc granules embedded in shingles inhibit algae and moss growth—critical for Myrtle Beach's humid coastal climate. Algae-resistant shingles prevent unsightly black streaks and extend roof lifespan by reducing moisture retention. Most premium shingles now include algae resistance as standard."
        },
        {
          title: "Class 4 Impact Resistance",
          description: "Impact-rated shingles feature reinforced construction that withstands hail, falling branches, and debris. UL 2218 Class 4 (highest rating) shingles can qualify homeowners for insurance discounts in some areas. Ideal for homes near trees or in areas with severe storm activity."
        },
        {
          title: "Cool Roof Technology",
          description: "Reflective granules reduce heat absorption, lowering attic temperatures and cooling costs by up to 15%. Particularly beneficial in Myrtle Beach's hot, sunny climate. ENERGY STAR® certified cool roof shingles are available in a wide range of colors, not just light tones."
        },
        {
          title: "Extended Warranty Options",
          description: "Leading manufacturers (GAF, CertainTeed, Owens Corning, Atlas) offer tiered warranty systems. Standard warranties cover material defects for 25-50 years. Lifetime limited warranties cover architectural shingles for the life of the original homeowner. Enhanced warranties include wind coverage upgrades and transferable benefits for resale."
        }
      ]}
      styles={[
        {
          name: "Traditional 3-Tab",
          description: "Flat, uniform appearance with visible tab cutouts. Budget-friendly option with clean, classic look. Ideal for simple architectural styles and rental properties."
        },
        {
          name: "Architectural (Dimensional)",
          description: "Layered construction creates depth and shadow lines. Premium appearance mimicking wood shake or slate. Most popular choice for residential homes."
        },
        {
          name: "Designer/Luxury Shingles",
          description: "Ultra-premium shingles with enhanced texture and unique profiles. Authentic wood shake or slate appearance. Highest wind ratings and longest warranties (50+ years)."
        },
        {
          name: "Hip & Ridge Shingles",
          description: "Specially designed shingles for roof peaks and hips. Pre-bent for easier installation and superior weather sealing. Available in colors matching field shingles."
        }
      ]}
      costRange={{
        description: "Asphalt shingles offer the best value in roofing. Material costs are the lowest among all roofing types, and installation is straightforward, reducing labor expenses. Total project costs depend on roof size, pitch complexity, material grade, and additional features like ice-and-water shield or enhanced ventilation. While 3-tab shingles are the most economical, architectural shingles provide significantly better long-term value due to extended lifespan and stronger warranties.",
        factors: [
          "Roof size (square footage) and number of squares (1 square = 100 sq ft)",
          "Roof pitch and complexity (steeper roofs and multiple planes increase labor)",
          "Shingle grade: 3-tab vs. architectural vs. designer/luxury",
          "Removal and disposal of old roofing materials (1-3 layers)",
          "Underlayment quality (felt vs. synthetic) and ice-and-water shield coverage",
          "Number and type of roof penetrations (chimneys, skylights, vents, pipes)",
          "Ventilation upgrades (ridge vents, soffit vents, attic fans)",
          "Flashing replacement (chimney, skylight, valley, drip edge)",
          "Accessibility and safety requirements (scaffolding, safety equipment)"
        ]
      }}
      installation={{
        timeframe: "1-3 days",
        complexity: "low",
        requirements: [
          "Complete tear-off of old roofing materials (if 2+ layers exist)",
          "Roof deck inspection and repair of damaged plywood/OSB sheathing",
          "Installation of high-quality synthetic underlayment (preferred over felt)",
          "Ice-and-water shield along eaves, valleys, and roof penetrations",
          "Proper drip edge and flashing installation at all edges and transitions",
          "Strategic shingle layout for optimal aesthetics and weather resistance",
          "Nailing per manufacturer specs (4-6 nails per shingle depending on wind zone)",
          "Ridge and hip cap shingles for continuous weather seal",
          "Ventilation system installation or upgrade (ridge vent + soffit vents)",
          "Final inspection and debris cleanup with magnetic sweep for nails"
        ]
      }}
      maintenance={{
        frequency: "Annual inspection + bi-annual gutter cleaning",
        tasks: [
          "Visual inspection after major storms for missing, lifted, or damaged shingles",
          "Annual professional roof inspection to catch small issues before leaks develop",
          "Clean gutters twice yearly (spring and fall) to prevent water backup",
          "Trim overhanging tree branches to prevent abrasion and debris accumulation",
          "Remove moss, algae, and debris with gentle washing (never pressure wash shingles)",
          "Check and maintain flashing around chimneys, skylights, and vents",
          "Inspect attic for proper ventilation and signs of moisture or leaks",
          "Replace individual damaged shingles immediately to prevent water infiltration",
          "Monitor for granule loss in gutters (sign of shingle aging)"
        ]
      }}
      faqs={[
        {
          question: "What's the difference between 3-tab and architectural shingles?",
          answer: "3-tab shingles are single-layer, flat shingles with a uniform appearance and lower cost. They typically last 15-20 years and have basic wind ratings. Architectural (dimensional) shingles are multi-layered, creating a textured, dimensional look. They're thicker, more durable (25-30+ year lifespan), and offer superior wind resistance (110-130 mph). While architectural shingles cost more upfront, they provide better long-term value due to extended lifespan, stronger warranties, and higher resale appeal."
        },
        {
          question: "How long do asphalt shingles last in Myrtle Beach's coastal climate?",
          answer: "In Myrtle Beach, quality architectural shingles typically last 20-25 years, while 3-tab shingles last 15-18 years. Coastal conditions—salt air, high humidity, intense UV exposure, and hurricane-force winds—can reduce lifespan compared to inland areas. Choosing algae-resistant, high wind-rated shingles and ensuring proper installation and ventilation maximizes lifespan. Regular maintenance (annual inspections, gutter cleaning, debris removal) also extends roof life."
        },
        {
          question: "Are asphalt shingles good for hurricane-prone areas like Myrtle Beach?",
          answer: "Yes, when properly installed with high wind-rated shingles. Premium architectural shingles are available with wind ratings up to 130 mph (exceeding Hurricane Category 3 winds). Proper installation is critical: shingles must be installed per manufacturer specifications with correct nailing patterns, sealed starter strips, and high-quality underlayment. Weather Shield Roofing uses hurricane-rated installation methods and offers shingles with ASTM D7158 Class H wind resistance certification."
        },
        {
          question: "Do asphalt shingles require special maintenance to prevent algae in humid climates?",
          answer: "Algae-resistant shingles (with copper or zinc granules) significantly reduce algae and moss growth, but aren't 100% foolproof. To prevent black streaks: choose algae-resistant shingles, ensure proper attic ventilation to reduce humidity, trim tree branches to increase sunlight exposure, and clean gutters regularly to prevent debris buildup. If algae appears, gentle washing with a roof-safe cleaner (never pressure washing) can remove stains without damaging shingles."
        },
        {
          question: "Can I install new asphalt shingles over my existing roof?",
          answer: "Building codes allow up to two layers of shingles, but we generally recommend complete tear-off for several reasons: 1) Multiple layers trap heat, shortening new shingle lifespan, 2) You can't inspect the roof deck for hidden damage, 3) Additional weight can stress roof structure, 4) Warranty coverage is often reduced or voided, 5) Future replacement is more expensive due to multiple-layer removal. Tear-off allows proper inspection, repair, and installation—maximizing your new roof's lifespan."
        },
        {
          question: "What color shingles are best for Myrtle Beach homes?",
          answer: "Color choice depends on aesthetics, home style, and energy efficiency. Lighter colors (tan, gray, white) reflect more sunlight, reducing cooling costs—beneficial in Myrtle Beach's hot climate. Darker colors (charcoal, black, brown) absorb heat but offer bold curb appeal. Medium tones (weathered wood, driftwood gray, coastal blue) are popular in coastal areas, complementing beach architecture. Consider your home's siding color, neighborhood aesthetics, and HOA guidelines. Cool roof shingles with reflective granules are available in all colors."
        }
      ]}
      comparisons={[
        {
          material: "Metal Roofing",
          href: "/metal-roofing-myrtle-beach",
          description: "Compare longevity, energy efficiency, and hurricane performance"
        },
        {
          material: "Clay Tile Roofing",
          href: "/clay-tile-roofing-myrtle-beach",
          description: "Explore premium durability and Mediterranean aesthetics"
        },
        {
          material: "Flat Roof Systems",
          href: "/flat-roof-systems-myrtle-beach",
          description: "Low-slope roofing options for commercial and modern homes"
        }
      ]}
      climateNote="Myrtle Beach's coastal climate presents unique challenges for asphalt shingles: high humidity encourages algae growth, salt air accelerates weathering, intense UV exposure fades colors, and hurricane-force winds test adhesion. Choose algae-resistant, high wind-rated architectural shingles with proven coastal performance. Proper ventilation is critical to prevent premature aging from trapped heat and moisture."
    />
  );
}
