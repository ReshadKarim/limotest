import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";
import HeroServices from "../components/HeroServices";

function Services() {
  return (
    <div>
      <Navbar />
      <HeroServices />
      <ServiceList />
      <Footer />
    </div>
  );
}

export default Services;
