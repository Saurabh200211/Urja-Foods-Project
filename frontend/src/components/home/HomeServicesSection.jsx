import React from "react";
import { Link } from "react-router-dom";
import { Bird, ChevronRight, Factory, Sprout } from "lucide-react";

const mainServices = [
  {
    title: "Poultry Farming & Integration",
    icon: Bird,
    desc: "Integrated contract poultry farming supported by technical supervision and premium feed supply.",
    href: "/services/poultry",
  },
  {
    title: "Feed Manufacturing",
    icon: Factory,
    desc: "150+ TPD automated feed plant producing balanced cattle and poultry nutrition.",
    href: "/business/feed",
  },
  {
    title: "Bio Fertilizers & Agriculture",
    icon: Sprout,
    desc: "Organic soil nourishment solutions enhancing soil fertility and farm productivity.",
    href: "/services/agriculture",
  },
];

export default function HomeServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest">
            Core Services
          </span>
          <h2 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">
            Comprehensive Support For Every Farm
          </h2>
          <p className="mt-4 text-slate-600">
            From nutrition science to contract farming, Urja provides end-to-end solutions designed for maximum productivity.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {mainServices.map((srv, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="h-14 w-14 rounded-2xl bg-lime-500 text-white flex items-center justify-center mb-6 shadow-md">
                  <srv.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">{srv.title}</h3>
                <p className="mt-3 text-slate-600 text-sm leading-6">{srv.desc}</p>
              </div>
              <Link
                to={`/services`}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-lime-700 hover:text-lime-800"
              >
                Learn More <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
