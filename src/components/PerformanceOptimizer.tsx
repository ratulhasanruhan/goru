'use client';

import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Only run on client side to prevent hydration issues
    if (typeof window === 'undefined') return;

    const preloadCriticalResources = () => {
      // Preload critical images
      const criticalImages = [
        '/farmeye.png',
        '/gorucollar.png',
        '/logo.png',
        '/banner.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload fonts
      const fonts = [
        '/fonts/Li Ador Noirrit Regular.ttf',
        '/fonts/Li Ador Noirrit Bold.ttf'
      ];

      fonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/ttf';
        link.href = font;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    const optimizeForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
          form.addEventListener('submit', () => {
            submitButton.setAttribute('disabled', 'true');
            submitButton.textContent = 'Submitting...';
          });
        }
      });
    };

    const addSmoothScrolling = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href')?.substring(1);
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

    preloadCriticalResources();
    lazyLoadImages();
    optimizeForms();
    addSmoothScrolling();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
