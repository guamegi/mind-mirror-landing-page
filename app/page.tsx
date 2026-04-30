'use client'
import { useEffect } from 'react'

const SUPPORTED_LANGS = ['en', 'ko', 'ja', 'zh']

export default function RootPage() {
  useEffect(() => {
    const stored = localStorage.getItem('mm_lang')
    if (stored && SUPPORTED_LANGS.includes(stored)) {
      window.location.replace(`/${stored}/`)
      return
    }
    const browser = (navigator.language || '').slice(0, 2).toLowerCase()
    const lang = SUPPORTED_LANGS.includes(browser) ? browser : 'en'
    window.location.replace(`/${lang}/`)
  }, [])
  return null
}
