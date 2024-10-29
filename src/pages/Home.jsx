import React from "react";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import ImpProducts from "../components/ImpProducts";
import Seamless from "../components/Seamless";
import ElegantWords from "../components/ElegantWords";
import Footer from "../components/Footer";
import SolutionsSection from "../components/SolutionSections";
import PricingComponent from "../components/PricingComponent";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Partners />
      <PricingComponent />
      <ImpProducts />
      <Seamless />
      <SolutionsSection />
      <ElegantWords />
      <Footer />
    </div>
  );
}

export default Home;
