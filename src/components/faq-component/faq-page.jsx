import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import FAQBanner from "./faq-banner";
import FAQs from "./faqs";
import HomeReservation from "../home-component/home-reservation";
import { Helmet } from "react-helmet-async";
function FAQPage() {
  return (
    <Fragment>
      <Helmet>
        <title>
        Real Estate FAQs – GP Homes Chennai
        </title>
        <meta
          name="description"
          content="Have questions about buying a home or investing in real estate? Browse our FAQs for answers on GP Homes projects, CMDA approvals, pricing, and more."
        />
      </Helmet>
      <Header />
      <FAQBanner />
      <FAQs />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default FAQPage;
