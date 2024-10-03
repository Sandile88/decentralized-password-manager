import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Services from "../components/Services";

const LandingPage = () => {
  return (
    <>
    <section id="hero" >
      <Hero/>
    </section>
    <Services/>
    <section>
      <Footer/>
    </section>
    </>
  );
};

export default LandingPage;