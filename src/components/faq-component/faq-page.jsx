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
        FAQ’s - GP Homes
        </title>
        <meta
          name="description"
          content="Find answers to common questions about GP Homes, our projects, buying process, and more. Explore our FAQs for detailed information and expert guidance."
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
