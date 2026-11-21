import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../data/products'
import { useCart } from '../context/CartContext'
import { useLocale } from '../context/LocaleContext'
import { Footer } from '../components/Footer'

export function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = id ? getProduct(id) : undefined
  const { addItem } = useCart()
  const { t, localizeProduct, formatPrice } = useLocale()

  if (!product) {
    return (
      <main className="detail-page">
        <div className="detail-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div>
            <Link to="/#collection" className="detail-back">
              {t('product.back')}
            </Link>
            <h1 className="detail-title">{t('product.notFound')}</h1>
            <p className="detail-desc">{t('product.notFoundLead')}</p>
            <Link to="/#collection" className="btn-primary">
              {t('product.viewCollection')}
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const p = localizeProduct(product)

  return (
    <main className="detail-page">
      <div className="detail-inner">
        <div className="detail-media">
          <img src={p.image} alt={p.name} />
        </div>
        <div>
          <Link to="/#collection" className="detail-back">
            {t('product.back')}
          </Link>
          <p className="detail-era">
            {p.era} · {p.style}
          </p>
          <h1 className="detail-title">{p.name}</h1>
          <p className="detail-style">
            {t('product.category')}: {t(`cat.${p.category}`)}
          </p>
          <p className="detail-price">{formatPrice(p.price)}</p>
          <p className="detail-desc">{p.description}</p>
          <p className="detail-details">{p.details}</p>
          <div className="detail-actions">
            <button type="button" className="btn-primary" onClick={() => addItem(p.id)}>
              {t('product.add')}
            </button>
            <Link to="/#collection" className="btn-ghost dark">
              {t('product.continue')}
            </Link>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '4rem' }}>
        <Footer />
      </div>
    </main>
  )
}
