import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I will get back to you shortly.')
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 mb-10">
          <Mail className="h-5 w-5 text-cyan-300" />
          <h2 className="text-white text-2xl font-semibold">Contact</h2>
        </div>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
          <input className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Your name" required />
          <input type="email" className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Your email" required />
          <textarea rows="5" className="md:col-span-2 rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Tell me about your project" required />
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-sm text-slate-400">Or email directly: <a href="mailto:pedro@portfolio.com" className="text-cyan-300 hover:text-white">pedro@portfolio.com</a></p>
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow hover:opacity-90 transition">
              <Send className="h-4 w-4" /> Send Message
            </button>
          </div>
        </form>
        {status && <p className="mt-4 text-cyan-300">{status}</p>}
      </div>
    </section>
  )
}
