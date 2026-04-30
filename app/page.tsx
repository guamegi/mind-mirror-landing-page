'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const SUPPORTED_LANGS = ['en', 'ko', 'ja', 'zh']

export default function RootPage() {
  const router = useRouter()
  useEffect(() => {
    const stored = localStorage.getItem('mm_lang')
    const lang = stored && SUPPORTED_LANGS.includes(stored)
      ? stored
      : SUPPORTED_LANGS.includes((navigator.language || '').slice(0, 2).toLowerCase())
        ? (navigator.language || '').slice(0, 2).toLowerCase()
        : 'en'
    router.replace(`/${lang}/`)
  }, [router])
  return null
}
