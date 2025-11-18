import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#structure", label: "Structure" },
    { href: "#timeline", label: "Timeline" },
    { href: "#legacy", label: "Legacy" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="text-white font-semibold tracking-tight text-lg">SAVAK</a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-2 rounded-md text-slate-200 hover:text-white hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
