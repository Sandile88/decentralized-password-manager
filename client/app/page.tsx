import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
    <section id="hero" >
      <Hero/>
    </section>
    <section>
      <Footer/>
    </section>
    </>
  );
};

export default LandingPage;