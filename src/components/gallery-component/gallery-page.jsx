import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import GalleryBanner from "./gallery-banner";
import ImageGallery from "./image-gallery";
import VideoGallery from "./video-gallery";


import galleryimg1 from "../../assets/img/gallery/gallery10.jpeg";
import galleryimg2 from "../../assets/img/gallery/gallery11.jpeg";
import galleryimg3 from "../../assets/img/gallery/gallery12.jpeg";
import galleryimg4 from "../../assets/img/gallery/gallery13.png";
import galleryimg5 from "../../assets/img/gallery/gallery14.png";
// import galleryimg6 from "../../assets/img/gallery/gallery-blazingstar.jpg";
// import galleryimg7 from "../../assets/img/gallery/gallery-Elanza.jpg";
// import galleryimg8 from "../../assets/img/gallery/gallery-Ruby.jpg";


import HomeReservation from "../home-component/home-reservation";
function GalleryPage() {
  const galleryImages = [
  galleryimg1,
  galleryimg2,
  galleryimg3,
  galleryimg4,
  galleryimg5,
  // galleryimg6,
  // galleryimg7,
  // galleryimg8,
];

  return (
    <Fragment>
      <Header />
      <GalleryBanner />
      <ImageGallery images={galleryImages} showCredaiButton={true}/>
      {/* <VideoGallery /> */}
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default GalleryPage;
