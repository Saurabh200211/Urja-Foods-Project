import React from "react";
import { Link } from "react-router-dom";

export default function HomeCorporateBanner() {
  return (
    <section className="py-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-lime-400 font-extrabold uppercase tracking-widest text-xs">
            Corporate Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
            Driven by Innovation, Transparency & Integrity
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl text-sm leading-6">
            Learn more about Urja Foods corporate governance, annual reports, leadership, and sustainability commitments.
          </p>
        </div>
        <Link
          to="/corporate-actions"
          className="shrink-0 bg-lime-500 text-slate-950 px-8 py-4 rounded-2xl font-bold hover:bg-lime-400 transition"
        >
          Corporate Actions
        </Link>
      </div>
    </section>
  );
}
