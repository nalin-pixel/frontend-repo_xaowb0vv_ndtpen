import { Menu, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar({ onCartOpen }) {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 py-3 px-5">
          <div className="flex items-center gap-3">
            <motion.div initial={{ rotate: -10, scale: 0.8 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 12 }} className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-500 to-amber-400 ring-2 ring-white/20 shadow-lg" />
            <div>
              <p className="text-white/90 text-xs uppercase tracking-widest">Atash Gallery</p>
              <p className="text-white text-lg font-semibold">Persian Carpets</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#story" className="hover:text-white transition">Provenance</a>
            <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white/80">
              <Menu size={22} />
            </button>
            <button onClick={onCartOpen} className="relative p-2 rounded-lg hover:bg-white/10 text-white/90">
              <ShoppingCart size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
