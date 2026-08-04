import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import credaiThumb from "../../assets/img/gallery/gallery-1.jpeg";

const ImageGallery = ({ images, showCredaiButton }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((img) => ({
    src: img,
  }));

  return (
    <>
      <section className="section-padding gallery-section">
        <div className="container">

          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className="section-subtitle">
                Images
              </div>

              <h2 className="section-title">
                Image Gallery
              </h2>
            </div>
          </div>

          {showCredaiButton && (
            <div className="row justify-content-center mb-5">

              <div className="col-lg-4 col-md-6">

                <Link
                  to="/gallery/credai-images"
                  className="gallery-folder"
                >
                  <div className="folder-card">

                    <div className="folder-tab"></div>

                    <div className="folder-body">

                      <img
                        src={credaiThumb}
                        alt="Credai"
                      />

                      <div className="folder-overlay">
                        <h5>CREDAI Images</h5>
                        <span>View Gallery</span>
                      </div>

                    </div>

                  </div>
                </Link>

              </div>

            </div>
          )}

          <div className="gallery-grid">

            {images.map((image, i) => (

              <div
                key={i}
                className="gallery-item"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >

                <img
                  src={image}
                  alt=""
                  loading="lazy"
                />

                <div className="gallery-hover">

                  <i className="ti-zoom-in"></i>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </>
  );
};

export default ImageGallery;