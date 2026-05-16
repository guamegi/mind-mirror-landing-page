import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL, type Lang, OG_LOCALE_MAP, SUPPORTED_LANGS } from '@/lib/i18n'
import { guideSlugs, guides, resourceCopy } from '@/lib/content'

export async function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale = lang as Lang
  const copy = resourceCopy[locale]
  const url = `${BASE_URL}/${locale}/guides/`

  return {
    title: `Mind Mirror ${copy.breadcrumbGuides}`,
    description: copy.sectionSubtitle,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((item) => [item, `${BASE_URL}/${item}/guides/`]).concat([['x-default', `${BASE_URL}/en/guides/`]])
      ),
    },
    openGraph: {
      type: 'website',
      url,
      title: `Mind Mirror ${copy.breadcrumbGuides}`,
      description: copy.sectionSubtitle,
      locale: OG_LOCALE_MAP[locale],
      images: [`${BASE_URL}/images/og-image.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Mind Mirror ${copy.breadcrumbGuides}`,
      description: copy.sectionSubtitle,
      images: [`${BASE_URL}/images/og-image.png`],
    },
  }
}

export default async function GuidesIndexPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = lang as Lang
  const copy = resourceCopy[locale]

  return (
    <main className="content-page">
      <section className="content-hero">
        <div className="section-container">
          <nav className="content-breadcrumbs" aria-label="Breadcrumb">
            <Link href={`/${locale}/`}>{copy.breadcrumbHome}</Link>
            <span>/</span>
            <span>{copy.breadcrumbGuides}</span>
          </nav>
          <div className="content-hero__grid">
            <div>
              <span className="section-badge">{copy.guidesLabel}</span>
              <h1 className="content-title">{copy.breadcrumbGuides}</h1>
              <p className="content-subtitle">{copy.guidesDescription}</p>
            </div>
            <div className="content-hero__aside">
              <Link href={`/${locale}/`} className="btn-secondary">{copy.backToHome}</Link>
              <Link href={`/${locale}/emotions/`} className="btn-primary">{copy.exploreEmotions}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-container">
          <div className="content-card-grid">
            {guideSlugs.map((slug) => {
              const guide = guides[slug][locale]
              return (
                <article key={slug} className="content-card">
                  <span className="content-card__eyebrow">{copy.breadcrumbGuides}</span>
                  <h2>{guide.title}</h2>
                  <p>{guide.description}</p>
                  <ul className="content-mini-list">
                    {guide.prompts.slice(0, 2).map((prompt) => (
                      <li key={prompt}>{prompt}</li>
                    ))}
                  </ul>
                  <Link href={`/${locale}/guides/${slug}/`} className="content-card__link">{copy.guidesCta}</Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
