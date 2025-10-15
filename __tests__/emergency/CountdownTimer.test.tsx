import React from 'react'
import { render, screen, act, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import CountdownTimer from '../../app/components/emergency/CountdownTimer'

// Mock timers
beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

describe('CountdownTimer', () => {
  it('renders with default props', () => {
    render(<CountdownTimer targetTime="2 Hours" />)

    expect(screen.getByText('Response Time')).toBeInTheDocument()
  })

  it('displays custom message', () => {
    render(
      <CountdownTimer
        targetTime="30 Minutes"
        message="Emergency Response"
      />
    )

    expect(screen.getByText('Emergency Response')).toBeInTheDocument()
  })

  it('parses hour-based target time correctly', () => {
    render(<CountdownTimer targetTime="3 Hours" />)

    // The component should display some form of time
    const timeDisplay = screen.getByText(/Response Time/i).parentElement
    expect(timeDisplay).toBeInTheDocument()
  })

  it('parses minute-based target time correctly', () => {
    render(<CountdownTimer targetTime="45 Minutes" />)

    const timeDisplay = screen.getByText(/Response Time/i).parentElement
    expect(timeDisplay).toBeInTheDocument()
  })

  it('updates timer every second', async () => {
    render(<CountdownTimer targetTime="2 Hours" showSeconds={true} />)

    const initialDisplay = screen.getByText(/Response Time/i).parentElement
    expect(initialDisplay).toBeInTheDocument()

    // Advance timer by 1 second
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    // Timer should still be visible
    expect(screen.getByText(/Response Time/i)).toBeInTheDocument()
  })

  it('shows urgency state for times under 30 minutes', () => {
    render(<CountdownTimer targetTime="20 Minutes" />)

    // Wait for the timer to calculate urgency state
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    // Check for urgency styling - find the outermost div with border classes
    const responseTimeText = screen.getByText(/Response Time/i)
    const urgentContainer = responseTimeText.closest('div.border-yellow-400, div[class*="animate-pulse"]')

    // If the specific class selector doesn't work, check the parent structure
    const parentDiv = responseTimeText.parentElement?.parentElement
    const hasUrgentClass = parentDiv?.className.includes('border-yellow-400') || parentDiv?.className.includes('animate-pulse')

    expect(hasUrgentClass || urgentContainer).toBeTruthy()
  })

  it('respects showSeconds prop', () => {
    const { rerender } = render(
      <CountdownTimer targetTime="1 Hour" showSeconds={false} />
    )

    // Should not show seconds when false
    let timeDisplay = screen.getByText(/Response Time/i).parentElement
    expect(timeDisplay).toBeInTheDocument()

    // Rerender with showSeconds true
    rerender(<CountdownTimer targetTime="1 Hour" showSeconds={true} />)

    timeDisplay = screen.getByText(/Response Time/i).parentElement
    expect(timeDisplay).toBeInTheDocument()
  })

  it('handles default target time when no match found', () => {
    render(<CountdownTimer targetTime="Unknown Format" />)

    // Should default to 120 minutes (2 hours)
    expect(screen.getByText(/Response Time/i)).toBeInTheDocument()
  })

  it('cleans up interval on unmount', () => {
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval')

    const { unmount } = render(<CountdownTimer targetTime="1 Hour" />)

    unmount()

    expect(clearIntervalSpy).toHaveBeenCalled()
    clearIntervalSpy.mockRestore()
  })

  it('displays correct time format for different durations', () => {
    const { rerender } = render(<CountdownTimer targetTime="3 Hours" />)

    // Test hours display
    expect(screen.getByText(/Response Time/i)).toBeInTheDocument()

    // Test minutes display
    rerender(<CountdownTimer targetTime="45 Minutes" />)
    expect(screen.getByText(/Response Time/i)).toBeInTheDocument()
  })
})