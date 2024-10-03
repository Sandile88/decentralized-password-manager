import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Services from "../components/Services";
import HowTo from "../components/HowTo";

const LandingPage = () => {
  return (
    <>
    <Hero/>
    <Services/>
    <HowTo/>
      <Footer/>
    </>
  );
};

export default LandingPage;