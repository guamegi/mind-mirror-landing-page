import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BASE_URL, getOgImageUrl, type Lang, OG_LOCALE_MAP, SUPPORTED_LANGS } from '@/lib/i18n'
import { emotionSlugs, emotions, resourceCopy, type EmotionSlug } from '@/lib/content'

export async function generateStaticParams() {
  return SUPPORTED_LANGS.flatMap((lang) => emotionSlugs.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  if (!emotionSlugs.includes(slug as EmotionSlug)) {
    return {}
  }

  const locale = lang as Lang
  const emotion = emotions[slug as EmotionSlug][locale]
  const url = `${BASE_URL}/${locale}/emotions/${slug}/`
  const ogImageUrl = getOgImageUrl(locale)

  return {
    title: `${emotion.name} | Mind Mirror`,
    description: emotion.summary,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((item) => [item, `${BASE_URL}/${item}/emotions/${slug}/`]).concat([['x-default', `${BASE_URL}/en/emotions/${slug}/`]])
      ),
    },
    openGraph: {
      type: 'article',
      url,
      title: `${emotion.name} | Mind Mirror`,
      description: emotion.summary,
      locale: OG_LOCALE_MAP[locale],
      images: [ogImageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${emotion.name} | Mind Mirror`,
      description: emotion.summary,
      images: [ogImageUrl],
    },
  }
}

export default async function EmotionDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  if (!emotionSlugs.includes(slug as EmotionSlug)) {
    notFound()
  }

  const locale = lang as Lang
  const emotion = emotions[slug as EmotionSlug][locale]
  const copy = resourceCopy[locale]
  const related = emotionSlugs.filter((item) => item !== slug).slice(0, 4)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: emotion.name,
    description: emotion.summary,
    inLanguage: locale,
    author: { '@type': 'Organization', name: 'Mind Mirror' },
    publisher: { '@type': 'Organization', name: 'Mind Mirror' },
    mainEntityOfPage: `${BASE_URL}/${locale}/emotions/${slug}/`,
    image: getOgImageUrl(locale),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: copy.breadcrumbHome, item: `${BASE_URL}/${locale}/` },
      { '@type': 'ListItem', position: 2, name: copy.breadcrumbEmotions, item: `${BASE_URL}/${locale}/emotions/` },
      { '@type': 'ListItem', position: 3, name: emotion.name, item: `${BASE_URL}/${locale}/emotions/${slug}/` },
    ],
  }

  return (
    <main className="content-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="content-hero">
        <div className="section-container">
          <nav className="content-breadcrumbs" aria-label="Breadcrumb">
            <Link href={`/${locale}/`}>{copy.breadcrumbHome}</Link>
            <span>/</span>
            <Link href={`/${locale}/emotions/`}>{copy.breadcrumbEmotions}</Link>
            <span>/</span>
            <span>{emotion.name}</span>
          </nav>
          <span className="section-badge">{copy.breadcrumbEmotions}</span>
          <h1 className="content-title">{emotion.name}</h1>
          <p className="content-subtitle">{emotion.summary}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-container article-layout">
          <article className="article-card">
            <p className="article-lead">{emotion.overview}</p>
            <section className="article-section">
              <h2>{copy.signalsTitle}</h2>
              <ul className="article-list">
                {emotion.signals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </section>
            <section className="article-section">
              <h2>{copy.journalTipsTitle}</h2>
              <ul className="article-list">
                {emotion.journalTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>
            <section className="article-section">
              <h2>{copy.articlePromptsTitle}</h2>
              <p>{emotion.prompt}</p>
            </section>
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>{copy.emotionListTitle}</h2>
              <ul className="sidebar-list">
                {related.map((item) => (
                  <li key={item}>
                    <Link href={`/${locale}/emotions/${item}/`}>{emotions[item][locale].name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar-card sidebar-card--cta">
              <h2>{copy.downloadTitle}</h2>
              <p>{copy.downloadBody}</p>
              <Link href={`/${locale}/guides/`} className="btn-primary">{copy.exploreGuides}</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
