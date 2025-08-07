'use client';

import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/g_goru.png',
        '/farmeye.png',
        '/gorucollar.png',
        '/fonts/Li Ador Noirrit Regular.ttf',
        '/fonts/Li Ador Noirrit Bold.ttf'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = resource.endsWith('.ttf') ? 'font' : 'image';
        link.href = resource;
        link.crossOrigin = resource.endsWith('.ttf') ? 'anonymous' : undefined;
        document.head.appendChild(link);
      });
    };

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    };

    // Optimize form submissions
    const optimizeForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
          if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';
          }
        });
      });
    };

    // Add smooth scrolling for anchor links
    const addSmoothScrolling = () => {
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = (link as HTMLAnchorElement).getAttribute('href')?.substring(1);
          const targetElement = document.getElementById(targetId || '');
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    };

    // Initialize performance optimizations
    preloadCriticalResources();
    lazyLoadImages();
    optimizeForms();
    addSmoothScrolling();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
