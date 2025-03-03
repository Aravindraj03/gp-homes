import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import JointVenturesBanner from "./joint-ventures-banner";
import JointVenturesForm from "./joint-ventures-form";
import HomeReservation from "../home-component/home-reservation";
import { Helmet } from "react-helmet-async";
function JointVenturesPage() { 
  return (
    <Fragment>
      <Helmet>
              <title>Joint Venture Real Estate Development in Chennai – GP Homes</title>
              <meta
                name="description"
                content="Partner with GP Homes for joint venture collaborations in Chennai. We bring expertise, resources, and innovation to create profitable real estate developments together."
              />
            </Helmet>
      <Header />
      <JointVenturesBanner />
      <JointVenturesForm />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default JointVenturesPage;
