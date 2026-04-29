# Mind Mirror — Landing Page

> Official landing page for **Mind Mirror**, an AI-powered emotion diary app for iOS & Android.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-guamegi.github.io-6C63FF?style=flat-square&logo=github)](https://guamegi.github.io/mind-mirror-landing-page/)
[![App Store](https://img.shields.io/badge/App%20Store-Download-000000?style=flat-square&logo=apple)](https://apps.apple.com/app/mind-mirror/id6759994294)
[![Google Play](https://img.shields.io/badge/Google%20Play-Download-414141?style=flat-square&logo=google-play)](https://play.google.com/store/apps/details?id=com.mindmirror.mind_mirror)

---

## Overview

This is a **static landing page** built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools. It is designed to be deployed directly to GitHub Pages.

The page introduces Mind Mirror, which lets users write daily diary entries analyzed by AI to uncover emotion patterns and provide mental wellness insights.

---

## Features

### Page

- **Multilingual** — Korean, English, Japanese, Chinese; auto-detected from URL param → localStorage → browser language
- **Dark / Light mode** — respects `prefers-color-scheme`, persisted in localStorage
- **Fully responsive** — mobile-first, tested down to 375 px
- **Smooth animations** — scroll-triggered fade-in, floating cards, mouse parallax on phone mockup

### SEO

- Semantic HTML5 with proper heading hierarchy
- `<meta>` description, keywords, author
- Open Graph & Twitter Card tags
- JSON-LD structured data (`MobileApplication` schema)
- `hreflang` alternate links for all four languages
- `sitemap.xml` with multilingual `xhtml:link` entries
- `robots.txt`
- Emoji SVG favicon (no external dependency)

---

## App — Mind Mirror

|               |                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| **Platform**  | iOS / Android                                                                                                  |
| **Category**  | Health & Fitness                                                                                               |
| **Price**     | Free                                                                                                           |
| **AI**        | Emotion analysis, poem conversion, writing correction, conversational diary, relationship index, daily fortune |
| **Languages** | Korean · English · Japanese · Chinese                                                                          |

**7 Emotion Categories:** Joy · Excitement · Proud · Sad · Neutral · Angry · Tired

---

## Tech Stack

| Layer     | Technology                                                        |
| --------- | ----------------------------------------------------------------- |
| Markup    | HTML5 (semantic)                                                  |
| Styling   | CSS3 — custom properties, grid, flexbox, `prefers-color-scheme`   |
| Scripting | Vanilla ES6+ JavaScript                                           |
| Fonts     | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Hosting   | GitHub Pages                                                      |

Zero npm dependencies. Zero build step.

---

## Project Structure

```
mind-mirror-landing-page/
├── index.html          # Main page — all sections, SEO meta, JSON-LD
├── css/
│   └── style.css       # All styles (variables, dark mode, responsive)
├── js/
│   ├── i18n.js         # Translation strings for ko / en / ja / zh
│   └── main.js         # Language switching, theme, scroll animations
├── sitemap.xml         # Multilingual sitemap
├── robots.txt          # Search engine directives
└── .nojekyll           # Disables Jekyll processing on GitHub Pages
```

---

## Local Development

No installation required. Just open the file:

```bash
# Option 1 — open directly in browser
open index.html

# Option 2 — serve locally (avoids any file:// quirks)
npx serve .
# or
python3 -m http.server 8080
```

---

## License

MIT © 2026 Mind Mirror
