import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.goru.help'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
          bn: `${baseUrl}/?lang=bn`,
        },
      },
    },
    {
      url: `${baseUrl}/?lang=bn`,
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: baseUrl,
          bn: `${baseUrl}/?lang=bn`,
        },
      },
    },
    {
      url: 'https://app.goru.help/',
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          en: 'https://app.goru.help/',
          bn: 'https://app.goru.help/?lang=bn',
        },
      },
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'monthly',
      priority: 0.3,
      alternates: {
        languages: {
          en: `${baseUrl}/privacy-policy`,
          bn: `${baseUrl}/privacy-policy?lang=bn`,
        },
      },
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'monthly',
      priority: 0.3,
      alternates: {
        languages: {
          en: `${baseUrl}/terms-of-service`,
          bn: `${baseUrl}/terms-of-service?lang=bn`,
        },
      },
    },
    {
      url: `${baseUrl}/delete-account`,
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'monthly',
      priority: 0.2,
      alternates: {
        languages: {
          en: `${baseUrl}/delete-account`,
          bn: `${baseUrl}/delete-account?lang=bn`,
        },
      },
    },
    {
      url: `${baseUrl}/#products`,
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/#products`,
          bn: `${baseUrl}/?lang=bn#products`,
        },
      },
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/#contact`,
          bn: `${baseUrl}/?lang=bn#contact`,
        },
      },
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/#about`,
          bn: `${baseUrl}/?lang=bn#about`,
        },
      },
    },
    {
      url: `${baseUrl}/#features`,
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/#features`,
          bn: `${baseUrl}/?lang=bn#features`,
        },
      },
    },
    {
      url: `${baseUrl}/#home`,
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/#home`,
          bn: `${baseUrl}/?lang=bn#home`,
        },
      },
    },
    {
      url: 'https://play.google.com/store/apps/details?id=com.appibrium.gorusheba',
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://peerlist.io/ratulhasan/project/gorusheba--iot--ai-farming',
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.producthunt.com/products/gorusheba',
      lastModified: new Date('2025-01-27'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
