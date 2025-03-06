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
        Testimonials - GP Homes
        </title>
        <meta
          name="description"
          content="Read what our happy homeowners say about GP Homes. Discover real experiences and testimonials from satisfied customers who found their dream homes with us."
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
