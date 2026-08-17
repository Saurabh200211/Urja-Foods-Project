import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutBusinessOverview() {
  return (
    <section id="business" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-1.5 shadow-[0_24px_70px_rgba(49,71,33,0.13)]">
          <div className="relative aspect-[1.12/1] overflow-hidden rounded-[1.55rem]">
            <img
              src="./images/b1.png"
              alt="Modern Urja Foods feed mill"
              className="h-full w-full object-center transition duration-700 ease-out group-hover:scale-[1.035]"
            />
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-600/15 bg-lime-300/20 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-lime-800">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
            Our Business Overview
          </div>

          <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl">
            A fully integrated model covering feed, farming and supply.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Urja Foods operates a connected model covering feed manufacturing, hatchery operations, poultry farming and supply-chain management around one common objective: better outcomes for farmers and customers.
          </p>

          <div className="mt-7 space-y-4">
            {[
              ["Modern Feed Mill", "State-of-the-art plant and scalable feed production."],
              ["Hatchery Unit", "High-quality day-old chicks supported by technical care."],
              ["Contract Broiler Farming", "650+ associated farmers with technical guidance & guaranteed market buyback."],
            ].map(([title, desc], idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-lime-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">{title}</h4>
                  <p className="text-slate-600 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/business"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-extrabold text-white transition duration-300 hover:bg-lime-600"
          >
            Explore All Business Divisions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
