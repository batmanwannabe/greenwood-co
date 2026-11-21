import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { LocaleProvider } from './context/LocaleContext'
import { Header } from './components/Header'
import { CartDrawer } from './components/CartDrawer'
import { Home } from './pages/Home'
import { ProductDetail } from './pages/ProductDetail'

export default function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <CartProvider>
          <Header />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </CartProvider>
      </LocaleProvider>
    </BrowserRouter>
  )
}
