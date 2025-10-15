# WCAG AA Color Replacement Quick Reference Guide

## Phase V Educational Content - Visual Color Fix Guide

---

## Critical Border Replacements (BLOCKER Issues)

### ❌ FAIL: Light Gray Borders (1.24:1 - 1.47:1)

| Current Color | Hex | Contrast | Status |
|---------------|-----|----------|--------|
| `border-gray-200` | #E5E7EB | 1.24:1 | ❌ FAIL |
| `border-gray-300` | #D1D5DB | 1.47:1 | ❌ FAIL |

### ✅ PASS: Dark Gray Borders (3.04:1+)

| New Color | Hex | Contrast | Status |
|-----------|-----|----------|--------|
| `border-weather-gray-dark` | #6B7280 | 3.04:1 | ✅ PASS AA |

**Visual Comparison:**
```
BEFORE: ░░░░░░░░  (gray-200 - barely visible)
AFTER:  ▓▓▓▓▓▓▓▓  (weather-gray-dark - clearly visible)
```

**Files Affected:**
- VentilationCalculator.tsx (input borders)
- ColorGrid.tsx (filter buttons, color cards)
- AnatomyDiagram.tsx (legend items)

**Search & Replace:**
```bash
# Find all instances
grep -r "border-gray-200" app/components/
grep -r "border-gray-300" app/components/

# Replace with
border-weather-gray-dark
```

---

## Text Background Replacements (MAJOR Issues)

### ❌ FAIL: White Text on Teal (4.15:1)

| Current Color | Hex | Contrast | Required | Status |
|---------------|-----|----------|----------|--------|
| `bg-weather-teal` | #008B8B | 4.15:1 | 4.5:1 | ❌ FAIL AA |

### ✅ PASS: White Text on Dark Teal (7.09:1)

| New Color | Hex | Contrast | Required | Status |
|-----------|-----|----------|----------|--------|
| `bg-weather-primary-dark` | #006666 | 7.09:1 | 4.5:1 | ✅ PASS AAA |

**Visual Comparison:**
```
BEFORE: [weather-teal]  (#008B8B - insufficient contrast)
        "Read More"
        ↓ Contrast: 4.15:1 ❌

AFTER:  [weather-primary-dark]  (#006666 - excellent contrast)
        "Read More"
        ↓ Contrast: 7.09:1 ✅ (AAA!)
```

**Usage Pattern:**
```tsx
// BEFORE ❌
className="bg-weather-teal text-white"

// AFTER ✅
className="bg-weather-primary-dark text-white"
```

**Components Affected:**
- GuideTemplate: TOC active state, Back to Top button
- VentilationCalculator: Calculate button
- ColorGrid: Active filter buttons
- AnatomyDiagram: Active states, detail panel, number badges

---

## Text Color Replacements (MAJOR Issues)

### ❌ FAIL: Teal Text on White (4.15:1)

| Current Color | Hex | Contrast | Required | Status |
|---------------|-----|----------|----------|--------|
| `text-weather-teal` | #008B8B | 4.15:1 | 4.5:1 | ❌ FAIL AA |

### ✅ PASS: Dark Teal Text on White (4.65:1)

| New Color | Hex | Contrast | Required | Status |
|-----------|-----|----------|----------|--------|
| `text-weather-primary` | #007A7A | 4.65:1 | 4.5:1 | ✅ PASS AA |

**Visual Comparison:**
```
BEFORE: "Learn More" (weather-teal #008B8B) - faint
        ↓ Contrast: 4.15:1 ❌

AFTER:  "Learn More" (weather-primary #007A7A) - clear
        ↓ Contrast: 4.65:1 ✅
```

**Usage Pattern:**
```tsx
// BEFORE ❌
className="text-weather-teal hover:underline"

// AFTER ✅
className="text-weather-primary hover:underline"
```

**Components Affected:**
- GuideTemplate: TOC hover, breadcrumb hover
- ColorGrid: Filter hover, color name hover, empty state link
- AnatomyDiagram: Badge active state

---

## Special Case: Teal Text on Dark Backgrounds

### ❌ FAIL: Standard Teal on Dark (3.54:1)

| Current Color | Hex | Contrast | Required | Status |
|---------------|-----|----------|----------|--------|
| `text-weather-teal` on `bg-weather-dark` | #008B8B on #1F2937 | 3.54:1 | 4.5:1 | ❌ FAIL AA |

### ✅ PASS: Light Teal on Dark (Sufficient Contrast)

| New Color | Hex | Contrast | Required | Status |
|-----------|-----|----------|----------|--------|
| `text-weather-primary-on-dark` | #4DCDD0 | ~7+:1 | 4.5:1 | ✅ PASS AA |

**Visual Comparison:**
```
Dark Background: [weather-dark] #1F2937

BEFORE: "Home > Guide" (weather-teal #008B8B)
        ↓ Contrast: 3.54:1 ❌

AFTER:  "Home > Guide" (weather-primary-on-dark #4DCDD0)
        ↓ Contrast: ~7:1 ✅
```

**Usage Pattern:**
```tsx
// BEFORE ❌ (on dark background)
className="text-gray-300 hover:text-weather-teal"

// AFTER ✅ (on dark background)
className="text-gray-300 hover:text-weather-primary-on-dark"
```

**Component:** GuideTemplate breadcrumbs

---

## Complete Color Mapping Reference

### Design System Color Hierarchy for WCAG Compliance

```
PURPOSE: Text on White Backgrounds
----------------------------------------
❌ weather-teal        #008B8B  4.15:1  (FAILS AA - deprecated)
✅ weather-primary     #007A7A  4.65:1  (PASS AA) ← Use This
✅ weather-primary-dark #006666 7.09:1  (PASS AAA) ← Or This


PURPOSE: Background with White Text
----------------------------------------
❌ weather-teal        #008B8B  4.15:1  (FAILS AA - deprecated)
✅ weather-primary-dark #006666 7.09:1  (PASS AAA) ← Use This


PURPOSE: Text on Dark Backgrounds (weather-dark #1F2937)
----------------------------------------
❌ weather-teal        #008B8B  3.54:1  (FAILS AA - deprecated)
✅ weather-primary-on-dark #4DCDD0 ~7:1+ (PASS AA) ← Use This


PURPOSE: Borders on White
----------------------------------------
❌ gray-200            #E5E7EB  1.24:1  (FAILS 1.4.11 - deprecated)
❌ gray-300            #D1D5DB  1.47:1  (FAILS 1.4.11 - deprecated)
✅ weather-gray-dark   #6B7280  3.04:1  (PASS 1.4.11) ← Use This
✅ weather-primary     #007A7A  4.65:1  (PASS 1.4.11) ← For Focus


PURPOSE: Status Colors
----------------------------------------
✅ weather-success     #059669  4.54:1  (PASS AA)
✅ weather-warning     #B45309  4.53:1  (PASS AA)
✅ weather-danger      #DC2626  4.53:1  (PASS AA)
```

---

## Quick Fix Cheat Sheet

### 1. Borders
```tsx
// FIND & REPLACE
border-gray-200     → border-weather-gray-dark
border-gray-300     → border-weather-gray-dark
border-2 border-gray → border-2 border-weather-gray-dark
```

### 2. Button Backgrounds
```tsx
// FIND & REPLACE
bg-weather-teal text-white  → bg-weather-primary-dark text-white
```

### 3. Text Colors (on white)
```tsx
// FIND & REPLACE
text-weather-teal           → text-weather-primary
hover:text-weather-teal     → hover:text-weather-primary
```

### 4. Text Colors (on dark backgrounds)
```tsx
// FIND & REPLACE
hover:text-weather-teal     → hover:text-weather-primary-on-dark
(when parent has bg-weather-dark or similar)
```

### 5. Gradients
```tsx
// FIND & REPLACE
from-weather-teal           → from-weather-primary-dark
to-weather-teal             → to-weather-primary-dark
```

---

## Component-Specific Fixes

### GuideTemplate.tsx
| Line | Find | Replace |
|------|------|---------|
| 133 | `from-weather-teal` | `from-weather-primary-dark` |
| 156 | `hover:text-weather-teal` | `hover:text-weather-primary-on-dark` |
| 169 | `hover:text-weather-teal` | `hover:text-weather-primary-on-dark` |
| 230 | `bg-weather-teal` | `bg-weather-primary-dark` |
| 231 | `hover:text-weather-teal` | `hover:text-weather-primary` |
| 364 | `bg-weather-teal` | `bg-weather-primary-dark` |

### VentilationCalculator.tsx
| Line | Find | Replace |
|------|------|---------|
| 119 | `border-gray-300` | `border-weather-gray-dark` |
| 119 | `focus:border-weather-teal` | `focus:border-weather-primary` |
| 150 | `bg-weather-teal` | `bg-weather-primary-dark` |
| 168 | `border-weather-teal` | `border-weather-primary` |
| 174 | `border-weather-teal` | `border-weather-primary` |
| 180 | `border-weather-teal` | `border-weather-primary` |
| 204 | `text-weather-teal` | `text-weather-primary` |

### ColorGrid.tsx
| Line | Find | Replace |
|------|------|---------|
| 51 | `bg-weather-teal` | `bg-weather-primary-dark` |
| 52 | `border-gray-200` | `border-weather-gray-dark` |
| 52 | `hover:border-weather-teal` | `hover:border-weather-primary` |
| 52 | `hover:text-weather-teal` | `hover:text-weather-primary` |
| 74 | `border-gray-200` | `border-weather-gray-dark` |
| 74 | `hover:border-weather-teal` | `hover:border-weather-primary` |
| 108 | `group-hover:text-weather-teal` | `group-hover:text-weather-primary` |
| 143 | `text-weather-teal` | `text-weather-primary` |
| 161 | `bg-weather-teal` | `bg-weather-primary-dark` |

### AnatomyDiagram.tsx
| Line | Find | Replace |
|------|------|---------|
| 73 | `bg-weather-teal border-weather-teal` | `bg-weather-primary-dark border-weather-primary-dark` |
| 74 | `border-weather-teal` | `border-weather-primary` |
| 82 | `text-weather-teal` | `text-weather-primary` |
| 122 | `from-weather-teal to-weather-purple` | `from-weather-primary-dark to-weather-accent` |
| 159 | `bg-weather-teal text-white border-weather-teal` | `bg-weather-primary-dark text-white border-weather-primary-dark` |
| 159 | `border-gray-200` | `border-weather-gray-dark` |
| 159 | `hover:border-weather-teal` | `hover:border-weather-primary` |
| 169 | `bg-weather-teal text-white` | `bg-weather-primary-dark text-white` |
| 170 | `text-weather-teal` | `text-weather-primary` |

### ComparisonTable.tsx
**Note:** Dynamic color system requires conditional logic

```tsx
// Line 83-92: Update both option1Color and option2Color references
// From:
className={`py-4 px-6 text-center bg-${option1Color}/10 border-b-2 border-${option1Color}/30`}
className={`text-xl font-bold text-${option1Color}`}

// To:
const option1BgClass = option1Color === 'weather-teal' ? 'weather-primary-dark' : option1Color;
className={`py-4 px-6 text-center bg-${option1BgClass}/10 border-b-2 border-${option1BgClass}/30`}
```

---

## Testing Commands

### 1. Run Contrast Analysis
```bash
node wcag-contrast-analysis.js
```

### 2. Search for Violations
```bash
# Find all weather-teal usage
grep -rn "weather-teal" app/components/

# Find all gray border usage
grep -rn "border-gray-[23]00" app/components/

# Find all affected files
grep -rl "weather-teal\|border-gray-[23]00" app/components/
```

### 3. Verify Build
```bash
npm run build
```

### 4. Visual Regression Testing
```bash
# Install contrast checker
npm install -g pa11y-ci

# Run accessibility audit
pa11y-ci http://localhost:3000/roofing-guide/roof-ventilation
```

---

## Success Criteria Checklist

- [ ] All border colors use `weather-gray-dark` (3.04:1+)
- [ ] All button backgrounds use `weather-primary-dark` (7.09:1)
- [ ] All text colors on white use `weather-primary` (4.65:1+)
- [ ] All text colors on dark use `weather-primary-on-dark`
- [ ] No instances of `weather-teal` remain in components
- [ ] No instances of `gray-200` or `gray-300` in borders
- [ ] `npm run build` succeeds without warnings
- [ ] `node wcag-contrast-analysis.js` shows 95%+ pass rate
- [ ] Manual browser testing confirms all elements visible

---

## Before/After Summary

### Before Fixes
- **Compliance Score:** 4/10 ❌
- **Violations:** 30 (4 BLOCKER, 13 MAJOR, 13 MINOR)
- **Pass Rate:** 37.3%
- **Production Ready:** NO

### After Fixes
- **Compliance Score:** 9/10 ✅
- **Violations:** 0-2 (minor edge cases)
- **Pass Rate:** 95%+
- **Production Ready:** YES

**Time to Fix:** 3-4 hours
**Files to Update:** 5 components
**Lines Changed:** ~40-50 lines total
**Breaking Changes:** None (visual only)

---

## Color Palette Reference Card

```
┌─────────────────────────────────────────────────────────┐
│ WCAG AA COMPLIANT WEATHER SHIELD COLOR PALETTE          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ PRIMARY COLORS (Teal Family)                             │
│ ═══════════════════════════════                          │
│ weather-primary-dark  #006666 ████ 7.09:1 (AAA)         │
│ weather-primary       #007A7A ████ 4.65:1 (AA)          │
│ weather-primary-light #00A8A8 ████ 3.42:1 (Large only)  │
│ weather-primary-on-dark #4DCDD0 ████ 7+:1 (on dark)     │
│                                                          │
│ DEPRECATED (DO NOT USE)                                  │
│ ═══════════════════════                                  │
│ weather-teal          #008B8B ████ 4.15:1 (FAILS)       │
│ gray-200              #E5E7EB ████ 1.24:1 (FAILS)       │
│ gray-300              #D1D5DB ████ 1.47:1 (FAILS)       │
│                                                          │
│ NEUTRAL COLORS                                           │
│ ═══════════════                                          │
│ weather-gray-dark     #6B7280 ████ 3.04:1 (AA borders)  │
│ weather-dark          #1F2937 ████ 14.7:1 (AAA text)    │
│ weather-light         #F8FAFC ████ (backgrounds)         │
│                                                          │
│ ACCENT COLORS                                            │
│ ═════════════                                            │
│ weather-accent        #6D28D9 ████ 5.47:1 (AA)          │
│ weather-accent-dark   #5B21B6 ████ 6.54:1 (AA)          │
│                                                          │
│ STATUS COLORS                                            │
│ ═════════════                                            │
│ weather-success       #059669 ████ 4.54:1 (AA)          │
│ weather-warning       #B45309 ████ 4.53:1 (AA)          │
│ weather-danger        #DC2626 ████ 4.53:1 (AA)          │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

**Quick Reference Version:** 1.0
**Last Updated:** 2025-09-30
**Related:** WCAG-PHASE-V-AUDIT-REPORT.md
