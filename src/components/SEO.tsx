'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: any;
}

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  image = '/og-image.jpg',
  url,
  type = 'website',
  structuredData 
}: SEOProps) => {
  const { language, t } = useLanguage();

  const defaultTitle = language === 'bn' 
    ? 'গরুসেবা - স্মার্ট গবাদি পশু ব্যবস্থাপনা প্ল্যাটফর্ম | আইওটি ও কৃত্রিম বুদ্ধিমত্তা কৃষিকাজ'
    : 'GoruSheba - Smart Cattle Management Platform | IoT & AI Farming';

  const defaultDescription = language === 'bn'
    ? 'গরুসেবার সাথে আপনার খামার পরিবর্তন করুন - শীর্ষস্থানীয় আইওটি এবং কৃত্রিম বুদ্ধিমত্তা চালিত গবাদি পশু ব্যবস্থাপনা প্ল্যাটফর্ম। স্মার্ট সেন্সর এবং রিয়েল-টাইম বিশ্লেষণ দিয়ে গবাদি পশুর স্বাস্থ্য পর্যবেক্ষণ করুন, খামার পরিচালনা ট্র্যাক করুন এবং উৎপাদনশীলতা অপ্টিমাইজ করুন।'
    : 'Transform your farm with GoruSheba - the leading IoT and AI-powered cattle management platform. Monitor livestock health, track farm operations, and optimize productivity with smart sensors and real-time analytics.';

  const defaultKeywords = language === 'bn' ? [
    'গবাদি পশু ব্যবস্থাপনা',
    'আইওটি কৃষিকাজ',
    'কৃত্রিম বুদ্ধিমত্তা কৃষিকাজ',
    'স্মার্ট কৃষিকাজ',
    'গবাদি পশু পর্যবেক্ষণ',
    'খামার ব্যবস্থাপনা',
    'কৃষি প্রযুক্তি',
    'সুনির্দিষ্ট কৃষিকাজ',
    'গবাদি পশু স্বাস্থ্য পর্যবেক্ষণ',
    'খামার স্বয়ংক্রিয়করণ',
    'কৃষি আইওটি',
    'স্মার্ট কৃষিকাজ',
    'খামার উৎপাদনশীলতা',
    'গবাদি পশু ট্র্যাকিং',
    'কৃষি বিশ্লেষণ',
    'বাংলাদেশ কৃষিকাজ',
    'দুগ্ধ খামার',
    'পশুচিকিৎসা সেবা',
    'খামার আইওটি ডিভাইস',
    'বাংলাদেশ কৃষি প্রযুক্তি'
  ] : [
    'cattle management',
    'IoT farming',
    'AI agriculture',
    'smart farming',
    'livestock monitoring',
    'farm management',
    'agricultural technology',
    'precision farming',
    'cattle health monitoring',
    'farm automation',
    'agricultural IoT',
    'smart agriculture',
    'farm productivity',
    'livestock tracking',
    'agricultural analytics',
    'Bangladesh farming',
    'dairy farming',
    'veterinary services',
    'farm IoT devices',
    'agricultural technology Bangladesh',
    'Farm Eye',
    'Goru Collar',
    'cattle monitoring system',
    'livestock tracking device'
  ];

  const currentTitle = title || defaultTitle;
  const currentDescription = description || defaultDescription;
  const currentKeywords = [...defaultKeywords, ...keywords];
  const currentUrl = url || 'https://goru.help';

  // Default structured data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GoruSheba",
    "alternateName": "গরুসেবা",
    "url": "https://goru.help",
    "logo": "https://goru.help/g_goru.png",
    "description": currentDescription,
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880-1789-536-985",
      "contactType": "customer service",
      "email": "hello@goru.help"
    },
    "sameAs": [
      "https://app.goru.help"
    ],
    "serviceType": "Cattle Management Platform",
    "areaServed": "Bangladesh",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cattle Management Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Farm Eye",
            "description": "Advanced monitoring system that tracks cow movement, records video, and measures temperature, ammonia (NH3), and humidity levels",
            "brand": "GoruSheba",
            "category": "IoT Monitoring Device",
            "offers": {
              "@type": "Offer",
              "price": "3000",
              "priceCurrency": "BDT",
              "availability": "https://schema.org/InStock"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Goru Collar",
            "description": "Advanced IoT collar for real-time cattle health monitoring and GPS tracking",
            "brand": "GoruSheba",
            "category": "IoT Tracking Device",
            "offers": {
              "@type": "Offer",
              "price": "2000",
              "priceCurrency": "BDT",
              "availability": "https://schema.org/InStock"
            }
          }
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      <meta name="keywords" content={currentKeywords.join(', ')} />
      <meta name="author" content="GoruSheba" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={language === 'bn' ? 'bn' : 'en'} />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`https://goru.help${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="GoruSheba" />
      <meta property="og:locale" content={language === 'bn' ? 'bn_BD' : 'en_US'} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:image" content={`https://goru.help${image}`} />
      <meta name="twitter:site" content="@gorusheba" />
      <meta name="twitter:creator" content="@gorusheba" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#16a34a" />
      <meta name="msapplication-TileColor" content="#16a34a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="GoruSheba" />
      <meta name="application-name" content="GoruSheba" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://formspree.io" />

      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//formspree.io" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />

      {/* Additional Structured Data for Products */}
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
                "image": "https://goru.help/farmeye.png",
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
                "image": "https://goru.help/gorucollar.png",
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

      {/* Local Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GoruSheba",
            "image": "https://goru.help/g_goru.png",
            "description": "Smart cattle management platform with IoT and AI technology",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dhaka",
              "addressCountry": "BD"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "23.8103",
              "longitude": "90.4125"
            },
            "url": "https://goru.help",
            "telephone": "+880-1789-536-985",
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "$$",
            "servesCuisine": "Agricultural Technology",
            "areaServed": "Bangladesh"
          })
        }}
      />
    </Head>
  );
};

export default SEO;
