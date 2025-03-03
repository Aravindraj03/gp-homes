import React, { Fragment } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import AparmentBanner from "./apartment-banner";
import ApartmentDetails from "./apartment-details";
// import ContactBanner from "./contact-banner";
// import ContactForm from "./contact-form";
import HomeReservation from "../home-component/home-reservation";
import { Helmet } from "react-helmet-async";

function ApartmentPage() {
  return (
    <Fragment>
      <Helmet>
        <title>Buy 1BHK, 2BHK, 3BHK Apartments, Flats for Sale in Chennai</title>
        <meta
          name="description"
          content="Find premium 1BHK, 2BHK, and 3BHK flats for sale in Chennai’s prime locations. GP Homes offers affordable luxury apartments with top-notch construction and timely handovers."
        />
      </Helmet>
      <Header />
      <AparmentBanner/>
      <ApartmentDetails />
      {/* <ContactBanner />
      <ContactForm />*/}
      <HomeReservation /> 
      <Footer />
    </Fragment>
  );
}

export default ApartmentPage;
