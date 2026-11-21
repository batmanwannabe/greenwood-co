import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useLocale } from '../context/LocaleContext'
import { LOCALES, LOCALE_LABELS, type Locale } from '../i18n/types'

export function Header() {
  const { itemCount, openCart } = useCart()
  const { locale, setLocale, t } = useLocale()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = location.pathname === '/'
  const solid = !isHome || scrolled || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  return (
    <header
      className={[
        'site-header',
        solid ? 'is-solid' : '',
        scrolled ? 'is-scrolled' : '',
        menuOpen ? 'is-menu-open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Link to="/" className="nav-brand">
        Greenwood & Co.
      </Link>

      <button
        type="button"
        className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
        aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
      </button>

      <nav className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label={t('nav.primary')}>
        <a href="/#philosophy" onClick={() => setMenuOpen(false)}>
          {t('nav.philosophy')}
        </a>
        <a href="/#collection" onClick={() => setMenuOpen(false)}>
          {t('nav.collection')}
        </a>
        <a href="/#craft" onClick={() => setMenuOpen(false)}>
          {t('nav.craft')}
        </a>
        <div className="lang-switch" role="group" aria-label={t('nav.language')}>
          {LOCALES.map((code, i) => (
            <span key={code} className="lang-switch-item">
              {i > 0 && <span className="lang-sep" aria-hidden="true">
                ·
              </span>}
              <button
                type="button"
                className={locale === code ? 'is-active' : undefined}
                aria-pressed={locale === code}
                onClick={() => setLocale(code as Locale)}
              >
                {LOCALE_LABELS[code]}
              </button>
            </span>
          ))}
        </div>
        <button type="button" className="cart-btn" onClick={openCart}>
          {t('nav.bag')} <span className="cart-count">({itemCount})</span>
        </button>
      </nav>
    </header>
  )
}
