import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  Wheat,
} from "lucide-react";

import api from "../services/api";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await api.submitEnquiry(formData);
      if (res && res.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "General Inquiry",
          message: "",
        });
        setTimeout(() => {
          setSubmitted(false);
        }, 6000);
      }
    } catch (err) {
      console.error("Inquiry submission error:", err);
      setErrorMessage(
        err.message || "Failed to send inquiry to server. Please check your internet/backend connection."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[480px] overflow-hidden bg-[#eff8e6]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1800&q=90"
            alt="Contact Urja Foods"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-500/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-lime-300 backdrop-blur-md">
              <MessageSquare className="h-4 w-4" />
              Contact Us
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              We're Here to Support Your <span className="text-lime-400">Agricultural Journey</span>
            </h1>

            <p className="mt-6 text-lg text-slate-200 leading-8">
              Have questions about our cattle feeds, poultry contract farming, or bio-fertilizer products? Reach out to our team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all">
            <div className="h-12 w-12 rounded-2xl bg-lime-100 text-lime-700 flex items-center justify-center mb-6">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Phone Contact</h3>
            <p className="text-slate-500 text-xs mt-1">Talk with our specialists</p>
            <a href="tel:+917028399900" className="mt-4 block font-extrabold text-lime-700 hover:text-lime-800 text-sm">
              +91-7028399900
            </a>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all">
            <div className="h-12 w-12 rounded-2xl bg-lime-100 text-lime-700 flex items-center justify-center mb-6">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Email Inquiry</h3>
            <p className="text-slate-500 text-xs mt-1">Send us your request</p>
            <a href="mailto:info@urjafoods.net" className="mt-4 block font-extrabold text-lime-700 hover:text-lime-800 text-sm truncate">
              info@urjafoods.net
            </a>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all">
            <div className="h-12 w-12 rounded-2xl bg-lime-100 text-lime-700 flex items-center justify-center mb-6">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Head Office</h3>
            <p className="text-slate-500 text-xs mt-1">Visit our headquarters</p>
            <p className="mt-4 font-semibold text-slate-800 text-sm">
              Manchar, Pune, Maharashtra, India
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all">
            <div className="h-12 w-12 rounded-2xl bg-lime-100 text-lime-700 flex items-center justify-center mb-6">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Business Hours</h3>
            <p className="text-slate-500 text-xs mt-1">Working days schedule</p>
            <p className="mt-4 font-semibold text-slate-800 text-sm">
              Mon - Sat: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* FORM & LOCATION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#eff8e6]/60 border border-lime-200/60 shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-lime-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5" /> Direct Inquiry
            </div>

            <h2 className="text-3xl font-black text-slate-900">Send Us a Message</h2>
            <p className="mt-2 text-slate-600 text-sm leading-6">
              Fill in your details below and our farm management team will get back to you within 24 hours.
            </p>

            {errorMessage && (
              <div className="mt-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold">
                ⚠️ {errorMessage}
              </div>
            )}

            {submitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-lime-500 text-white text-center shadow-lg">
                <CheckCircle2 className="h-12 w-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold">Thank You!</h3>
                <p className="mt-1 text-sm text-lime-100">
                  Your message has been saved in our database. Our representative will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-400/20"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-400/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 Mobile number"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-400/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Inquiry Category
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-400/20"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Cattle Feed Order">Cattle Feed (Pashu Aahar)</option>
                    <option value="Poultry Contract Farming">Poultry Contract Farming</option>
                    <option value="Bio-Fertilizer Orders">Bio Fertilizers</option>
                    <option value="Dealership & Partnership">Dealership & Distribution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-400/20"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-600 px-6 py-4 text-sm font-bold text-white hover:bg-lime-700 disabled:opacity-50 transition shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  {loading ? "Sending Inquiry..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Plant & Office Map Details */}
          <div>
            <span className="inline-block bg-lime-100 text-lime-800 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">
              Location & Facility
            </span>
            <h2 className="mt-4 text-4xl font-black text-slate-900">
              Urja Foods & Agro Operations
            </h2>
            <p className="mt-4 text-slate-600 leading-8 text-base">
              Located in the agricultural heartland of Manchar, Pune, our centralized facility integrates raw material sourcing, automated feed manufacturing, quality control laboratories, and administrative headquarters.
            </p>

            <div className="mt-8 space-y-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                <Building2 className="h-6 w-6 text-lime-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base">Feed Mill & Administrative Office</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Gat No. 120, Manchar-Awasari Road, Manchar, Tal. Ambegaon, Dist. Pune, Maharashtra - 410503
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                <Wheat className="h-6 w-6 text-lime-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base">Poultry Integration Center</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Serving 650+ contract farms across Pune, Ahmednagar, and Nashik districts.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Location Placeholder Box */}
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 shadow-md relative h-64 bg-slate-100">
              <iframe
                title="Urja Foods Office Map"
                src="https://maps.google.com/maps?q=Manchar,Pune,Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
