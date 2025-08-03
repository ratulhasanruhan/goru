import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

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
  metadataBase: new URL('https://goru.help'),
  title: {
    default: 'GoruSheba - Smart Cattle Management Platform | IoT & AI Farming',
    template: '%s | GoruSheba'
  },
  description: 'Transform your farm with GoruSheba - the leading IoT and AI-powered cattle management platform. Monitor livestock health, track farm operations, and optimize productivity with smart sensors and real-time analytics.',
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
    'agricultural technology Bangladesh'
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
    url: 'https://goru.help',
    siteName: 'GoruSheba',
    title: 'GoruSheba - Smart Cattle Management Platform',
    description: 'Transform your farm with IoT and AI-powered cattle management. Monitor livestock health and optimize farm productivity.',
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
    description: 'Transform your farm with IoT and AI-powered cattle management. Monitor livestock health and optimize farm productivity.',
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
    bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://goru.help',
    languages: {
      'en-US': 'https://goru.help',
      'bn-BD': 'https://goru.help/bn',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  category: 'technology',
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
              "url": "https://goru.help",
              "logo": "https://goru.help/favicon.svg",
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
      </head>
      <body className={`${inter.className} ${liAdorNoirrit.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
