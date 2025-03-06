import React, { Fragment } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import AparmentBanner from "./apartment-banner";
import ApartmentDetails from "./apartment-details";
// import ContactBanner from "./contact-banner";
// import ContactForm from "./contact-form";
import HomeReservation from "../home-component/home-reservation";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import MetaTags from "../common/metaTags";
const apartmentsData = {
  "gp-blazing-star": {
    title: " GP Blazing Star- Buy 2BHK, 3BHK Apartments, Flats in Porur",
    description: "GP Blazing Star offers premium 2BHK & 3BHK apartments in Porur. Find your dream home with modern amenities in a prime location. Explore now!"
  },
  "gp-breeze-way": {
    title: "GP Breeze Way- Buy 2BHK, 3BHK Apartments, Flats in Menambedu",
    description: "GP Breeze Way offers premium 2BHK & 3BHK apartments in Menambedu. Find your dream home with top amenities in a prime location. Explore now!"
  },
  "gp-homes-elanza": {
    title: "GP Elanza- Buy 2BHK, 3BHK Apartments, Flats in Madhanadhapuram",
    description: "GP Elanza offers premium 2BHK & 3BHK apartments in Madhanadhapuram. Experience luxury living with top amenities in a prime location. Explore now!"
  },
  "gp-valencia-emarald": {
    title: " GP Valencia Emarald- Buy 2BHK, 3BHK Apartments, Flats in Ayanambakkam",
    description: "GP Valencia Emerald offers premium 2BHK & 3BHK apartments in Ayanambakkam. Experience luxury living with modern amenities in a prime location. Explore now!"
  },
  "gp-valencia-rub": {
    title: "GP Homes Valencia Ruby- Buy 2BHK, 3BHK Apartments, Flats in Ayanambakkam",
    description: "GP Homes Valencia Ruby offers luxurious 2BHK & 3BHK apartments in Ayanambakkam. Find your dream home with modern amenities in a prime location. Enquire now!"
  }
};
function ApartmentPage() {

  const { slug } = useParams();
  const meta = apartmentsData[slug] || {
    title: " Buy 1BHK, 2BHK, 3BHK Apartments, Flats for Sale in Chennai",
    description: "GP Homes offers 1BHK, 2BHK, and 3BHK apartments and flats for sale in Chennai. Find your dream home with top amenities in prime locations. Enquire now!"
  };
  return (
    <Fragment>
      <MetaTags title={meta.title} description={meta.description} />
      {/* <Helmet>
        <title>Buy 1BHK, 2BHK, 3BHK Apartments, Flats for Sale in Chennai</title>
        <meta
          name="description"
          content="GP Homes offers 1BHK, 2BHK, and 3BHK apartments and flats for sale in Chennai. Find your dream home with top amenities in prime locations. Enquire now!"
        />
      </Helmet> */}
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
