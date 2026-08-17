import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import api from "../services/api";
import {
  ArrowRight,
  CheckCircle,
  Wheat,
  Bird,
  Factory,
  Tractor,
  Sprout,
  Leaf,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Poultry Farming",
    icon: Bird,
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=900&q=80",
    description:
      "Healthy broiler farming with modern infrastructure and scientific management.",
    href: "/services/poultry",
  },
  {
    id: 2,
    title: "Feed Manufacturing",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80",
    description:
      "Premium poultry feed manufactured using advanced nutrition technology.",
    href: "/business/feed",
  },
  {
    id: 3,
    title: "Contract Farming",
    icon: Tractor,
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&q=80",
    description:
      "Partner with us for sustainable farming and long-term business growth.",
    href: "/services/farmer-support",
  },
  {
    id: 4,
    title: "Bio Fertilizers",
    icon: Sprout,
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=80",
    description:
      "Eco-friendly fertilizers that improve soil health and crop productivity.",
    href: "/products/bio-fertilizers",
  },
  {
    id: 5,
    title: "Livestock Feed",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=900&q=80",
    description:
      "Balanced nutrition designed for healthy livestock development.",
    href: "/products/cattle-feed",
  },
  {
    id: 6,
    title: "Agriculture Solutions",
    icon: Wheat,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80",
    description:
      "Complete agricultural solutions backed by innovation and expertise.",
    href: "/services/agriculture",
  },
];

export default function Services() {
  const [serviceList, setServiceList] = useState(services);

  useEffect(() => {
    async function loadServices() {
      try {
        const res = await api.getServices();
        if (res && res.data && res.data.length > 0) {
          const iconMap = { Bird, Factory, Tractor, Sprout, Leaf, Wheat };
          const mapped = res.data.map(item => ({
            ...item,
            icon: typeof item.icon === 'string' ? (iconMap[item.icon] || Wheat) : item.icon
          }));
          setServiceList(mapped);
        }
      } catch (err) {
        console.log("Using static services dataset");
      }
    }
    loadServices();
  }, []);

  return (
    <main className="overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative h-[85vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1800&q=80"
          alt="Services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute left-10 top-24 h-60 w-60 rounded-full bg-lime-400/20 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-green-600/20 blur-[120px]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-full bg-lime-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-lime-300 backdrop-blur"
            >
              Our Services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl"
            >
              Complete Agricultural
              <span className="block text-lime-400">
                & Poultry Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-lg leading-9 text-gray-200"
            >
              Delivering innovative poultry farming, premium animal nutrition, agricultural products and sustainable farming solutions across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-5"
            >
              <a
                href="#services-grid"
                className="rounded-full bg-lime-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-lime-600"
              >
                Explore Services
              </a>

              <Link
                to="/contact"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services-grid" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="rounded-full bg-lime-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-lime-700">
              What We Offer
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">
              Our Premium Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              We provide reliable, innovative and sustainable agricultural solutions that help farmers and businesses grow together.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {serviceList.map((service, index) => (
              <motion.div
                key={service._id || service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-[28px] bg-white shadow-lg transition hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full bg-lime-500 p-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 font-semibold text-lime-600 transition-all group-hover:gap-4"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-lime-100 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-green-100 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80"
              alt=""
              className="rounded-[35px] shadow-2xl"
            />

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-8 left-8 rounded-3xl bg-white p-6 shadow-2xl"
            >
              <h2 className="text-4xl font-black text-lime-600">25+</h2>
              <p className="mt-2 text-gray-600">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="rounded-full bg-lime-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-lime-700">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
              Delivering Quality With
              <span className="block text-lime-600">
                Innovation & Trust
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our commitment to quality, modern technology, customer satisfaction and sustainable farming practices has made us one of the trusted names in agriculture.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Modern Manufacturing Facilities",
                "Experienced Professional Team",
                "Premium Quality Products",
                "Customer-Centric Service",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 shadow-sm transition hover:shadow-lg"
                >
                  <CheckCircle className="text-lime-500" size={26} />
                  <span className="font-medium text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-10 inline-block rounded-full bg-lime-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-lime-600"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-600 via-green-600 to-lime-500" />
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-white/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-black/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black"
          >
            Ready To Grow Together?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-lime-100"
          >
            Let's build a sustainable future with innovative agricultural and poultry solutions tailored for your business.
          </motion.p>

          <Link
            to="/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-lime-700 shadow-xl transition hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}