import type { Metadata } from 'next'
import { BASE_URL, LANG_LABELS, SUPPORTED_LANGS } from '@/lib/i18n'

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

const redirectScript = `
  (function () {
    try {
      var supported = ['en', 'ko', 'ja', 'zh'];
      var stored = localStorage.getItem('mm_lang');
      var browser = (navigator.language || '').slice(0, 2).toLowerCase();
      var lang = supported.indexOf(stored || '') >= 0
        ? stored
        : supported.indexOf(browser) >= 0
          ? browser
          : 'en';
      window.location.replace('/' + lang + '/');
    } catch (e) {
      window.location.replace('/en/');
    }
  })();
`

export default function RootPage() {
  return (
    <main>
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <noscript>
        <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '560px' }}>
            <h1 style={{ marginBottom: '12px' }}>Mind Mirror</h1>
            <p style={{ marginBottom: '20px' }}>
              JavaScript is required for automatic language redirect. Choose a language page below.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {SUPPORTED_LANGS.map((lang) => (
                <a
                  key={lang}
                  href={`/${lang}/`}
                  style={{
                    padding: '10px 16px',
                    borderRadius: '999px',
                    border: '1px solid #d8d6ff',
                    textDecoration: 'none',
                  }}
                >
                  {LANG_LABELS[lang]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </noscript>
    </main>
  )
}
