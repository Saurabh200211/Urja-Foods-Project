import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import api from "../../services/api";

const reports = [
  { title: "Annual Report 2023-2024", year: "2024", size: "4.2 MB" },
  { title: "Annual Report 2022-2023", year: "2023", size: "3.8 MB" },
  { title: "Annual Report 2021-2022", year: "2022", size: "3.5 MB" },
  { title: "Financial Highlights & Audit Statement 2024", year: "2024", size: "2.1 MB" },
];

export default function AnnualReportsPage() {
  const [reportList, setReportList] = useState(reports);

  useEffect(() => {
    async function loadReports() {
      try {
        const res = await api.getReports();
        if (res && res.data && res.data.length > 0) {
          setReportList(res.data);
        }
      } catch (err) {
        console.log("Using static reports dataset");
      }
    }
    loadReports();
  }, []);
  return (
    <div className="bg-white text-slate-900">
      <section className="relative min-h-[440px] overflow-hidden bg-[#eff8e6]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90"
            alt="Annual Reports"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />
        </div>

        <div className="relative mx-auto flex min-h-[440px] max-w-7xl items-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-500/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-lime-300 backdrop-blur-md">
              <FileText className="h-4 w-4" />
              Corporate Center
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Annual Reports & <span className="text-lime-400">Financial Statements</span>
            </h1>

            <p className="mt-6 text-lg text-slate-200 leading-8">
              Access official financial disclosures, annual performance reports, and statutory filings of Urja Foods & Agro Pvt. Ltd.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reportList.map((doc, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-6">
                    <FileText className="h-8 w-8" />
                  </div>
                  <span className="text-xs font-bold text-lime-600 bg-lime-50 px-3 py-1 rounded-full border border-lime-200">
                    {doc.year} Filing
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{doc.title}</h3>
                  <p className="mt-2 text-xs text-slate-500">PDF File • {doc.size}</p>
                </div>

                <button className="mt-8 flex items-center justify-center gap-2 w-full bg-lime-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-lime-600 transition">
                  <Download className="h-4 w-4" />
                  Download PDF
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
