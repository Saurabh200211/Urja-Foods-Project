import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bird, CheckCircle2, ArrowRight } from "lucide-react";

export default function PoultryBusinessPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative min-h-[480px] overflow-hidden bg-[#eff8e6]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1800&q=90"
            alt="Poultry Contract Farming"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />
        </div>

        <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-500/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-lime-300 backdrop-blur-md">
              <Bird className="h-4 w-4" />
              Integration Division
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Poultry Integration & <span className="text-lime-400">Contract Farming</span>
            </h1>

            <p className="mt-6 text-lg text-slate-200 leading-8">
              Empowering 650+ farmers across Maharashtra through our end-to-end broiler contract farming model with guaranteed buyback, veterinary care, and premium feed.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-lime-700 bg-lime-100 px-3 py-1.5 rounded-full">
              Farmer Integration Model
            </span>
            <h2 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">
              Sustainable Income & Technical Partnership
            </h2>
            <p className="mt-6 text-slate-600 leading-8 text-base">
              Urja provides contract farmers with premium day-old chicks, balanced feed, biosecurity support, and expert veterinary consultation. Farmers focus on flock management while Urja handles marketing and guaranteed returns.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "650+ Associated Contract Farmers in Maharashtra",
                "High-Growth Day-Old Chicks (DOC) Supply",
                "Dedicated On-Field Veterinary Technical Team",
                "Guaranteed Buyback Price Structure",
                "Regular Training in Flock Health & Biosecurity",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-lime-600 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-lime-600 px-7 py-4 text-sm font-bold text-white shadow-lg hover:bg-lime-700 transition"
              >
                Become a Contract Farmer Partner
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
            <img
              src="https://www.urjafoods.net/wp-content/uploads/2021/08/pltrybs-480x367.jpg"
              alt="Poultry Farming"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
