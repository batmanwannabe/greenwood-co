import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useLocale } from '../context/LocaleContext'

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    lines,
    subtotal,
    setQuantity,
    removeItem,
    clearCart,
    itemCount,
  } = useCart()
  const { t, localizeProduct, formatPrice } = useLocale()
  const [checkedOut, setCheckedOut] = useState(false)

  if (!isOpen) return null

  const handleCheckout = () => {
    if (itemCount === 0) return
    setCheckedOut(true)
    clearCart()
  }

  const handleClose = () => {
    setCheckedOut(false)
    closeCart()
  }

  return (
    <>
      <button
        type="button"
        className="cart-backdrop"
        aria-label={t('cart.close')}
        onClick={handleClose}
      />
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label={t('cart.aria')}>
        <div className="cart-header">
          <h2>{t('cart.title')}</h2>
          <button type="button" className="cart-close" onClick={handleClose}>
            {t('cart.close')}
          </button>
        </div>

        <div className="cart-body">
          {checkedOut ? (
            <div className="checkout-success">
              <h3>{t('cart.successTitle')}</h3>
              <p>{t('cart.successBody')}</p>
              <button type="button" className="btn-primary" onClick={handleClose}>
                {t('cart.continue')}
              </button>
            </div>
          ) : lines.length === 0 ? (
            <p className="cart-empty">{t('cart.empty')}</p>
          ) : (
            lines.map(({ product, quantity, lineTotal }) => {
              const p = localizeProduct(product)
              return (
                <div key={p.id} className="cart-line">
                  <img src={p.image} alt="" />
                  <div>
                    <div className="cart-line-name">{p.name}</div>
                    <div className="cart-line-meta">
                      {p.era} · {formatPrice(lineTotal)}
                    </div>
                    <div className="cart-line-row">
                      <div className="qty-controls">
                        <button
                          type="button"
                          aria-label={t('cart.decrease')}
                          onClick={() => setQuantity(p.id, quantity - 1)}
                        >
                          −
                        </button>
                        <span aria-live="polite">{quantity}</span>
                        <button
                          type="button"
                          aria-label={t('cart.increase')}
                          onClick={() => setQuantity(p.id, quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() => removeItem(p.id)}
                    >
                      {t('cart.remove')}
                    </button>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {!checkedOut && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>{t('cart.subtotal')}</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <button
              type="button"
              className="btn-primary"
              style={{ width: '100%' }}
              disabled={itemCount === 0}
              onClick={handleCheckout}
            >
              {t('cart.request')}
            </button>
            <p className="checkout-note">{t('cart.note')}</p>
          </div>
        )}
      </aside>
    </>
  )
}
