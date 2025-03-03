import React, { Fragment } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import AparmentBanner from "./plots-banner";
import ApartmentDetails from "./plots-details";
// import ContactBanner from "./contact-banner";
// import ContactForm from "./contact-form";
import HomeReservation from "../home-component/home-reservation";
import { Helmet } from "react-helmet-async";

function PlotsPage() {
  return (
    <Fragment>
      <Helmet>
        <title>
        Buy Residential Plots, CMDA Approved Land for Sale in Chennai
        </title>
        <meta
          name="description"
          content="Looking for CMDA-approved plots in Chennai? GP Homes offers prime residential land for sale with clear titles, great locations, and high investment potential. Secure yours today!"
        />
      </Helmet>
      <Header />
      <AparmentBanner />
      <ApartmentDetails />
      {/* <ContactBanner />
      <ContactForm /> */}
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default PlotsPage;
