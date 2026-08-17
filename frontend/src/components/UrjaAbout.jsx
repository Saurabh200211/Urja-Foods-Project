import React from "react";
import AboutHero from "./about/AboutHero";
import AboutStats from "./about/AboutStats";
import AboutJourney from "./about/AboutJourney";
import AboutValues from "./about/AboutValues";
import AboutBusinessOverview from "./about/AboutBusinessOverview";

export default function UrjaAbout() {
  return (
    <main id="about" className="overflow-hidden bg-white text-slate-900">
      <AboutHero />
      <AboutStats />
      <AboutJourney />
      <AboutValues />
      <AboutBusinessOverview />
    </main>
  );
}