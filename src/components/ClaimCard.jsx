import React from "react";

function ClaimCard() {
  return (
    <section id="claim" className="py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur p-6 md:p-8 shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-xl font-semibold">Claim</h2>
            <span className="text-xs text-slate-400">V1</span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Eligibility</span>
              <span className="text-emerald-400">Unknown</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Allocation</span>
              <span className="text-slate-300">0 GAIB</span>
            </div>
            <div className="pt-2">
              <button disabled className="w-full h-11 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-medium shadow-lg shadow-emerald-500/25 opacity-60 cursor-not-allowed">
                Connect Wallet
              </button>
            </div>
            <p className="text-xs text-slate-400">
              For demo purposes only. This static page does not perform any blockchain actions.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur p-6 md:p-8">
          <h3 className="text-white font-semibold">About the Claim</h3>
          <p className="mt-3 text-slate-300">
            The GAIB Foundation claim interface allows eligible participants to receive allocations.
            This demo reproduces the layout and style without functionality.
          </p>
          <ul className="mt-6 space-y-3 text-slate-300 text-sm list-disc pl-5">
            <li>Wallet connect button shown but disabled</li>
            <li>Eligibility and allocation placeholders</li>
            <li>Same color scheme, spacing, and section structure</li>
          </ul>
          <div className="mt-6 rounded-lg border border-white/10 p-4 bg-slate-900/60">
            <p className="text-xs text-slate-400">
              Disclaimer: This page is a visual clone for preview purposes only and is not affiliated with GAIB Foundation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClaimCard;
