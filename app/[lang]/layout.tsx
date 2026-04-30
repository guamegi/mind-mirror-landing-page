import type { Metadata } from 'next'
import { translations, type Lang, OG_LOCALE_MAP, BASE_URL } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ko' }, { lang: 'ja' }, { lang: 'zh' }]
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = translations[lang as Lang]
  const ogLocaleAlternates = ['en_US', 'ko_KR', 'ja_JP', 'zh_CN'].filter(l => l !== OG_LOCALE_MAP[lang as Lang])

  return {
    title: t['meta.title'],
    description: t['meta.description'],
    keywords: 'AI diary, emotion tracking, mental wellness, 감정 일기, AI 분석, 마음 건강, mind mirror',
    authors: [{ name: 'Mind Mirror' }],
    robots: 'index, follow',
    alternates: {
      canonical: `${BASE_URL}/${lang}/`,
      languages: {
        'ko': `${BASE_URL}/ko/`,
        'en': `${BASE_URL}/en/`,
        'ja': `${BASE_URL}/ja/`,
        'zh': `${BASE_URL}/zh/`,
        'x-default': `${BASE_URL}/en/`,
      },
    },
    openGraph: {
      type: 'website',
      title: t['meta.title'],
      description: t['meta.description'],
      url: `${BASE_URL}/${lang}/`,
      locale: OG_LOCALE_MAP[lang as Lang],
      alternateLocale: ogLocaleAlternates,
      images: [`${BASE_URL}/images/og-image.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title: t['meta.title'],
      description: t['meta.description'],
      images: [`${BASE_URL}/images/og-image.png`],
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Mind Mirror',
  description: 'AI-powered emotion diary app that analyzes your daily entries with Google Gemini to provide mental wellness insights',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, Android',
  inLanguage: ['ko', 'en', 'ja', 'zh'],
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: { '@type': 'Organization', name: 'Mind Mirror' },
  installUrl: [
    'https://apps.apple.com/app/mind-mirror/id6759994294',
    'https://play.google.com/store/apps/details?id=com.mindmirror.mind_mirror',
  ],
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return (
    <>
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: `document.documentElement.lang='${lang}';` }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
