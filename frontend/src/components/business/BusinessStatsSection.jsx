import React from "react";

export default function BusinessStatsSection() {
  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
          <p className="text-4xl font-black text-lime-600">150+ TPD</p>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-2">Feed Production</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
          <p className="text-4xl font-black text-lime-600">650+</p>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-2">Contract Farmers</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
          <p className="text-4xl font-black text-lime-600">5+</p>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-2">Core Sectors</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
          <p className="text-4xl font-black text-lime-600">20+ Yrs</p>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-2">Agri Excellence</p>
        </div>
      </div>
    </section>
  );
}
