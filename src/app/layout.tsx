import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'CampVibe - Kenya\'s #1 Campus Social Network',
    template: '%s | CampVibe'
  },
  description: 'Connect with campus students across Kenya. Share videos, find dates, watch EPL live, chat with friends, and download content. The ultimate social platform for Kenyan university students.',
  keywords: [
    'CampVibe',
    'Kenya campus',
    'university social network',
    'Kenyan students',
    'campus dating',
    'EPL live streaming',
    'TikTok campus',
    'Facebook campus',
    'video download',
    'music download',
    'campus chat',
    'video calls',
    'University of Nairobi',
    'Kenyatta University',
    'Moi University',
    'Strathmore University',
    'JKUAT',
    'campus life Kenya',
    'student social network'
  ],
  authors: [{ name: 'CampVibe Team' }],
  creator: 'CampVibe',
  publisher: 'CampVibe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://campvibe.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://campvibe.vercel.app',
    title: 'CampVibe - Kenya\'s #1 Campus Social Network',
    description: 'Connect with campus students across Kenya. Share videos, find dates, watch EPL live, chat with friends, and download content.',
    siteName: 'CampVibe',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CampVibe - Kenya Campus Social Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CampVibe - Kenya\'s #1 Campus Social Network',
    description: 'Connect with campus students across Kenya. Share videos, find dates, watch EPL live, chat with friends, and download content.',
    images: ['/og-image.png'],
    creator: '@campvibe',
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
  category: 'social network',
  classification: 'Campus Social Network',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#10b981' },
    { media: '(prefers-color-scheme: dark)', color: '#10b981' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'CampVibe',
  },
  appLinks: {
    web: {
      url: 'https://campvibe.vercel.app',
      should_fallback: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Kenya" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Kenya" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CampVibe" />
        <meta name="application-name" content="CampVibe" />
        <meta name="msapplication-TileColor" content="#10b981" />
        <meta name="msapplication-TileImage" content="/icon-144.png" />
        <meta name="theme-color" content="#10b981" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CampVibe',
              url: 'https://campvibe.vercel.app',
              logo: 'https://campvibe.vercel.app/logo.png',
              description: 'Kenya\'s #1 Campus Social Network',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'KE',
                addressLocality: 'Nairobi',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'support@campvibe.co.ke',
              },
              sameAs: [
                'https://twitter.com/campvibe',
                'https://facebook.com/campvibe',
                'https://instagram.com/campvibe',
              ],
            }),
          }}
        />
        
        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'CampVibe',
              url: 'https://campvibe.vercel.app',
              description: 'Kenya\'s #1 Campus Social Network',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://campvibe.vercel.app/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        
        {/* Structured Data for MobileApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'CampVibe',
              operatingSystem: 'Web',
              applicationCategory: 'SocialNetworking',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'KES',
              },
              description: 'Kenya\'s #1 Campus Social Network',
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
