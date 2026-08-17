//import React, { useMemo, useState } from "react";
//import { ArrowRight, Check, Filter, Sparkles } from "lucide-react";
//import { Link } from "react-router-dom";

//const products = [
//  {
//    id: 1,
//    name: "Broiler Starter Feed",
//    category: "Poultry Feed",
//    description:
//      "Scientifically balanced starter feed designed to support strong early growth, immunity and healthy development.",
//    image:
//      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80",
//    tag: "Best Seller",
//    features: ["Balanced Nutrition", "Better Growth", "High Digestibility"],
//  },
//  {
//    id: 2,
//    name: "Broiler Grower Feed",
//    category: "Poultry Feed",
//    description:
//      "Premium grower nutrition formulated to support efficient growth and consistent flock performance.",
//    image:
//      "https://images.unsplash.com/photo-1569230516306-5a2c3a9f4f5b?auto=format&fit=crop&w=1000&q=80",
//    tag: "Popular",
//    features: ["High Energy", "Balanced Protein", "Consistent Performance"],
//  },
//  {
//    id: 3,
//    name: "Broiler Finisher Feed",
//    category: "Poultry Feed",
//    description:
//      "Complete finisher nutrition developed for efficient feed conversion and strong finishing performance.",
//    image:
//      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1000&q=80",
//    tag: "Premium",
//    features: ["Efficient FCR", "Quality Protein", "Better Finish"],
//  },
//  {
//    id: 4,
//    name: "Layer Feed",
//    category: "Layer Feed",
//    description:
//      "Specialized nutrition supporting healthy layers, egg production and overall flock health.",
//    image:
//      "https://images.unsplash.com/photo-1569288063643-5d29ad64df4b?auto=format&fit=crop&w=1000&q=80",
//    tag: "Layer",
//    features: ["Egg Production", "Calcium Support", "Healthy Layers"],
//  },
//  {
//    id: 5,
//    name: "Pre-Starter Feed",
//    category: "Poultry Feed",
//    description:
//      "Highly digestible nutrition designed for young chicks during their critical initial development stage.",
//    image:
//      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=80",
//    tag: "New",
//    features: ["Easy Digestion", "Early Growth", "Immune Support"],
//  },
//  {
//    id: 6,
//    name: "Cattle Feed",
//    category: "Cattle Feed",
//    description:
//      "Nutritionally balanced feed designed to support cattle health, productivity and sustainable growth.",
//    image:
//      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=80",
//    tag: "Livestock",
//    features: ["Balanced Nutrition", "Healthy Growth", "Better Productivity"],
//  },
//];

//const categories = [
//  "All Products",
//  "Poultry Feed",
//  "Layer Feed",
//  "Cattle Feed",
//];

//export default function OurProducts() {
//  const [activeCategory, setActiveCategory] = useState("All Products");
//  const [selectedProduct, setSelectedProduct] = useState(null);

//  const filteredProducts = useMemo(() => {
//    if (activeCategory === "All Products") return products;

//    return products.filter(
//      (product) => product.category === activeCategory
//    );
//  }, [activeCategory]);

//  return (
//    <section className="relative overflow-hidden bg-[#f7f9f5] py-20 sm:py-24 lg:py-28">
//      {/* Background Decorations */}
//      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
//      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-lime-200/30 blur-3xl" />

//      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//        {/* Header */}
//        <div className="mx-auto max-w-3xl text-center">
//          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
//            <Sparkles size={16} />
//            Our Product Range
//          </div>

//          <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
//            Nutrition designed for
//            <span className="block text-green-600">
//              better outcomes
//            </span>
//          </h2>

//          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
//            Explore our range of scientifically formulated feed products
//            developed to support healthy growth, better performance and
//            stronger results.
//          </p>
//        </div>

//        {/* Category Filter */}
//        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
//          <div className="mr-1 hidden items-center gap-2 text-sm font-semibold text-gray-500 sm:flex">
//            <Filter size={16} />
//            Explore
//          </div>

//          {categories.map((category) => (
//            <button
//              key={category}
//              onClick={() => setActiveCategory(category)}
//              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
//                activeCategory === category
//                  ? "bg-green-600 text-white shadow-lg shadow-green-600/20"
//                  : "border border-gray-200 bg-white text-gray-600 hover:-translate-y-0.5 hover:border-green-300 hover:text-green-600"
//              }`}
//            >
//              {category}
//            </button>
//          ))}
//        </div>

//        {/* Product Layout */}
//        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
//          {filteredProducts.map((product, index) => {
//            const isFeatured = index === 0;

//            return (
//              <article
//                key={product.id}
//                className={`group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
//                  isFeatured
//                    ? "lg:col-span-7 lg:row-span-2"
//                    : "lg:col-span-5"
//                }`}
//              >
//                {/* Image */}
//                <div
//                  className={`relative overflow-hidden ${
//                    isFeatured
//                      ? "h-[420px] sm:h-[500px]"
//                      : "h-[280px]"
//                  }`}
//                >
//                  <img
//                    src={product.image}
//                    alt={product.name}
//                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                  />

//                  {/* Image Overlay */}
//                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

//                  {/* Product Tag */}
//                  <div className="absolute left-5 top-5">
//                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-700 shadow-lg backdrop-blur">
//                      {product.tag}
//                    </span>
//                  </div>

//                  {/* Category */}
//                  <div className="absolute bottom-5 left-5">
//                    <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
//                      {product.category}
//                    </span>
//                  </div>

//                  {/* Product Number */}
//                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-sm font-bold text-white backdrop-blur-md">
//                    0{product.id}
//                  </div>
//                </div>

//                {/* Content */}
//                <div className="p-6 sm:p-7">
//                  <div className="flex items-start justify-between gap-4">
//                    <h3
//                      className={`font-black text-gray-900 ${
//                        isFeatured
//                          ? "text-2xl sm:text-3xl"
//                          : "text-xl"
//                      }`}
//                    >
//                      {product.name}
//                    </h3>

//                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
//                      <ArrowRight
//                        size={18}
//                        className="transition-transform duration-300 group-hover:rotate-[-45deg]"
//                      />
//                    </div>
//                  </div>

//                  <p className="mt-3 text-sm leading-6 text-gray-600">
//                    {product.description}
//                  </p>

//                  {/* Features */}
//                  <div className="mt-5 flex flex-wrap gap-2">
//                    {product.features.map((feature) => (
//                      <span
//                        key={feature}
//                        className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
//                      >
//                        <Check size={13} className="text-green-600" />
//                        {feature}
//                      </span>
//                    ))}
//                  </div>

//                  {/* Button */}
//                  <button
//                    onClick={() => setSelectedProduct(product)}
//                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-600 transition-all duration-300 hover:gap-3"
//                  >
//                    View Product
//                    <ArrowRight size={16} />
//                  </button>
//                </div>
//              </article>
//            );
//          })}
//        </div>

//        {/* Bottom CTA */}
//        <div className="mt-14 overflow-hidden rounded-[2rem] bg-gray-900 px-7 py-10 sm:px-10 lg:px-14">
//          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
//            <div>
//              <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
//                Looking for the right feed?
//              </p>

//              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
//                Let's find the right solution for your farm.
//              </h3>

//              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
//                Talk to our team to understand the right nutrition
//                solution for your farming requirements.
//              </p>
//            </div>

//            <Link
//              to="/contact"
//              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-green-500 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-green-400 hover:shadow-xl hover:shadow-green-500/20"
//            >
//              Contact Us
//              <ArrowRight
//                size={18}
//                className="transition-transform duration-300 group-hover:translate-x-1"
//              />
//            </Link>
//          </div>
//        </div>
//      </div>

//      {/* Product Modal */}
//      {selectedProduct && (
//        <div
//          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm"
//          onClick={() => setSelectedProduct(null)}
//        >
//          <div
//            className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-[2rem] bg-white shadow-2xl"
//            onClick={(e) => e.stopPropagation()}
//          >
//            {/* Close */}
//            <button
//              onClick={() => setSelectedProduct(null)}
//              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white backdrop-blur transition hover:bg-black"
//            >
//              ×
//            </button>

//            {/* Modal Image */}
//            <div className="h-72 overflow-hidden sm:h-96">
//              <img
//                src={selectedProduct.image}
//                alt={selectedProduct.name}
//                className="h-full w-full object-cover"
//              />
//            </div>

//            {/* Modal Content */}
//            <div className="p-7 sm:p-9">
//              <span className="text-sm font-bold uppercase tracking-widest text-green-600">
//                {selectedProduct.category}
//              </span>

//              <h3 className="mt-2 text-3xl font-black text-gray-900">
//                {selectedProduct.name}
//              </h3>

//              <p className="mt-4 leading-7 text-gray-600">
//                {selectedProduct.description}
//              </p>

//              <div className="mt-6 grid gap-3 sm:grid-cols-3">
//                {selectedProduct.features.map((feature) => (
//                  <div
//                    key={feature}
//                    className="rounded-xl bg-green-50 p-4 text-sm font-semibold text-gray-700"
//                  >
//                    <Check
//                      size={17}
//                      className="mb-2 text-green-600"
//                    />
//                    {feature}
//                  </div>
//                ))}
//              </div>

//              <Link
//                to="/contact"
//                onClick={() => setSelectedProduct(null)}
//                className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green-700"
//              >
//                Enquire About Product
//                <ArrowRight size={17} />
//              </Link>
//            </div>
//          </div>
//        </div>
//      )}
//    </section>
//  );
//}


import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Broiler Starter Feed",
    category: "Broiler Feed",
    description:
      "Balanced nutrition designed to support healthy early growth and development.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103142.938.jpg",
  },
  {
    id: 2,
    name: "Broiler Finisher-1 Feed",
    category: "Broiler Feed",
    description:
      "Specially formulated feed for consistent growth and better flock performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-02T142544.691-300x300.jpg",
  },
  {
    id: 3,
    name: "Broiler Finisher-2 Feed",
    category: "Broiler Feed",
    description:
      "Complete nutrition designed for efficient finishing and better feed conversion.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-02T141710.854-300x300.jpg",
  },
  {
    id: 4,
    name: "Layer Pre Mix-5 Feed",
    category: "Layer Feed",
    description:
      "Balanced feed supporting healthy layers and consistent egg production.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103829.787-300x300.jpg",
  },
  {
    id: 5,
    name: "Layer Pre Mix-35 Feed",
    category: "Layer Feed",
    description:
      "Nutrition formulated for healthy development of growing layer birds.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103702.703-300x300.jpg",
  },
    {
    id: 6,
    name: "Layer Concentrate 50% Feed",
    category: "Layer Feed",
    description:
      "Nutrition formulated for healthy development of growing layer birds.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/prt.jpg",
  },
  {
    id: 7,
    name: "Supreme Gold Pashu Khadya",
    category: "Cattle Feed",
    description:
      "Balanced nutrition supporting cattle health, growth and productivity.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103907.054-300x300.jpg",
  },
  {
    id: 8,
    name: "Calf Starter Gold Feed",
    category: "Cattle Feed",
    description:
      "Specialized nutrition designed to support dairy animal performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T104000.163-300x300.jpg",
  },
  {
    id: 9,
    name: "Urja Malai (8000)",
    category: "Cattle Feed",
    description:
      "Specialized nutrition designed to support dairy animal performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2025/08/Malai-Plus-Front-300x300.webp",
  },
  {
    id: 10,
    name: "Gavran Feed starter",
    category: "Gavran Feed",
    description:
      "Specialized nutrition designed for optimal performance in gavran animals.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/gavrnstrtr-300x300.jpg",
  },

  {
    id: 11,
    name: "Gavran Breed Feed",
    category: "Gavran Feed",
    description:
      "Specialized nutrition designed for optimal performance in gavran animals.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103404.226-300x300.jpg",
  },

  {
    id: 12,
    name: "Gavran Max Magic-1 Feed",
    category: "Gavran Feed",
    description:
      "Specialized nutrition designed for optimal performance in gavran animals.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-02T141022.806-300x300.jpg",
  },
   {
    id: 13,
    name: "Urja Milk O Milk Feed",
    category: "Milking Feed",
    description:
      "Specialized nutrition designed to support dairy animal performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2025/08/Milk-O-Milk-Front-300x300.webp",
  },
    {
    id: 14,
    name: "Urja Max Magic",
    category: "Milking Feed",
    description:
      "Specialized nutrition designed to support dairy animal performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2025/08/Max-Magic-Front-300x300.webp",
  },
  {
    id: 15,
    name: "Urja Supreme Gold (5000)",
    category: "Milking Feed",
    description:
      "Specialized nutrition designed to support dairy animal performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2025/08/Supreme-Gold-Front-300x300.webp",
  },
    {
    id: 16,
    name: "Deshi Breeder Feed",
    category: "Poultry Feed",
    description:
      "Specialized nutrition designed to support dairy animal performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103524.274-300x300.jpg",
  },
    {
    id: 17,
    name: "Trader Pellet Feed",
    category: "Chicken outlets",
    description:
      "Specialized nutrition designed to support dairy animal performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/prt-300x300.jpg",
  },
];

const categories = [
  "All Products",
  "Broiler Feed",
  "Layer Feed",
  "Cattle Feed",
  "Gavran Feed",
  "Milking Feed",
  "Poultry Feed",
  "Chicken outlets",
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All Products") {
      return products;
    }

    return products.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev + 1 >= filteredProducts.length ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? filteredProducts.length - 1 : prev - 1
    );
  };

  const changeCategory = (category) => {
    setActiveCategory(category);
    setCurrentSlide(0);
  };

  return (
    <section className=" bg-[#f2f3f2] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-600/20 bg-lime-50 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-lime-700">
                       
                        our products
                      </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Quality Products for Better Results
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Explore our range of scientifically formulated feed products
            developed for better growth, health and productivity.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mt-10 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 p-1.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => changeCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-lime-600 text-white shadow-sm"
                    : "text-gray-600 hover:bg-white hover:text-lime-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Slider */}
        <div className="relative mt-12">

          {/* Previous Button */}
          <button
            onClick={previousSlide}
            disabled={filteredProducts.length <= 1}
            className="absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:border-lime-600 hover:bg-lime-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:-left-5"
            aria-label="Previous products"
          >
            <ChevronLeft size={21} />
          </button>

          {/* Products */}
          <div className="overflow-hidden px-1 sm:px-3">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide *
                  (window.innerWidth >= 1024
                    ? 33.333
                    : window.innerWidth >= 640
                    ? 50
                    : 100)
                }%)`,
              }}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/3"
                >
                  <div className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-lime-200 hover:shadow-xl">

                    {/* Product Image */}
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Content */}
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-lime-600">
                        {product.category}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-gray-900">
                        {product.name}
                      </h3>

                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                        {product.description}
                      </p>

                      <Link
                        to={`/products`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lime-600 transition-all hover:gap-3"
                      >
                        View Product
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={filteredProducts.length <= 1}
            className="absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:border-lime-600 hover:bg-lime-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:-right-5"
            aria-label="Next products"
          >
            <ChevronRight size={21} />
          </button>
        </div>

        {/* Slider Indicators */}
        {filteredProducts.length > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {filteredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-7 bg-lime-600"
                    : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* View All Products */}
        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-lime-600 px-6 py-3 text-sm font-semibold text-lime-600 transition-all hover:bg-lime-600 hover:text-white"
          >
            View All Products
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;