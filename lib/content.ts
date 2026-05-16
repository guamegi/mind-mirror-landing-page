import type { Lang } from '@/lib/i18n'

export type GuideSlug =
  | 'emotion-diary-how-to-start'
  | 'night-reflection-template'
  | 'journaling-when-you-feel-numb'
  | 'photo-diary-for-busy-days'
  | 'weekly-emotion-review'

export type EmotionSlug =
  | 'joy'
  | 'sadness'
  | 'calm'
  | 'anger'
  | 'excitement'
  | 'pride'
  | 'tiredness'

export type FeatureSlug =
  | 'ai-diary-chat'
  | 'photo-diary'
  | 'diary-to-poem'
  | 'diary-proofreading'
  | 'diary-customization'

type LocalizedGuide = {
  title: string
  description: string
  intro: string
  sections: { heading: string; body: string }[]
  prompts: string[]
}

type LocalizedEmotion = {
  name: string
  summary: string
  overview: string
  signals: string[]
  journalTips: string[]
  prompt: string
}

type LocalizedFeature = {
  title: string
  description: string
  intro: string
  sections: { heading: string; body: string }[]
  highlights: string[]
}

type ResourceCopy = {
  navLabel: string
  sectionBadge: string
  sectionTitle: string
  sectionSubtitle: string
  featuresLabel: string
  featuresDescription: string
  featuresCta: string
  guidesLabel: string
  guidesDescription: string
  guidesCta: string
  emotionsLabel: string
  emotionsDescription: string
  emotionsCta: string
  emotionCardCta: string
  breadcrumbHome: string
  breadcrumbFeatures: string
  breadcrumbGuides: string
  breadcrumbEmotions: string
  backToHome: string
  exploreFeatures: string
  exploreGuides: string
  exploreEmotions: string
  featureListTitle: string
  guideListTitle: string
  emotionListTitle: string
  featureHighlightsTitle: string
  articlePromptsTitle: string
  signalsTitle: string
  journalTipsTitle: string
  downloadTitle: string
  downloadBody: string
  footerFeatures: string
  footerGuides: string
  footerEmotions: string
}

export const resourceCopy: Record<Lang, ResourceCopy> = {
  ko: {
    navLabel: '가이드',
    sectionBadge: '리소스',
    sectionTitle: '검색 유입용 콘텐츠를 제품 안쪽으로 붙였습니다',
    sectionSubtitle: '블로그를 따로 벌리지 않고, 감정 일기 사용 맥락과 7가지 감정 카테고리를 중심으로 읽을 거리를 연결합니다.',
    featuresLabel: '기능 가이드 5개',
    featuresDescription: 'AI 채팅 일기, 사진 일기, 시 변환, 글 교정, 스티커 꾸미기처럼 검색 의도가 뚜렷한 기능별 안내 페이지입니다.',
    featuresCta: '기능 자세히 보기',
    guidesLabel: '가이드 5개',
    guidesDescription: '시작법, 템플릿, 무감각한 날 기록법, 사진 일기, 주간 리뷰까지 앱 사용 상황과 바로 연결되는 안내 페이지입니다.',
    guidesCta: '가이드 보기',
    emotionsLabel: '감정 사전 7개',
    emotionsDescription: '기쁨, 슬픔, 평온, 화남 같은 감정을 구분하고 기록하는 방법을 정리한 사전형 페이지입니다.',
    emotionsCta: '감정 사전 보기',
    emotionCardCta: '감정 기록 팁 보기',
    breadcrumbHome: '홈',
    breadcrumbFeatures: '기능 가이드',
    breadcrumbGuides: '가이드',
    breadcrumbEmotions: '감정 사전',
    backToHome: '홈으로 돌아가기',
    exploreFeatures: '전체 기능 가이드',
    exploreGuides: '전체 가이드',
    exploreEmotions: '전체 감정 사전',
    featureListTitle: '이 기능도 함께 살펴보세요',
    guideListTitle: '이런 가이드를 먼저 읽어보세요',
    emotionListTitle: '이 감정도 함께 살펴보세요',
    featureHighlightsTitle: '이 기능에서 바로 되는 것',
    articlePromptsTitle: '바로 써볼 질문',
    signalsTitle: '이럴 때 자주 나타납니다',
    journalTipsTitle: '일기에 이렇게 남겨보세요',
    downloadTitle: '앱에서 바로 기록해보세요',
    downloadBody: 'Mind Mirror에서 감정을 기록하고 AI 분석으로 패턴을 다시 볼 수 있습니다.',
    footerFeatures: '기능 가이드',
    footerGuides: '가이드',
    footerEmotions: '감정 사전',
  },
  en: {
    navLabel: 'Guides',
    sectionBadge: 'Resources',
    sectionTitle: 'Search content now lives inside the product story',
    sectionSubtitle: 'Instead of a detached blog, the site now links practical journaling guides and emotion dictionary pages around the app experience.',
    featuresLabel: '5 Feature Guides',
    featuresDescription: 'Dedicated landing pages cover AI chat journaling, photo diaries, diary-to-poem conversion, proofreading, and diary customization.',
    featuresCta: 'See feature guide',
    guidesLabel: '5 Guides',
    guidesDescription: 'Start here for setup, templates, numb days, photo journaling, and weekly reviews that map directly to product use cases.',
    guidesCta: 'Browse guides',
    emotionsLabel: '7 Emotion Entries',
    emotionsDescription: 'Dictionary-style pages explain how to tell emotions apart and how to write about them in a diary entry.',
    emotionsCta: 'Browse emotions',
    emotionCardCta: 'See journaling tips',
    breadcrumbHome: 'Home',
    breadcrumbFeatures: 'Feature Guides',
    breadcrumbGuides: 'Guides',
    breadcrumbEmotions: 'Emotion Dictionary',
    backToHome: 'Back to home',
    exploreFeatures: 'All feature guides',
    exploreGuides: 'All guides',
    exploreEmotions: 'All emotions',
    featureListTitle: 'Explore these features too',
    guideListTitle: 'Start with these guides',
    emotionListTitle: 'Related emotions to explore',
    featureHighlightsTitle: 'What you can do right away',
    articlePromptsTitle: 'Prompts to try now',
    signalsTitle: 'Common signs',
    journalTipsTitle: 'How to write it down',
    downloadTitle: 'Capture it in the app',
    downloadBody: 'Use Mind Mirror to log the moment and revisit your patterns with AI analysis.',
    footerFeatures: 'Feature Guides',
    footerGuides: 'Guides',
    footerEmotions: 'Emotion Dictionary',
  },
  ja: {
    navLabel: 'ガイド',
    sectionBadge: 'リソース',
    sectionTitle: '検索流入向けコンテンツを製品導線の中に入れました',
    sectionSubtitle: '独立したブログではなく、感情日記の使い方と7つの感情カテゴリに沿ったガイドを用意します。',
    featuresLabel: '5つの機能ガイド',
    featuresDescription: 'AI対話日記、写真日記、詩への変換、文章校正、日記のカスタマイズなど、検索意図ごとに整理した機能ページです。',
    featuresCta: '機能ガイドを見る',
    guidesLabel: '5つのガイド',
    guidesDescription: '始め方、テンプレート、無感覚な日、写真日記、週間レビューまで、アプリの使い方に直結する内容です。',
    guidesCta: 'ガイドを見る',
    emotionsLabel: '7つの感情ページ',
    emotionsDescription: '感情の違いと、日記でどう言葉にするかを整理した辞書型ページです。',
    emotionsCta: '感情辞典を見る',
    emotionCardCta: '記録のヒントを見る',
    breadcrumbHome: 'ホーム',
    breadcrumbFeatures: '機能ガイド',
    breadcrumbGuides: 'ガイド',
    breadcrumbEmotions: '感情辞典',
    backToHome: 'ホームへ戻る',
    exploreFeatures: '機能ガイド一覧',
    exploreGuides: 'ガイド一覧',
    exploreEmotions: '感情辞典一覧',
    featureListTitle: 'あわせて見たい機能',
    guideListTitle: '先に読むとよいガイド',
    emotionListTitle: 'あわせて見たい感情',
    featureHighlightsTitle: 'この機能ですぐできること',
    articlePromptsTitle: '今すぐ使える質問',
    signalsTitle: 'よく見られるサイン',
    journalTipsTitle: '日記にはこう残します',
    downloadTitle: 'アプリですぐ記録できます',
    downloadBody: 'Mind Mirrorで感情を記録し、AI分析で流れを振り返れます。',
    footerFeatures: '機能ガイド',
    footerGuides: 'ガイド',
    footerEmotions: '感情辞典',
  },
  zh: {
    navLabel: '指南',
    sectionBadge: '资源',
    sectionTitle: '把搜索内容直接放进产品路径里',
    sectionSubtitle: '不做松散博客，而是围绕情绪日记的使用场景和7种情绪分类建立内容页。',
    featuresLabel: '5篇功能指南',
    featuresDescription: '围绕 AI 对话日记、照片日记、日记转诗歌、文本润色和日记装饰等明确搜索意图建立功能页。',
    featuresCta: '查看功能指南',
    guidesLabel: '5篇指南',
    guidesDescription: '包含开始方法、模板、麻木时怎么写、照片日记和每周复盘，和产品功能直接对应。',
    guidesCta: '查看指南',
    emotionsLabel: '7个情绪词条',
    emotionsDescription: '词条式页面帮助用户区分情绪，并学习如何把它写进日记里。',
    emotionsCta: '查看情绪词典',
    emotionCardCta: '查看记录建议',
    breadcrumbHome: '首页',
    breadcrumbFeatures: '功能指南',
    breadcrumbGuides: '指南',
    breadcrumbEmotions: '情绪词典',
    backToHome: '返回首页',
    exploreFeatures: '全部功能指南',
    exploreGuides: '全部指南',
    exploreEmotions: '全部情绪词典',
    featureListTitle: '也可以看看这些功能',
    guideListTitle: '先看这些指南',
    emotionListTitle: '也可以看看这些情绪',
    featureHighlightsTitle: '这个功能能直接帮你做什么',
    articlePromptsTitle: '现在就能用的问题',
    signalsTitle: '常见表现',
    journalTipsTitle: '可以这样写进日记',
    downloadTitle: '直接在应用里记录',
    downloadBody: '用 Mind Mirror 记录当下，再通过 AI 分析回看自己的情绪模式。',
    footerFeatures: '功能指南',
    footerGuides: '指南',
    footerEmotions: '情绪词典',
  },
}

export const guideSlugs: GuideSlug[] = [
  'emotion-diary-how-to-start',
  'night-reflection-template',
  'journaling-when-you-feel-numb',
  'photo-diary-for-busy-days',
  'weekly-emotion-review',
]

export const emotionSlugs: EmotionSlug[] = [
  'joy',
  'sadness',
  'calm',
  'anger',
  'excitement',
  'pride',
  'tiredness',
]

export const featureSlugs: FeatureSlug[] = [
  'ai-diary-chat',
  'photo-diary',
  'diary-to-poem',
  'diary-proofreading',
  'diary-customization',
]

export const guides: Record<GuideSlug, Record<Lang, LocalizedGuide>> = {
  'emotion-diary-how-to-start': {
    ko: {
      title: '감정일기 시작하는 법',
      description: '처음 감정일기를 쓰는 사람이 부담 없이 시작할 수 있는 3단계 가이드입니다.',
      intro: '처음부터 깊게 쓰려고 하면 오래 가지 않습니다. 오늘 있었던 일, 그때의 감정, 지금 남는 한 줄만 적어도 감정일기는 시작됩니다.',
      sections: [
        { heading: '1. 사건보다 순간을 적기', body: '하루 전체를 요약하려 하지 말고, 기억에 남는 장면 하나만 고릅니다. 회의 직후, 퇴근길, 잠들기 전 같은 장면이 좋습니다.' },
        { heading: '2. 감정을 단어 하나로 붙이기', body: '기쁨, 설렘, 화남, 평온처럼 가장 가까운 감정 하나를 먼저 붙이면 글이 훨씬 쉬워집니다.' },
        { heading: '3. 이유보다 몸 반응부터 적기', body: '가슴이 답답했다, 어깨가 풀렸다, 머리가 멍했다처럼 몸의 반응을 적으면 감정이 더 선명해집니다.' },
      ],
      prompts: ['오늘 가장 오래 남은 장면은 뭐였지?', '그 순간 내 감정을 한 단어로 붙이면?', '그 감정이 몸에서는 어떻게 느껴졌지?'],
    },
    en: {
      title: 'How to Start an Emotion Diary',
      description: 'A simple three-step guide for starting an emotion diary without pressure.',
      intro: 'Most people quit because they try to write something deep on day one. A single moment, one emotion label, and one honest sentence is enough to begin.',
      sections: [
        { heading: '1. Pick one moment, not the whole day', body: 'Choose one scene that stayed with you: after a meeting, on the train home, or right before bed.' },
        { heading: '2. Name the feeling first', body: 'Start with one label such as joy, anger, calm, or excitement. Naming the feeling reduces friction.' },
        { heading: '3. Describe the body signal', body: 'Write what your body did first: tight chest, light shoulders, heavy eyes, or restless hands.' },
      ],
      prompts: ['What moment stayed with me the longest today?', 'What is the closest emotion word for it?', 'How did that feeling show up in my body?'],
    },
    ja: {
      title: '感情日記の始め方',
      description: '初めて感情日記を書く人のための、負担の少ない3ステップガイドです。',
      intro: '最初から深く書こうとすると続きません。今日の一場面、感情を表す一語、今残っている一文だけで十分です。',
      sections: [
        { heading: '1. 一日ではなく一場面を選ぶ', body: '一日を全部まとめようとせず、印象に残った一場面だけを選びます。' },
        { heading: '2. まず感情に名前をつける', body: '喜び、怒り、平静、ときめきなど、一番近い感情を一つ選びます。' },
        { heading: '3. 理由より身体反応を書く', body: '胸が重かった、肩の力が抜けた、頭がぼんやりしたなど、身体の変化から書くと整理しやすくなります。' },
      ],
      prompts: ['今日いちばん残った場面は？', 'その時の感情を一語で言うなら？', '身体にはどんな反応があった？'],
    },
    zh: {
      title: '如何开始写情绪日记',
      description: '给初次写情绪日记的人准备的三步入门指南。',
      intro: '很多人一开始就想写得很深，结果反而坚持不下去。只写一个片段、一个情绪词和一句真实感受就够了。',
      sections: [
        { heading: '1. 先写一个瞬间，不要写整天', body: '挑一个最有停留感的片段，比如开会后、回家路上或睡前。' },
        { heading: '2. 先给情绪命名', body: '先写一个最接近的词，比如喜悦、愤怒、平静或心动。' },
        { heading: '3. 先写身体反应', body: '胸口发紧、肩膀放松、眼睛发沉，这些身体信号会让情绪更具体。' },
      ],
      prompts: ['今天最让我停住的瞬间是什么？', '那个瞬间最接近哪个情绪词？', '这种感觉在身体上是怎样出现的？'],
    },
  },
  'night-reflection-template': {
    ko: {
      title: '잠들기 전 회고 템플릿',
      description: '하루를 짧게 정리하고 감정 패턴을 남기는 저녁용 템플릿입니다.',
      intro: '밤에는 길게 쓰기보다 반복 가능한 틀을 쓰는 편이 낫습니다. 매일 같은 질문 3개만 써도 패턴이 남습니다.',
      sections: [
        { heading: '1. 오늘의 장면', body: '오늘 가장 남는 장면 한 가지를 씁니다. 좋은 일인지 힘든 일인지까지 판단할 필요는 없습니다.' },
        { heading: '2. 오늘의 감정', body: '그 장면에서 가장 크게 느껴진 감정 하나와, 뒤에 따라온 두 번째 감정을 적습니다.' },
        { heading: '3. 내일의 한 줄', body: '내일 반복하고 싶은 것 하나, 줄이고 싶은 것 하나를 적어 마무리합니다.' },
      ],
      prompts: ['오늘 가장 오래 남는 장면은?', '첫 번째 감정과 두 번째 감정은?', '내일 바꾸고 싶은 작은 행동은?'],
    },
    en: {
      title: 'A Night Reflection Template',
      description: 'A short evening template for reviewing the day and preserving emotion patterns.',
      intro: 'At night, consistency matters more than depth. Repeating the same three questions gives you data you can actually revisit.',
      sections: [
        { heading: '1. The scene of the day', body: 'Write one moment that still feels active in your mind. You do not need to judge it yet.' },
        { heading: '2. The first and second emotion', body: 'Name the strongest feeling in that moment, then the feeling that followed right after it.' },
        { heading: '3. One line for tomorrow', body: 'End with one small action to repeat and one to reduce tomorrow.' },
      ],
      prompts: ['What scene is still active in my head?', 'What was the first emotion and what followed it?', 'What tiny adjustment do I want tomorrow?'],
    },
    ja: {
      title: '寝る前の振り返りテンプレート',
      description: '一日を短く整理し、感情の流れを残す夜用テンプレートです。',
      intro: '夜は長文より、繰り返せる型のほうが続きます。同じ3つの質問だけでも十分に振り返れます。',
      sections: [
        { heading: '1. 今日の場面', body: '今日いちばん残っている場面を一つ書きます。良し悪しの判断は後回しで構いません。' },
        { heading: '2. 今日の感情', body: 'その場面で強かった感情と、その後に続いた感情を書きます。' },
        { heading: '3. 明日の一行', body: '明日も続けたいこと一つ、減らしたいこと一つで締めます。' },
      ],
      prompts: ['今も残っている場面は？', '最初の感情と次の感情は？', '明日少しだけ変えたいことは？'],
    },
    zh: {
      title: '睡前复盘模板',
      description: '适合晚间快速整理一天并记录情绪走向的模板。',
      intro: '晚上比起写得深，更重要的是可重复。每天固定回答三个问题，就能慢慢看到模式。',
      sections: [
        { heading: '1. 今天的片段', body: '写下今天最停留在脑海里的一个场景，不急着判断好坏。' },
        { heading: '2. 今天的情绪', body: '写下那个场景里最强烈的情绪，以及紧接着出现的第二个情绪。' },
        { heading: '3. 给明天的一句话', body: '最后写一个想继续的动作和一个想减少的动作。' },
      ],
      prompts: ['今天最停留的场景是什么？', '第一个情绪和第二个情绪分别是什么？', '明天我想微调什么？'],
    },
  },
  'journaling-when-you-feel-numb': {
    ko: {
      title: '아무 감정이 없는 날 일기 쓰는 법',
      description: '무감각하거나 멍한 날에도 감정일기를 이어갈 수 있는 기록법입니다.',
      intro: '감정이 안 느껴지는 날은 실패한 날이 아닙니다. 그런 날 자체가 이미 기록할 가치가 있는 상태입니다.',
      sections: [
        { heading: '1. 감정 대신 상태를 적기', body: '아무 느낌이 없다, 멍하다, 둔하다처럼 상태 언어를 그대로 적습니다.' },
        { heading: '2. 에너지와 속도를 적기', body: '몸이 무겁다, 생각이 느리다, 대화가 귀찮았다 같은 문장은 감정의 바깥 윤곽을 보여줍니다.' },
        { heading: '3. 빈칸을 남겨두기', body: '왜 그런지 억지로 결론내지 말고, 내일 다시 봐야 할 질문 하나만 남겨둡니다.' },
      ],
      prompts: ['오늘 나는 어떤 상태에 가까웠지?', '몸과 생각의 속도는 어땠지?', '내일 다시 보고 싶은 질문은?'],
    },
    en: {
      title: 'How to Journal on Emotionally Numb Days',
      description: 'A way to keep journaling when you feel flat, blank, or disconnected.',
      intro: 'Feeling nothing is still a state worth recording. On numb days, the goal is not clarity. The goal is continuity.',
      sections: [
        { heading: '1. Write the state, not the emotion', body: 'Use words like blank, flat, heavy, distant, or foggy without forcing a stronger label.' },
        { heading: '2. Track energy and pace', body: 'Low energy, slow thoughts, or avoiding conversation often tell you more than abstract emotion words.' },
        { heading: '3. Leave one open question', body: 'Do not force insight. End with one question to revisit tomorrow.' },
      ],
      prompts: ['What state felt closest to today?', 'What happened to my energy and pace?', 'What question should I revisit tomorrow?'],
    },
    ja: {
      title: '何も感じない日の書き方',
      description: '無感覚でぼんやりした日でも感情日記を続けるための記録方法です。',
      intro: '何も感じない日は失敗ではありません。その状態自体が、すでに記録する価値のある情報です。',
      sections: [
        { heading: '1. 感情より状態を書く', body: '何も感じない、ぼんやりする、鈍いなど、状態をそのまま書きます。' },
        { heading: '2. エネルギーと速度を書く', body: '身体が重い、思考が遅い、会話が面倒だったなどの表現が手がかりになります。' },
        { heading: '3. 一つだけ問いを残す', body: '無理に結論づけず、明日見直したい問いを一つ残します。' },
      ],
      prompts: ['今日はどんな状態に近かった？', '身体や思考の速さはどうだった？', '明日もう一度見たい問いは？'],
    },
    zh: {
      title: '没有感觉的日子怎么写日记',
      description: '当你麻木、发空、和情绪断开时，依然能继续写下去的方法。',
      intro: '没有感觉并不等于没有内容。这样的状态本身就值得被记录。',
      sections: [
        { heading: '1. 写状态，不急着写情绪', body: '可以直接写空白、发木、迟钝、雾蒙蒙，不必强行定义。' },
        { heading: '2. 记录能量和节奏', body: '身体沉、思路慢、不想说话，这些比抽象情绪词更有用。' },
        { heading: '3. 留下一个开放问题', body: '不要急着得出结论，最后留一个明天再看的问题。' },
      ],
      prompts: ['今天更接近哪种状态？', '我的能量和节奏发生了什么？', '明天想再看的问题是什么？'],
    },
  },
  'photo-diary-for-busy-days': {
    ko: {
      title: '바쁜 날 사진으로 일기 시작하기',
      description: '글이 안 나오는 날, 사진 한 장으로 감정 기록을 여는 방법입니다.',
      intro: '텍스트가 부담스러운 날엔 사진이 훨씬 빠른 시작점입니다. 장면, 분위기, 함께 있던 사람만 떠올라도 충분합니다.',
      sections: [
        { heading: '1. 기억이 남는 사진 고르기', body: '가장 예쁜 사진이 아니라, 오늘의 분위기를 잘 남기는 사진을 고릅니다.' },
        { heading: '2. 사진 바깥의 맥락 적기', body: '찍기 전후에 무슨 일이 있었는지 한두 줄만 덧붙이면 감정 해석이 쉬워집니다.' },
        { heading: '3. 감정 한 단어로 닫기', body: '마지막에 사진과 연결되는 감정 하나를 적어두면 나중에 다시 찾기 좋습니다.' },
      ],
      prompts: ['왜 이 사진이 오늘을 대표하지?', '사진 밖에서는 무슨 일이 있었지?', '이 장면을 닫는 감정 한 단어는?'],
    },
    en: {
      title: 'Starting a Diary from a Photo on Busy Days',
      description: 'Use one photo as the entry point when writing feels too heavy or time is tight.',
      intro: 'A photo can carry memory, context, and mood faster than a paragraph. On busy days, that is enough to keep the habit alive.',
      sections: [
        { heading: '1. Pick the most representative photo', body: 'Choose the image that best reflects the mood of the day, not necessarily the prettiest one.' },
        { heading: '2. Add off-camera context', body: 'Write one or two lines about what happened right before or after the shot.' },
        { heading: '3. Close with one emotion label', body: 'End with the strongest emotion linked to the image so you can find the entry later.' },
      ],
      prompts: ['Why does this photo represent today?', 'What happened outside the frame?', 'What single emotion closes this scene?'],
    },
    ja: {
      title: '忙しい日に写真から日記を始める方法',
      description: '文章が重い日に、写真一枚から感情記録を始めるためのガイドです。',
      intro: '写真は文章より速く、その日の雰囲気を残せます。忙しい日はそれだけでも十分です。',
      sections: [
        { heading: '1. 今日らしい写真を選ぶ', body: '一番きれいな写真ではなく、今日の空気感をよく残している写真を選びます。' },
        { heading: '2. 写真の外側を書く', body: '撮る前後に何があったかを一、二行加えると意味が見えやすくなります。' },
        { heading: '3. 感情を一語で締める', body: '最後に感情を一語で残しておくと、後から振り返りやすくなります。' },
      ],
      prompts: ['なぜこの写真が今日を表している？', 'フレームの外で何が起きていた？', 'この場面を締める感情は？'],
    },
    zh: {
      title: '忙的时候，用照片开始写日记',
      description: '当写字太累或时间太少时，用一张照片打开当天的情绪记录。',
      intro: '照片比长段文字更快地保留记忆和氛围。忙的时候，这样开始已经足够。',
      sections: [
        { heading: '1. 选最像今天的照片', body: '不一定要最好看，而是最能代表今天气氛的那一张。' },
        { heading: '2. 补上画面外的上下文', body: '简单写一两句照片前后发生了什么。' },
        { heading: '3. 用一个情绪词收尾', body: '最后留下一个和照片最相关的情绪词，方便以后回看。' },
      ],
      prompts: ['为什么这张照片最像今天？', '画面之外发生了什么？', '这个场景最后落在哪个情绪词上？'],
    },
  },
  'weekly-emotion-review': {
    ko: {
      title: '주간 감정 리뷰 하는 법',
      description: '일주일치 감정 기록을 돌아보며 반복 패턴을 찾는 방법입니다.',
      intro: '하루 단위 기록은 감정을 남기고, 주간 리뷰는 패턴을 보여줍니다. 같은 감정이 언제, 누구와, 어떤 맥락에서 반복되는지 보는 것이 핵심입니다.',
      sections: [
        { heading: '1. 가장 많이 나온 감정 보기', body: '일주일 동안 자주 등장한 감정 1~2개를 먼저 고릅니다.' },
        { heading: '2. 공통 장면 찾기', body: '그 감정이 자주 붙은 시간대, 사람, 장소, 주제를 찾아봅니다.' },
        { heading: '3. 다음 주 실험 정하기', body: '패턴을 바꾸기 위한 아주 작은 행동 하나를 다음 주 목표로 정합니다.' },
      ],
      prompts: ['이번 주에 가장 자주 나온 감정은?', '그 감정이 반복된 장면은?', '다음 주에 바꿔볼 작은 실험은?'],
    },
    en: {
      title: 'How to Run a Weekly Emotion Review',
      description: 'Review one week of entries to find repeated emotional patterns.',
      intro: 'Daily logging captures moments. Weekly review reveals structure. The useful question is not “How did I feel?” but “When does this keep happening?”',
      sections: [
        { heading: '1. Find the repeated emotions', body: 'Start with the one or two feelings that showed up the most over the week.' },
        { heading: '2. Look for shared context', body: 'Check whether those emotions cluster around people, places, times, or recurring topics.' },
        { heading: '3. Set one experiment for next week', body: 'Choose one small behavior change to test against that pattern.' },
      ],
      prompts: ['Which emotions repeated most this week?', 'What context kept showing up with them?', 'What small experiment should I run next week?'],
    },
    ja: {
      title: '週間感情レビューのやり方',
      description: '一週間分の記録を見返して、繰り返す感情パターンを見つける方法です。',
      intro: '日々の記録は感情を残し、週次レビューはパターンを見せてくれます。いつ、誰と、どんな場面で繰り返すかを見るのがポイントです。',
      sections: [
        { heading: '1. よく出た感情を見る', body: '一週間で特によく出た感情を一つか二つ選びます。' },
        { heading: '2. 共通する場面を探す', body: '時間帯、人、場所、話題など、重なっている文脈を探します。' },
        { heading: '3. 来週の小さな実験を決める', body: 'そのパターンに対して試す小さな行動を一つ決めます。' },
      ],
      prompts: ['今週いちばん多かった感情は？', 'それが出やすかった場面は？', '来週試したい小さな行動は？'],
    },
    zh: {
      title: '如何做每周情绪复盘',
      description: '回看一周记录，找出反复出现的情绪模式。',
      intro: '每天记录是在保存片段，每周复盘是在看结构。真正有用的问题是：这种情绪为什么总在这里出现？',
      sections: [
        { heading: '1. 先找高频情绪', body: '先挑出这一周最常出现的一两个情绪。' },
        { heading: '2. 找共同场景', body: '看看这些情绪是否总和某些人、地点、时间或主题一起出现。' },
        { heading: '3. 给下周设一个小实验', body: '围绕这个模式，决定一个很小的行动变化去尝试。' },
      ],
      prompts: ['这周重复最多的情绪是什么？', '它们总和什么场景一起出现？', '下周想做哪个小实验？'],
    },
  },
}

export const emotions: Record<EmotionSlug, Record<Lang, LocalizedEmotion>> = {
  joy: {
    ko: {
      name: '기쁨',
      summary: '만족감과 에너지가 자연스럽게 올라오는 상태입니다.',
      overview: '기쁨은 큰 성취에서만 생기지 않습니다. 작은 해결, 편안한 관계, 예상보다 괜찮았던 하루에서도 자주 나타납니다.',
      signals: ['표정이 자연스럽게 풀린다', '작은 일에도 반응이 가볍다', '다른 사람과 나누고 싶어진다'],
      journalTips: ['무엇이 나를 기쁘게 했는지 장면으로 적기', '그 기쁨이 오래갈지 짧게 스칠지 적기', '누구와 함께 있었는지 남기기'],
      prompt: '오늘 내가 “생각보다 좋았다”라고 느낀 순간은 언제였지?',
    },
    en: {
      name: 'Joy',
      summary: 'A state where satisfaction and energy rise naturally.',
      overview: 'Joy does not only come from major wins. It often appears in small relief, warm interactions, or a day that went better than expected.',
      signals: ['Your face and shoulders relax', 'Small things feel lighter', 'You want to share the moment with someone'],
      journalTips: ['Describe the exact scene that created the joy', 'Note whether it felt brief or lasting', 'Record who or what was part of it'],
      prompt: 'When did I think, “That felt better than I expected,” today?',
    },
    ja: {
      name: '喜び',
      summary: '満足感とエネルギーが自然に上がる状態です。',
      overview: '喜びは大きな成功だけで生まれるものではありません。小さな安心や、思ったよりよかった一日にもよく現れます。',
      signals: ['表情や肩の力がゆるむ', '小さなことにも前向きに反応する', '誰かに共有したくなる'],
      journalTips: ['何が喜びを作ったのか場面で書く', '長く残る喜びか一瞬の喜びか書く', '誰と一緒だったか残す'],
      prompt: '今日「思ったよりよかった」と感じた瞬間は？',
    },
    zh: {
      name: '喜悦',
      summary: '一种自然升起满足感和能量的状态。',
      overview: '喜悦不只来自大成就，也常常出现在小小的顺利、舒服的关系和比预想更好的一天里。',
      signals: ['表情和肩膀会放松', '对小事的反应更轻快', '会想和别人分享'],
      journalTips: ['写清是什么场景带来了喜悦', '写下它是短暂还是持续', '记下当时和谁或和什么有关'],
      prompt: '今天什么时候让我觉得“比想象中更好”？',
    },
  },
  sadness: {
    ko: {
      name: '슬픔',
      summary: '상실감이나 허전함이 남아 마음이 아래로 가라앉는 상태입니다.',
      overview: '슬픔은 눈물로만 나타나지 않습니다. 말수가 줄고, 에너지가 떨어지고, 혼자 있고 싶어지는 방식으로도 드러납니다.',
      signals: ['말이 줄어든다', '몸이 무겁다', '지나간 장면을 오래 붙잡는다'],
      journalTips: ['무엇을 잃었다고 느끼는지 적기', '슬픔 앞에 있었던 사건과 뒤에 남은 생각을 구분하기', '위로가 됐던 것과 안 됐던 것을 함께 적기'],
      prompt: '오늘 내가 허전하다고 느낀 건 무엇이 빠져 있어서였지?',
    },
    en: {
      name: 'Sadness',
      summary: 'A lowered state shaped by loss, emptiness, or disappointment.',
      overview: 'Sadness does not always look dramatic. It can appear as quietness, low energy, or replaying one moment over and over.',
      signals: ['You speak less', 'Your body feels heavy', 'You keep revisiting one scene'],
      journalTips: ['Write what feels missing', 'Separate the triggering event from the afterthoughts', 'Note what comfort helped and what did not'],
      prompt: 'What felt absent or gone when I noticed sadness today?',
    },
    ja: {
      name: '悲しみ',
      summary: '喪失感や物足りなさで心が沈む状態です。',
      overview: '悲しみは涙だけではありません。口数が減る、身体が重い、同じ場面を何度も思い返す形でも現れます。',
      signals: ['話す量が減る', '身体が重く感じる', '同じ場面を繰り返し思い出す'],
      journalTips: ['何が失われたように感じたか書く', '出来事とその後の考えを分けて書く', '慰めになったこととならなかったことを書く'],
      prompt: '今日の悲しみは、何が足りないと感じたときに出た？',
    },
    zh: {
      name: '悲伤',
      summary: '因为失去、空落或失望而下沉的状态。',
      overview: '悲伤不一定很激烈，它也可能表现为少说话、身体发沉，或反复回想某个片段。',
      signals: ['说话变少', '身体觉得沉重', '总在反复想同一个场景'],
      journalTips: ['写下自己觉得失去了什么', '把触发事件和后续想法分开写', '记下哪些安慰有用，哪些没用'],
      prompt: '今天的悲伤，是在感觉少了什么的时候出现的吗？',
    },
  },
  calm: {
    ko: {
      name: '평온',
      summary: '크게 들뜨지도 가라앉지도 않은 안정된 상태입니다.',
      overview: '평온은 지루함과 다릅니다. 긴장이 낮고, 감정이 과하게 흔들리지 않으며, 내 속도를 회복한 상태에 가깝습니다.',
      signals: ['호흡이 안정적이다', '판단이 급하지 않다', '현재에 머무르기 쉽다'],
      journalTips: ['평온을 만든 환경이나 루틴 적기', '누구와 있을 때 안정됐는지 적기', '평온이 깨진 순간도 함께 기록하기'],
      prompt: '오늘 내가 가장 편안했던 장면은 어떤 환경이었지?',
    },
    en: {
      name: 'Calm',
      summary: 'A steady state without a large emotional spike in either direction.',
      overview: 'Calm is not the same as boredom. It often means your tension is low, your pace is recoverable, and your attention can stay in the present.',
      signals: ['Breathing feels steady', 'Your decisions are less rushed', 'It is easier to stay in the moment'],
      journalTips: ['Write what environment or routine created the calm', 'Note who you were with', 'Also record what interrupted the calm'],
      prompt: 'What setting made me feel most settled today?',
    },
    ja: {
      name: '平静',
      summary: '大きく高ぶりも沈みもしない安定した状態です。',
      overview: '平静は退屈とは違います。緊張が低く、自分のペースを取り戻している状態に近いです。',
      signals: ['呼吸が安定している', '判断を急ぎすぎない', '今に留まりやすい'],
      journalTips: ['平静を作った環境や習慣を書く', '誰といると落ち着いたかを書く', '平静が崩れた瞬間も残す'],
      prompt: '今日いちばん落ち着けた場面は、どんな環境だった？',
    },
    zh: {
      name: '平静',
      summary: '没有明显上扬或下坠的稳定状态。',
      overview: '平静不等于无聊，它更接近紧张感下降、节奏恢复、注意力能留在当下的感觉。',
      signals: ['呼吸比较稳定', '做决定不那么急', '更容易待在当下'],
      journalTips: ['写下带来平静的环境或习惯', '记下和谁在一起时更稳定', '也记录打破平静的瞬间'],
      prompt: '今天什么样的环境让我最安定？',
    },
  },
  anger: {
    ko: {
      name: '화남',
      summary: '경계가 침범되거나 기대가 깨졌을 때 올라오는 강한 반응입니다.',
      overview: '화는 나쁜 감정이 아니라 신호입니다. 내가 중요하게 여기는 기준이 어긋났다는 뜻일 때가 많습니다.',
      signals: ['말투가 짧아진다', '몸에 열감이 돈다', '상대의 행동이 계속 떠오른다'],
      journalTips: ['무엇이 선을 넘었다고 느꼈는지 적기', '즉각적인 반응과 실제 욕구를 분리하기', '나중에 전달하고 싶은 문장을 써보기'],
      prompt: '오늘 나는 정확히 무엇이 부당하다고 느껴서 화가 났지?',
    },
    en: {
      name: 'Anger',
      summary: 'A strong response when a boundary is crossed or an expectation breaks.',
      overview: 'Anger is not automatically bad. It often signals that something important to you felt violated, ignored, or dismissed.',
      signals: ['Your tone gets shorter', 'Heat or tension rises in the body', 'You replay another person’s behavior'],
      journalTips: ['Write what felt crossed or unfair', 'Separate the impulse from the real need', 'Draft the sentence you actually wish you could say'],
      prompt: 'What exactly felt unfair or crossed today?',
    },
    ja: {
      name: '怒り',
      summary: '境界線が踏み越えられた時や期待が崩れた時に出る強い反応です。',
      overview: '怒りは悪い感情とは限りません。自分にとって大事な基準が無視されたというサインであることが多いです。',
      signals: ['口調が短くなる', '身体に熱や緊張が出る', '相手の行動を何度も思い返す'],
      journalTips: ['何が一線を越えたと感じたか書く', '反射的な反応と本当の欲求を分ける', '本当に伝えたい一文を書いてみる'],
      prompt: '今日は何を不当だと感じて怒りが出た？',
    },
    zh: {
      name: '愤怒',
      summary: '当边界被踩到或期待落空时出现的强烈反应。',
      overview: '愤怒不一定是坏事，它常常是在提醒你：有重要的东西被忽视、被冒犯或被越界了。',
      signals: ['语气会变短', '身体发热或变紧', '会反复想起对方的行为'],
      journalTips: ['写下什么让你觉得越界或不公平', '把冲动反应和真实需求分开', '先写出你真正想说的一句话'],
      prompt: '今天到底是什么让我觉得不公平？',
    },
  },
  excitement: {
    ko: {
      name: '설렘',
      summary: '기대와 호기심이 섞여 앞으로 향하는 에너지가 커진 상태입니다.',
      overview: '설렘은 즐거움과 비슷하지만 방향성이 더 강합니다. 아직 오지 않은 일을 향해 마음이 먼저 움직입니다.',
      signals: ['머릿속에서 다음 장면을 자주 상상한다', '집중력이 특정 대상에 몰린다', '행동 속도가 빨라진다'],
      journalTips: ['무엇을 기대하고 있는지 구체화하기', '기대와 불안을 함께 적기', '설렘이 행동으로 이어졌는지 남기기'],
      prompt: '오늘 나는 무엇을 기대하면서 마음이 먼저 움직였지?',
    },
    en: {
      name: 'Excitement',
      summary: 'A forward-leaning state shaped by anticipation and curiosity.',
      overview: 'Excitement feels close to joy, but it points more strongly toward what is about to happen next.',
      signals: ['You keep imagining the next scene', 'Your attention narrows around one thing', 'Your pace speeds up'],
      journalTips: ['Name what you are looking forward to', 'Write both the excitement and the nervous edge', 'Note whether it changed your behavior'],
      prompt: 'What was I leaning toward with anticipation today?',
    },
    ja: {
      name: 'ときめき',
      summary: '期待と好奇心が混ざり、気持ちが前に向く状態です。',
      overview: 'ときめきは喜びに近いですが、これから起こることへ心が先に動く感覚が強いです。',
      signals: ['次の場面をよく想像する', '注意が一つの対象に集まる', '行動のスピードが上がる'],
      journalTips: ['何を期待しているのか具体化する', '楽しさと不安を一緒に書く', '行動にどうつながったか残す'],
      prompt: '今日は何に向かって心が先に動いた？',
    },
    zh: {
      name: '心动',
      summary: '由期待和好奇心推动，整个人往前倾的状态。',
      overview: '心动和喜悦很像，但它更明显地指向“接下来会发生什么”。',
      signals: ['脑中总在预演下一幕', '注意力集中在某件事上', '行动节奏会加快'],
      journalTips: ['具体写下自己在期待什么', '把兴奋和紧张一起写出来', '记下它有没有推动你的行动'],
      prompt: '今天我是在期待什么，所以心先动了？',
    },
  },
  pride: {
    ko: {
      name: '뿌듯',
      summary: '내가 한 선택이나 노력이 괜찮았다고 느끼는 만족의 감정입니다.',
      overview: '뿌듯함은 타인의 인정이 없어도 생길 수 있습니다. 스스로 납득되는 행동을 했을 때 조용하게 올라오기도 합니다.',
      signals: ['내 선택을 다시 떠올리게 된다', '작게 미소가 난다', '성과보다 과정이 선명하게 남는다'],
      journalTips: ['무엇을 잘했다고 느끼는지 명확히 쓰기', '결과보다 내가 한 선택을 적기', '다음에도 반복하고 싶은 행동을 남기기'],
      prompt: '오늘 내가 스스로 괜찮았다고 느낀 선택은 뭐였지?',
    },
    en: {
      name: 'Pride',
      summary: 'The satisfaction of feeling that your choice, effort, or stance was solid.',
      overview: 'Pride does not always need applause. It can appear quietly when your actions match your own standards.',
      signals: ['You revisit your own choice with approval', 'A small smile shows up', 'The process matters more than the outcome'],
      journalTips: ['Write what exactly felt solid', 'Focus on the choice or effort, not only the result', 'Note what you want to repeat'],
      prompt: 'What choice today made me respect myself a little more?',
    },
    ja: {
      name: '誇り',
      summary: '自分の選択や努力がよかったと感じる満足の感情です。',
      overview: '誇りは他人の評価がなくても生まれます。自分の基準に沿った行動をした時に静かに現れます。',
      signals: ['自分の選択を前向きに思い返す', '小さく笑顔になる', '結果より過程が残る'],
      journalTips: ['何をよくやったと感じたか明確に書く', '結果より選択や努力を書く', 'また繰り返したい行動を残す'],
      prompt: '今日、自分でよかったと思えた選択は何だった？',
    },
    zh: {
      name: '自豪',
      summary: '对自己的选择、努力或立场感到踏实满意的情绪。',
      overview: '自豪不一定需要别人夸奖，只要自己的行为符合自己的标准，它也会安静地出现。',
      signals: ['会肯定地回想自己的选择', '嘴角会有一点笑意', '比结果更记得过程'],
      journalTips: ['写清自己为什么觉得做得不错', '多写选择和努力，不只写结果', '记下下次还想重复的行为'],
      prompt: '今天哪个选择让我有点看得起自己？',
    },
  },
  tiredness: {
    ko: {
      name: '피곤',
      summary: '에너지 회복이 부족해 몸과 마음이 모두 느려진 상태입니다.',
      overview: '피곤은 단순한 수면 부족일 수도 있고, 감정 소모가 누적된 결과일 수도 있습니다. 그래서 사건보다 회복 조건을 같이 보는 게 중요합니다.',
      signals: ['사소한 일에도 버겁다', '집중이 짧아진다', '사람을 피하고 싶어진다'],
      journalTips: ['몸의 피곤과 감정 소모를 구분해 적기', '무엇이 회복을 방해했는지 남기기', '내일 줄일 일 하나를 적기'],
      prompt: '오늘 피곤함은 몸의 문제였나, 마음의 소모였나?',
    },
    en: {
      name: 'Tiredness',
      summary: 'A slowed state where physical and emotional energy both feel depleted.',
      overview: 'Tiredness may come from sleep debt, decision fatigue, or emotional drain. That is why the recovery context matters as much as the event itself.',
      signals: ['Small tasks feel heavier', 'Focus gets shorter', 'You want less interaction'],
      journalTips: ['Separate body fatigue from emotional depletion', 'Note what blocked recovery', 'Write one thing to reduce tomorrow'],
      prompt: 'Did today’s tiredness feel more physical, emotional, or both?',
    },
    ja: {
      name: '疲れ',
      summary: '身体と心のエネルギーが落ち、全体的に速度が下がる状態です。',
      overview: '疲れは睡眠不足だけでなく、感情消耗の積み重ねでも起こります。だから出来事と回復条件の両方を見ることが大切です。',
      signals: ['小さなことも重く感じる', '集中が短くなる', '人と関わるのが面倒になる'],
      journalTips: ['身体の疲れと感情の消耗を分けて書く', '回復を妨げたものを書く', '明日減らしたいことを一つ残す'],
      prompt: '今日の疲れは身体から来ていた？ 心から来ていた？',
    },
    zh: {
      name: '疲惫',
      summary: '身体和情绪能量都下降，整个人慢下来的状态。',
      overview: '疲惫可能来自睡眠不足，也可能来自情绪消耗，所以除了事件本身，也要看恢复条件。',
      signals: ['小事也会觉得吃力', '专注时间变短', '更想躲开社交'],
      journalTips: ['把身体疲劳和情绪消耗分开写', '写下什么阻碍了恢复', '记一个明天想减少的事项'],
      prompt: '今天的疲惫更像是身体的，还是情绪的？',
    },
  },
}

export const features: Record<FeatureSlug, Record<Lang, LocalizedFeature>> = {
  'ai-diary-chat': {
    ko: {
      title: 'AI 채팅으로 자동 일기 생성',
      description: 'AI와 자연스럽게 대화하면 내용이 정리되어 일기로 완성되는 기능 소개 페이지입니다.',
      intro: '빈 화면 앞에서 막히는 사용자는 생각보다 많습니다. AI 채팅 일기는 질문을 주고받는 흐름 자체를 기록 재료로 바꿔, 일기 시작 장벽을 낮춥니다.',
      sections: [
        { heading: '대화 흐름으로 초안 만들기', body: '사용자는 하루를 떠올리며 답하기만 하면 되고, AI가 흐름을 묶어 초안 형태로 정리합니다.' },
        { heading: '막히는 구간에서 질문 이어가기', body: '무슨 말을 써야 할지 모를 때 AI가 장면, 감정, 이유를 하나씩 물어보며 기록을 이어갑니다.' },
        { heading: '완성 후 직접 다듬기', body: '자동으로 만들어진 일기는 그대로 저장하는 것이 아니라, 원하는 톤으로 직접 수정해 마무리할 수 있습니다.' },
      ],
      highlights: ['AI가 먼저 질문을 던져 기록 시작을 돕기', '대화 내용을 일기 문장으로 자동 정리', '완성 후 사용자가 자유롭게 편집 가능'],
    },
    en: {
      title: 'Auto-Generate Diary Entries with AI Chat',
      description: 'A feature page for users who want to turn natural conversation with AI into a finished diary entry.',
      intro: 'A blank page stops more people than the writing itself. Conversational journaling lowers that barrier by turning guided chat into usable diary material.',
      sections: [
        { heading: 'Build a draft through conversation', body: 'Instead of composing from scratch, users answer prompts and let the AI organize the flow into a draft.' },
        { heading: 'Keep writing when momentum drops', body: 'When the user gets stuck, the AI continues with questions about scenes, feelings, and context.' },
        { heading: 'Edit the finished entry afterward', body: 'The result is not a locked output. Users can refine tone, details, and emphasis before saving.' },
      ],
      highlights: ['AI starts the conversation with useful prompts', 'Chat turns into structured diary text automatically', 'Users can edit the final diary freely'],
    },
    ja: {
      title: 'AIチャットで自動日記作成',
      description: 'AIとの自然な会話を、そのまま日記の完成形につなげる機能ページです。',
      intro: '日記が続かない理由は、書けないことよりも書き始めにくさにあることが多いです。AI対話日記は会話の流れ自体を記録の材料に変えます。',
      sections: [
        { heading: '会話の流れから下書きを作る', body: 'ユーザーは質問に答えていくだけで、AIが内容を整理して日記の下書きにまとめます。' },
        { heading: '止まった場面で質問をつなぐ', body: '何を書けばよいか迷った時も、AIが場面、感情、理由を順に聞いて記録を支えます。' },
        { heading: '完成後に自分で整える', body: '自動生成された文章はそのまま固定されず、語調や細部を自分で調整できます。' },
      ],
      highlights: ['AIが先に質問して書き始めを助ける', '会話内容を日記文に自動整理', '保存前に自由に編集できる'],
    },
    zh: {
      title: '通过 AI 对话自动生成日记',
      description: '把和 AI 的自然对话整理成完整日记内容的功能页面。',
      intro: '很多人不是不会写，而是不知道怎么开始。对话式日记把聊天过程本身变成记录素材，降低开头门槛。',
      sections: [
        { heading: '通过对话生成初稿', body: '用户只需要顺着提问回答，AI 就会把内容整理成日记初稿。' },
        { heading: '卡住时继续引导', body: '当用户不知道接下来写什么时，AI 会继续追问场景、情绪和原因。' },
        { heading: '完成后再手动润色', body: '自动生成的内容不是最终锁定稿，用户仍可自行修改语气和重点。' },
      ],
      highlights: ['AI 主动提问帮助开始记录', '聊天内容自动整理成日记文本', '保存前可以自由编辑'],
    },
  },
  'photo-diary': {
    ko: {
      title: '사진으로 시작하는 자동 일기',
      description: '사진 한 장에서 장면과 분위기를 읽어 일기 초안을 만드는 기능 소개 페이지입니다.',
      intro: '바쁜 날에는 글보다 사진이 먼저 남습니다. 사진 기반 일기는 그 한 장을 출발점으로 삼아, 기록을 더 빠르게 이어가게 만듭니다.',
      sections: [
        { heading: '사진에서 장면 정보 읽기', body: 'AI가 사진 속 배경, 사물, 분위기를 파악해 그날의 핵심 장면을 글로 옮길 단서를 찾습니다.' },
        { heading: '사진 바깥 맥락 붙이기', body: '사용자가 한두 줄만 보태도 사진 전후 상황이 정리되어 훨씬 더 자연스러운 일기 초안이 만들어집니다.' },
        { heading: '짧은 기록 습관 유지하기', body: '텍스트 입력 부담이 큰 날에도 사진 한 장이면 기록 루틴을 끊지 않고 이어갈 수 있습니다.' },
      ],
      highlights: ['사진만으로도 일기 초안 시작', '장면과 분위기를 함께 반영', '바쁜 날 기록 루틴 유지에 적합'],
    },
    en: {
      title: 'Start a Diary from a Photo',
      description: 'A feature page for users who want one photo to become the entry point for an AI-written diary draft.',
      intro: 'On busy days, the photo usually exists before the words do. Photo-based journaling uses that image as the fastest path back into the habit.',
      sections: [
        { heading: 'Read scene cues from the image', body: 'AI extracts useful context from the photo, including objects, setting, and mood cues that can anchor the entry.' },
        { heading: 'Add off-camera context quickly', body: 'A short user note about what happened before or after the shot gives the draft much more emotional accuracy.' },
        { heading: 'Keep the habit alive on crowded days', body: 'Even when typing feels heavy, one image is enough to keep daily reflection moving.' },
      ],
      highlights: ['Start from a single photo', 'Reflect both scene and mood', 'Useful for busy-day journaling'],
    },
    ja: {
      title: '写真から始める自動日記',
      description: '写真一枚から場面と雰囲気を読み取り、日記の下書きを作る機能ページです。',
      intro: '忙しい日は文章より先に写真だけが残ることがあります。写真日記はその一枚を起点にして記録の習慣をつなぎます。',
      sections: [
        { heading: '写真から場面情報を読む', body: 'AIが背景や物、雰囲気を手がかりに、その日の中心となる場面を言語化します。' },
        { heading: '写真の外側の文脈を足す', body: '撮影前後の出来事を一言添えるだけで、より自然な日記の流れになります。' },
        { heading: '忙しい日でも習慣を切らない', body: '文字入力が重い日でも、写真一枚なら記録を止めずに続けやすくなります。' },
      ],
      highlights: ['写真一枚から下書きを開始', '場面と雰囲気を同時に反映', '忙しい日の記録習慣に向く'],
    },
    zh: {
      title: '从照片开始写自动日记',
      description: '从一张照片读取场景和氛围，并生成日记初稿的功能页面。',
      intro: '忙碌的日子里，往往先留下的是照片而不是文字。照片日记就是把这张图变成重新进入记录状态的入口。',
      sections: [
        { heading: '从照片中读取场景线索', body: 'AI 会识别背景、物体和氛围，为日记内容提供场景支点。' },
        { heading: '快速补上照片外的上下文', body: '用户只要补充一两句拍摄前后的情况，日记就会更自然完整。' },
        { heading: '在忙碌时继续保持习惯', body: '即使不想长篇输入，只靠一张照片也能维持每日记录。' },
      ],
      highlights: ['从单张照片直接开始', '同时保留场景与情绪氛围', '适合忙碌日常的记录习惯'],
    },
  },
  'diary-to-poem': {
    ko: {
      title: '일기를 시로 변환',
      description: '평범한 하루 기록을 감성적인 시 표현으로 바꾸는 기능 소개 페이지입니다.',
      intro: '같은 내용도 표현 방식이 바뀌면 전혀 다른 감정 여운을 남깁니다. 시 변환 기능은 일기를 보존하면서도 다른 문체로 다시 읽게 만듭니다.',
      sections: [
        { heading: '기록을 감성 문장으로 재구성', body: '하루의 사건과 감정을 압축해, 더 이미지 중심적이고 운율감 있는 표현으로 다시 정리합니다.' },
        { heading: '같은 기억을 다른 톤으로 저장', body: '원본 일기는 그대로 두고, 별도의 시 버전을 만들어 같은 날을 다르게 보관할 수 있습니다.' },
        { heading: '공유하기 좋은 형태 만들기', body: '긴 일기보다 짧고 인상적인 형태가 필요할 때 시 형식이 더 잘 맞습니다.' },
      ],
      highlights: ['일기를 감성적인 시 문체로 전환', '원본과 별도 버전으로 함께 보관', '공유용 기록으로도 활용 가능'],
    },
    en: {
      title: 'Turn Diary Entries into Poems',
      description: 'A feature page for converting ordinary diary writing into more expressive poetic language.',
      intro: 'The memory does not change, but the reading experience does. Diary-to-poem conversion lets users preserve the same day in a more lyrical form.',
      sections: [
        { heading: 'Reshape plain writing into poetic lines', body: 'The AI condenses scenes and feelings into language that is more image-driven, reflective, and memorable.' },
        { heading: 'Keep the original and the transformed version', body: 'Users can retain the diary itself while also saving a poem version of the same moment.' },
        { heading: 'Create a format that is easier to share', body: 'A poem often travels better than a long diary paragraph when the user wants to revisit or share it later.' },
      ],
      highlights: ['Convert diary text into poetic language', 'Save both the original and poem version', 'Useful for memorable or shareable reflection'],
    },
    ja: {
      title: '日記を詩に変換',
      description: '日常の記録を、より感性的な詩の表現に変える機能ページです。',
      intro: '内容は同じでも、表現が変わると残り方が変わります。詩変換は日記を保ちながら、別の温度で読み返せる形を作ります。',
      sections: [
        { heading: '記録を感性的な文章に再構成', body: '一日の出来事や感情を圧縮し、イメージや余韻を重視した表現へ整えます。' },
        { heading: '同じ記憶を別のトーンで保存', body: '元の日記を残したまま、同じ日の詩バージョンを別で持つことができます。' },
        { heading: '共有しやすい形にする', body: '長い日記より短く印象的な形式がほしい時、詩の形が役立ちます。' },
      ],
      highlights: ['日記を詩的な文体に変換', '原文と詩版を両方保存', '共有用の振り返りにも向く'],
    },
    zh: {
      title: '把日记转换成诗歌',
      description: '把日常记录改写成更有画面感和情绪张力的诗歌表达的功能页面。',
      intro: '记忆本身没有变，但表达方式会改变它留下来的感觉。日记转诗歌就是把同一天保存成另一种语气。',
      sections: [
        { heading: '把普通记录改写成诗性语言', body: 'AI 会压缩场景和情绪，用更有画面感、节奏感的方式重新表达。' },
        { heading: '保留原文，也保留诗歌版本', body: '用户可以同时保存原始日记和诗歌版本，不需要二选一。' },
        { heading: '更适合回看和分享', body: '当用户想要更短、更有余味的表达形式时，诗歌版本会更合适。' },
      ],
      highlights: ['把日记转为诗歌文体', '原文与诗歌版本可同时保留', '适合回看或分享'],
    },
  },
  'diary-proofreading': {
    ko: {
      title: 'AI 일기 교정',
      description: '맞춤법, 띄어쓰기, 문장 흐름을 정리해 더 읽기 쉬운 일기로 다듬는 기능 소개 페이지입니다.',
      intro: '일기를 쓸 때는 일단 쏟아내는 편이 맞지만, 나중에 다시 읽을 땐 정돈된 문장이 훨씬 좋습니다. 교정 기능은 감정을 해치지 않으면서 가독성을 올립니다.',
      sections: [
        { heading: '기본 문장 오류 정리', body: '맞춤법, 띄어쓰기, 어색한 연결 표현을 다듬어 읽는 흐름을 안정적으로 만듭니다.' },
        { heading: '과한 수정 없이 톤 유지', body: '일기의 개인적인 말투를 과하게 바꾸지 않고, 사용자 목소리를 유지한 채 문장 완성도만 높입니다.' },
        { heading: '보관용 기록 품질 높이기', body: '나중에 다시 읽거나 일부를 공유할 때도 더 자연스럽고 정돈된 상태로 남길 수 있습니다.' },
      ],
      highlights: ['맞춤법과 띄어쓰기 자동 보정', '개인적인 말투는 최대한 유지', '보관과 재독에 더 적합한 문장 완성도'],
    },
    en: {
      title: 'Proofread Diary Entries with AI',
      description: 'A feature page for cleaning up spelling, spacing, and sentence flow while preserving the user’s voice.',
      intro: 'Raw writing is useful when capturing emotion, but clean writing is easier to revisit. Proofreading helps the diary read better without flattening the feeling behind it.',
      sections: [
        { heading: 'Correct surface-level writing issues', body: 'The AI fixes spelling, spacing, and awkward transitions so the entry becomes easier to read later.' },
        { heading: 'Preserve the original voice', body: 'The goal is not to make every diary sound generic, but to keep the user’s tone while improving clarity.' },
        { heading: 'Improve archive quality', body: 'A polished version is easier to revisit, quote, or share when users want to return to an entry months later.' },
      ],
      highlights: ['Fix spelling and spacing automatically', 'Keep the user’s tone intact', 'Improve long-term readability of saved entries'],
    },
    ja: {
      title: 'AIで日記を校正',
      description: '誤字脱字、空白、文の流れを整えて読みやすい日記にする機能ページです。',
      intro: '書く時は感情を優先しても構いませんが、後から読み返す時は整った文章の方が役立ちます。校正機能は感情の温度を残したまま可読性を上げます。',
      sections: [
        { heading: '基本的な文の乱れを整える', body: '誤字脱字や不自然なつながりを修正し、読み返しやすい流れに整えます。' },
        { heading: '話し方の雰囲気を残す', body: '個人的な口調を消しすぎず、ユーザーらしさを保ったまま文章の完成度を上げます。' },
        { heading: '保管用の品質を高める', body: '後で読み返したり一部を共有したりする時にも、より自然な形で残せます。' },
      ],
      highlights: ['誤字脱字や空白を自動修正', '元の語り口をなるべく維持', '保存後の読みやすさを改善'],
    },
    zh: {
      title: '用 AI 润色校对日记',
      description: '修正错别字、空格和语句衔接，同时尽量保留用户原本语气的功能页面。',
      intro: '写日记时先把感受写出来很重要，但回看时，清晰的表达会更有价值。润色功能就是在不削弱情绪的前提下提升可读性。',
      sections: [
        { heading: '修正常见书写问题', body: 'AI 会整理错别字、空格和不顺的连接，让日记以后读起来更轻松。' },
        { heading: '尽量保留原本语气', body: '目标不是把每篇日记改成统一口吻，而是在保留个人表达的同时提高清晰度。' },
        { heading: '提高长期保存质量', body: '以后重新阅读、摘录或分享时，整理过的版本会更自然。' },
      ],
      highlights: ['自动修正错别字与空格问题', '尽量保留个人语气', '提升长期保存与回看体验'],
    },
  },
  'diary-customization': {
    ko: {
      title: '편지지와 스티커로 일기 꾸미기',
      description: 'Grid·Color 편지지와 드래그앤드랍 스티커로 일기 페이지를 꾸미는 기능 소개 페이지입니다.',
      intro: '일기가 단순한 텍스트 저장소를 넘어서려면, 기록 방식뿐 아니라 보는 방식도 중요합니다. 꾸미기 기능은 기록을 더 오래 남기고 싶은 페이지로 바꿉니다.',
      sections: [
        { heading: '그리드와 컬러로 배경 스타일 바꾸기', body: '편지지 배경을 그리드와 컬러 조합으로 바꿔, 같은 내용도 전혀 다른 분위기로 정리할 수 있습니다.' },
        { heading: '스티커를 끌어다 놓아 자유롭게 배치', body: '드래그앤드랍 방식으로 스티커 위치를 직접 정하면서 장면 중심, 감정 중심, 기념 카드형 레이아웃을 만들 수 있습니다.' },
        { heading: '기록을 다시 보고 싶은 페이지로 만들기', body: '텍스트만 남기는 것보다 꾸민 페이지가 다시 열어볼 확률이 높고, 특정 날을 더 선명하게 기억하게 만듭니다.' },
      ],
      highlights: ['Grid·Color 조합으로 편지지 스타일 변경', '스티커를 드래그앤드랍으로 자유 배치', '특별한 날 기록을 카드처럼 보관 가능'],
    },
    en: {
      title: 'Customize Diary Pages with Stationery and Stickers',
      description: 'A feature page for styling diary entries with grid and color backgrounds plus drag-and-drop stickers.',
      intro: 'When journaling feels personal, presentation starts to matter too. Customization turns an entry from plain text into a page users want to reopen.',
      sections: [
        { heading: 'Change the background with grid and color presets', body: 'Users can switch stationery styles to give the same entry a softer, cleaner, brighter, or more playful tone.' },
        { heading: 'Place stickers with drag and drop', body: 'Sticker placement becomes part of the storytelling, whether the user wants a memory card layout or a more expressive page.' },
        { heading: 'Make saved entries more revisit-worthy', body: 'Decorated pages are easier to remember and often feel more meaningful than plain blocks of text alone.' },
      ],
      highlights: ['Adjust stationery style with grid and color options', 'Arrange stickers freely with drag and drop', 'Turn memorable entries into designed keepsakes'],
    },
    ja: {
      title: '便箋とステッカーで日記を飾る',
      description: 'Grid・Color便箋とドラッグ&ドロップのステッカーで日記ページを整える機能ページです。',
      intro: '日記がただの文字の保存ではなくなるには、書き方だけでなく見え方も大切です。装飾機能は、記録をまた開きたくなるページへ変えます。',
      sections: [
        { heading: 'グリッドと色で背景の雰囲気を変える', body: '便箋の背景を変えることで、同じ内容でも静かな印象や明るい印象など違う見え方に整えられます。' },
        { heading: 'ステッカーを自由に配置する', body: 'ドラッグ&ドロップで位置を決めながら、思い出カードのような構成や感情中心の構成を作れます。' },
        { heading: 'あとから見返したくなるページにする', body: '文字だけの記録より、装飾されたページの方が記憶に残りやすく、再訪価値も高まります。' },
      ],
      highlights: ['Grid・Colorで便箋スタイルを変更', 'ステッカーを自由にドラッグ配置', '特別な日をカードのように保存できる'],
    },
    zh: {
      title: '用信纸和贴纸装饰日记页面',
      description: '通过 Grid·Color 信纸背景和拖拽贴纸来定制日记页面的功能页面。',
      intro: '当日记变得更私人时，页面呈现本身也会影响回看体验。装饰功能会让一篇记录从纯文本变成更想再次打开的页面。',
      sections: [
        { heading: '用网格和颜色切换背景风格', body: '用户可以通过不同的信纸样式，让同一篇内容呈现出更柔和、更明亮或更有纪念感的氛围。' },
        { heading: '用拖拽方式摆放贴纸', body: '贴纸不只是装饰，也能参与叙事，让页面更像一张情绪卡片或纪念页。' },
        { heading: '让已保存的内容更值得回看', body: '相比纯文字页面，装饰后的页面更容易被记住，也更容易在以后被重新打开。' },
      ],
      highlights: ['通过 Grid·Color 切换信纸风格', '贴纸可自由拖拽摆放', '把特别的记录做成更有纪念感的页面'],
    },
  },
}

export function getGuide(lang: Lang, slug: GuideSlug) {
  return guides[slug][lang]
}

export function getEmotion(lang: Lang, slug: EmotionSlug) {
  return emotions[slug][lang]
}

export function getFeature(lang: Lang, slug: FeatureSlug) {
  return features[slug][lang]
}
