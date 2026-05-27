'use client'

import { useEffect, useState, type CSSProperties } from 'react'

const rewardStars = 20

const copyByLocale = {
  ko: {
    htmlLang: 'ko',
    title: 'MindMirror - AI 심리 분석 일기앱',
    subtitle: 'AI가 내 감정을 분석해주는 심리 분석 일기앱',
    reward: `친구가 링크를 통해 가입하면 추천인에게도 별 ${rewardStars}개가 지급돼요.`,
    open: '앱에서 열기',
    download: '앱 다운로드',
    mobileOnly: '모바일에서 이용 가능해요',
    note: '앱이 설치되어 있으면 자동으로 열려요. 설치되어 있지 않다면 스토어로 이동해요.',
  },
  en: {
    htmlLang: 'en',
    title: 'MindMirror - AI Diary & Care',
    subtitle: 'An AI diary app that helps you reflect on your emotions',
    reward: `When your friend joins through this link, you also get ${rewardStars} stars.`,
    open: 'Open in App',
    download: 'Download App',
    mobileOnly: 'Available on mobile devices',
    note: 'If the app is installed, it should open automatically. Otherwise, you will be redirected to the store.',
  },
  ja: {
    htmlLang: 'ja',
    title: 'MindMirror - AI日記＆ケア',
    subtitle: 'AIが気持ちを整理してくれる心理分析日記アプリ',
    reward: `このリンクから友達が登録すると、紹介した方にも星${rewardStars}個が付与されます。`,
    open: 'アプリで開く',
    download: 'アプリをダウンロード',
    mobileOnly: 'モバイル端末で利用できます',
    note: 'アプリがインストールされていれば自動で開きます。未インストールの場合はストアへ移動します。',
  },
  zh: {
    htmlLang: 'zh',
    title: 'MindMirror - AI日记与关怀',
    subtitle: 'AI 帮你整理情绪的心理分析日记应用',
    reward: `好友通过此链接加入后，推荐人也会获得 ${rewardStars} 颗星。`,
    open: '在应用中打开',
    download: '下载应用',
    mobileOnly: '仅可在移动设备上使用',
    note: '如果已安装应用，会自动打开。若未安装，将跳转到应用商店。',
  },
} as const

export default function InvitePage() {
  const [locale, setLocale] = useState<keyof typeof copyByLocale>('en')
  const [refCode, setRefCode] = useState('')
  const [userAgent, setUserAgent] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const requested = (params.get('lang') || navigator.language || 'en').toLowerCase()
    const nextLocale =
      requested.startsWith('ko') ? 'ko' :
      requested.startsWith('ja') ? 'ja' :
      requested.startsWith('zh') ? 'zh' :
      'en'

    setLocale(nextLocale)
    setRefCode(params.get('ref') || '')
    setUserAgent(navigator.userAgent)
    document.title = copyByLocale[nextLocale].title
    document.documentElement.lang = copyByLocale[nextLocale].htmlLang
  }, [])

  const copy = copyByLocale[locale]
  const deepLink = `mindmirror://invite?ref=${refCode}`
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent)
  const isAndroid = /Android/i.test(userAgent)
  const appStoreUrl = 'https://apps.apple.com/app/id000000000'
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.mindmirror.mind_mirror'
  const storeUrl = isIOS ? appStoreUrl : isAndroid ? playStoreUrl : '#'

  const handleOpen = () => {
    window.location.href = deepLink

    const timeoutId = window.setTimeout(() => {
      if (isIOS) window.location.href = appStoreUrl
      else if (isAndroid) window.location.href = playStoreUrl
    }, 1500)

    const onVisibility = () => {
      if (document.hidden) {
        window.clearTimeout(timeoutId)
        document.removeEventListener('visibilitychange', onVisibility)
      }
    }

    document.addEventListener('visibilitychange', onVisibility)
  }

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>🪞✨</div>
        <h1 style={styles.title}>MindMirror</h1>
        <p style={styles.subtitle}>{copy.subtitle}</p>
        <div style={styles.reward}>{copy.reward}</div>
        <button onClick={handleOpen} style={styles.primaryButton} type="button">
          {copy.open}
        </button>
        <a
          href={storeUrl}
          style={{
            ...styles.secondaryButton,
            ...(isIOS || isAndroid ? null : styles.disabledButton),
          }}
        >
          {isIOS || isAndroid ? copy.download : copy.mobileOnly}
        </a>
        <p style={styles.note}>{copy.note}</p>
      </div>
    </main>
  )
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    background: 'linear-gradient(135deg, #111118 0%, #1c1a2e 100%)',
    color: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
  },
  card: {
    width: '100%',
    maxWidth: '380px',
    padding: '40px 32px',
    borderRadius: '28px',
    textAlign: 'center',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    boxSizing: 'border-box',
  },
  icon: {
    fontSize: '56px',
    marginBottom: '16px',
  },
  title: {
    margin: '0 0 8px',
    fontSize: '22px',
    fontWeight: 700,
  },
  subtitle: {
    margin: '0 0 28px',
    fontSize: '14px',
    lineHeight: 1.6,
    color: 'rgba(255,255,255,0.72)',
  },
  reward: {
    marginBottom: '28px',
    padding: '16px',
    borderRadius: '14px',
    background: 'rgba(108,99,255,0.2)',
    border: '1px solid rgba(108,99,255,0.4)',
    fontSize: '15px',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  primaryButton: {
    width: '100%',
    display: 'block',
    marginBottom: '12px',
    padding: '16px',
    border: 'none',
    borderRadius: '16px',
    background: '#6C63FF',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    textDecoration: 'none',
  },
  secondaryButton: {
    width: '100%',
    display: 'block',
    padding: '16px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.1)',
    color: 'rgba(255,255,255,0.88)',
    fontSize: '16px',
    fontWeight: 700,
    textDecoration: 'none',
    boxSizing: 'border-box',
  },
  disabledButton: {
    pointerEvents: 'none',
    opacity: 0.4,
  },
  note: {
    margin: '20px 0 0',
    fontSize: '12px',
    lineHeight: 1.5,
    color: 'rgba(255,255,255,0.38)',
  },
}
