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
import galleryimg5i from "../../assets/img/gallery/galleryimg15.jpeg";
import galleryimg6 from "../../assets/img/gallery/galleryimg16.jpeg";
import galleryimg7 from "../../assets/img/gallery/galleryimg17.jpeg";
import galleryimg8 from "../../assets/img/gallery/galleryimg18.jpeg";
import galleryimg9 from "../../assets/img/gallery/galleryimg19.jpeg";
import galleryimg10 from "../../assets/img/gallery/galleryimg20.jpeg";
import galleryimg11 from "../../assets/img/gallery/galleryimg21.jpeg";
import galleryimg12 from "../../assets/img/gallery/galleryimg22.jpeg";
import galleryimg13 from "../../assets/img/gallery/galleryimg23.jpeg";
import galleryimg14 from "../../assets/img/gallery/galleryimg24.jpeg";
import galleryimg15 from "../../assets/img/gallery/galleryimg25.jpeg";
import galleryimg16 from "../../assets/img/gallery/galleryimg26.jpeg";
import galleryimg17 from "../../assets/img/gallery/galleryimg27.jpeg";
import galleryimg18 from "../../assets/img/gallery/galleryimg28.jpeg";
import galleryimg19 from "../../assets/img/gallery/galleryimg29.jpeg";
import galleryimg20 from "../../assets/img/gallery/galleryimg30.jpeg";
import galleryimg21 from "../../assets/img/gallery/galleryimg31.jpeg";
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
  galleryimg13,
  galleryimg5i,
  galleryimg6,
  galleryimg7,
  galleryimg8,
  galleryimg9,
  galleryimg10,
  galleryimg11,
  galleryimg12,
  galleryimg14,
  galleryimg16,
  galleryimg17,
  galleryimg18,
  galleryimg19,
  galleryimg20,
  galleryimg21,
  galleryimg15,
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
