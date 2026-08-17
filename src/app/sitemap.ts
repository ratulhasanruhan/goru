import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Date of the goru.digital migration. Bump when page content actually
// changes — a lastmod that moves on every build is ignored by crawlers.
const LAST_MODIFIED = new Date('2026-08-17')

type Entry = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

// Only same-host, crawlable URLs belong here. External profiles (Play Store,
// Product Hunt, Peerlist) and #hash fragments are not separate documents and
// were previously reported as sitemap errors — they live in JSON-LD `sameAs`
// and on-page links instead.
// /delete-account is intentionally absent: it is marked noindex, and listing
// a noindex URL in the sitemap is a contradictory signal.
const entries: Entry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(({ path, changeFrequency, priority }) => {
    const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`
    const bnUrl = path === '/' ? `${SITE_URL}/?lang=bn` : `${url}?lang=bn`

    return {
      url,
      lastModified: LAST_MODIFIED,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          en: url,
          bn: bnUrl,
          'x-default': url,
        },
      },
    }
  })
}
