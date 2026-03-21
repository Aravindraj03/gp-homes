import React from "react";
import { Link } from "react-router-dom";
import credaiThumb from "../../assets/img/gallery/gallery-1.jpeg";




  const ImageGallery = ({ images, showCredaiButton }) => {
  const getColumnClass = (index) => {
    if (index >= 3 && index < 5) return "col-md-6";
    return "col-md-4";
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          {/* Title */}
          <div className="col-md-12">
            <div className="section-subtitle">Images</div>
            <div className="section-title">Image Gallery</div>
          </div>

        {showCredaiButton && (
          <div className="col-md-12 d-flex justify-content-center">
  <div className="col-md-4 gallery-item">
    <Link to="/gallery/credai-images" className="gallery-folder">
      <div className="folder-card">
        <div className="folder-tab"></div>

        <div className="folder-body">
          <img src={credaiThumb} alt="Credai Images" />
          <div className="folder-overlay">
            <h5>CREDAI Images</h5>
            <span>See more</span>
          </div>
        </div>
      </div>
    </Link>
  </div>
</div>
        )}
<div className="insta-grid-custom">

  {/* Top Row (3 images) */}
  <div className="insta-row top-row">
    {images.slice(0, 3).map((src, index) => (
      <div key={index} className="insta-card">
        <img src={src} alt={`insta-${index}`} />
        <div className="insta-overlay">
          <i className="ti-instagram"></i>
        </div>
      </div>
    ))}
  </div>

  {/* Bottom Row (2 centered images) */}
  <div className="insta-row bottom-row">
    {images.slice(3, 5).map((src, index) => (
      <div key={index} className="insta-card">
        <img src={src} alt={`insta-${index}`} />
        <div className="insta-overlay">
          <i className="ti-instagram"></i>
        </div>
      </div>
    ))}
  </div>

</div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
