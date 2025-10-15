import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColorGrid, { ShingleColor } from '../../app/components/ColorGrid';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock colors data
const mockColors: ShingleColor[] = [
  {
    name: 'Weathered Wood',
    category: 'Traditional',
    hexCode: '#8B7355',
    description: 'Classic rustic brown tone',
    popularity: 'High',
  },
  {
    name: 'Charcoal Black',
    category: 'Modern',
    hexCode: '#2C2C2C',
    description: 'Contemporary deep black',
    popularity: 'High',
  },
  {
    name: 'Ocean Blue',
    category: 'Coastal',
    hexCode: '#1E88E5',
    description: 'Refreshing coastal blue',
    popularity: 'Medium',
  },
  {
    name: 'Slate Gray',
    category: 'Premium',
    hexCode: '#546E7A',
    description: 'Sophisticated gray tone',
    popularity: 'High',
  },
  {
    name: 'Terra Cotta',
    category: 'Traditional',
    hexCode: '#D84315',
    description: 'Warm Mediterranean red',
    popularity: 'Low',
  },
];

describe('ColorGrid - Filtering', () => {
  it('filters by category: Traditional', () => {
    render(<ColorGrid colors={mockColors} />);

    const traditionalButton = screen.getByRole('button', { name: 'Traditional' });
    fireEvent.click(traditionalButton);

    // Should show only Traditional colors
    expect(screen.getByText('Weathered Wood')).toBeInTheDocument();
    expect(screen.getByText('Terra Cotta')).toBeInTheDocument();

    // Should not show other categories
    expect(screen.queryByText('Charcoal Black')).not.toBeInTheDocument();
    expect(screen.queryByText('Ocean Blue')).not.toBeInTheDocument();
    expect(screen.queryByText('Slate Gray')).not.toBeInTheDocument();
  });

  it('filters by category: Modern', () => {
    render(<ColorGrid colors={mockColors} />);

    const modernButton = screen.getByRole('button', { name: 'Modern' });
    fireEvent.click(modernButton);

    expect(screen.getByText('Charcoal Black')).toBeInTheDocument();
    expect(screen.queryByText('Weathered Wood')).not.toBeInTheDocument();
    expect(screen.getByText(/Showing.*1.*color$/i)).toBeInTheDocument();
  });

  it('filters by category: Coastal', () => {
    render(<ColorGrid colors={mockColors} />);

    const coastalButton = screen.getByRole('button', { name: 'Coastal' });
    fireEvent.click(coastalButton);

    expect(screen.getByText('Ocean Blue')).toBeInTheDocument();
    expect(screen.queryByText('Weathered Wood')).not.toBeInTheDocument();
  });

  it('filters by category: Premium', () => {
    render(<ColorGrid colors={mockColors} />);

    const premiumButton = screen.getByRole('button', { name: 'Premium' });
    fireEvent.click(premiumButton);

    expect(screen.getByText('Slate Gray')).toBeInTheDocument();
    expect(screen.queryByText('Weathered Wood')).not.toBeInTheDocument();
  });

  it('shows all colors when All selected', () => {
    render(<ColorGrid colors={mockColors} />);

    // Click a specific category first
    const traditionalButton = screen.getByRole('button', { name: 'Traditional' });
    fireEvent.click(traditionalButton);

    // Then click All
    const allButton = screen.getByRole('button', { name: 'All' });
    fireEvent.click(allButton);

    // All colors should be visible
    expect(screen.getByText('Weathered Wood')).toBeInTheDocument();
    expect(screen.getByText('Charcoal Black')).toBeInTheDocument();
    expect(screen.getByText('Ocean Blue')).toBeInTheDocument();
    expect(screen.getByText('Slate Gray')).toBeInTheDocument();
    expect(screen.getByText('Terra Cotta')).toBeInTheDocument();
  });

  it('shows correct count after filtering', () => {
    render(<ColorGrid colors={mockColors} />);

    // Check initial count (all 5)
    expect(screen.getByText(/Showing.*5.*colors/i)).toBeInTheDocument();

    // Filter to Traditional (2 colors)
    const traditionalButton = screen.getByRole('button', { name: 'Traditional' });
    fireEvent.click(traditionalButton);

    expect(screen.getByText(/Showing.*2.*colors/i)).toBeInTheDocument();
  });

  it('displays singular "color" text for single result', () => {
    render(<ColorGrid colors={mockColors} />);

    // Filter to Modern (only 1 color)
    const modernButton = screen.getByRole('button', { name: 'Modern' });
    fireEvent.click(modernButton);

    expect(screen.getByText(/Showing.*1.*color$/i)).toBeInTheDocument();
  });

  it('displays empty state when no colors match', () => {
    // Create empty colors array for specific category
    const emptyColors: ShingleColor[] = [];

    render(<ColorGrid colors={emptyColors} />);

    expect(screen.getByText('No colors found in this category.')).toBeInTheDocument();
  });

  it('resets filter from empty state', () => {
    const emptyColors: ShingleColor[] = [];

    render(<ColorGrid colors={emptyColors} />);

    const resetButton = screen.getByRole('button', { name: /View all colors/i });
    fireEvent.click(resetButton);

    // Should still show empty state since there are no colors
    expect(screen.getByText('No colors found in this category.')).toBeInTheDocument();
  });

  it('applies active styling to selected filter button', () => {
    render(<ColorGrid colors={mockColors} />);

    const traditionalButton = screen.getByRole('button', { name: 'Traditional' });

    // Should not be active initially
    expect(traditionalButton).not.toHaveClass('bg-weather-teal');

    fireEvent.click(traditionalButton);

    // Should be active after click
    expect(traditionalButton).toHaveClass('bg-weather-teal', 'text-white');
  });
});

describe('ColorGrid - Lazy Loading', () => {
  it('sets loading="lazy" on images', () => {
    const colorsWithImages: ShingleColor[] = [
      {
        name: 'Test Color',
        category: 'Traditional',
        hexCode: '#000000',
        image: '/images/test-shingle.jpg',
      },
    ];

    render(<ColorGrid colors={colorsWithImages} />);

    const image = screen.getByAlt('Test Color shingle color');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('shows color swatch fallback when no image', () => {
    const colorsWithoutImages: ShingleColor[] = [
      {
        name: 'Swatch Color',
        category: 'Modern',
        hexCode: '#FF5733',
      },
    ];

    render(<ColorGrid colors={colorsWithoutImages} />);

    // Look for element with background color style
    const swatch = screen.getByLabelText('Swatch Color color swatch');
    expect(swatch).toBeInTheDocument();
    expect(swatch).toHaveStyle({ backgroundColor: '#FF5733' });
  });

  it('renders images with proper alt text', () => {
    const colorsWithImages: ShingleColor[] = [
      {
        name: 'Beautiful Blue',
        category: 'Coastal',
        hexCode: '#0000FF',
        image: '/images/blue-shingle.jpg',
      },
    ];

    render(<ColorGrid colors={colorsWithImages} />);

    const image = screen.getByAlt('Beautiful Blue shingle color');
    expect(image).toHaveAttribute('src', '/images/blue-shingle.jpg');
  });
});

describe('ColorGrid - Popularity Badges', () => {
  it('shows "Popular" badge for high-demand colors', () => {
    render(<ColorGrid colors={mockColors} />);

    // Find all popular badges (there are 3 High popularity colors)
    const popularBadges = screen.getAllByText('Popular');
    expect(popularBadges.length).toBe(3);
  });

  it('hides badge for non-high popularity', () => {
    const colorsWithMediumPopularity: ShingleColor[] = [
      {
        name: 'Medium Color',
        category: 'Modern',
        hexCode: '#000000',
        popularity: 'Medium',
      },
    ];

    render(<ColorGrid colors={colorsWithMediumPopularity} />);

    expect(screen.queryByText('Popular')).not.toBeInTheDocument();
  });

  it('hides badge for low popularity', () => {
    const colorsWithLowPopularity: ShingleColor[] = [
      {
        name: 'Low Color',
        category: 'Traditional',
        hexCode: '#000000',
        popularity: 'Low',
      },
    ];

    render(<ColorGrid colors={colorsWithLowPopularity} />);

    expect(screen.queryByText('Popular')).not.toBeInTheDocument();
  });

  it('hides badge when popularity is undefined', () => {
    const colorsWithoutPopularity: ShingleColor[] = [
      {
        name: 'No Popularity',
        category: 'Premium',
        hexCode: '#000000',
      },
    ];

    render(<ColorGrid colors={colorsWithoutPopularity} />);

    expect(screen.queryByText('Popular')).not.toBeInTheDocument();
  });
});

describe('ColorGrid - Display and Rendering', () => {
  it('displays color name', () => {
    render(<ColorGrid colors={mockColors} />);

    expect(screen.getByText('Weathered Wood')).toBeInTheDocument();
    expect(screen.getByText('Charcoal Black')).toBeInTheDocument();
  });

  it('displays color description when provided', () => {
    render(<ColorGrid colors={mockColors} />);

    expect(screen.getByText('Classic rustic brown tone')).toBeInTheDocument();
    expect(screen.getByText('Contemporary deep black')).toBeInTheDocument();
  });

  it('displays hex code for each color', () => {
    render(<ColorGrid colors={mockColors} />);

    expect(screen.getByText('#8B7355')).toBeInTheDocument();
    expect(screen.getByText('#2C2C2C')).toBeInTheDocument();
    expect(screen.getByText('#1E88E5')).toBeInTheDocument();
  });

  it('displays category tag on each color card', () => {
    render(<ColorGrid colors={mockColors} />);

    const traditionalTags = screen.getAllByText('Traditional');
    expect(traditionalTags.length).toBeGreaterThan(0);
  });

  it('renders hex color swatches in color info', () => {
    render(<ColorGrid colors={mockColors} />);

    // Look for small hex color swatches (there should be one per color)
    const colorCards = screen.getAllByText(/#[0-9A-F]{6}/i);
    expect(colorCards.length).toBe(5);
  });

  it('respects custom columns prop', () => {
    const { container } = render(<ColorGrid colors={mockColors} columns={3} />);

    // Check for 3-column grid class
    const grid = container.querySelector('.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3');
    expect(grid).toBeInTheDocument();
  });

  it('defaults to 4 columns', () => {
    const { container } = render(<ColorGrid colors={mockColors} />);

    // Check for 4-column grid class
    const grid = container.querySelector('.grid-cols-2.sm\\:grid-cols-3.lg\\:grid-cols-4');
    expect(grid).toBeInTheDocument();
  });

  it('supports 2 columns', () => {
    const { container } = render(<ColorGrid colors={mockColors} columns={2} />);

    const grid = container.querySelector('.grid-cols-1.sm\\:grid-cols-2');
    expect(grid).toBeInTheDocument();
  });
});

describe('ColorGrid - CTA Section', () => {
  it('displays bottom CTA with phone number', () => {
    render(<ColorGrid colors={mockColors} />);

    expect(screen.getByText(/Need help choosing the perfect color/i)).toBeInTheDocument();

    const phoneLink = screen.getByRole('link', { name: /Call \(843\) 877-5539 for Free Samples/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+18438775539');
  });

  it('displays CTA description', () => {
    render(<ColorGrid colors={mockColors} />);

    expect(
      screen.getByText(/Our roofing experts can provide free color samples/i)
    ).toBeInTheDocument();
  });
});

describe('ColorGrid - Accessibility', () => {
  it('has proper ARIA labels for color swatches', () => {
    const colorsWithoutImages: ShingleColor[] = [
      {
        name: 'Accessible Color',
        category: 'Modern',
        hexCode: '#123456',
      },
    ];

    render(<ColorGrid colors={colorsWithoutImages} />);

    const swatch = screen.getByLabelText('Accessible Color color swatch');
    expect(swatch).toBeInTheDocument();
  });

  it('has proper ARIA label for hex color indicators', () => {
    render(<ColorGrid colors={mockColors} />);

    const hexSwatch = screen.getByLabelText('Weathered Wood hex color');
    expect(hexSwatch).toBeInTheDocument();
  });

  it('filter buttons are keyboard accessible', () => {
    render(<ColorGrid colors={mockColors} />);

    const traditionalButton = screen.getByRole('button', { name: 'Traditional' });

    // Should be a button and therefore keyboard accessible
    expect(traditionalButton.tagName).toBe('BUTTON');
  });
});

describe('ColorGrid - Edge Cases', () => {
  it('handles empty colors array', () => {
    render(<ColorGrid colors={[]} />);

    expect(screen.getByText('No colors found in this category.')).toBeInTheDocument();
    expect(screen.getByText(/Showing.*0.*colors/i)).toBeInTheDocument();
  });

  it('handles single color', () => {
    const singleColor: ShingleColor[] = [
      {
        name: 'Only Color',
        category: 'Traditional',
        hexCode: '#000000',
      },
    ];

    render(<ColorGrid colors={singleColor} />);

    expect(screen.getByText('Only Color')).toBeInTheDocument();
    expect(screen.getByText(/Showing.*1.*color$/i)).toBeInTheDocument();
  });

  it('handles colors without descriptions', () => {
    const colorsWithoutDesc: ShingleColor[] = [
      {
        name: 'No Description',
        category: 'Modern',
        hexCode: '#FFFFFF',
      },
    ];

    render(<ColorGrid colors={colorsWithoutDesc} />);

    expect(screen.getByText('No Description')).toBeInTheDocument();
    // Description should not appear
    expect(screen.queryByText(/Classic|Contemporary|Refreshing/i)).not.toBeInTheDocument();
  });

  it('handles very long color names', () => {
    const longNameColor: ShingleColor[] = [
      {
        name: 'Extremely Long Color Name That Goes On And On',
        category: 'Premium',
        hexCode: '#ABCDEF',
      },
    ];

    render(<ColorGrid colors={longNameColor} />);

    expect(screen.getByText('Extremely Long Color Name That Goes On And On')).toBeInTheDocument();
  });

  it('maintains filter state across re-renders', () => {
    const { rerender } = render(<ColorGrid colors={mockColors} />);

    // Click a filter
    const traditionalButton = screen.getByRole('button', { name: 'Traditional' });
    fireEvent.click(traditionalButton);

    expect(screen.getByText(/Showing.*2.*colors/i)).toBeInTheDocument();

    // Re-render with same props
    rerender(<ColorGrid colors={mockColors} />);

    // Filter should still be active
    expect(screen.getByText(/Showing.*2.*colors/i)).toBeInTheDocument();
  });
});
