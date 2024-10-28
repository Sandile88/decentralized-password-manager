import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import HowTo from "@/components/HowTo";
import CTA from "@/components/CTA";

const LandingPage = () => {
  return (
    <>
    <Hero/>
    <Services/>
    <HowTo/>
    <CTA/>
    <Footer/>
    </>
  );
};

export default LandingPage;