import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { useCart } from '../context/CartContext'
import { useLocale } from '../context/LocaleContext'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const { t, localizeProduct, formatPrice } = useLocale()
  const p = localizeProduct(product)

  return (
    <article className="product-card">
      <Link to={`/product/${p.id}`} className="product-card-media" tabIndex={-1}>
        <img src={p.image} alt={p.name} loading="lazy" />
      </Link>
      <div className="product-card-body">
        <div className="product-era">
          {p.era} · {p.style}
        </div>
        <Link to={`/product/${p.id}`} className="product-name">
          {p.name}
        </Link>
        <p className="product-style">{p.description}</p>
        <div className="product-price">{formatPrice(p.price)}</div>
        <div className="product-card-actions">
          <Link to={`/product/${p.id}`} className="btn-view">
            {t('product.view')}
          </Link>
          <button type="button" className="btn-add" onClick={() => addItem(p.id)}>
            {t('product.add')}
          </button>
        </div>
      </div>
    </article>
  )
}
