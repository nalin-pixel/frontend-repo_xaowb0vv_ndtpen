import { motion, AnimatePresence } from "framer-motion"
import { X, ShieldCheck, Truck, Gem, Sparkles } from "lucide-react"

const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"

export default function ProductModal({ open, onClose, product, onUpsell }) {
  if (!product) return null

  const handleOrder = async () => {
    try {
      const order = {
        customer_name: "Guest",
        customer_email: "guest@example.com",
        shipping_address: "TBD",
        items: [{ carpet_id: product._id, quantity: 1, price_usd: product.price_usd}],
        subtotal_usd: product.price_usd,
        upsell_ids: []
      }
      await fetch(`${baseUrl}/api/orders`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(order) })
      onClose()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur" onClick={onClose} />
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 16 }} className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
            <button onClick={onClose} className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white/80 hover:text-white"><X size={18} /></button>

            <div className="grid md:grid-cols-2">
              <div className="relative">
                <img src={(product.images && product.images[0]) || 'https://images.unsplash.com/photo-1545239350-48bf079fb38e?q=80&w=1200&auto=format&fit=crop'} alt={product.title} className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 to-transparent h-24" />
              </div>
              <div className="p-6 md:p-8 text-white">
                <h3 className="text-2xl font-semibold">{product.title}</h3>
                <p className="mt-2 text-white/80 text-sm">{product.description}</p>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <Spec label="Region" value={product.region} />
                  <Spec label="Style" value={product.style} />
                  <Spec label="Size" value={product.size_cm} />
                  <Spec label="Materials" value={(product.materials||[]).join(', ')} />
                  {product.knot_density_kpsi && <Spec label="KPSI" value={product.knot_density_kpsi} />}
                  {product.age_years && <Spec label="Age" value={`${product.age_years} years`} />}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3 text-amber-300 text-sm">
                    <ShieldCheck size={18} /> Certified Authentic • <Truck size={18} /> White-glove delivery • <Gem size={18} /> Investment-grade
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm">Gallery price</p>
                    <p className="text-3xl font-semibold text-amber-300">${Number(product.price_usd).toLocaleString()}</p>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => onUpsell(product)} className="rounded-full border border-amber-300/30 bg-amber-300/10 px-5 py-3 text-amber-300 hover:bg-amber-300/20 transition inline-flex items-center gap-2"><Sparkles size={18} />View curated pairings</button>
                    <button onClick={handleOrder} className="rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:bg-amber-300 transition">Acquire</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Spec({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <p className="text-xs text-white/60">{label}</p>
      <p className="mt-1 text-white">{value}</p>
    </div>
  )
}
