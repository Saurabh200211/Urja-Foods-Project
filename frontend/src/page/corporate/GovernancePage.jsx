import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Building2 } from "lucide-react";

export default function GovernancePage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative min-h-[440px] overflow-hidden bg-[#eff8e6]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=90"
            alt="Governance"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />
        </div>

        <div className="relative mx-auto flex min-h-[440px] max-w-7xl items-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-500/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-lime-300 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4" />
              Corporate Governance
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Ethics, Compliance & <span className="text-lime-400">Governance Framework</span>
            </h1>

            <p className="mt-6 text-lg text-slate-200 leading-8">
              Guided by principles of integrity, transparency, accountability, and environmental sustainability for long-term stakeholder trust.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 rounded-3xl bg-white shadow-lg border border-slate-100">
            <ShieldCheck className="h-12 w-12 text-lime-600 mb-6" />
            <h3 className="text-xl font-extrabold text-slate-900">Code of Business Conduct</h3>
            <p className="mt-3 text-slate-600 text-sm leading-6">
              Strict ethical standards applied across all business operations, procurement, and labor policies.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white shadow-lg border border-slate-100">
            <Award className="h-12 w-12 text-lime-600 mb-6" />
            <h3 className="text-xl font-extrabold text-slate-900">Quality Management Systems</h3>
            <p className="mt-3 text-slate-600 text-sm leading-6">
              Rigorous laboratory testing and quality auditing for every metric ton of feed produced.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white shadow-lg border border-slate-100">
            <Users className="h-12 w-12 text-lime-600 mb-6" />
            <h3 className="text-xl font-extrabold text-slate-900">CSR & Community Commitment</h3>
            <p className="mt-3 text-slate-600 text-sm leading-6">
              Investment in rural education, farmer training, health initiatives, and soil conservation.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white shadow-lg border border-slate-100">
            <Building2 className="h-12 w-12 text-lime-600 mb-6" />
            <h3 className="text-xl font-extrabold text-slate-900">Board Independence & Audits</h3>
            <p className="mt-3 text-slate-600 text-sm leading-6">
              Strong independent oversight and statutory audit protocols protecting shareholder interest.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
