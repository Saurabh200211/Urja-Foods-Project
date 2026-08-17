//import { motion } from "framer-motion";
//import { Link } from "react-router-dom";
//import ProductCard from "../components/UrjaProductCard";
//import { ArrowRight, Bird, Sprout, Wheat } from "lucide-react";

//const products = [
//  {
//    id: 1,
//    title: "Poultry Business",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/08/pltrybs-480x367.jpg",
//    description:
//      "High-quality poultry farming solutions with advanced nutrition and care.",
//  },
//  {
//    id: 2,
//    title: "Feed Business",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/08/feedbsns-480x367.jpg",
//    description:
//      "Premium poultry feed developed with scientific formulation.",
//  },
//  {
//    id: 3,
//    title: "Bio Fertilizers Business",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/08/fertbs-480x367.jpg",
//    description:
//      "Eco-friendly bio fertilizers for healthier crops and sustainable farming.",
//  },
//  {
//    id: 4,
//    title: "Retail",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/08/retail-480x367.jpg",
//    description:
//      "Fresh eggs, poultry products and farm essentials available in our retail stores.",
//  },
//  {
//    id: 5,
//    title: "Urja Cattle Feeds",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2025/08/cattle-milk-480x384.webp",
//    description:
//      "Balanced nutrition for dairy cattle to improve health and milk production.",
//  },
//  {
//    id: 6,
//    title: "Soya Processing",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/08/soyaa-480x367.jpg",
//    description:
//      "High-quality soya processing delivering nutritious feed ingredients.",
//  },

//  {
//  id: 7,
//  title: "QSR",
//  image:
//    "https://www.urjafoods.net/wp-content/uploads/2021/08/qsrot-480x367.jpg",
//  description:
//    "High-quality food ingredients and solutions specially developed for QSR applications.",
//},
//];

//export default function UrjaProductPage() {
//  return (
//    <div className="bg-white">
//      {/* ================= HERO ================= */}
//      <section className="relative h-[520px] overflow-hidden">
//        <img
//          src="./images/Pb-1.png"
//          alt="Urja Products"
//          className="absolute inset-0 w-full h-full object-cover"
//        />

//        <div className="absolute inset-0 bg-black/60" />

//        <div className="relative z-10 flex items-center h-full">
//          <div className="max-w-7xl mx-auto px-6">
//            <motion.div
//              initial={{ opacity: 0, y: 50 }}
//              animate={{ opacity: 1, y: 0 }}
//              transition={{ duration: 0.8 }}
//              className="max-w-xl"
//            >
//              <span className="inline-block mb-4 bg-lime-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                OUR PRODUCTS
//              </span>

//              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
//                Building India's Future Through Agriculture
//              </h1>

//              <p className="mt-6 text-gray-200 leading-8">
//                Poultry Business, Feed Business, Bio Fertilizers, Retail, Soya Processing and Cattle Feed Solutions.
//              </p>

//              <a
//                href="#products-grid"
//                className="mt-8 inline-block bg-lime-500 hover:bg-lime-600 transition px-8 py-4 rounded-full font-semibold text-white shadow-xl"
//              >
//                Explore Products
//              </a>
//            </motion.div>
//          </div>
//        </div>
//      </section>

//      {/* ================= QUICK CATEGORIES ================= */}
//      <section className="py-12 bg-slate-50 border-b border-slate-100">
//        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//          <Link
//            to="/products/cattle-feed"
//            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition flex items-center justify-between group"
//          >
//            <div className="flex items-center gap-4">
//              <div className="h-12 w-12 rounded-xl bg-lime-100 text-lime-700 flex items-center justify-center">
//                <Wheat className="h-6 w-6" />
//              </div>
//              <div>
//                <h3 className="font-extrabold text-slate-900 group-hover:text-lime-600 transition">Cattle Feeds</h3>
//                <p className="text-xs text-slate-500">Max Magic & Milk-O Range</p>
//              </div>
//            </div>
//            <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-lime-600 group-hover:translate-x-1 transition" />
//          </Link>

//          <Link
//            to="/products/poultry-feed"
//            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition flex items-center justify-between group"
//          >
//            <div className="flex items-center gap-4">
//              <div className="h-12 w-12 rounded-xl bg-lime-100 text-lime-700 flex items-center justify-center">
//                <Bird className="h-6 w-6" />
//              </div>
//              <div>
//                <h3 className="font-extrabold text-slate-900 group-hover:text-lime-600 transition">Poultry Rations</h3>
//                <p className="text-xs text-slate-500">Starter & Finisher Pellets</p>
//              </div>
//            </div>
//            <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-lime-600 group-hover:translate-x-1 transition" />
//          </Link>

//          <Link
//            to="/products/bio-fertilizers"
//            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition flex items-center justify-between group"
//          >
//            <div className="flex items-center gap-4">
//              <div className="h-12 w-12 rounded-xl bg-lime-100 text-lime-700 flex items-center justify-center">
//                <Sprout className="h-6 w-6" />
//              </div>
//              <div>
//                <h3 className="font-extrabold text-slate-900 group-hover:text-lime-600 transition">Bio Fertilizers</h3>
//                <p className="text-xs text-slate-500">Organic Soil Boosters</p>
//              </div>
//            </div>
//            <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-lime-600 group-hover:translate-x-1 transition" />
//          </Link>
//        </div>
//      </section>

//      {/* ================= QUOTE ================= */}
//      <section className="py-16">
//        <div className="max-w-7xl mx-auto px-6">
//          <div className="border-l-4 border-lime-500 pl-8">
//            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 leading-snug">
//              "Our goal is to be a part of Every Indian's Kitchen"
//            </h2>
//          </div>
//        </div>
//      </section>

//      {/* ================= PRODUCTS ================= */}
//      <section id="products-grid" className="pb-24">
//        <div className="max-w-7xl mx-auto px-6">
//          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//            {products.map((item, index) => (
//              <ProductCard key={item.id} product={item} index={index} />
//            ))}
//          </div>
//        </div>
//      </section>
//    </div>
//  );
//}

//import React, { useMemo, useState } from "react";
//import { motion, AnimatePresence } from "framer-motion";
//import {
//  ArrowRight,
//  ChevronDown,
//  Check,
//  Sparkles,
//  Wheat,
//  Bird,
//  Milk,
//  Sprout,
//  ShoppingBasket,
//  Layers,
//} from "lucide-react";
//import { Link } from "react-router-dom";

///* =========================================================
//   PRODUCT DATA
//========================================================= */

//const products = [
//  {
//    id: 1,
//    name: "Broiler Starter Feed",
//    category: "Broiler Feed",
//    description:
//      "Balanced nutrition designed to support healthy early growth and development.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103142.938.jpg",
//  },
//  {
//    id: 2,
//    name: "Broiler Finisher-1 Feed",
//    category: "Broiler Feed",
//    description:
//      "Specially formulated feed for consistent growth and better flock performance.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-02T142544.691-300x300.jpg",
//  },
//  {
//    id: 3,
//    name: "Broiler Finisher-2 Feed",
//    category: "Broiler Feed",
//    description:
//      "Complete nutrition designed for efficient finishing and better feed conversion.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-02T141710.854-300x300.jpg",
//  },

//  {
//    id: 4,
//    name: "Layer Pre Mix-5 Feed",
//    category: "Layer Feed",
//    description:
//      "Balanced feed supporting healthy layers and consistent egg production.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103829.787-300x300.jpg",
//  },
//  {
//    id: 5,
//    name: "Layer Pre Mix-35 Feed",
//    category: "Layer Feed",
//    description:
//      "Nutrition formulated for healthy development of growing layer birds.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103702.703-300x300.jpg",
//  },
//  {
//    id: 6,
//    name: "Layer Concentrate 50% Feed",
//    category: "Layer Feed",
//    description:
//      "Nutrition formulated for healthy development of growing layer birds.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/07/prt.jpg",
//  },

//  {
//    id: 7,
//    name: "Supreme Gold Pashu Khadya",
//    category: "Cattle Feed",
//    description:
//      "Balanced nutrition supporting cattle health, growth and productivity.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103907.054-300x300.jpg",
//  },
//  {
//    id: 8,
//    name: "Calf Starter Gold Feed",
//    category: "Cattle Feed",
//    description:
//      "Specialized nutrition designed to support dairy animal performance.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T104000.163-300x300.jpg",
//  },
//  {
//    id: 9,
//    name: "Urja Malai (8000)",
//    category: "Cattle Feed",
//    description:
//      "Specialized nutrition designed to support dairy animal performance.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2025/08/Malai-Plus-Front-300x300.webp",
//  },

//  {
//    id: 10,
//    name: "Gavran Feed Starter",
//    category: "Gavran Feed",
//    description:
//      "Specialized nutrition designed for optimal performance in gavran animals.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/07/gavrnstrtr-300x300.jpg",
//  },
//  {
//    id: 11,
//    name: "Gavran Breed Feed",
//    category: "Gavran Feed",
//    description:
//      "Specialized nutrition designed for optimal performance in gavran animals.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103404.226-300x300.jpg",
//  },
//  {
//    id: 12,
//    name: "Gavran Max Magic-1 Feed",
//    category: "Gavran Feed",
//    description:
//      "Specialized nutrition designed for optimal performance in gavran animals.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-02T141022.806-300x300.jpg",
//  },

//  {
//    id: 13,
//    name: "Urja Milk O Milk Feed",
//    category: "Milking Feed",
//    description:
//      "Specialized nutrition designed to support dairy animal performance.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2025/08/Milk-O-Milk-Front-300x300.webp",
//  },
//  {
//    id: 14,
//    name: "Urja Max Magic",
//    category: "Milking Feed",
//    description:
//      "Specialized nutrition designed to support dairy animal performance.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2025/08/Max-Magic-Front-300x300.webp",
//  },
//  {
//    id: 15,
//    name: "Urja Supreme Gold (5000)",
//    category: "Milking Feed",
//    description:
//      "Specialized nutrition designed to support dairy animal performance.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2025/08/Supreme-Gold-Front-300x300.webp",
//  },

//  {
//    id: 16,
//    name: "Deshi Breeder Feed",
//    category: "Poultry Feed",
//    description:
//      "Specialized nutrition designed to support healthy poultry performance.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103524.274-300x300.jpg",
//  },

//  {
//    id: 17,
//    name: "Trader Pellet Feed",
//    category: "Chicken Outlets",
//    description:
//      "Specialized nutrition designed to support consistent poultry performance.",
//    image:
//      "https://www.urjafoods.net/wp-content/uploads/2021/07/prt-300x300.jpg",
//  },
//];

///* =========================================================
//   7 PRODUCT CATEGORIES
//========================================================= */

//const categories = [
//  {
//    name: "Broiler Feed",
//    short: "Broiler",
//    icon: Bird,
//    description: "Nutrition for healthy broiler growth.",
//  },
//  {
//    name: "Layer Feed",
//    short: "Layer",
//    icon: Layers,
//    description: "Balanced nutrition for layer birds.",
//  },
//  {
//    name: "Cattle Feed",
//    short: "Cattle",
//    icon: Wheat,
//    description: "Complete nutrition for cattle.",
//  },
//  {
//    name: "Gavran Feed",
//    short: "Gavran",
//    icon: Sprout,
//    description: "Specialized gavran nutrition.",
//  },
//  {
//    name: "Milking Feed",
//    short: "Milking",
//    icon: Milk,
//    description: "Nutrition supporting dairy productivity.",
//  },
//  {
//    name: "Poultry Feed",
//    short: "Poultry",
//    icon: Bird,
//    description: "Specialized poultry nutrition.",
//  },
//  {
//    name: "Chicken Outlets",
//    short: "Outlets",
//    icon: ShoppingBasket,
//    description: "Products for chicken outlets.",
//  },
//];

///* =========================================================
//   MAIN PAGE
//========================================================= */

//export default function UrjaProductsPage() {
//  const [activeCategory, setActiveCategory] = useState("All Products");

//  const filteredProducts = useMemo(() => {
//    if (activeCategory === "All Products") {
//      return products;
//    }

//    return products.filter(
//      (product) => product.category === activeCategory
//    );
//  }, [activeCategory]);

//  return (
//    <div className="min-h-screen overflow-hidden bg-white text-slate-900">

//      {/* =====================================================
//          HERO
//      ===================================================== */}

//      <section className="relative min-h-[580px] overflow-hidden bg-slate-950">

//        <img
//          src="./images/Pb-1.png"
//          alt="Urja Products"
//          className="absolute inset-0 h-full w-full object-cover"
//        />

//        {/* Dark premium overlay */}
//        <div className="absolute inset-0 bg-slate-950/70" />

//        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

//        {/* Decorative glow */}
//        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-lime-500/20 blur-3xl" />

//        <div className="relative z-10 mx-auto flex min-h-[580px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">

//          <motion.div
//            initial={{ opacity: 0, y: 40 }}
//            animate={{ opacity: 1, y: 0 }}
//            transition={{ duration: 0.8 }}
//            className="max-w-3xl"
//          >

//            {/* Badge */}
//            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-300 backdrop-blur-md">
//              <Sparkles className="h-4 w-4" />
//              Our Products
//            </div>

//            {/* Heading */}
//            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
//              Nutrition That
//              <span className="block text-lime-400">
//                Builds Better Growth.
//              </span>
//            </h1>

//            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
//              Discover Urja's range of scientifically formulated products
//              designed to support better growth, health and productivity
//              across poultry and dairy nutrition.
//            </p>

//            {/* Buttons */}
//            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

//              <a
//                href="#products"
//                className="group inline-flex items-center justify-center gap-3 rounded-full bg-lime-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-lime-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-600"
//              >
//                Explore Products

//                <ArrowRight
//                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//                />
//              </a>

//              <a
//                href="#categories"
//                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
//              >
//                Explore Categories
//              </a>

//            </div>

//          </motion.div>
//        </div>

//        {/* Bottom fade */}
//        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
//      </section>

//      {/* =====================================================
//          INTRO / TRUST STRIP
//      ===================================================== */}

//      <section className="relative -mt-1 bg-white py-12 sm:py-16">

//        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

//          <div className="grid gap-5 md:grid-cols-3">

//            {[
//              {
//                title: "Quality Focused",
//                text: "Products developed with a strong focus on nutrition and quality.",
//              },
//              {
//                title: "Better Nutrition",
//                text: "Balanced formulations designed for healthier growth and productivity.",
//              },
//              {
//                title: "Complete Range",
//                text: "A wide range of products across poultry and dairy nutrition.",
//              },
//            ].map((item, index) => (
//              <motion.div
//                key={item.title}
//                initial={{ opacity: 0, y: 20 }}
//                whileInView={{ opacity: 1, y: 0 }}
//                viewport={{ once: true }}
//                transition={{ duration: 0.5, delay: index * 0.1 }}
//                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-lime-200 hover:shadow-lg"
//              >

//                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-50 text-lime-600">
//                  <Check className="h-5 w-5" />
//                </div>

//                <h3 className="text-lg font-bold text-slate-900">
//                  {item.title}
//                </h3>

//                <p className="mt-2 text-sm leading-6 text-slate-500">
//                  {item.text}
//                </p>

//              </motion.div>
//            ))}

//          </div>
//        </div>
//      </section>

//      {/* =====================================================
//          CATEGORY SECTION
//      ===================================================== */}

//      <section
//        id="categories"
//        className="border-y border-slate-100 bg-[#f5f6f5] py-16 sm:py-20"
//      >

//        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

//          {/* Header */}
//          <motion.div
//            initial={{ opacity: 0, y: 25 }}
//            whileInView={{ opacity: 1, y: 0 }}
//            viewport={{ once: true }}
//            transition={{ duration: 0.6 }}
//            className="mx-auto max-w-2xl text-center"
//          >

//            <div className="inline-flex items-center rounded-full border border-lime-600/20 bg-lime-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-lime-700">
//              Product Categories
//            </div>

//            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
//              Explore Our Product Range
//            </h2>

//            <p className="mt-4 text-base leading-7 text-slate-600">
//              Choose a category to discover products developed for different
//              nutritional requirements.
//            </p>

//          </motion.div>

//          {/* Category Cards */}
//          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">

//            {categories.map((category, index) => {
//              const Icon = category.icon;

//              const isActive =
//                activeCategory === category.name;

//              return (
//                <motion.button
//                  key={category.name}
//                  initial={{ opacity: 0, y: 20 }}
//                  whileInView={{ opacity: 1, y: 0 }}
//                  viewport={{ once: true }}
//                  transition={{
//                    duration: 0.4,
//                    delay: index * 0.05,
//                  }}
//                  onClick={() =>
//                    setActiveCategory(category.name)
//                  }
//                  className={`group relative min-h-[145px] rounded-2xl border p-4 text-left transition-all duration-300 ${
//                    isActive
//                      ? "border-lime-500 bg-lime-500 text-white shadow-xl shadow-lime-900/10"
//                      : "border-slate-200 bg-white text-slate-900 hover:-translate-y-1 hover:border-lime-300 hover:shadow-lg"
//                  }`}
//                >

//                  <div
//                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
//                      isActive
//                        ? "bg-white/20 text-white"
//                        : "bg-lime-50 text-lime-600"
//                    }`}
//                  >
//                    <Icon className="h-5 w-5" />
//                  </div>

//                  <h3
//                    className={`mt-4 text-sm font-extrabold ${
//                      isActive
//                        ? "text-white"
//                        : "text-slate-900"
//                    }`}
//                  >
//                    {category.short}
//                  </h3>

//                  <p
//                    className={`mt-1 text-[11px] leading-4 ${
//                      isActive
//                        ? "text-lime-50"
//                        : "text-slate-500"
//                    }`}
//                  >
//                    {category.description}
//                  </p>

//                </motion.button>
//              );
//            })}

//          </div>

//        </div>
//      </section>

//      {/* =====================================================
//          QUOTE
//      ===================================================== */}

//      <section className="bg-white py-16 sm:py-20">

//        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

//          <motion.div
//            initial={{ opacity: 0, x: -30 }}
//            whileInView={{ opacity: 1, x: 0 }}
//            viewport={{ once: true }}
//            transition={{ duration: 0.6 }}
//            className="relative overflow-hidden rounded-3xl bg-slate-950 px-7 py-10 sm:px-12 sm:py-14"
//          >

//            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime-500/20 blur-3xl" />

//            <div className="relative z-10 max-w-3xl">

//              <div className="mb-5 h-1 w-16 rounded-full bg-lime-500" />

//              <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
//                "Our goal is to be a part of Every Indian's Kitchen"
//              </h2>

//              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
//                From poultry nutrition to dairy feed solutions, we continue
//                to develop products focused on quality, performance and
//                better results.
//              </p>

//            </div>

//          </motion.div>

//        </div>
//      </section>

//      {/* =====================================================
//          PRODUCTS
//      ===================================================== */}

//      <section
//        id="products"
//        className="bg-[#f2f3f2] py-20 sm:py-24"
//      >

//        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

//          {/* Product Header */}
//          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

//            <div>

//              <div className="inline-flex items-center gap-2 rounded-full border border-lime-600/20 bg-lime-50 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-lime-700">
//                <Sparkles className="h-3.5 w-3.5" />
//                {activeCategory}
//              </div>

//              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
//                {activeCategory === "All Products"
//                  ? "Our Complete Product Range"
//                  : `${activeCategory} Products`}
//              </h2>

//              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
//                Explore our carefully selected products designed to deliver
//                consistent nutrition and performance.
//              </p>

//            </div>

//            {/* Product count */}
//            <div className="flex h-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
//              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-100 text-xs font-bold text-lime-700">
//                {filteredProducts.length}
//              </span>

//              Products
//            </div>

//          </div>

//          {/* =================================================
//              PRODUCT GRID
//          ================================================= */}

//          <AnimatePresence mode="wait">

//            <motion.div
//              key={activeCategory}
//              initial={{ opacity: 0, y: 20 }}
//              animate={{ opacity: 1, y: 0 }}
//              exit={{ opacity: 0, y: -10 }}
//              transition={{ duration: 0.4 }}
//              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
//            >

//              {filteredProducts.map((product, index) => (

//                <motion.article
//                  key={product.id}
//                  initial={{ opacity: 0, y: 25 }}
//                  animate={{ opacity: 1, y: 0 }}
//                  transition={{
//                    duration: 0.45,
//                    delay: index * 0.05,
//                  }}
//                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-lime-200 hover:shadow-2xl"
//                >

//                  {/* Image */}
//                  <div className="relative h-[270px] overflow-hidden bg-slate-100">

//                    <img
//                      src={product.image}
//                      alt={product.name}
//                      loading="lazy"
//                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                    />

//                    {/* Image overlay */}
//                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//                    {/* Category badge */}
//                    <div className="absolute left-4 top-4">
//                      <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-lime-700 shadow-sm backdrop-blur">
//                        {product.category}
//                      </span>
//                    </div>

//                  </div>

//                  {/* Content */}
//                  <div className="p-6">

//                    <h3 className="text-xl font-extrabold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-lime-700">
//                      {product.name}
//                    </h3>

//                    <p className="mt-3 line-clamp-2 min-h-[48px] text-sm leading-6 text-slate-500">
//                      {product.description}
//                    </p>

//                    {/* Bottom */}
//                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

//                      <Link
//                        to={`/products`}
//                        className="group/link inline-flex items-center gap-2 text-sm font-bold text-lime-600"
//                      >
//                        View Product

//                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
//                      </Link>

//                      <div className="h-8 w-8 rounded-full bg-lime-50" />

//                    </div>

//                  </div>

//                </motion.article>

//              ))}

//            </motion.div>

//          </AnimatePresence>

//          {/* No products */}
//          {filteredProducts.length === 0 && (
//            <div className="mt-12 rounded-3xl border border-slate-200 bg-white py-20 text-center">
//              <p className="text-lg font-semibold text-slate-700">
//                No products found.
//              </p>
//            </div>
//          )}

//        </div>
//      </section>

//      {/* =====================================================
//          BOTTOM CTA
//      ===================================================== */}

//      <section className="bg-white py-20">

//        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

//          <motion.div
//            initial={{ opacity: 0, scale: 0.98 }}
//            whileInView={{ opacity: 1, scale: 1 }}
//            viewport={{ once: true }}
//            transition={{ duration: 0.6 }}
//            className="relative overflow-hidden rounded-[2rem] bg-lime-600 px-7 py-12 text-center sm:px-12 sm:py-16"
//          >

//            {/* Decorative circles */}
//            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
//            <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-black/10" />

//            <div className="relative z-10 mx-auto max-w-2xl">

//              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white">
//                <Wheat className="h-6 w-6" />
//              </div>

//              <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
//                Better Nutrition.
//                <span className="block">
//                  Better Results.
//                </span>
//              </h2>

//              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-lime-50 sm:text-base">
//                Explore our complete range of products and discover
//                nutrition solutions created for better growth and
//                productivity.
//              </p>

//              <a
//                href="#products"
//                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-lime-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
//              >
//                Explore All Products

//                <ArrowRight className="h-5 w-5" />
//              </a>

//            </div>

//          </motion.div>

//        </div>
//      </section>

//    </div>
//  );
//}


import React, { useMemo, useState, useEffect } from "react";
import api from "../services/api";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bird,
  Check,
  ChevronRight,
  Layers,
  Milk,
  ShoppingBasket,
  Sparkles,
  Sprout,
  Wheat,
} from "lucide-react";

/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  {
    id: 1,
    name: "Broiler Starter Feed",
    category: "Broiler Feed",
    description:
      "Balanced nutrition designed to support healthy early growth and development.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103142.938.jpg",
  },
  {
    id: 2,
    name: "Broiler Finisher-1 Feed",
    category: "Broiler Feed",
    description:
      "Specially formulated feed for consistent growth and better flock performance.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-02T142544.691-300x300.jpg",
  },
  {
    id: 3,
    name: "Broiler Finisher-2 Feed",
    category: "Broiler Feed",
    description:
      "Complete nutrition designed for efficient finishing and better feed conversion.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-02T141710.854-300x300.jpg",
  },

  {
    id: 4,
    name: "Layer Pre Mix-5 ",
    category: "Layer Feed",
    description:
      "Balanced feed supporting healthy layers and consistent egg production.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103829.787-300x300.jpg",
  },
  {
    id: 5,
    name: "Layer Pre Mix-35 ",
    category: "Layer Feed",
    description:
      "Nutrition formulated for healthy development of growing layer birds.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103702.703-300x300.jpg",
  },
  {
    id: 6,
    name: "Layer Concentrate 50% ",
    category: "Layer Feed",
    description:
      "Nutrition formulated for healthy development of growing layer birds.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/07/prt.jpg",
  },

  {
    id: 7,
    name: "Supreme Gold Pashu Khadya",
    category: "Cattle Feed",
    description:
      "Balanced nutrition supporting cattle health, growth and productivity.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103907.054-300x300.jpg",
  },
  {
    id: 8,
    name: "Calf Starter Gold ",
    category: "Cattle Feed",
    description:
      "Specialized nutrition designed to support dairy animal performance.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T104000.163-300x300.jpg",
  },
  {
    id: 9,
    name: "Urja Malai (8000)",
    category: "Cattle Feed",
    description:
      "Specialized nutrition designed to support dairy animal performance.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2025/08/Malai-Plus-Front-300x300.webp",
  },

  {
    id: 10,
    name: "Gavran Feed Starter",
    category: "Gavran Feed",
    description:
      "Specialized nutrition designed for optimal performance in gavran animals.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/07/gavrnstrtr-300x300.jpg",
  },
  {
    id: 11,
    name: "Gavran Breed",
    category: "Gavran Feed",
    description:
      "Specialized nutrition designed for optimal performance in gavran animals.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103404.226-300x300.jpg",
  },
  {
    id: 12,
    name: "Gavran Max Magic-1 ",
    category: "Gavran Feed",
    description:
      "Specialized nutrition designed for optimal performance in gavran animals.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-02T141022.806-300x300.jpg",
  },

  {
    id: 13,
    name: "Urja Milk O Milk ",
    category: "Milking Feed",
    description:
      "Specialized nutrition designed to support dairy animal performance.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2025/08/Milk-O-Milk-Front-300x300.webp",
  },
  {
    id: 14,
    name: "Urja Max Magic",
    category: "Milking Feed",
    description:
      "Specialized nutrition designed to support dairy animal performance.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2025/08/Max-Magic-Front-300x300.webp",
  },
  {
    id: 15,
    name: "Urja Supreme Gold (5000)",
    category: "Milking Feed",
    description:
      "Specialized nutrition designed to support dairy animal performance.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2025/08/Supreme-Gold-Front-300x300.webp",
  },

  {
    id: 16,
    name: "Deshi Breeder ",
    category: "Poultry Feed",
    description:
      "Specialized nutrition designed to support healthy poultry performance.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103524.274-300x300.jpg",
  },

  {
    id: 17,
    name: "Trader Pellet ",
    category: "Chicken Outlets",
    description:
      "Specialized nutrition designed to support consistent poultry performance.",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/07/prt-300x300.jpg",
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    name: "All Products",
    short: "All",
    icon: Sparkles,
    description: "Complete product range",
  },
  {
    name: "Broiler Feed",
    short: "Broiler",
    icon: Bird,
    description: "Broiler nutrition",
  },
  {
    name: "Layer Feed",
    short: "Layer",
    icon: Layers,
    description: "Layer nutrition",
  },
  {
    name: "Cattle Feed",
    short: "Cattle",
    icon: Wheat,
    description: "Cattle nutrition",
  },
  {
    name: "Gavran Feed",
    short: "Gavran",
    icon: Sprout,
    description: "Gavran nutrition",
  },
  {
    name: "Milking Feed",
    short: "Milking",
    icon: Milk,
    description: "Dairy nutrition",
  },
  {
    name: "Poultry Feed",
    short: "Poultry",
    icon: Bird,
    description: "Poultry nutrition",
  },
  {
    name: "Chicken Outlets",
    short: "Outlets",
    icon: ShoppingBasket,
    description: "Chicken outlets",
  },
];

/* =========================================================
   PRODUCT DETAIL
========================================================= */

function ProductDetail({
  product,
  relatedProducts,
  onBack,
  onSelectRelated,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45 }}
      className="bg-white"
    >
      {/* -----------------------------------------------
          DETAIL HEADER
      ------------------------------------------------ */}

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-10">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-lime-600"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            />
            Back to Products
          </button>
        </div>
      </div>

      {/* -----------------------------------------------
          MAIN PRODUCT
      ------------------------------------------------ */}

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-xl"
          >
            <div className="absolute left-5 top-5 z-10 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-lime-700 shadow-sm backdrop-blur">
              {product.category}
            </div>

            <div className="flex min-h-[400px] items-center justify-center p-8 sm:min-h-[500px]">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[460px] w-full object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-lime-50 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-lime-700">
              <Sparkles className="h-3.5 w-3.5" />
              Urja Product
            </div>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-5 h-1 w-16 rounded-full bg-lime-500" />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              {product.description}
            </p>

            {/* Info boxes */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Category
                </p>

                <p className="mt-2 font-bold text-slate-900">
                  {product.category}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Product
                </p>

                <p className="mt-2 font-bold text-slate-900">
                  Urja Nutrition
                </p>
              </div>

            </div>

            {/* Highlights */}

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-100 text-lime-600">
                  <Check className="h-4 w-4" />
                </span>

                Quality-focused nutrition
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-100 text-lime-600">
                  <Check className="h-4 w-4" />
                </span>

                Designed for better performance
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-100 text-lime-600">
                  <Check className="h-4 w-4" />
                </span>

                Scientifically formulated nutrition
              </div>

            </div>

          </motion.div>

        </div>
      </div>

      {/* -----------------------------------------------
          RELATED PRODUCTS
      ------------------------------------------------ */}

      {relatedProducts.length > 0 && (
        <section className="border-t border-slate-100 bg-[#f3f4f3] py-16 sm:py-20">

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <div className="inline-flex rounded-full border border-lime-600/20 bg-lime-50 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-lime-700">
                  You May Also Like
                </div>

                <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
                  Related Products
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  More products from {product.category}
                </p>
              </div>

              <button
                onClick={onBack}
                className="hidden items-center gap-2 text-sm font-bold text-lime-600 sm:inline-flex"
              >
                View Category
                <ArrowRight className="h-4 w-4" />
              </button>

            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {relatedProducts.map((related, index) => (

                <motion.button
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  onClick={() => onSelectRelated(related)}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-lime-200 hover:shadow-xl"
                >

                  <div className="relative h-56 overflow-hidden bg-slate-100">

                    <img
                      src={related.image}
                      alt={related.name}
                      className="h-full w-full object-fill transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-lime-700 shadow-sm">
                      {related.category}
                    </div>

                  </div>

                  <div className="p-5">

                    <h3 className="text-lg font-extrabold text-slate-900 transition-colors group-hover:text-lime-700">
                      {related.name}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                      {related.description}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-lime-600">
                      View Product
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>

                  </div>

                </motion.button>

              ))}

            </div>

          </div>
        </section>
      )}

    </motion.section>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ product, onView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-lime-200 hover:shadow-2xl"
    >

      {/* IMAGE */}

      <div className="relative h-[265px] overflow-hidden bg-slate-100">

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-fill transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image gradient */}

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category */}

        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-lime-700 shadow-sm backdrop-blur">
            {product.category}
          </span>
        </div>

      </div>

      {/* CONTENT */}

      <div className="p-6">

        <h3 className="text-xl font-extrabold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-lime-700">
          {product.name}
        </h3>

        <p className="mt-3 min-h-[48px] line-clamp-2 text-sm leading-6 text-slate-500">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

          <button
            onClick={() => onView(product)}
            className="group/view inline-flex items-center gap-2 text-sm font-bold text-lime-600"
          >
            View Product

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/view:translate-x-1" />
          </button>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-50 text-lime-600">
            <ChevronRight className="h-4 w-4" />
          </div>

        </div>

      </div>

    </motion.article>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function UrjaProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await api.getProducts();
        if (res && res.data && res.data.length > 0) {
          setAllProducts(res.data);
        }
      } catch (err) {
        console.log("Using static product dataset");
      }
    }
    loadProducts();
  }, []);

  /* -----------------------------------------------
     FILTER PRODUCTS
  ------------------------------------------------ */

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All Products") {
      return allProducts;
    }

    return allProducts.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory, allProducts]);

  /* -----------------------------------------------
     RELATED PRODUCTS
     Same category as selected product
  ------------------------------------------------ */

  const relatedProducts = useMemo(() => {
    if (!selectedProduct) {
      return [];
    }

    return allProducts.filter(
      (product) =>
        product.category === selectedProduct.category &&
        (product._id || product.id) !== (selectedProduct._id || selectedProduct.id)
    );
  }, [selectedProduct, allProducts]);

  /* -----------------------------------------------
     CATEGORY CHANGE
  ------------------------------------------------ */

  const changeCategory = (category) => {
    setActiveCategory(category);
    setSelectedProduct(null);

    // Small delay makes category switching feel smooth
    setTimeout(() => {
      const productSection = document.getElementById("products");

      if (productSection) {
        productSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  /* -----------------------------------------------
     VIEW PRODUCT
  ------------------------------------------------ */

  const viewProduct = (product) => {
    setSelectedProduct(product);

    setTimeout(() => {
      const detailSection = document.getElementById(
        "product-detail"
      );

      if (detailSection) {
        detailSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  /* -----------------------------------------------
     BACK TO PRODUCTS
  ------------------------------------------------ */

  const backToProducts = () => {
    setSelectedProduct(null);

    setTimeout(() => {
      const productSection = document.getElementById("products");

      if (productSection) {
        productSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  /* -----------------------------------------------
     RELATED PRODUCT
  ------------------------------------------------ */

  const selectRelatedProduct = (product) => {
    setSelectedProduct(product);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">

      {/* =================================================
          HERO
      ================================================= */}

      {!selectedProduct && (
        <section className="relative min-h-[560px] overflow-hidden bg-slate-950">

          <img
            src="./images/Pb-1.png"
            alt="Urja Products"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-lime-500/20 blur-3xl" />

          <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-300 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                Our Products
              </div>

              <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Nutrition That
                <span className="block text-lime-400">
                  Builds Better Growth.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Discover Urja's range of scientifically formulated products
                designed to support better growth, health and productivity
                across poultry and dairy nutrition.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#products"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-lime-500 px-7 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-lime-600"
                >
                  Explore Products

                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>

              </div>

            </motion.div>

          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

        </section>
      )}

      {/* =================================================
          PRODUCT DETAIL
      ================================================= */}

      {selectedProduct ? (
        <div id="product-detail">
          <AnimatePresence mode="wait">
            <ProductDetail
              key={selectedProduct.id}
              product={selectedProduct}
              relatedProducts={relatedProducts}
              onBack={backToProducts}
              onSelectRelated={selectRelatedProduct}
            />
          </AnimatePresence>
        </div>
      ) : (
        <>
          {/* ===============================================
              SMALL INTRO
          =============================================== */}

          <section className="bg-white py-10 sm:py-12">

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

              <div className="grid gap-4 md:grid-cols-3">

                {[
                  "Quality-focused nutrition",
                  "Better growth & productivity",
                  "Complete product range",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-600">
                      <Check className="h-4 w-4" />
                    </span>

                    <span className="text-sm font-bold text-slate-700">
                      {text}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </section>

          {/* ===============================================
              PRODUCT AREA
              
              CATEGORY + PRODUCTS ARE NOW VERY CLOSE
          =============================================== */}

          <section
            id="products"
            className="scroll-mt-24 bg-[#f2f3f2] py-10 sm:py-14"
          >

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

              {/* =========================================
                  PRODUCT HEADER
              ========================================= */}

              <div className="mb-7 text-center">

                <div className="inline-flex items-center gap-2 rounded-full border border-lime-600/20 bg-lime-50 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-lime-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Our Product Range
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  Quality Products for Better Results
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                  Select a category below to instantly explore its products.
                </p>

              </div>

              {/* =========================================
                  STICKY CATEGORY BAR

                  THIS IS THE IMPORTANT CHANGE
              ========================================= */}

              <div className="sticky top-3 z-40 mb-8">

                <div className="rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl shadow-slate-900/5 backdrop-blur-xl">

                  <div className="flex gap-1.5 overflow-x-auto scrollbar-none">

                    {categories.map((category) => {

                      const Icon = category.icon;

                      const isActive =
                        activeCategory === category.name;

                      return (
                        <button
                          key={category.name}
                          onClick={() =>
                            changeCategory(category.name)
                          }
                          className={`group flex min-w-fit shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                            isActive
                              ? "bg-lime-600 text-white shadow-md"
                              : "text-slate-600 hover:bg-lime-50 hover:text-lime-700"
                          }`}
                        >

                          <Icon className="h-4 w-4" />

                          <span>
                            {category.short}
                          </span>

                        </button>
                      );
                    })}

                  </div>

                </div>

              </div>

              {/* =========================================
                  ACTIVE CATEGORY INFORMATION

                  RIGHT ABOVE PRODUCTS
              ========================================= */}

              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-7 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >

                <div>

                  <p className="text-xs font-bold uppercase tracking-widest text-lime-600">
                    Selected Category
                  </p>

                  <h3 className="mt-1 text-xl font-black text-slate-900">
                    {activeCategory}
                  </h3>

                </div>

                <div className="flex items-center gap-2 rounded-full bg-lime-50 px-4 py-2 text-sm font-bold text-lime-700">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-600 text-xs text-white">
                    {filteredProducts.length}
                  </span>

                  Products Available

                </div>

              </motion.div>

              {/* =========================================
                  PRODUCTS
              ========================================= */}

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >

                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product._id || product.id}
                      product={product}
                      onView={viewProduct}
                    />
                  ))}

                </motion.div>

              </AnimatePresence>

            </div>

          </section>

          {/* ===============================================
              BOTTOM CTA
          =============================================== */}

          <section className="bg-white py-16 sm:py-20">

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

              <div className="relative overflow-hidden rounded-[2rem] bg-lime-600 px-7 py-12 text-center sm:px-12 sm:py-16">

                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

                <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-black/10" />

                <div className="relative z-10 mx-auto max-w-2xl">

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white">
                    <Wheat className="h-6 w-6" />
                  </div>

                  <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                    Better Nutrition.
                    <span className="block">
                      Better Results.
                    </span>
                  </h2>

                  <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-lime-50 sm:text-base">
                    Explore our complete range of products designed for
                    better growth, health and productivity.
                  </p>

                  <button
                    onClick={() => {
                      window.scrollTo({
                        top: document.getElementById("products")?.offsetTop || 0,
                        behavior: "smooth",
                      });
                    }}
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-lime-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    Explore All Products

                    <ArrowRight className="h-5 w-5" />
                  </button>

                </div>

              </div>

            </div>

          </section>
        </>
      )}

    </div>
  );
}