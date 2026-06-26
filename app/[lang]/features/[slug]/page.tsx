import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BASE_URL, getOgImageUrl, getStoreUrls, type Lang, OG_LOCALE_MAP, SUPPORTED_LANGS } from '@/lib/i18n'
import { featureSlugs, features, resourceCopy, type FeatureSlug } from '@/lib/content'

function getDownloadCopy(locale: Lang, featureTitle: string) {
  switch (locale) {
    case 'ko':
      return {
        title: `AI 감정 일기 앱으로 ${featureTitle} 바로 써보기`,
        body: `Mind Mirror에서 ${featureTitle} 기능을 실제로 사용해보세요. App Store와 Google Play에서 무료로 내려받아 감정 기록, AI 분석, 자동 일기 기능을 바로 시작할 수 있습니다.`,
        appStore: 'App Store에서 무료 다운로드',
        playStore: 'Google Play에서 무료 다운로드',
      }
    case 'ja':
      return {
        title: `${featureTitle}をAI感情日記アプリで試す`,
        body: `Mind Mirrorをダウンロードして、${featureTitle}機能をすぐに使えます。App StoreとGoogle Playで無料配信中です。`,
        appStore: 'App Storeで無料ダウンロード',
        playStore: 'Google Playで無料ダウンロード',
      }
    case 'zh':
      return {
        title: `在 AI 情绪日记应用中体验${featureTitle}`,
        body: `下载 Mind Mirror 后即可直接使用${featureTitle}功能。现在可在 App Store 和 Google Play 免费获取。`,
        appStore: 'App Store 免费下载',
        playStore: 'Google Play 免费下载',
      }
    default:
      return {
        title: `Try ${featureTitle} in an AI diary app`,
        body: `Download Mind Mirror to use ${featureTitle} in a real AI emotion diary app. It is available free on the App Store and Google Play.`,
        appStore: 'Free on the App Store',
        playStore: 'Free on Google Play',
      }
  }
}

export async function generateStaticParams() {
  return SUPPORTED_LANGS.flatMap((lang) => featureSlugs.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  if (!featureSlugs.includes(slug as FeatureSlug)) {
    return {}
  }

  const locale = lang as Lang
  const feature = features[slug as FeatureSlug][locale]
  const url = `${BASE_URL}/${locale}/features/${slug}/`
  const ogImageUrl = getOgImageUrl(locale)

  return {
    title: `${feature.title} | Mind Mirror`,
    description: feature.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((item) => [item, `${BASE_URL}/${item}/features/${slug}/`]).concat([['x-default', `${BASE_URL}/en/features/${slug}/`]])
      ),
    },
    openGraph: {
      type: 'website',
      url,
      title: `${feature.title} | Mind Mirror`,
      description: feature.description,
      locale: OG_LOCALE_MAP[locale],
      images: [ogImageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${feature.title} | Mind Mirror`,
      description: feature.description,
      images: [ogImageUrl],
    },
  }
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  if (!featureSlugs.includes(slug as FeatureSlug)) {
    notFound()
  }

  const locale = lang as Lang
  const feature = features[slug as FeatureSlug][locale]
  const copy = resourceCopy[locale]
  const related = featureSlugs.filter((item) => item !== slug).slice(0, 3)
  const downloadCopy = getDownloadCopy(locale, feature.title)
  const storeUrls = getStoreUrls(locale)

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: feature.title,
    description: feature.description,
    inLanguage: locale,
    url: `${BASE_URL}/${locale}/features/${slug}/`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: copy.breadcrumbHome, item: `${BASE_URL}/${locale}/` },
      { '@type': 'ListItem', position: 2, name: copy.breadcrumbFeatures, item: `${BASE_URL}/${locale}/features/` },
      { '@type': 'ListItem', position: 3, name: feature.title, item: `${BASE_URL}/${locale}/features/${slug}/` },
    ],
  }

  return (
    <main className="content-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="content-hero">
        <div className="section-container">
          <nav className="content-breadcrumbs" aria-label="Breadcrumb">
            <Link href={`/${locale}/`}>{copy.breadcrumbHome}</Link>
            <span>/</span>
            <Link href={`/${locale}/features/`}>{copy.breadcrumbFeatures}</Link>
            <span>/</span>
            <span>{feature.title}</span>
          </nav>
          <span className="section-badge">{copy.breadcrumbFeatures}</span>
          <h1 className="content-title">{feature.title}</h1>
          <p className="content-subtitle">{feature.description}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-container article-layout">
          <article className="article-card">
            <p className="article-lead">{feature.intro}</p>
            {feature.sections.map((section) => (
              <section key={section.heading} className="article-section">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <section className="article-section">
              <h2>{copy.featureHighlightsTitle}</h2>
              <ul className="article-list">
                {feature.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>{copy.featureListTitle}</h2>
              <ul className="sidebar-list">
                {related.map((item) => (
                  <li key={item}>
                    <Link href={`/${locale}/features/${item}/`}>{features[item][locale].title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar-card sidebar-card--cta">
              <h2>{downloadCopy.title}</h2>
              <p>{downloadCopy.body}</p>
              <a href={storeUrls.appStore} className="btn-primary" target="_blank" rel="noopener noreferrer">{downloadCopy.appStore}</a>
              <a href={storeUrls.playStore} className="btn-secondary" target="_blank" rel="noopener noreferrer">{downloadCopy.playStore}</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
