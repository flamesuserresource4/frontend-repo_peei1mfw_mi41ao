import { Code2, Palette, Cpu, Layers, Rocket, Sparkles } from 'lucide-react'

const skills = [
  { icon: Palette, title: 'Graphic Design', desc: 'Branding, layout, color, typography, motion graphics' },
  { icon: Code2, title: 'Web Development', desc: 'React, Tailwind, animations, responsive UI, accessibility' },
  { icon: Cpu, title: 'CS Skills', desc: 'Algorithms, data structures, APIs, auth, optimization' },
  { icon: Layers, title: 'Tools', desc: 'Figma, Adobe Suite, Git, Framer Motion, Spline 3D' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 mb-10">
          <Sparkles className="h-5 w-5 text-cyan-300" />
          <h2 className="text-white text-2xl font-semibold">Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/80 transition group">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
