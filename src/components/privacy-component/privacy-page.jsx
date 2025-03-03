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
        Privacy Policy – GP Homes Real Estate Chennai
        </title>
        <meta
          name="description"
          content="Learn how GP Homes handles your personal data and ensures your privacy when you visit our website or inquire about our real estate services."
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
