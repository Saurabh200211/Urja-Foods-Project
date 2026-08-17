import React from "react";
import { Factory, Sprout, Users } from "lucide-react";

const stats = [
  {
    value: "20+",
    title: "Years of Trust",
    text: "Serving farmers with dedication.",
    icon: Users,
  },
  {
    value: "150+",
    title: "TPD Feed Capacity",
    text: "Advanced feed mill infrastructure.",
    icon: Factory,
  },
  {
    value: "650+",
    title: "Poultry Farmers",
    text: "Associated with our integrated system.",
    icon: Sprout,
  },
  {
    value: "3000+",
    title: "Lives Impacted",
    text: "Creating employment in rural areas.",
    icon: Users,
  },
];

export default function AboutStats() {
  return (
    <section className="relative z-10 -mt-7 pb-14 sm:-mt-9 sm:pb-20">
      <div className="mx-auto grid max-w-7xl gap-3 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article
              key={stat.title}
              className="group rounded-3xl border border-slate-900/8 bg-white/95 p-5 shadow-[0_16px_45px_rgba(39,61,25,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-lime-300/70"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-3xl font-black tracking-tight text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-800">
                    {stat.title}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-100 text-lime-700 transition duration-300 group-hover:rotate-3 group-hover:bg-lime-400 group-hover:text-slate-950">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                {stat.text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
