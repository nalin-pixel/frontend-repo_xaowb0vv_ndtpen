import { AnimatePresence, motion } from "framer-motion"
import { X, ArrowRight } from "lucide-react"

export default function UpsellDrawer({ open, onClose, baseProduct }) {
  if (!baseProduct) return null

  const pairings = buildPairings(baseProduct)

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70]">
          <div className="absolute inset-0 bg-slate-900/70" onClick={onClose} />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 120, damping: 16 }} className="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto bg-gradient-to-b from-slate-900 to-slate-950 border-l border-white/10 p-6">
            <div className="flex items-center justify-between text-white">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60">Curated Pairings</p>
                <h4 className="text-2xl font-semibold">Elevate the ensemble</h4>
              </div>
              <button onClick={onClose} className="rounded-full bg-white/10 p-2 text-white/80 hover:text-white"><X size={18} /></button>
            </div>

            <div className="mt-4 grid gap-4">
              {pairings.map((p, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx*0.05 }} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="grid grid-cols-3">
                    <img src={p.image} alt={p.title} className="col-span-1 h-full w-full object-cover" />
                    <div className="col-span-2 p-4 text-white">
                      <p className="font-medium">{p.title}</p>
                      <p className="mt-1 text-xs text-white/70">{p.subtitle}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <p className="text-amber-300 font-semibold">${p.price.toLocaleString()}</p>
                        <button className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-amber-300 transition">Add to acquisition <ArrowRight size={16} /></button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function buildPairings(product) {
  const color = (product.colors && product.colors[0]) || 'crimson'
  return [
    {
      title: 'Signed Silk Cushion Set',
      subtitle: `Hand-loomed cushions matched to ${color} palette`,
      price: Math.round(product.price_usd * 0.035),
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Crystal Museum Guard Set',
      subtitle: 'UV filtering, non-slip underlay + archival documentation',
      price: Math.round(product.price_usd * 0.045),
      image: 'https://images.unsplash.com/photo-1524758870432-af57e54afa26?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Curator Home Visit',
      subtitle: 'On-site styling + hanging consultation',
      price: 950,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop'
    }
  ]
}
