# Open Graph Image Requirements

## Specifications
- **Dimensions:** 1200×630px
- **Format:** JPG (optimized) or PNG
- **File size:** <300KB
- **Design:** Branded with Weather Shield logo + page title text overlay
- **Location:** `/public/images/og/` directory

## Required Images

### 1. `/public/images/og/roof-components.jpg`
- **Title overlay:** "Complete Guide to Roof Components"
- **Visual:** Diagram showing roof anatomy (shingles, underlayment, flashing, ventilation)
- **Color scheme:** Weather Shield brand colors (teal/purple gradient)
- **Key elements:**
  - Labeled cross-section of residential roof
  - Weather Shield logo in corner
  - Clean, professional diagram style

### 2. `/public/images/og/shingle-colors.jpg`
- **Title overlay:** "150+ Shingle Color Options"
- **Visual:** Grid of colorful shingle samples
- **Color scheme:** Showcase variety of shingle colors
- **Key elements:**
  - 3x3 or 4x4 grid of popular shingle colors
  - Color names visible on samples
  - Weather Shield logo
  - "GAF Preferred Contractor" badge

### 3. `/public/images/og/roof-comparison.jpg`
- **Title overlay:** "Hip vs Gable Roof Comparison"
- **Visual:** Side-by-side house illustrations showing both roof types
- **Color scheme:** Weather Shield teal/purple split design
- **Key elements:**
  - Left side: Hip roof house diagram
  - Right side: Gable roof house diagram
  - "VS" separator in center
  - Weather Shield logo

### 4. `/public/images/og/roof-ventilation.jpg`
- **Title overlay:** "Free CFM Calculator"
- **Visual:** Calculator interface mockup + ventilation diagram
- **Color scheme:** Weather Shield brand colors
- **Key elements:**
  - Simplified CFM calculator interface
  - Ridge vent and soffit vent illustrations
  - Airflow arrows showing ventilation
  - Weather Shield logo

### 5. `/public/images/og/flat-roof-materials.jpg`
- **Title overlay:** "TPO vs EPDM vs PVC"
- **Visual:** Material texture comparison
- **Color scheme:** Neutral with brand accent colors
- **Key elements:**
  - Three material samples side-by-side
  - TPO (white), EPDM (black), PVC (white/gray)
  - Material names clearly labeled
  - Weather Shield logo
  - "Commercial Roofing Experts" text

## Design Guidelines

### Typography
- **Title font:** Montserrat Bold (48-60px)
- **Subtitle/details:** Inter Regular (24-32px)
- **Ensure text contrast:** Minimum 4.5:1 ratio for WCAG AA

### Branding
- **Logo placement:** Top-right or bottom-right corner
- **Logo size:** 150-200px width
- **Brand colors:**
  - Primary Teal: #008080
  - Accent Purple: #6B46C1
  - Dark: #1F2937
  - Light: #F9FAFB

### Layout Best Practices
- **Safe zone:** Keep important content 100px from edges
- **Text overlay:** Use semi-transparent backgrounds for readability
- **Visual hierarchy:** Title > Visual > Logo
- **Mobile preview:** Test how image crops at 600×315px (Facebook mobile)

## Fallback Strategy

Until custom OG images are created, the site will use:
- Generic Weather Shield branded image
- Or text-based OG image with title only
- Ensure alt text is descriptive for accessibility

## Creation Tools

Recommended tools for creating OG images:
- **Canva:** Pre-sized templates available
- **Figma:** Professional design control
- **Adobe Photoshop:** Maximum customization
- **Placid.app:** Automated OG image generation

## Testing

After creation, test OG images with:
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/
- **Open Graph Check:** https://www.opengraph.xyz/

## Priority Order

Create images in this order based on page traffic:
1. roof-components.jpg (highest traffic)
2. shingle-colors.jpg (high engagement)
3. roof-comparison.jpg (high shares)
4. roof-ventilation.jpg (tool usage)
5. flat-roof-materials.jpg (commercial audience)

## Notes

- All images should be optimized for web (compressed without quality loss)
- Consider creating 2x versions for Retina displays (2400×1260px)
- Store source files (PSD/Figma) for future updates
- Update image paths in metadata once created
- Add images to sitemap.xml for better indexing
