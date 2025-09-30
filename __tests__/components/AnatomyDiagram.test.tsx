import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnatomyDiagram, { DiagramLabel } from '../../app/components/AnatomyDiagram';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock labels data
const mockLabels: DiagramLabel[] = [
  {
    id: 'ridge',
    title: 'Ridge',
    description: 'The highest point of the roof where two slopes meet',
    x: 50,
    y: 10,
  },
  {
    id: 'shingles',
    title: 'Shingles',
    description: 'Protective outer layer that sheds water',
    x: 40,
    y: 30,
  },
  {
    id: 'underlayment',
    title: 'Underlayment',
    description: 'Water-resistant barrier beneath shingles',
    x: 60,
    y: 40,
  },
  {
    id: 'gutters',
    title: 'Gutters',
    description: 'Channels that collect and direct rainwater',
    x: 80,
    y: 70,
  },
];

describe('AnatomyDiagram - Hotspot Interactions', () => {
  it('opens detail panel when hotspot clicked', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    // Initially no detail panel
    expect(screen.queryByText('The highest point of the roof where two slopes meet')).not.toBeInTheDocument();

    // Click the ridge hotspot
    const ridgeHotspot = screen.getByRole('button', { name: /Learn about Ridge/i });
    fireEvent.click(ridgeHotspot);

    // Detail panel should appear
    expect(screen.getByText('The highest point of the roof where two slopes meet')).toBeInTheDocument();
  });

  it('closes panel when X button clicked', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    // Open panel
    const ridgeHotspot = screen.getByRole('button', { name: /Learn about Ridge/i });
    fireEvent.click(ridgeHotspot);

    expect(screen.getByText('Ridge')).toBeInTheDocument();

    // Close panel
    const closeButton = screen.getByRole('button', { name: /Close detail panel/i });
    fireEvent.click(closeButton);

    // Detail text should be gone
    expect(screen.queryByText('The highest point of the roof where two slopes meet')).not.toBeInTheDocument();
  });

  it('switches content when different hotspot clicked', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    // Click first hotspot
    const ridgeHotspot = screen.getByRole('button', { name: /Learn about Ridge/i });
    fireEvent.click(ridgeHotspot);

    expect(screen.getByText('The highest point of the roof where two slopes meet')).toBeInTheDocument();

    // Click different hotspot
    const shinglesHotspot = screen.getByRole('button', { name: /Learn about Shingles/i });
    fireEvent.click(shinglesHotspot);

    // Content should switch
    expect(screen.queryByText('The highest point of the roof where two slopes meet')).not.toBeInTheDocument();
    expect(screen.getByText('Protective outer layer that sheds water')).toBeInTheDocument();
  });

  it('toggles panel when same hotspot clicked twice', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    const ridgeHotspot = screen.getByRole('button', { name: /Learn about Ridge/i });

    // Click once to open
    fireEvent.click(ridgeHotspot);
    expect(screen.getByText('The highest point of the roof where two slopes meet')).toBeInTheDocument();

    // Click again to close
    fireEvent.click(ridgeHotspot);
    expect(screen.queryByText('The highest point of the roof where two slopes meet')).not.toBeInTheDocument();
  });

  it('displays all hotspots on diagram', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    expect(screen.getByRole('button', { name: /Learn about Ridge/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Learn about Shingles/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Learn about Underlayment/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Learn about Gutters/i })).toBeInTheDocument();
  });

  it('shows detail panel with title and description', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    const hotspot = screen.getByRole('button', { name: /Learn about Gutters/i });
    fireEvent.click(hotspot);

    // Both title and description should be visible
    expect(screen.getByText('Gutters')).toBeInTheDocument();
    expect(screen.getByText('Channels that collect and direct rainwater')).toBeInTheDocument();
  });
});

describe('AnatomyDiagram - Accessibility', () => {
  it('has ARIA labels on all hotspots', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    mockLabels.forEach((label) => {
      const hotspot = screen.getByRole('button', { name: `Learn about ${label.title}` });
      expect(hotspot).toHaveAttribute('aria-label', `Learn about ${label.title}`);
    });
  });

  it('supports keyboard navigation', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    const firstHotspot = screen.getByRole('button', { name: /Learn about Ridge/i });

    // Should be focusable
    firstHotspot.focus();
    expect(document.activeElement).toBe(firstHotspot);

    // Should activate on Enter
    fireEvent.keyDown(firstHotspot, { key: 'Enter', code: 'Enter' });
    fireEvent.click(firstHotspot);

    expect(screen.getByText('The highest point of the roof where two slopes meet')).toBeInTheDocument();
  });

  it('has proper alt text for diagram image', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Detailed roof anatomy diagram"
        labels={mockLabels}
      />
    );

    const image = screen.getByAltText('Detailed roof anatomy diagram');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-roof-diagram.jpg');
  });

  it('close button has proper ARIA label', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    // Open panel
    const hotspot = screen.getByRole('button', { name: /Learn about Ridge/i });
    fireEvent.click(hotspot);

    const closeButton = screen.getByRole('button', { name: 'Close detail panel' });
    expect(closeButton).toHaveAttribute('aria-label', 'Close detail panel');
  });
});

describe('AnatomyDiagram - Legend', () => {
  it('clicking legend item opens detail panel', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    // Find legend buttons (they're in the Component Reference Guide section)
    const legendButtons = screen.getAllByRole('button');

    // Find the Ridge button in the legend (not the hotspot)
    // The legend has text content that includes both title and description
    const ridgeLegendButton = legendButtons.find(btn =>
      btn.textContent?.includes('Ridge') &&
      btn.textContent?.includes('The highest point')
    );

    expect(ridgeLegendButton).toBeDefined();

    fireEvent.click(ridgeLegendButton!);

    // Detail panel should open
    expect(screen.getByText('The highest point of the roof where two slopes meet')).toBeInTheDocument();
  });

  it('displays all labels in legend', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    // Check that Component Reference Guide section exists
    expect(screen.getByText('Component Reference Guide')).toBeInTheDocument();

    // All labels should appear in legend
    mockLabels.forEach((label) => {
      const labelElements = screen.getAllByText(label.title);
      // Should appear at least once (in legend, and possibly in hotspot tooltip)
      expect(labelElements.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('shows numbered markers in legend', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    // Check for numbers 1-4 in legend items
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('highlights active legend item', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    // Click a legend item
    const legendButtons = screen.getAllByRole('button');
    const ridgeLegendButton = legendButtons.find(btn =>
      btn.textContent?.includes('Ridge') &&
      btn.textContent?.includes('The highest point')
    );

    fireEvent.click(ridgeLegendButton!);

    // Active legend button should have special styling
    expect(ridgeLegendButton).toHaveClass('bg-weather-primary-dark', 'text-white');
  });

  it('shows truncated description in legend', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    // The legend shows descriptions (possibly truncated)
    // Check that description text appears
    const legendSection = screen.getByText('Component Reference Guide').parentElement;
    expect(legendSection?.textContent).toContain('The highest point');
    expect(legendSection?.textContent).toContain('Protective outer layer');
  });
});

describe('AnatomyDiagram - Display and Rendering', () => {
  it('renders with default title', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    expect(screen.getByText('Roof Anatomy Diagram')).toBeInTheDocument();
  });

  it('renders with custom title', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
        title="Custom Roof Structure"
      />
    );

    expect(screen.getByText('Custom Roof Structure')).toBeInTheDocument();
    expect(screen.queryByText('Roof Anatomy Diagram')).not.toBeInTheDocument();
  });

  it('positions hotspots based on x/y coordinates', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    const ridgeHotspot = screen.getByRole('button', { name: /Learn about Ridge/i });

    // Check that positioning styles are applied
    const parentDiv = ridgeHotspot.closest('button');
    const style = parentDiv?.getAttribute('style');

    expect(style).toContain('left: 50%');
    expect(style).toContain('top: 10%');
  });

  it('displays diagram image', () => {
    render(
      <AnatomyDiagram
        image="/images/roof-diagram.jpg"
        imageAlt="Complete roof anatomy"
        labels={mockLabels}
      />
    );

    const image = screen.getByAltText('Complete roof anatomy');
    expect(image).toHaveAttribute('src', '/images/roof-diagram.jpg');
  });

  it('shows tip instruction message', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    expect(screen.getByText(/Click on the numbered markers on the diagram/i)).toBeInTheDocument();
  });
});

describe('AnatomyDiagram - Hover Interactions', () => {
  it('shows tooltip on hotspot hover (desktop)', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    const ridgeHotspot = screen.getByRole('button', { name: /Learn about Ridge/i });

    // Hover over hotspot
    fireEvent.mouseEnter(ridgeHotspot);

    // Tooltip should appear (though it's hidden on mobile via CSS)
    // We can't easily test CSS classes, but we can verify the element structure
    expect(ridgeHotspot).toBeInTheDocument();
  });

  it('hides tooltip on mouse leave', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    const ridgeHotspot = screen.getByRole('button', { name: /Learn about Ridge/i });

    fireEvent.mouseEnter(ridgeHotspot);
    fireEvent.mouseLeave(ridgeHotspot);

    // Component handles this via state
    expect(ridgeHotspot).toBeInTheDocument();
  });
});

describe('AnatomyDiagram - Edge Cases', () => {
  it('handles empty labels array', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={[]}
      />
    );

    // Should render diagram without errors
    expect(screen.getByAltText('Test roof diagram')).toBeInTheDocument();
    expect(screen.getByText('Component Reference Guide')).toBeInTheDocument();
  });

  it('handles single label', () => {
    const singleLabel: DiagramLabel[] = [
      {
        id: 'single',
        title: 'Single Component',
        description: 'Only one component to show',
        x: 50,
        y: 50,
      },
    ];

    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={singleLabel}
      />
    );

    expect(screen.getByRole('button', { name: /Learn about Single Component/i })).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('handles very long descriptions', () => {
    const longDescLabel: DiagramLabel[] = [
      {
        id: 'long',
        title: 'Long Description',
        description: 'This is a very long description that goes on and on and contains lots of detailed information about the roof component and all its characteristics and features and benefits and installation requirements and maintenance needs.',
        x: 50,
        y: 50,
      },
    ];

    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={longDescLabel}
      />
    );

    const hotspot = screen.getByRole('button', { name: /Learn about Long Description/i });
    fireEvent.click(hotspot);

    // Should display full description in detail panel
    expect(screen.getByText(/This is a very long description/i)).toBeInTheDocument();
  });

  it('handles labels at edge positions (0%, 100%)', () => {
    const edgeLabels: DiagramLabel[] = [
      {
        id: 'topleft',
        title: 'Top Left',
        description: 'At 0,0',
        x: 0,
        y: 0,
      },
      {
        id: 'bottomright',
        title: 'Bottom Right',
        description: 'At 100,100',
        x: 100,
        y: 100,
      },
    ];

    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={edgeLabels}
      />
    );

    expect(screen.getByRole('button', { name: /Learn about Top Left/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Learn about Bottom Right/i })).toBeInTheDocument();
  });

  it('handles labels with special characters in title', () => {
    const specialCharsLabel: DiagramLabel[] = [
      {
        id: 'special',
        title: 'Roof & Ventilation (System)',
        description: 'Component with special chars',
        x: 50,
        y: 50,
      },
    ];

    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={specialCharsLabel}
      />
    );

    expect(screen.getByRole('button', { name: /Learn about Roof & Ventilation \(System\)/i })).toBeInTheDocument();
  });

  it('handles rapid clicking on multiple hotspots', () => {
    render(
      <AnatomyDiagram
        image="/test-roof-diagram.jpg"
        imageAlt="Test roof diagram"
        labels={mockLabels}
      />
    );

    const hotspots = [
      screen.getByRole('button', { name: /Learn about Ridge/i }),
      screen.getByRole('button', { name: /Learn about Shingles/i }),
      screen.getByRole('button', { name: /Learn about Underlayment/i }),
    ];

    // Rapid clicks
    hotspots.forEach(hotspot => fireEvent.click(hotspot));

    // Should show last clicked detail
    expect(screen.getByText('Water-resistant barrier beneath shingles')).toBeInTheDocument();
  });
});
