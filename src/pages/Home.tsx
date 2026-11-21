import { useState, type FormEvent } from 'react'
import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'
import { Footer } from '../components/Footer'
import { useLocale } from '../context/LocaleContext'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80'

const CRAFT_IMAGE =
  'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80'

export function Home() {
  const [subscribed, setSubscribed] = useState(false)
  const { t } = useLocale()

  const onNewsletter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <main>
      <section className="hero" aria-label={t('hero.aria')}>
        <div className="hero-media">
          <img src={HERO_IMAGE} alt={t('hero.alt')} fetchPriority="high" />
        </div>
        <div className="hero-content">
          <h1 className="hero-brand">Greenwood & Co.</h1>
          <p className="hero-headline">{t('hero.headline')}</p>
          <p className="hero-support">{t('hero.support')}</p>
          <div className="hero-ctas">
            <a className="btn-primary" href="#collection">
              {t('hero.ctaCollection')}
            </a>
            <a className="btn-ghost" href="#philosophy">
              {t('hero.ctaPhilosophy')}
            </a>
          </div>
        </div>
      </section>

      <section id="philosophy" className="section philosophy">
        <div className="section-inner philosophy-grid">
          <Reveal>
            <p className="section-label">{t('philosophy.label')}</p>
            <h2 className="section-title">{t('philosophy.title')}</h2>
            <p className="section-lead">{t('philosophy.lead')}</p>
          </Reveal>
          <Reveal>
            <p className="philosophy-aside">{t('philosophy.aside')}</p>
          </Reveal>
        </div>
      </section>

      <section id="collection" className="section collection">
        <div className="section-inner">
          <div className="collection-head">
            <Reveal>
              <p className="section-label">{t('collection.label')}</p>
              <h2 className="section-title">{t('collection.title')}</h2>
              <p className="section-lead">{t('collection.lead')}</p>
            </Reveal>
          </div>
          <div className="product-grid">
            {products.map((product, i) => (
              <Reveal key={product.id} style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="craft" className="section craft">
        <div className="section-inner craft-layout">
          <Reveal>
            <div className="craft-visual">
              <img src={CRAFT_IMAGE} alt={t('craft.alt')} loading="lazy" />
            </div>
          </Reveal>
          <Reveal>
            <div className="craft-copy">
              <p className="section-label">{t('craft.label')}</p>
              <h2 className="section-title">{t('craft.title')}</h2>
              <p className="section-lead">{t('craft.lead')}</p>
              <ul className="craft-points">
                <li>
                  <strong>{t('craft.auth.title')}</strong>
                  <span>{t('craft.auth.body')}</span>
                </li>
                <li>
                  <strong>{t('craft.cons.title')}</strong>
                  <span>{t('craft.cons.body')}</span>
                </li>
                <li>
                  <strong>{t('craft.stew.title')}</strong>
                  <span>{t('craft.stew.body')}</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="soft-cta" id="visit">
        <Reveal>
          <p className="section-label">{t('cta.label')}</p>
          <h2 className="section-title">{t('cta.title')}</h2>
          <p className="section-lead">{t('cta.lead')}</p>
          {subscribed ? (
            <p className="newsletter-note" style={{ marginTop: '1.5rem' }}>
              {t('cta.thanks')}
            </p>
          ) : (
            <form className="newsletter" onSubmit={onNewsletter}>
              <label className="sr-only" htmlFor="email">
                {t('cta.email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t('cta.placeholder')}
                autoComplete="email"
              />
              <button type="submit" className="btn-primary">
                {t('cta.join')}
              </button>
            </form>
          )}
          {!subscribed && <p className="newsletter-note">{t('cta.note')}</p>}
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}
