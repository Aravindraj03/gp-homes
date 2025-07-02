import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import AboutBanner from "./about-banner";
import AboutSection from "./about-section";
import AboutPricing from "./about-Owner";
import AboutFacilities from "./about-facilities";
import AboutTeam from "./about-team";
import AboutTestimonials from "./about-testimonials";
import AbouTimeline from "./about-Timeline";
import Aboutmission from "./about-mission";


function AboutPage() {
  return (
    <Fragment>

      <Header />
      <AboutBanner />
      <AboutSection />
      <AbouTimeline />
      <AboutPricing />
      {/* <AboutTeam /> */}
      {/* <Aboutmission /> */}
      <AboutFacilities />
      <AboutTestimonials />
      <Footer />
    </Fragment>
  );
}

export default AboutPage;