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

type ResourceCopy = {
  navLabel: string
  sectionBadge: string
  sectionTitle: string
  sectionSubtitle: string
  guidesLabel: string
  guidesDescription: string
  guidesCta: string
  emotionsLabel: string
  emotionsDescription: string
  emotionsCta: string
  emotionCardCta: string
  breadcrumbHome: string
  breadcrumbGuides: string
  breadcrumbEmotions: string
  backToHome: string
  exploreGuides: string
  exploreEmotions: string
  guideListTitle: string
  emotionListTitle: string
  articlePromptsTitle: string
  signalsTitle: string
  journalTipsTitle: string
  downloadTitle: string
  downloadBody: string
  footerGuides: string
  footerEmotions: string
}

export const resourceCopy: Record<Lang, ResourceCopy> = {
  ko: {
    navLabel: '가이드',
    sectionBadge: '리소스',
    sectionTitle: '검색 유입용 콘텐츠를 제품 안쪽으로 붙였습니다',
    sectionSubtitle: '블로그를 따로 벌리지 않고, 감정 일기 사용 맥락과 7가지 감정 카테고리를 중심으로 읽을 거리를 연결합니다.',
    guidesLabel: '가이드 5개',
    guidesDescription: '시작법, 템플릿, 무감각한 날 기록법, 사진 일기, 주간 리뷰까지 앱 사용 상황과 바로 연결되는 안내 페이지입니다.',
    guidesCta: '가이드 보기',
    emotionsLabel: '감정 사전 7개',
    emotionsDescription: '기쁨, 슬픔, 평온, 화남 같은 감정을 구분하고 기록하는 방법을 정리한 사전형 페이지입니다.',
    emotionsCta: '감정 사전 보기',
    emotionCardCta: '감정 기록 팁 보기',
    breadcrumbHome: '홈',
    breadcrumbGuides: '가이드',
    breadcrumbEmotions: '감정 사전',
    backToHome: '홈으로 돌아가기',
    exploreGuides: '전체 가이드',
    exploreEmotions: '전체 감정 사전',
    guideListTitle: '이런 가이드를 먼저 읽어보세요',
    emotionListTitle: '이 감정도 함께 살펴보세요',
    articlePromptsTitle: '바로 써볼 질문',
    signalsTitle: '이럴 때 자주 나타납니다',
    journalTipsTitle: '일기에 이렇게 남겨보세요',
    downloadTitle: '앱에서 바로 기록해보세요',
    downloadBody: 'Mind Mirror에서 감정을 기록하고 AI 분석으로 패턴을 다시 볼 수 있습니다.',
    footerGuides: '가이드',
    footerEmotions: '감정 사전',
  },
  en: {
    navLabel: 'Guides',
    sectionBadge: 'Resources',
    sectionTitle: 'Search content now lives inside the product story',
    sectionSubtitle: 'Instead of a detached blog, the site now links practical journaling guides and emotion dictionary pages around the app experience.',
    guidesLabel: '5 Guides',
    guidesDescription: 'Start here for setup, templates, numb days, photo journaling, and weekly reviews that map directly to product use cases.',
    guidesCta: 'Browse guides',
    emotionsLabel: '7 Emotion Entries',
    emotionsDescription: 'Dictionary-style pages explain how to tell emotions apart and how to write about them in a diary entry.',
    emotionsCta: 'Browse emotions',
    emotionCardCta: 'See journaling tips',
    breadcrumbHome: 'Home',
    breadcrumbGuides: 'Guides',
    breadcrumbEmotions: 'Emotion Dictionary',
    backToHome: 'Back to home',
    exploreGuides: 'All guides',
    exploreEmotions: 'All emotions',
    guideListTitle: 'Start with these guides',
    emotionListTitle: 'Related emotions to explore',
    articlePromptsTitle: 'Prompts to try now',
    signalsTitle: 'Common signs',
    journalTipsTitle: 'How to write it down',
    downloadTitle: 'Capture it in the app',
    downloadBody: 'Use Mind Mirror to log the moment and revisit your patterns with AI analysis.',
    footerGuides: 'Guides',
    footerEmotions: 'Emotion Dictionary',
  },
  ja: {
    navLabel: 'ガイド',
    sectionBadge: 'リソース',
    sectionTitle: '検索流入向けコンテンツを製品導線の中に入れました',
    sectionSubtitle: '独立したブログではなく、感情日記の使い方と7つの感情カテゴリに沿ったガイドを用意します。',
    guidesLabel: '5つのガイド',
    guidesDescription: '始め方、テンプレート、無感覚な日、写真日記、週間レビューまで、アプリの使い方に直結する内容です。',
    guidesCta: 'ガイドを見る',
    emotionsLabel: '7つの感情ページ',
    emotionsDescription: '感情の違いと、日記でどう言葉にするかを整理した辞書型ページです。',
    emotionsCta: '感情辞典を見る',
    emotionCardCta: '記録のヒントを見る',
    breadcrumbHome: 'ホーム',
    breadcrumbGuides: 'ガイド',
    breadcrumbEmotions: '感情辞典',
    backToHome: 'ホームへ戻る',
    exploreGuides: 'ガイド一覧',
    exploreEmotions: '感情辞典一覧',
    guideListTitle: '先に読むとよいガイド',
    emotionListTitle: 'あわせて見たい感情',
    articlePromptsTitle: '今すぐ使える質問',
    signalsTitle: 'よく見られるサイン',
    journalTipsTitle: '日記にはこう残します',
    downloadTitle: 'アプリですぐ記録できます',
    downloadBody: 'Mind Mirrorで感情を記録し、AI分析で流れを振り返れます。',
    footerGuides: 'ガイド',
    footerEmotions: '感情辞典',
  },
  zh: {
    navLabel: '指南',
    sectionBadge: '资源',
    sectionTitle: '把搜索内容直接放进产品路径里',
    sectionSubtitle: '不做松散博客，而是围绕情绪日记的使用场景和7种情绪分类建立内容页。',
    guidesLabel: '5篇指南',
    guidesDescription: '包含开始方法、模板、麻木时怎么写、照片日记和每周复盘，和产品功能直接对应。',
    guidesCta: '查看指南',
    emotionsLabel: '7个情绪词条',
    emotionsDescription: '词条式页面帮助用户区分情绪，并学习如何把它写进日记里。',
    emotionsCta: '查看情绪词典',
    emotionCardCta: '查看记录建议',
    breadcrumbHome: '首页',
    breadcrumbGuides: '指南',
    breadcrumbEmotions: '情绪词典',
    backToHome: '返回首页',
    exploreGuides: '全部指南',
    exploreEmotions: '全部情绪词典',
    guideListTitle: '先看这些指南',
    emotionListTitle: '也可以看看这些情绪',
    articlePromptsTitle: '现在就能用的问题',
    signalsTitle: '常见表现',
    journalTipsTitle: '可以这样写进日记',
    downloadTitle: '直接在应用里记录',
    downloadBody: '用 Mind Mirror 记录当下，再通过 AI 分析回看自己的情绪模式。',
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

export function getGuide(lang: Lang, slug: GuideSlug) {
  return guides[slug][lang]
}

export function getEmotion(lang: Lang, slug: EmotionSlug) {
  return emotions[slug][lang]
}
