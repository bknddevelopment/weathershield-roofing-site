import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

// Mock components
jest.mock('@/app/components/HeroSection', () => {
  return function HeroSection() {
    return (
      <section data-testid="hero-section">
        <h1>Expert Roofing Services in Conway, SC</h1>
        <p>Professional roofing contractors serving South Carolina</p>
        <a href="tel:843-815-0516">Call Now</a>
      </section>
    )
  }
})

jest.mock('@/app/components/ServiceCards', () => {
  return function ServiceCards() {
    return (
      <section data-testid="service-cards">
        <h2>Our Services</h2>
        <div>Residential Roofing</div>
        <div>Commercial Roofing</div>
        <div>Emergency Services</div>
      </section>
    )
  }
})

jest.mock('@/app/components/AboutSection', () => {
  return function AboutSection() {
    return (
      <section data-testid="about-section">
        <h2>About WeatherShield Roofing</h2>
        <p>Your trusted local roofing experts</p>
      </section>
    )
  }
})

jest.mock('@/app/components/TestimonialsSection', () => {
  return function TestimonialsSection() {
    return (
      <section data-testid="testimonials-section">
        <h2>Customer Reviews</h2>
        <div>5-star rated service</div>
      </section>
    )
  }
})

jest.mock('@/app/components/FAQSection', () => {
  return function FAQSection() {
    return (
      <section data-testid="faq-section">
        <h2>Frequently Asked Questions</h2>
      </section>
    )
  }
})

jest.mock('@/app/components/CTASection', () => {
  return function CTASection() {
    return (
      <section data-testid="cta-section">
        <h2>Get Your Free Estimate</h2>
        <button>Contact Us</button>
      </section>
    )
  }
})

jest.mock('@/app/components/BlogsSection', () => {
  return function BlogsSection() {
    return (
      <section data-testid="blogs-section">
        <h2>Latest Blog Posts</h2>
      </section>
    )
  }
})

jest.mock('@/app/components/TrustIndicators', () => {
  return function TrustIndicators() {
    return (
      <div data-testid="trust-indicators">
        <div>Licensed & Insured</div>
        <div>GAF Certified</div>
      </div>
    )
  }
})

jest.mock('@/app/components/GAFCertification', () => ({
  GAFTrustBar: function GAFTrustBar() {
    return <div data-testid="gaf-trust-bar">GAF Preferred Contractor</div>
  },
  GAFCertificationSection: function GAFCertificationSection() {
    return <div data-testid="gaf-certification">GAF Certification Details</div>
  }
}))

jest.mock('@/app/components/FAQSchema', () => {
  return function FAQSchema() {
    return null
  }
})

jest.mock('@/app/components/StructuredData', () => {
  return function StructuredData() {
    return null
  }
})

describe('Homepage', () => {
  it('renders without crashing', () => {
    render(<HomePage />)
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
  })

  it('displays the main heading', () => {
    render(<HomePage />)
    expect(screen.getByText('Expert Roofing Services in Conway, SC')).toBeInTheDocument()
  })

  it('displays the phone number link', () => {
    render(<HomePage />)
    const phoneLink = screen.getByText('Call Now')
    expect(phoneLink).toBeInTheDocument()
    expect(phoneLink).toHaveAttribute('href', 'tel:843-815-0516')
  })

  it('renders all main sections', () => {
    render(<HomePage />)
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('service-cards')).toBeInTheDocument()
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials-section')).toBeInTheDocument()
    expect(screen.getByTestId('faq-section')).toBeInTheDocument()
    expect(screen.getByTestId('blogs-section')).toBeInTheDocument()
    expect(screen.getByTestId('trust-indicators')).toBeInTheDocument()
    expect(screen.getByTestId('gaf-trust-bar')).toBeInTheDocument()
  })

  it('displays service information', () => {
    render(<HomePage />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Residential Roofing')).toBeInTheDocument()
    expect(screen.getByText('Commercial Roofing')).toBeInTheDocument()
    expect(screen.getByText('Emergency Services')).toBeInTheDocument()
  })

  it('shows trust indicators', () => {
    render(<HomePage />)
    expect(screen.getByText('Licensed & Insured')).toBeInTheDocument()
    expect(screen.getByText('GAF Certified')).toBeInTheDocument()
  })

  it('displays GAF certification', () => {
    render(<HomePage />)
    expect(screen.getByTestId('gaf-trust-bar')).toBeInTheDocument()
    expect(screen.getByText('GAF Preferred Contractor')).toBeInTheDocument()
    expect(screen.getByTestId('gaf-certification')).toBeInTheDocument()
  })
})