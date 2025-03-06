import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import PrivacyBanner from "./privacy-banner";
import PrivacyPolicies from "./privacy-policies";
import { Helmet } from "react-helmet-async";

import HomeReservation from "../home-component/home-reservation";

function PrivacyPage() {
  return (
    <Fragment>
      <Helmet>
        <title>
        Privacy Policy - GP Homes
        </title>
        <meta
          name="description"
          content="Read GP Homes' Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy and security are our top priorities."
        />
      </Helmet>
      <Header />
      <PrivacyBanner />
      <PrivacyPolicies />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default PrivacyPage;
