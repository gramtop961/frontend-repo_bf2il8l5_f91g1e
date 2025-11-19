import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ClaimCard from "./components/ClaimCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Header />
      <Hero />
      <ClaimCard />
      <Footer />
    </div>
  );
}

export default App;
