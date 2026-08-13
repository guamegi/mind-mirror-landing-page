import type { Metadata } from 'next'
import { BASE_URL, translations } from '@/lib/i18n'
import './globals.css'

const defaultTitle = translations.en['meta.title']
const defaultDescription = translations.en['meta.description']

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: defaultTitle,
  description: defaultDescription,
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
    languages: {
      en: `${BASE_URL}/en/`,
      ko: `${BASE_URL}/ko/`,
      ja: `${BASE_URL}/ja/`,
      zh: `${BASE_URL}/zh/`,
      'x-default': `${BASE_URL}/`,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Mind Mirror',
    title: defaultTitle,
    description: defaultDescription,
    url: BASE_URL,
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image-en.png',
        width: 1200,
        height: 630,
        alt: 'Mind Mirror app preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/images/og-image-en.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#6C63FF" />
      </head>
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('mm_theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              } catch(e) {}
            `
          }}
        />
        {children}
      </body>
    </html>
  )
}
