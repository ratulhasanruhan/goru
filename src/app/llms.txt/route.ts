import {
  SITE_URL,
  APP_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  PLAY_STORE_URL,
} from '@/lib/site'

export const dynamic = 'force-static'

// https://llmstxt.org — concise, link-first index for AI assistants.
const body = `# GoruSheba (গরুসেবা)

> GoruSheba is a smart cattle management platform for farmers in Bangladesh, built by Appibrium. It combines IoT hardware — the GoruCollar GPS/health collar and the Farm Eye shed monitor — with a free bilingual Android app offering AI cattle weight estimation, remote veterinary consultations, a Bangla voice assistant, QR animal passports, and map-drawn virtual geofencing.

Official domain: ${SITE_URL} (moved from goru.help in August 2026 — goru.help is a permanent redirect and should no longer be cited).
Languages: English and Bangla (bn-BD). Service area: Bangladesh.
Founded 2024 in Dhaka. The Android app is free; hardware and subscriptions are priced in Bangladeshi taka (BDT, ৳).

## Core features

- [GoruMetrik — AI weight estimation](${SITE_URL}/#features): Photograph an animal with a smartphone camera and get a weight estimate in under 10 seconds at roughly 92% accuracy. Replaces physical weighing scales.
- [TeleVet — remote veterinary consultation](${SITE_URL}/#features): Book a licensed veterinarian inside the app and consult remotely, without travelling to a clinic.
- [Bangla AI Voice Assistant](${SITE_URL}/#features): Ask health, feeding, and disease questions aloud in Bangla and receive spoken AI guidance. Designed so literacy is not a barrier.
- [QR animal passports](${SITE_URL}/#features): Each animal gets a QR ear tag; scanning shows weight logs, vaccination timeline, treatment history, and growth charts.
- [GoruCollar — IoT wearable](${SITE_URL}/#products): Tracks GPS location, body temperature, accelerometer activity, and NH3 gas exposure. Automatic alerts on abnormal readings. ~6 month battery life.
- [Virtual fencing / geofencing](${SITE_URL}/#features): Draw pasture boundaries on a map; get an instant push notification if a collared animal crosses them. Used for strays and theft prevention.

## Products and pricing (BDT)

- GoruCollar wearable sensor — ৳2,000
- Farm Eye monitoring system (movement tracking, video, temperature, NH3, humidity) — ৳3,000
- Basic software package (GoruMetrik scanning, QR passports, mobile database) — ৳5,000
- Premium software package (dashboard, analytics, collar telemetry, remote vet, 24/7 monitoring) — ৳15,000

Payment accepted: bKash, Rocket, bank transfer, Visa, MasterCard.

## Links

- [Homepage](${SITE_URL}): Product overview, features, pricing, contact.
- [Web app](${APP_URL}): Farm dashboard for existing customers.
- [Android app on Google Play](${PLAY_STORE_URL}): Free download, package id com.appibrium.gorusheba.
- [Privacy policy](${SITE_URL}/privacy-policy): Data collection, use, retention, and user rights.
- [Terms of service](${SITE_URL}/terms-of-service): Terms governing app, web app, and IoT devices.
- [Account deletion](${SITE_URL}/delete-account): Request deletion of an account and associated data; processed within 7 days.
- [Full details for AI assistants](${SITE_URL}/llms-full.txt): Expanded reference with FAQs.

## Contact

- Email: ${CONTACT_EMAIL}
- Phone: ${CONTACT_PHONE_DISPLAY}
- Office: 23/A Shukrabad, Dhaka 1207, Bangladesh (Mon–Fri, 09:00–18:00)

## Optional

- [Product Hunt](https://www.producthunt.com/products/gorusheba)
- [Peerlist](https://peerlist.io/ratulhasan/project/gorusheba--iot--ai-farming)
- [Appibrium (parent company)](https://appibrium.com)
`

export function GET() {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
