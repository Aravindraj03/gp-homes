import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import GalleryBanner from "./gallery-banner";
import ImageGallery from "./image-gallery";
import VideoGallery from "./video-gallery";

import HomeReservation from "../home-component/home-reservation";
import { Helmet } from "react-helmet-async";
function GalleryPage() {
  return (
    <Fragment>
      <Helmet>
        <title>
        GP Homes Project Gallery – Luxury Apartments & Plots in Chennai
        </title>
        <meta
          name="description"
          content="Explore the GP Homes gallery featuring our premium residential projects, modern apartments, and CMDA-approved plots in Chennai’s top locations."
        />
      </Helmet>
      <Header />
      <GalleryBanner />
      <ImageGallery />
      <VideoGallery />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default GalleryPage;
