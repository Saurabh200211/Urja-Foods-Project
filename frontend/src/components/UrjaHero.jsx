import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Leaf,
  Play,
  Sparkles,
  X,
} from "lucide-react";

const DUMMY_IMAGES = {
  hero: "./images/hero-1.png",
  farmer: "./images/hero-2.png",
  catalog: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80",
};

const CATALOG_PATH = "/catalog/Urja_Cattle_Feeds_Catalog.pdf";

const slides = [
  {
    eyebrow: "URJA PASHU AAHAR",
    title: "Complete nutrition for stronger livestock.",
    description:
      "Premium cattle feed designed to support healthy growth, better milk performance and dependable everyday nutrition.",
    button: "Explore Cattle Feeds",
    href: "/products/cattle-feed",
    image: DUMMY_IMAGES.hero,
    accent: "20+ Years of Trust",
  },
  {
    eyebrow: "SMART FARMING",
    title: "Better nutrition. Better productivity. Better outcomes.",
    description:
      "From carefully balanced feed solutions to farmer-focused support, Urja brings practical innovation closer to the farm.",
    button: "Discover Our Business",
    href: "/business",
    image: DUMMY_IMAGES.farmer,
    accent: "Built Around Farmers",
  },
];

export default function UrjaHero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);

  const slide = slides[current];

  useEffect(() => {
    if (paused || catalogOpen) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [paused, catalogOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setCatalogOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#eff8e6]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(190,242,100,0.24),transparent_32%),linear-gradient(135deg,#f7fbf0_0%,#eef7df_44%,#dff0cb_100%)]" />

        <div className="absolute inset-x-0 top-0 h-[58%] bg-[radial-gradient(circle_at_70%_5%,rgba(125,211,252,0.22),transparent_35%)]" />

        <div className="absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-lime-700/20 to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="absolute right-[-80px] top-20 h-64 w-64 rounded-full border border-lime-500/10 sm:h-80 sm:w-80" />
        <div className="absolute right-[-40px] top-40 h-44 w-44 rounded-full border border-white/50 sm:h-56 sm:w-56" />
      </div>

      {/* MAIN HERO */}
      <div className="mx-auto max-w-[1600px] px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-8 lg:px-10 lg:pb-14 lg:pt-10">
        <div className="grid min-h-[650px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:min-h-[680px]">
          {/* COPY */}
         <div className="relative z-20 max-w-2xl py-6 lg:py-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-600/15 bg-white/65 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.20em] text-lime-700 shadow-sm backdrop-blur-md">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400/20">
                <Leaf className="h-3.5 w-3.5" />
              </span>
              {slide.eyebrow}
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              {slide.title}
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-1 w-14 rounded-full bg-lime-400" />
              <span className="h-px w-16 bg-slate-900/15" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                {slide.accent}
              </span>
            </div>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={slide.href}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800"
              >
                {slide.button}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={() => setCatalogOpen(true)}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-900/10 bg-white/70 px-5 py-3.5 text-sm font-bold text-slate-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-lime-400 hover:bg-white"
              >
                <Download className="h-4 w-4 text-lime-600 transition-transform duration-300 group-hover:-translate-y-0.5" />
                View Product Catalog
              </button>
            </div>

            {/* Trust row */}
            <div className="mt-9 grid max-w-lg grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/70 bg-white/55 p-4 shadow-sm backdrop-blur-md">
                <div className="text-xl font-black text-slate-900">20+</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Years of trust
                </div>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/55 p-4 shadow-sm backdrop-blur-md">
                <div className="text-xl font-black text-slate-900">4+</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Core feed lines
                </div>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/55 p-4 shadow-sm backdrop-blur-md">
                <div className="text-xl font-black text-slate-900">24/7</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Farm-first mindset
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL */}
<div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[560px]">

  {/* Image Glow */}
  <div className="absolute right-0 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-lime-300/20 blur-3xl lg:h-[500px] lg:w-[500px]" />

  {/* Main Image Card */}
  <div className="relative w-full max-w-[700px] overflow-hidden rounded-[2rem] border border-white/80 bg-white/40 p-2 shadow-[0_30px_70px_rgba(65,84,40,0.18)] backdrop-blur-sm sm:p-3">

    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-slate-100">

      <img
        key={slide.image}
        src={slide.image}
        alt={slide.eyebrow}
        className="h-full w-full object-contain transition-all duration-700"
      />

      {/* Image Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,18,31,0.08),transparent_50%,rgba(8,18,31,0.05))]" />

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-slate-950/20 to-transparent" />

      {/* Premium Badge */}
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-800 shadow-lg backdrop-blur-md sm:left-6 sm:top-6">
        <Sparkles className="h-3.5 w-3.5 text-lime-600" />
        Premium Nutrition
      </div>

    </div>
  </div>

  {/* Play Button */}
  <button
    type="button"
    aria-label="Play company story video"
    className="absolute right-2 top-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-white/80 text-slate-950 shadow-[0_18px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-lime-300 sm:right-4 sm:top-6 sm:h-16 sm:w-16"
  >
    <span className="absolute inset-1 rounded-full border border-lime-400/30" />
    <Play className="relative ml-1 h-5 w-5 fill-current" />
  </button>

  {/* Previous Button */}
  <button
    type="button"
    aria-label="Previous slide"
    onClick={previousSlide}
    className="absolute left-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-white/70 bg-white/80 text-slate-800 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-lime-300 sm:left-3 sm:h-12 sm:w-12"
  >
    <ChevronLeft className="h-5 w-5" />
  </button>

  {/* Next Button */}
  <button
    type="button"
    aria-label="Next slide"
    onClick={nextSlide}
    className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-white/70 bg-white/80 text-slate-800 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-lime-300 sm:right-3 sm:h-12 sm:w-12"
  >
    <ChevronRight className="h-5 w-5" />
  </button>

  {/* Slide Dots */}
  <div className="absolute bottom-[-1.25rem] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/80 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-md">
    {slides.map((item, index) => (
      <button
        key={item.eyebrow}
        type="button"
        aria-label={`Go to slide ${index + 1}`}
        onClick={() => setCurrent(index)}
        className={`h-2 rounded-full transition-all duration-300 ${
          current === index
            ? "w-8 bg-lime-500"
            : "w-2 bg-slate-300 hover:bg-slate-400"
        }`}
      />
    ))}
  </div>

</div>
        </div>
      </div>

      {/* CATALOG RIBBON */}
      <div
        id="catalog"
        className="relative border-t border-white/70 bg-slate-950 text-white"
      >
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-lime-300">
              Urja Product Collection
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Explore Max Magic, Milk-O, Malt Plus and Supreme Gold feed solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href={CATALOG_PATH}
              download="Urja_Cattle_Feeds_Catalog.pdf"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-lime-300 px-4 py-3 text-xs font-extrabold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-200"
            >
              Download Catalog
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* CATALOG VIEWER */}
      {catalogOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Urja product catalog"
          onClick={() => setCatalogOpen(false)}
        >
          <div
            className="flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Viewer header */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-[#eff8e6] px-4 py-3 sm:px-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-lime-700">
                  Urja Foods & Agro
                </p>
                <h3 className="mt-0.5 text-base font-extrabold text-slate-900 sm:text-lg">
                  Product Catalog
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={CATALOG_PATH}
                  download="Urja_Cattle_Feeds_Catalog.pdf"
                  className="hidden items-center gap-2 rounded-xl bg-slate-900 px-3.5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-lime-500 hover:text-slate-950 sm:inline-flex"
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>

                <button
                  type="button"
                  onClick={() => setCatalogOpen(false)}
                  aria-label="Close catalog"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <div className="min-h-0 flex-1 bg-slate-100 p-2 sm:p-3">
              <iframe
                title="Urja Product Catalog"
                src={`${CATALOG_PATH}#view=FitH`}
                className="h-full w-full rounded-2xl border border-slate-200 bg-white"
              />
            </div>

            {/* Viewer footer */}
            <div className="flex flex-col gap-2 border-t border-slate-200 bg-white px-4 py-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-xs text-slate-500">
                View the complete catalog here or download the PDF for offline use.
              </p>

              <a
                href={CATALOG_PATH}
                download="Urja_Cattle_Feeds_Catalog.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-2.5 text-xs font-bold text-slate-950 transition-all duration-300 hover:bg-lime-300"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
