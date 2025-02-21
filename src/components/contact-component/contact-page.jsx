import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import ContactBanner from "./contact-banner";
import ContactForm from "./contact-form";
import HomeReservation from "../home-component/home-reservation";

function ContactPage() {
  return (
    <Fragment>
      <Header />
      <ContactBanner />
      <ContactForm />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default ContactPage;
