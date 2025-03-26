import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import JointVenturesBanner from "./joint-ventures-banner";
import JointVenturesForm from "./joint-ventures-form";
import HomeReservation from "../home-component/home-reservation";
function JointVenturesPage() {
  return (
    <Fragment>
      <Header />
      <JointVenturesBanner />
      <JointVenturesForm />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default JointVenturesPage;
