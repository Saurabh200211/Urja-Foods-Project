import React from "react";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const documents = [
  { title: "Annual Report 2024", type: "PDF" },
  { title: "Corporate Governance Policy", type: "PDF" },
  { title: "Code of Conduct", type: "PDF" },
  { title: "CSR Policy", type: "PDF" },
];

export default function CorporateDocuments() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-lime-100 px-5 py-2 text-sm font-semibold text-lime-700">
            DOWNLOAD CENTER
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            Corporate Documents
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Access important corporate policies, annual reports, governance documents and compliance information.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group rounded-3xl bg-white p-8 shadow-lg transition-all hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 transition group-hover:bg-red-100 mb-6">
                  <FileText className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-xl font-bold">{doc.title}</h3>
                <p className="mt-2 text-gray-500 text-sm">PDF Document</p>
              </div>

              <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-lime-500 py-3 font-semibold text-white transition hover:bg-lime-600">
                <Download size={18} />
                Download
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
