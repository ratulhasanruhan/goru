import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import localFont from 'next/font/local'
import {
  SITE_URL,
  SITE_NAME,
  SITE_NAME_BN,
  LEGAL_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  PLAY_STORE_URL,
  PLAY_STORE_ID,
  SOCIAL_LINKS,
  OG_IMAGE,
  LOGO_URL,
  ORG_ID,
  WEBSITE_ID,
  APP_ID,
} from '@/lib/site'

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
  metadataBase: new URL(SITE_URL),
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
  authors: [{ name: 'GoruSheba Team', url: SITE_URL }],
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
    alternateLocale: ['bn_BD'],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'GoruSheba - Smart Cattle Management Platform',
    description: 'GoruSheba - The #1 Smart Cattle Management Platform in Bangladesh. Monitor livestock health with IoT sensors, track farm operations with AI analytics, and boost productivity. Download our award-winning app from Google Play Store.',
    images: [
      {
        url: '/banner.jpg',
        width: 1536,
        height: 811,
        alt: 'GoruSheba - Smart Cattle Management Platform',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoruSheba - Smart Cattle Management Platform',
    description: 'GoruSheba - The #1 Smart Cattle Management Platform in Bangladesh. Monitor livestock health with IoT sensors, track farm operations with AI analytics, and boost productivity. Download our award-winning app from Google Play Store.',
    images: ['/banner.jpg'],
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
  // Ownership tokens come from env so the new domain can be re-verified
  // without a code change. Unset values are omitted rather than emitting
  // a placeholder meta tag that fails verification.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
  // `alternates.languages` is not used for hreflang here: Next strips the
  // ?lang=bn query when resolving those values, which would point the Bengali
  // alternate at the English page. The hreflang links are emitted by hand in
  // <head> below instead.
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'GoruSheba',
    'application-name': 'GoruSheba',
    'msapplication-TileColor': '#16a34a',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#16a34a',
    'google-play-app': `app-id=${PLAY_STORE_ID}`,
    'mobile-web-app-capable': 'yes',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="bn" href={`${SITE_URL}/?lang=bn`} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        {/*
          Site-wide entity graph. Page-level schema (FAQ, products, local
          business) lives in <SEO /> and points back to these @id anchors.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": ORG_ID,
                  "name": SITE_NAME,
                  "alternateName": [SITE_NAME_BN, "Goru Sheba", "GoruSheba Bangladesh"],
                  "legalName": LEGAL_NAME,
                  "url": SITE_URL,
                  "logo": {
                    "@type": "ImageObject",
                    "url": LOGO_URL,
                    "caption": `${SITE_NAME} logo`
                  },
                  "image": OG_IMAGE,
                  "description": "GoruSheba is a smart cattle management platform from Bangladesh that combines IoT hardware (GoruCollar, Farm Eye) with AI software (GoruMetrik weight estimation, TeleVet, Bangla voice assistant) to digitize dairy and beef farming.",
                  "foundingDate": "2024",
                  "founder": {
                    "@type": "Person",
                    "name": "Ratul Hasan"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "23/A Shukrabad",
                    "addressLocality": "Dhaka",
                    "postalCode": "1207",
                    "addressCountry": "BD"
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": CONTACT_PHONE,
                      "contactType": "customer service",
                      "email": CONTACT_EMAIL,
                      "availableLanguage": ["English", "Bengali"],
                      "areaServed": "BD"
                    }
                  ],
                  "sameAs": SOCIAL_LINKS,
                  "areaServed": {
                    "@type": "Country",
                    "name": "Bangladesh"
                  },
                  "knowsAbout": [
                    "Cattle management",
                    "IoT livestock wearables",
                    "Computer vision cattle weight estimation",
                    "Remote veterinary care",
                    "GPS geofencing for livestock",
                    "Dairy farming in Bangladesh"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": WEBSITE_ID,
                  "url": SITE_URL,
                  "name": SITE_NAME,
                  "alternateName": SITE_NAME_BN,
                  "description": "Official website of GoruSheba, the smart cattle management platform for farmers in Bangladesh.",
                  "publisher": { "@id": ORG_ID },
                  "inLanguage": ["en", "bn"]
                },
                {
                  "@type": "MobileApplication",
                  "@id": APP_ID,
                  "name": SITE_NAME,
                  "alternateName": SITE_NAME_BN,
                  "description": "All-in-one cattle care companion for farmers in Bangladesh. Create cow profiles with QR codes, estimate weight with GoruMetrik, get AI farming assistance in Bangla, find nearby vets, monitor sheds with the Farm Eye IoT camera, and track cattle movement with GoruCollar.",
                  "url": PLAY_STORE_URL,
                  "installUrl": PLAY_STORE_URL,
                  "downloadUrl": PLAY_STORE_URL,
                  "applicationCategory": "BusinessApplication",
                  "applicationSubCategory": "Agriculture",
                  "operatingSystem": "Android 8.0+",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "25",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "author": { "@id": ORG_ID },
                  "publisher": { "@id": ORG_ID },
                  "datePublished": "2024-09-06",
                  "inLanguage": ["en", "bn"],
                  "featureList": [
                    "AI cattle weight estimation (GoruMetrik)",
                    "Remote veterinary consultation (TeleVet)",
                    "Bangla AI voice assistant",
                    "QR digital animal passports",
                    "GoruCollar IoT GPS and health collar",
                    "Map-drawn virtual geofencing"
                  ]
                }
              ]
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
