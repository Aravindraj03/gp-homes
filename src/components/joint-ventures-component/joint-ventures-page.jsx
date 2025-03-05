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
        <title>
        Join Ventures - GP Homes
        </title>
        <meta
          name="description"
          content="Partner with GP Homes through exciting joint ventures. Collaborate with leading real estate developers in Chennai for innovative and successful projects."
        />
      </Helmet>
      <Header />z
      <JointVenturesBanner />
      <JointVenturesForm />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default JointVenturesPage;
