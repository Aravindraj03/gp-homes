import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import PrivacyBanner from "./privacy-banner";
import PrivacyPolicies from "./privacy-policies";


import HomeReservation from "../home-component/home-reservation";

function PrivacyPage() {
  return (
    <Fragment>
      <Header />
      <PrivacyBanner />
      <PrivacyPolicies />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default PrivacyPage;
