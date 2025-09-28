import React from 'react'
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import EmergencyContactBar from '../../app/components/emergency/EmergencyContactBar'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    clear: () => {
      store = {}
    }
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

// Mock timers
beforeEach(() => {
  jest.useFakeTimers()
  localStorage.clear()
})

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

describe('EmergencyContactBar', () => {
  it('initially renders nothing', () => {
    const { container } = render(<EmergencyContactBar />)

    expect(container.firstChild).toBeNull()
  })

  it('appears after 2 seconds', async () => {
    render(<EmergencyContactBar />)

    expect(screen.queryByText('24/7 Emergency Line')).not.toBeInTheDocument()

    // Advance timers by 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      expect(screen.getByText('24/7 Emergency Line')).toBeInTheDocument()
    })
  })

  it('displays phone number with correct link', async () => {
    render(<EmergencyContactBar />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      const phoneLink = screen.getByText('(843) 293-8150')
      expect(phoneLink).toBeInTheDocument()
      expect(phoneLink).toHaveAttribute('href', 'tel:+18432938150')
    })
  })

  it('shows Call Now and Get Quote buttons on desktop', async () => {
    render(<EmergencyContactBar />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      expect(screen.getByText('Call Now')).toBeInTheDocument()
      expect(screen.getByText('Get Quote')).toBeInTheDocument()
    })
  })

  it('displays live status indicators', async () => {
    render(<EmergencyContactBar />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      expect(screen.getByText('Crews Available Now')).toBeInTheDocument()
      expect(screen.getByText('~47min response')).toBeInTheDocument()
    })
  })

  it('remembers minimized state in localStorage', async () => {
    localStorage.setItem('emergencyBarMinimized', 'true')

    render(<EmergencyContactBar />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      const container = screen.getByText('24/7 Emergency Line').closest('div')
      // When minimized, it should have translate-x transform
      expect(container?.parentElement?.className).toContain('translate-x-[calc(100%-3rem)]')
    })
  })

  it('toggles minimize state when button clicked', async () => {
    render(<EmergencyContactBar />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      const toggleButton = screen.getByLabelText(/hide emergency contact/i)
      expect(toggleButton).toBeInTheDocument()
    })

    // Click to minimize
    const toggleButton = screen.getByLabelText(/hide emergency contact/i)
    fireEvent.click(toggleButton)

    // Check localStorage was updated
    expect(localStorage.getItem('emergencyBarMinimized')).toBe('true')

    // Button should now show different aria-label
    expect(screen.getByLabelText(/show emergency contact/i)).toBeInTheDocument()
  })

  it('restores from minimized state', async () => {
    render(<EmergencyContactBar />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    // Minimize first
    const hideButton = await screen.findByLabelText(/hide emergency contact/i)
    fireEvent.click(hideButton)

    // Then restore
    const showButton = screen.getByLabelText(/show emergency contact/i)
    fireEvent.click(showButton)

    expect(localStorage.getItem('emergencyBarMinimized')).toBe('false')
  })

  it('shows mobile TAP TO CALL button', async () => {
    render(<EmergencyContactBar />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      const tapButton = screen.getByText('TAP TO CALL')
      expect(tapButton).toBeInTheDocument()
      expect(tapButton.closest('a')).toHaveAttribute('href', 'tel:+18432938150')
    })
  })

  it('includes SMS link on mobile', async () => {
    render(<EmergencyContactBar />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      const smsLink = screen.getByLabelText('Text emergency service')
      expect(smsLink).toBeInTheDocument()
      expect(smsLink).toHaveAttribute('href', 'sms:+18432938150')
    })
  })

  it('displays live support status on mobile', async () => {
    render(<EmergencyContactBar />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      expect(screen.getByText('Live Support')).toBeInTheDocument()
      expect(screen.getByText('Fast Response')).toBeInTheDocument()
    })
  })

  it('applies correct animation classes', async () => {
    render(<EmergencyContactBar />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      // Check for pulse animation on phone icon
      const pulsingElements = document.querySelectorAll('.animate-pulse')
      expect(pulsingElements.length).toBeGreaterThan(0)
    })
  })

  it('maintains proper z-index for overlay', async () => {
    render(<EmergencyContactBar />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      const desktopBar = document.querySelector('.fixed.top-20')
      expect(desktopBar?.className).toContain('z-50')

      const mobileBar = document.querySelector('.fixed.bottom-0')
      expect(mobileBar?.className).toContain('z-50')
    })
  })

  it('cleans up timer on unmount', () => {
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout')

    const { unmount } = render(<EmergencyContactBar />)

    unmount()

    expect(clearTimeoutSpy).toHaveBeenCalled()
    clearTimeoutSpy.mockRestore()
  })
})