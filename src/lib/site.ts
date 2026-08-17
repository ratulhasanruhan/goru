/**
 * Single source of truth for the site's identity.
 * Change the domain here and it propagates to metadata, sitemap,
 * structured data, llms.txt route and every hard-coded link.
 */

export const SITE_URL = 'https://goru.digital'
export const APP_URL = 'https://app.goru.digital'
export const CONTACT_EMAIL = 'hello@goru.digital'
export const CONTACT_PHONE = '+880-1789-536-985'
export const CONTACT_PHONE_DISPLAY = '+880 1789 536 985'

export const SITE_NAME = 'GoruSheba'
export const SITE_NAME_BN = 'গরুসেবা'
export const LEGAL_NAME = 'Appibrium'

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.appibrium.gorusheba'
export const PLAY_STORE_ID = 'com.appibrium.gorusheba'

export const SOCIAL_LINKS = [
  'https://facebook.com/gorusheba',
  'https://www.youtube.com/@appibrium',
  'https://www.linkedin.com/company/appibrium/',
  PLAY_STORE_URL,
  APP_URL,
  'https://peerlist.io/ratulhasan/project/gorusheba--iot--ai-farming',
  'https://www.producthunt.com/products/gorusheba',
]

/** Absolute URL for a site-relative path. */
export const absoluteUrl = (path = '/') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

export const OG_IMAGE = absoluteUrl('/banner.jpg')
export const LOGO_URL = absoluteUrl('/logo.png')

/**
 * Stable @id anchors for JSON-LD. Every schema block references these
 * instead of re-declaring the entity, so search and answer engines resolve
 * one organization / one website rather than several near-duplicates.
 */
export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const APP_ID = `${SITE_URL}/#mobileapp`
