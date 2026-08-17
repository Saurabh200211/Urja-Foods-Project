import React from "react";
import { Building2, Leaf, Settings2, Sprout, TrendingUp } from "lucide-react";

const timeline = [
  {
    year: "2005",
    title: "The Beginning",
    text: "Started cattle feed manufacturing with a vision to support farmers.",
    icon: Sprout,
  },
  {
    year: "2014",
    title: "Company Formation",
    text: "Urja Foods & Agro Pvt. Ltd. was established at Manchar, Pune.",
    icon: Building2,
  },
  {
    year: "2016",
    title: "Poultry Integration",
    text: "Entered the poultry integration business with contract farming.",
    icon: Leaf,
  },
  {
    year: "2020",
    title: "Modernization",
    text: "Upgraded feed manufacturing with stronger technology and automation.",
    icon: Settings2,
  },
  {
    year: "2024+",
    title: "Towards the Future",
    text: "Expanding reach, enhancing quality and empowering more farmers.",
    icon: TrendingUp,
  },
];

export default function AboutJourney() {
  return (
    <section id="journey" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-600/15 bg-lime-300/20 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-lime-800">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
            Our Journey
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">
            From humble beginnings to a diversified agri-business.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Our journey is built on hard work, innovation and a strong commitment to our farmers.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-lime-300 lg:block" />

          <div className="grid gap-6 lg:grid-cols-5">
            {timeline.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.year}>
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-lime-400 text-slate-950 shadow-[0_10px_30px_rgba(101,163,13,0.20)] lg:mx-0">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="mt-5 rounded-3xl border border-slate-900/8 bg-[#f8fcf2] p-5 text-center transition duration-300 hover:-translate-y-1 hover:bg-[#eff8e6] lg:text-left">
                    <p className="text-sm font-black text-lime-700">{item.year}</p>
                    <h3 className="mt-2 text-lg font-extrabold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
