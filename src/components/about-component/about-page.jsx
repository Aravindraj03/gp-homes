import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import AboutBanner from "./about-banner";
import AboutSection from "./about-section";
import AboutPricing from "./about-pricing";
import AboutFacilities from "./about-facilities";
import AboutTeam from "./about-team";
import AboutTestimonials from "./about-testimonials";

function AboutPage() {
  return (
    <Fragment>
      <Header />
      <AboutBanner />
      <AboutSection />
      {/* <AboutPricing /> */}
      <AboutTeam />
      <AboutFacilities />
      <AboutTestimonials />
      <Footer />
    </Fragment>
  );
}

export default AboutPage;
