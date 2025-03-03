import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import TestimonialsBanner from "./testimonials-banner";
import Testimonials from "./testimonials";
import HomeReservation from "../home-component/home-reservation";
import { Helmet } from "react-helmet-async";
function TestimonialsPage() {
  return (
    <Fragment>
      <Helmet>
        <title>
        GP Homes Reviews – Trusted Builder in Chennai
        </title>
        <meta
          name="description"
          content="Hear from happy homeowners who chose GP Homes for quality construction, timely delivery, and transparent real estate services. Read our customer testimonials now!"
        />
      </Helmet>
      <Header />
      <TestimonialsBanner />
      <Testimonials />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default TestimonialsPage;
