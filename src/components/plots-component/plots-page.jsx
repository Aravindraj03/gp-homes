import React, { Fragment } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import AparmentBanner from "./plots-banner";
import ApartmentDetails from "./plots-details";
// import ContactBanner from "./contact-banner";
// import ContactForm from "./contact-form";
import HomeReservation from "../home-component/home-reservation";
import { Helmet } from "react-helmet-async";
import MetaTags from "../common/metaTags";
import { useParams } from "react-router-dom";

const plotsData = {
  "gp-midway-avenue": {
    title: "GP Midway Avenue- Buy Residential Plots, Land for Sale in Athipet",
    description: "GP Midway Avenue offers premium residential plots and CMDA-approved land for sale in Athipet. Secure your dream property in a prime location. Enquire now!"
  },
  "gp-garden-bay": {
    title: "GP Garden Bay- Buy Residential Plots, Land for Sale in Kolathur",
    description: "GP Garden Bay offers premium residential plots and CMDA-approved land for sale in Kolathur. Build your dream home in a prime location. Enquire now!"
  },
  "gp-ethulia": {
    title: "GP Ethulia- Buy Residential Plots, Land for Sale in Mogappair",
    description: "GP Ethulia offers premium residential plots and CMDA-approved land for sale in Mogappair. Secure your ideal plot in a prime location. Enquire now!"
  },
  "gp-nanmanai": {
    title: "GP Nanmanai- Buy Residential Plots, Land for Sale in Redhills",
    description: "GP Nanmanai offers premium residential plots and CMDA-approved land for sale in Redhills. Invest in a prime location for your dream home. Enquire now!"
  },
  "gp-vijayalakshmi": {
    title: "GP Vijayalakshmi- Buy Residential Plots, Land for Sale in Thiruvallur",
    description: "GP Vijayalakshmi offers premium residential plots and CMDA-approved land for sale in Thiruvallur. Secure your dream home location today. Enquire now!"
  }
};

function PlotsPage() {

    const { slug } = useParams();
    const meta = plotsData[slug] || {
      title: "Buy Residential Plots, CMDA Approved Land for Sale in Chennai",
      description: " GP Homes offers CMDA-approved residential plots and land for sale in Chennai. Invest in prime locations with top amenities. Secure your dream property today!"
    };

  return (
    <Fragment>
      <MetaTags title={meta.title} description={meta.description} />
      {/* <Helmet>
        <title>
        Buy Residential Plots, CMDA Approved Land for Sale in Chennai
        </title>
        <meta
          name="description"
          content="Looking for CMDA-approved plots in Chennai? GP Homes offers prime residential land for sale with clear titles, great locations, and high investment potential. Secure yours today!"
        />
      </Helmet> */}
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
