import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import FAQBanner from "./faq-banner";
import FAQs from "./faqs";
import HomeReservation from "../home-component/home-reservation";

function FAQPage() {
  return (
    <Fragment>
      <Header />
      <FAQBanner />
      <FAQs />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default FAQPage;
