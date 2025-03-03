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
        <title>About GP Homes – Leading Real Estate Developers in Chennai</title>
        <meta
          name="description"
          content="Discover GP Homes, a trusted real estate builder in Chennai with over 20 years of expertise. We specialize in crafting quality homes with transparency and on-time delivery."
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
