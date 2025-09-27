// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock environment variables
process.env.NEXT_PUBLIC_SITE_URL = 'https://weathershieldroofing.com'

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() {
    return []
  }
}

// Mock window.matchMedia with dynamic matching based on window dimensions
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => {
    // Parse the media query to determine matches based on window dimensions
    let matches = false;

    // Extract min/max width values from the query
    const maxWidthMatch = query.match(/\(max-width:\s*(\d+)px\)/);
    const minWidthMatch = query.match(/\(min-width:\s*(\d+)px\)/);

    if (maxWidthMatch && minWidthMatch) {
      // Range query like (min-width: 768px) and (max-width: 1023px)
      const minWidth = parseInt(minWidthMatch[1]);
      const maxWidth = parseInt(maxWidthMatch[1]);
      matches = window.innerWidth >= minWidth && window.innerWidth <= maxWidth;
    } else if (maxWidthMatch) {
      // Max width only
      const maxWidth = parseInt(maxWidthMatch[1]);
      matches = window.innerWidth <= maxWidth;
    } else if (minWidthMatch) {
      // Min width only
      const minWidth = parseInt(minWidthMatch[1]);
      matches = window.innerWidth >= minWidth;
    }

    return {
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  }),
})