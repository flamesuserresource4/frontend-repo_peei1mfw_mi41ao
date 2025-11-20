import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 shadow-md" />
              <span className="text-white font-semibold tracking-tight group-hover:text-cyan-200 transition-colors">Pedro</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow hover:opacity-90 transition">Hire Me</a>
            </nav>

            <button
              aria-label="Toggle menu"
              className="md:hidden text-white"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block text-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow">
                Hire Me
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
