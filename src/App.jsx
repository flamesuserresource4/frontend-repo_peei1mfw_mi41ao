import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Pedro. All rights reserved.</p>
            <div className="text-slate-500 text-sm">Built with love, code, and a sprinkle of 3D.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
