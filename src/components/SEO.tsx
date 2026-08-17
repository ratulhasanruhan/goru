'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
  SITE_URL,
  SITE_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  ORG_ID,
  WEBSITE_ID,
  APP_ID,
  OG_IMAGE,
  absoluteUrl,
} from '@/lib/site';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

/**
 * Homepage structured data.
 *
 * Title, description, canonical, hreflang, Open Graph and Twitter tags are NOT
 * emitted here — those come from the Metadata API in `app/layout.tsx`. Emitting
 * them in both places produced duplicate <title> and two conflicting
 * <link rel="canonical"> tags, which search engines resolve by ignoring both.
 * This component owns only the JSON-LD that the Metadata API cannot express.
 */
const SEO = ({
  title = 'GoruSheba - Smart Cattle Management Platform | IoT & AI Farming',
  description = 'Transform your farm with GoruSheba. Real-time AI cattle weight estimation (GoruMetrik), remote veterinary consultations (TeleVet), Bangla AI Voice Assistant, QR animal passports, IoT GPS collars (GoruCollar), and map-drawn virtual geofencing.',
  image = OG_IMAGE,
  url = SITE_URL,
}: SEOProps) => {
  const { language } = useLanguage();

  return (
    <>
      {/*
        Structured Data - Homepage WebPage.
        Anchors the page to the site-wide Organization/WebSite entities
        declared in the root layout instead of redeclaring them.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${SITE_URL}/#webpage`,
            url,
            name: title,
            description,
            isPartOf: { '@id': WEBSITE_ID },
            about: { '@id': ORG_ID },
            mainEntity: { '@id': APP_ID },
            primaryImageOfPage: { '@type': 'ImageObject', url: image },
            inLanguage: language === 'bn' ? 'bn-BD' : 'en-US',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', '.speakable'],
            },
          }),
        }}
      />

      {/* Structured Data - Products */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'GoruSheba Products & Packages',
            description:
              'Smart cattle management hardware devices and software subscription packages',
            itemListElement: [
              {
                '@type': 'Product',
                position: 1,
                name: 'GoruCollar Wearable Sensor',
                description:
                  'IoT smart cattle collar tracking GPS coordinates, body temperature, accelerometer patterns, and NH3 gas exposure with automatic health alerts.',
                brand: { '@type': 'Brand', name: SITE_NAME },
                category: 'IoT Wearable Device',
                image: absoluteUrl('/gorucollar.png'),
                offers: {
                  '@type': 'Offer',
                  price: '2000',
                  priceCurrency: 'BDT',
                  availability: 'https://schema.org/InStock',
                  url: `${SITE_URL}/#products`,
                  seller: { '@id': ORG_ID },
                },
              },
              {
                '@type': 'Product',
                position: 2,
                name: 'Farm Eye Smart Monitoring System',
                description:
                  'Shed monitoring unit that tracks cow movement, records video, and measures temperature, ammonia (NH3), and humidity with real-time alerts.',
                brand: { '@type': 'Brand', name: SITE_NAME },
                category: 'IoT Monitoring Device',
                image: absoluteUrl('/farmeye.png'),
                offers: {
                  '@type': 'Offer',
                  price: '3000',
                  priceCurrency: 'BDT',
                  availability: 'https://schema.org/InStock',
                  url: `${SITE_URL}/#products`,
                  seller: { '@id': ORG_ID },
                },
              },
              {
                '@type': 'Product',
                position: 3,
                name: 'GoruSheba Premium Package',
                description:
                  'Complete smart farm dashboard integration with advanced analytics, collar telemetry, remote vet support, and 24/7 livestock security monitoring.',
                brand: { '@type': 'Brand', name: SITE_NAME },
                category: 'Farm Management Subscription',
                offers: {
                  '@type': 'Offer',
                  price: '15000',
                  priceCurrency: 'BDT',
                  availability: 'https://schema.org/InStock',
                  url: `${SITE_URL}/#products`,
                  seller: { '@id': ORG_ID },
                },
              },
              {
                '@type': 'Product',
                position: 4,
                name: 'GoruSheba Basic Package',
                description:
                  'Essential cattle management software including basic weight scanning (GoruMetrik), QR passport logs, and mobile app database tracking.',
                brand: { '@type': 'Brand', name: SITE_NAME },
                category: 'Farm Management Subscription',
                offers: {
                  '@type': 'Offer',
                  price: '5000',
                  priceCurrency: 'BDT',
                  availability: 'https://schema.org/InStock',
                  url: `${SITE_URL}/#products`,
                  seller: { '@id': ORG_ID },
                },
              },
            ],
          }),
        }}
      />

      {/*
        Structured Data - FAQ.
        Written as self-contained question/answer pairs so generative answer
        engines can quote a single entry without needing page context.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': `${SITE_URL}/#faq`,
            isPartOf: { '@id': WEBSITE_ID },
            inLanguage: ['en', 'bn'],
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is GoruSheba?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'GoruSheba (গরুসেবা) is a smart cattle management platform for farmers in Bangladesh, built by Appibrium. It pairs IoT hardware — the GoruCollar GPS and health collar and the Farm Eye shed monitor — with an Android app that offers AI weight estimation, remote vet consultations, a Bangla voice assistant, QR animal passports, and virtual geofencing. The website is goru.digital and the app is free on Google Play.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does GoruSheba cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The GoruSheba Android app is free to download. Hardware and subscriptions are priced in Bangladeshi taka: the GoruCollar wearable sensor is ৳2,000, the Farm Eye monitoring system is ৳3,000, the Basic software package is ৳5,000, and the Premium package is ৳15,000. Payment is accepted via bKash, Rocket, bank transfer, Visa, and MasterCard.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is GoruMetrik weight estimation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'GoruMetrik is GoruSheba’s AI-based cattle weight estimation feature. A farmer photographs an animal with a smartphone camera and receives a weight result in under 10 seconds at roughly 92% accuracy, removing the need for a physical weighing scale.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does TeleVet consultation work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'TeleVet lets farmers book a remote veterinary consultation inside the GoruSheba app. Farmers connect with licensed veterinarians directly, so a sick animal can be assessed without travelling to a clinic.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the GoruSheba AI Voice Assistant?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The GoruSheba AI Voice Assistant lets farmers ask health, feeding, and disease questions out loud in Bangla and receive spoken AI guidance in return, so literacy is not a barrier to using the platform.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does the QR animal passport work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Every animal on a GoruSheba farm gets a digital identity through a QR ear tag. Scanning the tag with a smartphone instantly shows that animal’s weight logs, vaccination timeline, treatment history, and growth chart.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does GoruCollar track?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'GoruCollar is an IoT smart collar that tracks GPS location, body temperature, accelerometer movement activity, and NH3 gas exposure, sending automatic push notifications when readings fall outside normal ranges. Battery life is around six months.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is virtual farm fencing in GoruSheba?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Virtual fencing lets a farmer draw pasture boundaries on a digital map in the app. If a collared animal crosses those coordinates, GoruSheba sends an instant push notification — useful for both stray animals and theft prevention.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is GoruSheba available in Bangla?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. GoruSheba is fully bilingual in Bangla and English across the website and Android app, including the AI voice assistant, which understands and answers spoken questions in Bangla.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I contact GoruSheba?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Email ${CONTACT_EMAIL} or call ${CONTACT_PHONE}. The GoruSheba office is at 23/A Shukrabad, Dhaka 1207, Bangladesh, open Monday to Friday, 9:00 to 18:00.`,
                },
              },
            ],
          }),
        }}
      />

      {/* Structured Data - Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': `${SITE_URL}/#localbusiness`,
            name: 'GoruSheba Offices',
            alternateName: 'গরুসেবা অফিস',
            description:
              'Agritech head office in Dhaka providing cattle management hardware support and software consultations.',
            url: SITE_URL,
            parentOrganization: { '@id': ORG_ID },
            telephone: CONTACT_PHONE,
            email: CONTACT_EMAIL,
            image: OG_IMAGE,
            address: {
              '@type': 'PostalAddress',
              streetAddress: '23/A Shukrabad',
              addressLocality: 'Dhaka',
              postalCode: '1207',
              addressCountry: 'BD',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '23.7542',
              longitude: '90.3776',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
              },
            ],
            priceRange: '৳৳',
            currenciesAccepted: 'BDT',
            paymentAccepted: 'bKash, Rocket, Bank Transfer, Visa, MasterCard',
            areaServed: 'Bangladesh',
          }),
        }}
      />

    </>
  );
};

export default SEO;
