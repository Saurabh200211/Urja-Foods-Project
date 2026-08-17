import React from "react";
import { Award, CheckCircle2, Sprout, Users, Wheat } from "lucide-react";

const values = [
  {
    title: "Quality First",
    text: "We never compromise on the quality of our raw materials and finished products.",
    icon: Award,
  },
  {
    title: "Farmer Focused",
    text: "Every decision we make is aimed at improving farmers' productivity.",
    icon: Sprout,
  },
  {
    title: "Innovation",
    text: "We adopt modern technology and better practices for stronger results.",
    icon: Wheat,
  },
  {
    title: "Integrity",
    text: "Transparent business, strong relationships and ethical practices.",
    icon: CheckCircle2,
  },
  {
    title: "Community",
    text: "Creating employment and contributing to rural development.",
    icon: Users,
  },
];

export default function AboutValues() {
  return (
    <section className="bg-[#eff8e6] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-600/15 bg-lime-300/20 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-lime-800">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
            What Drives Us
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">
            The principles behind every Urja decision.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group rounded-[1.75rem] border border-white/80 bg-white/75 p-6 text-center shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_22px_50px_rgba(49,71,33,0.10)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 text-lime-700 transition duration-300 group-hover:rotate-3 group-hover:bg-lime-400 group-hover:text-slate-950">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-base font-extrabold text-slate-950">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {value.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
