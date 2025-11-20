import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            Available for freelance • Based in PT
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Pedro — Graphic Designer & Web Developer
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-xl">
            I design bold, modern visuals and craft fast, responsive websites. I blend aesthetics and code to build playful, interactive experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow hover:opacity-90 transition">See Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-white/15 text-white hover:bg-white/5 transition">Contact Me</a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-transparent to-sky-500/20" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900" />
    </section>
  );
}
