import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import TestimonialsBanner from "./testimonials-banner";
import Testimonials from "./testimonials";
import HomeReservation from "../home-component/home-reservation";
function TestimonialsPage() {
  return (
    <Fragment>
      <Header />
      <TestimonialsBanner />
      <Testimonials />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default TestimonialsPage;
