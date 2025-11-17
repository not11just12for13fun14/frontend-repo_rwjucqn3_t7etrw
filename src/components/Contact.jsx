import { useState } from 'react'

function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Let’s build something sensitive</h2>
            <p className="mt-4 text-white/70 max-w-lg">Tell us about your project. We typically respond within 1–2 business days.</p>
          </div>
          <form onSubmit={handleSubmit} className="md:col-span-6 space-y-4">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" required />
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" required />
            <button className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">{sent ? 'Message sent ✓' : 'Send message'}</button>
          </form>
        </div>

        <div className="mt-16 text-sm text-white/50 flex flex-wrap items-center gap-4">
          <span>© {new Date().getFullYear()} MB × BS</span>
          <span className="opacity-40">·</span>
          <a href="#top" className="hover:text-white transition">Back to top</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
