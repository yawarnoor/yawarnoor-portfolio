"use client";

import { useEffect } from "react";

interface DeferredAnalyticsProps {
  gaId: string;
}

export const DeferredAnalytics = ({ gaId }: DeferredAnalyticsProps) => {
  useEffect(() => {
    // Only load analytics after the page has finished loading
    const loadAnalytics = () => {
      // Load Google Analytics script deferred
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      // Initialize gtag
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}', {
          page_title: document.title,
          page_location: window.location.href,
        });
      `;
      document.head.appendChild(script2);
    };

    // Defer loading until after page load
    if (document.readyState === 'complete') {
      setTimeout(loadAnalytics, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(loadAnalytics, 1000);
      });
    }
  }, [gaId]);

  return null;
};
