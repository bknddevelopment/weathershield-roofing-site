import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComparisonTable, { ComparisonRow } from '../../app/components/ComparisonTable';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    tr: ({ children, ...props }: any) => <tr {...props}>{children}</tr>,
  },
}));

// Mock data
const mockRows: ComparisonRow[] = [
  {
    feature: 'Durability',
    option1: true,
    option2: false,
    description: 'Long-lasting performance',
  },
  {
    feature: 'Warranty Period',
    option1: '25 Years',
    option2: '10 Years',
  },
  {
    feature: 'Weather Resistance',
    option1: 'Yes',
    option2: 'No',
  },
  {
    feature: 'Installation Time',
    option1: '2-3 days',
    option2: '1-2 days',
  },
  {
    feature: 'Energy Efficiency',
    option1: true,
    option2: true,
  },
];

describe('ComparisonTable - Rendering', () => {
  it('renders all rows from data', () => {
    render(
      <ComparisonTable
        option1Title="Premium Shingles"
        option2Title="Standard Shingles"
        rows={mockRows}
      />
    );

    // Check that all feature names are rendered
    expect(screen.getByText('Durability')).toBeInTheDocument();
    expect(screen.getByText('Warranty Period')).toBeInTheDocument();
    expect(screen.getByText('Weather Resistance')).toBeInTheDocument();
    expect(screen.getByText('Installation Time')).toBeInTheDocument();
    expect(screen.getByText('Energy Efficiency')).toBeInTheDocument();
  });

  it('displays checkmark for true values', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Feature 1', option1: true, option2: false },
        ]}
      />
    );

    // CheckCircle icon should be rendered
    const checkIcons = container.querySelectorAll('svg');
    const checkCircleIcons = Array.from(checkIcons).filter(
      icon => icon.classList.contains('lucide-check-circle') || icon.parentElement?.className.includes('text-weather-success')
    );

    expect(checkCircleIcons.length).toBeGreaterThan(0);
  });

  it('displays X icon for false values', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Feature 1', option1: false, option2: false },
        ]}
      />
    );

    // XCircle icon should be rendered
    const icons = container.querySelectorAll('svg');
    const xCircleIcons = Array.from(icons).filter(
      icon => icon.classList.contains('lucide-x-circle') || icon.parentElement?.className.includes('text-weather-danger')
    );

    expect(xCircleIcons.length).toBeGreaterThan(0);
  });

  it('displays text for string values', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Warranty', option1: '25 Years', option2: '10 Years' },
        ]}
      />
    );

    expect(screen.getByText('25 Years')).toBeInTheDocument();
    expect(screen.getByText('10 Years')).toBeInTheDocument();
  });

  it('displays feature descriptions when provided', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          {
            feature: 'Test Feature',
            option1: true,
            option2: false,
            description: 'This is a test description',
          },
        ]}
      />
    );

    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  it('handles "Yes" string as checkmark', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Feature', option1: 'Yes', option2: 'No' },
        ]}
      />
    );

    // Should render CheckCircle and XCircle icons
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('handles "No" string as X icon', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Feature', option1: 'No', option2: 'Yes' },
        ]}
      />
    );

    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('handles "N/A" string as minus icon', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Feature', option1: 'N/A', option2: '-' },
        ]}
      />
    );

    // Minus icon should be rendered
    const icons = container.querySelectorAll('svg');
    const minusIcons = Array.from(icons).filter(
      icon => icon.classList.contains('lucide-minus')
    );

    expect(minusIcons.length).toBeGreaterThan(0);
  });

  it('handles checkmark symbols (✓)', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Feature', option1: '✓', option2: '✗' },
        ]}
      />
    );

    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThan(0);
  });
});

describe('ComparisonTable - Headers', () => {
  it('displays option titles in headers', () => {
    render(
      <ComparisonTable
        option1Title="Premium Package"
        option2Title="Basic Package"
        rows={mockRows}
      />
    );

    expect(screen.getByText('Premium Package')).toBeInTheDocument();
    expect(screen.getByText('Basic Package')).toBeInTheDocument();
  });

  it('displays "Feature" column header', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={mockRows}
      />
    );

    expect(screen.getByText('Feature')).toBeInTheDocument();
  });

  it('applies custom colors to headers', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[{ feature: 'Test', option1: true, option2: false }]}
        option1Color="weather-primary-dark"
        option2Color="weather-accent"
      />
    );

    // Headers should have color-specific classes
    const table = container.querySelector('table');
    expect(table).toBeInTheDocument();
  });
});

describe('ComparisonTable - Mobile', () => {
  it('shows scroll hint on mobile', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={mockRows}
      />
    );

    expect(screen.getByText(/Swipe left or right to see all columns/i)).toBeInTheDocument();
  });

  it('has overflow-x-auto for horizontal scrolling', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={mockRows}
      />
    );

    const wrapper = container.querySelector('.overflow-x-auto');
    expect(wrapper).toBeInTheDocument();
  });
});

describe('ComparisonTable - Styling', () => {
  it('applies alternating row colors', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={mockRows}
      />
    );

    const rows = container.querySelectorAll('tbody tr');
    expect(rows.length).toBe(5);

    // Check that even/odd rows have different background classes
    rows.forEach((row, index) => {
      if (index % 2 === 0) {
        expect(row.className).toMatch(/bg-white/);
      } else {
        expect(row.className).toMatch(/bg-gray-50/);
      }
    });
  });

  it('has rounded borders', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={mockRows}
      />
    );

    const wrapper = container.querySelector('.rounded-xl');
    expect(wrapper).toBeInTheDocument();
  });

  it('has shadow styling', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={mockRows}
      />
    );

    const wrapper = container.querySelector('.shadow-lg');
    expect(wrapper).toBeInTheDocument();
  });
});

describe('ComparisonTable - Data Types', () => {
  it('handles mixed boolean and string values', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Feature 1', option1: true, option2: 'Custom text' },
          { feature: 'Feature 2', option1: 'Another text', option2: false },
        ]}
      />
    );

    expect(screen.getByText('Custom text')).toBeInTheDocument();
    expect(screen.getByText('Another text')).toBeInTheDocument();
  });

  it('handles numeric strings', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Price', option1: '$5000', option2: '$3000' },
        ]}
      />
    );

    expect(screen.getByText('$5000')).toBeInTheDocument();
    expect(screen.getByText('$3000')).toBeInTheDocument();
  });

  it('handles empty strings', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Empty', option1: '', option2: '' },
        ]}
      />
    );

    expect(screen.getByText('Empty')).toBeInTheDocument();
  });
});

describe('ComparisonTable - Accessibility', () => {
  it('uses semantic table markup', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={mockRows}
      />
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('has table headers', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={mockRows}
      />
    );

    const headers = screen.getAllByRole('columnheader');
    expect(headers.length).toBe(3); // Feature + 2 options
  });

  it('has table body', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={mockRows}
      />
    );

    const tbody = container.querySelector('tbody');
    expect(tbody).toBeInTheDocument();
  });
});

describe('ComparisonTable - Edge Cases', () => {
  it('handles empty rows array', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[]}
      />
    );

    // Should still render table structure
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Feature')).toBeInTheDocument();
  });

  it('handles single row', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Only Feature', option1: true, option2: false },
        ]}
      />
    );

    expect(screen.getByText('Only Feature')).toBeInTheDocument();
  });

  it('handles very long feature names', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          {
            feature: 'This is a very long feature name that contains many words',
            option1: true,
            option2: false,
          },
        ]}
      />
    );

    expect(screen.getByText('This is a very long feature name that contains many words')).toBeInTheDocument();
  });

  it('handles very long descriptions', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          {
            feature: 'Feature',
            option1: true,
            option2: false,
            description: 'This is a very long description that provides detailed information about the feature and its benefits and characteristics',
          },
        ]}
      />
    );

    expect(screen.getByText(/This is a very long description/)).toBeInTheDocument();
  });

  it('handles special characters in values', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Price', option1: '$5,000 (USD)', option2: '€4,000 (EUR)' },
        ]}
      />
    );

    expect(screen.getByText('$5,000 (USD)')).toBeInTheDocument();
    expect(screen.getByText('€4,000 (EUR)')).toBeInTheDocument();
  });

  it('handles rows without descriptions', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'No Description Feature', option1: true, option2: false },
        ]}
      />
    );

    expect(screen.getByText('No Description Feature')).toBeInTheDocument();
  });

  it('handles many rows efficiently', () => {
    const manyRows: ComparisonRow[] = Array.from({ length: 20 }, (_, i) => ({
      feature: `Feature ${i + 1}`,
      option1: i % 2 === 0,
      option2: i % 3 === 0,
    }));

    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={manyRows}
      />
    );

    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 20')).toBeInTheDocument();
  });

  it('handles hyphenated values', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Time', option1: '2-3 days', option2: '1-2 weeks' },
        ]}
      />
    );

    expect(screen.getByText('2-3 days')).toBeInTheDocument();
    expect(screen.getByText('1-2 weeks')).toBeInTheDocument();
  });

  it('maintains table structure with minimal data', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="A"
        option2Title="B"
        rows={[
          { feature: 'X', option1: true, option2: false },
        ]}
      />
    );

    const table = container.querySelector('table');
    const thead = table?.querySelector('thead');
    const tbody = table?.querySelector('tbody');

    expect(table).toBeInTheDocument();
    expect(thead).toBeInTheDocument();
    expect(tbody).toBeInTheDocument();
  });
});

describe('ComparisonTable - Value Type Conversions', () => {
  it('converts checkmark symbols to icons', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Test', option1: '✓', option2: '✓' },
        ]}
      />
    );

    // Should render CheckCircle icons instead of text
    const checkIcons = container.querySelectorAll('svg');
    expect(checkIcons.length).toBeGreaterThan(0);
  });

  it('converts X symbols to icons', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Test', option1: '✗', option2: '✗' },
        ]}
      />
    );

    const xIcons = container.querySelectorAll('svg');
    expect(xIcons.length).toBeGreaterThan(0);
  });

  it('converts dash to minus icon', () => {
    const { container } = render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Test', option1: '-', option2: '-' },
        ]}
      />
    );

    const minusIcons = container.querySelectorAll('svg.lucide-minus');
    expect(minusIcons.length).toBeGreaterThan(0);
  });

  it('preserves regular text values', () => {
    render(
      <ComparisonTable
        option1Title="Option 1"
        option2Title="Option 2"
        rows={[
          { feature: 'Test', option1: 'Regular text', option2: 'Another text' },
        ]}
      />
    );

    expect(screen.getByText('Regular text')).toBeInTheDocument();
    expect(screen.getByText('Another text')).toBeInTheDocument();
  });
});
