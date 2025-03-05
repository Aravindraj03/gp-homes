import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import AboutBanner from "./about-banner";
import AboutSection from "./about-section";
import AboutPricing from "./about-pricing";
import AboutFacilities from "./about-facilities";
import AboutTeam from "./about-team";
import AboutTestimonials from "./about-testimonials";
import { Helmet } from "react-helmet-async";

function AboutPage() {
  return (
    <Fragment>

      <Helmet>
        <title>About us - GP Homes</title>
        <meta
          name="description"
          content="Learn about GP Homes, leading real estate developers and builders in Chennai. We offer quality apartments, flats, and residential projects designed for modern living."
        />
      </Helmet>

      <Header />
      <AboutBanner />
      <AboutSection />
      <AboutPricing />
      <AboutFacilities />
      <AboutTeam />
      <AboutTestimonials />
      <Footer />
    </Fragment>
  );
}

export default AboutPage;
