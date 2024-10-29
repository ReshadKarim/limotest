import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroContactUS from "../components/HeroContactUS";
import HeroAboutLimoLead from "../components/HeroAboutLimoLead";
import SomeOfOurEvents from "../components/SomeOfOurEvents";
import LimoLeadTeam from "../components/LimoLeadTeam";
import OurJourney from "../components/OurJourney";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <HeroAboutLimoLead />
      <OurJourney />
      <LimoLeadTeam />
      <SomeOfOurEvents />
      <Footer />
    </div>
  );
}

export default AboutUs;
