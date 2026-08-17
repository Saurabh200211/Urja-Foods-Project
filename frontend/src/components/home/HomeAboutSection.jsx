import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Wheat } from "lucide-react";

export default function HomeAboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-2xl">
              <img
                src="https://www.urjafoods.net/wp-content/uploads/2021/07/image.png"
                alt="Urja Farm"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-lime-500 text-white p-6 rounded-3xl shadow-xl hidden sm:block">
              <p className="text-3xl font-black">20+</p>
              <p className="text-xs font-bold uppercase tracking-wider mt-1">
                Years of Trust
              </p>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-600/20 bg-lime-50 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-lime-700">
              <Wheat className="h-4 w-4" />
              About Urja Foods
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Empowering Farmers. <span className="text-lime-600">Nourishing Lives.</span>
            </h2>

            <p className="mt-6 text-slate-600 leading-8 text-base sm:text-lg">
              The odyssey of Urja started with a cattle feed manufacturing unit in 2005. Driven by a vision to elevate farm productivity, Urja Foods & Agro Pvt. Ltd. has grown into a leading multi-sector agricultural and poultry enterprise.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-lime-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">Quality Certified Feed</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-lime-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">650+ Associated Farmers</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-lime-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">Modern Hatchery Units</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-lime-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">Sustainable Agriculture</span>
              </div>
            </div>

            <div className="mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-lime-600 hover:-translate-y-0.5"
              >
                Discover Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
