import React from "react";
import UrjaHero from "../components/UrjaHero";
import HomeAboutSection from "../components/home/HomeAboutSection";
import HomeBusinessSection from "../components/home/HomeBusinessSection";
import HomeServicesSection from "../components/home/HomeServicesSection";
import HomeCorporateBanner from "../components/home/HomeCorporateBanner";
import HomeContactCta from "../components/home/HomeContactCta";
import BrandShowcase from "../components/home/BrandShowcase";
import HomeProductSection from "../components/home/HomeProductSection";

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <UrjaHero />

      {/* ABOUT PREVIEW SECTION */}
      <HomeAboutSection />

      {/* Business PREVIEW SECTION */}
      <HomeBusinessSection />

       {/* Product PREVIEW SECTION */}
      <HomeProductSection />

      {/* SERVICES HIGHLIGHT SECTION */}
      <HomeServicesSection />

      {/* CORPORATE BANNER */}
      <HomeCorporateBanner />

     {/* Brand BANNER */}
    <BrandShowcase />

      {/* CONTACT CALL TO ACTION */}
      <HomeContactCta />
    </div>
  );
}
