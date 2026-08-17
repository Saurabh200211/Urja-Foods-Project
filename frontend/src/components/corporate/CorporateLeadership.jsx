import React from "react";
import { motion } from "framer-motion";

const leadership = [
  {
    name: "Rajesh Sharma",
    role: "Chairman & Managing Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
  {
    name: "Anita Mehra",
    role: "Independent Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
];

export default function CorporateLeadership() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-lime-100 px-5 py-2 text-sm font-semibold text-lime-700">
            OUR LEADERSHIP
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            Meet Our Leadership
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Experienced leaders driving innovation, sustainability, and long-term growth through strong corporate governance.
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 p-1">
          {leadership.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-3xl p-4 bg-white shadow-xl transition-all hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-96 w-full object-center transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="mt-1 text-lime-600 font-semibold">{member.role}</p>
                <p className="mt-3 leading-7 text-gray-600">
                  Dedicated to creating sustainable value through innovation, integrity and operational excellence.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
