# Mind Mirror - Landing Page

> Official landing page for **Mind Mirror**, an AI-powered emotion diary app for iOS and Android.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-guamegi.github.io-6C63FF?style=flat-square&logo=github)](https://guamegi.github.io/mind-mirror-landing-page/)
[![App Store](https://img.shields.io/badge/App%20Store-Download-000000?style=flat-square&logo=apple)](https://apps.apple.com/app/mind-mirror/id6759994294)
[![Google Play](https://img.shields.io/badge/Google%20Play-Download-414141?style=flat-square&logo=google-play)](https://play.google.com/store/apps/details?id=com.mindmirror.mind_mirror)

## Overview

This project is a **Next.js 15** landing page migrated from a static HTML/CSS/JS implementation.

It keeps the original single-page marketing experience, while using the **App Router** and **static export** for deployment to GitHub Pages.

## Features

- Next.js App Router structure
- Static export build for GitHub Pages
- Multilingual landing pages for `en`, `ko`, `ja`, and `zh`
- Client-side language detection and redirect from `/` to `/{lang}/`
- Dark / light theme persisted in `localStorage`
- Responsive layout and scroll-based UI effects
- SEO metadata, Open Graph, Twitter Card, and JSON-LD structured data

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 |
| UI | React 19 |
| Language | TypeScript |
| Styling | Global CSS |
| Routing | App Router |
| Deployment | Static export + GitHub Pages |

## Project Structure

```text
mind-mirror-landing-page/
├── app/
│   ├── layout.tsx         # Root layout, global font/theme bootstrapping
│   ├── page.tsx           # Redirects users to the best language route
│   ├── globals.css        # Global styles
│   └── [lang]/
│       ├── layout.tsx     # Per-language metadata and JSON-LD
│       └── page.tsx       # Main landing page UI
├── components/
│   └── ClientSideInit.tsx # Theme, language switcher, animations, mobile menu
├── lib/
│   └── i18n.ts            # Translation strings and locale metadata
├── public/
│   └── images/            # Static assets served by Next.js
├── next.config.js         # Static export and GitHub Pages basePath config
└── package.json
```

## Local Development

Install dependencies and start the Next.js dev server:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000/mind-mirror-landing-page`.

Because `basePath` is set to `/mind-mirror-landing-page`, local routes are also served under that prefix.

## Build

```bash
npm run build
```

This project uses:

- `output: 'export'`
- `trailingSlash: true`
- `basePath: '/mind-mirror-landing-page'`
- `assetPrefix: '/mind-mirror-landing-page'`

The static output is generated for GitHub Pages-compatible deployment.

## Internationalization

Supported languages:

- `en`
- `ko`
- `ja`
- `zh`

Routing behavior:

- `/` detects the preferred language from `localStorage` or browser settings
- Users are redirected to `/{lang}/`
- Language changes update `localStorage` and navigate between localized routes

## Deployment Notes

This repository is configured for GitHub Pages-style hosting, not a default Next.js server deployment.

If you change the repository name or deployment path, update these values in [`next.config.js`](/Users/mastermilk/Desktop/web/toy-project/mind-mirror-landing-page/next.config.js):

- `basePath`
- `assetPrefix`
- `NEXT_PUBLIC_BASE_PATH`

## License

MIT © 2026 Mind Mirror
