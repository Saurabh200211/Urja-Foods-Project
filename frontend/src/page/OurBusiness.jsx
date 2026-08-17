import React from "react";
import BusinessHeroSection from "../components/business/BusinessHeroSection";
import BusinessStatsSection from "../components/business/BusinessStatsSection";
import BusinessDivisionsList from "../components/business/BusinessDivisionsList";
import { Link } from "react-router-dom";

export default function OurBusiness() {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO SECTION */}
      <BusinessHeroSection />

      {/* STATS HIGHLIGHT */}
      <BusinessStatsSection />

      {/* DIVISIONS DETAILED SECTION */}
      <BusinessDivisionsList />

      {/* CALL TO ACTION */}
      <section className="py-20 bg-lime-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black">Partner With Urja Foods & Agro</h2>
          <p className="mt-4 text-lime-100 text-lg leading-8">
            Whether you are a poultry farmer seeking integration, a dealer looking for feed distribution, or a bulk buyer for bio-fertilizers, we invite you to join our growing network.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-extrabold hover:bg-lime-100 transition shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
