import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bird, CheckCircle2, Factory, Layers, Sprout, Store } from "lucide-react";

export const businessDivisions = [
  {
    id: "feed",
    title: "Cattle & Poultry Feed Manufacturing",
    badge: "CORE DIVISION",
    link: "/business/feed",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Our state-of-the-art feed mill in Manchar, Pune produces over 150+ TPD of high-grade cattle and poultry feeds. Formulated with scientific nutrition, our products include Max Magic, Milk-O, Malt Plus, and Supreme Gold.",
    features: [
      "150+ TPD Automated Plant Capacity",
      "Scientific Nutritional Formulation",
      "Strict Quality Assurance Protocols",
      "Enhances Milk Yield & Livestock Immunity",
    ],
    icon: Factory,
  },
  {
    id: "poultry",
    title: "Poultry Integration & Contract Farming",
    badge: "INTEGRATION",
    link: "/business/poultry",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80",
    description:
      "We run an integrated broiler farming model connecting over 650+ farmers. Providing high-potency day-old chicks, technical veterinary care, and premium feed, we assure guaranteed buyback and steady income for farmers.",
    features: [
      "650+ Associated Contract Farmers",
      "Modern Hatchery Operations",
      "Dedicated Veterinary Field Support",
      "Assured Buyback & Fair Farmer Returns",
    ],
    icon: Bird,
  },
  {
    id: "bio-fertilizers",
    title: "Bio Fertilizers & Soil Care",
    badge: "SUSTAINABILITY",
    link: "/business/bio-fertilizers",
    image:
      "https://images.presentationgo.com/2025/04/tractor-spraying-crops-field.jpg",
    description:
      "Urja Bio-Fertilizers enrich soil microbes, improve moisture retention, and boost crop productivity without toxic chemicals. We promote eco-friendly and organic farming practices across Maharashtra.",
    features: [
      "Enriches Soil Organic Carbon",
      "Reduces Chemical Fertilizer Dependency",
      "Enhances Crop Root Growth & Resilience",
      "100% Eco-Friendly Formulation",
    ],
    icon: Sprout,
  },
  {
    id: "soya",
    title: "Soya Processing & Protein Extraction",
    badge: "INGREDIENTS",
    link: "/business/soya-processing",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/08/soyaa-480x367.jpg",
    description:
      "High-grade soybean processing delivering premium de-oiled cake (DOC) and soya meal essential for high-protein poultry and livestock feeds.",
    features: [
      "High Crude Protein Content",
      "Advanced Solvent Extraction Technology",
      "Essential Amino Acid Balance",
      "Strict Quality Control Screening",
    ],
    icon: Layers,
  },
  {
    id: "retail",
    title: "Retail & Distribution Network",
    badge: "DIRECT REACH",
    link: "/business/retail",
    image:
      "./images/R-1.png",
    description:
      "Urja operates retail stores and an extensive distributor network delivering fresh poultry products, farm-fresh eggs, cattle feed bags, and agricultural inputs directly to local markets.",
    features: [
      "Direct-to-Farmer Distribution Outlets",
      "Farm Fresh Quality Eggs & Poultry",
      "Efficient Logistics & Cold Supply Chain",
      "Wide Retail Presence Across Maharashtra",
    ],
    icon: Store,
  },
];

export default function BusinessDivisionsList() {
  return (
    <section id="divisions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest">
            Business Portfolio
          </span>
          <h2 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">
            Our Core Operations & Sectors
          </h2>
          <p className="mt-4 text-slate-600 text-base">
            Each division operates under stringent quality standards to ensure value creation for farmers, distributors, and consumers.
          </p>
        </div>

        <div className="space-y-16">
          {businessDivisions.map((division, idx) => {
            const Icon = division.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl grid lg:grid-cols-2 gap-10 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                <div className={isEven ? "" : "lg:col-start-2"}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-100 text-lime-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-lime-700 bg-lime-50 px-3 py-1.5 rounded-full border border-lime-200">
                      {division.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-3xl font-black text-slate-900">
                    {division.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-8 text-base">
                    {division.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {division.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-lime-600 shrink-0" />
                        <span className="text-sm font-semibold text-slate-800">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      to={division.link}
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-lime-600 transition"
                    >
                      View Dedicated Division Page
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className={`relative ${isEven ? "" : "lg:col-start-1"}`}>
                  <div className="relative overflow-hidden rounded-2xl border border-slate-100 shadow-md">
                    <img
                      src={division.image}
                      alt={division.title}
                      className="h-[380px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
