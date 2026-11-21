import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translate } from '../i18n/ui'
import { productTa } from '../i18n/products.ta'
import type { Locale } from '../i18n/types'
import { LOCALES } from '../i18n/types'
import type { Product } from '../data/products'

const STORAGE_KEY = 'greenwood-locale'

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  localizeProduct: (product: Product) => Product
  formatPrice: (amount: number) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readStoredLocale(): Locale {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw && (LOCALES as string[]).includes(raw)) return raw as Locale
  } catch {
    /* ignore */
  }
  return 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale())

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dataset.locale = locale
    document.title =
      locale === 'ta'
        ? 'Greenwood & Co. — பழங்காலத் தளவாடங்கள்'
        : 'Greenwood & Co. — Antique Furniture'
  }, [locale])

  const t = useCallback((key: string) => translate(locale, key), [locale])

  const localizeProduct = useCallback(
    (product: Product): Product => {
      if (locale !== 'ta') return product
      const ta = productTa[product.id]
      if (!ta) return product
      return { ...product, ...ta }
    },
    [locale],
  )

  const formatPrice = useCallback(
    (amount: number) =>
      new Intl.NumberFormat(locale === 'ta' ? 'ta-IN' : 'en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(amount),
    [locale],
  )

  const value = useMemo(
    () => ({ locale, setLocale, t, localizeProduct, formatPrice }),
    [locale, setLocale, t, localizeProduct, formatPrice],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
