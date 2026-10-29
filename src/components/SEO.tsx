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
  title = 'GoruSheba - Smart Cattle Management Platform | AI & IoT Farming',
  description = 'Transform your farm with GoruSheba. GoruMetrik weight estimation, DorDorshi AI market intelligence, PraniCare veterinary support, Moti Miya AI guidance, QR Cattle Passport, GoruCollar, and virtual farm fencing.',
  keywords = 'cattle management, cattle weight estimation, GoruMetrik, DorDorshi AI, PraniCare, Moti Miya AI, smart farming collar, GPS cattle tracker, geofencing, QR livestock passport, animal husbandry Bangladesh, গরুসেবা, দরদর্শী AI, মতি মিয়া AI',
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

      {/* Open Graph / Facebook */}
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
            "alternateName": "গরুসেবা",
            "url": "https://www.goru.help",
            "logo": "https://www.goru.help/logo.png",
            "description": "Smart cattle management platform combining IoT hardware and AI diagnostics to digitize dairy and beef farming in Bangladesh.",
            "foundingDate": "2024",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "23/A Shukrabad",
              "addressLocality": "Dhaka",
              "postalCode": "1207",
              "addressCountry": "BD"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+880-1789-536-985",
              "contactType": "customer service",
              "email": "hello@goru.help",
              "availableLanguage": ["English", "Bengali"],
              "areaServed": "BD"
            },
            "sameAs": [
              "https://facebook.com/gorusheba",
              "https://www.youtube.com/@appibrium",
              "https://www.linkedin.com/company/appibrium/",
              "https://play.google.com/store/apps/details?id=com.appibrium.gorusheba",
              "https://app.goru.help",
              "https://peerlist.io/ratulhasan/project/gorusheba--iot--ai-farming",
              "https://www.producthunt.com/products/gorusheba"
            ],
            "serviceType": "Smart Farming Platform",
            "areaServed": "Bangladesh",
            "knowsAbout": ["IoT Wearables", "Computer Vision Weight Estimation", "Remote Veterinary Care", "AI Voice Bangla Guidance", "GPS Geofencing Security"]
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
            "name": "GoruSheba Products & Packages",
            "description": "Smart cattle management hardware devices and software subscription packages",
            "itemListElement": [
              {
                "@type": "Product",
                "position": 1,
                "name": "GoruCollar Wearable Sensor",
                "description": "IoT smart cattle collar tracking GPS coordinates, body temperature, accelerometer patterns, and NH3 gas exposure with automatic health alerts.",
                "brand": "GoruSheba",
                "category": "IoT Wearable Device",
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
                }
              },
              {
                "@type": "Product",
                "position": 2,
                "name": "GoruSheba Premium Package",
                "description": "Complete smart farm dashboard integration with advanced analytics, collar telemetry, remote vet support, and 24/7 livestock security monitoring.",
                "brand": "GoruSheba",
                "category": "Farm Management Subscription",
                "offers": {
                  "@type": "Offer",
                  "price": "15000",
                  "priceCurrency": "BDT",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "GoruSheba"
                  }
                }
              },
              {
                "@type": "Product",
                "position": 3,
                "name": "GoruSheba Basic Package",
                "description": "Essential cattle management software including basic weight scanning (GoruMetrik), QR passport logs, and mobile app database tracking.",
                "brand": "GoruSheba",
                "category": "Farm Management Subscription",
                "offers": {
                  "@type": "Offer",
                  "price": "5000",
                  "priceCurrency": "BDT",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "GoruSheba"
                  }
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
            "description": "Cattle care companion for farmers in Bangladesh. Create QR Cattle Passports, estimate weight with GoruMetrik, explore DorDorshi AI, get Moti Miya guidance, and connect with PraniCare.",
            "url": "https://play.google.com/store/apps/details?id=com.appibrium.gorusheba",
            "applicationCategory": "Agriculture",
            "operatingSystem": "Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "25"
            },
            "author": {
              "@type": "Organization",
              "name": "Appibrium",
              "url": "https://appibrium.com"
            },
            "inLanguage": ["en", "bn"]
          })
        }}
      />

      {/* Structured Data - FAQ (Covering six core features) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is GoruMetrik weight estimation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GoruMetrik is an AI-assisted cattle weight estimation feature. It uses a smartphone camera photo and labels the result according to the available profile data."
                }
              },
              {
                "@type": "Question",
                "name": "How does PraniCare consultation work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PraniCare supports veterinary consultation and treatment follow-up. Concerning symptoms should be reviewed by a qualified veterinarian."
                }
              },
              {
                "@type": "Question",
                "name": "What is Moti Miya AI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Moti Miya AI is a clearly identified demo farm guide for questions about care, feeding, weight, market value, and farm tasks. It does not provide definitive diagnoses."
                }
              },
              {
                "@type": "Question",
                "name": "How does QR Farm Management profile work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every animal receives a digital identity via a QR tag. Scanning it displays weight logs, vaccination timelines, treatment history, and growth charts instantly on a smartphone."
                }
              },
              {
                "@type": "Question",
                "name": "What metrics does GoruCollar track?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GoruCollar is an IoT smart collar that tracks GPS location, body temperature, accelerometer movement activity, and NH3 gas exposure levels, sending automatic notifications for anomalies."
                }
              },
              {
                "@type": "Question",
                "name": "What is Virtual Farm Fencing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Virtual Fencing allows farmers to draw pasture boundaries on a digital map. The app dispatches instant push notifications if cattle cross these coordinates."
                }
              }
            ]
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
            "name": "GoruSheba Offices",
            "alternateName": "গরুসেবা অফিস",
            "description": "Agritech head offices in Dhaka providing cattle management hardware support and software consultations.",
            "url": "https://www.goru.help",
            "telephone": "+880-1789-536-985",
            "email": "hello@goru.help",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "23/A Shukrabad",
              "addressLocality": "Dhaka",
              "postalCode": "1207",
              "addressCountry": "BD"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "23.7542",
              "longitude": "90.3776"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "৳৳",
            "currenciesAccepted": "BDT",
            "paymentAccepted": "bKash, Rocket, Bank Transfer, Visa, MasterCard",
            "areaServed": "Bangladesh"
          })
        }}
      />
    </>
  );
};

export default SEO;
