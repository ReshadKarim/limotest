import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroContactUS from "../components/HeroContactUS";
import ContactForm from "../components/ContactForm";
import MapComponent from "../components/MapComponent";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <HeroContactUS />
      <ContactForm />
      <MapComponent />
      <Footer />
    </div>
  );
}

export default ContactUs;
