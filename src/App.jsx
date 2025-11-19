import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import ProductModal from './components/ProductModal'
import UpsellDrawer from './components/UpsellDrawer'

function App() {
  const [selected, setSelected] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [openUpsell, setOpenUpsell] = useState(false)

  useEffect(() => {
    // Auto-open modal for the first featured item after slight delay to demonstrate motion
  }, [])

  const handleSelect = (p) => {
    setSelected(p)
    setOpenModal(true)
  }

  const handleUpsell = () => {
    setOpenUpsell(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar onCartOpen={() => setOpenUpsell(true)} />
      <Hero />
      <Gallery onSelect={handleSelect} />
      <ProductModal open={openModal} onClose={() => setOpenModal(false)} product={selected} onUpsell={handleUpsell} />
      <UpsellDrawer open={openUpsell} onClose={() => setOpenUpsell(false)} baseProduct={selected} />

      <footer className="border-t border-white/10 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Atash Gallery — Authentic Persian Carpets</p>
          <p className="mt-1">All pieces are certified authentic with documented provenance.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
