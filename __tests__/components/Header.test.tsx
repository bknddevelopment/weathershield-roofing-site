import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/app/components/Header'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>
  }
})

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Phone: () => <span>Phone Icon</span>,
  Mail: () => <span>Mail Icon</span>,
  Menu: () => <span>Menu Icon</span>,
  X: () => <span>X Icon</span>,
  ChevronDown: () => <span>ChevronDown Icon</span>,
  MapPin: () => <span>MapPin Icon</span>,
  Clock: () => <span>Clock Icon</span>,
  Shield: () => <span>Shield Icon</span>,
  Home: () => <span>Home Icon</span>,
  Wrench: () => <span>Wrench Icon</span>,
  Droplets: () => <span>Droplets Icon</span>,
  Wind: () => <span>Wind Icon</span>,
  Star: () => <span>Star Icon</span>,
  Award: () => <span>Award Icon</span>,
  ArrowRight: () => <span>ArrowRight Icon</span>,
  AlertCircle: () => <span>AlertCircle Icon</span>,
  Calendar: () => <span>Calendar Icon</span>,
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// Mock StaticImage component
jest.mock('@/app/components/StaticImage', () => {
  return function StaticImage(props: any) {
    // Remove priority prop to avoid React warnings
    const { priority, ...imgProps } = props
    return <img {...imgProps} />
  }
})

// Mock GAFCertification component
jest.mock('@/app/components/GAFCertification', () => ({
  GAFBadge: function GAFBadge() {
    return <div>GAF Preferred</div>
  }
}))

// Mock booking config
jest.mock('@/app/config/booking', () => ({
  getBookingLinkProps: () => ({
    href: '/quote',
    target: '_self',
  })
}))

describe('Header Component', () => {
  beforeEach(() => {
    // Reset window scroll position before each test
    window.scrollY = 0
  })

  it('renders the header with logo', () => {
    render(<Header />)
    const logo = screen.getByAltText('Weather Shield Roofing - Leading Roofing Companies Myrtle Beach | WeatherShield Roofing Logo')
    expect(logo).toBeInTheDocument()
  })

  it('displays the home link with logo', () => {
    render(<Header />)
    // Check for home links
    const homeLinks = screen.getAllByRole('link', { name: /home/i })
    expect(homeLinks.length).toBeGreaterThan(0)
    expect(homeLinks[0]).toHaveAttribute('href', '/')
  })

  it('shows the phone number', () => {
    render(<Header />)
    const phoneLink = screen.getByText('(843) 877-5539')
    expect(phoneLink).toBeInTheDocument()
    expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:+18438775539')
  })

  it('shows a quote button', () => {
    render(<Header />)
    const quoteButtons = screen.getAllByText('Request Quote')
    expect(quoteButtons.length).toBeGreaterThan(0)
    expect(quoteButtons[0].closest('a')).toHaveAttribute('href', '/quote')
  })

  it('renders navigation menu items', () => {
    render(<Header />)
    const navItems = [
      'Home',
      'About',
      'Services',
      'Gallery',
      'Reviews',
      'Blog'
    ]

    navItems.forEach(item => {
      const elements = screen.getAllByText(item)
      expect(elements.length).toBeGreaterThan(0)
    })
  })

  it('has a mobile menu toggle button', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })

    // Initially menu should show Menu icon
    expect(screen.getByText('Menu Icon')).toBeInTheDocument()

    // Click to open
    fireEvent.click(menuButton)

    // After click, button should change to close menu
    const closeButton = screen.getByRole('button', { name: /close menu/i })
    expect(closeButton).toBeInTheDocument()
    expect(screen.getByText('X Icon')).toBeInTheDocument()
  })

  it('has proper navigation links', () => {
    render(<Header />)

    const links = [
      { text: 'Home', href: '/' },
      { text: 'About', href: '/about' },
      { text: 'Gallery', href: '/gallery' },
      { text: 'Reviews', href: '/reviews' },
      { text: 'Blog', href: '/blog' }
    ]

    links.forEach(link => {
      const elements = screen.getAllByText(link.text)
      const anchorElement = elements.find(el => el.closest('a')?.getAttribute('href') === link.href)
      expect(anchorElement).toBeTruthy()
    })
  })

  it('displays GAF certification badge', () => {
    render(<Header />)
    expect(screen.getByText('GAF Preferred')).toBeInTheDocument()
  })

  it('has accessible navigation structure', () => {
    const { container } = render(<Header />)
    const nav = container.querySelector('nav')
    expect(nav).toBeInTheDocument()
  })
})