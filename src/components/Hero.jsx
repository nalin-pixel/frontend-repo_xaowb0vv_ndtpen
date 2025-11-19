import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(1000px 300px at 50% -10%, rgba(244,114,182,0.3), transparent), radial-gradient(800px 300px at 80% 0%, rgba(251,191,36,0.25), transparent), radial-gradient(600px 300px at 20% 0%, rgba(59,130,246,0.25), transparent)'}} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-semibold leading-tight">
              Masterpieces handwoven over generations
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }} className="mt-6 text-lg text-white/80 max-w-xl">
              Explore a curated collection of authentic Persian carpets presented as fine art, with detailed provenance, materials, and craftsmanship brought to life through motion.
            </motion.p>

            <div className="mt-8 flex gap-4">
              <a href="#gallery" className="inline-flex items-center rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:bg-amber-300 transition">Explore Gallery</a>
              <a href="#story" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10 transition">Our Story</a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              {["Certified Authentic","Museum-grade Curation","White-Glove Delivery"].map((t,i)=> (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i*0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/80">{t}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 18 }} className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1696200278228-a1aaceaa0a3b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZXJvJTIwY2FycGV0fGVufDB8MHx8fDE3NjM1MTI2MDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Hero carpet" className="h-full w-full object-cover" />
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="absolute bottom-4 left-4 right-4">
                <div className="rounded-xl bg-white/10 backdrop-blur border border-white/10 p-4 text-white">
                  <p className="text-sm">Isfahan Silk Medallion • 200 x 300 cm • 650 kpsi</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
