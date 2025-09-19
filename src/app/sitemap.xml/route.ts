import { NextResponse } from 'next/server';

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Homepage -->
  <url>
    <loc>https://www.goru.help/</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.goru.help/" />
    <xhtml:link rel="alternate" hreflang="bn" href="https://www.goru.help/?lang=bn" />
  </url>

  <!-- Bengali Homepage -->
  <url>
    <loc>https://www.goru.help/?lang=bn</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.goru.help/" />
    <xhtml:link rel="alternate" hreflang="bn" href="https://www.goru.help/?lang=bn" />
  </url>

  <!-- Web Application -->
  <url>
    <loc>https://app.goru.help/</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://app.goru.help/" />
    <xhtml:link rel="alternate" hreflang="bn" href="https://app.goru.help/?lang=bn" />
  </url>

  <!-- Privacy Policy -->
  <url>
    <loc>https://www.goru.help/privacy-policy</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.goru.help/privacy-policy" />
    <xhtml:link rel="alternate" hreflang="bn" href="https://www.goru.help/privacy-policy?lang=bn" />
  </url>

  <!-- Terms of Service -->
  <url>
    <loc>https://www.goru.help/terms-of-service</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.goru.help/terms-of-service" />
    <xhtml:link rel="alternate" hreflang="bn" href="https://www.goru.help/terms-of-service?lang=bn" />
  </url>

  <!-- Delete Account -->
  <url>
    <loc>https://www.goru.help/delete-account</loc>
    <lastmod>2025-01-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.2</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.goru.help/delete-account" />
    <xhtml:link rel="alternate" hreflang="bn" href="https://www.goru.help/delete-account?lang=bn" />
  </url>

  <!-- Products Section (Virtual URLs for better SEO) -->
  <url>
    <loc>https://www.goru.help/#products</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.goru.help/#products" />
    <xhtml:link rel="alternate" hreflang="bn" href="https://www.goru.help/?lang=bn#products" />
  </url>

  <!-- Contact Section -->
  <url>
    <loc>https://www.goru.help/#contact</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.goru.help/#contact" />
    <xhtml:link rel="alternate" hreflang="bn" href="https://www.goru.help/?lang=bn#contact" />
  </url>

  <!-- About Section -->
  <url>
    <loc>https://www.goru.help/#about</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.goru.help/#about" />
    <xhtml:link rel="alternate" hreflang="bn" href="https://www.goru.help/?lang=bn#about" />
  </url>

  <!-- Features Section -->
  <url>
    <loc>https://www.goru.help/#features</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.goru.help/#features" />
    <xhtml:link rel="alternate" hreflang="bn" href="https://www.goru.help/?lang=bn#features" />
  </url>

</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}
