import React, { Fragment } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import AparmentBanner from "./plots-banner";
import ApartmentDetails from "./plots-details";
// import ContactBanner from "./contact-banner";
// import ContactForm from "./contact-form";
// import HomeReservation from "../home-component/home-reservation";

function PlotsPage() {
  return (
    <Fragment>
      <Header />
      <AparmentBanner/>
      <ApartmentDetails />
      {/* <ContactBanner />
      <ContactForm />
      <HomeReservation /> */}
      <Footer />
    </Fragment>
  );
}

export default PlotsPage;
