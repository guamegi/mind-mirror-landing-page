'use client'
import { useEffect } from 'react'

export default function ClientSideInit({ lang }: { lang: string }) {
  useEffect(() => {
    // Save lang preference
    localStorage.setItem('mm_lang', lang)

    // Theme
    function applyTheme(theme: string) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('mm_theme', theme)
      const icon = document.querySelector('.theme-icon')
      if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙'
    }

    const savedTheme = localStorage.getItem('mm_theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    applyTheme(savedTheme)

    const themeToggle = document.getElementById('themeToggle')
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') || 'light'
        applyTheme(cur === 'dark' ? 'light' : 'dark')
      })
    }

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

    // Language switching - navigate to /{lang}/
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetLang = (btn as HTMLElement).dataset.lang
        if (targetLang) window.location.href = `${basePath}/${targetLang}/`
      })
    })

    // Mobile dropdown
    const dropdown = document.getElementById('langDropdown')
    const trigger = document.getElementById('langDropdownTrigger')
    const dropdownMenu = document.getElementById('langDropdownMenu')
    if (dropdown && trigger && dropdownMenu) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation()
        const isOpen = dropdown.classList.toggle('open')
        trigger.setAttribute('aria-expanded', String(isOpen))
      })
      dropdownMenu.querySelectorAll('.lang-dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
          const targetLang = (item as HTMLElement).dataset.lang
          if (targetLang) window.location.href = `${basePath}/${targetLang}/`
        })
      })
      document.addEventListener('click', () => {
        dropdown.classList.remove('open')
        trigger.setAttribute('aria-expanded', 'false')
      })
    }

    // Navbar scroll
    const nav = document.getElementById('navbar')
    const handleScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Mobile menu
    const menuToggle = document.getElementById('menuToggle')
    const navLinks = document.getElementById('navLinks')
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open')
        menuToggle.classList.toggle('open')
      })
      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          navLinks.classList.remove('open')
          menuToggle.classList.remove('open')
        })
      })
    }

    // Scroll animations
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.animate-on-scroll').forEach(el => scrollObserver.observe(el))

    // Floating cards
    document.querySelectorAll('.floating-card').forEach((card, i) => {
      (card as HTMLElement).style.animationDelay = `${i * 0.4}s`
    })

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href')
        if (!href || href === '#') return
        const target = document.getElementById(href.slice(1))
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })

    // Counter animation
    const statsSection = document.querySelector('.hero-stats')
    if (statsSection) {
      const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-num').forEach(el => el.classList.add('pop'))
            counterObserver.unobserve(entry.target)
          }
        })
      }, { threshold: 0.5 })
      counterObserver.observe(statsSection)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      scrollObserver.disconnect()
    }
  }, [lang])

  return null
}
