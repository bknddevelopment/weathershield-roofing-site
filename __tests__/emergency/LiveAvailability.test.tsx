import React from 'react'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import LiveAvailability from '../../app/components/emergency/LiveAvailability'

// Mock timers
beforeEach(() => {
  jest.useFakeTimers()
  jest.setSystemTime(new Date('2024-01-15 14:30:00'))
})

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

describe('LiveAvailability', () => {
  it('renders with default props', () => {
    render(<LiveAvailability />)

    expect(screen.getByText(/Emergency crews standing by/i)).toBeInTheDocument()
  })

  it('displays custom message', () => {
    render(<LiveAvailability message="Crews ready for deployment" />)

    expect(screen.getByText(/Crews ready for deployment/i)).toBeInTheDocument()
  })

  it('shows crew count when enabled', () => {
    render(<LiveAvailability showCrewCount={true} />)

    // Use getAllByText since "Crews" may appear in both message and count display
    const crewsText = screen.getAllByText(/Crews/i)
    expect(crewsText.length).toBeGreaterThan(0)
    expect(screen.getByText(/Available/i)).toBeInTheDocument()
  })

  it('hides crew count when disabled', () => {
    render(<LiveAvailability showCrewCount={false} />)

    expect(screen.queryByText(/Available/i)).not.toBeInTheDocument()
  })

  it('displays after-hours status during off hours', () => {
    // Set time to 10 PM (after hours)
    jest.setSystemTime(new Date('2024-01-15 22:00:00'))

    render(<LiveAvailability />)

    expect(screen.getByText(/After-Hours Service Active/i)).toBeInTheDocument()
  })

  it('displays regular hours status during business hours', () => {
    // Set time to 2:30 PM (regular hours)
    jest.setSystemTime(new Date('2024-01-15 14:30:00'))

    render(<LiveAvailability />)

    expect(screen.getByText(/Regular Hours Service/i)).toBeInTheDocument()
  })

  it('shows weekend status on weekends', () => {
    // Set date to Sunday
    jest.setSystemTime(new Date('2024-01-14 14:30:00'))

    render(<LiveAvailability />)

    expect(screen.getByText(/After-Hours Service Active/i)).toBeInTheDocument()
  })

  it('displays real-time status indicators', () => {
    render(<LiveAvailability />)

    expect(screen.getByText('Dispatchers Online')).toBeInTheDocument()
    expect(screen.getByText('GPS Tracking Active')).toBeInTheDocument()
    expect(screen.getByText('Materials Stocked')).toBeInTheDocument()
  })

  it('updates time display every second', () => {
    render(<LiveAvailability />)

    // Initial render should show time
    expect(screen.getByText(/2:30 PM/i)).toBeInTheDocument()

    // Advance time by 1 minute
    act(() => {
      jest.setSystemTime(new Date('2024-01-15 14:31:00'))
      jest.advanceTimersByTime(60000)
    })

    // Time should update
    expect(screen.getByText(/2:31 PM/i)).toBeInTheDocument()
  })

  it('shows more crews during emergency hours', () => {
    const { rerender } = render(<LiveAvailability showCrewCount={true} />)

    // Regular hours - should show 4 crews
    // Find the specific crew count element (not just any "Crews" text)
    const regularCrewDisplay = screen.getByText('4 Crews')
    expect(regularCrewDisplay).toBeInTheDocument()

    // Set to after hours
    jest.setSystemTime(new Date('2024-01-15 22:00:00'))
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    rerender(<LiveAvailability showCrewCount={true} />)

    // After hours - should show 5 crews
    const afterHoursCrewDisplay = screen.getByText('5 Crews')
    expect(afterHoursCrewDisplay).toBeInTheDocument()
  })

  it('displays pulsing indicator with correct color', () => {
    const { container } = render(<LiveAvailability />)

    // Check for pulse animation
    const pulsingElement = container.querySelector('.animate-ping')
    expect(pulsingElement).toBeInTheDocument()

    // During regular hours should be green
    expect(pulsingElement?.className).toContain('bg-green-500')
  })

  it('changes pulse color during after hours', () => {
    // Set to after hours
    jest.setSystemTime(new Date('2024-01-15 22:00:00'))

    const { container } = render(<LiveAvailability />)

    const pulsingElement = container.querySelector('.animate-ping')
    expect(pulsingElement?.className).toContain('bg-yellow-500')
  })

  it('cleans up interval on unmount', () => {
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval')

    const { unmount } = render(<LiveAvailability />)

    unmount()

    expect(clearIntervalSpy).toHaveBeenCalled()
    clearIntervalSpy.mockRestore()
  })
})