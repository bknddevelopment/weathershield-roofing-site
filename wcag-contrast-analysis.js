/**
 * WCAG 2.2 Contrast Ratio Calculator
 * Implements official WCAG relative luminance formula
 */

// Color definitions from tailwind.config.ts
const colors = {
  // Primary Teal
  'weather-primary': '#007A7A',
  'weather-primary-dark': '#006666',
  'weather-primary-light': '#00A8A8',
  'weather-primary-on-dark': '#4DCDD0',

  // Secondary Blue
  'weather-secondary': '#2563EB',
  'weather-secondary-dark': '#1D4ED8',
  'weather-secondary-light': '#60A5FA',

  // Accent Purple
  'weather-accent': '#6D28D9',
  'weather-accent-dark': '#5B21B6',
  'weather-accent-light': '#A78BFA',

  // Neutrals
  'weather-gray': '#9CA3AF',
  'weather-gray-dark': '#6B7280',
  'weather-gray-light': '#D1D5DB',
  'weather-dark': '#1F2937',
  'weather-light': '#F8FAFC',
  'weather-white': '#FFFFFF',
  'weather-black': '#000000',

  // Status
  'weather-success': '#059669',
  'weather-warning': '#B45309',
  'weather-danger': '#DC2626',

  // Legacy
  'weather-teal': '#008B8B',
  'weather-blue': '#2563EB',
  'weather-purple': '#6D28D9',
  'weather-amber': '#B45309',
  'weather-amber-dark': '#92400E',
  'weather-amber-light': '#F59E0B',

  // Standard colors
  'white': '#FFFFFF',
  'gray-50': '#F9FAFB',
  'gray-100': '#F3F4F6',
  'gray-200': '#E5E7EB',
  'gray-300': '#D1D5DB',
  'gray-400': '#9CA3AF',
  'gray-500': '#6B7280',
  'red-50': '#FEF2F2',
  'red-200': '#FECACA',
  'red-500': '#EF4444',
  'red-600': '#DC2626',
  'red-700': '#B91C1C',
  'green-600': '#059669',
  'yellow-50': '#FEFCE8',
  'yellow-500': '#EAB308',
  'blue-100': '#DBEAFE',
  'blue-700': '#1D4ED8',
};

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Calculate relative luminance using WCAG formula
 * https://www.w3.org/WAI/GL/wiki/Relative_luminance
 */
function getRelativeLuminance(rgb) {
  const rsRGB = rgb.r / 255;
  const gsRGB = rgb.g / 255;
  const bsRGB = rgb.b / 255;

  const r = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
  const g = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
  const b = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Calculate contrast ratio between two colors
 * https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
 */
function getContrastRatio(color1, color2) {
  const lum1 = getRelativeLuminance(hexToRgb(color1));
  const lum2 = getRelativeLuminance(hexToRgb(color2));

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check WCAG compliance
 */
function checkCompliance(ratio, textSize = 'normal', level = 'AA') {
  if (level === 'AAA') {
    return textSize === 'large' ? ratio >= 4.5 : ratio >= 7.0;
  }
  // AA standard
  return textSize === 'large' ? ratio >= 3.0 : ratio >= 4.5;
}

/**
 * Component-specific contrast checks
 */
const contrastChecks = [
  // GuideTemplate.tsx
  {
    component: 'GuideTemplate',
    location: 'Reading Progress Bar',
    element: 'Progress indicator',
    foreground: colors['weather-teal'],
    background: colors['gray-200'],
    context: 'Non-text UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'GuideTemplate',
    location: 'Breadcrumbs - hover state',
    element: 'Link text',
    foreground: colors['weather-teal'],
    background: colors['weather-dark'],
    context: 'Text on dark background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'GuideTemplate',
    location: 'Breadcrumbs - default state',
    element: 'Link text',
    foreground: colors['gray-300'],
    background: colors['weather-dark'],
    context: 'Text on dark background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'GuideTemplate',
    location: 'Breadcrumbs - chevron',
    element: 'Icon separator',
    foreground: colors['gray-500'],
    background: colors['weather-dark'],
    context: 'Non-text UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'GuideTemplate',
    location: 'Table of Contents - active state',
    element: 'Link background',
    foreground: colors['white'],
    background: colors['weather-teal'],
    context: 'Text on teal background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'GuideTemplate',
    location: 'Table of Contents - hover state',
    element: 'Link text',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'GuideTemplate',
    location: 'Table of Contents - default',
    element: 'Link text',
    foreground: colors['weather-dark'],
    background: colors['weather-light'],
    context: 'Text on light background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'GuideTemplate',
    location: 'FAQ accordion',
    element: 'Question text',
    foreground: colors['weather-black'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'GuideTemplate',
    location: 'FAQ accordion',
    element: 'Expand indicator',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Non-text UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'GuideTemplate',
    location: 'FAQ accordion',
    element: 'Answer text',
    foreground: colors['weather-dark'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'GuideTemplate',
    location: 'Related Services',
    element: 'Card border hover',
    foreground: colors['weather-teal'],
    background: colors['weather-light'],
    context: 'Border UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'GuideTemplate',
    location: 'Back to Top button',
    element: 'Button background',
    foreground: colors['white'],
    background: colors['weather-teal'],
    context: 'Text on teal background',
    required: 4.5,
    type: 'text'
  },

  // VentilationCalculator.tsx
  {
    component: 'VentilationCalculator',
    location: 'Form label',
    element: 'Label text',
    foreground: colors['weather-black'],
    background: 'transparent',
    context: 'Text (inherits from parent)',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'VentilationCalculator',
    location: 'Input field',
    element: 'Border default',
    foreground: colors['gray-300'],
    background: colors['white'],
    context: 'Border UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'VentilationCalculator',
    location: 'Input field',
    element: 'Border focus',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Border UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'VentilationCalculator',
    location: 'Error message',
    element: 'Error text',
    foreground: colors['red-600'],
    background: 'transparent',
    context: 'Text (on gradient background)',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'VentilationCalculator',
    location: 'Help text',
    element: 'Tip text',
    foreground: colors['weather-dark'],
    background: 'transparent',
    context: 'Text (on gradient background)',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'VentilationCalculator',
    location: 'Calculate button',
    element: 'Button text',
    foreground: colors['white'],
    background: colors['weather-teal'],
    context: 'Text on teal background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'VentilationCalculator',
    location: 'Calculate button - hover',
    element: 'Button text',
    foreground: colors['white'],
    background: colors['weather-purple'],
    context: 'Text on purple background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'VentilationCalculator',
    location: 'Result metrics',
    element: 'Metric value',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Large text (3xl)',
    required: 3.0,
    type: 'text-large'
  },
  {
    component: 'VentilationCalculator',
    location: 'Result metrics',
    element: 'Metric label',
    foreground: colors['weather-dark'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'VentilationCalculator',
    location: 'Recommendations panel',
    element: 'Panel border',
    foreground: colors['weather-purple'],
    background: colors['white'],
    context: 'Border UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'VentilationCalculator',
    location: 'Recommendations list',
    element: 'Bullet point',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Non-text UI component',
    required: 3.0,
    type: 'ui-component'
  },

  // ComparisonTable.tsx
  {
    component: 'ComparisonTable',
    location: 'Table header',
    element: 'Feature label',
    foreground: colors['weather-black'],
    background: colors['weather-light'],
    context: 'Text on light background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ComparisonTable',
    location: 'Table header - Option 1',
    element: 'Title text (dynamic color)',
    foreground: colors['weather-teal'],
    background: 'rgba(0, 122, 122, 0.1)',
    context: 'Text on teal/10 background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ComparisonTable',
    location: 'Table header - Option 2',
    element: 'Title text (dynamic color)',
    foreground: colors['weather-purple'],
    background: 'rgba(109, 40, 217, 0.1)',
    context: 'Text on purple/10 background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ComparisonTable',
    location: 'Table body',
    element: 'Feature name',
    foreground: colors['weather-black'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ComparisonTable',
    location: 'Table body - striped',
    element: 'Feature name',
    foreground: colors['weather-black'],
    background: colors['gray-50'],
    context: 'Text on gray-50 background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ComparisonTable',
    location: 'Table body',
    element: 'Cell text',
    foreground: colors['weather-dark'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ComparisonTable',
    location: 'Table body',
    element: 'Check icon (success)',
    foreground: colors['green-600'],
    background: colors['white'],
    context: 'Non-text UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'ComparisonTable',
    location: 'Table body',
    element: 'X icon (failure)',
    foreground: colors['red-600'],
    background: colors['white'],
    context: 'Non-text UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'ComparisonTable',
    location: 'Table body - hover',
    element: 'Row background',
    foreground: colors['weather-dark'],
    background: 'rgba(248, 250, 252, 0.3)',
    context: 'Hover state',
    required: 4.5,
    type: 'text'
  },

  // ColorGrid.tsx
  {
    component: 'ColorGrid',
    location: 'Filter buttons - default',
    element: 'Button text',
    foreground: colors['weather-dark'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ColorGrid',
    location: 'Filter buttons - default border',
    element: 'Button border',
    foreground: colors['gray-200'],
    background: colors['white'],
    context: 'Border UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'ColorGrid',
    location: 'Filter buttons - hover',
    element: 'Button text',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ColorGrid',
    location: 'Filter buttons - hover border',
    element: 'Button border',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Border UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'ColorGrid',
    location: 'Filter buttons - active',
    element: 'Button text',
    foreground: colors['white'],
    background: colors['weather-teal'],
    context: 'Text on teal background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ColorGrid',
    location: 'Results count',
    element: 'Count text',
    foreground: colors['weather-dark'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ColorGrid',
    location: 'Color card',
    element: 'Card border default',
    foreground: colors['gray-200'],
    background: colors['white'],
    context: 'Border UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'ColorGrid',
    location: 'Color card - hover',
    element: 'Card border',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Border UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'ColorGrid',
    location: 'Color card',
    element: 'Popularity badge',
    foreground: colors['white'],
    background: colors['weather-amber'],
    context: 'Text on amber background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ColorGrid',
    location: 'Color card',
    element: 'Category tag',
    foreground: colors['weather-dark'],
    background: 'rgba(255, 255, 255, 0.9)',
    context: 'Text on white/90 background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ColorGrid',
    location: 'Color card',
    element: 'Color name',
    foreground: colors['weather-black'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ColorGrid',
    location: 'Color card - hover',
    element: 'Color name',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ColorGrid',
    location: 'Color card',
    element: 'Description text',
    foreground: colors['weather-dark'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ColorGrid',
    location: 'Empty state',
    element: 'Message text',
    foreground: colors['weather-dark'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'ColorGrid',
    location: 'Empty state',
    element: 'Link text',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },

  // AnatomyDiagram.tsx
  {
    component: 'AnatomyDiagram',
    location: 'Hotspot marker - default',
    element: 'Icon',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Non-text UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'AnatomyDiagram',
    location: 'Hotspot marker - default border',
    element: 'Border',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Border UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'AnatomyDiagram',
    location: 'Hotspot marker - active',
    element: 'Icon',
    foreground: colors['white'],
    background: colors['weather-teal'],
    context: 'Non-text UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'AnatomyDiagram',
    location: 'Tooltip hover',
    element: 'Tooltip text',
    foreground: colors['white'],
    background: colors['weather-dark'],
    context: 'Text on dark background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'AnatomyDiagram',
    location: 'Detail panel',
    element: 'Panel text',
    foreground: colors['white'],
    background: colors['weather-teal'],
    context: 'Text on gradient (teal to purple)',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'AnatomyDiagram',
    location: 'Legend - default',
    element: 'Item text',
    foreground: colors['weather-dark'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'AnatomyDiagram',
    location: 'Legend - default border',
    element: 'Item border',
    foreground: colors['gray-200'],
    background: colors['white'],
    context: 'Border UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'AnatomyDiagram',
    location: 'Legend - hover border',
    element: 'Item border',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Border UI component',
    required: 3.0,
    type: 'ui-component'
  },
  {
    component: 'AnatomyDiagram',
    location: 'Legend - active',
    element: 'Item text',
    foreground: colors['white'],
    background: colors['weather-teal'],
    context: 'Text on teal background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'AnatomyDiagram',
    location: 'Legend - number badge default',
    element: 'Badge text',
    foreground: colors['white'],
    background: colors['weather-teal'],
    context: 'Text on teal background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'AnatomyDiagram',
    location: 'Legend - number badge active',
    element: 'Badge text',
    foreground: colors['weather-teal'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
  {
    component: 'AnatomyDiagram',
    location: 'Instructions',
    element: 'Tip text',
    foreground: colors['weather-dark'],
    background: colors['white'],
    context: 'Text on white background',
    required: 4.5,
    type: 'text'
  },
];

// Run analysis
console.log('\n' + '='.repeat(100));
console.log('WCAG 2.2 LEVEL AA CONTRAST ANALYSIS - PHASE V EDUCATIONAL CONTENT');
console.log('='.repeat(100) + '\n');

const violations = [];
const warnings = [];
const passes = [];

contrastChecks.forEach(check => {
  const fg = check.foreground;
  const bg = check.background;

  // Skip checks with transparent or gradient backgrounds (manual review needed)
  if (bg === 'transparent' || bg.includes('gradient') || bg.includes('rgba')) {
    console.log(`⚠️  MANUAL REVIEW REQUIRED: ${check.component} - ${check.location}`);
    console.log(`   Element: ${check.element}`);
    console.log(`   Context: ${check.context}`);
    console.log(`   Reason: Dynamic or transparent background\n`);
    warnings.push(check);
    return;
  }

  const ratio = getContrastRatio(fg, bg);
  const textSize = check.type === 'text-large' ? 'large' : 'normal';
  const isCompliant = checkCompliance(ratio, textSize, 'AA');

  const status = isCompliant ? '✅ PASS' : '❌ FAIL';
  const severity = ratio < check.required - 1.5 ? 'BLOCKER' :
                   ratio < check.required ? 'MAJOR' : 'MINOR';

  if (isCompliant) {
    passes.push({ ...check, ratio, severity: 'N/A' });
  } else {
    violations.push({ ...check, ratio, severity });
    console.log(`${status} [${severity}] ${check.component} - ${check.location}`);
    console.log(`   Element: ${check.element}`);
    console.log(`   Foreground: ${fg}`);
    console.log(`   Background: ${bg}`);
    console.log(`   Measured Ratio: ${ratio.toFixed(2)}:1`);
    console.log(`   Required Ratio: ${check.required}:1 (${check.type})`);
    console.log(`   Context: ${check.context}`);
    console.log(`   WCAG SC: ${check.type.includes('ui-component') ? '1.4.11' : check.type === 'text-large' ? '1.4.3 (large text)' : '1.4.3'}\n`);
  }
});

// Summary Report
console.log('\n' + '='.repeat(100));
console.log('SUMMARY REPORT');
console.log('='.repeat(100) + '\n');

const totalChecks = contrastChecks.length;
const passCount = passes.length;
const failCount = violations.length;
const manualReviewCount = warnings.length;

console.log(`Total Checks: ${totalChecks}`);
console.log(`✅ Passed: ${passCount} (${((passCount / totalChecks) * 100).toFixed(1)}%)`);
console.log(`❌ Failed: ${failCount} (${((failCount / totalChecks) * 100).toFixed(1)}%)`);
console.log(`⚠️  Manual Review: ${manualReviewCount} (${((manualReviewCount / totalChecks) * 100).toFixed(1)}%)\n`);

if (failCount > 0) {
  console.log('VIOLATIONS BY SEVERITY:');
  const blockers = violations.filter(v => v.severity === 'BLOCKER').length;
  const majors = violations.filter(v => v.severity === 'MAJOR').length;
  const minors = violations.filter(v => v.severity === 'MINOR').length;
  console.log(`  Blocker: ${blockers}`);
  console.log(`  Major: ${majors}`);
  console.log(`  Minor: ${minors}\n`);
}

// WCAG Compliance Score (1-10)
const complianceScore = passCount === totalChecks ? 10 :
                        Math.max(1, Math.round((passCount / (passCount + failCount)) * 10));

console.log(`\n${'='.repeat(100)}`);
console.log(`OVERALL WCAG COMPLIANCE SCORE: ${complianceScore}/10`);
console.log(`${'='.repeat(100)}\n`);

if (failCount === 0 && manualReviewCount === 0) {
  console.log('🎉 EXCELLENT! All automated checks pass WCAG 2.2 Level AA standards.\n');
} else if (failCount === 0) {
  console.log(`✅ All automated checks pass. ${manualReviewCount} items require manual review.\n`);
} else {
  console.log(`⚠️  ATTENTION REQUIRED: ${failCount} violations detected. Manual fixes needed.\n`);
}

// Export results for further analysis
const results = {
  summary: {
    total: totalChecks,
    passed: passCount,
    failed: failCount,
    manualReview: manualReviewCount,
    complianceScore
  },
  violations,
  warnings,
  passes
};

// Write to file
const fs = require('fs');
fs.writeFileSync(
  'wcag-contrast-results.json',
  JSON.stringify(results, null, 2)
);

console.log('📄 Detailed results saved to: wcag-contrast-results.json\n');
