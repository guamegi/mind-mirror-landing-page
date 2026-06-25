import type { Metadata } from 'next'
import { translations, type Lang, OG_LOCALE_MAP, BASE_URL, getStoreUrls } from '@/lib/i18n'

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
    keywords: t['meta.keywords'],
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
      siteName: 'Mind Mirror',
      title: t['meta.title'],
      description: t['meta.description'],
      url: `${BASE_URL}/${lang}/`,
      locale: OG_LOCALE_MAP[lang as Lang],
      alternateLocale: ogLocaleAlternates,
      images: [
        {
          url: `${BASE_URL}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Mind Mirror — AI Emotion Diary App',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t['meta.title'],
      description: t['meta.description'],
      images: [`${BASE_URL}/images/og-image.png`],
    },
  }
}

const faqData: Record<Lang, { q: string; a: string }[]> = {
  ko: [
    {
      q: 'Mind Mirror는 무엇인가요?',
      a: 'Mind Mirror는 Google Gemini AI가 매일의 일기를 분석하여 감정 패턴을 발견하고 마음 건강 인사이트를 제공하는 무료 AI 감정 일기 앱입니다.',
    },
    {
      q: 'Mind Mirror는 무료인가요?',
      a: '네, Mind Mirror는 App Store와 Google Play에서 무료로 다운로드할 수 있습니다.',
    },
    {
      q: 'Mind Mirror는 어떤 AI 기술을 사용하나요?',
      a: 'Mind Mirror는 Google의 최신 AI 모델인 Gemini를 사용하여 일기를 분석하고 감정 요약, 심층 분석, 맞춤 조언을 제공합니다.',
    },
    {
      q: 'Mind Mirror가 지원하는 언어는 무엇인가요?',
      a: '한국어, 영어, 일본어, 중국어 4개 언어를 지원합니다.',
    },
    {
      q: '개인 일기 데이터는 안전한가요?',
      a: 'Face ID, Touch ID 등 생체인증과 PIN 잠금으로 일기를 안전하게 보호합니다. 개인정보는 철저히 보호됩니다.',
    },
    {
      q: 'Mind Mirror는 어떤 감정을 분석할 수 있나요?',
      a: '기쁨, 슬픔, 설렘, 뿌듯, 평온, 화남, 피곤 등 7가지 감정 카테고리를 AI가 자동으로 분석합니다.',
    },
    {
      q: '사진으로도 일기를 쓸 수 있나요?',
      a: '네, 사진을 첨부하면 AI가 장면과 감정을 분석해 일기를 자동으로 완성해줍니다.',
    },
  ],
  en: [
    {
      q: 'What is Mind Mirror?',
      a: 'Mind Mirror is a free AI emotion diary app powered by Google Gemini AI that analyzes your daily diary entries to discover emotion patterns and deliver mental wellness insights.',
    },
    {
      q: 'Is Mind Mirror free?',
      a: 'Yes, Mind Mirror is free to download on both the App Store and Google Play.',
    },
    {
      q: 'What AI technology does Mind Mirror use?',
      a: 'Mind Mirror uses Google Gemini, a state-of-the-art AI model, to analyze diary entries and provide emotion summaries, psychological analysis, and personalized advice.',
    },
    {
      q: 'What languages does Mind Mirror support?',
      a: 'Mind Mirror supports Korean, English, Japanese, and Chinese.',
    },
    {
      q: 'Is my diary data private and secure?',
      a: 'Your diary is protected with Face ID, Touch ID, and PIN lock. Your personal data is strictly secured and private.',
    },
    {
      q: 'What emotions can Mind Mirror analyze?',
      a: "Mind Mirror's AI automatically identifies 7 emotion categories: Joy, Sadness, Excitement, Pride, Calm, Anger, and Tiredness.",
    },
    {
      q: 'Can I create a diary entry from a photo?',
      a: 'Yes, simply attach a photo and the AI will analyze the scene and emotions to automatically generate your diary entry.',
    },
  ],
  ja: [
    {
      q: 'Mind Mirrorとは何ですか？',
      a: 'Mind MirrorはGoogle Gemini AIを使って毎日の日記を分析し、感情パターンを発見してメンタルウェルネスのインサイトを提供する無料のAI感情日記アプリです。',
    },
    {
      q: 'Mind Mirrorは無料ですか？',
      a: 'はい、Mind MirrorはApp StoreとGoogle Playで無料でダウンロードできます。',
    },
    {
      q: 'どのようなAI技術を使用していますか？',
      a: 'Mind MirrorはGoogleのGemini AIを使用して日記を分析し、感情サマリー、心理分析、個別アドバイスを提供します。',
    },
    {
      q: '対応言語は何ですか？',
      a: '韓国語、英語、日本語、中国語の4言語に対応しています。',
    },
    {
      q: '日記データは安全ですか？',
      a: 'Face ID、Touch ID、PINロックで日記を保護します。個人情報は厳重に管理されます。',
    },
    {
      q: 'どんな感情を分析できますか？',
      a: '喜び、悲しみ、ときめき、誇り、平静、怒り、疲れの7種類の感情をAIが自動的に分析します。',
    },
    {
      q: '写真から日記を作れますか？',
      a: 'はい、写真を添付するだけでAIが場面と感情を分析し、日記を自動生成します。',
    },
  ],
  zh: [
    {
      q: 'Mind Mirror是什么？',
      a: 'Mind Mirror是一款由Google Gemini AI驱动的免费AI情感日记应用，通过分析每日日记来发现情感模式并提供心理健康洞察。',
    },
    {
      q: 'Mind Mirror免费吗？',
      a: '是的，Mind Mirror可在App Store和Google Play免费下载。',
    },
    {
      q: '使用什么AI技术？',
      a: 'Mind Mirror使用Google Gemini AI分析日记内容，提供情感摘要、心理分析和个性化建议。',
    },
    {
      q: '支持哪些语言？',
      a: '支持韩语、英语、日语和中文四种语言。',
    },
    {
      q: '日记数据安全吗？',
      a: '通过Face ID、Touch ID和PIN密码保护日记安全，严格保护个人隐私。',
    },
    {
      q: '可以分析哪些情感？',
      a: 'AI自动识别7种情感类型：喜悦、悲伤、心动、自豪、平静、愤怒和疲惫。',
    },
    {
      q: '可以用照片写日记吗？',
      a: '可以，只需添加一张照片，AI就会分析场景和情绪，自动生成日记内容。',
    },
  ],
}

const howToData: Record<Lang, { name: string; description: string; steps: { name: string; text: string }[] }> = {
  ko: {
    name: 'Mind Mirror 사용 방법',
    description: '3단계로 Mind Mirror AI 감정 일기 앱을 시작하세요',
    steps: [
      { name: '일기 작성', text: '오늘 하루를 자유롭게 기록하세요. 텍스트와 사진으로 소중한 순간을 담을 수 있습니다.' },
      { name: 'AI 분석', text: 'AI가 일기를 분석하여 감정 요약, 심층 분석, 맞춤 조언을 자동으로 생성합니다.' },
      { name: '인사이트 확인', text: '주간 감정 트렌드, 심리 게이지, 키워드 패턴으로 자신을 더 깊이 이해하세요.' },
    ],
  },
  en: {
    name: 'How to Use Mind Mirror',
    description: 'Get started with the Mind Mirror AI emotion diary app in 3 simple steps',
    steps: [
      { name: 'Write a Diary', text: 'Freely record your day using text and photos to capture precious moments.' },
      { name: 'AI Analysis', text: 'AI analyzes your diary to automatically generate emotion summaries, deep analysis, and personalized advice.' },
      { name: 'Get Insights', text: 'Understand yourself more deeply through weekly emotion trends, psychology gauge, and keyword patterns.' },
    ],
  },
  ja: {
    name: 'Mind Mirrorの使い方',
    description: '3ステップでMind Mirror AI感情日記アプリを始めましょう',
    steps: [
      { name: '日記を書く', text: '今日一日をテキストと写真で自由に記録しましょう。' },
      { name: 'AI分析', text: 'AIが日記を分析し、感情サマリー、深層分析、個別アドバイスを自動生成します。' },
      { name: 'インサイト確認', text: '週間感情トレンドや心理ゲージで自分をより深く理解できます。' },
    ],
  },
  zh: {
    name: '如何使用Mind Mirror',
    description: '只需3步即可开始使用Mind Mirror AI情感日记应用',
    steps: [
      { name: '写日记', text: '用文字和照片自由记录今天，留住珍贵瞬间。' },
      { name: 'AI分析', text: 'AI分析日记，自动生成情感摘要、深层分析和个性化建议。' },
      { name: '查看洞察', text: '通过每周情感趋势和心理仪表盘，更深入了解自己。' },
    ],
  },
}

function buildJsonLd(lang: Lang) {
  const t = translations[lang]
  const pageUrl = `${BASE_URL}/${lang}/`
  const storeUrls = getStoreUrls(lang)

  const website = {
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Mind Mirror',
    description: t['meta.description'],
    inLanguage: lang,
  }

  const organization = {
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Mind Mirror',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/splash_logo.png`,
    },
    sameAs: [storeUrls.appStore, storeUrls.playStore],
  }

  const application = {
    '@type': 'MobileApplication',
    '@id': `${pageUrl}#app`,
    name: 'Mind Mirror',
    description: t['meta.description'],
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    inLanguage: lang,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@id': `${BASE_URL}/#organization` },
    installUrl: [storeUrls.appStore, storeUrls.playStore],
    featureList: [
      'AI emotion analysis powered by Google Gemini',
      'Conversational diary with AI',
      'Photo-based automatic diary generation',
      'Diary to poem conversion',
      'Diary proofreading and writing refinement',
      'Diary customization with stationery colors and stickers',
      'Emotion visualization with radar charts',
      'Relationship index analysis',
      'Privacy protection with biometrics',
      'Dark mode support',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '100',
      bestRating: '5',
    },
  }

  const faq = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faqData[lang].map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const howTo = {
    '@type': 'HowTo',
    '@id': `${pageUrl}#howto`,
    name: howToData[lang].name,
    description: howToData[lang].description,
    step: howToData[lang].steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [website, organization, application, faq, howTo],
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const jsonLd = buildJsonLd(lang as Lang)

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
