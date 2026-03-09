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

          {images.map((src, index) => (
            <div key={index} className={`${getColumnClass(index)} gallery-item`}>
              <a href={src} className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src={src}
                      className="img-fluid mx-auto d-block"
                      alt={`gallery-${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
