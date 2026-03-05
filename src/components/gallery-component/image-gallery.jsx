import React from "react";
import { Link } from "react-router-dom";




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
          <div className="col-md-12 text-center mb-4">
        <Link to="/gallery/credai-images" className="credai-btn">
          CREDAI Images
        </Link>
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
