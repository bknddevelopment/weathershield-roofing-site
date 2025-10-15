/**
 * Centralized booking configuration
 * All schedule/appointment/quote buttons redirect to this external booking page
 */
export const BOOKING_CONFIG = {
  url: 'https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate',
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