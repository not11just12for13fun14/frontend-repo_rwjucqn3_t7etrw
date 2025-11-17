function About() {
  return (
    <section id="about" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We are a small studio exploring the meeting point of body and software. Our work ranges from brand websites and creative tools to research around movement, attention, and presence. We favor clarity, minimalism, and subtle kinetic detail over noise.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The approach blends product thinking with choreography. Each project is an invitation to feel—not just to see. We care about pacing, rhythm, and how an interface moves with you.
          </p>
        </div>
        <div className="md:col-span-5">
          <div className="p-6 rounded-xl bg-white border border-gray-200/70 shadow-sm">
            <h3 className="font-medium">Capabilities</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>— Creative direction, design systems</li>
              <li>— Web and native interfaces</li>
              <li>— Prototyping, motion, and interactivity</li>
              <li>— Research through making</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
