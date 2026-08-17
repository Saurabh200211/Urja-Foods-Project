import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

export default function CorporateOverview() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80"
            alt="Corporate Governance"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-5 h-16 w-1 rounded bg-lime-500" />

          <h2 className="text-5xl font-bold">
            Corporate Governance
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            We operate with integrity, accountability, innovation and respect. Our governance framework ensures ethical business practices while delivering sustainable growth for customers, employees, shareholders and society.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <ShieldCheck className="mb-4 h-10 w-10 text-lime-500" />
              <h3 className="font-bold text-xl">Transparency</h3>
              <p className="mt-3 text-gray-600">Honest reporting with ethical governance.</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <Award className="mb-4 h-10 w-10 text-lime-500" />
              <h3 className="font-bold text-xl">Excellence</h3>
              <p className="mt-3 text-gray-600">Continuous improvement in every process.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
