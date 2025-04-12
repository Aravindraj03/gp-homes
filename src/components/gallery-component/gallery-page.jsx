import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import GalleryBanner from "./gallery-banner";
import ImageGallery from "./image-gallery";
import VideoGallery from "./video-gallery";

import HomeReservation from "../home-component/home-reservation";
function GalleryPage() {
  return (
    <Fragment>
      <Header />
      <GalleryBanner />
      <ImageGallery />
      {/* <VideoGallery /> */}
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default GalleryPage;
