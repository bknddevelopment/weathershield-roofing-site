// Comprehensive pricing data for WeatherShield Roofing - 2025 rates
// All prices are in USD and subject to market fluctuations

export interface RoofingMaterial {
  id: string;
  name: string;
  pricePerSquareFoot: {
    low: number;
    mid: number;
    high: number;
  };
  lifespan: number; // in years
  warranty: number; // in years
  pros: string[];
  cons: string[];
  bestFor: string;
  laborIntensity: 'low' | 'medium' | 'high';
  popularityRank: number;
  energyEfficiency: number; // 1-10 scale
  durabilityRating: number; // 1-10 scale
  maintenanceLevel: 'low' | 'medium' | 'high';
}

export interface RoofComplexity {
  level: 'simple' | 'moderate' | 'complex' | 'very-complex';
  multiplier: number;
  description: string;
  factors: string[];
}

export interface AdditionalService {
  id: string;
  name: string;
  price: number | { min: number; max: number };
  unit: 'per-service' | 'per-foot' | 'per-hour' | 'per-square';
  description: string;
}

export interface LaborRate {
  type: 'basic' | 'standard' | 'premium' | 'emergency';
  hourlyRate: number;
  minimumCharge: number;
  overtimeMultiplier: number;
}

export interface SpecialOffer {
  id: string;
  title: string;
  discount: number | string;
  description: string;
  validUntil: string;
  terms: string[];
  code?: string;
  featured: boolean;
}

// Roofing materials with 2025 pricing
export const roofingMaterials: RoofingMaterial[] = [
  {
    id: 'asphalt-3tab',
    name: '3-Tab Asphalt Shingles',
    pricePerSquareFoot: {
      low: 3.50,
      mid: 4.50,
      high: 5.50
    },
    lifespan: 20,
    warranty: 25,
    pros: [
      'Most affordable option',
      'Wide variety of colors',
      'Easy installation',
      'Good for moderate climates'
    ],
    cons: [
      'Shorter lifespan',
      'Less wind resistance',
      'Can crack in extreme temperatures'
    ],
    bestFor: 'Budget-conscious homeowners with moderate weather conditions',
    laborIntensity: 'low',
    popularityRank: 2,
    energyEfficiency: 5,
    durabilityRating: 6,
    maintenanceLevel: 'medium'
  },
  {
    id: 'asphalt-architectural',
    name: 'Architectural Asphalt Shingles',
    pricePerSquareFoot: {
      low: 4.50,
      mid: 6.00,
      high: 8.00
    },
    lifespan: 30,
    warranty: 30,
    pros: [
      'Better wind resistance than 3-tab',
      'More attractive appearance',
      'Good value for money',
      'Energy efficient options available'
    ],
    cons: [
      'More expensive than 3-tab',
      'Can still be damaged by severe weather',
      'Color may fade over time'
    ],
    bestFor: 'Homeowners seeking balance between cost and quality',
    laborIntensity: 'low',
    popularityRank: 1,
    energyEfficiency: 6,
    durabilityRating: 7,
    maintenanceLevel: 'low'
  },
  {
    id: 'metal-standing-seam',
    name: 'Standing Seam Metal Roof',
    pricePerSquareFoot: {
      low: 9.00,
      mid: 12.00,
      high: 15.00
    },
    lifespan: 50,
    warranty: 40,
    pros: [
      'Extremely durable',
      'Energy efficient',
      'Fire resistant',
      'Low maintenance',
      'Modern appearance'
    ],
    cons: [
      'Higher upfront cost',
      'Can be noisy during rain',
      'Requires specialized installation'
    ],
    bestFor: 'Long-term investment, coastal areas, modern homes',
    laborIntensity: 'high',
    popularityRank: 3,
    energyEfficiency: 9,
    durabilityRating: 9,
    maintenanceLevel: 'low'
  },
  {
    id: 'metal-corrugated',
    name: 'Corrugated Metal Roof',
    pricePerSquareFoot: {
      low: 5.50,
      mid: 7.50,
      high: 10.00
    },
    lifespan: 40,
    warranty: 30,
    pros: [
      'Good durability',
      'Lightweight',
      'Fire resistant',
      'Recyclable'
    ],
    cons: [
      'Industrial appearance',
      'Can dent from hail',
      'Expansion/contraction issues'
    ],
    bestFor: 'Agricultural buildings, modern industrial-style homes',
    laborIntensity: 'medium',
    popularityRank: 5,
    energyEfficiency: 7,
    durabilityRating: 8,
    maintenanceLevel: 'low'
  },
  {
    id: 'clay-tile',
    name: 'Clay Tile Roof',
    pricePerSquareFoot: {
      low: 10.00,
      mid: 15.00,
      high: 25.00
    },
    lifespan: 100,
    warranty: 50,
    pros: [
      'Extremely long lasting',
      'Beautiful appearance',
      'Fire resistant',
      'Energy efficient',
      'Low maintenance'
    ],
    cons: [
      'Very expensive',
      'Heavy - may require structural reinforcement',
      'Can break if walked on',
      'Complex installation'
    ],
    bestFor: 'Mediterranean and Spanish-style homes, premium properties',
    laborIntensity: 'high',
    popularityRank: 6,
    energyEfficiency: 8,
    durabilityRating: 9,
    maintenanceLevel: 'low'
  },
  {
    id: 'concrete-tile',
    name: 'Concrete Tile Roof',
    pricePerSquareFoot: {
      low: 8.00,
      mid: 12.00,
      high: 18.00
    },
    lifespan: 50,
    warranty: 30,
    pros: [
      'Durable',
      'Fire resistant',
      'Available in many styles',
      'Less expensive than clay'
    ],
    cons: [
      'Heavy weight',
      'Can crack over time',
      'Color may fade',
      'Expensive installation'
    ],
    bestFor: 'Homeowners wanting tile look at lower cost',
    laborIntensity: 'high',
    popularityRank: 7,
    energyEfficiency: 7,
    durabilityRating: 8,
    maintenanceLevel: 'medium'
  },
  {
    id: 'slate',
    name: 'Natural Slate Roof',
    pricePerSquareFoot: {
      low: 15.00,
      mid: 25.00,
      high: 35.00
    },
    lifespan: 150,
    warranty: 75,
    pros: [
      'Longest lifespan',
      'Beautiful natural appearance',
      'Fire resistant',
      'Environmentally friendly',
      'Increases property value'
    ],
    cons: [
      'Most expensive option',
      'Very heavy',
      'Fragile - can break',
      'Requires expert installation'
    ],
    bestFor: 'Historic homes, luxury properties, lifetime investment',
    laborIntensity: 'high',
    popularityRank: 8,
    energyEfficiency: 7,
    durabilityRating: 10,
    maintenanceLevel: 'low'
  },
  {
    id: 'wood-shake',
    name: 'Wood Shake/Shingle',
    pricePerSquareFoot: {
      low: 7.00,
      mid: 10.00,
      high: 14.00
    },
    lifespan: 30,
    warranty: 20,
    pros: [
      'Natural appearance',
      'Good insulation',
      'Eco-friendly if sustainably sourced',
      'Ages beautifully'
    ],
    cons: [
      'High maintenance',
      'Fire risk without treatment',
      'Can rot or attract insects',
      'Not suitable for humid climates'
    ],
    bestFor: 'Rustic or traditional homes in dry climates',
    laborIntensity: 'medium',
    popularityRank: 9,
    energyEfficiency: 8,
    durabilityRating: 5,
    maintenanceLevel: 'high'
  },
  {
    id: 'tpo',
    name: 'TPO Flat Roof',
    pricePerSquareFoot: {
      low: 5.00,
      mid: 7.50,
      high: 10.00
    },
    lifespan: 30,
    warranty: 20,
    pros: [
      'Energy efficient',
      'Good for flat roofs',
      'Resistant to UV and chemicals',
      'Lightweight'
    ],
    cons: [
      'Limited to flat/low-slope roofs',
      'Seams can fail',
      'Professional installation required'
    ],
    bestFor: 'Commercial buildings, flat residential roofs',
    laborIntensity: 'medium',
    popularityRank: 4,
    energyEfficiency: 9,
    durabilityRating: 7,
    maintenanceLevel: 'medium'
  }
];

// Roof complexity factors
export const roofComplexityLevels: RoofComplexity[] = [
  {
    level: 'simple',
    multiplier: 1.0,
    description: 'Simple gable or hip roof with minimal features',
    factors: [
      'Single story',
      'Pitch 4/12 to 6/12',
      'Few or no valleys',
      'Minimal flashing needs'
    ]
  },
  {
    level: 'moderate',
    multiplier: 1.25,
    description: 'Standard roof with some architectural features',
    factors: [
      'Up to 2 stories',
      'Pitch 6/12 to 8/12',
      '2-4 valleys',
      'Dormers or skylights',
      'Standard chimney'
    ]
  },
  {
    level: 'complex',
    multiplier: 1.5,
    description: 'Complex roof with multiple features',
    factors: [
      'Multi-story',
      'Pitch 8/12 to 10/12',
      '5+ valleys',
      'Multiple dormers',
      'Multiple chimneys',
      'Turrets or curves'
    ]
  },
  {
    level: 'very-complex',
    multiplier: 1.75,
    description: 'Very complex architectural roof',
    factors: [
      '3+ stories',
      'Steep pitch (10/12+)',
      'Many valleys and hips',
      'Custom architectural features',
      'Extensive flashing work',
      'Mixed materials'
    ]
  }
];

// Additional services pricing
export const additionalServices: AdditionalService[] = [
  {
    id: 'tear-off',
    name: 'Complete Tear-Off (1 layer)',
    price: { min: 1.00, max: 2.00 },
    unit: 'per-square',
    description: 'Remove existing shingle layer'
  },
  {
    id: 'tear-off-multiple',
    name: 'Multiple Layer Tear-Off',
    price: { min: 1.50, max: 3.00 },
    unit: 'per-square',
    description: 'Remove 2+ layers of existing roofing'
  },
  {
    id: 'decking-repair',
    name: 'Plywood Decking Replacement',
    price: { min: 75, max: 125 },
    unit: 'per-foot',
    description: 'Replace damaged roof decking (per 4x8 sheet)'
  },
  {
    id: 'flashing',
    name: 'Flashing Installation/Repair',
    price: { min: 500, max: 1500 },
    unit: 'per-service',
    description: 'Install or repair roof flashing'
  },
  {
    id: 'ridge-vent',
    name: 'Ridge Vent Installation',
    price: { min: 300, max: 600 },
    unit: 'per-service',
    description: 'Install ridge ventilation system'
  },
  {
    id: 'gutter-installation',
    name: 'Gutter Installation',
    price: { min: 5, max: 12 },
    unit: 'per-foot',
    description: 'Install new seamless gutters'
  },
  {
    id: 'skylight',
    name: 'Skylight Installation',
    price: { min: 1500, max: 3500 },
    unit: 'per-service',
    description: 'Install new skylight with flashing'
  },
  {
    id: 'chimney-flashing',
    name: 'Chimney Flashing',
    price: { min: 800, max: 1500 },
    unit: 'per-service',
    description: 'Complete chimney flashing system'
  },
  {
    id: 'ice-dam-prevention',
    name: 'Ice Dam Prevention System',
    price: { min: 50, max: 75 },
    unit: 'per-foot',
    description: 'Install heating cables and insulation'
  },
  {
    id: 'emergency-tarp',
    name: 'Emergency Tarp Service',
    price: { min: 500, max: 1500 },
    unit: 'per-service',
    description: '24/7 emergency tarping service'
  }
];

// Labor rates
export const laborRates: LaborRate[] = [
  {
    type: 'basic',
    hourlyRate: 75,
    minimumCharge: 300,
    overtimeMultiplier: 1.0
  },
  {
    type: 'standard',
    hourlyRate: 95,
    minimumCharge: 380,
    overtimeMultiplier: 1.0
  },
  {
    type: 'premium',
    hourlyRate: 125,
    minimumCharge: 500,
    overtimeMultiplier: 1.5
  },
  {
    type: 'emergency',
    hourlyRate: 195,
    minimumCharge: 750,
    overtimeMultiplier: 2.0
  }
];

// Special offers for 2025
export const specialOffers: SpecialOffer[] = [
  {
    id: 'free-inspection',
    title: 'Free Roof Inspection',
    discount: '$99 VALUE - FREE',
    description: 'Comprehensive 21-point roof inspection with detailed report',
    validUntil: '2025-12-31',
    terms: [
      'For Myrtle Beach area residents',
      'One per household',
      'New customers only'
    ],
    featured: true
  },
  {
    id: 'senior-discount',
    title: 'Senior Citizen Discount',
    discount: '10%',
    description: '10% off total project cost for seniors 65+',
    validUntil: '2025-12-31',
    terms: [
      'Proof of age required',
      'Cannot combine with other offers',
      'Applies to labor and materials'
    ],
    featured: false
  },
  {
    id: 'military-discount',
    title: 'Military & First Responder Discount',
    discount: '15%',
    description: 'Special pricing for those who serve',
    validUntil: '2025-12-31',
    terms: [
      'Valid military/first responder ID required',
      'Active and retired personnel',
      'Cannot combine with other offers'
    ],
    featured: true
  },
  {
    id: 'spring-special',
    title: 'Spring Roofing Special',
    discount: '$500 OFF',
    description: 'Save $500 on complete roof replacement',
    validUntil: '2025-05-31',
    terms: [
      'Minimum project value $10,000',
      'Must mention offer when scheduling',
      'Limited time offer'
    ],
    code: 'SPRING500',
    featured: true
  },
  {
    id: 'financing-promo',
    title: '0% APR for 12 Months',
    discount: '0% APR',
    description: 'No interest financing for qualified buyers',
    validUntil: '2025-12-31',
    terms: [
      'Subject to credit approval',
      'Minimum purchase $5,000',
      'See financing page for details'
    ],
    featured: true
  },
  {
    id: 'referral-bonus',
    title: 'Referral Reward Program',
    discount: '$250',
    description: 'Earn $250 for each successful referral',
    validUntil: '2025-12-31',
    terms: [
      'Referral must complete project',
      'No limit on referrals',
      'Payment after project completion'
    ],
    featured: false
  },
  {
    id: 'bundle-save',
    title: 'Bundle & Save',
    discount: '20%',
    description: 'Save 20% when combining roofing with siding or windows',
    validUntil: '2025-12-31',
    terms: [
      'Both projects must be scheduled together',
      'Minimum combined value $15,000',
      'Cannot combine with other discounts'
    ],
    featured: false
  },
  {
    id: 'storm-damage',
    title: 'Storm Damage Special',
    discount: 'Deductible Assistance',
    description: 'We\'ll help with your insurance deductible',
    validUntil: '2025-12-31',
    terms: [
      'Valid insurance claim required',
      'Up to $1,000 assistance',
      'Subject to approval'
    ],
    featured: true
  }
];

// Price ranges by home size (rough estimates)
export interface HomeSizePricing {
  size: string;
  squareFeet: number;
  roofSquares: number; // 1 square = 100 sq ft
  estimatedCost: {
    low: number;
    mid: number;
    high: number;
  };
}

export const homeSizePricing: HomeSizePricing[] = [
  {
    size: 'Small (Ranch)',
    squareFeet: 1000,
    roofSquares: 12,
    estimatedCost: {
      low: 4200,
      mid: 7200,
      high: 18000
    }
  },
  {
    size: 'Medium (Colonial)',
    squareFeet: 1500,
    roofSquares: 18,
    estimatedCost: {
      low: 6300,
      mid: 10800,
      high: 27000
    }
  },
  {
    size: 'Large (Two-Story)',
    squareFeet: 2500,
    roofSquares: 30,
    estimatedCost: {
      low: 10500,
      mid: 18000,
      high: 45000
    }
  },
  {
    size: 'Extra Large',
    squareFeet: 3500,
    roofSquares: 42,
    estimatedCost: {
      low: 14700,
      mid: 25200,
      high: 63000
    }
  }
];

// Insurance deductible ranges
export const insuranceDeductibles = [
  500, 1000, 1500, 2000, 2500, 5000, 10000
];

// Warranty options
export interface WarrantyOption {
  type: string;
  years: number;
  coverage: string[];
  price: number;
}

export const warrantyOptions: WarrantyOption[] = [
  {
    type: 'Basic',
    years: 5,
    coverage: ['Workmanship', 'Installation defects'],
    price: 0
  },
  {
    type: 'Standard',
    years: 10,
    coverage: ['Workmanship', 'Installation defects', 'Material defects'],
    price: 500
  },
  {
    type: 'Premium',
    years: 25,
    coverage: ['Workmanship', 'Installation', 'Materials', 'Wind damage up to 110mph'],
    price: 1500
  },
  {
    type: 'Lifetime',
    years: 50,
    coverage: ['Full coverage', 'Transferable', 'No deductible'],
    price: 2500
  }
];

// Seasonal pricing adjustments
export const seasonalAdjustments = {
  spring: 1.0,    // Base price
  summer: 1.1,    // 10% higher (busy season)
  fall: 0.95,     // 5% discount
  winter: 0.9     // 10% discount (slow season)
};

// Geographic area multipliers for Myrtle Beach region
export const areaMultipliers: Record<string, number> = {
  'myrtle-beach': 1.0,
  'north-myrtle-beach': 1.05,
  'surfside-beach': 1.02,
  'garden-city': 1.0,
  'murrells-inlet': 1.03,
  'pawleys-island': 1.08,
  'conway': 0.95,
  'little-river': 1.01,
  'loris': 0.92,
  'socastee': 0.98
};

// Calculate total project cost
export function calculateProjectCost(
  squareFeet: number,
  material: RoofingMaterial,
  complexity: RoofComplexity,
  additionalServicesSelected: string[],
  area: string = 'myrtle-beach',
  season: 'spring' | 'summer' | 'fall' | 'winter' = 'spring'
): {
  materialCost: number;
  laborCost: number;
  additionalCost: number;
  subtotal: number;
  adjustments: number;
  total: number;
  breakdown: Array<{ item: string; cost: number }>;
} {
  const squares = squareFeet / 100;

  // Material cost
  const materialCost = squares * material.pricePerSquareFoot.mid * 100;

  // Labor cost (based on complexity and material)
  const laborIntensityMultiplier = {
    low: 1.0,
    medium: 1.3,
    high: 1.6
  }[material.laborIntensity];

  const laborCost = squares * 250 * complexity.multiplier * laborIntensityMultiplier;

  // Additional services
  let additionalCost = 0;
  const breakdown: Array<{ item: string; cost: number }> = [];

  additionalServicesSelected.forEach(serviceId => {
    const service = additionalServices.find(s => s.id === serviceId);
    if (service) {
      let cost = 0;
      if (typeof service.price === 'number') {
        cost = service.price;
      } else {
        cost = (service.price.min + service.price.max) / 2;
        if (service.unit === 'per-square') {
          cost *= squares;
        } else if (service.unit === 'per-foot') {
          cost *= Math.sqrt(squareFeet) * 4; // Rough perimeter estimate
        }
      }
      additionalCost += cost;
      breakdown.push({ item: service.name, cost });
    }
  });

  const subtotal = materialCost + laborCost + additionalCost;

  // Apply adjustments
  const areaMultiplier = areaMultipliers[area] || 1.0;
  const seasonMultiplier = seasonalAdjustments[season];
  const adjustments = subtotal * (areaMultiplier * seasonMultiplier - 1);

  const total = subtotal + adjustments;

  breakdown.unshift(
    { item: `Materials (${material.name})`, cost: materialCost },
    { item: `Labor (${complexity.description})`, cost: laborCost }
  );

  if (adjustments !== 0) {
    breakdown.push({ item: 'Location & Season Adjustments', cost: adjustments });
  }

  return {
    materialCost,
    laborCost,
    additionalCost,
    subtotal,
    adjustments,
    total,
    breakdown
  };
}