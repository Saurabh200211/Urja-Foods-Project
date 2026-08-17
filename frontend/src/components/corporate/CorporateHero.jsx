import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CorporateHero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80"
        alt="Corporate Actions"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="rounded-full bg-lime-500 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-white">
            Corporate Actions
          </span>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight text-white">
            Building Trust Through
            <span className="block text-lime-400">
              Transparency & Governance
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Our commitment is to responsible governance, sustainable growth, transparency and long-term value creation for every stakeholder.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/corporate-actions/governance"
              className="rounded-full bg-lime-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-lime-600"
            >
              Governance Policies
            </Link>

            <Link
              to="/corporate-actions/reports"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Download Reports
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
