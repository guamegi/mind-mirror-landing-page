import { getPhonePreviewPath, getStoreUrls, translations, LANG_LABELS, type Lang } from '@/lib/i18n'
import ClientSideInit from '@/components/ClientSideInit'
import { resourceCopy } from '@/lib/content'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = lang as Lang
  const t = translations[locale]
  const resources = resourceCopy[locale]
  const langs: Lang[] = ['ko', 'en', 'ja', 'zh']
  const storeUrls = getStoreUrls(locale)

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar" id="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <a href="#" className="nav-logo" aria-label="Mind Mirror home">
            <span className="logo-text">Mind Mirror</span>
          </a>
          <div className="nav-links" id="navLinks" role="menubar">
            <a href="#features" role="menuitem">{t['nav.features']}</a>
            <a href="#how-it-works" role="menuitem">{t['nav.howItWorks']}</a>
            <a href={`/${locale}/guides/`} role="menuitem">{resources.navLabel}</a>
            <a href="#download" role="menuitem">{t['nav.download']}</a>
          </div>
          <div className="nav-right">
            {/* Desktop lang switcher */}
            <div className="lang-switcher" role="group" aria-label="Language selector">
              {langs.map(l => (
                <button key={l} className={`lang-btn${l === lang ? ' active' : ''}`} data-lang={l} aria-label={LANG_LABELS[l]}>
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
            {/* Mobile dropdown */}
            <div className="lang-dropdown" id="langDropdown">
              <button className="lang-dropdown-trigger" id="langDropdownTrigger" aria-haspopup="listbox" aria-expanded="false">
                <span id="langDropdownLabel">{LANG_LABELS[lang as Lang]}</span>
                <svg className="lang-dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <ul className="lang-dropdown-menu" id="langDropdownMenu" role="listbox" aria-label="Language selector">
                {langs.map(l => (
                  <li key={l} className={`lang-dropdown-item${l === lang ? ' active' : ''}`} data-lang={l} role="option">
                    {LANG_LABELS[l]}
                  </li>
                ))}
              </ul>
            </div>
            {/* Theme toggle */}
            <button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
              <span className="theme-icon" aria-hidden="true">🌙</span>
            </button>
            {/* Mobile hamburger */}
            <button className="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home" aria-label="Hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="bg-orb orb-1"></div>
          <div className="bg-orb orb-2"></div>
          <div className="bg-orb orb-3"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">{t['hero.badge']}</div>
            <h1 className="hero-title">
              <span>{t['hero.title1']}</span><br />
              <span className="gradient-text">{t['hero.title2']}</span>
            </h1>
            <p className="hero-subtitle">{t['hero.subtitle']}</p>
            <div className="hero-actions">
              <a href="#download" className="btn-primary">{t['hero.cta']}</a>
              <a href="#features" className="btn-secondary">{t['hero.learnMore']}</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">{t['hero.stat1.num']}</span>
                <span className="stat-label">{t['hero.stat1.label']}</span>
              </div>
              <div className="stat-div" aria-hidden="true"></div>
              <div className="stat">
                <span className="stat-num">{t['hero.stat2.num']}</span>
                <span className="stat-label">{t['hero.stat2.label']}</span>
              </div>
              <div className="stat-div" aria-hidden="true"></div>
              <div className="stat">
                <span className="stat-num">{t['hero.stat3.num']}</span>
                <span className="stat-label">{t['hero.stat3.label']}</span>
              </div>
            </div>
          </div>
          {/* Phone mockup */}
          <div className="hero-visual" aria-hidden="true">
            <div className="phone-mockup">
              <img className="phone-screen-image" src={`${BASE}${getPhonePreviewPath(locale)}`} alt="" />
            </div>
            <div className="floating-card card-1">
              <span className="fc-emoji">🧠</span>
              <span>{t['float.analysis']}</span>
            </div>
            <div className="floating-card card-2">
              <span className="fc-emoji">📈</span>
              <span>{t['float.trend']}</span>
            </div>
            <div className="floating-card card-3">
              <span className="fc-emoji">🔒</span>
              <span>{t['float.privacy']}</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features" aria-labelledby="features-heading">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <div className="section-badge">{t['features.badge']}</div>
            <h2 className="section-title" id="features-heading">{t['features.title']}</h2>
            <p className="section-subtitle">{t['features.subtitle']}</p>
          </div>
          <div className="features-grid">
            <article className="feature-card featured animate-on-scroll delay-1">
              <div className="feature-icon" aria-hidden="true">🤖</div>
              <h3>{t['feat1.title']}</h3>
              <p>{t['feat1.desc']}</p>
              <div className="feature-tags">
                <span>{t['feat1.tag1']}</span>
                <span>{t['feat1.tag2']}</span>
                <span>{t['feat1.tag3']}</span>
              </div>
            </article>
            <article className="feature-card animate-on-scroll delay-2">
              <div className="feature-icon" aria-hidden="true">📊</div>
              <h3>{t['feat2.title']}</h3>
              <p>{t['feat2.desc']}</p>
            </article>
            <article className="feature-card animate-on-scroll delay-3">
              <div className="feature-icon" aria-hidden="true">🔒</div>
              <h3>{t['feat3.title']}</h3>
              <p>{t['feat3.desc']}</p>
            </article>
            <article className="feature-card animate-on-scroll delay-4">
              <div className="feature-icon" aria-hidden="true">🌙</div>
              <h3>{t['feat4.title']}</h3>
              <p>{t['feat4.desc']}</p>
            </article>
            <article className="feature-card animate-on-scroll delay-5">
              <div className="feature-icon" aria-hidden="true">🌍</div>
              <h3>{t['feat5.title']}</h3>
              <p>{t['feat5.desc']}</p>
            </article>
            <article className="feature-card animate-on-scroll delay-6">
              <div className="feature-icon" aria-hidden="true">📷</div>
              <h3><a className="feature-title-link" href={`/${locale}/features/photo-diary/`}>{t['feat6.title']}</a></h3>
              <p>{t['feat6.desc']}</p>
            </article>
            <article className="feature-card animate-on-scroll delay-1">
              <div className="feature-icon" aria-hidden="true">💬</div>
              <h3><a className="feature-title-link" href={`/${locale}/features/ai-diary-chat/`}>{t['feat7.title']}</a></h3>
              <p>{t['feat7.desc']}</p>
            </article>
            <article className="feature-card animate-on-scroll delay-2">
              <div className="feature-icon" aria-hidden="true">📝</div>
              <h3><a className="feature-title-link" href={`/${locale}/features/diary-to-poem/`}>{t['feat8.title']}</a></h3>
              <p>{t['feat8.desc']}</p>
            </article>
            <article className="feature-card animate-on-scroll delay-3">
              <div className="feature-icon" aria-hidden="true">✨</div>
              <h3><a className="feature-title-link" href={`/${locale}/features/diary-proofreading/`}>{t['feat9.title']}</a></h3>
              <p>{t['feat9.desc']}</p>
            </article>
            <article className="feature-card animate-on-scroll delay-4">
              <div className="feature-icon" aria-hidden="true">🎨</div>
              <h3><a className="feature-title-link" href={`/${locale}/features/diary-customization/`}>{t['feat10.title']}</a></h3>
              <p>{t['feat10.desc']}</p>
            </article>
            <article className="feature-card animate-on-scroll delay-5">
              <div className="feature-icon" aria-hidden="true">🧷</div>
              <h3><a className="feature-title-link" href={`/${locale}/features/diary-customization/`}>{t['feat11.title']}</a></h3>
              <p>{t['feat11.desc']}</p>
            </article>
          </div>
        </div>
      </section>

      {/* EMOTIONS */}
      <section className="emotions-section" aria-labelledby="emotions-heading">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <div className="section-badge">{t['emotions.badge']}</div>
            <h2 className="section-title" id="emotions-heading">{t['emotions.title']}</h2>
            <p className="section-subtitle">{t['emotions.subtitle']}</p>
          </div>
          <div className="emotions-grid">
            <a className="emotion-card joy animate-on-scroll delay-1" href={`/${locale}/emotions/joy/`}>
              <img className="emotion-img" src={`${BASE}/images/smile_glow.png`} alt="Joy" />
              <span className="emotion-name">{t['emo.joy']}</span>
            </a>
            <a className="emotion-card excitement animate-on-scroll delay-2" href={`/${locale}/emotions/excitement/`}>
              <img className="emotion-img" src={`${BASE}/images/tiny_peach.png`} alt="Excited" />
              <span className="emotion-name">{t['emo.excitement']}</span>
            </a>
            <a className="emotion-card proud animate-on-scroll delay-3" href={`/${locale}/emotions/pride/`}>
              <img className="emotion-img" src={`${BASE}/images/proud_olive.png`} alt="Proud" />
              <span className="emotion-name">{t['emo.proud']}</span>
            </a>
            <a className="emotion-card grateful animate-on-scroll delay-4" href={`/${locale}/emotions/gratitude/`}>
              <img className="emotion-img" src={`${BASE}/images/love_blush.webp`} alt="Grateful" />
              <span className="emotion-name">{t['emo.grateful']}</span>
            </a>
            <a className="emotion-card satisfied animate-on-scroll delay-5" href={`/${locale}/emotions/satisfaction/`}>
              <img className="emotion-img" src={`${BASE}/images/soft_apricot.webp`} alt="Satisfied" />
              <span className="emotion-name">{t['emo.satisfied']}</span>
            </a>
            <a className="emotion-card neutral animate-on-scroll delay-6" href={`/${locale}/emotions/calm/`}>
              <img className="emotion-img" src={`${BASE}/images/calm_oat.png`} alt="Neutral" />
              <span className="emotion-name">{t['emo.neutral']}</span>
            </a>
            <a className="emotion-card angry animate-on-scroll delay-6" href={`/${locale}/emotions/anger/`}>
              <img className="emotion-img" src={`${BASE}/images/angry_coral.png`} alt="Angry" />
              <span className="emotion-name">{t['emo.angry']}</span>
            </a>
            <a className="emotion-card lonely animate-on-scroll delay-6" href={`/${locale}/emotions/loneliness/`}>
              <img className="emotion-img" src={`${BASE}/images/surprised_sage.webp`} alt="Lonely" />
              <span className="emotion-name">{t['emo.lonely']}</span>
            </a>
            <a className="emotion-card anxious animate-on-scroll delay-6" href={`/${locale}/emotions/anxiety/`}>
              <img className="emotion-img" src={`${BASE}/images/awkward_teal.png`} alt="Anxious" />
              <span className="emotion-name">{t['emo.anxious']}</span>
            </a>
            <a className="emotion-card sad animate-on-scroll delay-6" href={`/${locale}/emotions/sadness/`}>
              <img className="emotion-img" src={`${BASE}/images/sad_cream.webp`} alt="Sad" />
              <span className="emotion-name">{t['emo.sad']}</span>
            </a>
            <a className="emotion-card tired animate-on-scroll delay-6" href={`/${locale}/emotions/tiredness/`}>
              <img className="emotion-img" src={`${BASE}/images/blank_blush.png`} alt="Tired" />
              <span className="emotion-name">{t['emo.tired']}</span>
            </a>
          </div>
        </div>
      </section>

      {/* AI FEATURES */}
      <section className="ai-features-section" aria-labelledby="aifeat-heading">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <div className="section-badge">{t['aifeat.badge']}</div>
            <h2 className="section-title" id="aifeat-heading">{t['aifeat.title']}</h2>
            <p className="section-subtitle">{t['aifeat.subtitle']}</p>
          </div>
          <div className="ai-features-grid">
            {[
              { icon: '📷', titleKey: 'aifeat.photo.title', descKey: 'aifeat.photo.desc', delay: 1 },
              { icon: '🎭', titleKey: 'aifeat.poem.title', descKey: 'aifeat.poem.desc', delay: 2 },
              { icon: '✏️', titleKey: 'aifeat.correct.title', descKey: 'aifeat.correct.desc', delay: 3 },
              { icon: '💬', titleKey: 'aifeat.chat.title', descKey: 'aifeat.chat.desc', delay: 4 },
              { icon: '💝', titleKey: 'aifeat.relation.title', descKey: 'aifeat.relation.desc', delay: 5 },
              { icon: '🔮', titleKey: 'aifeat.fortune.title', descKey: 'aifeat.fortune.desc', delay: 6 },
            ].map(({ icon, titleKey, descKey, delay }) => (
              <article key={titleKey} className={`ai-feat-card animate-on-scroll delay-${delay}`}>
                <div className="ai-feat-icon" aria-hidden="true">{icon}</div>
                <h3>{t[titleKey]}</h3>
                <p>{t[descKey]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHAT SPOTLIGHT */}
      <section className="feature-spotlight chat-spotlight" id="chat-feature" aria-labelledby="chat-spot-heading">
        <div className="section-container">
          <div className="spot-inner">
            <div className="spot-content animate-on-scroll delay-1">
              <div className="section-badge">{t['chat.badge']}</div>
              <h2 className="spot-title" id="chat-spot-heading">
                <span>{t['chat.title1']}</span><br />
                <span>{t['chat.title2']}</span>
              </h2>
              <p className="spot-desc">{t['chat.desc']}</p>
              <ul className="spot-list">
                <li><span className="spot-check">✓</span><span>{t['chat.li1']}</span></li>
                <li><span className="spot-check">✓</span><span>{t['chat.li2']}</span></li>
                <li><span className="spot-check">✓</span><span>{t['chat.li3']}</span></li>
              </ul>
            </div>
            <div className="spot-visual animate-on-scroll delay-2" aria-hidden="true">
              <div className="chat-mockup">
                <div className="chat-mockup-header">
                  <span className="chat-mockup-icon">💬</span>
                  <span>{t['chat.header']}</span>
                </div>
                <div className="chat-mockup-body">
                  <div className="chat-row ai-row">
                    <span className="chat-ava">🤖</span>
                    <span className="chat-bub chat-bub-ai">{t['chat.q1']}</span>
                  </div>
                  <div className="chat-row user-row">
                    <span className="chat-bub chat-bub-user">{t['chat.a1']}</span>
                  </div>
                  <div className="chat-row ai-row">
                    <span className="chat-ava">🤖</span>
                    <span className="chat-bub chat-bub-ai">{t['chat.q2']}</span>
                  </div>
                  <div className="chat-row user-row">
                    <span className="chat-bub chat-bub-user">{t['chat.a2']}</span>
                  </div>
                </div>
                <div className="chat-mockup-footer">
                  <span className="chat-gen">✨ <span>{t['chat.gen']}</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO DIARY SPOTLIGHT */}
      <section className="feature-spotlight" id="photo-feature" aria-labelledby="photo-spot-heading">
        <div className="section-container">
          <div className="spot-inner photo-spot-inner">
            <div className="spot-visual animate-on-scroll delay-1" aria-hidden="true">
              <div className="photo-flow-wrap">
                <div className="pf-photo-box">
                  <span className="pf-camera">📷</span>
                  <span className="pf-hint">{t['photo.hint']}</span>
                </div>
                <div className="pf-arrow">
                  <span className="pf-ai-badge">✨ AI</span>
                  <span className="pf-arr-icon">→</span>
                </div>
                <div className="pf-diary-box">
                  <div className="pf-diary-header">
                    <span className="pf-diary-dot"></span>
                    <span className="pf-diary-date">2026. 04. 27</span>
                    <span className="pf-diary-tag">{t['emo.joy']}</span>
                  </div>
                  <div className="pf-diary-title">{t['app.diary']}</div>
                  <div className="pf-diary-lines">
                    <span className="pf-dl pf-dl-full"></span>
                    <span className="pf-dl pf-dl-4-5"></span>
                    <span className="pf-dl pf-dl-3-5"></span>
                  </div>
                  <div className="pf-done">
                    <span>✨</span>
                    <span>{t['photo.done']}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="spot-content animate-on-scroll delay-2">
              <div className="section-badge">{t['photo.badge']}</div>
              <h2 className="spot-title" id="photo-spot-heading">
                <span>{t['photo.title1']}</span><br />
                <span>{t['photo.title2']}</span>
              </h2>
              <p className="spot-desc">{t['photo.desc']}</p>
              <ul className="spot-list">
                <li><span className="spot-check">✓</span><span>{t['photo.li1']}</span></li>
                <li><span className="spot-check">✓</span><span>{t['photo.li2']}</span></li>
                <li><span className="spot-check">✓</span><span>{t['photo.li3']}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RELATIONSHIP INDEX SPOTLIGHT */}
      <section className="feature-spotlight relation-spotlight" id="relation-feature" aria-labelledby="relation-spot-heading">
        <div className="section-container">
          <div className="spot-inner">
            <div className="spot-content animate-on-scroll delay-1">
              <div className="section-badge">{t['relation.badge']}</div>
              <h2 className="spot-title" id="relation-spot-heading">
                <span>{t['relation.title1']}</span><br />
                <span>{t['relation.title2']}</span>
              </h2>
              <p className="spot-desc">{t['relation.desc']}</p>
              <ul className="spot-list">
                <li><span className="spot-check">✓</span><span>{t['relation.li1']}</span></li>
                <li><span className="spot-check">✓</span><span>{t['relation.li2']}</span></li>
                <li><span className="spot-check">✓</span><span>{t['relation.li3']}</span></li>
              </ul>
            </div>
            <div className="spot-visual animate-on-scroll delay-2" aria-hidden="true">
              <div className="relation-card">
                <div className="rc-header">
                  <span className="rc-title">{t['relation.card.title']}</span>
                  <span>💝</span>
                </div>
                <div className="rc-list">
                  {[
                    { avClass: 'rc-av-pink', barClass: 'rc-bar-pink', emo: '💕', nameKey: 'relation.p1', score: 98, w: '98%' },
                    { avClass: 'rc-av-purple', barClass: 'rc-bar-purple', emo: '👫', nameKey: 'relation.p2', score: 92, w: '92%' },
                    { avClass: 'rc-av-teal', barClass: 'rc-bar-teal', emo: '👨‍👩‍👦', nameKey: 'relation.p3', score: 87, w: '87%' },
                    { avClass: 'rc-av-yellow', barClass: 'rc-bar-yellow', emo: '💼', nameKey: 'relation.p4', score: 65, w: '65%' },
                  ].map(({ avClass, barClass, emo, nameKey, score, w }) => (
                    <div key={nameKey} className="rc-item">
                      <div className="rc-person">
                        <span className={`rc-avatar ${avClass}`}>{emo}</span>
                        <span className="rc-name">{t[nameKey]}</span>
                      </div>
                      <div className="rc-bar-wrap">
                        <div className={`rc-bar ${barClass}`} style={{ '--bar-w': w } as React.CSSProperties}></div>
                      </div>
                      <span className="rc-score">{score}</span>
                    </div>
                  ))}
                </div>
                <div className="rc-footer">
                  <span className="rc-ai-tag">✨ AI 분석 기반</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works" id="how-it-works" aria-labelledby="how-heading">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <div className="section-badge">{t['how.badge']}</div>
            <h2 className="section-title" id="how-heading">{t['how.title']}</h2>
            <p className="section-subtitle">{t['how.subtitle']}</p>
          </div>
          <div className="steps">
            <article className="step animate-on-scroll delay-1">
              <div className="step-num">01</div>
              <span className="step-visual" aria-hidden="true">✍️</span>
              <h3>{t['step1.title']}</h3>
              <p>{t['step1.desc']}</p>
            </article>
            <div className="step-arrow animate-on-scroll delay-2" aria-hidden="true">→</div>
            <article className="step animate-on-scroll delay-3">
              <div className="step-num">02</div>
              <span className="step-visual" aria-hidden="true">🤖</span>
              <h3>{t['step2.title']}</h3>
              <p>{t['step2.desc']}</p>
            </article>
            <div className="step-arrow animate-on-scroll delay-4" aria-hidden="true">→</div>
            <article className="step animate-on-scroll delay-5">
              <div className="step-num">03</div>
              <span className="step-visual" aria-hidden="true">💡</span>
              <h3>{t['step3.title']}</h3>
              <p>{t['step3.desc']}</p>
            </article>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className="download" id="download" aria-labelledby="dl-heading">
        <div className="dl-bg" aria-hidden="true"><div className="orb-4"></div></div>
        <div className="section-container">
          <div className="download-inner animate-on-scroll">
            <h2 className="download-title" id="dl-heading">{t['dl.title']}</h2>
            <p className="download-subtitle">{t['dl.subtitle']}</p>
            <div className="store-buttons">
              <a href={storeUrls.appStore} className="store-btn" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.06.04c-.22.14-2.19 1.28-2.17 3.83.03 3.02 2.65 4.03 2.68 4.04l-.09.27z"/>
                  <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="store-text">
                  <span className="store-label">{t['dl.as.label']}</span>
                  <span className="store-name">App Store</span>
                </div>
              </a>
              <a href={storeUrls.playStore} className="store-btn" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
                  <path d="M3.18 23.76c.37.21.8.26 1.24.14l12.44-7.18-2.82-2.82L3.18 23.76zm-1.63-20L13.42 12 1.55.24C1.21.4.99.75.99 1.18v21.64c0 .43.22.78.56.94zM20.44 10.45l-2.6-1.5L14.66 12l3.18 3.18 2.62-1.51c.74-.43.74-1.79-.02-2.22zM4.42.1L16.86 7.28 14.04 10.1 4.42.1z"/>
                </svg>
                <div className="store-text">
                  <span className="store-label">{t['dl.gp.label']}</span>
                  <span className="store-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="nav-logo" aria-label="Mind Mirror">
                <span className="logo-text">Mind Mirror</span>
              </a>
              <p className="footer-tagline">{t['footer.tagline']}</p>
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
              <div className="footer-col">
                <h4>{t['footer.product']}</h4>
                <a href="#features">{t['nav.features']}</a>
                <a href="#how-it-works">{t['nav.howItWorks']}</a>
                <a href={`/${locale}/features/`}>{resources.footerFeatures}</a>
                <a href={`/${locale}/guides/`}>{resources.footerGuides}</a>
                <a href={`/${locale}/emotions/`}>{resources.footerEmotions}</a>
                <a href="#download">{t['nav.download']}</a>
              </div>
              <div className="footer-col">
                <h4>{t['footer.legal']}</h4>
                <a href="https://cheddar-toy-4e8.notion.site/Privacy-Policy-Terms-for-Mind-Mirror-318e20a8500380a5a849d161145621b6" target="_blank" rel="noopener noreferrer">{t['footer.privacy']}</a>
                <a href="https://cheddar-toy-4e8.notion.site/Privacy-Policy-Terms-for-Mind-Mirror-318e20a8500380a5a849d161145621b6" target="_blank" rel="noopener noreferrer">{t['footer.terms']}</a>
              </div>
            </nav>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">{t['footer.copy']}</p>
          </div>
        </div>
      </footer>

      <ClientSideInit lang={lang} />
    </>
  )
}
