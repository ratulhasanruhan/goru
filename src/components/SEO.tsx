'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({ 
  title = 'GoruSheba - Smart Cattle Management Solutions',
  description = 'Advanced IoT solutions for cattle monitoring, health tracking, and farm management. Real-time monitoring with Farm Eye and Goru Collar technology.',
  keywords = 'cattle monitoring, IoT farming, smart agriculture, livestock tracking, farm management, Bangladesh agriculture',
  image = 'https://www.goru.help/banner.jpg',
  url = 'https://www.goru.help'
}: SEOProps) => {
  const { language } = useLanguage();

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="GoruSheba" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={language === 'bn' ? 'bn' : 'en'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#16a34a" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="GoruSheba" />
      <meta property="og:locale" content={language === 'bn' ? 'bn_BD' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@gorusheba" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Hreflang for language alternatives */}
      <link rel="alternate" hrefLang="en" href="https://www.goru.help" />
      <link rel="alternate" hrefLang="bn" href="https://www.goru.help/?lang=bn" />
      <link rel="alternate" hrefLang="x-default" href="https://www.goru.help" />

      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GoruSheba",
            "url": "https://www.goru.help",
            "logo": "https://www.goru.help/logo.png",
            "description": "Smart cattle management solutions for modern farming",
            "foundingDate": "2024",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BD",
              "addressRegion": "Dhaka"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["English", "Bengali"]
            },
            "sameAs": [
              "https://facebook.com/gorusheba",
              "https://twitter.com/gorusheba",
              "https://play.google.com/store/apps/details?id=com.appibrium.gorusheba",
              "https://app.goru.help"
            ]
          })
        }}
      />

      {/* Structured Data - Products */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "GoruSheba Products",
            "description": "Smart cattle management products",
            "itemListElement": [
              {
                "@type": "Product",
                "position": 1,
                "name": "Farm Eye",
                "description": "Advanced monitoring system that tracks cow movement, records video, and measures temperature, ammonia (NH3), and humidity levels",
                "brand": "GoruSheba",
                "category": "IoT Monitoring Device",
                "image": "https://www.goru.help/farmeye.png",
                "offers": {
                  "@type": "Offer",
                  "price": "3000",
                  "priceCurrency": "BDT",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "GoruSheba"
                  }
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "127"
                }
              },
              {
                "@type": "Product",
                "position": 2,
                "name": "Goru Collar",
                "description": "Advanced IoT collar for real-time cattle health monitoring and GPS tracking",
                "brand": "GoruSheba",
                "category": "IoT Tracking Device",
                "image": "https://www.goru.help/gorucollar.png",
                "offers": {
                  "@type": "Offer",
                  "price": "2000",
                  "priceCurrency": "BDT",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "GoruSheba"
                  }
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "89"
                }
              }
            ]
          })
        }}
      />

      {/* Structured Data - Mobile Application */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "GoruSheba",
            "alternateName": "গরুসেবা",
            "description": "All-in-one cattle care companion for farmers in Bangladesh. Create cow profiles with QR codes, estimate weight with GoruMetrik, get AI farming assistance, find nearby vets, monitor farms with FarmEye IoT camera, and track cattle movement with GoruCollar.",
            "url": "https://play.google.com/store/apps/details?id=com.appibrium.gorusheba",
            "applicationCategory": "Productivity",
            "operatingSystem": "Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "ratingCount": "10"
            },
            "author": {
              "@type": "Organization",
              "name": "Appibrium",
              "url": "https://appibrium.tech"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Appibrium",
              "url": "https://appibrium.tech"
            },
            "datePublished": "2024-09-06",
            "dateModified": "2024-09-06",
            "inLanguage": ["en", "bn"],
            "keywords": "cattle management, IoT farming, AI agriculture, smart farming, livestock monitoring, farm management, agricultural technology, Bangladesh farming, গরুসেবা, গবাদি পশু ব্যবস্থাপনা"
          })
        }}
      />

      {/* Structured Data - Web Application */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "GoruSheba Web App",
            "alternateName": "গরুসেবা ওয়েব অ্যাপ",
            "description": "Web-based cattle management platform for farmers. Access your farm data, monitor livestock health, track expenses, and manage your cattle operations from any device with internet connection.",
            "url": "https://app.goru.help",
            "applicationCategory": "Productivity",
            "operatingSystem": "Web Browser",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "Appibrium",
              "url": "https://appibrium.tech"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Appibrium",
              "url": "https://appibrium.tech"
            },
            "datePublished": "2024-09-06",
            "dateModified": "2024-09-06",
            "inLanguage": ["en", "bn"],
            "keywords": "cattle management web app, online farm management, livestock tracking web platform, agricultural web application, Bangladesh farming web app, গরুসেবা ওয়েব অ্যাপ, অনলাইন খামার ব্যবস্থাপনা"
          })
        }}
      />

      {/* Structured Data - Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GoruSheba",
            "description": "Smart cattle management solutions",
            "url": "https://www.goru.help",
            "telephone": "+880-1789-536-985",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BD",
              "addressRegion": "Dhaka"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "23.8103",
              "longitude": "90.4125"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "৳৳",
            "currenciesAccepted": "BDT",
            "paymentAccepted": "Cash, Credit Card, Mobile Banking"
          })
        }}
      />
    </>
  );
};

export default SEO;
