import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bird, ArrowRight } from "lucide-react";
import ProductCard from "../../components/UrjaProductCard";

const poultryProducts = [
  {
    id: 201,
    title: "Urja Broiler Pre-Starter Feed",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T102723.202.jpg",
    description: "Micro-pellet nutrition rich in essential amino acids to accelerate early chick immunity & gut health.",
  },
  {
    id: 202,
    title: "Urja Broiler Starter Crumble",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103142.938.jpg",
    description: "High-protein starter crumble ensuring optimal Feed Conversion Ratio (FCR) and uniform growth.",
  },
  {
    id: 203,
    title: "Urja Broiler Finisher Pellets",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-02T141710.854.jpg",
    description: "Energy-dense finisher pellets designed to achieve maximum body weight gain prior to marketing.",
  },
];

export default function PoultryFeedProductsPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative min-h-[480px] overflow-hidden bg-[#eff8e6]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1800&q=90"
            alt="Poultry Feed"
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
              Poultry Nutrition Division
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Urja Poultry Feeds & <span className="text-lime-400">Chick Nutrition</span>
            </h1>

            <p className="mt-6 text-lg text-slate-200 leading-8">
              Scientifically engineered starter, grower, and finisher rations for broilers and layers to maximize FCR and flock survival.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-lime-100 text-lime-800 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">
              Broiler & Layer Feeds
            </span>
            <h2 className="mt-4 text-4xl font-black text-slate-900">
              High FCR Poultry Rations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {poultryProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
