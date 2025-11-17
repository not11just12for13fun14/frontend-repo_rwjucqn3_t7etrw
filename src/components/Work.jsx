function Work() {
  const projects = [
    { title: 'Somatic Sequencer', tag: 'Tool', desc: 'Motion-driven sound and visuals for live performance.', year: '2024' },
    { title: 'Quiet Commerce', tag: 'Brand', desc: 'E‑commerce with a human pulse for a boutique retailer.', year: '2023' },
    { title: 'Kinetic Portfolio', tag: 'Web', desc: 'A tactile, scroll-reactive showcase for an artist.', year: '2023' },
    { title: 'Ambient Coach', tag: 'App', desc: 'Micro-interventions for posture and breathing.', year: '2022' },
  ]

  return (
    <section id="work" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Selected Work</h2>
          <p className="text-gray-500 mt-2">Bridging interaction design, code, and embodied research.</p>
        </div>
        <div className="divide-y divide-gray-200/70 border-y border-gray-200/70">
          {projects.map((p, i) => (
            <a key={i} href="#contact" className="group grid grid-cols-12 gap-4 md:gap-6 items-start py-6 hover:bg-gray-50 rounded-lg -mx-2 px-2 transition-colors">
              <div className="col-span-12 md:col-span-7">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{p.tag}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-medium mt-1 group-hover:translate-x-1 transition-transform">{p.title}</h3>
                <p className="text-gray-600 mt-1">{p.desc}</p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="aspect-video rounded-md bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200/70" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
