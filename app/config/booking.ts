/**
 * Centralized booking configuration
 * All schedule/appointment/quote buttons redirect to this external booking page
 */
export const BOOKING_CONFIG = {
  url: 'https://book.xapp.ai/?key=000f4dfe-4252-4d65-af56-1dd1f056871a&environment=production&origin=rwg&partnerId=sfl&rwg_token=ACgRB3cebWQuYR72u2f0BFKp7DNTTKv9pfrd5wxXxu0RK3Acrkp4n_3X26WpDe0yK9B6IZpoPm8q_Mwde4V3FPnlfCeghF-0-1K9HNpODZpy9YC7ipc4z8Q%3D',
  openInNewTab: true,
  linkProps: {
    target: '_blank' as const,
    rel: 'noopener noreferrer'
  }
};

/**
 * Helper function to get booking link props
 */
export function getBookingLinkProps() {
  return {
    href: BOOKING_CONFIG.url,
    ...(BOOKING_CONFIG.openInNewTab && BOOKING_CONFIG.linkProps)
  };
}