import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sprout, ArrowRight } from "lucide-react";
import ProductCard from "../../components/UrjaProductCard";

const bioProducts = [
  {
    id: 301,
    title: "Urja Organic Soil Booster",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    description: "Bio-fertilizer enriched with Azotobacter and PSB to revive depleted farm soils and boost crop yield.",
  },
  {
    id: 302,
    title: "Urja Humic Micro Granules",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    description: "Humic acid & fulvic acid granules that enhance root development, nutrient intake, and drought resistance.",
  },
  {
    id: 303,
    title: "Urja Bio-NPK Liquid Consortium",
    image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=1200&q=80",
    description: "Liquid bacterial consortium designed for drip irrigation and foliar application across sugarcane & fruit crops.",
  },
];

export default function BioFertilizerProductsPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative min-h-[480px] overflow-hidden bg-[#eff8e6]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=90"
            alt="Bio Fertilizers"
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
              <Sprout className="h-4 w-4" />
              Soil Care Range
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Urja Bio Fertilizers & <span className="text-lime-400">Organic Inputs</span>
            </h1>

            <p className="mt-6 text-lg text-slate-200 leading-8">
              Microbial bio-fertilizers and organic soil conditioners crafted to rebuild soil health and maximize agricultural return.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-lime-100 text-lime-800 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">
              Organic Solutions
            </span>
            <h2 className="mt-4 text-4xl font-black text-slate-900">
              Sustainable Soil Care Products
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bioProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
