import React from "react";
import CorporateHero from "./corporate/CorporateHero";
import CorporateOverview from "./corporate/CorporateOverview";
import CorporateLeadership from "./corporate/CorporateLeadership";
import CorporateDocuments from "./corporate/CorporateDocuments";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CorporateActions() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <CorporateHero />
      <CorporateOverview />
      <CorporateLeadership />
      <CorporateDocuments />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-lime-600 to-green-500 p-16 text-center text-white shadow-2xl">
            <h2 className="text-5xl font-bold">
              Let's Build a Better Future Together
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-lime-100">
              We remain committed to innovation, sustainability and responsible corporate governance that creates long-term value for everyone.
            </p>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-lime-700 transition hover:scale-105"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
