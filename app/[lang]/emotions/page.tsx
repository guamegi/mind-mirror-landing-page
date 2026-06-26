import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL, getOgImageUrl, type Lang, OG_LOCALE_MAP, SUPPORTED_LANGS } from '@/lib/i18n'
import { emotionSlugs, emotions, resourceCopy } from '@/lib/content'

export async function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale = lang as Lang
  const copy = resourceCopy[locale]
  const url = `${BASE_URL}/${locale}/emotions/`
  const ogImageUrl = getOgImageUrl(locale)

  return {
    title: `Mind Mirror ${copy.breadcrumbEmotions}`,
    description: copy.emotionsDescription,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((item) => [item, `${BASE_URL}/${item}/emotions/`]).concat([['x-default', `${BASE_URL}/en/emotions/`]])
      ),
    },
    openGraph: {
      type: 'website',
      url,
      title: `Mind Mirror ${copy.breadcrumbEmotions}`,
      description: copy.emotionsDescription,
      locale: OG_LOCALE_MAP[locale],
      images: [ogImageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Mind Mirror ${copy.breadcrumbEmotions}`,
      description: copy.emotionsDescription,
      images: [ogImageUrl],
    },
  }
}

export default async function EmotionsIndexPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = lang as Lang
  const copy = resourceCopy[locale]
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: copy.breadcrumbHome, item: `${BASE_URL}/${locale}/` },
      { '@type': 'ListItem', position: 2, name: copy.breadcrumbEmotions, item: `${BASE_URL}/${locale}/emotions/` },
    ],
  }

  return (
    <main className="content-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="content-hero">
        <div className="section-container">
          <nav className="content-breadcrumbs" aria-label="Breadcrumb">
            <Link href={`/${locale}/`}>{copy.breadcrumbHome}</Link>
            <span>/</span>
            <span>{copy.breadcrumbEmotions}</span>
          </nav>
          <div className="content-hero__grid">
            <div>
              <span className="section-badge">{copy.emotionsLabel}</span>
              <h1 className="content-title">{copy.breadcrumbEmotions}</h1>
              <p className="content-subtitle">{copy.emotionsDescription}</p>
            </div>
            <div className="content-hero__aside">
              <Link href={`/${locale}/`} className="btn-secondary">{copy.backToHome}</Link>
              <Link href={`/${locale}/guides/`} className="btn-primary">{copy.exploreGuides}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-container">
          <div className="content-card-grid">
            {emotionSlugs.map((slug) => {
              const emotion = emotions[slug][locale]
              return (
                <article key={slug} className="content-card">
                  <span className="content-card__eyebrow">{copy.breadcrumbEmotions}</span>
                  <h2>{emotion.name}</h2>
                  <p>{emotion.summary}</p>
                  <ul className="content-mini-list">
                    {emotion.signals.slice(0, 2).map((signal) => (
                      <li key={signal}>{signal}</li>
                    ))}
                  </ul>
                  <Link href={`/${locale}/emotions/${slug}/`} className="content-card__link">{copy.emotionsCta}</Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
