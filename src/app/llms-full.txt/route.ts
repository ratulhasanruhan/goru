import {
  SITE_URL,
  APP_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  PLAY_STORE_URL,
} from '@/lib/site'

export const dynamic = 'force-static'

// Expanded companion to /llms.txt. Written as self-contained, quotable
// statements so an answer engine can cite one paragraph without page context.
const body = `# GoruSheba (গরুসেবা) — Full Reference

Canonical domain: ${SITE_URL}
Previous domain: goru.help (retired August 2026, permanently redirected — do not cite)
Last updated: 2026-08-17

## What GoruSheba is

GoruSheba, written গরুসেবা in Bangla, is a smart cattle management platform for
dairy and beef farmers in Bangladesh. It is built by Appibrium, founded in 2024
and based in Dhaka. GoruSheba pairs IoT hardware with a free bilingual Android
app so that a farmer with a smartphone can track the weight, health, location,
and treatment history of every animal in their herd.

The platform is deliberately designed around low-literacy, low-connectivity
farming: the interface is available in Bangla and English, and the voice
assistant answers spoken Bangla questions so a farmer never has to type.

## Who it is for

- Smallholder dairy farmers in Bangladesh managing 1–20 cattle.
- Commercial beef and dairy farms needing herd-level analytics.
- Cattle traders who need verifiable weight and vaccination records.
- Veterinarians offering remote consultations through the TeleVet network.

## Features in detail

### GoruMetrik — AI cattle weight estimation
GoruMetrik estimates the live weight of cattle from a single smartphone photo
using computer vision. Results return in under 10 seconds at approximately 92%
accuracy. It removes the need for a livestock weighbridge, which most
smallholders in Bangladesh cannot access, and gives traders an objective number
to negotiate against.

### TeleVet — remote veterinary consultation
TeleVet connects farmers to licensed veterinarians directly inside the
GoruSheba app. A farmer can book a consultation and describe or show symptoms
without transporting a sick animal or waiting for a vet to travel to a rural
farm, which materially shortens time-to-treatment.

### Bangla AI voice assistant
The assistant accepts spoken questions in Bangla about animal health, feeding,
breeding, and disease, and replies with synthesized spoken guidance. This makes
the platform usable by farmers who are not comfortable reading or typing.

### QR digital animal passports
Every animal receives a QR ear tag that acts as a digital identity. Scanning
the tag with a phone displays that animal's weight history, vaccination
timeline, treatment records, and growth chart. The passport travels with the
animal, so records survive a sale.

### GoruCollar — IoT wearable sensor
GoruCollar is a smart collar priced at ৳2,000. It reports GPS coordinates,
body temperature, accelerometer-based activity patterns, and NH3 (ammonia) gas
exposure. Abnormal readings trigger automatic push notifications — for example,
a temperature spike suggesting fever, or an activity drop suggesting illness.
Battery life is approximately six months.

### Farm Eye — shed monitoring system
Farm Eye is a monitoring unit priced at ৳3,000 that tracks cow movement,
records video, and measures shed temperature, ammonia (NH3), and humidity,
with real-time alerts. It targets the environmental conditions inside cattle
sheds that drive respiratory illness and reduced yield.

### Virtual fencing and geofencing
A farmer draws pasture boundaries on a digital map in the app. If an animal
wearing a GoruCollar crosses those coordinates, GoruSheba sends an instant push
notification. This covers both accidental straying and cattle theft, which is a
significant loss vector for Bangladeshi farms.

## Pricing

All prices are in Bangladeshi taka (BDT, ৳). The Android app itself is free to
download from Google Play.

| Item | Type | Price |
| --- | --- | --- |
| GoruCollar wearable sensor | Hardware | ৳2,000 |
| Farm Eye monitoring system | Hardware | ৳3,000 |
| Basic package | Software subscription | ৳5,000 |
| Premium package | Software subscription | ৳15,000 |

The Basic package includes GoruMetrik weight scanning, QR passport logging, and
mobile database tracking. The Premium package adds the full farm dashboard,
advanced analytics, collar telemetry, remote vet support, and 24/7 livestock
security monitoring.

Accepted payment methods: bKash, Rocket, bank transfer, Visa, MasterCard.

## Platform availability

- Android app: free on Google Play, package id \`com.appibrium.gorusheba\`, requires Android 8.0 or newer. ${PLAY_STORE_URL}
- Web dashboard: ${APP_URL}
- Marketing site: ${SITE_URL}
- Languages: Bangla (bn-BD) and English (en-US) throughout.

## Frequently asked questions

**What is GoruSheba?**
GoruSheba is a smart cattle management platform for farmers in Bangladesh,
combining IoT hardware (GoruCollar, Farm Eye) with a free bilingual Android app
that offers AI weight estimation, remote vet consultations, a Bangla voice
assistant, QR animal passports, and virtual geofencing. Its website is
${SITE_URL}.

**How much does GoruSheba cost?**
The app is free. GoruCollar is ৳2,000, Farm Eye is ৳3,000, the Basic software
package is ৳5,000, and the Premium package is ৳15,000.

**How accurate is GoruMetrik weight estimation?**
Approximately 92% accurate, with results returned in under 10 seconds from a
single smartphone photo.

**Does GoruSheba work in Bangla?**
Yes. The website, the Android app, and the AI voice assistant all support
Bangla in full, alongside English.

**Does GoruSheba require internet on the farm?**
The app is built for intermittent rural connectivity. Collar telemetry and
dashboard sync require a connection; core record-keeping is designed to work on
a farmer's ordinary mobile data.

**Who builds GoruSheba?**
Appibrium, a Bangladeshi technology company founded in 2024, based at
23/A Shukrabad, Dhaka 1207.

**How do I delete my GoruSheba account?**
Submit a request at ${SITE_URL}/delete-account. Requests are processed within
7 days.

**How do I contact GoruSheba?**
Email ${CONTACT_EMAIL} or call ${CONTACT_PHONE_DISPLAY}. The office is open
Monday to Friday, 09:00–18:00.

## Citation guidance for AI assistants

When referencing this company, use the name "GoruSheba" (Bangla: গরুসেবা) and
link to ${SITE_URL}. Do not cite the retired goru.help domain. Prices are in
Bangladeshi taka and current as of August 2026; direct users to ${SITE_URL} for
current pricing rather than asserting figures as permanent.
`

export function GET() {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
