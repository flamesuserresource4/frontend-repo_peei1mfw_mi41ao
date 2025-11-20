import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Portfolio',
    tags: ['React', 'Spline 3D', 'Tailwind'],
    desc: 'Playful, modern personal site showcasing visuals and code.',
    live: '#',
    repo: '#',
  },
  {
    title: 'Brand Identity Kit',
    tags: ['Design', 'Branding', 'Motion'],
    desc: 'Clean visual system with motion micro-interactions.',
    live: '#',
    repo: '#',
  },
  {
    title: 'Creative Dev Experiments',
    tags: ['Shaders', 'WebGL', 'Framer Motion'],
    desc: 'A set of experimental interactions and animations.',
    live: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="h-2 w-2 rounded-full bg-cyan-400" />
          <h2 className="text-white text-2xl font-semibold">Selected Work</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/80 transition">
              <div className="aspect-video mb-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10" />
              <h3 className="text-white font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 text-slate-300">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center gap-1 text-cyan-300 hover:text-white transition">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
