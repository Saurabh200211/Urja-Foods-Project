import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-[#eff8e6]">
      <div className="absolute inset-0">
        <img
          src="./images/Pb-1.png"
          alt="Cattle grazing in a green field"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(239,248,230,0.99)_0%,rgba(239,248,230,0.96)_30%,rgba(239,248,230,0.66)_53%,rgba(239,248,230,0.04)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#eff8e6] to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-600/15 bg-lime-300/20 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-lime-800">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
            About Us
          </div>

          <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
            Nourishing Lives.
            <span className="block text-lime-600">Building Futures.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Urja Foods & Agro Pvt. Ltd. is committed to providing high-quality cattle and poultry feed that supports better nutrition, stronger productivity and improved livelihoods for farmers across rural India.
          </p>

          <Link
            to="/products"
            className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-lime-500 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-[0_18px_45px_rgba(132,204,22,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-lime-400"
          >
            Our Products
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-lime-600 via-lime-400 to-emerald-400" />
    </section>
  );
}
