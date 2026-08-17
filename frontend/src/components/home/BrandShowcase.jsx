//import React from "react";
//import { ArrowUpRight, Sparkles } from "lucide-react";

//const brands = [
//  {
//    id: "01",
//    name: "Urja Garden Feast",
//    category: "Poultry Nutrition",
//    description:
//      "Premium nutrition solution designed for healthy and productive poultry.",
//    image: "https://www.urjafoods.net/wp-content/uploads/2021/06/501.png",
//    size: "large",
//  },
//  {
//    id: "02",
//    name: "Urja Maltai Plus",
//    category: "Cattle Feed",
//    description:
//      "Balanced cattle feed formulated to support better nutrition and productivity.",
//    image: "https://www.urjafoods.net/wp-content/uploads/2021/06/504.png",
//    size: "normal",
//  },
//  {
//    id: "03",
//    name: "Chicken We & Me",
//    category: "Poultry Feed",
//    description:
//      "Focused nutrition for stronger poultry growth and everyday performance.",
//    image: "https://www.urjafoods.net/wp-content/uploads/2021/06/505.png",
//    size: "normal",
//  },
//  {
//    id: "04",
//    name: "Urja Milk-O-Milk",
//    category: "Dairy Nutrition",
//    description:
//      "Specialized dairy nutrition supporting healthy livestock and milk performance.",
//    image: "https://www.urjafoods.net/wp-content/uploads/2021/06/503.png",
//    size: "normal",
//  },
//  {
//    id: "05",
//    name: "HP",
//    category: "Animal Nutrition",
//    description:
//      "A trusted nutrition brand from the Urja product portfolio.",
//    image: "https://www.urjafoods.net/wp-content/uploads/2021/06/New-Project-1.png",
//    size: "normal",
//  },
//];

//const BrandShowcase = () => {
//  return (
//    <section className="relative overflow-hidden bg-[#f6faef] py-20 sm:py-24 lg:py-28">
      
//      {/* Background decoration */}
//      <div className="pointer-events-none absolute inset-0">
//        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-lime-300/20 blur-3xl" />
//        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />

//        <div
//          className="absolute inset-0 opacity-[0.025]"
//          style={{
//            backgroundImage:
//              "linear-gradient(rgba(15,23,42,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.8) 1px, transparent 1px)",
//            backgroundSize: "60px 60px",
//          }}
//        />
//      </div>

//      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-10">

//        {/* ================= HEADER ================= */}
//        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">

//          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-600/15 bg-white/70 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-lime-700 shadow-sm backdrop-blur-md">
//            <Sparkles className="h-3.5 w-3.5" />
//            Our Brand Portfolio
//          </div>

//          <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
//            Brands built for
//            <span className="block text-lime-600">
//              better nutrition.
//            </span>
//          </h2>

//          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
//            Explore the growing Urja brand family, created to deliver
//            dependable nutrition solutions across cattle, dairy and poultry
//            segments.
//          </p>

//          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
//            <span className="h-1 w-12 rounded-full bg-lime-500" />
//            <span className="h-px w-16 bg-slate-900/10" />
//            <span className="h-1 w-3 rounded-full bg-lime-300" />
//          </div>
//        </div>

//        {/* ================= BRAND GRID ================= */}
//        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">

//          {/* ================= FEATURED BRAND ================= */}
//          <div className="group relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_25px_70px_rgba(42,65,25,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(42,65,25,0.16)] md:min-h-[500px] lg:col-span-7">

//            {/* Background */}
//            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fbea] to-lime-100/70" />

//            {/* Decorative circle */}
//            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[35px] border-lime-200/30 transition-transform duration-700 group-hover:scale-110" />

//            <div className="relative flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">

//              {/* Top */}
//              <div className="flex items-start justify-between">

//                <div>
//                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-600">
//                    Featured Brand
//                  </span>

//                  <p className="mt-2 text-sm font-bold text-slate-400">
//                    {brands[0].category}
//                  </p>
//                </div>

//                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-white text-xs font-black text-slate-500 shadow-sm">
//                  {brands[0].id}
//                </span>
//              </div>

//              {/* Image */}
//              <div className="flex flex-1 items-center justify-center py-8">

//                <div className="relative flex h-[260px] w-full items-center justify-center sm:h-[300px]">

//                  {/* Glow */}
//                  <div className="absolute h-48 w-48 rounded-full bg-lime-300/25 blur-3xl transition-all duration-700 group-hover:scale-125" />

//                  <img
//                    src={brands[0].image}
//                    alt={brands[0].name}
//                    className="relative z-10 h-full w-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-110"
//                  />
//                </div>
//              </div>

//              {/* Bottom */}
//              <div className="flex items-end justify-between gap-5">

//                <div className="max-w-md">

//                  <h3 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
//                    {brands[0].name}
//                  </h3>

//                  <p className="mt-2 text-sm leading-6 text-slate-500">
//                    {brands[0].description}
//                  </p>
//                </div>

//                <button
//                  type="button"
//                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white transition-all duration-300 group-hover:bg-lime-500 group-hover:text-slate-950"
//                  aria-label={`Explore ${brands[0].name}`}
//                >
//                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
//                </button>
//              </div>
//            </div>
//          </div>

//          {/* ================= OTHER BRANDS ================= */}
//          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5">

//            {brands.slice(1).map((brand) => (
//              <div
//                key={brand.id}
//                className="group relative min-h-[300px] overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[0_18px_50px_rgba(42,65,25,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_65px_rgba(42,65,25,0.14)]"
//              >

//                {/* Card background */}
//                <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f2f8e8]" />

//                {/* Green accent */}
//                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-lime-500 transition-transform duration-500 group-hover:scale-x-100" />

//                {/* Decorative circle */}
//                <div className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-lime-100/70 transition-transform duration-700 group-hover:scale-150" />

//                <div className="relative flex h-full flex-col p-5 sm:p-6">

//                  {/* Card header */}
//                  <div className="flex items-center justify-between">

//                    <span className="rounded-full bg-lime-100 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-lime-700">
//                      {brand.category}
//                    </span>

//                    <span className="text-xs font-black text-slate-300 transition-colors duration-300 group-hover:text-lime-500">
//                      {brand.id}
//                    </span>
//                  </div>

//                  {/* Brand Image */}
//                  <div className="relative flex flex-1 items-center justify-center py-5">

//                    <div className="absolute h-32 w-32 rounded-full bg-lime-200/20 blur-2xl transition-all duration-500 group-hover:bg-lime-300/30" />

//                    <img
//                      src={brand.image}
//                      alt={brand.name}
//                      loading="lazy"
//                      className="relative z-10 h-[145px] w-full object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-110"
//                    />
//                  </div>

//                  {/* Bottom */}
//                  <div className="flex items-end justify-between gap-3">

//                    <div>
//                      <h3 className="text-lg font-black tracking-tight text-slate-900">
//                        {brand.name}
//                      </h3>

//                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
//                        {brand.description}
//                      </p>
//                    </div>

//                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
//                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
//                    </div>

//                  </div>
//                </div>
//              </div>
//            ))}

//          </div>
//        </div>

//        {/* ================= BOTTOM STATEMENT ================= */}
//        <div className="mt-10 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-[0_25px_70px_rgba(15,23,42,0.16)] sm:p-8">

//          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

//            <div>
//              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-300">
//                One portfolio
//              </p>

//              <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
//                Multiple nutrition solutions.
//              </h3>
//            </div>

//            <div className="flex items-center gap-8">

//              <div>
//                <div className="text-3xl font-black text-lime-300">
//                  05
//                </div>
//                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
//                  Brands
//                </p>
//              </div>

//              <div className="h-12 w-px bg-white/10" />

//              <div>
//                <div className="text-3xl font-black">
//                  03
//                </div>
//                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
//                  Categories
//                </p>
//              </div>

//            </div>
//          </div>
//        </div>

//      </div>
//    </section>
//  );
//};

//export default BrandShowcase;

import React, { useEffect, useRef, useState } from "react";

const brands = [
  {
    name: "Urja Garden Feast",
    category: "Poultry Nutrition",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/06/501.png",
  },
  {
    name: "Urja Maltai Plus",
    category: "Cattle Feed",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/06/504.png",
  },
  {
    name: "Chicken We & Me",
    category: "Poultry Feed",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/06/505.png",
  },
  {
    name: "Urja Milk-O-Milk",
    category: "Dairy Nutrition",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/06/503.png",
  },
  {
    name: "HP",
    category: "Animal Nutrition",
    image:
      "https://www.urjafoods.net/wp-content/uploads/2021/06/New-Project-1.png",
  },
];

const BrandShowcase = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let animationFrame;
    let position = 0;

    // Automatic slider speed
    const speed = 0.45;

    const animate = () => {
      if (!isPaused) {
        position += speed;

        // Reset after first complete set
        if (position >= slider.scrollWidth / 2) {
          position = 0;
        }

        slider.style.transform = `translate3d(-${position}px, 0, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Left soft glow */}
        <div className="absolute left-[15%] top-0 h-40 w-40 rounded-full bg-lime-200/20 blur-3xl" />

        {/* Right soft glow */}
        <div className="absolute bottom-0 right-[15%] h-40 w-40 rounded-full bg-green-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-7 px-4 text-center sm:px-6 lg:px-10">
          {/* Small label */}

          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-px w-7 bg-lime-500" />

            <span className="text-[16px] font-extrabold uppercase tracking-[0.25em] text-lime-600">
              Our Brand Family
            </span>

            <span className="h-px w-7 bg-lime-500" />
          </div>

          {/* Main Heading */}

          <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
            Brands you can{" "}
            <span className="text-lime-600">trust.</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
            A growing portfolio of nutrition brands designed for better
            farming and healthier livestock.
          </p>
        </div>

        {/* =====================================================
            SLIDER
        ====================================================== */}

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* =================================================
              LEFT FADE
          ================================================== */}

          <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-16 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-28 lg:w-40" />

          {/* =================================================
              RIGHT FADE
          ================================================== */}

          <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-16 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-28 lg:w-40" />

          {/* =================================================
              MOVING TRACK
          ================================================== */}

          <div
            ref={sliderRef}
            className="flex w-max items-center gap-3 will-change-transform sm:gap-4"
          >
            {/* =================================================
                FIRST SET
            ================================================== */}

            {brands.map((brand, index) => (
              <BrandCard
                key={`first-${brand.name}`}
                brand={brand}
                index={index}
              />
            ))}

            {/* =================================================
                DUPLICATE SET
            ================================================== */}

            {brands.map((brand, index) => (
              <BrandCard
                key={`second-${brand.name}`}
                brand={brand}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM INFO
        ====================================================== */}

        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Explore our growing brand portfolio
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   BRAND CARD
============================================================ */

const BrandCard = ({ brand, index }) => {
  return (
    <div
      className="
        group
        relative
        flex
        h-[165px]
        w-[215px]
        shrink-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-100
        bg-white
        px-4
        py-4
        shadow-[0_8px_28px_rgba(15,23,42,0.055)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-lime-200
        hover:shadow-[0_18px_45px_rgba(65,84,40,0.12)]
        sm:h-[165px]
        sm:w-[210px]
      "
    >
      {/* =====================================================
          TOP GREEN ACCENT
      ====================================================== */}

      <div
        className="
          absolute
          left-0
          top-0
          z-30
          h-[3px]
          w-full
          origin-left
          scale-x-0
          bg-gradient-to-r
          from-lime-400
          to-green-600
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />

      {/* =====================================================
          TOP INFORMATION
      ====================================================== */}

      <div
        className="
          relative
          z-20
          flex
          h-[22px]
          shrink-0
          items-center
          justify-between
          px-2
        "
      >
        {/*Number

        <span
          className="
            text-[9px]
            font-black
            tracking-[0.12em]
            text-slate-500
            transition-colors
            duration-300
            group-hover:text-lime-500
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>*/}

        {/* Category */}

        <span
          className="
            max-w-[125px]
            truncate
            rounded-full
            bg-slate-50
            px-2
            py-1
            text-[9px]
            font-bold
            uppercase
            tracking-[0.07em]
            text-slate-600
            transition-all
            duration-300
            group-hover:bg-lime-50
            group-hover:text-lime-600
          "
        >
          {brand.category}
        </span>
      </div>

      {/* =====================================================
          IMAGE AREA
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mt-1
          flex
          h-[120px]
          shrink-0
          items-center
          justify-center
        "
      >
        {/* Soft Glow Behind Image */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-20
            w-20
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-lime-200/20
            blur-2xl
            transition-all
            duration-500
            group-hover:h-28
            group-hover:w-28
            group-hover:bg-lime-300/25
          "
        />

        {/* =================================================
            BORDERED IMAGE CONTAINER
        ================================================== */}

        <div
          className="
            relative
            z-10
            flex
            h-[92px]
            w-[98%]
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-white
            px-3
            shadow-[0_4px_18px_rgba(15,23,42,0.06)]
            transition-all
            duration-500
            group-hover:border-lime-300
            group-hover:shadow-[0_8px_25px_rgba(101,163,13,0.14)]
          "
        >
          <img
            src={brand.image}
            alt={brand.name}
            loading="lazy"
            draggable="false"
            className="
              h-full
              w-full
              select-none
              object-contain
              p-1
              transition-transform
              duration-500
              ease-out
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* =====================================================
          BRAND NAME
      ====================================================== */}

      <div
        className="
          relative
          z-20
          flex
          min-h-[25px]
          flex-1
          items-center
          justify-center
        "
      >
        <h3
          className="
            truncate
            px-2
            text-center
            text-[11px]
            font-extrabold
            tracking-[-0.01em]
            text-slate-700
            transition-colors
            duration-300
            group-hover:text-lime-700
            sm:text-xs
          "
        >
          {brand.name}
        </h3>
      </div>

      {/* =====================================================
          BOTTOM GREEN LINE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-20
          h-[2px]
          w-0
          -translate-x-1/2
          rounded-full
          bg-lime-400
          transition-all
          duration-500
          group-hover:w-12
        "
      />
    </div>
  );
};

export default BrandShowcase;