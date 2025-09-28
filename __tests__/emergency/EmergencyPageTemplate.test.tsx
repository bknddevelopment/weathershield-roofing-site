import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import EmergencyPageTemplate, { EmergencyPageConfig } from '../../app/components/emergency/EmergencyPageTemplate'

// Mock the child components
jest.mock('../../app/components/emergency/EmergencySchema', () => {
  return function MockEmergencySchema() {
    return <div data-testid="emergency-schema" />
  }
})

jest.mock('../../app/components/emergency/EmergencyContactBar', () => {
  return function MockEmergencyContactBar() {
    return <div data-testid="emergency-contact-bar" />
  }
})

jest.mock('../../app/components/emergency/LiveAvailability', () => {
  return function MockLiveAvailability({ message }: { message: string }) {
    return <div data-testid="live-availability">{message}</div>
  }
})

jest.mock('../../app/components/emergency/EmergencyBadge', () => {
  return function MockEmergencyBadge({ text }: { text: string }) {
    return <div data-testid="emergency-badge">{text}</div>
  }
})

jest.mock('../../app/components/emergency/CountdownTimer', () => {
  return function MockCountdownTimer({ targetTime, message }: { targetTime: string; message: string }) {
    return <div data-testid="countdown-timer">{message}: {targetTime}</div>
  }
})

jest.mock('../../app/components/TrustIndicators', () => {
  return function MockTrustIndicators() {
    return <div data-testid="trust-indicators" />
  }
})

describe('EmergencyPageTemplate', () => {
  const mockConfig: EmergencyPageConfig = {
    keyword: 'emergency roof repair',
    title: 'EMERGENCY ROOF REPAIR',
    subtitle: '24/7 Service Available',
    urgencyLevel: 'CRITICAL',
    urgencyColor: 'from-red-500 to-red-600',
    description: 'Emergency roof repair service available 24/7',
    features: ['Fast Response', 'Licensed', 'Insured', 'Guaranteed'],
    responseTime: '2 Hours',
    availabilityMessage: '24/7 Emergency Service',
    ctaText: 'CALL NOW',
    secondaryCta: 'Get Quote',
    schemaType: 'emergency-repair',
    localArea: ['Myrtle Beach', 'Conway', 'Surfside Beach'],
    relatedServices: ['Leak Repair', 'Storm Damage', 'Tarp Installation'],
    trustPoints: [
      { icon: 'Phone', text: '24/7 Available' }
    ],
    faq: [
      {
        question: 'How fast can you respond?',
        answer: 'We respond within 2 hours.'
      }
    ]
  }

  it('renders all required components', () => {
    render(<EmergencyPageTemplate config={mockConfig} />)

    expect(screen.getByTestId('emergency-schema')).toBeInTheDocument()
    expect(screen.getByTestId('emergency-contact-bar')).toBeInTheDocument()
    expect(screen.getByTestId('live-availability')).toBeInTheDocument()
    expect(screen.getByTestId('emergency-badge')).toBeInTheDocument()
    expect(screen.getByTestId('countdown-timer')).toBeInTheDocument()
  })

  it('displays the main title and subtitle', () => {
    render(<EmergencyPageTemplate config={mockConfig} />)

    expect(screen.getByText('EMERGENCY ROOF REPAIR')).toBeInTheDocument()
    expect(screen.getByText('24/7 Service Available')).toBeInTheDocument()
  })

  it('shows all features', () => {
    render(<EmergencyPageTemplate config={mockConfig} />)

    mockConfig.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument()
    })
  })

  it('displays local service areas', () => {
    render(<EmergencyPageTemplate config={mockConfig} />)

    mockConfig.localArea.forEach(area => {
      expect(screen.getByText(area)).toBeInTheDocument()
    })
  })

  it('shows related services', () => {
    render(<EmergencyPageTemplate config={mockConfig} />)

    mockConfig.relatedServices.forEach(service => {
      expect(screen.getByText(service)).toBeInTheDocument()
    })
  })

  it('renders FAQ section when provided', () => {
    render(<EmergencyPageTemplate config={mockConfig} />)

    expect(screen.getByText('How fast can you respond?')).toBeInTheDocument()
    expect(screen.getByText('We respond within 2 hours.')).toBeInTheDocument()
  })

  it('displays phone CTAs with correct numbers', () => {
    render(<EmergencyPageTemplate config={mockConfig} />)

    const phoneLinks = screen.getAllByRole('link', { name: /call/i })
    expect(phoneLinks.length).toBeGreaterThan(0)

    const primaryPhoneLink = phoneLinks.find(link =>
      link.getAttribute('href') === 'tel:+18432938150'
    )
    expect(primaryPhoneLink).toBeInTheDocument()
  })

  it('shows secondary CTA when provided', () => {
    render(<EmergencyPageTemplate config={mockConfig} />)

    expect(screen.getByText('Get Quote')).toBeInTheDocument()
  })

  it('does not render FAQ section when not provided', () => {
    const configWithoutFaq = { ...mockConfig, faq: undefined }
    render(<EmergencyPageTemplate config={configWithoutFaq} />)

    expect(screen.queryByText('Frequently Asked Questions')).not.toBeInTheDocument()
  })

  it('renders child content when provided', () => {
    render(
      <EmergencyPageTemplate config={mockConfig}>
        <div data-testid="custom-content">Custom Content</div>
      </EmergencyPageTemplate>
    )

    expect(screen.getByTestId('custom-content')).toBeInTheDocument()
    expect(screen.getByText('Custom Content')).toBeInTheDocument()
  })

  it('displays urgency badge with correct text', () => {
    render(<EmergencyPageTemplate config={mockConfig} />)

    expect(screen.getByTestId('emergency-badge')).toHaveTextContent('CRITICAL SERVICE AVAILABLE NOW')
  })

  it('shows availability message', () => {
    render(<EmergencyPageTemplate config={mockConfig} />)

    expect(screen.getByText('24/7 Emergency Service')).toBeInTheDocument()
  })
})