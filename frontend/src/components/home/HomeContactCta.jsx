import React from "react";
import { Link } from "react-router-dom";

export default function HomeContactCta() {
  return (
    <section className="py-20 bg-lime-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-slate-900">
          Have Questions or Want to Partner with Urja?
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base">
          Reach out to our team of agricultural specialists and explore how our premium products and support can transform your farming business.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/contact"
            className="bg-lime-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-lime-700 shadow-lg transition"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}
