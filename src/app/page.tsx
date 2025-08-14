import React from "react";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import CaseStudies from "@/components/Home/CaseStudies";
import Expertise from "@/components/Home/Expertise";
import Director from "@/components/Home/Director";
import Corporate from "@/components/Home/Corporate";
import { Metadata } from "next";
import Contact from "@/components/Home/Contact";
export const metadata: Metadata = {
  title: "YouMind | ビジネスの課題を技術で解決するWebソリューションパートナー",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CaseStudies />
      <Expertise />
      <Director />
      <Corporate />
      <Contact />
    </main>
  );
}
