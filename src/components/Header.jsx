import React from "react";

function Header() {
  return (
    <header className="w-full sticky top-0 z-30 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-400 to-teal-500 ring-1 ring-white/20 shadow-md" />
          <div className="text-white font-semibold tracking-tight">GAIB Foundation</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a className="hover:text-white transition" href="#claim">Claim</a>
          <a className="hover:text-white transition" href="#about">About</a>
          <a className="hover:text-white transition" href="#faq">FAQ</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 text-white/80 hover:text-white hover:bg-white/5 transition" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6.75c0-.414.336-.75.75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 6a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z"/></svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
