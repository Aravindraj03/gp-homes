import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import ContactBanner from "./contact-banner";
import ContactForm from "./contact-form";
import HomeReservation from "../home-component/home-reservation";
import { Helmet } from "react-helmet-async";
function ContactPage() {
  return (
    <Fragment>
      <Helmet>
        <title>
        Contact us - GP Homes
        </title>
        <meta
          name="description"
          content="Get in touch with GP Homes for inquiries about our projects, bookings, and more. Contact us today for expert assistance in finding your dream home in Chennai."
        />
      </Helmet>
      <Header />
      <ContactBanner />
      <ContactForm />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default ContactPage;
