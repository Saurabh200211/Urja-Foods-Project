import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

export default function BusinessHeroSection() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-[#eff8e6]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90"
          alt="Urja Business Operations"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
      </div>

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-500/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-lime-300 backdrop-blur-md">
            <Building2 className="h-4 w-4" />
            Our Business Divisions
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Pioneering Growth Across <span className="text-lime-400">Agriculture & Agro-Industry</span>
          </h1>

          <p className="mt-6 text-lg text-slate-200 leading-8">
            Urja Foods operates a fully integrated model encompassing automated feed manufacturing, poultry contract farming, bio-fertilizer production, soya processing, and retail distribution.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#divisions"
              className="rounded-2xl bg-lime-500 px-8 py-4 text-sm font-extrabold text-slate-950 shadow-lg hover:bg-lime-400 transition"
            >
              Explore Divisions
            </a>
            <Link
              to="/products"
              className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-extrabold text-white backdrop-blur hover:bg-white/20 transition"
            >
              View Product Line
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
