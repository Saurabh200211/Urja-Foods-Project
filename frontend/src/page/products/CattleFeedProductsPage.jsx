import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Wheat } from "lucide-react";
import ProductCard from "../../components/UrjaProductCard";

const cattleProducts = [
  {
    id: 101,
    title: "Urja Max Magic Cattle Feed",
    image: "https://www.urjafoods.net/wp-content/uploads/2025/08/Max-Magic-Front.webp",
    description: "High-energy pellet feed formulated for high-yielding dairy cows & buffaloes. Increases milk fat and SNF.",
  },
  {
    id: 102,
    title: "Urja Milk-O Supreme",
    image: "https://www.urjafoods.net/wp-content/uploads/2025/08/Supreme-Gold-Front.webp",
    description: "Balanced bypass protein & bypass fat feed designed for peak lactation support and animal wellness.",
  },
  {
    id: 103,
    title: "Urja Malt Plus Feed",
    image: "https://www.urjafoods.net/wp-content/uploads/2025/08/Malai-Plus-Front.webp",
    description: "Enriched with essential minerals and vitamins to support cattle digestion and reproductive health.",
  },
];

export default function CattleFeedProductsPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative min-h-[480px] overflow-hidden bg-[#eff8e6]">
        <div className="absolute inset-0">
          <img
            src="https://www.sahucattlefeed.com/wp-content/uploads/2024/09/blog1.png"
            alt="Cattle Feed"
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
              <Wheat className="h-4 w-4" />
              Dairy Feed Division
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Urja Cattle Feeds & <span className="text-lime-400">Pashu Aahar</span>
            </h1>

            <p className="mt-6 text-lg text-slate-200 leading-8">
              Scientifically formulated bypass protein & bypass fat cattle feed designed to maximize milk output, boost fat percentage, and improve livestock health.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-lime-100 text-lime-800 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">
              Featured Dairy Range
            </span>
            <h2 className="mt-4 text-4xl font-black text-slate-900">
              Our Cattle Feed Formulations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cattleProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
