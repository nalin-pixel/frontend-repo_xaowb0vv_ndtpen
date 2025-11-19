import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, MoveRight } from "lucide-react"

const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"

export default function Gallery({ onSelect }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/carpets/query`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ featured_only: false }) })
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div id="gallery" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-white/70">Loading gallery…</p>
      </div>
    )
  }

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Curated Gallery</h2>
        <p className="text-white/60 text-sm">Hand-picked masterpieces • Provenance on request</p>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {items.map((c, idx) => (
            <motion.button key={c._id || idx} layout initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} onClick={() => onSelect(c)} className="group text-left overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={(c.images && c.images[0]) || 'https://images.unsplash.com/photo-1545239350-48bf079fb38e?q=80&w=1200&auto=format&fit=crop'} alt={c.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                {c.is_featured && (
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-amber-500/90 text-slate-900 px-2 py-1 text-xs font-medium">
                    <Star size={14} /> Featured
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <p className="text-white font-medium">{c.title}</p>
                  <p className="text-amber-300 font-semibold">${Number(c.price_usd).toLocaleString()}</p>
                </div>
                <p className="mt-1 text-xs text-white/70">{c.region} • {c.style} • {c.size_cm}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-amber-300 text-sm">
                  View details <MoveRight size={16} />
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
