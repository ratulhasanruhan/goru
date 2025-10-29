import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import localFont from 'next/font/local'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

// Custom Bengali fonts
const liAdorNoirrit = localFont({
  src: [
    {
      path: '../../public/fonts/Li Ador Noirrit Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Li Ador Noirrit Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Li Ador Noirrit SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Li Ador Noirrit Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Li Ador Noirrit ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
  ],
  variable: '--font-li-ador-noirrit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.goru.help'),
  title: {
    default: 'GoruSheba - Smart Cattle Management Platform | IoT & AI Farming',
    template: '%s | GoruSheba'
  },
  description: 'GoruSheba - The #1 Smart Cattle Management Platform in Bangladesh. Monitor livestock health with IoT sensors, track farm operations with AI analytics, and boost productivity. Download our award-winning app from Google Play Store. Trusted by 1000+ farmers.',
  keywords: [
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
    'GoruSheba app',
    'Google Play Store',
    'mobile farming app',
    'cattle management app',
    'farm monitoring app',
    'গরুসেবা',
    'গবাদি পশু ব্যবস্থাপনা',
    'স্মার্ট কৃষিকাজ',
    'আইওটি কৃষিকাজ',
    'কৃত্রিম বুদ্ধিমত্তা কৃষিকাজ',
    'খামার ব্যবস্থাপনা',
    'গবাদি পশু স্বাস্থ্য পর্যবেক্ষণ',
    'কৃষি প্রযুক্তি',
    'বাংলাদেশ কৃষিকাজ'
  ],
  authors: [{ name: 'GoruSheba Team', url: 'https://goru.help' }],
  creator: 'GoruSheba',
  publisher: 'GoruSheba',
  applicationName: 'GoruSheba',
  category: 'agriculture',
  classification: 'business',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.goru.help',
    siteName: 'GoruSheba',
    title: 'GoruSheba - Smart Cattle Management Platform',
    description: 'GoruSheba - The #1 Smart Cattle Management Platform in Bangladesh. Monitor livestock health with IoT sensors, track farm operations with AI analytics, and boost productivity. Download our award-winning app from Google Play Store.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GoruSheba - Smart Cattle Management Platform',
        type: 'image/jpeg',
      },
      {
        url: '/favicon.svg',
        width: 32,
        height: 32,
        alt: 'GoruSheba Logo',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoruSheba - Smart Cattle Management Platform',
    description: 'GoruSheba - The #1 Smart Cattle Management Platform in Bangladesh. Monitor livestock health with IoT sensors, track farm operations with AI analytics, and boost productivity. Download our award-winning app from Google Play Store.',
    images: ['/og-image.jpg'],
    creator: '@gorusheba',
    site: '@gorusheba',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://www.goru.help',
    languages: {
      'en-US': 'https://www.goru.help',
      'bn-BD': 'https://www.goru.help/?lang=bn',
    },
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'GoruSheba',
    'application-name': 'GoruSheba',
    'msapplication-TileColor': '#16a34a',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#16a34a',
    'google-play-app': 'com.appibrium.gorusheba',
    'mobile-web-app-capable': 'yes',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon-32x32.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#16a34a',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GoruSheba",
              "alternateName": "গরুসেবা",
              "url": "https://www.goru.help",
              "logo": "https://www.goru.help/favicon.svg",
              "description": "Smart Cattle Management Platform with IoT and AI technology",
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
                "https://app.goru.help",
                "https://play.google.com/store/apps/details?id=com.appibrium.gorusheba"
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
                      "@type": "Service",
                      "name": "IoT Cattle Monitoring",
                      "description": "Real-time monitoring with smart sensors"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Health Analytics",
                      "description": "Intelligent health tracking and predictions"
                    }
                  }
                ]
              }
            })
          }}
        />
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
      </head>
      <body className={`${poppins.className} ${liAdorNoirrit.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
