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
        Gallery -  GP Homes
        </title>
        <meta
          name="description"
          content="Explore the GP Homes gallery showcasing our beautifully designed apartments, flats, and residential projects in Chennai. Discover your dream home with us today!"
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
