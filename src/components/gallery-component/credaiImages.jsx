import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import GalleryBanner from "./gallery-banner";
import ImageGallery from "./image-gallery";

import galleryimg9 from "../../assets/img/gallery/gallery-1.jpeg";
import galleryimg10 from "../../assets/img/gallery/gallery-2.jpeg";
import galleryimg11 from "../../assets/img/gallery/gallery-3.jpeg";
import galleryimg12 from "../../assets/img/gallery/gallery-4.jpeg";
import galleryimg13 from "../../assets/img/gallery/gallery-5.jpeg";
import galleryimg14 from "../../assets/img/gallery/gallery-6.jpeg";
import galleryimg15 from "../../assets/img/gallery/gallery-7.jpeg";
import galleryimg16 from "../../assets/img/gallery/gallery-8.jpeg";
import galleryimg17 from "../../assets/img/gallery/gallery-9.jpeg";

const credaiImages = () => {

  const credaiImagesList = [
    galleryimg9,
    galleryimg10,
    galleryimg11,
    galleryimg12,
    galleryimg13,
    galleryimg14,
    galleryimg15,
    galleryimg16,
    galleryimg17,
  ];

  return (
    <>
      <Header />
      <GalleryBanner />
      <ImageGallery images={credaiImagesList} />
      <Footer />
    </>
  );
};

export default credaiImages;