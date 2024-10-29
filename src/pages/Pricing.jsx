import React from "react";
import HeroPricing from "../components/HeroPricing";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingSection from "../components/PricingSection";

function Pricing() {
  return (
    <div>
      <Navbar />
      <HeroPricing />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default Pricing;
