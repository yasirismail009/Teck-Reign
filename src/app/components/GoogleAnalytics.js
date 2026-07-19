'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import {
  GA_MEASUREMENT_ID,
  GOOGLE_ADS_ID,
  trackPageView,
} from '../../lib/analytics';

function sendPageViewWhenReady(url) {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    trackPageView(url);
    return;
  }

  let attempts = 0;
  const maxAttempts = 40;
  const interval = window.setInterval(() => {
    attempts += 1;
    if (typeof window.gtag === 'function') {
      window.clearInterval(interval);
      trackPageView(url);
      return;
    }
    if (attempts >= maxAttempts) {
      window.clearInterval(interval);
    }
  }, 50);
}

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    // Defer so document.title reflects the new route after soft navigation
    const timer = window.setTimeout(() => sendPageViewWhenReady(url), 0);
    return () => window.clearTimeout(timer);
  }, [pathname, searchParams]);

  return null;
}

/**
 * Loads gtag once and records a page_view on every App Router navigation
 * (including the first paint). Automatic page_view is disabled so SPA
 * transitions are not missed and the landing page is not double-counted.
 */
export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false,
            anonymize_ip: true
          });
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}
