import { useEffect, useState } from 'react'

function Hero() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(i)
  }, [])

  return (
    <section id="top" className="relative min-h-[90vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black" />
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-amber-500/10 mix-blend-screen" />
      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.15]" style={{backgroundImage:'radial-gradient(circle at 1px 1px, rgba(255,255,255,.25) 1px, transparent 1px)', backgroundSize:'24px 24px'}} />

      <div className="max-w-6xl mx-auto w-full px-4 pt-40 pb-24">
        <div className="flex flex-col md:flex-row items-end gap-8">
          <div className="text-white/90 flex-1">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">Studio Journal · {time.toLocaleTimeString()}</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
              Creative technology for bodies and brands.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/70 max-w-2xl">
              A hybrid of personal practice and product thinking. We craft elegant interfaces, playful interactions, and tools that feel alive.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-2 md:gap-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-lg bg-white/5 border border-white/10 shadow-inner overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent group-hover:from-white/10 transition-all" />
                <div className="absolute bottom-2 left-2 text-[10px] text-white/50">Case {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
