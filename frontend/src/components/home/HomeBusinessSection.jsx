import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "../UrjaProductCard";

const featuredBusinesses = [
  {
    id: 1,
    title: "Poultry Business",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80",
    description:
      "High-quality poultry farming solutions with advanced nutrition and care.",
  },
  {
    id: 2,
    title: "Feed Business",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Premium poultry feed developed with scientific formulation.",
  },
  {
    id: 3,
    title: "Urja Cattle Feeds",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2025/08/cattle-milk-480x384.webp",
    description:
      "Balanced nutrition for dairy cattle to improve health and milk production.",
  },
];

export default function HomeBusinessSection() {
  return (
    <section className="py-20 bg-[#eff8e6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
             <div className="inline-flex items-center gap-2 rounded-full border border-lime-600/20 bg-lime-50 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-lime-700">
                       
                        our businesses
                      </div>

            <h2 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">
              Premium Feed & Agricultural Solutions
            </h2>
          </div>
          <Link
            to="/business"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 font-bold text-lime-700 hover:text-lime-800"
          >
            View All Businesses
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredBusinesses.map((item, index) => (
            <ProductCard key={item.id} product={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
