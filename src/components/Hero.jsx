import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_30%_-20%,rgba(34,197,94,0.25),transparent_70%),radial-gradient(800px_500px_at_80%_-10%,rgba(34,197,94,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-[0.06] bg-cover bg-center" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 text-emerald-300 bg-emerald-500/10 text-xs mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Claim is live
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            GAIB Claim Center
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Verify your eligibility and claim your allocation. This is a static preview that mirrors the original page visuals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
