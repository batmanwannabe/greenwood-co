import { useLocale } from '../context/LocaleContext'

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">Greenwood & Co.</div>
          <p className="footer-tag">{t('footer.tag')}</p>
        </div>
        <div className="footer-meta">
          <div>
            <a href="mailto:atelier@greenwood.example">atelier@greenwood.example</a>
          </div>
          <div style={{ marginTop: '0.5rem' }}>{t('footer.appointment')}</div>
        </div>
      </div>
    </footer>
  )
}
