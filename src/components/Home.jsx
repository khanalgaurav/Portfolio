import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
const Home = () => {
  return (
    <>
      <div className="md:mx-20">
        <div className="h-screen">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
