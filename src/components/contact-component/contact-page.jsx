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
        Contact GP Homes – Chennai’s Top Real Estate Developers
        </title>
        <meta
          name="description"
          content="Get in touch with GP Homes for inquiries about apartments, plots, and joint ventures. Call us or visit our office for expert real estate assistance."
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
