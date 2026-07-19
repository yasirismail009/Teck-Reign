/** Google Analytics 4 measurement ID */
export const GA_MEASUREMENT_ID = 'G-5ZVL3EB83B';

/** Google Ads conversion ID */
export const GOOGLE_ADS_ID = 'AW-16469687105';

/**
 * Send a GA4 page_view for the current App Router URL.
 * Safe to call before gtag is ready (no-op).
 */
export function trackPageView(url) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
    send_to: GA_MEASUREMENT_ID,
  });
}
