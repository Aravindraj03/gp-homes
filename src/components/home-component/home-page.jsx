import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import BannerSlider from "./home-banner";
import BookingSearch from "./booking-search";
import HomeAbout from "./home-about";
import HomeProjects from "./home-projects";
import HomePricing from "./home-pricing";
import HomePromoVideo from "./home-promo-video";
import HomeFacilities from "./home-facilities";
import HomeTestimonials from "./home-testimonials";
import HomeServices from "./home-services";
// import NewsSection from "./home-news";
import HomeReservation from "./home-reservation";
import HomeClients from "./home-clients";
import HomeLogoMarquee from "./time-ticker";
import { Helmet } from "react-helmet-async";


function HomePage() {
  return (
    <Fragment>

      <Helmet>
        <title>GP Homes: Top Real Estate Developers, Builders in Chennai</title>
        <meta
          name="description"
          content="GP Homes – Leading real estate developers & builders in Chennai, delivering premium homes with quality, innovation & trust. Find your dream home today!"
        />
      </Helmet>

      <Header />
      <BannerSlider />
      <HomeLogoMarquee />
      {/* <BookingSearch /> */}
      {/* <HomeAbout /> */}
      <HomeProjects />
      {/* <HomePricing /> */}
      <HomePromoVideo />
      <HomeFacilities />
      <HomeTestimonials />
      {/* <HomeServices /> */}
      {/* <NewsSection /> */}
      <HomeReservation />
      {/* <HomeClients /> */}
      <Footer />
    </Fragment>
  );
}

export default HomePage;
