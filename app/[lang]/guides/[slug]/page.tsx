import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BASE_URL, type Lang, OG_LOCALE_MAP, SUPPORTED_LANGS } from '@/lib/i18n'
import { guideSlugs, guides, resourceCopy, type GuideSlug } from '@/lib/content'

export async function generateStaticParams() {
  return SUPPORTED_LANGS.flatMap((lang) => guideSlugs.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  if (!guideSlugs.includes(slug as GuideSlug)) {
    return {}
  }

  const locale = lang as Lang
  const guide = guides[slug as GuideSlug][locale]
  const url = `${BASE_URL}/${locale}/guides/${slug}/`

  return {
    title: `${guide.title} | Mind Mirror`,
    description: guide.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((item) => [item, `${BASE_URL}/${item}/guides/${slug}/`]).concat([['x-default', `${BASE_URL}/en/guides/${slug}/`]])
      ),
    },
    openGraph: {
      type: 'article',
      url,
      title: `${guide.title} | Mind Mirror`,
      description: guide.description,
      locale: OG_LOCALE_MAP[locale],
      images: [`${BASE_URL}/images/og-image.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.title} | Mind Mirror`,
      description: guide.description,
      images: [`${BASE_URL}/images/og-image.png`],
    },
  }
}

export default async function GuideDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  if (!guideSlugs.includes(slug as GuideSlug)) {
    notFound()
  }

  const locale = lang as Lang
  const guide = guides[slug as GuideSlug][locale]
  const copy = resourceCopy[locale]
  const related = guideSlugs.filter((item) => item !== slug).slice(0, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: guide.title,
    description: guide.description,
    inLanguage: locale,
    author: { '@type': 'Organization', name: 'Mind Mirror' },
    publisher: { '@type': 'Organization', name: 'Mind Mirror' },
    mainEntityOfPage: `${BASE_URL}/${locale}/guides/${slug}/`,
    image: `${BASE_URL}/images/og-image.png`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: copy.breadcrumbHome, item: `${BASE_URL}/${locale}/` },
      { '@type': 'ListItem', position: 2, name: copy.breadcrumbGuides, item: `${BASE_URL}/${locale}/guides/` },
      { '@type': 'ListItem', position: 3, name: guide.title, item: `${BASE_URL}/${locale}/guides/${slug}/` },
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
            <Link href={`/${locale}/guides/`}>{copy.breadcrumbGuides}</Link>
            <span>/</span>
            <span>{guide.title}</span>
          </nav>
          <span className="section-badge">{copy.breadcrumbGuides}</span>
          <h1 className="content-title">{guide.title}</h1>
          <p className="content-subtitle">{guide.description}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-container article-layout">
          <article className="article-card">
            <p className="article-lead">{guide.intro}</p>
            {guide.sections.map((section) => (
              <section key={section.heading} className="article-section">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <section className="article-section">
              <h2>{copy.articlePromptsTitle}</h2>
              <ul className="article-list">
                {guide.prompts.map((prompt) => (
                  <li key={prompt}>{prompt}</li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>{copy.guideListTitle}</h2>
              <ul className="sidebar-list">
                {related.map((item) => (
                  <li key={item}>
                    <Link href={`/${locale}/guides/${item}/`}>{guides[item][locale].title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar-card sidebar-card--cta">
              <h2>{copy.downloadTitle}</h2>
              <p>{copy.downloadBody}</p>
              <Link href={`/${locale}/`} className="btn-primary">{copy.backToHome}</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
