import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL, LANG_LABELS, SUPPORTED_LANGS, translations, type Lang } from '@/lib/i18n'

const languageSummaries: Record<Lang, string> = {
  en: 'English landing page for the Mind Mirror AI diary and mood tracker app.',
  ko: '한국어 랜딩 페이지에서 Mind Mirror AI 감정 일기 앱을 확인할 수 있습니다.',
  ja: '日本語のランディングページでMind Mirror AI感情日記アプリを紹介しています。',
  zh: '中文版落地页介绍 Mind Mirror AI 情感日记应用。',
}

export const metadata: Metadata = {
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
  robots: 'index, follow',
}

export default function RootPage() {
  const defaultCopy = translations.en

  return (
    <main className="root-directory">
      <section className="root-directory__hero">
        <p className="root-directory__eyebrow">Mind Mirror</p>
        <h1 className="root-directory__title">AI diary and mood tracker in 4 languages</h1>
        <p className="root-directory__lead">
          Mind Mirror is a static landing page for an AI-powered emotion diary app. Choose your
          language below to view the fully localized page that Google should index.
        </p>

        <div className="root-directory__actions" aria-label="Language pages">
          {SUPPORTED_LANGS.map((lang) => (
            <Link key={lang} href={`/${lang}/`} className="root-directory__lang-card">
              <strong>{LANG_LABELS[lang]}</strong>
              <span>{languageSummaries[lang]}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="root-directory__content">
        <div className="root-directory__panel">
          <h2>What this page is for</h2>
          <p>
            This root page exists as the default international entry point. Each language version is
            pre-rendered as a static HTML file and includes localized metadata, canonical URLs, and
            alternate language annotations.
          </p>
        </div>

        <div className="root-directory__panel">
          <h2>Mind Mirror app highlights</h2>
          <ul className="root-directory__list">
            <li>{defaultCopy['feat1.title']}: {defaultCopy['feat1.desc']}</li>
            <li>{defaultCopy['feat6.title']}: {defaultCopy['feat6.desc']}</li>
            <li>{defaultCopy['feat3.title']}: {defaultCopy['feat3.desc']}</li>
            <li>{defaultCopy['feat5.title']}: {defaultCopy['feat5.desc']}</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
