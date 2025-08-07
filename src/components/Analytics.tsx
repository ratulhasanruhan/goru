'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Analytics = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Google Analytics 4 (GA4) - Replace with your actual measurement ID
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 measurement ID

    // Load Google Analytics
    const loadGoogleAnalytics = () => {
      if (typeof window !== 'undefined' && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
        // Google Analytics 4
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, {
          page_title: 'GoruSheba - Smart Cattle Management',
          page_language: language,
          custom_map: {
            custom_dimension_1: 'language'
          }
        });

        // Track language changes
        gtag('config', GA_MEASUREMENT_ID, {
          custom_map: {
            custom_dimension_1: 'language'
          },
          custom_dimension_1: language
        });
      }
    };

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: 'GoruSheba - Smart Cattle Management',
          page_location: window.location.href,
          page_language: language
        });
      }
    };

    // Track custom events
    const trackCustomEvents = () => {
      // Track product clicks
      const productCards = document.querySelectorAll('[data-product]');
      productCards.forEach(card => {
        card.addEventListener('click', () => {
          const productName = card.getAttribute('data-product');
          if (typeof window !== 'undefined' && window.gtag) {
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
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'form_submit', {
              form_name: 'order_form',
              language: language
            });
          }
        });
      });

      // Track navigation clicks
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          const section = link.getAttribute('href')?.substring(1);
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'navigation_click', {
              section: section,
              language: language
            });
          }
        });
      });
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          if (maxScroll % 25 === 0 && typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'scroll_depth', {
              scroll_percentage: maxScroll,
              language: language
            });
          }
        }
      };

      window.addEventListener('scroll', trackScroll);
      return () => window.removeEventListener('scroll', trackScroll);
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const startTime = Date.now();
      
      const trackTime = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        if (timeOnPage % 30 === 0 && typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'time_on_page', {
            time_seconds: timeOnPage,
            language: language
          });
        }
      };

      const interval = setInterval(trackTime, 1000);
      return () => clearInterval(interval);
    };

    // Initialize analytics
    loadGoogleAnalytics();
    trackPageView();
    trackCustomEvents();
    const scrollCleanup = trackScrollDepth();
    const timeCleanup = trackTimeOnPage();

    // Cleanup
    return () => {
      scrollCleanup();
      timeCleanup();
    };
  }, [language]);

  return null; // This component doesn't render anything
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default Analytics;
