import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import EmergencyBadge from '../../app/components/emergency/EmergencyBadge'

describe('EmergencyBadge', () => {
  it('renders with required text prop', () => {
    render(<EmergencyBadge text="EMERGENCY SERVICE" />)

    expect(screen.getByText('EMERGENCY SERVICE')).toBeInTheDocument()
  })

  it('applies correct urgency level styling', () => {
    const { container: criticalContainer } = render(
      <EmergencyBadge text="CRITICAL" urgencyLevel="CRITICAL" />
    )
    expect(criticalContainer.querySelector('.from-red-500')).toBeInTheDocument()

    const { container: urgentContainer } = render(
      <EmergencyBadge text="URGENT" urgencyLevel="URGENT" />
    )
    expect(urgentContainer.querySelector('.from-orange-500')).toBeInTheDocument()

    const { container: immediateContainer } = render(
      <EmergencyBadge text="IMMEDIATE" urgencyLevel="IMMEDIATE" />
    )
    expect(immediateContainer.querySelector('.from-yellow-500')).toBeInTheDocument()

    const { container: emergencyContainer } = render(
      <EmergencyBadge text="EMERGENCY" urgencyLevel="EMERGENCY" />
    )
    expect(emergencyContainer.querySelector('.from-red-500')).toBeInTheDocument()
  })

  it('applies animation when animate is true', () => {
    const { container } = render(
      <EmergencyBadge text="ANIMATED" animate={true} urgencyLevel="CRITICAL" />
    )

    const animatedElement = container.firstChild
    expect(animatedElement?.className).toContain('animate-pulse')
  })

  it('does not apply animation when animate is false', () => {
    const { container } = render(
      <EmergencyBadge text="NOT ANIMATED" animate={false} />
    )

    const element = container.firstChild
    expect(element?.className).not.toContain('animate-')
  })

  it('renders correct size variants', () => {
    const { container: smallContainer } = render(
      <EmergencyBadge text="SMALL" size="sm" />
    )
    expect(smallContainer.querySelector('.px-4.py-2')).toBeInTheDocument()

    const { container: mediumContainer } = render(
      <EmergencyBadge text="MEDIUM" size="md" />
    )
    expect(mediumContainer.querySelector('.px-6.py-3')).toBeInTheDocument()

    const { container: largeContainer } = render(
      <EmergencyBadge text="LARGE" size="lg" />
    )
    expect(largeContainer.querySelector('.px-8.py-4')).toBeInTheDocument()
  })

  it('displays correct icon for each urgency level', () => {
    const { container: critical } = render(
      <EmergencyBadge text="TEST" urgencyLevel="CRITICAL" />
    )
    // Check for AlertTriangle icon (text-red-300)
    expect(critical.querySelector('.text-red-300')).toBeInTheDocument()

    const { container: urgent } = render(
      <EmergencyBadge text="TEST" urgencyLevel="URGENT" />
    )
    // Check for Zap icon (text-yellow-300)
    expect(urgent.querySelector('.text-yellow-300')).toBeInTheDocument()

    const { container: immediate } = render(
      <EmergencyBadge text="TEST" urgencyLevel="IMMEDIATE" />
    )
    // Check for AlertCircle icon (text-orange-300)
    expect(immediate.querySelector('.text-orange-300')).toBeInTheDocument()
  })

  it('applies bounce animation for non-critical urgency', () => {
    const { container } = render(
      <EmergencyBadge text="URGENT" urgencyLevel="URGENT" animate={true} />
    )

    const element = container.firstChild
    expect(element?.className).toContain('animate-bounce')
  })

  it('applies pulse animation for critical urgency', () => {
    const { container } = render(
      <EmergencyBadge text="CRITICAL" urgencyLevel="CRITICAL" animate={true} />
    )

    const element = container.firstChild
    expect(element?.className).toContain('animate-pulse')
  })

  it('renders with shimmer effect overlay', () => {
    const { container } = render(
      <EmergencyBadge text="SHIMMER TEST" />
    )

    // Check for shimmer animation style
    const shimmerElement = container.querySelector('[style*="shimmer"]')
    expect(shimmerElement).toBeInTheDocument()
  })

  it('maintains text uppercase and tracking', () => {
    render(<EmergencyBadge text="lowercase text" />)

    const textElement = screen.getByText('lowercase text')
    expect(textElement.className).toContain('uppercase')
    expect(textElement.className).toContain('tracking-wide')
  })

  it('uses default values when optional props not provided', () => {
    const { container } = render(<EmergencyBadge text="DEFAULT TEST" />)

    // Should have default urgency level (URGENT)
    const element = container.querySelector('.from-orange-500')
    expect(element).toBeInTheDocument()

    // Should have default size (md)
    expect(container.querySelector('.px-6.py-3')).toBeInTheDocument()

    // Should have default animation (true) - bounce for URGENT
    expect(container.firstChild?.className).toContain('animate-bounce')
  })
})