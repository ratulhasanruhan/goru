'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Analytics = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Placeholder for actual ID

    const loadGoogleAnalytics = () => {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function(...args: unknown[]) {
        window.dataLayer.push(args);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        custom_map: {
          'custom_dimension1': 'language'
        }
      });
      window.gtag('set', 'custom_dimension1', language);
    };

    const trackPageView = () => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'page_view', {
          page_title: 'GoruSheba - Smart Cattle Management',
          page_location: window.location.href,
          language: language
        });
      }
    };

    const trackCustomEvents = () => {
      // Track product clicks
      const productCards = document.querySelectorAll('[data-product]');
      productCards.forEach(card => {
        card.addEventListener('click', () => {
          const productName = card.getAttribute('data-product');
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'product_click', {
              product_name: productName,
              language: language
            });
          }
        });
      });

      // Track form submissions
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', () => {
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'form_submit', {
              form_name: 'order_form',
              language: language
            });
          }
        });
      });

      // Track navigation clicks
      const navLinks = document.querySelectorAll('a[href^="#"]');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          const section = link.getAttribute('href')?.substring(1);
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'navigation_click', {
              section: section,
              language: language
            });
          }
        });
      });
    };

    const trackScrollDepth = () => {
      let maxScroll = 0;
      const scrollThresholds = [25, 50, 75, 90];

      const handleScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );

        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          scrollThresholds.forEach(threshold => {
            if (scrollPercent >= threshold && maxScroll < threshold + 10) {
              if (typeof window.gtag !== 'undefined') {
                window.gtag('event', 'scroll_depth', {
                  depth_percentage: threshold,
                  language: language
                });
              }
            }
          });
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    };

    const trackTimeOnPage = () => {
      const startTime = Date.now();
      const timeThresholds = [30, 60, 120, 300]; // seconds
      const trackedThresholds = new Set<number>();

      const checkTimeOnPage = () => {
        const timeOnPage = Math.floor((Date.now() - startTime) / 1000);
        
        timeThresholds.forEach(threshold => {
          if (timeOnPage >= threshold && !trackedThresholds.has(threshold)) {
            trackedThresholds.add(threshold);
            if (typeof window.gtag !== 'undefined') {
              window.gtag('event', 'time_on_page', {
                time_seconds: threshold,
                language: language
              });
            }
          }
        });
      };

      const interval = setInterval(checkTimeOnPage, 1000);
      return () => clearInterval(interval);
    };

    loadGoogleAnalytics();
    trackPageView();
    trackCustomEvents();
    const scrollCleanup = trackScrollDepth();
    const timeCleanup = trackTimeOnPage();

    return () => {
      scrollCleanup();
      timeCleanup();
    };
  }, [language]);

  return null;
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export default Analytics;
