import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import VentilationCalculator from '../../app/components/VentilationCalculator';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    li: ({ children, ...props }: any) => <li {...props}>{children}</li>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

describe('VentilationCalculator - CFM Calculation', () => {
  it('calculates CFM correctly: atticSqFt × 1', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    // Test 1500 sq ft → 1500 CFM
    fireEvent.change(input, { target: { value: '1500' } });
    fireEvent.click(button);

    expect(screen.getByText('1500')).toBeInTheDocument();
    expect(screen.getByText('Required CFM')).toBeInTheDocument();
  });

  it('calculates CFM for 2000 sq ft → 2000 CFM', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '2000' } });
    fireEvent.click(button);

    expect(screen.getByText('2000')).toBeInTheDocument();
  });

  it('calculates CFM for 500 sq ft → 500 CFM', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '500' } });
    fireEvent.click(button);

    expect(screen.getByText('500')).toBeInTheDocument();
  });

  it('rounds up decimal CFM values', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '1234.56' } });
    fireEvent.click(button);

    // Math.ceil(1234.56) = 1235
    expect(screen.getByText('1235')).toBeInTheDocument();
  });

  it('recommends correct number of vents: CFM ÷ 50', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    // Test: 1500 CFM → 30 vents
    fireEvent.change(input, { target: { value: '1500' } });
    fireEvent.click(button);

    const intakeVents = screen.getAllByText('30');
    expect(intakeVents.length).toBeGreaterThan(0);
    expect(screen.getByText('Intake Vents (min)')).toBeInTheDocument();
    expect(screen.getByText('Exhaust Vents (min)')).toBeInTheDocument();
  });

  it('recommends 40 vents for 2000 CFM', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '2000' } });
    fireEvent.click(button);

    const vents = screen.getAllByText('40');
    expect(vents.length).toBeGreaterThan(0);
  });

  it('calculates equal intake and exhaust vents', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '1000' } });
    fireEvent.click(button);

    // Should have two instances of '20' (one for intake, one for exhaust)
    const vents = screen.getAllByText('20');
    expect(vents.length).toBe(2);
  });
});

describe('VentilationCalculator - Input Validation', () => {
  it('rejects negative numbers', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '-100' } });
    fireEvent.click(button);

    expect(screen.getByRole('alert')).toHaveTextContent(/Please enter a valid square footage greater than 0/i);
    expect(screen.queryByText('Required CFM')).not.toBeInTheDocument();
  });

  it('rejects zero', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '0' } });
    fireEvent.click(button);

    expect(screen.getByRole('alert')).toHaveTextContent(/Please enter a valid square footage greater than 0/i);
  });

  it('rejects non-numeric input by preventing entry', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage') as HTMLInputElement;

    // Try to enter non-numeric characters
    fireEvent.change(input, { target: { value: 'abc' } });

    // Input should remain empty (component blocks invalid input)
    expect(input.value).toBe('');
  });

  it('warns for attics over 10,000 sq ft', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '15000' } });
    fireEvent.click(button);

    expect(screen.getByRole('alert')).toHaveTextContent(/For attics larger than 10,000 sq ft, please contact us for a custom assessment/i);
    expect(screen.queryByText('Required CFM')).not.toBeInTheDocument();
  });

  it('accepts values at the 10,000 sq ft boundary', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '10000' } });
    fireEvent.click(button);

    expect(screen.getByText('10000')).toBeInTheDocument();
    expect(screen.getByText('Required CFM')).toBeInTheDocument();
  });

  it('accepts decimal values', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '1234.56' } });

    expect(input.value).toBe('1234.56');
  });

  it('allows decimal point input', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '123.' } });

    expect(input.value).toBe('123.');
  });

  it('blocks invalid characters but allows numbers', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage') as HTMLInputElement;

    // Try to enter mix of valid and invalid
    fireEvent.change(input, { target: { value: '123abc' } });

    // Only numbers should remain
    expect(input.value).toBe('');
  });
});

describe('VentilationCalculator - User Interaction', () => {
  it('shows results after clicking Calculate', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    // Initially no results
    expect(screen.queryByText('Required CFM')).not.toBeInTheDocument();

    // Enter value and calculate
    fireEvent.change(input, { target: { value: '1500' } });
    fireEvent.click(button);

    // Results should appear
    expect(screen.getByText('Required CFM')).toBeInTheDocument();
    expect(screen.getByText('Intake Vents (min)')).toBeInTheDocument();
    expect(screen.getByText('Exhaust Vents (min)')).toBeInTheDocument();
  });

  it('clears error when valid input entered', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    // Create error with invalid input
    fireEvent.change(input, { target: { value: '-100' } });
    fireEvent.click(button);

    expect(screen.getByRole('alert')).toBeInTheDocument();

    // Clear with valid input
    fireEvent.change(input, { target: { value: '1500' } });

    // Error should be cleared immediately on input change
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('clears previous results when new input entered', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    // Calculate first result
    fireEvent.change(input, { target: { value: '1500' } });
    fireEvent.click(button);
    expect(screen.getByText('1500')).toBeInTheDocument();

    // Enter new value
    fireEvent.change(input, { target: { value: '2000' } });

    // Previous results should be cleared
    expect(screen.queryByText('Required CFM')).not.toBeInTheDocument();
  });

  it('displays recommendations with results', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '1500' } });
    fireEvent.click(button);

    expect(screen.getByText('Professional Recommendations')).toBeInTheDocument();
  });

  it('shows small attic recommendations for < 1000 sq ft', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '800' } });
    fireEvent.click(button);

    expect(screen.getByText(/Small attic: Consider ridge vent \+ soffit vents combination/i)).toBeInTheDocument();
  });

  it('shows medium attic recommendations for 1000-2499 sq ft', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '1500' } });
    fireEvent.click(button);

    expect(screen.getByText(/Medium attic: Ridge vent \+ soffit vents recommended/i)).toBeInTheDocument();
  });

  it('shows large attic recommendations for >= 2500 sq ft', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '3000' } });
    fireEvent.click(button);

    expect(screen.getByText(/Large attic: Professional assessment recommended/i)).toBeInTheDocument();
  });

  it('always shows universal recommendations', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '1500' } });
    fireEvent.click(button);

    expect(screen.getByText(/Never block soffit vents with insulation/i)).toBeInTheDocument();
    expect(screen.getByText(/Install baffles to maintain airflow from soffits to ridge/i)).toBeInTheDocument();
  });

  it('displays phone number CTA with results', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '1500' } });
    fireEvent.click(button);

    const phoneLink = screen.getByRole('link', { name: /Call \(843\) 877-5539 for Free Consultation/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+18438775539');
  });

  it('submits form on Enter key press', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const form = input.closest('form');

    fireEvent.change(input, { target: { value: '1500' } });
    fireEvent.submit(form!);

    expect(screen.getByText('Required CFM')).toBeInTheDocument();
  });

  it('handles empty input submission', () => {
    render(<VentilationCalculator />);

    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    // Click without entering value
    fireEvent.click(button);

    expect(screen.getByRole('alert')).toHaveTextContent(/Please enter a valid square footage greater than 0/i);
  });
});

describe('VentilationCalculator - Accessibility', () => {
  it('has proper ARIA labels', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    expect(input).toHaveAttribute('aria-label', 'Attic square footage');
  });

  it('links error message with aria-describedby', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage') as HTMLInputElement;
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '-100' } });
    fireEvent.click(button);

    expect(input).toHaveAttribute('aria-describedby', 'error-message');
    expect(screen.getByRole('alert')).toHaveAttribute('id', 'error-message');
  });

  it('has role="alert" for error messages', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '0' } });
    fireEvent.click(button);

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});

describe('VentilationCalculator - Edge Cases', () => {
  it('handles very small attic (100 sq ft)', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '100' } });
    fireEvent.click(button);

    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText(/Small attic/i)).toBeInTheDocument();
  });

  it('handles exactly 1000 sq ft boundary', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '1000' } });
    fireEvent.click(button);

    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText(/Medium attic/i)).toBeInTheDocument();
  });

  it('handles exactly 2500 sq ft boundary', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage');
    const button = screen.getByRole('button', { name: /Calculate Ventilation Requirements/i });

    fireEvent.change(input, { target: { value: '2500' } });
    fireEvent.click(button);

    expect(screen.getByText('2500')).toBeInTheDocument();
    expect(screen.getByText(/Large attic/i)).toBeInTheDocument();
  });

  it('handles multiple decimal points gracefully', () => {
    render(<VentilationCalculator />);

    const input = screen.getByLabelText('Attic square footage') as HTMLInputElement;

    // Try to enter multiple decimal points
    fireEvent.change(input, { target: { value: '12.34.56' } });

    // Component should handle this (may accept first decimal only)
    expect(input.value).toBe('');
  });
});
