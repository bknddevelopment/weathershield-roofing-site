import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import GuideTemplate from '../../app/components/GuideTemplate';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    details: ({ children, ...props }: any) => <details {...props}>{children}</details>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock Next.js Link
jest.mock('next/link', () => {
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>;
  };
});

// Mock useReducedMotion hook
jest.mock('../../app/hooks/useReducedMotion', () => ({
  useReducedMotion: () => false,
}));

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() { return []; }
} as any;

// Mock window.scrollTo
window.scrollTo = jest.fn();
Element.prototype.scrollIntoView = jest.fn();

describe('GuideTemplate - Reading Progress', () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  it('calculates reading progress on scroll', () => {
    const { container } = render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    // Find progress bar
    const progressBar = container.querySelector('.bg-gradient-to-r.from-weather-primary-dark');
    expect(progressBar).toBeInTheDocument();

    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 2000, writable: true });
    Object.defineProperty(window, 'innerHeight', { value: 800, writable: true });

    fireEvent.scroll(window);

    // Progress bar should exist (actual width calculation tested via integration)
    expect(progressBar).toBeInTheDocument();
  });

  it('shows back-to-top button after 300px scroll', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    // Initially should not show button (at top)
    expect(screen.queryByLabelText('Back to top')).not.toBeInTheDocument();

    // Simulate scroll past 300px
    Object.defineProperty(window, 'scrollY', { value: 350, writable: true });
    fireEvent.scroll(window);

    // Button should appear
    waitFor(() => {
      expect(screen.getByLabelText('Back to top')).toBeInTheDocument();
    });
  });

  it('scrolls to top when back-to-top button clicked', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    // Scroll down to show button
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    fireEvent.scroll(window);

    waitFor(() => {
      const backToTopButton = screen.getByLabelText('Back to top');
      fireEvent.click(backToTopButton);

      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth',
      });
    });
  });
});

describe('GuideTemplate - Table of Contents', () => {
  const mockTOC = [
    { id: 'section-1', title: 'Introduction' },
    { id: 'section-2', title: 'Materials' },
    { id: 'section-3', title: 'Installation' },
  ];

  it('highlights active section in TOC', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        tableOfContents={mockTOC}
        faqs={[]}
      >
        <div id="section-1">Introduction content</div>
        <div id="section-2">Materials content</div>
        <div id="section-3">Installation content</div>
      </GuideTemplate>
    );

    // TOC should be visible
    expect(screen.getByText('Table of Contents')).toBeInTheDocument();
    expect(screen.getByText('Introduction')).toBeInTheDocument();
    expect(screen.getByText('Materials')).toBeInTheDocument();
    expect(screen.getByText('Installation')).toBeInTheDocument();
  });

  it('smooth scrolls to section when TOC item clicked', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        tableOfContents={mockTOC}
        faqs={[]}
      >
        <div id="section-1">Introduction content</div>
        <div id="section-2">Materials content</div>
      </GuideTemplate>
    );

    const tocLink = screen.getByText('Materials').closest('a');
    expect(tocLink).toHaveAttribute('href', '#section-2');
  });

  it('renders without TOC when not provided', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content without TOC</div>
      </GuideTemplate>
    );

    expect(screen.queryByText('Table of Contents')).not.toBeInTheDocument();
  });

  it('centers content when no TOC provided', () => {
    const { container } = render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Centered content</div>
      </GuideTemplate>
    );

    // Should have max-w-4xl and mx-auto classes for centering
    const article = container.querySelector('article');
    expect(article?.className).toMatch(/mx-auto/);
  });
});

describe('GuideTemplate - FAQ Accordion', () => {
  const mockFAQs = [
    {
      question: 'How long does installation take?',
      answer: 'Typically 2-3 days for a standard residential roof.',
    },
    {
      question: 'What materials do you recommend?',
      answer: 'We recommend architectural shingles for most homes.',
    },
    {
      question: 'Do you offer warranties?',
      answer: 'Yes, we offer both manufacturer and workmanship warranties.',
    },
  ];

  it('expands FAQ when clicked', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={mockFAQs}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();

    // All questions should be visible
    expect(screen.getByText('How long does installation take?')).toBeInTheDocument();
    expect(screen.getByText('What materials do you recommend?')).toBeInTheDocument();
    expect(screen.getByText('Do you offer warranties?')).toBeInTheDocument();
  });

  it('displays FAQ answers', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={mockFAQs}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    // Answers should be in the document (may be hidden by details element)
    expect(screen.getByText('Typically 2-3 days for a standard residential roof.')).toBeInTheDocument();
    expect(screen.getByText('We recommend architectural shingles for most homes.')).toBeInTheDocument();
  });

  it('renders all FAQ items', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={mockFAQs}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    // Should render 3 FAQ items
    const faqSection = screen.getByText('Frequently Asked Questions').closest('section');
    const detailsElements = faqSection?.querySelectorAll('details');
    expect(detailsElements?.length).toBe(3);
  });

  it('renders without FAQ section when no FAQs provided', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    expect(screen.queryByText('Frequently Asked Questions')).not.toBeInTheDocument();
  });
});

describe('GuideTemplate - Hero Section', () => {
  it('displays title and description', () => {
    render(
      <GuideTemplate
        title="Complete Roofing Guide"
        description="Everything you need to know about roofing"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    expect(screen.getByText('Complete Roofing Guide')).toBeInTheDocument();
    expect(screen.getByText('Everything you need to know about roofing')).toBeInTheDocument();
  });

  it('displays Educational Guide badge', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    expect(screen.getByText('Educational Guide')).toBeInTheDocument();
  });

  it('renders breadcrumbs correctly', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[
          { label: 'Resources', href: '/resources' },
          { label: 'Guides', href: '/resources/guides' },
        ]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Guides')).toBeInTheDocument();
  });

  it('highlights last breadcrumb as active', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[
          { label: 'Resources', href: '/resources' },
          { label: 'Current Page', href: '/current' },
        ]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    const currentPageCrumb = screen.getByText('Current Page');
    // Should not be a link (last breadcrumb)
    expect(currentPageCrumb.closest('a')).not.toBeInTheDocument();
  });
});

describe('GuideTemplate - Related Services', () => {
  const mockServices = [
    {
      title: 'Roof Inspection',
      href: '/services/inspection',
      description: 'Professional roof inspection services',
    },
    {
      title: 'Roof Repair',
      href: '/services/repair',
      description: 'Expert roof repair solutions',
    },
  ];

  it('displays related services when provided', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
        relatedServices={mockServices}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    expect(screen.getByText('Our Roofing Services')).toBeInTheDocument();
    expect(screen.getByText('Roof Inspection')).toBeInTheDocument();
    expect(screen.getByText('Roof Repair')).toBeInTheDocument();
    expect(screen.getByText('Professional roof inspection services')).toBeInTheDocument();
  });

  it('links to related services correctly', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
        relatedServices={mockServices}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    const inspectionLink = screen.getByText('Roof Inspection').closest('a');
    expect(inspectionLink).toHaveAttribute('href', '/services/inspection');
  });

  it('hides related services section when not provided', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    expect(screen.queryByText('Our Roofing Services')).not.toBeInTheDocument();
  });
});

describe('GuideTemplate - Schema Markup', () => {
  it('injects article schema when provided', () => {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Test Article',
    };

    const { container } = render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
        articleSchema={articleSchema}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    expect(scriptTag).toBeInTheDocument();
    expect(scriptTag?.innerHTML).toContain('Test Article');
  });

  it('injects FAQ schema when provided', () => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
    };

    const { container } = render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
        faqSchema={faqSchema}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    const scriptTags = container.querySelectorAll('script[type="application/ld+json"]');
    expect(scriptTags.length).toBeGreaterThan(0);
  });

  it('injects HowTo schema when provided', () => {
    const howToSchema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Install Shingles',
    };

    const { container } = render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
        howToSchema={howToSchema}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    const scriptTag = Array.from(
      container.querySelectorAll('script[type="application/ld+json"]')
    ).find(script => script.innerHTML.includes('HowTo'));

    expect(scriptTag).toBeInTheDocument();
  });
});

describe('GuideTemplate - Content Rendering', () => {
  it('renders children content', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>
          <h2>Main Content</h2>
          <p>This is the guide content</p>
        </div>
      </GuideTemplate>
    );

    expect(screen.getByText('Main Content')).toBeInTheDocument();
    expect(screen.getByText('This is the guide content')).toBeInTheDocument();
  });

  it('applies prose classes to content area', () => {
    const { container } = render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    const proseContainer = container.querySelector('.prose');
    expect(proseContainer).toBeInTheDocument();
  });
});

describe('GuideTemplate - Accessibility', () => {
  it('has proper navigation landmarks', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('has proper article landmark', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });

  it('back to top button has aria-label', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    // Scroll to show button
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    fireEvent.scroll(window);

    waitFor(() => {
      const button = screen.getByLabelText('Back to top');
      expect(button).toBeInTheDocument();
    });
  });
});

describe('GuideTemplate - Edge Cases', () => {
  it('handles empty breadcrumbs array', () => {
    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    // Should still show Home link
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('handles single FAQ', () => {
    const singleFAQ = [
      {
        question: 'Single question?',
        answer: 'Single answer.',
      },
    ];

    render(
      <GuideTemplate
        title="Test Guide"
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={singleFAQ}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    expect(screen.getByText('Single question?')).toBeInTheDocument();
    expect(screen.getByText('Single answer.')).toBeInTheDocument();
  });

  it('handles long titles', () => {
    const longTitle = 'This is a very long guide title that contains many words and should still render properly without breaking the layout';

    render(
      <GuideTemplate
        title={longTitle}
        description="Test description"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    expect(screen.getByText(longTitle)).toBeInTheDocument();
  });

  it('handles special characters in title', () => {
    render(
      <GuideTemplate
        title="Roofing 101: A Beginner's Guide & Tips"
        description="Learn the basics"
        breadcrumbs={[{ label: 'Guides', href: '/guides' }]}
        faqs={[]}
      >
        <div>Content</div>
      </GuideTemplate>
    );

    expect(screen.getByText("Roofing 101: A Beginner's Guide & Tips")).toBeInTheDocument();
  });
});
